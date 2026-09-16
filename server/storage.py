# -*- coding: utf-8 -*-
"""SQLite storage for the central trace collector.

Idempotency: events are keyed by (instance_id, session_id, seq) with
INSERT OR IGNORE, so re-sends after a network blip never duplicate.
Session aggregates update only when a row was actually inserted.
"""
from __future__ import annotations

import json
import sqlite3
import threading
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional

_SCHEMA = """
CREATE TABLE IF NOT EXISTS instances(
    instance_id TEXT PRIMARY KEY,
    hostname TEXT,
    plugin_version TEXT,
    first_seen TEXT,
    last_seen TEXT
);
CREATE TABLE IF NOT EXISTS events(
    instance_id TEXT NOT NULL,
    session_id TEXT NOT NULL,
    seq INTEGER NOT NULL,
    t TEXT,
    type TEXT,
    run_id TEXT,
    data TEXT,
    PRIMARY KEY(instance_id, session_id, seq)
);
CREATE INDEX IF NOT EXISTS idx_events_lookup
    ON events(instance_id, session_id, seq);
CREATE INDEX IF NOT EXISTS idx_events_type
    ON events(instance_id, session_id, type);
CREATE TABLE IF NOT EXISTS sessions(
    instance_id TEXT NOT NULL,
    session_id TEXT NOT NULL,
    header TEXT,
    agent_id TEXT,
    channel TEXT,
    user_id TEXT,
    title TEXT,
    first_t TEXT,
    last_t TEXT,
    runs INTEGER NOT NULL DEFAULT 0,
    llm_calls INTEGER NOT NULL DEFAULT 0,
    tool_calls INTEGER NOT NULL DEFAULT 0,
    errors INTEGER NOT NULL DEFAULT 0,
    input_tokens INTEGER NOT NULL DEFAULT 0,
    output_tokens INTEGER NOT NULL DEFAULT 0,
    status TEXT,
    event_count INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY(instance_id, session_id)
);
"""


def _num(value: Any) -> float:
    if isinstance(value, bool) or not isinstance(value, (int, float)):
        return 0.0
    return float(value)


class TraceDatabase:
    """Thread-safe SQLite wrapper for ingested traces."""

    def __init__(self, path: Path) -> None:
        self._path = Path(path)
        self._path.parent.mkdir(parents=True, exist_ok=True)
        self._lock = threading.Lock()
        self._db = sqlite3.connect(self._path, check_same_thread=False)
        self._db.row_factory = sqlite3.Row
        self._db.executescript(_SCHEMA)
        self._db.commit()

    def close(self) -> None:
        with self._lock:
            self._db.close()

    # ------------------------------------------------------------------
    # Ingest
    # ------------------------------------------------------------------

    def ingest(
        self,
        instance: Dict[str, Any],
        events: Iterable[Dict[str, Any]],
    ) -> Dict[str, int]:
        """Upsert one batch; returns {'inserted': n, 'duplicates': m}."""
        inserted = 0
        duplicates = 0
        instance_id = str(instance.get("instance_id") or "unknown")
        events = list(events)
        first_t = next((e.get("t") for e in events if e.get("t")), None)
        with self._lock:
            self._db.execute(
                """
                INSERT INTO instances(instance_id, hostname,
                    plugin_version, first_seen, last_seen)
                VALUES(?, ?, ?, ?, ?)
                ON CONFLICT(instance_id) DO UPDATE SET
                    hostname=excluded.hostname,
                    plugin_version=excluded.plugin_version,
                    last_seen=excluded.last_seen
                """,
                (
                    instance_id,
                    str(instance.get("hostname") or ""),
                    str(instance.get("plugin_version") or ""),
                    first_t,
                    first_t,
                ),
            )
            for event in events:
                session_id = str(event.get("session_id") or "")
                seq = event.get("seq")
                if not session_id or not isinstance(seq, int):
                    continue
                cursor = self._db.execute(
                    """
                    INSERT OR IGNORE INTO events(
                        instance_id, session_id, seq, t, type, run_id, data)
                    VALUES(?, ?, ?, ?, ?, ?, ?)
                    """,
                    (
                        instance_id,
                        session_id,
                        seq,
                        str(event.get("t") or ""),
                        str(event.get("type") or ""),
                        str(event.get("run_id") or ""),
                        json.dumps(
                            event.get("data") or {},
                            ensure_ascii=False,
                            default=str,
                        ),
                    ),
                )
                if cursor.rowcount == 0:
                    duplicates += 1
                    continue
                inserted += 1
                self._apply_to_session(instance_id, session_id, event)
            self._db.commit()
        return {"inserted": inserted, "duplicates": duplicates}

    def _apply_to_session(
        self,
        instance_id: str,
        session_id: str,
        event: Dict[str, Any],
    ) -> None:
        """Incrementally maintain the session aggregate row."""
        event_type = str(event.get("type") or "")
        data = event.get("data")
        if not isinstance(data, dict):
            data = {}
        self._db.execute(
            """
            INSERT INTO sessions(instance_id, session_id, first_t, last_t)
            VALUES(?, ?, ?, ?)
            ON CONFLICT(instance_id, session_id) DO NOTHING
            """,
            (instance_id, session_id, event.get("t"), event.get("t")),
        )
        if event_type == "session":
            # The session header record carries agent/channel metadata.
            header = dict(event)
            header.pop("session_id", None)
            agent = header.get("agent_id") or data.get("agent_id")
            channel = header.get("channel") or data.get("channel")
            self._db.execute(
                """
                UPDATE sessions SET header=?, agent_id=COALESCE(?, agent_id),
                    channel=COALESCE(?, channel)
                WHERE instance_id=? AND session_id=?
                """,
                (
                    json.dumps(header, ensure_ascii=False, default=str),
                    agent,
                    channel,
                    instance_id,
                    session_id,
                ),
            )
            return
        if event_type == "message/inbound":
            user_id = data.get("user_id")
            text = data.get("text") or data.get("last_user_text")
            if isinstance(user_id, str) and user_id:
                self._db.execute(
                    """
                    UPDATE sessions SET user_id=?
                    WHERE instance_id=? AND session_id=?
                      AND (user_id IS NULL OR user_id='')
                    """,
                    (user_id, instance_id, session_id),
                )
            if isinstance(text, str) and text.strip():
                self._db.execute(
                    """
                    UPDATE sessions SET title=?
                    WHERE instance_id=? AND session_id=? AND
                        (title IS NULL OR title='')
                    """,
                    (text.strip()[:80], instance_id, session_id),
                )
        elif event_type == "run/start":
            self._db.execute(
                """
                UPDATE sessions SET runs=runs+1,
                    channel=COALESCE(NULLIF(?, ''), channel)
                WHERE instance_id=? AND session_id=?
                """,
                (data.get("channel"), instance_id, session_id),
            )
            # Console sessions carry no message/inbound text; the
            # run's query is a fine title fallback.
            query = data.get("query") or data.get("last_user_text")
            if isinstance(query, str) and query.strip():
                self._db.execute(
                    """
                    UPDATE sessions SET title=?
                    WHERE instance_id=? AND session_id=? AND
                        (title IS NULL OR title='')
                    """,
                    (query.strip()[:80], instance_id, session_id),
                )
        elif event_type == "run/end":
            self._db.execute(
                """
                UPDATE sessions SET status=?, last_t=?
                WHERE instance_id=? AND session_id=?
                """,
                (
                    str(data.get("status") or ""),
                    event.get("t"),
                    instance_id,
                    session_id,
                ),
            )
        elif event_type == "llm/result":
            usage = data.get("usage")
            input_tokens = 0
            output_tokens = 0
            if isinstance(usage, dict):
                input_tokens = int(_num(usage.get("input_tokens")))
                output_tokens = int(_num(usage.get("output_tokens")))
            self._db.execute(
                """
                UPDATE sessions SET llm_calls=llm_calls+1,
                    input_tokens=input_tokens+?,
                    output_tokens=output_tokens+?, last_t=?
                WHERE instance_id=? AND session_id=?
                """,
                (
                    input_tokens,
                    output_tokens,
                    event.get("t"),
                    instance_id,
                    session_id,
                ),
            )
        elif event_type == "tool/result":
            error = 1 if (data.get("ok") is False or data.get("error")) else 0
            self._db.execute(
                """
                UPDATE sessions SET tool_calls=tool_calls+1,
                    errors=errors+?, last_t=?
                WHERE instance_id=? AND session_id=?
                """,
                (error, event.get("t"), instance_id, session_id),
            )
        elif event_type == "run/end-error":
            self._db.execute(
                "UPDATE sessions SET errors=errors+1 WHERE"
                " instance_id=? AND session_id=?",
                (instance_id, session_id),
            )
        self._db.execute(
            "UPDATE sessions SET event_count=event_count+1, last_t=?"
            " WHERE instance_id=? AND session_id=?",
            (event.get("t"), instance_id, session_id),
        )

    # ------------------------------------------------------------------
    # Queries
    # ------------------------------------------------------------------

    def list_sessions(
        self,
        instance: Optional[str] = None,
        user: Optional[str] = None,
        q: Optional[str] = None,
        limit: int = 100,
        offset: int = 0,
    ) -> List[Dict[str, Any]]:
        where = []
        params: list = []
        if instance:
            where.append("s.instance_id LIKE ?")
            params.append(f"%{instance}%")
        if user:
            where.append(
                "(s.user_id LIKE ? OR s.title LIKE ?)"
            )
            params.extend([f"%{user}%", f"%{user}%"])
        if q:
            where.append(
                "(s.session_id LIKE ? OR s.title LIKE ? OR s.agent_id LIKE ?)"
            )
            params.extend([f"%{q}%"] * 3)
        clause = f"WHERE {' AND '.join(where)}" if where else ""
        rows = self._db.execute(
            f"""
            SELECT s.*, i.hostname FROM sessions s
            JOIN instances i ON i.instance_id = s.instance_id
            {clause}
            ORDER BY COALESCE(s.last_t, '') DESC, s.session_id DESC
            LIMIT ? OFFSET ?
            """,
            (*params, limit, offset),
        ).fetchall()
        summaries = []
        for row in rows:
            summaries.append(
                {
                    "session_id": row["session_id"],
                    "instance_id": row["instance_id"],
                    "hostname": row["hostname"],
                    "user_id": row["user_id"],
                    "title": row["title"],
                    "agent_id": row["agent_id"] or "",
                    "channel": row["channel"] or "",
                    "created_at": row["first_t"],
                    "last_event_t": row["last_t"],
                    "runs": row["runs"],
                    "llm_calls": row["llm_calls"],
                    "tool_calls": row["tool_calls"],
                    "total_tokens": (
                        row["input_tokens"] + row["output_tokens"]
                    ),
                    "status": row["status"] or "",
                    "size_bytes": 0,
                    "mtime": 0,
                    "event_count": row["event_count"],
                }
            )
        return summaries

    def count_sessions(
        self,
        instance: Optional[str] = None,
        user: Optional[str] = None,
        q: Optional[str] = None,
    ) -> int:
        where = []
        params: list = []
        if instance:
            where.append("instance_id LIKE ?")
            params.append(f"%{instance}%")
        if user:
            where.append("(user_id LIKE ? OR title LIKE ?)")
            params.extend([f"%{user}%", f"%{user}%"])
        if q:
            where.append("(session_id LIKE ? OR title LIKE ?)")
            params.extend([f"%{q}%"] * 2)
        clause = f"WHERE {' AND '.join(where)}" if where else ""
        row = self._db.execute(
            f"SELECT COUNT(*) AS n FROM sessions {clause}",
            params,
        ).fetchone()
        return int(row["n"])

    def resolve_session(
        self,
        session_id: str,
        instance: Optional[str] = None,
    ) -> Optional[sqlite3.Row]:
        """Find the session row; an ambiguous id picks the most recent."""
        if instance:
            return self._db.execute(
                "SELECT * FROM sessions WHERE session_id=? AND instance_id=?",
                (session_id, instance),
            ).fetchone()
        return self._db.execute(
            """
            SELECT * FROM sessions WHERE session_id=?
            ORDER BY COALESCE(last_t, '') DESC LIMIT 1
            """,
            (session_id,),
        ).fetchone()

    def list_events(
        self,
        instance_id: str,
        session_id: str,
        before_seq: Optional[int] = None,
        type_filter: Optional[str] = None,
        q: Optional[str] = None,
        limit: int = 200,
    ) -> List[Dict[str, Any]]:
        where = ["instance_id=?", "session_id=?"]
        params: list = [instance_id, session_id]
        if before_seq is not None:
            where.append("seq<?")
            params.append(before_seq)
        if type_filter:
            where.append("type LIKE ?")
            params.append(f"%{type_filter}%")
        rows = self._db.execute(
            f"""
            SELECT * FROM events WHERE {' AND '.join(where)}
            ORDER BY seq {'DESC' if before_seq is not None else 'ASC'}
            """,
            params,
        ).fetchall()
        events = [_row_to_event(row) for row in rows]
        if q:
            needle = q.lower()
            events = [
                event
                for event in events
                if needle in json.dumps(event, ensure_ascii=False).lower()
            ]
        if before_seq is not None:
            # Newest-first page; re-order ascending for the client.
            events = events[:limit]
            events.reverse()
        else:
            events = events[-limit:]
        return events

    def all_events(
        self,
        instance_id: str,
        session_id: str,
    ) -> List[Dict[str, Any]]:
        rows = self._db.execute(
            "SELECT * FROM events WHERE instance_id=? AND session_id=?"
            " ORDER BY seq",
            (instance_id, session_id),
        ).fetchall()
        return [_row_to_event(row) for row in rows]

    def list_instances(self) -> List[Dict[str, Any]]:
        rows = self._db.execute(
            "SELECT * FROM instances ORDER BY last_seen DESC"
        ).fetchall()
        return [dict(row) for row in rows]

    def overview(self) -> Dict[str, Any]:
        """Landing-page aggregate: per-instance rollups + org totals
        + the most recent sessions."""
        instance_rows = self._db.execute(
            """
            SELECT i.*,
                   COUNT(s.session_id) AS sessions,
                   COALESCE(SUM(s.llm_calls), 0) AS llm_calls,
                   COALESCE(SUM(s.tool_calls), 0) AS tool_calls,
                   COALESCE(SUM(s.input_tokens + s.output_tokens), 0)
                       AS tokens,
                   COALESCE(SUM(s.errors), 0) AS errors
            FROM instances i
            LEFT JOIN sessions s ON s.instance_id = i.instance_id
            GROUP BY i.instance_id
            ORDER BY i.last_seen DESC
            """
        ).fetchall()
        totals_row = self._db.execute(
            """
            SELECT COUNT(*) AS sessions,
                   COALESCE(SUM(llm_calls), 0) AS llm_calls,
                   COALESCE(SUM(tool_calls), 0) AS tool_calls,
                   COALESCE(SUM(input_tokens), 0) AS input_tokens,
                   COALESCE(SUM(output_tokens), 0) AS output_tokens,
                   COALESCE(SUM(input_tokens + output_tokens), 0)
                       AS total_tokens,
                   COALESCE(SUM(errors), 0) AS errors,
                   COUNT(DISTINCT NULLIF(user_id, '')) AS users
            FROM sessions
            """
        ).fetchone()
        events_row = self._db.execute(
            "SELECT COUNT(*) AS events FROM events"
        ).fetchone()
        recent = self.list_sessions(limit=8, offset=0)
        return {
            "instances": [dict(row) for row in instance_rows],
            "totals": {
                "instances": len(instance_rows),
                "sessions": totals_row["sessions"],
                "users": totals_row["users"],
                "events": events_row["events"],
                "llm_calls": totals_row["llm_calls"],
                "tool_calls": totals_row["tool_calls"],
                "input_tokens": totals_row["input_tokens"],
                "output_tokens": totals_row["output_tokens"],
                "total_tokens": totals_row["total_tokens"],
                "errors": totals_row["errors"],
            },
            "recent_sessions": recent,
        }

    def stats(self, instance_id: str, session_id: str) -> Optional[dict]:
        """Whole-log fold with the same shape as the plugin's store."""
        events = self.all_events(instance_id, session_id)
        if not events:
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
            "skills": {},
            "skills_detail": {},
            "first_event_t": None,
            "last_event_t": None,
            "events": len(events),
        }
        ttft_count = 0
        for event in events:
            data = event.get("data") or {}
            event_type = event.get("type")
            if stats["first_event_t"] is None:
                stats["first_event_t"] = event.get("t")
            stats["last_event_t"] = event.get("t")
            if event_type == "run/start":
                stats["runs"] += 1
            elif event_type == "run/end":
                if data.get("status") == "error":
                    stats["errors"] += 1
            elif event_type == "llm/result":
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
                    stats["decode_ms_total"] += _num(timing.get("decode_ms"))
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
            elif event_type == "tool/result":
                stats["tool_calls"] += 1
                stats["tool_ms_total"] += _num(data.get("duration_ms"))
                if data.get("ok") is False or data.get("error"):
                    stats["errors"] += 1
        stats["total_tokens"] = stats["input_tokens"] + stats["output_tokens"]
        stats["ttft_ms_avg"] = (
            stats["ttft_ms_sum"] / ttft_count if ttft_count else None
        )
        for key in ("llm_ms_total", "tool_ms_total", "decode_ms_total"):
            stats[key] = round(stats[key], 1)
        return stats


def _row_to_event(row: sqlite3.Row) -> Dict[str, Any]:
    try:
        data = json.loads(row["data"])
    except (TypeError, ValueError):
        data = {}
    return {
        "seq": row["seq"],
        "t": row["t"],
        "type": row["type"],
        "run_id": row["run_id"],
        "data": data,
    }
