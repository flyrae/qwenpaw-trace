# -*- coding: utf-8 -*-
"""Approval-flow capture via ApprovalService class patching.

The host approval service offers no event/observer seam (resolved
records are popped from its in-memory dict), so — following the
pattern of the bundled qwenpaw-pet plugin — the lifecycle methods are
wrapped on the process-wide singleton class. The patch is applied in
the plugin's startup hook (never at import time) and restored on
uninstall, and it chains safely with other patchers (qwenpaw-pet).
"""
from __future__ import annotations

import logging
from typing import Any, Optional

from . import events as ev
from .service import get_service

logger = logging.getLogger("qwenpaw.plugins.agent_trace")

_patched = False
_originals: dict = {}
# request_id -> run_id of the run that was active when the approval was
# asked, so the decision event lands in the same run even when the
# decision is made from a different request (e.g. root console session).
_asked_run_by_request: dict = {}


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
    }


async def _create_pending_wrapped(self, **kwargs: Any):  # noqa: ANN001
    pending = await _originals["create_pending"](self, **kwargs)
    try:
        session_id = getattr(pending, "session_id", None)
        run_id = _active_run_id(session_id)
        request_id = getattr(pending, "request_id", "")
        if run_id and request_id:
            _asked_run_by_request[request_id] = run_id
        _record(
            session_id,
            ev.EVENT_APPROVAL_ASKED,
            _pending_data(pending),
            run_id=run_id,
        )
    except Exception:  # pylint: disable=broad-except
        logger.debug("agent-trace: asked wrapper failed", exc_info=True)
    return pending


async def _resolve_request_wrapped(  # noqa: ANN001
    self,
    request_id: str,
    decision: Any,
    scope: Any = None,
):
    pending = await _originals["resolve_request"](
        self,
        request_id,
        decision,
        scope,
    )
    try:
        if pending is None:
            return pending
        session_id = getattr(pending, "session_id", None)
        run_id = (
            _asked_run_by_request.pop(request_id, None)
            or _active_run_id(session_id)
        )
        data = _pending_data(pending)
        data["decision"] = _decision_name(decision)
        if scope is not None:
            data["scope"] = str(getattr(scope, "value", scope))
        _record(
            session_id,
            ev.EVENT_APPROVAL_DECIDED,
            data,
            run_id=run_id,
        )
    except Exception:  # pylint: disable=broad-except
        logger.debug(
            "agent-trace: decided wrapper failed",
            exc_info=True,
        )
    return pending


async def _cancel_all_wrapped(self, root_session_id: str):  # noqa: ANN001
    count = await _originals["cancel_all_pending_by_root_session"](
        self,
        root_session_id,
    )
    try:
        if count:
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
        logger.debug("agent-trace: cancel wrapper failed", exc_info=True)
    return count


def apply_approval_patch() -> None:
    """Wrap ApprovalService lifecycle methods (idempotent)."""
    global _patched
    if _patched:
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
    _originals["create_pending"] = ApprovalService.create_pending
    _originals["resolve_request"] = ApprovalService.resolve_request
    _originals["cancel_all_pending_by_root_session"] = (
        ApprovalService.cancel_all_pending_by_root_session
    )
    ApprovalService.create_pending = _create_pending_wrapped
    ApprovalService.resolve_request = _resolve_request_wrapped
    ApprovalService.cancel_all_pending_by_root_session = (
        _cancel_all_wrapped
    )
    _patched = True
    logger.info("agent-trace: approval capture patch applied")


def restore_approval_patch() -> None:
    """Restore the original ApprovalService methods."""
    global _patched
    if not _patched:
        return
    try:
        from qwenpaw.app.approvals.service import ApprovalService

        ApprovalService.create_pending = _originals["create_pending"]
        ApprovalService.resolve_request = _originals["resolve_request"]
        ApprovalService.cancel_all_pending_by_root_session = _originals[
            "cancel_all_pending_by_root_session"
        ]
    except Exception:  # pylint: disable=broad-except
        logger.debug(
            "agent-trace: approval patch restore failed",
            exc_info=True,
        )
    finally:
        _patched = False
