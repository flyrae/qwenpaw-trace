var ns = Object.defineProperty;
var ss = (e, n, t) => n in e ? ns(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var bt = (e, n, t) => ss(e, typeof n != "symbol" ? n + "" : n, t);
const ls = {
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
function Bt(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function ie() {
  try {
    return Bt(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function u(e, n) {
  return ls[e][n];
}
const He = window.QwenPaw.host;
function lt(e) {
  return e.instance_id ? `${e.instance_id}~${e.session_id}` : e.session_id;
}
function xt(e) {
  const n = e.indexOf("~");
  return n <= 0 ? { sessionId: e } : {
    instance: e.slice(0, n),
    sessionId: e.slice(n + 1)
  };
}
async function os(e, n) {
  const t = n ? `?instance=${encodeURIComponent(n)}` : "";
  return Re(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats${t}`
  );
}
async function Rn(e, n) {
  return He.fetch ? He.fetch(e, n) : fetch(He.getApiUrl(e), {
    ...n,
    headers: {
      ...(n == null ? void 0 : n.headers) || {},
      ...He.getApiToken() ? { Authorization: `Bearer ${He.getApiToken()}` } : {}
    }
  });
}
class Ln extends Error {
  constructor(n, t) {
    super(t), this.status = n, this.name = "ApiError";
  }
}
async function Re(e, n) {
  const t = await Rn(e, n), s = await t.text();
  let l = null;
  try {
    l = s ? JSON.parse(s) : null;
  } catch {
    l = null;
  }
  if (!t.ok) {
    const i = l && typeof l == "object" && "detail" in l ? l.detail : void 0;
    throw new Ln(
      t.status,
      typeof i == "string" ? i : `HTTP ${t.status}`
    );
  }
  return l;
}
async function qt(e) {
  const n = new URLSearchParams();
  return n.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && n.set("offset", String(e.offset)), e != null && e.instance && n.set("instance", e.instance), e != null && e.user && n.set("user", e.user), e != null && e.q && n.set("q", e.q), Re(
    `/agent-trace/sessions?${n.toString()}`
  );
}
async function is(e, n) {
  const t = new URLSearchParams();
  n != null && n.beforeSeq && t.set("before_seq", String(n.beforeSeq)), t.set("limit", String(n == null ? void 0 : n.limit)), n != null && n.instance && t.set("instance", n.instance);
  const s = t.toString();
  return Re(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${s}`
  );
}
async function rs() {
  return Re("/agent-trace/config");
}
async function as(e) {
  return Re("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
}
async function cs(e, n) {
  const t = n ? `?instance=${encodeURIComponent(n)}` : "", s = await Rn(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export${t}`
  );
  if (!s.ok) throw new Error(`HTTP ${s.status}`);
  const l = await s.blob(), i = URL.createObjectURL(l), r = document.createElement("a");
  r.href = i, r.download = `${e}.jsonl`, r.click(), URL.revokeObjectURL(i);
}
async function ds(e) {
  await Re(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
async function Nn(e) {
  if (!e) return null;
  try {
    return (await Re(
      `/agent-trace/resolve?chat_id=${encodeURIComponent(e)}`
    )).session_id ?? null;
  } catch {
    return e;
  }
}
const Oe = window.QwenPaw.host, ot = Oe.React, { useMemo: us } = ot, { Button: ps, Tooltip: hs } = Oe.antd, { CompassOutlined: fs } = Oe.antdIcons;
function ms(e) {
  return `${window.location.pathname.startsWith("/console") ? "/console" : ""}/plugin/agent-trace${e ? `?session=${encodeURIComponent(e)}` : ""}`;
}
function gs() {
  const e = typeof Oe.useLocale == "function" ? Oe.useLocale() : void 0, n = us(
    () => Bt(e ?? ie()),
    [e]
  );
  return /* @__PURE__ */ ot.createElement(hs, { title: u(n, "viewCurrentTrace") }, /* @__PURE__ */ ot.createElement(
    ps,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ ot.createElement(fs, null),
      "aria-label": u(n, "viewCurrentTrace"),
      onClick: () => {
        const t = typeof Oe.getCurrentSessionId == "function" ? Oe.getCurrentSessionId() : null;
        Nn(t).then((s) => {
          window.location.href = ms(s ?? t);
        });
      }
    }
  ));
}
const Jt = 3e3;
function Qt(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function ys(e, n) {
  const t = Qt(e ?? ""), s = Qt(n ?? "");
  if (t.length > Jt || s.length > Jt)
    return [
      ...t.map((h) => ({ kind: "del", text: h })),
      ...s.map((h) => ({ kind: "add", text: h }))
    ];
  const l = t.length, i = s.length, r = new Int32Array((l + 1) * (i + 1)), c = (h, E) => h * (i + 1) + E;
  for (let h = l - 1; h >= 0; h -= 1)
    for (let E = i - 1; E >= 0; E -= 1)
      r[c(h, E)] = t[h] === s[E] ? r[c(h + 1, E + 1)] + 1 : Math.max(r[c(h + 1, E)], r[c(h, E + 1)]);
  const f = [];
  let y = 0, o = 0;
  for (; y < l && o < i; )
    t[y] === s[o] ? (f.push({ kind: "same", text: t[y] }), y += 1, o += 1) : r[c(y + 1, o)] >= r[c(y, o + 1)] ? (f.push({ kind: "del", text: t[y] }), y += 1) : (f.push({ kind: "add", text: s[o] }), o += 1);
  for (; y < l; )
    f.push({ kind: "del", text: t[y] }), y += 1;
  for (; o < i; )
    f.push({ kind: "add", text: s[o] }), o += 1;
  return f;
}
function Es(e, n = 3) {
  const t = new Array(e.length).fill(!1);
  e.forEach((i, r) => {
    if (i.kind !== "same")
      for (let c = Math.max(0, r - n); c <= Math.min(e.length - 1, r + n); c += 1)
        t[c] = !0;
  });
  const s = [];
  let l = 0;
  return e.forEach((i, r) => {
    t[r] ? (l > 0 && (s.push({ kind: "gap", count: l }), l = 0), s.push(i)) : l += 1;
  }), l > 0 && s.push({ kind: "gap", count: l }), s;
}
function Ss(e) {
  let n = 0, t = 0;
  for (const s of e)
    s.kind === "add" ? n += 1 : s.kind === "del" && (t += 1);
  return { added: n, removed: t };
}
function vs(e) {
  let n = 0;
  for (let t = 0; t < e.length; t += 1)
    n = (n * 31 + e.charCodeAt(t)) % 100003;
  return n % 360;
}
class bs {
  constructor() {
    bt(this, "open", /* @__PURE__ */ new Map());
    bt(this, "finished", []);
  }
  /** A run opens: any still-open spans are hard-closed first (crashed
   * runs without run/end must not leak attribution — same semantics as
   * Kimi's run/start reset for activeRunSkills). */
  onRunStart() {
    this.closeAll(null, null, null);
  }
  onSlashSkill(n, t, s) {
    this.onRunStart(), this.openSpan(n, "slash", t, s);
  }
  onSkillLoad(n, t, s) {
    let l = this.open.get(n);
    return l || (l = this.openSpan(n, "load", t, s)), l.loadSeq = t, l.bypass && (l.bypass = !1), l.id;
  }
  onToolCall(n) {
    if (!n.attribution) return null;
    const { skill: t, kind: s, detail: l } = n.attribution;
    let i = this.open.get(t);
    return i || (i = this.openSpan(
      t,
      s === "path" ? "resource" : "load",
      n.seq,
      n.t
    ), s === "temporal" && (i.trigger = "resource")), i.attributedIndexes.push(n.recordIndex), i.evidences.push({
      kind: s,
      detail: l,
      recordIndex: n.recordIndex
    }), i.lastActivitySeq = n.seq, i.lastActivityT = n.t, i.id;
  }
  onRunEnd(n, t) {
    this.closeAll(n, t, "run_end");
  }
  /** All spans (open + finished) in start order. */
  spans() {
    const n = [...this.open.values()];
    return [...this.finished, ...n].sort((t, s) => t.startSeq - s.startSeq);
  }
  openSpan(n, t, s, l) {
    const i = {
      id: `${n}#${s}`,
      skill: n,
      trigger: t,
      startSeq: s,
      startT: l,
      endSeq: null,
      endT: null,
      endKind: null,
      lastActivitySeq: null,
      lastActivityT: null,
      attributedIndexes: [],
      evidences: [],
      bypass: t === "resource",
      loadSeq: t === "load" ? s : null,
      colorHue: vs(n)
    };
    return this.open.set(n, i), i;
  }
  closeAll(n, t, s) {
    for (const l of this.open.values())
      l.endSeq = n, l.endT = t, l.endKind = s, this.finished.push(l);
    this.open.clear();
  }
}
function xs(e) {
  return e.endT !== null ? e.endT : e.lastActivityT !== null ? e.lastActivityT : e.startT;
}
function ks(e) {
  const n = e.lastActivityT ?? e.endT;
  return n === null ? null : Math.max(0, n - e.startT);
}
const ws = /* @__PURE__ */ new Set([
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
function Ts(e) {
  const n = /* @__PURE__ */ new Set();
  for (const t of e.matchAll(
    /(?:scripts[/\\])([\w.\-]+\.(?:py|js|mjs|sh|json|ts))/gi
  ))
    n.add(t[1].toLowerCase());
  for (const t of e.matchAll(/```[a-z]*\n([\s\S]*?)```/g))
    for (const s of t[1].matchAll(/[\w./=\-]{6,}/g)) {
      const l = s[0].toLowerCase();
      ws.has(l) || n.add(l);
    }
  return [...n];
}
function _s(e, n) {
  const t = e.toLowerCase();
  let s = null, l = !1;
  for (const [i, r] of n)
    for (const c of r)
      if (t.includes(c)) {
        s === null ? s = { skill: i, feature: c } : s.skill !== i && (l = !0);
        break;
      }
  return l ? null : s;
}
const Is = {
  approval: { zh: "审批", en: "Approval" },
  receipt: { zh: "回执", en: "Receipt" },
  spawn: { zh: "子代理", en: "Spawn" },
  header: { zh: "提示词", en: "Prompt" },
  error: { zh: "错误", en: "Error" }
}, Cs = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" }
};
function Pn(e, n) {
  const t = e.markerKind ? Is[e.markerKind] : void 0;
  if (t) return n === "zh-CN" ? t.zh : t.en;
  const s = Cs[e.kind];
  return s ? n === "zh-CN" ? s.zh : s.en : e.kind;
}
const Yt = 60;
function Ue(e) {
  return `${e.role}|${e.text ?? `#${e.chars ?? 0}`}`;
}
function Zt(e) {
  return e.chars ?? (e.text ? e.text.length : 0);
}
function en(e) {
  const n = {};
  for (const t of e)
    n[t.role] = (n[t.role] ?? 0) + 1;
  return n;
}
function Ms(e, n) {
  let t = 0;
  for (; t < e.length && t < n.length && Ue(e[t]) === Ue(n[t]); )
    t += 1;
  const s = e.slice(t), l = n.slice(t), i = /* @__PURE__ */ new Map();
  for (const d of l) {
    const v = Ue(d);
    i.set(v, (i.get(v) ?? 0) + 1);
  }
  const r = [], c = [], f = [];
  for (let d = 0; d < Math.min(t, Yt); d += 1)
    f.push({ status: "kept", role: e[d].role });
  for (const d of s) {
    const v = Ue(d), $ = i.get(v) ?? 0;
    $ > 0 ? (i.set(v, $ - 1), f.push({ status: "kept", role: d.role })) : r.push(d);
  }
  for (const d of l) {
    const v = Ue(d), $ = i.get(v) ?? 0;
    $ > 0 && (i.set(v, $ - 1), c.push(d));
  }
  const y = /* @__PURE__ */ new Map();
  for (const d of c) {
    const v = y.get(d.role);
    v ? v.push(d) : y.set(d.role, [d]);
  }
  const o = [], h = [];
  for (const d of r) {
    const v = y.get(d.role);
    v && v.length > 0 ? o.push([d, v.shift()]) : h.push(d);
  }
  const E = [...y.values()].flat();
  for (const [d, v] of o)
    f.push({
      status: "rewritten",
      role: d.role,
      oldText: d.text,
      newText: v.text
    });
  for (const d of h)
    f.push({
      status: "removed",
      role: d.role,
      oldText: d.text
    });
  for (const d of E)
    f.push({
      status: "added",
      role: d.role,
      newText: d.text
    });
  return {
    breakAt: t,
    beforeCount: e.length,
    afterCount: n.length,
    beforeChars: e.reduce((d, v) => d + Zt(v), 0),
    afterChars: n.reduce((d, v) => d + Zt(v), 0),
    beforeByRole: en(e),
    afterByRole: en(n),
    changes: f.slice(0, Yt)
  };
}
function $s(e) {
  const n = e.trim();
  if (!n.startsWith("[") && !n.startsWith("{")) return e;
  let t;
  try {
    t = JSON.parse(n);
  } catch {
    return e;
  }
  const s = Array.isArray(t) ? t : [t], l = [];
  for (const i of s)
    if (i && typeof i == "object" && typeof i.text == "string") {
      const r = i.text;
      r && l.push(r);
    } else i && typeof i == "object" && typeof i.type == "string" ? l.push(`[${i.type}]`) : typeof i == "string" && i && l.push(i);
  return l.length > 0 ? l.join(`
`) : e;
}
function zs(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function pe(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const n = e * 1e3;
  return n < 1e3 ? `${Math.round(n)}ms` : n < 6e4 ? `${(n / 1e3).toFixed(1)}s` : `${Math.floor(n / 6e4)}m${Math.round(n % 6e4 / 1e3)}s`;
}
function Q(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function rt(e, n) {
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
function Dn(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function As(e) {
  if (!e) return "-";
  const n = new Date(e);
  return Number.isNaN(n.getTime()) ? e : n.toLocaleString();
}
function Os(e) {
  if (!e) return "-";
  const n = Date.parse(e);
  if (!Number.isFinite(n)) return e;
  const t = Date.now() - n;
  return t < 6e4 ? "刚刚" : t < 36e5 ? `${Math.floor(t / 6e4)} 分钟前` : t < 864e5 ? `${Math.floor(t / 36e5)} 小时前` : new Date(n).toLocaleString();
}
function jn(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function Lt(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const Bn = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default"
};
function Fn(e) {
  return e || "unknown";
}
const ut = window.QwenPaw.host, a = ut.React, { useEffect: Rs, useRef: Ls, useState: Ve } = a, { Button: Hn, Collapse: Nt, Empty: tn, Tabs: Ft, Tag: at } = ut.antd, { Text: j } = ut.antd.Typography, { CopyOutlined: Ns, CloseOutlined: Ps } = ut.antdIcons, Ds = 320, js = 720, Qe = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, Bs = 2e4;
function Fs(e) {
  if (e.length > Bs) return e;
  const n = [], t = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let s = 0, l, i = 0;
  for (; (l = t.exec(e)) !== null; ) {
    l.index > s && n.push(e.slice(s, l.index));
    const r = l[0];
    let c = "rgba(128,128,128,1)";
    l[1] !== void 0 ? c = Qe.key : l[2] !== void 0 ? c = Qe.string : l[3] !== void 0 ? c = Qe.number : c = Qe.literal, n.push(
      /* @__PURE__ */ a.createElement("span", { key: i++, style: { color: c } }, r)
    ), s = l.index + r.length;
  }
  return s < e.length && n.push(e.slice(s)), n;
}
function Se({ value: e, json: n = !1 }) {
  const [t, s] = Ve(!1), l = typeof e == "string" ? e : JSON.stringify(e, null, 2);
  if (!l) return null;
  const i = async () => {
    try {
      await navigator.clipboard.writeText(l), s(!0), window.setTimeout(() => s(!1), 1500);
    } catch {
    }
  };
  return /* @__PURE__ */ a.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ a.createElement(
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
    t ? "✓" : /* @__PURE__ */ a.createElement(Ns, null)
  ), /* @__PURE__ */ a.createElement(
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
    n ? Fs(l) : l
  ));
}
function I({
  label: e,
  value: n,
  danger: t = !1
}) {
  return /* @__PURE__ */ a.createElement(
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
    /* @__PURE__ */ a.createElement(j, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ a.createElement(
      j,
      {
        type: t ? "danger" : void 0,
        style: { fontSize: 12, textAlign: "right" }
      },
      n
    )
  );
}
function Pt({
  input: e,
  output: n,
  cacheRead: t,
  cacheWrite: s,
  reasoning: l
}) {
  const i = Math.max(0, e - t - s), r = Math.max(0, n - l);
  return /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(I, { label: "Input", value: `${Q(e)} tok` }), t ? /* @__PURE__ */ a.createElement(I, { label: "Cached", value: `${Q(t)} tok` }) : null, s ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: "Cache created",
      value: `${Q(s)} tok`
    }
  ) : null, t || s ? /* @__PURE__ */ a.createElement(I, { label: "Other", value: `${Q(i)} tok` }) : null, /* @__PURE__ */ a.createElement(I, { label: "Output", value: `${Q(n)} tok` }), l ? /* @__PURE__ */ a.createElement(I, { label: "Reasoning", value: `${Q(l)} tok` }) : null, l ? /* @__PURE__ */ a.createElement(I, { label: "Content", value: `${Q(r)} tok` }) : null);
}
function kt({
  label: e,
  onOpen: n,
  children: t
}) {
  return /* @__PURE__ */ a.createElement(
    "div",
    {
      style: {
        marginTop: 8,
        borderTop: "1px solid rgba(128,128,128,0.15)",
        paddingTop: 6
      }
    },
    /* @__PURE__ */ a.createElement("a", { onClick: n, style: { fontSize: 12, fontWeight: 600 } }, e, " →"),
    /* @__PURE__ */ a.createElement("div", { style: { paddingTop: 2 } }, t)
  );
}
const nn = ["system", "user", "assistant", "tool"], Hs = {
  system: "roleSystem",
  user: "roleUser",
  assistant: "roleAssistant",
  tool: "roleTool"
};
function Us({
  request: e,
  locale: n
}) {
  const t = e.inputComposition;
  if (!t) return null;
  const s = [], l = new Set(nn), i = [
    ...nn.filter((c) => t.charsByRole[c]),
    ...Object.keys(t.charsByRole).filter(
      (c) => !l.has(c) && t.charsByRole[c]
    )
  ], r = t.totalChars || 1;
  for (const c of i) {
    const f = t.charsByRole[c], y = Hs[c] ?? "roleOther", o = Math.round(f / r * 100);
    s.push(
      /* @__PURE__ */ a.createElement(
        I,
        {
          key: c,
          label: u(n, y),
          value: `${Q(f)} ${u(n, "charUnit")} · ${o}%`
        }
      )
    );
  }
  return t.maxToolChars > 0 && s.push(
    /* @__PURE__ */ a.createElement(
      I,
      {
        key: "max-tool",
        label: u(n, "maxToolMsg"),
        value: `${Q(t.maxToolChars)} ${u(
          n,
          "charUnit"
        )}`
      }
    )
  ), /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(j, { strong: !0, style: { fontSize: 12, display: "block", marginTop: 10 } }, u(n, "inputComposition")), s, e.inputTokens > 0 ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: u(n, "realInputTokens"),
      value: `${Q(e.inputTokens)} tok`
    }
  ) : null, /* @__PURE__ */ a.createElement(
    j,
    {
      type: "secondary",
      style: { fontSize: 11, display: "block", padding: "2px 0" }
    },
    u(n, "compositionNote")
  ), e.growth ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
    I,
    {
      label: u(n, "growthVsPrev"),
      value: e.growth.prevInputTokens === null ? u(n, "firstRound") : `${e.growth.deltaTokens >= 0 ? "+" : ""}${Q(
        e.growth.deltaTokens
      )} tok`
    }
  ), e.growth.prevInputTokens !== null && e.growth.deltaTokens > 0 ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: u(n, "cacheAbsorbed"),
      value: `${Q(e.cacheReadTokens)} tok`
    }
  ) : null) : null);
}
function Ws({
  request: e,
  onJumpRecord: n
}) {
  const t = ie(), [s, l] = a.useState("summary"), i = /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(
    I,
    {
      label: u(t, "startedAt"),
      value: _e(e.startedAt)
    }
  ), /* @__PURE__ */ a.createElement(
    I,
    {
      label: u(t, "duration"),
      value: pe(
        e.durationMs === null ? null : e.durationMs / 1e3
      )
    }
  ), e.ttftMs !== null ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: u(t, "ttftLabel"),
      value: pe(e.ttftMs / 1e3)
    }
  ) : null, e.decodeMs !== null ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: u(t, "decodeLabel"),
      value: pe(e.decodeMs / 1e3)
    }
  ) : null, /* @__PURE__ */ a.createElement(
    I,
    {
      label: u(t, "throughput"),
      value: rt(
        e.outputTokens,
        e.decodeMs === null ? null : e.decodeMs / 1e3
      )
    }
  )), r = /* @__PURE__ */ a.createElement(
    Pt,
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
      label: u(t, "summary"),
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(I, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ a.createElement(
        I,
        {
          label: u(t, "status"),
          value: e.status || "unknown",
          danger: e.status === "error"
        }
      ), /* @__PURE__ */ a.createElement(I, { label: "Query", value: Ks(e.query) }), e.providers.length > 0 ? /* @__PURE__ */ a.createElement(I, { label: "Provider", value: e.providers.join(" · ") }) : null, /* @__PURE__ */ a.createElement(
        I,
        {
          label: u(t, "model"),
          value: e.models.join(", ") || "-"
        }
      ), /* @__PURE__ */ a.createElement(I, { label: "Tool calls", value: String(e.toolCalls) }), e.errors.length > 0 ? /* @__PURE__ */ a.createElement(
        I,
        {
          label: "Error",
          value: e.errors.join("; ").slice(0, 120),
          danger: !0
        }
      ) : null, e.resultIndex !== void 0 && n ? /* @__PURE__ */ a.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ a.createElement(
        "a",
        {
          style: { fontSize: 12 },
          onClick: () => n(e.resultIndex)
        },
        "Result: Assistant Message →"
      )) : null, e.options ? /* @__PURE__ */ a.createElement(kt, { label: "Options", onOpen: () => l("options") }, /* @__PURE__ */ a.createElement(Se, { value: e.options, json: !0 })) : null, /* @__PURE__ */ a.createElement(kt, { label: "Usage", onOpen: () => l("usage") }, r), /* @__PURE__ */ a.createElement(kt, { label: "Timing", onOpen: () => l("timing") }, i))
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(j, { strong: !0, style: { fontSize: 12 } }, u(t, "thisRequest")), r, /* @__PURE__ */ a.createElement(Us, { request: e, locale: t }), e.sessionTotals ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
        j,
        {
          strong: !0,
          style: { fontSize: 12, display: "block", marginTop: 10 }
        },
        u(t, "sessionTotal")
      ), /* @__PURE__ */ a.createElement(
        Pt,
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
        children: /* @__PURE__ */ a.createElement(Se, { value: e.options, json: !0 })
      }
    ] : []
  ];
  return /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 4px" } }, /* @__PURE__ */ a.createElement(
    Ft,
    {
      size: "small",
      activeKey: s,
      onChange: (f) => l(f),
      items: c,
      tabBarStyle: { marginBottom: 8 }
    }
  ));
}
function Ks(e, n = 200) {
  const t = e.split(`
`, 1)[0].trim();
  return t.length > n ? `${t.slice(0, n)}…` : t;
}
function Vs({
  oldText: e,
  newText: n
}) {
  const t = a.useMemo(
    () => ys(e, n),
    [e, n]
  ), s = a.useMemo(() => Ss(t), [t]), l = a.useMemo(() => Es(t), [t]), i = ie();
  return e === void 0 ? /* @__PURE__ */ a.createElement(j, { type: "secondary", style: { fontSize: 12 } }, u(i, "noPrevPrompt")) : /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ a.createElement("span", { style: { color: "#52c41a" } }, "+", s.added), " ", /* @__PURE__ */ a.createElement("span", { style: { color: "#ff4d4f" } }, "−", s.removed)), /* @__PURE__ */ a.createElement(
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
    l.map((r, c) => {
      if (r.kind === "gap")
        return /* @__PURE__ */ a.createElement(
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
          r.count
        );
      const f = r;
      return /* @__PURE__ */ a.createElement(
        "div",
        {
          key: c,
          style: {
            padding: "0 8px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
            background: f.kind === "add" ? "rgba(82,196,26,0.12)" : f.kind === "del" ? "rgba(255,77,79,0.10)" : void 0,
            color: f.kind === "del" ? "rgba(255,77,79,0.9)" : void 0
          }
        },
        f.kind === "add" ? "+ " : f.kind === "del" ? "− " : "  ",
        f.text || " "
      );
    })
  ));
}
function Gs({ record: e }) {
  var i;
  const n = ie(), t = e.headerTools ?? [], s = e.headerReason === "changed", l = [
    {
      key: "summary",
      label: u(n, "summary"),
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(I, { label: "#", value: String(e.index) }), /* @__PURE__ */ a.createElement(
        I,
        {
          label: u(n, "status"),
          value: s ? u(n, "promptChanged") : u(n, "promptInitial")
        }
      ), /* @__PURE__ */ a.createElement(I, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ a.createElement(I, { label: "Chars", value: String(((i = e.prompt) == null ? void 0 : i.length) ?? 0) }), /* @__PURE__ */ a.createElement(I, { label: "Tools", value: String(t.length) }))
    },
    ...s ? [
      {
        key: "diff",
        label: "Diff",
        children: /* @__PURE__ */ a.createElement(
          Vs,
          {
            oldText: e.prevPrompt,
            newText: e.prompt ?? ""
          }
        )
      }
    ] : [],
    {
      key: "prompt",
      label: u(n, "prompt"),
      children: /* @__PURE__ */ a.createElement(Se, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ a.createElement("div", { style: { paddingTop: 4 } }, t.map((r) => /* @__PURE__ */ a.createElement(j, { key: r, code: !0, style: { fontSize: 11 } }, r)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ a.createElement(
          Nt,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((r, c) => {
              var y;
              const f = typeof r.name == "string" && r.name || typeof ((y = r.function) == null ? void 0 : y.name) == "string" && r.function.name || `tool-${c + 1}`;
              return {
                key: String(c),
                label: /* @__PURE__ */ a.createElement(j, { code: !0, style: { fontSize: 11 } }, f),
                children: /* @__PURE__ */ a.createElement(Se, { value: r })
              };
            })
          }
        ) : null)
      }
    ] : [],
    {
      key: "raw",
      label: "Raw",
      children: /* @__PURE__ */ a.createElement(Se, { value: e.raw })
    }
  ];
  return /* @__PURE__ */ a.createElement(Ft, { size: "small", items: l, tabBarStyle: { marginBottom: 8 } });
}
function wt({ dragRef: e, width: n }) {
  return /* @__PURE__ */ a.createElement(
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
function it({ onClose: e }) {
  return e ? /* @__PURE__ */ a.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ a.createElement(
    Hn,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ a.createElement(Ps, null),
      onClick: e
    }
  )) : null;
}
function Xs({
  record: e,
  request: n,
  onJumpSession: t,
  onJumpRecord: s,
  onSelectTurn: l,
  onClose: i
}) {
  var v, $, D, w, M;
  const r = ie(), [c, f] = Ve(400), y = Ls(null);
  if (Rs(() => {
    const k = (P) => {
      const A = y.current;
      if (A === null) return;
      const C = A.anchorX - P.clientX;
      f(
        Math.min(js, Math.max(Ds, A.anchorWidth + C))
      );
    }, O = () => {
      y.current = null;
    };
    return window.addEventListener("pointermove", k), window.addEventListener("pointerup", O), () => {
      window.removeEventListener("pointermove", k), window.removeEventListener("pointerup", O);
    };
  }, []), e === null && n === null)
    return /* @__PURE__ */ a.createElement(
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
      /* @__PURE__ */ a.createElement(
        tn,
        {
          image: tn.PRESENTED_IMAGE_SIMPLE,
          description: u(r, "selectRecord")
        }
      )
    );
  if (e === null && n !== null)
    return /* @__PURE__ */ a.createElement(
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
      /* @__PURE__ */ a.createElement(wt, { dragRef: y, width: c }),
      /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(it, { onClose: i }), /* @__PURE__ */ a.createElement(Ws, { request: n, onJumpRecord: s }))
    );
  const o = e;
  if (o.kind === "system" && o.prompt !== void 0)
    return /* @__PURE__ */ a.createElement(
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
      /* @__PURE__ */ a.createElement(wt, { dragRef: y, width: c }),
      /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(it, { onClose: i }), /* @__PURE__ */ a.createElement(Gs, { record: o }))
    );
  const h = o.usage, E = o.timing, d = [];
  if (d.push({
    key: "summary",
    label: u(r, "summary"),
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(I, { label: "#", value: String(o.index) }), /* @__PURE__ */ a.createElement(I, { label: "Kind", value: Pn(o, r) }), o.runIndex > 0 && l ? /* @__PURE__ */ a.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ a.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => l(o.runIndex)
      },
      "Request #",
      o.runIndex,
      " →"
    )) : null, /* @__PURE__ */ a.createElement(
      I,
      {
        label: u(r, "status"),
        value: o.running ? u(r, "running") : o.isError ? u(r, "error") : u(r, "success"),
        danger: o.isError
      }
    ), o.provider ? /* @__PURE__ */ a.createElement(I, { label: "Provider", value: o.provider }) : null, o.model ? /* @__PURE__ */ a.createElement(I, { label: u(r, "model"), value: o.model }) : null, o.toolName ? /* @__PURE__ */ a.createElement(I, { label: "Tool", value: o.toolName }) : null, o.inSkill ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: u(r, "skillResource"),
        value: o.inSkillLoaded ? `⚡ ${o.inSkill}` : `⚡ ${o.inSkill}（${u(r, "skillBypass")}）`
      }
    ) : null, o.guidedSkill ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: u(r, "skillGuided"),
        value: `∈ ${o.guidedSkill}（${o.guidedReason === "slash" ? u(r, "guidedBySlash") : u(r, "guidedByLoad")}）`
      }
    ) : null, o.toolOutputChars ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: u(r, "outputSize"),
        value: o.toolOutputBytes ? `${Q(o.toolOutputChars)} ${u(
          r,
          "charUnit"
        )} · ${Lt(o.toolOutputBytes)} (${u(
          r,
          "beforeTruncation"
        )})` : `${Q(o.toolOutputChars)} ${u(
          r,
          "charUnit"
        )}`
      }
    ) : null, o.kind === "user" && (o.channel || o.userId) ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: u(r, "source"),
        value: [o.channel, o.userId].filter(Boolean).join(" · ")
      }
    ) : null, o.receipt ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: u(r, "channel"),
        value: o.receipt.channel ?? "-"
      }
    ) : null, /* @__PURE__ */ a.createElement(
      I,
      {
        label: u(r, "duration"),
        value: pe(o.timeSeconds)
      }
    ), o.note ? /* @__PURE__ */ a.createElement(j, { type: "warning", style: { fontSize: 12 } }, o.note) : null, o.spawnSession ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ a.createElement(
      I,
      {
        label: u(r, "spawnedAgent"),
        value: o.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ a.createElement(
      Hn,
      {
        size: "small",
        onClick: () => o.spawnSession && t(o.spawnSession),
        style: { marginTop: 4 }
      },
      u(r, "openChildSession")
    ) : null) : null)
  }), o.kind === "message" && (o.usage || o.timing || o.options || (v = o.apiPayload) != null && v.params || o.toolCalls && o.toolCalls.length > 0)) {
    const k = ($ = o.apiPayload) == null ? void 0 : $.params, O = k !== void 0 && o.options !== void 0;
    d.push({
      key: "request",
      label: u(r, "requestTab"),
      children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, o.toolCalls && o.toolCalls.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(j, { strong: !0, style: { fontSize: 12 } }, u(r, "toolCallsEmitted"), " (", o.toolCalls.length, ")"), o.toolCalls.map((P, A) => /* @__PURE__ */ a.createElement(
        "div",
        {
          key: P.id || A,
          style: { display: "flex", gap: 6, alignItems: "baseline" }
        },
        /* @__PURE__ */ a.createElement(j, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, P.name),
        P.id ? /* @__PURE__ */ a.createElement(
          j,
          {
            type: "secondary",
            style: { fontSize: 10, flexShrink: 0 }
          },
          "…",
          P.id.slice(-8)
        ) : null
      ))) : null, k || o.options ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(j, { strong: !0, style: { fontSize: 12 } }, u(r, "generationOptions")), O ? /* @__PURE__ */ a.createElement(
        j,
        {
          type: "secondary",
          style: { fontSize: 11, display: "block" }
        },
        `${u(r, "wireParams")} + ${u(
          r,
          "callOptionsDigest"
        )}`
      ) : null, /* @__PURE__ */ a.createElement(
        Se,
        {
          value: { ...o.options ?? {}, ...k ?? {} },
          json: !0
        }
      )) : null, o.usage ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(j, { strong: !0, style: { fontSize: 12 } }, u(r, "usage")), /* @__PURE__ */ a.createElement(
        Pt,
        {
          input: o.usage.input_tokens ?? 0,
          output: o.usage.output_tokens ?? 0,
          cacheRead: o.usage.cache_input_tokens ?? 0,
          cacheWrite: o.usage.cache_creation_input_tokens ?? 0,
          reasoning: o.usage.reasoning_tokens ?? 0
        }
      )) : null, /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(j, { strong: !0, style: { fontSize: 12 } }, u(r, "timing")), /* @__PURE__ */ a.createElement(
        I,
        {
          label: u(r, "startedAt"),
          value: _e(o.startedAt)
        }
      ), /* @__PURE__ */ a.createElement(
        I,
        {
          label: u(r, "duration"),
          value: pe(o.timeSeconds)
        }
      ), o.timing ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
        I,
        {
          label: u(r, "ttftLabel"),
          value: pe(o.timing.ttft_ms / 1e3)
        }
      ), /* @__PURE__ */ a.createElement(
        I,
        {
          label: u(r, "decodeLabel"),
          value: pe(o.timing.decode_ms / 1e3)
        }
      ), /* @__PURE__ */ a.createElement(
        I,
        {
          label: u(r, "throughput"),
          value: rt(
            (D = o.usage) == null ? void 0 : D.output_tokens,
            o.timing.decode_ms / 1e3
          )
        }
      )) : /* @__PURE__ */ a.createElement(j, { type: "secondary", style: { fontSize: 11 } }, u(r, "noTiming"))))
    });
  }
  if (o.kind === "tool") {
    if (o.toolInput && d.push({
      key: "payload",
      label: u(r, "input"),
      children: /* @__PURE__ */ a.createElement(Se, { value: o.toolInput, json: !0 })
    }), (o.toolOutput || o.toolError) && d.push({
      key: "result",
      label: u(r, "output"),
      children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, o.toolError ? /* @__PURE__ */ a.createElement(j, { type: "danger", style: { fontSize: 12 } }, o.toolError) : null, o.toolOutput ? /* @__PURE__ */ a.createElement(Se, { value: o.toolOutput }) : null)
    }), o.toolSchema) {
      const k = o.toolSchema.function, O = o.toolSchema, P = typeof (k == null ? void 0 : k.description) == "string" ? k.description : typeof O.description == "string" ? O.description : void 0, A = (k == null ? void 0 : k.parameters) !== void 0 ? k.parameters : O.parameters;
      d.push({
        key: "schema",
        label: "Schema",
        children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ a.createElement(j, { type: "secondary", style: { fontSize: 11 } }, u(r, "toolSchemaNote")), P ? /* @__PURE__ */ a.createElement(
          j,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          P
        ) : null, A !== void 0 ? /* @__PURE__ */ a.createElement(Se, { value: A, json: !0 }) : null)
      });
    }
  } else if (o.outputText || o.thinkingText || o.messages || o.marker || o.toolCalls && o.toolCalls.length > 0) {
    if (o.inputNew || o.messagesMeta) {
      const k = ((w = o.inputNew) == null ? void 0 : w.length) ?? 0, O = ((M = o.messagesMeta) == null ? void 0 : M.count) ?? 0;
      let P;
      o.contextReset ? P = `${u(r, "deltaReset")} (${O})` : k === 0 ? P = u(r, "deltaNoChange") : o.inputNew && o.inputNew.length === 1 && o.inputNew[0].role === "assistant" && O > 1 ? P = u(r, "deltaTailUpdate") : P = `${u(r, "deltaAppend")} (${k})`, d.push({
        key: "input",
        label: u(r, "inputTab"),
        children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ a.createElement(I, { label: u(r, "deltaKind"), value: P }), o.contextReset ? /* @__PURE__ */ a.createElement(j, { type: "warning", style: { fontSize: 12 } }, u(r, "contextReset")) : null, o.resetDetail ? /* @__PURE__ */ a.createElement(
          "div",
          {
            style: {
              border: "1px solid rgba(250,173,20,0.4)",
              borderRadius: 6,
              padding: "6px 8px"
            }
          },
          /* @__PURE__ */ a.createElement(
            I,
            {
              label: u(r, "resetBreakAt"),
              value: `#${o.resetDetail.breakAt + 1}`
            }
          ),
          /* @__PURE__ */ a.createElement(
            I,
            {
              label: u(r, "resetSizes"),
              value: `${o.resetDetail.beforeCount} ${u(
                r,
                "resetMsgs"
              )} · ${Q(o.resetDetail.beforeChars)} ${u(
                r,
                "charUnit"
              )} → ${o.resetDetail.afterCount} ${u(
                r,
                "resetMsgs"
              )} · ${Q(o.resetDetail.afterChars)} ${u(
                r,
                "charUnit"
              )}`
            }
          ),
          /* @__PURE__ */ a.createElement(
            I,
            {
              label: u(r, "resetRoles"),
              value: Object.keys(o.resetDetail.afterByRole).map((A) => {
                const C = o.resetDetail.beforeByRole[A] ?? 0, L = o.resetDetail.afterByRole[A] ?? 0;
                return C === L ? null : `${A} ${C}→${L}`;
              }).filter(Boolean).join(" · ") || "-"
            }
          ),
          o.resetDetail.changes.length > 0 ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 4 } }, /* @__PURE__ */ a.createElement(j, { strong: !0, style: { fontSize: 12 } }, u(r, "resetChanges")), o.resetDetail.changes.slice(0, 20).map((A, C) => /* @__PURE__ */ a.createElement(
            "div",
            {
              key: C,
              style: {
                display: "flex",
                gap: 6,
                alignItems: "baseline"
              }
            },
            /* @__PURE__ */ a.createElement(
              at,
              {
                color: A.status === "kept" ? "default" : A.status === "rewritten" ? "orange" : A.status === "removed" ? "red" : "green",
                style: { marginInlineEnd: 0, fontSize: 10 }
              },
              u(r, qs[A.status])
            ),
            /* @__PURE__ */ a.createElement(j, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, A.role),
            A.status === "rewritten" ? /* @__PURE__ */ a.createElement(
              j,
              {
                type: "secondary",
                style: { fontSize: 11, minWidth: 0 },
                ellipsis: !0
              },
              `${u(r, "resetOldPrefix")}${(A.oldText ?? "").slice(0, 40)} → ${u(
                r,
                "resetNewPrefix"
              )}${(A.newText ?? "").slice(0, 40)}`
            ) : /* @__PURE__ */ a.createElement(
              j,
              {
                type: "secondary",
                style: { fontSize: 11, minWidth: 0 },
                ellipsis: !0
              },
              `${A.status === "removed" ? u(r, "resetOldPrefix") : u(r, "resetNewPrefix")}${(A.oldText ?? A.newText ?? "").slice(
                0,
                60
              )}`
            )
          ))) : null
        ) : null, o.messagesMeta ? /* @__PURE__ */ a.createElement(
          I,
          {
            label: u(r, "inputTotal"),
            value: `${o.messagesMeta.count} · ${Q(
              o.messagesMeta.totalChars
            )} ${u(r, "charUnit")}`
          }
        ) : null, o.inputNew && o.inputNew.length > 0 ? /* @__PURE__ */ a.createElement(a.Fragment, null, o.inputNew.some((A) => A.role === "assistant") ? /* @__PURE__ */ a.createElement(
          j,
          {
            type: "secondary",
            style: { fontSize: 11, display: "block" }
          },
          u(r, "assistantInputNote")
        ) : null, /* @__PURE__ */ a.createElement(
          Nt,
          {
            size: "small",
            defaultActiveKey: o.inputNew.length <= 5 ? ["messages"] : [],
            items: [
              {
                key: "messages",
                label: `${u(r, "inputMessages")} (${o.inputNew.length})`,
                children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, o.inputNew.map((A, C) => /* @__PURE__ */ a.createElement(
                  Ys,
                  {
                    key: C,
                    message: A,
                    locale: r
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
      d.push({
        key: "api",
        label: "API",
        children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ a.createElement(j, { type: "secondary", style: { fontSize: 11 } }, u(r, "apiPayloadNote")), /* @__PURE__ */ a.createElement(I, { label: "Model", value: k.model }), /* @__PURE__ */ a.createElement(
          I,
          {
            label: u(r, "apiMsgCount"),
            value: String(k.messages.length)
          }
        ), k.usage ? /* @__PURE__ */ a.createElement(
          I,
          {
            label: "Usage",
            value: `in ${k.usage.input_tokens ?? 0} · out ${k.usage.output_tokens ?? 0} tok`
          }
        ) : null, k.durationMs !== void 0 ? /* @__PURE__ */ a.createElement(
          I,
          {
            label: u(r, "duration"),
            value: pe(k.durationMs / 1e3)
          }
        ) : null, /* @__PURE__ */ a.createElement(
          Nt,
          {
            size: "small",
            items: [
              {
                key: "api-msgs",
                label: `${u(r, "apiMessages")} (${k.messages.length})`,
                children: /* @__PURE__ */ a.createElement(
                  Qs,
                  {
                    messages: k.messages,
                    locale: r
                  }
                )
              }
            ]
          }
        ))
      });
    }
    d.push({
      key: "raw",
      label: u(r, "output"),
      children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, o.inboundParts && o.inboundParts.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(j, { type: "secondary", style: { fontSize: 12 } }, `${u(r, "inboundParts")} (${o.inboundParts.length})`), o.inboundParts.map((k, O) => /* @__PURE__ */ a.createElement(
        "div",
        {
          key: O,
          style: { display: "flex", gap: 8, alignItems: "baseline" }
        },
        /* @__PURE__ */ a.createElement(j, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, k.type.replace("Content", "")),
        /* @__PURE__ */ a.createElement(
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
      ))) : null, o.marker ? /* @__PURE__ */ a.createElement(Se, { value: o.marker }) : null, o.toolCalls && o.toolCalls.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(j, { type: "secondary", style: { fontSize: 12 } }, `${u(r, "toolCall")} (${o.toolCalls.length})`), o.toolCalls.map((k, O) => /* @__PURE__ */ a.createElement("div", { key: k.id || O, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ a.createElement(j, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", k.name), /* @__PURE__ */ a.createElement(j, { type: "secondary", style: { fontSize: 11 } }, k.id)))) : null, o.note ? /* @__PURE__ */ a.createElement(j, { type: "warning", style: { fontSize: 12 } }, o.note) : null, o.messages && o.messages.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(j, { type: "secondary", style: { fontSize: 12 } }, `${u(r, "query")} (${o.messages.length})`), o.messages.map((k, O) => /* @__PURE__ */ a.createElement(
        "div",
        {
          key: O,
          style: { display: "flex", gap: 8, alignItems: "baseline" }
        },
        /* @__PURE__ */ a.createElement(j, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, k.role),
        /* @__PURE__ */ a.createElement(
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
      ))) : null, o.thinkingText ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(j, { type: "secondary", style: { fontSize: 12 } }, u(r, "thinking")), /* @__PURE__ */ a.createElement(Se, { value: o.thinkingText })) : null, o.outputText ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(j, { type: "secondary", style: { fontSize: 12 } }, u(r, "output")), /* @__PURE__ */ a.createElement(Se, { value: o.outputText })) : null)
    });
  }
  return (o.startedAt !== null || h || E) && d.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(I, { label: "Started", value: _e(o.startedAt) }), /* @__PURE__ */ a.createElement(I, { label: "Total", value: pe(o.timeSeconds) }), E ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      I,
      {
        label: "TTFT",
        value: pe(E.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      I,
      {
        label: "Decoding",
        value: pe(E.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      I,
      {
        label: u(r, "throughput"),
        value: rt(
          h == null ? void 0 : h.output_tokens,
          E.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ a.createElement(j, { type: "secondary", style: { fontSize: 12 } }, u(r, "noTiming")))
  }), h && d.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(I, { label: "Input", value: Q(h.input_tokens) }), /* @__PURE__ */ a.createElement(I, { label: "Output", value: Q(h.output_tokens) }), h.cache_creation_input_tokens ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: "Cache write",
        value: Q(h.cache_creation_input_tokens)
      }
    ) : null, h.cache_input_tokens ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: "Cache read",
        value: Q(h.cache_input_tokens)
      }
    ) : null, h.total_tokens !== void 0 ? /* @__PURE__ */ a.createElement(I, { label: "Total", value: Q(h.total_tokens) }) : null, h.time !== void 0 ? /* @__PURE__ */ a.createElement(I, { label: "API time", value: pe(h.time) }) : null)
  }), d.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ a.createElement(Se, { value: o.raw })
  }), /* @__PURE__ */ a.createElement(
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
    /* @__PURE__ */ a.createElement(wt, { dragRef: y, width: c }),
    /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(it, { onClose: i }), /* @__PURE__ */ a.createElement(Ft, { size: "small", items: d, tabBarStyle: { marginBottom: 8 } }))
  );
}
const qs = {
  kept: "resetKept",
  removed: "resetRemoved",
  rewritten: "resetRewritten",
  added: "resetAdded"
}, sn = 8, Js = {
  system: "green",
  user: "blue",
  tool: "gold"
};
function Qs({
  messages: e,
  locale: n
}) {
  const [t, s] = Ve(null), [l, i] = Ve(null), [r, c] = Ve(!1), f = /* @__PURE__ */ new Map();
  for (const d of e)
    f.set(d.role, (f.get(d.role) ?? 0) + 1);
  const y = t === null ? e.map((d, v) => v) : e.flatMap(
    (d, v) => d.role === t ? [v] : []
  ), o = !r && t === null && e.length > sn + 4 ? e.length - sn : 0, h = y.filter((d) => d >= o), E = (d, v, $) => /* @__PURE__ */ a.createElement(
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
    d
  );
  return /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ a.createElement("div", { style: { display: "flex", gap: 4, flexWrap: "wrap" } }, E(
    `${u(n, "apiFilterAll")} ${e.length}`,
    t === null,
    () => s(null)
  ), [...f.entries()].map(
    ([d, v]) => E(
      `${d} ${v}`,
      t === d,
      () => s(t === d ? null : d)
    )
  )), o > 0 ? /* @__PURE__ */ a.createElement(
    "a",
    {
      style: { fontSize: 11 },
      onClick: () => c(!0)
    },
    `⋯ ${u(n, "apiShowEarlier")} (${o})`
  ) : null, r && t === null && o === 0 ? /* @__PURE__ */ a.createElement("a", { style: { fontSize: 11 }, onClick: () => c(!1) }, u(n, "apiCollapseEarlier")) : null, /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 4 } }, h.map((d) => {
    const v = e[d], $ = l === d;
    return /* @__PURE__ */ a.createElement(
      "div",
      {
        key: d,
        style: {
          borderRadius: 6,
          border: `1px solid ${$ ? "rgba(22,119,255,0.35)" : "rgba(128,128,128,0.18)"}`,
          padding: $ ? "4px 8px" : "2px 8px",
          background: $ ? "rgba(22,119,255,0.04)" : "transparent"
        }
      },
      /* @__PURE__ */ a.createElement(
        "div",
        {
          onClick: () => i($ ? null : d),
          style: {
            display: "flex",
            gap: 6,
            alignItems: "center",
            cursor: "pointer",
            minWidth: 0
          }
        },
        /* @__PURE__ */ a.createElement(
          at,
          {
            color: Js[v.role] ?? "purple",
            style: {
              marginInlineEnd: 0,
              fontSize: 10,
              lineHeight: "16px",
              flexShrink: 0
            }
          },
          v.role
        ),
        /* @__PURE__ */ a.createElement(j, { type: "secondary", style: { fontSize: 10, flexShrink: 0 } }, "#", d + 1),
        v.toolCallId ? /* @__PURE__ */ a.createElement(j, { code: !0, style: { fontSize: 9, flexShrink: 0 } }, "…", v.toolCallId.slice(-8)) : null,
        /* @__PURE__ */ a.createElement(j, { type: "secondary", style: { fontSize: 10, flexShrink: 0 } }, Q(v.content.length), " ", u(n, "charUnit")),
        $ ? null : /* @__PURE__ */ a.createElement(
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
      $ ? /* @__PURE__ */ a.createElement(
        "div",
        {
          style: {
            marginTop: 4,
            maxHeight: 260,
            overflowY: "auto"
          }
        },
        /* @__PURE__ */ a.createElement(Se, { value: v.content })
      ) : null
    );
  })));
}
function Ys({
  message: e,
  locale: n
}) {
  const [t, s] = a.useState(!1), l = e.text ?? "";
  return /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("div", { style: { display: "flex", gap: 8, alignItems: "baseline" } }, /* @__PURE__ */ a.createElement(j, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, e.role), /* @__PURE__ */ a.createElement(j, { type: "secondary", style: { fontSize: 11 } }, Q(e.chars), " ", u(n, "charUnit"), e.toolCallId ? ` · ${e.toolCallId}` : ""), l.length > 200 ? /* @__PURE__ */ a.createElement(
    "a",
    {
      style: { fontSize: 11 },
      onClick: () => s((i) => !i)
    },
    t ? u(n, "inputCollapseText") : u(n, "inputExpand")
  ) : null), l ? /* @__PURE__ */ a.createElement(
    "div",
    {
      style: t ? void 0 : {
        maxHeight: 57,
        overflow: "hidden",
        position: "relative"
      }
    },
    /* @__PURE__ */ a.createElement(Se, { value: l })
  ) : null);
}
const Zs = {
  slash: "spanTriggerSlash",
  load: "spanTriggerLoad",
  resource: "spanTriggerResource"
}, el = {
  run_end: "spanEndRun",
  last_activity: "spanEndLast"
};
function tl({
  span: e,
  records: n,
  onJumpRecord: t,
  onClose: s
}) {
  const l = ie(), i = e.endKind ? u(l, el[e.endKind]) : u(l, "spanOpen"), r = ks(e);
  return new Map(n.map((c) => [c.index, c])), /* @__PURE__ */ a.createElement(
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
    /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(it, { onClose: s }), /* @__PURE__ */ a.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ a.createElement(
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
    ), /* @__PURE__ */ a.createElement(j, { strong: !0, style: { fontSize: 13 } }, e.skill), /* @__PURE__ */ a.createElement(
      at,
      {
        color: e.bypass ? "orange" : "geekblue",
        style: { marginInlineEnd: 0, fontSize: 10 }
      },
      u(l, Zs[e.trigger])
    )), /* @__PURE__ */ a.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ a.createElement(
      I,
      {
        label: u(l, "spanStart"),
        value: _e(e.startT)
      }
    ), /* @__PURE__ */ a.createElement(I, { label: u(l, "spanEnd"), value: i }), e.endT !== null ? /* @__PURE__ */ a.createElement(I, { label: " ", value: _e(e.endT) }) : null, e.lastActivityT !== null ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: u(l, "spanLastActivity"),
        value: _e(e.lastActivityT)
      }
    ) : null, /* @__PURE__ */ a.createElement(
      I,
      {
        label: u(l, "spanDuration"),
        value: r === null ? "-" : pe(r / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      I,
      {
        label: u(l, "spanAttributed"),
        value: String(e.attributedIndexes.length)
      }
    ), /* @__PURE__ */ a.createElement(
      I,
      {
        label: u(l, "spanLoadState"),
        value: e.bypass ? u(l, "skillBypass") : e.loadSeq !== null ? `seq ${e.loadSeq}` : "-",
        danger: e.bypass
      }
    )), e.evidences.length > 0 ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 10 } }, /* @__PURE__ */ a.createElement(j, { strong: !0, style: { fontSize: 12 } }, u(l, "spanEvidence")), e.evidences.slice(0, 30).map((c, f) => /* @__PURE__ */ a.createElement(
      "div",
      {
        key: f,
        style: {
          display: "flex",
          gap: 6,
          alignItems: "baseline",
          padding: "2px 0"
        }
      },
      /* @__PURE__ */ a.createElement(
        at,
        {
          color: c.kind === "path" ? "geekblue" : c.kind === "content" ? "blue" : "default",
          style: { marginInlineEnd: 0, fontSize: 10 }
        },
        c.kind
      ),
      /* @__PURE__ */ a.createElement(
        "a",
        {
          style: { fontSize: 12 },
          onClick: () => t(c.recordIndex)
        },
        "#",
        c.recordIndex
      ),
      /* @__PURE__ */ a.createElement(j, { type: "secondary", style: { fontSize: 11 } }, c.detail)
    ))) : /* @__PURE__ */ a.createElement(
      j,
      {
        type: "secondary",
        style: { fontSize: 12, display: "block", marginTop: 10 }
      },
      u(l, "spanNoActivity")
    ))
  );
}
const fe = window.QwenPaw.host.React, nl = fe.useRef, sl = fe.useState;
fe.useCallback;
fe.useMemo;
const ll = fe.useEffect, ol = fe.useLayoutEffect, il = fe.useReducer;
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
function rl(e) {
  return e ? e() : void 0;
}
function al(e, n, t) {
  const s = new Array(e);
  return new Proxy(s, {
    get(l, i, r) {
      if (typeof i == "string") {
        const c = i.charCodeAt(0);
        if (c >= 48 && c <= 57) {
          const f = +i;
          if (Number.isInteger(f) && f >= 0 && f < e) {
            let y = l[f];
            if (!y) {
              const o = n[f * 2];
              y = l[f] = {
                index: f,
                key: t(f),
                start: o,
                size: n[f * 2 + 1],
                end: o + n[f * 2 + 1],
                lane: 0
              };
            }
            return y;
          }
        }
        if (i === "length") return e;
      }
      return Reflect.get(l, i, r);
    }
  });
}
function Pe(e, n, t) {
  let s = t.initialDeps ?? [], l, i = !0;
  function r() {
    var c;
    const f = process.env.NODE_ENV !== "production" && !!t.key && !!((c = t.debug) != null && c.call(t));
    let y = 0;
    f && (y = Date.now());
    const o = e();
    if (!(o.length !== s.length || o.some((d, v) => s[v] !== d)))
      return l;
    s = o;
    let E = 0;
    if (f && (E = Date.now()), l = n(...o), f) {
      const d = Math.round((Date.now() - y) * 100) / 100, v = Math.round((Date.now() - E) * 100) / 100, $ = v / 16, D = (w, M) => {
        for (w = String(w); w.length < M; )
          w = " " + w;
        return w;
      };
      console.info(
        `%c⏱ ${D(v, 5)} /${D(d, 5)} ms`,
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
    return t != null && t.onChange && !(i && t.skipInitialOnChange) && t.onChange(l), i = !1, l;
  }
  return r.updateDeps = (c) => {
    s = c;
  }, r;
}
function ln(e, n) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const cl = (e, n) => Math.abs(e - n) < 1.01, dl = (e, n, t) => {
  let s;
  return function(...l) {
    e.clearTimeout(s), s = e.setTimeout(() => n.apply(this, l), t);
  };
};
let We;
const Tt = () => {
  if (We !== void 0) return We;
  if (typeof navigator > "u") return We = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return We = !0;
  const e = navigator.maxTouchPoints;
  return We = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, on = (e) => {
  const { offsetWidth: n, offsetHeight: t } = e;
  return { width: n, height: t };
}, ul = (e) => e, pl = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), s = Math.min(e.endIndex + e.overscan, e.count - 1) - n + 1, l = new Array(s);
  for (let i = 0; i < s; i++)
    l[i] = n + i;
  return l;
}, hl = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const s = e.targetWindow;
  if (!s)
    return;
  const l = (r) => {
    const { width: c, height: f } = r;
    n({ width: Math.round(c), height: Math.round(f) });
  };
  if (l(on(t)), !s.ResizeObserver)
    return () => {
    };
  const i = new s.ResizeObserver((r) => {
    const c = () => {
      const f = r[0];
      if (f != null && f.borderBoxSize) {
        const y = f.borderBoxSize[0];
        if (y) {
          l({ width: y.inlineSize, height: y.blockSize });
          return;
        }
      }
      l(on(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(c) : c();
  });
  return i.observe(t, { box: "border-box" }), () => {
    i.unobserve(t);
  };
}, ct = {
  passive: !0
}, fl = typeof window > "u" ? !0 : "onscrollend" in window, ml = (e, n, t) => {
  const s = e.scrollElement;
  if (!s)
    return;
  const l = e.targetWindow;
  if (!l)
    return;
  const i = e.options.useScrollendEvent && fl;
  let r = 0;
  const c = i ? null : dl(
    l,
    () => n(r, !1),
    e.options.isScrollingResetDelay
  ), f = (h) => () => {
    r = t(s), c == null || c(), n(r, h);
  }, y = f(!0), o = f(!1);
  return s.addEventListener("scroll", y, ct), i && s.addEventListener("scrollend", o, ct), () => {
    s.removeEventListener("scroll", y), i && s.removeEventListener("scrollend", o);
  };
}, gl = (e, n) => ml(e, n, (t) => {
  const { horizontal: s, isRtl: l } = e.options;
  return s ? t.scrollLeft * (l && -1 || 1) : t.scrollTop;
}), yl = (e, n, t) => {
  if (t.options.useCachedMeasurements) {
    const s = t.indexFromElement(e), l = t.options.getItemKey(s);
    return t.itemSizeCache.get(l) ?? t.options.estimateSize(s);
  }
  if (n != null && n.borderBoxSize) {
    const s = n.borderBoxSize[0];
    if (s)
      return Math.round(
        s[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  if (!n) {
    const s = t.indexFromElement(e), l = t.options.getItemKey(s), i = t.itemSizeCache.get(l);
    if (i !== void 0)
      return i;
  }
  return e[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, El = (e, {
  adjustments: n = 0,
  behavior: t
}, s) => {
  var l, i;
  (i = (l = s.scrollElement) == null ? void 0 : l.scrollTo) == null || i.call(l, {
    [s.options.horizontal ? "left" : "top"]: e + n,
    behavior: t
  });
}, Sl = El;
class vl {
  constructor(n) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, s, l;
      return ((l = (s = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : s.now) == null ? void 0 : l.call(s)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const s = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((i) => {
          const r = () => {
            const c = i.target, f = this.indexFromElement(c);
            if (!c.isConnected) {
              this.observer.unobserve(c);
              for (const [y, o] of this.elementsCache)
                if (o === c) {
                  this.elementsCache.delete(y);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(f) && this.resizeItem(
              f,
              this.options.measureElement(c, i, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r) : r();
        });
      }));
      return {
        disconnect: () => {
          var l;
          (l = s()) == null || l.disconnect(), t = null;
        },
        observe: (l) => {
          var i;
          return (i = s()) == null ? void 0 : i.observe(l, { box: "border-box" });
        },
        unobserve: (l) => {
          var i;
          return (i = s()) == null ? void 0 : i.unobserve(l);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      var s, l;
      const i = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: ul,
        rangeExtractor: pl,
        onChange: () => {
        },
        measureElement: yl,
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
        const d = t[E];
        d !== void 0 && (i[E] = d);
      }
      const r = this.options;
      let c = null, f = null, y = !1;
      if (r !== void 0 && r.enabled && i.enabled && i.anchorTo === "end" && this.scrollElement !== null) {
        const E = r.count, d = i.count, v = this.getMeasurements(), $ = E > 0 ? ((s = v[0]) == null ? void 0 : s.key) ?? r.getItemKey(0) : null, D = E > 0 ? ((l = v[E - 1]) == null ? void 0 : l.key) ?? r.getItemKey(E - 1) : null;
        if (d !== E || E > 0 && d > 0 && (i.getItemKey(0) !== $ || i.getItemKey(d - 1) !== D)) {
          y = !0;
          const k = E > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? v[0] : null;
          k && (c = [k.key, this.getScrollOffset() - k.start]);
          const O = i.followOnAppend === !0 ? "auto" : i.followOnAppend || null;
          O && d > E && this.isAtEnd(r.scrollEndThreshold) && (E === 0 || i.getItemKey(d - 1) !== D) && (f = O);
        }
      }
      this.options = i, y && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let o = !1, h = 0;
      if (c && this.scrollOffset !== null) {
        const [E, d] = c, v = this.getMeasurements(), { count: $, getItemKey: D } = this.options;
        let w = 0;
        for (; w < $ && D(w) !== E; )
          w++;
        if (w < $) {
          const M = v[w];
          if (M) {
            const k = Math.max(0, M.start + d);
            k !== this.scrollOffset && (h = k - this.scrollOffset, this.scrollOffset = k, o = !0);
          }
        }
      }
      (o || f) && (this.pendingScrollAnchor = [
        o ? c[0] : null,
        o ? c[1] : 0,
        f,
        h
      ]);
    }, this.notify = (t) => {
      var s, l;
      (l = (s = this.options).onChange) == null || l.call(s, this, t);
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
      const s = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== s) {
        if (this.cleanup(), !s) {
          this.maybeNotify();
          return;
        }
        if (this.scrollElement = s, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((i) => {
          this.observer.observe(i);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (i) => {
            this.scrollRect = i, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (i, r) => {
            if (r && this._intendedScrollOffset === null && i === this.scrollOffset)
              return;
            this._intendedScrollOffset !== null && Math.abs(i - this._intendedScrollOffset) < 1.5 && (i = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
            const c = this.getScrollOffset();
            this.scrollDirection = r ? c === i ? this.scrollDirection : c < i ? "forward" : "backward" : null, this.scrollOffset = i, this.isScrolling = r, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const i = this.scrollElement, r = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, c = () => {
            this._iosTouching = !1, !(!Tt() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          i.addEventListener(
            "touchstart",
            r,
            ct
          ), i.addEventListener(
            "touchend",
            c,
            ct
          ), this.unsubs.push(() => {
            i.removeEventListener("touchstart", r), i.removeEventListener("touchend", c), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const l = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, l && this.scrollElement && this.options.enabled) {
        const [i, r, c, f] = l;
        i !== null && !c && (Tt() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? f !== 0 && (this._iosDeferredAdjustment += f) : this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        })), c && this.scrollToEnd({ behavior: c });
      }
    }, this._flushIosDeferredIfReady = () => {
      if (this._iosDeferredAdjustment === 0 || this.isScrolling || this._iosTouching || this._iosJustTouchEnded) return;
      const t = this.getScrollOffset(), s = this.getMaxScrollOffset();
      if (t < 0 || t > s) return;
      if (this._iosDeferredAdjustment < 0 && t >= s - 1) {
        this._iosDeferredAdjustment = 0;
        return;
      }
      const l = this._iosDeferredAdjustment;
      this._iosDeferredAdjustment = 0, this._scrollToOffset(t, {
        adjustments: this.scrollAdjustments += l,
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
      (t, s, l, i, r, c, f, y) => (this.prevLanes !== void 0 && this.prevLanes !== c && (this.lanesChangedFlag = !0), this.prevLanes = c, this.pendingMin = null, {
        count: t,
        paddingStart: s,
        scrollMargin: l,
        getItemKey: i,
        enabled: r,
        lanes: c,
        laneAssignmentMode: f,
        gap: y
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Pe(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: t,
        paddingStart: s,
        scrollMargin: l,
        getItemKey: i,
        enabled: r,
        lanes: c,
        laneAssignmentMode: f,
        gap: y
      }, o) => {
        const h = this.itemSizeCache;
        if (!r)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const w of this.laneAssignments.keys())
            w >= t && this.laneAssignments.delete(w);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((w) => {
          this.itemSizeCache.set(w.key, w.size);
        }));
        const E = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), c === 1) {
          const w = t * 2;
          let M = this._flatMeasurements;
          if (!M || M.length < w) {
            const P = new Float64Array(w);
            M && E > 0 && P.set(M.subarray(0, E * 2)), M = P, this._flatMeasurements = M;
          }
          let k;
          if (E === 0)
            k = s + l;
          else {
            const P = E - 1;
            k = M[P * 2] + M[P * 2 + 1] + y;
          }
          for (let P = E; P < t; P++) {
            const A = i(P), C = h.get(A), L = typeof C == "number" ? C : this.options.estimateSize(P);
            M[P * 2] = k, M[P * 2 + 1] = L, k += L + y;
          }
          const O = al(t, M, i);
          return this.measurementsCache = O, O;
        }
        const d = this.measurementsCache.slice(0, E), v = new Array(c).fill(
          void 0
        ), $ = new Float64Array(c);
        let D = 0;
        for (let w = 0; w < E; w++) {
          const M = d[w];
          M && (v[M.lane] === void 0 && D++, v[M.lane] = w, $[M.lane] = M.end);
        }
        for (let w = E; w < t; w++) {
          const M = i(w), k = this.laneAssignments.get(w);
          let O, P;
          const A = f === "estimate" || h.has(M);
          if (k !== void 0 && this.options.lanes > 1) {
            O = k;
            const H = v[O], se = H !== void 0 ? d[H] : void 0;
            P = se ? se.end + y : s + l;
          } else if (D === c) {
            let H = 0, se = $[0], he = v[0];
            for (let ae = 1; ae < c; ae++) {
              const re = $[ae];
              (re < se || re === se && v[ae] < he) && (H = ae, se = re, he = v[ae]);
            }
            O = H, P = se + y, A && this.laneAssignments.set(w, O);
          } else
            O = w % this.options.lanes, P = s + l, A && this.laneAssignments.set(w, O);
          const C = h.get(M), L = typeof C == "number" ? C : this.options.estimateSize(w), Z = P + L;
          d[w] = {
            index: w,
            start: P,
            size: L,
            end: Z,
            key: M,
            lane: O
          }, v[O] === void 0 && D++, v[O] = w, $[O] = Z;
        }
        return this.measurementsCache = d, d;
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
      (t, s, l, i) => t.length === 0 || s === 0 ? (this.range = null, null) : (this.range = xl(
        t,
        s,
        l,
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
        let t = null, s = null;
        const l = this.calculateRange();
        return l && (t = l.startIndex, s = l.endIndex), this.maybeNotify.updateDeps([this.isScrolling, t, s]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          t,
          s
        ];
      },
      (t, s, l, i, r) => i === null || r === null ? [] : t({
        startIndex: i,
        endIndex: r,
        overscan: s,
        count: l
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (t) => {
      const s = this.options.indexAttribute, l = t.getAttribute(s);
      return l ? parseInt(l, 10) : (console.warn(
        `Missing attribute name '${s}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (t) => {
      var s;
      if (!this.scrollState || this.scrollState.behavior !== "smooth")
        return !0;
      const l = this.scrollState.index ?? ((s = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : s.index);
      if (l !== void 0 && this.range) {
        const i = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), r = Math.max(0, l - i), c = Math.min(
          this.options.count - 1,
          l + i
        );
        return t >= r && t <= c;
      }
      return !0;
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((r, c) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(c));
        });
        return;
      }
      const s = this.indexFromElement(t), l = this.options.getItemKey(s), i = this.elementsCache.get(l);
      i !== t && (i && this.observer.unobserve(i), this.observer.observe(t), this.elementsCache.set(l, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(s) && this.resizeItem(s, this.options.measureElement(t, void 0, this));
    }, this.resizeItem = (t, s) => {
      var l, i;
      if (t < 0 || t >= this.options.count) return;
      let r, c, f;
      const y = this._flatMeasurements;
      if (this.options.lanes === 1 && y !== null)
        f = this.options.getItemKey(t), c = y[t * 2], r = y[t * 2 + 1];
      else {
        const E = this.measurementsCache[t];
        if (!E) return;
        f = E.key, c = E.start, r = E.size;
      }
      const o = this.itemSizeCache.get(f) ?? r, h = s - o;
      if (h !== 0) {
        const E = this.options.anchorTo === "end" && ((l = this.scrollState) == null ? void 0 : l.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, d = E ? this.getTotalSize() : 0, v = this.getScrollOffset() + this.scrollAdjustments, D = !this.itemSizeCache.has(f) ? (
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
        ), w = ((i = this.scrollState) == null ? void 0 : i.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[t] ?? {
            index: t,
            key: f,
            start: c,
            size: r,
            end: c + r,
            lane: 0
          },
          h,
          this
        ) : D);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(f, s), this.itemSizeCacheVersion++;
        let M = !1;
        E ? M = this.applyScrollAdjustment(
          this.getTotalSize() - d
        ) : w && (M = this.applyScrollAdjustment(h)), this.notify(M);
      }
    }, this.getVirtualItems = Pe(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, s) => {
        const l = [];
        for (let i = 0, r = t.length; i < r; i++) {
          const c = t[i], f = s[c];
          l.push(f);
        }
        return l;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const s = this.getMeasurements();
      if (s.length === 0)
        return;
      const l = this._flatMeasurements, i = this.options.lanes === 1 && l != null, r = Un(
        0,
        s.length - 1,
        i ? (c) => l[c * 2] : (c) => ln(s[c]).start,
        t
      );
      return ln(s[r]);
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
    ), this.getDistanceFromEnd = () => Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0), this.isAtEnd = (t = this.options.scrollEndThreshold) => this.getDistanceFromEnd() <= t, this.getOffsetForAlignment = (t, s, l = 0) => {
      if (!this.scrollElement) return 0;
      const i = this.getSize(), r = this.getScrollOffset();
      s === "auto" && (s = t >= r + i ? "end" : "start"), s === "center" ? t += (l - i) / 2 : s === "end" && (t -= i);
      const c = this.getMaxScrollOffset();
      return Math.max(Math.min(c, t), 0);
    }, this.getOffsetForIndex = (t, s = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const l = this.getSize(), i = this.getScrollOffset(), r = this.measurementsCache[t];
      if (!r) return;
      if (s === "auto")
        if (r.end >= i + l - this.options.scrollPaddingEnd)
          s = "end";
        else if (r.start <= i + this.options.scrollPaddingStart)
          s = "start";
        else
          return [i, s];
      if (s === "end" && t === this.options.count - 1)
        return [this.getMaxScrollOffset(), s];
      const c = s === "end" ? r.end + this.options.scrollPaddingEnd : r.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(c, s, r.size),
        s
      ];
    }, this.scrollToOffset = (t, { align: s = "start", behavior: l = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0;
      const i = this.getOffsetForAlignment(t, s), r = this.now();
      this.scrollState = {
        index: null,
        align: s,
        behavior: l,
        startedAt: r,
        lastTargetOffset: i,
        stableFrames: 0
      }, this._scrollToOffset(i, { adjustments: void 0, behavior: l }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (t, {
      align: s = "auto",
      behavior: l = "auto"
    } = {}) => {
      this._iosDeferredAdjustment = 0, t = Math.max(0, Math.min(t, this.options.count - 1));
      const i = this.getOffsetForIndex(t, s);
      if (!i)
        return;
      const [r, c] = i, f = this.now();
      this.scrollState = {
        index: t,
        align: c,
        behavior: l,
        startedAt: f,
        lastTargetOffset: r,
        stableFrames: 0
      }, this._scrollToOffset(r, { adjustments: void 0, behavior: l }), this.scheduleScrollReconcile();
    }, this.scrollBy = (t, { behavior: s = "auto" } = {}) => {
      const l = this.getScrollOffset() + t, i = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: s,
        startedAt: i,
        lastTargetOffset: l,
        stableFrames: 0
      }, this._scrollToOffset(l, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
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
      const s = this.getMeasurements();
      let l;
      if (s.length === 0)
        l = this.options.paddingStart;
      else if (this.options.lanes === 1) {
        const i = s.length - 1, r = this._flatMeasurements;
        r != null ? l = r[i * 2] + r[i * 2 + 1] : l = ((t = s[i]) == null ? void 0 : t.end) ?? 0;
      } else {
        const i = Array(this.options.lanes).fill(null);
        let r = s.length - 1;
        for (; r >= 0 && i.some((c) => c === null); ) {
          const c = s[r];
          i[c.lane] === null && (i[c.lane] = c.end), r--;
        }
        l = Math.max(...i.filter((c) => c !== null));
      }
      return Math.max(
        l - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this.takeSnapshot = () => {
      const t = [];
      if (this.itemSizeCache.size === 0) return t;
      const s = this.getMeasurements();
      for (const l of s)
        l && this.itemSizeCache.has(l.key) && t.push({
          index: l.index,
          key: l.key,
          start: l.start,
          size: l.size,
          end: l.end,
          lane: l.lane
        });
      return t;
    }, this._scrollToOffset = (t, {
      adjustments: s,
      behavior: l
    }) => {
      this._intendedScrollOffset = t + (s ?? 0), this.options.scrollToFn(t, { behavior: l, adjustments: s }, this);
    }, this.measure = () => {
      this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(!1);
    }, this.setOptions(n);
  }
  // Returns `true` when it performed a synchronous `scrollTop` write this
  // tick, `false` when the delta was zero or the write was deferred (iOS).
  // `resizeItem` uses that to decide whether the follow-up `notify` must be
  // synchronous so the grown transforms commit in the same paint (#1227).
  applyScrollAdjustment(n, t) {
    return n === 0 ? !1 : (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", n), Tt() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += n, !1) : (this._scrollToOffset(this.getScrollOffset(), {
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
    const s = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, l = s ? s[0] : this.scrollState.lastTargetOffset, i = 1, r = l !== this.scrollState.lastTargetOffset;
    if (!r && cl(l, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= i) {
        this.getScrollOffset() !== l && this._scrollToOffset(l, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, r) {
      const c = this.getSize() || 600, f = Math.abs(l - this.getScrollOffset()), y = this.scrollState.behavior === "smooth" && f > c;
      this.scrollState.lastTargetOffset = l, y || (this.scrollState.behavior = "auto"), this._scrollToOffset(l, {
        adjustments: void 0,
        behavior: y ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const Un = (e, n, t, s) => {
  for (; e <= n; ) {
    const l = (e + n) / 2 | 0, i = t(l);
    if (i < s)
      e = l + 1;
    else if (i > s)
      n = l - 1;
    else
      return l;
  }
  return e > 0 ? e - 1 : 0;
};
function bl(e, n, t) {
  let s = 0;
  for (; s <= n; ) {
    const l = (s + n) / 2 | 0, i = e[l * 2];
    if (i < t)
      s = l + 1;
    else if (i > t)
      n = l - 1;
    else
      return l;
  }
  return s > 0 ? s - 1 : 0;
}
function xl(e, n, t, s, l) {
  const i = e.length - 1;
  if (e.length <= s)
    return { startIndex: 0, endIndex: i };
  if (s === 1 && l !== null) {
    const y = bl(
      l,
      i,
      t
    );
    let o = y;
    const h = t + n;
    for (; o < i && l[o * 2] + l[o * 2 + 1] < h; )
      o++;
    return { startIndex: y, endIndex: o };
  }
  let c = Un(0, i, (y) => e[y].start, t), f = c;
  if (s === 1)
    for (; f < i && e[f].end < t + n; )
      f++;
  else if (s > 1) {
    const y = Array(s).fill(0);
    for (; f < i && y.some((h) => h < t + n); ) {
      const h = e[f];
      y[h.lane] = h.end, f++;
    }
    const o = Array(s).fill(t + n);
    for (; c >= 0 && o.some((h) => h >= t); ) {
      const h = e[c];
      o[h.lane] = h.start, c--;
    }
    c = Math.max(0, c - c % s), f = Math.min(i, f + (s - 1 - f % s));
  }
  return { startIndex: c, endIndex: f };
}
const _t = typeof document < "u" ? ol : ll;
function kl({
  useFlushSync: e = !0,
  directDomUpdates: n = !1,
  directDomUpdatesMode: t = "transform",
  ...s
}) {
  const l = il((o) => o + 1, 0)[1], i = nl({
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
  const r = (o) => {
    const h = i.current;
    if (!h.enabled || !h.container) return;
    const E = o.getTotalSize();
    if (E !== h.lastSize) {
      h.lastSize = E;
      const d = o.options.horizontal ? "width" : "height";
      h.container.style[d] = `${E}px`;
    }
  }, c = (o) => {
    const h = i.current;
    if (!h.enabled || !h.container) return;
    r(o);
    const E = !!o.options.horizontal, d = h.mode === "transform", v = E ? "left" : "top", $ = o.options.scrollMargin, D = o.getVirtualItems();
    for (const w of D) {
      const M = w.start - $, k = o.elementsCache.get(w.key);
      k && h.lastPositions.get(k) !== M && (h.lastPositions.set(k, M), d ? k.style.transform = E ? `translate3d(${M}px, 0, 0)` : `translate3d(0, ${M}px, 0)` : k.style[v] = `${M}px`);
    }
  }, f = {
    ...s,
    onChange: (o, h) => {
      var E;
      const d = i.current;
      let v = !0;
      if (d.enabled) {
        c(o);
        const $ = o.range, D = d.prevRange;
        v = !D || D.isScrolling !== o.isScrolling || D.startIndex !== ($ == null ? void 0 : $.startIndex) || D.endIndex !== ($ == null ? void 0 : $.endIndex), v && (d.prevRange = $ ? {
          startIndex: $.startIndex,
          endIndex: $.endIndex,
          isScrolling: o.isScrolling
        } : null);
      }
      v && (e && h ? rl(l) : l()), (E = s.onChange) == null || E.call(s, o, h);
    }
  }, [y] = sl(() => {
    const o = new vl(f);
    return Object.assign(o, {
      containerRef: (h) => {
        const E = i.current;
        if (E.container = h, E.lastSize = null, h && E.enabled) {
          const d = o.getTotalSize();
          E.lastSize = d;
          const v = o.options.horizontal ? "width" : "height";
          h.style[v] = `${d}px`;
        }
      }
    });
  });
  return y.setOptions(f), _t(() => y._didMount(), []), _t(() => (r(y), y._willUpdate())), _t(() => {
    c(y);
  }), y;
}
function wl(e) {
  return kl({
    observeElementRect: hl,
    observeElementOffset: gl,
    scrollToFn: Sl,
    ...e
  });
}
const pt = window.QwenPaw.host, z = pt.React, { useRef: Tl } = z, { Tag: De, Tooltip: _l } = pt.antd, { Text: ve } = pt.antd.Typography, {
  CaretRightOutlined: Il,
  CloseCircleOutlined: Cl,
  FileTextOutlined: Ml,
  RobotOutlined: $l,
  RocketOutlined: zl,
  SafetyOutlined: Al,
  SendOutlined: Ol,
  SettingOutlined: Rl,
  ToolOutlined: Ll,
  UserOutlined: Nl
} = pt.antdIcons, Pl = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, Dl = {
  user: /* @__PURE__ */ z.createElement(Nl, null),
  message: /* @__PURE__ */ z.createElement($l, null),
  tool: /* @__PURE__ */ z.createElement(Ll, null),
  system: /* @__PURE__ */ z.createElement(Rl, null)
}, rn = {
  approval: { color: "volcano", icon: /* @__PURE__ */ z.createElement(Al, null) },
  receipt: { color: "cyan", icon: /* @__PURE__ */ z.createElement(Ol, null) },
  spawn: { color: "geekblue", icon: /* @__PURE__ */ z.createElement(zl, null) },
  header: { color: "green", icon: /* @__PURE__ */ z.createElement(Ml, null) },
  error: { color: "red", icon: /* @__PURE__ */ z.createElement(Cl, null) }
}, jl = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default"
}, an = {
  running: { zh: "进行中", en: "Running" },
  success: { zh: "成功", en: "Success" },
  error: { zh: "错误", en: "Error" },
  cancelled: { zh: "已取消", en: "Cancelled" },
  interrupted: { zh: "已中断", en: "Interrupted" },
  unknown: { zh: "未知", en: "Unknown" }
}, Bl = 150, Dt = 26, Wn = 34, cn = 9, dn = 30;
function Fl(e) {
  const n = ie(), t = an[e] ?? an.unknown;
  return n === "zh-CN" ? t.zh : t.en;
}
const Hl = {
  ImageContent: "image",
  FileContent: "file",
  AudioContent: "audio",
  VideoContent: "video"
};
function Ul(e, n) {
  const t = /* @__PURE__ */ new Map();
  for (const s of e.inboundParts ?? []) {
    const l = Hl[s.type];
    l && t.set(l, (t.get(l) ?? 0) + 1);
  }
  return t.size === 0 ? null : [...t.entries()].map(([s, l]) => `${u(n, s)}×${l}`).join(" ");
}
function Wl(e, n) {
  const t = e.receipt, s = t != null && t.channel ? ` · ${t.channel}` : "";
  return `📤 ${u(n, "replySent")}${s} · ${((t == null ? void 0 : t.chars) ?? 0).toLocaleString()} ${u(n, "chars")}`;
}
function un({
  record: e,
  selected: n,
  dimmed: t,
  multiRequest: s,
  onSelect: l,
  onOpenRun: i
}) {
  var o, h;
  const r = e.usage, c = r && (r.input_tokens || r.output_tokens) ? `${Q(r.input_tokens)}→${Q(
    r.output_tokens
  )}` : null, f = r && r.reasoning_tokens ? r.reasoning_tokens : null, y = r && c ? [
    `Input ${Q(r.input_tokens)} tok`,
    r.cache_input_tokens ? `Cached ${Q(r.cache_input_tokens)} tok` : null,
    r.cache_creation_input_tokens ? `Cache created ${Q(
      r.cache_creation_input_tokens
    )} tok` : null,
    `Output ${Q(r.output_tokens)} tok`,
    f ? `${u(ie(), "reasoningShort")} ${Q(
      f
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
      onClick: l,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: Dt,
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
      s && i ? /* @__PURE__ */ z.createElement(
        "span",
        {
          title: u(ie(), "runViewHint"),
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
      ) : s ? /* @__PURE__ */ z.createElement("span", { style: { opacity: 0.65, marginRight: 3 } }, "R", e.runIndex) : null,
      "#",
      e.index
    ),
    /* @__PURE__ */ z.createElement(
      De,
      {
        color: e.kind === "tool" && e.skillName ? "geekblue" : e.markerKind && ((o = rn[e.markerKind]) == null ? void 0 : o.color) || Pl[e.kind] || "default",
        icon: e.markerKind && ((h = rn[e.markerKind]) == null ? void 0 : h.icon) || Dl[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      e.kind === "tool" && e.skillName ? u(ie(), "skillLoadKind") : Pn(e, ie())
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
        title: e.inSkillLoaded ? e.inSkill : `${e.inSkill} — ${u(ie(), "skillBypass")}`,
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
      _l,
      {
        title: `${e.guidedSkill} — ${e.guidedReason === "slash" ? u(ie(), "guidedBySlash") : u(ie(), "guidedByLoad")}`
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
      e.receipt ? /* @__PURE__ */ z.createElement(ve, { type: "secondary", style: { fontSize: 12 } }, Wl(e, ie())) : e.kind === "tool" && e.skillName ? /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(ve, { strong: !0, style: { fontSize: 12 } }, e.skillName), e.toolError ? /* @__PURE__ */ z.createElement(ve, { type: "danger", style: { fontSize: 12 } }, ` → ${e.toolError}`) : e.toolOutputChars ? /* @__PURE__ */ z.createElement(ve, { type: "secondary", style: { fontSize: 12 } }, ` · ${u(ie(), "skillLoaded")} ${Q(
        e.toolOutputChars
      )} ${u(ie(), "charUnit")}`) : null) : e.kind === "tool" && e.toolName ? /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(ve, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ z.createElement(ve, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ z.createElement(
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
      ), e.kind === "user" ? /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(ve, { type: "secondary", style: { fontSize: 11 } }, ` ${Ul(e, ie()) ?? ""}`), e.channel && e.channel !== "console" ? /* @__PURE__ */ z.createElement(ve, { code: !0, style: { fontSize: 10 } }, ` @${e.channel}`) : null) : null)
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
      c ? /* @__PURE__ */ z.createElement("span", { title: y }, /* @__PURE__ */ z.createElement("span", { style: { color: "#1677ff" } }, c), f ? /* @__PURE__ */ z.createElement("span", { style: { color: "#722ed1" } }, ` · ${Q(f)}`) : null) : null,
      c ? " · " : "",
      (e.kind === "message" || e.kind === "tool") && pe(e.timeSeconds)
    )
  );
}
function Kl({
  turn: e,
  collapsed: n,
  selected: t,
  cellCount: s,
  onToggle: l,
  onSelect: i,
  onSkillSpanOpen: r
}) {
  const c = ie();
  return /* @__PURE__ */ z.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: Wn }
    },
    /* @__PURE__ */ z.createElement(
      "span",
      {
        onClick: (f) => {
          f.stopPropagation(), i();
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
        Il,
        {
          onClick: (f) => {
            f.stopPropagation(), l();
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
      /* @__PURE__ */ z.createElement(ve, { type: "secondary", style: { fontSize: 11 } }, s, " ", u(c, "events")),
      e.skillsUsed && e.skillsUsed.length > 0 ? (
        /* Wrapper span keeps the click working even if the host's
         * antd Tag version does not forward onClick (idempotent). */
        /* @__PURE__ */ z.createElement(
          "span",
          {
            onClick: (f) => {
              r && (f.stopPropagation(), r(e.skillsUsed[0], e.turn));
            },
            style: {
              display: "inline-flex",
              cursor: r ? "pointer" : void 0
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
          color: jl[e.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        Fl(e.status)
      )
    )
  );
}
function Vl({
  turns: e,
  selectedIndex: n,
  selectedTurn: t,
  collapsedTurns: s,
  focusIndexes: l,
  searchMatchIndexes: i,
  onSelectedIndexChange: r,
  onSelectedTurnChange: c,
  onToggleTurn: f,
  callsCollapsed: y,
  hasOlderRecords: o,
  loadingOlder: h,
  onLoadOlder: E,
  initialRecord: d,
  emptyText: v,
  onSkillSpanOpen: $
}) {
  const D = ie(), w = Tl(null), M = e.filter((L) => L.turn !== null), k = M.length > 1, O = z.useMemo(() => {
    var Z;
    const L = [];
    o && L.push({
      key: "load-older",
      height: dn,
      type: "load-older"
    }), d && (L.push({
      key: "initial",
      height: Dt,
      type: "initial",
      record: d
    }), L.push({
      key: "initial-divider",
      height: cn,
      type: "divider"
    }));
    for (const H of M) {
      const se = H.turn;
      if (L.push({
        key: `turn-${se}`,
        height: Wn,
        type: "boundary",
        turn: H
      }), !s.has(se))
        for (const he of ((Z = H.groups[0]) == null ? void 0 : Z.cells) ?? [])
          y && he.kind === "tool" || L.push({
            key: `rec-${he.index}`,
            height: Dt,
            type: "record",
            record: he
          });
    }
    return L;
  }, [
    M,
    s,
    y,
    o,
    d
  ]), P = z.useCallback(
    (L) => l !== null && !l.has(L.index) || i !== null && !i.has(L.index),
    [l, i]
  ), A = (L) => {
    var Z;
    switch (L.type) {
      case "load-older":
        return /* @__PURE__ */ z.createElement("div", { style: { textAlign: "center", height: dn } }, /* @__PURE__ */ z.createElement(
          "button",
          {
            type: "button",
            onClick: E,
            disabled: h,
            style: {
              border: "1px solid rgba(128,128,128,0.3)",
              borderRadius: 10,
              background: "transparent",
              padding: "1px 12px",
              fontSize: 11,
              cursor: h ? "default" : "pointer",
              color: "rgba(128,128,128,1)"
            }
          },
          h ? "…" : `⋯ ${u(D, "loadOlder")}`
        ));
      case "divider":
        return /* @__PURE__ */ z.createElement(
          "div",
          {
            style: {
              height: cn,
              borderBottom: "1px dashed rgba(128,128,128,0.25)"
            }
          }
        );
      case "initial": {
        const H = L.record;
        return /* @__PURE__ */ z.createElement(
          un,
          {
            record: H,
            selected: n === H.index,
            dimmed: P(H),
            multiRequest: k,
            onSelect: () => r(H.index),
            onOpenRun: c
          }
        );
      }
      case "boundary": {
        const H = L.turn, se = H.turn;
        return /* @__PURE__ */ z.createElement(
          Kl,
          {
            turn: H,
            collapsed: s.has(se),
            selected: t === se,
            cellCount: ((Z = H.groups[0]) == null ? void 0 : Z.cells.length) ?? 0,
            onToggle: () => f(se),
            onSelect: () => c(se),
            onSkillSpanOpen: $ ? (he, ae) => $(he, ae) : void 0
          }
        );
      }
      case "record":
      default: {
        const H = L.record;
        return /* @__PURE__ */ z.createElement(
          un,
          {
            record: H,
            selected: n === H.index,
            dimmed: P(H),
            multiRequest: k,
            onSelect: () => r(H.index),
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
        v ?? u(D, "noSessions")
      )
    );
  const C = O.length <= Bl ? /* @__PURE__ */ z.createElement("div", null, O.map((L) => A(L))) : /* @__PURE__ */ z.createElement(
    Gl,
    {
      rows: O,
      scrollRef: w,
      renderRow: A
    }
  );
  return /* @__PURE__ */ z.createElement(
    "div",
    {
      ref: w,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    C
  );
}
function Gl({
  rows: e,
  scrollRef: n,
  renderRow: t
}) {
  const s = wl({
    count: e.length,
    getScrollElement: () => n.current,
    estimateSize: (l) => e[l].height,
    overscan: 12
  });
  return /* @__PURE__ */ z.createElement(
    "div",
    {
      style: {
        height: s.getTotalSize(),
        position: "relative",
        width: "100%"
      }
    },
    s.getVirtualItems().map((l) => /* @__PURE__ */ z.createElement(
      "div",
      {
        key: e[l.index].key,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: l.size,
          transform: `translateY(${l.start}px)`
        }
      },
      t(e[l.index])
    ))
  );
}
function It(e) {
  return (e == null ? void 0 : e.data) ?? {};
}
function pn(e) {
  return !e || typeof e != "object" || Array.isArray(e) ? !1 : Object.values(e).every(
    (n) => typeof n == "number" && Number.isFinite(n)
  );
}
function Xl(e) {
  if (!Array.isArray(e) || e.length === 0) return;
  const n = [];
  for (const t of e) {
    if (!t || typeof t != "object") continue;
    const s = t;
    n.push({
      role: typeof s.role == "string" ? s.role : "?",
      chars: typeof s.chars == "number" ? s.chars : 0,
      text: typeof s.text == "string" ? s.text : void 0,
      toolCallId: typeof s.tool_call_id == "string" ? s.tool_call_id : void 0
    });
  }
  return n.length > 0 ? n : void 0;
}
function ql(e) {
  if (!(typeof e != "string" || !e))
    try {
      const n = JSON.parse(e);
      if (typeof n.skill == "string" && n.skill)
        return n.skill;
    } catch {
    }
}
function Kn(e) {
  return e.replace(/[/\\]+/g, "/").toLowerCase();
}
function Jl(e) {
  if (typeof e.name == "string" && e.name) return e.name;
  const n = e.function;
  if (n && typeof n == "object" && typeof n.name == "string")
    return n.name;
}
function Ql(e) {
  const n = [];
  for (const t of e.matchAll(/<skill>([\s\S]*?)<\/skill>/g)) {
    const s = t[1].match(/<name>([^<]+)<\/name>/), l = t[1].match(/<dir>([^<]+)<\/dir>/);
    s && l && l[1].trim() && n.push([Kn(l[1].trim()), s[1].trim()]);
  }
  return n.sort((t, s) => s[0].length - t[0].length), n;
}
function hn(e) {
  const n = e.match(/<skill>\s*<name>([^<]+)<\/name>/);
  return n ? n[1].trim() : null;
}
function Ce(e, n = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > n ? `${t.slice(0, n)}…` : t;
}
function Yl(e) {
  var Y, Te;
  const n = [], t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), c = [];
  let f = "";
  const y = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map();
  let d = [];
  const v = /* @__PURE__ */ new Set(), $ = [], D = new bs(), w = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
  let O = [], P = [], A = 0, C = 0;
  const L = (g) => g.groups[0].cells, Z = (g, m) => {
    const S = r.get(g);
    S ? S.push(m) : r.set(g, [m]);
  }, H = (g, m) => {
    if (!g)
      if (f)
        g = f;
      else {
        c.push(m);
        return;
      }
    const S = t.get(g);
    if (S)
      m.runIndex = S.turn ?? 0, L(S).push(m);
    else if (f) {
      const T = t.get(f);
      T ? (m.runIndex = T.turn ?? 0, L(T).push(m)) : Z(g, m);
    } else
      Z(g, m);
  }, se = (g, m) => {
    const S = r.get(m);
    if (S) {
      for (const T of S) L(g).push(T);
      r.delete(m);
    }
  };
  for (const g of e) {
    const m = It(g);
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
        t.set(g.run_id, S), n.push(S), f = g.run_id, se(S, g.run_id);
        for (const N of c.splice(0))
          N.runIndex = C, L(S).push(N);
        const T = Array.isArray(m.messages) ? m.messages : [], x = String(m.query ?? "");
        let R = typeof m.slash_skill == "string" && m.slash_skill ? m.slash_skill : hn(x);
        !R && T.length > 0 && (R = hn(String(((Y = T[0]) == null ? void 0 : Y.text) ?? ""))), R && (v.add(R), $.push([R, "slash"]), D.onRunStart(), D.onSlashSkill(
          R,
          g.seq,
          ge(g.t) ?? 0
        ), w.set(`${R}#${g.seq}`, S));
        const G = {
          index: ++A,
          runIndex: C,
          runId: g.run_id,
          kind: "user",
          text: Ce(x) || Ce((Te = T.at(-1)) == null ? void 0 : Te.text),
          messages: T,
          timeSeconds: 0,
          startedAt: ge(g.t) ?? 0,
          isError: !1,
          running: !1,
          skillName: R ?? void 0,
          model: void 0
        };
        o.set(g.run_id, G), L(S).push(G);
        break;
      }
      case "run/end": {
        const S = t.get(g.run_id);
        f === g.run_id && (f = ""), $.length = 0, D.onRunEnd(g.seq, ge(g.t) ?? 0), y.delete(g.run_id), o.delete(g.run_id);
        const T = String(m.status ?? "unknown");
        if (S && (S.status = T, S.durationMs = typeof m.duration_ms == "number" ? m.duration_ms : null), T === "error" && m.error) {
          const x = S ?? {
            turn: null,
            status: T,
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
        const S = typeof m.child_session_id == "string" ? m.child_session_id : void 0, T = typeof m.child_agent_id == "string" ? m.child_agent_id : "?";
        H(g.run_id, {
          index: ++A,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${T} → ${S ?? "?"}`,
          timeSeconds: 0,
          startedAt: ge(g.t) ?? 0,
          isError: !1,
          running: !1,
          spawnSession: S,
          spawnAgent: T,
          raw: [g]
        });
        break;
      }
      case "message/inbound": {
        const S = Array.isArray(m.parts) ? m.parts : [], T = m.channel_meta && typeof m.channel_meta == "object" ? m.channel_meta : void 0, x = S.map((le) => ({
          type: String(le.type ?? "?"),
          text: typeof le.text == "string" ? le.text : void 0
        })), R = y.get(g.run_id) ?? "", G = T && typeof T.user_id == "string" && T.user_id ? T.user_id : void 0, N = Ce(
          x.map((le) => le.text ?? "").filter(Boolean).join(`
`)
        ), q = o.get(g.run_id);
        q && !q.inboundParts ? (q.inboundParts = x, q.channel = R || void 0, q.userId = G, q.raw = [
          ...q.raw ?? [],
          g
        ], q.text || (q.text = N)) : H(g.run_id, {
          index: ++A,
          runIndex: 0,
          runId: g.run_id,
          kind: "user",
          text: N || "📥",
          timeSeconds: 0,
          startedAt: ge(g.t) ?? 0,
          isError: !1,
          running: !1,
          channel: R || void 0,
          userId: G,
          inboundParts: x,
          raw: [g]
        });
        break;
      }
      case "message/outbound": {
        const S = typeof m.text == "string" ? m.text : "";
        H(g.run_id, {
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
        H(g.run_id, {
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
        const S = String(m.decision ?? "?"), T = m.tool_name ? String(m.tool_name) : "";
        H(g.run_id, {
          index: ++A,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          markerKind: "approval",
          text: T ? `${T} → ${S}` : S,
          timeSeconds: 0,
          startedAt: ge(g.t) ?? 0,
          isError: S === "denied",
          running: !1,
          raw: [g]
        });
        break;
      }
      case "llm/header": {
        const S = typeof m.sha256 == "string" ? m.sha256 : "", T = typeof m.prev_sha256 == "string" ? m.prev_sha256 : void 0, x = m.reason === "changed" ? "changed" : "initial", R = typeof m.system_prompt == "string" ? m.system_prompt : "", G = Array.isArray(m.tools) ? m.tools : [], N = Array.isArray(m.schemas) ? m.schemas : void 0;
        if (H(g.run_id, {
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
          prevPrompt: h.get(T ?? ""),
          headerTools: G,
          headerReason: x,
          sha: S,
          prevSha: T,
          schemas: N,
          raw: [g]
        }), S && h.set(S, R), Array.isArray(N)) {
          E.clear();
          for (const q of N) {
            const le = Jl(q);
            le && E.set(le, q);
          }
        }
        R && (d = Ql(R));
        break;
      }
      case "llm/call": {
        const S = It(g), T = S.options && typeof S.options == "object" && Object.keys(S.options).length > 0 ? S.options : void 0, x = S.messages_meta, R = x && typeof x == "object" ? {
          count: typeof x.count == "number" ? x.count : 0,
          totalChars: typeof x.total_chars == "number" ? x.total_chars : 0,
          charsByRole: pn(x.chars_by_role) ? x.chars_by_role : {},
          countByRole: pn(x.count_by_role) ? x.count_by_role : {},
          maxToolChars: typeof x.max_tool_chars == "number" ? x.max_tool_chars : 0
        } : void 0, G = Xl(S.messages_new);
        let N;
        if (S.context_reset === !0) {
          const te = (G ?? []).map(
            (ue) => ({
              role: ue.role,
              chars: ue.chars,
              text: ue.text
            })
          );
          let ee;
          O.length > 0 || te.length === 0 ? ee = O : ee = P.map((ue) => ({
            role: ue.role,
            text: ue.text
          })), N = Ms(ee, te), R && (N.afterChars = R.totalChars);
        }
        if (G) {
          const te = G.map((ee) => ({
            role: ee.role,
            chars: ee.chars,
            text: ee.text
          }));
          S.context_reset === !0 ? O = te : S.tail_update === !0 ? O = [...O.slice(0, -1), ...te] : typeof S.messages_count == "number" && G.length >= S.messages_count && O.length > 0 ? O = te : O = [...O, ...te];
        }
        P = Array.isArray(S.messages) ? S.messages.map((te) => ({
          role: te.role,
          text: te.text
        })) : [];
        const q = {
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
          inputNew: G,
          contextReset: S.context_reset === !0,
          resetDetail: N,
          options: T
        };
        H(g.run_id, q);
        const le = s.get(g.run_id) ?? [];
        le.push({ cell: q, callData: S, call: g }), s.set(g.run_id, le);
        break;
      }
      case "llm/api_request": {
        const S = s.get(g.run_id), T = S && S.length > 0 ? S[S.length - 1].cell : l.get(g.run_id);
        if (T) {
          const x = Array.isArray(m.messages) ? m.messages : [];
          T.apiPayload = {
            model: String(m.model ?? "unknown"),
            messages: x.map((R) => ({
              role: String(R.role ?? "?"),
              // Provider formatters may leave the block array as a
              // JSON string — decode it into readable text.
              content: $s(
                typeof R.content == "string" ? R.content : JSON.stringify(R.content ?? "")
              ),
              toolCallId: typeof R.tool_call_id == "string" ? R.tool_call_id : void 0
            })),
            params: m.params && typeof m.params == "object" ? m.params : void 0,
            durationMs: typeof m.duration_ms == "number" ? m.duration_ms : void 0
          }, T.raw = [
            ...T.raw ?? [],
            g
          ];
        }
        break;
      }
      case "llm/api_response": {
        const S = l.get(g.run_id);
        S && S.apiPayload && (m.usage && typeof m.usage == "object" && (S.apiPayload.usage = m.usage), typeof m.duration_ms == "number" && (S.apiPayload.durationMs = m.duration_ms));
        break;
      }
      case "llm/result": {
        const S = s.get(g.run_id), T = S == null ? void 0 : S.shift(), x = (T == null ? void 0 : T.callData) ?? {}, R = typeof m.duration_ms == "number" ? m.duration_ms : null, G = m.usage ?? void 0, N = m.timing, q = Array.isArray(m.tool_calls) ? m.tool_calls : void 0, ee = {
          text: (m.error ? Ce(String(m.error)) : Ce(String(m.text ?? ""))) || (q && q.length > 0 ? `🛠 ${q.map((ue) => ue.name).join(", ")}` : ""),
          timeSeconds: R === null ? null : R / 1e3,
          isError: !!m.error,
          running: !1,
          outputText: m.text ? String(m.text) : void 0,
          thinkingText: m.thinking ? String(m.thinking) : void 0,
          usage: G,
          timing: N,
          toolCalls: q,
          note: m.note ? String(m.note) : void 0
        };
        T ? (Object.assign(T.cell, ee), l.set(g.run_id, T.cell), T.cell.model = String(
          m.model ?? x.model ?? T.cell.model
        ), T.cell.raw = [
          ...T.call ? [T.call] : [],
          g
        ]) : H(g.run_id, {
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
        const S = It(g), T = String(S.name ?? "?"), x = T === "Skill" ? ql(S.input) : void 0;
        if (x) {
          v.add(x), $.push([x, "load"]);
          const ce = D.onSkillLoad(
            x,
            g.seq,
            ge(g.t) ?? 0
          ), be = t.get(g.run_id);
          be && w.set(ce, be);
        }
        const R = S.input ? String(S.input) : void 0;
        let G;
        if (!x && R) {
          const ce = typeof S.skill_resource == "string" ? S.skill_resource : void 0;
          ce && (G = ce);
        }
        if (!x && !G && R && d.length > 0) {
          const ce = Kn(R);
          for (const [be, Be] of d)
            if (ce.includes(be)) {
              G = Be;
              break;
            }
        }
        let N, q;
        if (!x && !G && R && M.size > 0) {
          const ce = _s(R, M);
          ce && (N = ce.skill, q = ce.feature);
        }
        let le, te;
        if (!x && !G && !N && $.length > 0) {
          const [ce, be] = $[$.length - 1];
          le = ce, te = be;
        }
        const ee = D.onToolCall({
          attribution: G ? { skill: G, kind: "path", detail: "skill dir in input" } : N ? {
            skill: N,
            kind: "content",
            detail: `“${q}” in input (skill doc)`
          } : le ? {
            skill: le,
            kind: "temporal",
            detail: te === "slash" ? "after slash invocation" : "after skill load"
          } : null,
          recordIndex: A + 1,
          seq: g.seq,
          t: ge(g.t) ?? 0
        });
        if (ee && !w.has(ee)) {
          const ce = t.get(g.run_id);
          ce && w.set(ee, ce);
        }
        const ue = {
          index: ++A,
          runIndex: 0,
          runId: g.run_id,
          kind: "tool",
          text: x ? `📚 ${x}` : `${T}(${Ce(String(S.input ?? ""), 60)})`,
          timeSeconds: null,
          startedAt: ge(g.t) ?? 0,
          isError: !1,
          running: !0,
          toolName: T,
          skillName: x,
          inSkill: G,
          inSkillLoaded: G ? v.has(G) : void 0,
          guidedSkill: le ?? N,
          guidedReason: te ?? (N ? "load" : void 0),
          skillSpanId: ee ?? void 0,
          toolInput: S.input ? String(S.input) : void 0,
          toolSchema: E.get(T)
        };
        H(g.run_id, ue);
        const Ie = i.get(g.run_id) ?? [];
        Ie.push({ cell: ue, callData: S, call: g }), i.set(g.run_id, Ie);
        break;
      }
      case "tool/result": {
        const S = i.get(g.run_id), T = typeof m.tool_call_id == "string" ? m.tool_call_id : null;
        let x;
        if (S) {
          const te = T ? S.findIndex(
            (ee) => ee.callData.tool_call_id === T
          ) : -1;
          te >= 0 ? x = S.splice(te, 1)[0] : x = S.shift();
        }
        const R = typeof m.duration_ms == "number" ? m.duration_ms : null, G = m.ok !== !1 && !m.error, N = m.output ? String(m.output) : void 0, q = N ? ` → ${Ce(N, 60)}` : "", le = {
          timeSeconds: R === null ? null : R / 1e3,
          isError: !G,
          running: !1,
          toolOutput: N,
          toolOutputChars: typeof m.output_chars == "number" ? m.output_chars : void 0,
          toolOutputBytes: typeof m.output_bytes == "number" ? m.output_bytes : void 0,
          toolError: m.error ? String(m.error) : void 0,
          note: m.note ? String(m.note) : void 0
        };
        if (x) {
          if (Object.assign(x.cell, le), !x.cell.skillName)
            x.cell.text = `${x.cell.text}${q}`;
          else if (N) {
            const te = typeof m.skill_sha == "string" ? m.skill_sha : null;
            te && k.get(x.cell.skillName) === te || (M.set(
              x.cell.skillName,
              Ts(N)
            ), te && k.set(x.cell.skillName, te));
          }
          x.cell.raw = [
            ...x.call ? [x.call] : [],
            g
          ];
        } else
          H(g.run_id, {
            index: ++A,
            runIndex: 0,
            runId: g.run_id,
            kind: "tool",
            text: `?${q}`,
            startedAt: ge(g.t) ?? 0,
            ...le
          });
        break;
      }
    }
  }
  for (const [g, m] of r) {
    const S = t.get(g);
    if (S) {
      for (const T of m) L(S).push(T);
      r.delete(g);
    }
  }
  for (const g of n) {
    const m = [];
    for (const S of g.groups)
      for (const T of S.cells)
        T.skillName && !m.includes(T.skillName) && m.push(T.skillName);
    m.length > 0 && (g.skillsUsed = m);
  }
  const he = D.spans(), ae = new Set(he.map((g) => g.skill)).size, re = /* @__PURE__ */ new Map();
  for (const g of n)
    for (const m of g.groups)
      for (const S of m.cells) re.set(S.index, S);
  for (const g of he) {
    const m = w.get(g.id);
    m && (m.skillSpans ?? (m.skillSpans = [])).push(g);
    for (const S of g.attributedIndexes) {
      const T = re.get(S);
      T && (T.skillSpanId = g.id, T.skillSpanHue = ae > 1 ? g.colorHue : void 0, T.skillSpanBypass = g.bypass);
    }
  }
  return n;
}
function fn(e) {
  return e.flatMap((n) => n.groups.flatMap((t) => t.cells));
}
function Zl(e) {
  var r;
  if (e.length === 0) return { initial: null, turns: [...e] };
  const n = e[0], t = ((r = n.groups[0]) == null ? void 0 : r.cells) ?? [], s = t.findIndex(
    (c) => c.kind === "system" && c.headerReason === "initial" && c.prompt !== void 0
  );
  if (s < 0) return { initial: null, turns: [...e] };
  const l = t[s], i = {
    ...n,
    groups: [
      {
        ...n.groups[0],
        cells: t.filter((c, f) => f !== s)
      }
    ]
  };
  return { initial: l, turns: [i, ...e.slice(1)] };
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
}, mn = "agent-trace-timeline-styles", eo = `
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
let Ct = !1;
function to() {
  if (Ct || typeof document > "u") return;
  if (document.getElementById(mn)) {
    Ct = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = mn, e.textContent = eo, document.head.appendChild(e), Ct = !0;
}
function Mt(e) {
  return zs(e);
}
function Vn(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function gn(e) {
  return e != null && Number.isFinite(e);
}
function Gn(e) {
  if (!gn(e.startedAt)) return null;
  const n = gn(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + n };
}
function Xn(e, n = "sequence") {
  if (n !== "sequence")
    return no(
      e,
      n === "duration" || n === "actual",
      n === "duration"
    );
  const t = [], s = [];
  for (const l of e) {
    const i = l.groups.flatMap((r) => r.cells);
    i.length !== 0 && (l.turn !== null && s.push({
      turn: l.turn,
      time: t.length
    }), t.push(
      ...i.map(
        (r, c) => ({
          start: t.length + c,
          end: t.length + c + 1,
          index: r.index,
          isError: r.isError === !0,
          kind: r.kind,
          label: r.text,
          lane: Vn(r.kind)
        })
      )
    ));
  }
  return t.length === 0 ? null : {
    start: 0,
    end: t.length,
    spans: t,
    turnBoundaries: s
  };
}
function no(e, n, t) {
  const s = e.flatMap((o) => {
    const h = o.groups.flatMap(
      (E) => E.cells.flatMap((d) => {
        const v = Gn(d);
        return v === null ? [] : [
          {
            ...v,
            index: d.index,
            isError: d.isError === !0,
            kind: d.kind,
            label: d.text,
            lane: Vn(d.kind)
          }
        ];
      })
    );
    return h.length === 0 ? [] : [{ turn: o.turn, rawSpans: h }];
  }), l = s.flatMap((o) => o.rawSpans);
  if (l.length === 0) return null;
  const i = /* @__PURE__ */ new Map();
  let r = 0, c = null;
  for (const o of [...l].sort(
    (h, E) => h.start - E.start || h.end - E.end
  ))
    t && c !== null && o.start > c && (r += o.start - c), i.set(o, r), c = c === null ? o.end : Math.max(c, o.end);
  const f = [], y = [];
  for (const o of s) {
    const h = o.rawSpans.map((E) => {
      const d = i.get(E) ?? 0;
      return {
        ...E,
        start: E.start - d,
        end: (n ? E.end : E.start) - d
      };
    });
    f.push(...h), o.turn !== null && y.push({
      turn: o.turn,
      time: Math.min(...h.map((E) => E.start))
    });
  }
  return {
    start: Math.min(...f.map((o) => o.start)),
    end: Math.max(...f.map((o) => o.end)),
    spans: f,
    turnBoundaries: y
  };
}
function so(e, n = "sequence") {
  const t = (c) => c.skillSpans ?? [];
  if (e.every((c) => t(c).length === 0)) return null;
  if (n === "sequence") {
    const c = /* @__PURE__ */ new Map();
    let f = 0;
    for (const o of e)
      for (const h of o.groups.flatMap((E) => E.cells))
        c.set(h.index, f), f += 1;
    const y = [];
    for (const o of e)
      for (const h of t(o)) {
        const E = h.attributedIndexes.map(($) => c.get($)).filter(($) => $ !== void 0);
        let d = E.length ? Math.min(...E) : void 0;
        if (d === void 0) {
          const $ = o.groups.flatMap((D) => D.cells).find(
            (D) => D.kind !== "system" && D.skillName === h.skill
          );
          d = $ ? c.get($.index) : void 0;
        }
        if (d === void 0) continue;
        const v = E.length ? Math.max(...E) : d;
        y.push(yn(h, d, v + 1));
      }
    return y;
  }
  const s = e.flatMap(
    (c) => c.groups.flatMap(
      (f) => f.cells.flatMap((y) => {
        const o = Gn(y);
        return o === null ? [] : [o];
      })
    )
  );
  s.sort((c, f) => c.start - f.start || c.end - f.end);
  const l = n === "duration", i = (c) => {
    let f = 0, y = null;
    for (const o of s) {
      if (o.start >= c) break;
      if (l && y !== null && o.start > y) {
        const h = Math.min(o.start, c);
        h > y && (f += h - y);
      }
      y = y === null ? o.end : Math.max(y, o.end);
    }
    return f;
  }, r = [];
  for (const c of e)
    for (const f of t(c)) {
      const y = f.startT, o = Math.max(xs(f), y + 1), h = i(y), E = i(o);
      r.push(
        yn(
          f,
          y - h,
          Math.max(y - h + 1, o - E)
        )
      );
    }
  return r;
}
function yn(e, n, t) {
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
function lo(e, n, t = "sequence") {
  const s = Xn(e, t);
  return new Set(
    s == null ? void 0 : s.spans.filter((l) => l.start <= n.end && l.end >= n.start).map((l) => l.index)
  );
}
to();
const dt = window.QwenPaw.host, J = dt.React, { useEffect: Ye, useMemo: $t, useRef: Ze, useState: Ae } = J, { Tooltip: qn } = dt.antd, zt = 3, oo = 4, io = 0.08, ro = 0.025, ao = 32, co = 0.5;
function uo(e) {
  const n = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, s = e.timing, l = s && Number.isFinite(s.ttft_ms) ? s.ttft_ms : void 0, i = s && Number.isFinite(s.decode_ms) ? s.decode_ms : void 0;
  return {
    ...n === void 0 ? {} : { durationMs: n },
    ...t === void 0 ? {} : { startedAt: t },
    ...l === void 0 || i === void 0 ? {} : { ttftMs: l, decodingMs: i }
  };
}
function po(e) {
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
function ho(e, n) {
  const t = po(e);
  if (n === void 0) return t;
  const s = n.durationMs === void 0 ? null : `Total ${Mt(n.durationMs)}`, l = n.startedAt === void 0 ? null : n.durationMs === void 0 ? `Started ${_e(n.startedAt)}` : `${_e(n.startedAt)} → ${_e(
    n.startedAt + n.durationMs
  )}`, i = n.ttftMs === void 0 || n.decodingMs === void 0 ? null : `TTFT ${Mt(
    n.ttftMs
  )} · Decoding ${Mt(n.decodingMs)}`, r = [s, i].filter((c) => c !== null).join(" · ");
  return [t, l, r].filter((c) => c !== null && c !== "").join(`
`);
}
function jt(e, n) {
  return e <= n ? { start: e, end: n } : { start: n, end: e };
}
function At(e) {
  return Math.min(1, Math.max(0, e));
}
function fo(e, n, t, s) {
  const l = Math.min(s - t, Math.max(0, n)), i = Math.min(
    Math.max(e - l / 2, t),
    s - l
  );
  return { start: i, end: i + l };
}
function En(e, n, t, s, l) {
  const i = jt(
    Math.min(l, Math.max(s, e.start)),
    Math.min(l, Math.max(s, e.end))
  );
  return {
    start: (i.start - n) / t,
    end: (i.end - n) / t
  };
}
function Jn({
  label: e,
  placement: n,
  children: t,
  ...s
}) {
  return /* @__PURE__ */ J.createElement(
    qn,
    {
      title: /* @__PURE__ */ J.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: n,
      mouseEnterDelay: co,
      ...s
    },
    t
  );
}
function Sn() {
  return /* @__PURE__ */ J.createElement("div", { className: ye.labels, "aria-hidden": "true" }, /* @__PURE__ */ J.createElement("span", null, "Input"), /* @__PURE__ */ J.createElement("span", null, "Model"), /* @__PURE__ */ J.createElement("span", null, "Tools"));
}
function vn({
  loading: e,
  onHover: n,
  onLoad: t
}) {
  return /* @__PURE__ */ J.createElement(
    Jn,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ J.createElement(
      "button",
      {
        type: "button",
        className: ye.earlierHistory,
        "data-earlier-history": !0,
        "data-loading": e || void 0,
        "aria-label": e ? "Loading earlier history" : "Load earlier history",
        "aria-disabled": e || t === void 0,
        onClick: t,
        onPointerEnter: (s) => {
          s.stopPropagation(), n();
        },
        onPointerMove: (s) => {
          s.stopPropagation();
        },
        onPointerDown: (s) => {
          s.stopPropagation();
        }
      },
      "…"
    )
  );
}
const mo = J.memo(function({
  turns: n,
  mode: t,
  range: s,
  hasEarlierRecords: l = !1,
  onLoadEarlier: i,
  selectedIndex: r = null,
  searchMatchIndexes: c = null,
  onRangeChange: f,
  onRecordSelect: y,
  onRecordFocus: o,
  onSkillSpanSelect: h
}) {
  const E = typeof dt.useTheme == "function" ? dt.useTheme() : void 0, d = $t(
    () => Xn(n, t),
    [t, n]
  ), v = $t(
    () => so(n, t),
    [t, n]
  ), $ = $t(
    () => new Map(
      n.flatMap(
        (p) => p.groups.flatMap(
          (_) => _.cells.map(
            (b) => [b.index, uo(b)]
          )
        )
      )
    ),
    [n]
  ), D = Ze(null), w = Ze(null), M = Ze(null), k = Ze(null), [O, P] = Ae(null), [A, C] = Ae(null), [L, Z] = Ae(null), [H, se] = Ae(!1), [he, ae] = Ae(!1), [re, Y] = Ae(null), [Te, g] = Ae(!1);
  Ye(() => {
    d !== null && s !== null && (s.end < d.start || s.start > d.end) && f(null);
  }, [d, f, s]), Ye(() => {
    d !== null && (g(!1), Y(
      (p) => p !== null && (p.end < d.start || p.start > d.end) ? null : p
    ));
  }, [d]), Ye(() => {
    if (d === null || r === null) return;
    const p = d.spans.find(
      (_) => _.index === r
    );
    p !== void 0 && (g(!0), Y((_) => {
      if (_ === null || p.end > _.start && p.start < _.end)
        return _;
      const b = Math.max(1, _.end - _.start), B = p.end <= _.start ? p.start : p.end - b, W = Math.min(
        Math.max(B, d.start),
        Math.max(d.start, d.end - b)
      );
      return W === _.start ? _ : { start: W, end: W + b };
    }));
  }, [d, r]);
  const m = Math.max(1, ((d == null ? void 0 : d.end) ?? 0) - ((d == null ? void 0 : d.start) ?? 0)), S = Math.min(
    m,
    Math.max(1, ((re == null ? void 0 : re.end) ?? 0) - ((re == null ? void 0 : re.start) ?? 0))
  ), T = d === null || re === null ? (d == null ? void 0 : d.start) ?? 0 : Math.min(
    Math.max(re.start, d.start),
    d.end - S
  ), x = re === null ? m : S, R = re === null ? (d == null ? void 0 : d.start) ?? 0 : T, G = l && d !== null && R === d.start, N = i === void 0 || H ? void 0 : () => {
    se(!0), i().finally(() => {
      se(!1);
    });
  }, q = d === null ? void 0 : {
    "--trajectory-domain-left": `${-(R - d.start) / x * 100}%`,
    "--trajectory-domain-width": `${m / x * 100}%`
  }, le = d === null || s === null ? null : En(
    s,
    R,
    x,
    d.start,
    d.end
  ), ee = (d === null || O === null ? null : En(
    O,
    R,
    x,
    d.start,
    d.end
  )) ?? le, ue = O ?? s;
  if (Ye(() => {
    const p = M.current;
    if (p === null) return;
    const _ = (b) => {
      b.preventDefault();
      const B = k.current;
      if (B === null || d === null) return;
      g(!1);
      const W = B.getBoundingClientRect(), X = At(
        (b.clientX - W.left) / Math.max(1, W.width)
      ), V = Math.min(
        m,
        Math.max(
          Math.min(
            t === "sequence" ? oo : 20,
            m
          ),
          x * Math.exp(b.deltaY * 15e-4)
        )
      );
      if (V >= m * 0.999) {
        Y(null);
        return;
      }
      const oe = R + X * x, me = Math.min(
        Math.max(oe - X * V, d.start),
        d.end - V
      );
      Y({ start: me, end: me + V });
    };
    return p.addEventListener("wheel", _, { passive: !1 }), () => {
      p.removeEventListener("wheel", _);
    };
  }, [x, R, m, t, d]), d === null)
    return /* @__PURE__ */ J.createElement(
      "section",
      {
        ref: M,
        className: ye.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ J.createElement("div", { className: ye.plot }, /* @__PURE__ */ J.createElement(Sn, null), /* @__PURE__ */ J.createElement("div", { className: ye.track }, /* @__PURE__ */ J.createElement("span", { className: ye.empty }, "No timing data"), l && /* @__PURE__ */ J.createElement(
        vn,
        {
          loading: H,
          onHover: () => {
            C(null);
          },
          onLoad: N
        }
      )))
    );
  const Ie = Math.min(
    x,
    m / d.spans.length
  ), ce = (p) => {
    const _ = p.currentTarget.getBoundingClientRect();
    return At((p.clientX - _.left) / Math.max(1, _.width));
  }, be = (p) => {
    var W;
    const _ = p.target instanceof HTMLElement ? p.target : null, b = (W = _ == null ? void 0 : _.closest("[data-timeline-record-index]")) == null ? void 0 : W.dataset.timelineRecordIndex;
    if (b === void 0) return null;
    const B = Number(b);
    return Number.isFinite(B) ? B : null;
  }, Be = (p) => {
    f(p);
  }, ft = (p) => {
    if (p.button === 2) {
      w.current = {
        anchorClientX: p.clientX,
        anchorStart: R,
        moved: !1,
        pannable: re !== null,
        pointerId: p.pointerId
      }, re !== null && g(!1), ae(!0), typeof p.currentTarget.setPointerCapture == "function" && p.currentTarget.setPointerCapture(p.pointerId);
      return;
    }
    if (p.button !== 0) return;
    const _ = ce(p), b = R + _ * x, B = be(p);
    C({ fraction: _, recordIndex: B }), D.current = {
      pointerId: p.pointerId,
      anchorTime: b,
      anchorClientX: p.clientX,
      recordIndex: B
    }, typeof p.currentTarget.setPointerCapture == "function" && p.currentTarget.setPointerCapture(p.pointerId), P({ start: b, end: b });
  }, mt = (p) => {
    const _ = p.currentTarget.getBoundingClientRect(), b = ce(p);
    C({ fraction: b, recordIndex: be(p) });
    const B = w.current;
    if (B !== null && B.pointerId === p.pointerId) {
      if (Math.abs(p.clientX - B.anchorClientX) >= zt && (B.moved = !0), !B.pannable) return;
      const oe = (p.clientX - B.anchorClientX) / Math.max(1, _.width), me = Math.min(
        Math.max(B.anchorStart - oe * x, d.start),
        d.end - x
      );
      Y({ start: me, end: me + x });
      return;
    }
    const W = D.current;
    if (W === null || W.pointerId !== p.pointerId) return;
    let X = R;
    if (re !== null) {
      const oe = p.clientX - _.left, me = Math.min(
        ao,
        Math.max(1, _.width * io)
      ), de = oe < me ? -1 : oe > _.width - me ? 1 : 0;
      if (de !== 0) {
        const Le = de < 0 ? me - oe : oe - (_.width - me), xe = At(Le / me), ke = R + de * x * ro * Math.max(0.2, xe);
        X = Math.min(
          Math.max(ke, d.start),
          d.end - x
        ), X !== R && (g(!1), Y({
          start: X,
          end: X + x
        }));
      }
    }
    const V = X + b * x;
    P(jt(W.anchorTime, V));
  }, Xe = (p) => {
    const _ = w.current;
    if (_ !== null && _.pointerId === p.pointerId) {
      const de = _.moved || Math.abs(p.clientX - _.anchorClientX) >= zt;
      w.current = null, ae(!1), de || f(null);
      return;
    }
    const b = D.current;
    if (b === null || b.pointerId !== p.pointerId) return;
    const B = ce(p), W = R + B * x, X = jt(b.anchorTime, W);
    C({ fraction: B, recordIndex: be(p) }), D.current = null, P(null);
    const V = Math.abs(p.clientX - b.anchorClientX) < zt, oe = V && b.recordIndex !== null ? d.spans.find((de) => de.index === b.recordIndex) : void 0;
    if (oe !== void 0) {
      f(null), y == null || y(oe.index);
      return;
    }
    const me = X.end - X.start < Ie ? fo(
      V ? X.start : (X.start + X.end) / 2,
      Ie,
      d.start,
      d.end
    ) : X;
    if (Be(me), V) {
      const de = X.start, Le = d.spans.reduce((xe, ke) => {
        const Je = de < xe.start ? xe.start - de : de > xe.end ? de - xe.end : 0;
        return (de < ke.start ? ke.start - de : de > ke.end ? de - ke.end : 0) < Je ? ke : xe;
      });
      o == null || o(Le.index);
    }
  }, qe = (p) => {
    p.key !== "Escape" || s === null || (p.preventDefault(), f(null));
  }, gt = () => {
    D.current = null, w.current = null, P(null), C(null), ae(!1);
  };
  return /* @__PURE__ */ J.createElement(
    "section",
    {
      ref: M,
      className: ye.root,
      "data-theme": E || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ J.createElement("div", { className: ye.plot }, /* @__PURE__ */ J.createElement(Sn, null), /* @__PURE__ */ J.createElement(
      "div",
      {
        ref: k,
        className: ye.track,
        "data-panning": he || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: qe,
        onPointerDown: ft,
        onPointerMove: mt,
        onPointerUp: Xe,
        onPointerCancel: gt,
        onPointerLeave: () => {
          D.current === null && w.current === null && C(null);
        },
        onDoubleClick: (p) => {
          p.preventDefault(), f(null);
        },
        onContextMenu: (p) => {
          p.preventDefault();
        }
      },
      G && /* @__PURE__ */ J.createElement(
        vn,
        {
          loading: H,
          onHover: () => {
            C(null);
          },
          onLoad: N
        }
      ),
      A !== null && A.recordIndex === null && O === null && /* @__PURE__ */ J.createElement(
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
      ee !== null && /* @__PURE__ */ J.createElement(J.Fragment, null, /* @__PURE__ */ J.createElement(
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
      ), /* @__PURE__ */ J.createElement(
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
      v !== null && d !== null && /* @__PURE__ */ J.createElement(
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
          const _ = (p.start - d.start) / m, b = Math.max(
            (p.end - p.start) / m,
            4e-3
          ), B = ie(), W = `${p.bypass ? "⚠ " : ""}${p.skill} · ${p.trigger}${p.open ? ` · ${u(B, "spanOpen")}` : ""}`, X = L === p.spanId, V = b > 0.14 && !p.bypass;
          return /* @__PURE__ */ J.createElement(qn, { title: W, key: p.spanId }, /* @__PURE__ */ J.createElement(
            "span",
            {
              onPointerDown: (oe) => {
                oe.stopPropagation();
              },
              onClick: h ? (oe) => {
                oe.stopPropagation(), h(p.spanId);
              } : void 0,
              onMouseEnter: () => Z(p.spanId),
              onMouseLeave: () => Z(
                (oe) => oe === p.spanId ? null : oe
              ),
              style: {
                position: "absolute",
                left: `${Math.max(0, _) * 100}%`,
                width: `${b * 100}%`,
                top: 0,
                bottom: 0,
                borderRadius: 3,
                background: `hsla(${p.hue}, 65%, ${X ? 62 : 55}%, ${X ? 0.85 : 0.55})`,
                border: p.bypass ? "1px dashed rgba(250,140,22,0.9)" : `1px solid hsla(${p.hue}, 55%, 45%, 0.8)`,
                pointerEvents: h ? "auto" : "none",
                cursor: h ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }
            },
            V ? /* @__PURE__ */ J.createElement(
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
      /* @__PURE__ */ J.createElement(
        "div",
        {
          className: ye.turnBoundaries,
          "data-animate-viewport": Te || void 0,
          "aria-hidden": "true",
          style: q
        },
        d.turnBoundaries.filter(
          (p) => p.time > d.start && p.time >= R && p.time <= R + x
        ).map((p) => /* @__PURE__ */ J.createElement(
          "span",
          {
            className: ye.turnBoundary,
            "data-turn": p.turn,
            key: p.turn,
            style: {
              "--trajectory-turn-left": `${(p.time - d.start) / m * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ J.createElement(
        "div",
        {
          className: ye.lanes,
          "data-animate-viewport": Te || void 0,
          "data-timeline-domain": !0,
          style: q
        },
        d.spans.filter(
          (p) => p.index === r || p.end >= R && p.start <= R + x
        ).map((p) => {
          const _ = (p.start - d.start) / m, B = (p.end - p.start) / m * 100, W = $.get(p.index), X = W == null ? void 0 : W.ttftMs, V = W == null ? void 0 : W.decodingMs, oe = X === void 0 || V === void 0 || X + V <= 0 ? null : X / (X + V);
          return /* @__PURE__ */ J.createElement(
            Jn,
            {
              key: p.index,
              label: ho(p.kind, W),
              placement: "bottom"
            },
            /* @__PURE__ */ J.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: ye.span,
                "data-timeline-span": p.kind,
                "data-timeline-record-index": p.index,
                "data-assistant-timing": oe === null ? void 0 : "true",
                "data-error": p.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": p.index === r || void 0,
                "data-hovered": (A == null ? void 0 : A.recordIndex) === p.index || void 0,
                "data-search-match": c === null ? void 0 : c.has(p.index) ? "true" : "false",
                "data-selected": ue === null ? void 0 : p.start <= ue.end && p.end >= ue.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${_ * 100}%`,
                  "--trajectory-span-width": `${B}%`,
                  "--trajectory-span-gap": `min(${B * 0.08}%, 1px)`,
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
}), Ht = window.QwenPaw.host, ne = Ht.React, { Button: go, Input: yo, Popover: Eo, Segmented: So, Tooltip: bn } = Ht.antd, {
  MenuFoldOutlined: vo,
  MenuUnfoldOutlined: bo,
  QuestionCircleOutlined: xo,
  ReloadOutlined: ko,
  SearchOutlined: wo
} = Ht.antdIcons;
function To({
  mode: e,
  onModeChange: n,
  search: t,
  onSearchChange: s,
  onRefresh: l,
  modeOptions: i,
  allCollapsed: r,
  hasRequests: c,
  onToggleCollapseAll: f,
  callsCollapsed: y,
  onToggleCallsCollapsed: o
}) {
  const h = ie();
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
    /* @__PURE__ */ ne.createElement(bn, { title: u(h, "projectionHint") }, /* @__PURE__ */ ne.createElement(
      So,
      {
        size: "small",
        value: e,
        options: i,
        onChange: (E) => n(E)
      }
    )),
    /* @__PURE__ */ ne.createElement(
      yo,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ ne.createElement(wo, null),
        placeholder: u(h, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (E) => s(E.target.value)
      }
    ),
    c && /* @__PURE__ */ ne.createElement(
      bn,
      {
        title: r ? u(h, "expandAll") : u(h, "collapseAll")
      },
      /* @__PURE__ */ ne.createElement(
        go,
        {
          size: "small",
          type: "text",
          icon: r ? /* @__PURE__ */ ne.createElement(bo, null) : /* @__PURE__ */ ne.createElement(vo, null),
          onClick: f
        }
      )
    ),
    /* @__PURE__ */ ne.createElement("span", { style: { marginLeft: "auto", display: "inline-flex", gap: 10 } }, /* @__PURE__ */ ne.createElement(
      Eo,
      {
        trigger: "click",
        placement: "bottomRight",
        content: /* @__PURE__ */ ne.createElement("div", { style: { maxWidth: 340, fontSize: 12, lineHeight: "20px" } }, /* @__PURE__ */ ne.createElement("div", null, /* @__PURE__ */ ne.createElement("strong", null, "📚"), " ", u(h, "legendLoad")), /* @__PURE__ */ ne.createElement("div", null, /* @__PURE__ */ ne.createElement("strong", null, "⚡"), " ", u(h, "legendResource")), /* @__PURE__ */ ne.createElement("div", null, /* @__PURE__ */ ne.createElement("strong", null, "∈"), " ", u(h, "legendGuided")), /* @__PURE__ */ ne.createElement("div", null, /* @__PURE__ */ ne.createElement("strong", null, u(h, "legendStripTitle")), " ", u(h, "legendStrip")), /* @__PURE__ */ ne.createElement("div", null, /* @__PURE__ */ ne.createElement("strong", null, u(h, "legendBandTitle")), " ", u(h, "legendBand")))
      },
      /* @__PURE__ */ ne.createElement("a", { style: { fontSize: 12, color: "rgba(128,128,128,1)" } }, /* @__PURE__ */ ne.createElement(xo, null), " ", u(h, "legendTitle"))
    ), /* @__PURE__ */ ne.createElement(
      "a",
      {
        onClick: l,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ ne.createElement(ko, null),
      " ",
      u(h, "refresh")
    ))
  );
}
const ht = window.QwenPaw.host, F = ht.React, { useCallback: xn, useEffect: et, useMemo: we, useRef: _o, useState: Ee } = F, {
  Button: tt,
  Empty: kn,
  Popconfirm: Io,
  Popover: Co,
  Space: Mo,
  Spin: Qn,
  Switch: $o,
  Tag: zo,
  Tooltip: Ao,
  message: Ke
} = ht.antd, { DeleteOutlined: Oo, DownloadOutlined: Ro, SettingOutlined: wn } = ht.antdIcons, { Text: $e } = ht.antd.Typography;
function Tn({
  config: e,
  onChange: n,
  children: t
}) {
  const s = ie(), l = (r, c, f) => /* @__PURE__ */ F.createElement(
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
    /* @__PURE__ */ F.createElement($e, { style: { fontSize: 13 } }, r),
    /* @__PURE__ */ F.createElement(
      $o,
      {
        size: "small",
        checked: !!c,
        onChange: (y) => n({ [f]: y })
      }
    )
  ), i = /* @__PURE__ */ F.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ F.createElement($e, { strong: !0, style: { fontSize: 13 } }, u(s, "settings")), /* @__PURE__ */ F.createElement("div", { style: { marginTop: 8 } }, e ? [
    l(u(s, "enabled"), e.enabled, "enabled"),
    l(u(s, "captureLlm"), e.capture_llm, "capture_llm"),
    l(
      u(s, "captureTools"),
      e.capture_tools,
      "capture_tools"
    ),
    l(
      u(s, "captureHeaders"),
      e.capture_headers ?? !0,
      "capture_headers"
    )
  ] : /* @__PURE__ */ F.createElement(Qn, { size: "small" })));
  return /* @__PURE__ */ F.createElement(Co, { content: i, trigger: "click", placement: "bottomRight" }, t);
}
function Lo({
  sessionId: e,
  summary: n,
  locale: t,
  onJumpSession: s,
  onRefreshSessions: l
}) {
  const [i, r] = Ee(null), [c, f] = Ee(!1), [y, o] = Ee(!1), [h, E] = Ee(""), [d, v] = Ee("sequence"), [$, D] = Ee(null), [w, M] = Ee(null), [k, O] = Ee(null), [P, A] = Ee(null), [C, L] = Ee(
    /* @__PURE__ */ new Set()
  ), [Z, H] = Ee(!1), [se, he] = Ee(null), [ae, re] = Ee(null), [Y, Te] = Ee(null), [g, m] = Ee(null), S = _o(null);
  S.current = e, et(() => {
    rs().then(he).catch(() => he(null));
  }, []);
  const T = xn(
    async (p, _) => {
      _ || f(!0);
      try {
        const { sessionId: b, instance: B } = xt(p), W = await is(b, {
          beforeSeq: _,
          limit: 200,
          instance: B
        });
        m(null), r((X) => _ && X ? {
          ...W,
          events: [...W.events, ...X.events]
        } : W);
      } catch (b) {
        m({
          message: String(b.message),
          status: b instanceof Ln ? b.status : null
        });
      } finally {
        _ || f(!1);
      }
    },
    []
  ), x = xn(async (p) => {
    try {
      const { sessionId: _, instance: b } = xt(p), B = await os(_, b);
      Te(B), re({
        sessionId: p,
        inputTokens: B.input_tokens,
        outputTokens: B.output_tokens,
        totalTokens: B.total_tokens,
        reasoningTokens: Number(B.reasoning_tokens ?? 0)
      });
    } catch {
      Te(null), re(null);
    }
  }, []);
  et(() => {
    e ? (D(null), M(null), O(null), L(/* @__PURE__ */ new Set()), E(""), T(e), x(e)) : (r(null), Te(null), re(null));
  }, [e, T, x]);
  const R = we(
    () => i ? Yl(i.events) : [],
    [i]
  ), { initial: G, turns: N } = we(
    () => Zl(R),
    [R]
  ), q = we(
    () => G ? [G, ...fn(N)] : fn(N),
    [G, N]
  ), le = we(
    () => N.some((p) => p.status === "running"),
    [N]
  );
  et(() => {
    if (!e || !le) return;
    const p = setInterval(() => {
      document.visibilityState === "visible" && S.current && T(S.current);
    }, 5e3);
    return () => clearInterval(p);
  }, [e, le, T]);
  const te = we(
    () => $ === null ? null : lo(N, $, d),
    [$, N, d]
  ), ee = we(() => {
    const p = h.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (p.length === 0) return null;
    const _ = (b) => {
      var B, W, X;
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
        (B = b.messages) == null ? void 0 : B.map((V) => `${V.role} ${V.text}`).join(`
`),
        (W = b.inputNew) == null ? void 0 : W.map((V) => `${V.role} ${V.text ?? ""}`).join(`
`),
        b.apiPayload ? [
          b.apiPayload.model,
          ...b.apiPayload.messages.map(
            (V) => `${V.role} ${V.content}`
          )
        ].join(`
`) : "",
        b.options ? JSON.stringify(b.options) : "",
        b.toolSchema ? JSON.stringify(b.toolSchema) : "",
        (X = b.headerTools) == null ? void 0 : X.join(" "),
        b.prompt ?? ""
      ].filter(Boolean).join(`
`).toLowerCase();
    };
    return new Set(
      q.filter((b) => {
        const B = _(b);
        return p.every((W) => B.includes(W));
      }).map((b) => b.index)
    );
  }, [h, q]), ue = we(
    () => w === null ? null : q.find((p) => p.index === w) ?? null,
    [q, w]
  ), Ie = we(() => {
    var Vt, Gt;
    if (k === null) return null;
    const p = N.find((K) => K.turn === k);
    if (!p) return null;
    const _ = ((Vt = p.groups[0]) == null ? void 0 : Vt.cells) ?? [], b = _.filter((K) => K.kind === "message"), B = _.filter((K) => K.kind === "tool"), W = [
      ...new Set(
        b.map((K) => K.model).filter((K) => !!K)
      )
    ], X = [
      ...new Set(
        b.map((K) => K.provider).filter((K) => !!K)
      )
    ];
    let V = 0, oe = 0, me = 0, de = 0, Le = 0, xe = null, ke = 0;
    const Je = [];
    for (const K of _)
      K.usage && (V += K.usage.input_tokens ?? 0, oe += K.usage.output_tokens ?? 0, me += K.usage.cache_input_tokens ?? 0, de += K.usage.cache_creation_input_tokens ?? 0, Le += K.usage.reasoning_tokens ?? 0), K.timing && (xe = xe === null ? K.timing.ttft_ms : Math.min(xe, K.timing.ttft_ms), ke = (ke ?? 0) + K.timing.decode_ms), K.isError && Je.push(K.toolError ?? K.text ?? "error");
    const ze = _.find((K) => K.kind === "user"), Yn = (Gt = [...b].reverse().find((K) => K.options)) == null ? void 0 : Gt.options, yt = [...b].reverse().find((K) => K.outputText);
    let Ut;
    const Wt = b.filter((K) => K.messagesMeta);
    if (Wt.length > 0) {
      const K = {};
      let Ne = 0, St = 0;
      for (const es of Wt) {
        const vt = es.messagesMeta;
        for (const [Xt, ts] of Object.entries(vt.charsByRole))
          K[Xt] = (K[Xt] ?? 0) + ts;
        Ne += vt.totalChars, St = Math.max(St, vt.maxToolChars);
      }
      Ut = { charsByRole: K, totalChars: Ne, maxToolChars: St };
    }
    const Et = N.findIndex((K) => K.turn === k), Kt = Et > 0 ? N[Et - 1] : null;
    let Fe = null;
    if (Kt) {
      Fe = 0;
      for (const K of Kt.groups)
        for (const Ne of K.cells)
          Ne.kind === "message" && Ne.usage && (Fe += Ne.usage.input_tokens ?? 0);
    }
    const Zn = Fe === null && Et !== 0 ? void 0 : {
      prevInputTokens: Fe,
      deltaTokens: V - (Fe ?? 0)
    };
    return {
      turn: k,
      status: p.status,
      durationMs: p.durationMs,
      startedAt: (ze == null ? void 0 : ze.startedAt) ?? null,
      query: (ze == null ? void 0 : ze.text) ?? "",
      llmCalls: b.length,
      toolCalls: B.length,
      models: W,
      providers: X,
      inputTokens: V,
      outputTokens: oe,
      cacheReadTokens: me,
      cacheWriteTokens: de,
      reasoningTokens: Le,
      inputComposition: Ut,
      growth: Zn,
      resultIndex: yt == null ? void 0 : yt.index,
      ttftMs: xe,
      decodeMs: ke,
      errors: Je,
      options: Yn,
      sessionTotals: ae && ae.sessionId === e ? {
        inputTokens: ae.inputTokens,
        outputTokens: ae.outputTokens,
        totalTokens: ae.totalTokens,
        reasoningTokens: ae.reasoningTokens
      } : void 0
    };
  }, [k, N, ae, e]), ce = !!(i && i.events.length > 0 && i.events[0].seq > 1), be = async (p) => {
    try {
      he(await as(p));
    } catch (_) {
      Ke.error(String(_.message));
    }
  }, Be = we(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), ft = we(() => {
    if (!Y) return null;
    const p = [
      `${Y.runs} ${u(t, "statRounds")} · ${Y.llm_calls} ${u(t, "statSteps")}`,
      `LLM ${pe(Y.llm_ms_total / 1e3)} · ${u(
        t,
        "toolCalls"
      )} ${pe(Y.tool_ms_total / 1e3)}`,
      `${u(t, "statTtftAvg")} ${Y.ttft_ms_avg === null ? "-" : pe(Y.ttft_ms_avg / 1e3)} · ${rt(
        Y.output_tokens,
        Y.decode_ms_total / 1e3
      )}`
    ];
    if (Y.cache_read_tokens > 0 || Y.cache_write_tokens > 0) {
      const _ = Y.cache_read_tokens + Y.input_tokens, b = _ > 0 ? Math.round(Y.cache_read_tokens / _ * 100) : 0;
      p.push(`${u(t, "statCacheHit")} ${b}%`);
    }
    if (p.push(
      `${u(t, "statInput")} ${Q(
        Y.input_tokens
      )} tok · ${u(t, "statOutput")} ${Q(
        Y.output_tokens
      )} tok`
    ), n && p.push(Lt(n.size_bytes)), Y.skills) {
      const _ = Object.entries(Y.skills).sort((b, B) => B[1] - b[1]).map(([b, B]) => `${b} ×${B}`).join(" · ");
      _ && p.push(`📚 ${_}`);
    }
    if (G != null && G.prompt) {
      const _ = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Set();
      for (const W of N)
        for (const X of W.groups)
          for (const V of X.cells)
            V.skillName ? b.add(V.skillName) : V.inSkill && _.add(V.inSkill);
      const B = [..._].filter((W) => !b.has(W));
      B.length > 0 && p.push(
        `⚡ ${u(t, "skillBypassStrip")}: ${B.join(" · ")}`
      );
    }
    return p.join(" | ");
  }, [Y, n, t, N, G]), mt = () => {
    M(null), O(null);
  };
  et(() => {
    w !== null && A(null);
  }, [w]);
  const Xe = we(
    () => P === null ? null : N.flatMap((p) => p.skillSpans ?? []).find((p) => p.id === P) ?? null,
    [P, N]
  ), qe = (g == null ? void 0 : g.status) === 404, gt = ue !== null || Ie !== null;
  return /* @__PURE__ */ F.createElement(
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
    /* @__PURE__ */ F.createElement(
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
      e ? /* @__PURE__ */ F.createElement(F.Fragment, null, /* @__PURE__ */ F.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            minWidth: 0
          }
        },
        /* @__PURE__ */ F.createElement(
          $e,
          {
            strong: !0,
            ellipsis: {
              tooltip: (n == null ? void 0 : n.title) || e
            },
            style: { fontSize: 13, flex: "0 1 auto", minWidth: 60 }
          },
          (n == null ? void 0 : n.title) || (n == null ? void 0 : n.agent_id) || Dn(e)
        ),
        /* @__PURE__ */ F.createElement(
          zo,
          {
            color: Bn[(n == null ? void 0 : n.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          Fn((n == null ? void 0 : n.status) ?? "unknown")
        ),
        n != null && n.channel ? /* @__PURE__ */ F.createElement($e, { type: "secondary", style: { fontSize: 11, flexShrink: 0 } }, n.channel) : null,
        /* @__PURE__ */ F.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ F.createElement(Mo, null, /* @__PURE__ */ F.createElement(Tn, { config: se, onChange: be }, /* @__PURE__ */ F.createElement(tt, { size: "small", icon: /* @__PURE__ */ F.createElement(wn, null) })), /* @__PURE__ */ F.createElement(Ao, { title: u(t, "export") }, /* @__PURE__ */ F.createElement(
          tt,
          {
            size: "small",
            icon: /* @__PURE__ */ F.createElement(Ro, null),
            onClick: () => {
              const { sessionId: p, instance: _ } = xt(e);
              cs(
                p,
                _
              ).then(() => Ke.success(u(t, "exported"))).catch(
                (b) => Ke.error(String(b.message))
              );
            }
          },
          u(t, "export")
        )), e.includes("~") ? null : /* @__PURE__ */ F.createElement(
          Io,
          {
            title: u(t, "deleteConfirm"),
            onConfirm: () => {
              ds(e).then(() => {
                Ke.success(u(t, "deleted")), l == null || l();
              }).catch(
                (p) => Ke.error(String(p.message))
              );
            }
          },
          /* @__PURE__ */ F.createElement(tt, { size: "small", danger: !0, icon: /* @__PURE__ */ F.createElement(Oo, null) }, u(t, "delete"))
        )))
      ), /* @__PURE__ */ F.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap"
          }
        },
        /* @__PURE__ */ F.createElement(
          $e,
          {
            type: "secondary",
            style: { fontSize: 11, flex: "1 1 300px", minWidth: 0 }
          },
          ft ?? // Transient line while the stats endpoint responds.
          (n ? `${n.runs} ${u(t, "statRounds")} · ${n.llm_calls} ${u(t, "statSteps")} · ${jn(
            n.total_tokens
          )} ${u(t, "tokens")} · ${Lt(
            n.size_bytes
          )}` : "")
        ),
        /* @__PURE__ */ F.createElement(
          $e,
          {
            type: "secondary",
            copyable: {
              text: e,
              tooltips: [
                u(t, "copySessionId"),
                u(t, "copiedSessionId")
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
      )) : /* @__PURE__ */ F.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8
          }
        },
        /* @__PURE__ */ F.createElement($e, { type: "secondary", style: { fontSize: 13 } }, u(t, "selectSession")),
        /* @__PURE__ */ F.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ F.createElement(Tn, { config: se, onChange: be }, /* @__PURE__ */ F.createElement(tt, { size: "small", icon: /* @__PURE__ */ F.createElement(wn, null) })))
      )
    ),
    g && !qe && /* @__PURE__ */ F.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ F.createElement($e, { type: "danger", style: { fontSize: 12 } }, `${u(t, "loadFailed")}: ${g.message}`)),
    /* @__PURE__ */ F.createElement(
      To,
      {
        mode: d,
        onModeChange: v,
        search: h,
        onSearchChange: E,
        onRefresh: () => {
          e && (T(e), x(e)), l == null || l();
        },
        modeOptions: Be,
        allCollapsed: N.length > 0 && N.every((p) => C.has(p.turn ?? -1)),
        hasRequests: N.some((p) => p.turn !== null),
        callsCollapsed: Z,
        onToggleCallsCollapsed: () => H((p) => !p),
        onToggleCollapseAll: () => {
          L((p) => N.some(
            (b) => b.turn !== null && !p.has(b.turn)
          ) ? new Set(
            N.map((b) => b.turn).filter((b) => b !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ F.createElement(
      mo,
      {
        turns: N,
        mode: d,
        range: $,
        hasEarlierRecords: ce,
        onLoadEarlier: async () => {
          var p;
          return !i || i.events.length === 0 ? !1 : (await T(e, (p = i.events[0]) == null ? void 0 : p.seq), !0);
        },
        selectedIndex: w,
        searchMatchIndexes: ee,
        onRangeChange: D,
        onRecordSelect: M,
        onRecordFocus: M,
        onSkillSpanSelect: A
      }
    ),
    c && !i ? /* @__PURE__ */ F.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ F.createElement(Qn, null)) : i ? /* @__PURE__ */ F.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ F.createElement(
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
      /* @__PURE__ */ F.createElement(
        Vl,
        {
          turns: N,
          selectedIndex: w,
          selectedTurn: k,
          collapsedTurns: C,
          focusIndexes: te,
          searchMatchIndexes: ee,
          onSelectedIndexChange: (p) => {
            if (p === w) {
              M(null);
              return;
            }
            M(p), O(null);
          },
          onSkillSpanOpen: (p, _) => {
            var X;
            const b = N.flatMap((V) => V.skillSpans ?? []), W = (_ !== null ? (((X = N.find((V) => V.turn === _)) == null ? void 0 : X.skillSpans) ?? []).find((V) => V.skill === p) : void 0) ?? b.find((V) => V.skill === p);
            W && A(W.id);
          },
          onSelectedTurnChange: (p) => {
            O(p), M(null);
          },
          callsCollapsed: Z,
          onToggleTurn: (p) => {
            L((_) => {
              const b = new Set(_);
              return b.has(p) ? b.delete(p) : b.add(p), b;
            });
          },
          hasOlderRecords: ce,
          loadingOlder: y,
          onLoadOlder: () => {
            var p;
            !i || i.events.length === 0 || (o(!0), T(
              e,
              (p = i.events[0]) == null ? void 0 : p.seq
            ).finally(() => o(!1)));
          },
          emptyText: u(t, "noSessions"),
          initialRecord: G
        }
      )
    ), Xe ? /* @__PURE__ */ F.createElement(
      tl,
      {
        span: Xe,
        records: q,
        onJumpRecord: (p) => {
          A(null), M(p);
        },
        onClose: () => A(null)
      }
    ) : gt ? /* @__PURE__ */ F.createElement(
      Xs,
      {
        record: ue,
        request: Ie,
        onJumpSession: s,
        onSelectTurn: (p) => {
          O(p), M(null);
        },
        onClose: mt
      }
    ) : null) : /* @__PURE__ */ F.createElement(
      kn,
      {
        image: kn.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: qe && e ? u(t, "noTraceForSession") : u(t, "selectSession")
      }
    )
  );
}
const je = window.QwenPaw.host, U = je.React, { useCallback: _n, useEffect: Ot, useMemo: nt, useState: Me } = U, { Button: In, Empty: Cn, Input: No, Spin: Po, Tag: Rt, Tooltip: Mn } = je.antd, {
  CaretRightOutlined: Do,
  MenuFoldOutlined: jo,
  MenuUnfoldOutlined: Bo,
  SearchOutlined: Fo
} = je.antdIcons, { Text: Ge } = je.antd.Typography;
function Ho({
  groups: e,
  collapsedAgents: n,
  onToggleAgent: t,
  searching: s,
  selected: l,
  onSelect: i,
  locale: r
}) {
  const c = e.length > 1;
  return /* @__PURE__ */ U.createElement(U.Fragment, null, e.map(([f, y]) => {
    const o = c && !s && n.has(f);
    return /* @__PURE__ */ U.createElement("div", { key: f }, c && /* @__PURE__ */ U.createElement(
      "div",
      {
        onClick: () => t(f),
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
      /* @__PURE__ */ U.createElement(
        Do,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: o ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ U.createElement(Ge, { strong: !0, style: { fontSize: 12 } }, f),
      /* @__PURE__ */ U.createElement(Ge, { type: "secondary", style: { fontSize: 11 } }, y.length)
    ), !o && y.map((h) => {
      const E = lt(h) === l;
      return /* @__PURE__ */ U.createElement(
        "div",
        {
          key: lt(h),
          onClick: () => i(lt(h)),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: E ? "rgba(22,119,255,0.10)" : "transparent",
            border: E ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ U.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ U.createElement(
            Ge,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${h.title ? `${h.title}
` : ""}${h.session_id}`
              }
            },
            h.title || h.agent_id || Dn(h.session_id)
          ),
          c ? null : h.agent_id ? /* @__PURE__ */ U.createElement(
            Rt,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            h.agent_id
          ) : null,
          h.user_id ? /* @__PURE__ */ U.createElement(
            Rt,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "cyan",
              title: h.user_id
            },
            "👤 ",
            h.user_id
          ) : null,
          /* @__PURE__ */ U.createElement(
            Rt,
            {
              color: Bn[h.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            Fn(h.status)
          )
        ),
        /* @__PURE__ */ U.createElement(
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
          /* @__PURE__ */ U.createElement("span", null, h.channel || "-"),
          h.instance_id ? /* @__PURE__ */ U.createElement(
            "span",
            {
              title: `${h.instance_id}${h.hostname ? ` (${h.hostname})` : ""}`
            },
            "🖥 ",
            h.hostname || h.instance_id
          ) : null,
          /* @__PURE__ */ U.createElement("span", null, h.runs, " ", u(r, "runs")),
          /* @__PURE__ */ U.createElement("span", null, jn(h.total_tokens), " tok"),
          h.skills ? /* @__PURE__ */ U.createElement(
            "span",
            {
              style: { color: "#2f54eb" },
              title: Object.entries(h.skills).sort((d, v) => v[1] - d[1]).map(([d, v]) => `${d} ×${v}`).join(`
`)
            },
            "📚",
            " ",
            Object.entries(h.skills).sort((d, v) => v[1] - d[1]).slice(0, 2).map(([d]) => d).join(" ")
          ) : null,
          /* @__PURE__ */ U.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: As(h.last_event_t)
            },
            Os(h.last_event_t)
          )
        )
      );
    }));
  }));
}
function Uo() {
  const e = typeof je.useLocale == "function" ? je.useLocale() : void 0, n = nt(
    () => Bt(e ?? ie()),
    [e]
  ), [t, s] = Me(null), [l, i] = Me(!1), [r, c] = Me(
    /* @__PURE__ */ new Set()
  ), [f, y] = Me(!1), [o, h] = Me(!1), [E, d] = Me(null), [v, $] = Me(""), [D, w] = Me(null), M = _n(async () => {
    try {
      const C = await qt({ limit: 100, offset: 0 });
      s(C.sessions), i(C.has_more), w(null);
    } catch (C) {
      w(String(C.message));
    }
  }, []), k = _n(async () => {
    h(!0);
    try {
      const C = await qt({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      s((L) => {
        const Z = L ?? [];
        return [
          ...Z,
          ...C.sessions.filter(
            (H) => !Z.some((se) => se.session_id === H.session_id)
          )
        ];
      }), i(C.has_more);
    } catch (C) {
      w(String(C.message));
    } finally {
      h(!1);
    }
  }, [t]);
  Ot(() => {
    M();
    try {
      const C = new URLSearchParams(window.location.search).get("session");
      C && (C.includes("~") ? d(C) : Nn(C).then((L) => {
        d(L ?? C);
      }));
    } catch {
    }
  }, [M]), Ot(() => {
    try {
      const C = new URL(window.location.href);
      E ? C.searchParams.set("session", E) : C.searchParams.delete("session"), window.history.replaceState(window.history.state, "", C);
    } catch {
    }
  }, [E]), Ot(() => {
    const C = setInterval(() => {
      document.visibilityState === "visible" && M();
    }, 15e3);
    return () => clearInterval(C);
  }, [M]);
  const O = nt(
    () => (t == null ? void 0 : t.find((C) => lt(C) === E)) ?? null,
    [t, E]
  ), P = nt(() => {
    if (!t) return [];
    const C = v.trim().toLowerCase();
    return C ? t.filter(
      (L) => [
        L.session_id,
        L.title ?? "",
        L.agent_id,
        L.channel,
        L.user_id ?? "",
        L.instance_id ?? "",
        L.hostname ?? ""
      ].join(" ").toLowerCase().includes(C)
    ) : t;
  }, [t, v]), A = nt(() => {
    const C = /* @__PURE__ */ new Map();
    for (const L of P) {
      const Z = L.agent_id || "(unknown)", H = C.get(Z);
      H ? H.push(L) : C.set(Z, [L]);
    }
    return [...C.entries()];
  }, [P]);
  return /* @__PURE__ */ U.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, f ? /* @__PURE__ */ U.createElement(
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
    /* @__PURE__ */ U.createElement(Mn, { title: u(n, "expandSidebar"), placement: "right" }, /* @__PURE__ */ U.createElement(
      In,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ U.createElement(Bo, null),
        onClick: () => y(!1)
      }
    ))
  ) : /* @__PURE__ */ U.createElement(
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
    /* @__PURE__ */ U.createElement(
      "div",
      {
        style: {
          padding: "12px 12px 8px",
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      },
      /* @__PURE__ */ U.createElement(
        No,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ U.createElement(Fo, null),
          placeholder: u(n, "searchPlaceholder"),
          value: v,
          style: { flex: 1, minWidth: 0 },
          onChange: (C) => $(C.target.value)
        }
      ),
      /* @__PURE__ */ U.createElement(Mn, { title: u(n, "collapseSidebar") }, /* @__PURE__ */ U.createElement(
        In,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ U.createElement(jo, null),
          onClick: () => y(!0)
        }
      ))
    ),
    D ? /* @__PURE__ */ U.createElement("div", { style: { padding: "0 12px 4px" } }, /* @__PURE__ */ U.createElement(Ge, { type: "danger", style: { fontSize: 12 } }, `${u(n, "loadFailed")}: ${D}`)) : null,
    /* @__PURE__ */ U.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ U.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ U.createElement(Po, null)) : P.length === 0 ? /* @__PURE__ */ U.createElement(
      Cn,
      {
        image: Cn.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ U.createElement("span", { style: { fontSize: 12 } }, u(n, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ U.createElement(
        Ge,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        u(n, "noSessionsHint")
      )
    ) : /* @__PURE__ */ U.createElement(
      Ho,
      {
        groups: A,
        collapsedAgents: r,
        onToggleAgent: (C) => {
          c((L) => {
            const Z = new Set(L);
            return Z.has(C) ? Z.delete(C) : Z.add(C), Z;
          });
        },
        searching: !!v.trim(),
        selected: E,
        onSelect: d,
        locale: n
      }
    ), t !== null && l && !v.trim() && /* @__PURE__ */ U.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ U.createElement(
      "a",
      {
        onClick: () => void k(),
        style: { fontSize: 12 }
      },
      o ? "…" : `⋯ ${u(n, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ U.createElement(
    Lo,
    {
      sessionId: E,
      summary: O,
      locale: n,
      onJumpSession: d,
      onRefreshSessions: () => void M()
    }
  ));
}
const Wo = window.QwenPaw.host.React;
var $n, zn;
(zn = ($n = window.QwenPaw).registerRoutes) == null || zn.call($n, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: Uo,
    label: u(ie(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
var An, st, On;
(On = (st = (An = window.QwenPaw.chat) == null ? void 0 : An.rightHeader) == null ? void 0 : st.add) == null || On.call(
  st,
  "agent-trace",
  Wo.createElement(gs),
  { id: "agent-trace-jump" }
);
