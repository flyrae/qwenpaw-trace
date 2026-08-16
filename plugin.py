# -*- coding: utf-8 -*-
"""Agent Trace plugin entry point.

Registers the capture hooks, the observation middleware, and the
REST router for the Console trace viewer.
"""
from __future__ import annotations

import logging
import os
import sys
from pathlib import Path

from qwenpaw.plugins.api import PluginApi

# Use a qwenpaw.* logger name so desktop log config actually captures us.
logger = logging.getLogger("qwenpaw.plugins.agent_trace")

_PLUGIN_DIR = Path(os.path.dirname(os.path.abspath(__file__)))


def _expose_package_dir() -> None:
    """Expose the bundled ``agent_trace`` package on ``sys.path``."""
    plugin_dir = str(_PLUGIN_DIR)
    if plugin_dir not in sys.path:
        sys.path.insert(0, plugin_dir)


_expose_package_dir()


async def _on_startup() -> None:
    from agent_trace.approvals_patch import apply_approval_patch
    from agent_trace.service import get_service

    service = get_service()
    if service is not None:
        await service.start()
        logger.info("agent-trace: recording to %s", service.root)
    apply_approval_patch()


async def _on_shutdown() -> None:
    from agent_trace.approvals_patch import restore_approval_patch
    from agent_trace.service import get_service

    restore_approval_patch()
    service = get_service()
    if service is not None:
        await service.shutdown()
        logger.info("agent-trace: stopped")


async def _on_uninstall(plugin_id: str, delete_files: bool) -> None:
    from agent_trace.approvals_patch import restore_approval_patch
    from agent_trace.service import get_service, set_service

    del plugin_id
    restore_approval_patch()
    service = get_service()
    if service is None:
        return
    await service.shutdown()
    set_service(None)
    if delete_files:
        logger.info(
            "agent-trace: uninstalled; recorded traces kept at %s "
            "(remove manually if desired)",
            service.root,
        )


class AgentTracePlugin:
    """Plugin entry: hooks + middleware + REST router."""

    def register(self, api: PluginApi) -> None:
        from agent_trace.capture import (
            AgentTraceErrorHook,
            AgentTraceFinalizeHook,
            AgentTraceInboundHook,
            AgentTraceReplyHook,
            AgentTraceRunEndHook,
            AgentTraceRunStartHook,
            trace_middleware_factory,
        )
        from agent_trace.router import build_router
        from agent_trace.service import TraceService, get_service, set_service

        if get_service() is None:
            # Config load only; the flush task starts in the startup
            # hook, where a running event loop is guaranteed.
            set_service(TraceService())

        api.register_runtime_hook(AgentTraceRunStartHook())
        api.register_runtime_hook(AgentTraceInboundHook())
        api.register_runtime_hook(AgentTraceReplyHook())
        api.register_runtime_hook(AgentTraceRunEndHook())
        api.register_runtime_hook(AgentTraceErrorHook())
        api.register_runtime_hook(AgentTraceFinalizeHook())
        api.register_middleware(trace_middleware_factory, priority=110)
        api.register_http_router(
            build_router(),
            prefix="/agent-trace",
            tags=["agent-trace"],
        )
        api.register_startup_hook(
            "agent_trace_start",
            _on_startup,
            priority=90,
        )
        api.register_shutdown_hook(
            "agent_trace_shutdown",
            _on_shutdown,
            priority=20,
        )
        api.register_uninstall_hook(
            "agent_trace_uninstall",
            _on_uninstall,
        )
        logger.info("agent-trace: plugin registered")


plugin = AgentTracePlugin()
