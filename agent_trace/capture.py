# -*- coding: utf-8 -*-
"""Trace capture: runtime lifecycle hooks + AgentScope middleware.

The PRE_EXECUTE hook opens a run and publishes ``run/start``; the
middleware observes LLM and tool calls inside the reply loop; the
POST_RESPONSE / ON_ERROR / FINALLY hooks close the run. All capture
paths are fail-open: a tracing error must never break the agent.
"""
from __future__ import annotations

import asyncio
import hashlib
import json
import logging
import time
import uuid
from inspect import isasyncgen
from typing import Any, AsyncGenerator, Callable, Optional

from agentscope.message import ToolCallBlock
from agentscope.middleware import MiddlewareBase
from agentscope.tool import ToolResponse

from qwenpaw.runtime.hooks import HookBase, HookContext, HookResult
from qwenpaw.runtime.phases import Phase

from . import events as ev
from .context import (
    RUN_EXTRAS_KEY,
    STATUS_CANCELLED,
    STATUS_ERROR,
    STATUS_RUNNING,
    STATUS_SUCCESS,
    TOKEN_EXTRAS_KEY,
    TraceRun,
    clear_current_run,
    get_current_run,
    set_current_run,
)
from .service import get_service

logger = logging.getLogger("qwenpaw.plugins.agent_trace")


def _elapsed_ms(start: float) -> float:
    return round((time.perf_counter() - start) * 1000.0, 1)


def _error_text(exc: BaseException) -> str:
    return f"{type(exc).__name__}: {exc}"


def _safe_append(
    run: TraceRun,
    event_type: str,
    data: Any,
    *,
    header: Optional[dict] = None,
) -> None:
    """Record one event; swallow every failure (fail-open)."""
    service = get_service()
    if service is None:
        return
    try:
        payload = (
            service.sanitize(data) if service.enabled else data
        )
        service.store.append(
            run.session_id,
            event_type,
            run.trace_id,
            payload,
            header=header,
        )
    except Exception:  # pylint: disable=broad-except
        logger.debug(
            "agent-trace: append %s failed",
            event_type,
            exc_info=True,
        )


def _block_texts(content: Any) -> str:
    """Best-effort text extraction from Msg-like content."""
    if content is None:
        return ""
    if isinstance(content, str):
        return content
    if isinstance(content, (list, tuple)):
        parts = []
        for block in content:
            text = getattr(block, "text", None)
            if isinstance(text, str):
                parts.append(text)
        return "\n".join(part for part in parts if part)
    return str(content)


def _last_user_text(messages: Any) -> str:
    """Text of the most recent user message in an iterable of Msgs."""
    for msg in reversed(list(messages or [])):
        if getattr(msg, "role", None) == "user":
            return _block_texts(getattr(msg, "content", None))
    return ""


def _request_trigger(request: Any) -> str:
    """Best-effort trigger/source label for the incoming request."""
    for attr in ("trigger", "source", "source_type"):
        value = getattr(request, attr, None)
        if isinstance(value, str) and value:
            return value
    return ""


def _channel_meta_digest(request: Any) -> dict:
    """Compact digest of the loosely-typed ``channel_meta`` extra."""
    meta = getattr(request, "channel_meta", None)
    if not isinstance(meta, dict):
        return {}
    digest = {}
    for key, value in meta.items():
        if isinstance(value, (bool, int, float, str)):
            digest[str(key)] = value
        elif isinstance(value, (list, tuple)):
            digest[str(key)] = len(value)
    return digest


def _provider_name(agent: Any, input_kwargs: dict) -> str:
    """Best-effort provider id for an ``on_model_call`` invocation.

    The agent holds the outermost model wrapper (RetryChatModel →
    TokenRecordingModelWrapper); ``_provider_id`` lives on the
    recording wrapper, and ``model_key`` already renders
    ``provider_id:model_name`` when present.
    """
    for candidate in (
        input_kwargs.get("provider"),
        getattr(agent, "model", None),
        getattr(agent, "_model", None),
    ):
        if isinstance(candidate, str) and candidate:
            return candidate
        hops = 0
        node = candidate
        while node is not None and hops < 5:
            key = getattr(node, "model_key", None)
            if isinstance(key, str) and ":" in key:
                return key.split(":", 1)[0]
            provider = getattr(node, "_provider_id", None)
            if isinstance(provider, str) and provider:
                return provider
            node = getattr(node, "_inner", None) or getattr(
                node,
                "_model",
                None,
            )
            hops += 1
    return ""


def _model_name(agent: Any, input_kwargs: dict) -> str:
    """Best-effort model label for an ``on_model_call`` invocation."""
    for candidate in (
        input_kwargs.get("model"),
        getattr(agent, "model", None),
        getattr(agent, "_model", None),
    ):
        if isinstance(candidate, str) and candidate:
            return candidate
        # ChatModelBase exposes the name via ``model`` (and some
        # wrappers via ``model_name``).
        for attr in ("model_name", "model"):
            name = getattr(candidate, attr, None)
            if isinstance(name, str) and name:
                return name
    return "unknown"


def _response_text(result: Any) -> str:
    """Best-effort assistant text from a model-call result."""
    text = getattr(result, "text", None)
    if isinstance(text, str) and text:
        return text
    return _block_texts(getattr(result, "content", None))


def _blocks_thinking(content: Any) -> str:
    """Joined reasoning text of ThinkingBlock entries in content."""
    if not isinstance(content, (list, tuple)):
        return ""
    parts = []
    for block in content:
        thinking = getattr(block, "thinking", None)
        if isinstance(thinking, str) and thinking:
            parts.append(thinking)
    return "\n".join(parts)


def _blocks_tool_calls(content: Any) -> list:
    """Tool calls the model emitted, as ``{name, id}`` dicts."""
    if not isinstance(content, (list, tuple)):
        return []
    calls = []
    for block in content:
        if not isinstance(block, ToolCallBlock):
            continue
        calls.append(
            {
                "name": getattr(block, "name", "") or "",
                "id": getattr(block, "id", "") or "",
            },
        )
    return calls


def _reasoning_tokens(usage: Any) -> Optional[int]:
    """Best-effort reasoning-token extraction from usage metadata.

    Providers nest it differently (OpenAI-style
    ``completion_tokens_details.reasoning_tokens``); a couple of
    defensive shapes are tried so cost analysis can split
    reasoning vs content tokens (dsh UsageRows parity).
    """
    metadata = getattr(usage, "metadata", None)
    if not isinstance(metadata, dict):
        return None
    candidates = [
        metadata.get("reasoning_tokens"),
    ]
    for key in ("completion_tokens_details", "output_tokens_details"):
        nested = metadata.get(key)
        if isinstance(nested, dict):
            candidates.append(nested.get("reasoning_tokens"))
    for value in candidates:
        if (
            isinstance(value, int)
            and not isinstance(value, bool)
            and value > 0
        ):
            return value
    return None


def _usage_dict(usage: Any) -> Optional[dict]:
    """Normalize a ChatUsage object (or plain dict) for persistence."""
    if usage is None:
        return None
    if isinstance(usage, dict):
        source = usage
    else:
        source = {
            key: getattr(usage, key, None)
            for key in (
                "input_tokens",
                "output_tokens",
                "total_tokens",
                "time",
                "cache_creation_input_tokens",
                "cache_input_tokens",
            )
        }
    extracted: dict = {}
    for key in (
        "input_tokens",
        "output_tokens",
        "total_tokens",
        "time",
        "cache_creation_input_tokens",
        "cache_input_tokens",
    ):
        value = source.get(key)
        if (
            isinstance(value, (int, float))
            and not isinstance(value, bool)
            and value
        ):
            extracted[key] = value
    # ChatUsage subclasses dict (DictMixin) yet still carries .metadata —
    # attempt the reasoning extraction regardless of the source path.
    reasoning = _reasoning_tokens(usage)
    if reasoning is not None:
        extracted["reasoning_tokens"] = reasoning
    return extracted or None


def _chunk_model(chunk: Any) -> Optional[str]:
    """Model name from a ChatResponse ``metadata`` dict, if present."""
    metadata = getattr(chunk, "metadata", None)
    if isinstance(metadata, dict):
        model = metadata.get("model")
        if isinstance(model, str) and model:
            return model
    return None


_DIGEST_TEXT_CHARS = 200

_OPTION_KEYS = (
    "temperature",
    "top_p",
    "top_k",
    "max_tokens",
    "stream",
    "stop",
    "presence_penalty",
    "frequency_penalty",
    "response_format",
    "seed",
)


def _options_digest(input_kwargs: dict) -> dict:
    """Sample-known model-call options for the request view."""
    options: dict = {}
    for key in _OPTION_KEYS:
        value = input_kwargs.get(key)
        if value is None or isinstance(value, (dict, list, tuple)):
            if isinstance(value, (dict, list, tuple)):
                try:
                    options[key] = json.dumps(
                        value,
                        ensure_ascii=False,
                        default=str,
                    )[:200]
                except (TypeError, ValueError):
                    continue
            continue
        if isinstance(value, (bool, int, float, str)):
            options[key] = value
    return options


def _messages_digest(messages: Any) -> list:
    """Compact role+text digest of the input messages of a model call."""
    digest = []
    for msg in messages or []:
        if isinstance(msg, dict):
            role = str(msg.get("role") or "")
            content = msg.get("content")
        else:
            role = str(getattr(msg, "role", "") or "")
            content = getattr(msg, "content", None)
        text = _block_texts(content)
        if len(text) > _DIGEST_TEXT_CHARS:
            text = text[:_DIGEST_TEXT_CHARS] + "…"
        digest.append({"role": role, "text": text})
    return digest


def _system_prompt(messages: Any) -> str:
    """Text of the first system-role message, if any."""
    for msg in messages or []:
        if isinstance(msg, dict):
            if msg.get("role") != "system":
                continue
            return _block_texts(msg.get("content"))
        if getattr(msg, "role", None) == "system":
            return _block_texts(getattr(msg, "content", None))
    return ""


def _tools_digest(tools: Any) -> list:
    """Compact name+description digest of a model-call tools list."""
    if not isinstance(tools, (list, tuple)):
        return []
    digest = []
    for tool in tools:
        if isinstance(tool, dict):
            function = tool.get("function")
            name = tool.get("name") or (
                function.get("name")
                if isinstance(function, dict)
                else None
            )
            desc = tool.get("description") or (
                function.get("description")
                if isinstance(function, dict)
                else None
            )
        else:
            name = getattr(tool, "name", None)
            desc = getattr(tool, "description", None)
        if not isinstance(name, str) or not name:
            continue
        entry = {"name": name}
        if isinstance(desc, str) and desc:
            entry["description"] = (
                desc[:120] + "…" if len(desc) > 120 else desc
            )
        digest.append(entry)
    return digest


def _header_sha(system_text: str, tools: list) -> str:
    """Stable content hash of a request header (prompt + tools)."""
    hasher = hashlib.sha256()
    hasher.update(system_text.encode("utf-8", "replace"))
    hasher.update(b"\0")
    hasher.update(
        json.dumps(
            [entry.get("name") for entry in tools],
            ensure_ascii=False,
        ).encode("utf-8", "replace"),
    )
    return hasher.hexdigest()[:16]


def _maybe_record_header(
    run: TraceRun,
    service: Any,
    messages: list,
    tools: Any,
) -> None:
    """Record an ``llm/header`` event when the request header changed.

    Mirrors the epoch-header idea of an event-sourced trace log: the
    full system prompt and tool catalog are stored once per change,
    keyed by a content hash; unchanged headers cost nothing.
    """
    if not service.config.capture_headers:
        return
    try:
        system_text = _system_prompt(messages)
        tools = _tools_digest(tools)
        sha = _header_sha(system_text, tools)
        if service.last_header_sha(run.session_id) == sha:
            return
        prev = service.last_header_sha(run.session_id)
        service.set_last_header_sha(run.session_id, sha)
        schemas = (
            list(tools) if isinstance(tools, (list, tuple)) else []
        )
        service.store.append(
            run.session_id,
            ev.EVENT_LLM_HEADER,
            run.trace_id,
            service.sanitize(
                {
                    "sha256": sha,
                    **({"prev_sha256": prev} if prev else {}),
                    "reason": "initial" if prev is None else "changed",
                    "system_prompt": system_text,
                    "prompt_chars": len(system_text),
                    "tools": [entry["name"] for entry in tools],
                    "tools_detail": tools,
                    "schemas": schemas,
                },
                limit=service.config.max_prompt_chars,
            ),
        )
    except Exception:  # pylint: disable=broad-except
        logger.debug(
            "agent-trace: header capture failed",
            exc_info=True,
        )


class _StreamCapture:
    """Accumulates text/thinking/usage from a ChatResponse chunk stream.

    The chunk with ``is_last=True`` carries the complete assembled
    content; if the stream ends without one (torn stream), the joined
    deltas are used as a fallback. Also records lightweight timing
    (time-to-first-chunk and decode duration) without storing any
    chunk content.
    """

    def __init__(self, start_perf: float) -> None:
        self.usage: Any = None
        self.model: Optional[str] = None
        self._start_perf = start_perf
        self._first_chunk_at: Optional[float] = None
        self._ended_at: Optional[float] = None
        self._final_text = ""
        self._final_thinking = ""
        self._delta_text: list = []
        self._delta_thinking: list = []
        self._tool_calls: dict = {}
        self._saw_last = False

    def absorb(self, chunk: Any) -> None:
        if self._first_chunk_at is None:
            self._first_chunk_at = time.perf_counter()
        if self.usage is None:
            usage = getattr(chunk, "usage", None)
            if usage is not None:
                self.usage = usage
        if self.model is None:
            self.model = _chunk_model(chunk)
        content = getattr(chunk, "content", None)
        for call in _blocks_tool_calls(content):
            if call["id"]:
                self._tool_calls[call["id"]] = call
        if getattr(chunk, "is_last", False):
            self._saw_last = True
            self._final_text = _block_texts(content)
            self._final_thinking = _blocks_thinking(content)
        else:
            part = _block_texts(content)
            if part:
                self._delta_text.append(part)
            thinking = _blocks_thinking(content)
            if thinking:
                self._delta_thinking.append(thinking)

    def finish(self) -> None:
        """Mark normal stream completion (records the decode end)."""
        if self._ended_at is None:
            self._ended_at = time.perf_counter()

    def timing(self) -> Optional[dict]:
        """TTFT/decode timing in ms, when a full stream was observed."""
        if self._first_chunk_at is None or self._ended_at is None:
            return None
        ttft_ms = max(
            0.0,
            (self._first_chunk_at - self._start_perf) * 1000.0,
        )
        decode_ms = max(
            0.0,
            (self._ended_at - self._first_chunk_at) * 1000.0,
        )
        return {
            "ttft_ms": round(ttft_ms, 1),
            "decode_ms": round(decode_ms, 1),
        }

    def text(self) -> str:
        if self._saw_last:
            return self._final_text
        return "".join(self._delta_text)

    def thinking(self) -> str:
        if self._saw_last:
            return self._final_thinking
        return "".join(self._delta_thinking)

    def tool_calls(self) -> list:
        return list(self._tool_calls.values())


# ----------------------------------------------------------------------
# Runtime lifecycle hooks
# ----------------------------------------------------------------------


class AgentTraceRunStartHook(HookBase):
    """Open a run trace at PRE_EXECUTE and publish ``run/start``."""

    phase = Phase.PRE_EXECUTE
    name = "agent_trace_run_start"
    # After ContextVarsSetupHook(10); independent of Langfuse(12).
    priority = 14

    async def run(self, ctx: HookContext) -> HookResult:
        service = get_service()
        if service is None or not service.enabled:
            return HookResult()
        session_id = ctx.session_id or ""
        if not session_id:
            return HookResult()
        request = ctx.request
        run = TraceRun(
            trace_id=uuid.uuid4().hex,
            session_id=session_id,
            agent_id=ctx.agent_id or "",
            channel=getattr(request, "channel", "") or "",
            started_at=time.time(),
        )
        ctx.extras[RUN_EXTRAS_KEY] = run
        ctx.extras[TOKEN_EXTRAS_KEY] = set_current_run(run)
        input_count = len(list(ctx.input_msgs or []))
        root_session_id = ctx.root_session_id or ""
        root_agent_id = ctx.root_agent_id or ""
        _safe_append(
            run,
            ev.EVENT_RUN_START,
            {
                "trace_id": run.trace_id,
                "agent_id": run.agent_id,
                "channel": run.channel,
                "trigger": _request_trigger(request),
                "query": _last_user_text(ctx.input_msgs),
                "input_msgs_count": input_count,
                "messages": _messages_digest(ctx.input_msgs),
                **(
                    {"root_session_id": root_session_id}
                    if root_session_id and root_session_id != session_id
                    else {}
                ),
                **(
                    {"root_agent_id": root_agent_id}
                    if root_agent_id and root_agent_id != run.agent_id
                    else {}
                ),
            },
            header={
                "session_id": run.session_id,
                "agent_id": run.agent_id,
                "channel": run.channel,
                "created_at": ev.utc_now_iso(),
            },
        )
        # Sub-agent run: leave a spawn pointer in the root session's
        # trace so the parent ledger links to the child session
        # (dsh's parentSession lineage, pointer flavor).
        if root_session_id and root_session_id != session_id:
            try:
                service.store.append(
                    root_session_id,
                    ev.EVENT_AGENT_SPAWN,
                    run.trace_id,
                    {
                        "child_session_id": session_id,
                        "child_agent_id": run.agent_id,
                        "child_trace_id": run.trace_id,
                    },
                )
            except Exception:  # pylint: disable=broad-except
                logger.debug(
                    "agent-trace: spawn pointer append failed",
                    exc_info=True,
                )
        return HookResult()


class AgentTraceInboundHook(HookBase):
    """Record the typed inbound content parts at PRE_EXECUTE.

    Runs right after the run opens (priority 15 > run_start's 14) so
    the event carries the active run_id — at PRE_DISPATCH no run
    exists yet and the event would be orphaned in the ledger fold.
    The raw native channel payload never reaches the runtime, but
    ``ctx.request.input`` carries typed content parts (text/image/
    audio/video/file) plus loosely-typed ``channel_meta`` — this is
    the dsh ``user/message`` counterpart.
    """

    phase = Phase.PRE_EXECUTE
    name = "agent_trace_inbound"
    priority = 15

    async def run(self, ctx: HookContext) -> HookResult:
        service = get_service()
        if service is None or not service.enabled:
            return HookResult()
        if not service.config.capture_messages:
            return HookResult()
        run = get_current_run()
        trace_id = run.trace_id if run is not None else ""
        session_id = ctx.session_id or ""
        if not session_id:
            return HookResult()
        parts = []
        try:
            inputs = list(getattr(ctx.request, "input", None) or [])
            for message in inputs:
                for item in getattr(message, "content", None) or []:
                    entry = {"type": type(item).__name__}
                    for attr in ("text", "image_url", "video_url"):
                        value = getattr(item, attr, None)
                        if isinstance(value, str) and value:
                            entry[attr] = value
                            break
                    else:
                        filename = getattr(item, "filename", None)
                        if isinstance(filename, str) and filename:
                            entry["filename"] = filename
                    parts.append(entry)
        except Exception:  # pylint: disable=broad-except
            logger.debug(
                "agent-trace: inbound extraction failed",
                exc_info=True,
            )
        if not parts:
            return HookResult()
        _safe_append(
            TraceRun(
                trace_id=trace_id,
                session_id=session_id,
                agent_id=ctx.agent_id or "",
            ),
            ev.EVENT_MSG_IN,
            {
                "parts": parts,
                "channel_meta": _channel_meta_digest(ctx.request),
            },
        )
        return HookResult()


class AgentTraceReplyHook(HookBase):
    """Record the final assistant reply at POST_RESPONSE.

    Reads the last assistant Msg from ``ctx.agent.state.context`` —
    the same access path the runtime itself uses. This is the dsh
    outbound-message counterpart short of the per-channel send path
    (which has no plugin seam).
    """

    phase = Phase.POST_RESPONSE
    # After session_save(90) so persisted and in-memory views agree.
    name = "agent_trace_reply"
    priority = 95

    async def run(self, ctx: HookContext) -> HookResult:
        service = get_service()
        if service is None or not service.enabled:
            return HookResult()
        if not service.config.capture_messages:
            return HookResult()
        run = get_current_run()
        if run is None or run.ended:
            return HookResult()
        state = getattr(ctx.agent, "state", None)
        context = getattr(state, "context", None) if state else None
        if not context:
            return HookResult()
        reply = None
        for message in reversed(list(context)):
            if getattr(message, "role", None) == "assistant":
                reply = message
                break
        if reply is None:
            return HookResult()
        _safe_append(
            run,
            ev.EVENT_MSG_OUT,
            {
                "text": _block_texts(getattr(reply, "content", None)),
                "agent_id": run.agent_id,
            },
        )
        return HookResult()


class AgentTraceRunEndHook(HookBase):
    """Publish ``run/end`` with success status at POST_RESPONSE."""

    phase = Phase.POST_RESPONSE
    name = "agent_trace_run_end"
    priority = 100

    async def run(self, ctx: HookContext) -> HookResult:
        run = ctx.extras.get(RUN_EXTRAS_KEY)
        if not isinstance(run, TraceRun) or run.ended:
            return HookResult()
        # On the error path POST_RESPONSE is skipped in favour of
        # ON_ERROR; guard anyway so success never overwrites an error.
        if run.status != STATUS_RUNNING:
            return HookResult()
        run.status = STATUS_SUCCESS
        run.ended = True
        _safe_append(
            run,
            ev.EVENT_RUN_END,
            {
                "status": STATUS_SUCCESS,
                "duration_ms": round(
                    (time.time() - run.started_at) * 1000.0, 1
                ),
            },
        )
        return HookResult()


class AgentTraceErrorHook(HookBase):
    """Mark the active run as error/cancelled at ON_ERROR."""

    phase = Phase.ON_ERROR
    name = "agent_trace_error"
    priority = 100

    async def run(self, ctx: HookContext) -> HookResult:
        run = ctx.extras.get(RUN_EXTRAS_KEY)
        if not isinstance(run, TraceRun):
            return HookResult()
        error = ctx.error
        if isinstance(error, asyncio.CancelledError):
            run.status = STATUS_CANCELLED
            run.error = None
        else:
            run.status = STATUS_ERROR
            run.error = (
                _error_text(error) if error is not None else "unknown"
            )
        return HookResult()


class AgentTraceFinalizeHook(HookBase):
    """Close the run at FINALLY: terminal event + ContextVar cleanup.

    FINALLY also runs on the cancelled/timed-out paths, so it is the
    safety net that guarantees every ``run/start`` gets a ``run/end``.
    """
    phase = Phase.FINALLY
    name = "agent_trace_finalize"
    priority = 60

    async def run(self, ctx: HookContext) -> HookResult:
        run = ctx.extras.pop(RUN_EXTRAS_KEY, None)
        token = ctx.extras.pop(TOKEN_EXTRAS_KEY, None)
        if isinstance(run, TraceRun) and not run.ended:
            run.ended = True
            data: dict = {
                "status": run.status,
                "duration_ms": round(
                    (time.time() - run.started_at) * 1000.0, 1
                ),
            }
            if run.error:
                data["error"] = run.error
            _safe_append(run, ev.EVENT_RUN_END, data)
        if token is not None:
            try:
                clear_current_run(token)
            except ValueError:
                logger.debug(
                    "agent-trace: stale ContextVar token on finalize",
                )
        return HookResult()


# ----------------------------------------------------------------------
# AgentScope middleware
# ----------------------------------------------------------------------


class TraceMiddleware(MiddlewareBase):
    """Observe LLM and tool calls of the current run (read-only)."""

    async def on_model_call(
        self,
        agent: Any,
        input_kwargs: dict,
        next_handler: Callable[..., Any],
    ) -> Any:
        service = get_service()
        run = get_current_run()
        if (
            run is None
            or service is None
            or not service.enabled
            or not service.config.capture_llm
        ):
            return await next_handler(**input_kwargs)
        messages = list(input_kwargs.get("messages") or [])
        _maybe_record_header(
            run,
            service,
            messages,
            input_kwargs.get("tools"),
        )
        model_hint = _model_name(agent, input_kwargs)
        provider_hint = _provider_name(agent, input_kwargs)
        _safe_append(
            run,
            ev.EVENT_LLM_CALL,
            {
                "model": model_hint,
                **({"provider": provider_hint} if provider_hint else {}),
                "messages_count": len(messages),
                "last_user_text": _last_user_text(messages),
                "messages": _messages_digest(messages),
                "options": _options_digest(input_kwargs),
            },
        )
        start = time.perf_counter()

        def _record_result(
            exc: BaseException = None,
            text: str = "",
            thinking: str = "",
            usage: Any = None,
            model: Optional[str] = None,
            timing: Optional[dict] = None,
            tool_calls: Optional[list] = None,
            note: Optional[str] = None,
        ) -> None:
            data: dict = {
                "model": model or model_hint,
                "duration_ms": _elapsed_ms(start),
            }
            if exc is not None:
                data["error"] = _error_text(exc)
            else:
                if text:
                    data["text"] = text
                if thinking:
                    data["thinking"] = thinking
                usage_dict = _usage_dict(usage)
                if usage_dict:
                    data["usage"] = usage_dict
                if timing:
                    data["timing"] = timing
                if tool_calls:
                    data["tool_calls"] = tool_calls
                if note:
                    data["note"] = note
            _safe_append(run, ev.EVENT_LLM_RESULT, data)

        try:
            result = await next_handler(**input_kwargs)
        except Exception as exc:  # pylint: disable=broad-except
            _record_result(exc=exc)
            raise

        if isasyncgen(result):
            # Streaming model call: the returned value is a chunk
            # stream consumed later by the agent. Tee it so we can
            # capture the assembled text/thinking/usage as it flows.
            async def _traced_stream():
                capture = _StreamCapture(start)
                try:
                    async for chunk in result:
                        capture.absorb(chunk)
                        yield chunk
                except GeneratorExit:
                    # Consumer closed the stream early (e.g. abort):
                    # record what was observed so far. Buffering is
                    # synchronous, so this is safe inside GeneratorExit.
                    capture.finish()
                    _record_result(
                        text=capture.text(),
                        thinking=capture.thinking(),
                        usage=capture.usage,
                        model=capture.model,
                        timing=capture.timing(),
                        tool_calls=capture.tool_calls(),
                        note="stream closed early",
                    )
                    raise
                except Exception as exc:  # pylint: disable=broad-except
                    _record_result(exc=exc)
                    raise
                capture.finish()
                _record_result(
                    text=capture.text(),
                    thinking=capture.thinking(),
                    usage=capture.usage,
                    model=capture.model,
                    timing=capture.timing(),
                    tool_calls=capture.tool_calls(),
                )

            return _traced_stream()

        content = getattr(result, "content", None)
        _record_result(
            text=_response_text(result),
            thinking=_blocks_thinking(content),
            usage=getattr(result, "usage", None),
            model=_chunk_model(result),
            tool_calls=_blocks_tool_calls(content) or None,
        )
        return result

    async def on_acting(
        self,
        agent: Any,  # pylint: disable=unused-argument
        input_kwargs: dict,
        next_handler: Callable[..., AsyncGenerator[Any, None]],
    ) -> AsyncGenerator[Any, None]:
        service = get_service()
        run = get_current_run()
        if (
            run is None
            or service is None
            or not service.enabled
            or not service.config.capture_tools
        ):
            async for item in next_handler():
                yield item
            return
        tool_call = input_kwargs.get("tool_call")
        tool_name = getattr(tool_call, "name", "unknown")
        raw_input = getattr(tool_call, "input", None)
        if isinstance(raw_input, (dict, list)):
            try:
                tool_input: str = json.dumps(
                    raw_input,
                    ensure_ascii=False,
                    default=str,
                )
            except (TypeError, ValueError):
                tool_input = str(raw_input)
        else:
            tool_input = (
                raw_input if isinstance(raw_input, str) else str(raw_input)
            )
        _safe_append(
            run,
            ev.EVENT_TOOL_CALL,
            {
                "name": tool_name,
                "input": tool_input,
                "tool_call_id": getattr(tool_call, "id", None),
            },
        )
        start = time.perf_counter()
        final_response: Optional[ToolResponse] = None
        try:
            async for item in next_handler():
                if isinstance(item, ToolResponse):
                    final_response = item
                yield item
        except GeneratorExit:
            # The consumer closed the acting stream early (observed
            # with the tool coordinator's offload path). Record the
            # result from whatever was observed — buffering here is
            # synchronous, so this stays GeneratorExit-safe.
            _safe_append(
                run,
                ev.EVENT_TOOL_RESULT,
                {
                    "ok": final_response is not None,
                    "duration_ms": _elapsed_ms(start),
                    "output": _block_texts(
                        getattr(final_response, "content", None),
                    ),
                    "tool_call_id": getattr(tool_call, "id", None),
                    **(
                        {"note": "stream closed early"}
                        if final_response is None
                        else {}
                    ),
                },
            )
            raise
        except Exception as exc:  # pylint: disable=broad-except
            _safe_append(
                run,
                ev.EVENT_TOOL_RESULT,
                {
                    "ok": False,
                    "duration_ms": _elapsed_ms(start),
                    "error": _error_text(exc),
                    "tool_call_id": getattr(tool_call, "id", None),
                },
            )
            raise
        _safe_append(
            run,
            ev.EVENT_TOOL_RESULT,
            {
                "ok": True,
                "duration_ms": _elapsed_ms(start),
                "output": _block_texts(
                    getattr(final_response, "content", None),
                ),
                "tool_call_id": getattr(tool_call, "id", None),
            },
        )


def trace_middleware_factory(
    ctx: Any,  # pylint: disable=unused-argument
    agent_config: Any,  # pylint: disable=unused-argument
) -> Optional[TraceMiddleware]:
    """Middleware factory: active only while tracing is enabled."""
    service = get_service()
    if service is None or not service.enabled:
        return None
    return TraceMiddleware()
