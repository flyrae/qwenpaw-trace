# -*- coding: utf-8 -*-
"""Intercept the OpenAI SDK's chat.completions.create call to capture
the **actual API payload** — the formatted messages AFTER the provider
formatter has run (including role=tool results, merged system prompts,
and the exact dicts sent over the wire).

This complements the middleware-level capture (which sees AgentScope
Msg objects before formatting) with the wire-level truth, using the
same wrapt-based technique as Langfuse's OpenAI integration.

Lifecycle: apply_api_payload_patch() at plugin startup,
restore_api_payload_patch() at shutdown/uninstall.
"""
from __future__ import annotations

import logging
import time
from typing import Any

logger = logging.getLogger("qwenpaw.plugins.agent_trace")

_TARGETS = [
    ("openai.resources.chat.completions", "AsyncCompletions.create"),
    ("openai.resources.chat.completions", "Completions.create"),
]

# Leading keyword order of ChatCompletions.create(); only used to map
# POSITIONAL calls onto kwargs (the normal keyword path is exact).
_POS_PARAMS = (
    "messages",
    "model",
    "temperature",
    "top_p",
    "max_tokens",
    "stream",
    "tools",
    "tool_choice",
    "response_format",
)

_PARAM_KEYS = (
    "model",
    "temperature",
    "top_p",
    "stream",
    "tool_choice",
    "response_format",
    "reasoning_effort",
    "max_tokens",
)


def _not_given_type() -> type | None:
    """The openai NotGiven sentinel class, when importable."""
    try:
        from openai._types import NotGiven  # noqa: PLC0415

        return NotGiven
    except Exception:  # noqa: BLE001
        return None


def _merge_call_kwargs(args: tuple, kwargs: dict) -> dict:
    """Best-effort single kwargs view of a create() invocation."""
    call_kwargs: dict = {}
    for i, name in enumerate(_POS_PARAMS):
        if i < len(args) and args[i] is not None:
            call_kwargs[name] = args[i]
    not_given = _not_given_type()
    for key, value in kwargs.items():
        if value is None:
            continue
        if not_given is not None and isinstance(value, not_given):
            continue
        call_kwargs[key] = value
    return call_kwargs


def _safe_extract_messages(kwargs: dict) -> list:
    """Pull the messages list from create() kwargs without crashing."""
    msgs = kwargs.get("messages")
    if not isinstance(msgs, list):
        return []
    out = []
    for m in msgs:
        if not isinstance(m, dict):
            # openai may use pydantic models; best-effort dict conversion
            if hasattr(m, "model_dump"):
                try:
                    m = m.model_dump(exclude_none=True)
                except Exception:  # noqa: BLE001
                    m = {"role": "?", "content": str(m)[:200]}
            else:
                m = {"role": "?", "content": str(m)[:200]}
        content = m.get("content")
        if isinstance(content, list):
            # multimodal content blocks: keep type + text/image refs
            compact = []
            for block in content:
                if isinstance(block, dict):
                    compact.append(
                        {
                            "type": block.get("type", "?"),
                            **(
                                {"text": block["text"]}
                                if isinstance(block.get("text"), str)
                                else {}
                            ),
                        },
                    )
                else:
                    compact.append(str(block)[:120])
            m = {**m, "content": compact}
        tool_calls = m.get("tool_calls")
        if isinstance(tool_calls, list):
            compact_calls = []
            for call in tool_calls:
                if not isinstance(call, dict):
                    compact_calls.append(str(call)[:120])
                    continue
                fn = call.get("function") or {}
                compact_calls.append(
                    {
                        "id": call.get("id"),
                        "name": fn.get("name")
                        if isinstance(fn, dict)
                        else None,
                        "arguments": fn.get("arguments")
                        if isinstance(fn, dict)
                        else None,
                    },
                )
            m = {**m, "tool_calls": compact_calls}
        out.append(m)
    return out


def _safe_extract_params(kwargs: dict) -> dict:
    """Extract scalar generation params for the event payload."""
    params: dict = {}
    for key in _PARAM_KEYS:
        value = kwargs.get(key)
        if value is None or isinstance(value, (bool, int, float, str)):
            if value is not None:
                params[key] = value
        elif isinstance(value, (dict, list)):
            params[key] = value
    return params


def _extract_usage(response: Any) -> dict | None:
    """Best-effort usage extraction from a ChatCompletion or the last
    streamed chunk."""
    usage = getattr(response, "usage", None)
    if usage is None and isinstance(response, dict):
        usage = response.get("usage")
    if usage is None:
        return None
    if isinstance(usage, dict):
        return {
            "input_tokens": usage.get("prompt_tokens", 0),
            "output_tokens": usage.get("completion_tokens", 0),
            "total_tokens": usage.get("total_tokens", 0),
        }
    return {
        "input_tokens": getattr(usage, "prompt_tokens", 0) or 0,
        "output_tokens": getattr(usage, "completion_tokens", 0) or 0,
        "total_tokens": getattr(usage, "total_tokens", 0) or 0,
    }


def _record_api_event(
    direction: str,
    model: str,
    messages: list | None = None,
    params: dict | None = None,
    usage: dict | None = None,
    error: str | None = None,
    duration_ms: float | None = None,
) -> None:
    """Write one sanitized llm/api_request or llm/api_response event."""
    from .context import get_current_run
    from .service import get_service

    service = get_service()
    run = get_current_run()
    if service is None or run is None:
        return

    data: dict[str, Any] = {"model": model}
    if messages is not None:
        data["messages"] = messages
        data["message_count"] = len(messages)
    if params:
        data["params"] = params
    if usage:
        data["usage"] = usage
    if error:
        data["error"] = error[:500]
    if duration_ms is not None:
        data["duration_ms"] = round(duration_ms, 1)

    # Wire-level messages repeat the system prompt on every call; run
    # them through the same redact/truncate pass as every other event.
    data = service.sanitize(data)

    try:
        service.store.append(
            run.session_id,
            f"llm/api_{direction}",
            run.trace_id,
            data,
        )
    except Exception:  # noqa: BLE001
        logger.debug(
            "agent-trace: api payload event write failed", exc_info=True
        )


def _make_wrapper(args: tuple, kwargs: dict):
    """Build the common interception logic for sync/async create()."""
    call_kwargs = _merge_call_kwargs(args, kwargs)

    model = str(call_kwargs.get("model", "unknown"))
    params = _safe_extract_params(call_kwargs)
    formatted_msgs = _safe_extract_messages(call_kwargs)
    is_stream = bool(call_kwargs.get("stream", False))

    _record_api_event(
        "request", model, messages=formatted_msgs, params=params
    )

    start = time.perf_counter()

    def _on_result(result: Any) -> None:
        duration_ms = (time.perf_counter() - start) * 1000.0
        # Usage was already recorded; for streams it lives on the last
        # chunk which the tee passes here.
        _record_api_event(
            "response",
            model,
            usage=_extract_usage(result),
            duration_ms=duration_ms,
        )

    def _on_error(exc: BaseException) -> None:
        duration_ms = (time.perf_counter() - start) * 1000.0
        _record_api_event(
            "response", model, error=str(exc), duration_ms=duration_ms
        )

    return is_stream, _on_result, _on_error


# ── Async wrapper ────────────────────────────────────────────────────────


async def _async_create_wrapper(wrapped, instance, args, kwargs):
    """wrapt wrapper for AsyncCompletions.create."""
    if not _is_active():
        return await wrapped(*args, **kwargs)

    _, on_result, on_error = _make_wrapper(args, kwargs)

    try:
        result = await wrapped(*args, **kwargs)
        if hasattr(result, "__aiter__"):
            # It's an async stream — tee it to capture the final chunk.
            return _TeeAsyncStream(result, on_result, on_error)
        on_result(result)
        return result
    except Exception as exc:  # noqa: BLE001
        on_error(exc)
        raise


class _TeeAsyncStream:
    """Wrap an async stream to capture the final chunk's usage.

    Everything except iteration delegates to the wrapped stream, so
    consumers that read ``.response``, ``await close()``, or use it as
    an async context manager keep working.
    """

    def __init__(self, stream, on_result, on_error):
        self._stream = stream
        self._on_result = on_result
        self._on_error = on_error
        self._last_chunk = None
        self._settled = False

    def __getattr__(self, name):
        return getattr(self._stream, name)

    def __aiter__(self):
        return self

    async def __anext__(self):
        try:
            chunk = await self._stream.__anext__()
            self._last_chunk = chunk
            return chunk
        except StopAsyncIteration:
            if not self._settled:
                self._settled = True
                self._on_result(self._last_chunk)
            raise
        except Exception as exc:  # noqa: BLE001
            if not self._settled:
                self._settled = True
                self._on_error(exc)
            raise

    async def __aenter__(self):
        enter = getattr(self._stream, "__aenter__", None)
        if enter is not None:
            await enter()
        return self

    async def __aexit__(self, exc_type, exc, tb):
        if exc is not None and not self._settled:
            self._settled = True
            self._on_error(exc)
        exit_ = getattr(self._stream, "__aexit__", None)
        if exit_ is not None:
            await exit_(exc_type, exc, tb)


# ── Sync wrapper ─────────────────────────────────────────────────────────


def _sync_create_wrapper(wrapped, instance, args, kwargs):
    """wrapt wrapper for Completions.create (sync)."""
    if not _is_active():
        return wrapped(*args, **kwargs)

    _, on_result, _on_error = _make_wrapper(args, kwargs)

    try:
        result = wrapped(*args, **kwargs)
        on_result(result)
        return result
    except Exception as exc:  # noqa: BLE001
        _on_error(exc)
        raise


# ── Patch lifecycle ──────────────────────────────────────────────────────

_active = False


def _is_active() -> bool:
    return _active


def _resolve_target(module_name: str, attr_path: str):
    """Walk ``module.Class.method`` down to the bound callable."""
    node: Any = __import__(module_name, fromlist=["_x"])
    for part in attr_path.split("."):
        node = getattr(node, part)
    return node


def apply_api_payload_patch() -> None:
    """Attach the wrapt wrappers to the OpenAI SDK.

    Never raises: when ``wrapt`` is unavailable (e.g. the plugin was
    copied into place without its dependencies), the wire-level API
    capture degrades to off with one warning and the rest of the
    plugin — runs, LLM/tool events, shipping — keeps working.
    """
    global _active
    if _active:
        return

    try:
        from wrapt import wrap_function_wrapper  # noqa: PLC0415
    except ImportError:
        logger.warning(
            "agent-trace: wrapt is not installed — wire-level API "
            "payload capture is DISABLED (everything else works). "
            "Install it with `pip install wrapt` in QwenPaw's Python "
            "to enable; `qwenpaw plugin install` does this "
            "automatically."
        )
        return

    for module_name, attr_path in _TARGETS:
        target = f"{module_name}.{attr_path}"
        try:
            existing = _resolve_target(module_name, attr_path)
            if hasattr(existing, "__wrapped__"):
                # Someone (Langfuse, litellm, ...) already wrapped it;
                # wrapt chains transparently — just note it.
                logger.debug(
                    "agent-trace: %s already wrapped, chaining", target
                )

            wrapper = (
                _async_create_wrapper
                if attr_path.startswith("Async")
                else _sync_create_wrapper
            )

            wrap_function_wrapper(module_name, attr_path, wrapper)
            logger.info(
                "agent-trace: API payload patch applied to %s", target
            )
        except Exception:  # noqa: BLE001
            logger.warning(
                "agent-trace: failed to patch %s", target, exc_info=True
            )

    _active = True


def restore_api_payload_patch() -> None:
    """Remove the wrapt wrappers (best-effort).

    wrapt doesn't support un-wrapping directly; we rely on the _active
    flag to make our wrappers pass-through. A full restore requires
    process restart.
    """
    global _active
    _active = False
    logger.info(
        "agent-trace: API payload patch deactivated (pass-through until restart)"
    )
