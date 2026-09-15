# Changelog

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
