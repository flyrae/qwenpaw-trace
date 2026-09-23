var is = Object.defineProperty;
var rs = (e, t, n) => t in e ? is(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var wt = (e, t, n) => rs(e, typeof t != "symbol" ? t + "" : t, n);
const as = {
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
function Ht(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function ae() {
  try {
    return Ht(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function d(e, t) {
  return as[e][t];
}
const We = window.QwenPaw.host;
function Be(e) {
  return e.instance_id ? `${e.instance_id}~${e.session_id}` : e.session_id;
}
function Tt(e) {
  const t = e.indexOf("~");
  return t <= 0 ? { sessionId: e } : {
    instance: e.slice(0, t),
    sessionId: e.slice(t + 1)
  };
}
function cs(e, t) {
  if (!e || e.events.length === 0) return t;
  const n = /* @__PURE__ */ new Map();
  for (const l of e.events) n.set(l.seq, l);
  for (const l of t.events) n.set(l.seq, l);
  const s = [...n.values()].sort((l, o) => l.seq - o.seq);
  return {
    header: t.header ?? e.header,
    events: s,
    total_events: Math.max(t.total_events, e.total_events, s.length),
    size_bytes: Math.max(t.size_bytes, e.size_bytes),
    mtime: Math.max(t.mtime, e.mtime)
  };
}
async function us(e, t) {
  const n = t ? `?instance=${encodeURIComponent(t)}` : "";
  return Re(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats${n}`
  );
}
async function Dn(e, t) {
  return We.fetch ? We.fetch(e, t) : fetch(We.getApiUrl(e), {
    ...t,
    headers: {
      ...(t == null ? void 0 : t.headers) || {},
      ...We.getApiToken() ? { Authorization: `Bearer ${We.getApiToken()}` } : {}
    }
  });
}
class jn extends Error {
  constructor(t, n) {
    super(n), this.status = t, this.name = "ApiError";
  }
}
async function Re(e, t) {
  const n = await Dn(e, t), s = await n.text();
  let l = null;
  try {
    l = s ? JSON.parse(s) : null;
  } catch {
    l = null;
  }
  if (!n.ok) {
    const o = l && typeof l == "object" && "detail" in l ? l.detail : void 0;
    throw new jn(
      n.status,
      typeof o == "string" ? o : `HTTP ${n.status}`
    );
  }
  return l;
}
async function Yt(e) {
  const t = new URLSearchParams();
  return t.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && t.set("offset", String(e.offset)), e != null && e.instance && t.set("instance", e.instance), e != null && e.user && t.set("user", e.user), e != null && e.q && t.set("q", e.q), Re(
    `/agent-trace/sessions?${t.toString()}`
  );
}
async function ds(e, t) {
  const n = new URLSearchParams();
  t != null && t.beforeSeq && n.set("before_seq", String(t.beforeSeq)), n.set("limit", String(t == null ? void 0 : t.limit)), t != null && t.instance && n.set("instance", t.instance);
  const s = n.toString();
  return Re(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${s}`
  );
}
async function ps() {
  return Re("/agent-trace/config");
}
async function hs(e) {
  return Re("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
}
async function fs(e, t) {
  const n = t ? `?instance=${encodeURIComponent(t)}` : "", s = await Dn(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export${n}`
  );
  if (!s.ok) throw new Error(`HTTP ${s.status}`);
  const l = await s.blob(), o = URL.createObjectURL(l), a = document.createElement("a");
  a.href = o, a.download = `${e}.jsonl`, a.click(), URL.revokeObjectURL(o);
}
async function ms(e) {
  await Re(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
async function Bn(e) {
  if (!e) return null;
  try {
    return (await Re(
      `/agent-trace/resolve?chat_id=${encodeURIComponent(e)}`
    )).session_id ?? null;
  } catch {
    return e;
  }
}
const Ae = window.QwenPaw.host, rt = Ae.React, { useMemo: gs } = rt, { Button: ys, Tooltip: Es } = Ae.antd, { CompassOutlined: Ss } = Ae.antdIcons;
function vs(e) {
  return `${window.location.pathname.startsWith("/console") ? "/console" : ""}/plugin/agent-trace${e ? `?session=${encodeURIComponent(e)}` : ""}`;
}
function bs() {
  const e = typeof Ae.useLocale == "function" ? Ae.useLocale() : void 0, t = gs(
    () => Ht(e ?? ae()),
    [e]
  );
  return /* @__PURE__ */ rt.createElement(Es, { title: d(t, "viewCurrentTrace") }, /* @__PURE__ */ rt.createElement(
    ys,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ rt.createElement(Ss, null),
      "aria-label": d(t, "viewCurrentTrace"),
      onClick: () => {
        const n = typeof Ae.getCurrentSessionId == "function" ? Ae.getCurrentSessionId() : null;
        Bn(n).then((s) => {
          window.location.href = vs(s ?? n);
        });
      }
    }
  ));
}
const Zt = 3e3;
function en(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function xs(e, t) {
  const n = en(e ?? ""), s = en(t ?? "");
  if (n.length > Zt || s.length > Zt)
    return [
      ...n.map((p) => ({ kind: "del", text: p })),
      ...s.map((p) => ({ kind: "add", text: p }))
    ];
  const l = n.length, o = s.length, a = new Int32Array((l + 1) * (o + 1)), c = (p, y) => p * (o + 1) + y;
  for (let p = l - 1; p >= 0; p -= 1)
    for (let y = o - 1; y >= 0; y -= 1)
      a[c(p, y)] = n[p] === s[y] ? a[c(p + 1, y + 1)] + 1 : Math.max(a[c(p + 1, y)], a[c(p, y + 1)]);
  const h = [];
  let g = 0, i = 0;
  for (; g < l && i < o; )
    n[g] === s[i] ? (h.push({ kind: "same", text: n[g] }), g += 1, i += 1) : a[c(g + 1, i)] >= a[c(g, i + 1)] ? (h.push({ kind: "del", text: n[g] }), g += 1) : (h.push({ kind: "add", text: s[i] }), i += 1);
  for (; g < l; )
    h.push({ kind: "del", text: n[g] }), g += 1;
  for (; i < o; )
    h.push({ kind: "add", text: s[i] }), i += 1;
  return h;
}
function ks(e, t = 3) {
  const n = new Array(e.length).fill(!1);
  e.forEach((o, a) => {
    if (o.kind !== "same")
      for (let c = Math.max(0, a - t); c <= Math.min(e.length - 1, a + t); c += 1)
        n[c] = !0;
  });
  const s = [];
  let l = 0;
  return e.forEach((o, a) => {
    n[a] ? (l > 0 && (s.push({ kind: "gap", count: l }), l = 0), s.push(o)) : l += 1;
  }), l > 0 && s.push({ kind: "gap", count: l }), s;
}
function ws(e) {
  let t = 0, n = 0;
  for (const s of e)
    s.kind === "add" ? t += 1 : s.kind === "del" && (n += 1);
  return { added: t, removed: n };
}
function Ts(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = (t * 31 + e.charCodeAt(n)) % 100003;
  return t % 360;
}
class _s {
  constructor() {
    wt(this, "open", /* @__PURE__ */ new Map());
    wt(this, "finished", []);
  }
  /** A run opens: any still-open spans are hard-closed first (crashed
   * runs without run/end must not leak attribution — same semantics as
   * Kimi's run/start reset for activeRunSkills). */
  onRunStart() {
    this.closeAll(null, null, null);
  }
  onSlashSkill(t, n, s) {
    this.onRunStart(), this.openSpan(t, "slash", n, s);
  }
  onSkillLoad(t, n, s) {
    let l = this.open.get(t);
    return l || (l = this.openSpan(t, "load", n, s)), l.loadSeq = n, l.bypass && (l.bypass = !1), l.id;
  }
  onToolCall(t) {
    if (!t.attribution) return null;
    const { skill: n, kind: s, detail: l } = t.attribution;
    let o = this.open.get(n);
    return o || (o = this.openSpan(
      n,
      s === "path" ? "resource" : "load",
      t.seq,
      t.t
    ), s === "temporal" && (o.trigger = "resource")), o.attributedIndexes.push(t.recordIndex), o.evidences.push({
      kind: s,
      detail: l,
      recordIndex: t.recordIndex
    }), o.lastActivitySeq = t.seq, o.lastActivityT = t.t, o.id;
  }
  onRunEnd(t, n) {
    this.closeAll(t, n, "run_end");
  }
  /** All spans (open + finished) in start order. */
  spans() {
    const t = [...this.open.values()];
    return [...this.finished, ...t].sort((n, s) => n.startSeq - s.startSeq);
  }
  openSpan(t, n, s, l) {
    const o = {
      id: `${t}#${s}`,
      skill: t,
      trigger: n,
      startSeq: s,
      startT: l,
      endSeq: null,
      endT: null,
      endKind: null,
      lastActivitySeq: null,
      lastActivityT: null,
      attributedIndexes: [],
      evidences: [],
      bypass: n === "resource",
      loadSeq: n === "load" ? s : null,
      colorHue: Ts(t)
    };
    return this.open.set(t, o), o;
  }
  closeAll(t, n, s) {
    for (const l of this.open.values())
      l.endSeq = t, l.endT = n, l.endKind = s, this.finished.push(l);
    this.open.clear();
  }
}
function Is(e) {
  return e.endT !== null ? e.endT : e.lastActivityT !== null ? e.lastActivityT : e.startT;
}
function Cs(e) {
  const t = e.lastActivityT ?? e.endT;
  return t === null ? null : Math.max(0, t - e.startT);
}
const Ms = /* @__PURE__ */ new Set([
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
function $s(e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e.matchAll(
    /(?:scripts[/\\])([\w.\-]+\.(?:py|js|mjs|sh|json|ts))/gi
  ))
    t.add(n[1].toLowerCase());
  for (const n of e.matchAll(/```[a-z]*\n([\s\S]*?)```/g))
    for (const s of n[1].matchAll(/[\w./=\-]{6,}/g)) {
      const l = s[0].toLowerCase();
      Ms.has(l) || t.add(l);
    }
  return [...t];
}
function zs(e, t) {
  const n = e.toLowerCase();
  let s = null, l = !1;
  for (const [o, a] of t)
    for (const c of a)
      if (n.includes(c)) {
        s === null ? s = { skill: o, feature: c } : s.skill !== o && (l = !0);
        break;
      }
  return l ? null : s;
}
const As = {
  approval: { zh: "审批", en: "Approval" },
  receipt: { zh: "回执", en: "Receipt" },
  spawn: { zh: "子代理", en: "Spawn" },
  header: { zh: "提示词", en: "Prompt" },
  error: { zh: "错误", en: "Error" }
}, Rs = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" }
};
function Fn(e, t) {
  const n = e.markerKind ? As[e.markerKind] : void 0;
  if (n) return t === "zh-CN" ? n.zh : n.en;
  const s = Rs[e.kind];
  return s ? t === "zh-CN" ? s.zh : s.en : e.kind;
}
const tn = 60;
function Ke(e) {
  return `${e.role}|${e.text ?? `#${e.chars ?? 0}`}`;
}
function nn(e) {
  return e.chars ?? (e.text ? e.text.length : 0);
}
function sn(e) {
  const t = {};
  for (const n of e)
    t[n.role] = (t[n.role] ?? 0) + 1;
  return t;
}
function Os(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length && Ke(e[n]) === Ke(t[n]); )
    n += 1;
  const s = e.slice(n), l = t.slice(n), o = /* @__PURE__ */ new Map();
  for (const u of l) {
    const v = Ke(u);
    o.set(v, (o.get(v) ?? 0) + 1);
  }
  const a = [], c = [], h = [];
  for (let u = 0; u < Math.min(n, tn); u += 1)
    h.push({ status: "kept", role: e[u].role });
  for (const u of s) {
    const v = Ke(u), $ = o.get(v) ?? 0;
    $ > 0 ? (o.set(v, $ - 1), h.push({ status: "kept", role: u.role })) : a.push(u);
  }
  for (const u of l) {
    const v = Ke(u), $ = o.get(v) ?? 0;
    $ > 0 && (o.set(v, $ - 1), c.push(u));
  }
  const g = /* @__PURE__ */ new Map();
  for (const u of c) {
    const v = g.get(u.role);
    v ? v.push(u) : g.set(u.role, [u]);
  }
  const i = [], p = [];
  for (const u of a) {
    const v = g.get(u.role);
    v && v.length > 0 ? i.push([u, v.shift()]) : p.push(u);
  }
  const y = [...g.values()].flat();
  for (const [u, v] of i)
    h.push({
      status: "rewritten",
      role: u.role,
      oldText: u.text,
      newText: v.text
    });
  for (const u of p)
    h.push({
      status: "removed",
      role: u.role,
      oldText: u.text
    });
  for (const u of y)
    h.push({
      status: "added",
      role: u.role,
      newText: u.text
    });
  return {
    breakAt: n,
    beforeCount: e.length,
    afterCount: t.length,
    beforeChars: e.reduce((u, v) => u + nn(v), 0),
    afterChars: t.reduce((u, v) => u + nn(v), 0),
    beforeByRole: sn(e),
    afterByRole: sn(t),
    changes: h.slice(0, tn)
  };
}
function Ls(e) {
  const t = e.trim();
  if (!t.startsWith("[") && !t.startsWith("{")) return e;
  let n;
  try {
    n = JSON.parse(t);
  } catch {
    return e;
  }
  const s = Array.isArray(n) ? n : [n], l = [];
  for (const o of s)
    if (o && typeof o == "object" && typeof o.text == "string") {
      const a = o.text;
      a && l.push(a);
    } else o && typeof o == "object" && typeof o.type == "string" ? l.push(`[${o.type}]`) : typeof o == "string" && o && l.push(o);
  return l.length > 0 ? l.join(`
`) : e;
}
function Ns(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function he(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const t = e * 1e3;
  return t < 1e3 ? `${Math.round(t)}ms` : t < 6e4 ? `${(t / 1e3).toFixed(1)}s` : `${Math.floor(t / 6e4)}m${Math.round(t % 6e4 / 1e3)}s`;
}
function J(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function ct(e, t) {
  return e === void 0 || !Number.isFinite(e) || t === null || t === void 0 || t <= 0 ? "-" : `${(e / t).toFixed(1)} tok/s`;
}
function Ie(e) {
  return e == null || !Number.isFinite(e) ? "-" : new Date(e).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
  });
}
function ge(e) {
  if (!e) return null;
  const t = Date.parse(e);
  return Number.isFinite(t) ? t : null;
}
function Hn(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function Ps(e) {
  if (!e) return "-";
  const t = new Date(e);
  return Number.isNaN(t.getTime()) ? e : t.toLocaleString();
}
function Ds(e) {
  if (!e) return "-";
  const t = Date.parse(e);
  if (!Number.isFinite(t)) return e;
  const n = Date.now() - t;
  return n < 6e4 ? "刚刚" : n < 36e5 ? `${Math.floor(n / 6e4)} 分钟前` : n < 864e5 ? `${Math.floor(n / 36e5)} 小时前` : new Date(t).toLocaleString();
}
function Un(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function Pt(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const Wn = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default"
};
function Kn(e) {
  return e || "unknown";
}
const ht = window.QwenPaw.host, r = ht.React, { useEffect: js, useRef: Bs, useState: Je } = r, { Button: Vn, Collapse: Dt, Empty: ln, Tabs: Ut, Tag: ut } = ht.antd, { Text: D } = ht.antd.Typography, { CopyOutlined: Fs, CloseOutlined: Hs } = ht.antdIcons, Us = 320, Ws = 720, tt = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, Ks = 2e4;
function Vs(e) {
  if (e.length > Ks) return e;
  const t = [], n = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let s = 0, l, o = 0;
  for (; (l = n.exec(e)) !== null; ) {
    l.index > s && t.push(e.slice(s, l.index));
    const a = l[0];
    let c = "rgba(128,128,128,1)";
    l[1] !== void 0 ? c = tt.key : l[2] !== void 0 ? c = tt.string : l[3] !== void 0 ? c = tt.number : c = tt.literal, t.push(
      /* @__PURE__ */ r.createElement("span", { key: o++, style: { color: c } }, a)
    ), s = l.index + a.length;
  }
  return s < e.length && t.push(e.slice(s)), t;
}
function Se({ value: e, json: t = !1 }) {
  const [n, s] = Je(!1), l = typeof e == "string" ? e : JSON.stringify(e, null, 2);
  if (!l) return null;
  const o = async () => {
    try {
      await navigator.clipboard.writeText(l), s(!0), window.setTimeout(() => s(!1), 1500);
    } catch {
    }
  };
  return /* @__PURE__ */ r.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ r.createElement(
    "a",
    {
      onClick: () => void o(),
      title: "Copy",
      style: {
        position: "absolute",
        top: 4,
        right: 6,
        fontSize: 11,
        color: n ? "#52c41a" : "rgba(128,128,128,1)",
        zIndex: 1
      }
    },
    n ? "✓" : /* @__PURE__ */ r.createElement(Fs, null)
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
    t ? Vs(l) : l
  ));
}
function w({
  label: e,
  value: t,
  danger: n = !1
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
    /* @__PURE__ */ r.createElement(D, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ r.createElement(
      D,
      {
        type: n ? "danger" : void 0,
        style: { fontSize: 12, textAlign: "right" }
      },
      t
    )
  );
}
function jt({
  input: e,
  output: t,
  cacheRead: n,
  cacheWrite: s,
  reasoning: l
}) {
  const o = Math.max(0, e - n - s), a = Math.max(0, t - l);
  return /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(w, { label: "Input", value: `${J(e)} tok` }), n ? /* @__PURE__ */ r.createElement(w, { label: "Cached", value: `${J(n)} tok` }) : null, s ? /* @__PURE__ */ r.createElement(
    w,
    {
      label: "Cache created",
      value: `${J(s)} tok`
    }
  ) : null, n || s ? /* @__PURE__ */ r.createElement(w, { label: "Other", value: `${J(o)} tok` }) : null, /* @__PURE__ */ r.createElement(w, { label: "Output", value: `${J(t)} tok` }), l ? /* @__PURE__ */ r.createElement(w, { label: "Reasoning", value: `${J(l)} tok` }) : null, l ? /* @__PURE__ */ r.createElement(w, { label: "Content", value: `${J(a)} tok` }) : null);
}
function _t({
  label: e,
  onOpen: t,
  children: n
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
    /* @__PURE__ */ r.createElement("a", { onClick: t, style: { fontSize: 12, fontWeight: 600 } }, e, " →"),
    /* @__PURE__ */ r.createElement("div", { style: { paddingTop: 2 } }, n)
  );
}
const on = ["system", "user", "assistant", "tool"], qs = {
  system: "roleSystem",
  user: "roleUser",
  assistant: "roleAssistant",
  tool: "roleTool"
};
function Gs({
  request: e,
  locale: t
}) {
  const n = e.inputComposition;
  if (!n) return null;
  const s = [], l = new Set(on), o = [
    ...on.filter((c) => n.charsByRole[c]),
    ...Object.keys(n.charsByRole).filter(
      (c) => !l.has(c) && n.charsByRole[c]
    )
  ], a = n.totalChars || 1;
  for (const c of o) {
    const h = n.charsByRole[c], g = qs[c] ?? "roleOther", i = Math.round(h / a * 100);
    s.push(
      /* @__PURE__ */ r.createElement(
        w,
        {
          key: c,
          label: d(t, g),
          value: `${J(h)} ${d(t, "charUnit")} · ${i}%`
        }
      )
    );
  }
  return n.maxToolChars > 0 && s.push(
    /* @__PURE__ */ r.createElement(
      w,
      {
        key: "max-tool",
        label: d(t, "maxToolMsg"),
        value: `${J(n.maxToolChars)} ${d(
          t,
          "charUnit"
        )}`
      }
    )
  ), /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(D, { strong: !0, style: { fontSize: 12, display: "block", marginTop: 10 } }, d(t, "inputComposition")), s, e.inputTokens > 0 ? /* @__PURE__ */ r.createElement(
    w,
    {
      label: d(t, "realInputTokens"),
      value: `${J(e.inputTokens)} tok`
    }
  ) : null, /* @__PURE__ */ r.createElement(
    D,
    {
      type: "secondary",
      style: { fontSize: 11, display: "block", padding: "2px 0" }
    },
    d(t, "compositionNote")
  ), e.growth ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    w,
    {
      label: d(t, "growthVsPrev"),
      value: e.growth.prevInputTokens === null ? d(t, "firstRound") : `${e.growth.deltaTokens >= 0 ? "+" : ""}${J(
        e.growth.deltaTokens
      )} tok`
    }
  ), e.growth.prevInputTokens !== null && e.growth.deltaTokens > 0 ? /* @__PURE__ */ r.createElement(
    w,
    {
      label: d(t, "cacheAbsorbed"),
      value: `${J(e.cacheReadTokens)} tok`
    }
  ) : null) : null);
}
function Xs({
  request: e,
  onJumpRecord: t
}) {
  const n = ae(), [s, l] = r.useState("summary"), o = /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(
    w,
    {
      label: d(n, "startedAt"),
      value: Ie(e.startedAt)
    }
  ), /* @__PURE__ */ r.createElement(
    w,
    {
      label: d(n, "duration"),
      value: he(
        e.durationMs === null ? null : e.durationMs / 1e3
      )
    }
  ), e.ttftMs !== null ? /* @__PURE__ */ r.createElement(
    w,
    {
      label: d(n, "ttftLabel"),
      value: he(e.ttftMs / 1e3)
    }
  ) : null, e.decodeMs !== null ? /* @__PURE__ */ r.createElement(
    w,
    {
      label: d(n, "decodeLabel"),
      value: he(e.decodeMs / 1e3)
    }
  ) : null, /* @__PURE__ */ r.createElement(
    w,
    {
      label: d(n, "throughput"),
      value: ct(
        e.outputTokens,
        e.decodeMs === null ? null : e.decodeMs / 1e3
      )
    }
  )), a = /* @__PURE__ */ r.createElement(
    jt,
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
      label: d(n, "summary"),
      children: /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(w, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ r.createElement(
        w,
        {
          label: d(n, "status"),
          value: e.status || "unknown",
          danger: e.status === "error"
        }
      ), /* @__PURE__ */ r.createElement(w, { label: "Query", value: Js(e.query) }), e.providers.length > 0 ? /* @__PURE__ */ r.createElement(w, { label: "Provider", value: e.providers.join(" · ") }) : null, /* @__PURE__ */ r.createElement(
        w,
        {
          label: d(n, "model"),
          value: e.models.join(", ") || "-"
        }
      ), /* @__PURE__ */ r.createElement(w, { label: "Tool calls", value: String(e.toolCalls) }), e.errors.length > 0 ? /* @__PURE__ */ r.createElement(
        w,
        {
          label: "Error",
          value: e.errors.join("; ").slice(0, 120),
          danger: !0
        }
      ) : null, e.resultIndex !== void 0 && t ? /* @__PURE__ */ r.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ r.createElement(
        "a",
        {
          style: { fontSize: 12 },
          onClick: () => t(e.resultIndex)
        },
        "Result: Assistant Message →"
      )) : null, e.options ? /* @__PURE__ */ r.createElement(_t, { label: "Options", onOpen: () => l("options") }, /* @__PURE__ */ r.createElement(Se, { value: e.options, json: !0 })) : null, /* @__PURE__ */ r.createElement(_t, { label: "Usage", onOpen: () => l("usage") }, a), /* @__PURE__ */ r.createElement(_t, { label: "Timing", onOpen: () => l("timing") }, o))
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(D, { strong: !0, style: { fontSize: 12 } }, d(n, "thisRequest")), a, /* @__PURE__ */ r.createElement(Gs, { request: e, locale: n }), e.sessionTotals ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
        D,
        {
          strong: !0,
          style: { fontSize: 12, display: "block", marginTop: 10 }
        },
        d(n, "sessionTotal")
      ), /* @__PURE__ */ r.createElement(
        jt,
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
      children: o
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
    Ut,
    {
      size: "small",
      activeKey: s,
      onChange: (h) => l(h),
      items: c,
      tabBarStyle: { marginBottom: 8 }
    }
  ));
}
function Js(e, t = 200) {
  const n = e.split(`
`, 1)[0].trim();
  return n.length > t ? `${n.slice(0, t)}…` : n;
}
function Qs({
  oldText: e,
  newText: t
}) {
  const n = r.useMemo(
    () => xs(e, t),
    [e, t]
  ), s = r.useMemo(() => ws(n), [n]), l = r.useMemo(() => ks(n), [n]), o = ae();
  return e === void 0 ? /* @__PURE__ */ r.createElement(D, { type: "secondary", style: { fontSize: 12 } }, d(o, "noPrevPrompt")) : /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ r.createElement("span", { style: { color: "#52c41a" } }, "+", s.added), " ", /* @__PURE__ */ r.createElement("span", { style: { color: "#ff4d4f" } }, "−", s.removed)), /* @__PURE__ */ r.createElement(
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
    l.map((a, c) => {
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
function Ys({ record: e }) {
  var o;
  const t = ae(), n = e.headerTools ?? [], s = e.headerReason === "changed", l = [
    {
      key: "summary",
      label: d(t, "summary"),
      children: /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(w, { label: "#", value: String(e.index) }), /* @__PURE__ */ r.createElement(
        w,
        {
          label: d(t, "status"),
          value: s ? d(t, "promptChanged") : d(t, "promptInitial")
        }
      ), /* @__PURE__ */ r.createElement(w, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ r.createElement(w, { label: "Chars", value: String(((o = e.prompt) == null ? void 0 : o.length) ?? 0) }), /* @__PURE__ */ r.createElement(w, { label: "Tools", value: String(n.length) }))
    },
    ...s ? [
      {
        key: "diff",
        label: "Diff",
        children: /* @__PURE__ */ r.createElement(
          Qs,
          {
            oldText: e.prevPrompt,
            newText: e.prompt ?? ""
          }
        )
      }
    ] : [],
    {
      key: "prompt",
      label: d(t, "prompt"),
      children: /* @__PURE__ */ r.createElement(Se, { value: e.prompt })
    },
    ...n.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ r.createElement("div", { style: { paddingTop: 4 } }, n.map((a) => /* @__PURE__ */ r.createElement(D, { key: a, code: !0, style: { fontSize: 11 } }, a)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ r.createElement(
          Dt,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((a, c) => {
              var g;
              const h = typeof a.name == "string" && a.name || typeof ((g = a.function) == null ? void 0 : g.name) == "string" && a.function.name || `tool-${c + 1}`;
              return {
                key: String(c),
                label: /* @__PURE__ */ r.createElement(D, { code: !0, style: { fontSize: 11 } }, h),
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
  return /* @__PURE__ */ r.createElement(Ut, { size: "small", items: l, tabBarStyle: { marginBottom: 8 } });
}
function It({ dragRef: e, width: t }) {
  return /* @__PURE__ */ r.createElement(
    "div",
    {
      onPointerDown: (n) => {
        e.current = {
          anchorX: n.clientX,
          anchorWidth: t
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
function at({ onClose: e }) {
  return e ? /* @__PURE__ */ r.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ r.createElement(
    Vn,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ r.createElement(Hs, null),
      onClick: e
    }
  )) : null;
}
function Zs({
  record: e,
  request: t,
  onJumpSession: n,
  onJumpRecord: s,
  onSelectTurn: l,
  onClose: o
}) {
  var v, $, P, _, O;
  const a = ae(), [c, h] = Je(400), g = Bs(null);
  if (js(() => {
    const k = (L) => {
      const M = g.current;
      if (M === null) return;
      const G = M.anchorX - L.clientX;
      h(
        Math.min(Ws, Math.max(Us, M.anchorWidth + G))
      );
    }, I = () => {
      g.current = null;
    };
    return window.addEventListener("pointermove", k), window.addEventListener("pointerup", I), () => {
      window.removeEventListener("pointermove", k), window.removeEventListener("pointerup", I);
    };
  }, []), e === null && t === null)
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
        ln,
        {
          image: ln.PRESENTED_IMAGE_SIMPLE,
          description: d(a, "selectRecord")
        }
      )
    );
  if (e === null && t !== null)
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
      /* @__PURE__ */ r.createElement(It, { dragRef: g, width: c }),
      /* @__PURE__ */ r.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ r.createElement(at, { onClose: o }), /* @__PURE__ */ r.createElement(Xs, { request: t, onJumpRecord: s }))
    );
  const i = e;
  if (i.kind === "system" && i.prompt !== void 0)
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
      /* @__PURE__ */ r.createElement(It, { dragRef: g, width: c }),
      /* @__PURE__ */ r.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ r.createElement(at, { onClose: o }), /* @__PURE__ */ r.createElement(Ys, { record: i }))
    );
  const p = i.usage, y = i.timing, u = [];
  if (u.push({
    key: "summary",
    label: d(a, "summary"),
    children: /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(w, { label: "#", value: String(i.index) }), /* @__PURE__ */ r.createElement(w, { label: "Kind", value: Fn(i, a) }), i.runIndex > 0 && l ? /* @__PURE__ */ r.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ r.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => l(i.runIndex)
      },
      "Request #",
      i.runIndex,
      " →"
    )) : null, /* @__PURE__ */ r.createElement(
      w,
      {
        label: d(a, "status"),
        value: i.running ? d(a, "running") : i.isError ? d(a, "error") : d(a, "success"),
        danger: i.isError
      }
    ), i.provider ? /* @__PURE__ */ r.createElement(w, { label: "Provider", value: i.provider }) : null, i.model ? /* @__PURE__ */ r.createElement(w, { label: d(a, "model"), value: i.model }) : null, i.toolName ? /* @__PURE__ */ r.createElement(w, { label: "Tool", value: i.toolName }) : null, i.inSkill ? /* @__PURE__ */ r.createElement(
      w,
      {
        label: d(a, "skillResource"),
        value: i.inSkillLoaded ? `⚡ ${i.inSkill}` : `⚡ ${i.inSkill}（${d(a, "skillBypass")}）`
      }
    ) : null, i.guidedSkill ? /* @__PURE__ */ r.createElement(
      w,
      {
        label: d(a, "skillGuided"),
        value: `∈ ${i.guidedSkill}（${i.guidedReason === "slash" ? d(a, "guidedBySlash") : d(a, "guidedByLoad")}）`
      }
    ) : null, i.toolOutputChars ? /* @__PURE__ */ r.createElement(
      w,
      {
        label: d(a, "outputSize"),
        value: i.toolOutputBytes ? `${J(i.toolOutputChars)} ${d(
          a,
          "charUnit"
        )} · ${Pt(i.toolOutputBytes)} (${d(
          a,
          "beforeTruncation"
        )})` : `${J(i.toolOutputChars)} ${d(
          a,
          "charUnit"
        )}`
      }
    ) : null, i.kind === "user" && (i.channel || i.userId) ? /* @__PURE__ */ r.createElement(
      w,
      {
        label: d(a, "source"),
        value: [i.channel, i.userId].filter(Boolean).join(" · ")
      }
    ) : null, i.receipt ? /* @__PURE__ */ r.createElement(
      w,
      {
        label: d(a, "channel"),
        value: i.receipt.channel ?? "-"
      }
    ) : null, /* @__PURE__ */ r.createElement(
      w,
      {
        label: d(a, "duration"),
        value: he(i.timeSeconds)
      }
    ), i.note ? /* @__PURE__ */ r.createElement(D, { type: "warning", style: { fontSize: 12 } }, i.note) : null, i.spawnSession ? /* @__PURE__ */ r.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ r.createElement(
      w,
      {
        label: d(a, "spawnedAgent"),
        value: i.spawnAgent ?? "?"
      }
    ), n ? /* @__PURE__ */ r.createElement(
      Vn,
      {
        size: "small",
        onClick: () => i.spawnSession && n(i.spawnSession),
        style: { marginTop: 4 }
      },
      d(a, "openChildSession")
    ) : null) : null)
  }), i.kind === "message" && (i.usage || i.timing || i.options || (v = i.apiPayload) != null && v.params || i.toolCalls && i.toolCalls.length > 0)) {
    const k = ($ = i.apiPayload) == null ? void 0 : $.params, I = k !== void 0 && i.options !== void 0;
    u.push({
      key: "request",
      label: d(a, "requestTab"),
      children: /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, i.toolCalls && i.toolCalls.length > 0 ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(D, { strong: !0, style: { fontSize: 12 } }, d(a, "toolCallsEmitted"), " (", i.toolCalls.length, ")"), i.toolCalls.map((L, M) => /* @__PURE__ */ r.createElement(
        "div",
        {
          key: L.id || M,
          style: { display: "flex", gap: 6, alignItems: "baseline" }
        },
        /* @__PURE__ */ r.createElement(D, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, L.name),
        L.id ? /* @__PURE__ */ r.createElement(
          D,
          {
            type: "secondary",
            style: { fontSize: 10, flexShrink: 0 }
          },
          "…",
          L.id.slice(-8)
        ) : null
      ))) : null, k || i.options ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(D, { strong: !0, style: { fontSize: 12 } }, d(a, "generationOptions")), I ? /* @__PURE__ */ r.createElement(
        D,
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
          value: { ...i.options ?? {}, ...k ?? {} },
          json: !0
        }
      )) : null, i.usage ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(D, { strong: !0, style: { fontSize: 12 } }, d(a, "usage")), /* @__PURE__ */ r.createElement(
        jt,
        {
          input: i.usage.input_tokens ?? 0,
          output: i.usage.output_tokens ?? 0,
          cacheRead: i.usage.cache_input_tokens ?? 0,
          cacheWrite: i.usage.cache_creation_input_tokens ?? 0,
          reasoning: i.usage.reasoning_tokens ?? 0
        }
      )) : null, /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(D, { strong: !0, style: { fontSize: 12 } }, d(a, "timing")), /* @__PURE__ */ r.createElement(
        w,
        {
          label: d(a, "startedAt"),
          value: Ie(i.startedAt)
        }
      ), /* @__PURE__ */ r.createElement(
        w,
        {
          label: d(a, "duration"),
          value: he(i.timeSeconds)
        }
      ), i.timing ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
        w,
        {
          label: d(a, "ttftLabel"),
          value: he(i.timing.ttft_ms / 1e3)
        }
      ), /* @__PURE__ */ r.createElement(
        w,
        {
          label: d(a, "decodeLabel"),
          value: he(i.timing.decode_ms / 1e3)
        }
      ), /* @__PURE__ */ r.createElement(
        w,
        {
          label: d(a, "throughput"),
          value: ct(
            (P = i.usage) == null ? void 0 : P.output_tokens,
            i.timing.decode_ms / 1e3
          )
        }
      )) : /* @__PURE__ */ r.createElement(D, { type: "secondary", style: { fontSize: 11 } }, d(a, "noTiming"))))
    });
  }
  if (i.kind === "tool") {
    if (i.toolInput && u.push({
      key: "payload",
      label: d(a, "input"),
      children: /* @__PURE__ */ r.createElement(Se, { value: i.toolInput, json: !0 })
    }), (i.toolOutput || i.toolError) && u.push({
      key: "result",
      label: d(a, "output"),
      children: /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, i.toolError ? /* @__PURE__ */ r.createElement(D, { type: "danger", style: { fontSize: 12 } }, i.toolError) : null, i.toolOutput ? /* @__PURE__ */ r.createElement(Se, { value: i.toolOutput }) : null)
    }), i.toolSchema) {
      const k = i.toolSchema.function, I = i.toolSchema, L = typeof (k == null ? void 0 : k.description) == "string" ? k.description : typeof I.description == "string" ? I.description : void 0, M = (k == null ? void 0 : k.parameters) !== void 0 ? k.parameters : I.parameters;
      u.push({
        key: "schema",
        label: "Schema",
        children: /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ r.createElement(D, { type: "secondary", style: { fontSize: 11 } }, d(a, "toolSchemaNote")), L ? /* @__PURE__ */ r.createElement(
          D,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          L
        ) : null, M !== void 0 ? /* @__PURE__ */ r.createElement(Se, { value: M, json: !0 }) : null)
      });
    }
  } else if (i.outputText || i.thinkingText || i.messages || i.marker || i.toolCalls && i.toolCalls.length > 0) {
    if (i.inputNew || i.messagesMeta) {
      const k = ((_ = i.inputNew) == null ? void 0 : _.length) ?? 0, I = ((O = i.messagesMeta) == null ? void 0 : O.count) ?? 0;
      let L;
      i.contextReset ? L = `${d(a, "deltaReset")} (${I})` : k === 0 ? L = d(a, "deltaNoChange") : i.inputNew && i.inputNew.length === 1 && i.inputNew[0].role === "assistant" && I > 1 ? L = d(a, "deltaTailUpdate") : L = `${d(a, "deltaAppend")} (${k})`, u.push({
        key: "input",
        label: d(a, "inputTab"),
        children: /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ r.createElement(w, { label: d(a, "deltaKind"), value: L }), i.contextReset ? /* @__PURE__ */ r.createElement(D, { type: "warning", style: { fontSize: 12 } }, d(a, "contextReset")) : null, i.resetDetail ? /* @__PURE__ */ r.createElement(
          "div",
          {
            style: {
              border: "1px solid rgba(250,173,20,0.4)",
              borderRadius: 6,
              padding: "6px 8px"
            }
          },
          /* @__PURE__ */ r.createElement(
            w,
            {
              label: d(a, "resetBreakAt"),
              value: `#${i.resetDetail.breakAt + 1}`
            }
          ),
          /* @__PURE__ */ r.createElement(
            w,
            {
              label: d(a, "resetSizes"),
              value: `${i.resetDetail.beforeCount} ${d(
                a,
                "resetMsgs"
              )} · ${J(i.resetDetail.beforeChars)} ${d(
                a,
                "charUnit"
              )} → ${i.resetDetail.afterCount} ${d(
                a,
                "resetMsgs"
              )} · ${J(i.resetDetail.afterChars)} ${d(
                a,
                "charUnit"
              )}`
            }
          ),
          /* @__PURE__ */ r.createElement(
            w,
            {
              label: d(a, "resetRoles"),
              value: Object.keys(i.resetDetail.afterByRole).map((M) => {
                const G = i.resetDetail.beforeByRole[M] ?? 0, U = i.resetDetail.afterByRole[M] ?? 0;
                return G === U ? null : `${M} ${G}→${U}`;
              }).filter(Boolean).join(" · ") || "-"
            }
          ),
          i.resetDetail.changes.length > 0 ? /* @__PURE__ */ r.createElement("div", { style: { marginTop: 4 } }, /* @__PURE__ */ r.createElement(D, { strong: !0, style: { fontSize: 12 } }, d(a, "resetChanges")), i.resetDetail.changes.slice(0, 20).map((M, G) => /* @__PURE__ */ r.createElement(
            "div",
            {
              key: G,
              style: {
                display: "flex",
                gap: 6,
                alignItems: "baseline"
              }
            },
            /* @__PURE__ */ r.createElement(
              ut,
              {
                color: M.status === "kept" ? "default" : M.status === "rewritten" ? "orange" : M.status === "removed" ? "red" : "green",
                style: { marginInlineEnd: 0, fontSize: 10 }
              },
              d(a, el[M.status])
            ),
            /* @__PURE__ */ r.createElement(D, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, M.role),
            M.status === "rewritten" ? /* @__PURE__ */ r.createElement(
              D,
              {
                type: "secondary",
                style: { fontSize: 11, minWidth: 0 },
                ellipsis: !0
              },
              `${d(a, "resetOldPrefix")}${(M.oldText ?? "").slice(0, 40)} → ${d(
                a,
                "resetNewPrefix"
              )}${(M.newText ?? "").slice(0, 40)}`
            ) : /* @__PURE__ */ r.createElement(
              D,
              {
                type: "secondary",
                style: { fontSize: 11, minWidth: 0 },
                ellipsis: !0
              },
              `${M.status === "removed" ? d(a, "resetOldPrefix") : d(a, "resetNewPrefix")}${(M.oldText ?? M.newText ?? "").slice(
                0,
                60
              )}`
            )
          ))) : null
        ) : null, i.messagesMeta ? /* @__PURE__ */ r.createElement(
          w,
          {
            label: d(a, "inputTotal"),
            value: `${i.messagesMeta.count} · ${J(
              i.messagesMeta.totalChars
            )} ${d(a, "charUnit")}`
          }
        ) : null, i.inputNew && i.inputNew.length > 0 ? /* @__PURE__ */ r.createElement(r.Fragment, null, i.inputNew.some((M) => M.role === "assistant") ? /* @__PURE__ */ r.createElement(
          D,
          {
            type: "secondary",
            style: { fontSize: 11, display: "block" }
          },
          d(a, "assistantInputNote")
        ) : null, /* @__PURE__ */ r.createElement(
          Dt,
          {
            size: "small",
            defaultActiveKey: i.inputNew.length <= 5 ? ["messages"] : [],
            items: [
              {
                key: "messages",
                label: `${d(a, "inputMessages")} (${i.inputNew.length})`,
                children: /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, i.inputNew.map((M, G) => /* @__PURE__ */ r.createElement(
                  sl,
                  {
                    key: G,
                    message: M,
                    locale: a
                  }
                )))
              }
            ]
          }
        )) : null)
      });
    }
    if (i.apiPayload && i.apiPayload.messages.length > 0) {
      const k = i.apiPayload;
      u.push({
        key: "api",
        label: "API",
        children: /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ r.createElement(D, { type: "secondary", style: { fontSize: 11 } }, d(a, "apiPayloadNote")), /* @__PURE__ */ r.createElement(w, { label: "Model", value: k.model }), /* @__PURE__ */ r.createElement(
          w,
          {
            label: d(a, "apiMsgCount"),
            value: String(k.messages.length)
          }
        ), k.usage ? /* @__PURE__ */ r.createElement(
          w,
          {
            label: "Usage",
            value: `in ${k.usage.input_tokens ?? 0} · out ${k.usage.output_tokens ?? 0} tok`
          }
        ) : null, k.durationMs !== void 0 ? /* @__PURE__ */ r.createElement(
          w,
          {
            label: d(a, "duration"),
            value: he(k.durationMs / 1e3)
          }
        ) : null, /* @__PURE__ */ r.createElement(
          Dt,
          {
            size: "small",
            items: [
              {
                key: "api-msgs",
                label: `${d(a, "apiMessages")} (${k.messages.length})`,
                children: /* @__PURE__ */ r.createElement(
                  nl,
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
      children: /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, i.inboundParts && i.inboundParts.length > 0 ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(D, { type: "secondary", style: { fontSize: 12 } }, `${d(a, "inboundParts")} (${i.inboundParts.length})`), i.inboundParts.map((k, I) => /* @__PURE__ */ r.createElement(
        "div",
        {
          key: I,
          style: { display: "flex", gap: 8, alignItems: "baseline" }
        },
        /* @__PURE__ */ r.createElement(D, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, k.type.replace("Content", "")),
        /* @__PURE__ */ r.createElement(
          D,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          k.text ?? "-"
        )
      ))) : null, i.marker ? /* @__PURE__ */ r.createElement(Se, { value: i.marker }) : null, i.toolCalls && i.toolCalls.length > 0 ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(D, { type: "secondary", style: { fontSize: 12 } }, `${d(a, "toolCall")} (${i.toolCalls.length})`), i.toolCalls.map((k, I) => /* @__PURE__ */ r.createElement("div", { key: k.id || I, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ r.createElement(D, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", k.name), /* @__PURE__ */ r.createElement(D, { type: "secondary", style: { fontSize: 11 } }, k.id)))) : null, i.note ? /* @__PURE__ */ r.createElement(D, { type: "warning", style: { fontSize: 12 } }, i.note) : null, i.messages && i.messages.length > 0 ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(D, { type: "secondary", style: { fontSize: 12 } }, `${d(a, "query")} (${i.messages.length})`), i.messages.map((k, I) => /* @__PURE__ */ r.createElement(
        "div",
        {
          key: I,
          style: { display: "flex", gap: 8, alignItems: "baseline" }
        },
        /* @__PURE__ */ r.createElement(D, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, k.role),
        /* @__PURE__ */ r.createElement(
          D,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          k.text
        )
      ))) : null, i.thinkingText ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(D, { type: "secondary", style: { fontSize: 12 } }, d(a, "thinking")), /* @__PURE__ */ r.createElement(Se, { value: i.thinkingText })) : null, i.outputText ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(D, { type: "secondary", style: { fontSize: 12 } }, d(a, "output")), /* @__PURE__ */ r.createElement(Se, { value: i.outputText })) : null)
    });
  }
  return (i.startedAt !== null || p || y) && u.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(w, { label: "Started", value: Ie(i.startedAt) }), /* @__PURE__ */ r.createElement(w, { label: "Total", value: he(i.timeSeconds) }), y ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      w,
      {
        label: "TTFT",
        value: he(y.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ r.createElement(
      w,
      {
        label: "Decoding",
        value: he(y.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ r.createElement(
      w,
      {
        label: d(a, "throughput"),
        value: ct(
          p == null ? void 0 : p.output_tokens,
          y.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ r.createElement(D, { type: "secondary", style: { fontSize: 12 } }, d(a, "noTiming")))
  }), p && u.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(w, { label: "Input", value: J(p.input_tokens) }), /* @__PURE__ */ r.createElement(w, { label: "Output", value: J(p.output_tokens) }), p.cache_creation_input_tokens ? /* @__PURE__ */ r.createElement(
      w,
      {
        label: "Cache write",
        value: J(p.cache_creation_input_tokens)
      }
    ) : null, p.cache_input_tokens ? /* @__PURE__ */ r.createElement(
      w,
      {
        label: "Cache read",
        value: J(p.cache_input_tokens)
      }
    ) : null, p.total_tokens !== void 0 ? /* @__PURE__ */ r.createElement(w, { label: "Total", value: J(p.total_tokens) }) : null, p.time !== void 0 ? /* @__PURE__ */ r.createElement(w, { label: "API time", value: he(p.time) }) : null)
  }), u.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ r.createElement(Se, { value: i.raw })
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
    /* @__PURE__ */ r.createElement(It, { dragRef: g, width: c }),
    /* @__PURE__ */ r.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ r.createElement(at, { onClose: o }), /* @__PURE__ */ r.createElement(Ut, { size: "small", items: u, tabBarStyle: { marginBottom: 8 } }))
  );
}
const el = {
  kept: "resetKept",
  removed: "resetRemoved",
  rewritten: "resetRewritten",
  added: "resetAdded"
}, rn = 8, tl = {
  system: "green",
  user: "blue",
  tool: "gold"
};
function nl({
  messages: e,
  locale: t
}) {
  const [n, s] = Je(null), [l, o] = Je(null), [a, c] = Je(!1), h = /* @__PURE__ */ new Map();
  for (const u of e)
    h.set(u.role, (h.get(u.role) ?? 0) + 1);
  const g = n === null ? e.map((u, v) => v) : e.flatMap(
    (u, v) => u.role === n ? [v] : []
  ), i = !a && n === null && e.length > rn + 4 ? e.length - rn : 0, p = g.filter((u) => u >= i), y = (u, v, $) => /* @__PURE__ */ r.createElement(
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
  return /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ r.createElement("div", { style: { display: "flex", gap: 4, flexWrap: "wrap" } }, y(
    `${d(t, "apiFilterAll")} ${e.length}`,
    n === null,
    () => s(null)
  ), [...h.entries()].map(
    ([u, v]) => y(
      `${u} ${v}`,
      n === u,
      () => s(n === u ? null : u)
    )
  )), i > 0 ? /* @__PURE__ */ r.createElement(
    "a",
    {
      style: { fontSize: 11 },
      onClick: () => c(!0)
    },
    `⋯ ${d(t, "apiShowEarlier")} (${i})`
  ) : null, a && n === null && i === 0 ? /* @__PURE__ */ r.createElement("a", { style: { fontSize: 11 }, onClick: () => c(!1) }, d(t, "apiCollapseEarlier")) : null, /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 4 } }, p.map((u) => {
    const v = e[u], $ = l === u;
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
          onClick: () => o($ ? null : u),
          style: {
            display: "flex",
            gap: 6,
            alignItems: "center",
            cursor: "pointer",
            minWidth: 0
          }
        },
        /* @__PURE__ */ r.createElement(
          ut,
          {
            color: tl[v.role] ?? "purple",
            style: {
              marginInlineEnd: 0,
              fontSize: 10,
              lineHeight: "16px",
              flexShrink: 0
            }
          },
          v.role
        ),
        /* @__PURE__ */ r.createElement(D, { type: "secondary", style: { fontSize: 10, flexShrink: 0 } }, "#", u + 1),
        v.toolCallId ? /* @__PURE__ */ r.createElement(D, { code: !0, style: { fontSize: 9, flexShrink: 0 } }, "…", v.toolCallId.slice(-8)) : null,
        /* @__PURE__ */ r.createElement(D, { type: "secondary", style: { fontSize: 10, flexShrink: 0 } }, J(v.content.length), " ", d(t, "charUnit")),
        $ ? null : /* @__PURE__ */ r.createElement(
          D,
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
function sl({
  message: e,
  locale: t
}) {
  const [n, s] = r.useState(!1), l = e.text ?? "";
  return /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement("div", { style: { display: "flex", gap: 8, alignItems: "baseline" } }, /* @__PURE__ */ r.createElement(D, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, e.role), /* @__PURE__ */ r.createElement(D, { type: "secondary", style: { fontSize: 11 } }, J(e.chars), " ", d(t, "charUnit"), e.toolCallId ? ` · ${e.toolCallId}` : ""), l.length > 200 ? /* @__PURE__ */ r.createElement(
    "a",
    {
      style: { fontSize: 11 },
      onClick: () => s((o) => !o)
    },
    n ? d(t, "inputCollapseText") : d(t, "inputExpand")
  ) : null), l ? /* @__PURE__ */ r.createElement(
    "div",
    {
      style: n ? void 0 : {
        maxHeight: 57,
        overflow: "hidden",
        position: "relative"
      }
    },
    /* @__PURE__ */ r.createElement(Se, { value: l })
  ) : null);
}
const ll = {
  slash: "spanTriggerSlash",
  load: "spanTriggerLoad",
  resource: "spanTriggerResource"
}, ol = {
  run_end: "spanEndRun",
  last_activity: "spanEndLast"
};
function il({
  span: e,
  records: t,
  onJumpRecord: n,
  onClose: s
}) {
  const l = ae(), o = e.endKind ? d(l, ol[e.endKind]) : d(l, "spanOpen"), a = Cs(e);
  return new Map(t.map((c) => [c.index, c])), /* @__PURE__ */ r.createElement(
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
    /* @__PURE__ */ r.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ r.createElement(at, { onClose: s }), /* @__PURE__ */ r.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ r.createElement(
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
    ), /* @__PURE__ */ r.createElement(D, { strong: !0, style: { fontSize: 13 } }, e.skill), /* @__PURE__ */ r.createElement(
      ut,
      {
        color: e.bypass ? "orange" : "geekblue",
        style: { marginInlineEnd: 0, fontSize: 10 }
      },
      d(l, ll[e.trigger])
    )), /* @__PURE__ */ r.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ r.createElement(
      w,
      {
        label: d(l, "spanStart"),
        value: Ie(e.startT)
      }
    ), /* @__PURE__ */ r.createElement(w, { label: d(l, "spanEnd"), value: o }), e.endT !== null ? /* @__PURE__ */ r.createElement(w, { label: " ", value: Ie(e.endT) }) : null, e.lastActivityT !== null ? /* @__PURE__ */ r.createElement(
      w,
      {
        label: d(l, "spanLastActivity"),
        value: Ie(e.lastActivityT)
      }
    ) : null, /* @__PURE__ */ r.createElement(
      w,
      {
        label: d(l, "spanDuration"),
        value: a === null ? "-" : he(a / 1e3)
      }
    ), /* @__PURE__ */ r.createElement(
      w,
      {
        label: d(l, "spanAttributed"),
        value: String(e.attributedIndexes.length)
      }
    ), /* @__PURE__ */ r.createElement(
      w,
      {
        label: d(l, "spanLoadState"),
        value: e.bypass ? d(l, "skillBypass") : e.loadSeq !== null ? `seq ${e.loadSeq}` : "-",
        danger: e.bypass
      }
    )), e.evidences.length > 0 ? /* @__PURE__ */ r.createElement("div", { style: { marginTop: 10 } }, /* @__PURE__ */ r.createElement(D, { strong: !0, style: { fontSize: 12 } }, d(l, "spanEvidence")), e.evidences.slice(0, 30).map((c, h) => /* @__PURE__ */ r.createElement(
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
        ut,
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
          onClick: () => n(c.recordIndex)
        },
        "#",
        c.recordIndex
      ),
      /* @__PURE__ */ r.createElement(D, { type: "secondary", style: { fontSize: 11 } }, c.detail)
    ))) : /* @__PURE__ */ r.createElement(
      D,
      {
        type: "secondary",
        style: { fontSize: 12, display: "block", marginTop: 10 }
      },
      d(l, "spanNoActivity")
    ))
  );
}
const me = window.QwenPaw.host.React, rl = me.useRef, al = me.useState;
me.useCallback;
me.useMemo;
const cl = me.useEffect, ul = me.useLayoutEffect, dl = me.useReducer;
me.createContext;
me.useContext;
me.createElement;
me.cloneElement;
me.isValidElement;
me.memo;
me.forwardRef;
me.Fragment;
me.StrictMode;
me.version;
function pl(e) {
  return e ? e() : void 0;
}
function hl(e, t, n) {
  const s = new Array(e);
  return new Proxy(s, {
    get(l, o, a) {
      if (typeof o == "string") {
        const c = o.charCodeAt(0);
        if (c >= 48 && c <= 57) {
          const h = +o;
          if (Number.isInteger(h) && h >= 0 && h < e) {
            let g = l[h];
            if (!g) {
              const i = t[h * 2];
              g = l[h] = {
                index: h,
                key: n(h),
                start: i,
                size: t[h * 2 + 1],
                end: i + t[h * 2 + 1],
                lane: 0
              };
            }
            return g;
          }
        }
        if (o === "length") return e;
      }
      return Reflect.get(l, o, a);
    }
  });
}
function De(e, t, n) {
  let s = n.initialDeps ?? [], l, o = !0;
  function a() {
    var c;
    const h = process.env.NODE_ENV !== "production" && !!n.key && !!((c = n.debug) != null && c.call(n));
    let g = 0;
    h && (g = Date.now());
    const i = e();
    if (!(i.length !== s.length || i.some((u, v) => s[v] !== u)))
      return l;
    s = i;
    let y = 0;
    if (h && (y = Date.now()), l = t(...i), h) {
      const u = Math.round((Date.now() - g) * 100) / 100, v = Math.round((Date.now() - y) * 100) / 100, $ = v / 16, P = (_, O) => {
        for (_ = String(_); _.length < O; )
          _ = " " + _;
        return _;
      };
      console.info(
        `%c⏱ ${P(v, 5)} /${P(u, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * $, 120)
        )}deg 100% 31%);`,
        n == null ? void 0 : n.key
      );
    }
    return n != null && n.onChange && !(o && n.skipInitialOnChange) && n.onChange(l), o = !1, l;
  }
  return a.updateDeps = (c) => {
    s = c;
  }, a;
}
function an(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const fl = (e, t) => Math.abs(e - t) < 1.01, ml = (e, t, n) => {
  let s;
  return function(...l) {
    e.clearTimeout(s), s = e.setTimeout(() => t.apply(this, l), n);
  };
};
let Ve;
const Ct = () => {
  if (Ve !== void 0) return Ve;
  if (typeof navigator > "u") return Ve = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return Ve = !0;
  const e = navigator.maxTouchPoints;
  return Ve = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, cn = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, gl = (e) => e, yl = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), s = Math.min(e.endIndex + e.overscan, e.count - 1) - t + 1, l = new Array(s);
  for (let o = 0; o < s; o++)
    l[o] = t + o;
  return l;
}, El = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const s = e.targetWindow;
  if (!s)
    return;
  const l = (a) => {
    const { width: c, height: h } = a;
    t({ width: Math.round(c), height: Math.round(h) });
  };
  if (l(cn(n)), !s.ResizeObserver)
    return () => {
    };
  const o = new s.ResizeObserver((a) => {
    const c = () => {
      const h = a[0];
      if (h != null && h.borderBoxSize) {
        const g = h.borderBoxSize[0];
        if (g) {
          l({ width: g.inlineSize, height: g.blockSize });
          return;
        }
      }
      l(cn(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(c) : c();
  });
  return o.observe(n, { box: "border-box" }), () => {
    o.unobserve(n);
  };
}, dt = {
  passive: !0
}, Sl = typeof window > "u" ? !0 : "onscrollend" in window, vl = (e, t, n) => {
  const s = e.scrollElement;
  if (!s)
    return;
  const l = e.targetWindow;
  if (!l)
    return;
  const o = e.options.useScrollendEvent && Sl;
  let a = 0;
  const c = o ? null : ml(
    l,
    () => t(a, !1),
    e.options.isScrollingResetDelay
  ), h = (p) => () => {
    a = n(s), c == null || c(), t(a, p);
  }, g = h(!0), i = h(!1);
  return s.addEventListener("scroll", g, dt), o && s.addEventListener("scrollend", i, dt), () => {
    s.removeEventListener("scroll", g), o && s.removeEventListener("scrollend", i);
  };
}, bl = (e, t) => vl(e, t, (n) => {
  const { horizontal: s, isRtl: l } = e.options;
  return s ? n.scrollLeft * (l && -1 || 1) : n.scrollTop;
}), xl = (e, t, n) => {
  if (n.options.useCachedMeasurements) {
    const s = n.indexFromElement(e), l = n.options.getItemKey(s);
    return n.itemSizeCache.get(l) ?? n.options.estimateSize(s);
  }
  if (t != null && t.borderBoxSize) {
    const s = t.borderBoxSize[0];
    if (s)
      return Math.round(
        s[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  if (!t) {
    const s = n.indexFromElement(e), l = n.options.getItemKey(s), o = n.itemSizeCache.get(l);
    if (o !== void 0)
      return o;
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, kl = (e, {
  adjustments: t = 0,
  behavior: n
}, s) => {
  var l, o;
  (o = (l = s.scrollElement) == null ? void 0 : l.scrollTo) == null || o.call(l, {
    [s.options.horizontal ? "left" : "top"]: e + t,
    behavior: n
  });
}, wl = kl;
class Tl {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var n, s, l;
      return ((l = (s = (n = this.targetWindow) == null ? void 0 : n.performance) == null ? void 0 : s.now) == null ? void 0 : l.call(s)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let n = null;
      const s = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((o) => {
          const a = () => {
            const c = o.target, h = this.indexFromElement(c);
            if (!c.isConnected) {
              this.observer.unobserve(c);
              for (const [g, i] of this.elementsCache)
                if (i === c) {
                  this.elementsCache.delete(g);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(h) && this.resizeItem(
              h,
              this.options.measureElement(c, o, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
        });
      }));
      return {
        disconnect: () => {
          var l;
          (l = s()) == null || l.disconnect(), n = null;
        },
        observe: (l) => {
          var o;
          return (o = s()) == null ? void 0 : o.observe(l, { box: "border-box" });
        },
        unobserve: (l) => {
          var o;
          return (o = s()) == null ? void 0 : o.unobserve(l);
        }
      };
    })(), this.range = null, this.setOptions = (n) => {
      var s, l;
      const o = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: gl,
        rangeExtractor: yl,
        onChange: () => {
        },
        measureElement: xl,
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
      for (const y in n) {
        const u = n[y];
        u !== void 0 && (o[y] = u);
      }
      const a = this.options;
      let c = null, h = null, g = !1;
      if (a !== void 0 && a.enabled && o.enabled && o.anchorTo === "end" && this.scrollElement !== null) {
        const y = a.count, u = o.count, v = this.getMeasurements(), $ = y > 0 ? ((s = v[0]) == null ? void 0 : s.key) ?? a.getItemKey(0) : null, P = y > 0 ? ((l = v[y - 1]) == null ? void 0 : l.key) ?? a.getItemKey(y - 1) : null;
        if (u !== y || y > 0 && u > 0 && (o.getItemKey(0) !== $ || o.getItemKey(u - 1) !== P)) {
          g = !0;
          const k = y > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? v[0] : null;
          k && (c = [k.key, this.getScrollOffset() - k.start]);
          const I = o.followOnAppend === !0 ? "auto" : o.followOnAppend || null;
          I && u > y && this.isAtEnd(a.scrollEndThreshold) && (y === 0 || o.getItemKey(u - 1) !== P) && (h = I);
        }
      }
      this.options = o, g && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let i = !1, p = 0;
      if (c && this.scrollOffset !== null) {
        const [y, u] = c, v = this.getMeasurements(), { count: $, getItemKey: P } = this.options;
        let _ = 0;
        for (; _ < $ && P(_) !== y; )
          _++;
        if (_ < $) {
          const O = v[_];
          if (O) {
            const k = Math.max(0, O.start + u);
            k !== this.scrollOffset && (p = k - this.scrollOffset, this.scrollOffset = k, i = !0);
          }
        }
      }
      (i || h) && (this.pendingScrollAnchor = [
        i ? c[0] : null,
        i ? c[1] : 0,
        h,
        p
      ]);
    }, this.notify = (n) => {
      var s, l;
      (l = (s = this.options).onChange) == null || l.call(s, this, n);
    }, this.maybeNotify = De(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (n) => {
        this.notify(n);
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
      this.unsubs.filter(Boolean).forEach((n) => n()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var n;
      const s = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== s) {
        if (this.cleanup(), !s) {
          this.maybeNotify();
          return;
        }
        if (this.scrollElement = s, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((n = this.scrollElement) == null ? void 0 : n.window) ?? null, this.elementsCache.forEach((o) => {
          this.observer.observe(o);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (o) => {
            this.scrollRect = o, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (o, a) => {
            if (a && this._intendedScrollOffset === null && o === this.scrollOffset)
              return;
            this._intendedScrollOffset !== null && Math.abs(o - this._intendedScrollOffset) < 1.5 && (o = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
            const c = this.getScrollOffset();
            this.scrollDirection = a ? c === o ? this.scrollDirection : c < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = a, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const o = this.scrollElement, a = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, c = () => {
            this._iosTouching = !1, !(!Ct() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          o.addEventListener(
            "touchstart",
            a,
            dt
          ), o.addEventListener(
            "touchend",
            c,
            dt
          ), this.unsubs.push(() => {
            o.removeEventListener("touchstart", a), o.removeEventListener("touchend", c), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const l = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, l && this.scrollElement && this.options.enabled) {
        const [o, a, c, h] = l;
        o !== null && !c && (Ct() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? h !== 0 && (this._iosDeferredAdjustment += h) : this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        })), c && this.scrollToEnd({ behavior: c });
      }
    }, this._flushIosDeferredIfReady = () => {
      if (this._iosDeferredAdjustment === 0 || this.isScrolling || this._iosTouching || this._iosJustTouchEnded) return;
      const n = this.getScrollOffset(), s = this.getMaxScrollOffset();
      if (n < 0 || n > s) return;
      if (this._iosDeferredAdjustment < 0 && n >= s - 1) {
        this._iosDeferredAdjustment = 0;
        return;
      }
      const l = this._iosDeferredAdjustment;
      this._iosDeferredAdjustment = 0, this._scrollToOffset(n, {
        adjustments: this.scrollAdjustments += l,
        behavior: void 0
      });
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = De(
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
      (n, s, l, o, a, c, h, g) => (this.prevLanes !== void 0 && this.prevLanes !== c && (this.lanesChangedFlag = !0), this.prevLanes = c, this.pendingMin = null, {
        count: n,
        paddingStart: s,
        scrollMargin: l,
        getItemKey: o,
        enabled: a,
        lanes: c,
        laneAssignmentMode: h,
        gap: g
      }),
      {
        key: !1
      }
    ), this.getMeasurements = De(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: n,
        paddingStart: s,
        scrollMargin: l,
        getItemKey: o,
        enabled: a,
        lanes: c,
        laneAssignmentMode: h,
        gap: g
      }, i) => {
        const p = this.itemSizeCache;
        if (!a)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n)
          for (const _ of this.laneAssignments.keys())
            _ >= n && this.laneAssignments.delete(_);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((_) => {
          this.itemSizeCache.set(_.key, _.size);
        }));
        const y = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = !1), c === 1) {
          const _ = n * 2;
          let O = this._flatMeasurements;
          if (!O || O.length < _) {
            const L = new Float64Array(_);
            O && y > 0 && L.set(O.subarray(0, y * 2)), O = L, this._flatMeasurements = O;
          }
          let k;
          if (y === 0)
            k = s + l;
          else {
            const L = y - 1;
            k = O[L * 2] + O[L * 2 + 1] + g;
          }
          for (let L = y; L < n; L++) {
            const M = o(L), G = p.get(M), U = typeof G == "number" ? G : this.options.estimateSize(L);
            O[L * 2] = k, O[L * 2 + 1] = U, k += U + g;
          }
          const I = hl(n, O, o);
          return this.measurementsCache = I, I;
        }
        const u = this.measurementsCache.slice(0, y), v = new Array(c).fill(
          void 0
        ), $ = new Float64Array(c);
        let P = 0;
        for (let _ = 0; _ < y; _++) {
          const O = u[_];
          O && (v[O.lane] === void 0 && P++, v[O.lane] = _, $[O.lane] = O.end);
        }
        for (let _ = y; _ < n; _++) {
          const O = o(_), k = this.laneAssignments.get(_);
          let I, L;
          const M = h === "estimate" || p.has(O);
          if (k !== void 0 && this.options.lanes > 1) {
            I = k;
            const K = v[I], N = K !== void 0 ? u[K] : void 0;
            L = N ? N.end + g : s + l;
          } else if (P === c) {
            let K = 0, N = $[0], V = v[0];
            for (let oe = 1; oe < c; oe++) {
              const se = $[oe];
              (se < N || se === N && v[oe] < V) && (K = oe, N = se, V = v[oe]);
            }
            I = K, L = N + g, M && this.laneAssignments.set(_, I);
          } else
            I = _ % this.options.lanes, L = s + l, M && this.laneAssignments.set(_, I);
          const G = p.get(O), U = typeof G == "number" ? G : this.options.estimateSize(_), de = L + U;
          u[_] = {
            index: _,
            start: L,
            size: U,
            end: de,
            key: O,
            lane: I
          }, v[I] === void 0 && P++, v[I] = _, $[I] = de;
        }
        return this.measurementsCache = u, u;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = De(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, s, l, o) => n.length === 0 || s === 0 ? (this.range = null, null) : (this.range = Il(
        n,
        s,
        l,
        o,
        // Pass the typed array so binary search + forward-walk can read
        // start/end directly from Float64Array, skipping the Proxy traps.
        o === 1 && this._flatMeasurements != null ? this._flatMeasurements : null
      ), this.range),
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = De(
      () => {
        let n = null, s = null;
        const l = this.calculateRange();
        return l && (n = l.startIndex, s = l.endIndex), this.maybeNotify.updateDeps([this.isScrolling, n, s]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          n,
          s
        ];
      },
      (n, s, l, o, a) => o === null || a === null ? [] : n({
        startIndex: o,
        endIndex: a,
        overscan: s,
        count: l
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (n) => {
      const s = this.options.indexAttribute, l = n.getAttribute(s);
      return l ? parseInt(l, 10) : (console.warn(
        `Missing attribute name '${s}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (n) => {
      var s;
      if (!this.scrollState || this.scrollState.behavior !== "smooth")
        return !0;
      const l = this.scrollState.index ?? ((s = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : s.index);
      if (l !== void 0 && this.range) {
        const o = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), a = Math.max(0, l - o), c = Math.min(
          this.options.count - 1,
          l + o
        );
        return n >= a && n <= c;
      }
      return !0;
    }, this.measureElement = (n) => {
      if (!n) {
        this.elementsCache.forEach((a, c) => {
          a.isConnected || (this.observer.unobserve(a), this.elementsCache.delete(c));
        });
        return;
      }
      const s = this.indexFromElement(n), l = this.options.getItemKey(s), o = this.elementsCache.get(l);
      o !== n && (o && this.observer.unobserve(o), this.observer.observe(n), this.elementsCache.set(l, n)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(s) && this.resizeItem(s, this.options.measureElement(n, void 0, this));
    }, this.resizeItem = (n, s) => {
      var l, o;
      if (n < 0 || n >= this.options.count) return;
      let a, c, h;
      const g = this._flatMeasurements;
      if (this.options.lanes === 1 && g !== null)
        h = this.options.getItemKey(n), c = g[n * 2], a = g[n * 2 + 1];
      else {
        const y = this.measurementsCache[n];
        if (!y) return;
        h = y.key, c = y.start, a = y.size;
      }
      const i = this.itemSizeCache.get(h) ?? a, p = s - i;
      if (p !== 0) {
        const y = this.options.anchorTo === "end" && ((l = this.scrollState) == null ? void 0 : l.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, u = y ? this.getTotalSize() : 0, v = this.getScrollOffset() + this.scrollAdjustments, P = !this.itemSizeCache.has(h) ? (
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
          c + i <= v && this.scrollDirection !== "backward"
        ), _ = ((o = this.scrollState) == null ? void 0 : o.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[n] ?? {
            index: n,
            key: h,
            start: c,
            size: a,
            end: c + a,
            lane: 0
          },
          p,
          this
        ) : P);
        (this.pendingMin === null || n < this.pendingMin) && (this.pendingMin = n), this.itemSizeCache.set(h, s), this.itemSizeCacheVersion++;
        let O = !1;
        y ? O = this.applyScrollAdjustment(
          this.getTotalSize() - u
        ) : _ && (O = this.applyScrollAdjustment(p)), this.notify(O);
      }
    }, this.getVirtualItems = De(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (n, s) => {
        const l = [];
        for (let o = 0, a = n.length; o < a; o++) {
          const c = n[o], h = s[c];
          l.push(h);
        }
        return l;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (n) => {
      const s = this.getMeasurements();
      if (s.length === 0)
        return;
      const l = this._flatMeasurements, o = this.options.lanes === 1 && l != null, a = qn(
        0,
        s.length - 1,
        o ? (c) => l[c * 2] : (c) => an(s[c]).start,
        n
      );
      return an(s[a]);
    }, this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if ("scrollHeight" in this.scrollElement)
        return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      {
        const n = this.scrollElement.document.documentElement;
        return this.options.horizontal ? n.scrollWidth - this.scrollElement.innerWidth : n.scrollHeight - this.scrollElement.innerHeight;
      }
    }, this.getVirtualDistanceFromEnd = () => Math.max(
      this.getTotalSize() - this.getSize() - this.getScrollOffset(),
      0
    ), this.getDistanceFromEnd = () => Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0), this.isAtEnd = (n = this.options.scrollEndThreshold) => this.getDistanceFromEnd() <= n, this.getOffsetForAlignment = (n, s, l = 0) => {
      if (!this.scrollElement) return 0;
      const o = this.getSize(), a = this.getScrollOffset();
      s === "auto" && (s = n >= a + o ? "end" : "start"), s === "center" ? n += (l - o) / 2 : s === "end" && (n -= o);
      const c = this.getMaxScrollOffset();
      return Math.max(Math.min(c, n), 0);
    }, this.getOffsetForIndex = (n, s = "auto") => {
      n = Math.max(0, Math.min(n, this.options.count - 1));
      const l = this.getSize(), o = this.getScrollOffset(), a = this.measurementsCache[n];
      if (!a) return;
      if (s === "auto")
        if (a.end >= o + l - this.options.scrollPaddingEnd)
          s = "end";
        else if (a.start <= o + this.options.scrollPaddingStart)
          s = "start";
        else
          return [o, s];
      if (s === "end" && n === this.options.count - 1)
        return [this.getMaxScrollOffset(), s];
      const c = s === "end" ? a.end + this.options.scrollPaddingEnd : a.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(c, s, a.size),
        s
      ];
    }, this.scrollToOffset = (n, { align: s = "start", behavior: l = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0;
      const o = this.getOffsetForAlignment(n, s), a = this.now();
      this.scrollState = {
        index: null,
        align: s,
        behavior: l,
        startedAt: a,
        lastTargetOffset: o,
        stableFrames: 0
      }, this._scrollToOffset(o, { adjustments: void 0, behavior: l }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (n, {
      align: s = "auto",
      behavior: l = "auto"
    } = {}) => {
      this._iosDeferredAdjustment = 0, n = Math.max(0, Math.min(n, this.options.count - 1));
      const o = this.getOffsetForIndex(n, s);
      if (!o)
        return;
      const [a, c] = o, h = this.now();
      this.scrollState = {
        index: n,
        align: c,
        behavior: l,
        startedAt: h,
        lastTargetOffset: a,
        stableFrames: 0
      }, this._scrollToOffset(a, { adjustments: void 0, behavior: l }), this.scheduleScrollReconcile();
    }, this.scrollBy = (n, { behavior: s = "auto" } = {}) => {
      const l = this.getScrollOffset() + n, o = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: s,
        startedAt: o,
        lastTargetOffset: l,
        stableFrames: 0
      }, this._scrollToOffset(l, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.scrollToEnd = ({ behavior: n = "auto" } = {}) => {
      if (this.options.count > 0) {
        this.scrollToIndex(this.options.count - 1, {
          align: "end",
          behavior: n
        });
        return;
      }
      this.scrollToOffset(Math.max(this.getTotalSize() - this.getSize(), 0), {
        behavior: n
      });
    }, this.getTotalSize = () => {
      var n;
      const s = this.getMeasurements();
      let l;
      if (s.length === 0)
        l = this.options.paddingStart;
      else if (this.options.lanes === 1) {
        const o = s.length - 1, a = this._flatMeasurements;
        a != null ? l = a[o * 2] + a[o * 2 + 1] : l = ((n = s[o]) == null ? void 0 : n.end) ?? 0;
      } else {
        const o = Array(this.options.lanes).fill(null);
        let a = s.length - 1;
        for (; a >= 0 && o.some((c) => c === null); ) {
          const c = s[a];
          o[c.lane] === null && (o[c.lane] = c.end), a--;
        }
        l = Math.max(...o.filter((c) => c !== null));
      }
      return Math.max(
        l - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this.takeSnapshot = () => {
      const n = [];
      if (this.itemSizeCache.size === 0) return n;
      const s = this.getMeasurements();
      for (const l of s)
        l && this.itemSizeCache.has(l.key) && n.push({
          index: l.index,
          key: l.key,
          start: l.start,
          size: l.size,
          end: l.end,
          lane: l.lane
        });
      return n;
    }, this._scrollToOffset = (n, {
      adjustments: s,
      behavior: l
    }) => {
      this._intendedScrollOffset = n + (s ?? 0), this.options.scrollToFn(n, { behavior: l, adjustments: s }, this);
    }, this.measure = () => {
      this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(!1);
    }, this.setOptions(t);
  }
  // Returns `true` when it performed a synchronous `scrollTop` write this
  // tick, `false` when the delta was zero or the write was deferred (iOS).
  // `resizeItem` uses that to decide whether the follow-up `notify` must be
  // synchronous so the grown transforms commit in the same paint (#1227).
  applyScrollAdjustment(t, n) {
    return t === 0 ? !1 : (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", t), Ct() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += t, !1) : (this._scrollToOffset(this.getScrollOffset(), {
      adjustments: this.scrollAdjustments += t,
      behavior: n
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
    const s = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, l = s ? s[0] : this.scrollState.lastTargetOffset, o = 1, a = l !== this.scrollState.lastTargetOffset;
    if (!a && fl(l, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= o) {
        this.getScrollOffset() !== l && this._scrollToOffset(l, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, a) {
      const c = this.getSize() || 600, h = Math.abs(l - this.getScrollOffset()), g = this.scrollState.behavior === "smooth" && h > c;
      this.scrollState.lastTargetOffset = l, g || (this.scrollState.behavior = "auto"), this._scrollToOffset(l, {
        adjustments: void 0,
        behavior: g ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const qn = (e, t, n, s) => {
  for (; e <= t; ) {
    const l = (e + t) / 2 | 0, o = n(l);
    if (o < s)
      e = l + 1;
    else if (o > s)
      t = l - 1;
    else
      return l;
  }
  return e > 0 ? e - 1 : 0;
};
function _l(e, t, n) {
  let s = 0;
  for (; s <= t; ) {
    const l = (s + t) / 2 | 0, o = e[l * 2];
    if (o < n)
      s = l + 1;
    else if (o > n)
      t = l - 1;
    else
      return l;
  }
  return s > 0 ? s - 1 : 0;
}
function Il(e, t, n, s, l) {
  const o = e.length - 1;
  if (e.length <= s)
    return { startIndex: 0, endIndex: o };
  if (s === 1 && l !== null) {
    const g = _l(
      l,
      o,
      n
    );
    let i = g;
    const p = n + t;
    for (; i < o && l[i * 2] + l[i * 2 + 1] < p; )
      i++;
    return { startIndex: g, endIndex: i };
  }
  let c = qn(0, o, (g) => e[g].start, n), h = c;
  if (s === 1)
    for (; h < o && e[h].end < n + t; )
      h++;
  else if (s > 1) {
    const g = Array(s).fill(0);
    for (; h < o && g.some((p) => p < n + t); ) {
      const p = e[h];
      g[p.lane] = p.end, h++;
    }
    const i = Array(s).fill(n + t);
    for (; c >= 0 && i.some((p) => p >= n); ) {
      const p = e[c];
      i[p.lane] = p.start, c--;
    }
    c = Math.max(0, c - c % s), h = Math.min(o, h + (s - 1 - h % s));
  }
  return { startIndex: c, endIndex: h };
}
const Mt = typeof document < "u" ? ul : cl;
function Cl({
  useFlushSync: e = !0,
  directDomUpdates: t = !1,
  directDomUpdatesMode: n = "transform",
  ...s
}) {
  const l = dl((i) => i + 1, 0)[1], o = rl({
    enabled: t,
    mode: n,
    container: null,
    lastSize: null,
    // Keyed by the element itself so a remounted node (same key, new DOM
    // node — e.g. when `enabled` is toggled off then on) is treated as fresh
    // and gets its style written.
    lastPositions: /* @__PURE__ */ new WeakMap(),
    prevRange: null
  });
  o.current.enabled = t, o.current.mode = n;
  const a = (i) => {
    const p = o.current;
    if (!p.enabled || !p.container) return;
    const y = i.getTotalSize();
    if (y !== p.lastSize) {
      p.lastSize = y;
      const u = i.options.horizontal ? "width" : "height";
      p.container.style[u] = `${y}px`;
    }
  }, c = (i) => {
    const p = o.current;
    if (!p.enabled || !p.container) return;
    a(i);
    const y = !!i.options.horizontal, u = p.mode === "transform", v = y ? "left" : "top", $ = i.options.scrollMargin, P = i.getVirtualItems();
    for (const _ of P) {
      const O = _.start - $, k = i.elementsCache.get(_.key);
      k && p.lastPositions.get(k) !== O && (p.lastPositions.set(k, O), u ? k.style.transform = y ? `translate3d(${O}px, 0, 0)` : `translate3d(0, ${O}px, 0)` : k.style[v] = `${O}px`);
    }
  }, h = {
    ...s,
    onChange: (i, p) => {
      var y;
      const u = o.current;
      let v = !0;
      if (u.enabled) {
        c(i);
        const $ = i.range, P = u.prevRange;
        v = !P || P.isScrolling !== i.isScrolling || P.startIndex !== ($ == null ? void 0 : $.startIndex) || P.endIndex !== ($ == null ? void 0 : $.endIndex), v && (u.prevRange = $ ? {
          startIndex: $.startIndex,
          endIndex: $.endIndex,
          isScrolling: i.isScrolling
        } : null);
      }
      v && (e && p ? pl(l) : l()), (y = s.onChange) == null || y.call(s, i, p);
    }
  }, [g] = al(() => {
    const i = new Tl(h);
    return Object.assign(i, {
      containerRef: (p) => {
        const y = o.current;
        if (y.container = p, y.lastSize = null, p && y.enabled) {
          const u = i.getTotalSize();
          y.lastSize = u;
          const v = i.options.horizontal ? "width" : "height";
          p.style[v] = `${u}px`;
        }
      }
    });
  });
  return g.setOptions(h), Mt(() => g._didMount(), []), Mt(() => (a(g), g._willUpdate())), Mt(() => {
    c(g);
  }), g;
}
function Ml(e) {
  return Cl({
    observeElementRect: El,
    observeElementOffset: bl,
    scrollToFn: wl,
    ...e
  });
}
const ft = window.QwenPaw.host, C = ft.React, { useCallback: $l, useRef: zl } = C, { Tag: je, Tooltip: Al } = ft.antd, { Text: ve } = ft.antd.Typography, {
  CaretRightOutlined: Rl,
  CloseCircleOutlined: Ol,
  FileTextOutlined: Ll,
  RobotOutlined: Nl,
  RocketOutlined: Pl,
  SafetyOutlined: Dl,
  SendOutlined: jl,
  SettingOutlined: Bl,
  ToolOutlined: Fl,
  UserOutlined: Hl
} = ft.antdIcons, Ul = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, Wl = {
  user: /* @__PURE__ */ C.createElement(Hl, null),
  message: /* @__PURE__ */ C.createElement(Nl, null),
  tool: /* @__PURE__ */ C.createElement(Fl, null),
  system: /* @__PURE__ */ C.createElement(Bl, null)
}, un = {
  approval: { color: "volcano", icon: /* @__PURE__ */ C.createElement(Dl, null) },
  receipt: { color: "cyan", icon: /* @__PURE__ */ C.createElement(jl, null) },
  spawn: { color: "geekblue", icon: /* @__PURE__ */ C.createElement(Pl, null) },
  header: { color: "green", icon: /* @__PURE__ */ C.createElement(Ll, null) },
  error: { color: "red", icon: /* @__PURE__ */ C.createElement(Ol, null) }
}, Kl = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default"
}, dn = {
  running: { zh: "进行中", en: "Running" },
  success: { zh: "成功", en: "Success" },
  error: { zh: "错误", en: "Error" },
  cancelled: { zh: "已取消", en: "Cancelled" },
  interrupted: { zh: "已中断", en: "Interrupted" },
  unknown: { zh: "未知", en: "Unknown" }
}, Vl = 80, Bt = 26, Gn = 34, pn = 9, hn = 30;
function ql(e) {
  const t = ae(), n = dn[e] ?? dn.unknown;
  return t === "zh-CN" ? n.zh : n.en;
}
const Gl = {
  ImageContent: "image",
  FileContent: "file",
  AudioContent: "audio",
  VideoContent: "video"
};
function Xl(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const s of e.inboundParts ?? []) {
    const l = Gl[s.type];
    l && n.set(l, (n.get(l) ?? 0) + 1);
  }
  return n.size === 0 ? null : [...n.entries()].map(([s, l]) => `${d(t, s)}×${l}`).join(" ");
}
function Jl(e, t) {
  const n = e.receipt, s = n != null && n.channel ? ` · ${n.channel}` : "";
  return `📤 ${d(t, "replySent")}${s} · ${((n == null ? void 0 : n.chars) ?? 0).toLocaleString()} ${d(t, "chars")}`;
}
const fn = C.memo(function({
  record: t,
  selected: n,
  dimmed: s,
  multiRequest: l,
  onSelectRecord: o,
  onOpenRun: a
}) {
  var p, y;
  const c = t.usage, h = c && (c.input_tokens || c.output_tokens) ? `${J(c.input_tokens)}→${J(
    c.output_tokens
  )}` : null, g = c && c.reasoning_tokens ? c.reasoning_tokens : null, i = c && h ? [
    `Input ${J(c.input_tokens)} tok`,
    c.cache_input_tokens ? `Cached ${J(c.cache_input_tokens)} tok` : null,
    c.cache_creation_input_tokens ? `Cache created ${J(
      c.cache_creation_input_tokens
    )} tok` : null,
    `Output ${J(c.output_tokens)} tok`,
    g ? `${d(ae(), "reasoningShort")} ${J(
      g
    )} tok` : null
  ].filter(Boolean).join(" · ") : void 0;
  return /* @__PURE__ */ C.createElement(
    "div",
    {
      className: "at-ledger-row",
      "data-kind": t.kind,
      "data-error": t.isError || void 0,
      "data-running": t.running || void 0,
      "data-selected": n || void 0,
      "data-dimmed": s || void 0,
      onClick: () => o(t.index),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: Bt,
        cursor: "pointer",
        background: n ? "rgba(22,119,255,0.08)" : void 0,
        opacity: s ? 0.35 : 1,
        borderLeft: t.skillSpanHue !== void 0 ? `3px solid ${t.skillSpanBypass ? "rgba(250,140,22,0.9)" : `hsl(${t.skillSpanHue}, 65%, 55%)`}` : "3px solid transparent"
      }
    },
    /* @__PURE__ */ C.createElement(
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
      l && a ? /* @__PURE__ */ C.createElement(
        "span",
        {
          title: d(ae(), "runViewHint"),
          onClick: (u) => {
            u.stopPropagation(), a(t.runIndex);
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
        t.runIndex
      ) : l ? /* @__PURE__ */ C.createElement("span", { style: { opacity: 0.65, marginRight: 3 } }, "R", t.runIndex) : null,
      "#",
      t.index
    ),
    /* @__PURE__ */ C.createElement(
      je,
      {
        color: t.kind === "tool" && t.skillName ? "geekblue" : t.markerKind && ((p = un[t.markerKind]) == null ? void 0 : p.color) || Ul[t.kind] || "default",
        icon: t.markerKind && ((y = un[t.markerKind]) == null ? void 0 : y.icon) || Wl[t.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      t.kind === "tool" && t.skillName ? d(ae(), "skillLoadKind") : Fn(t, ae())
    ),
    t.kind === "message" && t.model && t.model !== "unknown" ? /* @__PURE__ */ C.createElement(
      je,
      {
        title: t.model,
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
      t.model
    ) : null,
    t.inSkill ? /* @__PURE__ */ C.createElement(
      je,
      {
        color: t.inSkillLoaded ? "geekblue" : "orange",
        title: t.inSkillLoaded ? t.inSkill : `${t.inSkill} — ${d(ae(), "skillBypass")}`,
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
      t.inSkill
    ) : t.guidedSkill ? /* @__PURE__ */ C.createElement(
      Al,
      {
        title: `${t.guidedSkill} — ${t.guidedReason === "slash" ? d(ae(), "guidedBySlash") : d(ae(), "guidedByLoad")}`
      },
      /* @__PURE__ */ C.createElement(
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
        t.guidedSkill
      )
    ) : null,
    t.kind === "user" && t.skillName ? /* @__PURE__ */ C.createElement(
      je,
      {
        color: "geekblue",
        title: t.skillName,
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
      t.skillName
    ) : null,
    /* @__PURE__ */ C.createElement(
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
      t.receipt ? /* @__PURE__ */ C.createElement(ve, { type: "secondary", style: { fontSize: 12 } }, Jl(t, ae())) : t.kind === "tool" && t.skillName ? /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(ve, { strong: !0, style: { fontSize: 12 } }, t.skillName), t.toolError ? /* @__PURE__ */ C.createElement(ve, { type: "danger", style: { fontSize: 12 } }, ` → ${t.toolError}`) : t.toolOutputChars ? /* @__PURE__ */ C.createElement(ve, { type: "secondary", style: { fontSize: 12 } }, ` · ${d(ae(), "skillLoaded")} ${J(
        t.toolOutputChars
      )} ${d(ae(), "charUnit")}`) : null) : t.kind === "tool" && t.toolName ? /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(ve, { strong: !0, style: { fontSize: 12 } }, t.toolName), /* @__PURE__ */ C.createElement(ve, { type: "secondary", style: { fontSize: 12 } }, ` ${t.toolInput ?? ""}`), t.toolOutput ? /* @__PURE__ */ C.createElement(
        ve,
        {
          type: t.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${t.toolOutput}`
      ) : null) : /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(
        ve,
        {
          type: t.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        t.running ? `⏳ ${t.text || "…"}` : t.text || "—"
      ), t.kind === "user" ? /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(ve, { type: "secondary", style: { fontSize: 11 } }, ` ${Xl(t, ae()) ?? ""}`), t.channel && t.channel !== "console" ? /* @__PURE__ */ C.createElement(ve, { code: !0, style: { fontSize: 10 } }, ` @${t.channel}`) : null) : null)
    ),
    /* @__PURE__ */ C.createElement(
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
      h ? /* @__PURE__ */ C.createElement("span", { title: i }, /* @__PURE__ */ C.createElement("span", { style: { color: "#1677ff" } }, h), g ? /* @__PURE__ */ C.createElement("span", { style: { color: "#722ed1" } }, ` · ${J(g)}`) : null) : null,
      h ? " · " : "",
      (t.kind === "message" || t.kind === "tool") && he(t.timeSeconds)
    )
  );
}), Ql = C.memo(function({
  turn: t,
  collapsed: n,
  selected: s,
  cellCount: l,
  onToggleTurn: o,
  onSelectTurn: a,
  onSkillSpanOpen: c
}) {
  const h = ae();
  return /* @__PURE__ */ C.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: Gn }
    },
    /* @__PURE__ */ C.createElement(
      "span",
      {
        onClick: (g) => {
          g.stopPropagation(), t.turn !== null && a(t.turn);
        },
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "1px 10px",
          borderRadius: 999,
          background: s ? "rgba(22,119,255,0.16)" : "rgba(22,119,255,0.08)",
          border: "1px solid rgba(22,119,255,0.25)",
          fontSize: 11,
          cursor: "pointer",
          userSelect: "none"
        }
      },
      /* @__PURE__ */ C.createElement(
        Rl,
        {
          onClick: (g) => {
            g.stopPropagation(), t.turn !== null && o(t.turn);
          },
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: n ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ C.createElement(ve, { strong: !0, style: { fontSize: 11 } }, "Request #", t.turn),
      t.durationMs !== null && /* @__PURE__ */ C.createElement(ve, { type: "secondary", style: { fontSize: 11 } }, he(t.durationMs / 1e3)),
      /* @__PURE__ */ C.createElement(ve, { type: "secondary", style: { fontSize: 11 } }, l, " ", d(h, "events")),
      t.skillsUsed && t.skillsUsed.length > 0 ? (
        /* Wrapper span keeps the click working even if the host's
         * antd Tag version does not forward onClick (idempotent). */
        /* @__PURE__ */ C.createElement(
          "span",
          {
            onClick: (g) => {
              c && (g.stopPropagation(), c(t.skillsUsed[0], t.turn));
            },
            style: {
              display: "inline-flex",
              cursor: c ? "pointer" : void 0
            }
          },
          /* @__PURE__ */ C.createElement(
            je,
            {
              color: "geekblue",
              title: t.skillsUsed.join(", "),
              style: {
                marginInlineEnd: 0,
                fontSize: 10,
                lineHeight: "16px",
                cursor: "inherit"
              }
            },
            "📚 ",
            t.skillsUsed.slice(0, 2).join(" "),
            t.skillsUsed.length > 2 ? ` +${t.skillsUsed.length - 2}` : ""
          )
        )
      ) : null,
      /* @__PURE__ */ C.createElement(
        je,
        {
          color: Kl[t.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        ql(t.status)
      )
    )
  );
});
function Yl({
  turns: e,
  selectedIndex: t,
  selectedTurn: n,
  collapsedTurns: s,
  focusIndexes: l,
  searchMatchIndexes: o,
  onSelectedIndexChange: a,
  onSelectedTurnChange: c,
  onToggleTurn: h,
  callsCollapsed: g,
  hasOlderRecords: i,
  loadingOlder: p,
  onLoadOlder: y,
  initialRecord: u,
  emptyText: v,
  onSkillSpanOpen: $
}) {
  const P = ae(), _ = zl(null), O = C.useMemo(
    () => e.filter((U) => U.turn !== null),
    [e]
  ), k = O.length > 1, I = C.useMemo(() => {
    var de;
    const U = [];
    i && U.push({
      key: "load-older",
      height: hn,
      type: "load-older"
    }), u && (U.push({
      key: "initial",
      height: Bt,
      type: "initial",
      record: u
    }), U.push({
      key: "initial-divider",
      height: pn,
      type: "divider"
    }));
    for (const K of O) {
      const N = K.turn;
      if (U.push({
        key: `turn-${N}`,
        height: Gn,
        type: "boundary",
        turn: K
      }), !s.has(N))
        for (const V of ((de = K.groups[0]) == null ? void 0 : de.cells) ?? [])
          g && V.kind === "tool" || U.push({
            key: `rec-${V.index}`,
            height: Bt,
            type: "record",
            record: V
          });
    }
    return U;
  }, [
    O,
    s,
    g,
    i,
    u
  ]), L = C.useCallback(
    (U) => l !== null && !l.has(U.index) || o !== null && !o.has(U.index),
    [l, o]
  ), M = $l(
    (U) => {
      var de;
      switch (U.type) {
        case "load-older":
          return /* @__PURE__ */ C.createElement("div", { style: { textAlign: "center", height: hn } }, /* @__PURE__ */ C.createElement(
            "button",
            {
              type: "button",
              onClick: y,
              disabled: p,
              style: {
                border: "1px solid rgba(128,128,128,0.3)",
                borderRadius: 10,
                background: "transparent",
                padding: "1px 12px",
                fontSize: 11,
                cursor: p ? "default" : "pointer",
                color: "rgba(128,128,128,1)"
              }
            },
            p ? "…" : `⋯ ${d(P, "loadOlder")}`
          ));
        case "divider":
          return /* @__PURE__ */ C.createElement(
            "div",
            {
              style: {
                height: pn,
                borderBottom: "1px dashed rgba(128,128,128,0.25)"
              }
            }
          );
        case "initial": {
          const K = U.record;
          return /* @__PURE__ */ C.createElement(
            fn,
            {
              record: K,
              selected: t === K.index,
              dimmed: L(K),
              multiRequest: k,
              onSelectRecord: a,
              onOpenRun: c
            }
          );
        }
        case "boundary": {
          const K = U.turn, N = K.turn;
          return /* @__PURE__ */ C.createElement(
            Ql,
            {
              turn: K,
              collapsed: s.has(N),
              selected: n === N,
              cellCount: ((de = K.groups[0]) == null ? void 0 : de.cells.length) ?? 0,
              onToggleTurn: h,
              onSelectTurn: c,
              onSkillSpanOpen: $
            }
          );
        }
        case "record":
        default: {
          const K = U.record;
          return /* @__PURE__ */ C.createElement(
            fn,
            {
              record: K,
              selected: t === K.index,
              dimmed: L(K),
              multiRequest: k,
              onSelectRecord: a,
              onOpenRun: c
            }
          );
        }
      }
    },
    [
      s,
      L,
      p,
      P,
      k,
      y,
      a,
      c,
      $,
      h,
      t,
      n
    ]
  );
  if (I.length === 0)
    return /* @__PURE__ */ C.createElement(
      "div",
      {
        style: {
          height: "100%",
          overflowY: "auto",
          padding: "4px 12px 24px"
        }
      },
      /* @__PURE__ */ C.createElement(
        "div",
        {
          style: {
            padding: 24,
            textAlign: "center",
            color: "rgba(128,128,128,1)",
            fontSize: 12
          }
        },
        v ?? d(P, "noSessions")
      )
    );
  const G = I.length <= Vl ? /* @__PURE__ */ C.createElement("div", null, I.map((U) => M(U))) : /* @__PURE__ */ C.createElement(
    Zl,
    {
      rows: I,
      scrollRef: _,
      renderRow: M
    }
  );
  return /* @__PURE__ */ C.createElement(
    "div",
    {
      ref: _,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    G
  );
}
function Zl({
  rows: e,
  scrollRef: t,
  renderRow: n
}) {
  const s = Ml({
    count: e.length,
    getScrollElement: () => t.current,
    estimateSize: (l) => e[l].height,
    overscan: 12
  });
  return /* @__PURE__ */ C.createElement(
    "div",
    {
      style: {
        height: s.getTotalSize(),
        position: "relative",
        width: "100%"
      }
    },
    s.getVirtualItems().map((l) => /* @__PURE__ */ C.createElement(
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
      n(e[l.index])
    ))
  );
}
function $t(e) {
  return (e == null ? void 0 : e.data) ?? {};
}
function mn(e) {
  return !e || typeof e != "object" || Array.isArray(e) ? !1 : Object.values(e).every(
    (t) => typeof t == "number" && Number.isFinite(t)
  );
}
function eo(e) {
  if (!Array.isArray(e) || e.length === 0) return;
  const t = [];
  for (const n of e) {
    if (!n || typeof n != "object") continue;
    const s = n;
    t.push({
      role: typeof s.role == "string" ? s.role : "?",
      chars: typeof s.chars == "number" ? s.chars : 0,
      text: typeof s.text == "string" ? s.text : void 0,
      toolCallId: typeof s.tool_call_id == "string" ? s.tool_call_id : void 0
    });
  }
  return t.length > 0 ? t : void 0;
}
function to(e) {
  if (!(typeof e != "string" || !e))
    try {
      const t = JSON.parse(e);
      if (typeof t.skill == "string" && t.skill)
        return t.skill;
    } catch {
    }
}
function Xn(e) {
  return e.replace(/[/\\]+/g, "/").toLowerCase();
}
function no(e) {
  if (typeof e.name == "string" && e.name) return e.name;
  const t = e.function;
  if (t && typeof t == "object" && typeof t.name == "string")
    return t.name;
}
function so(e) {
  const t = [];
  for (const n of e.matchAll(/<skill>([\s\S]*?)<\/skill>/g)) {
    const s = n[1].match(/<name>([^<]+)<\/name>/), l = n[1].match(/<dir>([^<]+)<\/dir>/);
    s && l && l[1].trim() && t.push([Xn(l[1].trim()), s[1].trim()]);
  }
  return t.sort((n, s) => s[0].length - n[0].length), t;
}
function gn(e) {
  const t = e.match(/<skill>\s*<name>([^<]+)<\/name>/);
  return t ? t[1].trim() : null;
}
function Me(e, t = 160) {
  if (!e) return "";
  const n = e.split(`
`, 1)[0].trim();
  return n.length > t ? `${n.slice(0, t)}…` : n;
}
function lo(e) {
  var pe, ke;
  const t = [], n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = [];
  let h = "";
  const g = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
  let u = [];
  const v = /* @__PURE__ */ new Set(), $ = [], P = new _s(), _ = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
  let I = [], L = [], M = 0, G = 0;
  const U = (f) => f.groups[0].cells, de = (f, m) => {
    const S = a.get(f);
    S ? S.push(m) : a.set(f, [m]);
  }, K = (f, m) => {
    if (!f)
      if (h)
        f = h;
      else {
        c.push(m);
        return;
      }
    const S = n.get(f);
    if (S)
      m.runIndex = S.turn ?? 0, U(S).push(m);
    else if (h) {
      const T = n.get(h);
      T ? (m.runIndex = T.turn ?? 0, U(T).push(m)) : de(f, m);
    } else
      de(f, m);
  }, N = (f, m) => {
    const S = a.get(m);
    if (S) {
      for (const T of S) U(f).push(T);
      a.delete(m);
    }
  };
  for (const f of e) {
    const m = $t(f);
    switch (f.type) {
      case "run/start": {
        G += 1, $.length = 0, g.set(
          f.run_id,
          typeof m.channel == "string" ? m.channel : ""
        );
        const S = {
          turn: G,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${G}`, cells: [] }]
        };
        n.set(f.run_id, S), t.push(S), h = f.run_id, N(S, f.run_id);
        for (const Y of c.splice(0))
          Y.runIndex = G, U(S).push(Y);
        const T = Array.isArray(m.messages) ? m.messages : [], x = String(m.query ?? "");
        let z = typeof m.slash_skill == "string" && m.slash_skill ? m.slash_skill : gn(x);
        !z && T.length > 0 && (z = gn(String(((pe = T[0]) == null ? void 0 : pe.text) ?? ""))), z && (v.add(z), $.push([z, "slash"]), P.onRunStart(), P.onSlashSkill(
          z,
          f.seq,
          ge(f.t) ?? 0
        ), _.set(`${z}#${f.seq}`, S));
        const Q = {
          index: ++M,
          runIndex: G,
          runId: f.run_id,
          kind: "user",
          text: Me(x) || Me((ke = T.at(-1)) == null ? void 0 : ke.text),
          messages: T,
          timeSeconds: 0,
          startedAt: ge(f.t) ?? 0,
          isError: !1,
          running: !1,
          skillName: z ?? void 0,
          model: void 0
        };
        i.set(f.run_id, Q), U(S).push(Q);
        break;
      }
      case "run/end": {
        const S = n.get(f.run_id);
        h === f.run_id && (h = ""), $.length = 0, P.onRunEnd(f.seq, ge(f.t) ?? 0), g.delete(f.run_id), i.delete(f.run_id);
        const T = String(m.status ?? "unknown");
        if (S && (S.status = T, S.durationMs = typeof m.duration_ms == "number" ? m.duration_ms : null), T === "error" && m.error) {
          const x = S ?? {
            turn: null,
            status: T,
            durationMs: typeof m.duration_ms == "number" ? m.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          S || t.push(x), x.groups[0].cells.push({
            index: ++M,
            runIndex: G,
            runId: f.run_id,
            kind: "system",
            markerKind: "error",
            text: Me(String(m.error)) || "run failed",
            marker: String(m.error ?? "run failed"),
            timeSeconds: typeof m.duration_ms == "number" ? m.duration_ms / 1e3 : null,
            startedAt: ge(f.t) ?? 0,
            isError: !0,
            running: !1,
            raw: [f]
          });
        }
        break;
      }
      case "agent/spawn": {
        const S = typeof m.child_session_id == "string" ? m.child_session_id : void 0, T = typeof m.child_agent_id == "string" ? m.child_agent_id : "?";
        K(f.run_id, {
          index: ++M,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${T} → ${S ?? "?"}`,
          timeSeconds: 0,
          startedAt: ge(f.t) ?? 0,
          isError: !1,
          running: !1,
          spawnSession: S,
          spawnAgent: T,
          raw: [f]
        });
        break;
      }
      case "message/inbound": {
        const S = Array.isArray(m.parts) ? m.parts : [], T = m.channel_meta && typeof m.channel_meta == "object" ? m.channel_meta : void 0, x = S.map((B) => ({
          type: String(B.type ?? "?"),
          text: typeof B.text == "string" ? B.text : void 0
        })), z = g.get(f.run_id) ?? "", Q = T && typeof T.user_id == "string" && T.user_id ? T.user_id : void 0, Y = Me(
          x.map((B) => B.text ?? "").filter(Boolean).join(`
`)
        ), q = i.get(f.run_id);
        q && !q.inboundParts ? (q.inboundParts = x, q.channel = z || void 0, q.userId = Q, q.raw = [
          ...q.raw ?? [],
          f
        ], q.text || (q.text = Y)) : K(f.run_id, {
          index: ++M,
          runIndex: 0,
          runId: f.run_id,
          kind: "user",
          text: Y || "📥",
          timeSeconds: 0,
          startedAt: ge(f.t) ?? 0,
          isError: !1,
          running: !1,
          channel: z || void 0,
          userId: Q,
          inboundParts: x,
          raw: [f]
        });
        break;
      }
      case "message/outbound": {
        const S = typeof m.text == "string" ? m.text : "";
        K(f.run_id, {
          index: ++M,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "receipt",
          text: "📤",
          timeSeconds: 0,
          startedAt: ge(f.t) ?? 0,
          isError: !1,
          running: !1,
          outputText: S || void 0,
          receipt: {
            channel: g.get(f.run_id) || void 0,
            chars: S.length
          },
          raw: [f]
        });
        break;
      }
      case "approval/asked": {
        K(f.run_id, {
          index: ++M,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "approval",
          text: String(m.tool_name ?? "?"),
          timeSeconds: 0,
          startedAt: ge(f.t) ?? 0,
          isError: !1,
          running: !1,
          raw: [f]
        });
        break;
      }
      case "approval/decided": {
        const S = String(m.decision ?? "?"), T = m.tool_name ? String(m.tool_name) : "";
        K(f.run_id, {
          index: ++M,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "approval",
          text: T ? `${T} → ${S}` : S,
          timeSeconds: 0,
          startedAt: ge(f.t) ?? 0,
          isError: S === "denied",
          running: !1,
          raw: [f]
        });
        break;
      }
      case "llm/header": {
        const S = typeof m.sha256 == "string" ? m.sha256 : "", T = typeof m.prev_sha256 == "string" ? m.prev_sha256 : void 0, x = m.reason === "changed" ? "changed" : "initial", z = typeof m.system_prompt == "string" ? m.system_prompt : "", Q = Array.isArray(m.tools) ? m.tools : [], Y = Array.isArray(m.schemas) ? m.schemas : void 0;
        if (K(f.run_id, {
          index: ++M,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "header",
          text: x === "initial" ? `⚙ ${z ? `System Prompt (${z.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: ge(f.t) ?? 0,
          isError: !1,
          running: !1,
          prompt: z,
          prevPrompt: p.get(T ?? ""),
          headerTools: Q,
          headerReason: x,
          sha: S,
          prevSha: T,
          schemas: Y,
          raw: [f]
        }), S && p.set(S, z), Array.isArray(Y)) {
          y.clear();
          for (const q of Y) {
            const B = no(q);
            B && y.set(B, q);
          }
        }
        z && (u = so(z));
        break;
      }
      case "llm/call": {
        const S = $t(f), T = S.options && typeof S.options == "object" && Object.keys(S.options).length > 0 ? S.options : void 0, x = S.messages_meta, z = x && typeof x == "object" ? {
          count: typeof x.count == "number" ? x.count : 0,
          totalChars: typeof x.total_chars == "number" ? x.total_chars : 0,
          charsByRole: mn(x.chars_by_role) ? x.chars_by_role : {},
          countByRole: mn(x.count_by_role) ? x.count_by_role : {},
          maxToolChars: typeof x.max_tool_chars == "number" ? x.max_tool_chars : 0
        } : void 0, Q = eo(S.messages_new);
        let Y;
        if (S.context_reset === !0) {
          const le = (Q ?? []).map(
            (fe) => ({
              role: fe.role,
              chars: fe.chars,
              text: fe.text
            })
          );
          let ie;
          I.length > 0 || le.length === 0 ? ie = I : ie = L.map((fe) => ({
            role: fe.role,
            text: fe.text
          })), Y = Os(ie, le), z && (Y.afterChars = z.totalChars);
        }
        if (Q) {
          const le = Q.map((ie) => ({
            role: ie.role,
            chars: ie.chars,
            text: ie.text
          }));
          S.context_reset === !0 ? I = le : S.tail_update === !0 ? I = [...I.slice(0, -1), ...le] : typeof S.messages_count == "number" && Q.length >= S.messages_count && I.length > 0 ? I = le : I = [...I, ...le];
        }
        L = Array.isArray(S.messages) ? S.messages.map((le) => ({
          role: le.role,
          text: le.text
        })) : [];
        const q = {
          index: ++M,
          runIndex: 0,
          runId: f.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: ge(f.t) ?? 0,
          isError: !1,
          running: !0,
          model: String(S.model ?? "unknown"),
          provider: typeof S.provider == "string" && S.provider ? S.provider : void 0,
          messagesMeta: z,
          inputNew: Q,
          contextReset: S.context_reset === !0,
          resetDetail: Y,
          options: T
        };
        K(f.run_id, q);
        const B = s.get(f.run_id) ?? [];
        B.push({ cell: q, callData: S, call: f }), s.set(f.run_id, B);
        break;
      }
      case "llm/api_request": {
        const S = s.get(f.run_id), T = S && S.length > 0 ? S[S.length - 1].cell : l.get(f.run_id);
        if (T) {
          const x = Array.isArray(m.messages) ? m.messages : [];
          T.apiPayload = {
            model: String(m.model ?? "unknown"),
            messages: x.map((z) => ({
              role: String(z.role ?? "?"),
              // Provider formatters may leave the block array as a
              // JSON string — decode it into readable text.
              content: Ls(
                typeof z.content == "string" ? z.content : JSON.stringify(z.content ?? "")
              ),
              toolCallId: typeof z.tool_call_id == "string" ? z.tool_call_id : void 0
            })),
            params: m.params && typeof m.params == "object" ? m.params : void 0,
            durationMs: typeof m.duration_ms == "number" ? m.duration_ms : void 0
          }, T.raw = [
            ...T.raw ?? [],
            f
          ];
        }
        break;
      }
      case "llm/api_response": {
        const S = l.get(f.run_id);
        S && S.apiPayload && (m.usage && typeof m.usage == "object" && (S.apiPayload.usage = m.usage), typeof m.duration_ms == "number" && (S.apiPayload.durationMs = m.duration_ms));
        break;
      }
      case "llm/result": {
        const S = s.get(f.run_id), T = S == null ? void 0 : S.shift(), x = (T == null ? void 0 : T.callData) ?? {}, z = typeof m.duration_ms == "number" ? m.duration_ms : null, Q = m.usage ?? void 0, Y = m.timing, q = Array.isArray(m.tool_calls) ? m.tool_calls : void 0, ie = {
          text: (m.error ? Me(String(m.error)) : Me(String(m.text ?? ""))) || (q && q.length > 0 ? `🛠 ${q.map((fe) => fe.name).join(", ")}` : ""),
          timeSeconds: z === null ? null : z / 1e3,
          isError: !!m.error,
          running: !1,
          outputText: m.text ? String(m.text) : void 0,
          thinkingText: m.thinking ? String(m.thinking) : void 0,
          usage: Q,
          timing: Y,
          toolCalls: q,
          note: m.note ? String(m.note) : void 0
        };
        T ? (Object.assign(T.cell, ie), l.set(f.run_id, T.cell), T.cell.model = String(
          m.model ?? x.model ?? T.cell.model
        ), T.cell.raw = [
          ...T.call ? [T.call] : [],
          f
        ]) : K(f.run_id, {
          index: ++M,
          runIndex: 0,
          runId: f.run_id,
          kind: "message",
          startedAt: ge(f.t) ?? 0,
          model: String(m.model ?? x.model ?? "unknown"),
          ...ie
        });
        break;
      }
      case "tool/call": {
        const S = $t(f), T = String(S.name ?? "?"), x = T === "Skill" ? to(S.input) : void 0;
        if (x) {
          v.add(x), $.push([x, "load"]);
          const ce = P.onSkillLoad(
            x,
            f.seq,
            ge(f.t) ?? 0
          ), be = n.get(f.run_id);
          be && _.set(ce, be);
        }
        const z = S.input ? String(S.input) : void 0;
        let Q;
        if (!x && z) {
          const ce = typeof S.skill_resource == "string" ? S.skill_resource : void 0;
          ce && (Q = ce);
        }
        if (!x && !Q && z && u.length > 0) {
          const ce = Xn(z);
          for (const [be, Oe] of u)
            if (ce.includes(be)) {
              Q = Oe;
              break;
            }
        }
        let Y, q;
        if (!x && !Q && z && O.size > 0) {
          const ce = zs(z, O);
          ce && (Y = ce.skill, q = ce.feature);
        }
        let B, le;
        if (!x && !Q && !Y && $.length > 0) {
          const [ce, be] = $[$.length - 1];
          B = ce, le = be;
        }
        const ie = P.onToolCall({
          attribution: Q ? { skill: Q, kind: "path", detail: "skill dir in input" } : Y ? {
            skill: Y,
            kind: "content",
            detail: `“${q}” in input (skill doc)`
          } : B ? {
            skill: B,
            kind: "temporal",
            detail: le === "slash" ? "after slash invocation" : "after skill load"
          } : null,
          recordIndex: M + 1,
          seq: f.seq,
          t: ge(f.t) ?? 0
        });
        if (ie && !_.has(ie)) {
          const ce = n.get(f.run_id);
          ce && _.set(ie, ce);
        }
        const fe = {
          index: ++M,
          runIndex: 0,
          runId: f.run_id,
          kind: "tool",
          text: x ? `📚 ${x}` : `${T}(${Me(String(S.input ?? ""), 60)})`,
          timeSeconds: null,
          startedAt: ge(f.t) ?? 0,
          isError: !1,
          running: !0,
          toolName: T,
          skillName: x,
          inSkill: Q,
          inSkillLoaded: Q ? v.has(Q) : void 0,
          guidedSkill: B ?? Y,
          guidedReason: le ?? (Y ? "load" : void 0),
          skillSpanId: ie ?? void 0,
          toolInput: S.input ? String(S.input) : void 0,
          toolSchema: y.get(T)
        };
        K(f.run_id, fe);
        const Ce = o.get(f.run_id) ?? [];
        Ce.push({ cell: fe, callData: S, call: f }), o.set(f.run_id, Ce);
        break;
      }
      case "tool/result": {
        const S = o.get(f.run_id), T = typeof m.tool_call_id == "string" ? m.tool_call_id : null;
        let x;
        if (S) {
          const le = T ? S.findIndex(
            (ie) => ie.callData.tool_call_id === T
          ) : -1;
          le >= 0 ? x = S.splice(le, 1)[0] : x = S.shift();
        }
        const z = typeof m.duration_ms == "number" ? m.duration_ms : null, Q = m.ok !== !1 && !m.error, Y = m.output ? String(m.output) : void 0, q = Y ? ` → ${Me(Y, 60)}` : "", B = {
          timeSeconds: z === null ? null : z / 1e3,
          isError: !Q,
          running: !1,
          toolOutput: Y,
          toolOutputChars: typeof m.output_chars == "number" ? m.output_chars : void 0,
          toolOutputBytes: typeof m.output_bytes == "number" ? m.output_bytes : void 0,
          toolError: m.error ? String(m.error) : void 0,
          note: m.note ? String(m.note) : void 0
        };
        if (x) {
          if (Object.assign(x.cell, B), !x.cell.skillName)
            x.cell.text = `${x.cell.text}${q}`;
          else if (Y) {
            const le = typeof m.skill_sha == "string" ? m.skill_sha : null;
            le && k.get(x.cell.skillName) === le || (O.set(
              x.cell.skillName,
              $s(Y)
            ), le && k.set(x.cell.skillName, le));
          }
          x.cell.raw = [
            ...x.call ? [x.call] : [],
            f
          ];
        } else
          K(f.run_id, {
            index: ++M,
            runIndex: 0,
            runId: f.run_id,
            kind: "tool",
            text: `?${q}`,
            startedAt: ge(f.t) ?? 0,
            ...B
          });
        break;
      }
    }
  }
  for (const [f, m] of a) {
    const S = n.get(f);
    if (S) {
      for (const T of m) U(S).push(T);
      a.delete(f);
    }
  }
  for (const f of t) {
    const m = [];
    for (const S of f.groups)
      for (const T of S.cells)
        T.skillName && !m.includes(T.skillName) && m.push(T.skillName);
    m.length > 0 && (f.skillsUsed = m);
  }
  const V = P.spans(), oe = new Set(V.map((f) => f.skill)).size, se = /* @__PURE__ */ new Map();
  for (const f of t)
    for (const m of f.groups)
      for (const S of m.cells) se.set(S.index, S);
  for (const f of V) {
    const m = _.get(f.id);
    m && (m.skillSpans ?? (m.skillSpans = [])).push(f);
    for (const S of f.attributedIndexes) {
      const T = se.get(S);
      T && (T.skillSpanId = f.id, T.skillSpanHue = oe > 1 ? f.colorHue : void 0, T.skillSpanBypass = f.bypass);
    }
  }
  return t;
}
function yn(e) {
  return e.flatMap((t) => t.groups.flatMap((n) => n.cells));
}
function oo(e) {
  var a;
  if (e.length === 0) return { initial: null, turns: [...e] };
  const t = e[0], n = ((a = t.groups[0]) == null ? void 0 : a.cells) ?? [], s = n.findIndex(
    (c) => c.kind === "system" && c.headerReason === "initial" && c.prompt !== void 0
  );
  if (s < 0) return { initial: null, turns: [...e] };
  const l = n[s], o = {
    ...t,
    groups: [
      {
        ...t.groups[0],
        cells: n.filter((c, h) => h !== s)
      }
    ]
  };
  return { initial: l, turns: [o, ...e.slice(1)] };
}
const Ee = {
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
}, En = "agent-trace-timeline-styles", io = `
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
let zt = !1;
function ro() {
  if (zt || typeof document > "u") return;
  if (document.getElementById(En)) {
    zt = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = En, e.textContent = io, document.head.appendChild(e), zt = !0;
}
function At(e) {
  return Ns(e);
}
function Jn(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function Sn(e) {
  return e != null && Number.isFinite(e);
}
function Qn(e) {
  if (!Sn(e.startedAt)) return null;
  const t = Sn(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + t };
}
function Yn(e, t = "sequence") {
  if (t !== "sequence")
    return ao(
      e,
      t === "duration" || t === "actual",
      t === "duration"
    );
  const n = [], s = [];
  for (const l of e) {
    const o = l.groups.flatMap((a) => a.cells);
    o.length !== 0 && (l.turn !== null && s.push({
      turn: l.turn,
      time: n.length
    }), n.push(
      ...o.map(
        (a, c) => ({
          start: n.length + c,
          end: n.length + c + 1,
          index: a.index,
          isError: a.isError === !0,
          kind: a.kind,
          label: a.text,
          lane: Jn(a.kind)
        })
      )
    ));
  }
  return n.length === 0 ? null : {
    start: 0,
    end: n.length,
    spans: n,
    turnBoundaries: s
  };
}
function ao(e, t, n) {
  const s = e.flatMap((i) => {
    const p = i.groups.flatMap(
      (y) => y.cells.flatMap((u) => {
        const v = Qn(u);
        return v === null ? [] : [
          {
            ...v,
            index: u.index,
            isError: u.isError === !0,
            kind: u.kind,
            label: u.text,
            lane: Jn(u.kind)
          }
        ];
      })
    );
    return p.length === 0 ? [] : [{ turn: i.turn, rawSpans: p }];
  }), l = s.flatMap((i) => i.rawSpans);
  if (l.length === 0) return null;
  const o = /* @__PURE__ */ new Map();
  let a = 0, c = null;
  for (const i of [...l].sort(
    (p, y) => p.start - y.start || p.end - y.end
  ))
    n && c !== null && i.start > c && (a += i.start - c), o.set(i, a), c = c === null ? i.end : Math.max(c, i.end);
  const h = [], g = [];
  for (const i of s) {
    const p = i.rawSpans.map((y) => {
      const u = o.get(y) ?? 0;
      return {
        ...y,
        start: y.start - u,
        end: (t ? y.end : y.start) - u
      };
    });
    h.push(...p), i.turn !== null && g.push({
      turn: i.turn,
      time: Math.min(...p.map((y) => y.start))
    });
  }
  return {
    start: Math.min(...h.map((i) => i.start)),
    end: Math.max(...h.map((i) => i.end)),
    spans: h,
    turnBoundaries: g
  };
}
function co(e, t = "sequence") {
  const n = (c) => c.skillSpans ?? [];
  if (e.every((c) => n(c).length === 0)) return null;
  if (t === "sequence") {
    const c = /* @__PURE__ */ new Map();
    let h = 0;
    for (const i of e)
      for (const p of i.groups.flatMap((y) => y.cells))
        c.set(p.index, h), h += 1;
    const g = [];
    for (const i of e)
      for (const p of n(i)) {
        const y = p.attributedIndexes.map(($) => c.get($)).filter(($) => $ !== void 0);
        let u = y.length ? Math.min(...y) : void 0;
        if (u === void 0) {
          const $ = i.groups.flatMap((P) => P.cells).find(
            (P) => P.kind !== "system" && P.skillName === p.skill
          );
          u = $ ? c.get($.index) : void 0;
        }
        if (u === void 0) continue;
        const v = y.length ? Math.max(...y) : u;
        g.push(vn(p, u, v + 1));
      }
    return g;
  }
  const s = e.flatMap(
    (c) => c.groups.flatMap(
      (h) => h.cells.flatMap((g) => {
        const i = Qn(g);
        return i === null ? [] : [i];
      })
    )
  );
  s.sort((c, h) => c.start - h.start || c.end - h.end);
  const l = t === "duration", o = (c) => {
    let h = 0, g = null;
    for (const i of s) {
      if (i.start >= c) break;
      if (l && g !== null && i.start > g) {
        const p = Math.min(i.start, c);
        p > g && (h += p - g);
      }
      g = g === null ? i.end : Math.max(g, i.end);
    }
    return h;
  }, a = [];
  for (const c of e)
    for (const h of n(c)) {
      const g = h.startT, i = Math.max(Is(h), g + 1), p = o(g), y = o(i);
      a.push(
        vn(
          h,
          g - p,
          Math.max(g - p + 1, i - y)
        )
      );
    }
  return a;
}
function vn(e, t, n) {
  return {
    spanId: e.id,
    skill: e.skill,
    hue: e.colorHue,
    bypass: e.bypass,
    trigger: e.trigger,
    open: e.endKind === null,
    start: t,
    end: n
  };
}
function uo(e, t, n = "sequence") {
  const s = Yn(e, n);
  return new Set(
    s == null ? void 0 : s.spans.filter((l) => l.start <= t.end && l.end >= t.start).map((l) => l.index)
  );
}
ro();
const pt = window.QwenPaw.host, X = pt.React, { useEffect: nt, useMemo: Rt, useRef: st, useState: ze } = X, { Tooltip: Zn } = pt.antd, Ot = 3, po = 4, ho = 0.08, fo = 0.025, mo = 32, go = 0.5;
function yo(e) {
  const t = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), n = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, s = e.timing, l = s && Number.isFinite(s.ttft_ms) ? s.ttft_ms : void 0, o = s && Number.isFinite(s.decode_ms) ? s.decode_ms : void 0;
  return {
    ...t === void 0 ? {} : { durationMs: t },
    ...n === void 0 ? {} : { startedAt: n },
    ...l === void 0 || o === void 0 ? {} : { ttftMs: l, decodingMs: o }
  };
}
function Eo(e) {
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
function So(e, t) {
  const n = Eo(e);
  if (t === void 0) return n;
  const s = t.durationMs === void 0 ? null : `Total ${At(t.durationMs)}`, l = t.startedAt === void 0 ? null : t.durationMs === void 0 ? `Started ${Ie(t.startedAt)}` : `${Ie(t.startedAt)} → ${Ie(
    t.startedAt + t.durationMs
  )}`, o = t.ttftMs === void 0 || t.decodingMs === void 0 ? null : `TTFT ${At(
    t.ttftMs
  )} · Decoding ${At(t.decodingMs)}`, a = [s, o].filter((c) => c !== null).join(" · ");
  return [n, l, a].filter((c) => c !== null && c !== "").join(`
`);
}
function Ft(e, t) {
  return e <= t ? { start: e, end: t } : { start: t, end: e };
}
function Lt(e) {
  return Math.min(1, Math.max(0, e));
}
function vo(e, t, n, s) {
  const l = Math.min(s - n, Math.max(0, t)), o = Math.min(
    Math.max(e - l / 2, n),
    s - l
  );
  return { start: o, end: o + l };
}
function bn(e, t, n, s, l) {
  const o = Ft(
    Math.min(l, Math.max(s, e.start)),
    Math.min(l, Math.max(s, e.end))
  );
  return {
    start: (o.start - t) / n,
    end: (o.end - t) / n
  };
}
function es({
  label: e,
  placement: t,
  children: n,
  ...s
}) {
  return /* @__PURE__ */ X.createElement(
    Zn,
    {
      title: /* @__PURE__ */ X.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: t,
      mouseEnterDelay: go,
      ...s
    },
    n
  );
}
function xn() {
  return /* @__PURE__ */ X.createElement("div", { className: Ee.labels, "aria-hidden": "true" }, /* @__PURE__ */ X.createElement("span", null, "Input"), /* @__PURE__ */ X.createElement("span", null, "Model"), /* @__PURE__ */ X.createElement("span", null, "Tools"));
}
function kn({
  loading: e,
  onHover: t,
  onLoad: n
}) {
  return /* @__PURE__ */ X.createElement(
    es,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ X.createElement(
      "button",
      {
        type: "button",
        className: Ee.earlierHistory,
        "data-earlier-history": !0,
        "data-loading": e || void 0,
        "aria-label": e ? "Loading earlier history" : "Load earlier history",
        "aria-disabled": e || n === void 0,
        onClick: n,
        onPointerEnter: (s) => {
          s.stopPropagation(), t();
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
const bo = X.memo(function({
  turns: t,
  mode: n,
  range: s,
  hasEarlierRecords: l = !1,
  onLoadEarlier: o,
  selectedIndex: a = null,
  searchMatchIndexes: c = null,
  onRangeChange: h,
  onRecordSelect: g,
  onRecordFocus: i,
  onSkillSpanSelect: p
}) {
  const y = typeof pt.useTheme == "function" ? pt.useTheme() : void 0, u = Rt(
    () => Yn(t, n),
    [n, t]
  ), v = Rt(
    () => co(t, n),
    [n, t]
  ), $ = Rt(
    () => new Map(
      t.flatMap(
        (E) => E.groups.flatMap(
          (F) => F.cells.map(
            (ee) => [ee.index, yo(ee)]
          )
        )
      )
    ),
    [t]
  ), P = st(null), _ = st(null), O = st(null), k = st(null), [I, L] = ze(null), [M, G] = ze(null), [U, de] = ze(null), [K, N] = ze(!1), [V, oe] = ze(!1), [se, pe] = ze(null), [ke, f] = ze(!1);
  nt(() => {
    u !== null && s !== null && (s.end < u.start || s.start > u.end) && h(null);
  }, [u, h, s]), nt(() => {
    u !== null && (f(!1), pe(
      (E) => E !== null && (E.end < u.start || E.start > u.end) ? null : E
    ));
  }, [u]), nt(() => {
    if (u === null || a === null) return;
    const E = u.spans.find(
      (F) => F.index === a
    );
    E !== void 0 && (f(!0), pe((F) => {
      if (F === null || E.end > F.start && E.start < F.end)
        return F;
      const ee = Math.max(1, F.end - F.start), b = E.end <= F.start ? E.start : E.end - ee, R = Math.min(
        Math.max(b, u.start),
        Math.max(u.start, u.end - ee)
      );
      return R === F.start ? F : { start: R, end: R + ee };
    }));
  }, [u, a]);
  const m = Math.max(1, ((u == null ? void 0 : u.end) ?? 0) - ((u == null ? void 0 : u.start) ?? 0)), S = Math.min(
    m,
    Math.max(1, ((se == null ? void 0 : se.end) ?? 0) - ((se == null ? void 0 : se.start) ?? 0))
  ), T = u === null || se === null ? (u == null ? void 0 : u.start) ?? 0 : Math.min(
    Math.max(se.start, u.start),
    u.end - S
  ), x = se === null ? m : S, z = se === null ? (u == null ? void 0 : u.start) ?? 0 : T, Q = l && u !== null && z === u.start, Y = o === void 0 || K ? void 0 : () => {
    N(!0), o().finally(() => {
      N(!1);
    });
  }, q = u === null ? void 0 : {
    "--trajectory-domain-left": `${-(z - u.start) / x * 100}%`,
    "--trajectory-domain-width": `${m / x * 100}%`
  }, B = u === null || s === null ? null : bn(
    s,
    z,
    x,
    u.start,
    u.end
  ), ie = (u === null || I === null ? null : bn(
    I,
    z,
    x,
    u.start,
    u.end
  )) ?? B, fe = I ?? s;
  if (nt(() => {
    const E = O.current;
    if (E === null) return;
    const F = (ee) => {
      ee.preventDefault();
      const b = k.current;
      if (b === null || u === null) return;
      f(!1);
      const R = b.getBoundingClientRect(), A = Lt(
        (ee.clientX - R.left) / Math.max(1, R.width)
      ), Z = Math.min(
        m,
        Math.max(
          Math.min(
            n === "sequence" ? po : 20,
            m
          ),
          x * Math.exp(ee.deltaY * 15e-4)
        )
      );
      if (Z >= m * 0.999) {
        pe(null);
        return;
      }
      const te = z + A * x, ue = Math.min(
        Math.max(te - A * Z, u.start),
        u.end - Z
      );
      pe({ start: ue, end: ue + Z });
    };
    return E.addEventListener("wheel", F, { passive: !1 }), () => {
      E.removeEventListener("wheel", F);
    };
  }, [x, z, m, n, u]), u === null)
    return /* @__PURE__ */ X.createElement(
      "section",
      {
        ref: O,
        className: Ee.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ X.createElement("div", { className: Ee.plot }, /* @__PURE__ */ X.createElement(xn, null), /* @__PURE__ */ X.createElement("div", { className: Ee.track }, /* @__PURE__ */ X.createElement("span", { className: Ee.empty }, "No timing data"), l && /* @__PURE__ */ X.createElement(
        kn,
        {
          loading: K,
          onHover: () => {
            G(null);
          },
          onLoad: Y
        }
      )))
    );
  const Ce = Math.min(
    x,
    m / u.spans.length
  ), ce = (E) => {
    const F = E.currentTarget.getBoundingClientRect();
    return Lt((E.clientX - F.left) / Math.max(1, F.width));
  }, be = (E) => {
    var R;
    const F = E.target instanceof HTMLElement ? E.target : null, ee = (R = F == null ? void 0 : F.closest("[data-timeline-record-index]")) == null ? void 0 : R.dataset.timelineRecordIndex;
    if (ee === void 0) return null;
    const b = Number(ee);
    return Number.isFinite(b) ? b : null;
  }, Oe = (E) => {
    h(E);
  }, Ye = (E) => {
    if (E.button === 2) {
      _.current = {
        anchorClientX: E.clientX,
        anchorStart: z,
        moved: !1,
        pannable: se !== null,
        pointerId: E.pointerId
      }, se !== null && f(!1), oe(!0), typeof E.currentTarget.setPointerCapture == "function" && E.currentTarget.setPointerCapture(E.pointerId);
      return;
    }
    if (E.button !== 0) return;
    const F = ce(E), ee = z + F * x, b = be(E);
    G({ fraction: F, recordIndex: b }), P.current = {
      pointerId: E.pointerId,
      anchorTime: ee,
      anchorClientX: E.clientX,
      recordIndex: b
    }, typeof E.currentTarget.setPointerCapture == "function" && E.currentTarget.setPointerCapture(E.pointerId), L({ start: ee, end: ee });
  }, Ze = (E) => {
    const F = E.currentTarget.getBoundingClientRect(), ee = ce(E);
    G({ fraction: ee, recordIndex: be(E) });
    const b = _.current;
    if (b !== null && b.pointerId === E.pointerId) {
      if (Math.abs(E.clientX - b.anchorClientX) >= Ot && (b.moved = !0), !b.pannable) return;
      const te = (E.clientX - b.anchorClientX) / Math.max(1, F.width), ue = Math.min(
        Math.max(b.anchorStart - te * x, u.start),
        u.end - x
      );
      pe({ start: ue, end: ue + x });
      return;
    }
    const R = P.current;
    if (R === null || R.pointerId !== E.pointerId) return;
    let A = z;
    if (se !== null) {
      const te = E.clientX - F.left, ue = Math.min(
        mo,
        Math.max(1, F.width * ho)
      ), ne = te < ue ? -1 : te > F.width - ue ? 1 : 0;
      if (ne !== 0) {
        const Le = ne < 0 ? ue - te : te - (F.width - ue), we = Lt(Le / ue), Te = z + ne * x * fo * Math.max(0.2, we);
        A = Math.min(
          Math.max(Te, u.start),
          u.end - x
        ), A !== z && (f(!1), pe({
          start: A,
          end: A + x
        }));
      }
    }
    const Z = A + ee * x;
    L(Ft(R.anchorTime, Z));
  }, gt = (E) => {
    const F = _.current;
    if (F !== null && F.pointerId === E.pointerId) {
      const ne = F.moved || Math.abs(E.clientX - F.anchorClientX) >= Ot;
      _.current = null, oe(!1), ne || h(null);
      return;
    }
    const ee = P.current;
    if (ee === null || ee.pointerId !== E.pointerId) return;
    const b = ce(E), R = z + b * x, A = Ft(ee.anchorTime, R);
    G({ fraction: b, recordIndex: be(E) }), P.current = null, L(null);
    const Z = Math.abs(E.clientX - ee.anchorClientX) < Ot, te = Z && ee.recordIndex !== null ? u.spans.find((ne) => ne.index === ee.recordIndex) : void 0;
    if (te !== void 0) {
      h(null), g == null || g(te.index);
      return;
    }
    const ue = A.end - A.start < Ce ? vo(
      Z ? A.start : (A.start + A.end) / 2,
      Ce,
      u.start,
      u.end
    ) : A;
    if (Oe(ue), Z) {
      const ne = A.start, Le = u.spans.reduce((we, Te) => {
        const et = ne < we.start ? we.start - ne : ne > we.end ? ne - we.end : 0;
        return (ne < Te.start ? Te.start - ne : ne > Te.end ? ne - Te.end : 0) < et ? Te : we;
      });
      i == null || i(Le.index);
    }
  }, yt = (E) => {
    E.key !== "Escape" || s === null || (E.preventDefault(), h(null));
  }, Et = () => {
    P.current = null, _.current = null, L(null), G(null), oe(!1);
  };
  return /* @__PURE__ */ X.createElement(
    "section",
    {
      ref: O,
      className: Ee.root,
      "data-theme": y || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ X.createElement("div", { className: Ee.plot }, /* @__PURE__ */ X.createElement(xn, null), /* @__PURE__ */ X.createElement(
      "div",
      {
        ref: k,
        className: Ee.track,
        "data-panning": V || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: yt,
        onPointerDown: Ye,
        onPointerMove: Ze,
        onPointerUp: gt,
        onPointerCancel: Et,
        onPointerLeave: () => {
          P.current === null && _.current === null && G(null);
        },
        onDoubleClick: (E) => {
          E.preventDefault(), h(null);
        },
        onContextMenu: (E) => {
          E.preventDefault();
        }
      },
      Q && /* @__PURE__ */ X.createElement(
        kn,
        {
          loading: K,
          onHover: () => {
            G(null);
          },
          onLoad: Y
        }
      ),
      M !== null && M.recordIndex === null && I === null && /* @__PURE__ */ X.createElement(
        "div",
        {
          className: Ee.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${M.fraction * 100}%`
          }
        }
      ),
      ie !== null && /* @__PURE__ */ X.createElement(X.Fragment, null, /* @__PURE__ */ X.createElement(
        "div",
        {
          className: Ee.selection,
          "data-dragging": I === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ie.start * 100}%`,
            "--trajectory-selection-width": `${(ie.end - ie.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ X.createElement(
        "div",
        {
          className: Ee.selectionEdges,
          "data-dragging": I === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ie.start * 100}%`,
            "--trajectory-selection-width": `${(ie.end - ie.start) * 100}%`
          }
        }
      )),
      v !== null && u !== null && /* @__PURE__ */ X.createElement(
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
        v.map((E) => {
          const F = (E.start - u.start) / m, ee = Math.max(
            (E.end - E.start) / m,
            4e-3
          ), b = ae(), R = `${E.bypass ? "⚠ " : ""}${E.skill} · ${E.trigger}${E.open ? ` · ${d(b, "spanOpen")}` : ""}`, A = U === E.spanId, Z = ee > 0.14 && !E.bypass;
          return /* @__PURE__ */ X.createElement(Zn, { title: R, key: E.spanId }, /* @__PURE__ */ X.createElement(
            "span",
            {
              onPointerDown: (te) => {
                te.stopPropagation();
              },
              onClick: p ? (te) => {
                te.stopPropagation(), p(E.spanId);
              } : void 0,
              onMouseEnter: () => de(E.spanId),
              onMouseLeave: () => de(
                (te) => te === E.spanId ? null : te
              ),
              style: {
                position: "absolute",
                left: `${Math.max(0, F) * 100}%`,
                width: `${ee * 100}%`,
                top: 0,
                bottom: 0,
                borderRadius: 3,
                background: `hsla(${E.hue}, 65%, ${A ? 62 : 55}%, ${A ? 0.85 : 0.55})`,
                border: E.bypass ? "1px dashed rgba(250,140,22,0.9)" : `1px solid hsla(${E.hue}, 55%, 45%, 0.8)`,
                pointerEvents: p ? "auto" : "none",
                cursor: p ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }
            },
            Z ? /* @__PURE__ */ X.createElement(
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
              E.skill
            ) : null
          ));
        })
      ),
      /* @__PURE__ */ X.createElement(
        "div",
        {
          className: Ee.turnBoundaries,
          "data-animate-viewport": ke || void 0,
          "aria-hidden": "true",
          style: q
        },
        u.turnBoundaries.filter(
          (E) => E.time > u.start && E.time >= z && E.time <= z + x
        ).map((E) => /* @__PURE__ */ X.createElement(
          "span",
          {
            className: Ee.turnBoundary,
            "data-turn": E.turn,
            key: E.turn,
            style: {
              "--trajectory-turn-left": `${(E.time - u.start) / m * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ X.createElement(
        "div",
        {
          className: Ee.lanes,
          "data-animate-viewport": ke || void 0,
          "data-timeline-domain": !0,
          style: q
        },
        u.spans.filter(
          (E) => E.index === a || E.end >= z && E.start <= z + x
        ).map((E) => {
          const F = (E.start - u.start) / m, b = (E.end - E.start) / m * 100, R = $.get(E.index), A = R == null ? void 0 : R.ttftMs, Z = R == null ? void 0 : R.decodingMs, te = A === void 0 || Z === void 0 || A + Z <= 0 ? null : A / (A + Z);
          return /* @__PURE__ */ X.createElement(
            es,
            {
              key: E.index,
              label: So(E.kind, R),
              placement: "bottom"
            },
            /* @__PURE__ */ X.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: Ee.span,
                "data-timeline-span": E.kind,
                "data-timeline-record-index": E.index,
                "data-assistant-timing": te === null ? void 0 : "true",
                "data-error": E.isError || void 0,
                "data-equal-duration": n === "time" || void 0,
                "data-current": E.index === a || void 0,
                "data-hovered": (M == null ? void 0 : M.recordIndex) === E.index || void 0,
                "data-search-match": c === null ? void 0 : c.has(E.index) ? "true" : "false",
                "data-selected": fe === null ? void 0 : E.start <= fe.end && E.end >= fe.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${F * 100}%`,
                  "--trajectory-span-width": `${b}%`,
                  "--trajectory-span-gap": `min(${b * 0.08}%, 1px)`,
                  "--trajectory-span-lane": E.lane,
                  ...te === null ? {} : {
                    "--trajectory-assistant-ttft": `${te * 100}%`
                  }
                }
              }
            )
          );
        })
      )
    ))
  );
}), Wt = window.QwenPaw.host, re = Wt.React, { Button: xo, Input: ko, Popover: wo, Segmented: To, Tooltip: wn } = Wt.antd, {
  MenuFoldOutlined: _o,
  MenuUnfoldOutlined: Io,
  QuestionCircleOutlined: Co,
  ReloadOutlined: Mo,
  SearchOutlined: $o
} = Wt.antdIcons;
function zo({
  mode: e,
  onModeChange: t,
  search: n,
  onSearchChange: s,
  onRefresh: l,
  modeOptions: o,
  allCollapsed: a,
  hasRequests: c,
  onToggleCollapseAll: h,
  callsCollapsed: g,
  onToggleCallsCollapsed: i
}) {
  const p = ae();
  return /* @__PURE__ */ re.createElement(
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
    /* @__PURE__ */ re.createElement(wn, { title: d(p, "projectionHint") }, /* @__PURE__ */ re.createElement(
      To,
      {
        size: "small",
        value: e,
        options: o,
        onChange: (y) => t(y)
      }
    )),
    /* @__PURE__ */ re.createElement(
      ko,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ re.createElement($o, null),
        placeholder: d(p, "searchEvents"),
        value: n,
        style: { width: 220 },
        onChange: (y) => s(y.target.value)
      }
    ),
    c && /* @__PURE__ */ re.createElement(
      wn,
      {
        title: a ? d(p, "expandAll") : d(p, "collapseAll")
      },
      /* @__PURE__ */ re.createElement(
        xo,
        {
          size: "small",
          type: "text",
          icon: a ? /* @__PURE__ */ re.createElement(Io, null) : /* @__PURE__ */ re.createElement(_o, null),
          onClick: h
        }
      )
    ),
    /* @__PURE__ */ re.createElement("span", { style: { marginLeft: "auto", display: "inline-flex", gap: 10 } }, /* @__PURE__ */ re.createElement(
      wo,
      {
        trigger: "click",
        placement: "bottomRight",
        content: /* @__PURE__ */ re.createElement("div", { style: { maxWidth: 340, fontSize: 12, lineHeight: "20px" } }, /* @__PURE__ */ re.createElement("div", null, /* @__PURE__ */ re.createElement("strong", null, "📚"), " ", d(p, "legendLoad")), /* @__PURE__ */ re.createElement("div", null, /* @__PURE__ */ re.createElement("strong", null, "⚡"), " ", d(p, "legendResource")), /* @__PURE__ */ re.createElement("div", null, /* @__PURE__ */ re.createElement("strong", null, "∈"), " ", d(p, "legendGuided")), /* @__PURE__ */ re.createElement("div", null, /* @__PURE__ */ re.createElement("strong", null, d(p, "legendStripTitle")), " ", d(p, "legendStrip")), /* @__PURE__ */ re.createElement("div", null, /* @__PURE__ */ re.createElement("strong", null, d(p, "legendBandTitle")), " ", d(p, "legendBand")))
      },
      /* @__PURE__ */ re.createElement("a", { style: { fontSize: 12, color: "rgba(128,128,128,1)" } }, /* @__PURE__ */ re.createElement(Co, null), " ", d(p, "legendTitle"))
    ), /* @__PURE__ */ re.createElement(
      "a",
      {
        onClick: l,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ re.createElement(Mo, null),
      " ",
      d(p, "refresh")
    ))
  );
}
function Ao(e) {
  var t, n, s;
  return [
    e.text,
    e.outputText,
    e.thinkingText,
    e.toolName,
    e.toolInput,
    e.toolOutput,
    e.toolError,
    e.model,
    e.provider,
    e.marker,
    e.skillName,
    e.inSkill,
    e.guidedSkill,
    e.channel,
    (t = e.messages) == null ? void 0 : t.map((l) => `${l.role} ${l.text}`).join(`
`),
    (n = e.inputNew) == null ? void 0 : n.map((l) => `${l.role} ${l.text ?? ""}`).join(`
`),
    e.apiPayload ? [
      e.apiPayload.model,
      ...e.apiPayload.messages.map(
        (l) => `${l.role} ${l.content}`
      )
    ].join(`
`) : "",
    e.options ? JSON.stringify(e.options) : "",
    e.toolSchema ? JSON.stringify(e.toolSchema) : "",
    (s = e.headerTools) == null ? void 0 : s.join(" "),
    e.prompt ?? ""
  ].filter(Boolean).join(`
`).toLowerCase();
}
const mt = window.QwenPaw.host, j = mt.React, { useCallback: Tn, useEffect: qe, useMemo: xe, useRef: Ro, useState: ye } = j, {
  Button: lt,
  Empty: _n,
  Popconfirm: Oo,
  Popover: Lo,
  Space: No,
  Spin: ts,
  Switch: Po,
  Tag: Do,
  Tooltip: jo,
  message: Ge
} = mt.antd, { DeleteOutlined: Bo, DownloadOutlined: Fo, SettingOutlined: In } = mt.antdIcons, { Text: $e } = mt.antd.Typography;
function Cn({
  config: e,
  onChange: t,
  children: n
}) {
  const s = ae(), l = (a, c, h) => /* @__PURE__ */ j.createElement(
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
    /* @__PURE__ */ j.createElement($e, { style: { fontSize: 13 } }, a),
    /* @__PURE__ */ j.createElement(
      Po,
      {
        size: "small",
        checked: !!c,
        onChange: (g) => t({ [h]: g })
      }
    )
  ), o = /* @__PURE__ */ j.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ j.createElement($e, { strong: !0, style: { fontSize: 13 } }, d(s, "settings")), /* @__PURE__ */ j.createElement("div", { style: { marginTop: 8 } }, e ? [
    l(d(s, "enabled"), e.enabled, "enabled"),
    l(d(s, "captureLlm"), e.capture_llm, "capture_llm"),
    l(
      d(s, "captureTools"),
      e.capture_tools,
      "capture_tools"
    ),
    l(
      d(s, "captureHeaders"),
      e.capture_headers ?? !0,
      "capture_headers"
    )
  ] : /* @__PURE__ */ j.createElement(ts, { size: "small" })));
  return /* @__PURE__ */ j.createElement(Lo, { content: o, trigger: "click", placement: "bottomRight" }, n);
}
function Ho({
  sessionId: e,
  summary: t,
  locale: n,
  onJumpSession: s,
  onRefreshSessions: l
}) {
  const [o, a] = ye(null), [c, h] = ye(!1), [g, i] = ye(!1), [p, y] = ye(""), [u, v] = ye(""), [$, P] = ye("sequence"), [_, O] = ye(null), [k, I] = ye(null), [L, M] = ye(null), [G, U] = ye(null), [de, K] = ye(
    /* @__PURE__ */ new Set()
  ), [N, V] = ye(!1), [oe, se] = ye(null), [pe, ke] = ye(null), [f, m] = ye(null), [S, T] = ye(null), x = Ro(null);
  x.current = e, qe(() => {
    ps().then(se).catch(() => se(null));
  }, []);
  const z = Tn(async (b, R) => {
    R || h(!0);
    try {
      const { sessionId: A, instance: Z } = Tt(b), te = await ds(A, {
        beforeSeq: R,
        limit: 200,
        instance: Z
      });
      if (x.current !== b) return;
      T(null), a((ue) => cs(ue, te));
    } catch (A) {
      if (x.current !== b) return;
      T({
        message: String(A.message),
        status: A instanceof jn ? A.status : null
      });
    } finally {
      x.current === b && !R && h(!1);
    }
  }, []), Q = Tn(async (b) => {
    try {
      const { sessionId: R, instance: A } = Tt(b), Z = await us(R, A);
      if (x.current !== b) return;
      m(Z), ke({
        sessionId: b,
        inputTokens: Z.input_tokens,
        outputTokens: Z.output_tokens,
        totalTokens: Z.total_tokens,
        reasoningTokens: Number(Z.reasoning_tokens ?? 0)
      });
    } catch {
      if (x.current !== b) return;
      m(null), ke(null);
    }
  }, []);
  qe(() => {
    e ? (O(null), I(null), M(null), K(/* @__PURE__ */ new Set()), y(""), v(""), a(null), T(null), z(e), Q(e)) : (a(null), m(null), ke(null));
  }, [e, z, Q]), qe(() => {
    const b = window.setTimeout(() => v(p), 180);
    return () => window.clearTimeout(b);
  }, [p]);
  const Y = xe(
    () => o ? lo(o.events) : [],
    [o]
  ), { initial: q, turns: B } = xe(
    () => oo(Y),
    [Y]
  ), le = xe(
    () => q ? [q, ...yn(B)] : yn(B),
    [q, B]
  ), ie = xe(
    () => B.some((b) => b.status === "running"),
    [B]
  );
  qe(() => {
    if (!e || !ie) return;
    const b = setInterval(() => {
      document.visibilityState === "visible" && x.current && z(x.current);
    }, 5e3);
    return () => clearInterval(b);
  }, [e, ie, z]);
  const fe = xe(
    () => _ === null ? null : uo(B, _, $),
    [_, B, $]
  ), Ce = xe(
    () => le.map((b) => ({
      index: b.index,
      haystack: Ao(b)
    })),
    [le]
  ), ce = xe(() => {
    const b = u.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return b.length === 0 ? null : new Set(
      Ce.filter((R) => b.every((A) => R.haystack.includes(A))).map((R) => R.index)
    );
  }, [u, Ce]), be = xe(
    () => k === null ? null : le.find((b) => b.index === k) ?? null,
    [le, k]
  ), Oe = xe(() => {
    var Xt, Jt;
    if (L === null) return null;
    const b = B.find((W) => W.turn === L);
    if (!b) return null;
    const R = ((Xt = b.groups[0]) == null ? void 0 : Xt.cells) ?? [], A = R.filter((W) => W.kind === "message"), Z = R.filter((W) => W.kind === "tool"), te = [
      ...new Set(
        A.map((W) => W.model).filter((W) => !!W)
      )
    ], ue = [
      ...new Set(
        A.map((W) => W.provider).filter((W) => !!W)
      )
    ];
    let ne = 0, Le = 0, we = 0, Te = 0, et = 0, He = null, St = 0;
    const Kt = [];
    for (const W of R)
      W.usage && (ne += W.usage.input_tokens ?? 0, Le += W.usage.output_tokens ?? 0, we += W.usage.cache_input_tokens ?? 0, Te += W.usage.cache_creation_input_tokens ?? 0, et += W.usage.reasoning_tokens ?? 0), W.timing && (He = He === null ? W.timing.ttft_ms : Math.min(He, W.timing.ttft_ms), St = (St ?? 0) + W.timing.decode_ms), W.isError && Kt.push(W.toolError ?? W.text ?? "error");
    const Ne = R.find((W) => W.kind === "user"), ns = (Jt = [...A].reverse().find((W) => W.options)) == null ? void 0 : Jt.options, vt = [...A].reverse().find((W) => W.outputText);
    let Vt;
    const qt = A.filter((W) => W.messagesMeta);
    if (qt.length > 0) {
      const W = {};
      let Pe = 0, xt = 0;
      for (const ls of qt) {
        const kt = ls.messagesMeta;
        for (const [Qt, os] of Object.entries(kt.charsByRole))
          W[Qt] = (W[Qt] ?? 0) + os;
        Pe += kt.totalChars, xt = Math.max(xt, kt.maxToolChars);
      }
      Vt = { charsByRole: W, totalChars: Pe, maxToolChars: xt };
    }
    const bt = B.findIndex((W) => W.turn === L), Gt = bt > 0 ? B[bt - 1] : null;
    let Ue = null;
    if (Gt) {
      Ue = 0;
      for (const W of Gt.groups)
        for (const Pe of W.cells)
          Pe.kind === "message" && Pe.usage && (Ue += Pe.usage.input_tokens ?? 0);
    }
    const ss = Ue === null && bt !== 0 ? void 0 : {
      prevInputTokens: Ue,
      deltaTokens: ne - (Ue ?? 0)
    };
    return {
      turn: L,
      status: b.status,
      durationMs: b.durationMs,
      startedAt: (Ne == null ? void 0 : Ne.startedAt) ?? null,
      query: (Ne == null ? void 0 : Ne.text) ?? "",
      llmCalls: A.length,
      toolCalls: Z.length,
      models: te,
      providers: ue,
      inputTokens: ne,
      outputTokens: Le,
      cacheReadTokens: we,
      cacheWriteTokens: Te,
      reasoningTokens: et,
      inputComposition: Vt,
      growth: ss,
      resultIndex: vt == null ? void 0 : vt.index,
      ttftMs: He,
      decodeMs: St,
      errors: Kt,
      options: ns,
      sessionTotals: pe && pe.sessionId === e ? {
        inputTokens: pe.inputTokens,
        outputTokens: pe.outputTokens,
        totalTokens: pe.totalTokens,
        reasoningTokens: pe.reasoningTokens
      } : void 0
    };
  }, [L, B, pe, e]), Ye = !!(o && o.events.length > 0 && o.events[0].seq > 1), Ze = async (b) => {
    try {
      se(await hs(b));
    } catch (R) {
      Ge.error(String(R.message));
    }
  }, gt = xe(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), yt = xe(() => {
    if (!f) return null;
    const b = [
      `${f.runs} ${d(n, "statRounds")} · ${f.llm_calls} ${d(n, "statSteps")}`,
      `LLM ${he(f.llm_ms_total / 1e3)} · ${d(
        n,
        "toolCalls"
      )} ${he(f.tool_ms_total / 1e3)}`,
      `${d(n, "statTtftAvg")} ${f.ttft_ms_avg === null ? "-" : he(f.ttft_ms_avg / 1e3)} · ${ct(
        f.output_tokens,
        f.decode_ms_total / 1e3
      )}`
    ];
    if (f.cache_read_tokens > 0 || f.cache_write_tokens > 0) {
      const R = f.cache_read_tokens + f.input_tokens, A = R > 0 ? Math.round(f.cache_read_tokens / R * 100) : 0;
      b.push(`${d(n, "statCacheHit")} ${A}%`);
    }
    if (b.push(
      `${d(n, "statInput")} ${J(
        f.input_tokens
      )} tok · ${d(n, "statOutput")} ${J(
        f.output_tokens
      )} tok`
    ), t && b.push(Pt(t.size_bytes)), f.skills) {
      const R = Object.entries(f.skills).sort((A, Z) => Z[1] - A[1]).map(([A, Z]) => `${A} ×${Z}`).join(" · ");
      R && b.push(`📚 ${R}`);
    }
    if (q != null && q.prompt) {
      const R = /* @__PURE__ */ new Set(), A = /* @__PURE__ */ new Set();
      for (const te of B)
        for (const ue of te.groups)
          for (const ne of ue.cells)
            ne.skillName ? A.add(ne.skillName) : ne.inSkill && R.add(ne.inSkill);
      const Z = [...R].filter((te) => !A.has(te));
      Z.length > 0 && b.push(
        `⚡ ${d(n, "skillBypassStrip")}: ${Z.join(" · ")}`
      );
    }
    return b.join(" | ");
  }, [f, t, n, B, q]), Et = () => {
    I(null), M(null);
  };
  qe(() => {
    k !== null && U(null);
  }, [k]);
  const E = xe(
    () => G === null ? null : B.flatMap((b) => b.skillSpans ?? []).find((b) => b.id === G) ?? null,
    [G, B]
  ), F = (S == null ? void 0 : S.status) === 404, ee = be !== null || Oe !== null;
  return /* @__PURE__ */ j.createElement(
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
    /* @__PURE__ */ j.createElement(
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
      e ? /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            minWidth: 0
          }
        },
        /* @__PURE__ */ j.createElement(
          $e,
          {
            strong: !0,
            ellipsis: {
              tooltip: (t == null ? void 0 : t.title) || e
            },
            style: { fontSize: 13, flex: "0 1 auto", minWidth: 60 }
          },
          (t == null ? void 0 : t.title) || (t == null ? void 0 : t.agent_id) || Hn(e)
        ),
        /* @__PURE__ */ j.createElement(
          Do,
          {
            color: Wn[(t == null ? void 0 : t.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          Kn((t == null ? void 0 : t.status) ?? "unknown")
        ),
        t != null && t.channel ? /* @__PURE__ */ j.createElement($e, { type: "secondary", style: { fontSize: 11, flexShrink: 0 } }, t.channel) : null,
        /* @__PURE__ */ j.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ j.createElement(No, null, /* @__PURE__ */ j.createElement(Cn, { config: oe, onChange: Ze }, /* @__PURE__ */ j.createElement(lt, { size: "small", icon: /* @__PURE__ */ j.createElement(In, null) })), /* @__PURE__ */ j.createElement(jo, { title: d(n, "export") }, /* @__PURE__ */ j.createElement(
          lt,
          {
            size: "small",
            icon: /* @__PURE__ */ j.createElement(Fo, null),
            onClick: () => {
              const { sessionId: b, instance: R } = Tt(e);
              fs(b, R).then(() => Ge.success(d(n, "exported"))).catch(
                (A) => Ge.error(String(A.message))
              );
            }
          },
          d(n, "export")
        )), e.includes("~") ? null : /* @__PURE__ */ j.createElement(
          Oo,
          {
            title: d(n, "deleteConfirm"),
            onConfirm: () => {
              ms(e).then(() => {
                Ge.success(d(n, "deleted")), l == null || l();
              }).catch(
                (b) => Ge.error(String(b.message))
              );
            }
          },
          /* @__PURE__ */ j.createElement(lt, { size: "small", danger: !0, icon: /* @__PURE__ */ j.createElement(Bo, null) }, d(n, "delete"))
        )))
      ), /* @__PURE__ */ j.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap"
          }
        },
        /* @__PURE__ */ j.createElement(
          $e,
          {
            type: "secondary",
            style: { fontSize: 11, flex: "1 1 300px", minWidth: 0 }
          },
          yt ?? // Transient line while the stats endpoint responds.
          (t ? `${t.runs} ${d(n, "statRounds")} · ${t.llm_calls} ${d(n, "statSteps")} · ${Un(
            t.total_tokens
          )} ${d(n, "tokens")} · ${Pt(
            t.size_bytes
          )}` : "")
        ),
        /* @__PURE__ */ j.createElement(
          $e,
          {
            type: "secondary",
            copyable: {
              text: e,
              tooltips: [
                d(n, "copySessionId"),
                d(n, "copiedSessionId")
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
      )) : /* @__PURE__ */ j.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8
          }
        },
        /* @__PURE__ */ j.createElement($e, { type: "secondary", style: { fontSize: 13 } }, d(n, "selectSession")),
        /* @__PURE__ */ j.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ j.createElement(Cn, { config: oe, onChange: Ze }, /* @__PURE__ */ j.createElement(lt, { size: "small", icon: /* @__PURE__ */ j.createElement(In, null) })))
      )
    ),
    S && !F && /* @__PURE__ */ j.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ j.createElement($e, { type: "danger", style: { fontSize: 12 } }, `${d(n, "loadFailed")}: ${S.message}`)),
    /* @__PURE__ */ j.createElement(
      zo,
      {
        mode: $,
        onModeChange: P,
        search: p,
        onSearchChange: y,
        onRefresh: () => {
          e && (z(e), Q(e)), l == null || l();
        },
        modeOptions: gt,
        allCollapsed: B.length > 0 && B.every((b) => de.has(b.turn ?? -1)),
        hasRequests: B.some((b) => b.turn !== null),
        callsCollapsed: N,
        onToggleCallsCollapsed: () => V((b) => !b),
        onToggleCollapseAll: () => {
          K((b) => B.some(
            (A) => A.turn !== null && !b.has(A.turn)
          ) ? new Set(
            B.map((A) => A.turn).filter((A) => A !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ j.createElement(
      bo,
      {
        turns: B,
        mode: $,
        range: _,
        hasEarlierRecords: Ye,
        onLoadEarlier: async () => {
          var b;
          return !o || o.events.length === 0 ? !1 : (await z(e, (b = o.events[0]) == null ? void 0 : b.seq), !0);
        },
        selectedIndex: k,
        searchMatchIndexes: ce,
        onRangeChange: O,
        onRecordSelect: I,
        onRecordFocus: I,
        onSkillSpanSelect: U
      }
    ),
    c && !o ? /* @__PURE__ */ j.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ j.createElement(ts, null)) : o ? /* @__PURE__ */ j.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ j.createElement(
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
      /* @__PURE__ */ j.createElement(
        Yl,
        {
          turns: B,
          selectedIndex: k,
          selectedTurn: L,
          collapsedTurns: de,
          focusIndexes: fe,
          searchMatchIndexes: ce,
          onSelectedIndexChange: (b) => {
            if (b === k) {
              I(null);
              return;
            }
            I(b), M(null);
          },
          onSkillSpanOpen: (b, R) => {
            var ue;
            const A = B.flatMap((ne) => ne.skillSpans ?? []), te = (R !== null ? (((ue = B.find((ne) => ne.turn === R)) == null ? void 0 : ue.skillSpans) ?? []).find((ne) => ne.skill === b) : void 0) ?? A.find((ne) => ne.skill === b);
            te && U(te.id);
          },
          onSelectedTurnChange: (b) => {
            M(b), I(null);
          },
          callsCollapsed: N,
          onToggleTurn: (b) => {
            K((R) => {
              const A = new Set(R);
              return A.has(b) ? A.delete(b) : A.add(b), A;
            });
          },
          hasOlderRecords: Ye,
          loadingOlder: g,
          onLoadOlder: () => {
            var b;
            !o || o.events.length === 0 || (i(!0), z(
              e,
              (b = o.events[0]) == null ? void 0 : b.seq
            ).finally(() => i(!1)));
          },
          emptyText: d(n, "noSessions"),
          initialRecord: q
        }
      )
    ), E ? /* @__PURE__ */ j.createElement(
      il,
      {
        span: E,
        records: le,
        onJumpRecord: (b) => {
          U(null), I(b);
        },
        onClose: () => U(null)
      }
    ) : ee ? /* @__PURE__ */ j.createElement(
      Zs,
      {
        record: be,
        request: Oe,
        onJumpSession: s,
        onSelectTurn: (b) => {
          M(b), I(null);
        },
        onClose: Et
      }
    ) : null) : /* @__PURE__ */ j.createElement(
      _n,
      {
        image: _n.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: F && e ? d(n, "noTraceForSession") : d(n, "selectSession")
      }
    )
  );
}
const Fe = window.QwenPaw.host, H = Fe.React, { useCallback: Mn, useEffect: Xe, useMemo: ot, useRef: $n, useState: _e } = H, { Button: zn, Empty: An, Input: Uo, Spin: Wo, Tag: Nt, Tooltip: Rn } = Fe.antd, {
  CaretRightOutlined: Ko,
  MenuFoldOutlined: Vo,
  MenuUnfoldOutlined: qo,
  SearchOutlined: Go
} = Fe.antdIcons, { Text: Qe } = Fe.antd.Typography;
function Xo({
  groups: e,
  collapsedAgents: t,
  onToggleAgent: n,
  searching: s,
  selected: l,
  onSelect: o,
  locale: a
}) {
  const c = e.length > 1;
  return /* @__PURE__ */ H.createElement(H.Fragment, null, e.map(([h, g]) => {
    const i = c && !s && t.has(h);
    return /* @__PURE__ */ H.createElement("div", { key: h }, c && /* @__PURE__ */ H.createElement(
      "div",
      {
        onClick: () => n(h),
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
      /* @__PURE__ */ H.createElement(
        Ko,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: i ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ H.createElement(Qe, { strong: !0, style: { fontSize: 12 } }, h),
      /* @__PURE__ */ H.createElement(Qe, { type: "secondary", style: { fontSize: 11 } }, g.length)
    ), !i && g.map((p) => {
      const y = Be(p) === l;
      return /* @__PURE__ */ H.createElement(
        "div",
        {
          key: Be(p),
          onClick: () => o(Be(p)),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: y ? "rgba(22,119,255,0.10)" : "transparent",
            border: y ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ H.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ H.createElement(
            Qe,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${p.title ? `${p.title}
` : ""}${p.session_id}`
              }
            },
            p.title || p.agent_id || Hn(p.session_id)
          ),
          c ? null : p.agent_id ? /* @__PURE__ */ H.createElement(
            Nt,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            p.agent_id
          ) : null,
          p.user_id ? /* @__PURE__ */ H.createElement(
            Nt,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "cyan",
              title: p.user_id
            },
            "👤 ",
            p.user_id
          ) : null,
          /* @__PURE__ */ H.createElement(
            Nt,
            {
              color: Wn[p.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            Kn(p.status)
          )
        ),
        /* @__PURE__ */ H.createElement(
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
          /* @__PURE__ */ H.createElement("span", null, p.channel || "-"),
          p.instance_id ? /* @__PURE__ */ H.createElement(
            "span",
            {
              title: `${p.instance_id}${p.hostname ? ` (${p.hostname})` : ""}`
            },
            "🖥 ",
            p.hostname || p.instance_id
          ) : null,
          /* @__PURE__ */ H.createElement("span", null, p.runs, " ", d(a, "runs")),
          /* @__PURE__ */ H.createElement("span", null, Un(p.total_tokens), " tok"),
          p.skills ? /* @__PURE__ */ H.createElement(
            "span",
            {
              style: { color: "#2f54eb" },
              title: Object.entries(p.skills).sort((u, v) => v[1] - u[1]).map(([u, v]) => `${u} ×${v}`).join(`
`)
            },
            "📚",
            " ",
            Object.entries(p.skills).sort((u, v) => v[1] - u[1]).slice(0, 2).map(([u]) => u).join(" ")
          ) : null,
          /* @__PURE__ */ H.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: Ps(p.last_event_t)
            },
            Ds(p.last_event_t)
          )
        )
      );
    }));
  }));
}
function Jo() {
  const e = typeof Fe.useLocale == "function" ? Fe.useLocale() : void 0, t = ot(
    () => Ht(e ?? ae()),
    [e]
  ), [n, s] = _e(null), [l, o] = _e(!1), [a, c] = _e(
    /* @__PURE__ */ new Set()
  ), [h, g] = _e(!1), [i, p] = _e(!1), [y, u] = _e(null), [v, $] = _e(""), [P, _] = _e(""), [O, k] = _e(null), I = $n(n);
  I.current = n;
  const L = $n(P);
  L.current = P, Xe(() => {
    const N = window.setTimeout(
      () => _(v.trim()),
      200
    );
    return () => window.clearTimeout(N);
  }, [v]);
  const M = Mn(async () => {
    var N;
    try {
      const V = L.current, oe = V ? 0 : ((N = I.current) == null ? void 0 : N.length) ?? 0, se = await Yt({
        limit: V ? 100 : Math.min(500, Math.max(100, oe)),
        offset: 0,
        q: V || void 0
      });
      s(se.sessions), o(se.has_more), k(null);
    } catch (V) {
      k(String(V.message));
    }
  }, []), G = Mn(async () => {
    var N;
    p(!0);
    try {
      const V = L.current, oe = await Yt({
        limit: 100,
        offset: ((N = I.current) == null ? void 0 : N.length) ?? 0,
        q: V || void 0
      });
      s((se) => {
        const pe = se ?? [], ke = new Set(pe.map((f) => Be(f)));
        return [
          ...pe,
          ...oe.sessions.filter((f) => !ke.has(Be(f)))
        ];
      }), o(oe.has_more);
    } catch (V) {
      k(String(V.message));
    } finally {
      p(!1);
    }
  }, []);
  Xe(() => {
    M();
  }, [M, P]), Xe(() => {
    try {
      const N = new URLSearchParams(window.location.search).get("session");
      N && (N.includes("~") ? u(N) : Bn(N).then((V) => {
        u(V ?? N);
      }));
    } catch {
    }
  }, []), Xe(() => {
    try {
      const N = new URL(window.location.href);
      y ? N.searchParams.set("session", y) : N.searchParams.delete("session"), window.history.replaceState(window.history.state, "", N);
    } catch {
    }
  }, [y]), Xe(() => {
    const N = setInterval(() => {
      document.visibilityState === "visible" && M();
    }, 15e3);
    return () => clearInterval(N);
  }, [M]);
  const U = ot(
    () => (n == null ? void 0 : n.find((N) => Be(N) === y)) ?? null,
    [n, y]
  ), de = ot(() => {
    if (!n) return [];
    const N = v.trim().toLowerCase();
    return N ? n.filter(
      (V) => [
        V.session_id,
        V.title ?? "",
        V.agent_id,
        V.channel,
        V.user_id ?? "",
        V.instance_id ?? "",
        V.hostname ?? ""
      ].join(" ").toLowerCase().includes(N)
    ) : n;
  }, [n, v]), K = ot(() => {
    const N = /* @__PURE__ */ new Map();
    for (const V of de) {
      const oe = V.agent_id || "(unknown)", se = N.get(oe);
      se ? se.push(V) : N.set(oe, [V]);
    }
    return [...N.entries()];
  }, [de]);
  return /* @__PURE__ */ H.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, h ? /* @__PURE__ */ H.createElement(
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
    /* @__PURE__ */ H.createElement(Rn, { title: d(t, "expandSidebar"), placement: "right" }, /* @__PURE__ */ H.createElement(
      zn,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ H.createElement(qo, null),
        onClick: () => g(!1)
      }
    ))
  ) : /* @__PURE__ */ H.createElement(
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
    /* @__PURE__ */ H.createElement(
      "div",
      {
        style: {
          padding: "12px 12px 8px",
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      },
      /* @__PURE__ */ H.createElement(
        Uo,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ H.createElement(Go, null),
          placeholder: d(t, "searchPlaceholder"),
          value: v,
          style: { flex: 1, minWidth: 0 },
          onChange: (N) => $(N.target.value)
        }
      ),
      /* @__PURE__ */ H.createElement(Rn, { title: d(t, "collapseSidebar") }, /* @__PURE__ */ H.createElement(
        zn,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ H.createElement(Vo, null),
          onClick: () => g(!0)
        }
      ))
    ),
    O ? /* @__PURE__ */ H.createElement("div", { style: { padding: "0 12px 4px" } }, /* @__PURE__ */ H.createElement(Qe, { type: "danger", style: { fontSize: 12 } }, `${d(t, "loadFailed")}: ${O}`)) : null,
    /* @__PURE__ */ H.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, n === null ? /* @__PURE__ */ H.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ H.createElement(Wo, null)) : de.length === 0 ? /* @__PURE__ */ H.createElement(
      An,
      {
        image: An.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ H.createElement("span", { style: { fontSize: 12 } }, d(t, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ H.createElement(
        Qe,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        d(t, "noSessionsHint")
      )
    ) : /* @__PURE__ */ H.createElement(
      Xo,
      {
        groups: K,
        collapsedAgents: a,
        onToggleAgent: (N) => {
          c((V) => {
            const oe = new Set(V);
            return oe.has(N) ? oe.delete(N) : oe.add(N), oe;
          });
        },
        searching: !!v.trim(),
        selected: y,
        onSelect: u,
        locale: t
      }
    ), n !== null && l && /* @__PURE__ */ H.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ H.createElement(
      "a",
      {
        onClick: () => void G(),
        style: { fontSize: 12 }
      },
      i ? "…" : `⋯ ${d(t, "loadOlder")} (${(n == null ? void 0 : n.length) ?? 0})`
    )))
  ), /* @__PURE__ */ H.createElement(
    Ho,
    {
      sessionId: y,
      summary: U,
      locale: t,
      onJumpSession: u,
      onRefreshSessions: () => void M()
    }
  ));
}
const Qo = window.QwenPaw.host.React;
var On, Ln;
(Ln = (On = window.QwenPaw).registerRoutes) == null || Ln.call(On, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: Jo,
    label: d(ae(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
var Nn, it, Pn;
(Pn = (it = (Nn = window.QwenPaw.chat) == null ? void 0 : Nn.rightHeader) == null ? void 0 : it.add) == null || Pn.call(
  it,
  "agent-trace",
  Qo.createElement(bs),
  { id: "agent-trace-jump" }
);
