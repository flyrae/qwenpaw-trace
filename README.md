# Agent Trace 🧭

Step-level agent trajectory recording for QwenPaw, inspired by the
event-sourced session logs of deepseek-harness. The plugin records every
agent **run**, **LLM call**, and **tool call** (with timings, TTFT /
decode spans, token usage, and errors) as an append-only JSONL log per
session, and ships a Console page with a dsh-style trajectory viewer:
a three-lane timeline (Input / Model / Tools), a searchable ledger
table, and a record inspector.

> 完整的架构设计、事件模型、API、已知限制与演进记录见
> [DESIGN.md](./DESIGN.md)（Full architecture, event model, API,
> limitations, and history: see [DESIGN.md](./DESIGN.md)).

## Attribution

The timeline projection algorithm (`frontend/src/trajectory/timeline.ts`),
the timeline component and styles (`TimelineBar.tsx`, `timelineCss.ts`),
and parts of the record/inspector interaction model are adapted from
[deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)
(`packages/client/ui-trajectory`), MIT License,
Copyright (c) 2026 DeepSeek.

## What gets recorded

Each session gets one file under `<WORKING_DIR>/traces/<session_id>.jsonl`.
The first line is a session header; every following line is one event:

| Event         | Data                                                             |
| ------------- | ---------------------------------------------------------------- |
| `run/start`   | trace id, agent, channel, trigger, user query, input msg digest, `root_session_id`/`root_agent_id` for sub-agent runs |
| `run/end`     | status (`success` / `error` / `cancelled` / `interrupted`), duration, error text |
| `agent/spawn` | sub-agent pointer written into the root session's trace (`child_session_id` / `child_agent_id` / `child_trace_id`) |
| `llm/header`  | system-prompt snapshot — recorded once per content change (sha-keyed, `prev_sha256` link, full prompt + tools catalog + full tool schemas) |
| `llm/call`    | model, message count, input message digest                       |
| `llm/result`  | model, duration, output text, thinking, tool calls the model emitted, token usage (incl. cache read/write), `timing` (`ttft_ms` / `decode_ms`, streaming calls), error |
| `tool/call`   | tool name, raw input, tool call id                               |
| `tool/result` | ok, duration, output, error, tool call id                        |

Events are written through an in-memory buffer flushed on a 200 ms
coalescing window, so the agent loop never blocks on disk IO. Capture is
fail-open: a tracing failure never breaks the agent.

Payloads are sanitized before persistence:

- string fields are truncated to `max_payload_chars` (default 4000) and
  marked via `_truncated_fields`
- built-in redaction for API keys / bearer tokens, plus your own
  `redact_patterns` regexes

## Console viewer

After installation a **Trace / 轨迹** page appears in the Console. Pick a
session on the left; the right side is the trajectory view:

- **Toolbar** — timeline projection switch (Sequence / Duration /
  Time / Actual) and event search (matching rows stay lit, others dim)
- **Timeline** — dsh-style three-lane gantt strip: user inputs on the
  Input lane, model calls on the Model lane (with a two-color
  TTFT → decoding gradient when streaming timing was recorded), tool
  calls on the Tools lane. Drag horizontally to focus a range (ledger
  dims outside it), wheel to zoom, right-drag to pan, click a bar to
  select its record, double-click / Escape to reset.
- **Ledger** — one row per record with kind tags, request-boundary
  pills (`Request #N` + status + duration + collapse), per-row request
  markers (`R2 #15`), inline tool results, token/duration badges, and
  "load older" paging. System-prompt changes appear as SYSTEM rows
  (`System Prompt (initial)` / `System Prompt updated`).
- **Inspector** — drag-resizable pane with three views: a single record
  (Summary / contents / Timing (Started, Total, TTFT, Decoding,
  throughput) / Usage), a whole request (Summary / Usage / Timing), or a
  request header (Summary / line-level Diff against the previous
  version with context collapsing / full Prompt / Tools catalog).

The recording switches live in the page's settings popover.

## REST API

Mounted at `/api/agent-trace`:

| Method   | Path                            | Purpose                        |
| -------- | ------------------------------- | ------------------------------ |
| `GET`    | `/sessions`                     | list session summaries         |
| `GET`    | `/sessions/{id}?before_seq=&limit=` | read an event window       |
| `GET`    | `/sessions/{id}/export`         | download the raw JSONL         |
| `DELETE` | `/sessions/{id}`                | delete a session's trace       |
| `GET`/`PUT` | `/config`                    | read / update runtime config  |

## Configuration

Stored in `<WORKING_DIR>/traces/config.json` (editable via `PUT
/api/agent-trace/config` or the Console settings popover):

| Key                 | Default | Description                          |
| ------------------- | ------- | ------------------------------------ |
| `enabled`           | `true`  | master switch (on from install)      |
| `capture_llm`       | `true`  | record `llm/*` events                |
| `capture_tools`     | `true`  | record `tool/*` events               |
| `capture_headers`   | `true`  | record system-prompt/tool changes    |
| `max_payload_chars` | `4000`  | per-field truncation limit           |
| `max_prompt_chars`  | `200000` | truncation limit for stored system prompts |
| `redact_patterns`   | `[]`    | extra redaction regexes              |
| `retention_days`    | `30`    | delete files older than this         |
| `max_total_mb`      | `512`   | total size budget (oldest pruned)    |
| `max_sessions`      | `500`   | max number of session files          |

Retention is enforced at startup and never touches anything outside
`<WORKING_DIR>/traces/`. Uninstalling the plugin keeps recorded traces;
delete the directory manually if you want them gone.

## Development

Backend (pure Python, no extra dependencies):

```bash
pytest plugins/bundle/agent-trace/tests/
```

Frontend (Vite, React/antd provided by the Console host at runtime):

```bash
cd plugins/bundle/agent-trace/frontend
npm install
npm run build        # emits ../dist/index.js (committed)
npm run format       # tsc --noEmit + prettier
```

Install from source:

```bash
qwenpaw plugin install plugins/bundle/agent-trace
# or copy/symlink the directory to ~/.qwenpaw/plugins/agent-trace
```

## Updating after changes

Frontend-only changes (no restart needed):

```bash
cd plugins/bundle/agent-trace/frontend
npm run build        # build + guards (icons / bare imports / smoke import)
cd <repo root>
qwenpaw plugin install plugins/bundle/agent-trace --force
# then hard-refresh the Console (Ctrl+Shift+R)
```

Any backend change (`agent_trace/` or `plugin.py`) additionally needs a
**QwenPaw restart** after the `--force` install: the host's hot
reinstall does not remove old hooks from workspace registries, so
capture stays disconnected until the cold-start path re-registers
everything (API and frontend changes do take effect immediately).
