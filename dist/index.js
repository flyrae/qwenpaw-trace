var el = Object.defineProperty;
var tl = (e, n, t) => n in e ? el(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var vt = (e, n, t) => tl(e, typeof n != "symbol" ? n + "" : n, t);
const nl = {
  "zh-CN": {
    routeLabel: "轨迹",
    sessions: "会话",
    noSessions: "暂无轨迹记录",
    noSessionsHint: "与智能体对话后，这里会出现按会话记录的轨迹",
    searchPlaceholder: "搜索会话 / 智能体 / 渠道",
    runs: "运行",
    llmCalls: "LLM 调用",
    toolCalls: "工具调用",
    tokens: "Token",
    selectSession: "选择左侧会话查看轨迹",
    refresh: "刷新",
    export: "导出",
    delete: "删除",
    deleteConfirm: "删除该会话的全部轨迹记录？",
    loadOlder: "加载更早的事件",
    query: "用户输入",
    llmCall: "LLM 调用",
    toolCall: "工具调用",
    input: "输入",
    output: "输出",
    thinking: "思考",
    model: "模型",
    messages: "消息数",
    duration: "耗时",
    usage: "用量",
    running: "进行中",
    success: "成功",
    error: "错误",
    cancelled: "已取消",
    unknown: "未知",
    settings: "录制设置",
    enabled: "启用轨迹录制",
    captureLlm: "记录 LLM 调用",
    captureTools: "记录工具调用",
    loadFailed: "加载失败",
    events: "事件",
    status: "状态",
    selectRecord: "点击记录查看详情",
    summary: "摘要",
    throughput: "吞吐",
    noTiming: "无流式时序数据",
    searchEvents: "搜索事件",
    projectionHint: "时间线投影：顺序（等宽）/ 时长（压缩空闲）/ 时刻（记录时间点）/ 实际（完整墙钟）",
    collapseAll: "折叠全部请求",
    expandAll: "展开全部请求",
    promptInitial: "初始系统提示词",
    promptChanged: "系统提示词已变更",
    prompt: "提示词",
    noPrevPrompt: "没有可对比的上一版提示词",
    captureHeaders: "记录系统提示词变更",
    collapseTools: "显示/隐藏工具调用",
    spawnedAgent: "子代理",
    openChildSession: "打开子会话轨迹",
    exported: "已导出 JSONL",
    deleted: "已删除",
    sessionTotal: "会话累计",
    thisRequest: "本请求",
    collapseSidebar: "收起会话列表",
    expandSidebar: "展开会话列表",
    statRounds: "轮",
    statSteps: "步",
    statTtftAvg: "首 token 平均",
    statCacheHit: "缓存命中",
    statInput: "输入",
    statOutput: "输出",
    source: "来源",
    channel: "渠道",
    userId: "用户",
    replySent: "已回复",
    chars: "字",
    image: "图片",
    file: "文件",
    audio: "音频",
    video: "视频",
    inboundParts: "入站内容",
    deliveredText: "送达内容",
    copySessionId: "复制会话 ID",
    copiedSessionId: "已复制",
    viewCurrentTrace: "查看当前会话轨迹",
    noTraceForSession: "该会话暂无轨迹记录，发送消息后自动生成",
    inputComposition: "输入构成",
    roleSystem: "系统提示",
    roleUser: "用户消息",
    roleAssistant: "助手消息",
    roleTool: "工具结果",
    roleOther: "其他",
    charUnit: "字",
    estimatedTag: "（估算）",
    estimateNote: "字符→token 按模型系数估算，仅供参考",
    realInputTokens: "输入 token（实测）",
    deltaKind: "增量类型",
    apiPayloadNote: "OpenAI SDK 层拦截的实际 API 消息（formatter 之后，含 role=tool 结果）",
    apiMsgCount: "API 消息数",
    apiMessages: "API 消息",
    deltaReset: "全量重记",
    deltaNoChange: "无变化（与上次调用相同）",
    deltaTailUpdate: "末条更新（运行时改写模型自己的尾随叙述）",
    deltaAppend: "新增",
    assistantInputNote: "assistant 角色的输入消息 = 模型自己先前的回复，随上下文进入下一次调用",
    compositionNote: "桶按消息字符占比呈现；实测 token 为计费口径总量（含带外工具结果）",
    maxToolMsg: "最大单条工具消息",
    growthVsPrev: "较上一轮输入增量",
    firstRound: "首轮",
    cacheAbsorbed: "其中缓存吸收",
    outputSize: "输出大小",
    beforeTruncation: "截断前",
    inputTab: "输入",
    skillLoadKind: "技能",
    skillLoaded: "已加载",
    skillResource: "技能资源",
    skillBypass: "未加载说明书直接使用",
    skillBypassStrip: "未加载即执行",
    skillGuided: "技能归属",
    guidedBySlash: "斜杠命令指定该技能后执行",
    guidedByLoad: "该技能加载后执行（推断）",
    contextReset: "上下文前缀发生变化（压缩/重写），本次已全量重记",
    inputTotal: "输入总量",
    spanOpen: "进行中",
    spanTriggerSlash: "斜杠命令",
    spanTriggerLoad: "技能加载",
    spanTriggerResource: "资源触碰",
    spanEndRun: "run 边界",
    spanEndLast: "末次归属活动",
    spanStart: "开始",
    spanEnd: "结束",
    spanLastActivity: "末次活动",
    spanDuration: "活动时长",
    spanAttributed: "归属步骤",
    spanLoadState: "加载状态",
    spanEvidence: "归属证据",
    spanNoActivity: "加载后无归属活动",
    resetBreakAt: "重置断点",
    resetSizes: "前后规模",
    resetMsgs: "条",
    resetRoles: "role 变化",
    resetChanges: "逐条变化",
    resetOldPrefix: "旧:",
    resetNewPrefix: "新:",
    resetKept: "保留",
    resetRemoved: "移除",
    resetRewritten: "重写",
    resetAdded: "新增",
    legendTitle: "图例",
    legendLoad: "技能加载：模型通过 Skill 工具读取了该技能的完整说明",
    legendResource: "技能资源触碰（蓝=加载说明书后使用；橙=未加载直接使用）",
    legendGuided: "时间归属：技能激活后按其指示执行的普通调用（推断，悬停看依据）",
    legendStripTitle: "行色条：",
    legendStrip: "该行归属的技能执行段颜色（橙=旁路）",
    legendBandTitle: "时间线色带：",
    legendBand: "技能执行段（斜杠/加载/资源三锚点起，run 结束止），点击查看详情",
    inputMessages: "输入消息",
    inputExpand: "展开全文",
    inputCollapseText: "收起",
    requestTab: "请求",
    timing: "计时",
    generationOptions: "生成参数",
    wireParams: "线级参数（SDK 拦截）",
    callOptionsDigest: "调用参数（中间件）",
    toolCallsEmitted: "本次发起工具调用",
    ttftLabel: "首 token 延迟",
    decodeLabel: "生成耗时",
    startedAt: "开始时间",
    runViewHint: "查看该请求视图",
    toolSchemaNote: "调用时模型可见的工具定义（来自当前提示词快照）",
    apiFilterAll: "全部",
    apiShowEarlier: "显示更早的消息",
    apiCollapseEarlier: "收起，只看最近",
    reasoningShort: "推理"
  },
  "en-US": {
    routeLabel: "Trace",
    sessions: "Sessions",
    noSessions: "No traces yet",
    noSessionsHint: "Talk to an agent and step-level traces will appear here per session",
    searchPlaceholder: "Search session / agent / channel",
    runs: "Runs",
    llmCalls: "LLM calls",
    toolCalls: "Tool calls",
    tokens: "Tokens",
    selectSession: "Select a session to view its trace",
    refresh: "Refresh",
    export: "Export",
    delete: "Delete",
    deleteConfirm: "Delete all trace records of this session?",
    loadOlder: "Load older events",
    query: "User input",
    llmCall: "LLM call",
    toolCall: "Tool call",
    input: "Input",
    output: "Output",
    thinking: "Thinking",
    model: "Model",
    messages: "Messages",
    duration: "Duration",
    usage: "Usage",
    running: "Running",
    success: "Success",
    error: "Error",
    cancelled: "Cancelled",
    unknown: "Unknown",
    settings: "Recording settings",
    enabled: "Trace recording",
    captureLlm: "Capture LLM calls",
    captureTools: "Capture tool calls",
    loadFailed: "Failed to load",
    events: "events",
    status: "Status",
    selectRecord: "Select a record to inspect",
    summary: "Summary",
    throughput: "Throughput",
    noTiming: "No streaming timing data",
    searchEvents: "Search events",
    projectionHint: "Timeline projection: Sequence (equal width) / Duration (idle-compressed) / Time (recorded instants) / Actual (full wall clock)",
    collapseAll: "Collapse all requests",
    expandAll: "Expand all requests",
    promptInitial: "Initial system prompt",
    promptChanged: "System prompt updated",
    prompt: "Prompt",
    noPrevPrompt: "No previous prompt to diff against",
    captureHeaders: "Capture system prompt changes",
    collapseTools: "Show/hide tool calls",
    spawnedAgent: "Sub-agent",
    openChildSession: "Open child session trace",
    exported: "JSONL exported",
    deleted: "Deleted",
    sessionTotal: "session total",
    thisRequest: "This request",
    collapseSidebar: "Collapse session list",
    expandSidebar: "Expand session list",
    statRounds: "rounds",
    statSteps: "steps",
    statTtftAvg: "Avg first token",
    statCacheHit: "Cache hit",
    statInput: "In",
    statOutput: "Out",
    source: "Source",
    channel: "Channel",
    userId: "User",
    replySent: "Reply sent",
    chars: "chars",
    image: "image(s)",
    file: "file(s)",
    audio: "audio",
    video: "video",
    inboundParts: "Inbound parts",
    deliveredText: "Delivered text",
    copySessionId: "Copy session ID",
    copiedSessionId: "Copied",
    viewCurrentTrace: "View this chat's trace",
    noTraceForSession: "No trace for this session yet — it is created after the first message",
    inputComposition: "Input composition",
    roleSystem: "System prompt",
    roleUser: "User messages",
    roleAssistant: "Assistant messages",
    roleTool: "Tool results",
    roleOther: "Other",
    charUnit: "chars",
    estimatedTag: "(est.)",
    estimateNote: "chars→tokens uses a per-model ratio — estimates only",
    realInputTokens: "Input tokens (measured)",
    deltaKind: "Delta kind",
    apiPayloadNote: "Actual API messages intercepted at the OpenAI SDK layer (post-formatter, includes role=tool results)",
    apiMsgCount: "API message count",
    apiMessages: "API messages",
    deltaReset: "Full re-record",
    deltaNoChange: "No change (identical to the previous call)",
    deltaTailUpdate: "Tail update (runtime rewrote the model's trailing narration)",
    deltaAppend: "Appended",
    assistantInputNote: "assistant-role input messages are the model's own prior replies, re-entering context for the next call",
    compositionNote: "buckets show message char shares; measured tokens are the billed total (out-of-band tool results included)",
    maxToolMsg: "Largest tool message",
    growthVsPrev: "Input growth vs prev round",
    firstRound: "First round",
    cacheAbsorbed: "Absorbed by cache",
    outputSize: "Output size",
    beforeTruncation: "before truncation",
    inputTab: "Input",
    skillLoadKind: "Skill",
    skillLoaded: "loaded",
    skillResource: "Skill resource",
    skillBypass: "used without loading the skill",
    skillBypassStrip: "executed without load",
    skillGuided: "Skill attribution",
    guidedBySlash: "run after this skill was set via slash command",
    guidedByLoad: "run after this skill was loaded (inferred)",
    contextReset: "Context prefix changed (compaction / rewrite); full input re-recorded",
    inputTotal: "Total input",
    spanOpen: "open",
    spanTriggerSlash: "slash command",
    spanTriggerLoad: "skill load",
    spanTriggerResource: "resource touch",
    spanEndRun: "run boundary",
    spanEndLast: "last attributed activity",
    spanStart: "Start",
    spanEnd: "End",
    spanLastActivity: "Last activity",
    spanDuration: "Active duration",
    spanAttributed: "Attributed steps",
    spanLoadState: "Load state",
    spanEvidence: "Evidence",
    spanNoActivity: "No attributed activity after load",
    resetBreakAt: "Breakpoint",
    resetSizes: "Before → after",
    resetMsgs: "msgs",
    resetRoles: "Role changes",
    resetChanges: "Per-message changes",
    resetOldPrefix: "old: ",
    resetNewPrefix: "new: ",
    resetKept: "kept",
    resetRemoved: "removed",
    resetRewritten: "rewritten",
    resetAdded: "added",
    legendTitle: "Legend",
    legendLoad: "Skill load: the model read the skill's full instructions via the Skill tool",
    legendResource: "Skill resource touch (blue = after loading the doc; orange = used without loading)",
    legendGuided: "Temporal attribution: an ordinary call after the skill became active (inferred; hover for basis)",
    legendStripTitle: "Row strip: ",
    legendStrip: "color of the row's skill execution span (orange = bypass)",
    legendBandTitle: "Timeline band: ",
    legendBand: "skill execution span (slash/load/resource anchor → run end); click for details",
    inputMessages: "Input messages",
    inputExpand: "show full text",
    inputCollapseText: "collapse",
    requestTab: "Request",
    timing: "Timing",
    generationOptions: "Generation options",
    wireParams: "Wire params (SDK interception)",
    callOptionsDigest: "Call options (middleware)",
    toolCallsEmitted: "Tool calls emitted",
    ttftLabel: "TTFT",
    decodeLabel: "Decoding",
    startedAt: "Started",
    runViewHint: "Open this request's view",
    toolSchemaNote: "The model-visible tool definition at call time (from the active prompt snapshot)",
    apiFilterAll: "All",
    apiShowEarlier: "Show earlier messages",
    apiCollapseEarlier: "Collapse to recent only",
    reasoningShort: "Reasoning"
  }
};
function Pt(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function ie() {
  try {
    return Pt(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function d(e, n) {
  return nl[e][n];
}
const He = window.QwenPaw.host;
async function ll(e) {
  return Re(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats`
  );
}
async function An(e, n) {
  return He.fetch ? He.fetch(e, n) : fetch(He.getApiUrl(e), {
    ...n,
    headers: {
      ...(n == null ? void 0 : n.headers) || {},
      ...He.getApiToken() ? { Authorization: `Bearer ${He.getApiToken()}` } : {}
    }
  });
}
class On extends Error {
  constructor(n, t) {
    super(t), this.status = n, this.name = "ApiError";
  }
}
async function Re(e, n) {
  const t = await An(e, n), l = await t.text();
  let s = null;
  try {
    s = l ? JSON.parse(l) : null;
  } catch {
    s = null;
  }
  if (!t.ok) {
    const i = s && typeof s == "object" && "detail" in s ? s.detail : void 0;
    throw new On(
      t.status,
      typeof i == "string" ? i : `HTTP ${t.status}`
    );
  }
  return s;
}
async function Vt(e) {
  const n = new URLSearchParams();
  return n.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && n.set("offset", String(e.offset)), Re(
    `/agent-trace/sessions?${n.toString()}`
  );
}
async function sl(e, n) {
  const t = new URLSearchParams();
  n != null && n.beforeSeq && t.set("before_seq", String(n.beforeSeq)), t.set("limit", String(n == null ? void 0 : n.limit));
  const l = t.toString();
  return Re(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${l}`
  );
}
async function ol() {
  return Re("/agent-trace/config");
}
async function il(e) {
  return Re("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
}
async function rl(e) {
  const n = await An(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export`
  );
  if (!n.ok) throw new Error(`HTTP ${n.status}`);
  const t = await n.blob(), l = URL.createObjectURL(t), s = document.createElement("a");
  s.href = l, s.download = `${e}.jsonl`, s.click(), URL.revokeObjectURL(l);
}
async function al(e) {
  await Re(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
async function Rn(e) {
  if (!e) return null;
  try {
    return (await Re(
      `/agent-trace/resolve?chat_id=${encodeURIComponent(e)}`
    )).session_id ?? null;
  } catch {
    return e;
  }
}
const Oe = window.QwenPaw.host, st = Oe.React, { useMemo: cl } = st, { Button: ul, Tooltip: dl } = Oe.antd, { CompassOutlined: pl } = Oe.antdIcons;
function hl(e) {
  return `${window.location.pathname.startsWith("/console") ? "/console" : ""}/plugin/agent-trace${e ? `?session=${encodeURIComponent(e)}` : ""}`;
}
function fl() {
  const e = typeof Oe.useLocale == "function" ? Oe.useLocale() : void 0, n = cl(
    () => Pt(e ?? ie()),
    [e]
  );
  return /* @__PURE__ */ st.createElement(dl, { title: d(n, "viewCurrentTrace") }, /* @__PURE__ */ st.createElement(
    ul,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ st.createElement(pl, null),
      "aria-label": d(n, "viewCurrentTrace"),
      onClick: () => {
        const t = typeof Oe.getCurrentSessionId == "function" ? Oe.getCurrentSessionId() : null;
        Rn(t).then((l) => {
          window.location.href = hl(l ?? t);
        });
      }
    }
  ));
}
const Gt = 3e3;
function Xt(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function ml(e, n) {
  const t = Xt(e ?? ""), l = Xt(n ?? "");
  if (t.length > Gt || l.length > Gt)
    return [
      ...t.map((f) => ({ kind: "del", text: f })),
      ...l.map((f) => ({ kind: "add", text: f }))
    ];
  const s = t.length, i = l.length, a = new Int32Array((s + 1) * (i + 1)), c = (f, E) => f * (i + 1) + E;
  for (let f = s - 1; f >= 0; f -= 1)
    for (let E = i - 1; E >= 0; E -= 1)
      a[c(f, E)] = t[f] === l[E] ? a[c(f + 1, E + 1)] + 1 : Math.max(a[c(f + 1, E)], a[c(f, E + 1)]);
  const h = [];
  let y = 0, o = 0;
  for (; y < s && o < i; )
    t[y] === l[o] ? (h.push({ kind: "same", text: t[y] }), y += 1, o += 1) : a[c(y + 1, o)] >= a[c(y, o + 1)] ? (h.push({ kind: "del", text: t[y] }), y += 1) : (h.push({ kind: "add", text: l[o] }), o += 1);
  for (; y < s; )
    h.push({ kind: "del", text: t[y] }), y += 1;
  for (; o < i; )
    h.push({ kind: "add", text: l[o] }), o += 1;
  return h;
}
function gl(e, n = 3) {
  const t = new Array(e.length).fill(!1);
  e.forEach((i, a) => {
    if (i.kind !== "same")
      for (let c = Math.max(0, a - n); c <= Math.min(e.length - 1, a + n); c += 1)
        t[c] = !0;
  });
  const l = [];
  let s = 0;
  return e.forEach((i, a) => {
    t[a] ? (s > 0 && (l.push({ kind: "gap", count: s }), s = 0), l.push(i)) : s += 1;
  }), s > 0 && l.push({ kind: "gap", count: s }), l;
}
function yl(e) {
  let n = 0, t = 0;
  for (const l of e)
    l.kind === "add" ? n += 1 : l.kind === "del" && (t += 1);
  return { added: n, removed: t };
}
function El(e) {
  let n = 0;
  for (let t = 0; t < e.length; t += 1)
    n = (n * 31 + e.charCodeAt(t)) % 100003;
  return n % 360;
}
class Sl {
  constructor() {
    vt(this, "open", /* @__PURE__ */ new Map());
    vt(this, "finished", []);
  }
  /** A run opens: any still-open spans are hard-closed first (crashed
   * runs without run/end must not leak attribution — same semantics as
   * Kimi's run/start reset for activeRunSkills). */
  onRunStart() {
    this.closeAll(null, null, null);
  }
  onSlashSkill(n, t, l) {
    this.onRunStart(), this.openSpan(n, "slash", t, l);
  }
  onSkillLoad(n, t, l) {
    let s = this.open.get(n);
    return s || (s = this.openSpan(n, "load", t, l)), s.loadSeq = t, s.bypass && (s.bypass = !1), s.id;
  }
  onToolCall(n) {
    if (!n.attribution) return null;
    const { skill: t, kind: l, detail: s } = n.attribution;
    let i = this.open.get(t);
    return i || (i = this.openSpan(
      t,
      l === "path" ? "resource" : "load",
      n.seq,
      n.t
    ), l === "temporal" && (i.trigger = "resource")), i.attributedIndexes.push(n.recordIndex), i.evidences.push({
      kind: l,
      detail: s,
      recordIndex: n.recordIndex
    }), i.lastActivitySeq = n.seq, i.lastActivityT = n.t, i.id;
  }
  onRunEnd(n, t) {
    this.closeAll(n, t, "run_end");
  }
  /** All spans (open + finished) in start order. */
  spans() {
    const n = [...this.open.values()];
    return [...this.finished, ...n].sort((t, l) => t.startSeq - l.startSeq);
  }
  openSpan(n, t, l, s) {
    const i = {
      id: `${n}#${l}`,
      skill: n,
      trigger: t,
      startSeq: l,
      startT: s,
      endSeq: null,
      endT: null,
      endKind: null,
      lastActivitySeq: null,
      lastActivityT: null,
      attributedIndexes: [],
      evidences: [],
      bypass: t === "resource",
      loadSeq: t === "load" ? l : null,
      colorHue: El(n)
    };
    return this.open.set(n, i), i;
  }
  closeAll(n, t, l) {
    for (const s of this.open.values())
      s.endSeq = n, s.endT = t, s.endKind = l, this.finished.push(s);
    this.open.clear();
  }
}
function vl(e) {
  return e.endT !== null ? e.endT : e.lastActivityT !== null ? e.lastActivityT : e.startT;
}
function bl(e) {
  const n = e.lastActivityT ?? e.endT;
  return n === null ? null : Math.max(0, n - e.startT);
}
const xl = /* @__PURE__ */ new Set([
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
  "results"
]);
function kl(e) {
  const n = /* @__PURE__ */ new Set();
  for (const t of e.matchAll(
    /(?:scripts[/\\])([\w.\-]+\.(?:py|js|mjs|sh|json|ts))/gi
  ))
    n.add(t[1].toLowerCase());
  for (const t of e.matchAll(/```[a-z]*\n([\s\S]*?)```/g))
    for (const l of t[1].matchAll(/[\w./=\-]{6,}/g)) {
      const s = l[0].toLowerCase();
      xl.has(s) || n.add(s);
    }
  return [...n];
}
function wl(e, n) {
  const t = e.toLowerCase();
  let l = null, s = !1;
  for (const [i, a] of n)
    for (const c of a)
      if (t.includes(c)) {
        l === null ? l = { skill: i, feature: c } : l.skill !== i && (s = !0);
        break;
      }
  return s ? null : l;
}
const Tl = {
  approval: { zh: "审批", en: "Approval" },
  receipt: { zh: "回执", en: "Receipt" },
  spawn: { zh: "子代理", en: "Spawn" },
  header: { zh: "提示词", en: "Prompt" },
  error: { zh: "错误", en: "Error" }
}, _l = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" }
};
function Ln(e, n) {
  const t = e.markerKind ? Tl[e.markerKind] : void 0;
  if (t) return n === "zh-CN" ? t.zh : t.en;
  const l = _l[e.kind];
  return l ? n === "zh-CN" ? l.zh : l.en : e.kind;
}
const qt = 60;
function Ue(e) {
  return `${e.role}|${e.text ?? `#${e.chars ?? 0}`}`;
}
function Jt(e) {
  return e.chars ?? (e.text ? e.text.length : 0);
}
function Qt(e) {
  const n = {};
  for (const t of e)
    n[t.role] = (n[t.role] ?? 0) + 1;
  return n;
}
function Il(e, n) {
  let t = 0;
  for (; t < e.length && t < n.length && Ue(e[t]) === Ue(n[t]); )
    t += 1;
  const l = e.slice(t), s = n.slice(t), i = /* @__PURE__ */ new Map();
  for (const u of s) {
    const v = Ue(u);
    i.set(v, (i.get(v) ?? 0) + 1);
  }
  const a = [], c = [], h = [];
  for (let u = 0; u < Math.min(t, qt); u += 1)
    h.push({ status: "kept", role: e[u].role });
  for (const u of l) {
    const v = Ue(u), $ = i.get(v) ?? 0;
    $ > 0 ? (i.set(v, $ - 1), h.push({ status: "kept", role: u.role })) : a.push(u);
  }
  for (const u of s) {
    const v = Ue(u), $ = i.get(v) ?? 0;
    $ > 0 && (i.set(v, $ - 1), c.push(u));
  }
  const y = /* @__PURE__ */ new Map();
  for (const u of c) {
    const v = y.get(u.role);
    v ? v.push(u) : y.set(u.role, [u]);
  }
  const o = [], f = [];
  for (const u of a) {
    const v = y.get(u.role);
    v && v.length > 0 ? o.push([u, v.shift()]) : f.push(u);
  }
  const E = [...y.values()].flat();
  for (const [u, v] of o)
    h.push({
      status: "rewritten",
      role: u.role,
      oldText: u.text,
      newText: v.text
    });
  for (const u of f)
    h.push({
      status: "removed",
      role: u.role,
      oldText: u.text
    });
  for (const u of E)
    h.push({
      status: "added",
      role: u.role,
      newText: u.text
    });
  return {
    breakAt: t,
    beforeCount: e.length,
    afterCount: n.length,
    beforeChars: e.reduce((u, v) => u + Jt(v), 0),
    afterChars: n.reduce((u, v) => u + Jt(v), 0),
    beforeByRole: Qt(e),
    afterByRole: Qt(n),
    changes: h.slice(0, qt)
  };
}
function Cl(e) {
  const n = e.trim();
  if (!n.startsWith("[") && !n.startsWith("{")) return e;
  let t;
  try {
    t = JSON.parse(n);
  } catch {
    return e;
  }
  const l = Array.isArray(t) ? t : [t], s = [];
  for (const i of l)
    if (i && typeof i == "object" && typeof i.text == "string") {
      const a = i.text;
      a && s.push(a);
    } else i && typeof i == "object" && typeof i.type == "string" ? s.push(`[${i.type}]`) : typeof i == "string" && i && s.push(i);
  return s.length > 0 ? s.join(`
`) : e;
}
function Ml(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function pe(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const n = e * 1e3;
  return n < 1e3 ? `${Math.round(n)}ms` : n < 6e4 ? `${(n / 1e3).toFixed(1)}s` : `${Math.floor(n / 6e4)}m${Math.round(n % 6e4 / 1e3)}s`;
}
function J(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function it(e, n) {
  return e === void 0 || !Number.isFinite(e) || n === null || n === void 0 || n <= 0 ? "-" : `${(e / n).toFixed(1)} tok/s`;
}
function _e(e) {
  return e == null || !Number.isFinite(e) ? "-" : new Date(e).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
  });
}
function ge(e) {
  if (!e) return null;
  const n = Date.parse(e);
  return Number.isFinite(n) ? n : null;
}
function Nn(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function $l(e) {
  if (!e) return "-";
  const n = new Date(e);
  return Number.isNaN(n.getTime()) ? e : n.toLocaleString();
}
function zl(e) {
  if (!e) return "-";
  const n = Date.parse(e);
  if (!Number.isFinite(n)) return e;
  const t = Date.now() - n;
  return t < 6e4 ? "刚刚" : t < 36e5 ? `${Math.floor(t / 6e4)} 分钟前` : t < 864e5 ? `${Math.floor(t / 36e5)} 小时前` : new Date(n).toLocaleString();
}
function Pn(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function At(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const Dn = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default"
};
function jn(e) {
  return e || "unknown";
}
const ut = window.QwenPaw.host, r = ut.React, { useEffect: Al, useRef: Ol, useState: Ve } = r, { Button: Bn, Collapse: Ot, Empty: Yt, Tabs: Dt, Tag: rt } = ut.antd, { Text: j } = ut.antd.Typography, { CopyOutlined: Rl, CloseOutlined: Ll } = ut.antdIcons, Nl = 320, Pl = 720, Qe = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, Dl = 2e4;
function jl(e) {
  if (e.length > Dl) return e;
  const n = [], t = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let l = 0, s, i = 0;
  for (; (s = t.exec(e)) !== null; ) {
    s.index > l && n.push(e.slice(l, s.index));
    const a = s[0];
    let c = "rgba(128,128,128,1)";
    s[1] !== void 0 ? c = Qe.key : s[2] !== void 0 ? c = Qe.string : s[3] !== void 0 ? c = Qe.number : c = Qe.literal, n.push(
      /* @__PURE__ */ r.createElement("span", { key: i++, style: { color: c } }, a)
    ), l = s.index + a.length;
  }
  return l < e.length && n.push(e.slice(l)), n;
}
function Se({ value: e, json: n = !1 }) {
  const [t, l] = Ve(!1), s = typeof e == "string" ? e : JSON.stringify(e, null, 2);
  if (!s) return null;
  const i = async () => {
    try {
      await navigator.clipboard.writeText(s), l(!0), window.setTimeout(() => l(!1), 1500);
    } catch {
    }
  };
  return /* @__PURE__ */ r.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ r.createElement(
    "a",
    {
      onClick: () => void i(),
      title: "Copy",
      style: {
        position: "absolute",
        top: 4,
        right: 6,
        fontSize: 11,
        color: t ? "#52c41a" : "rgba(128,128,128,1)",
        zIndex: 1
      }
    },
    t ? "✓" : /* @__PURE__ */ r.createElement(Rl, null)
  ), /* @__PURE__ */ r.createElement(
    "pre",
    {
      style: {
        margin: 0,
        padding: "6px 10px",
        background: "rgba(128,128,128,0.06)",
        borderRadius: 6,
        fontSize: 12,
        maxHeight: 380,
        overflow: "auto",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word"
      }
    },
    n ? jl(s) : s
  ));
}
function I({
  label: e,
  value: n,
  danger: t = !1
}) {
  return /* @__PURE__ */ r.createElement(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        padding: "3px 0",
        fontSize: 12
      }
    },
    /* @__PURE__ */ r.createElement(j, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ r.createElement(
      j,
      {
        type: t ? "danger" : void 0,
        style: { fontSize: 12, textAlign: "right" }
      },
      n
    )
  );
}
function Rt({
  input: e,
  output: n,
  cacheRead: t,
  cacheWrite: l,
  reasoning: s
}) {
  const i = Math.max(0, e - t - l), a = Math.max(0, n - s);
  return /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(I, { label: "Input", value: `${J(e)} tok` }), t ? /* @__PURE__ */ r.createElement(I, { label: "Cached", value: `${J(t)} tok` }) : null, l ? /* @__PURE__ */ r.createElement(
    I,
    {
      label: "Cache created",
      value: `${J(l)} tok`
    }
  ) : null, t || l ? /* @__PURE__ */ r.createElement(I, { label: "Other", value: `${J(i)} tok` }) : null, /* @__PURE__ */ r.createElement(I, { label: "Output", value: `${J(n)} tok` }), s ? /* @__PURE__ */ r.createElement(I, { label: "Reasoning", value: `${J(s)} tok` }) : null, s ? /* @__PURE__ */ r.createElement(I, { label: "Content", value: `${J(a)} tok` }) : null);
}
function bt({
  label: e,
  onOpen: n,
  children: t
}) {
  return /* @__PURE__ */ r.createElement(
    "div",
    {
      style: {
        marginTop: 8,
        borderTop: "1px solid rgba(128,128,128,0.15)",
        paddingTop: 6
      }
    },
    /* @__PURE__ */ r.createElement("a", { onClick: n, style: { fontSize: 12, fontWeight: 600 } }, e, " →"),
    /* @__PURE__ */ r.createElement("div", { style: { paddingTop: 2 } }, t)
  );
}
const Zt = ["system", "user", "assistant", "tool"], Bl = {
  system: "roleSystem",
  user: "roleUser",
  assistant: "roleAssistant",
  tool: "roleTool"
};
function Fl({
  request: e,
  locale: n
}) {
  const t = e.inputComposition;
  if (!t) return null;
  const l = [], s = new Set(Zt), i = [
    ...Zt.filter((c) => t.charsByRole[c]),
    ...Object.keys(t.charsByRole).filter(
      (c) => !s.has(c) && t.charsByRole[c]
    )
  ], a = t.totalChars || 1;
  for (const c of i) {
    const h = t.charsByRole[c], y = Bl[c] ?? "roleOther", o = Math.round(h / a * 100);
    l.push(
      /* @__PURE__ */ r.createElement(
        I,
        {
          key: c,
          label: d(n, y),
          value: `${J(h)} ${d(n, "charUnit")} · ${o}%`
        }
      )
    );
  }
  return t.maxToolChars > 0 && l.push(
    /* @__PURE__ */ r.createElement(
      I,
      {
        key: "max-tool",
        label: d(n, "maxToolMsg"),
        value: `${J(t.maxToolChars)} ${d(
          n,
          "charUnit"
        )}`
      }
    )
  ), /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(j, { strong: !0, style: { fontSize: 12, display: "block", marginTop: 10 } }, d(n, "inputComposition")), l, e.inputTokens > 0 ? /* @__PURE__ */ r.createElement(
    I,
    {
      label: d(n, "realInputTokens"),
      value: `${J(e.inputTokens)} tok`
    }
  ) : null, /* @__PURE__ */ r.createElement(
    j,
    {
      type: "secondary",
      style: { fontSize: 11, display: "block", padding: "2px 0" }
    },
    d(n, "compositionNote")
  ), e.growth ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    I,
    {
      label: d(n, "growthVsPrev"),
      value: e.growth.prevInputTokens === null ? d(n, "firstRound") : `${e.growth.deltaTokens >= 0 ? "+" : ""}${J(
        e.growth.deltaTokens
      )} tok`
    }
  ), e.growth.prevInputTokens !== null && e.growth.deltaTokens > 0 ? /* @__PURE__ */ r.createElement(
    I,
    {
      label: d(n, "cacheAbsorbed"),
      value: `${J(e.cacheReadTokens)} tok`
    }
  ) : null) : null);
}
function Hl({
  request: e,
  onJumpRecord: n
}) {
  const t = ie(), [l, s] = r.useState("summary"), i = /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(
    I,
    {
      label: d(t, "startedAt"),
      value: _e(e.startedAt)
    }
  ), /* @__PURE__ */ r.createElement(
    I,
    {
      label: d(t, "duration"),
      value: pe(
        e.durationMs === null ? null : e.durationMs / 1e3
      )
    }
  ), e.ttftMs !== null ? /* @__PURE__ */ r.createElement(
    I,
    {
      label: d(t, "ttftLabel"),
      value: pe(e.ttftMs / 1e3)
    }
  ) : null, e.decodeMs !== null ? /* @__PURE__ */ r.createElement(
    I,
    {
      label: d(t, "decodeLabel"),
      value: pe(e.decodeMs / 1e3)
    }
  ) : null, /* @__PURE__ */ r.createElement(
    I,
    {
      label: d(t, "throughput"),
      value: it(
        e.outputTokens,
        e.decodeMs === null ? null : e.decodeMs / 1e3
      )
    }
  )), a = /* @__PURE__ */ r.createElement(
    Rt,
    {
      input: e.inputTokens,
      output: e.outputTokens,
      cacheRead: e.cacheReadTokens,
      cacheWrite: e.cacheWriteTokens,
      reasoning: e.reasoningTokens
    }
  ), c = [
    {
      key: "summary",
      label: d(t, "summary"),
      children: /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(I, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ r.createElement(
        I,
        {
          label: d(t, "status"),
          value: e.status || "unknown",
          danger: e.status === "error"
        }
      ), /* @__PURE__ */ r.createElement(I, { label: "Query", value: Ul(e.query) }), e.providers.length > 0 ? /* @__PURE__ */ r.createElement(I, { label: "Provider", value: e.providers.join(" · ") }) : null, /* @__PURE__ */ r.createElement(
        I,
        {
          label: d(t, "model"),
          value: e.models.join(", ") || "-"
        }
      ), /* @__PURE__ */ r.createElement(I, { label: "Tool calls", value: String(e.toolCalls) }), e.errors.length > 0 ? /* @__PURE__ */ r.createElement(
        I,
        {
          label: "Error",
          value: e.errors.join("; ").slice(0, 120),
          danger: !0
        }
      ) : null, e.resultIndex !== void 0 && n ? /* @__PURE__ */ r.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ r.createElement(
        "a",
        {
          style: { fontSize: 12 },
          onClick: () => n(e.resultIndex)
        },
        "Result: Assistant Message →"
      )) : null, e.options ? /* @__PURE__ */ r.createElement(bt, { label: "Options", onOpen: () => s("options") }, /* @__PURE__ */ r.createElement(Se, { value: e.options, json: !0 })) : null, /* @__PURE__ */ r.createElement(bt, { label: "Usage", onOpen: () => s("usage") }, a), /* @__PURE__ */ r.createElement(bt, { label: "Timing", onOpen: () => s("timing") }, i))
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(j, { strong: !0, style: { fontSize: 12 } }, d(t, "thisRequest")), a, /* @__PURE__ */ r.createElement(Fl, { request: e, locale: t }), e.sessionTotals ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
        j,
        {
          strong: !0,
          style: { fontSize: 12, display: "block", marginTop: 10 }
        },
        d(t, "sessionTotal")
      ), /* @__PURE__ */ r.createElement(
        Rt,
        {
          input: e.sessionTotals.inputTokens,
          output: e.sessionTotals.outputTokens,
          cacheRead: 0,
          cacheWrite: 0,
          reasoning: e.sessionTotals.reasoningTokens
        }
      )) : null)
    },
    {
      key: "timing",
      label: "Timing",
      children: i
    },
    ...e.options ? [
      {
        key: "options",
        label: "Options",
        children: /* @__PURE__ */ r.createElement(Se, { value: e.options, json: !0 })
      }
    ] : []
  ];
  return /* @__PURE__ */ r.createElement("div", { style: { padding: "8px 4px" } }, /* @__PURE__ */ r.createElement(
    Dt,
    {
      size: "small",
      activeKey: l,
      onChange: (h) => s(h),
      items: c,
      tabBarStyle: { marginBottom: 8 }
    }
  ));
}
function Ul(e, n = 200) {
  const t = e.split(`
`, 1)[0].trim();
  return t.length > n ? `${t.slice(0, n)}…` : t;
}
function Wl({
  oldText: e,
  newText: n
}) {
  const t = r.useMemo(
    () => ml(e, n),
    [e, n]
  ), l = r.useMemo(() => yl(t), [t]), s = r.useMemo(() => gl(t), [t]), i = ie();
  return e === void 0 ? /* @__PURE__ */ r.createElement(j, { type: "secondary", style: { fontSize: 12 } }, d(i, "noPrevPrompt")) : /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ r.createElement("span", { style: { color: "#52c41a" } }, "+", l.added), " ", /* @__PURE__ */ r.createElement("span", { style: { color: "#ff4d4f" } }, "−", l.removed)), /* @__PURE__ */ r.createElement(
    "div",
    {
      style: {
        borderRadius: 6,
        border: "1px solid rgba(128,128,128,0.2)",
        overflow: "auto",
        maxHeight: 420,
        fontSize: 11,
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
        lineHeight: "18px"
      }
    },
    s.map((a, c) => {
      if (a.kind === "gap")
        return /* @__PURE__ */ r.createElement(
          "div",
          {
            key: c,
            style: {
              padding: "0 8px",
              color: "rgba(128,128,128,0.8)",
              background: "rgba(128,128,128,0.05)",
              userSelect: "none"
            }
          },
          "⋯ ",
          a.count
        );
      const h = a;
      return /* @__PURE__ */ r.createElement(
        "div",
        {
          key: c,
          style: {
            padding: "0 8px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
            background: h.kind === "add" ? "rgba(82,196,26,0.12)" : h.kind === "del" ? "rgba(255,77,79,0.10)" : void 0,
            color: h.kind === "del" ? "rgba(255,77,79,0.9)" : void 0
          }
        },
        h.kind === "add" ? "+ " : h.kind === "del" ? "− " : "  ",
        h.text || " "
      );
    })
  ));
}
function Kl({ record: e }) {
  var i;
  const n = ie(), t = e.headerTools ?? [], l = e.headerReason === "changed", s = [
    {
      key: "summary",
      label: d(n, "summary"),
      children: /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(I, { label: "#", value: String(e.index) }), /* @__PURE__ */ r.createElement(
        I,
        {
          label: d(n, "status"),
          value: l ? d(n, "promptChanged") : d(n, "promptInitial")
        }
      ), /* @__PURE__ */ r.createElement(I, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ r.createElement(I, { label: "Chars", value: String(((i = e.prompt) == null ? void 0 : i.length) ?? 0) }), /* @__PURE__ */ r.createElement(I, { label: "Tools", value: String(t.length) }))
    },
    ...l ? [
      {
        key: "diff",
        label: "Diff",
        children: /* @__PURE__ */ r.createElement(
          Wl,
          {
            oldText: e.prevPrompt,
            newText: e.prompt ?? ""
          }
        )
      }
    ] : [],
    {
      key: "prompt",
      label: d(n, "prompt"),
      children: /* @__PURE__ */ r.createElement(Se, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ r.createElement("div", { style: { paddingTop: 4 } }, t.map((a) => /* @__PURE__ */ r.createElement(j, { key: a, code: !0, style: { fontSize: 11 } }, a)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ r.createElement(
          Ot,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((a, c) => {
              var y;
              const h = typeof a.name == "string" && a.name || typeof ((y = a.function) == null ? void 0 : y.name) == "string" && a.function.name || `tool-${c + 1}`;
              return {
                key: String(c),
                label: /* @__PURE__ */ r.createElement(j, { code: !0, style: { fontSize: 11 } }, h),
                children: /* @__PURE__ */ r.createElement(Se, { value: a })
              };
            })
          }
        ) : null)
      }
    ] : [],
    {
      key: "raw",
      label: "Raw",
      children: /* @__PURE__ */ r.createElement(Se, { value: e.raw })
    }
  ];
  return /* @__PURE__ */ r.createElement(Dt, { size: "small", items: s, tabBarStyle: { marginBottom: 8 } });
}
function xt({ dragRef: e, width: n }) {
  return /* @__PURE__ */ r.createElement(
    "div",
    {
      onPointerDown: (t) => {
        e.current = {
          anchorX: t.clientX,
          anchorWidth: n
        };
      },
      style: {
        position: "absolute",
        left: -3,
        top: 0,
        bottom: 0,
        width: 6,
        cursor: "col-resize",
        zIndex: 10
      },
      title: "Drag to resize"
    }
  );
}
function ot({ onClose: e }) {
  return e ? /* @__PURE__ */ r.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ r.createElement(
    Bn,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ r.createElement(Ll, null),
      onClick: e
    }
  )) : null;
}
function Vl({
  record: e,
  request: n,
  onJumpSession: t,
  onJumpRecord: l,
  onSelectTurn: s,
  onClose: i
}) {
  var v, $, D, T, M;
  const a = ie(), [c, h] = Ve(400), y = Ol(null);
  if (Al(() => {
    const k = (P) => {
      const A = y.current;
      if (A === null) return;
      const C = A.anchorX - P.clientX;
      h(
        Math.min(Pl, Math.max(Nl, A.anchorWidth + C))
      );
    }, O = () => {
      y.current = null;
    };
    return window.addEventListener("pointermove", k), window.addEventListener("pointerup", O), () => {
      window.removeEventListener("pointermove", k), window.removeEventListener("pointerup", O);
    };
  }, []), e === null && n === null)
    return /* @__PURE__ */ r.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: c,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      },
      /* @__PURE__ */ r.createElement(
        Yt,
        {
          image: Yt.PRESENTED_IMAGE_SIMPLE,
          description: d(a, "selectRecord")
        }
      )
    );
  if (e === null && n !== null)
    return /* @__PURE__ */ r.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: c,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative"
        }
      },
      /* @__PURE__ */ r.createElement(xt, { dragRef: y, width: c }),
      /* @__PURE__ */ r.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ r.createElement(ot, { onClose: i }), /* @__PURE__ */ r.createElement(Hl, { request: n, onJumpRecord: l }))
    );
  const o = e;
  if (o.kind === "system" && o.prompt !== void 0)
    return /* @__PURE__ */ r.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: c,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative"
        }
      },
      /* @__PURE__ */ r.createElement(xt, { dragRef: y, width: c }),
      /* @__PURE__ */ r.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ r.createElement(ot, { onClose: i }), /* @__PURE__ */ r.createElement(Kl, { record: o }))
    );
  const f = o.usage, E = o.timing, u = [];
  if (u.push({
    key: "summary",
    label: d(a, "summary"),
    children: /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(I, { label: "#", value: String(o.index) }), /* @__PURE__ */ r.createElement(I, { label: "Kind", value: Ln(o, a) }), o.runIndex > 0 && s ? /* @__PURE__ */ r.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ r.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => s(o.runIndex)
      },
      "Request #",
      o.runIndex,
      " →"
    )) : null, /* @__PURE__ */ r.createElement(
      I,
      {
        label: d(a, "status"),
        value: o.running ? d(a, "running") : o.isError ? d(a, "error") : d(a, "success"),
        danger: o.isError
      }
    ), o.provider ? /* @__PURE__ */ r.createElement(I, { label: "Provider", value: o.provider }) : null, o.model ? /* @__PURE__ */ r.createElement(I, { label: d(a, "model"), value: o.model }) : null, o.toolName ? /* @__PURE__ */ r.createElement(I, { label: "Tool", value: o.toolName }) : null, o.inSkill ? /* @__PURE__ */ r.createElement(
      I,
      {
        label: d(a, "skillResource"),
        value: o.inSkillLoaded ? `⚡ ${o.inSkill}` : `⚡ ${o.inSkill}（${d(a, "skillBypass")}）`
      }
    ) : null, o.guidedSkill ? /* @__PURE__ */ r.createElement(
      I,
      {
        label: d(a, "skillGuided"),
        value: `∈ ${o.guidedSkill}（${o.guidedReason === "slash" ? d(a, "guidedBySlash") : d(a, "guidedByLoad")}）`
      }
    ) : null, o.toolOutputChars ? /* @__PURE__ */ r.createElement(
      I,
      {
        label: d(a, "outputSize"),
        value: o.toolOutputBytes ? `${J(o.toolOutputChars)} ${d(
          a,
          "charUnit"
        )} · ${At(o.toolOutputBytes)} (${d(
          a,
          "beforeTruncation"
        )})` : `${J(o.toolOutputChars)} ${d(
          a,
          "charUnit"
        )}`
      }
    ) : null, o.kind === "user" && (o.channel || o.userId) ? /* @__PURE__ */ r.createElement(
      I,
      {
        label: d(a, "source"),
        value: [o.channel, o.userId].filter(Boolean).join(" · ")
      }
    ) : null, o.receipt ? /* @__PURE__ */ r.createElement(
      I,
      {
        label: d(a, "channel"),
        value: o.receipt.channel ?? "-"
      }
    ) : null, /* @__PURE__ */ r.createElement(
      I,
      {
        label: d(a, "duration"),
        value: pe(o.timeSeconds)
      }
    ), o.note ? /* @__PURE__ */ r.createElement(j, { type: "warning", style: { fontSize: 12 } }, o.note) : null, o.spawnSession ? /* @__PURE__ */ r.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ r.createElement(
      I,
      {
        label: d(a, "spawnedAgent"),
        value: o.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ r.createElement(
      Bn,
      {
        size: "small",
        onClick: () => o.spawnSession && t(o.spawnSession),
        style: { marginTop: 4 }
      },
      d(a, "openChildSession")
    ) : null) : null)
  }), o.kind === "message" && (o.usage || o.timing || o.options || (v = o.apiPayload) != null && v.params || o.toolCalls && o.toolCalls.length > 0)) {
    const k = ($ = o.apiPayload) == null ? void 0 : $.params, O = k !== void 0 && o.options !== void 0;
    u.push({
      key: "request",
      label: d(a, "requestTab"),
      children: /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, o.toolCalls && o.toolCalls.length > 0 ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(j, { strong: !0, style: { fontSize: 12 } }, d(a, "toolCallsEmitted"), " (", o.toolCalls.length, ")"), o.toolCalls.map((P, A) => /* @__PURE__ */ r.createElement(
        "div",
        {
          key: P.id || A,
          style: { display: "flex", gap: 6, alignItems: "baseline" }
        },
        /* @__PURE__ */ r.createElement(j, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, P.name),
        P.id ? /* @__PURE__ */ r.createElement(
          j,
          {
            type: "secondary",
            style: { fontSize: 10, flexShrink: 0 }
          },
          "…",
          P.id.slice(-8)
        ) : null
      ))) : null, k || o.options ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(j, { strong: !0, style: { fontSize: 12 } }, d(a, "generationOptions")), O ? /* @__PURE__ */ r.createElement(
        j,
        {
          type: "secondary",
          style: { fontSize: 11, display: "block" }
        },
        `${d(a, "wireParams")} + ${d(
          a,
          "callOptionsDigest"
        )}`
      ) : null, /* @__PURE__ */ r.createElement(
        Se,
        {
          value: { ...o.options ?? {}, ...k ?? {} },
          json: !0
        }
      )) : null, o.usage ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(j, { strong: !0, style: { fontSize: 12 } }, d(a, "usage")), /* @__PURE__ */ r.createElement(
        Rt,
        {
          input: o.usage.input_tokens ?? 0,
          output: o.usage.output_tokens ?? 0,
          cacheRead: o.usage.cache_input_tokens ?? 0,
          cacheWrite: o.usage.cache_creation_input_tokens ?? 0,
          reasoning: o.usage.reasoning_tokens ?? 0
        }
      )) : null, /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(j, { strong: !0, style: { fontSize: 12 } }, d(a, "timing")), /* @__PURE__ */ r.createElement(
        I,
        {
          label: d(a, "startedAt"),
          value: _e(o.startedAt)
        }
      ), /* @__PURE__ */ r.createElement(
        I,
        {
          label: d(a, "duration"),
          value: pe(o.timeSeconds)
        }
      ), o.timing ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
        I,
        {
          label: d(a, "ttftLabel"),
          value: pe(o.timing.ttft_ms / 1e3)
        }
      ), /* @__PURE__ */ r.createElement(
        I,
        {
          label: d(a, "decodeLabel"),
          value: pe(o.timing.decode_ms / 1e3)
        }
      ), /* @__PURE__ */ r.createElement(
        I,
        {
          label: d(a, "throughput"),
          value: it(
            (D = o.usage) == null ? void 0 : D.output_tokens,
            o.timing.decode_ms / 1e3
          )
        }
      )) : /* @__PURE__ */ r.createElement(j, { type: "secondary", style: { fontSize: 11 } }, d(a, "noTiming"))))
    });
  }
  if (o.kind === "tool") {
    if (o.toolInput && u.push({
      key: "payload",
      label: d(a, "input"),
      children: /* @__PURE__ */ r.createElement(Se, { value: o.toolInput, json: !0 })
    }), (o.toolOutput || o.toolError) && u.push({
      key: "result",
      label: d(a, "output"),
      children: /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, o.toolError ? /* @__PURE__ */ r.createElement(j, { type: "danger", style: { fontSize: 12 } }, o.toolError) : null, o.toolOutput ? /* @__PURE__ */ r.createElement(Se, { value: o.toolOutput }) : null)
    }), o.toolSchema) {
      const k = o.toolSchema.function, O = o.toolSchema, P = typeof (k == null ? void 0 : k.description) == "string" ? k.description : typeof O.description == "string" ? O.description : void 0, A = (k == null ? void 0 : k.parameters) !== void 0 ? k.parameters : O.parameters;
      u.push({
        key: "schema",
        label: "Schema",
        children: /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ r.createElement(j, { type: "secondary", style: { fontSize: 11 } }, d(a, "toolSchemaNote")), P ? /* @__PURE__ */ r.createElement(
          j,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          P
        ) : null, A !== void 0 ? /* @__PURE__ */ r.createElement(Se, { value: A, json: !0 }) : null)
      });
    }
  } else if (o.outputText || o.thinkingText || o.messages || o.marker || o.toolCalls && o.toolCalls.length > 0) {
    if (o.inputNew || o.messagesMeta) {
      const k = ((T = o.inputNew) == null ? void 0 : T.length) ?? 0, O = ((M = o.messagesMeta) == null ? void 0 : M.count) ?? 0;
      let P;
      o.contextReset ? P = `${d(a, "deltaReset")} (${O})` : k === 0 ? P = d(a, "deltaNoChange") : o.inputNew && o.inputNew.length === 1 && o.inputNew[0].role === "assistant" && O > 1 ? P = d(a, "deltaTailUpdate") : P = `${d(a, "deltaAppend")} (${k})`, u.push({
        key: "input",
        label: d(a, "inputTab"),
        children: /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ r.createElement(I, { label: d(a, "deltaKind"), value: P }), o.contextReset ? /* @__PURE__ */ r.createElement(j, { type: "warning", style: { fontSize: 12 } }, d(a, "contextReset")) : null, o.resetDetail ? /* @__PURE__ */ r.createElement(
          "div",
          {
            style: {
              border: "1px solid rgba(250,173,20,0.4)",
              borderRadius: 6,
              padding: "6px 8px"
            }
          },
          /* @__PURE__ */ r.createElement(
            I,
            {
              label: d(a, "resetBreakAt"),
              value: `#${o.resetDetail.breakAt + 1}`
            }
          ),
          /* @__PURE__ */ r.createElement(
            I,
            {
              label: d(a, "resetSizes"),
              value: `${o.resetDetail.beforeCount} ${d(
                a,
                "resetMsgs"
              )} · ${J(o.resetDetail.beforeChars)} ${d(
                a,
                "charUnit"
              )} → ${o.resetDetail.afterCount} ${d(
                a,
                "resetMsgs"
              )} · ${J(o.resetDetail.afterChars)} ${d(
                a,
                "charUnit"
              )}`
            }
          ),
          /* @__PURE__ */ r.createElement(
            I,
            {
              label: d(a, "resetRoles"),
              value: Object.keys(o.resetDetail.afterByRole).map((A) => {
                const C = o.resetDetail.beforeByRole[A] ?? 0, N = o.resetDetail.afterByRole[A] ?? 0;
                return C === N ? null : `${A} ${C}→${N}`;
              }).filter(Boolean).join(" · ") || "-"
            }
          ),
          o.resetDetail.changes.length > 0 ? /* @__PURE__ */ r.createElement("div", { style: { marginTop: 4 } }, /* @__PURE__ */ r.createElement(j, { strong: !0, style: { fontSize: 12 } }, d(a, "resetChanges")), o.resetDetail.changes.slice(0, 20).map((A, C) => /* @__PURE__ */ r.createElement(
            "div",
            {
              key: C,
              style: {
                display: "flex",
                gap: 6,
                alignItems: "baseline"
              }
            },
            /* @__PURE__ */ r.createElement(
              rt,
              {
                color: A.status === "kept" ? "default" : A.status === "rewritten" ? "orange" : A.status === "removed" ? "red" : "green",
                style: { marginInlineEnd: 0, fontSize: 10 }
              },
              d(a, Gl[A.status])
            ),
            /* @__PURE__ */ r.createElement(j, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, A.role),
            A.status === "rewritten" ? /* @__PURE__ */ r.createElement(
              j,
              {
                type: "secondary",
                style: { fontSize: 11, minWidth: 0 },
                ellipsis: !0
              },
              `${d(a, "resetOldPrefix")}${(A.oldText ?? "").slice(0, 40)} → ${d(
                a,
                "resetNewPrefix"
              )}${(A.newText ?? "").slice(0, 40)}`
            ) : /* @__PURE__ */ r.createElement(
              j,
              {
                type: "secondary",
                style: { fontSize: 11, minWidth: 0 },
                ellipsis: !0
              },
              `${A.status === "removed" ? d(a, "resetOldPrefix") : d(a, "resetNewPrefix")}${(A.oldText ?? A.newText ?? "").slice(
                0,
                60
              )}`
            )
          ))) : null
        ) : null, o.messagesMeta ? /* @__PURE__ */ r.createElement(
          I,
          {
            label: d(a, "inputTotal"),
            value: `${o.messagesMeta.count} · ${J(
              o.messagesMeta.totalChars
            )} ${d(a, "charUnit")}`
          }
        ) : null, o.inputNew && o.inputNew.length > 0 ? /* @__PURE__ */ r.createElement(r.Fragment, null, o.inputNew.some((A) => A.role === "assistant") ? /* @__PURE__ */ r.createElement(
          j,
          {
            type: "secondary",
            style: { fontSize: 11, display: "block" }
          },
          d(a, "assistantInputNote")
        ) : null, /* @__PURE__ */ r.createElement(
          Ot,
          {
            size: "small",
            defaultActiveKey: o.inputNew.length <= 5 ? ["messages"] : [],
            items: [
              {
                key: "messages",
                label: `${d(a, "inputMessages")} (${o.inputNew.length})`,
                children: /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, o.inputNew.map((A, C) => /* @__PURE__ */ r.createElement(
                  Jl,
                  {
                    key: C,
                    message: A,
                    locale: a
                  }
                )))
              }
            ]
          }
        )) : null)
      });
    }
    if (o.apiPayload && o.apiPayload.messages.length > 0) {
      const k = o.apiPayload;
      u.push({
        key: "api",
        label: "API",
        children: /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ r.createElement(j, { type: "secondary", style: { fontSize: 11 } }, d(a, "apiPayloadNote")), /* @__PURE__ */ r.createElement(I, { label: "Model", value: k.model }), /* @__PURE__ */ r.createElement(
          I,
          {
            label: d(a, "apiMsgCount"),
            value: String(k.messages.length)
          }
        ), k.usage ? /* @__PURE__ */ r.createElement(
          I,
          {
            label: "Usage",
            value: `in ${k.usage.input_tokens ?? 0} · out ${k.usage.output_tokens ?? 0} tok`
          }
        ) : null, k.durationMs !== void 0 ? /* @__PURE__ */ r.createElement(
          I,
          {
            label: d(a, "duration"),
            value: pe(k.durationMs / 1e3)
          }
        ) : null, /* @__PURE__ */ r.createElement(
          Ot,
          {
            size: "small",
            items: [
              {
                key: "api-msgs",
                label: `${d(a, "apiMessages")} (${k.messages.length})`,
                children: /* @__PURE__ */ r.createElement(
                  ql,
                  {
                    messages: k.messages,
                    locale: a
                  }
                )
              }
            ]
          }
        ))
      });
    }
    u.push({
      key: "raw",
      label: d(a, "output"),
      children: /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, o.inboundParts && o.inboundParts.length > 0 ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(j, { type: "secondary", style: { fontSize: 12 } }, `${d(a, "inboundParts")} (${o.inboundParts.length})`), o.inboundParts.map((k, O) => /* @__PURE__ */ r.createElement(
        "div",
        {
          key: O,
          style: { display: "flex", gap: 8, alignItems: "baseline" }
        },
        /* @__PURE__ */ r.createElement(j, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, k.type.replace("Content", "")),
        /* @__PURE__ */ r.createElement(
          j,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          k.text ?? "-"
        )
      ))) : null, o.marker ? /* @__PURE__ */ r.createElement(Se, { value: o.marker }) : null, o.toolCalls && o.toolCalls.length > 0 ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(j, { type: "secondary", style: { fontSize: 12 } }, `${d(a, "toolCall")} (${o.toolCalls.length})`), o.toolCalls.map((k, O) => /* @__PURE__ */ r.createElement("div", { key: k.id || O, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ r.createElement(j, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", k.name), /* @__PURE__ */ r.createElement(j, { type: "secondary", style: { fontSize: 11 } }, k.id)))) : null, o.note ? /* @__PURE__ */ r.createElement(j, { type: "warning", style: { fontSize: 12 } }, o.note) : null, o.messages && o.messages.length > 0 ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(j, { type: "secondary", style: { fontSize: 12 } }, `${d(a, "query")} (${o.messages.length})`), o.messages.map((k, O) => /* @__PURE__ */ r.createElement(
        "div",
        {
          key: O,
          style: { display: "flex", gap: 8, alignItems: "baseline" }
        },
        /* @__PURE__ */ r.createElement(j, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, k.role),
        /* @__PURE__ */ r.createElement(
          j,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          k.text
        )
      ))) : null, o.thinkingText ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(j, { type: "secondary", style: { fontSize: 12 } }, d(a, "thinking")), /* @__PURE__ */ r.createElement(Se, { value: o.thinkingText })) : null, o.outputText ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(j, { type: "secondary", style: { fontSize: 12 } }, d(a, "output")), /* @__PURE__ */ r.createElement(Se, { value: o.outputText })) : null)
    });
  }
  return (o.startedAt !== null || f || E) && u.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(I, { label: "Started", value: _e(o.startedAt) }), /* @__PURE__ */ r.createElement(I, { label: "Total", value: pe(o.timeSeconds) }), E ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      I,
      {
        label: "TTFT",
        value: pe(E.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ r.createElement(
      I,
      {
        label: "Decoding",
        value: pe(E.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ r.createElement(
      I,
      {
        label: d(a, "throughput"),
        value: it(
          f == null ? void 0 : f.output_tokens,
          E.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ r.createElement(j, { type: "secondary", style: { fontSize: 12 } }, d(a, "noTiming")))
  }), f && u.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(I, { label: "Input", value: J(f.input_tokens) }), /* @__PURE__ */ r.createElement(I, { label: "Output", value: J(f.output_tokens) }), f.cache_creation_input_tokens ? /* @__PURE__ */ r.createElement(
      I,
      {
        label: "Cache write",
        value: J(f.cache_creation_input_tokens)
      }
    ) : null, f.cache_input_tokens ? /* @__PURE__ */ r.createElement(
      I,
      {
        label: "Cache read",
        value: J(f.cache_input_tokens)
      }
    ) : null, f.total_tokens !== void 0 ? /* @__PURE__ */ r.createElement(I, { label: "Total", value: J(f.total_tokens) }) : null, f.time !== void 0 ? /* @__PURE__ */ r.createElement(I, { label: "API time", value: pe(f.time) }) : null)
  }), u.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ r.createElement(Se, { value: o.raw })
  }), /* @__PURE__ */ r.createElement(
    "aside",
    {
      style: {
        flexShrink: 0,
        width: c,
        borderLeft: "1px solid rgba(128,128,128,0.18)",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        position: "relative"
      }
    },
    /* @__PURE__ */ r.createElement(xt, { dragRef: y, width: c }),
    /* @__PURE__ */ r.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ r.createElement(ot, { onClose: i }), /* @__PURE__ */ r.createElement(Dt, { size: "small", items: u, tabBarStyle: { marginBottom: 8 } }))
  );
}
const Gl = {
  kept: "resetKept",
  removed: "resetRemoved",
  rewritten: "resetRewritten",
  added: "resetAdded"
}, en = 8, Xl = {
  system: "green",
  user: "blue",
  tool: "gold"
};
function ql({
  messages: e,
  locale: n
}) {
  const [t, l] = Ve(null), [s, i] = Ve(null), [a, c] = Ve(!1), h = /* @__PURE__ */ new Map();
  for (const u of e)
    h.set(u.role, (h.get(u.role) ?? 0) + 1);
  const y = t === null ? e.map((u, v) => v) : e.flatMap(
    (u, v) => u.role === t ? [v] : []
  ), o = !a && t === null && e.length > en + 4 ? e.length - en : 0, f = y.filter((u) => u >= o), E = (u, v, $) => /* @__PURE__ */ r.createElement(
    "span",
    {
      onClick: $,
      style: {
        display: "inline-flex",
        alignItems: "center",
        padding: "0 8px",
        borderRadius: 999,
        fontSize: 10,
        lineHeight: "18px",
        cursor: "pointer",
        userSelect: "none",
        border: `1px solid ${v ? "rgba(22,119,255,0.6)" : "rgba(128,128,128,0.35)"}`,
        background: v ? "rgba(22,119,255,0.10)" : "transparent",
        color: v ? "#1677ff" : "rgba(128,128,128,1)"
      }
    },
    u
  );
  return /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ r.createElement("div", { style: { display: "flex", gap: 4, flexWrap: "wrap" } }, E(
    `${d(n, "apiFilterAll")} ${e.length}`,
    t === null,
    () => l(null)
  ), [...h.entries()].map(
    ([u, v]) => E(
      `${u} ${v}`,
      t === u,
      () => l(t === u ? null : u)
    )
  )), o > 0 ? /* @__PURE__ */ r.createElement(
    "a",
    {
      style: { fontSize: 11 },
      onClick: () => c(!0)
    },
    `⋯ ${d(n, "apiShowEarlier")} (${o})`
  ) : null, a && t === null && o === 0 ? /* @__PURE__ */ r.createElement("a", { style: { fontSize: 11 }, onClick: () => c(!1) }, d(n, "apiCollapseEarlier")) : null, /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 4 } }, f.map((u) => {
    const v = e[u], $ = s === u;
    return /* @__PURE__ */ r.createElement(
      "div",
      {
        key: u,
        style: {
          borderRadius: 6,
          border: `1px solid ${$ ? "rgba(22,119,255,0.35)" : "rgba(128,128,128,0.18)"}`,
          padding: $ ? "4px 8px" : "2px 8px",
          background: $ ? "rgba(22,119,255,0.04)" : "transparent"
        }
      },
      /* @__PURE__ */ r.createElement(
        "div",
        {
          onClick: () => i($ ? null : u),
          style: {
            display: "flex",
            gap: 6,
            alignItems: "center",
            cursor: "pointer",
            minWidth: 0
          }
        },
        /* @__PURE__ */ r.createElement(
          rt,
          {
            color: Xl[v.role] ?? "purple",
            style: {
              marginInlineEnd: 0,
              fontSize: 10,
              lineHeight: "16px",
              flexShrink: 0
            }
          },
          v.role
        ),
        /* @__PURE__ */ r.createElement(j, { type: "secondary", style: { fontSize: 10, flexShrink: 0 } }, "#", u + 1),
        v.toolCallId ? /* @__PURE__ */ r.createElement(j, { code: !0, style: { fontSize: 9, flexShrink: 0 } }, "…", v.toolCallId.slice(-8)) : null,
        /* @__PURE__ */ r.createElement(j, { type: "secondary", style: { fontSize: 10, flexShrink: 0 } }, J(v.content.length), " ", d(n, "charUnit")),
        $ ? null : /* @__PURE__ */ r.createElement(
          j,
          {
            type: "secondary",
            style: {
              fontSize: 11,
              minWidth: 0,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }
          },
          v.content.split(`
`, 1)[0].slice(0, 120) || "—"
        )
      ),
      $ ? /* @__PURE__ */ r.createElement(
        "div",
        {
          style: {
            marginTop: 4,
            maxHeight: 260,
            overflowY: "auto"
          }
        },
        /* @__PURE__ */ r.createElement(Se, { value: v.content })
      ) : null
    );
  })));
}
function Jl({
  message: e,
  locale: n
}) {
  const [t, l] = r.useState(!1), s = e.text ?? "";
  return /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement("div", { style: { display: "flex", gap: 8, alignItems: "baseline" } }, /* @__PURE__ */ r.createElement(j, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, e.role), /* @__PURE__ */ r.createElement(j, { type: "secondary", style: { fontSize: 11 } }, J(e.chars), " ", d(n, "charUnit"), e.toolCallId ? ` · ${e.toolCallId}` : ""), s.length > 200 ? /* @__PURE__ */ r.createElement(
    "a",
    {
      style: { fontSize: 11 },
      onClick: () => l((i) => !i)
    },
    t ? d(n, "inputCollapseText") : d(n, "inputExpand")
  ) : null), s ? /* @__PURE__ */ r.createElement(
    "div",
    {
      style: t ? void 0 : {
        maxHeight: 57,
        overflow: "hidden",
        position: "relative"
      }
    },
    /* @__PURE__ */ r.createElement(Se, { value: s })
  ) : null);
}
const Ql = {
  slash: "spanTriggerSlash",
  load: "spanTriggerLoad",
  resource: "spanTriggerResource"
}, Yl = {
  run_end: "spanEndRun",
  last_activity: "spanEndLast"
};
function Zl({
  span: e,
  records: n,
  onJumpRecord: t,
  onClose: l
}) {
  const s = ie(), i = e.endKind ? d(s, Yl[e.endKind]) : d(s, "spanOpen"), a = bl(e);
  return new Map(n.map((c) => [c.index, c])), /* @__PURE__ */ r.createElement(
    "aside",
    {
      style: {
        flexShrink: 0,
        width: 380,
        borderLeft: "1px solid rgba(128,128,128,0.18)",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        position: "relative",
        background: "inherit"
      }
    },
    /* @__PURE__ */ r.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ r.createElement(ot, { onClose: l }), /* @__PURE__ */ r.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ r.createElement(
      "span",
      {
        style: {
          width: 12,
          height: 12,
          borderRadius: 3,
          flexShrink: 0,
          background: `hsl(${e.colorHue}, 65%, 55%)`,
          border: e.bypass ? "1px dashed rgba(250,140,22,0.9)" : void 0
        }
      }
    ), /* @__PURE__ */ r.createElement(j, { strong: !0, style: { fontSize: 13 } }, e.skill), /* @__PURE__ */ r.createElement(
      rt,
      {
        color: e.bypass ? "orange" : "geekblue",
        style: { marginInlineEnd: 0, fontSize: 10 }
      },
      d(s, Ql[e.trigger])
    )), /* @__PURE__ */ r.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ r.createElement(
      I,
      {
        label: d(s, "spanStart"),
        value: _e(e.startT)
      }
    ), /* @__PURE__ */ r.createElement(I, { label: d(s, "spanEnd"), value: i }), e.endT !== null ? /* @__PURE__ */ r.createElement(I, { label: " ", value: _e(e.endT) }) : null, e.lastActivityT !== null ? /* @__PURE__ */ r.createElement(
      I,
      {
        label: d(s, "spanLastActivity"),
        value: _e(e.lastActivityT)
      }
    ) : null, /* @__PURE__ */ r.createElement(
      I,
      {
        label: d(s, "spanDuration"),
        value: a === null ? "-" : pe(a / 1e3)
      }
    ), /* @__PURE__ */ r.createElement(
      I,
      {
        label: d(s, "spanAttributed"),
        value: String(e.attributedIndexes.length)
      }
    ), /* @__PURE__ */ r.createElement(
      I,
      {
        label: d(s, "spanLoadState"),
        value: e.bypass ? d(s, "skillBypass") : e.loadSeq !== null ? `seq ${e.loadSeq}` : "-",
        danger: e.bypass
      }
    )), e.evidences.length > 0 ? /* @__PURE__ */ r.createElement("div", { style: { marginTop: 10 } }, /* @__PURE__ */ r.createElement(j, { strong: !0, style: { fontSize: 12 } }, d(s, "spanEvidence")), e.evidences.slice(0, 30).map((c, h) => /* @__PURE__ */ r.createElement(
      "div",
      {
        key: h,
        style: {
          display: "flex",
          gap: 6,
          alignItems: "baseline",
          padding: "2px 0"
        }
      },
      /* @__PURE__ */ r.createElement(
        rt,
        {
          color: c.kind === "path" ? "geekblue" : c.kind === "content" ? "blue" : "default",
          style: { marginInlineEnd: 0, fontSize: 10 }
        },
        c.kind
      ),
      /* @__PURE__ */ r.createElement(
        "a",
        {
          style: { fontSize: 12 },
          onClick: () => t(c.recordIndex)
        },
        "#",
        c.recordIndex
      ),
      /* @__PURE__ */ r.createElement(j, { type: "secondary", style: { fontSize: 11 } }, c.detail)
    ))) : /* @__PURE__ */ r.createElement(
      j,
      {
        type: "secondary",
        style: { fontSize: 12, display: "block", marginTop: 10 }
      },
      d(s, "spanNoActivity")
    ))
  );
}
const fe = window.QwenPaw.host.React, es = fe.useRef, ts = fe.useState;
fe.useCallback;
fe.useMemo;
const ns = fe.useEffect, ls = fe.useLayoutEffect, ss = fe.useReducer;
fe.createContext;
fe.useContext;
fe.createElement;
fe.cloneElement;
fe.isValidElement;
fe.memo;
fe.forwardRef;
fe.Fragment;
fe.StrictMode;
fe.version;
function os(e) {
  return e ? e() : void 0;
}
function is(e, n, t) {
  const l = new Array(e);
  return new Proxy(l, {
    get(s, i, a) {
      if (typeof i == "string") {
        const c = i.charCodeAt(0);
        if (c >= 48 && c <= 57) {
          const h = +i;
          if (Number.isInteger(h) && h >= 0 && h < e) {
            let y = s[h];
            if (!y) {
              const o = n[h * 2];
              y = s[h] = {
                index: h,
                key: t(h),
                start: o,
                size: n[h * 2 + 1],
                end: o + n[h * 2 + 1],
                lane: 0
              };
            }
            return y;
          }
        }
        if (i === "length") return e;
      }
      return Reflect.get(s, i, a);
    }
  });
}
function Pe(e, n, t) {
  let l = t.initialDeps ?? [], s, i = !0;
  function a() {
    var c;
    const h = process.env.NODE_ENV !== "production" && !!t.key && !!((c = t.debug) != null && c.call(t));
    let y = 0;
    h && (y = Date.now());
    const o = e();
    if (!(o.length !== l.length || o.some((u, v) => l[v] !== u)))
      return s;
    l = o;
    let E = 0;
    if (h && (E = Date.now()), s = n(...o), h) {
      const u = Math.round((Date.now() - y) * 100) / 100, v = Math.round((Date.now() - E) * 100) / 100, $ = v / 16, D = (T, M) => {
        for (T = String(T); T.length < M; )
          T = " " + T;
        return T;
      };
      console.info(
        `%c⏱ ${D(v, 5)} /${D(u, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * $, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return t != null && t.onChange && !(i && t.skipInitialOnChange) && t.onChange(s), i = !1, s;
  }
  return a.updateDeps = (c) => {
    l = c;
  }, a;
}
function tn(e, n) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const rs = (e, n) => Math.abs(e - n) < 1.01, as = (e, n, t) => {
  let l;
  return function(...s) {
    e.clearTimeout(l), l = e.setTimeout(() => n.apply(this, s), t);
  };
};
let We;
const kt = () => {
  if (We !== void 0) return We;
  if (typeof navigator > "u") return We = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return We = !0;
  const e = navigator.maxTouchPoints;
  return We = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, nn = (e) => {
  const { offsetWidth: n, offsetHeight: t } = e;
  return { width: n, height: t };
}, cs = (e) => e, us = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), l = Math.min(e.endIndex + e.overscan, e.count - 1) - n + 1, s = new Array(l);
  for (let i = 0; i < l; i++)
    s[i] = n + i;
  return s;
}, ds = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const l = e.targetWindow;
  if (!l)
    return;
  const s = (a) => {
    const { width: c, height: h } = a;
    n({ width: Math.round(c), height: Math.round(h) });
  };
  if (s(nn(t)), !l.ResizeObserver)
    return () => {
    };
  const i = new l.ResizeObserver((a) => {
    const c = () => {
      const h = a[0];
      if (h != null && h.borderBoxSize) {
        const y = h.borderBoxSize[0];
        if (y) {
          s({ width: y.inlineSize, height: y.blockSize });
          return;
        }
      }
      s(nn(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(c) : c();
  });
  return i.observe(t, { box: "border-box" }), () => {
    i.unobserve(t);
  };
}, at = {
  passive: !0
}, ps = typeof window > "u" ? !0 : "onscrollend" in window, hs = (e, n, t) => {
  const l = e.scrollElement;
  if (!l)
    return;
  const s = e.targetWindow;
  if (!s)
    return;
  const i = e.options.useScrollendEvent && ps;
  let a = 0;
  const c = i ? null : as(
    s,
    () => n(a, !1),
    e.options.isScrollingResetDelay
  ), h = (f) => () => {
    a = t(l), c == null || c(), n(a, f);
  }, y = h(!0), o = h(!1);
  return l.addEventListener("scroll", y, at), i && l.addEventListener("scrollend", o, at), () => {
    l.removeEventListener("scroll", y), i && l.removeEventListener("scrollend", o);
  };
}, fs = (e, n) => hs(e, n, (t) => {
  const { horizontal: l, isRtl: s } = e.options;
  return l ? t.scrollLeft * (s && -1 || 1) : t.scrollTop;
}), ms = (e, n, t) => {
  if (t.options.useCachedMeasurements) {
    const l = t.indexFromElement(e), s = t.options.getItemKey(l);
    return t.itemSizeCache.get(s) ?? t.options.estimateSize(l);
  }
  if (n != null && n.borderBoxSize) {
    const l = n.borderBoxSize[0];
    if (l)
      return Math.round(
        l[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  if (!n) {
    const l = t.indexFromElement(e), s = t.options.getItemKey(l), i = t.itemSizeCache.get(s);
    if (i !== void 0)
      return i;
  }
  return e[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, gs = (e, {
  adjustments: n = 0,
  behavior: t
}, l) => {
  var s, i;
  (i = (s = l.scrollElement) == null ? void 0 : s.scrollTo) == null || i.call(s, {
    [l.options.horizontal ? "left" : "top"]: e + n,
    behavior: t
  });
}, ys = gs;
class Es {
  constructor(n) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, l, s;
      return ((s = (l = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : l.now) == null ? void 0 : s.call(l)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const l = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((s) => {
        s.forEach((i) => {
          const a = () => {
            const c = i.target, h = this.indexFromElement(c);
            if (!c.isConnected) {
              this.observer.unobserve(c);
              for (const [y, o] of this.elementsCache)
                if (o === c) {
                  this.elementsCache.delete(y);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(h) && this.resizeItem(
              h,
              this.options.measureElement(c, i, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
        });
      }));
      return {
        disconnect: () => {
          var s;
          (s = l()) == null || s.disconnect(), t = null;
        },
        observe: (s) => {
          var i;
          return (i = l()) == null ? void 0 : i.observe(s, { box: "border-box" });
        },
        unobserve: (s) => {
          var i;
          return (i = l()) == null ? void 0 : i.unobserve(s);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      var l, s;
      const i = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: cs,
        rangeExtractor: us,
        onChange: () => {
        },
        measureElement: ms,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        anchorTo: "start",
        followOnAppend: !1,
        scrollEndThreshold: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        laneAssignmentMode: "estimate",
        useCachedMeasurements: !1
      };
      for (const E in t) {
        const u = t[E];
        u !== void 0 && (i[E] = u);
      }
      const a = this.options;
      let c = null, h = null, y = !1;
      if (a !== void 0 && a.enabled && i.enabled && i.anchorTo === "end" && this.scrollElement !== null) {
        const E = a.count, u = i.count, v = this.getMeasurements(), $ = E > 0 ? ((l = v[0]) == null ? void 0 : l.key) ?? a.getItemKey(0) : null, D = E > 0 ? ((s = v[E - 1]) == null ? void 0 : s.key) ?? a.getItemKey(E - 1) : null;
        if (u !== E || E > 0 && u > 0 && (i.getItemKey(0) !== $ || i.getItemKey(u - 1) !== D)) {
          y = !0;
          const k = E > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? v[0] : null;
          k && (c = [k.key, this.getScrollOffset() - k.start]);
          const O = i.followOnAppend === !0 ? "auto" : i.followOnAppend || null;
          O && u > E && this.isAtEnd(a.scrollEndThreshold) && (E === 0 || i.getItemKey(u - 1) !== D) && (h = O);
        }
      }
      this.options = i, y && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let o = !1, f = 0;
      if (c && this.scrollOffset !== null) {
        const [E, u] = c, v = this.getMeasurements(), { count: $, getItemKey: D } = this.options;
        let T = 0;
        for (; T < $ && D(T) !== E; )
          T++;
        if (T < $) {
          const M = v[T];
          if (M) {
            const k = Math.max(0, M.start + u);
            k !== this.scrollOffset && (f = k - this.scrollOffset, this.scrollOffset = k, o = !0);
          }
        }
      }
      (o || h) && (this.pendingScrollAnchor = [
        o ? c[0] : null,
        o ? c[1] : 0,
        h,
        f
      ]);
    }, this.notify = (t) => {
      var l, s;
      (s = (l = this.options).onChange) == null || s.call(l, this, t);
    }, this.maybeNotify = Pe(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (t) => {
        this.notify(t);
      },
      {
        key: process.env.NODE_ENV !== "production" && "maybeNotify",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((t) => t()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var t;
      const l = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== l) {
        if (this.cleanup(), !l) {
          this.maybeNotify();
          return;
        }
        if (this.scrollElement = l, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((i) => {
          this.observer.observe(i);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (i) => {
            this.scrollRect = i, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (i, a) => {
            if (a && this._intendedScrollOffset === null && i === this.scrollOffset)
              return;
            this._intendedScrollOffset !== null && Math.abs(i - this._intendedScrollOffset) < 1.5 && (i = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
            const c = this.getScrollOffset();
            this.scrollDirection = a ? c === i ? this.scrollDirection : c < i ? "forward" : "backward" : null, this.scrollOffset = i, this.isScrolling = a, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const i = this.scrollElement, a = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, c = () => {
            this._iosTouching = !1, !(!kt() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          i.addEventListener(
            "touchstart",
            a,
            at
          ), i.addEventListener(
            "touchend",
            c,
            at
          ), this.unsubs.push(() => {
            i.removeEventListener("touchstart", a), i.removeEventListener("touchend", c), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const s = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, s && this.scrollElement && this.options.enabled) {
        const [i, a, c, h] = s;
        i !== null && !c && (kt() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? h !== 0 && (this._iosDeferredAdjustment += h) : this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        })), c && this.scrollToEnd({ behavior: c });
      }
    }, this._flushIosDeferredIfReady = () => {
      if (this._iosDeferredAdjustment === 0 || this.isScrolling || this._iosTouching || this._iosJustTouchEnded) return;
      const t = this.getScrollOffset(), l = this.getMaxScrollOffset();
      if (t < 0 || t > l) return;
      if (this._iosDeferredAdjustment < 0 && t >= l - 1) {
        this._iosDeferredAdjustment = 0;
        return;
      }
      const s = this._iosDeferredAdjustment;
      this._iosDeferredAdjustment = 0, this._scrollToOffset(t, {
        adjustments: this.scrollAdjustments += s,
        behavior: void 0
      });
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = Pe(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes,
        this.options.laneAssignmentMode,
        this.options.gap
      ],
      (t, l, s, i, a, c, h, y) => (this.prevLanes !== void 0 && this.prevLanes !== c && (this.lanesChangedFlag = !0), this.prevLanes = c, this.pendingMin = null, {
        count: t,
        paddingStart: l,
        scrollMargin: s,
        getItemKey: i,
        enabled: a,
        lanes: c,
        laneAssignmentMode: h,
        gap: y
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Pe(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: t,
        paddingStart: l,
        scrollMargin: s,
        getItemKey: i,
        enabled: a,
        lanes: c,
        laneAssignmentMode: h,
        gap: y
      }, o) => {
        const f = this.itemSizeCache;
        if (!a)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const T of this.laneAssignments.keys())
            T >= t && this.laneAssignments.delete(T);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((T) => {
          this.itemSizeCache.set(T.key, T.size);
        }));
        const E = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), c === 1) {
          const T = t * 2;
          let M = this._flatMeasurements;
          if (!M || M.length < T) {
            const P = new Float64Array(T);
            M && E > 0 && P.set(M.subarray(0, E * 2)), M = P, this._flatMeasurements = M;
          }
          let k;
          if (E === 0)
            k = l + s;
          else {
            const P = E - 1;
            k = M[P * 2] + M[P * 2 + 1] + y;
          }
          for (let P = E; P < t; P++) {
            const A = i(P), C = f.get(A), N = typeof C == "number" ? C : this.options.estimateSize(P);
            M[P * 2] = k, M[P * 2 + 1] = N, k += N + y;
          }
          const O = is(t, M, i);
          return this.measurementsCache = O, O;
        }
        const u = this.measurementsCache.slice(0, E), v = new Array(c).fill(
          void 0
        ), $ = new Float64Array(c);
        let D = 0;
        for (let T = 0; T < E; T++) {
          const M = u[T];
          M && (v[M.lane] === void 0 && D++, v[M.lane] = T, $[M.lane] = M.end);
        }
        for (let T = E; T < t; T++) {
          const M = i(T), k = this.laneAssignments.get(T);
          let O, P;
          const A = h === "estimate" || f.has(M);
          if (k !== void 0 && this.options.lanes > 1) {
            O = k;
            const F = v[O], le = F !== void 0 ? u[F] : void 0;
            P = le ? le.end + y : l + s;
          } else if (D === c) {
            let F = 0, le = $[0], he = v[0];
            for (let ae = 1; ae < c; ae++) {
              const re = $[ae];
              (re < le || re === le && v[ae] < he) && (F = ae, le = re, he = v[ae]);
            }
            O = F, P = le + y, A && this.laneAssignments.set(T, O);
          } else
            O = T % this.options.lanes, P = l + s, A && this.laneAssignments.set(T, O);
          const C = f.get(M), N = typeof C == "number" ? C : this.options.estimateSize(T), Z = P + N;
          u[T] = {
            index: T,
            start: P,
            size: N,
            end: Z,
            key: M,
            lane: O
          }, v[O] === void 0 && D++, v[O] = T, $[O] = Z;
        }
        return this.measurementsCache = u, u;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Pe(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, l, s, i) => t.length === 0 || l === 0 ? (this.range = null, null) : (this.range = vs(
        t,
        l,
        s,
        i,
        // Pass the typed array so binary search + forward-walk can read
        // start/end directly from Float64Array, skipping the Proxy traps.
        i === 1 && this._flatMeasurements != null ? this._flatMeasurements : null
      ), this.range),
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Pe(
      () => {
        let t = null, l = null;
        const s = this.calculateRange();
        return s && (t = s.startIndex, l = s.endIndex), this.maybeNotify.updateDeps([this.isScrolling, t, l]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          t,
          l
        ];
      },
      (t, l, s, i, a) => i === null || a === null ? [] : t({
        startIndex: i,
        endIndex: a,
        overscan: l,
        count: s
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (t) => {
      const l = this.options.indexAttribute, s = t.getAttribute(l);
      return s ? parseInt(s, 10) : (console.warn(
        `Missing attribute name '${l}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (t) => {
      var l;
      if (!this.scrollState || this.scrollState.behavior !== "smooth")
        return !0;
      const s = this.scrollState.index ?? ((l = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : l.index);
      if (s !== void 0 && this.range) {
        const i = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), a = Math.max(0, s - i), c = Math.min(
          this.options.count - 1,
          s + i
        );
        return t >= a && t <= c;
      }
      return !0;
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((a, c) => {
          a.isConnected || (this.observer.unobserve(a), this.elementsCache.delete(c));
        });
        return;
      }
      const l = this.indexFromElement(t), s = this.options.getItemKey(l), i = this.elementsCache.get(s);
      i !== t && (i && this.observer.unobserve(i), this.observer.observe(t), this.elementsCache.set(s, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(l) && this.resizeItem(l, this.options.measureElement(t, void 0, this));
    }, this.resizeItem = (t, l) => {
      var s, i;
      if (t < 0 || t >= this.options.count) return;
      let a, c, h;
      const y = this._flatMeasurements;
      if (this.options.lanes === 1 && y !== null)
        h = this.options.getItemKey(t), c = y[t * 2], a = y[t * 2 + 1];
      else {
        const E = this.measurementsCache[t];
        if (!E) return;
        h = E.key, c = E.start, a = E.size;
      }
      const o = this.itemSizeCache.get(h) ?? a, f = l - o;
      if (f !== 0) {
        const E = this.options.anchorTo === "end" && ((s = this.scrollState) == null ? void 0 : s.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, u = E ? this.getTotalSize() : 0, v = this.getScrollOffset() + this.scrollAdjustments, D = !this.itemSizeCache.has(h) ? (
          // First measurement: compensate any item whose top sits above the
          // fold — the estimate→actual delta must be corrected regardless of
          // scroll direction, since the whole estimated block was above it.
          c < v
        ) : (
          // Re-measurement: only compensate an item that is ENTIRELY above the
          // fold. An item that merely *spans* the fold (top above, bottom
          // below — e.g. a streaming chat message growing at its bottom)
          // changes size *below* the anchor point, so shifting scrollTop by the
          // delta would drag the viewport downward on every growth (#1218).
          // Also skip during backward scroll to avoid the "items jump while
          // scrolling up" cascade.
          c + o <= v && this.scrollDirection !== "backward"
        ), T = ((i = this.scrollState) == null ? void 0 : i.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[t] ?? {
            index: t,
            key: h,
            start: c,
            size: a,
            end: c + a,
            lane: 0
          },
          f,
          this
        ) : D);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(h, l), this.itemSizeCacheVersion++;
        let M = !1;
        E ? M = this.applyScrollAdjustment(
          this.getTotalSize() - u
        ) : T && (M = this.applyScrollAdjustment(f)), this.notify(M);
      }
    }, this.getVirtualItems = Pe(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, l) => {
        const s = [];
        for (let i = 0, a = t.length; i < a; i++) {
          const c = t[i], h = l[c];
          s.push(h);
        }
        return s;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const l = this.getMeasurements();
      if (l.length === 0)
        return;
      const s = this._flatMeasurements, i = this.options.lanes === 1 && s != null, a = Fn(
        0,
        l.length - 1,
        i ? (c) => s[c * 2] : (c) => tn(l[c]).start,
        t
      );
      return tn(l[a]);
    }, this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if ("scrollHeight" in this.scrollElement)
        return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      {
        const t = this.scrollElement.document.documentElement;
        return this.options.horizontal ? t.scrollWidth - this.scrollElement.innerWidth : t.scrollHeight - this.scrollElement.innerHeight;
      }
    }, this.getVirtualDistanceFromEnd = () => Math.max(
      this.getTotalSize() - this.getSize() - this.getScrollOffset(),
      0
    ), this.getDistanceFromEnd = () => Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0), this.isAtEnd = (t = this.options.scrollEndThreshold) => this.getDistanceFromEnd() <= t, this.getOffsetForAlignment = (t, l, s = 0) => {
      if (!this.scrollElement) return 0;
      const i = this.getSize(), a = this.getScrollOffset();
      l === "auto" && (l = t >= a + i ? "end" : "start"), l === "center" ? t += (s - i) / 2 : l === "end" && (t -= i);
      const c = this.getMaxScrollOffset();
      return Math.max(Math.min(c, t), 0);
    }, this.getOffsetForIndex = (t, l = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const s = this.getSize(), i = this.getScrollOffset(), a = this.measurementsCache[t];
      if (!a) return;
      if (l === "auto")
        if (a.end >= i + s - this.options.scrollPaddingEnd)
          l = "end";
        else if (a.start <= i + this.options.scrollPaddingStart)
          l = "start";
        else
          return [i, l];
      if (l === "end" && t === this.options.count - 1)
        return [this.getMaxScrollOffset(), l];
      const c = l === "end" ? a.end + this.options.scrollPaddingEnd : a.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(c, l, a.size),
        l
      ];
    }, this.scrollToOffset = (t, { align: l = "start", behavior: s = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0;
      const i = this.getOffsetForAlignment(t, l), a = this.now();
      this.scrollState = {
        index: null,
        align: l,
        behavior: s,
        startedAt: a,
        lastTargetOffset: i,
        stableFrames: 0
      }, this._scrollToOffset(i, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (t, {
      align: l = "auto",
      behavior: s = "auto"
    } = {}) => {
      this._iosDeferredAdjustment = 0, t = Math.max(0, Math.min(t, this.options.count - 1));
      const i = this.getOffsetForIndex(t, l);
      if (!i)
        return;
      const [a, c] = i, h = this.now();
      this.scrollState = {
        index: t,
        align: c,
        behavior: s,
        startedAt: h,
        lastTargetOffset: a,
        stableFrames: 0
      }, this._scrollToOffset(a, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.scrollBy = (t, { behavior: l = "auto" } = {}) => {
      const s = this.getScrollOffset() + t, i = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: l,
        startedAt: i,
        lastTargetOffset: s,
        stableFrames: 0
      }, this._scrollToOffset(s, { adjustments: void 0, behavior: l }), this.scheduleScrollReconcile();
    }, this.scrollToEnd = ({ behavior: t = "auto" } = {}) => {
      if (this.options.count > 0) {
        this.scrollToIndex(this.options.count - 1, {
          align: "end",
          behavior: t
        });
        return;
      }
      this.scrollToOffset(Math.max(this.getTotalSize() - this.getSize(), 0), {
        behavior: t
      });
    }, this.getTotalSize = () => {
      var t;
      const l = this.getMeasurements();
      let s;
      if (l.length === 0)
        s = this.options.paddingStart;
      else if (this.options.lanes === 1) {
        const i = l.length - 1, a = this._flatMeasurements;
        a != null ? s = a[i * 2] + a[i * 2 + 1] : s = ((t = l[i]) == null ? void 0 : t.end) ?? 0;
      } else {
        const i = Array(this.options.lanes).fill(null);
        let a = l.length - 1;
        for (; a >= 0 && i.some((c) => c === null); ) {
          const c = l[a];
          i[c.lane] === null && (i[c.lane] = c.end), a--;
        }
        s = Math.max(...i.filter((c) => c !== null));
      }
      return Math.max(
        s - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this.takeSnapshot = () => {
      const t = [];
      if (this.itemSizeCache.size === 0) return t;
      const l = this.getMeasurements();
      for (const s of l)
        s && this.itemSizeCache.has(s.key) && t.push({
          index: s.index,
          key: s.key,
          start: s.start,
          size: s.size,
          end: s.end,
          lane: s.lane
        });
      return t;
    }, this._scrollToOffset = (t, {
      adjustments: l,
      behavior: s
    }) => {
      this._intendedScrollOffset = t + (l ?? 0), this.options.scrollToFn(t, { behavior: s, adjustments: l }, this);
    }, this.measure = () => {
      this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(!1);
    }, this.setOptions(n);
  }
  // Returns `true` when it performed a synchronous `scrollTop` write this
  // tick, `false` when the delta was zero or the write was deferred (iOS).
  // `resizeItem` uses that to decide whether the follow-up `notify` must be
  // synchronous so the grown transforms commit in the same paint (#1227).
  applyScrollAdjustment(n, t) {
    return n === 0 ? !1 : (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", n), kt() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += n, !1) : (this._scrollToOffset(this.getScrollOffset(), {
      adjustments: this.scrollAdjustments += n,
      behavior: t
    }), this.scrollOffset !== null && (this.scrollOffset += this.scrollAdjustments, this.scrollOffset < 0 && (this.scrollOffset = 0), this.scrollAdjustments = 0), !0));
  }
  scheduleScrollReconcile() {
    if (!this.targetWindow) {
      this.scrollState = null;
      return;
    }
    this.rafId == null && (this.rafId = this.targetWindow.requestAnimationFrame(() => {
      this.rafId = null, this.reconcileScroll();
    }));
  }
  reconcileScroll() {
    if (!this.scrollState || !this.scrollElement) return;
    if (this.now() - this.scrollState.startedAt > 5e3) {
      this.scrollState = null;
      return;
    }
    const l = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, s = l ? l[0] : this.scrollState.lastTargetOffset, i = 1, a = s !== this.scrollState.lastTargetOffset;
    if (!a && rs(s, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= i) {
        this.getScrollOffset() !== s && this._scrollToOffset(s, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, a) {
      const c = this.getSize() || 600, h = Math.abs(s - this.getScrollOffset()), y = this.scrollState.behavior === "smooth" && h > c;
      this.scrollState.lastTargetOffset = s, y || (this.scrollState.behavior = "auto"), this._scrollToOffset(s, {
        adjustments: void 0,
        behavior: y ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const Fn = (e, n, t, l) => {
  for (; e <= n; ) {
    const s = (e + n) / 2 | 0, i = t(s);
    if (i < l)
      e = s + 1;
    else if (i > l)
      n = s - 1;
    else
      return s;
  }
  return e > 0 ? e - 1 : 0;
};
function Ss(e, n, t) {
  let l = 0;
  for (; l <= n; ) {
    const s = (l + n) / 2 | 0, i = e[s * 2];
    if (i < t)
      l = s + 1;
    else if (i > t)
      n = s - 1;
    else
      return s;
  }
  return l > 0 ? l - 1 : 0;
}
function vs(e, n, t, l, s) {
  const i = e.length - 1;
  if (e.length <= l)
    return { startIndex: 0, endIndex: i };
  if (l === 1 && s !== null) {
    const y = Ss(
      s,
      i,
      t
    );
    let o = y;
    const f = t + n;
    for (; o < i && s[o * 2] + s[o * 2 + 1] < f; )
      o++;
    return { startIndex: y, endIndex: o };
  }
  let c = Fn(0, i, (y) => e[y].start, t), h = c;
  if (l === 1)
    for (; h < i && e[h].end < t + n; )
      h++;
  else if (l > 1) {
    const y = Array(l).fill(0);
    for (; h < i && y.some((f) => f < t + n); ) {
      const f = e[h];
      y[f.lane] = f.end, h++;
    }
    const o = Array(l).fill(t + n);
    for (; c >= 0 && o.some((f) => f >= t); ) {
      const f = e[c];
      o[f.lane] = f.start, c--;
    }
    c = Math.max(0, c - c % l), h = Math.min(i, h + (l - 1 - h % l));
  }
  return { startIndex: c, endIndex: h };
}
const wt = typeof document < "u" ? ls : ns;
function bs({
  useFlushSync: e = !0,
  directDomUpdates: n = !1,
  directDomUpdatesMode: t = "transform",
  ...l
}) {
  const s = ss((o) => o + 1, 0)[1], i = es({
    enabled: n,
    mode: t,
    container: null,
    lastSize: null,
    // Keyed by the element itself so a remounted node (same key, new DOM
    // node — e.g. when `enabled` is toggled off then on) is treated as fresh
    // and gets its style written.
    lastPositions: /* @__PURE__ */ new WeakMap(),
    prevRange: null
  });
  i.current.enabled = n, i.current.mode = t;
  const a = (o) => {
    const f = i.current;
    if (!f.enabled || !f.container) return;
    const E = o.getTotalSize();
    if (E !== f.lastSize) {
      f.lastSize = E;
      const u = o.options.horizontal ? "width" : "height";
      f.container.style[u] = `${E}px`;
    }
  }, c = (o) => {
    const f = i.current;
    if (!f.enabled || !f.container) return;
    a(o);
    const E = !!o.options.horizontal, u = f.mode === "transform", v = E ? "left" : "top", $ = o.options.scrollMargin, D = o.getVirtualItems();
    for (const T of D) {
      const M = T.start - $, k = o.elementsCache.get(T.key);
      k && f.lastPositions.get(k) !== M && (f.lastPositions.set(k, M), u ? k.style.transform = E ? `translate3d(${M}px, 0, 0)` : `translate3d(0, ${M}px, 0)` : k.style[v] = `${M}px`);
    }
  }, h = {
    ...l,
    onChange: (o, f) => {
      var E;
      const u = i.current;
      let v = !0;
      if (u.enabled) {
        c(o);
        const $ = o.range, D = u.prevRange;
        v = !D || D.isScrolling !== o.isScrolling || D.startIndex !== ($ == null ? void 0 : $.startIndex) || D.endIndex !== ($ == null ? void 0 : $.endIndex), v && (u.prevRange = $ ? {
          startIndex: $.startIndex,
          endIndex: $.endIndex,
          isScrolling: o.isScrolling
        } : null);
      }
      v && (e && f ? os(s) : s()), (E = l.onChange) == null || E.call(l, o, f);
    }
  }, [y] = ts(() => {
    const o = new Es(h);
    return Object.assign(o, {
      containerRef: (f) => {
        const E = i.current;
        if (E.container = f, E.lastSize = null, f && E.enabled) {
          const u = o.getTotalSize();
          E.lastSize = u;
          const v = o.options.horizontal ? "width" : "height";
          f.style[v] = `${u}px`;
        }
      }
    });
  });
  return y.setOptions(h), wt(() => y._didMount(), []), wt(() => (a(y), y._willUpdate())), wt(() => {
    c(y);
  }), y;
}
function xs(e) {
  return bs({
    observeElementRect: ds,
    observeElementOffset: fs,
    scrollToFn: ys,
    ...e
  });
}
const dt = window.QwenPaw.host, z = dt.React, { useRef: ks } = z, { Tag: De, Tooltip: ws } = dt.antd, { Text: ve } = dt.antd.Typography, {
  CaretRightOutlined: Ts,
  CloseCircleOutlined: _s,
  FileTextOutlined: Is,
  RobotOutlined: Cs,
  RocketOutlined: Ms,
  SafetyOutlined: $s,
  SendOutlined: zs,
  SettingOutlined: As,
  ToolOutlined: Os,
  UserOutlined: Rs
} = dt.antdIcons, Ls = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, Ns = {
  user: /* @__PURE__ */ z.createElement(Rs, null),
  message: /* @__PURE__ */ z.createElement(Cs, null),
  tool: /* @__PURE__ */ z.createElement(Os, null),
  system: /* @__PURE__ */ z.createElement(As, null)
}, ln = {
  approval: { color: "volcano", icon: /* @__PURE__ */ z.createElement($s, null) },
  receipt: { color: "cyan", icon: /* @__PURE__ */ z.createElement(zs, null) },
  spawn: { color: "geekblue", icon: /* @__PURE__ */ z.createElement(Ms, null) },
  header: { color: "green", icon: /* @__PURE__ */ z.createElement(Is, null) },
  error: { color: "red", icon: /* @__PURE__ */ z.createElement(_s, null) }
}, Ps = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default"
}, sn = {
  running: { zh: "进行中", en: "Running" },
  success: { zh: "成功", en: "Success" },
  error: { zh: "错误", en: "Error" },
  cancelled: { zh: "已取消", en: "Cancelled" },
  interrupted: { zh: "已中断", en: "Interrupted" },
  unknown: { zh: "未知", en: "Unknown" }
}, Ds = 150, Lt = 26, Hn = 34, on = 9, rn = 30;
function js(e) {
  const n = ie(), t = sn[e] ?? sn.unknown;
  return n === "zh-CN" ? t.zh : t.en;
}
const Bs = {
  ImageContent: "image",
  FileContent: "file",
  AudioContent: "audio",
  VideoContent: "video"
};
function Fs(e, n) {
  const t = /* @__PURE__ */ new Map();
  for (const l of e.inboundParts ?? []) {
    const s = Bs[l.type];
    s && t.set(s, (t.get(s) ?? 0) + 1);
  }
  return t.size === 0 ? null : [...t.entries()].map(([l, s]) => `${d(n, l)}×${s}`).join(" ");
}
function Hs(e, n) {
  const t = e.receipt, l = t != null && t.channel ? ` · ${t.channel}` : "";
  return `📤 ${d(n, "replySent")}${l} · ${((t == null ? void 0 : t.chars) ?? 0).toLocaleString()} ${d(n, "chars")}`;
}
function an({
  record: e,
  selected: n,
  dimmed: t,
  multiRequest: l,
  onSelect: s,
  onOpenRun: i
}) {
  var o, f;
  const a = e.usage, c = a && (a.input_tokens || a.output_tokens) ? `${J(a.input_tokens)}→${J(
    a.output_tokens
  )}` : null, h = a && a.reasoning_tokens ? a.reasoning_tokens : null, y = a && c ? [
    `Input ${J(a.input_tokens)} tok`,
    a.cache_input_tokens ? `Cached ${J(a.cache_input_tokens)} tok` : null,
    a.cache_creation_input_tokens ? `Cache created ${J(
      a.cache_creation_input_tokens
    )} tok` : null,
    `Output ${J(a.output_tokens)} tok`,
    h ? `${d(ie(), "reasoningShort")} ${J(
      h
    )} tok` : null
  ].filter(Boolean).join(" · ") : void 0;
  return /* @__PURE__ */ z.createElement(
    "div",
    {
      className: "at-ledger-row",
      "data-kind": e.kind,
      "data-error": e.isError || void 0,
      "data-running": e.running || void 0,
      "data-selected": n || void 0,
      "data-dimmed": t || void 0,
      onClick: s,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: Lt,
        cursor: "pointer",
        background: n ? "rgba(22,119,255,0.08)" : void 0,
        opacity: t ? 0.35 : 1,
        borderLeft: e.skillSpanHue !== void 0 ? `3px solid ${e.skillSpanBypass ? "rgba(250,140,22,0.9)" : `hsl(${e.skillSpanHue}, 65%, 55%)`}` : "3px solid transparent"
      }
    },
    /* @__PURE__ */ z.createElement(
      "span",
      {
        style: {
          flexShrink: 0,
          width: 68,
          color: "rgba(128,128,128,1)",
          fontSize: 11,
          textAlign: "right"
        }
      },
      l && i ? /* @__PURE__ */ z.createElement(
        "span",
        {
          title: d(ie(), "runViewHint"),
          onClick: (E) => {
            E.stopPropagation(), i(e.runIndex);
          },
          style: {
            opacity: 0.75,
            marginRight: 3,
            cursor: "pointer",
            textDecoration: "underline dotted",
            textUnderlineOffset: 2
          }
        },
        "R",
        e.runIndex
      ) : l ? /* @__PURE__ */ z.createElement("span", { style: { opacity: 0.65, marginRight: 3 } }, "R", e.runIndex) : null,
      "#",
      e.index
    ),
    /* @__PURE__ */ z.createElement(
      De,
      {
        color: e.kind === "tool" && e.skillName ? "geekblue" : e.markerKind && ((o = ln[e.markerKind]) == null ? void 0 : o.color) || Ls[e.kind] || "default",
        icon: e.markerKind && ((f = ln[e.markerKind]) == null ? void 0 : f.icon) || Ns[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      e.kind === "tool" && e.skillName ? d(ie(), "skillLoadKind") : Ln(e, ie())
    ),
    e.kind === "message" && e.model && e.model !== "unknown" ? /* @__PURE__ */ z.createElement(
      De,
      {
        title: e.model,
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0,
          maxWidth: 160,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }
      },
      e.model
    ) : null,
    e.inSkill ? /* @__PURE__ */ z.createElement(
      De,
      {
        color: e.inSkillLoaded ? "geekblue" : "orange",
        title: e.inSkillLoaded ? e.inSkill : `${e.inSkill} — ${d(ie(), "skillBypass")}`,
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0,
          maxWidth: 160,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }
      },
      "⚡",
      e.inSkill
    ) : e.guidedSkill ? /* @__PURE__ */ z.createElement(
      ws,
      {
        title: `${e.guidedSkill} — ${e.guidedReason === "slash" ? d(ie(), "guidedBySlash") : d(ie(), "guidedByLoad")}`
      },
      /* @__PURE__ */ z.createElement(
        ve,
        {
          style: {
            fontSize: 10,
            flexShrink: 0,
            maxWidth: 160,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: "#2f54eb"
          }
        },
        "∈",
        e.guidedSkill
      )
    ) : null,
    e.kind === "user" && e.skillName ? /* @__PURE__ */ z.createElement(
      De,
      {
        color: "geekblue",
        title: e.skillName,
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0,
          maxWidth: 160,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }
      },
      "/",
      e.skillName
    ) : null,
    /* @__PURE__ */ z.createElement(
      "span",
      {
        style: {
          flex: 1,
          minWidth: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          fontSize: 12
        }
      },
      e.receipt ? /* @__PURE__ */ z.createElement(ve, { type: "secondary", style: { fontSize: 12 } }, Hs(e, ie())) : e.kind === "tool" && e.skillName ? /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(ve, { strong: !0, style: { fontSize: 12 } }, e.skillName), e.toolError ? /* @__PURE__ */ z.createElement(ve, { type: "danger", style: { fontSize: 12 } }, ` → ${e.toolError}`) : e.toolOutputChars ? /* @__PURE__ */ z.createElement(ve, { type: "secondary", style: { fontSize: 12 } }, ` · ${d(ie(), "skillLoaded")} ${J(
        e.toolOutputChars
      )} ${d(ie(), "charUnit")}`) : null) : e.kind === "tool" && e.toolName ? /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(ve, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ z.createElement(ve, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ z.createElement(
        ve,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(
        ve,
        {
          type: e.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        e.running ? `⏳ ${e.text || "…"}` : e.text || "—"
      ), e.kind === "user" ? /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(ve, { type: "secondary", style: { fontSize: 11 } }, ` ${Fs(e, ie()) ?? ""}`), e.channel && e.channel !== "console" ? /* @__PURE__ */ z.createElement(ve, { code: !0, style: { fontSize: 10 } }, ` @${e.channel}`) : null) : null)
    ),
    /* @__PURE__ */ z.createElement(
      "span",
      {
        style: {
          flexShrink: 0,
          whiteSpace: "nowrap",
          fontSize: 11,
          color: "rgba(128,128,128,1)",
          textAlign: "right"
        }
      },
      c ? /* @__PURE__ */ z.createElement("span", { title: y }, /* @__PURE__ */ z.createElement("span", { style: { color: "#1677ff" } }, c), h ? /* @__PURE__ */ z.createElement("span", { style: { color: "#722ed1" } }, ` · ${J(h)}`) : null) : null,
      c ? " · " : "",
      (e.kind === "message" || e.kind === "tool") && pe(e.timeSeconds)
    )
  );
}
function Us({
  turn: e,
  collapsed: n,
  selected: t,
  cellCount: l,
  onToggle: s,
  onSelect: i,
  onSkillSpanOpen: a
}) {
  const c = ie();
  return /* @__PURE__ */ z.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: Hn }
    },
    /* @__PURE__ */ z.createElement(
      "span",
      {
        onClick: (h) => {
          h.stopPropagation(), i();
        },
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "1px 10px",
          borderRadius: 999,
          background: t ? "rgba(22,119,255,0.16)" : "rgba(22,119,255,0.08)",
          border: "1px solid rgba(22,119,255,0.25)",
          fontSize: 11,
          cursor: "pointer",
          userSelect: "none"
        }
      },
      /* @__PURE__ */ z.createElement(
        Ts,
        {
          onClick: (h) => {
            h.stopPropagation(), s();
          },
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: n ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ z.createElement(ve, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ z.createElement(ve, { type: "secondary", style: { fontSize: 11 } }, pe(e.durationMs / 1e3)),
      /* @__PURE__ */ z.createElement(ve, { type: "secondary", style: { fontSize: 11 } }, l, " ", d(c, "events")),
      e.skillsUsed && e.skillsUsed.length > 0 ? (
        /* Wrapper span keeps the click working even if the host's
         * antd Tag version does not forward onClick (idempotent). */
        /* @__PURE__ */ z.createElement(
          "span",
          {
            onClick: (h) => {
              a && (h.stopPropagation(), a(e.skillsUsed[0], e.turn));
            },
            style: {
              display: "inline-flex",
              cursor: a ? "pointer" : void 0
            }
          },
          /* @__PURE__ */ z.createElement(
            De,
            {
              color: "geekblue",
              title: e.skillsUsed.join(", "),
              style: {
                marginInlineEnd: 0,
                fontSize: 10,
                lineHeight: "16px",
                cursor: "inherit"
              }
            },
            "📚 ",
            e.skillsUsed.slice(0, 2).join(" "),
            e.skillsUsed.length > 2 ? ` +${e.skillsUsed.length - 2}` : ""
          )
        )
      ) : null,
      /* @__PURE__ */ z.createElement(
        De,
        {
          color: Ps[e.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        js(e.status)
      )
    )
  );
}
function Ws({
  turns: e,
  selectedIndex: n,
  selectedTurn: t,
  collapsedTurns: l,
  focusIndexes: s,
  searchMatchIndexes: i,
  onSelectedIndexChange: a,
  onSelectedTurnChange: c,
  onToggleTurn: h,
  callsCollapsed: y,
  hasOlderRecords: o,
  loadingOlder: f,
  onLoadOlder: E,
  initialRecord: u,
  emptyText: v,
  onSkillSpanOpen: $
}) {
  const D = ie(), T = ks(null), M = e.filter((N) => N.turn !== null), k = M.length > 1, O = z.useMemo(() => {
    var Z;
    const N = [];
    o && N.push({
      key: "load-older",
      height: rn,
      type: "load-older"
    }), u && (N.push({
      key: "initial",
      height: Lt,
      type: "initial",
      record: u
    }), N.push({
      key: "initial-divider",
      height: on,
      type: "divider"
    }));
    for (const F of M) {
      const le = F.turn;
      if (N.push({
        key: `turn-${le}`,
        height: Hn,
        type: "boundary",
        turn: F
      }), !l.has(le))
        for (const he of ((Z = F.groups[0]) == null ? void 0 : Z.cells) ?? [])
          y && he.kind === "tool" || N.push({
            key: `rec-${he.index}`,
            height: Lt,
            type: "record",
            record: he
          });
    }
    return N;
  }, [
    M,
    l,
    y,
    o,
    u
  ]), P = z.useCallback(
    (N) => s !== null && !s.has(N.index) || i !== null && !i.has(N.index),
    [s, i]
  ), A = (N) => {
    var Z;
    switch (N.type) {
      case "load-older":
        return /* @__PURE__ */ z.createElement("div", { style: { textAlign: "center", height: rn } }, /* @__PURE__ */ z.createElement(
          "button",
          {
            type: "button",
            onClick: E,
            disabled: f,
            style: {
              border: "1px solid rgba(128,128,128,0.3)",
              borderRadius: 10,
              background: "transparent",
              padding: "1px 12px",
              fontSize: 11,
              cursor: f ? "default" : "pointer",
              color: "rgba(128,128,128,1)"
            }
          },
          f ? "…" : `⋯ ${d(D, "loadOlder")}`
        ));
      case "divider":
        return /* @__PURE__ */ z.createElement(
          "div",
          {
            style: {
              height: on,
              borderBottom: "1px dashed rgba(128,128,128,0.25)"
            }
          }
        );
      case "initial": {
        const F = N.record;
        return /* @__PURE__ */ z.createElement(
          an,
          {
            record: F,
            selected: n === F.index,
            dimmed: P(F),
            multiRequest: k,
            onSelect: () => a(F.index),
            onOpenRun: c
          }
        );
      }
      case "boundary": {
        const F = N.turn, le = F.turn;
        return /* @__PURE__ */ z.createElement(
          Us,
          {
            turn: F,
            collapsed: l.has(le),
            selected: t === le,
            cellCount: ((Z = F.groups[0]) == null ? void 0 : Z.cells.length) ?? 0,
            onToggle: () => h(le),
            onSelect: () => c(le),
            onSkillSpanOpen: $ ? (he, ae) => $(he, ae) : void 0
          }
        );
      }
      case "record":
      default: {
        const F = N.record;
        return /* @__PURE__ */ z.createElement(
          an,
          {
            record: F,
            selected: n === F.index,
            dimmed: P(F),
            multiRequest: k,
            onSelect: () => a(F.index),
            onOpenRun: c
          }
        );
      }
    }
  };
  if (O.length === 0)
    return /* @__PURE__ */ z.createElement(
      "div",
      {
        style: {
          height: "100%",
          overflowY: "auto",
          padding: "4px 12px 24px"
        }
      },
      /* @__PURE__ */ z.createElement(
        "div",
        {
          style: {
            padding: 24,
            textAlign: "center",
            color: "rgba(128,128,128,1)",
            fontSize: 12
          }
        },
        v ?? d(D, "noSessions")
      )
    );
  const C = O.length <= Ds ? /* @__PURE__ */ z.createElement("div", null, O.map((N) => A(N))) : /* @__PURE__ */ z.createElement(
    Ks,
    {
      rows: O,
      scrollRef: T,
      renderRow: A
    }
  );
  return /* @__PURE__ */ z.createElement(
    "div",
    {
      ref: T,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    C
  );
}
function Ks({
  rows: e,
  scrollRef: n,
  renderRow: t
}) {
  const l = xs({
    count: e.length,
    getScrollElement: () => n.current,
    estimateSize: (s) => e[s].height,
    overscan: 12
  });
  return /* @__PURE__ */ z.createElement(
    "div",
    {
      style: {
        height: l.getTotalSize(),
        position: "relative",
        width: "100%"
      }
    },
    l.getVirtualItems().map((s) => /* @__PURE__ */ z.createElement(
      "div",
      {
        key: e[s.index].key,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: s.size,
          transform: `translateY(${s.start}px)`
        }
      },
      t(e[s.index])
    ))
  );
}
function Tt(e) {
  return (e == null ? void 0 : e.data) ?? {};
}
function cn(e) {
  return !e || typeof e != "object" || Array.isArray(e) ? !1 : Object.values(e).every(
    (n) => typeof n == "number" && Number.isFinite(n)
  );
}
function Vs(e) {
  if (!Array.isArray(e) || e.length === 0) return;
  const n = [];
  for (const t of e) {
    if (!t || typeof t != "object") continue;
    const l = t;
    n.push({
      role: typeof l.role == "string" ? l.role : "?",
      chars: typeof l.chars == "number" ? l.chars : 0,
      text: typeof l.text == "string" ? l.text : void 0,
      toolCallId: typeof l.tool_call_id == "string" ? l.tool_call_id : void 0
    });
  }
  return n.length > 0 ? n : void 0;
}
function Gs(e) {
  if (!(typeof e != "string" || !e))
    try {
      const n = JSON.parse(e);
      if (typeof n.skill == "string" && n.skill)
        return n.skill;
    } catch {
    }
}
function Un(e) {
  return e.replace(/[/\\]+/g, "/").toLowerCase();
}
function Xs(e) {
  if (typeof e.name == "string" && e.name) return e.name;
  const n = e.function;
  if (n && typeof n == "object" && typeof n.name == "string")
    return n.name;
}
function qs(e) {
  const n = [];
  for (const t of e.matchAll(/<skill>([\s\S]*?)<\/skill>/g)) {
    const l = t[1].match(/<name>([^<]+)<\/name>/), s = t[1].match(/<dir>([^<]+)<\/dir>/);
    l && s && s[1].trim() && n.push([Un(s[1].trim()), l[1].trim()]);
  }
  return n.sort((t, l) => l[0].length - t[0].length), n;
}
function un(e) {
  const n = e.match(/<skill>\s*<name>([^<]+)<\/name>/);
  return n ? n[1].trim() : null;
}
function Ce(e, n = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > n ? `${t.slice(0, n)}…` : t;
}
function Js(e) {
  var Y, Te;
  const n = [], t = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = [];
  let h = "";
  const y = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map();
  let u = [];
  const v = /* @__PURE__ */ new Set(), $ = [], D = new Sl(), T = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
  let O = [], P = [], A = 0, C = 0;
  const N = (g) => g.groups[0].cells, Z = (g, m) => {
    const S = a.get(g);
    S ? S.push(m) : a.set(g, [m]);
  }, F = (g, m) => {
    if (!g)
      if (h)
        g = h;
      else {
        c.push(m);
        return;
      }
    const S = t.get(g);
    if (S)
      m.runIndex = S.turn ?? 0, N(S).push(m);
    else if (h) {
      const _ = t.get(h);
      _ ? (m.runIndex = _.turn ?? 0, N(_).push(m)) : Z(g, m);
    } else
      Z(g, m);
  }, le = (g, m) => {
    const S = a.get(m);
    if (S) {
      for (const _ of S) N(g).push(_);
      a.delete(m);
    }
  };
  for (const g of e) {
    const m = Tt(g);
    switch (g.type) {
      case "run/start": {
        C += 1, $.length = 0, y.set(
          g.run_id,
          typeof m.channel == "string" ? m.channel : ""
        );
        const S = {
          turn: C,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${C}`, cells: [] }]
        };
        t.set(g.run_id, S), n.push(S), h = g.run_id, le(S, g.run_id);
        for (const L of c.splice(0))
          L.runIndex = C, N(S).push(L);
        const _ = Array.isArray(m.messages) ? m.messages : [], x = String(m.query ?? "");
        let R = typeof m.slash_skill == "string" && m.slash_skill ? m.slash_skill : un(x);
        !R && _.length > 0 && (R = un(String(((Y = _[0]) == null ? void 0 : Y.text) ?? ""))), R && (v.add(R), $.push([R, "slash"]), D.onRunStart(), D.onSlashSkill(
          R,
          g.seq,
          ge(g.t) ?? 0
        ), T.set(`${R}#${g.seq}`, S));
        const V = {
          index: ++A,
          runIndex: C,
          runId: g.run_id,
          kind: "user",
          text: Ce(x) || Ce((Te = _.at(-1)) == null ? void 0 : Te.text),
          messages: _,
          timeSeconds: 0,
          startedAt: ge(g.t) ?? 0,
          isError: !1,
          running: !1,
          skillName: R ?? void 0,
          model: void 0
        };
        o.set(g.run_id, V), N(S).push(V);
        break;
      }
      case "run/end": {
        const S = t.get(g.run_id);
        h === g.run_id && (h = ""), $.length = 0, D.onRunEnd(g.seq, ge(g.t) ?? 0), y.delete(g.run_id), o.delete(g.run_id);
        const _ = String(m.status ?? "unknown");
        if (S && (S.status = _, S.durationMs = typeof m.duration_ms == "number" ? m.duration_ms : null), _ === "error" && m.error) {
          const x = S ?? {
            turn: null,
            status: _,
            durationMs: typeof m.duration_ms == "number" ? m.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          S || n.push(x), x.groups[0].cells.push({
            index: ++A,
            runIndex: C,
            runId: g.run_id,
            kind: "system",
            markerKind: "error",
            text: Ce(String(m.error)) || "run failed",
            marker: String(m.error ?? "run failed"),
            timeSeconds: typeof m.duration_ms == "number" ? m.duration_ms / 1e3 : null,
            startedAt: ge(g.t) ?? 0,
            isError: !0,
            running: !1,
            raw: [g]
          });
        }
        break;
      }
      case "agent/spawn": {
        const S = typeof m.child_session_id == "string" ? m.child_session_id : void 0, _ = typeof m.child_agent_id == "string" ? m.child_agent_id : "?";
        F(g.run_id, {
          index: ++A,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${_} → ${S ?? "?"}`,
          timeSeconds: 0,
          startedAt: ge(g.t) ?? 0,
          isError: !1,
          running: !1,
          spawnSession: S,
          spawnAgent: _,
          raw: [g]
        });
        break;
      }
      case "message/inbound": {
        const S = Array.isArray(m.parts) ? m.parts : [], _ = m.channel_meta && typeof m.channel_meta == "object" ? m.channel_meta : void 0, x = S.map((se) => ({
          type: String(se.type ?? "?"),
          text: typeof se.text == "string" ? se.text : void 0
        })), R = y.get(g.run_id) ?? "", V = _ && typeof _.user_id == "string" && _.user_id ? _.user_id : void 0, L = Ce(
          x.map((se) => se.text ?? "").filter(Boolean).join(`
`)
        ), X = o.get(g.run_id);
        X && !X.inboundParts ? (X.inboundParts = x, X.channel = R || void 0, X.userId = V, X.raw = [
          ...X.raw ?? [],
          g
        ], X.text || (X.text = L)) : F(g.run_id, {
          index: ++A,
          runIndex: 0,
          runId: g.run_id,
          kind: "user",
          text: L || "📥",
          timeSeconds: 0,
          startedAt: ge(g.t) ?? 0,
          isError: !1,
          running: !1,
          channel: R || void 0,
          userId: V,
          inboundParts: x,
          raw: [g]
        });
        break;
      }
      case "message/outbound": {
        const S = typeof m.text == "string" ? m.text : "";
        F(g.run_id, {
          index: ++A,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          markerKind: "receipt",
          text: "📤",
          timeSeconds: 0,
          startedAt: ge(g.t) ?? 0,
          isError: !1,
          running: !1,
          outputText: S || void 0,
          receipt: {
            channel: y.get(g.run_id) || void 0,
            chars: S.length
          },
          raw: [g]
        });
        break;
      }
      case "approval/asked": {
        F(g.run_id, {
          index: ++A,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          markerKind: "approval",
          text: String(m.tool_name ?? "?"),
          timeSeconds: 0,
          startedAt: ge(g.t) ?? 0,
          isError: !1,
          running: !1,
          raw: [g]
        });
        break;
      }
      case "approval/decided": {
        const S = String(m.decision ?? "?"), _ = m.tool_name ? String(m.tool_name) : "";
        F(g.run_id, {
          index: ++A,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          markerKind: "approval",
          text: _ ? `${_} → ${S}` : S,
          timeSeconds: 0,
          startedAt: ge(g.t) ?? 0,
          isError: S === "denied",
          running: !1,
          raw: [g]
        });
        break;
      }
      case "llm/header": {
        const S = typeof m.sha256 == "string" ? m.sha256 : "", _ = typeof m.prev_sha256 == "string" ? m.prev_sha256 : void 0, x = m.reason === "changed" ? "changed" : "initial", R = typeof m.system_prompt == "string" ? m.system_prompt : "", V = Array.isArray(m.tools) ? m.tools : [], L = Array.isArray(m.schemas) ? m.schemas : void 0;
        if (F(g.run_id, {
          index: ++A,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          markerKind: "header",
          text: x === "initial" ? `⚙ ${R ? `System Prompt (${R.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: ge(g.t) ?? 0,
          isError: !1,
          running: !1,
          prompt: R,
          prevPrompt: f.get(_ ?? ""),
          headerTools: V,
          headerReason: x,
          sha: S,
          prevSha: _,
          schemas: L,
          raw: [g]
        }), S && f.set(S, R), Array.isArray(L)) {
          E.clear();
          for (const X of L) {
            const se = Xs(X);
            se && E.set(se, X);
          }
        }
        R && (u = qs(R));
        break;
      }
      case "llm/call": {
        const S = Tt(g), _ = S.options && typeof S.options == "object" && Object.keys(S.options).length > 0 ? S.options : void 0, x = S.messages_meta, R = x && typeof x == "object" ? {
          count: typeof x.count == "number" ? x.count : 0,
          totalChars: typeof x.total_chars == "number" ? x.total_chars : 0,
          charsByRole: cn(x.chars_by_role) ? x.chars_by_role : {},
          countByRole: cn(x.count_by_role) ? x.count_by_role : {},
          maxToolChars: typeof x.max_tool_chars == "number" ? x.max_tool_chars : 0
        } : void 0, V = Vs(S.messages_new);
        let L;
        if (S.context_reset === !0) {
          const te = (V ?? []).map(
            (de) => ({
              role: de.role,
              chars: de.chars,
              text: de.text
            })
          );
          let ee;
          O.length > 0 || te.length === 0 ? ee = O : ee = P.map((de) => ({
            role: de.role,
            text: de.text
          })), L = Il(ee, te), R && (L.afterChars = R.totalChars);
        }
        if (V) {
          const te = V.map((ee) => ({
            role: ee.role,
            chars: ee.chars,
            text: ee.text
          }));
          S.context_reset === !0 ? O = te : S.tail_update === !0 ? O = [...O.slice(0, -1), ...te] : typeof S.messages_count == "number" && V.length >= S.messages_count && O.length > 0 ? O = te : O = [...O, ...te];
        }
        P = Array.isArray(S.messages) ? S.messages.map((te) => ({
          role: te.role,
          text: te.text
        })) : [];
        const X = {
          index: ++A,
          runIndex: 0,
          runId: g.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: ge(g.t) ?? 0,
          isError: !1,
          running: !0,
          model: String(S.model ?? "unknown"),
          provider: typeof S.provider == "string" && S.provider ? S.provider : void 0,
          messagesMeta: R,
          inputNew: V,
          contextReset: S.context_reset === !0,
          resetDetail: L,
          options: _
        };
        F(g.run_id, X);
        const se = l.get(g.run_id) ?? [];
        se.push({ cell: X, callData: S, call: g }), l.set(g.run_id, se);
        break;
      }
      case "llm/api_request": {
        const S = l.get(g.run_id), _ = S && S.length > 0 ? S[S.length - 1].cell : s.get(g.run_id);
        if (_) {
          const x = Array.isArray(m.messages) ? m.messages : [];
          _.apiPayload = {
            model: String(m.model ?? "unknown"),
            messages: x.map((R) => ({
              role: String(R.role ?? "?"),
              // Provider formatters may leave the block array as a
              // JSON string — decode it into readable text.
              content: Cl(
                typeof R.content == "string" ? R.content : JSON.stringify(R.content ?? "")
              ),
              toolCallId: typeof R.tool_call_id == "string" ? R.tool_call_id : void 0
            })),
            params: m.params && typeof m.params == "object" ? m.params : void 0,
            durationMs: typeof m.duration_ms == "number" ? m.duration_ms : void 0
          }, _.raw = [
            ..._.raw ?? [],
            g
          ];
        }
        break;
      }
      case "llm/api_response": {
        const S = s.get(g.run_id);
        S && S.apiPayload && (m.usage && typeof m.usage == "object" && (S.apiPayload.usage = m.usage), typeof m.duration_ms == "number" && (S.apiPayload.durationMs = m.duration_ms));
        break;
      }
      case "llm/result": {
        const S = l.get(g.run_id), _ = S == null ? void 0 : S.shift(), x = (_ == null ? void 0 : _.callData) ?? {}, R = typeof m.duration_ms == "number" ? m.duration_ms : null, V = m.usage ?? void 0, L = m.timing, X = Array.isArray(m.tool_calls) ? m.tool_calls : void 0, ee = {
          text: (m.error ? Ce(String(m.error)) : Ce(String(m.text ?? ""))) || (X && X.length > 0 ? `🛠 ${X.map((de) => de.name).join(", ")}` : ""),
          timeSeconds: R === null ? null : R / 1e3,
          isError: !!m.error,
          running: !1,
          outputText: m.text ? String(m.text) : void 0,
          thinkingText: m.thinking ? String(m.thinking) : void 0,
          usage: V,
          timing: L,
          toolCalls: X,
          note: m.note ? String(m.note) : void 0
        };
        _ ? (Object.assign(_.cell, ee), s.set(g.run_id, _.cell), _.cell.model = String(
          m.model ?? x.model ?? _.cell.model
        ), _.cell.raw = [
          ..._.call ? [_.call] : [],
          g
        ]) : F(g.run_id, {
          index: ++A,
          runIndex: 0,
          runId: g.run_id,
          kind: "message",
          startedAt: ge(g.t) ?? 0,
          model: String(m.model ?? x.model ?? "unknown"),
          ...ee
        });
        break;
      }
      case "tool/call": {
        const S = Tt(g), _ = String(S.name ?? "?"), x = _ === "Skill" ? Gs(S.input) : void 0;
        if (x) {
          v.add(x), $.push([x, "load"]);
          const ce = D.onSkillLoad(
            x,
            g.seq,
            ge(g.t) ?? 0
          ), be = t.get(g.run_id);
          be && T.set(ce, be);
        }
        const R = S.input ? String(S.input) : void 0;
        let V;
        if (!x && R) {
          const ce = typeof S.skill_resource == "string" ? S.skill_resource : void 0;
          ce && (V = ce);
        }
        if (!x && !V && R && u.length > 0) {
          const ce = Un(R);
          for (const [be, Be] of u)
            if (ce.includes(be)) {
              V = Be;
              break;
            }
        }
        let L, X;
        if (!x && !V && R && M.size > 0) {
          const ce = wl(R, M);
          ce && (L = ce.skill, X = ce.feature);
        }
        let se, te;
        if (!x && !V && !L && $.length > 0) {
          const [ce, be] = $[$.length - 1];
          se = ce, te = be;
        }
        const ee = D.onToolCall({
          attribution: V ? { skill: V, kind: "path", detail: "skill dir in input" } : L ? {
            skill: L,
            kind: "content",
            detail: `“${X}” in input (skill doc)`
          } : se ? {
            skill: se,
            kind: "temporal",
            detail: te === "slash" ? "after slash invocation" : "after skill load"
          } : null,
          recordIndex: A + 1,
          seq: g.seq,
          t: ge(g.t) ?? 0
        });
        if (ee && !T.has(ee)) {
          const ce = t.get(g.run_id);
          ce && T.set(ee, ce);
        }
        const de = {
          index: ++A,
          runIndex: 0,
          runId: g.run_id,
          kind: "tool",
          text: x ? `📚 ${x}` : `${_}(${Ce(String(S.input ?? ""), 60)})`,
          timeSeconds: null,
          startedAt: ge(g.t) ?? 0,
          isError: !1,
          running: !0,
          toolName: _,
          skillName: x,
          inSkill: V,
          inSkillLoaded: V ? v.has(V) : void 0,
          guidedSkill: se ?? L,
          guidedReason: te ?? (L ? "load" : void 0),
          skillSpanId: ee ?? void 0,
          toolInput: S.input ? String(S.input) : void 0,
          toolSchema: E.get(_)
        };
        F(g.run_id, de);
        const Ie = i.get(g.run_id) ?? [];
        Ie.push({ cell: de, callData: S, call: g }), i.set(g.run_id, Ie);
        break;
      }
      case "tool/result": {
        const S = i.get(g.run_id), _ = typeof m.tool_call_id == "string" ? m.tool_call_id : null;
        let x;
        if (S) {
          const te = _ ? S.findIndex(
            (ee) => ee.callData.tool_call_id === _
          ) : -1;
          te >= 0 ? x = S.splice(te, 1)[0] : x = S.shift();
        }
        const R = typeof m.duration_ms == "number" ? m.duration_ms : null, V = m.ok !== !1 && !m.error, L = m.output ? String(m.output) : void 0, X = L ? ` → ${Ce(L, 60)}` : "", se = {
          timeSeconds: R === null ? null : R / 1e3,
          isError: !V,
          running: !1,
          toolOutput: L,
          toolOutputChars: typeof m.output_chars == "number" ? m.output_chars : void 0,
          toolOutputBytes: typeof m.output_bytes == "number" ? m.output_bytes : void 0,
          toolError: m.error ? String(m.error) : void 0,
          note: m.note ? String(m.note) : void 0
        };
        if (x) {
          if (Object.assign(x.cell, se), !x.cell.skillName)
            x.cell.text = `${x.cell.text}${X}`;
          else if (L) {
            const te = typeof m.skill_sha == "string" ? m.skill_sha : null;
            te && k.get(x.cell.skillName) === te || (M.set(
              x.cell.skillName,
              kl(L)
            ), te && k.set(x.cell.skillName, te));
          }
          x.cell.raw = [
            ...x.call ? [x.call] : [],
            g
          ];
        } else
          F(g.run_id, {
            index: ++A,
            runIndex: 0,
            runId: g.run_id,
            kind: "tool",
            text: `?${X}`,
            startedAt: ge(g.t) ?? 0,
            ...se
          });
        break;
      }
    }
  }
  for (const [g, m] of a) {
    const S = t.get(g);
    if (S) {
      for (const _ of m) N(S).push(_);
      a.delete(g);
    }
  }
  for (const g of n) {
    const m = [];
    for (const S of g.groups)
      for (const _ of S.cells)
        _.skillName && !m.includes(_.skillName) && m.push(_.skillName);
    m.length > 0 && (g.skillsUsed = m);
  }
  const he = D.spans(), ae = new Set(he.map((g) => g.skill)).size, re = /* @__PURE__ */ new Map();
  for (const g of n)
    for (const m of g.groups)
      for (const S of m.cells) re.set(S.index, S);
  for (const g of he) {
    const m = T.get(g.id);
    m && (m.skillSpans ?? (m.skillSpans = [])).push(g);
    for (const S of g.attributedIndexes) {
      const _ = re.get(S);
      _ && (_.skillSpanId = g.id, _.skillSpanHue = ae > 1 ? g.colorHue : void 0, _.skillSpanBypass = g.bypass);
    }
  }
  return n;
}
function dn(e) {
  return e.flatMap((n) => n.groups.flatMap((t) => t.cells));
}
function Qs(e) {
  var a;
  if (e.length === 0) return { initial: null, turns: [...e] };
  const n = e[0], t = ((a = n.groups[0]) == null ? void 0 : a.cells) ?? [], l = t.findIndex(
    (c) => c.kind === "system" && c.headerReason === "initial" && c.prompt !== void 0
  );
  if (l < 0) return { initial: null, turns: [...e] };
  const s = t[l], i = {
    ...n,
    groups: [
      {
        ...n.groups[0],
        cells: t.filter((c, h) => h !== l)
      }
    ]
  };
  return { initial: s, turns: [i, ...e.slice(1)] };
}
const ye = {
  root: "at-tl-root",
  plot: "at-tl-plot",
  labels: "at-tl-labels",
  track: "at-tl-track",
  earlierHistory: "at-tl-earlier-history",
  empty: "at-tl-empty",
  lanes: "at-tl-lanes",
  turnBoundaries: "at-tl-turn-boundaries",
  turnBoundary: "at-tl-turn-boundary",
  span: "at-tl-span",
  selection: "at-tl-selection",
  selectionEdges: "at-tl-selection-edges",
  hoverLine: "at-tl-hover-line"
}, pn = "agent-trace-timeline-styles", Ys = `
.at-tl-root {
  --at-border-l1: rgba(128, 128, 128, 0.18);
  --at-border-l2: rgba(128, 128, 128, 0.28);
  --at-bg-l1: rgba(255, 255, 255, 0.92);
  --at-bg-l2: rgba(0, 0, 0, 0.025);
  --at-label-caption: rgba(128, 128, 128, 0.95);
  --at-label-secondary: rgba(128, 128, 128, 1);
  --at-primary: #1677ff;
  --at-success: #52c41a;
  --at-warn: #faad14;
  --at-error: #ff4d4f;
  --at-decode: color-mix(in srgb, #722ed1 60%, #ff4d4f);
  --at-ttft: color-mix(in srgb, var(--at-decode) 54%, var(--at-bg-l2));

  position: relative;
  z-index: 1;
  isolation: isolate;
  flex: none;
  border-bottom: 1px solid var(--at-border-l2);
  user-select: none;
  font-size: 12px;
}

@media (prefers-color-scheme: dark) {
  .at-tl-root {
    --at-border-l1: rgba(200, 200, 200, 0.16);
    --at-border-l2: rgba(200, 200, 200, 0.24);
    --at-bg-l1: rgba(20, 20, 20, 0.92);
    --at-bg-l2: rgba(255, 255, 255, 0.045);
    --at-label-caption: rgba(180, 180, 180, 0.9);
    --at-label-secondary: rgba(190, 190, 190, 1);
    --at-primary: #3c89e8;
  }
}

/* Host-driven dark mode (Console theme toggle) — overrides the OS
   media query when the plugin host reports its own theme. */
.at-tl-root[data-theme="dark"] {
  --at-border-l1: rgba(200, 200, 200, 0.16);
  --at-border-l2: rgba(200, 200, 200, 0.24);
  --at-bg-l1: rgba(20, 20, 20, 0.92);
  --at-bg-l2: rgba(255, 255, 255, 0.045);
  --at-label-caption: rgba(180, 180, 180, 0.9);
  --at-label-secondary: rgba(190, 190, 190, 1);
  --at-primary: #3c89e8;
}

/* Ledger row hover affordance */
.at-ledger-row:hover {
  background: rgba(22, 119, 255, 0.05);
}

.at-tl-plot {
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  height: 50px;
  overflow: hidden;
  background: var(--at-bg-l2);
}

.at-tl-labels {
  position: relative;
  border-right: 1px solid var(--at-border-l1);
  color: var(--at-label-caption);
  font-size: 10px;
  line-height: 1;
}

.at-tl-labels span {
  position: absolute;
  right: 3px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 8px;
  text-align: right;
}

.at-tl-labels span:nth-child(1) { top: 7px; }
.at-tl-labels span:nth-child(2) { top: 21px; }
.at-tl-labels span:nth-child(3) { top: 35px; }

.at-tl-track {
  position: relative;
  overflow: hidden;
  cursor: crosshair;
  touch-action: none;
}

.at-tl-track[data-panning='true'] {
  cursor: grabbing;
}

.at-tl-track:focus-visible {
  outline: 1px solid var(--at-primary);
  outline-offset: -1px;
}

.at-tl-earlier-history {
  position: absolute;
  z-index: 5;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  width: 28px;
  align-items: center;
  justify-content: flex-start;
  appearance: none;
  box-sizing: border-box;
  padding-left: 3px;
  border: 0;
  outline: none;
  background: linear-gradient(
    to right,
    var(--at-bg-l2) 0,
    var(--at-bg-l2) 38%,
    transparent 100%
  );
  color: var(--at-label-secondary);
  font-size: 13px;
  line-height: 1;
  opacity: 0.72;
  cursor: pointer;
}

.at-tl-earlier-history:hover { opacity: 1; }
.at-tl-earlier-history[aria-disabled='true'] { cursor: default; }
.at-tl-earlier-history:focus-visible {
  box-shadow: inset 0 0 0 1px var(--at-border-l2);
}

.at-tl-empty {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--at-label-caption);
  font-size: 12px;
}

.at-tl-lanes {
  position: absolute;
  z-index: 2;
  top: 7px;
  bottom: 7px;
  left: var(--trajectory-domain-left);
  width: var(--trajectory-domain-width);
}

.at-tl-turn-boundaries {
  position: absolute;
  z-index: 3;
  top: 0;
  bottom: 0;
  left: var(--trajectory-domain-left);
  width: var(--trajectory-domain-width);
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .at-tl-lanes[data-animate-viewport='true'],
  .at-tl-turn-boundaries[data-animate-viewport='true'] {
    transition: left 180ms ease-out;
  }
}

.at-tl-turn-boundary {
  position: absolute;
  top: 0;
  bottom: 0;
  left: var(--trajectory-turn-left);
  width: 1px;
  background: var(--at-border-l2);
}

.at-tl-span {
  position: absolute;
  top: calc(var(--trajectory-span-lane) * 14px);
  left: calc(var(--trajectory-span-left) + var(--trajectory-span-gap));
  width: max(
    2px,
    calc(
      var(--trajectory-span-width)
      - var(--trajectory-span-gap)
      - var(--trajectory-span-gap)
    )
  );
  height: 8px;
  min-width: 2px;
  border-radius: 1px;
  background: var(--at-label-secondary);
  opacity: 0.78;
}

.at-tl-span[data-timeline-span='user'] {
  background: var(--at-primary);
}

.at-tl-span[data-timeline-span='system'] {
  background: var(--at-success);
}

.at-tl-span[data-timeline-span='message'] {
  --trajectory-assistant-decoding-color: var(--at-decode);
  --trajectory-assistant-ttft-color: var(--at-ttft);
  background: var(--trajectory-assistant-decoding-color);
  opacity: 1;
}

.at-tl-span[data-timeline-span='message'][data-assistant-timing='true'] {
  background: linear-gradient(
    to right,
    var(--trajectory-assistant-ttft-color) 0,
    var(--trajectory-assistant-ttft-color) var(--trajectory-assistant-ttft),
    var(--trajectory-assistant-decoding-color) var(--trajectory-assistant-ttft),
    var(--trajectory-assistant-decoding-color) 100%
  );
}

.at-tl-span[data-timeline-span='tool'] {
  background: var(--at-warn);
  opacity: 1;
}

.at-tl-span[data-error='true'] {
  background: var(--at-error);
}

.at-tl-span[data-equal-duration='true'] {
  width: 8px;
  min-width: 8px;
}

.at-tl-span[data-selected='false'] {
  opacity: 0.2;
}

.at-tl-span[data-hovered='true']:not([data-current='true']) {
  z-index: 1;
  opacity: 1;
  box-shadow:
    0 0 0 1px var(--at-bg-l2),
    0 0 0 2px color-mix(in srgb, var(--at-primary) 80%, transparent);
}

.at-tl-span[data-current='true'] {
  z-index: 1;
  opacity: 1;
  box-shadow:
    0 0 0 1px var(--at-bg-l2),
    0 0 0 2px var(--at-primary);
}

.at-tl-span[data-search-match='false'] {
  opacity: 0.14;
}

.at-tl-selection {
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: var(--trajectory-selection-left);
  width: var(--trajectory-selection-width);
  min-width: 1px;
  background: color-mix(in srgb, var(--at-primary) 12%, transparent);
  box-shadow:
    -100vw 0 0 100vw color-mix(in srgb, var(--at-bg-l1) 58%, transparent),
    100vw 0 0 100vw color-mix(in srgb, var(--at-bg-l1) 58%, transparent);
  pointer-events: none;
}

.at-tl-selection-edges {
  position: absolute;
  z-index: 4;
  top: 0;
  bottom: 0;
  left: var(--trajectory-selection-left);
  width: var(--trajectory-selection-width);
  min-width: 1px;
  pointer-events: none;
}

.at-tl-selection-edges::before,
.at-tl-selection-edges::after {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--at-primary);
  content: '';
}

.at-tl-selection-edges::before { left: 0; }
.at-tl-selection-edges::after { right: 0; }

.at-tl-selection-edges[data-dragging='true']::before,
.at-tl-selection-edges[data-dragging='true']::after {
  width: 2px;
}

.at-tl-selection[data-dragging='true'] {
  background: color-mix(in srgb, var(--at-primary) 18%, transparent);
}

.at-tl-hover-line {
  position: absolute;
  z-index: 4;
  top: 0;
  bottom: 0;
  left: clamp(
    0px,
    calc(var(--trajectory-hover-left) - 1px),
    calc(100% - 2px)
  );
  width: 2px;
  background: var(--at-primary);
  pointer-events: none;
}
`;
let _t = !1;
function Zs() {
  if (_t || typeof document > "u") return;
  if (document.getElementById(pn)) {
    _t = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = pn, e.textContent = Ys, document.head.appendChild(e), _t = !0;
}
function It(e) {
  return Ml(e);
}
function Wn(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function hn(e) {
  return e != null && Number.isFinite(e);
}
function Kn(e) {
  if (!hn(e.startedAt)) return null;
  const n = hn(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + n };
}
function Vn(e, n = "sequence") {
  if (n !== "sequence")
    return eo(
      e,
      n === "duration" || n === "actual",
      n === "duration"
    );
  const t = [], l = [];
  for (const s of e) {
    const i = s.groups.flatMap((a) => a.cells);
    i.length !== 0 && (s.turn !== null && l.push({
      turn: s.turn,
      time: t.length
    }), t.push(
      ...i.map(
        (a, c) => ({
          start: t.length + c,
          end: t.length + c + 1,
          index: a.index,
          isError: a.isError === !0,
          kind: a.kind,
          label: a.text,
          lane: Wn(a.kind)
        })
      )
    ));
  }
  return t.length === 0 ? null : {
    start: 0,
    end: t.length,
    spans: t,
    turnBoundaries: l
  };
}
function eo(e, n, t) {
  const l = e.flatMap((o) => {
    const f = o.groups.flatMap(
      (E) => E.cells.flatMap((u) => {
        const v = Kn(u);
        return v === null ? [] : [
          {
            ...v,
            index: u.index,
            isError: u.isError === !0,
            kind: u.kind,
            label: u.text,
            lane: Wn(u.kind)
          }
        ];
      })
    );
    return f.length === 0 ? [] : [{ turn: o.turn, rawSpans: f }];
  }), s = l.flatMap((o) => o.rawSpans);
  if (s.length === 0) return null;
  const i = /* @__PURE__ */ new Map();
  let a = 0, c = null;
  for (const o of [...s].sort(
    (f, E) => f.start - E.start || f.end - E.end
  ))
    t && c !== null && o.start > c && (a += o.start - c), i.set(o, a), c = c === null ? o.end : Math.max(c, o.end);
  const h = [], y = [];
  for (const o of l) {
    const f = o.rawSpans.map((E) => {
      const u = i.get(E) ?? 0;
      return {
        ...E,
        start: E.start - u,
        end: (n ? E.end : E.start) - u
      };
    });
    h.push(...f), o.turn !== null && y.push({
      turn: o.turn,
      time: Math.min(...f.map((E) => E.start))
    });
  }
  return {
    start: Math.min(...h.map((o) => o.start)),
    end: Math.max(...h.map((o) => o.end)),
    spans: h,
    turnBoundaries: y
  };
}
function to(e, n = "sequence") {
  const t = (c) => c.skillSpans ?? [];
  if (e.every((c) => t(c).length === 0)) return null;
  if (n === "sequence") {
    const c = /* @__PURE__ */ new Map();
    let h = 0;
    for (const o of e)
      for (const f of o.groups.flatMap((E) => E.cells))
        c.set(f.index, h), h += 1;
    const y = [];
    for (const o of e)
      for (const f of t(o)) {
        const E = f.attributedIndexes.map(($) => c.get($)).filter(($) => $ !== void 0);
        let u = E.length ? Math.min(...E) : void 0;
        if (u === void 0) {
          const $ = o.groups.flatMap((D) => D.cells).find(
            (D) => D.kind !== "system" && D.skillName === f.skill
          );
          u = $ ? c.get($.index) : void 0;
        }
        if (u === void 0) continue;
        const v = E.length ? Math.max(...E) : u;
        y.push(fn(f, u, v + 1));
      }
    return y;
  }
  const l = e.flatMap(
    (c) => c.groups.flatMap(
      (h) => h.cells.flatMap((y) => {
        const o = Kn(y);
        return o === null ? [] : [o];
      })
    )
  );
  l.sort((c, h) => c.start - h.start || c.end - h.end);
  const s = n === "duration", i = (c) => {
    let h = 0, y = null;
    for (const o of l) {
      if (o.start >= c) break;
      if (s && y !== null && o.start > y) {
        const f = Math.min(o.start, c);
        f > y && (h += f - y);
      }
      y = y === null ? o.end : Math.max(y, o.end);
    }
    return h;
  }, a = [];
  for (const c of e)
    for (const h of t(c)) {
      const y = h.startT, o = Math.max(vl(h), y + 1), f = i(y), E = i(o);
      a.push(
        fn(
          h,
          y - f,
          Math.max(y - f + 1, o - E)
        )
      );
    }
  return a;
}
function fn(e, n, t) {
  return {
    spanId: e.id,
    skill: e.skill,
    hue: e.colorHue,
    bypass: e.bypass,
    trigger: e.trigger,
    open: e.endKind === null,
    start: n,
    end: t
  };
}
function no(e, n, t = "sequence") {
  const l = Vn(e, t);
  return new Set(
    l == null ? void 0 : l.spans.filter((s) => s.start <= n.end && s.end >= n.start).map((s) => s.index)
  );
}
Zs();
const ct = window.QwenPaw.host, q = ct.React, { useEffect: Ye, useMemo: Ct, useRef: Ze, useState: Ae } = q, { Tooltip: Gn } = ct.antd, Mt = 3, lo = 4, so = 0.08, oo = 0.025, io = 32, ro = 0.5;
function ao(e) {
  const n = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, l = e.timing, s = l && Number.isFinite(l.ttft_ms) ? l.ttft_ms : void 0, i = l && Number.isFinite(l.decode_ms) ? l.decode_ms : void 0;
  return {
    ...n === void 0 ? {} : { durationMs: n },
    ...t === void 0 ? {} : { startedAt: t },
    ...s === void 0 || i === void 0 ? {} : { ttftMs: s, decodingMs: i }
  };
}
function co(e) {
  switch (e) {
    case "system":
      return "SYSTEM";
    case "user":
      return "USER";
    case "message":
      return "ASSISTANT";
    case "tool":
      return "TOOL";
  }
}
function uo(e, n) {
  const t = co(e);
  if (n === void 0) return t;
  const l = n.durationMs === void 0 ? null : `Total ${It(n.durationMs)}`, s = n.startedAt === void 0 ? null : n.durationMs === void 0 ? `Started ${_e(n.startedAt)}` : `${_e(n.startedAt)} → ${_e(
    n.startedAt + n.durationMs
  )}`, i = n.ttftMs === void 0 || n.decodingMs === void 0 ? null : `TTFT ${It(
    n.ttftMs
  )} · Decoding ${It(n.decodingMs)}`, a = [l, i].filter((c) => c !== null).join(" · ");
  return [t, s, a].filter((c) => c !== null && c !== "").join(`
`);
}
function Nt(e, n) {
  return e <= n ? { start: e, end: n } : { start: n, end: e };
}
function $t(e) {
  return Math.min(1, Math.max(0, e));
}
function po(e, n, t, l) {
  const s = Math.min(l - t, Math.max(0, n)), i = Math.min(
    Math.max(e - s / 2, t),
    l - s
  );
  return { start: i, end: i + s };
}
function mn(e, n, t, l, s) {
  const i = Nt(
    Math.min(s, Math.max(l, e.start)),
    Math.min(s, Math.max(l, e.end))
  );
  return {
    start: (i.start - n) / t,
    end: (i.end - n) / t
  };
}
function Xn({
  label: e,
  placement: n,
  children: t,
  ...l
}) {
  return /* @__PURE__ */ q.createElement(
    Gn,
    {
      title: /* @__PURE__ */ q.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: n,
      mouseEnterDelay: ro,
      ...l
    },
    t
  );
}
function gn() {
  return /* @__PURE__ */ q.createElement("div", { className: ye.labels, "aria-hidden": "true" }, /* @__PURE__ */ q.createElement("span", null, "Input"), /* @__PURE__ */ q.createElement("span", null, "Model"), /* @__PURE__ */ q.createElement("span", null, "Tools"));
}
function yn({
  loading: e,
  onHover: n,
  onLoad: t
}) {
  return /* @__PURE__ */ q.createElement(
    Xn,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ q.createElement(
      "button",
      {
        type: "button",
        className: ye.earlierHistory,
        "data-earlier-history": !0,
        "data-loading": e || void 0,
        "aria-label": e ? "Loading earlier history" : "Load earlier history",
        "aria-disabled": e || t === void 0,
        onClick: t,
        onPointerEnter: (l) => {
          l.stopPropagation(), n();
        },
        onPointerMove: (l) => {
          l.stopPropagation();
        },
        onPointerDown: (l) => {
          l.stopPropagation();
        }
      },
      "…"
    )
  );
}
const ho = q.memo(function({
  turns: n,
  mode: t,
  range: l,
  hasEarlierRecords: s = !1,
  onLoadEarlier: i,
  selectedIndex: a = null,
  searchMatchIndexes: c = null,
  onRangeChange: h,
  onRecordSelect: y,
  onRecordFocus: o,
  onSkillSpanSelect: f
}) {
  const E = typeof ct.useTheme == "function" ? ct.useTheme() : void 0, u = Ct(
    () => Vn(n, t),
    [t, n]
  ), v = Ct(
    () => to(n, t),
    [t, n]
  ), $ = Ct(
    () => new Map(
      n.flatMap(
        (p) => p.groups.flatMap(
          (w) => w.cells.map(
            (b) => [b.index, ao(b)]
          )
        )
      )
    ),
    [n]
  ), D = Ze(null), T = Ze(null), M = Ze(null), k = Ze(null), [O, P] = Ae(null), [A, C] = Ae(null), [N, Z] = Ae(null), [F, le] = Ae(!1), [he, ae] = Ae(!1), [re, Y] = Ae(null), [Te, g] = Ae(!1);
  Ye(() => {
    u !== null && l !== null && (l.end < u.start || l.start > u.end) && h(null);
  }, [u, h, l]), Ye(() => {
    u !== null && (g(!1), Y(
      (p) => p !== null && (p.end < u.start || p.start > u.end) ? null : p
    ));
  }, [u]), Ye(() => {
    if (u === null || a === null) return;
    const p = u.spans.find(
      (w) => w.index === a
    );
    p !== void 0 && (g(!0), Y((w) => {
      if (w === null || p.end > w.start && p.start < w.end)
        return w;
      const b = Math.max(1, w.end - w.start), H = p.end <= w.start ? p.start : p.end - b, G = Math.min(
        Math.max(H, u.start),
        Math.max(u.start, u.end - b)
      );
      return G === w.start ? w : { start: G, end: G + b };
    }));
  }, [u, a]);
  const m = Math.max(1, ((u == null ? void 0 : u.end) ?? 0) - ((u == null ? void 0 : u.start) ?? 0)), S = Math.min(
    m,
    Math.max(1, ((re == null ? void 0 : re.end) ?? 0) - ((re == null ? void 0 : re.start) ?? 0))
  ), _ = u === null || re === null ? (u == null ? void 0 : u.start) ?? 0 : Math.min(
    Math.max(re.start, u.start),
    u.end - S
  ), x = re === null ? m : S, R = re === null ? (u == null ? void 0 : u.start) ?? 0 : _, V = s && u !== null && R === u.start, L = i === void 0 || F ? void 0 : () => {
    le(!0), i().finally(() => {
      le(!1);
    });
  }, X = u === null ? void 0 : {
    "--trajectory-domain-left": `${-(R - u.start) / x * 100}%`,
    "--trajectory-domain-width": `${m / x * 100}%`
  }, se = u === null || l === null ? null : mn(
    l,
    R,
    x,
    u.start,
    u.end
  ), ee = (u === null || O === null ? null : mn(
    O,
    R,
    x,
    u.start,
    u.end
  )) ?? se, de = O ?? l;
  if (Ye(() => {
    const p = M.current;
    if (p === null) return;
    const w = (b) => {
      b.preventDefault();
      const H = k.current;
      if (H === null || u === null) return;
      g(!1);
      const G = H.getBoundingClientRect(), Q = $t(
        (b.clientX - G.left) / Math.max(1, G.width)
      ), K = Math.min(
        m,
        Math.max(
          Math.min(
            t === "sequence" ? lo : 20,
            m
          ),
          x * Math.exp(b.deltaY * 15e-4)
        )
      );
      if (K >= m * 0.999) {
        Y(null);
        return;
      }
      const oe = R + Q * x, me = Math.min(
        Math.max(oe - Q * K, u.start),
        u.end - K
      );
      Y({ start: me, end: me + K });
    };
    return p.addEventListener("wheel", w, { passive: !1 }), () => {
      p.removeEventListener("wheel", w);
    };
  }, [x, R, m, t, u]), u === null)
    return /* @__PURE__ */ q.createElement(
      "section",
      {
        ref: M,
        className: ye.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ q.createElement("div", { className: ye.plot }, /* @__PURE__ */ q.createElement(gn, null), /* @__PURE__ */ q.createElement("div", { className: ye.track }, /* @__PURE__ */ q.createElement("span", { className: ye.empty }, "No timing data"), s && /* @__PURE__ */ q.createElement(
        yn,
        {
          loading: F,
          onHover: () => {
            C(null);
          },
          onLoad: L
        }
      )))
    );
  const Ie = Math.min(
    x,
    m / u.spans.length
  ), ce = (p) => {
    const w = p.currentTarget.getBoundingClientRect();
    return $t((p.clientX - w.left) / Math.max(1, w.width));
  }, be = (p) => {
    var G;
    const w = p.target instanceof HTMLElement ? p.target : null, b = (G = w == null ? void 0 : w.closest("[data-timeline-record-index]")) == null ? void 0 : G.dataset.timelineRecordIndex;
    if (b === void 0) return null;
    const H = Number(b);
    return Number.isFinite(H) ? H : null;
  }, Be = (p) => {
    h(p);
  }, ht = (p) => {
    if (p.button === 2) {
      T.current = {
        anchorClientX: p.clientX,
        anchorStart: R,
        moved: !1,
        pannable: re !== null,
        pointerId: p.pointerId
      }, re !== null && g(!1), ae(!0), typeof p.currentTarget.setPointerCapture == "function" && p.currentTarget.setPointerCapture(p.pointerId);
      return;
    }
    if (p.button !== 0) return;
    const w = ce(p), b = R + w * x, H = be(p);
    C({ fraction: w, recordIndex: H }), D.current = {
      pointerId: p.pointerId,
      anchorTime: b,
      anchorClientX: p.clientX,
      recordIndex: H
    }, typeof p.currentTarget.setPointerCapture == "function" && p.currentTarget.setPointerCapture(p.pointerId), P({ start: b, end: b });
  }, ft = (p) => {
    const w = p.currentTarget.getBoundingClientRect(), b = ce(p);
    C({ fraction: b, recordIndex: be(p) });
    const H = T.current;
    if (H !== null && H.pointerId === p.pointerId) {
      if (Math.abs(p.clientX - H.anchorClientX) >= Mt && (H.moved = !0), !H.pannable) return;
      const oe = (p.clientX - H.anchorClientX) / Math.max(1, w.width), me = Math.min(
        Math.max(H.anchorStart - oe * x, u.start),
        u.end - x
      );
      Y({ start: me, end: me + x });
      return;
    }
    const G = D.current;
    if (G === null || G.pointerId !== p.pointerId) return;
    let Q = R;
    if (re !== null) {
      const oe = p.clientX - w.left, me = Math.min(
        io,
        Math.max(1, w.width * so)
      ), ue = oe < me ? -1 : oe > w.width - me ? 1 : 0;
      if (ue !== 0) {
        const Le = ue < 0 ? me - oe : oe - (w.width - me), xe = $t(Le / me), ke = R + ue * x * oo * Math.max(0.2, xe);
        Q = Math.min(
          Math.max(ke, u.start),
          u.end - x
        ), Q !== R && (g(!1), Y({
          start: Q,
          end: Q + x
        }));
      }
    }
    const K = Q + b * x;
    P(Nt(G.anchorTime, K));
  }, Xe = (p) => {
    const w = T.current;
    if (w !== null && w.pointerId === p.pointerId) {
      const ue = w.moved || Math.abs(p.clientX - w.anchorClientX) >= Mt;
      T.current = null, ae(!1), ue || h(null);
      return;
    }
    const b = D.current;
    if (b === null || b.pointerId !== p.pointerId) return;
    const H = ce(p), G = R + H * x, Q = Nt(b.anchorTime, G);
    C({ fraction: H, recordIndex: be(p) }), D.current = null, P(null);
    const K = Math.abs(p.clientX - b.anchorClientX) < Mt, oe = K && b.recordIndex !== null ? u.spans.find((ue) => ue.index === b.recordIndex) : void 0;
    if (oe !== void 0) {
      h(null), y == null || y(oe.index);
      return;
    }
    const me = Q.end - Q.start < Ie ? po(
      K ? Q.start : (Q.start + Q.end) / 2,
      Ie,
      u.start,
      u.end
    ) : Q;
    if (Be(me), K) {
      const ue = Q.start, Le = u.spans.reduce((xe, ke) => {
        const Je = ue < xe.start ? xe.start - ue : ue > xe.end ? ue - xe.end : 0;
        return (ue < ke.start ? ke.start - ue : ue > ke.end ? ue - ke.end : 0) < Je ? ke : xe;
      });
      o == null || o(Le.index);
    }
  }, qe = (p) => {
    p.key !== "Escape" || l === null || (p.preventDefault(), h(null));
  }, mt = () => {
    D.current = null, T.current = null, P(null), C(null), ae(!1);
  };
  return /* @__PURE__ */ q.createElement(
    "section",
    {
      ref: M,
      className: ye.root,
      "data-theme": E || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ q.createElement("div", { className: ye.plot }, /* @__PURE__ */ q.createElement(gn, null), /* @__PURE__ */ q.createElement(
      "div",
      {
        ref: k,
        className: ye.track,
        "data-panning": he || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: qe,
        onPointerDown: ht,
        onPointerMove: ft,
        onPointerUp: Xe,
        onPointerCancel: mt,
        onPointerLeave: () => {
          D.current === null && T.current === null && C(null);
        },
        onDoubleClick: (p) => {
          p.preventDefault(), h(null);
        },
        onContextMenu: (p) => {
          p.preventDefault();
        }
      },
      V && /* @__PURE__ */ q.createElement(
        yn,
        {
          loading: F,
          onHover: () => {
            C(null);
          },
          onLoad: L
        }
      ),
      A !== null && A.recordIndex === null && O === null && /* @__PURE__ */ q.createElement(
        "div",
        {
          className: ye.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${A.fraction * 100}%`
          }
        }
      ),
      ee !== null && /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(
        "div",
        {
          className: ye.selection,
          "data-dragging": O === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ee.start * 100}%`,
            "--trajectory-selection-width": `${(ee.end - ee.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ q.createElement(
        "div",
        {
          className: ye.selectionEdges,
          "data-dragging": O === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ee.start * 100}%`,
            "--trajectory-selection-width": `${(ee.end - ee.start) * 100}%`
          }
        }
      )),
      v !== null && u !== null && /* @__PURE__ */ q.createElement(
        "div",
        {
          "aria-label": "Skill bands",
          style: {
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 2,
            height: 10,
            pointerEvents: "none",
            zIndex: 3
          }
        },
        v.map((p) => {
          const w = (p.start - u.start) / m, b = Math.max(
            (p.end - p.start) / m,
            4e-3
          ), H = ie(), G = `${p.bypass ? "⚠ " : ""}${p.skill} · ${p.trigger}${p.open ? ` · ${d(H, "spanOpen")}` : ""}`, Q = N === p.spanId, K = b > 0.14 && !p.bypass;
          return /* @__PURE__ */ q.createElement(Gn, { title: G, key: p.spanId }, /* @__PURE__ */ q.createElement(
            "span",
            {
              onPointerDown: (oe) => {
                oe.stopPropagation();
              },
              onClick: f ? (oe) => {
                oe.stopPropagation(), f(p.spanId);
              } : void 0,
              onMouseEnter: () => Z(p.spanId),
              onMouseLeave: () => Z(
                (oe) => oe === p.spanId ? null : oe
              ),
              style: {
                position: "absolute",
                left: `${Math.max(0, w) * 100}%`,
                width: `${b * 100}%`,
                top: 0,
                bottom: 0,
                borderRadius: 3,
                background: `hsla(${p.hue}, 65%, ${Q ? 62 : 55}%, ${Q ? 0.85 : 0.55})`,
                border: p.bypass ? "1px dashed rgba(250,140,22,0.9)" : `1px solid hsla(${p.hue}, 55%, 45%, 0.8)`,
                pointerEvents: f ? "auto" : "none",
                cursor: f ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }
            },
            K ? /* @__PURE__ */ q.createElement(
              "span",
              {
                style: {
                  fontSize: 9,
                  lineHeight: "10px",
                  color: "rgba(255,255,255,0.92)",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                  textShadow: "0 0 2px rgba(0,0,0,0.4)"
                }
              },
              p.skill
            ) : null
          ));
        })
      ),
      /* @__PURE__ */ q.createElement(
        "div",
        {
          className: ye.turnBoundaries,
          "data-animate-viewport": Te || void 0,
          "aria-hidden": "true",
          style: X
        },
        u.turnBoundaries.filter(
          (p) => p.time > u.start && p.time >= R && p.time <= R + x
        ).map((p) => /* @__PURE__ */ q.createElement(
          "span",
          {
            className: ye.turnBoundary,
            "data-turn": p.turn,
            key: p.turn,
            style: {
              "--trajectory-turn-left": `${(p.time - u.start) / m * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ q.createElement(
        "div",
        {
          className: ye.lanes,
          "data-animate-viewport": Te || void 0,
          "data-timeline-domain": !0,
          style: X
        },
        u.spans.filter(
          (p) => p.index === a || p.end >= R && p.start <= R + x
        ).map((p) => {
          const w = (p.start - u.start) / m, H = (p.end - p.start) / m * 100, G = $.get(p.index), Q = G == null ? void 0 : G.ttftMs, K = G == null ? void 0 : G.decodingMs, oe = Q === void 0 || K === void 0 || Q + K <= 0 ? null : Q / (Q + K);
          return /* @__PURE__ */ q.createElement(
            Xn,
            {
              key: p.index,
              label: uo(p.kind, G),
              placement: "bottom"
            },
            /* @__PURE__ */ q.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: ye.span,
                "data-timeline-span": p.kind,
                "data-timeline-record-index": p.index,
                "data-assistant-timing": oe === null ? void 0 : "true",
                "data-error": p.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": p.index === a || void 0,
                "data-hovered": (A == null ? void 0 : A.recordIndex) === p.index || void 0,
                "data-search-match": c === null ? void 0 : c.has(p.index) ? "true" : "false",
                "data-selected": de === null ? void 0 : p.start <= de.end && p.end >= de.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${w * 100}%`,
                  "--trajectory-span-width": `${H}%`,
                  "--trajectory-span-gap": `min(${H * 0.08}%, 1px)`,
                  "--trajectory-span-lane": p.lane,
                  ...oe === null ? {} : {
                    "--trajectory-assistant-ttft": `${oe * 100}%`
                  }
                }
              }
            )
          );
        })
      )
    ))
  );
}), jt = window.QwenPaw.host, ne = jt.React, { Button: fo, Input: mo, Popover: go, Segmented: yo, Tooltip: En } = jt.antd, {
  MenuFoldOutlined: Eo,
  MenuUnfoldOutlined: So,
  QuestionCircleOutlined: vo,
  ReloadOutlined: bo,
  SearchOutlined: xo
} = jt.antdIcons;
function ko({
  mode: e,
  onModeChange: n,
  search: t,
  onSearchChange: l,
  onRefresh: s,
  modeOptions: i,
  allCollapsed: a,
  hasRequests: c,
  onToggleCollapseAll: h,
  callsCollapsed: y,
  onToggleCallsCollapsed: o
}) {
  const f = ie();
  return /* @__PURE__ */ ne.createElement(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "6px 12px",
        borderBottom: "1px solid rgba(128,128,128,0.15)",
        flexWrap: "wrap"
      }
    },
    /* @__PURE__ */ ne.createElement(En, { title: d(f, "projectionHint") }, /* @__PURE__ */ ne.createElement(
      yo,
      {
        size: "small",
        value: e,
        options: i,
        onChange: (E) => n(E)
      }
    )),
    /* @__PURE__ */ ne.createElement(
      mo,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ ne.createElement(xo, null),
        placeholder: d(f, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (E) => l(E.target.value)
      }
    ),
    c && /* @__PURE__ */ ne.createElement(
      En,
      {
        title: a ? d(f, "expandAll") : d(f, "collapseAll")
      },
      /* @__PURE__ */ ne.createElement(
        fo,
        {
          size: "small",
          type: "text",
          icon: a ? /* @__PURE__ */ ne.createElement(So, null) : /* @__PURE__ */ ne.createElement(Eo, null),
          onClick: h
        }
      )
    ),
    /* @__PURE__ */ ne.createElement("span", { style: { marginLeft: "auto", display: "inline-flex", gap: 10 } }, /* @__PURE__ */ ne.createElement(
      go,
      {
        trigger: "click",
        placement: "bottomRight",
        content: /* @__PURE__ */ ne.createElement("div", { style: { maxWidth: 340, fontSize: 12, lineHeight: "20px" } }, /* @__PURE__ */ ne.createElement("div", null, /* @__PURE__ */ ne.createElement("strong", null, "📚"), " ", d(f, "legendLoad")), /* @__PURE__ */ ne.createElement("div", null, /* @__PURE__ */ ne.createElement("strong", null, "⚡"), " ", d(f, "legendResource")), /* @__PURE__ */ ne.createElement("div", null, /* @__PURE__ */ ne.createElement("strong", null, "∈"), " ", d(f, "legendGuided")), /* @__PURE__ */ ne.createElement("div", null, /* @__PURE__ */ ne.createElement("strong", null, d(f, "legendStripTitle")), " ", d(f, "legendStrip")), /* @__PURE__ */ ne.createElement("div", null, /* @__PURE__ */ ne.createElement("strong", null, d(f, "legendBandTitle")), " ", d(f, "legendBand")))
      },
      /* @__PURE__ */ ne.createElement("a", { style: { fontSize: 12, color: "rgba(128,128,128,1)" } }, /* @__PURE__ */ ne.createElement(vo, null), " ", d(f, "legendTitle"))
    ), /* @__PURE__ */ ne.createElement(
      "a",
      {
        onClick: s,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ ne.createElement(bo, null),
      " ",
      d(f, "refresh")
    ))
  );
}
const pt = window.QwenPaw.host, B = pt.React, { useCallback: Sn, useEffect: et, useMemo: we, useRef: wo, useState: Ee } = B, {
  Button: tt,
  Empty: vn,
  Popconfirm: To,
  Popover: _o,
  Space: Io,
  Spin: qn,
  Switch: Co,
  Tag: Mo,
  Tooltip: $o,
  message: Ke
} = pt.antd, { DeleteOutlined: zo, DownloadOutlined: Ao, SettingOutlined: bn } = pt.antdIcons, { Text: $e } = pt.antd.Typography;
function xn({
  config: e,
  onChange: n,
  children: t
}) {
  const l = ie(), s = (a, c, h) => /* @__PURE__ */ B.createElement(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
        padding: "4px 0"
      }
    },
    /* @__PURE__ */ B.createElement($e, { style: { fontSize: 13 } }, a),
    /* @__PURE__ */ B.createElement(
      Co,
      {
        size: "small",
        checked: !!c,
        onChange: (y) => n({ [h]: y })
      }
    )
  ), i = /* @__PURE__ */ B.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ B.createElement($e, { strong: !0, style: { fontSize: 13 } }, d(l, "settings")), /* @__PURE__ */ B.createElement("div", { style: { marginTop: 8 } }, e ? [
    s(d(l, "enabled"), e.enabled, "enabled"),
    s(d(l, "captureLlm"), e.capture_llm, "capture_llm"),
    s(
      d(l, "captureTools"),
      e.capture_tools,
      "capture_tools"
    ),
    s(
      d(l, "captureHeaders"),
      e.capture_headers ?? !0,
      "capture_headers"
    )
  ] : /* @__PURE__ */ B.createElement(qn, { size: "small" })));
  return /* @__PURE__ */ B.createElement(_o, { content: i, trigger: "click", placement: "bottomRight" }, t);
}
function Oo({
  sessionId: e,
  summary: n,
  locale: t,
  onJumpSession: l,
  onRefreshSessions: s
}) {
  const [i, a] = Ee(null), [c, h] = Ee(!1), [y, o] = Ee(!1), [f, E] = Ee(""), [u, v] = Ee("sequence"), [$, D] = Ee(null), [T, M] = Ee(null), [k, O] = Ee(null), [P, A] = Ee(null), [C, N] = Ee(
    /* @__PURE__ */ new Set()
  ), [Z, F] = Ee(!1), [le, he] = Ee(null), [ae, re] = Ee(null), [Y, Te] = Ee(null), [g, m] = Ee(null), S = wo(null);
  S.current = e, et(() => {
    ol().then(he).catch(() => he(null));
  }, []);
  const _ = Sn(async (p, w) => {
    w || h(!0);
    try {
      const b = await sl(p, {
        beforeSeq: w,
        limit: 200
      });
      m(null), a((H) => w && H ? {
        ...b,
        events: [...b.events, ...H.events]
      } : b);
    } catch (b) {
      m({
        message: String(b.message),
        status: b instanceof On ? b.status : null
      });
    } finally {
      w || h(!1);
    }
  }, []), x = Sn(async (p) => {
    try {
      const w = await ll(p);
      Te(w), re({
        sessionId: p,
        inputTokens: w.input_tokens,
        outputTokens: w.output_tokens,
        totalTokens: w.total_tokens,
        reasoningTokens: Number(w.reasoning_tokens ?? 0)
      });
    } catch {
      Te(null), re(null);
    }
  }, []);
  et(() => {
    e ? (D(null), M(null), O(null), N(/* @__PURE__ */ new Set()), E(""), _(e), x(e)) : (a(null), Te(null), re(null));
  }, [e, _, x]);
  const R = we(
    () => i ? Js(i.events) : [],
    [i]
  ), { initial: V, turns: L } = we(
    () => Qs(R),
    [R]
  ), X = we(
    () => V ? [V, ...dn(L)] : dn(L),
    [V, L]
  ), se = we(
    () => L.some((p) => p.status === "running"),
    [L]
  );
  et(() => {
    if (!e || !se) return;
    const p = setInterval(() => {
      document.visibilityState === "visible" && S.current && _(S.current);
    }, 5e3);
    return () => clearInterval(p);
  }, [e, se, _]);
  const te = we(
    () => $ === null ? null : no(L, $, u),
    [$, L, u]
  ), ee = we(() => {
    const p = f.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (p.length === 0) return null;
    const w = (b) => {
      var H, G, Q;
      return [
        b.text,
        b.outputText,
        b.thinkingText,
        b.toolName,
        b.toolInput,
        b.toolOutput,
        b.toolError,
        b.model,
        b.provider,
        b.marker,
        b.skillName,
        b.inSkill,
        b.guidedSkill,
        b.channel,
        (H = b.messages) == null ? void 0 : H.map((K) => `${K.role} ${K.text}`).join(`
`),
        (G = b.inputNew) == null ? void 0 : G.map((K) => `${K.role} ${K.text ?? ""}`).join(`
`),
        b.apiPayload ? [
          b.apiPayload.model,
          ...b.apiPayload.messages.map(
            (K) => `${K.role} ${K.content}`
          )
        ].join(`
`) : "",
        b.options ? JSON.stringify(b.options) : "",
        b.toolSchema ? JSON.stringify(b.toolSchema) : "",
        (Q = b.headerTools) == null ? void 0 : Q.join(" "),
        b.prompt ?? ""
      ].filter(Boolean).join(`
`).toLowerCase();
    };
    return new Set(
      X.filter((b) => {
        const H = w(b);
        return p.every((G) => H.includes(G));
      }).map((b) => b.index)
    );
  }, [f, X]), de = we(
    () => T === null ? null : X.find((p) => p.index === T) ?? null,
    [X, T]
  ), Ie = we(() => {
    var Ut, Wt;
    if (k === null) return null;
    const p = L.find((U) => U.turn === k);
    if (!p) return null;
    const w = ((Ut = p.groups[0]) == null ? void 0 : Ut.cells) ?? [], b = w.filter((U) => U.kind === "message"), H = w.filter((U) => U.kind === "tool"), G = [
      ...new Set(
        b.map((U) => U.model).filter((U) => !!U)
      )
    ], Q = [
      ...new Set(
        b.map((U) => U.provider).filter((U) => !!U)
      )
    ];
    let K = 0, oe = 0, me = 0, ue = 0, Le = 0, xe = null, ke = 0;
    const Je = [];
    for (const U of w)
      U.usage && (K += U.usage.input_tokens ?? 0, oe += U.usage.output_tokens ?? 0, me += U.usage.cache_input_tokens ?? 0, ue += U.usage.cache_creation_input_tokens ?? 0, Le += U.usage.reasoning_tokens ?? 0), U.timing && (xe = xe === null ? U.timing.ttft_ms : Math.min(xe, U.timing.ttft_ms), ke = (ke ?? 0) + U.timing.decode_ms), U.isError && Je.push(U.toolError ?? U.text ?? "error");
    const ze = w.find((U) => U.kind === "user"), Jn = (Wt = [...b].reverse().find((U) => U.options)) == null ? void 0 : Wt.options, gt = [...b].reverse().find((U) => U.outputText);
    let Bt;
    const Ft = b.filter((U) => U.messagesMeta);
    if (Ft.length > 0) {
      const U = {};
      let Ne = 0, Et = 0;
      for (const Yn of Ft) {
        const St = Yn.messagesMeta;
        for (const [Kt, Zn] of Object.entries(St.charsByRole))
          U[Kt] = (U[Kt] ?? 0) + Zn;
        Ne += St.totalChars, Et = Math.max(Et, St.maxToolChars);
      }
      Bt = { charsByRole: U, totalChars: Ne, maxToolChars: Et };
    }
    const yt = L.findIndex((U) => U.turn === k), Ht = yt > 0 ? L[yt - 1] : null;
    let Fe = null;
    if (Ht) {
      Fe = 0;
      for (const U of Ht.groups)
        for (const Ne of U.cells)
          Ne.kind === "message" && Ne.usage && (Fe += Ne.usage.input_tokens ?? 0);
    }
    const Qn = Fe === null && yt !== 0 ? void 0 : {
      prevInputTokens: Fe,
      deltaTokens: K - (Fe ?? 0)
    };
    return {
      turn: k,
      status: p.status,
      durationMs: p.durationMs,
      startedAt: (ze == null ? void 0 : ze.startedAt) ?? null,
      query: (ze == null ? void 0 : ze.text) ?? "",
      llmCalls: b.length,
      toolCalls: H.length,
      models: G,
      providers: Q,
      inputTokens: K,
      outputTokens: oe,
      cacheReadTokens: me,
      cacheWriteTokens: ue,
      reasoningTokens: Le,
      inputComposition: Bt,
      growth: Qn,
      resultIndex: gt == null ? void 0 : gt.index,
      ttftMs: xe,
      decodeMs: ke,
      errors: Je,
      options: Jn,
      sessionTotals: ae && ae.sessionId === e ? {
        inputTokens: ae.inputTokens,
        outputTokens: ae.outputTokens,
        totalTokens: ae.totalTokens,
        reasoningTokens: ae.reasoningTokens
      } : void 0
    };
  }, [k, L, ae, e]), ce = !!(i && i.events.length > 0 && i.events[0].seq > 1), be = async (p) => {
    try {
      he(await il(p));
    } catch (w) {
      Ke.error(String(w.message));
    }
  }, Be = we(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), ht = we(() => {
    if (!Y) return null;
    const p = [
      `${Y.runs} ${d(t, "statRounds")} · ${Y.llm_calls} ${d(t, "statSteps")}`,
      `LLM ${pe(Y.llm_ms_total / 1e3)} · ${d(
        t,
        "toolCalls"
      )} ${pe(Y.tool_ms_total / 1e3)}`,
      `${d(t, "statTtftAvg")} ${Y.ttft_ms_avg === null ? "-" : pe(Y.ttft_ms_avg / 1e3)} · ${it(
        Y.output_tokens,
        Y.decode_ms_total / 1e3
      )}`
    ];
    if (Y.cache_read_tokens > 0 || Y.cache_write_tokens > 0) {
      const w = Y.cache_read_tokens + Y.input_tokens, b = w > 0 ? Math.round(Y.cache_read_tokens / w * 100) : 0;
      p.push(`${d(t, "statCacheHit")} ${b}%`);
    }
    if (p.push(
      `${d(t, "statInput")} ${J(
        Y.input_tokens
      )} tok · ${d(t, "statOutput")} ${J(
        Y.output_tokens
      )} tok`
    ), n && p.push(At(n.size_bytes)), Y.skills) {
      const w = Object.entries(Y.skills).sort((b, H) => H[1] - b[1]).map(([b, H]) => `${b} ×${H}`).join(" · ");
      w && p.push(`📚 ${w}`);
    }
    if (V != null && V.prompt) {
      const w = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Set();
      for (const G of L)
        for (const Q of G.groups)
          for (const K of Q.cells)
            K.skillName ? b.add(K.skillName) : K.inSkill && w.add(K.inSkill);
      const H = [...w].filter((G) => !b.has(G));
      H.length > 0 && p.push(
        `⚡ ${d(t, "skillBypassStrip")}: ${H.join(" · ")}`
      );
    }
    return p.join(" | ");
  }, [Y, n, t, L, V]), ft = () => {
    M(null), O(null);
  };
  et(() => {
    T !== null && A(null);
  }, [T]);
  const Xe = we(
    () => P === null ? null : L.flatMap((p) => p.skillSpans ?? []).find((p) => p.id === P) ?? null,
    [P, L]
  ), qe = (g == null ? void 0 : g.status) === 404, mt = de !== null || Ie !== null;
  return /* @__PURE__ */ B.createElement(
    "div",
    {
      style: {
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        minHeight: 0
      }
    },
    /* @__PURE__ */ B.createElement(
      "div",
      {
        style: {
          padding: "8px 12px",
          borderBottom: "1px solid rgba(128,128,128,0.15)",
          display: "flex",
          flexDirection: "column",
          gap: 4
        }
      },
      e ? /* @__PURE__ */ B.createElement(B.Fragment, null, /* @__PURE__ */ B.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            minWidth: 0
          }
        },
        /* @__PURE__ */ B.createElement(
          $e,
          {
            strong: !0,
            ellipsis: {
              tooltip: (n == null ? void 0 : n.title) || e
            },
            style: { fontSize: 13, flex: "0 1 auto", minWidth: 60 }
          },
          (n == null ? void 0 : n.title) || (n == null ? void 0 : n.agent_id) || Nn(e)
        ),
        /* @__PURE__ */ B.createElement(
          Mo,
          {
            color: Dn[(n == null ? void 0 : n.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          jn((n == null ? void 0 : n.status) ?? "unknown")
        ),
        n != null && n.channel ? /* @__PURE__ */ B.createElement($e, { type: "secondary", style: { fontSize: 11, flexShrink: 0 } }, n.channel) : null,
        /* @__PURE__ */ B.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ B.createElement(Io, null, /* @__PURE__ */ B.createElement(xn, { config: le, onChange: be }, /* @__PURE__ */ B.createElement(tt, { size: "small", icon: /* @__PURE__ */ B.createElement(bn, null) })), /* @__PURE__ */ B.createElement($o, { title: d(t, "export") }, /* @__PURE__ */ B.createElement(
          tt,
          {
            size: "small",
            icon: /* @__PURE__ */ B.createElement(Ao, null),
            onClick: () => {
              rl(e).then(() => Ke.success(d(t, "exported"))).catch(
                (p) => Ke.error(String(p.message))
              );
            }
          },
          d(t, "export")
        )), /* @__PURE__ */ B.createElement(
          To,
          {
            title: d(t, "deleteConfirm"),
            onConfirm: () => {
              al(e).then(() => {
                Ke.success(d(t, "deleted")), s == null || s();
              }).catch(
                (p) => Ke.error(String(p.message))
              );
            }
          },
          /* @__PURE__ */ B.createElement(tt, { size: "small", danger: !0, icon: /* @__PURE__ */ B.createElement(zo, null) }, d(t, "delete"))
        )))
      ), /* @__PURE__ */ B.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap"
          }
        },
        /* @__PURE__ */ B.createElement(
          $e,
          {
            type: "secondary",
            style: { fontSize: 11, flex: "1 1 300px", minWidth: 0 }
          },
          ht ?? // Transient line while the stats endpoint responds.
          (n ? `${n.runs} ${d(t, "statRounds")} · ${n.llm_calls} ${d(t, "statSteps")} · ${Pn(
            n.total_tokens
          )} ${d(t, "tokens")} · ${At(
            n.size_bytes
          )}` : "")
        ),
        /* @__PURE__ */ B.createElement(
          $e,
          {
            type: "secondary",
            copyable: {
              text: e,
              tooltips: [
                d(t, "copySessionId"),
                d(t, "copiedSessionId")
              ]
            },
            style: {
              fontSize: 11,
              marginLeft: "auto",
              flexShrink: 0
            }
          },
          e
        )
      )) : /* @__PURE__ */ B.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8
          }
        },
        /* @__PURE__ */ B.createElement($e, { type: "secondary", style: { fontSize: 13 } }, d(t, "selectSession")),
        /* @__PURE__ */ B.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ B.createElement(xn, { config: le, onChange: be }, /* @__PURE__ */ B.createElement(tt, { size: "small", icon: /* @__PURE__ */ B.createElement(bn, null) })))
      )
    ),
    g && !qe && /* @__PURE__ */ B.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ B.createElement($e, { type: "danger", style: { fontSize: 12 } }, `${d(t, "loadFailed")}: ${g.message}`)),
    /* @__PURE__ */ B.createElement(
      ko,
      {
        mode: u,
        onModeChange: v,
        search: f,
        onSearchChange: E,
        onRefresh: () => {
          e && (_(e), x(e)), s == null || s();
        },
        modeOptions: Be,
        allCollapsed: L.length > 0 && L.every((p) => C.has(p.turn ?? -1)),
        hasRequests: L.some((p) => p.turn !== null),
        callsCollapsed: Z,
        onToggleCallsCollapsed: () => F((p) => !p),
        onToggleCollapseAll: () => {
          N((p) => L.some(
            (b) => b.turn !== null && !p.has(b.turn)
          ) ? new Set(
            L.map((b) => b.turn).filter((b) => b !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ B.createElement(
      ho,
      {
        turns: L,
        mode: u,
        range: $,
        hasEarlierRecords: ce,
        onLoadEarlier: async () => {
          var p;
          return !i || i.events.length === 0 ? !1 : (await _(e, (p = i.events[0]) == null ? void 0 : p.seq), !0);
        },
        selectedIndex: T,
        searchMatchIndexes: ee,
        onRangeChange: D,
        onRecordSelect: M,
        onRecordFocus: M,
        onSkillSpanSelect: A
      }
    ),
    c && !i ? /* @__PURE__ */ B.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ B.createElement(qn, null)) : i ? /* @__PURE__ */ B.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ B.createElement(
      "div",
      {
        style: {
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          minHeight: 0
        }
      },
      /* @__PURE__ */ B.createElement(
        Ws,
        {
          turns: L,
          selectedIndex: T,
          selectedTurn: k,
          collapsedTurns: C,
          focusIndexes: te,
          searchMatchIndexes: ee,
          onSelectedIndexChange: (p) => {
            if (p === T) {
              M(null);
              return;
            }
            M(p), O(null);
          },
          onSkillSpanOpen: (p, w) => {
            var Q;
            const b = L.flatMap((K) => K.skillSpans ?? []), G = (w !== null ? (((Q = L.find((K) => K.turn === w)) == null ? void 0 : Q.skillSpans) ?? []).find((K) => K.skill === p) : void 0) ?? b.find((K) => K.skill === p);
            G && A(G.id);
          },
          onSelectedTurnChange: (p) => {
            O(p), M(null);
          },
          callsCollapsed: Z,
          onToggleTurn: (p) => {
            N((w) => {
              const b = new Set(w);
              return b.has(p) ? b.delete(p) : b.add(p), b;
            });
          },
          hasOlderRecords: ce,
          loadingOlder: y,
          onLoadOlder: () => {
            var p;
            !i || i.events.length === 0 || (o(!0), _(
              e,
              (p = i.events[0]) == null ? void 0 : p.seq
            ).finally(() => o(!1)));
          },
          emptyText: d(t, "noSessions"),
          initialRecord: V
        }
      )
    ), Xe ? /* @__PURE__ */ B.createElement(
      Zl,
      {
        span: Xe,
        records: X,
        onJumpRecord: (p) => {
          A(null), M(p);
        },
        onClose: () => A(null)
      }
    ) : mt ? /* @__PURE__ */ B.createElement(
      Vl,
      {
        record: de,
        request: Ie,
        onJumpSession: l,
        onSelectTurn: (p) => {
          O(p), M(null);
        },
        onClose: ft
      }
    ) : null) : /* @__PURE__ */ B.createElement(
      vn,
      {
        image: vn.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: qe && e ? d(t, "noTraceForSession") : d(t, "selectSession")
      }
    )
  );
}
const je = window.QwenPaw.host, W = je.React, { useCallback: kn, useEffect: zt, useMemo: nt, useState: Me } = W, { Button: wn, Empty: Tn, Input: Ro, Spin: Lo, Tag: _n, Tooltip: In } = je.antd, {
  CaretRightOutlined: No,
  MenuFoldOutlined: Po,
  MenuUnfoldOutlined: Do,
  SearchOutlined: jo
} = je.antdIcons, { Text: Ge } = je.antd.Typography;
function Bo({
  groups: e,
  collapsedAgents: n,
  onToggleAgent: t,
  searching: l,
  selected: s,
  onSelect: i,
  locale: a
}) {
  const c = e.length > 1;
  return /* @__PURE__ */ W.createElement(W.Fragment, null, e.map(([h, y]) => {
    const o = c && !l && n.has(h);
    return /* @__PURE__ */ W.createElement("div", { key: h }, c && /* @__PURE__ */ W.createElement(
      "div",
      {
        onClick: () => t(h),
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "6px 6px 4px",
          cursor: "pointer",
          userSelect: "none",
          color: "rgba(128,128,128,1)",
          fontSize: 12
        }
      },
      /* @__PURE__ */ W.createElement(
        No,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: o ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ W.createElement(Ge, { strong: !0, style: { fontSize: 12 } }, h),
      /* @__PURE__ */ W.createElement(Ge, { type: "secondary", style: { fontSize: 11 } }, y.length)
    ), !o && y.map((f) => {
      const E = f.session_id === s;
      return /* @__PURE__ */ W.createElement(
        "div",
        {
          key: f.session_id,
          onClick: () => i(f.session_id),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: E ? "rgba(22,119,255,0.10)" : "transparent",
            border: E ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ W.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ W.createElement(
            Ge,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${f.title ? `${f.title}
` : ""}${f.session_id}`
              }
            },
            f.title || f.agent_id || Nn(f.session_id)
          ),
          c ? null : f.agent_id ? /* @__PURE__ */ W.createElement(
            _n,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            f.agent_id
          ) : null,
          /* @__PURE__ */ W.createElement(
            _n,
            {
              color: Dn[f.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            jn(f.status)
          )
        ),
        /* @__PURE__ */ W.createElement(
          "div",
          {
            style: {
              display: "flex",
              gap: 8,
              marginTop: 2,
              fontSize: 12,
              color: "rgba(128,128,128,1)"
            }
          },
          /* @__PURE__ */ W.createElement("span", null, f.channel || "-"),
          /* @__PURE__ */ W.createElement("span", null, f.runs, " ", d(a, "runs")),
          /* @__PURE__ */ W.createElement("span", null, Pn(f.total_tokens), " tok"),
          f.skills ? /* @__PURE__ */ W.createElement(
            "span",
            {
              style: { color: "#2f54eb" },
              title: Object.entries(f.skills).sort((u, v) => v[1] - u[1]).map(([u, v]) => `${u} ×${v}`).join(`
`)
            },
            "📚",
            " ",
            Object.entries(f.skills).sort((u, v) => v[1] - u[1]).slice(0, 2).map(([u]) => u).join(" ")
          ) : null,
          /* @__PURE__ */ W.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: $l(f.last_event_t)
            },
            zl(f.last_event_t)
          )
        )
      );
    }));
  }));
}
function Fo() {
  const e = typeof je.useLocale == "function" ? je.useLocale() : void 0, n = nt(
    () => Pt(e ?? ie()),
    [e]
  ), [t, l] = Me(null), [s, i] = Me(!1), [a, c] = Me(
    /* @__PURE__ */ new Set()
  ), [h, y] = Me(!1), [o, f] = Me(!1), [E, u] = Me(null), [v, $] = Me(""), [D, T] = Me(null), M = kn(async () => {
    try {
      const C = await Vt({ limit: 100, offset: 0 });
      l(C.sessions), i(C.has_more), T(null);
    } catch (C) {
      T(String(C.message));
    }
  }, []), k = kn(async () => {
    f(!0);
    try {
      const C = await Vt({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      l((N) => {
        const Z = N ?? [];
        return [
          ...Z,
          ...C.sessions.filter(
            (F) => !Z.some((le) => le.session_id === F.session_id)
          )
        ];
      }), i(C.has_more);
    } catch (C) {
      T(String(C.message));
    } finally {
      f(!1);
    }
  }, [t]);
  zt(() => {
    M();
    try {
      const C = new URLSearchParams(window.location.search).get("session");
      C && Rn(C).then((N) => {
        u(N ?? C);
      });
    } catch {
    }
  }, [M]), zt(() => {
    try {
      const C = new URL(window.location.href);
      E ? C.searchParams.set("session", E) : C.searchParams.delete("session"), window.history.replaceState(window.history.state, "", C);
    } catch {
    }
  }, [E]), zt(() => {
    const C = setInterval(() => {
      document.visibilityState === "visible" && M();
    }, 15e3);
    return () => clearInterval(C);
  }, [M]);
  const O = nt(
    () => (t == null ? void 0 : t.find((C) => C.session_id === E)) ?? null,
    [t, E]
  ), P = nt(() => {
    if (!t) return [];
    const C = v.trim().toLowerCase();
    return C ? t.filter(
      (N) => [N.session_id, N.title ?? "", N.agent_id, N.channel].join(" ").toLowerCase().includes(C)
    ) : t;
  }, [t, v]), A = nt(() => {
    const C = /* @__PURE__ */ new Map();
    for (const N of P) {
      const Z = N.agent_id || "(unknown)", F = C.get(Z);
      F ? F.push(N) : C.set(Z, [N]);
    }
    return [...C.entries()];
  }, [P]);
  return /* @__PURE__ */ W.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, h ? /* @__PURE__ */ W.createElement(
    "div",
    {
      style: {
        width: 32,
        flexShrink: 0,
        borderRight: "1px solid rgba(128,128,128,0.15)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 8
      }
    },
    /* @__PURE__ */ W.createElement(In, { title: d(n, "expandSidebar"), placement: "right" }, /* @__PURE__ */ W.createElement(
      wn,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ W.createElement(Do, null),
        onClick: () => y(!1)
      }
    ))
  ) : /* @__PURE__ */ W.createElement(
    "div",
    {
      style: {
        width: 300,
        flexShrink: 0,
        borderRight: "1px solid rgba(128,128,128,0.15)",
        display: "flex",
        flexDirection: "column",
        minHeight: 0
      }
    },
    /* @__PURE__ */ W.createElement(
      "div",
      {
        style: {
          padding: "12px 12px 8px",
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      },
      /* @__PURE__ */ W.createElement(
        Ro,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ W.createElement(jo, null),
          placeholder: d(n, "searchPlaceholder"),
          value: v,
          style: { flex: 1, minWidth: 0 },
          onChange: (C) => $(C.target.value)
        }
      ),
      /* @__PURE__ */ W.createElement(In, { title: d(n, "collapseSidebar") }, /* @__PURE__ */ W.createElement(
        wn,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ W.createElement(Po, null),
          onClick: () => y(!0)
        }
      ))
    ),
    D ? /* @__PURE__ */ W.createElement("div", { style: { padding: "0 12px 4px" } }, /* @__PURE__ */ W.createElement(Ge, { type: "danger", style: { fontSize: 12 } }, `${d(n, "loadFailed")}: ${D}`)) : null,
    /* @__PURE__ */ W.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ W.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ W.createElement(Lo, null)) : P.length === 0 ? /* @__PURE__ */ W.createElement(
      Tn,
      {
        image: Tn.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ W.createElement("span", { style: { fontSize: 12 } }, d(n, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ W.createElement(
        Ge,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        d(n, "noSessionsHint")
      )
    ) : /* @__PURE__ */ W.createElement(
      Bo,
      {
        groups: A,
        collapsedAgents: a,
        onToggleAgent: (C) => {
          c((N) => {
            const Z = new Set(N);
            return Z.has(C) ? Z.delete(C) : Z.add(C), Z;
          });
        },
        searching: !!v.trim(),
        selected: E,
        onSelect: u,
        locale: n
      }
    ), t !== null && s && !v.trim() && /* @__PURE__ */ W.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ W.createElement(
      "a",
      {
        onClick: () => void k(),
        style: { fontSize: 12 }
      },
      o ? "…" : `⋯ ${d(n, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ W.createElement(
    Oo,
    {
      sessionId: E,
      summary: O,
      locale: n,
      onJumpSession: u,
      onRefreshSessions: () => void M()
    }
  ));
}
const Ho = window.QwenPaw.host.React;
var Cn, Mn;
(Mn = (Cn = window.QwenPaw).registerRoutes) == null || Mn.call(Cn, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: Fo,
    label: d(ie(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
var $n, lt, zn;
(zn = (lt = ($n = window.QwenPaw.chat) == null ? void 0 : $n.rightHeader) == null ? void 0 : lt.add) == null || zn.call(
  lt,
  "agent-trace",
  Ho.createElement(fl),
  { id: "agent-trace-jump" }
);
