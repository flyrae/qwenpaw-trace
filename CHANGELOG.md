# Changelog

## 0.8.5 (2026-09-23)

Ported back from the QwenPaw fork-main integration (PR flyrae/QwenPaw#1)
plus alignment:

- **Frontend performance:** ledger rows are memoized (selecting a row
  no longer rebuilds the table) and virtualization kicks in from 80
  rows (was 150). Live polling merges events by ``seq`` instead of
  replacing the window, so "load older" history and the current
  selection survive a running turn; stale fetches after a session
  switch are ignored. Session search is debounced and sent as ``q``;
  the session-list poll keeps already-loaded pages (≤500). Event
  search matches a precomputed haystack instead of re-stringifying
  every record per keystroke.
- ``GET /agent-trace/sessions`` (local read API) accepts ``q``,
  matching session id, title, agent, channel, user, instance, and
  hostname — the Console-side counterpart of the portal's search.
- Approval decide: ``actor`` forwarding is gated on the host's
  original ``resolve_request`` signature (``inspect``), so an older
  host never receives the unsupported keyword while the actor is
  still recorded on ``approval/decided``.

## 0.8.4 (2026-09-17)

- **Fix: approval decide crashed with ``actor``** — the console
  ``/approve`` and ``/deny`` endpoints call
  ``ApprovalService.resolve_request(..., actor=...)`` (the logged-in
  user deciding), but the capture wrapper's signature didn't accept
  the keyword, so every console-side approval raised ``TypeError``
  the moment the patch was active. The wrapper now forwards
  ``actor`` (only when supplied, so hosts predating the parameter
  keep working) and records it on the ``approval/decided`` event —
  the trace now shows *who* decided, not just the decision.

## 0.8.3 (2026-09-17)

- Widened the host-version constraint to ``qwenpaw_version >=2.0.0,
  <2.3.0`` (covers 2.0.0 through 2.2.2 inclusive). Verified against
  the QwenPaw tags: ``runtime/hooks.py``, ``runtime/phases.py``, and
  ``schemas.py`` (AgentRequest) are byte-identical across
  v2.0.0–v2.2.1; all seven PluginApi registration methods exist with
  compatible signatures (``register_workspace_created_hook`` only
  gained a defaulted ``reload_safe`` parameter); ``WORKING_DIR`` and
  the Console host surface (``getApiUrl``) predate 2.0.0's tag. The
  previous min of 2.1.0 was a conservative initial declaration, not
  a known incompatibility. Note: the loader treats max as exclusive
  (``>=min, <max``), hence 2.3.0 to include 2.2.2.

## 0.8.2 (2026-09-17)

- ``run/start`` now carries the requester's ``user_id`` (from
  ``AgentRequest``) when present. Console sessions have no
  ``message/inbound``, so this is the only way a central collector
  can attribute them to a user — the server's session aggregate
  (≥ v0.6.1) picks it up and the portal's user column stops showing
  "—" for console chats. IM channels already provided the identity
  via inbound messages; first identity wins.

## 0.8.1 (2026-09-16)

- **Fix: the shipper's disk-spill queue no longer masquerades as a
  session.** ``list_sessions``/``cleanup``/interrupt-recovery globbed
  ``*.jsonl`` in the traces directory and pathlib matches hidden
  dotfiles, so ``.remote-queue.jsonl`` (holding a full copy of one
  session's events after a collector outage) surfaced as a duplicate
  session entry — same title, timestamp, and token totals as the
  real one. Hidden dotfiles are now excluded everywhere.
- **Fix: the spill queue now drains without new events.** Draining
  previously only rode along after a successful live batch, so the
  tail of a spill could wait forever for the next session. The flush
  tick now retries the spill on its own (throttled to 30 s), and a
  failed drain surfaces through the same connection logging as live
  batches — an invalid token no longer fails silently forever.

## 0.8.0 (2026-09-16)

- **Fleet enrollment**: a single admin-generated enrollment key
  (collector ≥ v0.5.0) replaces per-machine tokens. New
  ``remote_enroll_key`` config (+ ``AGENT_TRACE_REMOTE_ENROLL_KEY``
  env): on first load the shipper exchanges it at ``POST /enroll``
  for an instance-scoped token (only its own machine's sessions are
  visible) persisted to ``traces/.instance-token``; restarts reuse
  it. A 401 (token revoked server-side) triggers automatic
  re-enrollment and the batch retries with the fresh token. Token
  precedence: instance token > enroll key (first use) >
  ``remote_token``; a rejected key falls back to ``remote_token``
  and retries at most once per 60 s. ``GET /agent-trace/status``
  reports the active ``token_source`` (enrolled / manual / none).

## 0.7.3 (2026-09-16)

- Configuration via environment variables: every setting accepts an
  AGENT_TRACE_<FIELD> override (env > config.json > defaults at
  load time) — e.g. AGENT_TRACE_REMOTE_URL /
  AGENT_TRACE_REMOTE_TOKEN / AGENT_TRACE_ENABLED. Booleans
  take 1/true/yes/on, numbers clamp to the REST ranges, invalid
  values warn and are skipped (env can never crash the plugin);
  redact_patterns stays file-only. Env-based tokens keep secrets
  off the on-disk config.

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
