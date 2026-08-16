# -*- coding: utf-8 -*-
"""Run-scoped trace context propagated via ContextVar.

Mirrors the Langfuse trace-context pattern in
``qwenpaw.observability.langfuse``: the PRE_EXECUTE hook stores the
active run in a ContextVar so middlewares deeper in the same task
chain can correlate their events with the run.
"""
from __future__ import annotations

from contextvars import ContextVar, Token
from dataclasses import dataclass
from typing import Optional

# HookContext.extras keys used to carry the run and its ContextVar
# token from PRE_EXECUTE through FINALLY.
RUN_EXTRAS_KEY = "_agent_trace_run"
TOKEN_EXTRAS_KEY = "_agent_trace_token"

STATUS_RUNNING = "running"
STATUS_SUCCESS = "success"
STATUS_ERROR = "error"
STATUS_CANCELLED = "cancelled"
STATUS_INTERRUPTED = "interrupted"


@dataclass
class TraceRun:
    """Mutable state of one agent request (one Runtime.run call)."""

    trace_id: str
    session_id: str
    agent_id: str = ""
    channel: str = ""
    started_at: float = 0.0
    status: str = STATUS_RUNNING
    error: Optional[str] = None
    ended: bool = False


_current_run: ContextVar[Optional[TraceRun]] = ContextVar(
    "agent_trace_current_run",
    default=None,
)


def set_current_run(run: TraceRun) -> Token:
    """Make ``run`` visible to middlewares; returns the reset token."""
    return _current_run.set(run)


def get_current_run() -> Optional[TraceRun]:
    """Return the active run for this task, if tracing."""
    return _current_run.get()


def clear_current_run(token: Token) -> None:
    """Reset the ContextVar using the token captured at set time."""
    _current_run.reset(token)
