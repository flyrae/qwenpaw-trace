# Changelog

## 0.7.2 (2026-09-16)

- Remote-shipping observability: connection failures now log at
  WARNING (first failure + a heartbeat every 20th, with target, error,
  backoff and disk-queue depth), recovery logs once at INFO with the
  drained spill count; steady state stays silent. New
  GET /agent-trace/status exposes shipper counters (queued /
  shipped / dropped / spilled) for ops checks without log access.

## 0.7.1 (2026-09-16)

- A missing ``wrapt`` no longer fails the plugin load: the wire-level
  API capture degrades to off with one actionable warning (install
  hint), while runs/LLM/tool events and remote shipping keep working.
  Affects deployments that received the plugin by file copy (which
  bypasses dependency installation); ``qwenpaw plugin install``
  installs wrapt automatically.

## 0.7.0 (2026-09-16)

> Post-release split: the central collector (`server/`) moved to its
> own repo, [flyrae/qwenpaw-trace-server](https://github.com/flyrae/qwenpaw-trace-server).
> This repo is the plugin (edge) side only.

Central collection for enterprise deployments.

- **Remote shipper** (`agent_trace/shipper.py`): every event still lands
  in the local JSONL first, then ships in batches to a central
  collector — gzip + Bearer token, exponential backoff, a disk spill
  queue that drains on recovery, and a drop-oldest queue cap. The
  agent loop can never observe the shipper.
- **Instance envelope**: each installation gets a persisted identity
  (`traces/.instance-id`, or `remote_instance_id`) plus hostname and
  plugin version, sent with every batch so the central UI can
  distinguish users and machines.
- **Config**: `remote_enabled / remote_url / remote_token /
  remote_instance_id / batch / queue / timeout` knobs (token masked in
  API responses).
- **Central server** (`server/`): FastAPI + SQLite collector —
  idempotent `/ingest` keyed by (instance, session, seq), the plugin's
  read-API contract under `/api/agent-trace` with `instance`/`user`/
  `q` filters, optional bearer-token auth, NDJSON export, and a
  health probe.
- **Standalone UI** (`server/ui/`): the same Console bundle runs
  standalone via a vendored UMD host shell (React/ReactDOM/dayjs/
  antd/icons, same versions as the Console) with a mini router and
  `getApiUrl` indirection — deployable same-origin, on any static
  host (CORS enabled), or behind a gateway.
- **Session list** gains user (👤 channel user_id) and instance
  (🖥 hostname) badges; central deep links use
  `?session=<instance>~<session_id>`.
- Instance identity can come from the `QWENPAW_INSTANCE_ID`
  environment variable (precedence: config `remote_instance_id` >
  env > persisted `.instance-id`).
- Tests: 12 shipper cases, 10 server cases, and a 16-check
  end-to-end smoke (real shipper → real server → API → UI shell).

## 0.6.0 (2026-09-15)

Request-level observability (dsh request-view parity) and search upgrades.

- **Request tab** on assistant records: tool calls emitted by the call,
  generation options (middleware digest merged with wire-level SDK
  params), token breakdown with cache read/write/reasoning split, and
  timing (started / duration / TTFT / decode / throughput) in one
  place.
- Run-level request inspector now shows the **provider** and uses
  locale keys for timing labels.
- The `R#` run badge on ledger rows is clickable and jumps straight to
  that request's view.
- Tool records gain a **Schema tab** — the model-visible tool
  definition at call time (description + parameters JSON, from the
  active prompt snapshot).
- Inline metric column gains a third dsh-style metric: **reasoning
  tokens** (purple), tooltip-documented breakdown.
- **Search** is now multi-term AND over every inspector-visible field:
  input delta messages, wire-level API payload, generation options,
  prompt snapshot, header tool catalog, skill attribution, channel,
  and errors.

## 0.5.0 (2026-09-15)

Wire-level API payload capture.

- Intercepts `openai` SDK `chat.completions.create` (wrapt, same
  technique as Langfuse) to record the **actual API payload** — the
  formatted messages after the provider formatter has run, including
  `role=tool` results and merged system prompts
  (`llm/api_request` / `llm/api_response` events, redacted +
  truncated).
- Streaming responses are tee'd so the final chunk's usage is captured.
- New **API tab** in the record inspector shows the wire payload.
- Tools result rows and input messages carry richer deltas.

## 0.4.x (2026-08)

Skill observability.

- **Skill spans**: execution spans per skill with three anchor kinds —
  slash command, `Skill`-tool load, resource touch — projected onto
  the timeline as colored bands and the ledger as row strips (orange =
  bypass: resources touched without ever loading the instructions).
- **Attribution**: ordinary tool calls are attributed to the active
  skill (temporal, inferred — rendered quietly to separate facts from
  inferences); content-match attribution links tool results back to
  loaded skill instructions.
- **Context-reset localization**: when the runtime rewrites the
  context prefix (compaction / rewrite), the diff is localized —
  breakpoint, per-role sizes, and per-message
  kept/removed/rewritten/added classification. Tail-message updates
  (the runtime rewriting the model's trailing narration) are
  recognized as such instead of reset storms.
- **Measured tokens** replace estimates: `usage.input_tokens` etc.
  from the provider, including cache read/write and reasoning tokens.
- Input tabs mark the delta kind (append / tail update / no change /
  full re-record), session stats strip with cache-hit %, skill
  aggregation, and a legend.
