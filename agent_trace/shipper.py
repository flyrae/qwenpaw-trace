# -*- coding: utf-8 -*-
"""Best-effort event shipper for central trace collection.

Every event still lands in the local JSONL first (the local file stays
the source of truth and keeps working offline); the shipper batches
buffered events and POSTs them to a central collector with:

- a per-instance envelope (instance id, hostname, plugin version) so
  the central UI can distinguish users and machines;
- gzip request bodies and Bearer-token auth;
- exponential backoff with a disk spill queue (``.remote-queue.jsonl``)
  so agent loops never block or lose more than the queue cap allows.

Design rule (same as the rest of the plugin): recording must never
break the agent loop — every failure path degrades to a debug log.
"""
from __future__ import annotations

import asyncio
import gzip
import json
import logging
import os
import socket
import time
import uuid
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

logger = logging.getLogger("qwenpaw.plugins.agent_trace")

ENVELOPE_SCHEMA_VERSION = 1
INSTANCE_ID_FILENAME = ".instance-id"
INSTANCE_TOKEN_FILENAME = ".instance-token"
SPILL_FILENAME = ".remote-queue.jsonl"
_BACKOFF_BASE_S = 1.0
_BACKOFF_MAX_S = 60.0
# Re-enroll throttle: a bad/expired enroll key must not turn every
# flush into an enroll attempt.
_ENROLL_RETRY_S = 60.0


def _plugin_version() -> str:
    try:
        import json as _json

        manifest = (
            Path(__file__).resolve().parent.parent / "plugin.json"
        )
        return str(
            _json.loads(manifest.read_text(encoding="utf-8")).get(
                "version",
                "unknown",
            ),
        )
    except Exception:  # noqa: BLE001
        return "unknown"


def resolve_instance_id(root: Path, configured: str = "") -> str:
    """Stable per-installation identity.

    Precedence: an explicit ``remote_instance_id`` config value wins;
    then the ``QWENPAW_INSTANCE_ID`` environment variable (container
    / service deployments stamp identity via env); then a UUID
    generated once and persisted next to the trace files so restarts
    keep identity.
    """
    configured = (configured or "").strip()
    if configured:
        return configured
    env_id = (os.environ.get("QWENPAW_INSTANCE_ID") or "").strip()
    if env_id:
        return env_id
    path = Path(root) / INSTANCE_ID_FILENAME
    existing = ""
    try:
        existing = path.read_text(encoding="utf-8").strip()
    except OSError:
        pass
    if existing:
        return existing
    generated = uuid.uuid4().hex[:12]
    try:
        path.write_text(generated, encoding="utf-8")
    except OSError:
        # Read-only root: identity is per-process only. Acceptable —
        # shipping is still correct, sessions just re-attach on restart.
        pass
    return generated


class TraceShipper:
    """Background batch-forwarder from the local store to a collector."""

    def __init__(self, root: Path, config) -> None:
        self._root = Path(root)
        self._config = config
        self._queue: List[Dict[str, Any]] = []
        self._wakeup: Optional[asyncio.Event] = None
        self._task: Optional[asyncio.Task] = None
        self._instance = resolve_instance_id(
            self._root,
            getattr(config, "remote_instance_id", ""),
        )
        self._envelope = {
            "instance_id": self._instance,
            "hostname": socket.gethostname(),
            "plugin_version": _plugin_version(),
        }
        self._next_attempt_at = 0.0
        self._failures = 0
        self._shipped = 0
        self._dropped = 0
        # Enrollment: an admin-issued bootstrap key exchanges for an
        # instance-scoped token on first use (persisted beside the
        # trace files, so restarts reuse it without re-enrolling).
        self._instance_token = self._load_instance_token()
        self._next_enroll_at = 0.0
        # Connection-state logging: warn once on the down transition
        # (plus a heartbeat every N failures), stay quiet while
        # healthy, and log recovery once.
        self._was_connected: Optional[bool] = None
        self._last_error = ""

    @property
    def stats(self) -> Dict[str, Any]:
        return {
            "instance": self._instance,
            "queued": len(self._queue),
            "shipped": self._shipped,
            "dropped": self._dropped,
            "spilled": self._spill_size(),
            "token_source": (
                "enrolled"
                if self._instance_token
                else (
                    "manual"
                    if (self._config.remote_token or "").strip()
                    else "none"
                )
            ),
        }

    # ------------------------------------------------------------------
    # Lifecycle
    # ------------------------------------------------------------------

    def start(self) -> None:
        if self._task is not None:
            return
        self._wakeup = asyncio.Event()
        self._task = asyncio.create_task(self._run())

    async def stop(self) -> None:
        task, self._task = self._task, None
        if task is not None:
            task.cancel()
            try:
                await task
            except asyncio.CancelledError:
                pass
        # Drain fully: one _flush_once sends at most one capped batch.
        for _ in range(1000):
            if not self._queue:
                break
            await self._flush_once()

    # ------------------------------------------------------------------
    # Enqueue (sync, called from the store's append path)
    # ------------------------------------------------------------------

    def enqueue(
        self,
        session_id: str,
        event: Dict[str, Any],
        header: Optional[Dict[str, Any]] = None,
    ) -> None:
        """Buffer one event (and its session header when new).

        Never raises: the agent loop must not observe the shipper.
        """
        try:
            if header is not None:
                # Session header records carry no seq in the local
                # file; ship them as seq 0 ahead of the first event.
                record = {**header, "session_id": session_id}
                record.setdefault("seq", 0)
                self._push(record)
            self._push({**event, "session_id": session_id})
            if self._wakeup is not None:
                self._wakeup.set()
        except Exception:  # noqa: BLE001
            logger.debug("agent-trace: shipper enqueue failed", exc_info=True)

    def _push(self, record: Dict[str, Any]) -> None:
        cap = max(1, int(self._config.remote_queue_max))
        if len(self._queue) >= cap:
            # Drop the OLDEST events: the tail (current activity) is
            # what a central dashboard cares about.
            drop = len(self._queue) - cap + 1
            del self._queue[:drop]
            self._dropped += drop
        self._queue.append(record)

    # ------------------------------------------------------------------
    # Flush loop
    # ------------------------------------------------------------------

    async def _run(self) -> None:
        assert self._wakeup is not None
        while True:
            try:
                await asyncio.wait_for(
                    self._wakeup.wait(),
                    timeout=float(self._config.remote_flush_interval_s),
                )
            except asyncio.TimeoutError:
                pass
            self._wakeup.clear()
            # Respect the backoff window before attempting again.
            now = time.monotonic()
            if now < self._next_attempt_at:
                continue
            try:
                await self._flush_once()
            except asyncio.CancelledError:
                raise
            except Exception:  # noqa: BLE001
                logger.debug(
                    "agent-trace: shipper flush failed",
                    exc_info=True,
                )

    async def _flush_once(self) -> None:
        batch, self._queue = self._take_batch()
        if not batch:
            return
        ok = await self._post(batch)
        if ok:
            recovered = self._failures > 0
            self._failures = 0
            self._shipped += len(batch)
            spilled_before = self._spill_size()
            # Opportunistically drain an earlier spill.
            await self._drain_spill()
            if recovered:
                logger.info(
                    "agent-trace: remote shipping recovered → %s "
                    "(batch %d, spill queue drained: %d)",
                    self._config.remote_url,
                    len(batch),
                    spilled_before,
                )
            self._log_state(connected=True)
            return
        self._failures += 1
        delay = min(
            _BACKOFF_MAX_S,
            _BACKOFF_BASE_S * (2 ** min(self._failures, 6)),
        )
        self._next_attempt_at = time.monotonic() + delay
        self._spill(batch)
        self._log_state(connected=False, delay=delay)

    def _log_state(self, connected: bool, delay: float = 0.0) -> None:
        """Transition-aware connection logging.

        First failure (and every 20th after that) logs at WARNING with
        the actionable bits — target, error, backoff, disk-queue size;
        steady-state success stays silent; recovery logs once at INFO.
        """
        if connected:
            self._was_connected = True
            return
        streak = self._failures
        if self._was_connected is not False or streak % 20 == 1:
            stats = self.stats
            logger.warning(
                "agent-trace: remote ingest unreachable → %s "
                "(%s); retrying in %.0fs, %d event(s) queued to the "
                "disk spill (total shipped %d, dropped %d). Local "
                "recording is unaffected.",
                self._config.remote_url,
                self._last_error or "connection failed",
                delay,
                stats["spilled"],
                stats["shipped"],
                stats["dropped"],
            )
        self._was_connected = False

    def _take_batch(self) -> Tuple[List[Dict[str, Any]], List[Dict[str, Any]]]:
        """Split the queue into one sendable batch + remainder.

        A batch never crosses the event or byte caps; headers ride
        along so new sessions register on the collector even when the
        first batch is size-capped.
        """
        max_events = max(1, int(self._config.remote_batch_max_events))
        max_bytes = max(10_000, int(self._config.remote_batch_max_bytes))
        batch: List[Dict[str, Any]] = []
        size = 2  # envelope overhead allowance
        for index, record in enumerate(self._queue):
            encoded = len(json.dumps(record, default=str))
            if batch and (
                len(batch) >= max_events or size + encoded > max_bytes
            ):
                return batch, self._queue[index:]
            batch.append(record)
            size += encoded
        return batch, []

    async def _post(self, batch: List[Dict[str, Any]]) -> bool:
        url = (self._config.remote_url or "").rstrip("/")
        if not url:
            return False
        # First use (no persisted token): exchange the bootstrap key
        # for an instance-scoped token. Best-effort — falls through
        # to the manual remote_token when enroll is unavailable.
        if (
            not self._instance_token
            and self._enroll_key()
            and time.monotonic() >= self._next_enroll_at
        ):
            await self._enroll()
        body = json.dumps(
            {
                "schema_version": ENVELOPE_SCHEMA_VERSION,
                "instance": self._envelope,
                "events": batch,
            },
            ensure_ascii=False,
            default=str,
        ).encode("utf-8")
        headers = {
            "Content-Type": "application/json",
            "Content-Encoding": "gzip",
        }
        token = self._bearer_token()
        if token:
            headers["Authorization"] = f"Bearer {token}"
        payload = gzip.compress(body)
        try:
            status = await self._http_post(
                f"{url}/ingest",
                payload,
                headers,
                timeout=float(self._config.remote_timeout_s),
            )
        except Exception as exc:  # noqa: BLE001
            self._last_error = f"{type(exc).__name__}: {exc}"[:200]
            logger.debug("agent-trace: remote ingest unreachable", exc_info=True)
            return False
        if status == 401 and self._enroll_key():
            # Our instance token was revoked (server-side rotation or
            # admin cleanup): re-enroll rotates it server-side, then
            # retry this batch once with the fresh token.
            self._instance_token = ""
            if (
                time.monotonic() >= self._next_enroll_at
                and await self._enroll()
            ):
                headers["Authorization"] = (
                    f"Bearer {self._instance_token}"
                )
                try:
                    status = await self._http_post(
                        f"{url}/ingest",
                        payload,
                        headers,
                        timeout=float(self._config.remote_timeout_s),
                    )
                except Exception as exc:  # noqa: BLE001
                    self._last_error = (
                        f"{type(exc).__name__}: {exc}"[:200]
                    )
                    return False
        if not 200 <= status < 300:
            self._last_error = f"HTTP {status}"[:200]
            logger.debug(
                "agent-trace: remote ingest rejected with HTTP %s", status
            )
            return False
        return True

    # ------------------------------------------------------------------
    # Enrollment (fleet deployments)
    # ------------------------------------------------------------------

    def _enroll_key(self) -> str:
        return (
            getattr(self._config, "remote_enroll_key", "") or ""
        ).strip()

    def _load_instance_token(self) -> str:
        try:
            return (
                self._root / INSTANCE_TOKEN_FILENAME
            ).read_text(encoding="utf-8").strip()
        except OSError:
            return ""

    def _bearer_token(self) -> str:
        return self._instance_token or (
            self._config.remote_token or ""
        ).strip()

    async def _enroll(self) -> bool:
        """Exchange the bootstrap key at POST /enroll for an
        instance-scoped token; persist it so restarts reuse it.
        The server rotates any previous token for this instance, so
        this doubles as the recovery path after a 401."""
        url = (self._config.remote_url or "").rstrip("/")
        key = self._enroll_key()
        if not url or not key:
            return False
        body = json.dumps(
            self._envelope, ensure_ascii=False, default=str
        ).encode("utf-8")
        try:
            status, text = await self._enroll_post(
                f"{url}/enroll",
                body,
                {
                    "Authorization": f"Bearer {key}",
                    "Content-Type": "application/json",
                },
                timeout=float(self._config.remote_timeout_s),
            )
        except Exception as exc:  # noqa: BLE001
            logger.debug("agent-trace: enrollment failed", exc_info=True)
            self._last_error = f"{type(exc).__name__}: {exc}"[:200]
            self._next_enroll_at = time.monotonic() + _ENROLL_RETRY_S
            return False
        if not 200 <= status < 300:
            logger.warning(
                "agent-trace: enrollment rejected (HTTP %s) — check "
                "remote_enroll_key validity/expiry/uses on the "
                "collector; falling back to remote_token if set. "
                "Retrying enrollment in %.0fs.",
                status,
                _ENROLL_RETRY_S,
            )
            self._next_enroll_at = time.monotonic() + _ENROLL_RETRY_S
            return False
        try:
            token = str(json.loads(text).get("token") or "").strip()
        except ValueError:
            token = ""
        if not token:
            self._next_enroll_at = time.monotonic() + _ENROLL_RETRY_S
            return False
        self._instance_token = token
        try:
            self._root.mkdir(parents=True, exist_ok=True)
            (self._root / INSTANCE_TOKEN_FILENAME).write_text(
                token, encoding="utf-8"
            )
        except OSError:
            logger.debug(
                "agent-trace: instance token not persisted "
                "(read-only root); re-enrolls next restart",
                exc_info=True,
            )
        logger.info(
            "agent-trace: enrolled instance %s → %s (instance-scoped"
            " token stored at %s)",
            self._instance,
            url,
            self._root / INSTANCE_TOKEN_FILENAME,
        )
        return True

    async def _enroll_post(
        self,
        url: str,
        body: bytes,
        headers: Dict[str, str],
        timeout: float,
    ) -> Tuple[int, str]:
        """Transport hook for enrollment (plain JSON, no gzip) —
        returns (status, response body) so HTTP errors carry the
        server's message."""
        import urllib.error
        import urllib.request

        def _do() -> Tuple[int, str]:
            request = urllib.request.Request(
                url,
                data=body,
                headers=headers,
                method="POST",
            )
            try:
                with urllib.request.urlopen(
                    request, timeout=timeout
                ) as resp:
                    return (
                        resp.status,
                        resp.read().decode("utf-8", "replace"),
                    )
            except urllib.error.HTTPError as exc:
                return (
                    exc.code,
                    exc.read().decode("utf-8", "replace"),
                )

        return await asyncio.to_thread(_do)

    async def _http_post(
        self,
        url: str,
        body: bytes,
        headers: Dict[str, str],
        timeout: float,
    ) -> int:
        """Transport hook — urllib so the plugin adds no dependencies."""
        import urllib.request

        def _do() -> int:
            request = urllib.request.Request(
                url,
                data=body,
                headers=headers,
                method="POST",
            )
            with urllib.request.urlopen(request, timeout=timeout) as resp:
                return resp.status

        return await asyncio.to_thread(_do)

    # ------------------------------------------------------------------
    # Disk spill (network down for a long time)
    # ------------------------------------------------------------------

    def _spill_path(self) -> Path:
        return self._root / SPILL_FILENAME

    def _spill(self, batch: List[Dict[str, Any]]) -> None:
        try:
            self._root.mkdir(parents=True, exist_ok=True)
            with open(self._spill_path(), "a", encoding="utf-8") as handle:
                for record in batch:
                    handle.write(
                        json.dumps(record, default=str) + "\n",
                    )
        except OSError:
            self._dropped += len(batch)
            logger.debug("agent-trace: shipper spill write failed", exc_info=True)

    def _spill_size(self) -> int:
        try:
            with open(self._spill_path(), encoding="utf-8") as handle:
                return sum(1 for line in handle if line.strip())
        except OSError:
            return 0

    async def _drain_spill(self) -> None:
        """Re-send previously spilled events after connectivity returns."""
        path = self._spill_path()
        if not path.exists():
            return
        try:
            lines = path.read_text(encoding="utf-8").splitlines()
        except OSError:
            return
        records: List[Dict[str, Any]] = []
        for line in lines:
            line = line.strip()
            if not line:
                continue
            try:
                records.append(json.loads(line))
            except json.JSONDecodeError:
                continue
        if not records:
            try:
                path.unlink()
            except OSError:
                pass
            return
        if await self._post(records):
            self._shipped += len(records)
            try:
                path.unlink()
            except OSError:
                pass
