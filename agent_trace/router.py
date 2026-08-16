# -*- coding: utf-8 -*-
"""REST API for browsing, exporting, and managing trace sessions."""
from __future__ import annotations

import asyncio
import json
import logging
from typing import Any, Dict, Optional

from fastapi import APIRouter, HTTPException, Query
from fastapi.responses import FileResponse

from .service import get_service
from .store import valid_session_id

logger = logging.getLogger("qwenpaw.plugins.agent_trace")


def _require_service():
    service = get_service()
    if service is None:
        raise HTTPException(
            status_code=503,
            detail="agent-trace service unavailable",
        )
    return service


def _validate_session_id(session_id: str) -> str:
    if not valid_session_id(session_id):
        raise HTTPException(
            status_code=400,
            detail="invalid session id",
        )
    return session_id


def build_router() -> APIRouter:
    """Build the plugin router mounted at ``/api/agent-trace``."""
    router = APIRouter()

    @router.get("/sessions")
    async def list_sessions(
        limit: int = Query(default=100, ge=1, le=500),
        offset: int = Query(default=0, ge=0),
    ) -> Dict[str, Any]:
        service = _require_service()
        sessions = await asyncio.to_thread(
            service.list_sessions_with_titles,
        )
        window = sessions[offset : offset + limit]
        return {
            "sessions": window,
            "total": len(sessions),
            "offset": offset,
            "has_more": offset + len(window) < len(sessions),
        }

    @router.get("/sessions/{session_id}")
    async def get_session(
        session_id: str,
        before_seq: Optional[int] = Query(default=None, ge=1),
        limit: int = Query(default=200, ge=1, le=2000),
        type: Optional[str] = Query(default=None),
        q: Optional[str] = Query(default=None),
    ) -> Dict[str, Any]:
        service = _require_service()
        _validate_session_id(session_id)
        result = await asyncio.to_thread(
            service.store.read_session,
            session_id,
        )
        if result is None:
            raise HTTPException(status_code=404, detail="not found")
        events = result["events"]
        total_events = len(events)
        if type:
            type_needle = type.strip().rstrip("/")
            events = [
                event
                for event in events
                if type_needle in str(event.get("type", ""))
            ]
        if q:
            needle = q.lower()
            events = [
                event
                for event in events
                if needle in json.dumps(event, ensure_ascii=False).lower()
            ]
        if before_seq is not None:
            events = [e for e in events if e["seq"] < before_seq]
        window = events[-limit:] if limit > 0 else events
        return {
            "header": result["header"],
            "events": window,
            "total_events": total_events,
            "size_bytes": result["size_bytes"],
            "mtime": result["mtime"],
        }

    @router.get("/sessions/{session_id}/stats")
    async def get_session_stats(session_id: str) -> Dict[str, Any]:
        """Whole-log statistics fold (durations, TTFT, tokens, models)."""
        service = _require_service()
        _validate_session_id(session_id)
        stats = await asyncio.to_thread(
            service.store.compute_stats,
            session_id,
        )
        if stats is None:
            raise HTTPException(status_code=404, detail="not found")
        return stats

    @router.get("/sessions/{session_id}/lineage")
    async def get_session_lineage(session_id: str) -> Dict[str, Any]:
        """Root session link plus spawned child sessions."""
        service = _require_service()
        _validate_session_id(session_id)
        lineage = await asyncio.to_thread(
            service.store.lineage,
            session_id,
        )
        if lineage is None:
            raise HTTPException(status_code=404, detail="not found")
        return lineage

    @router.get("/sessions/{session_id}/export")
    async def export_session(session_id: str) -> FileResponse:
        service = _require_service()
        _validate_session_id(session_id)
        path = await service.store.export_session(session_id)
        if path is None:
            raise HTTPException(status_code=404, detail="not found")
        return FileResponse(
            path,
            media_type="application/x-ndjson",
            filename=f"{session_id}.jsonl",
        )

    @router.delete("/sessions/{session_id}")
    async def delete_session(session_id: str) -> Dict[str, Any]:
        service = _require_service()
        _validate_session_id(session_id)
        deleted = await service.delete_session(session_id)
        if not deleted:
            raise HTTPException(status_code=404, detail="not found")
        return {"deleted": True}

    @router.get("/config")
    async def get_config() -> Dict[str, Any]:
        service = _require_service()
        return service.config.to_dict()

    @router.put("/config")
    async def update_config(
        payload: Dict[str, Any],
    ) -> Dict[str, Any]:
        service = _require_service()
        try:
            service.config.update_from_dict(payload)
        except (ValueError, TypeError) as exc:
            raise HTTPException(status_code=400, detail=str(exc))
        service.save_config()
        logger.info("agent-trace: config updated: %s", payload)
        return service.config.to_dict()

    return router
