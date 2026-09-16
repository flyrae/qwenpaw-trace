# -*- coding: utf-8 -*-
"""Fleet enrollment on the shipper side.

The bootstrap key (remote_enroll_key) exchanges for an
instance-scoped token at POST /enroll on first use; the token
persists to traces/.instance-token and wins over remote_token. A 401
on ingest rotates the token by re-enrolling. No real HTTP: both
transport hooks are monkeypatched per instance.
"""
from __future__ import annotations

import asyncio
import gzip
import json

from agent_trace.config import TraceConfig
from agent_trace.shipper import (
    INSTANCE_TOKEN_FILENAME,
    TraceShipper,
)


def _config(**overrides) -> TraceConfig:
    config = TraceConfig()
    config.remote_enabled = True
    config.remote_url = "http://collector.local"
    config.remote_flush_interval_s = 0.05
    for key, value in overrides.items():
        setattr(config, key, value)
    return config


def _event(seq: int) -> dict:
    return {
        "seq": seq,
        "t": "2026-09-16T00:00:00.000+00:00",
        "type": "llm/call",
        "run_id": "r1",
        "data": {"model": "test"},
    }


class _Ingest:
    """Captures /ingest posts; scripted status sequence."""

    def __init__(self, statuses=None) -> None:
        self.posts: list = []
        self.statuses = list(statuses or [])

    async def __call__(self, url, body, headers, timeout):
        self.posts.append(
            {
                "url": url,
                # Copy: the 401-rotation retry mutates the same
                # headers dict in place.
                "headers": dict(headers),
                "payload": json.loads(gzip.decompress(body)),
            },
        )
        return (
            self.statuses.pop(0)
            if self.statuses
            else 200
        )


class _Enroll:
    """Captures /enroll calls; returns scripted tokens."""

    def __init__(self, tokens=("tok-e1",), statuses=None) -> None:
        self.calls: list = []
        self.tokens = list(tokens)
        self.statuses = list(statuses or [])

    async def __call__(self, url, body, headers, timeout):
        self.calls.append(
            {
                "url": url,
                "headers": headers,
                "payload": json.loads(body),
            },
        )
        status = self.statuses.pop(0) if self.statuses else 200
        token = self.tokens.pop(0) if self.tokens else "tok-x"
        return status, json.dumps({"token": token})


class TestEnroll:
    async def test_first_post_enrolls_then_uses_token(self, tmp_path):
        config = _config(remote_enroll_key="enroll_k1")
        shipper = TraceShipper(tmp_path, config)
        ingest = _Ingest()
        enroll = _Enroll(tokens=["tok-e1"])
        shipper._http_post = ingest  # pylint: disable=protected-access
        shipper._enroll_post = enroll  # pylint: disable=protected-access
        shipper.enqueue("sess-1", _event(1))
        await shipper.stop()

        assert len(enroll.calls) == 1
        call = enroll.calls[0]
        assert call["url"] == "http://collector.local/enroll"
        assert call["headers"]["Authorization"] == "Bearer enroll_k1"
        assert call["payload"]["instance_id"] == shipper._instance
        assert call["payload"]["hostname"]
        # The enrolled token — not the bootstrap key — reaches /ingest.
        assert (
            ingest.posts[0]["headers"]["Authorization"]
            == "Bearer tok-e1"
        )
        persisted = (
            tmp_path / INSTANCE_TOKEN_FILENAME
        ).read_text(encoding="utf-8").strip()
        assert persisted == "tok-e1"
        assert shipper.stats["token_source"] == "enrolled"

    async def test_persisted_token_skips_enroll(self, tmp_path):
        (tmp_path / INSTANCE_TOKEN_FILENAME).write_text(
            "tok-kept", encoding="utf-8"
        )
        config = _config(remote_enroll_key="enroll_k1")
        shipper = TraceShipper(tmp_path, config)
        ingest = _Ingest()
        enroll = _Enroll()
        shipper._http_post = ingest  # pylint: disable=protected-access
        shipper._enroll_post = enroll  # pylint: disable=protected-access
        shipper.enqueue("sess-1", _event(1))
        await shipper.stop()

        assert enroll.calls == []  # no re-enroll on restart
        assert (
            ingest.posts[0]["headers"]["Authorization"]
            == "Bearer tok-kept"
        )

    async def test_enrolled_token_beats_manual_token(self, tmp_path):
        (tmp_path / INSTANCE_TOKEN_FILENAME).write_text(
            "tok-enrolled", encoding="utf-8"
        )
        config = _config(
            remote_token="manual", remote_enroll_key="enroll_k1"
        )
        shipper = TraceShipper(tmp_path, config)
        ingest = _Ingest()
        shipper._http_post = ingest  # pylint: disable=protected-access
        shipper.enqueue("sess-1", _event(1))
        await shipper.stop()
        assert (
            ingest.posts[0]["headers"]["Authorization"]
            == "Bearer tok-enrolled"
        )

    async def test_enroll_rejected_falls_back_to_manual(
        self, tmp_path
    ):
        config = _config(
            remote_token="manual", remote_enroll_key="enroll_bad"
        )
        shipper = TraceShipper(tmp_path, config)
        ingest = _Ingest()
        enroll = _Enroll(tokens=[], statuses=[401])
        shipper._http_post = ingest  # pylint: disable=protected-access
        shipper._enroll_post = enroll  # pylint: disable=protected-access
        shipper.enqueue("sess-1", _event(1))
        await shipper.stop()

        assert len(enroll.calls) == 1
        assert (
            ingest.posts[0]["headers"]["Authorization"]
            == "Bearer manual"
        )
        # Throttled: a second flush does not hammer /enroll.
        shipper.enqueue("sess-1", _event(2))
        await asyncio.sleep(0.05)
        await shipper._flush_once()  # pylint: disable=protected-access
        assert len(enroll.calls) == 1

    async def test_ingest_401_rotates_via_reenroll(self, tmp_path):
        (tmp_path / INSTANCE_TOKEN_FILENAME).write_text(
            "tok-stale", encoding="utf-8"
        )
        config = _config(remote_enroll_key="enroll_k1")
        shipper = TraceShipper(tmp_path, config)
        # First ingest 401 (revoked), retry after re-enroll succeeds.
        ingest = _Ingest(statuses=[401, 200])
        enroll = _Enroll(tokens=["tok-fresh"])
        shipper._http_post = ingest  # pylint: disable=protected-access
        shipper._enroll_post = enroll  # pylint: disable=protected-access
        shipper.enqueue("sess-1", _event(1))
        await shipper.stop()

        assert len(enroll.calls) == 1  # rotation happened
        assert len(ingest.posts) == 2  # 401 then retried
        assert (
            ingest.posts[0]["headers"]["Authorization"]
            == "Bearer tok-stale"
        )
        assert (
            ingest.posts[1]["headers"]["Authorization"]
            == "Bearer tok-fresh"
        )
        assert shipper.stats["shipped"] == 1
        assert (
            tmp_path / INSTANCE_TOKEN_FILENAME
        ).read_text(encoding="utf-8").strip() == "tok-fresh"

    async def test_401_without_enroll_key_fails_normally(
        self, tmp_path
    ):
        config = _config(remote_token="manual")
        shipper = TraceShipper(tmp_path, config)
        ingest = _Ingest(statuses=[401])
        enroll = _Enroll()
        shipper._http_post = ingest  # pylint: disable=protected-access
        shipper._enroll_post = enroll  # pylint: disable=protected-access
        shipper.enqueue("sess-1", _event(1))
        await shipper.stop()

        assert enroll.calls == []
        assert shipper.stats["shipped"] == 0  # spilled, not shipped
        assert shipper.stats["token_source"] == "manual"
