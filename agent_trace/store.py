# -*- coding: utf-8 -*-
"""Append-only JSONL trace storage, one file per session.

Layout::

    <root>/<session_id>.jsonl

The first line of each file is a session header record; every
following line is one trace event. Writes are buffered in memory and
flushed by a background task on a short coalescing window, so the
agent loop never blocks on disk IO. A torn tail line (crash residue)
is tolerated on read.
"""
from __future__ import annotations

import asyncio
import json
import logging
import re
import time
from collections import deque
from pathlib import Path
from typing import Any, Dict, List, Optional

from .config import TraceConfig
from .context import STATUS_RUNNING
from .events import (
    EVENT_AGENT_SPAWN,
    EVENT_LLM_RESULT,
    EVENT_RUN_END,
    EVENT_RUN_START,
    EVENT_TOOL_RESULT,
    make_event,
)

logger = logging.getLogger("qwenpaw.plugins.agent_trace")

SESSION_HEADER_TYPE = "session"
SCHEMA_VERSION = 1
FLUSH_COALESCE_SECONDS = 0.2

_SESSION_ID_RE = re.compile(r"^[A-Za-z0-9_.\-]{1,128}$")


def valid_session_id(session_id: Any) -> bool:
    """Return True when ``session_id`` is safe to use in a filename."""
    return (
        isinstance(session_id, str)
        and _SESSION_ID_RE.match(session_id) is not None
    )


class TraceStore:
    """Buffered JSONL writer and reader for per-session trace logs."""

    def __init__(self, root: Path, config: TraceConfig) -> None:
        self._root = Path(root)
        self._config = config
        self._pending: Dict[str, List[str]] = {}
        self._next_seq: Dict[str, int] = {}
        self._known_files: set = set()
        self._write_locks: Dict[str, asyncio.Lock] = {}
        self._flush_event: Optional[asyncio.Event] = None
        self._flush_task: Optional[asyncio.Task] = None
        self._root_ready = False
        self._deleted: set = set()

    @property
    def root(self) -> Path:
        """Directory holding the ``*.jsonl`` session files."""
        return self._root

    # ------------------------------------------------------------------
    # Lifecycle
    # ------------------------------------------------------------------

    def start(self) -> None:
        """Create the storage directory and launch the flush task."""
        self._root.mkdir(parents=True, exist_ok=True)
        if self._flush_event is None:
            self._flush_event = asyncio.Event()
        if self._flush_task is None:
            self._flush_task = asyncio.create_task(self._flush_loop())

    async def shutdown(self) -> None:
        """Stop the flush task and drain any buffered events."""
        task = self._flush_task
        self._flush_task = None
        if task is not None:
            task.cancel()
            try:
                await task
            except asyncio.CancelledError:
                pass
        await self.flush()

    async def _flush_loop(self) -> None:
        assert self._flush_event is not None
        while True:
            await self._flush_event.wait()
            self._flush_event.clear()
            # Coalesce bursts (e.g. one agent turn) into one disk write.
            await asyncio.sleep(FLUSH_COALESCE_SECONDS)
            await self.flush()

    def recover_interrupted_runs(self) -> int:
        """Close runs left open by a previous process (crash recovery).

        Mirrors the "interrupted-turn close" of an event-sourced log:
        any ``run/start`` without a matching ``run/end`` in an existing
        file must belong to a dead process, so a synthetic
        ``run/end {status: interrupted}`` closer is appended for it.
        Runs opened by *this* process are never touched.
        """
        recovered = 0
        try:
            paths = list(self._root.glob("*.jsonl"))
        except OSError:
            return 0
        for path in paths:
            session_id = path.stem
            session = self.read_session(session_id)
            if session is None:
                continue
            open_runs: list = []
            last_seq = 0
            for event in session["events"]:
                seq = event.get("seq")
                if isinstance(seq, int) and seq > last_seq:
                    last_seq = seq
                run_id = event.get("run_id")
                if event.get("type") == EVENT_RUN_START:
                    if run_id:
                        open_runs.append(run_id)
                elif event.get("type") == EVENT_RUN_END:
                    if run_id in open_runs:
                        open_runs.remove(run_id)
            # Prime the seq cache so the first append in this process
            # never needs the full-file _peek_last_seq scan.
            if session_id not in self._next_seq and last_seq:
                self._next_seq[session_id] = last_seq + 1
            self._known_files.add(session_id)
            for run_id in open_runs:
                try:
                    self.append(
                        session_id,
                        EVENT_RUN_END,
                        run_id,
                        {
                            "status": "interrupted",
                            "note": "auto-closed at startup"
                            " (previous process ended without run/end)",
                        },
                    )
                    recovered += 1
                except ValueError:
                    continue
        return recovered

    async def flush(self) -> None:
        """Write all buffered events to disk immediately."""
        pending, self._pending = self._pending, {}
        if not pending:
            return
        for session_id, lines in pending.items():
            try:
                await self._write_lines(session_id, lines)
            except (OSError, ValueError):
                logger.debug(
                    "agent-trace: write failed for session %s",
                    session_id,
                    exc_info=True,
                )

    # ------------------------------------------------------------------
    # Writing
    # ------------------------------------------------------------------

    def append(
        self,
        session_id: str,
        event_type: str,
        run_id: str,
        data: Any,
        *,
        header: Optional[Dict[str, Any]] = None,
    ) -> int:
        """Buffer one event; returns its assigned ``seq``.

        When the session file does not exist yet and ``header`` is
        given, the header record is written ahead of the event.
        Returns ``-1`` (no-op) for a session deleted in this process,
        unless the event opens a brand-new run for it.
        """
        if session_id in self._deleted:
            if event_type != EVENT_RUN_START:
                return -1
            self._deleted.discard(session_id)
        path = self._path(session_id)
        seq = self._ensure_seq(session_id)
        self._next_seq[session_id] = seq + 1
        event = make_event(seq, event_type, run_id, data)
        lines = [
            json.dumps(event, ensure_ascii=False, default=str) + "\n",
        ]
        if (
            header is not None
            and session_id not in self._known_files
            and not path.exists()
        ):
            header_record = {
                "type": SESSION_HEADER_TYPE,
                "version": SCHEMA_VERSION,
                **header,
            }
            lines.insert(
                0,
                json.dumps(
                    header_record,
                    ensure_ascii=False,
                    default=str,
                )
                + "\n",
            )
        self._known_files.add(session_id)
        self._pending.setdefault(session_id, []).extend(lines)
        if self._flush_event is not None:
            self._flush_event.set()
        return seq

    async def _write_lines(self, session_id: str, lines: List[str]) -> None:
        if not self._root_ready:
            self._root.mkdir(parents=True, exist_ok=True)
            self._root_ready = True
        lock = self._write_locks.setdefault(session_id, asyncio.Lock())
        path = self._path(session_id)
        async with lock:
            with open(path, "a", encoding="utf-8") as handle:
                handle.write("".join(lines))

    def _path(self, session_id: str) -> Path:
        if not valid_session_id(session_id):
            raise ValueError(f"invalid session id: {session_id!r}")
        return self._root / f"{session_id}.jsonl"

    def session_path(self, session_id: str) -> Path:
        """Public path accessor; raises ValueError on unsafe ids."""
        return self._path(session_id)

    def _ensure_seq(self, session_id: str) -> int:
        seq = self._next_seq.get(session_id)
        if seq is None:
            seq = self._peek_last_seq(session_id) + 1
            self._next_seq[session_id] = seq
        return seq

    def _peek_last_seq(self, session_id: str) -> int:
        try:
            path = self._path(session_id)
        except ValueError:
            return 0
        if not path.exists():
            return 0
        last = 0
        try:
            with open(path, encoding="utf-8") as handle:
                for line in handle:
                    try:
                        record = json.loads(line)
                    except json.JSONDecodeError:
                        continue
                    seq = record.get("seq")
                    if isinstance(seq, int) and seq > last:
                        last = seq
        except OSError:
            return 0
        return last

    # ------------------------------------------------------------------
    # Reading
    # ------------------------------------------------------------------

    def read_session(self, session_id: str) -> Optional[Dict[str, Any]]:
        """Read the full session log: header + events + file stats."""
        try:
            path = self._path(session_id)
        except ValueError:
            return None
        if not path.exists():
            return None
        header: Optional[Dict[str, Any]] = None
        events: List[Dict[str, Any]] = []
        try:
            with open(path, encoding="utf-8") as handle:
                for line in handle:
                    line = line.strip()
                    if not line:
                        continue
                    try:
                        record = json.loads(line)
                    except json.JSONDecodeError:
                        # Torn tail line from a crash; skip it.
                        continue
                    if not isinstance(record, dict):
                        continue
                    if record.get("type") == SESSION_HEADER_TYPE:
                        if header is None:
                            header = record
                        continue
                    if isinstance(record.get("seq"), int):
                        events.append(record)
        except OSError:
            return None
        stat = path.stat()
        return {
            "header": header,
            "events": events,
            "size_bytes": stat.st_size,
            "mtime": stat.st_mtime,
        }

    def read_events(
        self,
        session_id: str,
        *,
        before_seq: Optional[int] = None,
        limit: int = 200,
    ) -> Optional[Dict[str, Any]]:
        """Read a window of events in ascending ``seq`` order.

        Streams the file once and keeps only the target window in
        memory (bounded by ``limit``), so paging a huge session does
        not load the whole log. Without ``before_seq`` the *last*
        ``limit`` events are returned (tail page); with it, the
        ``limit`` events immediately before that seq — enabling
        "load older" pagination.
        """
        try:
            path = self._path(session_id)
        except ValueError:
            return None
        if not path.exists():
            return None
        header: Optional[Dict[str, Any]] = None
        total = 0
        window: deque = (
            deque(maxlen=limit) if limit and limit > 0 else deque()
        )
        try:
            with open(path, encoding="utf-8") as handle:
                for line in handle:
                    line = line.strip()
                    if not line:
                        continue
                    try:
                        record = json.loads(line)
                    except json.JSONDecodeError:
                        # Torn tail line from a crash; skip it.
                        continue
                    if not isinstance(record, dict):
                        continue
                    if record.get("type") == SESSION_HEADER_TYPE:
                        if header is None:
                            header = record
                        continue
                    if not isinstance(record.get("seq"), int):
                        continue
                    total += 1
                    if before_seq is not None:
                        if record["seq"] >= before_seq:
                            continue
                    window.append(record)
        except OSError:
            return None
        stat = path.stat()
        return {
            "header": header,
            "events": list(window),
            "total_events": total,
            "size_bytes": stat.st_size,
            "mtime": stat.st_mtime,
        }

    def list_sessions(self) -> List[Dict[str, Any]]:
        """Summarize every session file, newest activity first."""
        summaries: List[Dict[str, Any]] = []
        try:
            paths = list(self._root.glob("*.jsonl"))
        except OSError:
            return []
        for path in paths:
            summary = self._summarize_file(path)
            if summary is not None:
                summaries.append(summary)
        summaries.sort(
            key=lambda item: (item["mtime"], item["session_id"]),
            reverse=True,
        )
        return summaries

    # ------------------------------------------------------------------
    # Stats & lineage projections
    # ------------------------------------------------------------------

    def compute_stats(self, session_id: str) -> Optional[Dict[str, Any]]:
        """Whole-log statistics fold for one session.

        Mirrors the session-stats idea of an event-sourced trace:
        durations, TTFT/decode spans, token buckets (including cache),
        and a per-model breakdown.
        """
        session = self.read_session(session_id)
        if session is None:
            return None
        stats: Dict[str, Any] = {
            "runs": 0,
            "llm_calls": 0,
            "tool_calls": 0,
            "errors": 0,
            "llm_ms_total": 0.0,
            "tool_ms_total": 0.0,
            "ttft_ms_first": None,
            "ttft_ms_sum": 0.0,
            "decode_ms_total": 0.0,
            "input_tokens": 0,
            "output_tokens": 0,
            "cache_read_tokens": 0,
            "cache_write_tokens": 0,
            "total_tokens": 0,
            "models": {},
            "first_event_t": None,
            "last_event_t": None,
        }
        ttft_count = 0
        for event in session["events"]:
            data = event.get("data") or {}
            if not isinstance(data, dict):
                continue
            event_type = event.get("type")
            if stats["first_event_t"] is None:
                stats["first_event_t"] = event.get("t")
            stats["last_event_t"] = event.get("t")
            if event_type == EVENT_RUN_START:
                stats["runs"] += 1
            elif event_type == EVENT_RUN_END:
                if data.get("status") == "error":
                    stats["errors"] += 1
            elif event_type == EVENT_LLM_RESULT:
                stats["llm_calls"] += 1
                stats["llm_ms_total"] += _num(data.get("duration_ms"))
                timing = data.get("timing")
                if isinstance(timing, dict):
                    ttft = _num(timing.get("ttft_ms"))
                    if ttft:
                        stats["ttft_ms_sum"] += ttft
                        ttft_count += 1
                        if stats["ttft_ms_first"] is None:
                            stats["ttft_ms_first"] = ttft
                    stats["decode_ms_total"] += _num(
                        timing.get("decode_ms"),
                    )
                usage = data.get("usage")
                if isinstance(usage, dict):
                    model = str(data.get("model") or "unknown")
                    per_model = stats["models"].setdefault(
                        model,
                        {"calls": 0, "input_tokens": 0, "output_tokens": 0},
                    )
                    per_model["calls"] += 1
                    per_model["input_tokens"] += int(
                        _num(usage.get("input_tokens")),
                    )
                    per_model["output_tokens"] += int(
                        _num(usage.get("output_tokens")),
                    )
                    stats["input_tokens"] += int(
                        _num(usage.get("input_tokens")),
                    )
                    stats["output_tokens"] += int(
                        _num(usage.get("output_tokens")),
                    )
                    stats["cache_read_tokens"] += int(
                        _num(usage.get("cache_input_tokens")),
                    )
                    stats["cache_write_tokens"] += int(
                        _num(usage.get("cache_creation_input_tokens")),
                    )
            elif event_type == EVENT_TOOL_RESULT:
                stats["tool_calls"] += 1
                stats["tool_ms_total"] += _num(data.get("duration_ms"))
                if data.get("ok") is False or data.get("error"):
                    stats["errors"] += 1
        stats["total_tokens"] = (
            stats["input_tokens"] + stats["output_tokens"]
        )
        stats["ttft_ms_avg"] = (
            stats["ttft_ms_sum"] / ttft_count if ttft_count else None
        )
        for key in ("llm_ms_total", "tool_ms_total", "decode_ms_total"):
            stats[key] = round(stats[key], 1)
        stats["events"] = len(session["events"])
        return stats

    def lineage(self, session_id: str) -> Optional[Dict[str, Any]]:
        """Root link plus spawned children for one session.

        Spawn pointers live in the ROOT session's own file, so both
        directions resolve from a single read; the root link comes
        from the ``root_session_id`` recorded on sub-agent runs.
        """
        session = self.read_session(session_id)
        if session is None:
            return None
        root: Optional[str] = None
        children: List[Dict[str, Any]] = []
        for event in session["events"]:
            data = event.get("data") or {}
            if not isinstance(data, dict):
                continue
            if event.get("type") == EVENT_RUN_START:
                candidate = data.get("root_session_id")
                if (
                    isinstance(candidate, str)
                    and candidate
                    and candidate != session_id
                ):
                    root = candidate
            elif event.get("type") == EVENT_AGENT_SPAWN:
                child = data.get("child_session_id")
                if isinstance(child, str) and child:
                    children.append(
                        {
                            "child_session_id": child,
                            "child_agent_id": data.get(
                                "child_agent_id",
                            ),
                            "t": event.get("t"),
                        },
                    )
        return {"root_session_id": root, "children": children}

    def _summarize_file(self, path: Path) -> Optional[Dict[str, Any]]:
        header: Optional[Dict[str, Any]] = None
        runs = 0
        llm_calls = 0
        tool_calls = 0
        total_tokens = 0
        open_runs: set = set()
        last_status = "unknown"
        last_event_t: Optional[str] = None
        try:
            stat = path.stat()
            with open(path, encoding="utf-8") as handle:
                for line in handle:
                    line = line.strip()
                    if not line:
                        continue
                    try:
                        record = json.loads(line)
                    except json.JSONDecodeError:
                        continue
                    if not isinstance(record, dict):
                        continue
                    event_type = record.get("type")
                    if event_type == SESSION_HEADER_TYPE:
                        if header is None:
                            header = record
                        continue
                    if not isinstance(record.get("seq"), int):
                        continue
                    last_event_t = record.get("t")
                    run_id = record.get("run_id")
                    data = record.get("data") or {}
                    if event_type == EVENT_RUN_START:
                        runs += 1
                        if run_id:
                            open_runs.add(run_id)
                    elif event_type == EVENT_RUN_END:
                        if run_id:
                            open_runs.discard(run_id)
                        last_status = (
                            data.get("status")
                            if isinstance(data, dict)
                            else None
                        ) or STATUS_UNKNOWN
                    elif event_type == EVENT_LLM_RESULT:
                        llm_calls += 1
                        total_tokens += _usage_tokens(data)
                    elif event_type == EVENT_TOOL_RESULT:
                        tool_calls += 1
        except OSError:
            return None
        if header is None and runs == 0:
            # No recognizable content; skip stray files.
            return None
        session_id = path.stem
        if isinstance(header, dict):
            session_id = header.get("session_id") or path.stem
        status = STATUS_RUNNING if open_runs else last_status
        created_at = header.get("created_at") if header else None
        return {
            "session_id": session_id,
            "agent_id": (header or {}).get("agent_id", ""),
            "channel": (header or {}).get("channel", ""),
            "created_at": created_at,
            "last_event_t": last_event_t,
            "mtime": stat.st_mtime,
            "runs": runs,
            "llm_calls": llm_calls,
            "tool_calls": tool_calls,
            "total_tokens": total_tokens,
            "status": status,
            "size_bytes": stat.st_size,
        }

    # ------------------------------------------------------------------
    # Deleting / exporting
    # ------------------------------------------------------------------

    async def delete_session(self, session_id: str) -> bool:
        """Drop buffered events and remove the session file."""
        try:
            path = self._path(session_id)
        except ValueError:
            return False
        # Drop pending lines first so flush() cannot resurrect the file.
        self._pending.pop(session_id, None)
        self._next_seq.pop(session_id, None)
        self._known_files.discard(session_id)
        # Suppress straggler events from an in-flight run until a new
        # run explicitly re-opens the session.
        self._deleted.add(session_id)
        lock = self._write_locks.setdefault(session_id, asyncio.Lock())
        async with lock:
            if not path.exists():
                return False
            path.unlink()
        return True

    async def export_session(self, session_id: str) -> Optional[Path]:
        """Flush and return the raw JSONL path for download."""
        await self.flush()
        try:
            path = self._path(session_id)
        except ValueError:
            return None
        return path if path.exists() else None

    # ------------------------------------------------------------------
    # Retention
    # ------------------------------------------------------------------

    def cleanup(self) -> List[str]:
        """Enforce retention policy; returns removed session ids."""
        removed: List[str] = []
        now = time.time()
        cutoff = now - self._config.retention_days * 86400.0
        try:
            paths = list(self._root.glob("*.jsonl"))
        except OSError:
            return removed
        kept: List[Path] = []
        for path in paths:
            try:
                stat = path.stat()
            except OSError:
                continue
            if stat.st_mtime < cutoff:
                if _unlink(path):
                    removed.append(path.stem)
                self._forget(path)
                continue
            kept.append(path)
        kept.sort(key=lambda p: p.stat().st_mtime)
        total_bytes = sum(p.stat().st_size for p in kept)
        budget = self._config.max_total_mb * 1024 * 1024
        while kept and total_bytes > budget:
            victim = kept.pop(0)
            try:
                total_bytes -= victim.stat().st_size
            except OSError:
                pass
            if _unlink(victim):
                removed.append(victim.stem)
            self._forget(victim)
        while len(kept) > self._config.max_sessions:
            victim = kept.pop(0)
            if _unlink(victim):
                removed.append(victim.stem)
            self._forget(victim)
        return removed

    def _forget(self, path: Path) -> None:
        session_id = path.stem
        self._next_seq.pop(session_id, None)
        self._known_files.discard(session_id)
        self._deleted.discard(session_id)


STATUS_UNKNOWN = "unknown"


def _num(value: Any) -> float:
    """Numeric coercion for aggregation (non-numbers count as 0)."""
    if isinstance(value, bool) or value is None:
        return 0.0
    if isinstance(value, (int, float)):
        return float(value)
    return 0.0


def _unlink(path: Path) -> bool:
    try:
        path.unlink()
        return True
    except OSError:
        return False


def _usage_tokens(data: Any) -> int:
    """Best-effort token total from an ``llm/result`` data payload."""
    if not isinstance(data, dict):
        return 0
    usage = data.get("usage")
    if not isinstance(usage, dict):
        return 0
    total = 0
    for key in ("total_tokens", "input_tokens", "output_tokens"):
        value = usage.get(key)
        if isinstance(value, (int, float)) and not isinstance(value, bool):
            if key == "total_tokens":
                return int(value)
            total += int(value)
    return total
