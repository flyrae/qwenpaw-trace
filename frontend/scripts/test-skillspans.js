/**
 * Node test for the skill-span state machine and the context-reset
 * localization diff (trajectory/skillSpans.ts + records.ts).
 * Compiles the two TS modules with tsc into a temp dir, then runs the
 * edge-case matrices as plain assertions inside the build guard chain.
 */
const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const tmp = path.join(root, ".tmp-skillspans");
fs.rmSync(tmp, { recursive: true, force: true });

const tsc = path.join(root, "node_modules", "typescript", "bin", "tsc");
if (!fs.existsSync(tsc)) {
  console.error("test-skillspans: tsc not installed; run npm ci first");
  process.exit(1);
}
execFileSync(
  process.execPath,
  [
    tsc,
    path.join(root, "src", "trajectory", "skillSpans.ts"),
    path.join(root, "src", "trajectory", "records.ts"),
    "--outDir",
    tmp,
    "--module",
    "commonjs",
    "--target",
    "es2020",
    "--lib",
    "es2021,dom",
    "--skipLibCheck",
  ],
  { stdio: "inherit" },
);

const {
  SkillSpanTracker,
  buildSkillFeatures,
  matchSkillFeatures,
  skillHue,
  spanDurationMs,
  spanEndT,
} = require(path.join(tmp, "trajectory", "skillSpans.js"));
const {
  decodeWireContent,
  diffContextReset,
  estimateTokensFromChars,
} = require(path.join(tmp, "trajectory", "records.js"));

let failures = 0;
function check(name, cond) {
  if (cond) {
    console.log(`  ok  ${name}`);
  } else {
    failures += 1;
    console.error(`FAIL  ${name}`);
  }
}

// ── case 1: slash run completes ────────────────────────────────────────
{
  const tr = new SkillSpanTracker();
  tr.onSlashSkill("xlsx", 8, 1000);
  tr.onToolCall({
    attribution: { skill: "xlsx", kind: "temporal", detail: "slash" },
    recordIndex: 3,
    seq: 12,
    t: 2000,
  });
  tr.onRunEnd(17, 5000);
  const [s] = tr.spans();
  check(
    "1 slash span bounds",
    s.trigger === "slash" && s.startSeq === 8 && s.endKind === "run_end",
  );
  check(
    "1 attribution recorded",
    s.attributedIndexes.length === 1 && s.evidences[0].kind === "temporal",
  );
  check("1 not bypass", s.bypass === false && s.loadSeq === null);
}

// ── case 2: crashed run leaks nothing into the next ───────────────────
{
  const tr = new SkillSpanTracker();
  tr.onSlashSkill("a", 1, 100);
  tr.onToolCall({
    attribution: { skill: "a", kind: "temporal", detail: "" },
    recordIndex: 1,
    seq: 2,
    t: 150,
  });
  tr.onRunStart();
  const spans = tr.spans();
  check(
    "2 crashed span hard-closed",
    spans.length === 1 &&
      spans[0].endKind === null &&
      spans[0].lastActivitySeq === 2,
  );
}

// ── case 3: double load keeps one span, loadSeq = last ────────────────
{
  const tr = new SkillSpanTracker();
  tr.onSkillLoad("docx", 5, 100);
  tr.onSkillLoad("docx", 9, 200);
  const [s] = tr.spans();
  check("3 single span, loadSeq updated", s.trigger === "load" && s.loadSeq === 9);
}

// ── case 4: two skills — recent one takes temporal attribution ────────
{
  const tr = new SkillSpanTracker();
  tr.onSkillLoad("a", 1, 100);
  tr.onToolCall({
    attribution: { skill: "a", kind: "temporal", detail: "" },
    recordIndex: 1,
    seq: 2,
    t: 150,
  });
  tr.onSkillLoad("b", 5, 300);
  tr.onToolCall({
    attribution: { skill: "b", kind: "temporal", detail: "" },
    recordIndex: 3,
    seq: 6,
    t: 350,
  });
  tr.onRunEnd(9, 500);
  const [sa, sb] = tr.spans();
  check("4 spans sorted by start", sa.skill === "a" && sb.skill === "b");
  check(
    "4 a soft-frozen at load of b",
    sa.lastActivitySeq === 2 && sb.lastActivitySeq === 6,
  );
  check(
    "4 duration uses last activity",
    spanDurationMs(sa) === 50 && spanDurationMs(sb) === 50,
  );
}

// ── case 5: resource bypass, later load flips bypass ──────────────────
{
  const tr = new SkillSpanTracker();
  tr.onToolCall({
    attribution: { skill: "pdf", kind: "path", detail: "dir" },
    recordIndex: 2,
    seq: 4,
    t: 100,
  });
  let [s] = tr.spans();
  check("5 bypass opens resource span", s.trigger === "resource" && s.bypass === true);
  tr.onSkillLoad("pdf", 6, 200);
  [s] = tr.spans();
  check("5 late load clears bypass", s.bypass === false && s.loadSeq === 6);
}

// ── case 6: load with zero attributed calls ────────────────────────────
{
  const tr = new SkillSpanTracker();
  tr.onSkillLoad("x", 1, 100);
  tr.onRunEnd(5, 400);
  const [s] = tr.spans();
  check(
    "6 empty span survives with null activity",
    s.attributedIndexes.length === 0 && s.lastActivitySeq === null && spanEndT(s) === 400,
  );
}

// ── case 10: slash run then mid-run load of another skill ─────────────
{
  const tr = new SkillSpanTracker();
  tr.onSlashSkill("xlsx", 1, 100);
  tr.onSkillLoad("pdf", 3, 200);
  const [a, b] = tr.spans();
  check(
    "10 both spans coexist",
    a.skill === "xlsx" && a.trigger === "slash" && b.skill === "pdf" && b.trigger === "load",
  );
}

// ── case 12: in-flight run keeps open span ─────────────────────────────
{
  const tr = new SkillSpanTracker();
  tr.onSlashSkill("s", 1, 100);
  const [s] = tr.spans();
  check("12 open span endKind null", s.endKind === null && s.endSeq === null);
}

// ── determinism: hue stable across calls ───────────────────────────────
check(
  "hue deterministic",
  skillHue("docx") === skillHue("docx") && Number.isInteger(skillHue("docx")),
);

// ── WP4: feature index + content matching ──────────────────────────────
{
  const body = [
    "# PDF skill",
    "",
    "```bash",
    "python scripts/pdf_extract.py --track-changes=all input.docx",
    "```",
    "",
    "```bash",
    "pip install python-docx",
    "```",
  ].join("\n");
  const feats = buildSkillFeatures(body);
  const featSet = new Set(feats);
  check("W4 script filename indexed", featSet.has("pdf_extract.py"));
  check("W4 distinctive flag indexed", featSet.has("--track-changes=all"));
  check(
    "W4 generic tokens excluded",
    !featSet.has("install") && !featSet.has("python"),
  );
  const indexes = new Map([
    ["pdf", feats],
    [
      "xlsx",
      buildSkillFeatures("# xlsx\n```bash\npython scripts/xlsx_run.py data.xlsx\n```"),
    ],
  ]);
  check(
    "W4 unique hit",
    matchSkillFeatures("cd /tmp && python scripts/pdf_extract.py a.docx", indexes)
      ?.skill === "pdf",
  );
  check("W4 no hit returns null", matchSkillFeatures("echo hello world", indexes) === null);
  const both = new Map([
    ["a", buildSkillFeatures("```bash\npython scripts/shared_tool.py\n```")],
    ["b", buildSkillFeatures("# b\n```bash\npython scripts/shared_tool.py\n```")],
  ]);
  check(
    "W4 ambiguous returns null",
    matchSkillFeatures("python scripts/shared_tool.py", both) === null,
  );
}

// ── context-reset localization ─────────────────────────────────────────
{
  check("reset fn exported", typeof diffContextReset === "function");
  const oldList = [
    { role: "system", chars: 100, text: "sys".padEnd(100, "a") },
    { role: "user", chars: 10, text: "hello" },
    { role: "assistant", chars: 20, text: "old answer one" },
    { role: "assistant", chars: 20, text: "old answer two" },
    { role: "tool", chars: 30, text: "tool output kept" },
  ];
  // Compaction: prefix kept, two assistant messages summarized into one,
  // the old tool message re-attached after the summary.
  const newList = [
    oldList[0],
    oldList[1],
    { role: "assistant", chars: 15, text: "summary of history" },
    oldList[4],
  ];
  const d = diffContextReset(oldList, newList);
  check("reset breakAt", d.breakAt === 2);
  check("reset counts", d.beforeCount === 5 && d.afterCount === 4);
  check(
    "reset role changes",
    d.beforeByRole.assistant === 2 && d.afterByRole.assistant === 1,
  );
  const statuses = d.changes.map((c) => c.status);
  check(
    "reset rewritten pairing",
    statuses.includes("rewritten") &&
      d.changes.find((c) => c.status === "rewritten").oldText === "old answer one",
  );
  check("reset removed leftover", statuses.includes("removed"));
  // Truncation: prefix kept, tail dropped.
  const shrunk = diffContextReset(oldList, oldList.slice(0, 2));
  check(
    "reset truncation",
    shrunk.breakAt === 2 && shrunk.afterCount === 2 && shrunk.afterChars === 110,
  );
  // Pure growth: everything kept plus appended messages.
  const grew = diffContextReset(oldList, [
    ...oldList,
    { role: "user", chars: 5, text: "new q" },
  ]);
  check(
    "reset pure growth",
    grew.breakAt === 5 &&
      grew.changes.some((c) => c.status === "added" && c.role === "user"),
  );
  // Sanity: token estimator stays intact after the module edits.
  check(
    "estimator intact",
    estimateTokensFromChars(8800, "qwen3-max") === 4000,
  );

  // Wire-content decoding: JSON block-array strings become text.
  check(
    "wire decode block array string",
    decodeWireContent(
      String.raw`[{"type":"text","text":"# Agent Identity"},{"type":"text","text":"line 2"}]`,
    ) === "# Agent Identity\nline 2",
  );
  check(
    "wire decode single block string",
    decodeWireContent(String.raw`[{"type":"text","text":"查看今天的天气"}]`) ===
      "查看今天的天气",
  );
  check(
    "wire decode non-text block marker",
    decodeWireContent(String.raw`[{"type":"image_url","url":"x"}]`) ===
      "[image_url]",
  );
  check(
    "wire decode plain string untouched",
    decodeWireContent("plain content") === "plain content",
  );
  check(
    "wire decode broken json untouched",
    decodeWireContent('{"type":"text", "text": ') ===
      '{"type":"text", "text": ',
  );
}

fs.rmSync(tmp, { recursive: true, force: true });
if (failures > 0) {
  console.error(`test-skillspans: ${failures} FAILURE(S)`);
  process.exit(1);
}
console.log("test-skillspans: all cases passed");
