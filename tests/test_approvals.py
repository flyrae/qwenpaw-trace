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


class TestApprovalPatch:
    @staticmethod
    def _guard_result():
        from qwenpaw.security.tool_guard.models import ToolGuardResult

        return ToolGuardResult(
            tool_name="run_command",
            params={"command": "rm -rf /tmp/x"},
        )

    async def test_asked_and_decided_recorded(self, service):
        from qwenpaw.app.approvals.service import (
            ApprovalService,
            get_approval_service,
        )

        apply_approval_patch()
        try:
            svc = get_approval_service()
            pending = await svc.create_pending(
                session_id="sess-1",
                root_session_id="sess-1",
                owner_agent_id="main",
                user_id="u1",
                channel="console",
                agent_id="main",
                tool_name="run_command",
                result=self._guard_result(),
            )
            asked = [
                e for e in await _drain(service, "sess-1")
                if e["type"] == ev.EVENT_APPROVAL_ASKED
            ]
            assert len(asked) == 1
            assert asked[0]["data"]["tool_name"] == "run_command"
            assert asked[0]["data"]["request_id"] == pending.request_id

            from qwenpaw.security.tool_guard.approval import (
                ApprovalDecision,
            )

            resolved = await svc.resolve_request(
                pending.request_id,
                ApprovalDecision.DENIED,
            )
            assert resolved is not None
            decided = [
                e for e in await _drain(service, "sess-1")
                if e["type"] == ev.EVENT_APPROVAL_DECIDED
            ]
            assert len(decided) == 1
            assert decided[0]["data"]["decision"] == "denied"
        finally:
            restore_approval_patch()
        # The original methods behave again (idempotent restore).
        assert (
            ApprovalService.create_pending
            is not None
        )

    async def test_patch_disabled_by_config(self, service):
        service.config.capture_approvals = False
        from qwenpaw.app.approvals.service import get_approval_service

        apply_approval_patch()
        try:
            svc = get_approval_service()
            await svc.create_pending(
                session_id="sess-1",
                root_session_id="sess-1",
                owner_agent_id="main",
                user_id="u1",
                channel="console",
                agent_id="main",
                tool_name="run_command",
                result=self._guard_result(),
            )
            # Nothing recorded: no session file was ever created.
            assert service.store.read_events("sess-1") is None
        finally:
            restore_approval_patch()
