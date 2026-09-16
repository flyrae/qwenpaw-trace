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

# Environment overrides: AGENT_TRACE_<FIELD> wins over config.json
# (e.g. AGENT_TRACE_REMOTE_URL / AGENT_TRACE_REMOTE_TOKEN /
# AGENT_TRACE_ENABLED). Values are parsed by the field's default type;
# invalid ones log a warning and are skipped — env must never crash
# the plugin. List fields (redact_patterns) are not env-configurable.
_ENV_PREFIX = "AGENT_TRACE_"
_ENV_TRUE = {"1", "true", "yes", "on"}
_ENV_FALSE = {"0", "false", "no", "off"}


def _env_overrides() -> Dict[str, Any]:
    """Collect AGENT_TRACE_* overrides, coerced to field types."""
    import os

    defaults = TraceConfig()
    overrides: Dict[str, Any] = {}
    for name, raw in os.environ.items():
        if not name.startswith(_ENV_PREFIX):
            continue
        key = name[len(_ENV_PREFIX):].lower()
        if not hasattr(defaults, key) or key == "redact_patterns":
            continue
        value = raw.strip()
        if value == "":
            continue
        current = getattr(defaults, key)
        try:
            if isinstance(current, bool):
                lowered = value.lower()
                if lowered in _ENV_TRUE:
                    overrides[key] = True
                elif lowered in _ENV_FALSE:
                    overrides[key] = False
                else:
                    raise ValueError(f"not a boolean: {value!r}")
            elif isinstance(current, int) and not isinstance(current, bool):
                overrides[key] = int(value)
            elif isinstance(current, float):
                overrides[key] = float(value)
            else:
                overrides[key] = value
        except ValueError:
            logger.warning(
                "agent-trace: ignoring invalid env override %s=%r",
                name,
                value,
            )
    # URL shape is validated up-front so update_from_dict never ends
    # up half-applied with a bad remote_url.
    if "remote_url" in overrides and not str(
        overrides["remote_url"]
    ).startswith(("http://", "https://")):
        logger.warning(
            "agent-trace: ignoring AGENT_TRACE_REMOTE_URL (must start"
            " with http(s)://): %r",
            overrides["remote_url"],
        )
        overrides.pop("remote_url")
    return overrides

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
    # Remote collector (enterprise deployments): ship every event to a
    # central server after the local append. Local files stay the
    # source of truth; shipping is best-effort with a disk queue.
    remote_enabled: bool = False
    remote_url: str = ""
    remote_token: str = ""
    # Bootstrap credential for fleet deployments: on first load the
    # shipper exchanges it at POST /enroll for an instance-scoped
    # token (persisted to traces/.instance-token). Precedence for
    # requests: instance token > remote_enroll_key > remote_token.
    remote_enroll_key: str = ""
    remote_instance_id: str = ""
    remote_batch_max_events: int = 200
    remote_batch_max_bytes: int = 1_000_000
    remote_flush_interval_s: float = 2.0
    remote_queue_max: int = 10_000
    remote_timeout_s: float = 5.0

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
            "remote_enabled": self.remote_enabled,
            "remote_url": self.remote_url,
            "remote_token": "***" if self.remote_token else "",
            "remote_enroll_key": (
                "***" if self.remote_enroll_key else ""
            ),
            "remote_instance_id": self.remote_instance_id,
            "remote_batch_max_events": self.remote_batch_max_events,
            "remote_batch_max_bytes": self.remote_batch_max_bytes,
            "remote_flush_interval_s": self.remote_flush_interval_s,
            "remote_queue_max": self.remote_queue_max,
            "remote_timeout_s": self.remote_timeout_s,
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
        for key in ("remote_enabled",):
            if key in payload:
                value = payload[key]
                if not isinstance(value, bool):
                    raise ValueError(f"{key} must be a boolean")
                setattr(self, key, value)
        for key in (
            "remote_url",
            "remote_token",
            "remote_enroll_key",
            "remote_instance_id",
        ):
            if key in payload:
                value = payload[key]
                if not isinstance(value, str):
                    raise ValueError(f"{key} must be a string")
                # The masked token round-trips as its placeholder; keep
                # the stored one unless a real value arrives.
                if value == "***":
                    continue
                setattr(self, key, value.strip())
        if "remote_url" in payload and self.remote_url:
            if not (
                self.remote_url.startswith("http://")
                or self.remote_url.startswith("https://")
            ):
                raise ValueError("remote_url must start with http(s)://")
        if "remote_batch_max_events" in payload:
            self.remote_batch_max_events = self._clamp_int(
                payload["remote_batch_max_events"],
                "remote_batch_max_events",
                1,
                10_000,
            )
        if "remote_batch_max_bytes" in payload:
            self.remote_batch_max_bytes = self._clamp_int(
                payload["remote_batch_max_bytes"],
                "remote_batch_max_bytes",
                10_000,
                50_000_000,
            )
        if "remote_flush_interval_s" in payload:
            self.remote_flush_interval_s = self._clamp_float(
                payload["remote_flush_interval_s"],
                "remote_flush_interval_s",
                0.2,
                300.0,
            )
        if "remote_queue_max" in payload:
            self.remote_queue_max = self._clamp_int(
                payload["remote_queue_max"],
                "remote_queue_max",
                100,
                1_000_000,
            )
        if "remote_timeout_s" in payload:
            self.remote_timeout_s = self._clamp_float(
                payload["remote_timeout_s"],
                "remote_timeout_s",
                1.0,
                120.0,
            )

    @classmethod
    def load(cls, root: Path) -> "TraceConfig":
        """Load settings from ``root/config.json`` (defaults when the
        file is missing/unreadable), then apply ``AGENT_TRACE_*``
        environment overrides on top (deployment stamps config via
        env; file values stay as the base)."""
        config = cls()
        path = Path(root) / CONFIG_FILENAME
        try:
            raw = json.loads(path.read_text(encoding="utf-8"))
        except FileNotFoundError:
            raw = None
        except (OSError, json.JSONDecodeError):
            logger.warning(
                "agent-trace: unreadable config %s; using defaults",
                path,
            )
            raw = None
        if raw is not None:
            try:
                config.update_from_dict(raw)
            except ValueError as exc:
                logger.warning(
                    "agent-trace: invalid config %s (%s); using defaults",
                    path,
                    exc,
                )
                config = cls()
        overrides = _env_overrides()
        if overrides:
            logger.info(
                "agent-trace: env overrides applied: %s",
                ", ".join(sorted(overrides)),
            )
            try:
                config.update_from_dict(overrides)
            except ValueError as exc:
                logger.warning(
                    "agent-trace: invalid env override ignored (%s)",
                    exc,
                )
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

    @staticmethod
    def _clamp_float(value: Any, name: str, low: float, high: float) -> float:
        if isinstance(value, bool) or not isinstance(value, (int, float)):
            raise ValueError(f"{name} must be a number")
        return max(low, min(high, float(value)))
