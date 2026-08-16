/**
 * Line-level LCS diff for the request-header Diff view.
 *
 * Plain dynamic-programming LCS over capped line arrays; prompts are
 * capped at MAX_LINES each (beyond that the diff degrades to a
 * whole-block replace, which is still honest output).
 */

export interface DiffRow {
  kind: "same" | "add" | "del";
  text: string;
}

const MAX_LINES = 3000;

function splitLines(text: string): string[] {
  return text.replace(/\r\n/g, "\n").split("\n");
}

/**
 * Diff two texts line by line.
 * @returns Diff rows in document order; `null` inputs are treated as
 * empty. Sizes above the cap degrade to a single replace block.
 */
export function diffLines(
  oldText: string | undefined,
  newText: string | undefined,
): DiffRow[] {
  const oldLines = splitLines(oldText ?? "");
  const newLines = splitLines(newText ?? "");
  if (oldLines.length > MAX_LINES || newLines.length > MAX_LINES) {
    return [
      ...oldLines.map((text): DiffRow => ({ kind: "del", text })),
      ...newLines.map((text): DiffRow => ({ kind: "add", text })),
    ];
  }
  const rows = oldLines.length;
  const cols = newLines.length;
  // lengths[i][j] = LCS length of oldLines[i:] and newLines[j:]
  const lengths = new Int32Array((rows + 1) * (cols + 1));
  const at = (i: number, j: number) => i * (cols + 1) + j;
  for (let i = rows - 1; i >= 0; i -= 1) {
    for (let j = cols - 1; j >= 0; j -= 1) {
      lengths[at(i, j)] =
        oldLines[i] === newLines[j]
          ? lengths[at(i + 1, j + 1)] + 1
          : Math.max(lengths[at(i + 1, j)], lengths[at(i, j + 1)]);
    }
  }
  const result: DiffRow[] = [];
  let i = 0;
  let j = 0;
  while (i < rows && j < cols) {
    if (oldLines[i] === newLines[j]) {
      result.push({ kind: "same", text: oldLines[i] });
      i += 1;
      j += 1;
    } else if (lengths[at(i + 1, j)] >= lengths[at(i, j + 1)]) {
      result.push({ kind: "del", text: oldLines[i] });
      i += 1;
    } else {
      result.push({ kind: "add", text: newLines[j] });
      j += 1;
    }
  }
  while (i < rows) {
    result.push({ kind: "del", text: oldLines[i] });
    i += 1;
  }
  while (j < cols) {
    result.push({ kind: "add", text: newLines[j] });
    j += 1;
  }
  return result;
}

/** Collapse long runs of unchanged lines around edits. */
export function collapseContext(
  rows: readonly DiffRow[],
  context = 3,
): (DiffRow | { kind: "gap"; count: number })[] {
  const keep = new Array(rows.length).fill(false);
  rows.forEach((row, index) => {
    if (row.kind === "same") return;
    for (
      let k = Math.max(0, index - context);
      k <= Math.min(rows.length - 1, index + context);
      k += 1
    ) {
      keep[k] = true;
    }
  });
  const out: (DiffRow | { kind: "gap"; count: number })[] = [];
  let gap = 0;
  rows.forEach((row, index) => {
    if (keep[index]) {
      if (gap > 0) {
        out.push({ kind: "gap", count: gap });
        gap = 0;
      }
      out.push(row);
    } else {
      gap += 1;
    }
  });
  if (gap > 0) out.push({ kind: "gap", count: gap });
  return out;
}

/** Counts of added/removed lines. */
export function diffStats(rows: readonly DiffRow[]): {
  added: number;
  removed: number;
} {
  let added = 0;
  let removed = 0;
  for (const row of rows) {
    if (row.kind === "add") added += 1;
    else if (row.kind === "del") removed += 1;
  }
  return { added, removed };
}
