# -*- coding: utf-8 -*-
"""Approval-flow capture via ApprovalService class patching.

The host approval service offers no event/observer seam (resolved
records are popped from its in-memory dict), so — following the
pattern of the bundled qwenpaw-pet plugin — the lifecycle methods are
wrapped on the process-wide singleton class. The patch is applied in
the plugin's startup hook (never at import time) and restored on
uninstall.

Other plugins (qwenpaw-pet) patch the same methods and capture our
wrappers as their originals, so plain capture-and-restore is unsafe in
non-LIFO order: restoring would strip their patch. Two safeguards:

* restore only replaces a method whose current class attribute is
  still our own wrapper — an outer patcher keeps working because it
  holds a direct reference to our wrapper;
* wrappers check their generation's ``active`` flag before recording,
  so a stale wrapper left in an outer patcher's chain becomes a
  pass-through after our uninstall instead of double-recording.
"""

from __future__ import annotations

import logging
from collections import OrderedDict
from typing import Any

from . import events as ev
from .service import get_service

logger = logging.getLogger("qwenpaw.plugins.agent_trace")

# Ask-time run ids are needed only until the matching decision. The
# GC eviction path removes pendings without any seam we can observe,
# so un-resolvable entries are bounded by evicting the oldest.
_ASKED_RUN_CAP = 1024

# State of the currently applied patch generation (wrappers, captured
# originals, active flag). ``None`` when not applied.
_state: dict | None = None

# request_id -> run_id of the run that was active when the approval
# was asked, so the decision event lands in the same run even when
# the decision is made from a different request (e.g. root console
# session deciding for a sub-agent).
_asked_run_by_request: OrderedDict = OrderedDict()


def _remember_asked(request_id: str, run_id: str) -> None:
    _asked_run_by_request[request_id] = run_id
    _asked_run_by_request.move_to_end(request_id)
    while len(_asked_run_by_request) > _ASKED_RUN_CAP:
        _asked_run_by_request.popitem(last=False)


def _active_run_id(session_id: Any) -> str:
    """Run id of the currently executing run, if it matches the file."""
    from .context import get_current_run

    run = get_current_run()
    if run is None:
        return ""
    if isinstance(session_id, str) and run.session_id != session_id:
        # Approval routed across sessions (e.g. root console deciding
        # for a sub-agent) — fall back to the remembered ask-time run.
        return ""
    return run.trace_id


def _run_id_for_decision(session_id: Any, request_id: str) -> str:
    """Ask-time run when known, else the currently active run."""
    return _asked_run_by_request.pop(request_id, None) or _active_run_id(
        session_id
    )


def _record(
    session_id: Any,
    event_type: str,
    data: dict,
    run_id: str = "",
) -> None:
    service = get_service()
    if service is None or not service.config.capture_approvals:
        return
    if not isinstance(session_id, str) or not session_id:
        return
    try:
        service.store.append(
            session_id,
            event_type,
            run_id,
            service.sanitize(data),
        )
    except Exception:  # pylint: disable=broad-except
        logger.debug(
            "agent-trace: approval event append failed",
            exc_info=True,
        )


def _decision_name(decision: Any) -> str:
    value = getattr(decision, "value", decision)
    return str(value)


def _pending_data(pending: Any) -> dict:
    extra = getattr(pending, "extra", None) or {}
    return {
        "request_id": getattr(pending, "request_id", ""),
        "session_id": getattr(pending, "session_id", ""),
        "root_session_id": getattr(pending, "root_session_id", ""),
        "agent_id": getattr(pending, "agent_id", ""),
        "channel": getattr(pending, "channel", ""),
        "tool_name": getattr(pending, "tool_name", ""),
        "severity": getattr(pending, "severity", ""),
        "findings_count": getattr(pending, "findings_count", 0),
        "summary": getattr(pending, "result_summary", ""),
        # ToolGuard pendings carry no source marker; summary-based ones
        # (driver gate, harness adapters, plugins) stash it in extra.
        "source_type": str(extra.get("source_type") or "tool_guard"),
    }


def _emit_asked(pending: Any) -> None:
    session_id = getattr(pending, "session_id", None)
    run_id = _active_run_id(session_id)
    request_id = getattr(pending, "request_id", "")
    if run_id and request_id:
        _remember_asked(request_id, run_id)
    _record(
        session_id,
        ev.EVENT_APPROVAL_ASKED,
        _pending_data(pending),
        run_id=run_id,
    )


def _snapshot_pending_for_tool_call(
    service: Any,
    session_id: str,
    tool_call_id: str,
) -> list:
    """Pending records the host ``cancel_stale`` scan will match.

    The host has no public read by tool-call id; ``_pending`` is read
    directly. The scan is await-free, so it is atomic on the
    single-threaded event loop. Any layout change degrades to an
    aggregate superseded event instead of breaking the flow.
    """
    try:
        return [
            p
            for p in service._pending.values()  # noqa: SLF001
            if p.session_id == session_id
            and p.status == "pending"
            and isinstance((p.extra or {}).get("tool_call"), dict)
            and p.extra["tool_call"].get("id") == tool_call_id
        ]
    except Exception:  # pylint: disable=broad-except
        return []


def apply_approval_patch() -> None:
    """Wrap ApprovalService lifecycle methods (idempotent)."""
    global _state
    if _state is not None:
        return
    try:
        from qwenpaw.app.approvals.service import ApprovalService
    except Exception:  # pylint: disable=broad-except
        logger.debug(
            "agent-trace: ApprovalService unavailable; "
            "approval capture disabled",
            exc_info=True,
        )
        return

    orig_create = ApprovalService.create_pending
    orig_create_summary = ApprovalService.create_pending_summary
    orig_resolve = ApprovalService.resolve_request
    orig_cancel_stale = ApprovalService.cancel_stale_pending_for_tool_call
    orig_cancel_all = ApprovalService.cancel_all_pending_by_root_session

    # Per-generation flag: flipped to False by restore, so wrappers
    # still referenced by an outer patcher's chain stop recording.
    state: dict = {"active": True}

    async def create_pending_wrapped(self, **kwargs: Any):  # noqa: ANN001
        pending = await orig_create(self, **kwargs)
        if state["active"]:
            try:
                _emit_asked(pending)
            except Exception:  # pylint: disable=broad-except
                logger.debug(
                    "agent-trace: asked wrapper failed",
                    exc_info=True,
                )
        return pending

    async def create_pending_summary_wrapped(  # noqa: ANN001
        self,
        **kwargs: Any,
    ):
        pending = await orig_create_summary(self, **kwargs)
        if state["active"]:
            try:
                _emit_asked(pending)
            except Exception:  # pylint: disable=broad-except
                logger.debug(
                    "agent-trace: asked (summary) wrapper failed",
                    exc_info=True,
                )
        return pending

    async def resolve_request_wrapped(  # noqa: ANN001
        self,
        request_id: str,
        decision: Any,
        scope: Any = None,
    ):
        pending = await orig_resolve(self, request_id, decision, scope)
        if state["active"] and pending is not None:
            try:
                data = _pending_data(pending)
                data["decision"] = _decision_name(decision)
                if scope is not None:
                    data["scope"] = str(getattr(scope, "value", scope))
                _record(
                    getattr(pending, "session_id", None),
                    ev.EVENT_APPROVAL_DECIDED,
                    data,
                    run_id=_run_id_for_decision(
                        getattr(pending, "session_id", None),
                        request_id,
                    ),
                )
            except Exception:  # pylint: disable=broad-except
                logger.debug(
                    "agent-trace: decided wrapper failed",
                    exc_info=True,
                )
        return pending

    async def cancel_stale_wrapped(  # noqa: ANN001
        self,
        session_id: str,
        tool_call_id: str,
    ) -> int:
        snapshot = (
            _snapshot_pending_for_tool_call(
                self,
                session_id,
                tool_call_id,
            )
            if state["active"]
            else []
        )
        count = await orig_cancel_stale(self, session_id, tool_call_id)
        if state["active"]:
            try:
                emitted = 0
                for pending in snapshot:
                    if getattr(pending, "status", "") != "superseded":
                        # Resolved inside the race window — its own
                        # decided event already exists.
                        continue
                    request_id = getattr(pending, "request_id", "")
                    data = _pending_data(pending)
                    data["decision"] = "superseded"
                    _record(
                        pending.session_id,
                        ev.EVENT_APPROVAL_DECIDED,
                        data,
                        run_id=_run_id_for_decision(
                            pending.session_id,
                            request_id,
                        ),
                    )
                    emitted += 1
                if count and not emitted:
                    _record(
                        session_id,
                        ev.EVENT_APPROVAL_DECIDED,
                        {
                            "decision": "superseded",
                            "count": count,
                            "tool_call_id": tool_call_id,
                            "session_id": session_id,
                        },
                        run_id=_active_run_id(session_id),
                    )
            except Exception:  # pylint: disable=broad-except
                logger.debug(
                    "agent-trace: supersede wrapper failed",
                    exc_info=True,
                )
        return count

    async def cancel_all_wrapped(  # noqa: ANN001
        self,
        root_session_id: str,
    ) -> int:
        pendings: list = []
        if state["active"]:
            try:
                # Public unwrapped read: exactly the records the host
                # cancel scan is about to hit, in their own sessions.
                pendings = await self.get_pending_by_root_session(
                    root_session_id,
                )
            except Exception:  # pylint: disable=broad-except
                pendings = []
        count = await orig_cancel_all(self, root_session_id)
        if state["active"]:
            try:
                emitted = 0
                for pending in pendings:
                    if getattr(pending, "status", "") != "cancelled":
                        continue
                    request_id = getattr(pending, "request_id", "")
                    data = _pending_data(pending)
                    data["decision"] = "cancelled"
                    _record(
                        pending.session_id,
                        ev.EVENT_APPROVAL_DECIDED,
                        data,
                        run_id=_run_id_for_decision(
                            pending.session_id,
                            request_id,
                        ),
                    )
                    emitted += 1
                if count and not emitted:
                    _record(
                        root_session_id,
                        ev.EVENT_APPROVAL_DECIDED,
                        {
                            "decision": "cancelled",
                            "count": count,
                            "root_session_id": root_session_id,
                        },
                        run_id=_active_run_id(root_session_id),
                    )
            except Exception:  # pylint: disable=broad-except
                logger.debug(
                    "agent-trace: cancel wrapper failed",
                    exc_info=True,
                )
        return count

    wrappers = {
        "create_pending": create_pending_wrapped,
        "create_pending_summary": create_pending_summary_wrapped,
        "resolve_request": resolve_request_wrapped,
        "cancel_stale_pending_for_tool_call": cancel_stale_wrapped,
        "cancel_all_pending_by_root_session": cancel_all_wrapped,
    }
    state["wrappers"] = wrappers
    state["originals"] = {
        "create_pending": orig_create,
        "create_pending_summary": orig_create_summary,
        "resolve_request": orig_resolve,
        "cancel_stale_pending_for_tool_call": orig_cancel_stale,
        "cancel_all_pending_by_root_session": orig_cancel_all,
    }
    for name, wrapper in wrappers.items():
        setattr(ApprovalService, name, wrapper)
    _state = state
    logger.info("agent-trace: approval capture patch applied")


def restore_approval_patch() -> None:
    """Restore the original ApprovalService methods.

    A method is restored only when the class attribute is still our
    own wrapper. When another patcher (qwenpaw-pet) wrapped on top, it
    holds a direct reference to our wrapper; replacing the attribute
    would silently strip its patch, so it is left untouched — the
    stale wrapper turns into a pass-through via ``active``.
    """
    global _state
    state = _state
    if state is None:
        return
    state["active"] = False
    _state = None
    _asked_run_by_request.clear()
    try:
        from qwenpaw.app.approvals.service import ApprovalService

        for name, wrapper in state["wrappers"].items():
            if getattr(ApprovalService, name, None) is wrapper:
                setattr(
                    ApprovalService,
                    name,
                    state["originals"][name],
                )
    except Exception:  # pylint: disable=broad-except
        logger.debug(
            "agent-trace: approval patch restore failed",
            exc_info=True,
        )
