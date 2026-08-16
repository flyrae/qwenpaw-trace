# -*- coding: utf-8 -*-
"""Event vocabulary and payload sanitization for agent traces.

Events follow the append-only session-log idea of an event-sourced
trajectory: one JSON object per line, a monotonically increasing
``seq`` per session file, and ``call``/``result`` pairs so consumers
can render in-flight steps.
"""
from __future__ import annotations

import re
from datetime import datetime, timezone
from typing import Any, List, Pattern

EVENT_RUN_START = "run/start"
EVENT_RUN_END = "run/end"
EVENT_AGENT_SPAWN = "agent/spawn"
EVENT_MSG_IN = "message/inbound"
EVENT_MSG_OUT = "message/outbound"
EVENT_APPROVAL_ASKED = "approval/asked"
EVENT_APPROVAL_DECIDED = "approval/decided"
EVENT_LLM_CALL = "llm/call"
EVENT_LLM_RESULT = "llm/result"
EVENT_LLM_HEADER = "llm/header"
EVENT_TOOL_CALL = "tool/call"
EVENT_TOOL_RESULT = "tool/result"

MAX_LIST_ITEMS = 100

_REDACTED = "***"

_BUILTIN_REDACT_PATTERNS: List[Pattern[str]] = [
    # OpenAI-style API keys
    re.compile(r"sk-[A-Za-z0-9_\-]{8,}"),
    # Authorization headers / bearer tokens (keep the "Bearer" prefix)
    re.compile(r"(?<=Bearer\s)[A-Za-z0-9\-._~+/]+=*"),
    # GitHub personal access tokens
    re.compile(r"gh[pousr]_[A-Za-z0-9]{20,}"),
]


def utc_now_iso() -> str:
    """Current UTC time as an ISO-8601 string (millisecond precision)."""
    return datetime.now(timezone.utc).isoformat(timespec="milliseconds")


def redact_text(text: str, patterns: List[Pattern[str]]) -> str:
    """Replace anything matching ``patterns`` with a placeholder."""
    for pattern in patterns:
        text = pattern.sub(_REDACTED, text)
    return text


def compile_patterns(user_patterns: List[str]) -> List[Pattern[str]]:
    """Combine built-in redaction patterns with user-supplied ones.

    Invalid user patterns are skipped with no failure: recording must
    never break the agent loop.
    """
    patterns = list(_BUILTIN_REDACT_PATTERNS)
    for raw in user_patterns or []:
        try:
            patterns.append(re.compile(raw))
        except re.error:
            continue
    return patterns


def sanitize_payload(
    data: Any,
    *,
    limit: int,
    patterns: List[Pattern[str]],
) -> Any:
    """Return a sanitized deep copy of ``data`` for persistence.

    Strings are redacted then truncated to ``limit`` characters; lists
    are capped at :data:`MAX_LIST_ITEMS`; unknown objects are stringified.
    When any string was truncated, a ``_truncated_fields`` marker listing
    the affected keys is attached to the resulting dict.
    """
    truncated: List[str] = []

    def _walk(value: Any, path: str) -> Any:
        if isinstance(value, str):
            text = redact_text(value, patterns)
            if limit > 0 and len(text) > limit:
                truncated.append(path or "value")
                return text[:limit]
            return text
        if isinstance(value, dict):
            walked = {}
            for key, item in value.items():
                key_str = str(key)
                walked[key_str] = _walk(
                    item,
                    f"{path}.{key_str}" if path else key_str,
                )
            return walked
        if isinstance(value, (list, tuple)):
            items = [
                _walk(item, f"{path}[{index}]")
                for index, item in enumerate(value[:MAX_LIST_ITEMS])
            ]
            if len(value) > MAX_LIST_ITEMS:
                items.append(
                    f"...({len(value) - MAX_LIST_ITEMS} more)",
                )
            return items
        if value is None or isinstance(value, (bool, int, float)):
            return value
        text = redact_text(str(value), patterns)
        if limit > 0 and len(text) > limit:
            truncated.append(path or "value")
            return text[:limit]
        return text

    result = _walk(data, "")
    if truncated:
        if isinstance(result, dict):
            result = {**result, "_truncated_fields": truncated}
        else:
            result = {"value": result, "_truncated_fields": truncated}
    return result


def make_event(
    seq: int,
    event_type: str,
    run_id: str,
    data: Any,
) -> dict:
    """Assemble one trace event record ready for JSON serialization."""
    return {
        "seq": seq,
        "t": utc_now_iso(),
        "type": event_type,
        "run_id": run_id,
        "data": data,
    }
