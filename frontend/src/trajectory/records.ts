/**
 * Trajectory record model + formatters.
 *
 * The timeline projection math in ./timeline.ts and the timeline
 * component in ./TimelineBar.tsx are adapted from deepseek-harness
 * (packages/client/ui-trajectory), MIT License, Copyright (c) 2026
 * DeepSeek.
 */

import type { TraceLocale } from "../locale";
import type { SkillSpan } from "./skillSpans";

export type RecordKind = "user" | "message" | "tool" | "system";

/**
 * Sub-kind of a system-marker record. Markers come from different
 * sources (approvals, delivery receipts, spawns, prompt snapshots,
 * errors); the ledger gives each its own tag instead of one shared
 * "system" label.
 */
export type MarkerKind = "approval" | "receipt" | "spawn" | "header" | "error";

export const MARKER_LABELS: Record<MarkerKind, { zh: string; en: string }> = {
  approval: { zh: "审批", en: "Approval" },
  receipt: { zh: "回执", en: "Receipt" },
  spawn: { zh: "子代理", en: "Spawn" },
  header: { zh: "提示词", en: "Prompt" },
  error: { zh: "错误", en: "Error" },
};

export const KIND_LABELS: Record<string, { zh: string; en: string }> = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" },
};

/** Ledger-tag label of a record: marker sub-kind when present. */
export function recordKindLabel(
  record: Pick<TrajectoryRecord, "kind" | "markerKind">,
  locale: TraceLocale,
): string {
  const marker = record.markerKind
    ? MARKER_LABELS[record.markerKind]
    : undefined;
  if (marker) return locale === "zh-CN" ? marker.zh : marker.en;
  const base = KIND_LABELS[record.kind];
  return base ? (locale === "zh-CN" ? base.zh : base.en) : record.kind;
}

export interface MessageDigest {
  role: string;
  text: string;
}

export interface UsageInfo {
  input_tokens?: number;
  output_tokens?: number;
  total_tokens?: number;
  time?: number;
  cache_creation_input_tokens?: number;
  cache_input_tokens?: number;
  reasoning_tokens?: number;
}

export interface TimingInfo {
  ttft_ms: number;
  decode_ms: number;
}

/** One content part of a channel inbound message. */
export interface InboundPart {
  type: string;
  text?: string;
}

/**
 * Size-only accounting of a model call's input messages (from
 * llm/call): aggregated character counts per role, no content.
 */
export interface MessagesMeta {
  count: number;
  totalChars: number;
  charsByRole: Record<string, number>;
  countByRole: Record<string, number>;
  maxToolChars: number;
}

/**
 * One message appended since the previous model call (from llm/call
 * messages_new) — after a tool round this is how the tool results
 * enter the model input. Content is truncated + redacted at capture.
 */
export interface InputNewMessage {
  role: string;
  chars: number;
  text?: string;
  toolCallId?: string;
}

/**
 * Rough chars→token estimate. Content is not stored, so the ratio is
 * picked from the model family (UI labels these values "estimated").
 */
export function estimateTokensFromChars(chars: number, model?: string): number {
  const name = (model ?? "").toLowerCase();
  let charsPerToken = 4;
  if (name.includes("qwen")) charsPerToken = 2.2;
  else if (name.includes("deepseek")) charsPerToken = 2.5;
  else if (name.includes("claude")) charsPerToken = 3.6;
  return Math.round(chars / charsPerToken);
}

// ── Context-reset localization ──────────────────────────────────────────
//
// A context_reset call re-records the full input; comparing it with the
// input reconstructed from the previous increments (or, on old traces,
// with the previous call's 200-char digest) localizes WHERE the context
// was rewritten: the breakpoint, before/after sizes, per-role changes,
// and a per-message kept/removed/rewritten/added classification.

export interface ResetDiffMessage {
  role: string;
  chars?: number;
  text?: string;
}

export interface ContextResetChange {
  status: "kept" | "removed" | "rewritten" | "added";
  role: string;
  oldText?: string;
  newText?: string;
}

export interface ContextResetDetail {
  /** First divergent position (0-based) — kept prefix length. */
  breakAt: number;
  beforeCount: number;
  afterCount: number;
  beforeChars: number;
  afterChars: number;
  beforeByRole: Record<string, number>;
  afterByRole: Record<string, number>;
  /** Per-message classification after the kept prefix (capped). */
  changes: ContextResetChange[];
}

const RESET_CHANGE_CAP = 60;

function resetKey(message: ResetDiffMessage): string {
  return `${message.role}|${message.text ?? `#${message.chars ?? 0}`}`;
}

function charsOf(message: ResetDiffMessage): number {
  return message.chars ?? (message.text ? message.text.length : 0);
}

function countByRole(
  list: readonly ResetDiffMessage[],
): Record<string, number> {
  const byRole: Record<string, number> = {};
  for (const message of list) {
    byRole[message.role] = (byRole[message.role] ?? 0) + 1;
  }
  return byRole;
}

/** Localize a context rewrite by diffing the old vs new input lists. */
export function diffContextReset(
  oldList: readonly ResetDiffMessage[],
  newList: readonly ResetDiffMessage[],
): ContextResetDetail {
  let breakAt = 0;
  while (
    breakAt < oldList.length &&
    breakAt < newList.length &&
    resetKey(oldList[breakAt]) === resetKey(newList[breakAt])
  ) {
    breakAt += 1;
  }
  const oldTail = oldList.slice(breakAt);
  const newTail = newList.slice(breakAt);
  const newKeys = new Map<string, number>();
  for (const message of newTail) {
    const key = resetKey(message);
    newKeys.set(key, (newKeys.get(key) ?? 0) + 1);
  }
  const oldUnmatched: ResetDiffMessage[] = [];
  const newUnmatched: ResetDiffMessage[] = [];
  const changes: ContextResetChange[] = [];
  for (let i = 0; i < Math.min(breakAt, RESET_CHANGE_CAP); i += 1) {
    changes.push({ status: "kept", role: oldList[i].role });
  }
  for (const message of oldTail) {
    const key = resetKey(message);
    const remaining = newKeys.get(key) ?? 0;
    if (remaining > 0) {
      newKeys.set(key, remaining - 1);
      changes.push({ status: "kept", role: message.role });
    } else {
      oldUnmatched.push(message);
    }
  }
  for (const message of newTail) {
    const key = resetKey(message);
    const remaining = newKeys.get(key) ?? 0;
    if (remaining > 0) {
      newKeys.set(key, remaining - 1);
      newUnmatched.push(message);
    }
  }
  // Pair leftover old/new messages of the same role as rewrites.
  const newByRole = new Map<string, ResetDiffMessage[]>();
  for (const message of newUnmatched) {
    const list = newByRole.get(message.role);
    if (list) list.push(message);
    else newByRole.set(message.role, [message]);
  }
  const rewrittenPairs: Array<[ResetDiffMessage, ResetDiffMessage]> = [];
  const removedFinal: ResetDiffMessage[] = [];
  for (const message of oldUnmatched) {
    const pool = newByRole.get(message.role);
    if (pool && pool.length > 0) {
      rewrittenPairs.push([message, pool.shift()!]);
    } else {
      removedFinal.push(message);
    }
  }
  const addedFinal = [...newByRole.values()].flat();
  for (const [oldMsg, newMsg] of rewrittenPairs) {
    changes.push({
      status: "rewritten",
      role: oldMsg.role,
      oldText: oldMsg.text,
      newText: newMsg.text,
    });
  }
  for (const message of removedFinal) {
    changes.push({
      status: "removed",
      role: message.role,
      oldText: message.text,
    });
  }
  for (const message of addedFinal) {
    changes.push({
      status: "added",
      role: message.role,
      newText: message.text,
    });
  }
  return {
    breakAt,
    beforeCount: oldList.length,
    afterCount: newList.length,
    beforeChars: oldList.reduce((sum, m) => sum + charsOf(m), 0),
    afterChars: newList.reduce((sum, m) => sum + charsOf(m), 0),
    beforeByRole: countByRole(oldList),
    afterByRole: countByRole(newList),
    changes: changes.slice(0, RESET_CHANGE_CAP),
  };
}

/**
 * Wire-level API payload captured by the openai SDK interception
 * (llm/api_request + llm/api_response events). These are the
 * FORMATTED messages after the provider formatter has run — the
 * actual dicts sent over the wire, including role=tool results.
 */
export interface ApiPayloadMessage {
  role: string;
  content: string;
  toolCallId?: string;
}

export interface ApiPayload {
  model: string;
  messages: ApiPayloadMessage[];
  params?: Record<string, unknown>;
  usage?: Record<string, number>;
  durationMs?: number;
}

/**
 * Decode one wire-level message content into displayable text.
 *
 * Some provider formatters (and the sanitize pass) leave content as a
 * JSON-encoded block array STRING — `[{"type":"text","text":"…"}]` —
 * which must not be shown raw. Parse it when possible and join the
 * block texts; non-text blocks degrade to a `[type]` marker.
 */
export function decodeWireContent(content: string): string {
  const trimmed = content.trim();
  if (!trimmed.startsWith("[") && !trimmed.startsWith("{")) return content;
  let parsed: unknown;
  try {
    parsed = JSON.parse(trimmed);
  } catch {
    return content;
  }
  const blocks = Array.isArray(parsed) ? parsed : [parsed];
  const parts: string[] = [];
  for (const block of blocks) {
    if (
      block &&
      typeof block === "object" &&
      typeof (block as Record<string, unknown>).text === "string"
    ) {
      const text = (block as Record<string, unknown>).text as string;
      if (text) parts.push(text);
    } else if (
      block &&
      typeof block === "object" &&
      typeof (block as Record<string, unknown>).type === "string"
    ) {
      parts.push(`[${(block as Record<string, unknown>).type}]`);
    } else if (typeof block === "string") {
      if (block) parts.push(block);
    }
  }
  return parts.length > 0 ? parts.join("\n") : content;
}

/** One ledger row: a user input, an LLM call, a tool call, or a marker. */
export interface TrajectoryRecord {
  index: number;
  runIndex: number;
  runId: string;
  kind: RecordKind;
  text: string;
  timeSeconds: number | null;
  startedAt: number | null;
  isError: boolean;
  running: boolean;
  /* user */
  messages?: MessageDigest[];
  /* user message source (merged from message/inbound) */
  channel?: string;
  userId?: string;
  inboundParts?: InboundPart[];
  /* channel delivery receipt (message/outbound) */
  receipt?: { channel?: string; chars: number };
  /* assistant */
  model?: string;
  provider?: string;
  /* size-only input accounting (from llm/call messages_meta) */
  messagesMeta?: MessagesMeta;
  /* messages appended since the previous call (llm/call messages_new) */
  inputNew?: InputNewMessage[];
  /* context prefix changed before this call (compaction / rewrite) */
  contextReset?: boolean;
  /* localized detail of that rewrite (breakpoint, sizes, per-message) */
  resetDetail?: ContextResetDetail;
  /* wire-level API payload (from llm/api_request/response events) */
  apiPayload?: ApiPayload;
  outputText?: string;
  thinkingText?: string;
  usage?: UsageInfo;
  timing?: TimingInfo;
  toolCalls?: { name: string; id: string }[];
  note?: string;
  /* tool */
  toolName?: string;
  toolInput?: string;
  toolOutput?: string;
  /* call-time model-visible schema of this tool (from the active
   * llm/header snapshot — dsh schemaDetail parity) */
  toolSchema?: Record<string, unknown>;
  /* skill-load row (builtin Skill tool): the loaded skill's name */
  skillName?: string;
  /* this tool call touched a skill's resources (dir path match) */
  inSkill?: string;
  /* whether that skill had been loaded (Skill tool) before this call */
  inSkillLoaded?: boolean;
  /* skill whose instructions plausibly guided this call (temporal
   * attribution inside the run — inferred, not declared) */
  guidedSkill?: string;
  /* why guidedSkill was attributed: explicit slash command vs a Skill
   * tool load earlier in the same run */
  guidedReason?: "slash" | "load";
  /* execution span this record was attributed to (skillSpans) */
  skillSpanId?: string;
  /* hue of that span (ledger left-strip coloring) */
  skillSpanHue?: number;
  /* the span was a bypass (resources touched without loading) */
  skillSpanBypass?: boolean;
  /* pre-truncation output size (from tool/result) */
  toolOutputChars?: number;
  toolOutputBytes?: number;
  toolError?: string;
  /* system marker */
  marker?: string;
  /* marker sub-kind (distinct ledger tag per marker source) */
  markerKind?: MarkerKind;
  /* request header (system prompt snapshot) */
  prompt?: string;
  prevPrompt?: string;
  headerTools?: string[];
  schemas?: Record<string, unknown>[];
  headerReason?: string;
  sha?: string;
  prevSha?: string;
  /* model-call options digest (from llm/call) */
  options?: Record<string, unknown>;
  /* sub-agent spawn pointer */
  spawnSession?: string;
  spawnAgent?: string;
  /* raw source events (for the Inspector Raw tab) */
  raw?: Record<string, unknown>[];
}

export interface TrajectoryGroupModel {
  title: string;
  cells: TrajectoryRecord[];
}

export interface TrajectoryTurnModel {
  turn: number | null;
  status: string;
  durationMs: number | null;
  groups: TrajectoryGroupModel[];
  /** Skill names loaded within this request (from Skill tool calls). */
  skillsUsed?: string[];
  /** Skill execution spans opened during this request. */
  skillSpans?: SkillSpan[];
}

export interface TimelineSpanRange {
  start: number;
  end: number;
}

/** Format a duration as an integer-millisecond label. */
export function formatDurationMillis(milliseconds: number): string {
  return `${Math.round(milliseconds).toLocaleString()} ms`;
}

export function formatSeconds(seconds: number | null | undefined): string {
  if (seconds === null || seconds === undefined || !Number.isFinite(seconds)) {
    return "-";
  }
  const ms = seconds * 1000;
  if (ms < 1000) return `${Math.round(ms)}ms`;
  if (ms < 60_000) return `${(ms / 1000).toFixed(1)}s`;
  return `${Math.floor(ms / 60_000)}m${Math.round((ms % 60_000) / 1000)}s`;
}

export function formatTokens(value: number | undefined | null): string {
  if (value === undefined || value === null || !Number.isFinite(value)) {
    return "-";
  }
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}k`;
  return String(Math.round(value));
}

export function formatThroughput(
  tokens: number | undefined,
  seconds: number | null | undefined,
): string {
  if (
    tokens === undefined ||
    !Number.isFinite(tokens) ||
    seconds === null ||
    seconds === undefined ||
    seconds <= 0
  ) {
    return "-";
  }
  return `${(tokens / seconds).toFixed(1)} tok/s`;
}

export function formatEpochMs(epochMs: number | null | undefined): string {
  if (epochMs === null || epochMs === undefined || !Number.isFinite(epochMs)) {
    return "-";
  }
  return new Date(epochMs).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3,
  });
}

export function epochMs(iso: string | null | undefined): number | null {
  if (!iso) return null;
  const value = Date.parse(iso);
  return Number.isFinite(value) ? value : null;
}

/** First non-empty single-line preview for a record. */
export function recordPreview(record: TrajectoryRecord): string {
  if (record.text) return record.text;
  return "";
}
