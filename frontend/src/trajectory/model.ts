/**
 * Fold raw trace events into timeline/ledger records.
 *
 * Simplified adaptation of the layout fold in deepseek-harness
 * (packages/client/ui-trajectory/src/client/layout.ts), MIT License,
 * Copyright (c) 2026 DeepSeek: one turn per run ("Request #N"), with
 * user / assistant / tool cells.
 */

import type { TraceEvent } from "../traceApi";
import type {
  InboundPart,
  MessageDigest,
  ResetDiffMessage,
  TimingInfo,
  TrajectoryRecord,
  TrajectoryTurnModel,
  UsageInfo,
} from "./records";
import { decodeWireContent, diffContextReset, epochMs } from "./records";
import type { ContextResetDetail } from "./records";
import {
  SkillSpanTracker,
  buildSkillFeatures,
  matchSkillFeatures,
} from "./skillSpans";

interface PendingCell {
  cell: TrajectoryRecord;
  callData: Record<string, unknown>;
  call?: TraceEvent;
}

function dataOf(event: TraceEvent | null | undefined): Record<string, unknown> {
  return (event?.data ?? {}) as Record<string, unknown>;
}

/** True when the value is a plain {string: number} record. */
function isCharsRecord(value: unknown): value is Record<string, number> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }
  return Object.values(value).every(
    (item) => typeof item === "number" && Number.isFinite(item),
  );
}

/** Parse llm/call messages_new into typed entries. */
function parseInputNew(value: unknown): TrajectoryRecord["inputNew"] {
  if (!Array.isArray(value) || value.length === 0) return undefined;
  const entries = [];
  for (const raw of value) {
    if (!raw || typeof raw !== "object") continue;
    const item = raw as Record<string, unknown>;
    entries.push({
      role: typeof item.role === "string" ? item.role : "?",
      chars: typeof item.chars === "number" ? item.chars : 0,
      text: typeof item.text === "string" ? item.text : undefined,
      toolCallId:
        typeof item.tool_call_id === "string" ? item.tool_call_id : undefined,
    });
  }
  return entries.length > 0 ? entries : undefined;
}

/** Skill name from a builtin Skill-tool call input ({"skill": name}). */
function parseSkillName(input: unknown): string | undefined {
  if (typeof input !== "string" || !input) return undefined;
  try {
    const parsed = JSON.parse(input) as { skill?: unknown };
    if (typeof parsed.skill === "string" && parsed.skill) {
      return parsed.skill;
    }
  } catch {
    /* not JSON — ignore */
  }
  return undefined;
}

/** Normalize a path for matching: one kind of separator, lowercase,
 * collapses duplicate separators (JSON-escaped backslashes included). */
function normalizeSkillPath(text: string): string {
  return text.replace(/[/\\]+/g, "/").toLowerCase();
}

/** Tool name of a captured schema — OpenAI wire shape
 * ({"type":"function","function":{"name"}}) or flat ({name}). */
export function toolSchemaName(
  schema: Record<string, unknown>,
): string | undefined {
  if (typeof schema.name === "string" && schema.name) return schema.name;
  const fn = schema.function;
  if (
    fn &&
    typeof fn === "object" &&
    typeof (fn as Record<string, unknown>).name === "string"
  ) {
    return (fn as Record<string, unknown>).name as string;
  }
  return undefined;
}

/** Extract [normalizedDir, name] pairs from an <agent-skills> section. */
function extractSkillDirs(prompt: string): Array<[string, string]> {
  const pairs: Array<[string, string]> = [];
  for (const block of prompt.matchAll(/<skill>([\s\S]*?)<\/skill>/g)) {
    const name = block[1].match(/<name>([^<]+)<\/name>/);
    const dir = block[1].match(/<dir>([^<]+)<\/dir>/);
    if (name && dir && dir[1].trim()) {
      pairs.push([normalizeSkillPath(dir[1].trim()), name[1].trim()]);
    }
  }
  // Longest dir first so nested skill dirs match their own skill.
  pairs.sort((a, b) => b[0].length - a[0].length);
  return pairs;
}

/** Skill name inlined into a slash-command query ("<skill><name>x</name>"). */
function matchSlashSkill(text: string): string | null {
  const match = text.match(/<skill>\s*<name>([^<]+)<\/name>/);
  return match ? match[1].trim() : null;
}

function firstLine(text: string | undefined, max = 160): string {
  if (!text) return "";
  const line = text.split("\n", 1)[0].trim();
  return line.length > max ? `${line.slice(0, max)}…` : line;
}

/**
 * Fold ascending trace events into per-run turn models.
 *
 * Records keep dsh semantics: ``startedAt`` (epoch ms) plus
 * ``timeSeconds`` drive the duration/time timeline projections, and
 * ``running`` marks a call whose result has not landed yet.
 *
 * Cells are appended in *call* order and filled in place when the
 * matching result arrives, so the ledger reflects true chronological
 * order even when results are late or missing entirely.
 */
export function buildTurns(events: TraceEvent[]): TrajectoryTurnModel[] {
  const turns: TrajectoryTurnModel[] = [];
  const turnByRun = new Map<string, TrajectoryTurnModel>();
  const pendingLlm = new Map<string, PendingCell[]>();
  // Last completed LLM cell per run — for attaching api_request/response
  const lastLlmCellByRun = new Map<string, TrajectoryRecord>();
  const pendingTool = new Map<string, PendingCell[]>();
  const orphanCells = new Map<string, TrajectoryRecord[]>();
  // Cells recorded before any run opened (empty run_id) — attached
  // to the next run/start so they are never silently dropped.
  const preRunCells: TrajectoryRecord[] = [];
  // Session runs are sequential: remember the run currently open so
  // cells with an unknown run_id (e.g. approval ids from older data)
  // attach to it instead of being dropped or landing pre-run.
  let openRunId = "";
  // Channel of each run (from run/start) — used to label the inbound
  // user message and the outbound delivery receipt.
  const channelByRun = new Map<string, string>();
  // The USER record of each run — message/inbound merges into it.
  const userCellByRun = new Map<string, TrajectoryRecord>();
  const promptBySha = new Map<string, string>();
  // Call-time model-visible tool schemas from the latest llm/header
  // snapshot — attached to tool records (dsh schemaDetail parity).
  const schemasByName = new Map<string, Record<string, unknown>>();
  // Skill directories from the latest <agent-skills> prompt section
  // ([normalizedDir, name], longest dir first) + the skills explicitly
  // loaded so far in this session — together they attribute tool calls
  // that touch skill resources (layer 3 of skill observability).
  let skillDirs: Array<[string, string]> = [];
  const loadedSkills = new Set<string>();
  // Skills active in the CURRENT run (slash injection or a Skill load)
  // with why — used for temporal "guided by" attribution of ordinary
  // tool calls. Cleared when the run ends.
  const activeRunSkills: Array<[string, "slash" | "load"]> = [];
  // Skill execution spans: start/end anchors + attribution evidence
  // (design: DESIGN.md 技能执行段). turnOfSpan maps spans to their run.
  const spanTracker = new SkillSpanTracker();
  const spanTurns = new Map<string, TrajectoryTurnModel>();
  // Content-match index per skill, built from loaded SKILL.md bodies
  // (the Skill tool result text) — WP4 attribution evidence.
  const skillFeatures = new Map<string, string[]>();
  const skillShaBySkill = new Map<string, string>();
  // Context input reconstructed from messages_new increments (for
  // localizing context_reset rewrites) + the previous call's digest
  // as the structural fallback for older traces.
  let accumulatedInput: ResetDiffMessage[] = [];
  let prevCallDigest: Array<{ role: string; text: string }> = [];
  let index = 0;
  let runNumber = 0;

  const cellsOf = (turn: TrajectoryTurnModel): TrajectoryRecord[] =>
    turn.groups[0].cells;

  const pushOrphan = (runId: string, cell: TrajectoryRecord) => {
    const list = orphanCells.get(runId);
    if (list) list.push(cell);
    else orphanCells.set(runId, [cell]);
  };

  const appendCell = (runId: string, cell: TrajectoryRecord) => {
    if (!runId) {
      if (openRunId) {
        runId = openRunId;
      } else {
        preRunCells.push(cell);
        return;
      }
    }
    const turn = turnByRun.get(runId);
    if (turn) {
      cell.runIndex = turn.turn ?? 0;
      cellsOf(turn).push(cell);
    } else if (openRunId) {
      const openTurn = turnByRun.get(openRunId);
      if (openTurn) {
        cell.runIndex = openTurn.turn ?? 0;
        cellsOf(openTurn).push(cell);
      } else {
        pushOrphan(runId, cell);
      }
    } else {
      pushOrphan(runId, cell);
    }
  };

  const attachOrphans = (turn: TrajectoryTurnModel, runId: string) => {
    const list = orphanCells.get(runId);
    if (!list) return;
    for (const cell of list) cellsOf(turn).push(cell);
    orphanCells.delete(runId);
  };

  for (const event of events) {
    const data = dataOf(event);
    switch (event.type) {
      case "run/start": {
        runNumber += 1;
        // Defensive reset: a crashed run without run/end must not leak
        // its active skills into this run's temporal attribution.
        activeRunSkills.length = 0;
        channelByRun.set(
          event.run_id,
          typeof data.channel === "string" ? data.channel : "",
        );
        const turn: TrajectoryTurnModel = {
          turn: runNumber,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${runNumber}`, cells: [] }],
        };
        turnByRun.set(event.run_id, turn);
        turns.push(turn);
        openRunId = event.run_id;
        attachOrphans(turn, event.run_id);
        for (const cell of preRunCells.splice(0)) {
          cell.runIndex = runNumber;
          cellsOf(turn).push(cell);
        }
        const messages = Array.isArray(data.messages)
          ? (data.messages as MessageDigest[])
          : [];
        const query = String(data.query ?? "");
        // Slash-command skill invocation inlines the whole <skill> block
        // into the query (a third disclosure path, next to the Skill
        // tool and raw file access).
        let slashSkill =
          typeof data.slash_skill === "string" && data.slash_skill
            ? data.slash_skill
            : matchSlashSkill(query);
        if (!slashSkill && messages.length > 0) {
          slashSkill = matchSlashSkill(String(messages[0]?.text ?? ""));
        }
        if (slashSkill) {
          loadedSkills.add(slashSkill);
          activeRunSkills.push([slashSkill, "slash"]);
          spanTracker.onRunStart();
          spanTracker.onSlashSkill(
            slashSkill,
            event.seq,
            epochMs(event.t) ?? 0,
          );
          spanTurns.set(`${slashSkill}#${event.seq}`, turn);
        }
        const userCell: TrajectoryRecord = {
          index: ++index,
          runIndex: runNumber,
          runId: event.run_id,
          kind: "user",
          text: firstLine(query) || firstLine(messages.at(-1)?.text),
          messages,
          timeSeconds: 0,
          startedAt: epochMs(event.t) ?? 0,
          isError: false,
          running: false,
          skillName: slashSkill ?? undefined,
          model: undefined,
        };
        userCellByRun.set(event.run_id, userCell);
        cellsOf(turn).push(userCell);
        break;
      }
      case "run/end": {
        const turn = turnByRun.get(event.run_id);
        if (openRunId === event.run_id) openRunId = "";
        activeRunSkills.length = 0;
        // Spans cannot outlive their run: hard-close everything.
        spanTracker.onRunEnd(event.seq, epochMs(event.t) ?? 0);
        channelByRun.delete(event.run_id);
        userCellByRun.delete(event.run_id);
        const status = String(data.status ?? "unknown");
        if (turn) {
          turn.status = status;
          turn.durationMs =
            typeof data.duration_ms === "number" ? data.duration_ms : null;
        }
        if (status === "error" && data.error) {
          const target = turn ?? {
            turn: null,
            status,
            durationMs:
              typeof data.duration_ms === "number" ? data.duration_ms : null,
            groups: [{ title: "", cells: [] as TrajectoryRecord[] }],
          };
          if (!turn) turns.push(target);
          target.groups[0].cells.push({
            index: ++index,
            runIndex: runNumber,
            runId: event.run_id,
            kind: "system",
            markerKind: "error",
            text: firstLine(String(data.error)) || "run failed",
            marker: String(data.error ?? "run failed"),
            timeSeconds:
              typeof data.duration_ms === "number"
                ? data.duration_ms / 1000
                : null,
            startedAt: epochMs(event.t) ?? 0,
            isError: true,
            running: false,
            raw: [event as unknown as Record<string, unknown>],
          });
        }
        break;
      }
      case "agent/spawn": {
        const childSession =
          typeof data.child_session_id === "string"
            ? data.child_session_id
            : undefined;
        const childAgent =
          typeof data.child_agent_id === "string" ? data.child_agent_id : "?";
        appendCell(event.run_id, {
          index: ++index,
          runIndex: 0,
          runId: event.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${childAgent} → ${childSession ?? "?"}`,
          timeSeconds: 0,
          startedAt: epochMs(event.t) ?? 0,
          isError: false,
          running: false,
          spawnSession: childSession,
          spawnAgent: childAgent,
          raw: [event as unknown as Record<string, unknown>],
        });
        break;
      }
      case "message/inbound": {
        // The channel envelope of this run's user message. It merges
        // into the run's USER record (dsh semantics: the user record
        // carries its source); a standalone readable cell is created
        // only when the run has no user record (old data / orphan).
        const parts = Array.isArray(data.parts)
          ? (data.parts as Record<string, unknown>[])
          : [];
        const meta =
          data.channel_meta && typeof data.channel_meta === "object"
            ? (data.channel_meta as Record<string, unknown>)
            : undefined;
        const inboundParts: InboundPart[] = parts.map((part) => ({
          type: String(part.type ?? "?"),
          text: typeof part.text === "string" ? part.text : undefined,
        }));
        const channel = channelByRun.get(event.run_id) ?? "";
        const userId =
          meta && typeof meta.user_id === "string" && meta.user_id
            ? meta.user_id
            : undefined;
        const textFromParts = firstLine(
          inboundParts
            .map((part) => part.text ?? "")
            .filter(Boolean)
            .join("\n"),
        );
        const userCell = userCellByRun.get(event.run_id);
        if (userCell && !userCell.inboundParts) {
          userCell.inboundParts = inboundParts;
          userCell.channel = channel || undefined;
          userCell.userId = userId;
          userCell.raw = [
            ...(userCell.raw ?? []),
            event as unknown as Record<string, unknown>,
          ];
          if (!userCell.text) userCell.text = textFromParts;
        } else {
          appendCell(event.run_id, {
            index: ++index,
            runIndex: 0,
            runId: event.run_id,
            kind: "user",
            text: textFromParts || "📥",
            timeSeconds: 0,
            startedAt: epochMs(event.t) ?? 0,
            isError: false,
            running: false,
            channel: channel || undefined,
            userId,
            inboundParts,
            raw: [event as unknown as Record<string, unknown>],
          });
        }
        break;
      }
      case "message/outbound": {
        // Delivery receipt for the final reply. The ledger shows a
        // one-line receipt (channel + length) instead of duplicating
        // the assistant text; the Inspector keeps the full payload.
        const text2 = typeof data.text === "string" ? data.text : "";
        appendCell(event.run_id, {
          index: ++index,
          runIndex: 0,
          runId: event.run_id,
          kind: "system",
          markerKind: "receipt",
          text: "📤",
          timeSeconds: 0,
          startedAt: epochMs(event.t) ?? 0,
          isError: false,
          running: false,
          outputText: text2 || undefined,
          receipt: {
            channel: channelByRun.get(event.run_id) || undefined,
            chars: text2.length,
          },
          raw: [event as unknown as Record<string, unknown>],
        });
        break;
      }
      case "approval/asked": {
        appendCell(event.run_id, {
          index: ++index,
          runIndex: 0,
          runId: event.run_id,
          kind: "system",
          markerKind: "approval",
          text: String(data.tool_name ?? "?"),
          timeSeconds: 0,
          startedAt: epochMs(event.t) ?? 0,
          isError: false,
          running: false,
          raw: [event as unknown as Record<string, unknown>],
        });
        break;
      }
      case "approval/decided": {
        const decision = String(data.decision ?? "?");
        const tool = data.tool_name ? String(data.tool_name) : "";
        appendCell(event.run_id, {
          index: ++index,
          runIndex: 0,
          runId: event.run_id,
          kind: "system",
          markerKind: "approval",
          text: tool ? `${tool} → ${decision}` : decision,
          timeSeconds: 0,
          startedAt: epochMs(event.t) ?? 0,
          isError: decision === "denied",
          running: false,
          raw: [event as unknown as Record<string, unknown>],
        });
        break;
      }
      case "llm/header": {
        const sha = typeof data.sha256 === "string" ? data.sha256 : "";
        const prevSha =
          typeof data.prev_sha256 === "string" ? data.prev_sha256 : undefined;
        const reason = data.reason === "changed" ? "changed" : "initial";
        const prompt =
          typeof data.system_prompt === "string" ? data.system_prompt : "";
        const tools = Array.isArray(data.tools) ? (data.tools as string[]) : [];
        const schemas = Array.isArray(data.schemas)
          ? (data.schemas as Record<string, unknown>[])
          : undefined;
        appendCell(event.run_id, {
          index: ++index,
          runIndex: 0,
          runId: event.run_id,
          kind: "system",
          markerKind: "header",
          text:
            reason === "initial"
              ? `⚙ ${
                  prompt ? `System Prompt (${prompt.length})` : "System Prompt"
                }`
              : `⚙ System Prompt updated`,
          timeSeconds: 0,
          startedAt: epochMs(event.t) ?? 0,
          isError: false,
          running: false,
          prompt,
          prevPrompt: promptBySha.get(prevSha ?? ""),
          headerTools: tools,
          headerReason: reason,
          sha,
          prevSha,
          schemas,
          raw: [event as unknown as Record<string, unknown>],
        });
        if (sha) promptBySha.set(sha, prompt);
        if (Array.isArray(schemas)) {
          schemasByName.clear();
          for (const schema of schemas) {
            const name = toolSchemaName(schema);
            if (name) schemasByName.set(name, schema);
          }
        }
        if (prompt) skillDirs = extractSkillDirs(prompt);
        break;
      }
      case "llm/call": {
        const callData = dataOf(event);
        const options =
          callData.options &&
          typeof callData.options === "object" &&
          Object.keys(callData.options as object).length > 0
            ? (callData.options as Record<string, unknown>)
            : undefined;
        const rawMeta = callData.messages_meta as Record<
          string,
          unknown
        > | null;
        const messagesMeta =
          rawMeta && typeof rawMeta === "object"
            ? {
                count: typeof rawMeta.count === "number" ? rawMeta.count : 0,
                totalChars:
                  typeof rawMeta.total_chars === "number"
                    ? rawMeta.total_chars
                    : 0,
                charsByRole: isCharsRecord(rawMeta.chars_by_role)
                  ? rawMeta.chars_by_role
                  : {},
                countByRole: isCharsRecord(rawMeta.count_by_role)
                  ? rawMeta.count_by_role
                  : {},
                maxToolChars:
                  typeof rawMeta.max_tool_chars === "number"
                    ? rawMeta.max_tool_chars
                    : 0,
              }
            : undefined;
        // Context-reset localization: compare the full re-recorded
        // input against the input reconstructed from the increments.
        const currentInputNew = parseInputNew(callData.messages_new);
        let resetDetail: ContextResetDetail | undefined;
        if (callData.context_reset === true) {
          const newList: ResetDiffMessage[] = (currentInputNew ?? []).map(
            (message) => ({
              role: message.role,
              chars: message.chars,
              text: message.text,
            }),
          );
          let oldList: ResetDiffMessage[];
          if (accumulatedInput.length > 0 || newList.length === 0) {
            oldList = accumulatedInput;
          } else {
            // Old traces (no messages_new): structural diff from the
            // previous call's 200-char digest.
            oldList = prevCallDigest.map((message) => ({
              role: message.role,
              text: message.text,
            }));
          }
          resetDetail = diffContextReset(oldList, newList);
          if (messagesMeta) {
            resetDetail.afterChars = messagesMeta.totalChars;
          }
        }
        if (currentInputNew) {
          const asDiff = currentInputNew.map((message) => ({
            role: message.role,
            chars: message.chars,
            text: message.text,
          }));
          if (callData.context_reset === true) {
            accumulatedInput = asDiff;
          } else if (callData.tail_update === true) {
            // Same-position replacement of the trailing message.
            accumulatedInput = [...accumulatedInput.slice(0, -1), ...asDiff];
          } else if (
            typeof callData.messages_count === "number" &&
            currentInputNew.length >= callData.messages_count &&
            accumulatedInput.length > 0
          ) {
            // Full input without a reset flag: the fingerprint cache
            // was lost (plugin hot reload) — resync, don't append.
            accumulatedInput = asDiff;
          } else {
            accumulatedInput = [...accumulatedInput, ...asDiff];
          }
        }
        prevCallDigest = Array.isArray(callData.messages)
          ? (callData.messages as MessageDigest[]).map((message) => ({
              role: message.role,
              text: message.text,
            }))
          : [];
        const cell: TrajectoryRecord = {
          index: ++index,
          runIndex: 0,
          runId: event.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: epochMs(event.t) ?? 0,
          isError: false,
          running: true,
          model: String(callData.model ?? "unknown"),
          provider:
            typeof callData.provider === "string" && callData.provider
              ? callData.provider
              : undefined,
          messagesMeta,
          inputNew: currentInputNew,
          contextReset: callData.context_reset === true,
          resetDetail,
          options,
        };
        appendCell(event.run_id, cell);
        const list = pendingLlm.get(event.run_id) ?? [];
        list.push({ cell, callData, call: event });
        pendingLlm.set(event.run_id, list);
        break;
      }
      case "llm/api_request": {
        // Attach the wire-level formatted messages to the pending
        // (or most recent) LLM call cell for the API payload tab.
        const list = pendingLlm.get(event.run_id);
        const target =
          list && list.length > 0
            ? list[list.length - 1].cell
            : lastLlmCellByRun.get(event.run_id);
        if (target) {
          const msgs = Array.isArray(data.messages)
            ? (data.messages as Record<string, unknown>[])
            : [];
          target.apiPayload = {
            model: String(data.model ?? "unknown"),
            messages: msgs.map((m) => ({
              role: String(m.role ?? "?"),
              // Provider formatters may leave the block array as a
              // JSON string — decode it into readable text.
              content: decodeWireContent(
                typeof m.content === "string"
                  ? m.content
                  : JSON.stringify(m.content ?? ""),
              ),
              toolCallId:
                typeof m.tool_call_id === "string" ? m.tool_call_id : undefined,
            })),
            params:
              data.params && typeof data.params === "object"
                ? (data.params as Record<string, unknown>)
                : undefined,
            durationMs:
              typeof data.duration_ms === "number"
                ? data.duration_ms
                : undefined,
          };
          target.raw = [
            ...(target.raw ?? []),
            event as unknown as Record<string, unknown>,
          ];
        }
        break;
      }
      case "llm/api_response": {
        // Attach usage/timing from the API response to the cell.
        const target = lastLlmCellByRun.get(event.run_id);
        if (target && target.apiPayload) {
          if (data.usage && typeof data.usage === "object") {
            target.apiPayload.usage = data.usage as Record<string, number>;
          }
          if (typeof data.duration_ms === "number") {
            target.apiPayload.durationMs = data.duration_ms;
          }
        }
        break;
      }
      case "llm/result": {
        const list = pendingLlm.get(event.run_id);
        const pending = list?.shift();
        const callData = pending?.callData ?? {};
        const durationMs =
          typeof data.duration_ms === "number" ? data.duration_ms : null;
        const usage = (data.usage as UsageInfo | undefined) ?? undefined;
        const timing = data.timing as TimingInfo | undefined;
        const toolCalls = Array.isArray(data.tool_calls)
          ? (data.tool_calls as { name: string; id: string }[])
          : undefined;
        const textPreview = data.error
          ? firstLine(String(data.error))
          : firstLine(String(data.text ?? ""));
        const preview =
          textPreview ||
          (toolCalls && toolCalls.length > 0
            ? `🛠 ${toolCalls.map((call) => call.name).join(", ")}`
            : "");
        const fill = {
          text: preview,
          timeSeconds: durationMs === null ? null : durationMs / 1000,
          isError: Boolean(data.error),
          running: false,
          outputText: data.text ? String(data.text) : undefined,
          thinkingText: data.thinking ? String(data.thinking) : undefined,
          usage,
          timing,
          toolCalls,
          note: data.note ? String(data.note) : undefined,
        };
        if (pending) {
          Object.assign(pending.cell, fill);
          lastLlmCellByRun.set(event.run_id, pending.cell);
          pending.cell.model = String(
            data.model ?? callData.model ?? pending.cell.model,
          );
          pending.cell.raw = [
            ...(pending.call
              ? [pending.call as unknown as Record<string, unknown>]
              : []),
            event as unknown as Record<string, unknown>,
          ];
        } else {
          appendCell(event.run_id, {
            index: ++index,
            runIndex: 0,
            runId: event.run_id,
            kind: "message",
            startedAt: epochMs(event.t) ?? 0,
            model: String(data.model ?? callData.model ?? "unknown"),
            ...fill,
          });
        }
        break;
      }
      case "tool/call": {
        const callData = dataOf(event);
        const toolName = String(callData.name ?? "?");
        const skillName =
          toolName === "Skill" ? parseSkillName(callData.input) : undefined;
        if (skillName) {
          loadedSkills.add(skillName);
          activeRunSkills.push([skillName, "load"]);
          const loadSpanId = spanTracker.onSkillLoad(
            skillName,
            event.seq,
            epochMs(event.t) ?? 0,
          );
          const turn = turnByRun.get(event.run_id);
          if (turn) spanTurns.set(loadSpanId, turn);
        }
        const toolInputText = callData.input
          ? String(callData.input)
          : undefined;
        // Layer 3: does this call touch a skill's resources (scripts,
        // references — the skill dir path appears in the input)?
        let inSkill: string | undefined;
        if (!skillName && toolInputText) {
          const captured =
            typeof callData.skill_resource === "string"
              ? callData.skill_resource
              : undefined;
          if (captured) {
            inSkill = captured;
          }
        }
        if (!skillName && !inSkill && toolInputText && skillDirs.length > 0) {
          const normalizedInput = normalizeSkillPath(toolInputText);
          for (const [dir, name] of skillDirs) {
            if (normalizedInput.includes(dir)) {
              inSkill = name;
              break;
            }
          }
        }
        // Content attribution: a distinctive string from a loaded
        // SKILL.md (script name, fenced-command token) in the input.
        let contentSkill: string | undefined;
        let contentFeature: string | undefined;
        if (!skillName && !inSkill && toolInputText && skillFeatures.size > 0) {
          const match = matchSkillFeatures(toolInputText, skillFeatures);
          if (match) {
            contentSkill = match.skill;
            contentFeature = match.feature;
          }
        }
        // Temporal attribution: after a skill becomes active in this
        // run (slash command or Skill load), ordinary tool calls are
        // plausibly following its instructions — latest active skill.
        let guidedSkill: string | undefined;
        let guidedReason: "slash" | "load" | undefined;
        if (
          !skillName &&
          !inSkill &&
          !contentSkill &&
          activeRunSkills.length > 0
        ) {
          const [name, reason] = activeRunSkills[activeRunSkills.length - 1];
          guidedSkill = name;
          guidedReason = reason;
        }
        // Feed the span tracker: path > content > temporal.
        const spanId = spanTracker.onToolCall({
          attribution: inSkill
            ? { skill: inSkill, kind: "path", detail: "skill dir in input" }
            : contentSkill
            ? {
                skill: contentSkill,
                kind: "content",
                detail: `“${contentFeature}” in input (skill doc)`,
              }
            : guidedSkill
            ? {
                skill: guidedSkill,
                kind: "temporal",
                detail:
                  guidedReason === "slash"
                    ? "after slash invocation"
                    : "after skill load",
              }
            : null,
          recordIndex: index + 1,
          seq: event.seq,
          t: epochMs(event.t) ?? 0,
        });
        if (spanId && !spanTurns.has(spanId)) {
          const turn = turnByRun.get(event.run_id);
          if (turn) spanTurns.set(spanId, turn);
        }
        const cell: TrajectoryRecord = {
          index: ++index,
          runIndex: 0,
          runId: event.run_id,
          kind: "tool",
          text: skillName
            ? `📚 ${skillName}`
            : `${toolName}(${firstLine(String(callData.input ?? ""), 60)})`,
          timeSeconds: null,
          startedAt: epochMs(event.t) ?? 0,
          isError: false,
          running: true,
          toolName,
          skillName,
          inSkill,
          inSkillLoaded: inSkill ? loadedSkills.has(inSkill) : undefined,
          guidedSkill: guidedSkill ?? contentSkill,
          guidedReason: guidedReason ?? (contentSkill ? "load" : undefined),
          skillSpanId: spanId ?? undefined,
          toolInput: callData.input ? String(callData.input) : undefined,
          toolSchema: schemasByName.get(toolName),
        };
        appendCell(event.run_id, cell);
        const list = pendingTool.get(event.run_id) ?? [];
        list.push({ cell, callData, call: event });
        pendingTool.set(event.run_id, list);
        break;
      }
      case "tool/result": {
        const list = pendingTool.get(event.run_id);
        const wantedId =
          typeof data.tool_call_id === "string" ? data.tool_call_id : null;
        let pending: PendingCell | undefined;
        if (list) {
          const byId = wantedId
            ? list.findIndex(
                (entry) => entry.callData.tool_call_id === wantedId,
              )
            : -1;
          if (byId >= 0) {
            pending = list.splice(byId, 1)[0];
          } else {
            pending = list.shift();
          }
        }
        const durationMs =
          typeof data.duration_ms === "number" ? data.duration_ms : null;
        const ok = data.ok !== false && !data.error;
        const output = data.output ? String(data.output) : undefined;
        const outputPreview = output ? ` → ${firstLine(output, 60)}` : "";
        const fill = {
          timeSeconds: durationMs === null ? null : durationMs / 1000,
          isError: !ok,
          running: false,
          toolOutput: output,
          toolOutputChars:
            typeof data.output_chars === "number"
              ? data.output_chars
              : undefined,
          toolOutputBytes:
            typeof data.output_bytes === "number"
              ? data.output_bytes
              : undefined,
          toolError: data.error ? String(data.error) : undefined,
          note: data.note ? String(data.note) : undefined,
        };
        if (pending) {
          Object.assign(pending.cell, fill);
          // Skill-load rows keep their clean "📚 name" label — the
          // loaded SKILL.md body preview is noise on the row.
          if (!pending.cell.skillName) {
            pending.cell.text = `${pending.cell.text}${outputPreview}`;
          } else if (output) {
            // WP4: index the loaded SKILL.md body for content matching.
            // With a captured skill_sha (WP5), skip the rebuild when the
            // body is unchanged since the previous load.
            const skillSha =
              typeof data.skill_sha === "string" ? data.skill_sha : null;
            if (
              !(
                skillSha &&
                skillShaBySkill.get(pending.cell.skillName) === skillSha
              )
            ) {
              skillFeatures.set(
                pending.cell.skillName,
                buildSkillFeatures(output),
              );
              if (skillSha) {
                skillShaBySkill.set(pending.cell.skillName, skillSha);
              }
            }
          }
          pending.cell.raw = [
            ...(pending.call
              ? [pending.call as unknown as Record<string, unknown>]
              : []),
            event as unknown as Record<string, unknown>,
          ];
        } else {
          appendCell(event.run_id, {
            index: ++index,
            runIndex: 0,
            runId: event.run_id,
            kind: "tool",
            text: `?${outputPreview}`,
            startedAt: epochMs(event.t) ?? 0,
            ...fill,
          });
        }
        break;
      }
      default:
        break;
    }
  }

  for (const [runId, list] of orphanCells) {
    const turn = turnByRun.get(runId);
    if (turn) {
      for (const cell of list) cellsOf(turn).push(cell);
      orphanCells.delete(runId);
    }
  }

  // Collect the skills loaded within each request (for the pill badge).
  for (const turn of turns) {
    const names: string[] = [];
    for (const group of turn.groups) {
      for (const cell of group.cells) {
        if (cell.skillName && !names.includes(cell.skillName)) {
          names.push(cell.skillName);
        }
      }
    }
    if (names.length > 0) turn.skillsUsed = names;
  }

  // Attach skill execution spans to their runs' turns, and stamp the
  // attributed records with the span hue for the ledger color strip.
  // Hue strips only discriminate when more than one skill appears —
  // with a single skill every row would carry the same color (noise);
  // bypass rows keep their orange warning strip regardless.
  const allSpans = spanTracker.spans();
  const distinctSkills = new Set(allSpans.map((span) => span.skill)).size;
  const cellByIndex = new Map<number, TrajectoryRecord>();
  for (const turn of turns) {
    for (const group of turn.groups) {
      for (const cell of group.cells) cellByIndex.set(cell.index, cell);
    }
  }
  for (const span of allSpans) {
    const turn = spanTurns.get(span.id);
    if (turn) {
      (turn.skillSpans ??= []).push(span);
    }
    for (const recordIndex of span.attributedIndexes) {
      const cell = cellByIndex.get(recordIndex);
      if (cell) {
        cell.skillSpanId = span.id;
        cell.skillSpanHue = distinctSkills > 1 ? span.colorHue : undefined;
        cell.skillSpanBypass = span.bypass;
      }
    }
  }

  return turns;
}

/** Flat record list in ledger order. */
export function turnRecords(
  turns: readonly TrajectoryTurnModel[],
): TrajectoryRecord[] {
  return turns.flatMap((turn) => turn.groups.flatMap((group) => group.cells));
}

/**
 * Hoist the *initial* system-prompt record out of the first turn.
 *
 * dsh places the initial request header above the whole ledger (it
 * conceptually precedes the conversation); later "changed" headers
 * stay inline where they occurred. Pure: returns new arrays.
 */
export function splitInitialHeader(turns: readonly TrajectoryTurnModel[]): {
  initial: TrajectoryRecord | null;
  turns: TrajectoryTurnModel[];
} {
  if (turns.length === 0) return { initial: null, turns: [...turns] };
  const first = turns[0];
  const cells = first.groups[0]?.cells ?? [];
  const idx = cells.findIndex(
    (cell) =>
      cell.kind === "system" &&
      cell.headerReason === "initial" &&
      cell.prompt !== undefined,
  );
  if (idx < 0) return { initial: null, turns: [...turns] };
  const initial = cells[idx];
  const newFirst: TrajectoryTurnModel = {
    ...first,
    groups: [
      {
        ...first.groups[0],
        cells: cells.filter((_, i) => i !== idx),
      },
    ],
  };
  return { initial, turns: [newFirst, ...turns.slice(1)] };
}
