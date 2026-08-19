# -*- coding: utf-8 -*-
"""Tests for the REST API router."""
from __future__ import annotations

import json
from types import SimpleNamespace

import pytest
from fastapi import FastAPI
from httpx import ASGITransport, AsyncClient

from agent_trace.router import build_router


@pytest.fixture()
def app(service):
    application = FastAPI()
    application.include_router(
        build_router(),
        prefix="/agent-trace",
    )
    return application


@pytest.fixture()
async def client(app):
    transport = ASGITransport(app=app)
    async with AsyncClient(
        transport=transport,
        base_url="http://test",
    ) as http:
        yield http


async def seed_session(service, session_id="sess-1"):
    service.store.append(
        session_id,
        "run/start",
        "r1",
        {"query": "hi"},
        header={
            "session_id": session_id,
            "agent_id": "main",
            "channel": "console",
        },
    )
    service.store.append(
        session_id,
        "llm/result",
        "r1",
        {
            "model": "m",
            "text": "answer",
            "usage": {"input_tokens": 3, "output_tokens": 2},
        },
    )
    service.store.append(
        session_id,
        "run/end",
        "r1",
        {"status": "success"},
    )
    await service.store.flush()


async def seed_skill_load(service, session_id="sess-1", skill="browser-zh"):
    service.store.append(
        session_id,
        "tool/call",
        "r1",
        {"name": "Skill", "input": json.dumps({"skill": skill})},
    )
    service.store.append(
        session_id,
        "tool/result",
        "r1",
        {"ok": True, "duration_ms": 4, "output": "# skill body"},
    )
    await service.store.flush()


class TestSessions:
    async def test_list_empty(self, client):
        response = await client.get("/agent-trace/sessions")
        assert response.status_code == 200
        body = response.json()
        assert body["sessions"] == []
        assert body["total"] == 0
        assert body["has_more"] is False

    async def test_skill_loads_aggregated(self, client, service):
        await seed_session(service)
        await seed_skill_load(service, skill="browser-zh")
        await seed_skill_load(service, skill="browser-zh")
        await seed_skill_load(service, skill="pdf")
        # A non-skill tool call must not be counted.
        service.store.append(
            "sess-1",
            "tool/call",
            "r1",
            {"name": "execute_shell_command", "input": '{"cmd":"dir"}'},
        )
        # Slash-command invocation inlines the skill block into the query.
        service.store.append(
            "sess-1",
            "run/start",
            "r2",
            {
                "query": (
                    "/xlsx 查看这个excel\n\n<skill>\n<name>xlsx</name>\n"
                    "<description>Sheets.</description>\n</skill>\n"
                ),
            },
        )
        service.store.append(
            "sess-1",
            "run/end",
            "r2",
            {"status": "success"},
        )
        await service.store.flush()

        response = await client.get("/agent-trace/sessions")
        summary = response.json()["sessions"][0]
        assert summary["skills"] == {
            "browser-zh": 2,
            "pdf": 1,
            "xlsx": 1,
        }

        response = await client.get("/agent-trace/sessions/sess-1/stats")
        assert response.json()["skills"] == {
            "browser-zh": 2,
            "pdf": 1,
            "xlsx": 1,
        }

    async def test_list_pagination(self, client, service):
        for index in range(3):
            await seed_session(service, session_id=f"sess-{index}")
        response = await client.get(
            "/agent-trace/sessions",
            params={"limit": 2, "offset": 0},
        )
        body = response.json()
        assert body["total"] == 3
        assert len(body["sessions"]) == 2
        assert body["has_more"] is True
        response = await client.get(
            "/agent-trace/sessions",
            params={"limit": 2, "offset": 2},
        )
        body = response.json()
        assert len(body["sessions"]) == 1
        assert body["has_more"] is False

    async def test_stats_and_lineage_endpoints(self, client, service):
        service.store.append(
            "sess-1",
            "run/start",
            "r1",
            {"query": "hi"},
            header={
                "session_id": "sess-1",
                "agent_id": "main",
                "channel": "console",
            },
        )
        service.store.append(
            "sess-1",
            "llm/result",
            "r1",
            {
                "model": "m",
                "text": "answer",
                "duration_ms": 12.5,
                "usage": {"input_tokens": 3, "output_tokens": 2},
            },
        )
        service.store.append(
            "sess-1",
            "agent/spawn",
            "r1",
            {
                "child_session_id": "sess-2",
                "child_agent_id": "sub",
                "child_trace_id": "r1",
            },
        )
        service.store.append(
            "sess-1",
            "run/end",
            "r1",
            {"status": "success"},
        )
        await service.store.flush()

        response = await client.get("/agent-trace/sessions/sess-1/stats")
        assert response.status_code == 200
        stats = response.json()
        assert stats["llm_calls"] == 1
        assert stats["llm_ms_total"] == 12.5
        assert stats["total_tokens"] == 5

        response = await client.get(
            "/agent-trace/sessions/sess-1/lineage",
        )
        assert response.status_code == 200
        lineage = response.json()
        assert lineage["root_session_id"] is None
        assert lineage["children"][0]["child_session_id"] == "sess-2"

        response = await client.get("/agent-trace/sessions/none/stats")
        assert response.status_code == 404

    async def test_sessions_enriched_with_chat_titles(
        self,
        client,
        service,
        tmp_path,
    ):
        import json as jsonlib

        # Simulate a workspace chats.json next to the traces root.
        workspaces = tmp_path / "workspaces" / "default"
        workspaces.mkdir(parents=True, exist_ok=True)
        (workspaces / "chats.json").write_text(
            jsonlib.dumps(
                {
                    "version": 1,
                    "chats": [
                        {
                            "session_id": "sess-1",
                            "name": "上海天气查询",
                            "status": "idle",
                        },
                    ],
                },
            ),
            encoding="utf-8",
        )
        await seed_session(service)
        response = await client.get("/agent-trace/sessions")
        body = response.json()
        assert body["total"] == 1
        summary = body["sessions"][0]
        assert summary["title"] == "上海天气查询"
        assert summary["chat_status"] == "idle"

    async def test_resolve_local_chat_id(
        self,
        client,
        service,
        tmp_path,
    ):
        import json as jsonlib

        workspaces = tmp_path / "workspaces" / "default"
        workspaces.mkdir(parents=True, exist_ok=True)
        local_id = "1787062840088-3bw37ec"
        (workspaces / "chats.json").write_text(
            jsonlib.dumps(
                {
                    "version": 1,
                    "chats": [
                        {
                            "id": local_id,
                            "session_id": "sess-1",
                            "name": "new chat",
                        },
                    ],
                },
            ),
            encoding="utf-8",
        )
        await seed_session(service)

        response = await client.get(
            "/agent-trace/resolve",
            params={"chat_id": local_id},
        )
        assert response.status_code == 200
        assert response.json() == {"session_id": "sess-1"}

        # Backend session ids resolve to themselves.
        response = await client.get(
            "/agent-trace/resolve",
            params={"chat_id": "sess-1"},
        )
        assert response.json() == {"session_id": "sess-1"}

        # Unknown ids resolve to null, not an error.
        response = await client.get(
            "/agent-trace/resolve",
            params={"chat_id": "9999-nothing"},
        )
        assert response.status_code == 200
        assert response.json() == {"session_id": None}

    async def test_filter_by_type_and_query(self, client, service):
        await seed_session(service)
        response = await client.get(
            "/agent-trace/sessions/sess-1",
            params={"type": "llm"},
        )
        body = response.json()
        assert [e["type"] for e in body["events"]] == ["llm/result"]
        response = await client.get(
            "/agent-trace/sessions/sess-1",
            params={"q": "answer"},
        )
        body = response.json()
        assert len(body["events"]) >= 1
        assert body["total_events"] == 3

    async def test_list_returns_summary(self, client, service):
        await seed_session(service)
        response = await client.get("/agent-trace/sessions")
        body = response.json()
        assert body["total"] == 1
        summary = body["sessions"][0]
        assert summary["session_id"] == "sess-1"
        assert summary["runs"] == 1
        assert summary["status"] == "success"
        assert summary["total_tokens"] == 5

    async def test_get_session_events(self, client, service):
        await seed_session(service)
        response = await client.get("/agent-trace/sessions/sess-1")
        assert response.status_code == 200
        body = response.json()
        assert body["total_events"] == 3
        assert [e["seq"] for e in body["events"]] == [1, 2, 3]
        assert body["header"]["agent_id"] == "main"

    async def test_get_session_pagination(self, client, service):
        await seed_session(service)
        response = await client.get(
            "/agent-trace/sessions/sess-1",
            params={"before_seq": 2, "limit": 1},
        )
        body = response.json()
        assert [e["seq"] for e in body["events"]] == [1]

    async def test_get_missing_session_404(self, client):
        response = await client.get("/agent-trace/sessions/none")
        assert response.status_code == 404

    async def test_invalid_session_id_400(self, client):
        response = await client.get("/agent-trace/sessions/bad:id")
        assert response.status_code == 400

    async def test_delete_session(self, client, service):
        await seed_session(service)
        response = await client.delete("/agent-trace/sessions/sess-1")
        assert response.status_code == 200
        assert response.json() == {"deleted": True}
        response = await client.delete("/agent-trace/sessions/sess-1")
        assert response.status_code == 404

    async def test_export_session(self, client, service):
        await seed_session(service)
        response = await client.get(
            "/agent-trace/sessions/sess-1/export",
        )
        assert response.status_code == 200
        assert response.headers["content-disposition"].endswith(
            'sess-1.jsonl"',
        )
        lines = response.text.strip().splitlines()
        assert json.loads(lines[0])["type"] == "session"
        assert len(lines) == 4


class TestConfig:
    async def test_get_defaults(self, client):
        response = await client.get("/agent-trace/config")
        assert response.status_code == 200
        body = response.json()
        assert body["enabled"] is True
        assert body["capture_llm"] is True

    async def test_put_updates_and_persists(self, client, service):
        response = await client.put(
            "/agent-trace/config",
            json={
                "enabled": False,
                "max_payload_chars": 250,
                "redact_patterns": ["secret-\\d+"],
            },
        )
        assert response.status_code == 200
        body = response.json()
        assert body["enabled"] is False
        assert body["max_payload_chars"] == 250
        assert body["redact_patterns"] == ["secret-\\d+"]
        saved = json.loads(
            (service.root / "config.json").read_text(encoding="utf-8"),
        )
        assert saved["enabled"] is False
        # New patterns take effect on the next sanitize call.
        assert (
            service.sanitize(
                {"text": "secret-42"},
            )["text"]
            == "***"
        )

    async def test_put_invalid_rejected(self, client):
        response = await client.put(
            "/agent-trace/config",
            json={"max_payload_chars": "big"},
        )
        assert response.status_code == 400

        response = await client.put(
            "/agent-trace/config",
            json={"redact_patterns": ["(["]},
        )
        assert response.status_code == 400

    async def test_put_unknown_keys_ignored(self, client):
        response = await client.put(
            "/agent-trace/config",
            json={"no_such_key": 1},
        )
        assert response.status_code == 200


class TestSanitizeThroughService:
    async def test_payload_truncated_via_config(self, service):
        service.config.max_payload_chars = 10
        service.invalidate_patterns()
        result = service.sanitize({"text": "x" * 100})
        assert len(result["text"]) == 10
        assert result["_truncated_fields"] == ["text"]
