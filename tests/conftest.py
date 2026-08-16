# -*- coding: utf-8 -*-
"""Shared fixtures: expose the plugin package and a temp service."""
from __future__ import annotations

import sys
from pathlib import Path
from types import SimpleNamespace

import pytest

PLUGIN_DIR = Path(__file__).resolve().parents[1]
if str(PLUGIN_DIR) not in sys.path:
    sys.path.insert(0, str(PLUGIN_DIR))

from agent_trace.config import TraceConfig  # noqa: E402
from agent_trace.service import (  # noqa: E402
    TraceService,
    set_service,
)


@pytest.fixture()
def store_root(tmp_path):
    """Isolated traces directory for each test."""
    return tmp_path / "traces"


@pytest.fixture()
def config():
    return TraceConfig()


@pytest.fixture()
def service(store_root):
    """A trace service rooted in the test tmp dir (no flush task)."""
    svc = TraceService(root=store_root)
    set_service(svc)
    yield svc
    set_service(None)


@pytest.fixture()
def hook_ctx():
    """Minimal duck-typed HookContext for capture-hook tests."""
    return SimpleNamespace(
        extras={},
        session_id="sess-1",
        agent_id="main",
        root_session_id="sess-1",
        root_agent_id="main",
        input_msgs=[
            SimpleNamespace(role="user", content="hello trace"),
        ],
        request=SimpleNamespace(channel="console"),
        error=None,
    )
