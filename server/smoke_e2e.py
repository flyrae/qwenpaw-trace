#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""End-to-end smoke: real shipper → real server → read API → UI shell.

Starts the collector on a scratch port/database, drives the plugin's
TraceService (with remote shipping enabled) through a synthetic agent
run, then verifies the central read API serves what the standalone UI
would consume.
"""
from __future__ import annotations

import asyncio
import json
import subprocess
import sys
import tempfile
import time
import urllib.request
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
SERVER_DIR = REPO / "server"
sys.path.insert(0, str(REPO))  # agent_trace package

PORT = 8797
BASE = f"http://127.0.0.1:{PORT}"

CHECKS: list = []


def check(name: str, ok: bool, detail: str = "") -> None:
    CHECKS.append((name, ok, detail))
    print(f"  {'ok ' if ok else 'FAIL'}  {name}" + (f" — {detail}" if detail and not ok else ""))


def get_json(path: str) -> dict:
    with urllib.request.urlopen(BASE + path, timeout=10) as resp:
        return json.loads(resp.read())


async def drive_shipper(workdir: Path) -> None:
    """Run the plugin's real service with shipping pointed at the server."""
    from agent_trace.config import TraceConfig
    from agent_trace.service import TraceService

    workdir.mkdir(parents=True, exist_ok=True)
    config = TraceConfig()
    config.remote_enabled = True
    config.remote_url = BASE
    config.remote_token = "smoke-token"
    config.remote_flush_interval_s = 0.2
    (workdir / "config.json").write_text(
        json.dumps(
            {
                "remote_enabled": True,
                "remote_url": BASE,
                "remote_token": "smoke-token",
            }
        ),
        encoding="utf-8",
    )
    service = TraceService(root=workdir)
    await service.start()
    store = service.store
    store.append(
        "1789999000001-smoke1",
        "run/start",
        "r1",
        {"channel": "wecom", "trigger": "message"},
        header={"agent_id": "default", "channel": "wecom"},
    )
    store.append(
        "1789999000001-smoke1",
        "message/inbound",
        "r1",
        {"user_id": "wyf", "text": "帮我查上海的天气"},
    )
    store.append(
        "1789999000001-smoke1",
        "llm/result",
        "r1",
        {
            "model": "deepseek-chat",
            "duration_ms": 1500.0,
            "timing": {"ttft_ms": 300.0, "decode_ms": 1200.0},
            "usage": {
                "input_tokens": 8000,
                "output_tokens": 120,
                "cache_input_tokens": 6000,
            },
        },
    )
    store.append(
        "1789999000001-smoke1",
        "tool/result",
        "r1",
        {"ok": True, "duration_ms": 900.0, "output": "[1] 上海 晴 24°C"},
    )
    store.append(
        "1789999000001-smoke1",
        "run/end",
        "r1",
        {"status": "success", "duration_ms": 2600.0},
    )
    await service.shutdown()


def main() -> int:
    with tempfile.TemporaryDirectory() as raw:
        tmp = Path(raw)
        env_db = tmp / "traces.db"
        proc = subprocess.Popen(
            [
                sys.executable,
                "-m",
                "uvicorn",
                "app:app",
                "--port",
                str(PORT),
                "--log-level",
                "warning",
            ],
            cwd=SERVER_DIR,
            env={
                **__import__("os").environ,
                "TRACE_DB": str(env_db),
                "TRACE_TOKEN": "smoke-token",
            },
        )
        try:
            # Wait for the server.
            for _ in range(50):
                try:
                    with urllib.request.urlopen(
                        BASE + "/healthz", timeout=2
                    ):
                        break
                except Exception:
                    time.sleep(0.2)
            else:
                print("server did not start")
                return 1
            print("server up")

            asyncio.run(drive_shipper(tmp / "edge"))
            time.sleep(1.0)  # allow the flush interval to fire

            health = get_json("/healthz")
            check("instance registered", health["instances"] == 1)
            check("session registered", health["sessions"] == 1)

            # Auth guard: no token → 401.
            try:
                urllib.request.urlopen(BASE + "/api/agent-trace/sessions")
                check("auth guard", False, "no-token request passed")
            except urllib.error.HTTPError as exc:
                check("auth guard", exc.code == 401)

            opener = urllib.request.build_opener()
            req = urllib.request.Request(
                BASE + "/api/agent-trace/sessions",
                headers={"Authorization": "Bearer smoke-token"},
            )
            with opener.open(req) as resp:
                sessions = json.loads(resp.read())
            check(
                "sessions listed",
                sessions["total"] == 1
                and sessions["sessions"][0]["session_id"]
                == "1789999000001-smoke1",
            )
            summary = sessions["sessions"][0]
            check(
                "user attributed",
                summary.get("user_id") == "wyf",
                str(summary),
            )
            check("channel kept", summary.get("channel") == "wecom")
            check("llm aggregated", summary.get("llm_calls") == 1)

            req = urllib.request.Request(
                BASE
                + "/api/agent-trace/sessions/1789999000001-smoke1/stats",
                headers={"Authorization": "Bearer smoke-token"},
            )
            with opener.open(req) as resp:
                stats = json.loads(resp.read())
            check("stats runs", stats["runs"] == 1)
            check("stats cache", stats["cache_read_tokens"] == 6000)
            check("stats ttft", stats["ttft_ms_first"] == 300.0)

            req = urllib.request.Request(
                BASE + "/api/agent-trace/sessions/1789999000001-smoke1"
                "?limit=2",
                headers={"Authorization": "Bearer smoke-token"},
            )
            with opener.open(req) as resp:
                detail = json.loads(resp.read())
            check(
                "events paginated",
                [e["seq"] for e in detail["events"]] == [4, 5],
            )
            check("header served", bool(detail.get("header")))

            # UI shell reachable (no auth for static in this build).
            with urllib.request.urlopen(BASE + "/", timeout=10) as resp:
                html = resp.read().decode("utf-8")
            check("ui shell served", "QwenPaw" in html and "app.js" in html)
            with urllib.request.urlopen(
                BASE + "/app.js", timeout=10
            ) as resp:
                check("bundle served", resp.status == 200)
            with urllib.request.urlopen(
                BASE + "/vendor/antd.min.js", timeout=10
            ) as resp:
                check("vendor served", resp.status == 200)

            # Local edge file still written (local-first contract).
            edge = tmp / "edge" / "1789999000001-smoke1.jsonl"
            check(
                "local file intact",
                edge.exists() and edge.stat().st_size > 0,
            )
        finally:
            proc.terminate()
            proc.wait(timeout=10)

    failures = [name for name, ok, _ in CHECKS if not ok]
    if failures:
        print(f"smoke: {len(failures)} FAILURE(S): {failures}")
        return 1
    print(f"smoke: all {len(CHECKS)} checks passed")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
