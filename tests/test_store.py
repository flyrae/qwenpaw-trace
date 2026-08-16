# -*- coding: utf-8 -*-
"""Tests for the JSONL TraceStore."""
from __future__ import annotations

import json
import os
import time

import pytest

from agent_trace.config import TraceConfig
from agent_trace.store import (
    SCHEMA_VERSION,
    SESSION_HEADER_TYPE,
    TraceStore,
    valid_session_id,
)


def make_store(root, **config_overrides) -> TraceStore:
    config = TraceConfig(**config_overrides)
    return TraceStore(root, config)


async def write_run(
    store,
    session_id,
    *,
    run_id="run-1",
    status="success",
    header=None,
):
    if header is None:
        header = {
            "session_id": session_id,
            "agent_id": "main",
            "channel": "console",
        }
    store.append(
        session_id,
        "run/start",
        run_id,
        {"query": "hi"},
        header=header,
    )
    store.append(
        session_id,
        "llm/call",
        run_id,
        {"model": "test-model", "messages_count": 2},
    )
    store.append(
        session_id,
        "llm/result",
        run_id,
        {
            "model": "test-model",
            "duration_ms": 12.5,
            "text": "answer",
            "usage": {"input_tokens": 10, "output_tokens": 5},
        },
    )
    store.append(
        session_id,
        "run/end",
        run_id,
        {"status": status, "duration_ms": 40.0},
    )
    await store.flush()


class TestAppendRead:
    async def test_append_writes_header_then_events(self, tmp_path):
        store = make_store(tmp_path)
        store.append(
            "sess-1",
            "run/start",
            "run-1",
            {"query": "hi"},
            header={"session_id": "sess-1", "agent_id": "main"},
        )
        await store.flush()
        lines = (
            (tmp_path / "sess-1.jsonl").read_text(encoding="utf-8")
            .strip()
            .splitlines()
        )
        header = json.loads(lines[0])
        assert header["type"] == SESSION_HEADER_TYPE
        assert header["version"] == SCHEMA_VERSION
        assert header["session_id"] == "sess-1"
        event = json.loads(lines[1])
        assert event["seq"] == 1
        assert event["type"] == "run/start"
        assert event["run_id"] == "run-1"

    async def test_seq_monotonic_across_flushes(self, tmp_path):
        store = make_store(tmp_path)
        store.append("s", "run/start", "r", {})
        await store.flush()
        store.append("s", "run/end", "r", {})
        store.append("s", "run/start", "r2", {})
        await store.flush()
        result = store.read_events("s")
        assert [e["seq"] for e in result["events"]] == [1, 2, 3]

    async def test_read_events_tail_and_pagination(self, tmp_path):
        store = make_store(tmp_path)
        for seq in range(1, 11):
            store.append("s", "run/start", f"r{seq}", {"n": seq})
        await store.flush()
        tail = store.read_events("s", limit=3)
        assert [e["seq"] for e in tail["events"]] == [8, 9, 10]
        assert tail["total_events"] == 10
        older = store.read_events("s", before_seq=8, limit=3)
        assert [e["seq"] for e in older["events"]] == [5, 6, 7]

    async def test_torn_tail_line_skipped(self, tmp_path):
        store = make_store(tmp_path)
        await write_run(store, "s")
        path = tmp_path / "s.jsonl"
        with open(path, "a", encoding="utf-8") as handle:
            handle.write('{"seq": 5, "type": "run/start", "data": {"tru')
        result = store.read_events("s")
        assert len(result["events"]) == 4

    def test_missing_session_returns_none(self, tmp_path):
        store = make_store(tmp_path)
        assert store.read_events("nope") is None
        assert store.read_session("nope") is None

    async def test_invalid_session_id_rejected(self, tmp_path):
        store = make_store(tmp_path)
        assert not valid_session_id("../evil")
        assert not valid_session_id("a/b")
        assert not valid_session_id(None)
        assert valid_session_id("sess-ABC_123.")
        with pytest.raises(ValueError):
            store.session_path("../evil")
        with pytest.raises(ValueError):
            store.append("../evil", "run/start", "r", {})
        assert list(tmp_path.iterdir()) == []


class TestListSessions:
    async def test_summary_aggregates_counts_and_status(self, tmp_path):
        store = make_store(tmp_path)
        await write_run(store, "sess-a", run_id="r1")
        await write_run(store, "sess-a", run_id="r2", status="error")
        # An unterminated run leaves the session "running".
        store.append(
            "sess-b",
            "run/start",
            "r3",
            {},
            header={
                "session_id": "sess-b",
                "agent_id": "side",
                "channel": "dingtalk",
            },
        )
        await store.flush()
        summaries = {s["session_id"]: s for s in store.list_sessions()}
        assert summaries["sess-a"]["runs"] == 2
        assert summaries["sess-a"]["llm_calls"] == 2
        assert summaries["sess-a"]["total_tokens"] == 30
        assert summaries["sess-a"]["status"] == "error"
        assert summaries["sess-a"]["agent_id"] == "main"
        assert summaries["sess-b"]["status"] == "running"
        assert summaries["sess-b"]["channel"] == "dingtalk"

    async def test_sorted_newest_first(self, tmp_path):
        store = make_store(tmp_path)
        await write_run(store, "old-sess")
        time.sleep(0.01)
        os.utime(tmp_path / "old-sess.jsonl", (1000, 1000))
        await write_run(store, "new-sess")
        sessions = store.list_sessions()
        assert sessions[0]["session_id"] == "new-sess"

    async def test_stray_files_skipped(self, tmp_path):
        (tmp_path / "garbage.jsonl").write_text("not json\n", encoding="utf-8")
        store = make_store(tmp_path)
        assert store.list_sessions() == []


class TestDeleteExport:
    async def test_delete_removes_file_and_buffers(self, tmp_path):
        store = make_store(tmp_path)
        await write_run(store, "s")
        store.append("s", "run/start", "r9", {})
        assert await store.delete_session("s")
        assert not (tmp_path / "s.jsonl").exists()
        await store.flush()
        # Pending events for the deleted session must not resurrect it.
        assert not (tmp_path / "s.jsonl").exists()
        assert not await store.delete_session("s")

    async def test_delete_invalid_id(self, tmp_path):
        store = make_store(tmp_path)
        assert not await store.delete_session("../x")

    async def test_export_flushes_and_returns_path(self, tmp_path):
        store = make_store(tmp_path)
        store.append("s", "run/start", "r", {})
        path = await store.export_session("s")
        assert path is not None and path.exists()
        assert await store.export_session("missing") is None


class TestStatsAndLineage:
    async def test_compute_stats_aggregates(self, tmp_path):
        store = make_store(tmp_path)
        store.append(
            "s",
            "run/start",
            "r1",
            {},
            header={"session_id": "s", "agent_id": "main"},
        )
        store.append("s", "llm/result", "r1", {
            "model": "m1",
            "duration_ms": 100.0,
            "usage": {
                "input_tokens": 10,
                "output_tokens": 5,
                "cache_input_tokens": 3,
                "cache_creation_input_tokens": 2,
            },
            "timing": {"ttft_ms": 20.0, "decode_ms": 80.0},
        })
        store.append("s", "tool/result", "r1", {
            "ok": True,
            "duration_ms": 50.0,
        })
        store.append("s", "tool/result", "r1", {
            "ok": False,
            "duration_ms": 5.0,
            "error": "boom",
        })
        store.append("s", "run/end", "r1", {"status": "error"})
        await store.flush()
        stats = store.compute_stats("s")
        assert stats["runs"] == 1
        assert stats["llm_calls"] == 1
        assert stats["tool_calls"] == 2
        assert stats["errors"] == 2  # tool failure + run error
        assert stats["llm_ms_total"] == 100.0
        assert stats["tool_ms_total"] == 55.0
        assert stats["ttft_ms_first"] == 20.0
        assert stats["ttft_ms_avg"] == 20.0
        assert stats["decode_ms_total"] == 80.0
        assert stats["input_tokens"] == 10
        assert stats["output_tokens"] == 5
        assert stats["total_tokens"] == 15
        assert stats["cache_read_tokens"] == 3
        assert stats["cache_write_tokens"] == 2
        assert stats["models"]["m1"]["calls"] == 1
        assert stats["events"] == 5
        assert stats["first_event_t"] is not None
        assert stats["last_event_t"] is not None
        assert store.compute_stats("missing") is None

    async def test_lineage_root_and_children(self, tmp_path):
        store = make_store(tmp_path)
        # Child session: run referencing a root.
        store.append(
            "child",
            "run/start",
            "r1",
            {"root_session_id": "root", "root_agent_id": "main"},
            header={"session_id": "child", "agent_id": "sub"},
        )
        store.append("child", "run/end", "r1", {"status": "success"})
        # Root session: spawn pointer into child.
        store.append(
            "root",
            "agent/spawn",
            "r1",
            {
                "child_session_id": "child",
                "child_agent_id": "sub",
                "child_trace_id": "r1",
            },
        )
        await store.flush()
        assert store.lineage("child") == {
            "root_session_id": "root",
            "children": [],
        }
        root = store.lineage("root")
        assert root["root_session_id"] is None
        assert root["children"][0]["child_session_id"] == "child"
        assert root["children"][0]["child_agent_id"] == "sub"
        assert store.lineage("missing") is None


class TestRecovery:
    async def test_interrupted_runs_closed_at_startup(self, tmp_path):
        store = make_store(tmp_path)
        # Simulate a crash: run started, never ended.
        store.append(
            "s",
            "run/start",
            "run-a",
            {"query": "hi"},
            header={"session_id": "s", "agent_id": "main"},
        )
        store.append("s", "run/end", "run-a", {"status": "success"})
        store.append("s", "run/start", "run-b", {"query": "crashed"})
        await store.flush()
        # A NEW process (fresh store instance over the same files).
        store2 = make_store(tmp_path)
        recovered = store2.recover_interrupted_runs()
        assert recovered == 1
        await store2.flush()
        summary = {s["session_id"]: s for s in store2.list_sessions()}["s"]
        assert summary["status"] != "running"
        result = store2.read_events("s")
        ends = [
            e
            for e in result["events"]
            if e["type"] == "run/end" and e["run_id"] == "run-b"
        ]
        assert len(ends) == 1
        assert ends[0]["data"]["status"] == "interrupted"

    async def test_no_open_runs_no_recovery(self, tmp_path):
        store = make_store(tmp_path)
        store.append(
            "s",
            "run/start",
            "r",
            {},
            header={"session_id": "s"},
        )
        store.append("s", "run/end", "r", {"status": "success"})
        await store.flush()
        store2 = make_store(tmp_path)
        assert store2.recover_interrupted_runs() == 0

    async def test_recovery_primes_seq_cache(self, tmp_path):
        store = make_store(tmp_path)
        await write_run(store, "s")  # seq 1..4
        await store.flush()
        store2 = make_store(tmp_path)
        store2.recover_interrupted_runs()
        # The recovery read primes the seq cache, so the first append
        # never needs the full-file _peek_last_seq scan.
        assert store2._next_seq["s"] == 5
        assert store2.append("s", "run/start", "r9", {}) == 5


class TestDeleteRace:
    async def test_deleted_session_drops_stragglers_until_new_run(
        self,
        tmp_path,
    ):
        store = make_store(tmp_path)
        await write_run(store, "s")
        assert await store.delete_session("s")
        # Straggler events from the deleted run are dropped.
        assert store.append("s", "llm/call", "old-run", {}) == -1
        assert store.append("s", "run/end", "old-run", {}) == -1
        await store.flush()
        assert not (tmp_path / "s.jsonl").exists()
        # A brand-new run re-opens the session file.
        assert store.append("s", "run/start", "new-run", {}) > 0
        await store.flush()
        assert (tmp_path / "s.jsonl").exists()


class TestRetention:
    async def test_retention_days_removes_old_files(self, tmp_path):
        store = make_store(tmp_path, retention_days=1)
        await write_run(store, "old")
        old_time = time.time() - 5 * 86400
        os.utime(tmp_path / "old.jsonl", (old_time, old_time))
        await write_run(store, "fresh")
        removed = store.cleanup()
        assert len(removed) == 1
        assert (tmp_path / "fresh.jsonl").exists()
        assert not (tmp_path / "old.jsonl").exists()

    async def test_max_sessions_prunes_oldest(self, tmp_path):
        # Huge retention so only the max_sessions rule triggers here.
        store = make_store(
            tmp_path,
            retention_days=36500,
            max_sessions=2,
        )
        for name, mtime in (("a", 3000), ("b", 2000), ("c", 1000)):
            await write_run(store, name)
            os.utime(tmp_path / f"{name}.jsonl", (mtime, mtime))
        removed = store.cleanup()
        assert len(removed) == 1
        assert not (tmp_path / "c.jsonl").exists()
        remaining = {p.stem for p in tmp_path.glob("*.jsonl")}
        assert remaining == {"a", "b"}

    async def test_max_total_mb_prunes_oldest(self, tmp_path):
        store = make_store(tmp_path, max_total_mb=1)
        await write_run(store, "big")
        # Pad the oldest file past the 1 MB budget.
        with open(tmp_path / "big.jsonl", "a", encoding="utf-8") as handle:
            handle.write(" " * (1024 * 1024 + 10) + "\n")
        os.utime(tmp_path / "big.jsonl", (1000, 1000))
        await write_run(store, "small")
        removed = store.cleanup()
        assert len(removed) == 1
        assert not (tmp_path / "big.jsonl").exists()
