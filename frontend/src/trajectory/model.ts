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
  TimingInfo,
  TrajectoryRecord,
  TrajectoryTurnModel,
  UsageInfo,
} from "./records";
import { epochMs } from "./records";

interface PendingCell {
  cell: TrajectoryRecord;
  callData: Record<string, unknown>;
  call?: TraceEvent;
}

function dataOf(event: TraceEvent | null | undefined): Record<string, unknown> {
  return (event?.data ?? {}) as Record<string, unknown>;
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
        const userCell: TrajectoryRecord = {
          index: ++index,
          runIndex: runNumber,
          runId: event.run_id,
          kind: "user",
          text: firstLine(query) || firstLine(messages.at(-1)?.text),
          messages,
          timeSeconds: 0,
          startedAt: epochMs(event.t),
          isError: false,
          running: false,
          model: undefined,
        };
        userCellByRun.set(event.run_id, userCell);
        cellsOf(turn).push(userCell);
        break;
      }
      case "run/end": {
        const turn = turnByRun.get(event.run_id);
        if (openRunId === event.run_id) openRunId = "";
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
            startedAt: epochMs(event.t),
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
          startedAt: epochMs(event.t),
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
            startedAt: epochMs(event.t),
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
          startedAt: epochMs(event.t),
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
          startedAt: epochMs(event.t),
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
          startedAt: epochMs(event.t),
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
          startedAt: epochMs(event.t),
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
        const cell: TrajectoryRecord = {
          index: ++index,
          runIndex: 0,
          runId: event.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: epochMs(event.t),
          isError: false,
          running: true,
          model: String(callData.model ?? "unknown"),
          provider:
            typeof callData.provider === "string" && callData.provider
              ? callData.provider
              : undefined,
          options,
        };
        appendCell(event.run_id, cell);
        const list = pendingLlm.get(event.run_id) ?? [];
        list.push({ cell, callData, call: event });
        pendingLlm.set(event.run_id, list);
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
            startedAt: epochMs(event.t),
            model: String(data.model ?? callData.model ?? "unknown"),
            ...fill,
          });
        }
        break;
      }
      case "tool/call": {
        const callData = dataOf(event);
        const cell: TrajectoryRecord = {
          index: ++index,
          runIndex: 0,
          runId: event.run_id,
          kind: "tool",
          text: `${String(callData.name ?? "?")}(${firstLine(
            String(callData.input ?? ""),
            60,
          )})`,
          timeSeconds: null,
          startedAt: epochMs(event.t),
          isError: false,
          running: true,
          toolName: String(callData.name ?? "?"),
          toolInput: callData.input ? String(callData.input) : undefined,
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
          toolError: data.error ? String(data.error) : undefined,
          note: data.note ? String(data.note) : undefined,
        };
        if (pending) {
          Object.assign(pending.cell, fill);
          pending.cell.text = `${pending.cell.text}${outputPreview}`;
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
            startedAt: epochMs(event.t),
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
