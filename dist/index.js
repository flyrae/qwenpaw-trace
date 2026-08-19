const Fn = {
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
    inputTotal: "输入总量"
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
    inputTotal: "Total input"
  }
};
function _t(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function Z() {
  try {
    return _t(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function f(e, s) {
  return Fn[e][s];
}
const je = window.QwenPaw.host;
async function Bn(e) {
  return xe(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats`
  );
}
async function Sn(e, s) {
  return je.fetch ? je.fetch(e, s) : fetch(je.getApiUrl(e), {
    ...s,
    headers: {
      ...(s == null ? void 0 : s.headers) || {},
      ...je.getApiToken() ? { Authorization: `Bearer ${je.getApiToken()}` } : {}
    }
  });
}
class En extends Error {
  constructor(s, t) {
    super(t), this.status = s, this.name = "ApiError";
  }
}
async function xe(e, s) {
  const t = await Sn(e, s), n = await t.text();
  let l = null;
  try {
    l = n ? JSON.parse(n) : null;
  } catch {
    l = null;
  }
  if (!t.ok) {
    const o = l && typeof l == "object" && "detail" in l ? l.detail : void 0;
    throw new En(
      t.status,
      typeof o == "string" ? o : `HTTP ${t.status}`
    );
  }
  return l;
}
async function Nt(e) {
  const s = new URLSearchParams();
  return s.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && s.set("offset", String(e.offset)), xe(
    `/agent-trace/sessions?${s.toString()}`
  );
}
async function Hn(e, s) {
  const t = new URLSearchParams();
  s != null && s.beforeSeq && t.set("before_seq", String(s.beforeSeq)), t.set("limit", String(s == null ? void 0 : s.limit));
  const n = t.toString();
  return xe(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${n}`
  );
}
async function Un() {
  return xe("/agent-trace/config");
}
async function Wn(e) {
  return xe("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
}
async function Kn(e) {
  const s = await Sn(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export`
  );
  if (!s.ok) throw new Error(`HTTP ${s.status}`);
  const t = await s.blob(), n = URL.createObjectURL(t), l = document.createElement("a");
  l.href = n, l.download = `${e}.jsonl`, l.click(), URL.revokeObjectURL(n);
}
async function Vn(e) {
  await xe(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
async function bn(e) {
  if (!e) return null;
  try {
    return (await xe(
      `/agent-trace/resolve?chat_id=${encodeURIComponent(e)}`
    )).session_id ?? null;
  } catch {
    return e;
  }
}
const be = window.QwenPaw.host, Ye = be.React, { useMemo: Xn } = Ye, { Button: Gn, Tooltip: Jn } = be.antd, { CompassOutlined: Qn } = be.antdIcons;
function Yn(e) {
  return `${window.location.pathname.startsWith("/console") ? "/console" : ""}/plugin/agent-trace${e ? `?session=${encodeURIComponent(e)}` : ""}`;
}
function Zn() {
  const e = typeof be.useLocale == "function" ? be.useLocale() : void 0, s = Xn(
    () => _t(e ?? Z()),
    [e]
  );
  return /* @__PURE__ */ Ye.createElement(Jn, { title: f(s, "viewCurrentTrace") }, /* @__PURE__ */ Ye.createElement(
    Gn,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ Ye.createElement(Qn, null),
      "aria-label": f(s, "viewCurrentTrace"),
      onClick: () => {
        const t = typeof be.getCurrentSessionId == "function" ? be.getCurrentSessionId() : null;
        bn(t).then((n) => {
          window.location.href = Yn(n ?? t);
        });
      }
    }
  ));
}
const jt = 3e3;
function Dt(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function qn(e, s) {
  const t = Dt(e ?? ""), n = Dt(s ?? "");
  if (t.length > jt || n.length > jt)
    return [
      ...t.map((h) => ({ kind: "del", text: h })),
      ...n.map((h) => ({ kind: "add", text: h }))
    ];
  const l = t.length, o = n.length, i = new Int32Array((l + 1) * (o + 1)), a = (h, d) => h * (o + 1) + d;
  for (let h = l - 1; h >= 0; h -= 1)
    for (let d = o - 1; d >= 0; d -= 1)
      i[a(h, d)] = t[h] === n[d] ? i[a(h + 1, d + 1)] + 1 : Math.max(i[a(h + 1, d)], i[a(h, d + 1)]);
  const m = [];
  let v = 0, r = 0;
  for (; v < l && r < o; )
    t[v] === n[r] ? (m.push({ kind: "same", text: t[v] }), v += 1, r += 1) : i[a(v + 1, r)] >= i[a(v, r + 1)] ? (m.push({ kind: "del", text: t[v] }), v += 1) : (m.push({ kind: "add", text: n[r] }), r += 1);
  for (; v < l; )
    m.push({ kind: "del", text: t[v] }), v += 1;
  for (; r < o; )
    m.push({ kind: "add", text: n[r] }), r += 1;
  return m;
}
function es(e, s = 3) {
  const t = new Array(e.length).fill(!1);
  e.forEach((o, i) => {
    if (o.kind !== "same")
      for (let a = Math.max(0, i - s); a <= Math.min(e.length - 1, i + s); a += 1)
        t[a] = !0;
  });
  const n = [];
  let l = 0;
  return e.forEach((o, i) => {
    t[i] ? (l > 0 && (n.push({ kind: "gap", count: l }), l = 0), n.push(o)) : l += 1;
  }), l > 0 && n.push({ kind: "gap", count: l }), n;
}
function ts(e) {
  let s = 0, t = 0;
  for (const n of e)
    n.kind === "add" ? s += 1 : n.kind === "del" && (t += 1);
  return { added: s, removed: t };
}
const ns = {
  approval: { zh: "审批", en: "Approval" },
  receipt: { zh: "回执", en: "Receipt" },
  spawn: { zh: "子代理", en: "Spawn" },
  header: { zh: "提示词", en: "Prompt" },
  error: { zh: "错误", en: "Error" }
}, ss = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" }
};
function xn(e, s) {
  const t = e.markerKind ? ns[e.markerKind] : void 0;
  if (t) return s === "zh-CN" ? t.zh : t.en;
  const n = ss[e.kind];
  return n ? s === "zh-CN" ? n.zh : n.en : e.kind;
}
function ls(e, s) {
  const t = (s ?? "").toLowerCase();
  let n = 4;
  return t.includes("qwen") ? n = 2.2 : t.includes("deepseek") ? n = 2.5 : t.includes("claude") && (n = 3.6), Math.round(e / n);
}
function os(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function ie(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const s = e * 1e3;
  return s < 1e3 ? `${Math.round(s)}ms` : s < 6e4 ? `${(s / 1e3).toFixed(1)}s` : `${Math.floor(s / 6e4)}m${Math.round(s % 6e4 / 1e3)}s`;
}
function G(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function It(e, s) {
  return e === void 0 || !Number.isFinite(e) || s === null || s === void 0 || s <= 0 ? "-" : `${(e / s).toFixed(1)} tok/s`;
}
function Fe(e) {
  return e == null || !Number.isFinite(e) ? "-" : new Date(e).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
  });
}
function ae(e) {
  if (!e) return null;
  const s = Date.parse(e);
  return Number.isFinite(s) ? s : null;
}
function kn(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function is(e) {
  if (!e) return "-";
  const s = new Date(e);
  return Number.isNaN(s.getTime()) ? e : s.toLocaleString();
}
function rs(e) {
  if (!e) return "-";
  const s = Date.parse(e);
  if (!Number.isFinite(s)) return e;
  const t = Date.now() - s;
  return t < 6e4 ? "刚刚" : t < 36e5 ? `${Math.floor(t / 6e4)} 分钟前` : t < 864e5 ? `${Math.floor(t / 36e5)} 小时前` : new Date(s).toLocaleString();
}
function wn(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function kt(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const Tn = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default"
};
function _n(e) {
  return e || "unknown";
}
const et = window.QwenPaw.host, c = et.React, { useEffect: as, useRef: cs, useState: In } = c, { Button: Cn, Collapse: us, Empty: Pt, Tabs: Ct } = et.antd, { Text: X } = et.antd.Typography, { CopyOutlined: ds, CloseOutlined: hs } = et.antdIcons, ms = 320, fs = 720, Ke = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, ps = 2e4;
function gs(e) {
  if (e.length > ps) return e;
  const s = [], t = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let n = 0, l, o = 0;
  for (; (l = t.exec(e)) !== null; ) {
    l.index > n && s.push(e.slice(n, l.index));
    const i = l[0];
    let a = "rgba(128,128,128,1)";
    l[1] !== void 0 ? a = Ke.key : l[2] !== void 0 ? a = Ke.string : l[3] !== void 0 ? a = Ke.number : a = Ke.literal, s.push(
      /* @__PURE__ */ c.createElement("span", { key: o++, style: { color: a } }, i)
    ), n = l.index + i.length;
  }
  return n < e.length && s.push(e.slice(n)), s;
}
function ue({ value: e, json: s = !1 }) {
  const [t, n] = In(!1), l = typeof e == "string" ? e : JSON.stringify(e, null, 2);
  if (!l) return null;
  const o = async () => {
    try {
      await navigator.clipboard.writeText(l), n(!0), window.setTimeout(() => n(!1), 1500);
    } catch {
    }
  };
  return /* @__PURE__ */ c.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ c.createElement(
    "a",
    {
      onClick: () => void o(),
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
    t ? "✓" : /* @__PURE__ */ c.createElement(ds, null)
  ), /* @__PURE__ */ c.createElement(
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
    s ? gs(l) : l
  ));
}
function $({
  label: e,
  value: s,
  danger: t = !1
}) {
  return /* @__PURE__ */ c.createElement(
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
    /* @__PURE__ */ c.createElement(X, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ c.createElement(
      X,
      {
        type: t ? "danger" : void 0,
        style: { fontSize: 12, textAlign: "right" }
      },
      s
    )
  );
}
function Ft({
  input: e,
  output: s,
  cacheRead: t,
  cacheWrite: n,
  reasoning: l
}) {
  const o = Math.max(0, e - t - n), i = Math.max(0, s - l);
  return /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "Input", value: `${G(e)} tok` }), t ? /* @__PURE__ */ c.createElement($, { label: "Cached", value: `${G(t)} tok` }) : null, n ? /* @__PURE__ */ c.createElement(
    $,
    {
      label: "Cache created",
      value: `${G(n)} tok`
    }
  ) : null, t || n ? /* @__PURE__ */ c.createElement($, { label: "Other", value: `${G(o)} tok` }) : null, /* @__PURE__ */ c.createElement($, { label: "Output", value: `${G(s)} tok` }), l ? /* @__PURE__ */ c.createElement($, { label: "Reasoning", value: `${G(l)} tok` }) : null, l ? /* @__PURE__ */ c.createElement($, { label: "Content", value: `${G(i)} tok` }) : null);
}
function dt({
  label: e,
  onOpen: s,
  children: t
}) {
  return /* @__PURE__ */ c.createElement(
    "div",
    {
      style: {
        marginTop: 8,
        borderTop: "1px solid rgba(128,128,128,0.15)",
        paddingTop: 6
      }
    },
    /* @__PURE__ */ c.createElement("a", { onClick: s, style: { fontSize: 12, fontWeight: 600 } }, e, " →"),
    /* @__PURE__ */ c.createElement("div", { style: { paddingTop: 2 } }, t)
  );
}
const Bt = ["system", "user", "assistant", "tool"], ys = {
  system: "roleSystem",
  user: "roleUser",
  assistant: "roleAssistant",
  tool: "roleTool"
};
function vs({
  request: e,
  locale: s
}) {
  const t = e.inputComposition;
  if (!t) return null;
  const n = e.models[0], l = [], o = new Set(Bt), i = [
    ...Bt.filter((a) => t.charsByRole[a]),
    ...Object.keys(t.charsByRole).filter(
      (a) => !o.has(a) && t.charsByRole[a]
    )
  ];
  for (const a of i) {
    const m = t.charsByRole[a], v = ys[a] ?? "roleOther";
    l.push(
      /* @__PURE__ */ c.createElement(
        $,
        {
          key: a,
          label: f(s, v),
          value: `${G(m)} ${f(
            s,
            "charUnit"
          )} · ~${G(ls(m, n))} tok ${f(
            s,
            "estimatedTag"
          )}`
        }
      )
    );
  }
  return t.maxToolChars > 0 && l.push(
    /* @__PURE__ */ c.createElement(
      $,
      {
        key: "max-tool",
        label: f(s, "maxToolMsg"),
        value: `${G(t.maxToolChars)} ${f(
          s,
          "charUnit"
        )}`
      }
    )
  ), /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(X, { strong: !0, style: { fontSize: 12, display: "block", marginTop: 10 } }, f(s, "inputComposition")), l, /* @__PURE__ */ c.createElement(
    X,
    {
      type: "secondary",
      style: { fontSize: 11, display: "block", padding: "2px 0" }
    },
    f(s, "estimateNote")
  ), e.growth ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
    $,
    {
      label: f(s, "growthVsPrev"),
      value: e.growth.prevInputTokens === null ? f(s, "firstRound") : `${e.growth.deltaTokens >= 0 ? "+" : ""}${G(
        e.growth.deltaTokens
      )} tok`
    }
  ), e.growth.prevInputTokens !== null && e.growth.deltaTokens > 0 ? /* @__PURE__ */ c.createElement(
    $,
    {
      label: f(s, "cacheAbsorbed"),
      value: `${G(e.cacheReadTokens)} tok`
    }
  ) : null) : null);
}
function Ss({
  request: e,
  onJumpRecord: s
}) {
  const t = Z(), [n, l] = c.useState("summary"), o = /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "Started", value: Fe(e.startedAt) }), /* @__PURE__ */ c.createElement(
    $,
    {
      label: "Total",
      value: ie(
        e.durationMs === null ? null : e.durationMs / 1e3
      )
    }
  ), e.ttftMs !== null ? /* @__PURE__ */ c.createElement(
    $,
    {
      label: "First TTFT",
      value: ie(e.ttftMs / 1e3)
    }
  ) : null, e.decodeMs !== null ? /* @__PURE__ */ c.createElement(
    $,
    {
      label: "Total decoding",
      value: ie(e.decodeMs / 1e3)
    }
  ) : null, /* @__PURE__ */ c.createElement(
    $,
    {
      label: f(t, "throughput"),
      value: It(
        e.outputTokens,
        e.decodeMs === null ? null : e.decodeMs / 1e3
      )
    }
  )), i = /* @__PURE__ */ c.createElement(
    Ft,
    {
      input: e.inputTokens,
      output: e.outputTokens,
      cacheRead: e.cacheReadTokens,
      cacheWrite: e.cacheWriteTokens,
      reasoning: e.reasoningTokens
    }
  ), a = [
    {
      key: "summary",
      label: f(t, "summary"),
      children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ c.createElement(
        $,
        {
          label: f(t, "status"),
          value: e.status || "unknown",
          danger: e.status === "error"
        }
      ), /* @__PURE__ */ c.createElement($, { label: "Query", value: Es(e.query) }), /* @__PURE__ */ c.createElement(
        $,
        {
          label: f(t, "model"),
          value: e.models.join(", ") || "-"
        }
      ), /* @__PURE__ */ c.createElement($, { label: "Tool calls", value: String(e.toolCalls) }), e.errors.length > 0 ? /* @__PURE__ */ c.createElement(
        $,
        {
          label: "Error",
          value: e.errors.join("; ").slice(0, 120),
          danger: !0
        }
      ) : null, e.resultIndex !== void 0 && s ? /* @__PURE__ */ c.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ c.createElement(
        "a",
        {
          style: { fontSize: 12 },
          onClick: () => s(e.resultIndex)
        },
        "Result: Assistant Message →"
      )) : null, e.options ? /* @__PURE__ */ c.createElement(dt, { label: "Options", onOpen: () => l("options") }, /* @__PURE__ */ c.createElement(ue, { value: e.options, json: !0 })) : null, /* @__PURE__ */ c.createElement(dt, { label: "Usage", onOpen: () => l("usage") }, i), /* @__PURE__ */ c.createElement(dt, { label: "Timing", onOpen: () => l("timing") }, o))
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(X, { strong: !0, style: { fontSize: 12 } }, f(t, "thisRequest")), i, /* @__PURE__ */ c.createElement(vs, { request: e, locale: t }), e.sessionTotals ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
        X,
        {
          strong: !0,
          style: { fontSize: 12, display: "block", marginTop: 10 }
        },
        f(t, "sessionTotal")
      ), /* @__PURE__ */ c.createElement(
        Ft,
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
        children: /* @__PURE__ */ c.createElement(ue, { value: e.options, json: !0 })
      }
    ] : []
  ];
  return /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 4px" } }, /* @__PURE__ */ c.createElement(
    Ct,
    {
      size: "small",
      activeKey: n,
      onChange: (m) => l(m),
      items: a,
      tabBarStyle: { marginBottom: 8 }
    }
  ));
}
function Es(e, s = 200) {
  const t = e.split(`
`, 1)[0].trim();
  return t.length > s ? `${t.slice(0, s)}…` : t;
}
function bs({
  oldText: e,
  newText: s
}) {
  const t = c.useMemo(
    () => qn(e, s),
    [e, s]
  ), n = c.useMemo(() => ts(t), [t]), l = c.useMemo(() => es(t), [t]), o = Z();
  return e === void 0 ? /* @__PURE__ */ c.createElement(X, { type: "secondary", style: { fontSize: 12 } }, f(o, "noPrevPrompt")) : /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ c.createElement("span", { style: { color: "#52c41a" } }, "+", n.added), " ", /* @__PURE__ */ c.createElement("span", { style: { color: "#ff4d4f" } }, "−", n.removed)), /* @__PURE__ */ c.createElement(
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
    l.map((i, a) => {
      if (i.kind === "gap")
        return /* @__PURE__ */ c.createElement(
          "div",
          {
            key: a,
            style: {
              padding: "0 8px",
              color: "rgba(128,128,128,0.8)",
              background: "rgba(128,128,128,0.05)",
              userSelect: "none"
            }
          },
          "⋯ ",
          i.count
        );
      const m = i;
      return /* @__PURE__ */ c.createElement(
        "div",
        {
          key: a,
          style: {
            padding: "0 8px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
            background: m.kind === "add" ? "rgba(82,196,26,0.12)" : m.kind === "del" ? "rgba(255,77,79,0.10)" : void 0,
            color: m.kind === "del" ? "rgba(255,77,79,0.9)" : void 0
          }
        },
        m.kind === "add" ? "+ " : m.kind === "del" ? "− " : "  ",
        m.text || " "
      );
    })
  ));
}
function xs({ record: e }) {
  var o;
  const s = Z(), t = e.headerTools ?? [], n = e.headerReason === "changed", l = [
    {
      key: "summary",
      label: f(s, "summary"),
      children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "#", value: String(e.index) }), /* @__PURE__ */ c.createElement(
        $,
        {
          label: f(s, "status"),
          value: n ? f(s, "promptChanged") : f(s, "promptInitial")
        }
      ), /* @__PURE__ */ c.createElement($, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ c.createElement($, { label: "Chars", value: String(((o = e.prompt) == null ? void 0 : o.length) ?? 0) }), /* @__PURE__ */ c.createElement($, { label: "Tools", value: String(t.length) }))
    },
    ...n ? [
      {
        key: "diff",
        label: "Diff",
        children: /* @__PURE__ */ c.createElement(
          bs,
          {
            oldText: e.prevPrompt,
            newText: e.prompt ?? ""
          }
        )
      }
    ] : [],
    {
      key: "prompt",
      label: f(s, "prompt"),
      children: /* @__PURE__ */ c.createElement(ue, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ c.createElement("div", { style: { paddingTop: 4 } }, t.map((i) => /* @__PURE__ */ c.createElement(X, { key: i, code: !0, style: { fontSize: 11 } }, i)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ c.createElement(
          us,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((i, a) => {
              var v;
              const m = typeof i.name == "string" && i.name || typeof ((v = i.function) == null ? void 0 : v.name) == "string" && i.function.name || `tool-${a + 1}`;
              return {
                key: String(a),
                label: /* @__PURE__ */ c.createElement(X, { code: !0, style: { fontSize: 11 } }, m),
                children: /* @__PURE__ */ c.createElement(ue, { value: i })
              };
            })
          }
        ) : null)
      }
    ] : [],
    {
      key: "raw",
      label: "Raw",
      children: /* @__PURE__ */ c.createElement(ue, { value: e.raw })
    }
  ];
  return /* @__PURE__ */ c.createElement(Ct, { size: "small", items: l, tabBarStyle: { marginBottom: 8 } });
}
function ht({ dragRef: e, width: s }) {
  return /* @__PURE__ */ c.createElement(
    "div",
    {
      onPointerDown: (t) => {
        e.current = {
          anchorX: t.clientX,
          anchorWidth: s
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
function mt({ onClose: e }) {
  return e ? /* @__PURE__ */ c.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ c.createElement(
    Cn,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ c.createElement(hs, null),
      onClick: e
    }
  )) : null;
}
function ks({
  record: e,
  request: s,
  onJumpSession: t,
  onJumpRecord: n,
  onSelectTurn: l,
  onClose: o
}) {
  const i = Z(), [a, m] = In(400), v = cs(null);
  if (as(() => {
    const b = (N) => {
      const T = v.current;
      if (T === null) return;
      const w = T.anchorX - N.clientX;
      m(
        Math.min(fs, Math.max(ms, T.anchorWidth + w))
      );
    }, M = () => {
      v.current = null;
    };
    return window.addEventListener("pointermove", b), window.addEventListener("pointerup", M), () => {
      window.removeEventListener("pointermove", b), window.removeEventListener("pointerup", M);
    };
  }, []), e === null && s === null)
    return /* @__PURE__ */ c.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: a,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      },
      /* @__PURE__ */ c.createElement(
        Pt,
        {
          image: Pt.PRESENTED_IMAGE_SIMPLE,
          description: f(i, "selectRecord")
        }
      )
    );
  if (e === null && s !== null)
    return /* @__PURE__ */ c.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: a,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative"
        }
      },
      /* @__PURE__ */ c.createElement(ht, { dragRef: v, width: a }),
      /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(mt, { onClose: o }), /* @__PURE__ */ c.createElement(Ss, { request: s, onJumpRecord: n }))
    );
  const r = e;
  if (r.kind === "system" && r.prompt !== void 0)
    return /* @__PURE__ */ c.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: a,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative"
        }
      },
      /* @__PURE__ */ c.createElement(ht, { dragRef: v, width: a }),
      /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(mt, { onClose: o }), /* @__PURE__ */ c.createElement(xs, { record: r }))
    );
  const h = r.usage, d = r.timing, k = [];
  return k.push({
    key: "summary",
    label: f(i, "summary"),
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "#", value: String(r.index) }), /* @__PURE__ */ c.createElement($, { label: "Kind", value: xn(r, i) }), r.runIndex > 0 && l ? /* @__PURE__ */ c.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ c.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => l(r.runIndex)
      },
      "Request #",
      r.runIndex,
      " →"
    )) : null, /* @__PURE__ */ c.createElement(
      $,
      {
        label: f(i, "status"),
        value: r.running ? f(i, "running") : r.isError ? f(i, "error") : f(i, "success"),
        danger: r.isError
      }
    ), r.provider ? /* @__PURE__ */ c.createElement($, { label: "Provider", value: r.provider }) : null, r.model ? /* @__PURE__ */ c.createElement($, { label: f(i, "model"), value: r.model }) : null, r.toolName ? /* @__PURE__ */ c.createElement($, { label: "Tool", value: r.toolName }) : null, r.inSkill ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: f(i, "skillResource"),
        value: r.inSkillLoaded ? `⚡ ${r.inSkill}` : `⚡ ${r.inSkill}（${f(i, "skillBypass")}）`
      }
    ) : null, r.guidedSkill ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: f(i, "skillGuided"),
        value: `∈ ${r.guidedSkill}（${r.guidedReason === "slash" ? f(i, "guidedBySlash") : f(i, "guidedByLoad")}）`
      }
    ) : null, r.toolOutputChars ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: f(i, "outputSize"),
        value: r.toolOutputBytes ? `${G(r.toolOutputChars)} ${f(
          i,
          "charUnit"
        )} · ${kt(r.toolOutputBytes)} (${f(
          i,
          "beforeTruncation"
        )})` : `${G(r.toolOutputChars)} ${f(
          i,
          "charUnit"
        )}`
      }
    ) : null, r.kind === "user" && (r.channel || r.userId) ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: f(i, "source"),
        value: [r.channel, r.userId].filter(Boolean).join(" · ")
      }
    ) : null, r.receipt ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: f(i, "channel"),
        value: r.receipt.channel ?? "-"
      }
    ) : null, /* @__PURE__ */ c.createElement(
      $,
      {
        label: f(i, "duration"),
        value: ie(r.timeSeconds)
      }
    ), r.note ? /* @__PURE__ */ c.createElement(X, { type: "warning", style: { fontSize: 12 } }, r.note) : null, r.spawnSession ? /* @__PURE__ */ c.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ c.createElement(
      $,
      {
        label: f(i, "spawnedAgent"),
        value: r.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ c.createElement(
      Cn,
      {
        size: "small",
        onClick: () => r.spawnSession && t(r.spawnSession),
        style: { marginTop: 4 }
      },
      f(i, "openChildSession")
    ) : null) : null)
  }), r.kind === "tool" ? (r.toolInput && k.push({
    key: "payload",
    label: f(i, "input"),
    children: /* @__PURE__ */ c.createElement(ue, { value: r.toolInput, json: !0 })
  }), (r.toolOutput || r.toolError) && k.push({
    key: "result",
    label: f(i, "output"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, r.toolError ? /* @__PURE__ */ c.createElement(X, { type: "danger", style: { fontSize: 12 } }, r.toolError) : null, r.toolOutput ? /* @__PURE__ */ c.createElement(ue, { value: r.toolOutput }) : null)
  })) : (r.outputText || r.thinkingText || r.messages || r.marker || r.toolCalls && r.toolCalls.length > 0) && (r.inputNew && r.inputNew.length > 0 && k.push({
    key: "input",
    label: f(i, "inputTab"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, r.contextReset ? /* @__PURE__ */ c.createElement(X, { type: "warning", style: { fontSize: 12 } }, f(i, "contextReset")) : null, r.messagesMeta ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: f(i, "inputTotal"),
        value: `${r.messagesMeta.count} · ${G(
          r.messagesMeta.totalChars
        )} ${f(i, "charUnit")}`
      }
    ) : null, r.inputNew.map((b, M) => /* @__PURE__ */ c.createElement("div", { key: M }, /* @__PURE__ */ c.createElement(
      "div",
      {
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ c.createElement(X, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, b.role),
      /* @__PURE__ */ c.createElement(X, { type: "secondary", style: { fontSize: 11 } }, G(b.chars), " ", f(i, "charUnit"), b.toolCallId ? ` · ${b.toolCallId}` : "")
    ), b.text ? /* @__PURE__ */ c.createElement(ue, { value: b.text }) : null)))
  }), k.push({
    key: "raw",
    label: f(i, "output"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, r.inboundParts && r.inboundParts.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(X, { type: "secondary", style: { fontSize: 12 } }, `${f(i, "inboundParts")} (${r.inboundParts.length})`), r.inboundParts.map((b, M) => /* @__PURE__ */ c.createElement(
      "div",
      {
        key: M,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ c.createElement(X, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, b.type.replace("Content", "")),
      /* @__PURE__ */ c.createElement(
        X,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        b.text ?? "-"
      )
    ))) : null, r.marker ? /* @__PURE__ */ c.createElement(ue, { value: r.marker }) : null, r.toolCalls && r.toolCalls.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(X, { type: "secondary", style: { fontSize: 12 } }, `${f(i, "toolCall")} (${r.toolCalls.length})`), r.toolCalls.map((b, M) => /* @__PURE__ */ c.createElement("div", { key: b.id || M, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ c.createElement(X, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", b.name), /* @__PURE__ */ c.createElement(X, { type: "secondary", style: { fontSize: 11 } }, b.id)))) : null, r.note ? /* @__PURE__ */ c.createElement(X, { type: "warning", style: { fontSize: 12 } }, r.note) : null, r.messages && r.messages.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(X, { type: "secondary", style: { fontSize: 12 } }, `${f(i, "query")} (${r.messages.length})`), r.messages.map((b, M) => /* @__PURE__ */ c.createElement(
      "div",
      {
        key: M,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ c.createElement(X, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, b.role),
      /* @__PURE__ */ c.createElement(
        X,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        b.text
      )
    ))) : null, r.thinkingText ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(X, { type: "secondary", style: { fontSize: 12 } }, f(i, "thinking")), /* @__PURE__ */ c.createElement(ue, { value: r.thinkingText })) : null, r.outputText ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(X, { type: "secondary", style: { fontSize: 12 } }, f(i, "output")), /* @__PURE__ */ c.createElement(ue, { value: r.outputText })) : null)
  })), (r.startedAt !== null || h || d) && k.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "Started", value: Fe(r.startedAt) }), /* @__PURE__ */ c.createElement($, { label: "Total", value: ie(r.timeSeconds) }), d ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
      $,
      {
        label: "TTFT",
        value: ie(d.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ c.createElement(
      $,
      {
        label: "Decoding",
        value: ie(d.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ c.createElement(
      $,
      {
        label: f(i, "throughput"),
        value: It(
          h == null ? void 0 : h.output_tokens,
          d.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ c.createElement(X, { type: "secondary", style: { fontSize: 12 } }, f(i, "noTiming")))
  }), h && k.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "Input", value: G(h.input_tokens) }), /* @__PURE__ */ c.createElement($, { label: "Output", value: G(h.output_tokens) }), h.cache_creation_input_tokens ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: "Cache write",
        value: G(h.cache_creation_input_tokens)
      }
    ) : null, h.cache_input_tokens ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: "Cache read",
        value: G(h.cache_input_tokens)
      }
    ) : null, h.total_tokens !== void 0 ? /* @__PURE__ */ c.createElement($, { label: "Total", value: G(h.total_tokens) }) : null, h.time !== void 0 ? /* @__PURE__ */ c.createElement($, { label: "API time", value: ie(h.time) }) : null)
  }), k.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ c.createElement(ue, { value: r.raw })
  }), /* @__PURE__ */ c.createElement(
    "aside",
    {
      style: {
        flexShrink: 0,
        width: a,
        borderLeft: "1px solid rgba(128,128,128,0.18)",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        position: "relative"
      }
    },
    /* @__PURE__ */ c.createElement(ht, { dragRef: v, width: a }),
    /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(mt, { onClose: o }), /* @__PURE__ */ c.createElement(Ct, { size: "small", items: k, tabBarStyle: { marginBottom: 8 } }))
  );
}
const te = window.QwenPaw.host.React, ws = te.useRef, Ts = te.useState;
te.useCallback;
te.useMemo;
const _s = te.useEffect, Is = te.useLayoutEffect, Cs = te.useReducer;
te.createContext;
te.useContext;
te.createElement;
te.cloneElement;
te.isValidElement;
te.memo;
te.forwardRef;
te.Fragment;
te.StrictMode;
te.version;
function Ms(e) {
  return e ? e() : void 0;
}
function zs(e, s, t) {
  const n = new Array(e);
  return new Proxy(n, {
    get(l, o, i) {
      if (typeof o == "string") {
        const a = o.charCodeAt(0);
        if (a >= 48 && a <= 57) {
          const m = +o;
          if (Number.isInteger(m) && m >= 0 && m < e) {
            let v = l[m];
            if (!v) {
              const r = s[m * 2];
              v = l[m] = {
                index: m,
                key: t(m),
                start: r,
                size: s[m * 2 + 1],
                end: r + s[m * 2 + 1],
                lane: 0
              };
            }
            return v;
          }
        }
        if (o === "length") return e;
      }
      return Reflect.get(l, o, i);
    }
  });
}
function Ce(e, s, t) {
  let n = t.initialDeps ?? [], l, o = !0;
  function i() {
    var a;
    const m = process.env.NODE_ENV !== "production" && !!t.key && !!((a = t.debug) != null && a.call(t));
    let v = 0;
    m && (v = Date.now());
    const r = e();
    if (!(r.length !== n.length || r.some((k, b) => n[b] !== k)))
      return l;
    n = r;
    let d = 0;
    if (m && (d = Date.now()), l = s(...r), m) {
      const k = Math.round((Date.now() - v) * 100) / 100, b = Math.round((Date.now() - d) * 100) / 100, M = b / 16, N = (T, w) => {
        for (T = String(T); T.length < w; )
          T = " " + T;
        return T;
      };
      console.info(
        `%c⏱ ${N(b, 5)} /${N(k, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * M, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return t != null && t.onChange && !(o && t.skipInitialOnChange) && t.onChange(l), o = !1, l;
  }
  return i.updateDeps = (a) => {
    n = a;
  }, i;
}
function Ht(e, s) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Os = (e, s) => Math.abs(e - s) < 1.01, $s = (e, s, t) => {
  let n;
  return function(...l) {
    e.clearTimeout(n), n = e.setTimeout(() => s.apply(this, l), t);
  };
};
let De;
const ft = () => {
  if (De !== void 0) return De;
  if (typeof navigator > "u") return De = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return De = !0;
  const e = navigator.maxTouchPoints;
  return De = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, Ut = (e) => {
  const { offsetWidth: s, offsetHeight: t } = e;
  return { width: s, height: t };
}, Rs = (e) => e, As = (e) => {
  const s = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1) - s + 1, l = new Array(n);
  for (let o = 0; o < n; o++)
    l[o] = s + o;
  return l;
}, Ls = (e, s) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  const l = (i) => {
    const { width: a, height: m } = i;
    s({ width: Math.round(a), height: Math.round(m) });
  };
  if (l(Ut(t)), !n.ResizeObserver)
    return () => {
    };
  const o = new n.ResizeObserver((i) => {
    const a = () => {
      const m = i[0];
      if (m != null && m.borderBoxSize) {
        const v = m.borderBoxSize[0];
        if (v) {
          l({ width: v.inlineSize, height: v.blockSize });
          return;
        }
      }
      l(Ut(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
  });
  return o.observe(t, { box: "border-box" }), () => {
    o.unobserve(t);
  };
}, Ze = {
  passive: !0
}, Ns = typeof window > "u" ? !0 : "onscrollend" in window, js = (e, s, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const l = e.targetWindow;
  if (!l)
    return;
  const o = e.options.useScrollendEvent && Ns;
  let i = 0;
  const a = o ? null : $s(
    l,
    () => s(i, !1),
    e.options.isScrollingResetDelay
  ), m = (h) => () => {
    i = t(n), a == null || a(), s(i, h);
  }, v = m(!0), r = m(!1);
  return n.addEventListener("scroll", v, Ze), o && n.addEventListener("scrollend", r, Ze), () => {
    n.removeEventListener("scroll", v), o && n.removeEventListener("scrollend", r);
  };
}, Ds = (e, s) => js(e, s, (t) => {
  const { horizontal: n, isRtl: l } = e.options;
  return n ? t.scrollLeft * (l && -1 || 1) : t.scrollTop;
}), Ps = (e, s, t) => {
  if (t.options.useCachedMeasurements) {
    const n = t.indexFromElement(e), l = t.options.getItemKey(n);
    return t.itemSizeCache.get(l) ?? t.options.estimateSize(n);
  }
  if (s != null && s.borderBoxSize) {
    const n = s.borderBoxSize[0];
    if (n)
      return Math.round(
        n[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  if (!s) {
    const n = t.indexFromElement(e), l = t.options.getItemKey(n), o = t.itemSizeCache.get(l);
    if (o !== void 0)
      return o;
  }
  return e[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Fs = (e, {
  adjustments: s = 0,
  behavior: t
}, n) => {
  var l, o;
  (o = (l = n.scrollElement) == null ? void 0 : l.scrollTo) == null || o.call(l, {
    [n.options.horizontal ? "left" : "top"]: e + s,
    behavior: t
  });
}, Bs = Fs;
class Hs {
  constructor(s) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, n, l;
      return ((l = (n = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : n.now) == null ? void 0 : l.call(n)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((o) => {
          const i = () => {
            const a = o.target, m = this.indexFromElement(a);
            if (!a.isConnected) {
              this.observer.unobserve(a);
              for (const [v, r] of this.elementsCache)
                if (r === a) {
                  this.elementsCache.delete(v);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(m) && this.resizeItem(
              m,
              this.options.measureElement(a, o, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
        });
      }));
      return {
        disconnect: () => {
          var l;
          (l = n()) == null || l.disconnect(), t = null;
        },
        observe: (l) => {
          var o;
          return (o = n()) == null ? void 0 : o.observe(l, { box: "border-box" });
        },
        unobserve: (l) => {
          var o;
          return (o = n()) == null ? void 0 : o.unobserve(l);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      var n, l;
      const o = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Rs,
        rangeExtractor: As,
        onChange: () => {
        },
        measureElement: Ps,
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
      for (const d in t) {
        const k = t[d];
        k !== void 0 && (o[d] = k);
      }
      const i = this.options;
      let a = null, m = null, v = !1;
      if (i !== void 0 && i.enabled && o.enabled && o.anchorTo === "end" && this.scrollElement !== null) {
        const d = i.count, k = o.count, b = this.getMeasurements(), M = d > 0 ? ((n = b[0]) == null ? void 0 : n.key) ?? i.getItemKey(0) : null, N = d > 0 ? ((l = b[d - 1]) == null ? void 0 : l.key) ?? i.getItemKey(d - 1) : null;
        if (k !== d || d > 0 && k > 0 && (o.getItemKey(0) !== M || o.getItemKey(k - 1) !== N)) {
          v = !0;
          const j = d > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? b[0] : null;
          j && (a = [j.key, this.getScrollOffset() - j.start]);
          const F = o.followOnAppend === !0 ? "auto" : o.followOnAppend || null;
          F && k > d && this.isAtEnd(i.scrollEndThreshold) && (d === 0 || o.getItemKey(k - 1) !== N) && (m = F);
        }
      }
      this.options = o, v && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let r = !1, h = 0;
      if (a && this.scrollOffset !== null) {
        const [d, k] = a, b = this.getMeasurements(), { count: M, getItemKey: N } = this.options;
        let T = 0;
        for (; T < M && N(T) !== d; )
          T++;
        if (T < M) {
          const w = b[T];
          if (w) {
            const j = Math.max(0, w.start + k);
            j !== this.scrollOffset && (h = j - this.scrollOffset, this.scrollOffset = j, r = !0);
          }
        }
      }
      (r || m) && (this.pendingScrollAnchor = [
        r ? a[0] : null,
        r ? a[1] : 0,
        m,
        h
      ]);
    }, this.notify = (t) => {
      var n, l;
      (l = (n = this.options).onChange) == null || l.call(n, this, t);
    }, this.maybeNotify = Ce(
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
      const n = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== n) {
        if (this.cleanup(), !n) {
          this.maybeNotify();
          return;
        }
        if (this.scrollElement = n, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((o) => {
          this.observer.observe(o);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (o) => {
            this.scrollRect = o, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (o, i) => {
            if (i && this._intendedScrollOffset === null && o === this.scrollOffset)
              return;
            this._intendedScrollOffset !== null && Math.abs(o - this._intendedScrollOffset) < 1.5 && (o = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
            const a = this.getScrollOffset();
            this.scrollDirection = i ? a === o ? this.scrollDirection : a < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = i, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const o = this.scrollElement, i = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, a = () => {
            this._iosTouching = !1, !(!ft() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          o.addEventListener(
            "touchstart",
            i,
            Ze
          ), o.addEventListener(
            "touchend",
            a,
            Ze
          ), this.unsubs.push(() => {
            o.removeEventListener("touchstart", i), o.removeEventListener("touchend", a), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const l = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, l && this.scrollElement && this.options.enabled) {
        const [o, i, a, m] = l;
        o !== null && !a && (ft() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? m !== 0 && (this._iosDeferredAdjustment += m) : this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        })), a && this.scrollToEnd({ behavior: a });
      }
    }, this._flushIosDeferredIfReady = () => {
      if (this._iosDeferredAdjustment === 0 || this.isScrolling || this._iosTouching || this._iosJustTouchEnded) return;
      const t = this.getScrollOffset(), n = this.getMaxScrollOffset();
      if (t < 0 || t > n) return;
      if (this._iosDeferredAdjustment < 0 && t >= n - 1) {
        this._iosDeferredAdjustment = 0;
        return;
      }
      const l = this._iosDeferredAdjustment;
      this._iosDeferredAdjustment = 0, this._scrollToOffset(t, {
        adjustments: this.scrollAdjustments += l,
        behavior: void 0
      });
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = Ce(
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
      (t, n, l, o, i, a, m, v) => (this.prevLanes !== void 0 && this.prevLanes !== a && (this.lanesChangedFlag = !0), this.prevLanes = a, this.pendingMin = null, {
        count: t,
        paddingStart: n,
        scrollMargin: l,
        getItemKey: o,
        enabled: i,
        lanes: a,
        laneAssignmentMode: m,
        gap: v
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Ce(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: t,
        paddingStart: n,
        scrollMargin: l,
        getItemKey: o,
        enabled: i,
        lanes: a,
        laneAssignmentMode: m,
        gap: v
      }, r) => {
        const h = this.itemSizeCache;
        if (!i)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const T of this.laneAssignments.keys())
            T >= t && this.laneAssignments.delete(T);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((T) => {
          this.itemSizeCache.set(T.key, T.size);
        }));
        const d = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), a === 1) {
          const T = t * 2;
          let w = this._flatMeasurements;
          if (!w || w.length < T) {
            const P = new Float64Array(T);
            w && d > 0 && P.set(w.subarray(0, d * 2)), w = P, this._flatMeasurements = w;
          }
          let j;
          if (d === 0)
            j = n + l;
          else {
            const P = d - 1;
            j = w[P * 2] + w[P * 2 + 1] + v;
          }
          for (let P = d; P < t; P++) {
            const p = o(P), u = h.get(p), g = typeof u == "number" ? u : this.options.estimateSize(P);
            w[P * 2] = j, w[P * 2 + 1] = g, j += g + v;
          }
          const F = zs(t, w, o);
          return this.measurementsCache = F, F;
        }
        const k = this.measurementsCache.slice(0, d), b = new Array(a).fill(
          void 0
        ), M = new Float64Array(a);
        let N = 0;
        for (let T = 0; T < d; T++) {
          const w = k[T];
          w && (b[w.lane] === void 0 && N++, b[w.lane] = T, M[w.lane] = w.end);
        }
        for (let T = d; T < t; T++) {
          const w = o(T), j = this.laneAssignments.get(T);
          let F, P;
          const p = m === "estimate" || h.has(w);
          if (j !== void 0 && this.options.lanes > 1) {
            F = j;
            const x = b[F], z = x !== void 0 ? k[x] : void 0;
            P = z ? z.end + v : n + l;
          } else if (N === a) {
            let x = 0, z = M[0], W = b[0];
            for (let O = 1; O < a; O++) {
              const D = M[O];
              (D < z || D === z && b[O] < W) && (x = O, z = D, W = b[O]);
            }
            F = x, P = z + v, p && this.laneAssignments.set(T, F);
          } else
            F = T % this.options.lanes, P = n + l, p && this.laneAssignments.set(T, F);
          const u = h.get(w), g = typeof u == "number" ? u : this.options.estimateSize(T), S = P + g;
          k[T] = {
            index: T,
            start: P,
            size: g,
            end: S,
            key: w,
            lane: F
          }, b[F] === void 0 && N++, b[F] = T, M[F] = S;
        }
        return this.measurementsCache = k, k;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Ce(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, n, l, o) => t.length === 0 || n === 0 ? (this.range = null, null) : (this.range = Ws(
        t,
        n,
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
    ), this.getVirtualIndexes = Ce(
      () => {
        let t = null, n = null;
        const l = this.calculateRange();
        return l && (t = l.startIndex, n = l.endIndex), this.maybeNotify.updateDeps([this.isScrolling, t, n]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          t,
          n
        ];
      },
      (t, n, l, o, i) => o === null || i === null ? [] : t({
        startIndex: o,
        endIndex: i,
        overscan: n,
        count: l
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (t) => {
      const n = this.options.indexAttribute, l = t.getAttribute(n);
      return l ? parseInt(l, 10) : (console.warn(
        `Missing attribute name '${n}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (t) => {
      var n;
      if (!this.scrollState || this.scrollState.behavior !== "smooth")
        return !0;
      const l = this.scrollState.index ?? ((n = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : n.index);
      if (l !== void 0 && this.range) {
        const o = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), i = Math.max(0, l - o), a = Math.min(
          this.options.count - 1,
          l + o
        );
        return t >= i && t <= a;
      }
      return !0;
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((i, a) => {
          i.isConnected || (this.observer.unobserve(i), this.elementsCache.delete(a));
        });
        return;
      }
      const n = this.indexFromElement(t), l = this.options.getItemKey(n), o = this.elementsCache.get(l);
      o !== t && (o && this.observer.unobserve(o), this.observer.observe(t), this.elementsCache.set(l, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(n) && this.resizeItem(n, this.options.measureElement(t, void 0, this));
    }, this.resizeItem = (t, n) => {
      var l, o;
      if (t < 0 || t >= this.options.count) return;
      let i, a, m;
      const v = this._flatMeasurements;
      if (this.options.lanes === 1 && v !== null)
        m = this.options.getItemKey(t), a = v[t * 2], i = v[t * 2 + 1];
      else {
        const d = this.measurementsCache[t];
        if (!d) return;
        m = d.key, a = d.start, i = d.size;
      }
      const r = this.itemSizeCache.get(m) ?? i, h = n - r;
      if (h !== 0) {
        const d = this.options.anchorTo === "end" && ((l = this.scrollState) == null ? void 0 : l.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, k = d ? this.getTotalSize() : 0, b = this.getScrollOffset() + this.scrollAdjustments, N = !this.itemSizeCache.has(m) ? (
          // First measurement: compensate any item whose top sits above the
          // fold — the estimate→actual delta must be corrected regardless of
          // scroll direction, since the whole estimated block was above it.
          a < b
        ) : (
          // Re-measurement: only compensate an item that is ENTIRELY above the
          // fold. An item that merely *spans* the fold (top above, bottom
          // below — e.g. a streaming chat message growing at its bottom)
          // changes size *below* the anchor point, so shifting scrollTop by the
          // delta would drag the viewport downward on every growth (#1218).
          // Also skip during backward scroll to avoid the "items jump while
          // scrolling up" cascade.
          a + r <= b && this.scrollDirection !== "backward"
        ), T = ((o = this.scrollState) == null ? void 0 : o.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[t] ?? {
            index: t,
            key: m,
            start: a,
            size: i,
            end: a + i,
            lane: 0
          },
          h,
          this
        ) : N);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(m, n), this.itemSizeCacheVersion++;
        let w = !1;
        d ? w = this.applyScrollAdjustment(
          this.getTotalSize() - k
        ) : T && (w = this.applyScrollAdjustment(h)), this.notify(w);
      }
    }, this.getVirtualItems = Ce(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const l = [];
        for (let o = 0, i = t.length; o < i; o++) {
          const a = t[o], m = n[a];
          l.push(m);
        }
        return l;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const n = this.getMeasurements();
      if (n.length === 0)
        return;
      const l = this._flatMeasurements, o = this.options.lanes === 1 && l != null, i = Mn(
        0,
        n.length - 1,
        o ? (a) => l[a * 2] : (a) => Ht(n[a]).start,
        t
      );
      return Ht(n[i]);
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
    ), this.getDistanceFromEnd = () => Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0), this.isAtEnd = (t = this.options.scrollEndThreshold) => this.getDistanceFromEnd() <= t, this.getOffsetForAlignment = (t, n, l = 0) => {
      if (!this.scrollElement) return 0;
      const o = this.getSize(), i = this.getScrollOffset();
      n === "auto" && (n = t >= i + o ? "end" : "start"), n === "center" ? t += (l - o) / 2 : n === "end" && (t -= o);
      const a = this.getMaxScrollOffset();
      return Math.max(Math.min(a, t), 0);
    }, this.getOffsetForIndex = (t, n = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const l = this.getSize(), o = this.getScrollOffset(), i = this.measurementsCache[t];
      if (!i) return;
      if (n === "auto")
        if (i.end >= o + l - this.options.scrollPaddingEnd)
          n = "end";
        else if (i.start <= o + this.options.scrollPaddingStart)
          n = "start";
        else
          return [o, n];
      if (n === "end" && t === this.options.count - 1)
        return [this.getMaxScrollOffset(), n];
      const a = n === "end" ? i.end + this.options.scrollPaddingEnd : i.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(a, n, i.size),
        n
      ];
    }, this.scrollToOffset = (t, { align: n = "start", behavior: l = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0;
      const o = this.getOffsetForAlignment(t, n), i = this.now();
      this.scrollState = {
        index: null,
        align: n,
        behavior: l,
        startedAt: i,
        lastTargetOffset: o,
        stableFrames: 0
      }, this._scrollToOffset(o, { adjustments: void 0, behavior: l }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (t, {
      align: n = "auto",
      behavior: l = "auto"
    } = {}) => {
      this._iosDeferredAdjustment = 0, t = Math.max(0, Math.min(t, this.options.count - 1));
      const o = this.getOffsetForIndex(t, n);
      if (!o)
        return;
      const [i, a] = o, m = this.now();
      this.scrollState = {
        index: t,
        align: a,
        behavior: l,
        startedAt: m,
        lastTargetOffset: i,
        stableFrames: 0
      }, this._scrollToOffset(i, { adjustments: void 0, behavior: l }), this.scheduleScrollReconcile();
    }, this.scrollBy = (t, { behavior: n = "auto" } = {}) => {
      const l = this.getScrollOffset() + t, o = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: n,
        startedAt: o,
        lastTargetOffset: l,
        stableFrames: 0
      }, this._scrollToOffset(l, { adjustments: void 0, behavior: n }), this.scheduleScrollReconcile();
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
      const n = this.getMeasurements();
      let l;
      if (n.length === 0)
        l = this.options.paddingStart;
      else if (this.options.lanes === 1) {
        const o = n.length - 1, i = this._flatMeasurements;
        i != null ? l = i[o * 2] + i[o * 2 + 1] : l = ((t = n[o]) == null ? void 0 : t.end) ?? 0;
      } else {
        const o = Array(this.options.lanes).fill(null);
        let i = n.length - 1;
        for (; i >= 0 && o.some((a) => a === null); ) {
          const a = n[i];
          o[a.lane] === null && (o[a.lane] = a.end), i--;
        }
        l = Math.max(...o.filter((a) => a !== null));
      }
      return Math.max(
        l - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this.takeSnapshot = () => {
      const t = [];
      if (this.itemSizeCache.size === 0) return t;
      const n = this.getMeasurements();
      for (const l of n)
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
      adjustments: n,
      behavior: l
    }) => {
      this._intendedScrollOffset = t + (n ?? 0), this.options.scrollToFn(t, { behavior: l, adjustments: n }, this);
    }, this.measure = () => {
      this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(!1);
    }, this.setOptions(s);
  }
  // Returns `true` when it performed a synchronous `scrollTop` write this
  // tick, `false` when the delta was zero or the write was deferred (iOS).
  // `resizeItem` uses that to decide whether the follow-up `notify` must be
  // synchronous so the grown transforms commit in the same paint (#1227).
  applyScrollAdjustment(s, t) {
    return s === 0 ? !1 : (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", s), ft() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += s, !1) : (this._scrollToOffset(this.getScrollOffset(), {
      adjustments: this.scrollAdjustments += s,
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
    const n = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, l = n ? n[0] : this.scrollState.lastTargetOffset, o = 1, i = l !== this.scrollState.lastTargetOffset;
    if (!i && Os(l, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= o) {
        this.getScrollOffset() !== l && this._scrollToOffset(l, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, i) {
      const a = this.getSize() || 600, m = Math.abs(l - this.getScrollOffset()), v = this.scrollState.behavior === "smooth" && m > a;
      this.scrollState.lastTargetOffset = l, v || (this.scrollState.behavior = "auto"), this._scrollToOffset(l, {
        adjustments: void 0,
        behavior: v ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const Mn = (e, s, t, n) => {
  for (; e <= s; ) {
    const l = (e + s) / 2 | 0, o = t(l);
    if (o < n)
      e = l + 1;
    else if (o > n)
      s = l - 1;
    else
      return l;
  }
  return e > 0 ? e - 1 : 0;
};
function Us(e, s, t) {
  let n = 0;
  for (; n <= s; ) {
    const l = (n + s) / 2 | 0, o = e[l * 2];
    if (o < t)
      n = l + 1;
    else if (o > t)
      s = l - 1;
    else
      return l;
  }
  return n > 0 ? n - 1 : 0;
}
function Ws(e, s, t, n, l) {
  const o = e.length - 1;
  if (e.length <= n)
    return { startIndex: 0, endIndex: o };
  if (n === 1 && l !== null) {
    const v = Us(
      l,
      o,
      t
    );
    let r = v;
    const h = t + s;
    for (; r < o && l[r * 2] + l[r * 2 + 1] < h; )
      r++;
    return { startIndex: v, endIndex: r };
  }
  let a = Mn(0, o, (v) => e[v].start, t), m = a;
  if (n === 1)
    for (; m < o && e[m].end < t + s; )
      m++;
  else if (n > 1) {
    const v = Array(n).fill(0);
    for (; m < o && v.some((h) => h < t + s); ) {
      const h = e[m];
      v[h.lane] = h.end, m++;
    }
    const r = Array(n).fill(t + s);
    for (; a >= 0 && r.some((h) => h >= t); ) {
      const h = e[a];
      r[h.lane] = h.start, a--;
    }
    a = Math.max(0, a - a % n), m = Math.min(o, m + (n - 1 - m % n));
  }
  return { startIndex: a, endIndex: m };
}
const pt = typeof document < "u" ? Is : _s;
function Ks({
  useFlushSync: e = !0,
  directDomUpdates: s = !1,
  directDomUpdatesMode: t = "transform",
  ...n
}) {
  const l = Cs((r) => r + 1, 0)[1], o = ws({
    enabled: s,
    mode: t,
    container: null,
    lastSize: null,
    // Keyed by the element itself so a remounted node (same key, new DOM
    // node — e.g. when `enabled` is toggled off then on) is treated as fresh
    // and gets its style written.
    lastPositions: /* @__PURE__ */ new WeakMap(),
    prevRange: null
  });
  o.current.enabled = s, o.current.mode = t;
  const i = (r) => {
    const h = o.current;
    if (!h.enabled || !h.container) return;
    const d = r.getTotalSize();
    if (d !== h.lastSize) {
      h.lastSize = d;
      const k = r.options.horizontal ? "width" : "height";
      h.container.style[k] = `${d}px`;
    }
  }, a = (r) => {
    const h = o.current;
    if (!h.enabled || !h.container) return;
    i(r);
    const d = !!r.options.horizontal, k = h.mode === "transform", b = d ? "left" : "top", M = r.options.scrollMargin, N = r.getVirtualItems();
    for (const T of N) {
      const w = T.start - M, j = r.elementsCache.get(T.key);
      j && h.lastPositions.get(j) !== w && (h.lastPositions.set(j, w), k ? j.style.transform = d ? `translate3d(${w}px, 0, 0)` : `translate3d(0, ${w}px, 0)` : j.style[b] = `${w}px`);
    }
  }, m = {
    ...n,
    onChange: (r, h) => {
      var d;
      const k = o.current;
      let b = !0;
      if (k.enabled) {
        a(r);
        const M = r.range, N = k.prevRange;
        b = !N || N.isScrolling !== r.isScrolling || N.startIndex !== (M == null ? void 0 : M.startIndex) || N.endIndex !== (M == null ? void 0 : M.endIndex), b && (k.prevRange = M ? {
          startIndex: M.startIndex,
          endIndex: M.endIndex,
          isScrolling: r.isScrolling
        } : null);
      }
      b && (e && h ? Ms(l) : l()), (d = n.onChange) == null || d.call(n, r, h);
    }
  }, [v] = Ts(() => {
    const r = new Hs(m);
    return Object.assign(r, {
      containerRef: (h) => {
        const d = o.current;
        if (d.container = h, d.lastSize = null, h && d.enabled) {
          const k = r.getTotalSize();
          d.lastSize = k;
          const b = r.options.horizontal ? "width" : "height";
          h.style[b] = `${k}px`;
        }
      }
    });
  });
  return v.setOptions(m), pt(() => v._didMount(), []), pt(() => (i(v), v._willUpdate())), pt(() => {
    a(v);
  }), v;
}
function Vs(e) {
  return Ks({
    observeElementRect: Ls,
    observeElementOffset: Ds,
    scrollToFn: Bs,
    ...e
  });
}
const tt = window.QwenPaw.host, I = tt.React, { useRef: Xs } = I, { Tag: Ee } = tt.antd, { Text: oe } = tt.antd.Typography, {
  CaretRightOutlined: Gs,
  CloseCircleOutlined: Js,
  FileTextOutlined: Qs,
  RobotOutlined: Ys,
  RocketOutlined: Zs,
  SafetyOutlined: qs,
  SendOutlined: el,
  SettingOutlined: tl,
  ToolOutlined: nl,
  UserOutlined: sl
} = tt.antdIcons, ll = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, ol = {
  user: /* @__PURE__ */ I.createElement(sl, null),
  message: /* @__PURE__ */ I.createElement(Ys, null),
  tool: /* @__PURE__ */ I.createElement(nl, null),
  system: /* @__PURE__ */ I.createElement(tl, null)
}, Wt = {
  approval: { color: "volcano", icon: /* @__PURE__ */ I.createElement(qs, null) },
  receipt: { color: "cyan", icon: /* @__PURE__ */ I.createElement(el, null) },
  spawn: { color: "geekblue", icon: /* @__PURE__ */ I.createElement(Zs, null) },
  header: { color: "green", icon: /* @__PURE__ */ I.createElement(Qs, null) },
  error: { color: "red", icon: /* @__PURE__ */ I.createElement(Js, null) }
}, il = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default"
}, Kt = {
  running: { zh: "进行中", en: "Running" },
  success: { zh: "成功", en: "Success" },
  error: { zh: "错误", en: "Error" },
  cancelled: { zh: "已取消", en: "Cancelled" },
  interrupted: { zh: "已中断", en: "Interrupted" },
  unknown: { zh: "未知", en: "Unknown" }
}, rl = 150, wt = 26, zn = 34, Vt = 9, Xt = 30;
function al(e) {
  const s = Z(), t = Kt[e] ?? Kt.unknown;
  return s === "zh-CN" ? t.zh : t.en;
}
const cl = {
  ImageContent: "image",
  FileContent: "file",
  AudioContent: "audio",
  VideoContent: "video"
};
function ul(e, s) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.inboundParts ?? []) {
    const l = cl[n.type];
    l && t.set(l, (t.get(l) ?? 0) + 1);
  }
  return t.size === 0 ? null : [...t.entries()].map(([n, l]) => `${f(s, n)}×${l}`).join(" ");
}
function dl(e, s) {
  const t = e.receipt, n = t != null && t.channel ? ` · ${t.channel}` : "";
  return `📤 ${f(s, "replySent")}${n} · ${((t == null ? void 0 : t.chars) ?? 0).toLocaleString()} ${f(s, "chars")}`;
}
function Gt({
  record: e,
  selected: s,
  dimmed: t,
  multiRequest: n,
  onSelect: l
}) {
  var a, m;
  const o = e.usage, i = o && (o.input_tokens || o.output_tokens) ? `${G(o.input_tokens)}→${G(
    o.output_tokens
  )}` : null;
  return /* @__PURE__ */ I.createElement(
    "div",
    {
      className: "at-ledger-row",
      "data-kind": e.kind,
      "data-error": e.isError || void 0,
      "data-running": e.running || void 0,
      "data-selected": s || void 0,
      "data-dimmed": t || void 0,
      onClick: l,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: wt,
        cursor: "pointer",
        background: s ? "rgba(22,119,255,0.08)" : void 0,
        opacity: t ? 0.35 : 1
      }
    },
    /* @__PURE__ */ I.createElement(
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
      n && /* @__PURE__ */ I.createElement("span", { style: { opacity: 0.65, marginRight: 3 } }, "R", e.runIndex),
      "#",
      e.index
    ),
    /* @__PURE__ */ I.createElement(
      Ee,
      {
        color: e.kind === "tool" && e.skillName ? "geekblue" : e.markerKind && ((a = Wt[e.markerKind]) == null ? void 0 : a.color) || ll[e.kind] || "default",
        icon: e.markerKind && ((m = Wt[e.markerKind]) == null ? void 0 : m.icon) || ol[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      e.kind === "tool" && e.skillName ? f(Z(), "skillLoadKind") : xn(e, Z())
    ),
    e.kind === "message" && e.model && e.model !== "unknown" ? /* @__PURE__ */ I.createElement(
      Ee,
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
    e.inSkill ? /* @__PURE__ */ I.createElement(
      Ee,
      {
        color: e.inSkillLoaded ? "geekblue" : "orange",
        title: e.inSkillLoaded ? e.inSkill : `${e.inSkill} — ${f(Z(), "skillBypass")}`,
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
    ) : e.guidedSkill ? /* @__PURE__ */ I.createElement(
      Ee,
      {
        title: `${e.guidedSkill} — ${e.guidedReason === "slash" ? f(Z(), "guidedBySlash") : f(Z(), "guidedByLoad")}`,
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0,
          maxWidth: 160,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          color: "#2f54eb",
          background: "rgba(47,84,235,0.06)",
          borderColor: "rgba(47,84,235,0.25)"
        }
      },
      "∈",
      e.guidedSkill
    ) : null,
    e.kind === "user" && e.skillName ? /* @__PURE__ */ I.createElement(
      Ee,
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
    /* @__PURE__ */ I.createElement(
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
      e.receipt ? /* @__PURE__ */ I.createElement(oe, { type: "secondary", style: { fontSize: 12 } }, dl(e, Z())) : e.kind === "tool" && e.skillName ? /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement(oe, { strong: !0, style: { fontSize: 12 } }, e.skillName), e.toolError ? /* @__PURE__ */ I.createElement(oe, { type: "danger", style: { fontSize: 12 } }, ` → ${e.toolError}`) : e.toolOutputChars ? /* @__PURE__ */ I.createElement(oe, { type: "secondary", style: { fontSize: 12 } }, ` · ${f(Z(), "skillLoaded")} ${G(
        e.toolOutputChars
      )} ${f(Z(), "charUnit")}`) : null) : e.kind === "tool" && e.toolName ? /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement(oe, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ I.createElement(oe, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ I.createElement(
        oe,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement(
        oe,
        {
          type: e.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        e.running ? `⏳ ${e.text || "…"}` : e.text || "—"
      ), e.kind === "user" ? /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement(oe, { type: "secondary", style: { fontSize: 11 } }, ` ${ul(e, Z()) ?? ""}`), e.channel && e.channel !== "console" ? /* @__PURE__ */ I.createElement(oe, { code: !0, style: { fontSize: 10 } }, ` @${e.channel}`) : null) : null)
    ),
    /* @__PURE__ */ I.createElement(
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
      i ? /* @__PURE__ */ I.createElement("span", { style: { color: "#1677ff" } }, i) : null,
      i ? " · " : "",
      (e.kind === "message" || e.kind === "tool") && ie(e.timeSeconds)
    )
  );
}
function hl({
  turn: e,
  collapsed: s,
  selected: t,
  cellCount: n,
  onToggle: l,
  onSelect: o
}) {
  const i = Z();
  return /* @__PURE__ */ I.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: zn }
    },
    /* @__PURE__ */ I.createElement(
      "span",
      {
        onClick: (a) => {
          a.stopPropagation(), o();
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
      /* @__PURE__ */ I.createElement(
        Gs,
        {
          onClick: (a) => {
            a.stopPropagation(), l();
          },
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: s ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ I.createElement(oe, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ I.createElement(oe, { type: "secondary", style: { fontSize: 11 } }, ie(e.durationMs / 1e3)),
      /* @__PURE__ */ I.createElement(oe, { type: "secondary", style: { fontSize: 11 } }, n, " ", f(i, "events")),
      e.skillsUsed && e.skillsUsed.length > 0 ? /* @__PURE__ */ I.createElement(
        Ee,
        {
          color: "geekblue",
          title: e.skillsUsed.join(", "),
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        "📚 ",
        e.skillsUsed.slice(0, 2).join(" "),
        e.skillsUsed.length > 2 ? ` +${e.skillsUsed.length - 2}` : ""
      ) : null,
      /* @__PURE__ */ I.createElement(
        Ee,
        {
          color: il[e.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        al(e.status)
      )
    )
  );
}
function ml({
  turns: e,
  selectedIndex: s,
  selectedTurn: t,
  collapsedTurns: n,
  focusIndexes: l,
  searchMatchIndexes: o,
  onSelectedIndexChange: i,
  onSelectedTurnChange: a,
  onToggleTurn: m,
  callsCollapsed: v,
  hasOlderRecords: r,
  loadingOlder: h,
  onLoadOlder: d,
  initialRecord: k,
  emptyText: b
}) {
  const M = Z(), N = Xs(null), T = e.filter((u) => u.turn !== null), w = T.length > 1, j = I.useMemo(() => {
    var g;
    const u = [];
    r && u.push({
      key: "load-older",
      height: Xt,
      type: "load-older"
    }), k && (u.push({
      key: "initial",
      height: wt,
      type: "initial",
      record: k
    }), u.push({
      key: "initial-divider",
      height: Vt,
      type: "divider"
    }));
    for (const S of T) {
      const x = S.turn;
      if (u.push({
        key: `turn-${x}`,
        height: zn,
        type: "boundary",
        turn: S
      }), !n.has(x))
        for (const z of ((g = S.groups[0]) == null ? void 0 : g.cells) ?? [])
          v && z.kind === "tool" || u.push({
            key: `rec-${z.index}`,
            height: wt,
            type: "record",
            record: z
          });
    }
    return u;
  }, [
    T,
    n,
    v,
    r,
    k
  ]), F = I.useCallback(
    (u) => l !== null && !l.has(u.index) || o !== null && !o.has(u.index),
    [l, o]
  ), P = (u) => {
    var g;
    switch (u.type) {
      case "load-older":
        return /* @__PURE__ */ I.createElement("div", { style: { textAlign: "center", height: Xt } }, /* @__PURE__ */ I.createElement(
          "button",
          {
            type: "button",
            onClick: d,
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
          h ? "…" : `⋯ ${f(M, "loadOlder")}`
        ));
      case "divider":
        return /* @__PURE__ */ I.createElement(
          "div",
          {
            style: {
              height: Vt,
              borderBottom: "1px dashed rgba(128,128,128,0.25)"
            }
          }
        );
      case "initial": {
        const S = u.record;
        return /* @__PURE__ */ I.createElement(
          Gt,
          {
            record: S,
            selected: s === S.index,
            dimmed: F(S),
            multiRequest: w,
            onSelect: () => i(S.index)
          }
        );
      }
      case "boundary": {
        const S = u.turn, x = S.turn;
        return /* @__PURE__ */ I.createElement(
          hl,
          {
            turn: S,
            collapsed: n.has(x),
            selected: t === x,
            cellCount: ((g = S.groups[0]) == null ? void 0 : g.cells.length) ?? 0,
            onToggle: () => m(x),
            onSelect: () => a(x)
          }
        );
      }
      case "record":
      default: {
        const S = u.record;
        return /* @__PURE__ */ I.createElement(
          Gt,
          {
            record: S,
            selected: s === S.index,
            dimmed: F(S),
            multiRequest: w,
            onSelect: () => i(S.index)
          }
        );
      }
    }
  };
  if (j.length === 0)
    return /* @__PURE__ */ I.createElement(
      "div",
      {
        style: {
          height: "100%",
          overflowY: "auto",
          padding: "4px 12px 24px"
        }
      },
      /* @__PURE__ */ I.createElement(
        "div",
        {
          style: {
            padding: 24,
            textAlign: "center",
            color: "rgba(128,128,128,1)",
            fontSize: 12
          }
        },
        b ?? f(M, "noSessions")
      )
    );
  const p = j.length <= rl ? /* @__PURE__ */ I.createElement("div", null, j.map((u) => P(u))) : /* @__PURE__ */ I.createElement(
    fl,
    {
      rows: j,
      scrollRef: N,
      renderRow: P
    }
  );
  return /* @__PURE__ */ I.createElement(
    "div",
    {
      ref: N,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    p
  );
}
function fl({
  rows: e,
  scrollRef: s,
  renderRow: t
}) {
  const n = Vs({
    count: e.length,
    getScrollElement: () => s.current,
    estimateSize: (l) => e[l].height,
    overscan: 12
  });
  return /* @__PURE__ */ I.createElement(
    "div",
    {
      style: {
        height: n.getTotalSize(),
        position: "relative",
        width: "100%"
      }
    },
    n.getVirtualItems().map((l) => /* @__PURE__ */ I.createElement(
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
function gt(e) {
  return (e == null ? void 0 : e.data) ?? {};
}
function Jt(e) {
  return !e || typeof e != "object" || Array.isArray(e) ? !1 : Object.values(e).every(
    (s) => typeof s == "number" && Number.isFinite(s)
  );
}
function pl(e) {
  if (!Array.isArray(e) || e.length === 0) return;
  const s = [];
  for (const t of e) {
    if (!t || typeof t != "object") continue;
    const n = t;
    s.push({
      role: typeof n.role == "string" ? n.role : "?",
      chars: typeof n.chars == "number" ? n.chars : 0,
      text: typeof n.text == "string" ? n.text : void 0,
      toolCallId: typeof n.tool_call_id == "string" ? n.tool_call_id : void 0
    });
  }
  return s.length > 0 ? s : void 0;
}
function gl(e) {
  if (!(typeof e != "string" || !e))
    try {
      const s = JSON.parse(e);
      if (typeof s.skill == "string" && s.skill)
        return s.skill;
    } catch {
    }
}
function On(e) {
  return e.replace(/[/\\]+/g, "/").toLowerCase();
}
function yl(e) {
  const s = [];
  for (const t of e.matchAll(/<skill>([\s\S]*?)<\/skill>/g)) {
    const n = t[1].match(/<name>([^<]+)<\/name>/), l = t[1].match(/<dir>([^<]+)<\/dir>/);
    n && l && l[1].trim() && s.push([On(l[1].trim()), n[1].trim()]);
  }
  return s.sort((t, n) => n[0].length - t[0].length), s;
}
function Qt(e) {
  const s = e.match(/<skill>\s*<name>([^<]+)<\/name>/);
  return s ? s[1].trim() : null;
}
function ge(e, s = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > s ? `${t.slice(0, s)}…` : t;
}
function vl(e) {
  var F, P;
  const s = [], t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), i = [];
  let a = "";
  const m = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  let h = [];
  const d = /* @__PURE__ */ new Set(), k = [];
  let b = 0, M = 0;
  const N = (p) => p.groups[0].cells, T = (p, u) => {
    const g = o.get(p);
    g ? g.push(u) : o.set(p, [u]);
  }, w = (p, u) => {
    if (!p)
      if (a)
        p = a;
      else {
        i.push(u);
        return;
      }
    const g = t.get(p);
    if (g)
      u.runIndex = g.turn ?? 0, N(g).push(u);
    else if (a) {
      const S = t.get(a);
      S ? (u.runIndex = S.turn ?? 0, N(S).push(u)) : T(p, u);
    } else
      T(p, u);
  }, j = (p, u) => {
    const g = o.get(u);
    if (g) {
      for (const S of g) N(p).push(S);
      o.delete(u);
    }
  };
  for (const p of e) {
    const u = gt(p);
    switch (p.type) {
      case "run/start": {
        M += 1, k.length = 0, m.set(
          p.run_id,
          typeof u.channel == "string" ? u.channel : ""
        );
        const g = {
          turn: M,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${M}`, cells: [] }]
        };
        t.set(p.run_id, g), s.push(g), a = p.run_id, j(g, p.run_id);
        for (const O of i.splice(0))
          O.runIndex = M, N(g).push(O);
        const S = Array.isArray(u.messages) ? u.messages : [], x = String(u.query ?? "");
        let z = Qt(x);
        !z && S.length > 0 && (z = Qt(String(((F = S[0]) == null ? void 0 : F.text) ?? ""))), z && (d.add(z), k.push([z, "slash"]));
        const W = {
          index: ++b,
          runIndex: M,
          runId: p.run_id,
          kind: "user",
          text: ge(x) || ge((P = S.at(-1)) == null ? void 0 : P.text),
          messages: S,
          timeSeconds: 0,
          startedAt: ae(p.t),
          isError: !1,
          running: !1,
          skillName: z ?? void 0,
          model: void 0
        };
        v.set(p.run_id, W), N(g).push(W);
        break;
      }
      case "run/end": {
        const g = t.get(p.run_id);
        a === p.run_id && (a = ""), k.length = 0, m.delete(p.run_id), v.delete(p.run_id);
        const S = String(u.status ?? "unknown");
        if (g && (g.status = S, g.durationMs = typeof u.duration_ms == "number" ? u.duration_ms : null), S === "error" && u.error) {
          const x = g ?? {
            turn: null,
            status: S,
            durationMs: typeof u.duration_ms == "number" ? u.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          g || s.push(x), x.groups[0].cells.push({
            index: ++b,
            runIndex: M,
            runId: p.run_id,
            kind: "system",
            markerKind: "error",
            text: ge(String(u.error)) || "run failed",
            marker: String(u.error ?? "run failed"),
            timeSeconds: typeof u.duration_ms == "number" ? u.duration_ms / 1e3 : null,
            startedAt: ae(p.t),
            isError: !0,
            running: !1,
            raw: [p]
          });
        }
        break;
      }
      case "agent/spawn": {
        const g = typeof u.child_session_id == "string" ? u.child_session_id : void 0, S = typeof u.child_agent_id == "string" ? u.child_agent_id : "?";
        w(p.run_id, {
          index: ++b,
          runIndex: 0,
          runId: p.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${S} → ${g ?? "?"}`,
          timeSeconds: 0,
          startedAt: ae(p.t),
          isError: !1,
          running: !1,
          spawnSession: g,
          spawnAgent: S,
          raw: [p]
        });
        break;
      }
      case "message/inbound": {
        const g = Array.isArray(u.parts) ? u.parts : [], S = u.channel_meta && typeof u.channel_meta == "object" ? u.channel_meta : void 0, x = g.map((Y) => ({
          type: String(Y.type ?? "?"),
          text: typeof Y.text == "string" ? Y.text : void 0
        })), z = m.get(p.run_id) ?? "", W = S && typeof S.user_id == "string" && S.user_id ? S.user_id : void 0, O = ge(
          x.map((Y) => Y.text ?? "").filter(Boolean).join(`
`)
        ), D = v.get(p.run_id);
        D && !D.inboundParts ? (D.inboundParts = x, D.channel = z || void 0, D.userId = W, D.raw = [
          ...D.raw ?? [],
          p
        ], D.text || (D.text = O)) : w(p.run_id, {
          index: ++b,
          runIndex: 0,
          runId: p.run_id,
          kind: "user",
          text: O || "📥",
          timeSeconds: 0,
          startedAt: ae(p.t),
          isError: !1,
          running: !1,
          channel: z || void 0,
          userId: W,
          inboundParts: x,
          raw: [p]
        });
        break;
      }
      case "message/outbound": {
        const g = typeof u.text == "string" ? u.text : "";
        w(p.run_id, {
          index: ++b,
          runIndex: 0,
          runId: p.run_id,
          kind: "system",
          markerKind: "receipt",
          text: "📤",
          timeSeconds: 0,
          startedAt: ae(p.t),
          isError: !1,
          running: !1,
          outputText: g || void 0,
          receipt: {
            channel: m.get(p.run_id) || void 0,
            chars: g.length
          },
          raw: [p]
        });
        break;
      }
      case "approval/asked": {
        w(p.run_id, {
          index: ++b,
          runIndex: 0,
          runId: p.run_id,
          kind: "system",
          markerKind: "approval",
          text: String(u.tool_name ?? "?"),
          timeSeconds: 0,
          startedAt: ae(p.t),
          isError: !1,
          running: !1,
          raw: [p]
        });
        break;
      }
      case "approval/decided": {
        const g = String(u.decision ?? "?"), S = u.tool_name ? String(u.tool_name) : "";
        w(p.run_id, {
          index: ++b,
          runIndex: 0,
          runId: p.run_id,
          kind: "system",
          markerKind: "approval",
          text: S ? `${S} → ${g}` : g,
          timeSeconds: 0,
          startedAt: ae(p.t),
          isError: g === "denied",
          running: !1,
          raw: [p]
        });
        break;
      }
      case "llm/header": {
        const g = typeof u.sha256 == "string" ? u.sha256 : "", S = typeof u.prev_sha256 == "string" ? u.prev_sha256 : void 0, x = u.reason === "changed" ? "changed" : "initial", z = typeof u.system_prompt == "string" ? u.system_prompt : "", W = Array.isArray(u.tools) ? u.tools : [], O = Array.isArray(u.schemas) ? u.schemas : void 0;
        w(p.run_id, {
          index: ++b,
          runIndex: 0,
          runId: p.run_id,
          kind: "system",
          markerKind: "header",
          text: x === "initial" ? `⚙ ${z ? `System Prompt (${z.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: ae(p.t),
          isError: !1,
          running: !1,
          prompt: z,
          prevPrompt: r.get(S ?? ""),
          headerTools: W,
          headerReason: x,
          sha: g,
          prevSha: S,
          schemas: O,
          raw: [p]
        }), g && r.set(g, z), z && (h = yl(z));
        break;
      }
      case "llm/call": {
        const g = gt(p), S = g.options && typeof g.options == "object" && Object.keys(g.options).length > 0 ? g.options : void 0, x = g.messages_meta, z = x && typeof x == "object" ? {
          count: typeof x.count == "number" ? x.count : 0,
          totalChars: typeof x.total_chars == "number" ? x.total_chars : 0,
          charsByRole: Jt(x.chars_by_role) ? x.chars_by_role : {},
          countByRole: Jt(x.count_by_role) ? x.count_by_role : {},
          maxToolChars: typeof x.max_tool_chars == "number" ? x.max_tool_chars : 0
        } : void 0, W = {
          index: ++b,
          runIndex: 0,
          runId: p.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: ae(p.t),
          isError: !1,
          running: !0,
          model: String(g.model ?? "unknown"),
          provider: typeof g.provider == "string" && g.provider ? g.provider : void 0,
          messagesMeta: z,
          inputNew: pl(g.messages_new),
          contextReset: g.context_reset === !0,
          options: S
        };
        w(p.run_id, W);
        const O = n.get(p.run_id) ?? [];
        O.push({ cell: W, callData: g, call: p }), n.set(p.run_id, O);
        break;
      }
      case "llm/result": {
        const g = n.get(p.run_id), S = g == null ? void 0 : g.shift(), x = (S == null ? void 0 : S.callData) ?? {}, z = typeof u.duration_ms == "number" ? u.duration_ms : null, W = u.usage ?? void 0, O = u.timing, D = Array.isArray(u.tool_calls) ? u.tool_calls : void 0, H = {
          text: (u.error ? ge(String(u.error)) : ge(String(u.text ?? ""))) || (D && D.length > 0 ? `🛠 ${D.map((K) => K.name).join(", ")}` : ""),
          timeSeconds: z === null ? null : z / 1e3,
          isError: !!u.error,
          running: !1,
          outputText: u.text ? String(u.text) : void 0,
          thinkingText: u.thinking ? String(u.thinking) : void 0,
          usage: W,
          timing: O,
          toolCalls: D,
          note: u.note ? String(u.note) : void 0
        };
        S ? (Object.assign(S.cell, H), S.cell.model = String(
          u.model ?? x.model ?? S.cell.model
        ), S.cell.raw = [
          ...S.call ? [S.call] : [],
          p
        ]) : w(p.run_id, {
          index: ++b,
          runIndex: 0,
          runId: p.run_id,
          kind: "message",
          startedAt: ae(p.t),
          model: String(u.model ?? x.model ?? "unknown"),
          ...H
        });
        break;
      }
      case "tool/call": {
        const g = gt(p), S = String(g.name ?? "?"), x = S === "Skill" ? gl(g.input) : void 0;
        x && (d.add(x), k.push([x, "load"]));
        const z = g.input ? String(g.input) : void 0;
        let W;
        if (!x && z && h.length > 0) {
          const H = On(z);
          for (const [K, Se] of h)
            if (H.includes(K)) {
              W = Se;
              break;
            }
        }
        let O, D;
        if (!x && !W && k.length > 0) {
          const [H, K] = k[k.length - 1];
          O = H, D = K;
        }
        const Y = {
          index: ++b,
          runIndex: 0,
          runId: p.run_id,
          kind: "tool",
          text: x ? `📚 ${x}` : `${S}(${ge(String(g.input ?? ""), 60)})`,
          timeSeconds: null,
          startedAt: ae(p.t),
          isError: !1,
          running: !0,
          toolName: S,
          skillName: x,
          inSkill: W,
          inSkillLoaded: W ? d.has(W) : void 0,
          guidedSkill: O,
          guidedReason: D,
          toolInput: g.input ? String(g.input) : void 0
        };
        w(p.run_id, Y);
        const de = l.get(p.run_id) ?? [];
        de.push({ cell: Y, callData: g, call: p }), l.set(p.run_id, de);
        break;
      }
      case "tool/result": {
        const g = l.get(p.run_id), S = typeof u.tool_call_id == "string" ? u.tool_call_id : null;
        let x;
        if (g) {
          const de = S ? g.findIndex(
            (H) => H.callData.tool_call_id === S
          ) : -1;
          de >= 0 ? x = g.splice(de, 1)[0] : x = g.shift();
        }
        const z = typeof u.duration_ms == "number" ? u.duration_ms : null, W = u.ok !== !1 && !u.error, O = u.output ? String(u.output) : void 0, D = O ? ` → ${ge(O, 60)}` : "", Y = {
          timeSeconds: z === null ? null : z / 1e3,
          isError: !W,
          running: !1,
          toolOutput: O,
          toolOutputChars: typeof u.output_chars == "number" ? u.output_chars : void 0,
          toolOutputBytes: typeof u.output_bytes == "number" ? u.output_bytes : void 0,
          toolError: u.error ? String(u.error) : void 0,
          note: u.note ? String(u.note) : void 0
        };
        x ? (Object.assign(x.cell, Y), x.cell.skillName || (x.cell.text = `${x.cell.text}${D}`), x.cell.raw = [
          ...x.call ? [x.call] : [],
          p
        ]) : w(p.run_id, {
          index: ++b,
          runIndex: 0,
          runId: p.run_id,
          kind: "tool",
          text: `?${D}`,
          startedAt: ae(p.t),
          ...Y
        });
        break;
      }
    }
  }
  for (const [p, u] of o) {
    const g = t.get(p);
    if (g) {
      for (const S of u) N(g).push(S);
      o.delete(p);
    }
  }
  for (const p of s) {
    const u = [];
    for (const g of p.groups)
      for (const S of g.cells)
        S.skillName && !u.includes(S.skillName) && u.push(S.skillName);
    u.length > 0 && (p.skillsUsed = u);
  }
  return s;
}
function Yt(e) {
  return e.flatMap((s) => s.groups.flatMap((t) => t.cells));
}
function Sl(e) {
  var i;
  if (e.length === 0) return { initial: null, turns: [...e] };
  const s = e[0], t = ((i = s.groups[0]) == null ? void 0 : i.cells) ?? [], n = t.findIndex(
    (a) => a.kind === "system" && a.headerReason === "initial" && a.prompt !== void 0
  );
  if (n < 0) return { initial: null, turns: [...e] };
  const l = t[n], o = {
    ...s,
    groups: [
      {
        ...s.groups[0],
        cells: t.filter((a, m) => m !== n)
      }
    ]
  };
  return { initial: l, turns: [o, ...e.slice(1)] };
}
const se = {
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
}, Zt = "agent-trace-timeline-styles", El = `
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
let yt = !1;
function bl() {
  if (yt || typeof document > "u") return;
  if (document.getElementById(Zt)) {
    yt = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = Zt, e.textContent = El, document.head.appendChild(e), yt = !0;
}
function vt(e) {
  return os(e);
}
function $n(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function qt(e) {
  return e != null && Number.isFinite(e);
}
function xl(e) {
  if (!qt(e.startedAt)) return null;
  const s = qt(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + s };
}
function Rn(e, s = "sequence") {
  if (s !== "sequence")
    return kl(
      e,
      s === "duration" || s === "actual",
      s === "duration"
    );
  const t = [], n = [];
  for (const l of e) {
    const o = l.groups.flatMap((i) => i.cells);
    o.length !== 0 && (l.turn !== null && n.push({
      turn: l.turn,
      time: t.length
    }), t.push(
      ...o.map(
        (i, a) => ({
          start: t.length + a,
          end: t.length + a + 1,
          index: i.index,
          isError: i.isError === !0,
          kind: i.kind,
          label: i.text,
          lane: $n(i.kind)
        })
      )
    ));
  }
  return t.length === 0 ? null : {
    start: 0,
    end: t.length,
    spans: t,
    turnBoundaries: n
  };
}
function kl(e, s, t) {
  const n = e.flatMap((r) => {
    const h = r.groups.flatMap(
      (d) => d.cells.flatMap((k) => {
        const b = xl(k);
        return b === null ? [] : [
          {
            ...b,
            index: k.index,
            isError: k.isError === !0,
            kind: k.kind,
            label: k.text,
            lane: $n(k.kind)
          }
        ];
      })
    );
    return h.length === 0 ? [] : [{ turn: r.turn, rawSpans: h }];
  }), l = n.flatMap((r) => r.rawSpans);
  if (l.length === 0) return null;
  const o = /* @__PURE__ */ new Map();
  let i = 0, a = null;
  for (const r of [...l].sort(
    (h, d) => h.start - d.start || h.end - d.end
  ))
    t && a !== null && r.start > a && (i += r.start - a), o.set(r, i), a = a === null ? r.end : Math.max(a, r.end);
  const m = [], v = [];
  for (const r of n) {
    const h = r.rawSpans.map((d) => {
      const k = o.get(d) ?? 0;
      return {
        ...d,
        start: d.start - k,
        end: (s ? d.end : d.start) - k
      };
    });
    m.push(...h), r.turn !== null && v.push({
      turn: r.turn,
      time: Math.min(...h.map((d) => d.start))
    });
  }
  return {
    start: Math.min(...m.map((r) => r.start)),
    end: Math.max(...m.map((r) => r.end)),
    spans: m,
    turnBoundaries: v
  };
}
function wl(e, s, t = "sequence") {
  const n = Rn(e, t);
  return new Set(
    n == null ? void 0 : n.spans.filter((l) => l.start <= s.end && l.end >= s.start).map((l) => l.index)
  );
}
bl();
const qe = window.QwenPaw.host, U = qe.React, { useEffect: Ve, useMemo: en, useRef: Xe, useState: Me } = U, { Tooltip: Tl } = qe.antd, St = 3, _l = 4, Il = 0.08, Cl = 0.025, Ml = 32, zl = 0.5;
function Ol(e) {
  const s = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, n = e.timing, l = n && Number.isFinite(n.ttft_ms) ? n.ttft_ms : void 0, o = n && Number.isFinite(n.decode_ms) ? n.decode_ms : void 0;
  return {
    ...s === void 0 ? {} : { durationMs: s },
    ...t === void 0 ? {} : { startedAt: t },
    ...l === void 0 || o === void 0 ? {} : { ttftMs: l, decodingMs: o }
  };
}
function $l(e) {
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
function Rl(e, s) {
  const t = $l(e);
  if (s === void 0) return t;
  const n = s.durationMs === void 0 ? null : `Total ${vt(s.durationMs)}`, l = s.startedAt === void 0 ? null : s.durationMs === void 0 ? `Started ${Fe(s.startedAt)}` : `${Fe(s.startedAt)} → ${Fe(
    s.startedAt + s.durationMs
  )}`, o = s.ttftMs === void 0 || s.decodingMs === void 0 ? null : `TTFT ${vt(
    s.ttftMs
  )} · Decoding ${vt(s.decodingMs)}`, i = [n, o].filter((a) => a !== null).join(" · ");
  return [t, l, i].filter((a) => a !== null && a !== "").join(`
`);
}
function Tt(e, s) {
  return e <= s ? { start: e, end: s } : { start: s, end: e };
}
function Et(e) {
  return Math.min(1, Math.max(0, e));
}
function Al(e, s, t, n) {
  const l = Math.min(n - t, Math.max(0, s)), o = Math.min(
    Math.max(e - l / 2, t),
    n - l
  );
  return { start: o, end: o + l };
}
function tn(e, s, t, n, l) {
  const o = Tt(
    Math.min(l, Math.max(n, e.start)),
    Math.min(l, Math.max(n, e.end))
  );
  return {
    start: (o.start - s) / t,
    end: (o.end - s) / t
  };
}
function An({
  label: e,
  placement: s,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ U.createElement(
    Tl,
    {
      title: /* @__PURE__ */ U.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: s,
      mouseEnterDelay: zl,
      ...n
    },
    t
  );
}
function nn() {
  return /* @__PURE__ */ U.createElement("div", { className: se.labels, "aria-hidden": "true" }, /* @__PURE__ */ U.createElement("span", null, "Input"), /* @__PURE__ */ U.createElement("span", null, "Model"), /* @__PURE__ */ U.createElement("span", null, "Tools"));
}
function sn({
  loading: e,
  onHover: s,
  onLoad: t
}) {
  return /* @__PURE__ */ U.createElement(
    An,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ U.createElement(
      "button",
      {
        type: "button",
        className: se.earlierHistory,
        "data-earlier-history": !0,
        "data-loading": e || void 0,
        "aria-label": e ? "Loading earlier history" : "Load earlier history",
        "aria-disabled": e || t === void 0,
        onClick: t,
        onPointerEnter: (n) => {
          n.stopPropagation(), s();
        },
        onPointerMove: (n) => {
          n.stopPropagation();
        },
        onPointerDown: (n) => {
          n.stopPropagation();
        }
      },
      "…"
    )
  );
}
const Ll = U.memo(function({
  turns: s,
  mode: t,
  range: n,
  hasEarlierRecords: l = !1,
  onLoadEarlier: o,
  selectedIndex: i = null,
  searchMatchIndexes: a = null,
  onRangeChange: m,
  onRecordSelect: v,
  onRecordFocus: r
}) {
  const h = typeof qe.useTheme == "function" ? qe.useTheme() : void 0, d = en(
    () => Rn(s, t),
    [t, s]
  ), k = en(
    () => new Map(
      s.flatMap(
        (E) => E.groups.flatMap(
          (y) => y.cells.map(
            (_) => [_.index, Ol(_)]
          )
        )
      )
    ),
    [s]
  ), b = Xe(null), M = Xe(null), N = Xe(null), T = Xe(null), [w, j] = Me(null), [F, P] = Me(null), [p, u] = Me(!1), [g, S] = Me(!1), [x, z] = Me(null), [W, O] = Me(!1);
  Ve(() => {
    d !== null && n !== null && (n.end < d.start || n.start > d.end) && m(null);
  }, [d, m, n]), Ve(() => {
    d !== null && (O(!1), z(
      (E) => E !== null && (E.end < d.start || E.start > d.end) ? null : E
    ));
  }, [d]), Ve(() => {
    if (d === null || i === null) return;
    const E = d.spans.find(
      (y) => y.index === i
    );
    E !== void 0 && (O(!0), z((y) => {
      if (y === null || E.end > y.start && E.start < y.end)
        return y;
      const _ = Math.max(1, y.end - y.start), C = E.end <= y.start ? E.start : E.end - _, B = Math.min(
        Math.max(C, d.start),
        Math.max(d.start, d.end - _)
      );
      return B === y.start ? y : { start: B, end: B + _ };
    }));
  }, [d, i]);
  const D = Math.max(1, ((d == null ? void 0 : d.end) ?? 0) - ((d == null ? void 0 : d.start) ?? 0)), Y = Math.min(
    D,
    Math.max(1, ((x == null ? void 0 : x.end) ?? 0) - ((x == null ? void 0 : x.start) ?? 0))
  ), de = d === null || x === null ? (d == null ? void 0 : d.start) ?? 0 : Math.min(
    Math.max(x.start, d.start),
    d.end - Y
  ), H = x === null ? D : Y, K = x === null ? (d == null ? void 0 : d.start) ?? 0 : de, Se = l && d !== null && K === d.start, Oe = o === void 0 || p ? void 0 : () => {
    u(!0), o().finally(() => {
      u(!1);
    });
  }, he = d === null ? void 0 : {
    "--trajectory-domain-left": `${-(K - d.start) / H * 100}%`,
    "--trajectory-domain-width": `${D / H * 100}%`
  }, Q = d === null || n === null ? null : tn(
    n,
    K,
    H,
    d.start,
    d.end
  ), me = (d === null || w === null ? null : tn(
    w,
    K,
    H,
    d.start,
    d.end
  )) ?? Q, Re = w ?? n;
  if (Ve(() => {
    const E = N.current;
    if (E === null) return;
    const y = (_) => {
      _.preventDefault();
      const C = T.current;
      if (C === null || d === null) return;
      O(!1);
      const B = C.getBoundingClientRect(), V = Et(
        (_.clientX - B.left) / Math.max(1, B.width)
      ), ee = Math.min(
        D,
        Math.max(
          Math.min(
            t === "sequence" ? _l : 20,
            D
          ),
          H * Math.exp(_.deltaY * 15e-4)
        )
      );
      if (ee >= D * 0.999) {
        z(null);
        return;
      }
      const J = K + V * H, ne = Math.min(
        Math.max(J - V * ee, d.start),
        d.end - ee
      );
      z({ start: ne, end: ne + ee });
    };
    return E.addEventListener("wheel", y, { passive: !1 }), () => {
      E.removeEventListener("wheel", y);
    };
  }, [H, K, D, t, d]), d === null)
    return /* @__PURE__ */ U.createElement(
      "section",
      {
        ref: N,
        className: se.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ U.createElement("div", { className: se.plot }, /* @__PURE__ */ U.createElement(nn, null), /* @__PURE__ */ U.createElement("div", { className: se.track }, /* @__PURE__ */ U.createElement("span", { className: se.empty }, "No timing data"), l && /* @__PURE__ */ U.createElement(
        sn,
        {
          loading: p,
          onHover: () => {
            P(null);
          },
          onLoad: Oe
        }
      )))
    );
  const Ae = Math.min(
    H,
    D / d.spans.length
  ), ke = (E) => {
    const y = E.currentTarget.getBoundingClientRect();
    return Et((E.clientX - y.left) / Math.max(1, y.width));
  }, we = (E) => {
    var B;
    const y = E.target instanceof HTMLElement ? E.target : null, _ = (B = y == null ? void 0 : y.closest("[data-timeline-record-index]")) == null ? void 0 : B.dataset.timelineRecordIndex;
    if (_ === void 0) return null;
    const C = Number(_);
    return Number.isFinite(C) ? C : null;
  }, He = (E) => {
    m(E);
  }, Ue = (E) => {
    if (E.button === 2) {
      M.current = {
        anchorClientX: E.clientX,
        anchorStart: K,
        moved: !1,
        pannable: x !== null,
        pointerId: E.pointerId
      }, x !== null && O(!1), S(!0), typeof E.currentTarget.setPointerCapture == "function" && E.currentTarget.setPointerCapture(E.pointerId);
      return;
    }
    if (E.button !== 0) return;
    const y = ke(E), _ = K + y * H, C = we(E);
    P({ fraction: y, recordIndex: C }), b.current = {
      pointerId: E.pointerId,
      anchorTime: _,
      anchorClientX: E.clientX,
      recordIndex: C
    }, typeof E.currentTarget.setPointerCapture == "function" && E.currentTarget.setPointerCapture(E.pointerId), j({ start: _, end: _ });
  }, st = (E) => {
    const y = E.currentTarget.getBoundingClientRect(), _ = ke(E);
    P({ fraction: _, recordIndex: we(E) });
    const C = M.current;
    if (C !== null && C.pointerId === E.pointerId) {
      if (Math.abs(E.clientX - C.anchorClientX) >= St && (C.moved = !0), !C.pannable) return;
      const J = (E.clientX - C.anchorClientX) / Math.max(1, y.width), ne = Math.min(
        Math.max(C.anchorStart - J * H, d.start),
        d.end - H
      );
      z({ start: ne, end: ne + H });
      return;
    }
    const B = b.current;
    if (B === null || B.pointerId !== E.pointerId) return;
    let V = K;
    if (x !== null) {
      const J = E.clientX - y.left, ne = Math.min(
        Ml,
        Math.max(1, y.width * Il)
      ), q = J < ne ? -1 : J > y.width - ne ? 1 : 0;
      if (q !== 0) {
        const Te = q < 0 ? ne - J : J - (y.width - ne), fe = Et(Te / ne), re = K + q * H * Cl * Math.max(0.2, fe);
        V = Math.min(
          Math.max(re, d.start),
          d.end - H
        ), V !== K && (O(!1), z({
          start: V,
          end: V + H
        }));
      }
    }
    const ee = V + _ * H;
    j(Tt(B.anchorTime, ee));
  }, lt = (E) => {
    const y = M.current;
    if (y !== null && y.pointerId === E.pointerId) {
      const q = y.moved || Math.abs(E.clientX - y.anchorClientX) >= St;
      M.current = null, S(!1), q || m(null);
      return;
    }
    const _ = b.current;
    if (_ === null || _.pointerId !== E.pointerId) return;
    const C = ke(E), B = K + C * H, V = Tt(_.anchorTime, B);
    P({ fraction: C, recordIndex: we(E) }), b.current = null, j(null);
    const ee = Math.abs(E.clientX - _.anchorClientX) < St, J = ee && _.recordIndex !== null ? d.spans.find((q) => q.index === _.recordIndex) : void 0;
    if (J !== void 0) {
      m(null), v == null || v(J.index);
      return;
    }
    const ne = V.end - V.start < Ae ? Al(
      ee ? V.start : (V.start + V.end) / 2,
      Ae,
      d.start,
      d.end
    ) : V;
    if (He(ne), ee) {
      const q = V.start, Te = d.spans.reduce((fe, re) => {
        const Le = q < fe.start ? fe.start - q : q > fe.end ? q - fe.end : 0;
        return (q < re.start ? re.start - q : q > re.end ? q - re.end : 0) < Le ? re : fe;
      });
      r == null || r(Te.index);
    }
  }, ot = (E) => {
    E.key !== "Escape" || n === null || (E.preventDefault(), m(null));
  }, We = () => {
    b.current = null, M.current = null, j(null), P(null), S(!1);
  };
  return /* @__PURE__ */ U.createElement(
    "section",
    {
      ref: N,
      className: se.root,
      "data-theme": h || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ U.createElement("div", { className: se.plot }, /* @__PURE__ */ U.createElement(nn, null), /* @__PURE__ */ U.createElement(
      "div",
      {
        ref: T,
        className: se.track,
        "data-panning": g || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: ot,
        onPointerDown: Ue,
        onPointerMove: st,
        onPointerUp: lt,
        onPointerCancel: We,
        onPointerLeave: () => {
          b.current === null && M.current === null && P(null);
        },
        onDoubleClick: (E) => {
          E.preventDefault(), m(null);
        },
        onContextMenu: (E) => {
          E.preventDefault();
        }
      },
      Se && /* @__PURE__ */ U.createElement(
        sn,
        {
          loading: p,
          onHover: () => {
            P(null);
          },
          onLoad: Oe
        }
      ),
      F !== null && F.recordIndex === null && w === null && /* @__PURE__ */ U.createElement(
        "div",
        {
          className: se.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${F.fraction * 100}%`
          }
        }
      ),
      me !== null && /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement(
        "div",
        {
          className: se.selection,
          "data-dragging": w === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${me.start * 100}%`,
            "--trajectory-selection-width": `${(me.end - me.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ U.createElement(
        "div",
        {
          className: se.selectionEdges,
          "data-dragging": w === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${me.start * 100}%`,
            "--trajectory-selection-width": `${(me.end - me.start) * 100}%`
          }
        }
      )),
      /* @__PURE__ */ U.createElement(
        "div",
        {
          className: se.turnBoundaries,
          "data-animate-viewport": W || void 0,
          "aria-hidden": "true",
          style: he
        },
        d.turnBoundaries.filter(
          (E) => E.time > d.start && E.time >= K && E.time <= K + H
        ).map((E) => /* @__PURE__ */ U.createElement(
          "span",
          {
            className: se.turnBoundary,
            "data-turn": E.turn,
            key: E.turn,
            style: {
              "--trajectory-turn-left": `${(E.time - d.start) / D * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ U.createElement(
        "div",
        {
          className: se.lanes,
          "data-animate-viewport": W || void 0,
          "data-timeline-domain": !0,
          style: he
        },
        d.spans.filter(
          (E) => E.index === i || E.end >= K && E.start <= K + H
        ).map((E) => {
          const y = (E.start - d.start) / D, C = (E.end - E.start) / D * 100, B = k.get(E.index), V = B == null ? void 0 : B.ttftMs, ee = B == null ? void 0 : B.decodingMs, J = V === void 0 || ee === void 0 || V + ee <= 0 ? null : V / (V + ee);
          return /* @__PURE__ */ U.createElement(
            An,
            {
              key: E.index,
              label: Rl(E.kind, B),
              placement: "bottom"
            },
            /* @__PURE__ */ U.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: se.span,
                "data-timeline-span": E.kind,
                "data-timeline-record-index": E.index,
                "data-assistant-timing": J === null ? void 0 : "true",
                "data-error": E.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": E.index === i || void 0,
                "data-hovered": (F == null ? void 0 : F.recordIndex) === E.index || void 0,
                "data-search-match": a === null ? void 0 : a.has(E.index) ? "true" : "false",
                "data-selected": Re === null ? void 0 : E.start <= Re.end && E.end >= Re.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${y * 100}%`,
                  "--trajectory-span-width": `${C}%`,
                  "--trajectory-span-gap": `min(${C * 0.08}%, 1px)`,
                  "--trajectory-span-lane": E.lane,
                  ...J === null ? {} : {
                    "--trajectory-assistant-ttft": `${J * 100}%`
                  }
                }
              }
            )
          );
        })
      )
    ))
  );
}), Mt = window.QwenPaw.host, ce = Mt.React, { Button: Nl, Input: jl, Segmented: Dl, Tooltip: ln } = Mt.antd, { MenuFoldOutlined: Pl, MenuUnfoldOutlined: Fl, ReloadOutlined: Bl, SearchOutlined: Hl } = Mt.antdIcons;
function Ul({
  mode: e,
  onModeChange: s,
  search: t,
  onSearchChange: n,
  onRefresh: l,
  modeOptions: o,
  allCollapsed: i,
  hasRequests: a,
  onToggleCollapseAll: m,
  callsCollapsed: v,
  onToggleCallsCollapsed: r
}) {
  const h = Z();
  return /* @__PURE__ */ ce.createElement(
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
    /* @__PURE__ */ ce.createElement(ln, { title: f(h, "projectionHint") }, /* @__PURE__ */ ce.createElement(
      Dl,
      {
        size: "small",
        value: e,
        options: o,
        onChange: (d) => s(d)
      }
    )),
    /* @__PURE__ */ ce.createElement(
      jl,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ ce.createElement(Hl, null),
        placeholder: f(h, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (d) => n(d.target.value)
      }
    ),
    a && /* @__PURE__ */ ce.createElement(
      ln,
      {
        title: i ? f(h, "expandAll") : f(h, "collapseAll")
      },
      /* @__PURE__ */ ce.createElement(
        Nl,
        {
          size: "small",
          type: "text",
          icon: i ? /* @__PURE__ */ ce.createElement(Fl, null) : /* @__PURE__ */ ce.createElement(Pl, null),
          onClick: m
        }
      )
    ),
    /* @__PURE__ */ ce.createElement("span", { style: { marginLeft: "auto" } }, /* @__PURE__ */ ce.createElement(
      "a",
      {
        onClick: l,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ ce.createElement(Bl, null),
      " ",
      f(h, "refresh")
    ))
  );
}
const nt = window.QwenPaw.host, R = nt.React, { useCallback: on, useEffect: bt, useMemo: pe, useRef: Wl, useState: le } = R, {
  Button: Ge,
  Empty: rn,
  Popconfirm: Kl,
  Popover: Vl,
  Space: Xl,
  Spin: Ln,
  Switch: Gl,
  Tag: Jl,
  Tooltip: Ql,
  message: Pe
} = nt.antd, { DeleteOutlined: Yl, DownloadOutlined: Zl, SettingOutlined: an } = nt.antdIcons, { Text: ve } = nt.antd.Typography;
function cn({
  config: e,
  onChange: s,
  children: t
}) {
  const n = Z(), l = (i, a, m) => /* @__PURE__ */ R.createElement(
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
    /* @__PURE__ */ R.createElement(ve, { style: { fontSize: 13 } }, i),
    /* @__PURE__ */ R.createElement(
      Gl,
      {
        size: "small",
        checked: !!a,
        onChange: (v) => s({ [m]: v })
      }
    )
  ), o = /* @__PURE__ */ R.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ R.createElement(ve, { strong: !0, style: { fontSize: 13 } }, f(n, "settings")), /* @__PURE__ */ R.createElement("div", { style: { marginTop: 8 } }, e ? [
    l(f(n, "enabled"), e.enabled, "enabled"),
    l(f(n, "captureLlm"), e.capture_llm, "capture_llm"),
    l(
      f(n, "captureTools"),
      e.capture_tools,
      "capture_tools"
    ),
    l(
      f(n, "captureHeaders"),
      e.capture_headers ?? !0,
      "capture_headers"
    )
  ] : /* @__PURE__ */ R.createElement(Ln, { size: "small" })));
  return /* @__PURE__ */ R.createElement(Vl, { content: o, trigger: "click", placement: "bottomRight" }, t);
}
function ql({
  sessionId: e,
  summary: s,
  locale: t,
  onJumpSession: n,
  onRefreshSessions: l
}) {
  const [o, i] = le(null), [a, m] = le(!1), [v, r] = le(!1), [h, d] = le(""), [k, b] = le("sequence"), [M, N] = le(null), [T, w] = le(null), [j, F] = le(null), [P, p] = le(
    /* @__PURE__ */ new Set()
  ), [u, g] = le(!1), [S, x] = le(null), [z, W] = le(null), [O, D] = le(null), [Y, de] = le(null), H = Wl(null);
  H.current = e, bt(() => {
    Un().then(x).catch(() => x(null));
  }, []);
  const K = on(async (y, _) => {
    _ || m(!0);
    try {
      const C = await Hn(y, {
        beforeSeq: _,
        limit: 200
      });
      de(null), i((B) => _ && B ? {
        ...C,
        events: [...C.events, ...B.events]
      } : C);
    } catch (C) {
      de({
        message: String(C.message),
        status: C instanceof En ? C.status : null
      });
    } finally {
      _ || m(!1);
    }
  }, []), Se = on(async (y) => {
    try {
      const _ = await Bn(y);
      D(_), W({
        sessionId: y,
        inputTokens: _.input_tokens,
        outputTokens: _.output_tokens,
        totalTokens: _.total_tokens,
        reasoningTokens: Number(_.reasoning_tokens ?? 0)
      });
    } catch {
      D(null), W(null);
    }
  }, []);
  bt(() => {
    e ? (N(null), w(null), F(null), p(/* @__PURE__ */ new Set()), d(""), K(e), Se(e)) : (i(null), D(null), W(null));
  }, [e, K, Se]);
  const Oe = pe(
    () => o ? vl(o.events) : [],
    [o]
  ), { initial: he, turns: Q } = pe(
    () => Sl(Oe),
    [Oe]
  ), $e = pe(
    () => he ? [he, ...Yt(Q)] : Yt(Q),
    [he, Q]
  ), me = pe(
    () => Q.some((y) => y.status === "running"),
    [Q]
  );
  bt(() => {
    if (!e || !me) return;
    const y = setInterval(() => {
      document.visibilityState === "visible" && H.current && K(H.current);
    }, 5e3);
    return () => clearInterval(y);
  }, [e, me, K]);
  const Re = pe(
    () => M === null ? null : wl(Q, M, k),
    [M, Q, k]
  ), Ae = pe(() => {
    const y = h.trim().toLowerCase();
    return y ? new Set(
      $e.filter(
        (_) => [
          _.text,
          _.outputText,
          _.thinkingText,
          _.toolName,
          _.toolInput,
          _.toolOutput,
          _.model
        ].filter(Boolean).join(`
`).toLowerCase().includes(y)
      ).map((_) => _.index)
    ) : null;
  }, [h, $e]), ke = pe(
    () => T === null ? null : $e.find((y) => y.index === T) ?? null,
    [$e, T]
  ), we = pe(() => {
    var Rt, At;
    if (j === null) return null;
    const y = Q.find((A) => A.turn === j);
    if (!y) return null;
    const _ = ((Rt = y.groups[0]) == null ? void 0 : Rt.cells) ?? [], C = _.filter((A) => A.kind === "message"), B = _.filter((A) => A.kind === "tool"), V = [
      ...new Set(
        C.map((A) => A.model).filter((A) => !!A)
      )
    ], ee = [
      ...new Set(
        C.map((A) => A.provider).filter((A) => !!A)
      )
    ];
    let J = 0, ne = 0, q = 0, Te = 0, fe = 0, re = null, Le = 0;
    const it = [];
    for (const A of _)
      A.usage && (J += A.usage.input_tokens ?? 0, ne += A.usage.output_tokens ?? 0, q += A.usage.cache_input_tokens ?? 0, Te += A.usage.cache_creation_input_tokens ?? 0, fe += A.usage.reasoning_tokens ?? 0), A.timing && (re = re === null ? A.timing.ttft_ms : Math.min(re, A.timing.ttft_ms), Le = (Le ?? 0) + A.timing.decode_ms), A.isError && it.push(A.toolError ?? A.text ?? "error");
    const _e = _.find((A) => A.kind === "user"), Nn = (At = [...C].reverse().find((A) => A.options)) == null ? void 0 : At.options, rt = [...C].reverse().find((A) => A.outputText);
    let zt;
    const Ot = C.filter((A) => A.messagesMeta);
    if (Ot.length > 0) {
      const A = {};
      let Ie = 0, ct = 0;
      for (const Dn of Ot) {
        const ut = Dn.messagesMeta;
        for (const [Lt, Pn] of Object.entries(ut.charsByRole))
          A[Lt] = (A[Lt] ?? 0) + Pn;
        Ie += ut.totalChars, ct = Math.max(ct, ut.maxToolChars);
      }
      zt = { charsByRole: A, totalChars: Ie, maxToolChars: ct };
    }
    const at = Q.findIndex((A) => A.turn === j), $t = at > 0 ? Q[at - 1] : null;
    let Ne = null;
    if ($t) {
      Ne = 0;
      for (const A of $t.groups)
        for (const Ie of A.cells)
          Ie.kind === "message" && Ie.usage && (Ne += Ie.usage.input_tokens ?? 0);
    }
    const jn = Ne === null && at !== 0 ? void 0 : {
      prevInputTokens: Ne,
      deltaTokens: J - (Ne ?? 0)
    };
    return {
      turn: j,
      status: y.status,
      durationMs: y.durationMs,
      startedAt: (_e == null ? void 0 : _e.startedAt) ?? null,
      query: (_e == null ? void 0 : _e.text) ?? "",
      llmCalls: C.length,
      toolCalls: B.length,
      models: V,
      providers: ee,
      inputTokens: J,
      outputTokens: ne,
      cacheReadTokens: q,
      cacheWriteTokens: Te,
      reasoningTokens: fe,
      inputComposition: zt,
      growth: jn,
      resultIndex: rt == null ? void 0 : rt.index,
      ttftMs: re,
      decodeMs: Le,
      errors: it,
      options: Nn,
      sessionTotals: z && z.sessionId === e ? {
        inputTokens: z.inputTokens,
        outputTokens: z.outputTokens,
        totalTokens: z.totalTokens,
        reasoningTokens: z.reasoningTokens
      } : void 0
    };
  }, [j, Q, z, e]), He = !!(o && o.events.length > 0 && o.events[0].seq > 1), Ue = async (y) => {
    try {
      x(await Wn(y));
    } catch (_) {
      Pe.error(String(_.message));
    }
  }, st = pe(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), lt = pe(() => {
    if (!O) return null;
    const y = [
      `${O.runs} ${f(t, "statRounds")} · ${O.llm_calls} ${f(t, "statSteps")}`,
      `LLM ${ie(O.llm_ms_total / 1e3)} · ${f(
        t,
        "toolCalls"
      )} ${ie(O.tool_ms_total / 1e3)}`,
      `${f(t, "statTtftAvg")} ${O.ttft_ms_avg === null ? "-" : ie(O.ttft_ms_avg / 1e3)} · ${It(
        O.output_tokens,
        O.decode_ms_total / 1e3
      )}`
    ];
    if (O.cache_read_tokens > 0 || O.cache_write_tokens > 0) {
      const _ = O.cache_read_tokens + O.input_tokens, C = _ > 0 ? Math.round(O.cache_read_tokens / _ * 100) : 0;
      y.push(`${f(t, "statCacheHit")} ${C}%`);
    }
    if (y.push(
      `${f(t, "statInput")} ${G(
        O.input_tokens
      )} tok · ${f(t, "statOutput")} ${G(
        O.output_tokens
      )} tok`
    ), s && y.push(kt(s.size_bytes)), O.skills) {
      const _ = Object.entries(O.skills).sort((C, B) => B[1] - C[1]).map(([C, B]) => `${C} ×${B}`).join(" · ");
      _ && y.push(`📚 ${_}`);
    }
    if (he != null && he.prompt) {
      const _ = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set();
      for (const V of Q)
        for (const ee of V.groups)
          for (const J of ee.cells)
            J.skillName ? C.add(J.skillName) : J.inSkill && _.add(J.inSkill);
      const B = [..._].filter((V) => !C.has(V));
      B.length > 0 && y.push(
        `⚡ ${f(t, "skillBypassStrip")}: ${B.join(" · ")}`
      );
    }
    return y.join(" | ");
  }, [O, s, t, Q, he]), ot = () => {
    w(null), F(null);
  }, We = (Y == null ? void 0 : Y.status) === 404, E = ke !== null || we !== null;
  return /* @__PURE__ */ R.createElement(
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
    /* @__PURE__ */ R.createElement(
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
      e ? /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            minWidth: 0
          }
        },
        /* @__PURE__ */ R.createElement(
          ve,
          {
            strong: !0,
            ellipsis: {
              tooltip: (s == null ? void 0 : s.title) || e
            },
            style: { fontSize: 13, flex: "0 1 auto", minWidth: 60 }
          },
          (s == null ? void 0 : s.title) || (s == null ? void 0 : s.agent_id) || kn(e)
        ),
        /* @__PURE__ */ R.createElement(
          Jl,
          {
            color: Tn[(s == null ? void 0 : s.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          _n((s == null ? void 0 : s.status) ?? "unknown")
        ),
        s != null && s.channel ? /* @__PURE__ */ R.createElement(ve, { type: "secondary", style: { fontSize: 11, flexShrink: 0 } }, s.channel) : null,
        /* @__PURE__ */ R.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ R.createElement(Xl, null, /* @__PURE__ */ R.createElement(cn, { config: S, onChange: Ue }, /* @__PURE__ */ R.createElement(Ge, { size: "small", icon: /* @__PURE__ */ R.createElement(an, null) })), /* @__PURE__ */ R.createElement(Ql, { title: f(t, "export") }, /* @__PURE__ */ R.createElement(
          Ge,
          {
            size: "small",
            icon: /* @__PURE__ */ R.createElement(Zl, null),
            onClick: () => {
              Kn(e).then(() => Pe.success(f(t, "exported"))).catch(
                (y) => Pe.error(String(y.message))
              );
            }
          },
          f(t, "export")
        )), /* @__PURE__ */ R.createElement(
          Kl,
          {
            title: f(t, "deleteConfirm"),
            onConfirm: () => {
              Vn(e).then(() => {
                Pe.success(f(t, "deleted")), l == null || l();
              }).catch(
                (y) => Pe.error(String(y.message))
              );
            }
          },
          /* @__PURE__ */ R.createElement(Ge, { size: "small", danger: !0, icon: /* @__PURE__ */ R.createElement(Yl, null) }, f(t, "delete"))
        )))
      ), /* @__PURE__ */ R.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap"
          }
        },
        /* @__PURE__ */ R.createElement(
          ve,
          {
            type: "secondary",
            style: { fontSize: 11, flex: "1 1 300px", minWidth: 0 }
          },
          lt ?? // Transient line while the stats endpoint responds.
          (s ? `${s.runs} ${f(t, "statRounds")} · ${s.llm_calls} ${f(t, "statSteps")} · ${wn(
            s.total_tokens
          )} ${f(t, "tokens")} · ${kt(
            s.size_bytes
          )}` : "")
        ),
        /* @__PURE__ */ R.createElement(
          ve,
          {
            type: "secondary",
            copyable: {
              text: e,
              tooltips: [
                f(t, "copySessionId"),
                f(t, "copiedSessionId")
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
      )) : /* @__PURE__ */ R.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8
          }
        },
        /* @__PURE__ */ R.createElement(ve, { type: "secondary", style: { fontSize: 13 } }, f(t, "selectSession")),
        /* @__PURE__ */ R.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ R.createElement(cn, { config: S, onChange: Ue }, /* @__PURE__ */ R.createElement(Ge, { size: "small", icon: /* @__PURE__ */ R.createElement(an, null) })))
      )
    ),
    Y && !We && /* @__PURE__ */ R.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ R.createElement(ve, { type: "danger", style: { fontSize: 12 } }, `${f(t, "loadFailed")}: ${Y.message}`)),
    /* @__PURE__ */ R.createElement(
      Ul,
      {
        mode: k,
        onModeChange: b,
        search: h,
        onSearchChange: d,
        onRefresh: () => {
          e && (K(e), Se(e)), l == null || l();
        },
        modeOptions: st,
        allCollapsed: Q.length > 0 && Q.every((y) => P.has(y.turn ?? -1)),
        hasRequests: Q.some((y) => y.turn !== null),
        callsCollapsed: u,
        onToggleCallsCollapsed: () => g((y) => !y),
        onToggleCollapseAll: () => {
          p((y) => Q.some(
            (C) => C.turn !== null && !y.has(C.turn)
          ) ? new Set(
            Q.map((C) => C.turn).filter((C) => C !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ R.createElement(
      Ll,
      {
        turns: Q,
        mode: k,
        range: M,
        hasEarlierRecords: He,
        onLoadEarlier: async () => {
          var y;
          return !o || o.events.length === 0 ? !1 : (await K(e, (y = o.events[0]) == null ? void 0 : y.seq), !0);
        },
        selectedIndex: T,
        searchMatchIndexes: Ae,
        onRangeChange: N,
        onRecordSelect: w,
        onRecordFocus: w
      }
    ),
    a && !o ? /* @__PURE__ */ R.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ R.createElement(Ln, null)) : o ? /* @__PURE__ */ R.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ R.createElement(
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
      /* @__PURE__ */ R.createElement(
        ml,
        {
          turns: Q,
          selectedIndex: T,
          selectedTurn: j,
          collapsedTurns: P,
          focusIndexes: Re,
          searchMatchIndexes: Ae,
          onSelectedIndexChange: (y) => {
            if (y === T) {
              w(null);
              return;
            }
            w(y), F(null);
          },
          onSelectedTurnChange: (y) => {
            F(y), w(null);
          },
          callsCollapsed: u,
          onToggleTurn: (y) => {
            p((_) => {
              const C = new Set(_);
              return C.has(y) ? C.delete(y) : C.add(y), C;
            });
          },
          hasOlderRecords: He,
          loadingOlder: v,
          onLoadOlder: () => {
            var y;
            !o || o.events.length === 0 || (r(!0), K(
              e,
              (y = o.events[0]) == null ? void 0 : y.seq
            ).finally(() => r(!1)));
          },
          emptyText: f(t, "noSessions"),
          initialRecord: he
        }
      )
    ), E ? /* @__PURE__ */ R.createElement(
      ks,
      {
        record: ke,
        request: we,
        onJumpSession: n,
        onSelectTurn: (y) => {
          F(y), w(null);
        },
        onClose: ot
      }
    ) : null) : /* @__PURE__ */ R.createElement(
      rn,
      {
        image: rn.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: We && e ? f(t, "noTraceForSession") : f(t, "selectSession")
      }
    )
  );
}
const ze = window.QwenPaw.host, L = ze.React, { useCallback: un, useEffect: xt, useMemo: Je, useState: ye } = L, { Button: dn, Empty: hn, Input: eo, Spin: to, Tag: mn, Tooltip: fn } = ze.antd, {
  CaretRightOutlined: no,
  MenuFoldOutlined: so,
  MenuUnfoldOutlined: lo,
  SearchOutlined: oo
} = ze.antdIcons, { Text: Be } = ze.antd.Typography;
function io({
  groups: e,
  collapsedAgents: s,
  onToggleAgent: t,
  searching: n,
  selected: l,
  onSelect: o,
  locale: i
}) {
  const a = e.length > 1;
  return /* @__PURE__ */ L.createElement(L.Fragment, null, e.map(([m, v]) => {
    const r = a && !n && s.has(m);
    return /* @__PURE__ */ L.createElement("div", { key: m }, a && /* @__PURE__ */ L.createElement(
      "div",
      {
        onClick: () => t(m),
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
      /* @__PURE__ */ L.createElement(
        no,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: r ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ L.createElement(Be, { strong: !0, style: { fontSize: 12 } }, m),
      /* @__PURE__ */ L.createElement(Be, { type: "secondary", style: { fontSize: 11 } }, v.length)
    ), !r && v.map((h) => {
      const d = h.session_id === l;
      return /* @__PURE__ */ L.createElement(
        "div",
        {
          key: h.session_id,
          onClick: () => o(h.session_id),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: d ? "rgba(22,119,255,0.10)" : "transparent",
            border: d ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ L.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ L.createElement(
            Be,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${h.title ? `${h.title}
` : ""}${h.session_id}`
              }
            },
            h.title || h.agent_id || kn(h.session_id)
          ),
          a ? null : h.agent_id ? /* @__PURE__ */ L.createElement(
            mn,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            h.agent_id
          ) : null,
          /* @__PURE__ */ L.createElement(
            mn,
            {
              color: Tn[h.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            _n(h.status)
          )
        ),
        /* @__PURE__ */ L.createElement(
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
          /* @__PURE__ */ L.createElement("span", null, h.channel || "-"),
          /* @__PURE__ */ L.createElement("span", null, h.runs, " ", f(i, "runs")),
          /* @__PURE__ */ L.createElement("span", null, wn(h.total_tokens), " tok"),
          h.skills ? /* @__PURE__ */ L.createElement(
            "span",
            {
              style: { color: "#2f54eb" },
              title: Object.entries(h.skills).sort((k, b) => b[1] - k[1]).map(([k, b]) => `${k} ×${b}`).join(`
`)
            },
            "📚",
            " ",
            Object.entries(h.skills).sort((k, b) => b[1] - k[1]).slice(0, 2).map(([k]) => k).join(" ")
          ) : null,
          /* @__PURE__ */ L.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: is(h.last_event_t)
            },
            rs(h.last_event_t)
          )
        )
      );
    }));
  }));
}
function ro() {
  const e = typeof ze.useLocale == "function" ? ze.useLocale() : void 0, s = Je(
    () => _t(e ?? Z()),
    [e]
  ), [t, n] = ye(null), [l, o] = ye(!1), [i, a] = ye(
    /* @__PURE__ */ new Set()
  ), [m, v] = ye(!1), [r, h] = ye(!1), [d, k] = ye(null), [b, M] = ye(""), [N, T] = ye(null), w = un(async () => {
    try {
      const u = await Nt({ limit: 100, offset: 0 });
      n(u.sessions), o(u.has_more), T(null);
    } catch (u) {
      T(String(u.message));
    }
  }, []), j = un(async () => {
    h(!0);
    try {
      const u = await Nt({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      n((g) => {
        const S = g ?? [];
        return [
          ...S,
          ...u.sessions.filter(
            (x) => !S.some((z) => z.session_id === x.session_id)
          )
        ];
      }), o(u.has_more);
    } catch (u) {
      T(String(u.message));
    } finally {
      h(!1);
    }
  }, [t]);
  xt(() => {
    w();
    try {
      const u = new URLSearchParams(window.location.search).get("session");
      u && bn(u).then((g) => {
        k(g ?? u);
      });
    } catch {
    }
  }, [w]), xt(() => {
    try {
      const u = new URL(window.location.href);
      d ? u.searchParams.set("session", d) : u.searchParams.delete("session"), window.history.replaceState(window.history.state, "", u);
    } catch {
    }
  }, [d]), xt(() => {
    const u = setInterval(() => {
      document.visibilityState === "visible" && w();
    }, 15e3);
    return () => clearInterval(u);
  }, [w]);
  const F = Je(
    () => (t == null ? void 0 : t.find((u) => u.session_id === d)) ?? null,
    [t, d]
  ), P = Je(() => {
    if (!t) return [];
    const u = b.trim().toLowerCase();
    return u ? t.filter(
      (g) => [g.session_id, g.title ?? "", g.agent_id, g.channel].join(" ").toLowerCase().includes(u)
    ) : t;
  }, [t, b]), p = Je(() => {
    const u = /* @__PURE__ */ new Map();
    for (const g of P) {
      const S = g.agent_id || "(unknown)", x = u.get(S);
      x ? x.push(g) : u.set(S, [g]);
    }
    return [...u.entries()];
  }, [P]);
  return /* @__PURE__ */ L.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, m ? /* @__PURE__ */ L.createElement(
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
    /* @__PURE__ */ L.createElement(fn, { title: f(s, "expandSidebar"), placement: "right" }, /* @__PURE__ */ L.createElement(
      dn,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ L.createElement(lo, null),
        onClick: () => v(!1)
      }
    ))
  ) : /* @__PURE__ */ L.createElement(
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
    /* @__PURE__ */ L.createElement(
      "div",
      {
        style: {
          padding: "12px 12px 8px",
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      },
      /* @__PURE__ */ L.createElement(
        eo,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ L.createElement(oo, null),
          placeholder: f(s, "searchPlaceholder"),
          value: b,
          style: { flex: 1, minWidth: 0 },
          onChange: (u) => M(u.target.value)
        }
      ),
      /* @__PURE__ */ L.createElement(fn, { title: f(s, "collapseSidebar") }, /* @__PURE__ */ L.createElement(
        dn,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ L.createElement(so, null),
          onClick: () => v(!0)
        }
      ))
    ),
    N ? /* @__PURE__ */ L.createElement("div", { style: { padding: "0 12px 4px" } }, /* @__PURE__ */ L.createElement(Be, { type: "danger", style: { fontSize: 12 } }, `${f(s, "loadFailed")}: ${N}`)) : null,
    /* @__PURE__ */ L.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ L.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ L.createElement(to, null)) : P.length === 0 ? /* @__PURE__ */ L.createElement(
      hn,
      {
        image: hn.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ L.createElement("span", { style: { fontSize: 12 } }, f(s, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ L.createElement(
        Be,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        f(s, "noSessionsHint")
      )
    ) : /* @__PURE__ */ L.createElement(
      io,
      {
        groups: p,
        collapsedAgents: i,
        onToggleAgent: (u) => {
          a((g) => {
            const S = new Set(g);
            return S.has(u) ? S.delete(u) : S.add(u), S;
          });
        },
        searching: !!b.trim(),
        selected: d,
        onSelect: k,
        locale: s
      }
    ), t !== null && l && !b.trim() && /* @__PURE__ */ L.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ L.createElement(
      "a",
      {
        onClick: () => void j(),
        style: { fontSize: 12 }
      },
      r ? "…" : `⋯ ${f(s, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ L.createElement(
    ql,
    {
      sessionId: d,
      summary: F,
      locale: s,
      onJumpSession: k,
      onRefreshSessions: () => void w()
    }
  ));
}
const ao = window.QwenPaw.host.React;
var pn, gn;
(gn = (pn = window.QwenPaw).registerRoutes) == null || gn.call(pn, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: ro,
    label: f(Z(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
var yn, Qe, vn;
(vn = (Qe = (yn = window.QwenPaw.chat) == null ? void 0 : yn.rightHeader) == null ? void 0 : Qe.add) == null || vn.call(
  Qe,
  "agent-trace",
  ao.createElement(Zn),
  { id: "agent-trace-jump" }
);
