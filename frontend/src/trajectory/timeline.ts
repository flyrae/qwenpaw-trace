/**
 * Operation-sequence and recorded-time projections for the trajectory
 * overview.
 *
 * Ported from deepseek-harness
 * (packages/client/ui-trajectory/src/client/timeline.ts), MIT License,
 * Copyright (c) 2026 DeepSeek. Types were adapted to the agent-trace
 * record model; the projection math is unchanged.
 */

import type {
  RecordKind,
  TimelineSpanRange,
  TrajectoryRecord,
  TrajectoryTurnModel,
} from "./records";
import { formatDurationMillis } from "./records";
import { spanEndT } from "./skillSpans";
import type { SkillSpan, SkillSpanTrigger } from "./skillSpans";

/** Horizontal projection used by the trajectory timeline. */
export type TrajectoryTimelineMode =
  | "sequence"
  | "duration"
  | "time"
  | "actual";

/** Inclusive selection in the active timeline projection's domain. */
export type TrajectoryTimeRange = TimelineSpanRange;

/** One ledger record projected into the active timeline domain. */
export interface TrajectoryTimelineSpan extends TrajectoryTimeRange {
  index: number;
  isError: boolean;
  kind: RecordKind;
  label: string;
  lane: number;
}

/** One turn boundary in the active timeline domain. */
export interface TrajectoryTimelineTurnBoundary {
  turn: number;
  time: number;
}

/** Full-domain model used by the overview. */
export interface TrajectoryTimelineModel extends TrajectoryTimeRange {
  spans: readonly TrajectoryTimelineSpan[];
  turnBoundaries: readonly TrajectoryTimelineTurnBoundary[];
}

/**
 * Format a timeline duration as an integer-millisecond label.
 * @param milliseconds - Non-negative duration in milliseconds.
 * @returns Millisecond label with thousands separators.
 */
export function formatTimelineOffset(milliseconds: number): string {
  return formatDurationMillis(milliseconds);
}

function laneFor(kind: RecordKind): number {
  if (kind === "tool") return 2;
  if (kind === "message") return 1;
  return 0;
}

function finite(value: number | null | undefined): value is number {
  return value !== null && value !== undefined && Number.isFinite(value);
}

function cellRange(cell: TrajectoryRecord): TrajectoryTimeRange | null {
  if (!finite(cell.startedAt)) return null;
  const durationMs = finite(cell.timeSeconds)
    ? Math.max(0, cell.timeSeconds * 1_000)
    : 0;
  return { start: cell.startedAt, end: cell.startedAt + durationMs };
}

/**
 * Project every visible record into a stable three-lane timeline.
 * @param turns - Unfiltered trajectory layout.
 * @param mode - Independent equal/recorded duration and compressed/
 * complete time projection.
 * @returns Timeline model, or `null` when no record is visible.
 */
export function deriveTrajectoryTimeline(
  turns: readonly TrajectoryTurnModel[],
  mode: TrajectoryTimelineMode = "sequence",
): TrajectoryTimelineModel | null {
  if (mode !== "sequence") {
    return deriveTimedTimeline(
      turns,
      mode === "duration" || mode === "actual",
      mode === "duration",
    );
  }
  const spans: TrajectoryTimelineSpan[] = [];
  const turnBoundaries: TrajectoryTimelineTurnBoundary[] = [];

  for (const turn of turns) {
    const cells = turn.groups.flatMap((group) => group.cells);
    if (cells.length === 0) continue;
    if (turn.turn !== null) {
      turnBoundaries.push({
        turn: turn.turn,
        time: spans.length,
      });
    }
    spans.push(
      ...cells.map(
        (cell, offset): TrajectoryTimelineSpan => ({
          start: spans.length + offset,
          end: spans.length + offset + 1,
          index: cell.index,
          isError: cell.isError === true,
          kind: cell.kind,
          label: cell.text,
          lane: laneFor(cell.kind),
        }),
      ),
    );
  }

  if (spans.length === 0) return null;
  return {
    start: 0,
    end: spans.length,
    spans,
    turnBoundaries,
  };
}

function deriveTimedTimeline(
  turns: readonly TrajectoryTurnModel[],
  actualDuration: boolean,
  compressIdle: boolean,
): TrajectoryTimelineModel | null {
  const timedTurns = turns.flatMap((turn) => {
    const rawSpans = turn.groups.flatMap((group) =>
      group.cells.flatMap((cell): TrajectoryTimelineSpan[] => {
        const range = cellRange(cell);
        return range === null
          ? []
          : [
              {
                ...range,
                index: cell.index,
                isError: cell.isError === true,
                kind: cell.kind,
                label: cell.text,
                lane: laneFor(cell.kind),
              },
            ];
      }),
    );
    return rawSpans.length === 0 ? [] : [{ turn: turn.turn, rawSpans }];
  });
  const rawSpans = timedTurns.flatMap((turn) => turn.rawSpans);
  if (rawSpans.length === 0) return null;

  const removedIdleBySpan = new Map<TrajectoryTimelineSpan, number>();
  let removedIdle = 0;
  let coveredUntil: number | null = null;
  for (const span of [...rawSpans].sort(
    (left, right) => left.start - right.start || left.end - right.end,
  )) {
    if (compressIdle && coveredUntil !== null && span.start > coveredUntil) {
      removedIdle += span.start - coveredUntil;
    }
    removedIdleBySpan.set(span, removedIdle);
    coveredUntil =
      coveredUntil === null ? span.end : Math.max(coveredUntil, span.end);
  }

  const spans: TrajectoryTimelineSpan[] = [];
  const turnBoundaries: TrajectoryTimelineTurnBoundary[] = [];
  for (const turn of timedTurns) {
    const projected = turn.rawSpans.map((span): TrajectoryTimelineSpan => {
      const offset = removedIdleBySpan.get(span) ?? 0;
      return {
        ...span,
        start: span.start - offset,
        end: (actualDuration ? span.end : span.start) - offset,
      };
    });
    spans.push(...projected);
    if (turn.turn !== null) {
      turnBoundaries.push({
        turn: turn.turn,
        time: Math.min(...projected.map((span) => span.start)),
      });
    }
  }

  return {
    start: Math.min(...spans.map((span) => span.start)),
    end: Math.max(...spans.map((span) => span.end)),
    spans,
    turnBoundaries,
  };
}

/** One skill execution span projected into the active timeline domain. */
export interface TrajectoryTimelineSkillBand extends TrajectoryTimeRange {
  spanId: string;
  skill: string;
  hue: number;
  bypass: boolean;
  trigger: SkillSpanTrigger;
  open: boolean;
}

/**
 * Project skill execution spans into the SAME domain the overview
 * uses, so the band strip aligns with the record lanes under every
 * projection mode.
 */
export function deriveSkillBands(
  turns: readonly TrajectoryTurnModel[],
  mode: TrajectoryTimelineMode = "sequence",
): TrajectoryTimelineSkillBand[] | null {
  const spansOf = (turn: TrajectoryTurnModel): SkillSpan[] =>
    turn.skillSpans ?? [];
  if (turns.every((turn) => spansOf(turn).length === 0)) return null;

  if (mode === "sequence") {
    const positionByIndex = new Map<number, number>();
    let position = 0;
    for (const turn of turns) {
      for (const cell of turn.groups.flatMap((group) => group.cells)) {
        positionByIndex.set(cell.index, position);
        position += 1;
      }
    }
    const bands: TrajectoryTimelineSkillBand[] = [];
    for (const turn of turns) {
      for (const span of spansOf(turn)) {
        const positions = span.attributedIndexes
          .map((idx) => positionByIndex.get(idx))
          .filter((pos): pos is number => pos !== undefined);
        let anchor: number | undefined = positions.length
          ? Math.min(...positions)
          : undefined;
        if (anchor === undefined) {
          // Load-only span: anchor at its loading/user row.
          const anchorCell = turn.groups
            .flatMap((group) => group.cells)
            .find(
              (cell) => cell.kind !== "system" && cell.skillName === span.skill,
            );
          anchor = anchorCell
            ? positionByIndex.get(anchorCell.index)
            : undefined;
        }
        if (anchor === undefined) continue;
        const last = positions.length ? Math.max(...positions) : anchor;
        bands.push(bandOf(span, anchor, last + 1));
      }
    }
    return bands;
  }

  // Timed modes: epoch-ms bands pushed through the same idle
  // compression as the record spans.
  const recordSpans = turns.flatMap((turn) =>
    turn.groups.flatMap((group) =>
      group.cells.flatMap((cell) => {
        const range = cellRange(cell);
        return range === null ? [] : [range];
      }),
    ),
  );
  recordSpans.sort((a, b) => a.start - b.start || a.end - b.end);
  const compressIdle = mode === "duration";
  const idleOffsetAt = (time: number): number => {
    // Offsets accumulate over gaps strictly before `time`; walk the
    // span progression (recordSpans is small).
    let offset = 0;
    let covered: number | null = null;
    for (const span of recordSpans) {
      if (span.start >= time) break;
      if (compressIdle && covered !== null && span.start > covered) {
        const gapEnd = Math.min(span.start, time);
        if (gapEnd > covered) offset += gapEnd - covered;
      }
      covered = covered === null ? span.end : Math.max(covered, span.end);
    }
    return offset;
  };

  const bands: TrajectoryTimelineSkillBand[] = [];
  for (const turn of turns) {
    for (const span of spansOf(turn)) {
      const start = span.startT;
      const end = Math.max(spanEndT(span), start + 1);
      const offset = idleOffsetAt(start);
      const endOffset = idleOffsetAt(end);
      bands.push(
        bandOf(
          span,
          start - offset,
          Math.max(start - offset + 1, end - endOffset),
        ),
      );
    }
  }
  return bands;
}

function bandOf(
  span: SkillSpan,
  start: number,
  end: number,
): TrajectoryTimelineSkillBand {
  return {
    spanId: span.id,
    skill: span.skill,
    hue: span.colorHue,
    bypass: span.bypass,
    trigger: span.trigger,
    open: span.endKind === null,
    start,
    end,
  };
}

/**
 * Identify records active at any point inside an inclusive selected
 * interval.
 * @param turns - Unfiltered trajectory layout.
 * @param range - Selected interval in the active projection.
 * @param mode - Independent equal/recorded duration and compressed/
 * complete time projection.
 * @returns Record indexes inside the focus interval.
 */
export function trajectoryTimelineFocusIndexes(
  turns: readonly TrajectoryTurnModel[],
  range: TrajectoryTimeRange,
  mode: TrajectoryTimelineMode = "sequence",
): ReadonlySet<number> {
  const model = deriveTrajectoryTimeline(turns, mode);
  return new Set(
    model?.spans
      .filter((span) => span.start <= range.end && span.end >= range.start)
      .map((span) => span.index),
  );
}
