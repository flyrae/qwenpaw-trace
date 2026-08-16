# -*- coding: utf-8 -*-
"""Tests for the capture hooks and observation middleware."""
from __future__ import annotations

import importlib.util
import json
from pathlib import Path
from types import SimpleNamespace

import pytest
from agentscope.message import TextBlock, ThinkingBlock
from agentscope.model._model_response import ChatResponse
from agentscope.model._model_usage import ChatUsage
from agentscope.tool import ToolResponse

from agent_trace.capture import (
    AgentTraceErrorHook,
    AgentTraceFinalizeHook,
    AgentTraceInboundHook,
    AgentTraceReplyHook,
    AgentTraceRunEndHook,
    AgentTraceRunStartHook,
    TraceMiddleware,
    trace_middleware_factory,
)
from agent_trace.context import get_current_run


async def drained_events(service, session_id):
    await service.store.flush()
    result = service.store.read_events(session_id)
    assert result is not None
    return result["events"]


class TestMessageHooks:
    async def test_inbound_records_content_parts(self, service, hook_ctx):
        await AgentTraceRunStartHook().run(hook_ctx)
        part = SimpleNamespace(text="hello media")
        image = SimpleNamespace(image_url="http://x/y.png")
        message = SimpleNamespace(content=[part, image])
        hook_ctx.request = SimpleNamespace(
            channel="feishu",
            channel_meta={"sender_id": "u1", "chat_id": 42},
            input=[message],
        )
        await AgentTraceInboundHook().run(hook_ctx)
        await AgentTraceFinalizeHook().run(hook_ctx)
        events = await drained_events(service, "sess-1")
        inbound = [
            e for e in events if e["type"] == "message/inbound"
        ]
        assert len(inbound) == 1
        data = inbound[0]["data"]
        assert data["parts"][0] == {
            "type": "SimpleNamespace",
            "text": "hello media",
        }
        assert data["parts"][1]["image_url"] == "http://x/y.png"
        assert data["channel_meta"] == {
            "sender_id": "u1",
            "chat_id": 42,
        }
        assert inbound[0]["run_id"]  # tied to the active run

    async def test_inbound_disabled(self, service, hook_ctx):
        service.config.capture_messages = False
        hook_ctx.request = SimpleNamespace(
            channel="console",
            input=[
                SimpleNamespace(content=[SimpleNamespace(text="x")]),
            ],
        )
        await AgentTraceInboundHook().run(hook_ctx)
        await service.store.flush()
        assert service.store.read_events("sess-1") is None

    async def test_reply_records_last_assistant_message(
        self,
        service,
        hook_ctx,
    ):
        await AgentTraceRunStartHook().run(hook_ctx)
        reply = SimpleNamespace(
            role="assistant",
            content=[TextBlock(type="text", text="final answer")],
        )
        hook_ctx.agent = SimpleNamespace(
            state=SimpleNamespace(
                context=[
                    SimpleNamespace(role="user", content="q"),
                    reply,
                ],
            ),
        )
        await AgentTraceReplyHook().run(hook_ctx)
        await AgentTraceFinalizeHook().run(hook_ctx)
        events = await drained_events(service, "sess-1")
        outbound = [
            e for e in events if e["type"] == "message/outbound"
        ]
        assert len(outbound) == 1
        assert outbound[0]["data"]["text"] == "final answer"

    async def test_reply_skips_without_assistant_message(
        self,
        service,
        hook_ctx,
    ):
        await AgentTraceRunStartHook().run(hook_ctx)
        hook_ctx.agent = SimpleNamespace(
            state=SimpleNamespace(
                context=[SimpleNamespace(role="user", content="q")],
            ),
        )
        await AgentTraceReplyHook().run(hook_ctx)
        await AgentTraceFinalizeHook().run(hook_ctx)
        events = await drained_events(service, "sess-1")
        assert not [
            e for e in events if e["type"] == "message/outbound"
        ]


class TestRunHooks:
    async def test_start_end_finalize_pair(self, service, hook_ctx):
        await AgentTraceRunStartHook().run(hook_ctx)
        assert get_current_run() is not None
        assert hook_ctx.extras["_agent_trace_run"].session_id == "sess-1"

        await AgentTraceRunEndHook().run(hook_ctx)
        await AgentTraceFinalizeHook().run(hook_ctx)

        assert get_current_run() is None
        events = await drained_events(service, "sess-1")
        types = [e["type"] for e in events]
        assert types == ["run/start", "run/end"]
        start = events[0]["data"]
        assert start["channel"] == "console"
        assert start["query"] == "hello trace"
        assert start["messages"] == [
            {"role": "user", "text": "hello trace"},
        ]
        assert events[1]["data"]["status"] == "success"
        assert "_agent_trace_run" not in hook_ctx.extras

    async def test_finalize_writes_terminal_event_once(
        self,
        service,
        hook_ctx,
    ):
        await AgentTraceRunStartHook().run(hook_ctx)
        # No POST_RESPONSE ran (e.g. cancelled): finalize must close it.
        await AgentTraceFinalizeHook().run(hook_ctx)
        await AgentTraceFinalizeHook().run(hook_ctx)
        events = await drained_events(service, "sess-1")
        ends = [e for e in events if e["type"] == "run/end"]
        assert len(ends) == 1
        assert ends[0]["data"]["status"] == "running"

    async def test_error_hook_marks_error(self, service, hook_ctx):
        await AgentTraceRunStartHook().run(hook_ctx)
        hook_ctx.error = RuntimeError("boom")
        # On the error path POST_RESPONSE is skipped; ON_ERROR + FINALLY
        # are responsible for the terminal event.
        await AgentTraceErrorHook().run(hook_ctx)
        await AgentTraceFinalizeHook().run(hook_ctx)
        events = await drained_events(service, "sess-1")
        end = [e for e in events if e["type"] == "run/end"][0]
        assert end["data"]["status"] == "error"
        assert "boom" in end["data"]["error"]

    async def test_disabled_service_writes_nothing(self, service, hook_ctx):
        service.config.enabled = False
        await AgentTraceRunStartHook().run(hook_ctx)
        await AgentTraceFinalizeHook().run(hook_ctx)
        await service.store.flush()
        assert service.store.read_events("sess-1") is None

    async def test_no_session_id_skips(self, service, hook_ctx):
        hook_ctx.session_id = ""
        await AgentTraceRunStartHook().run(hook_ctx)
        assert get_current_run() is None

    async def test_subagent_run_writes_spawn_pointer(
        self,
        service,
        hook_ctx,
    ):
        # A sub-agent run: session is the child, root points at the
        # parent session.
        hook_ctx.session_id = "child-sess"
        hook_ctx.agent_id = "researcher"
        hook_ctx.root_session_id = "root-sess"
        hook_ctx.root_agent_id = "default"
        await AgentTraceRunStartHook().run(hook_ctx)
        await AgentTraceFinalizeHook().run(hook_ctx)
        await service.store.flush()

        child = service.store.read_events("child-sess")
        start = child["events"][0]["data"]
        assert start["root_session_id"] == "root-sess"
        assert start["root_agent_id"] == "default"

        root = service.store.read_events("root-sess")
        spawns = [e for e in root["events"] if e["type"] == "agent/spawn"]
        assert len(spawns) == 1
        assert spawns[0]["data"] == {
            "child_session_id": "child-sess",
            "child_agent_id": "researcher",
            "child_trace_id": start["trace_id"],
        }

    async def test_root_run_writes_no_spawn_pointer(
        self,
        service,
        hook_ctx,
    ):
        hook_ctx.root_session_id = "sess-1"
        hook_ctx.root_agent_id = "main"
        await AgentTraceRunStartHook().run(hook_ctx)
        await AgentTraceFinalizeHook().run(hook_ctx)
        await service.store.flush()
        result = service.store.read_events("sess-1")
        assert not [
            e for e in result["events"] if e["type"] == "agent/spawn"
        ]


def text_msg(role, content):
    return SimpleNamespace(role=role, content=content)


class TestModelCall:
    async def test_header_recorded_once_until_changed(
        self,
        service,
        hook_ctx,
    ):
        await AgentTraceRunStartHook().run(hook_ctx)
        messages = [
            SimpleNamespace(role="system", content="You are helpful."),
            SimpleNamespace(role="user", content="q"),
        ]
        tools = [
            {"function": {"name": "web_search", "description": "Search"}},
        ]

        async def next_handler(**kwargs):
            return SimpleNamespace(text="a")

        middleware = TraceMiddleware()
        await middleware.on_model_call(
            agent=None,
            input_kwargs={"messages": messages, "tools": tools},
            next_handler=next_handler,
        )
        # Unchanged header on the second call: no extra event.
        messages2 = [
            SimpleNamespace(role="system", content="You are helpful."),
            SimpleNamespace(role="user", content="q2"),
        ]
        await middleware.on_model_call(
            agent=None,
            input_kwargs={"messages": messages2, "tools": tools},
            next_handler=next_handler,
        )
        # Changed prompt: a new header event with prev reference.
        messages3 = [
            SimpleNamespace(role="system", content="You are very helpful."),
            SimpleNamespace(role="user", content="q3"),
        ]
        await middleware.on_model_call(
            agent=None,
            input_kwargs={"messages": messages3, "tools": tools},
            next_handler=next_handler,
        )
        await AgentTraceFinalizeHook().run(hook_ctx)
        events = await drained_events(service, "sess-1")
        headers = [e for e in events if e["type"] == "llm/header"]
        assert len(headers) == 2
        first, second = headers[0]["data"], headers[1]["data"]
        assert first["reason"] == "initial"
        assert first["system_prompt"] == "You are helpful."
        assert first["tools"] == ["web_search"]
        assert "prev_sha256" not in first
        assert second["reason"] == "changed"
        assert second["prev_sha256"] == first["sha256"]
        assert second["system_prompt"] == "You are very helpful."

    async def test_header_disabled(self, service, hook_ctx):
        service.config.capture_headers = False
        await AgentTraceRunStartHook().run(hook_ctx)

        async def next_handler(**kwargs):
            return SimpleNamespace(text="a")

        await TraceMiddleware().on_model_call(
            agent=None,
            input_kwargs={
                "messages": [
                    SimpleNamespace(role="system", content="s"),
                ],
            },
            next_handler=next_handler,
        )
        await AgentTraceFinalizeHook().run(hook_ctx)
        events = await drained_events(service, "sess-1")
        assert not [e for e in events if e["type"] == "llm/header"]

    async def test_header_prompt_limit_applies(self, service, hook_ctx):
        service.config.max_prompt_chars = 1000
        await AgentTraceRunStartHook().run(hook_ctx)

        async def next_handler(**kwargs):
            return SimpleNamespace(text="a")

        await TraceMiddleware().on_model_call(
            agent=None,
            input_kwargs={
                "messages": [
                    SimpleNamespace(role="system", content="x" * 5000),
                ],
            },
            next_handler=next_handler,
        )
        await AgentTraceFinalizeHook().run(hook_ctx)
        events = await drained_events(service, "sess-1")
        header = [e for e in events if e["type"] == "llm/header"][0]
        assert len(header["data"]["system_prompt"]) == 1000

    async def test_success_records_call_result_pair(self, service, hook_ctx):
        await AgentTraceRunStartHook().run(hook_ctx)
        result = SimpleNamespace(
            text="the answer",
            usage={"input_tokens": 10, "output_tokens": 4},
        )

        async def next_handler(**kwargs):
            return result

        returned = await TraceMiddleware().on_model_call(
            agent=SimpleNamespace(model=SimpleNamespace(model_name="m1")),
            input_kwargs={"messages": [text_msg("user", "q")]},
            next_handler=next_handler,
        )
        await AgentTraceFinalizeHook().run(hook_ctx)
        assert returned is result
        events = await drained_events(service, "sess-1")
        call = [e for e in events if e["type"] == "llm/call"][0]
        result_ev = [e for e in events if e["type"] == "llm/result"][0]
        assert call["data"]["model"] == "m1"
        assert call["data"]["messages_count"] == 1
        assert call["data"]["last_user_text"] == "q"
        assert call["data"]["messages"] == [{"role": "user", "text": "q"}]
        assert result_ev["data"]["text"] == "the answer"
        assert result_ev["data"]["usage"]["input_tokens"] == 10
        assert result_ev["data"]["duration_ms"] >= 0

    async def test_options_digest_recorded(self, service, hook_ctx):
        await AgentTraceRunStartHook().run(hook_ctx)

        async def next_handler(**kwargs):
            return SimpleNamespace(text="a")

        await TraceMiddleware().on_model_call(
            agent=None,
            input_kwargs={
                "messages": [text_msg("user", "q")],
                "temperature": 0.7,
                "max_tokens": 4096,
                "stream": True,
                "tools": [{"name": "x"}],
            },
            next_handler=next_handler,
        )
        await AgentTraceFinalizeHook().run(hook_ctx)
        events = await drained_events(service, "sess-1")
        call = [e for e in events if e["type"] == "llm/call"][0]
        options = call["data"]["options"]
        assert options["temperature"] == 0.7
        assert options["max_tokens"] == 4096
        assert options["stream"] is True
        # Unknown/bulky kwargs are not part of the digest.
        assert "tools" not in options
        assert "messages" not in options

    async def test_streaming_records_assembled_output(
        self,
        service,
        hook_ctx,
    ):
        await AgentTraceRunStartHook().run(hook_ctx)

        async def next_handler(**kwargs):
            async def stream():
                yield ChatResponse(
                    content=[TextBlock(type="text", text="Hel")],
                    is_last=False,
                )
                yield ChatResponse(
                    content=[
                        ThinkingBlock(
                            type="thinking",
                            thinking="let me think",
                        ),
                        TextBlock(
                            type="text",
                            text="Hello world, full answer",
                        ),
                    ],
                    is_last=True,
                    usage=ChatUsage(
                        input_tokens=7,
                        output_tokens=9,
                        time=0.2,
                    ),
                )

            return stream()

        middleware = TraceMiddleware()
        stream = await middleware.on_model_call(
            agent=None,
            input_kwargs={"messages": [text_msg("user", "q")]},
            next_handler=next_handler,
        )
        collected = [chunk async for chunk in stream]
        assert len(collected) == 2
        await AgentTraceFinalizeHook().run(hook_ctx)
        events = await drained_events(service, "sess-1")
        result_ev = [e for e in events if e["type"] == "llm/result"][0]
        # The is_last chunk carries the complete assembled content.
        assert result_ev["data"]["text"] == "Hello world, full answer"
        assert result_ev["data"]["thinking"] == "let me think"
        assert result_ev["data"]["usage"] == {
            "input_tokens": 7,
            "output_tokens": 9,
            "time": 0.2,
        }
        timing = result_ev["data"].get("timing")
        assert isinstance(timing, dict)
        assert timing["ttft_ms"] >= 0
        assert timing["decode_ms"] >= 0

    async def test_streaming_records_tool_calls(
        self,
        service,
        hook_ctx,
    ):
        from agentscope.message import ToolCallBlock

        await AgentTraceRunStartHook().run(hook_ctx)

        async def next_handler(**kwargs):
            async def stream():
                yield ChatResponse(
                    content=[
                        ToolCallBlock(
                            type="tool_call",
                            id="call-1",
                            name="web_search",
                            input='{"q": "x"}',
                        ),
                    ],
                    is_last=True,
                )

            return stream()

        stream = await TraceMiddleware().on_model_call(
            agent=None,
            input_kwargs={"messages": []},
            next_handler=next_handler,
        )
        async for _ in stream:
            pass
        await AgentTraceFinalizeHook().run(hook_ctx)
        events = await drained_events(service, "sess-1")
        result_ev = [e for e in events if e["type"] == "llm/result"][0]
        assert result_ev["data"]["tool_calls"] == [
            {"name": "web_search", "id": "call-1"},
        ]

    async def test_non_stream_has_no_timing(self, service, hook_ctx):
        await AgentTraceRunStartHook().run(hook_ctx)

        async def next_handler(**kwargs):
            return SimpleNamespace(text="answer")

        await TraceMiddleware().on_model_call(
            agent=None,
            input_kwargs={"messages": []},
            next_handler=next_handler,
        )
        await AgentTraceFinalizeHook().run(hook_ctx)
        events = await drained_events(service, "sess-1")
        result_ev = [e for e in events if e["type"] == "llm/result"][0]
        assert "timing" not in result_ev["data"]

    async def test_stream_without_is_last_falls_back_to_deltas(
        self,
        service,
        hook_ctx,
    ):
        await AgentTraceRunStartHook().run(hook_ctx)

        async def next_handler(**kwargs):
            async def stream():
                yield ChatResponse(
                    content=[TextBlock(type="text", text="part1 ")],
                    is_last=False,
                )
                yield ChatResponse(
                    content=[TextBlock(type="text", text="part2")],
                    is_last=False,
                )

            return stream()

        stream = await TraceMiddleware().on_model_call(
            agent=None,
            input_kwargs={"messages": []},
            next_handler=next_handler,
        )
        async for _ in stream:
            pass
        await AgentTraceFinalizeHook().run(hook_ctx)
        events = await drained_events(service, "sess-1")
        result_ev = [e for e in events if e["type"] == "llm/result"][0]
        assert result_ev["data"]["text"] == "part1 part2"

    async def test_exception_recorded_and_reraised(self, service, hook_ctx):
        await AgentTraceRunStartHook().run(hook_ctx)

        async def next_handler(**kwargs):
            raise ValueError("llm broke")

        with pytest.raises(ValueError):
            await TraceMiddleware().on_model_call(
                agent=None,
                input_kwargs={"messages": []},
                next_handler=next_handler,
            )
        await AgentTraceFinalizeHook().run(hook_ctx)
        events = await drained_events(service, "sess-1")
        result_ev = [e for e in events if e["type"] == "llm/result"][0]
        assert "llm broke" in result_ev["data"]["error"]

    async def test_capture_llm_disabled(self, service, hook_ctx):
        await AgentTraceRunStartHook().run(hook_ctx)
        service.config.capture_llm = False

        async def next_handler(**kwargs):
            return SimpleNamespace(text="x")

        await TraceMiddleware().on_model_call(
            agent=None,
            input_kwargs={"messages": []},
            next_handler=next_handler,
        )
        await AgentTraceFinalizeHook().run(hook_ctx)
        events = await drained_events(service, "sess-1")
        assert not [e for e in events if e["type"].startswith("llm/")]

    async def test_no_active_run_passthrough(self):
        async def next_handler(**kwargs):
            return SimpleNamespace(text="x")

        # No run/start: middleware records nothing and still returns.
        result = await TraceMiddleware().on_model_call(
            agent=None,
            input_kwargs={"messages": []},
            next_handler=next_handler,
        )
        assert result.text == "x"


class TestActing:
    @staticmethod
    async def drive_tool(middleware, tool_call):
        async def next_handler():
            yield ToolResponse(
                content=[TextBlock(type="text", text="tool done")],
            )

        collected = []
        async for item in middleware.on_acting(
            agent=None,
            input_kwargs={"tool_call": tool_call},
            next_handler=next_handler,
        ):
            collected.append(item)
        return collected

    async def test_tool_call_result_pair(self, service, hook_ctx):
        await AgentTraceRunStartHook().run(hook_ctx)
        tool_call = SimpleNamespace(
            name="echo",
            input='{"text": "hi"}',
            id="tc-1",
        )
        collected = await self.drive_tool(
            TraceMiddleware(),
            tool_call,
        )
        await AgentTraceFinalizeHook().run(hook_ctx)
        assert len(collected) == 1
        events = await drained_events(service, "sess-1")
        call = [e for e in events if e["type"] == "tool/call"][0]
        result = [e for e in events if e["type"] == "tool/result"][0]
        assert call["data"]["name"] == "echo"
        assert call["data"]["input"] == '{"text": "hi"}'
        assert result["data"]["ok"] is True
        assert result["data"]["output"] == "tool done"

    async def test_dict_input_serialized(self, service, hook_ctx):
        await AgentTraceRunStartHook().run(hook_ctx)
        await self.drive_tool(
            TraceMiddleware(),
            SimpleNamespace(
                name="echo",
                input={"text": "hi"},
                id="tc-2",
            ),
        )
        await AgentTraceFinalizeHook().run(hook_ctx)
        events = await drained_events(service, "sess-1")
        call = [e for e in events if e["type"] == "tool/call"][0]
        assert json.loads(call["data"]["input"]) == {"text": "hi"}

    async def test_tool_stream_closed_early_still_records(
        self,
        service,
        hook_ctx,
    ):
        await AgentTraceRunStartHook().run(hook_ctx)

        async def next_handler():
            from agentscope.tool import ToolResponse

            yield ToolResponse(
                content=[TextBlock(type="text", text="partial output")],
            )

        middleware = TraceMiddleware()
        stream = middleware.on_acting(
            agent=None,
            input_kwargs={
                "tool_call": SimpleNamespace(
                    name="web_search",
                    input="{}",
                    id="tc-x",
                ),
            },
            next_handler=next_handler,
        )
        # Consume one item, then close the generator early (the
        # coordinator offload path does this).
        async for _ in stream:
            break
        await stream.aclose()
        await AgentTraceFinalizeHook().run(hook_ctx)
        events = await drained_events(service, "sess-1")
        result = [e for e in events if e["type"] == "tool/result"][0]
        assert result["data"]["ok"] is True
        assert result["data"]["output"] == "partial output"

    async def test_tool_stream_closed_before_response_records_note(
        self,
        service,
        hook_ctx,
    ):
        await AgentTraceRunStartHook().run(hook_ctx)

        async def next_handler():
            # Yields progress events but never a ToolResponse.
            yield "progress"

        middleware = TraceMiddleware()
        stream = middleware.on_acting(
            agent=None,
            input_kwargs={
                "tool_call": SimpleNamespace(
                    name="slow_tool",
                    input="{}",
                    id="tc-y",
                ),
            },
            next_handler=next_handler,
        )
        async for _ in stream:
            break
        await stream.aclose()
        await AgentTraceFinalizeHook().run(hook_ctx)
        events = await drained_events(service, "sess-1")
        result = [e for e in events if e["type"] == "tool/result"][0]
        assert result["data"]["ok"] is False
        assert result["data"]["note"] == "stream closed early"

    async def test_tool_exception_recorded(self, service, hook_ctx):
        await AgentTraceRunStartHook().run(hook_ctx)

        async def next_handler():
            yield ToolResponse(
                content=[TextBlock(type="text", text="partial")],
            )
            raise RuntimeError("tool blew up")

        middleware = TraceMiddleware()
        with pytest.raises(RuntimeError):
            async for _ in middleware.on_acting(
                agent=None,
                input_kwargs={
                    "tool_call": SimpleNamespace(
                        name="bad",
                        input="",
                        id="tc-3",
                    ),
                },
                next_handler=next_handler,
            ):
                pass
        await AgentTraceFinalizeHook().run(hook_ctx)
        events = await drained_events(service, "sess-1")
        result = [e for e in events if e["type"] == "tool/result"][0]
        assert result["data"]["ok"] is False
        assert "tool blew up" in result["data"]["error"]

    async def test_capture_tools_disabled(self, service, hook_ctx):
        await AgentTraceRunStartHook().run(hook_ctx)
        service.config.capture_tools = False
        collected = await self.drive_tool(
            TraceMiddleware(),
            SimpleNamespace(name="echo", input="", id="tc"),
        )
        await AgentTraceFinalizeHook().run(hook_ctx)
        assert len(collected) == 1
        events = await drained_events(service, "sess-1")
        assert not [e for e in events if e["type"].startswith("tool/")]


class TestFactory:
    def test_factory_active_when_enabled(self, service):
        middleware = trace_middleware_factory(None, None)
        assert isinstance(middleware, TraceMiddleware)

    def test_factory_none_when_disabled(self, service):
        service.config.enabled = False
        assert trace_middleware_factory(None, None) is None


class TestPluginEntry:
    def test_register_wires_everything(self, service, tmp_path):
        plugin_dir = Path(__file__).resolve().parents[1]
        spec = importlib.util.spec_from_file_location(
            "plugin_agent_trace_test",
            plugin_dir / "plugin.py",
        )
        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)

        calls = {
            "runtime_hooks": [],
            "middleware": [],
            "routers": [],
            "startup": [],
            "shutdown": [],
            "uninstall": [],
        }

        class FakeApi:
            def register_runtime_hook(self, hook):
                calls["runtime_hooks"].append(hook)

            def register_middleware(self, factory, *, priority=100):
                calls["middleware"].append((factory, priority))

            def register_http_router(self, router, *, prefix, tags=None):
                calls["routers"].append((router, prefix))

            def register_startup_hook(self, name, cb, priority=100):
                calls["startup"].append((name, cb, priority))

            def register_shutdown_hook(self, name, cb, priority=100):
                calls["shutdown"].append((name, cb, priority))

            def register_uninstall_hook(self, name, cb, priority=100):
                calls["uninstall"].append((name, cb, priority))

        module.plugin.register(FakeApi())

        assert len(calls["runtime_hooks"]) == 6
        names = {h.name for h in calls["runtime_hooks"]}
        assert names == {
            "agent_trace_run_start",
            "agent_trace_inbound",
            "agent_trace_reply",
            "agent_trace_run_end",
            "agent_trace_error",
            "agent_trace_finalize",
        }
        assert calls["middleware"][0][1] == 110
        router, prefix = calls["routers"][0]
        assert prefix == "/agent-trace"
        paths = {route.path for route in router.routes}
        assert "/sessions" in paths
        # The pre-set fixture service must not be replaced by the
        # default WORKING_DIR-rooted one.
        from agent_trace.service import get_service

        assert get_service() is service
