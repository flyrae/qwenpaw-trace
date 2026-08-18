# -*- coding: utf-8 -*-
"""Plugin singleton wiring the trace store and its configuration."""
from __future__ import annotations

import asyncio
import logging
from pathlib import Path
from typing import Any, List, Optional, Pattern

from qwenpaw.constant import WORKING_DIR

from .config import TraceConfig
from .events import compile_patterns, sanitize_payload
from .store import TraceStore

logger = logging.getLogger("qwenpaw.plugins.agent_trace")

TRACES_DIRNAME = "traces"
CLEANUP_INTERVAL_SECONDS = 24 * 3600

_service: Optional["TraceService"] = None


def _safe_mtime(path: Path) -> Optional[float]:
    try:
        return path.stat().st_mtime
    except OSError:
        return None


def get_service() -> Optional["TraceService"]:
    """Return the process-wide trace service, if the plugin is loaded."""
    return _service


def set_service(service: Optional["TraceService"]) -> None:
    """Install (or clear) the process-wide trace service."""
    global _service
    _service = service


class TraceService:
    """Owns the configuration, the JSONL store, and payload sanity."""

    def __init__(self, root: Optional[Path] = None) -> None:
        if root is None:
            root = WORKING_DIR / TRACES_DIRNAME
        self.root = Path(root)
        self.config = TraceConfig.load(self.root)
        self.store = TraceStore(self.root, self.config)
        self._patterns: Optional[List[Pattern[str]]] = None
        self._cleanup_task: Optional["asyncio.Task"] = None
        self._titles_stamp: Optional[tuple] = None
        self._titles_cache: Optional[dict] = None
        self._chat_id_index: Optional[dict] = None
        # Last recorded request-header sha per session, so unchanged
        # prompts are not re-recorded on every model call.
        self._header_sha_by_session: dict = {}

    @property
    def enabled(self) -> bool:
        """Whether recording is currently switched on."""
        return self.config.enabled

    def sanitize(self, data: Any, limit: Optional[int] = None) -> Any:
        """Apply redaction + truncation to an event payload."""
        if self._patterns is None:
            self._patterns = compile_patterns(
                self.config.redact_patterns,
            )
        return sanitize_payload(
            data,
            limit=self.config.max_payload_chars if limit is None else limit,
            patterns=self._patterns,
        )

    def last_header_sha(self, session_id: str) -> Optional[str]:
        """Content sha of the last recorded header for a session."""
        return self._header_sha_by_session.get(session_id)

    def set_last_header_sha(self, session_id: str, sha: str) -> None:
        """Record the sha of the most recent header event."""
        self._header_sha_by_session[session_id] = sha

    def invalidate_patterns(self) -> None:
        """Recompile redaction patterns after a config change."""
        self._patterns = None

    async def start(self) -> None:
        """Recover torn runs, launch the flush task, enforce retention."""
        self.store.start()
        recovered = await asyncio.to_thread(
            self.store.recover_interrupted_runs,
        )
        if recovered:
            await self.store.flush()
            logger.info(
                "agent-trace: closed %d run(s) left open by a previous"
                " process",
                recovered,
            )
        await self._cleanup_once()
        self._cleanup_task = asyncio.ensure_future(self._cleanup_loop())

    async def _cleanup_loop(self) -> None:
        """Enforce retention once a day; never raises out."""
        while True:
            await asyncio.sleep(CLEANUP_INTERVAL_SECONDS)
            try:
                await self._cleanup_once()
            except Exception:  # pylint: disable=broad-except
                logger.debug(
                    "agent-trace: scheduled cleanup failed",
                    exc_info=True,
                )

    async def _cleanup_once(self) -> None:
        removed = await asyncio.to_thread(self.store.cleanup)
        for session_id in removed:
            self._header_sha_by_session.pop(session_id, None)
        if removed:
            logger.info(
                "agent-trace: retention cleanup removed %d session "
                "file(s) under %s",
                len(removed),
                self.root,
            )

    # ------------------------------------------------------------------
    # Chat metadata enrichment (Console chat list parity)
    # ------------------------------------------------------------------

    def list_sessions_with_titles(self) -> list:
        """Session summaries enriched with Console chat names/status.

        Reads each workspace's ``chats.json`` (the same source the
        Console chat list uses) and attaches ``title``/``chat_status``
        by session_id. Cached until any chats.json mtime changes.
        """
        sessions = self.store.list_sessions()
        titles = self._chat_titles()
        if not titles:
            return sessions
        for summary in sessions:
            info = titles.get(summary.get("session_id", ""))
            if info:
                summary["title"] = info["title"]
                summary["chat_status"] = info["chat_status"]
                if not summary.get("agent_id") and info.get("agent"):
                    summary["agent_id"] = info["agent"]
        return sessions

    def _chat_titles(self) -> dict:
        import json

        workspaces = self.root.parent / "workspaces"
        try:
            files = sorted(workspaces.glob("*/chats.json"))
        except OSError:
            return {}
        stamp = tuple(
            (str(path), path.stat().st_mtime)
            for path in files
            if _safe_mtime(path) is not None
        )
        if stamp == self._titles_stamp and self._titles_cache is not None:
            return self._titles_cache
        titles: dict = {}
        chat_ids: dict = {}
        for path in files:
            try:
                data = json.loads(path.read_text(encoding="utf-8"))
            except (OSError, ValueError):
                continue
            if isinstance(data, dict):
                # Persisted shape: {"chats": [...], "version": 1}
                data = data.get("chats")
            if not isinstance(data, list):
                continue
            for item in data:
                if not isinstance(item, dict):
                    continue
                session_id = item.get("session_id")
                if not isinstance(session_id, str) or not session_id:
                    continue
                # Local chat id (Console library id) → backend session id.
                chat_local_id = item.get("id")
                if (
                    isinstance(chat_local_id, str)
                    and chat_local_id
                    and chat_local_id != session_id
                ):
                    chat_ids.setdefault(chat_local_id, session_id)
                # First workspace wins; traces are keyed by session_id
                # and duplicates across agents are rare.
                titles.setdefault(
                    session_id,
                    {
                        "title": str(item.get("name") or ""),
                        "chat_status": str(item.get("status") or ""),
                        "agent": str(
                            path.parent.name or "",
                        ),
                    },
                )
        self._titles_stamp = stamp
        self._titles_cache = titles
        self._chat_id_index = chat_ids
        return titles

    def resolve_chat_session(self, chat_id: str) -> Optional[str]:
        """Map a Console chat id to its backend trace session id.

        The Console's session library addresses chats by local ids
        (``<timestamp>-<rand>``) whose ``realId``/``session_id`` mapping
        only lives in each workspace's ``chats.json``. Accepts either
        form: a local chat id resolves through the index; a backend
        session id (a trace file exists) resolves to itself.
        """
        titles = self._chat_titles()
        if self._chat_id_index is None:
            return None
        mapped = self._chat_id_index.get(chat_id)
        if mapped:
            return mapped
        if titles.get(chat_id) or self.store.session_path(chat_id).exists():
            return chat_id
        return None

    async def shutdown(self) -> None:
        """Stop the flush task after draining buffered events."""
        if self._cleanup_task is not None:
            self._cleanup_task.cancel()
            self._cleanup_task = None
        await self.store.shutdown()

    async def delete_session(self, session_id: str) -> bool:
        """Delete a session file and forget its header cache."""
        deleted = await self.store.delete_session(session_id)
        if deleted:
            self._header_sha_by_session.pop(session_id, None)
        return deleted

    def save_config(self) -> None:
        """Persist the current settings next to the trace files."""
        self.config.save(self.root)
        self.invalidate_patterns()
