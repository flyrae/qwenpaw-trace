# -*- coding: utf-8 -*-
"""Tests for the central collector server.

Uses FastAPI's TestClient against a temp SQLite database; covers the
ingest contract, idempotent re-sends, session aggregation, filters,
pagination, and the read-API parity the standalone UI relies on.
"""
from __future__ import annotations

import gzip
import importlib
import json
import os
import sys
from pathlib import Path

import pytest
from fastapi.testclient import TestClient

SERVER_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(SERVER_DIR))


def _fresh_app():
    """(Re)import server/app.py so env vars (TRACE_DB/TOKEN) apply."""
    for name, module in list(sys.modules.items()):
        file = getattr(module, "__file__", "")
        if file and str(SERVER_DIR) in str(file):
            del sys.modules[name]
    import app as app_module

    return importlib.reload(app_module)


def _event(seq, event_type, data=None, session="sess-1", t=None):
    return {
        "session_id": session,
        "seq": seq,
        "t": t or f"2026-09-16T00:00:{seq % 60:02d}.000+00:00",
        "type": event_type,
        "run_id": "r1",
        "data": data or {},
    }


def _batch(instance_id="inst-a", events=None):
    return {
        "schema_version": 1,
        "instance": {
            "instance_id": instance_id,
            "hostname": "host-a",
            "plugin_version": "0.7.0",
        },
        "events": events or [],
    }


@pytest.fixture()
def client(tmp_path, monkeypatch):
    monkeypatch.setenv("TRACE_DB", str(tmp_path / "traces.db"))
    monkeypatch.delenv("TRACE_TOKEN", raising=False)
    app_module = _fresh_app()
    with TestClient(app_module.app) as test_client:
        yield test_client


def _post_batch(client, batch):
    body = json.dumps(batch).encode("utf-8")
    return client.post(
        "/ingest",
        data=gzip.compress(body),
        headers={"Content-Encoding": "gzip"},
    )


class TestIngest:
    def test_gzip_envelope(self, client):
        events = [
            {
                "type": "session",
                "session_id": "sess-1",
                "seq": 0,
                "t": "2026-09-16T00:00:00.000+00:00",
                "agent_id": "main",
                "channel": "console",
            },
            _event(1, "run/start", {"channel": "console"}),
            _event(
                2,
                "message/inbound",
                {"user_id": "wyf", "text": "查看今天的天气"},
            ),
            _event(3, "llm/result", {"duration_ms": 1200, "usage": {
                "input_tokens": 100, "output_tokens": 20,
            }}),
            _event(4, "run/end", {"status": "success"}),
        ]
        resp = _post_batch(client, _batch(events=events))
        assert resp.status_code == 200, resp.text
        assert resp.json() == {"inserted": 5, "duplicates": 0}

    def test_idempotent_resend(self, client):
        events = [_event(1, "run/start", {})]
        _post_batch(client, _batch(events=events))
        resp = _post_batch(client, _batch(events=events))
        assert resp.json()["inserted"] == 0
        assert resp.json()["duplicates"] == 1

    def test_bad_json_rejected(self, client):
        resp = client.post(
            "/ingest",
            data=b"not json",
            headers={"Content-Encoding": "gzip"},
        )
        assert resp.status_code == 413 or resp.status_code == 400


class TestSessionsApi:
    def _seed(self, client):
        for session, user, title in [
            ("sess-1", "wyf", "上海天气"),
            ("sess-2", "alice", "报表生成"),
        ]:
            _post_batch(
                client,
                _batch(
                    events=[
                        _event(
                            1,
                            "message/inbound",
                            {"user_id": user, "text": title},
                            session=session,
                        ),
                        _event(2, "run/end", {"status": "success"}, session=session),
                    ],
                ),
            )

    def test_list_and_filters(self, client):
        self._seed(client)
        resp = client.get("/api/agent-trace/sessions")
        assert resp.status_code == 200
        body = resp.json()
        assert body["total"] == 2
        ids = {s["session_id"] for s in body["sessions"]}
        assert ids == {"sess-1", "sess-2"}
        # user filter narrows by user_id or title
        resp = client.get("/api/agent-trace/sessions", params={"user": "alice"})
        assert [s["session_id"] for s in resp.json()["sessions"]] == ["sess-2"]
        resp = client.get("/api/agent-trace/sessions", params={"q": "天气"})
        assert [s["session_id"] for s in resp.json()["sessions"]] == ["sess-1"]

    def test_multi_instance_disambiguation(self, client):
        for inst in ("inst-a", "inst-b"):
            _post_batch(
                client,
                _batch(
                    instance_id=inst,
                    events=[_event(1, "run/end", {"status": "success"})],
                ),
            )
        resp = client.get("/api/agent-trace/sessions")
        # Same session_id shipped by two instances → two list rows,
        # each carrying its instance identity.
        assert resp.json()["total"] == 2
        instances = {
            s["instance_id"] for s in resp.json()["sessions"]
        }
        assert instances == {"inst-a", "inst-b"}
        # explicit instance pin resolves deterministically
        resp = client.get(
            "/api/agent-trace/sessions/sess-1",
            params={"instance": "inst-b"},
        )
        assert resp.status_code == 200
        assert resp.json()["instance_id"] == "inst-b"

    def test_aggregates(self, client):
        events = [
            _event(1, "run/start", {}),
            _event(
                2,
                "llm/result",
                {
                    "duration_ms": 1000.0,
                    "timing": {"ttft_ms": 200.0, "decode_ms": 800.0},
                    "usage": {
                        "input_tokens": 1000,
                        "output_tokens": 100,
                        "cache_input_tokens": 500,
                    },
                },
            ),
            _event(3, "tool/result", {"duration_ms": 50.0, "ok": True}),
            _event(4, "run/end", {"status": "success"}),
        ]
        _post_batch(client, _batch(events=events))
        stats = client.get("/api/agent-trace/sessions/sess-1/stats").json()
        assert stats["runs"] == 1
        assert stats["llm_calls"] == 1
        assert stats["tool_calls"] == 1
        assert stats["input_tokens"] == 1000
        assert stats["cache_read_tokens"] == 500
        assert stats["total_tokens"] == 1100
        assert stats["ttft_ms_first"] == 200.0

    def test_events_pagination(self, client):
        events = [_event(i, "llm/call", {}) for i in range(1, 11)]
        _post_batch(client, _batch(events=events))
        resp = client.get(
            "/api/agent-trace/sessions/sess-1",
            params={"limit": 4},
        )
        body = resp.json()
        assert [e["seq"] for e in body["events"]] == [7, 8, 9, 10]
        resp = client.get(
            "/api/agent-trace/sessions/sess-1",
            params={"before_seq": 7, "limit": 3},
        )
        assert [e["seq"] for e in resp.json()["events"]] == [4, 5, 6]

    def test_export_ndjson(self, client):
        events = [
            _event(1, "run/start", {"channel": "console"}),
            _event(2, "run/end", {"status": "success"}),
        ]
        _post_batch(client, _batch(events=events))
        resp = client.get("/api/agent-trace/sessions/sess-1/export")
        assert resp.status_code == 200
        lines = [line for line in resp.text.splitlines() if line.strip()]
        assert len(lines) == 2
        assert json.loads(lines[0])["type"] == "run/start"

    def test_404_for_unknown(self, client):
        assert (
            client.get("/api/agent-trace/sessions/nope").status_code == 404
        )


class TestAuth:
    def test_token_guard(self, tmp_path, monkeypatch):
        monkeypatch.setenv("TRACE_DB", str(tmp_path / "t.db"))
        monkeypatch.setenv("TRACE_TOKEN", "s3cret")
        app_module = _fresh_app()
        with TestClient(app_module.app) as guarded:
            assert guarded.get("/api/agent-trace/sessions").status_code == 401
            assert (
                guarded.post("/ingest", json=_batch()).status_code == 401
            )
            ok = guarded.get(
                "/api/agent-trace/sessions",
                headers={"Authorization": "Bearer s3cret"},
            )
            assert ok.status_code == 200
