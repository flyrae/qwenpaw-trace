# -*- coding: utf-8 -*-
"""Tests for the OpenAI SDK API payload interception.

Tests the wrapper functions and event recording directly, without
instantiating real OpenAI SDK clients (which require auth).
"""
from __future__ import annotations

from types import SimpleNamespace

from test_capture import (
    AgentTraceRunStartHook,
    AgentTraceFinalizeHook,
    drained_events,
)


def _make_record_kwargs():
    """Build a representative create() kwargs dict."""
    return {
        "model": "test-model",
        "messages": [
            {"role": "system", "content": "You are helpful."},
            {"role": "user", "content": "Hello"},
            {
                "role": "tool",
                "tool_call_id": "tc_abc123",
                "content": "tool output here",
            },
        ],
        "temperature": 0.7,
    }


def _make_fake_response():
    return SimpleNamespace(
        id="chatcmpl-test",
        usage=SimpleNamespace(
            prompt_tokens=100,
            completion_tokens=20,
            total_tokens=120,
        ),
    )


class TestSafeExtract:
    def test_extract_messages(self):
        from agent_trace.api_payload_patch import _safe_extract_messages

        msgs = _safe_extract_messages(_make_record_kwargs())
        assert len(msgs) == 3
        assert msgs[0]["role"] == "system"
        assert msgs[2]["tool_call_id"] == "tc_abc123"

    def test_extract_messages_empty(self):
        from agent_trace.api_payload_patch import _safe_extract_messages

        assert _safe_extract_messages({}) == []

    def test_extract_params(self):
        from agent_trace.api_payload_patch import _safe_extract_params

        params = _safe_extract_params(_make_record_kwargs())
        assert params["model"] == "test-model"
        assert params["temperature"] == 0.7

    def test_extract_usage_from_object(self):
        from agent_trace.api_payload_patch import _extract_usage

        usage = _extract_usage(_make_fake_response())
        assert usage["input_tokens"] == 100
        assert usage["output_tokens"] == 20

    def test_extract_usage_from_dict(self):
        from agent_trace.api_payload_patch import _extract_usage

        usage = _extract_usage(
            {"usage": {"prompt_tokens": 50, "completion_tokens": 10}}
        )
        assert usage["input_tokens"] == 50
        assert usage["output_tokens"] == 10

    def test_extract_usage_none(self):
        from agent_trace.api_payload_patch import _extract_usage

        assert _extract_usage(None) is None
        assert _extract_usage({}) is None


class TestRecordApiEvent:
    async def test_request_and_response_events(self, service, hook_ctx):
        from agent_trace.api_payload_patch import _record_api_event

        await AgentTraceRunStartHook().run(hook_ctx)

        _record_api_event(
            "request",
            "test-model",
            messages=[
                {"role": "system", "content": "sys"},
                {"role": "user", "content": "hello"},
                {
                    "role": "tool",
                    "tool_call_id": "tc_1",
                    "content": "result",
                },
            ],
            params={"temperature": 0.5},
        )
        _record_api_event(
            "response",
            "test-model",
            usage={"input_tokens": 50, "output_tokens": 10},
            duration_ms=123.4,
        )

        await AgentTraceFinalizeHook().run(hook_ctx)
        events = await drained_events(service, "sess-1")
        api_req = [e for e in events if e["type"] == "llm/api_request"]
        api_resp = [e for e in events if e["type"] == "llm/api_response"]

        assert len(api_req) == 1
        assert len(api_resp) == 1

        req = api_req[0]["data"]
        assert req["model"] == "test-model"
        assert req["message_count"] == 3
        assert req["messages"][2]["tool_call_id"] == "tc_1"
        assert req["params"]["temperature"] == 0.5

        resp = api_resp[0]["data"]
        assert resp["usage"]["input_tokens"] == 50
        assert resp["duration_ms"] == 123.4

    async def test_error_event(self, service, hook_ctx):
        from agent_trace.api_payload_patch import _record_api_event

        await AgentTraceRunStartHook().run(hook_ctx)
        _record_api_event(
            "response", "m", error="Connection timeout", duration_ms=5000
        )
        await AgentTraceFinalizeHook().run(hook_ctx)

        events = await drained_events(service, "sess-1")
        resp = [e for e in events if e["type"] == "llm/api_response"]
        assert len(resp) == 1
        assert "Connection timeout" in resp[0]["data"]["error"]

    async def test_no_run_no_event(self, service):
        """Without an active run, no event is written."""
        from agent_trace.api_payload_patch import _record_api_event
        from agent_trace.context import set_current_run

        # Clear any leftover run context from previous tests
        set_current_run(None)
        _record_api_event("request", "m", messages=[])
        await service.store.flush()
        # No session file exists — read_events returns None
        result = service.store.read_events("sess-1")
        assert result is None or not [
            e for e in result["events"] if "api_" in e["type"]
        ]


class TestPatchLifecycle:
    def test_apply_and_restore(self):
        from agent_trace import api_payload_patch

        api_payload_patch._active = False
        api_payload_patch.apply_api_payload_patch()
        assert api_payload_patch._active is True

        # Double apply is a no-op
        api_payload_patch.apply_api_payload_patch()
        assert api_payload_patch._active is True

        api_payload_patch.restore_api_payload_patch()
        assert api_payload_patch._active is False

    def test_resolve_target_walks_class_path(self):
        """Regression: the pre-check must resolve Module.Class.method,
        not getattr(module, 'create') — the bug that produced
        'module ... has no attribute create' at startup."""
        import openai.resources.chat.completions  # noqa: F401

        from agent_trace.api_payload_patch import _resolve_target

        create = _resolve_target(
            "openai.resources.chat.completions", "Completions.create"
        )
        assert callable(create)

    def test_apply_attaches_without_warning(self, caplog):
        """The patch must actually attach to the real SDK (not just set
        the active flag while every target fails into a warning)."""
        import logging

        import openai.resources.chat.completions as completions_mod

        from agent_trace import api_payload_patch

        api_payload_patch._active = False
        with caplog.at_level(logging.WARNING, logger="qwenpaw.plugins.agent_trace"):
            api_payload_patch.apply_api_payload_patch()
        try:
            assert not [
                r for r in caplog.records if "failed to patch" in r.message
            ], caplog.text
            # wrapt attaches a BoundFunctionWrapper exposing __wrapped__
            assert hasattr(
                completions_mod.Completions.create, "__wrapped__"
            )
            assert hasattr(
                completions_mod.AsyncCompletions.create, "__wrapped__"
            )
        finally:
            api_payload_patch.restore_api_payload_patch()


class TestWrapperCapture:
    async def test_async_wrapper_captures_kwargs_call(
        self, service, hook_ctx
    ):
        """Regression: create() is invoked with KEYWORD arguments by the
        SDK; the wrapper must merge them (an earlier version dropped
        kwargs entirely and recorded an empty payload)."""
        from agent_trace import api_payload_patch
        from agent_trace.context import set_current_run
        from test_capture import drained_events

        await AgentTraceRunStartHook().run(hook_ctx)

        api_payload_patch._active = True
        try:

            async def fake_create(**kwargs):
                return _make_fake_response()

            result = await api_payload_patch._async_create_wrapper(
                fake_create, None, (), _make_record_kwargs()
            )
            assert result.id == "chatcmpl-test"
        finally:
            api_payload_patch.restore_api_payload_patch()
            set_current_run(None)

        await AgentTraceFinalizeHook().run(hook_ctx)
        events = await drained_events(service, "sess-1")
        req = [
            e for e in events if e["type"] == "llm/api_request"
        ]
        assert len(req) == 1
        data = req[0]["data"]
        assert data["model"] == "test-model"
        assert data["message_count"] == 3
        assert data["messages"][0]["content"] == "You are helpful."
        assert data["params"]["temperature"] == 0.7

    async def test_tee_stream_proxies_attributes_and_settles_once(
        self, service
    ):
        from agent_trace import api_payload_patch

        settled: list = []

        class FakeStream:
            response = "httpx-response"

            def __aiter__(self):
                return self

            async def __anext__(self):
                raise StopAsyncIteration

        tee = api_payload_patch._TeeAsyncStream(
            FakeStream(),
            on_result=lambda chunk: settled.append(("ok", chunk)),
            on_error=lambda exc: settled.append(("err", exc)),
        )
        # Attribute access delegates to the wrapped stream.
        assert tee.response == "httpx-response"
        # Draining the stream settles the response exactly once.
        async for _ in tee:
            pass
        async for _ in tee:
            pass
        assert settled == [("ok", None)]
