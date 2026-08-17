# -*- coding: utf-8 -*-
"""Tests for the approval-service capture patch."""

import pytest

from agent_trace import events as ev
from agent_trace.approvals_patch import (
    apply_approval_patch,
    restore_approval_patch,
)


@pytest.fixture(autouse=True)
def _restore_patch():
    yield
    restore_approval_patch()


async def _drain(service, session_id):
    await service.store.flush()
    result = service.store.read_events(session_id)
    assert result is not None
    return result["events"]


def _of_type(events, event_type):
    return [e for e in events if e["type"] == event_type]


class TestApprovalPatch:
    @staticmethod
    def _guard_result():
        from qwenpaw.security.tool_guard.models import ToolGuardResult

        return ToolGuardResult(
            tool_name="run_command",
            params={"command": "rm -rf /tmp/x"},
        )

    @staticmethod
    async def _create(svc, **overrides):
        from qwenpaw.security.tool_guard.models import ToolGuardResult

        kwargs = dict(
            session_id="sess-1",
            root_session_id="sess-1",
            owner_agent_id="main",
            user_id="u1",
            channel="console",
            agent_id="main",
            tool_name="run_command",
            result=ToolGuardResult(
                tool_name="run_command",
                params={"command": "rm -rf /tmp/x"},
            ),
        )
        kwargs.update(overrides)
        return await svc.create_pending(**kwargs)

    async def test_asked_and_decided_recorded(self, service):
        from qwenpaw.app.approvals.service import (
            ApprovalService,
            get_approval_service,
        )

        apply_approval_patch()
        try:
            svc = get_approval_service()
            pending = await self._create(svc)
            asked = _of_type(
                await _drain(service, "sess-1"),
                ev.EVENT_APPROVAL_ASKED,
            )
            assert len(asked) == 1
            assert asked[0]["data"]["tool_name"] == "run_command"
            assert asked[0]["data"]["request_id"] == pending.request_id
            assert asked[0]["data"]["source_type"] == "tool_guard"

            from qwenpaw.security.tool_guard.approval import (
                ApprovalDecision,
            )

            resolved = await svc.resolve_request(
                pending.request_id,
                ApprovalDecision.DENIED,
            )
            assert resolved is not None
            decided = _of_type(
                await _drain(service, "sess-1"),
                ev.EVENT_APPROVAL_DECIDED,
            )
            assert len(decided) == 1
            assert decided[0]["data"]["decision"] == "denied"
        finally:
            restore_approval_patch()
        # The original methods behave again (idempotent restore).
        assert ApprovalService.create_pending is not None

    async def test_patch_disabled_by_config(self, service):
        service.config.capture_approvals = False
        from qwenpaw.app.approvals.service import get_approval_service

        apply_approval_patch()
        try:
            svc = get_approval_service()
            await self._create(svc)
            # Nothing recorded: no session file was ever created.
            assert service.store.read_events("sess-1") is None
        finally:
            restore_approval_patch()

    async def test_summary_asked_and_decided_recorded(self, service):
        """driver-gate / harness / plugin approvals (summary path)."""
        from qwenpaw.app.approvals.models import ApprovalRequestSummary
        from qwenpaw.app.approvals.service import get_approval_service

        apply_approval_patch()
        try:
            svc = get_approval_service()
            pending = await svc.create_pending_summary(
                session_id="sess-drv",
                root_session_id="sess-drv",
                owner_agent_id="main",
                user_id="u1",
                channel="console",
                agent_id="main",
                summary=ApprovalRequestSummary(
                    source_type="driver_policy",
                    name="browser.navigate",
                    result_summary="driver op requires approval",
                ),
            )
            asked = _of_type(
                await _drain(service, "sess-drv"),
                ev.EVENT_APPROVAL_ASKED,
            )
            assert len(asked) == 1
            assert asked[0]["data"]["tool_name"] == "browser.navigate"
            assert asked[0]["data"]["source_type"] == "driver_policy"

            from qwenpaw.security.tool_guard.approval import (
                ApprovalDecision,
            )

            await svc.resolve_request(
                pending.request_id,
                ApprovalDecision.APPROVED,
            )
            decided = _of_type(
                await _drain(service, "sess-drv"),
                ev.EVENT_APPROVAL_DECIDED,
            )
            assert len(decided) == 1
            assert decided[0]["data"]["decision"] == "approved"
            assert decided[0]["data"]["source_type"] == "driver_policy"
        finally:
            restore_approval_patch()

    async def test_superseded_records_decided(self, service):
        """Replay-superseded approvals close their asked event."""
        from qwenpaw.app.approvals.service import get_approval_service

        apply_approval_patch()
        try:
            svc = get_approval_service()
            pending = await self._create(
                svc,
                extra={
                    "tool_call": {
                        "id": "tc-1",
                        "name": "run_command",
                        "input": {},
                    },
                },
            )
            count = await svc.cancel_stale_pending_for_tool_call(
                "sess-1",
                "tc-1",
            )
            assert count == 1
            decided = _of_type(
                await _drain(service, "sess-1"),
                ev.EVENT_APPROVAL_DECIDED,
            )
            assert len(decided) == 1
            assert decided[0]["data"]["decision"] == "superseded"
            assert decided[0]["data"]["request_id"] == pending.request_id
        finally:
            restore_approval_patch()

    async def test_cancel_all_records_per_session(self, service):
        """/stop cancel: each child session closes its own asked."""
        from qwenpaw.app.approvals.service import get_approval_service

        apply_approval_patch()
        try:
            svc = get_approval_service()
            for sid in ("child-1", "child-2"):
                await self._create(
                    svc,
                    session_id=sid,
                    root_session_id="root-1",
                )
            count = await svc.cancel_all_pending_by_root_session("root-1")
            assert count == 2
            for sid in ("child-1", "child-2"):
                events = await _drain(service, sid)
                asked = _of_type(events, ev.EVENT_APPROVAL_ASKED)
                decided = _of_type(events, ev.EVENT_APPROVAL_DECIDED)
                assert len(asked) == 1
                assert len(decided) == 1
                assert decided[0]["data"]["decision"] == "cancelled"
                assert (
                    decided[0]["data"]["request_id"]
                    == asked[0]["data"]["request_id"]
                )
            # Per-request events worked: no aggregate fallback needed.
            assert service.store.read_events("root-1") is None
        finally:
            restore_approval_patch()

    async def test_cross_session_decision_uses_ask_time_run(self, service):
        """Decided lands in the ask-time run, not the decider's run."""
        from agent_trace import approvals_patch as ap
        from agent_trace import context as trace_context
        from qwenpaw.app.approvals.service import get_approval_service
        from qwenpaw.security.tool_guard.approval import ApprovalDecision

        apply_approval_patch()
        svc = get_approval_service()
        child_run = trace_context.TraceRun(
            trace_id="run-child",
            session_id="child-1",
        )
        token = trace_context.set_current_run(child_run)
        try:
            pending = await self._create(
                svc,
                session_id="child-1",
                root_session_id="root-1",
            )
        finally:
            trace_context.clear_current_run(token)
        asked = _of_type(
            await _drain(service, "child-1"),
            ev.EVENT_APPROVAL_ASKED,
        )
        assert len(asked) == 1
        assert asked[0]["run_id"] == "run-child"

        console_run = trace_context.TraceRun(
            trace_id="run-console",
            session_id="root-1",
        )
        token = trace_context.set_current_run(console_run)
        try:
            resolved = await svc.resolve_request(
                pending.request_id,
                ApprovalDecision.DENIED,
            )
            assert resolved is not None
        finally:
            trace_context.clear_current_run(token)
        decided = _of_type(
            await _drain(service, "child-1"),
            ev.EVENT_APPROVAL_DECIDED,
        )
        assert len(decided) == 1
        assert decided[0]["run_id"] == "run-child"
        assert pending.request_id not in ap._asked_run_by_request

    async def test_restore_keeps_outer_wrapper(self, service):
        """Non-LIFO uninstall must not strip another plugin's patch."""
        from qwenpaw.app.approvals.service import (
            ApprovalService,
            get_approval_service,
        )

        pristine = ApprovalService.create_pending
        apply_approval_patch()
        ours = ApprovalService.create_pending
        seen = []

        async def outer(self, **kwargs):  # noqa: ANN001
            seen.append("outer")
            return await ours(self, **kwargs)

        ApprovalService.create_pending = outer
        try:
            restore_approval_patch()
            # Identity check: the outer wrapper stays on the class.
            assert ApprovalService.create_pending is outer
            svc = get_approval_service()
            pending = await self._create(svc)
            assert pending.request_id
            assert seen == ["outer"]
            # Stale wrapper is a pass-through after restore: no record.
            assert service.store.read_events("sess-1") is None
        finally:
            ApprovalService.create_pending = pristine
        assert ApprovalService.create_pending is pristine

    def test_asked_run_map_capped(self):
        from agent_trace import approvals_patch as ap

        try:
            for i in range(ap._ASKED_RUN_CAP + 50):
                ap._remember_asked(f"req-{i}", f"run-{i}")
            assert len(ap._asked_run_by_request) == ap._ASKED_RUN_CAP
            assert "req-0" not in ap._asked_run_by_request
            newest = f"req-{ap._ASKED_RUN_CAP + 49}"
            assert newest in ap._asked_run_by_request
            # Re-remembering refreshes recency; overflow evicts oldest.
            ap._remember_asked(newest, "run-refresh")
            ap._remember_asked("req-new", "run-new")
            assert len(ap._asked_run_by_request) == ap._ASKED_RUN_CAP
            assert "req-50" not in ap._asked_run_by_request
            assert ap._asked_run_by_request[newest] == "run-refresh"
        finally:
            ap._asked_run_by_request.clear()
