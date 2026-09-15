/**
 * Skill span state machine — the execution-segment model for skill
 * observability (design: see DESIGN.md "技能执行段").
 *
 * Skills are prompt-level progressive disclosure, so "running" is not
 * a runtime state: spans are CONSTRUCTED from observable anchors with
 * explicit confidence levels:
 *   trigger  slash   — the user explicitly invoked the skill (hard)
 *           load    — the model loaded the instructions (Skill tool)
 *           resource— first touch of the skill's resources (bypass
 *                     unless a load follows)
 *   end      run_end      — hard bound (run boundary)
 *           last_activity— soft: the last attributed call (the skill
 *                          itself never leaves the context)
 *
 * Pure logic, no React/host imports — driven by buildTurns and by the
 * node test suite (scripts/test-skillspans.js).
 */

export type SkillSpanTrigger = "slash" | "load" | "resource";
export type SkillSpanEndKind = "run_end" | "last_activity";

export type SkillEvidenceKind = "path" | "content" | "temporal";

export interface SkillEvidence {
  kind: SkillEvidenceKind;
  detail: string;
  recordIndex: number;
}

export interface SkillSpan {
  id: string;
  skill: string;
  trigger: SkillSpanTrigger;
  startSeq: number;
  startT: number;
  endSeq: number | null;
  endT: number | null;
  endKind: SkillSpanEndKind | null;
  lastActivitySeq: number | null;
  lastActivityT: number | null;
  attributedIndexes: number[];
  evidences: SkillEvidence[];
  bypass: boolean;
  loadSeq: number | null;
  colorHue: number;
}

/** Deterministic hue per skill name (band + strip coloring). */
export function skillHue(skill: string): number {
  let hash = 0;
  for (let i = 0; i < skill.length; i += 1) {
    hash = (hash * 31 + skill.charCodeAt(i)) % 100003;
  }
  return hash % 360;
}

export interface SpanToolAttribution {
  skill: string;
  kind: SkillEvidenceKind;
  detail: string;
}

export interface SpanTrackerInput {
  /** Tool-call attribution decided by the caller (path match first,
   * then the run-scoped active-skill stack). Empty = unattributed. */
  attribution: SpanToolAttribution | null;
  recordIndex: number;
  seq: number;
  t: number;
}

export class SkillSpanTracker {
  private open = new Map<string, SkillSpan>();
  readonly finished: SkillSpan[] = [];

  /** A run opens: any still-open spans are hard-closed first (crashed
   * runs without run/end must not leak attribution — same semantics as
   * Kimi's run/start reset for activeRunSkills). */
  onRunStart(): void {
    this.closeAll(null, null, null);
  }

  onSlashSkill(skill: string, seq: number, t: number): void {
    this.onRunStart();
    this.openSpan(skill, "slash", seq, t);
  }

  onSkillLoad(skill: string, seq: number, t: number): string {
    let span = this.open.get(skill);
    if (!span) {
      span = this.openSpan(skill, "load", seq, t);
    }
    span.loadSeq = seq;
    if (span.bypass) span.bypass = false;
    return span.id;
  }

  onToolCall(input: SpanTrackerInput): string | null {
    if (!input.attribution) return null;
    const { skill, kind, detail } = input.attribution;
    let span = this.open.get(skill);
    if (!span) {
      // Resource touch without any prior activation: bypass span.
      span = this.openSpan(
        skill,
        kind === "path" ? "resource" : "load",
        input.seq,
        input.t,
      );
      if (kind === "temporal") {
        // Temporal attribution never opens a span by itself — it only
        // extends one opened by slash/load/resource. Defensive: close
        // immediately as last_activity-only.
        span.trigger = "resource";
      }
    }
    span.attributedIndexes.push(input.recordIndex);
    span.evidences.push({
      kind,
      detail,
      recordIndex: input.recordIndex,
    });
    span.lastActivitySeq = input.seq;
    span.lastActivityT = input.t;
    return span.id;
  }

  onRunEnd(seq: number, t: number): void {
    this.closeAll(seq, t, "run_end");
  }

  /** All spans (open + finished) in start order. */
  spans(): SkillSpan[] {
    const open = [...this.open.values()];
    return [...this.finished, ...open].sort((a, b) => a.startSeq - b.startSeq);
  }

  private openSpan(
    skill: string,
    trigger: SkillSpanTrigger,
    seq: number,
    t: number,
  ): SkillSpan {
    const span: SkillSpan = {
      id: `${skill}#${seq}`,
      skill,
      trigger,
      startSeq: seq,
      startT: t,
      endSeq: null,
      endT: null,
      endKind: null,
      lastActivitySeq: null,
      lastActivityT: null,
      attributedIndexes: [],
      evidences: [],
      bypass: trigger === "resource",
      loadSeq: trigger === "load" ? seq : null,
      colorHue: skillHue(skill),
    };
    this.open.set(skill, span);
    return span;
  }

  private closeAll(
    seq: number | null,
    t: number | null,
    endKind: SkillSpanEndKind | null,
  ): void {
    for (const span of this.open.values()) {
      // Soft end (run boundary with no explicit seq): keep the run_end
      // semantics via nulls + lastActivity as the observable bound.
      span.endSeq = seq;
      span.endT = t;
      span.endKind = endKind;
      this.finished.push(span);
    }
    this.open.clear();
  }
}

/** Span end usable for rendering: run_end time when present, else the
 * last attributed activity (soft), else the span start. */
export function spanEndT(span: SkillSpan): number {
  if (span.endT !== null) return span.endT;
  if (span.lastActivityT !== null) return span.lastActivityT;
  return span.startT;
}

/** Span duration label basis: soft ends measure to last activity. */
export function spanDurationMs(span: SkillSpan): number | null {
  const end = span.lastActivityT ?? span.endT;
  if (end === null) return null;
  return Math.max(0, end - span.startT);
}

// ── Content-match attribution (WP4) ─────────────────────────────────────
//
// When a skill is loaded (Skill tool result = the SKILL.md body), we
// index its distinctive strings: script filenames and long tokens from
// fenced command blocks. A later tool call whose input contains one of
// those features is attributed with CONTENT evidence — stronger than
// temporal, weaker than a literal dir-path touch.

const GENERIC_TOKENS = new Set([
  "python",
  "python3",
  "pip",
  "node",
  "npm",
  "cd",
  "dir",
  "echo",
  "print",
  "import",
  "export",
  "command",
  "output",
  "input",
  "path",
  "file",
  "files",
  "true",
  "false",
  "null",
  "shell",
  "bash",
  "powershell",
  "windows",
  "linux",
  "macos",
  "install",
  "install-g",
  "sudo",
  "run",
  "scripts",
  "script",
  "content",
  "params",
  "return",
  "string",
  "number",
  "const",
  "await",
  "async",
  "function",
  "default",
  "options",
  "results",
]);

/** Build the feature index from a loaded SKILL.md body. */
export function buildSkillFeatures(body: string): string[] {
  const feats = new Set<string>();
  for (const m of body.matchAll(
    /(?:scripts[/\\])([\w.\-]+\.(?:py|js|mjs|sh|json|ts))/gi,
  )) {
    feats.add(m[1].toLowerCase());
  }
  for (const fence of body.matchAll(/```[a-z]*\n([\s\S]*?)```/g)) {
    for (const tok of fence[1].matchAll(/[\w./=\-]{6,}/g)) {
      const t = tok[0].toLowerCase();
      if (!GENERIC_TOKENS.has(t)) feats.add(t);
    }
  }
  return [...feats];
}

export interface ContentMatch {
  skill: string;
  feature: string;
}

/** Match a tool-call input against the per-skill feature indexes.
 * Unique hit → that skill; ambiguous (2+ skills) or none → null. */
export function matchSkillFeatures(
  input: string,
  indexes: ReadonlyMap<string, readonly string[]>,
): ContentMatch | null {
  const norm = input.toLowerCase();
  let hit: ContentMatch | null = null;
  let ambiguous = false;
  for (const [skill, feats] of indexes) {
    for (const feat of feats) {
      if (norm.includes(feat)) {
        if (hit === null) {
          hit = { skill, feature: feat };
        } else if (hit.skill !== skill) {
          ambiguous = true;
        }
        break;
      }
    }
  }
  return ambiguous ? null : hit;
}
