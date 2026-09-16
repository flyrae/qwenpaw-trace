# -*- coding: utf-8 -*-
"""Tests for the remote collector shipper.

Uses a monkeypatched transport so no real HTTP happens; verifies the
envelope, batching caps, backoff + spill, queue cap, and the
instance-id persistence contract.
"""
from __future__ import annotations

import asyncio
import gzip
import json
from pathlib import Path

from agent_trace.config import TraceConfig
from agent_trace.shipper import (
    SPILL_FILENAME,
    TraceShipper,
    resolve_instance_id,
)


def _config(**overrides) -> TraceConfig:
    config = TraceConfig()
    config.remote_enabled = True
    config.remote_url = "http://collector.local"
    config.remote_token = "secret"
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


class _Transport:
    """Captures posted batches; can be told to fail N times."""

    def __init__(self) -> None:
        self.posts: list[dict] = []
        self.fail_next = 0

    async def __call__(self, url, body, headers, timeout):
        if self.fail_next > 0:
            self.fail_next -= 1
            raise OSError("connection refused")
        decoded = gzip.decompress(body)
        self.posts.append(
            {
                "url": url,
                "headers": headers,
                "payload": json.loads(decoded),
            },
        )
        return 200


class TestInstanceIdentity:
    def test_persisted_across_instances(self, tmp_path):
        first = resolve_instance_id(tmp_path)
        assert first
        assert resolve_instance_id(tmp_path) == first

    def test_configured_wins(self, tmp_path):
        assert (
            resolve_instance_id(tmp_path, "prod-7") == "prod-7"
        )

    def test_env_var_used_when_config_empty(self, tmp_path, monkeypatch):
        monkeypatch.setenv("QWENPAW_INSTANCE_ID", "pod-abc-123")
        assert resolve_instance_id(tmp_path) == "pod-abc-123"

    def test_config_beats_env_var(self, tmp_path, monkeypatch):
        monkeypatch.setenv("QWENPAW_INSTANCE_ID", "from-env")
        assert resolve_instance_id(tmp_path, "from-config") == "from-config"

    def test_env_var_beats_persisted_file(self, tmp_path, monkeypatch):
        resolve_instance_id(tmp_path)  # writes .instance-id
        monkeypatch.setenv("QWENPAW_INSTANCE_ID", "docker-42")
        assert resolve_instance_id(tmp_path) == "docker-42"

    def test_blank_env_var_ignored(self, tmp_path, monkeypatch):
        monkeypatch.setenv("QWENPAW_INSTANCE_ID", "   ")
        first = resolve_instance_id(tmp_path)
        assert first and first != "   "


class TestShipper:
    async def test_envelope_and_auth(self, tmp_path):
        shipper = TraceShipper(tmp_path, _config())
        transport = _Transport()
        shipper._http_post = transport  # pylint: disable=protected-access
        shipper.enqueue(
            "sess-1",
            _event(1),
            header={"type": "session", "version": 1, "agent_id": "main"},
        )
        await shipper.stop()

        assert len(transport.posts) == 1
        post = transport.posts[0]
        assert post["url"] == "http://collector.local/ingest"
        assert post["headers"]["Authorization"] == "Bearer secret"
        assert post["headers"]["Content-Encoding"] == "gzip"
        payload = post["payload"]
        assert payload["schema_version"] == 1
        assert payload["instance"]["hostname"]
        assert payload["instance"]["plugin_version"]
        # Header rides along before the event, both tagged with the
        # session id.
        assert payload["events"][0]["type"] == "session"
        assert payload["events"][0]["session_id"] == "sess-1"
        assert payload["events"][1]["type"] == "llm/call"

    async def test_batch_event_cap(self, tmp_path):
        config = _config(remote_batch_max_events=3)
        shipper = TraceShipper(tmp_path, config)
        transport = _Transport()
        shipper._http_post = transport  # pylint: disable=protected-access
        for seq in range(1, 8):
            shipper.enqueue("sess-1", _event(seq))
        await shipper.stop()
        sizes = [len(post["payload"]["events"]) for post in transport.posts]
        assert sum(sizes) == 7
        assert all(size <= 3 for size in sizes)

    async def test_failure_spills_and_backs_off(self, tmp_path):
        shipper = TraceShipper(tmp_path, _config())
        transport = _Transport()
        transport.fail_next = 1
        shipper._http_post = transport  # pylint: disable=protected-access
        shipper.enqueue("sess-1", _event(1))
        # First flush attempt fails → backoff scheduled.
        await shipper._flush_once()  # pylint: disable=protected-access
        assert shipper.stats["dropped"] == 0
        # The failed batch spilled to disk.
        spill = tmp_path / SPILL_FILENAME
        assert spill.exists()
        assert shipper.stats["spilled"] == 1

    async def test_queue_cap_drops_oldest(self, tmp_path):
        config = _config(remote_queue_max=3)
        shipper = TraceShipper(tmp_path, config)
        transport = _Transport()
        shipper._http_post = transport  # pylint: disable=protected-access
        for seq in range(1, 6):
            shipper.enqueue("sess-1", _event(seq))
        assert shipper.stats["dropped"] == 2
        await shipper.stop()
        shipped_seqs = [
            event["seq"]
            for post in transport.posts
            for event in post["payload"]["events"]
        ]
        # Oldest dropped, tail preserved.
        assert shipped_seqs == [3, 4, 5]

    async def test_no_url_is_noop(self, tmp_path):
        config = _config()
        config.remote_url = ""
        shipper = TraceShipper(tmp_path, config)
        transport = _Transport()
        shipper._http_post = transport  # pylint: disable=protected-access
        shipper.enqueue("sess-1", _event(1))
        await shipper.stop()
        assert transport.posts == []


class TestStoreWiring:
    async def test_service_enables_shipper(self, tmp_path, monkeypatch):
        import asyncio as aio

        from agent_trace.service import TraceService

        config_path = tmp_path / "config.json"
        config_path.write_text(
            json.dumps(
                {
                    "remote_enabled": True,
                    "remote_url": "http://collector.local",
                }
            ),
            encoding="utf-8",
        )
        service = TraceService(root=tmp_path)
        assert service.shipper is not None
        assert service.store.on_event is not None

        # The hook captured the bound enqueue at construction; observe
        # through the shipper's queue (no background task is running,
        # so the queue holds whatever append pushed).
        service.store.append("sess-1", "run/start", "r1", {"ok": 1})
        await service.store.flush()
        assert service.shipper.stats["queued"] == 1
        await service.shutdown()

    async def test_service_without_remote_has_no_shipper(self, tmp_path):
        from agent_trace.service import TraceService

        service = TraceService(root=tmp_path)
        assert service.shipper is None
        assert service.store.on_event is None
        await service.shutdown()


class TestConnectionLogging:
    async def _capture(self):
        import logging

        messages: list = []

        class _Capture(logging.Handler):
            def emit(self, record):
                messages.append(
                    (record.levelname, record.getMessage())
                )

        capture = _Capture(level=logging.INFO)
        logger = logging.getLogger("qwenpaw.plugins.agent_trace")
        logger.addHandler(capture)
        return logger, capture, messages

    async def test_failure_warns_once_then_heartbeat(self, tmp_path):
        shipper = TraceShipper(tmp_path, _config())
        transport = _Transport()
        transport.fail_next = 45  # never succeeds
        shipper._http_post = transport  # pylint: disable=protected-access
        logger, capture, messages = await self._capture()
        try:
            for _ in range(45):
                shipper.enqueue("sess-1", _event(1))
                await shipper._flush_once()  # pylint: disable=protected-access
        finally:
            logger.removeHandler(capture)
        warnings = [m for lvl, m in messages if lvl == "WARNING"]
        # First failure + every 20th (1st, 21st, 41st) — not 45.
        assert len(warnings) == 3, [m[:80] for m in warnings]
        assert "remote ingest unreachable" in warnings[0]
        assert "disk spill" in warnings[0]

    async def test_recovery_logs_once(self, tmp_path):
        shipper = TraceShipper(tmp_path, _config())
        transport = _Transport()
        shipper._http_post = transport  # pylint: disable=protected-access
        logger, capture, messages = await self._capture()
        try:
            transport.fail_next = 1
            shipper.enqueue("sess-1", _event(1))
            await shipper._flush_once()  # pylint: disable=protected-access
            transport.fail_next = 0
            shipper.enqueue("sess-1", _event(2))
            await shipper._flush_once()  # pylint: disable=protected-access
            shipper.enqueue("sess-1", _event(3))
            await shipper._flush_once()  # pylint: disable=protected-access
        finally:
            logger.removeHandler(capture)
        infos = [m for lvl, m in messages if lvl == "INFO"]
        recoveries = [m for m in infos if "recovered" in m]
        assert len(recoveries) == 1, infos
        assert "spill queue drained: 1" in recoveries[0]


class TestConfigRemote:
    def test_roundtrip_masks_token(self, tmp_path):
        config = _config()
        snapshot = config.to_dict()
        assert snapshot["remote_token"] == "***"
        # Masked placeholder round-trips without clobbering the value.
        config.update_from_dict(snapshot)
        assert config.remote_token == "secret"

    def test_url_validation(self):
        config = TraceConfig()
        try:
            config.update_from_dict({"remote_url": "ftp://nope"})
        except ValueError as exc:
            assert "http" in str(exc)
        else:
            raise AssertionError("ftp url must be rejected")

    def test_clamps(self):
        config = TraceConfig()
        config.update_from_dict({"remote_flush_interval_s": 0.001})
        assert config.remote_flush_interval_s == 0.2
        config.update_from_dict({"remote_queue_max": 5_000_000})
        assert config.remote_queue_max == 1_000_000
