# -*- coding: utf-8 -*-
"""Runtime configuration for the agent-trace plugin.

The configuration is managed by the plugin itself and persists to
``<WORKING_DIR>/traces/config.json``. It is loaded once on plugin
register and can be updated at runtime through the REST config
endpoint.
"""
from __future__ import annotations

import json
import logging
import re
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Dict, List

logger = logging.getLogger("qwenpaw.plugins.agent_trace")

CONFIG_FILENAME = "config.json"

_MIN_PAYLOAD_CHARS = 100
_MAX_PAYLOAD_CHARS = 200_000
_MAX_RETENTION_DAYS = 3650
_MAX_TOTAL_MB = 100_000
_MAX_SESSIONS = 100_000


@dataclass
class TraceConfig:
    """Trace recording settings with conservative defaults."""

    enabled: bool = True
    capture_llm: bool = True
    capture_tools: bool = True
    capture_headers: bool = True
    capture_approvals: bool = True
    capture_messages: bool = True
    max_payload_chars: int = 4000
    max_prompt_chars: int = 200_000
    redact_patterns: List[str] = field(default_factory=list)
    retention_days: int = 30
    max_total_mb: int = 512
    max_sessions: int = 500

    def to_dict(self) -> Dict[str, Any]:
        """Return a JSON-serializable snapshot of the settings."""
        return {
            "enabled": self.enabled,
            "capture_llm": self.capture_llm,
            "capture_tools": self.capture_tools,
            "capture_headers": self.capture_headers,
            "capture_approvals": self.capture_approvals,
            "capture_messages": self.capture_messages,
            "max_payload_chars": self.max_payload_chars,
            "max_prompt_chars": self.max_prompt_chars,
            "redact_patterns": list(self.redact_patterns),
            "retention_days": self.retention_days,
            "max_total_mb": self.max_total_mb,
            "max_sessions": self.max_sessions,
        }

    def update_from_dict(self, payload: Dict[str, Any]) -> None:
        """Validate and apply a partial settings update in place."""
        if not isinstance(payload, dict):
            raise ValueError("config payload must be an object")
        header_keys = (
            "enabled",
            "capture_llm",
            "capture_tools",
            "capture_headers",
            "capture_approvals",
            "capture_messages",
        )
        for key in header_keys:
            if key in payload:
                value = payload[key]
                if not isinstance(value, bool):
                    raise ValueError(f"{key} must be a boolean")
                setattr(self, key, value)
        if "max_payload_chars" in payload:
            self.max_payload_chars = self._clamp_int(
                payload["max_payload_chars"],
                "max_payload_chars",
                _MIN_PAYLOAD_CHARS,
                _MAX_PAYLOAD_CHARS,
            )
        if "max_prompt_chars" in payload:
            self.max_prompt_chars = self._clamp_int(
                payload["max_prompt_chars"],
                "max_prompt_chars",
                1000,
                2_000_000,
            )
        if "retention_days" in payload:
            self.retention_days = self._clamp_int(
                payload["retention_days"],
                "retention_days",
                1,
                _MAX_RETENTION_DAYS,
            )
        if "max_total_mb" in payload:
            self.max_total_mb = self._clamp_int(
                payload["max_total_mb"],
                "max_total_mb",
                1,
                _MAX_TOTAL_MB,
            )
        if "max_sessions" in payload:
            self.max_sessions = self._clamp_int(
                payload["max_sessions"],
                "max_sessions",
                1,
                _MAX_SESSIONS,
            )
        if "redact_patterns" in payload:
            patterns = payload["redact_patterns"]
            if not isinstance(patterns, list) or not all(
                isinstance(p, str) for p in patterns
            ):
                raise ValueError("redact_patterns must be a list of strings")
            for pattern in patterns:
                try:
                    re.compile(pattern)
                except re.error as exc:
                    raise ValueError(
                        f"invalid redact pattern {pattern!r}: {exc}",
                    ) from exc
            self.redact_patterns = list(patterns)

    @classmethod
    def load(cls, root: Path) -> "TraceConfig":
        """Load settings from ``root/config.json``, falling back to
        defaults when the file is missing or unreadable."""
        config = cls()
        path = Path(root) / CONFIG_FILENAME
        try:
            raw = json.loads(path.read_text(encoding="utf-8"))
        except FileNotFoundError:
            return config
        except (OSError, json.JSONDecodeError):
            logger.warning(
                "agent-trace: unreadable config %s; using defaults",
                path,
            )
            return config
        try:
            config.update_from_dict(raw)
        except ValueError as exc:
            logger.warning(
                "agent-trace: invalid config %s (%s); using defaults",
                path,
                exc,
            )
            return cls()
        return config

    def save(self, root: Path) -> None:
        """Persist settings to ``root/config.json`` (best effort)."""
        path = Path(root)
        try:
            path.mkdir(parents=True, exist_ok=True)
            (path / CONFIG_FILENAME).write_text(
                json.dumps(self.to_dict(), indent=2, ensure_ascii=False),
                encoding="utf-8",
            )
        except OSError:
            logger.warning(
                "agent-trace: failed to save config under %s",
                path,
                exc_info=True,
            )

    @staticmethod
    def _clamp_int(value: Any, name: str, low: int, high: int) -> int:
        if isinstance(value, bool) or not isinstance(value, int):
            raise ValueError(f"{name} must be an integer")
        return max(low, min(high, value))
