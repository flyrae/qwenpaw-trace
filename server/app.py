# -*- coding: utf-8 -*-
"""Central trace collector: ingest from agent-trace shippers + the
plugin's read-API contract + a standalone UI mount.

Run:
    TRACE_DB=./traces.db uvicorn app:app --port 8790

Environment:
    TRACE_DB     SQLite path (default: <repo>/server/traces.db)
    TRACE_TOKEN  when set, all endpoints require `Authorization:
                 Bearer <token>`; when unset the server is open
                 (suitable for a private network / gateway auth).
    TRACE_UI_DIR static UI directory (default: <repo>/server/ui)
"""
from __future__ import annotations

import gzip
import json
import logging
import os
from pathlib import Path
from typing import Any, Dict, Optional

from fastapi import FastAPI, HTTPException, Query, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import PlainTextResponse
from fastapi.staticfiles import StaticFiles

from storage import TraceDatabase

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("agent-trace-server")

SERVER_ROOT = Path(__file__).resolve().parent
DB_PATH = Path(os.environ.get("TRACE_DB") or SERVER_ROOT / "traces.db")
TOKEN = (os.environ.get("TRACE_TOKEN") or "").strip()
UI_DIR = Path(os.environ.get("TRACE_UI_DIR") or SERVER_ROOT / "ui")

MAX_BATCH_EVENTS = 50_000

app = FastAPI(title="agent-trace collector", version="0.1.0")
db = TraceDatabase(DB_PATH)

# Standalone-UI deployments serve the bundle from another origin;
# same-origin (default) works without CORS too.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.middleware("http")
async def auth_guard(request: Request, call_next):
    if TOKEN:
        path = request.url.path
        public = (
            path == "/healthz"
            or path == "/"
            or path == "/index.html"
            or path == "/favicon.ico"
            or path.startswith("/trace")
        )
        if not public:
            header = request.headers.get("Authorization") or ""
            if header.strip() != f"Bearer {TOKEN}":
                return PlainTextResponse("unauthorized", status_code=401)
    return await call_next(request)


@app.get("/healthz")
async def healthz() -> Dict[str, Any]:
    return {
        "status": "ok",
        "instances": len(db.list_instances()),
        "sessions": db.count_sessions(),
    }


# ----------------------------------------------------------------------
# Ingest
# ----------------------------------------------------------------------


async def _read_body(request: Request) -> bytes:
    body = await request.body()
    if request.headers.get("Content-Encoding") == "gzip":
        try:
            body = gzip.decompress(body)
        except OSError as exc:
            raise HTTPException(400, f"bad gzip body: {exc}") from exc
    return body


@app.post("/ingest")
async def ingest(request: Request) -> Dict[str, Any]:
    body = await _read_body(request)
    try:
        envelope = json.loads(body)
    except ValueError as exc:
        raise HTTPException(400, f"invalid json: {exc}") from exc
    if not isinstance(envelope, dict):
        raise HTTPException(400, "envelope must be an object")
    instance = envelope.get("instance")
    events = envelope.get("events")
    if not isinstance(instance, dict) or not isinstance(events, list):
        raise HTTPException(400, "envelope requires instance + events")
    if len(events) > MAX_BATCH_EVENTS:
        raise HTTPException(413, "batch too large")
    result = db.ingest(instance, events)
    return result


# ----------------------------------------------------------------------
# Read API — the plugin router contract (mounted under /api/agent-trace)
# ----------------------------------------------------------------------


def _session_or_404(session_id: str, instance: Optional[str]):
    row = db.resolve_session(session_id, instance)
    if row is None:
        raise HTTPException(404, "not found")
    return row


@app.get("/api/agent-trace/sessions")
async def list_sessions(
    limit: int = Query(default=100, ge=1, le=500),
    offset: int = Query(default=0, ge=0),
    instance: Optional[str] = Query(default=None),
    user: Optional[str] = Query(default=None),
    q: Optional[str] = Query(default=None),
) -> Dict[str, Any]:
    sessions = db.list_sessions(
        instance=instance,
        user=user,
        q=q,
        limit=limit,
        offset=offset,
    )
    total = db.count_sessions(instance=instance, user=user, q=q)
    return {
        "sessions": sessions,
        "total": total,
        "offset": offset,
        "has_more": offset + len(sessions) < total,
    }


@app.get("/api/agent-trace/instances")
async def list_instances() -> Dict[str, Any]:
    return {"instances": db.list_instances()}


@app.get("/api/agent-trace/overview")
async def overview() -> Dict[str, Any]:
    """Landing-page aggregate for the portal."""
    return db.overview()


@app.get("/api/agent-trace/sessions/{session_id}")
async def get_session(
    session_id: str,
    before_seq: Optional[int] = Query(default=None, ge=1),
    limit: int = Query(default=200, ge=1, le=2000),
    type: Optional[str] = Query(default=None),
    q: Optional[str] = Query(default=None),
    instance: Optional[str] = Query(default=None),
) -> Dict[str, Any]:
    row = _session_or_404(session_id, instance)
    events = db.list_events(
        row["instance_id"],
        session_id,
        before_seq=before_seq,
        type_filter=type,
        q=q,
        limit=limit,
    )
    try:
        header = json.loads(row["header"]) if row["header"] else None
    except ValueError:
        header = None
    return {
        "header": header,
        "events": events,
        "total_events": row["event_count"],
        "size_bytes": 0,
        "mtime": 0,
        "instance_id": row["instance_id"],
    }


@app.get("/api/agent-trace/sessions/{session_id}/stats")
async def get_session_stats(
    session_id: str,
    instance: Optional[str] = Query(default=None),
) -> Dict[str, Any]:
    row = _session_or_404(session_id, instance)
    stats = db.stats(row["instance_id"], session_id)
    if stats is None:
        raise HTTPException(404, "not found")
    return stats


@app.get("/api/agent-trace/sessions/{session_id}/export")
async def export_session(
    session_id: str,
    instance: Optional[str] = Query(default=None),
) -> Response:
    row = _session_or_404(session_id, instance)
    try:
        header = json.loads(row["header"]) if row["header"] else None
    except ValueError:
        header = None
    lines = []
    if header:
        lines.append(json.dumps(header, ensure_ascii=False, default=str))
    for event in db.all_events(row["instance_id"], session_id):
        record = {k: v for k, v in event.items() if k != "session_id"}
        lines.append(json.dumps(record, ensure_ascii=False, default=str))
    return Response(
        "\n".join(lines) + "\n",
        media_type="application/x-ndjson",
        headers={
            "Content-Disposition": (
                f'attachment; filename="{session_id}.jsonl"'
            ),
        },
    )


# ----------------------------------------------------------------------
# Static mounts: "/" is the enterprise portal (dashboard + login gate),
# "/trace" is the trajectory viewer shell (same Console bundle).
# ----------------------------------------------------------------------

PORTAL_DIR = Path(
    os.environ.get("TRACE_PORTAL_DIR") or SERVER_ROOT / "portal",
)

# Mount order matters: "/trace" must register before the catch-all "/".
if UI_DIR.exists():
    app.mount(
        "/trace",
        StaticFiles(directory=UI_DIR, html=True),
        name="ui",
    )
else:
    logger.info(
        "agent-trace server: no UI directory at %s (trace viewer off)",
        UI_DIR,
    )

if PORTAL_DIR.exists():
    app.mount(
        "/",
        StaticFiles(directory=PORTAL_DIR, html=True),
        name="portal",
    )
elif UI_DIR.exists():
    app.mount("/", StaticFiles(directory=UI_DIR, html=True), name="ui")
else:
    logger.info(
        "agent-trace server: no static directories under %s (API-only)",
        SERVER_ROOT,
    )
