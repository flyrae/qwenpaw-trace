const kn = {
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
    noTraceForSession: "该会话暂无轨迹记录，发送消息后自动生成"
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
    noTraceForSession: "No trace for this session yet — it is created after the first message"
  }
};
function Et(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function te() {
  try {
    return Et(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function x(e, s) {
  return kn[e][s];
}
const $e = window.QwenPaw.host;
async function Tn(e) {
  return Ee(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats`
  );
}
async function on(e, s) {
  return $e.fetch ? $e.fetch(e, s) : fetch($e.getApiUrl(e), {
    ...s,
    headers: {
      ...(s == null ? void 0 : s.headers) || {},
      ...$e.getApiToken() ? { Authorization: `Bearer ${$e.getApiToken()}` } : {}
    }
  });
}
class rn extends Error {
  constructor(s, t) {
    super(t), this.status = s, this.name = "ApiError";
  }
}
async function Ee(e, s) {
  const t = await on(e, s), n = await t.text();
  let l = null;
  try {
    l = n ? JSON.parse(n) : null;
  } catch {
    l = null;
  }
  if (!t.ok) {
    const o = l && typeof l == "object" && "detail" in l ? l.detail : void 0;
    throw new rn(
      t.status,
      typeof o == "string" ? o : `HTTP ${t.status}`
    );
  }
  return l;
}
async function Tt(e) {
  const s = new URLSearchParams();
  return s.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && s.set("offset", String(e.offset)), Ee(
    `/agent-trace/sessions?${s.toString()}`
  );
}
async function _n(e, s) {
  const t = new URLSearchParams();
  s != null && s.beforeSeq && t.set("before_seq", String(s.beforeSeq)), t.set("limit", String(s == null ? void 0 : s.limit));
  const n = t.toString();
  return Ee(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${n}`
  );
}
async function Mn() {
  return Ee("/agent-trace/config");
}
async function In(e) {
  return Ee("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
}
async function Cn(e) {
  const s = await on(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export`
  );
  if (!s.ok) throw new Error(`HTTP ${s.status}`);
  const t = await s.blob(), n = URL.createObjectURL(t), l = document.createElement("a");
  l.href = n, l.download = `${e}.jsonl`, l.click(), URL.revokeObjectURL(n);
}
async function zn(e) {
  await Ee(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
const On = /^\d+-[a-z0-9]+$/;
async function an(e) {
  if (!e) return null;
  if (!On.test(e)) return e;
  try {
    return (await Ee(
      `/agent-trace/resolve?chat_id=${encodeURIComponent(e)}`
    )).session_id ?? null;
  } catch {
    return null;
  }
}
const ve = window.QwenPaw.host, Ge = ve.React, { useMemo: An } = Ge, { Button: $n, Tooltip: Rn } = ve.antd, { CompassOutlined: Ln } = ve.antdIcons;
function Dn(e) {
  return `${window.location.pathname.startsWith("/console") ? "/console" : ""}/plugin/agent-trace${e ? `?session=${encodeURIComponent(e)}` : ""}`;
}
function jn() {
  const e = typeof ve.useLocale == "function" ? ve.useLocale() : void 0, s = An(
    () => Et(e ?? te()),
    [e]
  );
  return /* @__PURE__ */ Ge.createElement(Rn, { title: x(s, "viewCurrentTrace") }, /* @__PURE__ */ Ge.createElement(
    $n,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ Ge.createElement(Ln, null),
      "aria-label": x(s, "viewCurrentTrace"),
      onClick: () => {
        const t = typeof ve.getCurrentSessionId == "function" ? ve.getCurrentSessionId() : null;
        an(t).then((n) => {
          window.location.href = Dn(n ?? t);
        });
      }
    }
  ));
}
const _t = 3e3;
function Mt(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function Pn(e, s) {
  const t = Mt(e ?? ""), n = Mt(s ?? "");
  if (t.length > _t || n.length > _t)
    return [
      ...t.map((h) => ({ kind: "del", text: h })),
      ...n.map((h) => ({ kind: "add", text: h }))
    ];
  const l = t.length, o = n.length, r = new Int32Array((l + 1) * (o + 1)), i = (h, c) => h * (o + 1) + c;
  for (let h = l - 1; h >= 0; h -= 1)
    for (let c = o - 1; c >= 0; c -= 1)
      r[i(h, c)] = t[h] === n[c] ? r[i(h + 1, c + 1)] + 1 : Math.max(r[i(h + 1, c)], r[i(h, c + 1)]);
  const f = [];
  let y = 0, a = 0;
  for (; y < l && a < o; )
    t[y] === n[a] ? (f.push({ kind: "same", text: t[y] }), y += 1, a += 1) : r[i(y + 1, a)] >= r[i(y, a + 1)] ? (f.push({ kind: "del", text: t[y] }), y += 1) : (f.push({ kind: "add", text: n[a] }), a += 1);
  for (; y < l; )
    f.push({ kind: "del", text: t[y] }), y += 1;
  for (; a < o; )
    f.push({ kind: "add", text: n[a] }), a += 1;
  return f;
}
function Nn(e, s = 3) {
  const t = new Array(e.length).fill(!1);
  e.forEach((o, r) => {
    if (o.kind !== "same")
      for (let i = Math.max(0, r - s); i <= Math.min(e.length - 1, r + s); i += 1)
        t[i] = !0;
  });
  const n = [];
  let l = 0;
  return e.forEach((o, r) => {
    t[r] ? (l > 0 && (n.push({ kind: "gap", count: l }), l = 0), n.push(o)) : l += 1;
  }), l > 0 && n.push({ kind: "gap", count: l }), n;
}
function Fn(e) {
  let s = 0, t = 0;
  for (const n of e)
    n.kind === "add" ? s += 1 : n.kind === "del" && (t += 1);
  return { added: s, removed: t };
}
const Bn = {
  approval: { zh: "审批", en: "Approval" },
  receipt: { zh: "回执", en: "Receipt" },
  spawn: { zh: "子代理", en: "Spawn" },
  header: { zh: "提示词", en: "Prompt" },
  error: { zh: "错误", en: "Error" }
}, Hn = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" }
};
function cn(e, s) {
  const t = e.markerKind ? Bn[e.markerKind] : void 0;
  if (t) return s === "zh-CN" ? t.zh : t.en;
  const n = Hn[e.kind];
  return n ? s === "zh-CN" ? n.zh : n.en : e.kind;
}
function Wn(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function le(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const s = e * 1e3;
  return s < 1e3 ? `${Math.round(s)}ms` : s < 6e4 ? `${(s / 1e3).toFixed(1)}s` : `${Math.floor(s / 6e4)}m${Math.round(s % 6e4 / 1e3)}s`;
}
function ee(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function St(e, s) {
  return e === void 0 || !Number.isFinite(e) || s === null || s === void 0 || s <= 0 ? "-" : `${(e / s).toFixed(1)} tok/s`;
}
function De(e) {
  return e == null || !Number.isFinite(e) ? "-" : new Date(e).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
  });
}
function re(e) {
  if (!e) return null;
  const s = Date.parse(e);
  return Number.isFinite(s) ? s : null;
}
const Ye = window.QwenPaw.host, u = Ye.React, { useEffect: Un, useRef: Kn, useState: un } = u, { Button: dn, Collapse: Vn, Empty: It, Tabs: xt } = Ye.antd, { Text: K } = Ye.antd.Typography, { CopyOutlined: Xn, CloseOutlined: Gn } = Ye.antdIcons, Jn = 320, Qn = 720, He = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, Yn = 2e4;
function qn(e) {
  if (e.length > Yn) return e;
  const s = [], t = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let n = 0, l, o = 0;
  for (; (l = t.exec(e)) !== null; ) {
    l.index > n && s.push(e.slice(n, l.index));
    const r = l[0];
    let i = "rgba(128,128,128,1)";
    l[1] !== void 0 ? i = He.key : l[2] !== void 0 ? i = He.string : l[3] !== void 0 ? i = He.number : i = He.literal, s.push(
      /* @__PURE__ */ u.createElement("span", { key: o++, style: { color: i } }, r)
    ), n = l.index + r.length;
  }
  return n < e.length && s.push(e.slice(n)), s;
}
function ae({ value: e, json: s = !1 }) {
  const [t, n] = un(!1), l = typeof e == "string" ? e : JSON.stringify(e, null, 2);
  if (!l) return null;
  const o = async () => {
    try {
      await navigator.clipboard.writeText(l), n(!0), window.setTimeout(() => n(!1), 1500);
    } catch {
    }
  };
  return /* @__PURE__ */ u.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ u.createElement(
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
    t ? "✓" : /* @__PURE__ */ u.createElement(Xn, null)
  ), /* @__PURE__ */ u.createElement(
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
    s ? qn(l) : l
  ));
}
function $({
  label: e,
  value: s,
  danger: t = !1
}) {
  return /* @__PURE__ */ u.createElement(
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
    /* @__PURE__ */ u.createElement(K, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ u.createElement(
      K,
      {
        type: t ? "danger" : void 0,
        style: { fontSize: 12, textAlign: "right" }
      },
      s
    )
  );
}
function Ct({
  input: e,
  output: s,
  cacheRead: t,
  cacheWrite: n,
  reasoning: l
}) {
  const o = Math.max(0, e - t - n), r = Math.max(0, s - l);
  return /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement($, { label: "Input", value: `${ee(e)} tok` }), t ? /* @__PURE__ */ u.createElement($, { label: "Cached", value: `${ee(t)} tok` }) : null, n ? /* @__PURE__ */ u.createElement(
    $,
    {
      label: "Cache created",
      value: `${ee(n)} tok`
    }
  ) : null, t || n ? /* @__PURE__ */ u.createElement($, { label: "Other", value: `${ee(o)} tok` }) : null, /* @__PURE__ */ u.createElement($, { label: "Output", value: `${ee(s)} tok` }), l ? /* @__PURE__ */ u.createElement($, { label: "Reasoning", value: `${ee(l)} tok` }) : null, l ? /* @__PURE__ */ u.createElement($, { label: "Content", value: `${ee(r)} tok` }) : null);
}
function ot({
  label: e,
  onOpen: s,
  children: t
}) {
  return /* @__PURE__ */ u.createElement(
    "div",
    {
      style: {
        marginTop: 8,
        borderTop: "1px solid rgba(128,128,128,0.15)",
        paddingTop: 6
      }
    },
    /* @__PURE__ */ u.createElement("a", { onClick: s, style: { fontSize: 12, fontWeight: 600 } }, e, " →"),
    /* @__PURE__ */ u.createElement("div", { style: { paddingTop: 2 } }, t)
  );
}
function Zn({
  request: e,
  onJumpRecord: s
}) {
  const t = te(), [n, l] = u.useState("summary"), o = /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement($, { label: "Started", value: De(e.startedAt) }), /* @__PURE__ */ u.createElement(
    $,
    {
      label: "Total",
      value: le(
        e.durationMs === null ? null : e.durationMs / 1e3
      )
    }
  ), e.ttftMs !== null ? /* @__PURE__ */ u.createElement(
    $,
    {
      label: "First TTFT",
      value: le(e.ttftMs / 1e3)
    }
  ) : null, e.decodeMs !== null ? /* @__PURE__ */ u.createElement(
    $,
    {
      label: "Total decoding",
      value: le(e.decodeMs / 1e3)
    }
  ) : null, /* @__PURE__ */ u.createElement(
    $,
    {
      label: x(t, "throughput"),
      value: St(
        e.outputTokens,
        e.decodeMs === null ? null : e.decodeMs / 1e3
      )
    }
  )), r = /* @__PURE__ */ u.createElement(
    Ct,
    {
      input: e.inputTokens,
      output: e.outputTokens,
      cacheRead: e.cacheReadTokens,
      cacheWrite: e.cacheWriteTokens,
      reasoning: e.reasoningTokens
    }
  ), i = [
    {
      key: "summary",
      label: x(t, "summary"),
      children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement($, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ u.createElement(
        $,
        {
          label: x(t, "status"),
          value: e.status || "unknown",
          danger: e.status === "error"
        }
      ), /* @__PURE__ */ u.createElement($, { label: "Query", value: es(e.query) }), /* @__PURE__ */ u.createElement(
        $,
        {
          label: x(t, "model"),
          value: e.models.join(", ") || "-"
        }
      ), /* @__PURE__ */ u.createElement($, { label: "Tool calls", value: String(e.toolCalls) }), e.errors.length > 0 ? /* @__PURE__ */ u.createElement(
        $,
        {
          label: "Error",
          value: e.errors.join("; ").slice(0, 120),
          danger: !0
        }
      ) : null, e.resultIndex !== void 0 && s ? /* @__PURE__ */ u.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ u.createElement(
        "a",
        {
          style: { fontSize: 12 },
          onClick: () => s(e.resultIndex)
        },
        "Result: Assistant Message →"
      )) : null, e.options ? /* @__PURE__ */ u.createElement(ot, { label: "Options", onOpen: () => l("options") }, /* @__PURE__ */ u.createElement(ae, { value: e.options, json: !0 })) : null, /* @__PURE__ */ u.createElement(ot, { label: "Usage", onOpen: () => l("usage") }, r), /* @__PURE__ */ u.createElement(ot, { label: "Timing", onOpen: () => l("timing") }, o))
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(K, { strong: !0, style: { fontSize: 12 } }, x(t, "thisRequest")), r, e.sessionTotals ? /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(
        K,
        {
          strong: !0,
          style: { fontSize: 12, display: "block", marginTop: 10 }
        },
        x(t, "sessionTotal")
      ), /* @__PURE__ */ u.createElement(
        Ct,
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
        children: /* @__PURE__ */ u.createElement(ae, { value: e.options, json: !0 })
      }
    ] : []
  ];
  return /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 4px" } }, /* @__PURE__ */ u.createElement(
    xt,
    {
      size: "small",
      activeKey: n,
      onChange: (f) => l(f),
      items: i,
      tabBarStyle: { marginBottom: 8 }
    }
  ));
}
function es(e, s = 200) {
  const t = e.split(`
`, 1)[0].trim();
  return t.length > s ? `${t.slice(0, s)}…` : t;
}
function ts({
  oldText: e,
  newText: s
}) {
  const t = u.useMemo(
    () => Pn(e, s),
    [e, s]
  ), n = u.useMemo(() => Fn(t), [t]), l = u.useMemo(() => Nn(t), [t]), o = te();
  return e === void 0 ? /* @__PURE__ */ u.createElement(K, { type: "secondary", style: { fontSize: 12 } }, x(o, "noPrevPrompt")) : /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ u.createElement("span", { style: { color: "#52c41a" } }, "+", n.added), " ", /* @__PURE__ */ u.createElement("span", { style: { color: "#ff4d4f" } }, "−", n.removed)), /* @__PURE__ */ u.createElement(
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
    l.map((r, i) => {
      if (r.kind === "gap")
        return /* @__PURE__ */ u.createElement(
          "div",
          {
            key: i,
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
      return /* @__PURE__ */ u.createElement(
        "div",
        {
          key: i,
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
function ns({ record: e }) {
  var o;
  const s = te(), t = e.headerTools ?? [], n = e.headerReason === "changed", l = [
    {
      key: "summary",
      label: x(s, "summary"),
      children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement($, { label: "#", value: String(e.index) }), /* @__PURE__ */ u.createElement(
        $,
        {
          label: x(s, "status"),
          value: n ? x(s, "promptChanged") : x(s, "promptInitial")
        }
      ), /* @__PURE__ */ u.createElement($, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ u.createElement($, { label: "Chars", value: String(((o = e.prompt) == null ? void 0 : o.length) ?? 0) }), /* @__PURE__ */ u.createElement($, { label: "Tools", value: String(t.length) }))
    },
    ...n ? [
      {
        key: "diff",
        label: "Diff",
        children: /* @__PURE__ */ u.createElement(
          ts,
          {
            oldText: e.prevPrompt,
            newText: e.prompt ?? ""
          }
        )
      }
    ] : [],
    {
      key: "prompt",
      label: x(s, "prompt"),
      children: /* @__PURE__ */ u.createElement(ae, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ u.createElement("div", { style: { paddingTop: 4 } }, t.map((r) => /* @__PURE__ */ u.createElement(K, { key: r, code: !0, style: { fontSize: 11 } }, r)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ u.createElement(
          Vn,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((r, i) => {
              var y;
              const f = typeof r.name == "string" && r.name || typeof ((y = r.function) == null ? void 0 : y.name) == "string" && r.function.name || `tool-${i + 1}`;
              return {
                key: String(i),
                label: /* @__PURE__ */ u.createElement(K, { code: !0, style: { fontSize: 11 } }, f),
                children: /* @__PURE__ */ u.createElement(ae, { value: r })
              };
            })
          }
        ) : null)
      }
    ] : [],
    {
      key: "raw",
      label: "Raw",
      children: /* @__PURE__ */ u.createElement(ae, { value: e.raw })
    }
  ];
  return /* @__PURE__ */ u.createElement(xt, { size: "small", items: l, tabBarStyle: { marginBottom: 8 } });
}
function rt({ dragRef: e, width: s }) {
  return /* @__PURE__ */ u.createElement(
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
function it({ onClose: e }) {
  return e ? /* @__PURE__ */ u.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ u.createElement(
    dn,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ u.createElement(Gn, null),
      onClick: e
    }
  )) : null;
}
function ss({
  record: e,
  request: s,
  onJumpSession: t,
  onJumpRecord: n,
  onSelectTurn: l,
  onClose: o
}) {
  const r = te(), [i, f] = un(400), y = Kn(null);
  if (Un(() => {
    const k = (j) => {
      const w = y.current;
      if (w === null) return;
      const d = w.anchorX - j.clientX;
      f(
        Math.min(Qn, Math.max(Jn, w.anchorWidth + d))
      );
    }, _ = () => {
      y.current = null;
    };
    return window.addEventListener("pointermove", k), window.addEventListener("pointerup", _), () => {
      window.removeEventListener("pointermove", k), window.removeEventListener("pointerup", _);
    };
  }, []), e === null && s === null)
    return /* @__PURE__ */ u.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: i,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      },
      /* @__PURE__ */ u.createElement(
        It,
        {
          image: It.PRESENTED_IMAGE_SIMPLE,
          description: x(r, "selectRecord")
        }
      )
    );
  if (e === null && s !== null)
    return /* @__PURE__ */ u.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: i,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative"
        }
      },
      /* @__PURE__ */ u.createElement(rt, { dragRef: y, width: i }),
      /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ u.createElement(it, { onClose: o }), /* @__PURE__ */ u.createElement(Zn, { request: s, onJumpRecord: n }))
    );
  const a = e;
  if (a.kind === "system" && a.prompt !== void 0)
    return /* @__PURE__ */ u.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: i,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative"
        }
      },
      /* @__PURE__ */ u.createElement(rt, { dragRef: y, width: i }),
      /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ u.createElement(it, { onClose: o }), /* @__PURE__ */ u.createElement(ns, { record: a }))
    );
  const h = a.usage, c = a.timing, b = [];
  return b.push({
    key: "summary",
    label: x(r, "summary"),
    children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement($, { label: "#", value: String(a.index) }), /* @__PURE__ */ u.createElement($, { label: "Kind", value: cn(a, r) }), a.runIndex > 0 && l ? /* @__PURE__ */ u.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ u.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => l(a.runIndex)
      },
      "Request #",
      a.runIndex,
      " →"
    )) : null, /* @__PURE__ */ u.createElement(
      $,
      {
        label: x(r, "status"),
        value: a.running ? x(r, "running") : a.isError ? x(r, "error") : x(r, "success"),
        danger: a.isError
      }
    ), a.provider ? /* @__PURE__ */ u.createElement($, { label: "Provider", value: a.provider }) : null, a.model ? /* @__PURE__ */ u.createElement($, { label: x(r, "model"), value: a.model }) : null, a.toolName ? /* @__PURE__ */ u.createElement($, { label: "Tool", value: a.toolName }) : null, a.kind === "user" && (a.channel || a.userId) ? /* @__PURE__ */ u.createElement(
      $,
      {
        label: x(r, "source"),
        value: [a.channel, a.userId].filter(Boolean).join(" · ")
      }
    ) : null, a.receipt ? /* @__PURE__ */ u.createElement(
      $,
      {
        label: x(r, "channel"),
        value: a.receipt.channel ?? "-"
      }
    ) : null, /* @__PURE__ */ u.createElement(
      $,
      {
        label: x(r, "duration"),
        value: le(a.timeSeconds)
      }
    ), a.note ? /* @__PURE__ */ u.createElement(K, { type: "warning", style: { fontSize: 12 } }, a.note) : null, a.spawnSession ? /* @__PURE__ */ u.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ u.createElement(
      $,
      {
        label: x(r, "spawnedAgent"),
        value: a.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ u.createElement(
      dn,
      {
        size: "small",
        onClick: () => a.spawnSession && t(a.spawnSession),
        style: { marginTop: 4 }
      },
      x(r, "openChildSession")
    ) : null) : null)
  }), a.kind === "tool" ? (a.toolInput && b.push({
    key: "payload",
    label: x(r, "input"),
    children: /* @__PURE__ */ u.createElement(ae, { value: a.toolInput, json: !0 })
  }), (a.toolOutput || a.toolError) && b.push({
    key: "result",
    label: x(r, "output"),
    children: /* @__PURE__ */ u.createElement("div", { style: { display: "grid", gap: 8 } }, a.toolError ? /* @__PURE__ */ u.createElement(K, { type: "danger", style: { fontSize: 12 } }, a.toolError) : null, a.toolOutput ? /* @__PURE__ */ u.createElement(ae, { value: a.toolOutput }) : null)
  })) : (a.outputText || a.thinkingText || a.messages || a.marker || a.toolCalls && a.toolCalls.length > 0) && b.push({
    key: "raw",
    label: x(r, "output"),
    children: /* @__PURE__ */ u.createElement("div", { style: { display: "grid", gap: 8 } }, a.inboundParts && a.inboundParts.length > 0 ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(K, { type: "secondary", style: { fontSize: 12 } }, `${x(r, "inboundParts")} (${a.inboundParts.length})`), a.inboundParts.map((k, _) => /* @__PURE__ */ u.createElement(
      "div",
      {
        key: _,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ u.createElement(K, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, k.type.replace("Content", "")),
      /* @__PURE__ */ u.createElement(
        K,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        k.text ?? "-"
      )
    ))) : null, a.marker ? /* @__PURE__ */ u.createElement(ae, { value: a.marker }) : null, a.toolCalls && a.toolCalls.length > 0 ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(K, { type: "secondary", style: { fontSize: 12 } }, `${x(r, "toolCall")} (${a.toolCalls.length})`), a.toolCalls.map((k, _) => /* @__PURE__ */ u.createElement("div", { key: k.id || _, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ u.createElement(K, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", k.name), /* @__PURE__ */ u.createElement(K, { type: "secondary", style: { fontSize: 11 } }, k.id)))) : null, a.note ? /* @__PURE__ */ u.createElement(K, { type: "warning", style: { fontSize: 12 } }, a.note) : null, a.messages && a.messages.length > 0 ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(K, { type: "secondary", style: { fontSize: 12 } }, `${x(r, "query")} (${a.messages.length})`), a.messages.map((k, _) => /* @__PURE__ */ u.createElement(
      "div",
      {
        key: _,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ u.createElement(K, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, k.role),
      /* @__PURE__ */ u.createElement(
        K,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        k.text
      )
    ))) : null, a.thinkingText ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(K, { type: "secondary", style: { fontSize: 12 } }, x(r, "thinking")), /* @__PURE__ */ u.createElement(ae, { value: a.thinkingText })) : null, a.outputText ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(K, { type: "secondary", style: { fontSize: 12 } }, x(r, "output")), /* @__PURE__ */ u.createElement(ae, { value: a.outputText })) : null)
  }), (a.startedAt !== null || h || c) && b.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement($, { label: "Started", value: De(a.startedAt) }), /* @__PURE__ */ u.createElement($, { label: "Total", value: le(a.timeSeconds) }), c ? /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(
      $,
      {
        label: "TTFT",
        value: le(c.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ u.createElement(
      $,
      {
        label: "Decoding",
        value: le(c.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ u.createElement(
      $,
      {
        label: x(r, "throughput"),
        value: St(
          h == null ? void 0 : h.output_tokens,
          c.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ u.createElement(K, { type: "secondary", style: { fontSize: 12 } }, x(r, "noTiming")))
  }), h && b.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement($, { label: "Input", value: ee(h.input_tokens) }), /* @__PURE__ */ u.createElement($, { label: "Output", value: ee(h.output_tokens) }), h.cache_creation_input_tokens ? /* @__PURE__ */ u.createElement(
      $,
      {
        label: "Cache write",
        value: ee(h.cache_creation_input_tokens)
      }
    ) : null, h.cache_input_tokens ? /* @__PURE__ */ u.createElement(
      $,
      {
        label: "Cache read",
        value: ee(h.cache_input_tokens)
      }
    ) : null, h.total_tokens !== void 0 ? /* @__PURE__ */ u.createElement($, { label: "Total", value: ee(h.total_tokens) }) : null, h.time !== void 0 ? /* @__PURE__ */ u.createElement($, { label: "API time", value: le(h.time) }) : null)
  }), b.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ u.createElement(ae, { value: a.raw })
  }), /* @__PURE__ */ u.createElement(
    "aside",
    {
      style: {
        flexShrink: 0,
        width: i,
        borderLeft: "1px solid rgba(128,128,128,0.18)",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        position: "relative"
      }
    },
    /* @__PURE__ */ u.createElement(rt, { dragRef: y, width: i }),
    /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ u.createElement(it, { onClose: o }), /* @__PURE__ */ u.createElement(xt, { size: "small", items: b, tabBarStyle: { marginBottom: 8 } }))
  );
}
const Q = window.QwenPaw.host.React, ls = Q.useRef, os = Q.useState;
Q.useCallback;
Q.useMemo;
const rs = Q.useEffect, is = Q.useLayoutEffect, as = Q.useReducer;
Q.createContext;
Q.useContext;
Q.createElement;
Q.cloneElement;
Q.isValidElement;
Q.memo;
Q.forwardRef;
Q.Fragment;
Q.StrictMode;
Q.version;
function cs(e) {
  return e ? e() : void 0;
}
function us(e, s, t) {
  const n = new Array(e);
  return new Proxy(n, {
    get(l, o, r) {
      if (typeof o == "string") {
        const i = o.charCodeAt(0);
        if (i >= 48 && i <= 57) {
          const f = +o;
          if (Number.isInteger(f) && f >= 0 && f < e) {
            let y = l[f];
            if (!y) {
              const a = s[f * 2];
              y = l[f] = {
                index: f,
                key: t(f),
                start: a,
                size: s[f * 2 + 1],
                end: a + s[f * 2 + 1],
                lane: 0
              };
            }
            return y;
          }
        }
        if (o === "length") return e;
      }
      return Reflect.get(l, o, r);
    }
  });
}
function ke(e, s, t) {
  let n = t.initialDeps ?? [], l, o = !0;
  function r() {
    var i;
    const f = process.env.NODE_ENV !== "production" && !!t.key && !!((i = t.debug) != null && i.call(t));
    let y = 0;
    f && (y = Date.now());
    const a = e();
    if (!(a.length !== n.length || a.some((b, k) => n[k] !== b)))
      return l;
    n = a;
    let c = 0;
    if (f && (c = Date.now()), l = s(...a), f) {
      const b = Math.round((Date.now() - y) * 100) / 100, k = Math.round((Date.now() - c) * 100) / 100, _ = k / 16, j = (w, d) => {
        for (w = String(w); w.length < d; )
          w = " " + w;
        return w;
      };
      console.info(
        `%c⏱ ${j(k, 5)} /${j(b, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * _, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return t != null && t.onChange && !(o && t.skipInitialOnChange) && t.onChange(l), o = !1, l;
  }
  return r.updateDeps = (i) => {
    n = i;
  }, r;
}
function zt(e, s) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const ds = (e, s) => Math.abs(e - s) < 1.01, hs = (e, s, t) => {
  let n;
  return function(...l) {
    e.clearTimeout(n), n = e.setTimeout(() => s.apply(this, l), t);
  };
};
let Re;
const at = () => {
  if (Re !== void 0) return Re;
  if (typeof navigator > "u") return Re = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return Re = !0;
  const e = navigator.maxTouchPoints;
  return Re = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, Ot = (e) => {
  const { offsetWidth: s, offsetHeight: t } = e;
  return { width: s, height: t };
}, ms = (e) => e, fs = (e) => {
  const s = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1) - s + 1, l = new Array(n);
  for (let o = 0; o < n; o++)
    l[o] = s + o;
  return l;
}, ps = (e, s) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  const l = (r) => {
    const { width: i, height: f } = r;
    s({ width: Math.round(i), height: Math.round(f) });
  };
  if (l(Ot(t)), !n.ResizeObserver)
    return () => {
    };
  const o = new n.ResizeObserver((r) => {
    const i = () => {
      const f = r[0];
      if (f != null && f.borderBoxSize) {
        const y = f.borderBoxSize[0];
        if (y) {
          l({ width: y.inlineSize, height: y.blockSize });
          return;
        }
      }
      l(Ot(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return o.observe(t, { box: "border-box" }), () => {
    o.unobserve(t);
  };
}, Je = {
  passive: !0
}, gs = typeof window > "u" ? !0 : "onscrollend" in window, ys = (e, s, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const l = e.targetWindow;
  if (!l)
    return;
  const o = e.options.useScrollendEvent && gs;
  let r = 0;
  const i = o ? null : hs(
    l,
    () => s(r, !1),
    e.options.isScrollingResetDelay
  ), f = (h) => () => {
    r = t(n), i == null || i(), s(r, h);
  }, y = f(!0), a = f(!1);
  return n.addEventListener("scroll", y, Je), o && n.addEventListener("scrollend", a, Je), () => {
    n.removeEventListener("scroll", y), o && n.removeEventListener("scrollend", a);
  };
}, vs = (e, s) => ys(e, s, (t) => {
  const { horizontal: n, isRtl: l } = e.options;
  return n ? t.scrollLeft * (l && -1 || 1) : t.scrollTop;
}), Es = (e, s, t) => {
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
}, Ss = (e, {
  adjustments: s = 0,
  behavior: t
}, n) => {
  var l, o;
  (o = (l = n.scrollElement) == null ? void 0 : l.scrollTo) == null || o.call(l, {
    [n.options.horizontal ? "left" : "top"]: e + s,
    behavior: t
  });
}, xs = Ss;
class bs {
  constructor(s) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, n, l;
      return ((l = (n = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : n.now) == null ? void 0 : l.call(n)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((o) => {
          const r = () => {
            const i = o.target, f = this.indexFromElement(i);
            if (!i.isConnected) {
              this.observer.unobserve(i);
              for (const [y, a] of this.elementsCache)
                if (a === i) {
                  this.elementsCache.delete(y);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(f) && this.resizeItem(
              f,
              this.options.measureElement(i, o, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r) : r();
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
        getItemKey: ms,
        rangeExtractor: fs,
        onChange: () => {
        },
        measureElement: Es,
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
      for (const c in t) {
        const b = t[c];
        b !== void 0 && (o[c] = b);
      }
      const r = this.options;
      let i = null, f = null, y = !1;
      if (r !== void 0 && r.enabled && o.enabled && o.anchorTo === "end" && this.scrollElement !== null) {
        const c = r.count, b = o.count, k = this.getMeasurements(), _ = c > 0 ? ((n = k[0]) == null ? void 0 : n.key) ?? r.getItemKey(0) : null, j = c > 0 ? ((l = k[c - 1]) == null ? void 0 : l.key) ?? r.getItemKey(c - 1) : null;
        if (b !== c || c > 0 && b > 0 && (o.getItemKey(0) !== _ || o.getItemKey(b - 1) !== j)) {
          y = !0;
          const m = c > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? k[0] : null;
          m && (i = [m.key, this.getScrollOffset() - m.start]);
          const p = o.followOnAppend === !0 ? "auto" : o.followOnAppend || null;
          p && b > c && this.isAtEnd(r.scrollEndThreshold) && (c === 0 || o.getItemKey(b - 1) !== j) && (f = p);
        }
      }
      this.options = o, y && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let a = !1, h = 0;
      if (i && this.scrollOffset !== null) {
        const [c, b] = i, k = this.getMeasurements(), { count: _, getItemKey: j } = this.options;
        let w = 0;
        for (; w < _ && j(w) !== c; )
          w++;
        if (w < _) {
          const d = k[w];
          if (d) {
            const m = Math.max(0, d.start + b);
            m !== this.scrollOffset && (h = m - this.scrollOffset, this.scrollOffset = m, a = !0);
          }
        }
      }
      (a || f) && (this.pendingScrollAnchor = [
        a ? i[0] : null,
        a ? i[1] : 0,
        f,
        h
      ]);
    }, this.notify = (t) => {
      var n, l;
      (l = (n = this.options).onChange) == null || l.call(n, this, t);
    }, this.maybeNotify = ke(
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
          this.options.observeElementOffset(this, (o, r) => {
            if (r && this._intendedScrollOffset === null && o === this.scrollOffset)
              return;
            this._intendedScrollOffset !== null && Math.abs(o - this._intendedScrollOffset) < 1.5 && (o = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
            const i = this.getScrollOffset();
            this.scrollDirection = r ? i === o ? this.scrollDirection : i < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = r, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const o = this.scrollElement, r = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, i = () => {
            this._iosTouching = !1, !(!at() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          o.addEventListener(
            "touchstart",
            r,
            Je
          ), o.addEventListener(
            "touchend",
            i,
            Je
          ), this.unsubs.push(() => {
            o.removeEventListener("touchstart", r), o.removeEventListener("touchend", i), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const l = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, l && this.scrollElement && this.options.enabled) {
        const [o, r, i, f] = l;
        o !== null && !i && (at() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? f !== 0 && (this._iosDeferredAdjustment += f) : this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        })), i && this.scrollToEnd({ behavior: i });
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
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = ke(
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
      (t, n, l, o, r, i, f, y) => (this.prevLanes !== void 0 && this.prevLanes !== i && (this.lanesChangedFlag = !0), this.prevLanes = i, this.pendingMin = null, {
        count: t,
        paddingStart: n,
        scrollMargin: l,
        getItemKey: o,
        enabled: r,
        lanes: i,
        laneAssignmentMode: f,
        gap: y
      }),
      {
        key: !1
      }
    ), this.getMeasurements = ke(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: t,
        paddingStart: n,
        scrollMargin: l,
        getItemKey: o,
        enabled: r,
        lanes: i,
        laneAssignmentMode: f,
        gap: y
      }, a) => {
        const h = this.itemSizeCache;
        if (!r)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const w of this.laneAssignments.keys())
            w >= t && this.laneAssignments.delete(w);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((w) => {
          this.itemSizeCache.set(w.key, w.size);
        }));
        const c = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), i === 1) {
          const w = t * 2;
          let d = this._flatMeasurements;
          if (!d || d.length < w) {
            const S = new Float64Array(w);
            d && c > 0 && S.set(d.subarray(0, c * 2)), d = S, this._flatMeasurements = d;
          }
          let m;
          if (c === 0)
            m = n + l;
          else {
            const S = c - 1;
            m = d[S * 2] + d[S * 2 + 1] + y;
          }
          for (let S = c; S < t; S++) {
            const A = o(S), E = h.get(A), R = typeof E == "number" ? E : this.options.estimateSize(S);
            d[S * 2] = m, d[S * 2 + 1] = R, m += R + y;
          }
          const p = us(t, d, o);
          return this.measurementsCache = p, p;
        }
        const b = this.measurementsCache.slice(0, c), k = new Array(i).fill(
          void 0
        ), _ = new Float64Array(i);
        let j = 0;
        for (let w = 0; w < c; w++) {
          const d = b[w];
          d && (k[d.lane] === void 0 && j++, k[d.lane] = w, _[d.lane] = d.end);
        }
        for (let w = c; w < t; w++) {
          const d = o(w), m = this.laneAssignments.get(w);
          let p, S;
          const A = f === "estimate" || h.has(d);
          if (m !== void 0 && this.options.lanes > 1) {
            p = m;
            const M = k[p], D = M !== void 0 ? b[M] : void 0;
            S = D ? D.end + y : n + l;
          } else if (j === i) {
            let M = 0, D = _[0], se = k[0];
            for (let P = 1; P < i; P++) {
              const V = _[P];
              (V < D || V === D && k[P] < se) && (M = P, D = V, se = k[P]);
            }
            p = M, S = D + y, A && this.laneAssignments.set(w, p);
          } else
            p = w % this.options.lanes, S = n + l, A && this.laneAssignments.set(w, p);
          const E = h.get(d), R = typeof E == "number" ? E : this.options.estimateSize(w), z = S + R;
          b[w] = {
            index: w,
            start: S,
            size: R,
            end: z,
            key: d,
            lane: p
          }, k[p] === void 0 && j++, k[p] = w, _[p] = z;
        }
        return this.measurementsCache = b, b;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = ke(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, n, l, o) => t.length === 0 || n === 0 ? (this.range = null, null) : (this.range = ks(
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
    ), this.getVirtualIndexes = ke(
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
      (t, n, l, o, r) => o === null || r === null ? [] : t({
        startIndex: o,
        endIndex: r,
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
        ), r = Math.max(0, l - o), i = Math.min(
          this.options.count - 1,
          l + o
        );
        return t >= r && t <= i;
      }
      return !0;
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((r, i) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(i));
        });
        return;
      }
      const n = this.indexFromElement(t), l = this.options.getItemKey(n), o = this.elementsCache.get(l);
      o !== t && (o && this.observer.unobserve(o), this.observer.observe(t), this.elementsCache.set(l, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(n) && this.resizeItem(n, this.options.measureElement(t, void 0, this));
    }, this.resizeItem = (t, n) => {
      var l, o;
      if (t < 0 || t >= this.options.count) return;
      let r, i, f;
      const y = this._flatMeasurements;
      if (this.options.lanes === 1 && y !== null)
        f = this.options.getItemKey(t), i = y[t * 2], r = y[t * 2 + 1];
      else {
        const c = this.measurementsCache[t];
        if (!c) return;
        f = c.key, i = c.start, r = c.size;
      }
      const a = this.itemSizeCache.get(f) ?? r, h = n - a;
      if (h !== 0) {
        const c = this.options.anchorTo === "end" && ((l = this.scrollState) == null ? void 0 : l.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, b = c ? this.getTotalSize() : 0, k = this.getScrollOffset() + this.scrollAdjustments, j = !this.itemSizeCache.has(f) ? (
          // First measurement: compensate any item whose top sits above the
          // fold — the estimate→actual delta must be corrected regardless of
          // scroll direction, since the whole estimated block was above it.
          i < k
        ) : (
          // Re-measurement: only compensate an item that is ENTIRELY above the
          // fold. An item that merely *spans* the fold (top above, bottom
          // below — e.g. a streaming chat message growing at its bottom)
          // changes size *below* the anchor point, so shifting scrollTop by the
          // delta would drag the viewport downward on every growth (#1218).
          // Also skip during backward scroll to avoid the "items jump while
          // scrolling up" cascade.
          i + a <= k && this.scrollDirection !== "backward"
        ), w = ((o = this.scrollState) == null ? void 0 : o.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[t] ?? {
            index: t,
            key: f,
            start: i,
            size: r,
            end: i + r,
            lane: 0
          },
          h,
          this
        ) : j);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(f, n), this.itemSizeCacheVersion++;
        let d = !1;
        c ? d = this.applyScrollAdjustment(
          this.getTotalSize() - b
        ) : w && (d = this.applyScrollAdjustment(h)), this.notify(d);
      }
    }, this.getVirtualItems = ke(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const l = [];
        for (let o = 0, r = t.length; o < r; o++) {
          const i = t[o], f = n[i];
          l.push(f);
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
      const l = this._flatMeasurements, o = this.options.lanes === 1 && l != null, r = hn(
        0,
        n.length - 1,
        o ? (i) => l[i * 2] : (i) => zt(n[i]).start,
        t
      );
      return zt(n[r]);
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
      const o = this.getSize(), r = this.getScrollOffset();
      n === "auto" && (n = t >= r + o ? "end" : "start"), n === "center" ? t += (l - o) / 2 : n === "end" && (t -= o);
      const i = this.getMaxScrollOffset();
      return Math.max(Math.min(i, t), 0);
    }, this.getOffsetForIndex = (t, n = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const l = this.getSize(), o = this.getScrollOffset(), r = this.measurementsCache[t];
      if (!r) return;
      if (n === "auto")
        if (r.end >= o + l - this.options.scrollPaddingEnd)
          n = "end";
        else if (r.start <= o + this.options.scrollPaddingStart)
          n = "start";
        else
          return [o, n];
      if (n === "end" && t === this.options.count - 1)
        return [this.getMaxScrollOffset(), n];
      const i = n === "end" ? r.end + this.options.scrollPaddingEnd : r.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(i, n, r.size),
        n
      ];
    }, this.scrollToOffset = (t, { align: n = "start", behavior: l = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0;
      const o = this.getOffsetForAlignment(t, n), r = this.now();
      this.scrollState = {
        index: null,
        align: n,
        behavior: l,
        startedAt: r,
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
      const [r, i] = o, f = this.now();
      this.scrollState = {
        index: t,
        align: i,
        behavior: l,
        startedAt: f,
        lastTargetOffset: r,
        stableFrames: 0
      }, this._scrollToOffset(r, { adjustments: void 0, behavior: l }), this.scheduleScrollReconcile();
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
        const o = n.length - 1, r = this._flatMeasurements;
        r != null ? l = r[o * 2] + r[o * 2 + 1] : l = ((t = n[o]) == null ? void 0 : t.end) ?? 0;
      } else {
        const o = Array(this.options.lanes).fill(null);
        let r = n.length - 1;
        for (; r >= 0 && o.some((i) => i === null); ) {
          const i = n[r];
          o[i.lane] === null && (o[i.lane] = i.end), r--;
        }
        l = Math.max(...o.filter((i) => i !== null));
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
    return s === 0 ? !1 : (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", s), at() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += s, !1) : (this._scrollToOffset(this.getScrollOffset(), {
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
    const n = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, l = n ? n[0] : this.scrollState.lastTargetOffset, o = 1, r = l !== this.scrollState.lastTargetOffset;
    if (!r && ds(l, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= o) {
        this.getScrollOffset() !== l && this._scrollToOffset(l, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, r) {
      const i = this.getSize() || 600, f = Math.abs(l - this.getScrollOffset()), y = this.scrollState.behavior === "smooth" && f > i;
      this.scrollState.lastTargetOffset = l, y || (this.scrollState.behavior = "auto"), this._scrollToOffset(l, {
        adjustments: void 0,
        behavior: y ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const hn = (e, s, t, n) => {
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
function ws(e, s, t) {
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
function ks(e, s, t, n, l) {
  const o = e.length - 1;
  if (e.length <= n)
    return { startIndex: 0, endIndex: o };
  if (n === 1 && l !== null) {
    const y = ws(
      l,
      o,
      t
    );
    let a = y;
    const h = t + s;
    for (; a < o && l[a * 2] + l[a * 2 + 1] < h; )
      a++;
    return { startIndex: y, endIndex: a };
  }
  let i = hn(0, o, (y) => e[y].start, t), f = i;
  if (n === 1)
    for (; f < o && e[f].end < t + s; )
      f++;
  else if (n > 1) {
    const y = Array(n).fill(0);
    for (; f < o && y.some((h) => h < t + s); ) {
      const h = e[f];
      y[h.lane] = h.end, f++;
    }
    const a = Array(n).fill(t + s);
    for (; i >= 0 && a.some((h) => h >= t); ) {
      const h = e[i];
      a[h.lane] = h.start, i--;
    }
    i = Math.max(0, i - i % n), f = Math.min(o, f + (n - 1 - f % n));
  }
  return { startIndex: i, endIndex: f };
}
const ct = typeof document < "u" ? is : rs;
function Ts({
  useFlushSync: e = !0,
  directDomUpdates: s = !1,
  directDomUpdatesMode: t = "transform",
  ...n
}) {
  const l = as((a) => a + 1, 0)[1], o = ls({
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
  const r = (a) => {
    const h = o.current;
    if (!h.enabled || !h.container) return;
    const c = a.getTotalSize();
    if (c !== h.lastSize) {
      h.lastSize = c;
      const b = a.options.horizontal ? "width" : "height";
      h.container.style[b] = `${c}px`;
    }
  }, i = (a) => {
    const h = o.current;
    if (!h.enabled || !h.container) return;
    r(a);
    const c = !!a.options.horizontal, b = h.mode === "transform", k = c ? "left" : "top", _ = a.options.scrollMargin, j = a.getVirtualItems();
    for (const w of j) {
      const d = w.start - _, m = a.elementsCache.get(w.key);
      m && h.lastPositions.get(m) !== d && (h.lastPositions.set(m, d), b ? m.style.transform = c ? `translate3d(${d}px, 0, 0)` : `translate3d(0, ${d}px, 0)` : m.style[k] = `${d}px`);
    }
  }, f = {
    ...n,
    onChange: (a, h) => {
      var c;
      const b = o.current;
      let k = !0;
      if (b.enabled) {
        i(a);
        const _ = a.range, j = b.prevRange;
        k = !j || j.isScrolling !== a.isScrolling || j.startIndex !== (_ == null ? void 0 : _.startIndex) || j.endIndex !== (_ == null ? void 0 : _.endIndex), k && (b.prevRange = _ ? {
          startIndex: _.startIndex,
          endIndex: _.endIndex,
          isScrolling: a.isScrolling
        } : null);
      }
      k && (e && h ? cs(l) : l()), (c = n.onChange) == null || c.call(n, a, h);
    }
  }, [y] = os(() => {
    const a = new bs(f);
    return Object.assign(a, {
      containerRef: (h) => {
        const c = o.current;
        if (c.container = h, c.lastSize = null, h && c.enabled) {
          const b = a.getTotalSize();
          c.lastSize = b;
          const k = a.options.horizontal ? "width" : "height";
          h.style[k] = `${b}px`;
        }
      }
    });
  });
  return y.setOptions(f), ct(() => y._didMount(), []), ct(() => (r(y), y._willUpdate())), ct(() => {
    i(y);
  }), y;
}
function _s(e) {
  return Ts({
    observeElementRect: ps,
    observeElementOffset: vs,
    scrollToFn: xs,
    ...e
  });
}
const qe = window.QwenPaw.host, C = qe.React, { useRef: Ms } = C, { Tag: mn } = qe.antd, { Text: he } = qe.antd.Typography, {
  CaretRightOutlined: Is,
  CloseCircleOutlined: Cs,
  FileTextOutlined: zs,
  RobotOutlined: Os,
  RocketOutlined: As,
  SafetyOutlined: $s,
  SendOutlined: Rs,
  SettingOutlined: Ls,
  ToolOutlined: Ds,
  UserOutlined: js
} = qe.antdIcons, Ps = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, Ns = {
  user: /* @__PURE__ */ C.createElement(js, null),
  message: /* @__PURE__ */ C.createElement(Os, null),
  tool: /* @__PURE__ */ C.createElement(Ds, null),
  system: /* @__PURE__ */ C.createElement(Ls, null)
}, At = {
  approval: { color: "volcano", icon: /* @__PURE__ */ C.createElement($s, null) },
  receipt: { color: "cyan", icon: /* @__PURE__ */ C.createElement(Rs, null) },
  spawn: { color: "geekblue", icon: /* @__PURE__ */ C.createElement(As, null) },
  header: { color: "green", icon: /* @__PURE__ */ C.createElement(zs, null) },
  error: { color: "red", icon: /* @__PURE__ */ C.createElement(Cs, null) }
}, Fs = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default"
}, $t = {
  running: { zh: "进行中", en: "Running" },
  success: { zh: "成功", en: "Success" },
  error: { zh: "错误", en: "Error" },
  cancelled: { zh: "已取消", en: "Cancelled" },
  interrupted: { zh: "已中断", en: "Interrupted" },
  unknown: { zh: "未知", en: "Unknown" }
}, Bs = 150, yt = 26, fn = 34, Rt = 9, Lt = 30;
function Hs(e) {
  const s = te(), t = $t[e] ?? $t.unknown;
  return s === "zh-CN" ? t.zh : t.en;
}
const Ws = {
  ImageContent: "image",
  FileContent: "file",
  AudioContent: "audio",
  VideoContent: "video"
};
function Us(e, s) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.inboundParts ?? []) {
    const l = Ws[n.type];
    l && t.set(l, (t.get(l) ?? 0) + 1);
  }
  return t.size === 0 ? null : [...t.entries()].map(([n, l]) => `${x(s, n)}×${l}`).join(" ");
}
function Ks(e, s) {
  const t = e.receipt, n = t != null && t.channel ? ` · ${t.channel}` : "";
  return `📤 ${x(s, "replySent")}${n} · ${((t == null ? void 0 : t.chars) ?? 0).toLocaleString()} ${x(s, "chars")}`;
}
function Dt({
  record: e,
  selected: s,
  dimmed: t,
  multiRequest: n,
  onSelect: l
}) {
  var i, f;
  const o = e.usage, r = o && (o.input_tokens || o.output_tokens) ? `${ee(o.input_tokens)}→${ee(
    o.output_tokens
  )}` : null;
  return /* @__PURE__ */ C.createElement(
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
        height: yt,
        cursor: "pointer",
        background: s ? "rgba(22,119,255,0.08)" : void 0,
        opacity: t ? 0.35 : 1
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
      n && /* @__PURE__ */ C.createElement("span", { style: { opacity: 0.65, marginRight: 3 } }, "R", e.runIndex),
      "#",
      e.index
    ),
    /* @__PURE__ */ C.createElement(
      mn,
      {
        color: e.markerKind && ((i = At[e.markerKind]) == null ? void 0 : i.color) || Ps[e.kind] || "default",
        icon: e.markerKind && ((f = At[e.markerKind]) == null ? void 0 : f.icon) || Ns[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      cn(e, te())
    ),
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
      e.receipt ? /* @__PURE__ */ C.createElement(he, { type: "secondary", style: { fontSize: 12 } }, Ks(e, te())) : e.kind === "tool" && e.toolName ? /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(he, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ C.createElement(he, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ C.createElement(
        he,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(
        he,
        {
          type: e.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        e.running ? `⏳ ${e.text || "…"}` : e.text || "—"
      ), e.kind === "user" ? /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(he, { type: "secondary", style: { fontSize: 11 } }, ` ${Us(e, te()) ?? ""}`), e.channel && e.channel !== "console" ? /* @__PURE__ */ C.createElement(he, { code: !0, style: { fontSize: 10 } }, ` @${e.channel}`) : null) : null)
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
      r ? /* @__PURE__ */ C.createElement("span", { style: { color: "#1677ff" } }, r) : null,
      r ? " · " : "",
      (e.kind === "message" || e.kind === "tool") && le(e.timeSeconds)
    )
  );
}
function Vs({
  turn: e,
  collapsed: s,
  selected: t,
  cellCount: n,
  onToggle: l,
  onSelect: o
}) {
  const r = te();
  return /* @__PURE__ */ C.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: fn }
    },
    /* @__PURE__ */ C.createElement(
      "span",
      {
        onClick: (i) => {
          i.stopPropagation(), o();
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
      /* @__PURE__ */ C.createElement(
        Is,
        {
          onClick: (i) => {
            i.stopPropagation(), l();
          },
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: s ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ C.createElement(he, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ C.createElement(he, { type: "secondary", style: { fontSize: 11 } }, le(e.durationMs / 1e3)),
      /* @__PURE__ */ C.createElement(he, { type: "secondary", style: { fontSize: 11 } }, n, " ", x(r, "events")),
      /* @__PURE__ */ C.createElement(
        mn,
        {
          color: Fs[e.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        Hs(e.status)
      )
    )
  );
}
function Xs({
  turns: e,
  selectedIndex: s,
  selectedTurn: t,
  collapsedTurns: n,
  focusIndexes: l,
  searchMatchIndexes: o,
  onSelectedIndexChange: r,
  onSelectedTurnChange: i,
  onToggleTurn: f,
  callsCollapsed: y,
  hasOlderRecords: a,
  loadingOlder: h,
  onLoadOlder: c,
  initialRecord: b,
  emptyText: k
}) {
  const _ = te(), j = Ms(null), w = e.filter((E) => E.turn !== null), d = w.length > 1, m = C.useMemo(() => {
    var R;
    const E = [];
    a && E.push({
      key: "load-older",
      height: Lt,
      type: "load-older"
    }), b && (E.push({
      key: "initial",
      height: yt,
      type: "initial",
      record: b
    }), E.push({
      key: "initial-divider",
      height: Rt,
      type: "divider"
    }));
    for (const z of w) {
      const M = z.turn;
      if (E.push({
        key: `turn-${M}`,
        height: fn,
        type: "boundary",
        turn: z
      }), !n.has(M))
        for (const D of ((R = z.groups[0]) == null ? void 0 : R.cells) ?? [])
          y && D.kind === "tool" || E.push({
            key: `rec-${D.index}`,
            height: yt,
            type: "record",
            record: D
          });
    }
    return E;
  }, [
    w,
    n,
    y,
    a,
    b
  ]), p = C.useCallback(
    (E) => l !== null && !l.has(E.index) || o !== null && !o.has(E.index),
    [l, o]
  ), S = (E) => {
    var R;
    switch (E.type) {
      case "load-older":
        return /* @__PURE__ */ C.createElement("div", { style: { textAlign: "center", height: Lt } }, /* @__PURE__ */ C.createElement(
          "button",
          {
            type: "button",
            onClick: c,
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
          h ? "…" : `⋯ ${x(_, "loadOlder")}`
        ));
      case "divider":
        return /* @__PURE__ */ C.createElement(
          "div",
          {
            style: {
              height: Rt,
              borderBottom: "1px dashed rgba(128,128,128,0.25)"
            }
          }
        );
      case "initial": {
        const z = E.record;
        return /* @__PURE__ */ C.createElement(
          Dt,
          {
            record: z,
            selected: s === z.index,
            dimmed: p(z),
            multiRequest: d,
            onSelect: () => r(z.index)
          }
        );
      }
      case "boundary": {
        const z = E.turn, M = z.turn;
        return /* @__PURE__ */ C.createElement(
          Vs,
          {
            turn: z,
            collapsed: n.has(M),
            selected: t === M,
            cellCount: ((R = z.groups[0]) == null ? void 0 : R.cells.length) ?? 0,
            onToggle: () => f(M),
            onSelect: () => i(M)
          }
        );
      }
      case "record":
      default: {
        const z = E.record;
        return /* @__PURE__ */ C.createElement(
          Dt,
          {
            record: z,
            selected: s === z.index,
            dimmed: p(z),
            multiRequest: d,
            onSelect: () => r(z.index)
          }
        );
      }
    }
  };
  if (m.length === 0)
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
        k ?? x(_, "noSessions")
      )
    );
  const A = m.length <= Bs ? /* @__PURE__ */ C.createElement("div", null, m.map((E) => S(E))) : /* @__PURE__ */ C.createElement(
    Gs,
    {
      rows: m,
      scrollRef: j,
      renderRow: S
    }
  );
  return /* @__PURE__ */ C.createElement(
    "div",
    {
      ref: j,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    A
  );
}
function Gs({
  rows: e,
  scrollRef: s,
  renderRow: t
}) {
  const n = _s({
    count: e.length,
    getScrollElement: () => s.current,
    estimateSize: (l) => e[l].height,
    overscan: 12
  });
  return /* @__PURE__ */ C.createElement(
    "div",
    {
      style: {
        height: n.getTotalSize(),
        position: "relative",
        width: "100%"
      }
    },
    n.getVirtualItems().map((l) => /* @__PURE__ */ C.createElement(
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
function ut(e) {
  return (e == null ? void 0 : e.data) ?? {};
}
function fe(e, s = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > s ? `${t.slice(0, s)}…` : t;
}
function Js(e) {
  var w;
  const s = [], t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), r = [];
  let i = "";
  const f = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  let h = 0, c = 0;
  const b = (d) => d.groups[0].cells, k = (d, m) => {
    const p = o.get(d);
    p ? p.push(m) : o.set(d, [m]);
  }, _ = (d, m) => {
    if (!d)
      if (i)
        d = i;
      else {
        r.push(m);
        return;
      }
    const p = t.get(d);
    if (p)
      m.runIndex = p.turn ?? 0, b(p).push(m);
    else if (i) {
      const S = t.get(i);
      S ? (m.runIndex = S.turn ?? 0, b(S).push(m)) : k(d, m);
    } else
      k(d, m);
  }, j = (d, m) => {
    const p = o.get(m);
    if (p) {
      for (const S of p) b(d).push(S);
      o.delete(m);
    }
  };
  for (const d of e) {
    const m = ut(d);
    switch (d.type) {
      case "run/start": {
        c += 1, f.set(
          d.run_id,
          typeof m.channel == "string" ? m.channel : ""
        );
        const p = {
          turn: c,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${c}`, cells: [] }]
        };
        t.set(d.run_id, p), s.push(p), i = d.run_id, j(p, d.run_id);
        for (const R of r.splice(0))
          R.runIndex = c, b(p).push(R);
        const S = Array.isArray(m.messages) ? m.messages : [], A = String(m.query ?? ""), E = {
          index: ++h,
          runIndex: c,
          runId: d.run_id,
          kind: "user",
          text: fe(A) || fe((w = S.at(-1)) == null ? void 0 : w.text),
          messages: S,
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: !1,
          running: !1,
          model: void 0
        };
        y.set(d.run_id, E), b(p).push(E);
        break;
      }
      case "run/end": {
        const p = t.get(d.run_id);
        i === d.run_id && (i = ""), f.delete(d.run_id), y.delete(d.run_id);
        const S = String(m.status ?? "unknown");
        if (p && (p.status = S, p.durationMs = typeof m.duration_ms == "number" ? m.duration_ms : null), S === "error" && m.error) {
          const A = p ?? {
            turn: null,
            status: S,
            durationMs: typeof m.duration_ms == "number" ? m.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          p || s.push(A), A.groups[0].cells.push({
            index: ++h,
            runIndex: c,
            runId: d.run_id,
            kind: "system",
            markerKind: "error",
            text: fe(String(m.error)) || "run failed",
            marker: String(m.error ?? "run failed"),
            timeSeconds: typeof m.duration_ms == "number" ? m.duration_ms / 1e3 : null,
            startedAt: re(d.t),
            isError: !0,
            running: !1,
            raw: [d]
          });
        }
        break;
      }
      case "agent/spawn": {
        const p = typeof m.child_session_id == "string" ? m.child_session_id : void 0, S = typeof m.child_agent_id == "string" ? m.child_agent_id : "?";
        _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${S} → ${p ?? "?"}`,
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: !1,
          running: !1,
          spawnSession: p,
          spawnAgent: S,
          raw: [d]
        });
        break;
      }
      case "message/inbound": {
        const p = Array.isArray(m.parts) ? m.parts : [], S = m.channel_meta && typeof m.channel_meta == "object" ? m.channel_meta : void 0, A = p.map((D) => ({
          type: String(D.type ?? "?"),
          text: typeof D.text == "string" ? D.text : void 0
        })), E = f.get(d.run_id) ?? "", R = S && typeof S.user_id == "string" && S.user_id ? S.user_id : void 0, z = fe(
          A.map((D) => D.text ?? "").filter(Boolean).join(`
`)
        ), M = y.get(d.run_id);
        M && !M.inboundParts ? (M.inboundParts = A, M.channel = E || void 0, M.userId = R, M.raw = [
          ...M.raw ?? [],
          d
        ], M.text || (M.text = z)) : _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "user",
          text: z || "📥",
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: !1,
          running: !1,
          channel: E || void 0,
          userId: R,
          inboundParts: A,
          raw: [d]
        });
        break;
      }
      case "message/outbound": {
        const p = typeof m.text == "string" ? m.text : "";
        _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "receipt",
          text: "📤",
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: !1,
          running: !1,
          outputText: p || void 0,
          receipt: {
            channel: f.get(d.run_id) || void 0,
            chars: p.length
          },
          raw: [d]
        });
        break;
      }
      case "approval/asked": {
        _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "approval",
          text: String(m.tool_name ?? "?"),
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: !1,
          running: !1,
          raw: [d]
        });
        break;
      }
      case "approval/decided": {
        const p = String(m.decision ?? "?"), S = m.tool_name ? String(m.tool_name) : "";
        _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "approval",
          text: S ? `${S} → ${p}` : p,
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: p === "denied",
          running: !1,
          raw: [d]
        });
        break;
      }
      case "llm/header": {
        const p = typeof m.sha256 == "string" ? m.sha256 : "", S = typeof m.prev_sha256 == "string" ? m.prev_sha256 : void 0, A = m.reason === "changed" ? "changed" : "initial", E = typeof m.system_prompt == "string" ? m.system_prompt : "", R = Array.isArray(m.tools) ? m.tools : [], z = Array.isArray(m.schemas) ? m.schemas : void 0;
        _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "header",
          text: A === "initial" ? `⚙ ${E ? `System Prompt (${E.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: !1,
          running: !1,
          prompt: E,
          prevPrompt: a.get(S ?? ""),
          headerTools: R,
          headerReason: A,
          sha: p,
          prevSha: S,
          schemas: z,
          raw: [d]
        }), p && a.set(p, E);
        break;
      }
      case "llm/call": {
        const p = ut(d), S = p.options && typeof p.options == "object" && Object.keys(p.options).length > 0 ? p.options : void 0, A = {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: re(d.t),
          isError: !1,
          running: !0,
          model: String(p.model ?? "unknown"),
          provider: typeof p.provider == "string" && p.provider ? p.provider : void 0,
          options: S
        };
        _(d.run_id, A);
        const E = n.get(d.run_id) ?? [];
        E.push({ cell: A, callData: p, call: d }), n.set(d.run_id, E);
        break;
      }
      case "llm/result": {
        const p = n.get(d.run_id), S = p == null ? void 0 : p.shift(), A = (S == null ? void 0 : S.callData) ?? {}, E = typeof m.duration_ms == "number" ? m.duration_ms : null, R = m.usage ?? void 0, z = m.timing, M = Array.isArray(m.tool_calls) ? m.tool_calls : void 0, P = {
          text: (m.error ? fe(String(m.error)) : fe(String(m.text ?? ""))) || (M && M.length > 0 ? `🛠 ${M.map((V) => V.name).join(", ")}` : ""),
          timeSeconds: E === null ? null : E / 1e3,
          isError: !!m.error,
          running: !1,
          outputText: m.text ? String(m.text) : void 0,
          thinkingText: m.thinking ? String(m.thinking) : void 0,
          usage: R,
          timing: z,
          toolCalls: M,
          note: m.note ? String(m.note) : void 0
        };
        S ? (Object.assign(S.cell, P), S.cell.model = String(
          m.model ?? A.model ?? S.cell.model
        ), S.cell.raw = [
          ...S.call ? [S.call] : [],
          d
        ]) : _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "message",
          startedAt: re(d.t),
          model: String(m.model ?? A.model ?? "unknown"),
          ...P
        });
        break;
      }
      case "tool/call": {
        const p = ut(d), S = {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "tool",
          text: `${String(p.name ?? "?")}(${fe(
            String(p.input ?? ""),
            60
          )})`,
          timeSeconds: null,
          startedAt: re(d.t),
          isError: !1,
          running: !0,
          toolName: String(p.name ?? "?"),
          toolInput: p.input ? String(p.input) : void 0
        };
        _(d.run_id, S);
        const A = l.get(d.run_id) ?? [];
        A.push({ cell: S, callData: p, call: d }), l.set(d.run_id, A);
        break;
      }
      case "tool/result": {
        const p = l.get(d.run_id), S = typeof m.tool_call_id == "string" ? m.tool_call_id : null;
        let A;
        if (p) {
          const se = S ? p.findIndex(
            (P) => P.callData.tool_call_id === S
          ) : -1;
          se >= 0 ? A = p.splice(se, 1)[0] : A = p.shift();
        }
        const E = typeof m.duration_ms == "number" ? m.duration_ms : null, R = m.ok !== !1 && !m.error, z = m.output ? String(m.output) : void 0, M = z ? ` → ${fe(z, 60)}` : "", D = {
          timeSeconds: E === null ? null : E / 1e3,
          isError: !R,
          running: !1,
          toolOutput: z,
          toolError: m.error ? String(m.error) : void 0,
          note: m.note ? String(m.note) : void 0
        };
        A ? (Object.assign(A.cell, D), A.cell.text = `${A.cell.text}${M}`, A.cell.raw = [
          ...A.call ? [A.call] : [],
          d
        ]) : _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "tool",
          text: `?${M}`,
          startedAt: re(d.t),
          ...D
        });
        break;
      }
    }
  }
  for (const [d, m] of o) {
    const p = t.get(d);
    if (p) {
      for (const S of m) b(p).push(S);
      o.delete(d);
    }
  }
  return s;
}
function jt(e) {
  return e.flatMap((s) => s.groups.flatMap((t) => t.cells));
}
function Qs(e) {
  var r;
  if (e.length === 0) return { initial: null, turns: [...e] };
  const s = e[0], t = ((r = s.groups[0]) == null ? void 0 : r.cells) ?? [], n = t.findIndex(
    (i) => i.kind === "system" && i.headerReason === "initial" && i.prompt !== void 0
  );
  if (n < 0) return { initial: null, turns: [...e] };
  const l = t[n], o = {
    ...s,
    groups: [
      {
        ...s.groups[0],
        cells: t.filter((i, f) => f !== n)
      }
    ]
  };
  return { initial: l, turns: [o, ...e.slice(1)] };
}
const Z = {
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
}, Pt = "agent-trace-timeline-styles", Ys = `
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
let dt = !1;
function qs() {
  if (dt || typeof document > "u") return;
  if (document.getElementById(Pt)) {
    dt = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = Pt, e.textContent = Ys, document.head.appendChild(e), dt = !0;
}
function ht(e) {
  return Wn(e);
}
function pn(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function Nt(e) {
  return e != null && Number.isFinite(e);
}
function Zs(e) {
  if (!Nt(e.startedAt)) return null;
  const s = Nt(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + s };
}
function gn(e, s = "sequence") {
  if (s !== "sequence")
    return el(
      e,
      s === "duration" || s === "actual",
      s === "duration"
    );
  const t = [], n = [];
  for (const l of e) {
    const o = l.groups.flatMap((r) => r.cells);
    o.length !== 0 && (l.turn !== null && n.push({
      turn: l.turn,
      time: t.length
    }), t.push(
      ...o.map(
        (r, i) => ({
          start: t.length + i,
          end: t.length + i + 1,
          index: r.index,
          isError: r.isError === !0,
          kind: r.kind,
          label: r.text,
          lane: pn(r.kind)
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
function el(e, s, t) {
  const n = e.flatMap((a) => {
    const h = a.groups.flatMap(
      (c) => c.cells.flatMap((b) => {
        const k = Zs(b);
        return k === null ? [] : [
          {
            ...k,
            index: b.index,
            isError: b.isError === !0,
            kind: b.kind,
            label: b.text,
            lane: pn(b.kind)
          }
        ];
      })
    );
    return h.length === 0 ? [] : [{ turn: a.turn, rawSpans: h }];
  }), l = n.flatMap((a) => a.rawSpans);
  if (l.length === 0) return null;
  const o = /* @__PURE__ */ new Map();
  let r = 0, i = null;
  for (const a of [...l].sort(
    (h, c) => h.start - c.start || h.end - c.end
  ))
    t && i !== null && a.start > i && (r += a.start - i), o.set(a, r), i = i === null ? a.end : Math.max(i, a.end);
  const f = [], y = [];
  for (const a of n) {
    const h = a.rawSpans.map((c) => {
      const b = o.get(c) ?? 0;
      return {
        ...c,
        start: c.start - b,
        end: (s ? c.end : c.start) - b
      };
    });
    f.push(...h), a.turn !== null && y.push({
      turn: a.turn,
      time: Math.min(...h.map((c) => c.start))
    });
  }
  return {
    start: Math.min(...f.map((a) => a.start)),
    end: Math.max(...f.map((a) => a.end)),
    spans: f,
    turnBoundaries: y
  };
}
function tl(e, s, t = "sequence") {
  const n = gn(e, t);
  return new Set(
    n == null ? void 0 : n.spans.filter((l) => l.start <= s.end && l.end >= s.start).map((l) => l.index)
  );
}
qs();
const Qe = window.QwenPaw.host, F = Qe.React, { useEffect: We, useMemo: Ft, useRef: Ue, useState: Te } = F, { Tooltip: nl } = Qe.antd, mt = 3, sl = 4, ll = 0.08, ol = 0.025, rl = 32, il = 0.5;
function al(e) {
  const s = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, n = e.timing, l = n && Number.isFinite(n.ttft_ms) ? n.ttft_ms : void 0, o = n && Number.isFinite(n.decode_ms) ? n.decode_ms : void 0;
  return {
    ...s === void 0 ? {} : { durationMs: s },
    ...t === void 0 ? {} : { startedAt: t },
    ...l === void 0 || o === void 0 ? {} : { ttftMs: l, decodingMs: o }
  };
}
function cl(e) {
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
function ul(e, s) {
  const t = cl(e);
  if (s === void 0) return t;
  const n = s.durationMs === void 0 ? null : `Total ${ht(s.durationMs)}`, l = s.startedAt === void 0 ? null : s.durationMs === void 0 ? `Started ${De(s.startedAt)}` : `${De(s.startedAt)} → ${De(
    s.startedAt + s.durationMs
  )}`, o = s.ttftMs === void 0 || s.decodingMs === void 0 ? null : `TTFT ${ht(
    s.ttftMs
  )} · Decoding ${ht(s.decodingMs)}`, r = [n, o].filter((i) => i !== null).join(" · ");
  return [t, l, r].filter((i) => i !== null && i !== "").join(`
`);
}
function vt(e, s) {
  return e <= s ? { start: e, end: s } : { start: s, end: e };
}
function ft(e) {
  return Math.min(1, Math.max(0, e));
}
function dl(e, s, t, n) {
  const l = Math.min(n - t, Math.max(0, s)), o = Math.min(
    Math.max(e - l / 2, t),
    n - l
  );
  return { start: o, end: o + l };
}
function Bt(e, s, t, n, l) {
  const o = vt(
    Math.min(l, Math.max(n, e.start)),
    Math.min(l, Math.max(n, e.end))
  );
  return {
    start: (o.start - s) / t,
    end: (o.end - s) / t
  };
}
function yn({
  label: e,
  placement: s,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ F.createElement(
    nl,
    {
      title: /* @__PURE__ */ F.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: s,
      mouseEnterDelay: il,
      ...n
    },
    t
  );
}
function Ht() {
  return /* @__PURE__ */ F.createElement("div", { className: Z.labels, "aria-hidden": "true" }, /* @__PURE__ */ F.createElement("span", null, "Input"), /* @__PURE__ */ F.createElement("span", null, "Model"), /* @__PURE__ */ F.createElement("span", null, "Tools"));
}
function Wt({
  loading: e,
  onHover: s,
  onLoad: t
}) {
  return /* @__PURE__ */ F.createElement(
    yn,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ F.createElement(
      "button",
      {
        type: "button",
        className: Z.earlierHistory,
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
const hl = F.memo(function({
  turns: s,
  mode: t,
  range: n,
  hasEarlierRecords: l = !1,
  onLoadEarlier: o,
  selectedIndex: r = null,
  searchMatchIndexes: i = null,
  onRangeChange: f,
  onRecordSelect: y,
  onRecordFocus: a
}) {
  const h = typeof Qe.useTheme == "function" ? Qe.useTheme() : void 0, c = Ft(
    () => gn(s, t),
    [t, s]
  ), b = Ft(
    () => new Map(
      s.flatMap(
        (v) => v.groups.flatMap(
          (g) => g.cells.map(
            (T) => [T.index, al(T)]
          )
        )
      )
    ),
    [s]
  ), k = Ue(null), _ = Ue(null), j = Ue(null), w = Ue(null), [d, m] = Te(null), [p, S] = Te(null), [A, E] = Te(!1), [R, z] = Te(!1), [M, D] = Te(null), [se, P] = Te(!1);
  We(() => {
    c !== null && n !== null && (n.end < c.start || n.start > c.end) && f(null);
  }, [c, f, n]), We(() => {
    c !== null && (P(!1), D(
      (v) => v !== null && (v.end < c.start || v.start > c.end) ? null : v
    ));
  }, [c]), We(() => {
    if (c === null || r === null) return;
    const v = c.spans.find(
      (g) => g.index === r
    );
    v !== void 0 && (P(!0), D((g) => {
      if (g === null || v.end > g.start && v.start < g.end)
        return g;
      const T = Math.max(1, g.end - g.start), I = v.end <= g.start ? v.start : v.end - T, B = Math.min(
        Math.max(I, c.start),
        Math.max(c.start, c.end - T)
      );
      return B === g.start ? g : { start: B, end: B + T };
    }));
  }, [c, r]);
  const V = Math.max(1, ((c == null ? void 0 : c.end) ?? 0) - ((c == null ? void 0 : c.start) ?? 0)), me = Math.min(
    V,
    Math.max(1, ((M == null ? void 0 : M.end) ?? 0) - ((M == null ? void 0 : M.start) ?? 0))
  ), Pe = c === null || M === null ? (c == null ? void 0 : c.start) ?? 0 : Math.min(
    Math.max(M.start, c.start),
    c.end - me
  ), W = M === null ? V : me, H = M === null ? (c == null ? void 0 : c.start) ?? 0 : Pe, Me = l && c !== null && H === c.start, Ie = o === void 0 || A ? void 0 : () => {
    E(!0), o().finally(() => {
      E(!1);
    });
  }, ye = c === null ? void 0 : {
    "--trajectory-domain-left": `${-(H - c.start) / W * 100}%`,
    "--trajectory-domain-width": `${V / W * 100}%`
  }, G = c === null || n === null ? null : Bt(
    n,
    H,
    W,
    c.start,
    c.end
  ), ce = (c === null || d === null ? null : Bt(
    d,
    H,
    W,
    c.start,
    c.end
  )) ?? G, ze = d ?? n;
  if (We(() => {
    const v = j.current;
    if (v === null) return;
    const g = (T) => {
      T.preventDefault();
      const I = w.current;
      if (I === null || c === null) return;
      P(!1);
      const B = I.getBoundingClientRect(), U = ft(
        (T.clientX - B.left) / Math.max(1, B.width)
      ), Y = Math.min(
        V,
        Math.max(
          Math.min(
            t === "sequence" ? sl : 20,
            V
          ),
          W * Math.exp(T.deltaY * 15e-4)
        )
      );
      if (Y >= V * 0.999) {
        D(null);
        return;
      }
      const J = H + U * W, q = Math.min(
        Math.max(J - U * Y, c.start),
        c.end - Y
      );
      D({ start: q, end: q + Y });
    };
    return v.addEventListener("wheel", g, { passive: !1 }), () => {
      v.removeEventListener("wheel", g);
    };
  }, [W, H, V, t, c]), c === null)
    return /* @__PURE__ */ F.createElement(
      "section",
      {
        ref: j,
        className: Z.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ F.createElement("div", { className: Z.plot }, /* @__PURE__ */ F.createElement(Ht, null), /* @__PURE__ */ F.createElement("div", { className: Z.track }, /* @__PURE__ */ F.createElement("span", { className: Z.empty }, "No timing data"), l && /* @__PURE__ */ F.createElement(
        Wt,
        {
          loading: A,
          onHover: () => {
            S(null);
          },
          onLoad: Ie
        }
      )))
    );
  const Oe = Math.min(
    W,
    V / c.spans.length
  ), Se = (v) => {
    const g = v.currentTarget.getBoundingClientRect();
    return ft((v.clientX - g.left) / Math.max(1, g.width));
  }, xe = (v) => {
    var B;
    const g = v.target instanceof HTMLElement ? v.target : null, T = (B = g == null ? void 0 : g.closest("[data-timeline-record-index]")) == null ? void 0 : B.dataset.timelineRecordIndex;
    if (T === void 0) return null;
    const I = Number(T);
    return Number.isFinite(I) ? I : null;
  }, Ne = (v) => {
    f(v);
  }, Fe = (v) => {
    if (v.button === 2) {
      _.current = {
        anchorClientX: v.clientX,
        anchorStart: H,
        moved: !1,
        pannable: M !== null,
        pointerId: v.pointerId
      }, M !== null && P(!1), z(!0), typeof v.currentTarget.setPointerCapture == "function" && v.currentTarget.setPointerCapture(v.pointerId);
      return;
    }
    if (v.button !== 0) return;
    const g = Se(v), T = H + g * W, I = xe(v);
    S({ fraction: g, recordIndex: I }), k.current = {
      pointerId: v.pointerId,
      anchorTime: T,
      anchorClientX: v.clientX,
      recordIndex: I
    }, typeof v.currentTarget.setPointerCapture == "function" && v.currentTarget.setPointerCapture(v.pointerId), m({ start: T, end: T });
  }, et = (v) => {
    const g = v.currentTarget.getBoundingClientRect(), T = Se(v);
    S({ fraction: T, recordIndex: xe(v) });
    const I = _.current;
    if (I !== null && I.pointerId === v.pointerId) {
      if (Math.abs(v.clientX - I.anchorClientX) >= mt && (I.moved = !0), !I.pannable) return;
      const J = (v.clientX - I.anchorClientX) / Math.max(1, g.width), q = Math.min(
        Math.max(I.anchorStart - J * W, c.start),
        c.end - W
      );
      D({ start: q, end: q + W });
      return;
    }
    const B = k.current;
    if (B === null || B.pointerId !== v.pointerId) return;
    let U = H;
    if (M !== null) {
      const J = v.clientX - g.left, q = Math.min(
        rl,
        Math.max(1, g.width * ll)
      ), X = J < q ? -1 : J > g.width - q ? 1 : 0;
      if (X !== 0) {
        const be = X < 0 ? q - J : J - (g.width - q), ue = ft(be / q), oe = H + X * W * ol * Math.max(0.2, ue);
        U = Math.min(
          Math.max(oe, c.start),
          c.end - W
        ), U !== H && (P(!1), D({
          start: U,
          end: U + W
        }));
      }
    }
    const Y = U + T * W;
    m(vt(B.anchorTime, Y));
  }, tt = (v) => {
    const g = _.current;
    if (g !== null && g.pointerId === v.pointerId) {
      const X = g.moved || Math.abs(v.clientX - g.anchorClientX) >= mt;
      _.current = null, z(!1), X || f(null);
      return;
    }
    const T = k.current;
    if (T === null || T.pointerId !== v.pointerId) return;
    const I = Se(v), B = H + I * W, U = vt(T.anchorTime, B);
    S({ fraction: I, recordIndex: xe(v) }), k.current = null, m(null);
    const Y = Math.abs(v.clientX - T.anchorClientX) < mt, J = Y && T.recordIndex !== null ? c.spans.find((X) => X.index === T.recordIndex) : void 0;
    if (J !== void 0) {
      f(null), y == null || y(J.index);
      return;
    }
    const q = U.end - U.start < Oe ? dl(
      Y ? U.start : (U.start + U.end) / 2,
      Oe,
      c.start,
      c.end
    ) : U;
    if (Ne(q), Y) {
      const X = U.start, be = c.spans.reduce((ue, oe) => {
        const Ae = X < ue.start ? ue.start - X : X > ue.end ? X - ue.end : 0;
        return (X < oe.start ? oe.start - X : X > oe.end ? X - oe.end : 0) < Ae ? oe : ue;
      });
      a == null || a(be.index);
    }
  }, nt = (v) => {
    v.key !== "Escape" || n === null || (v.preventDefault(), f(null));
  }, Be = () => {
    k.current = null, _.current = null, m(null), S(null), z(!1);
  };
  return /* @__PURE__ */ F.createElement(
    "section",
    {
      ref: j,
      className: Z.root,
      "data-theme": h || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ F.createElement("div", { className: Z.plot }, /* @__PURE__ */ F.createElement(Ht, null), /* @__PURE__ */ F.createElement(
      "div",
      {
        ref: w,
        className: Z.track,
        "data-panning": R || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: nt,
        onPointerDown: Fe,
        onPointerMove: et,
        onPointerUp: tt,
        onPointerCancel: Be,
        onPointerLeave: () => {
          k.current === null && _.current === null && S(null);
        },
        onDoubleClick: (v) => {
          v.preventDefault(), f(null);
        },
        onContextMenu: (v) => {
          v.preventDefault();
        }
      },
      Me && /* @__PURE__ */ F.createElement(
        Wt,
        {
          loading: A,
          onHover: () => {
            S(null);
          },
          onLoad: Ie
        }
      ),
      p !== null && p.recordIndex === null && d === null && /* @__PURE__ */ F.createElement(
        "div",
        {
          className: Z.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${p.fraction * 100}%`
          }
        }
      ),
      ce !== null && /* @__PURE__ */ F.createElement(F.Fragment, null, /* @__PURE__ */ F.createElement(
        "div",
        {
          className: Z.selection,
          "data-dragging": d === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ce.start * 100}%`,
            "--trajectory-selection-width": `${(ce.end - ce.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ F.createElement(
        "div",
        {
          className: Z.selectionEdges,
          "data-dragging": d === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ce.start * 100}%`,
            "--trajectory-selection-width": `${(ce.end - ce.start) * 100}%`
          }
        }
      )),
      /* @__PURE__ */ F.createElement(
        "div",
        {
          className: Z.turnBoundaries,
          "data-animate-viewport": se || void 0,
          "aria-hidden": "true",
          style: ye
        },
        c.turnBoundaries.filter(
          (v) => v.time > c.start && v.time >= H && v.time <= H + W
        ).map((v) => /* @__PURE__ */ F.createElement(
          "span",
          {
            className: Z.turnBoundary,
            "data-turn": v.turn,
            key: v.turn,
            style: {
              "--trajectory-turn-left": `${(v.time - c.start) / V * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ F.createElement(
        "div",
        {
          className: Z.lanes,
          "data-animate-viewport": se || void 0,
          "data-timeline-domain": !0,
          style: ye
        },
        c.spans.filter(
          (v) => v.index === r || v.end >= H && v.start <= H + W
        ).map((v) => {
          const g = (v.start - c.start) / V, I = (v.end - v.start) / V * 100, B = b.get(v.index), U = B == null ? void 0 : B.ttftMs, Y = B == null ? void 0 : B.decodingMs, J = U === void 0 || Y === void 0 || U + Y <= 0 ? null : U / (U + Y);
          return /* @__PURE__ */ F.createElement(
            yn,
            {
              key: v.index,
              label: ul(v.kind, B),
              placement: "bottom"
            },
            /* @__PURE__ */ F.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: Z.span,
                "data-timeline-span": v.kind,
                "data-timeline-record-index": v.index,
                "data-assistant-timing": J === null ? void 0 : "true",
                "data-error": v.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": v.index === r || void 0,
                "data-hovered": (p == null ? void 0 : p.recordIndex) === v.index || void 0,
                "data-search-match": i === null ? void 0 : i.has(v.index) ? "true" : "false",
                "data-selected": ze === null ? void 0 : v.start <= ze.end && v.end >= ze.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${g * 100}%`,
                  "--trajectory-span-width": `${I}%`,
                  "--trajectory-span-gap": `min(${I * 0.08}%, 1px)`,
                  "--trajectory-span-lane": v.lane,
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
}), bt = window.QwenPaw.host, ie = bt.React, { Button: ml, Input: fl, Segmented: pl, Tooltip: Ut } = bt.antd, { MenuFoldOutlined: gl, MenuUnfoldOutlined: yl, ReloadOutlined: vl, SearchOutlined: El } = bt.antdIcons;
function Sl({
  mode: e,
  onModeChange: s,
  search: t,
  onSearchChange: n,
  onRefresh: l,
  modeOptions: o,
  allCollapsed: r,
  hasRequests: i,
  onToggleCollapseAll: f,
  callsCollapsed: y,
  onToggleCallsCollapsed: a
}) {
  const h = te();
  return /* @__PURE__ */ ie.createElement(
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
    /* @__PURE__ */ ie.createElement(Ut, { title: x(h, "projectionHint") }, /* @__PURE__ */ ie.createElement(
      pl,
      {
        size: "small",
        value: e,
        options: o,
        onChange: (c) => s(c)
      }
    )),
    /* @__PURE__ */ ie.createElement(
      fl,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ ie.createElement(El, null),
        placeholder: x(h, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (c) => n(c.target.value)
      }
    ),
    i && /* @__PURE__ */ ie.createElement(
      Ut,
      {
        title: r ? x(h, "expandAll") : x(h, "collapseAll")
      },
      /* @__PURE__ */ ie.createElement(
        ml,
        {
          size: "small",
          type: "text",
          icon: r ? /* @__PURE__ */ ie.createElement(yl, null) : /* @__PURE__ */ ie.createElement(gl, null),
          onClick: f
        }
      )
    ),
    /* @__PURE__ */ ie.createElement("span", { style: { marginLeft: "auto" } }, /* @__PURE__ */ ie.createElement(
      "a",
      {
        onClick: l,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ ie.createElement(vl, null),
      " ",
      x(h, "refresh")
    ))
  );
}
function vn(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function xl(e) {
  if (!e) return "-";
  const s = new Date(e);
  return Number.isNaN(s.getTime()) ? e : s.toLocaleString();
}
function bl(e) {
  if (!e) return "-";
  const s = Date.parse(e);
  if (!Number.isFinite(s)) return e;
  const t = Date.now() - s;
  return t < 6e4 ? "刚刚" : t < 36e5 ? `${Math.floor(t / 6e4)} 分钟前` : t < 864e5 ? `${Math.floor(t / 36e5)} 小时前` : new Date(s).toLocaleString();
}
function En(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function Kt(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const Sn = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default"
};
function xn(e) {
  return e || "unknown";
}
const Ze = window.QwenPaw.host, O = Ze.React, { useCallback: Vt, useEffect: pt, useMemo: de, useRef: wl, useState: ne } = O, {
  Button: Ke,
  Empty: Xt,
  Popconfirm: kl,
  Popover: Tl,
  Space: _l,
  Spin: bn,
  Switch: Ml,
  Tag: Il,
  Tooltip: Cl,
  message: Le
} = Ze.antd, { DeleteOutlined: zl, DownloadOutlined: Ol, SettingOutlined: Gt } = Ze.antdIcons, { Text: ge } = Ze.antd.Typography;
function Jt({
  config: e,
  onChange: s,
  children: t
}) {
  const n = te(), l = (r, i, f) => /* @__PURE__ */ O.createElement(
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
    /* @__PURE__ */ O.createElement(ge, { style: { fontSize: 13 } }, r),
    /* @__PURE__ */ O.createElement(
      Ml,
      {
        size: "small",
        checked: !!i,
        onChange: (y) => s({ [f]: y })
      }
    )
  ), o = /* @__PURE__ */ O.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ O.createElement(ge, { strong: !0, style: { fontSize: 13 } }, x(n, "settings")), /* @__PURE__ */ O.createElement("div", { style: { marginTop: 8 } }, e ? [
    l(x(n, "enabled"), e.enabled, "enabled"),
    l(x(n, "captureLlm"), e.capture_llm, "capture_llm"),
    l(
      x(n, "captureTools"),
      e.capture_tools,
      "capture_tools"
    ),
    l(
      x(n, "captureHeaders"),
      e.capture_headers ?? !0,
      "capture_headers"
    )
  ] : /* @__PURE__ */ O.createElement(bn, { size: "small" })));
  return /* @__PURE__ */ O.createElement(Tl, { content: o, trigger: "click", placement: "bottomRight" }, t);
}
function Al({
  sessionId: e,
  summary: s,
  locale: t,
  onJumpSession: n,
  onRefreshSessions: l
}) {
  const [o, r] = ne(null), [i, f] = ne(!1), [y, a] = ne(!1), [h, c] = ne(""), [b, k] = ne("sequence"), [_, j] = ne(null), [w, d] = ne(null), [m, p] = ne(null), [S, A] = ne(
    /* @__PURE__ */ new Set()
  ), [E, R] = ne(!1), [z, M] = ne(null), [D, se] = ne(null), [P, V] = ne(null), [me, Pe] = ne(null), W = wl(null);
  W.current = e, pt(() => {
    Mn().then(M).catch(() => M(null));
  }, []);
  const H = Vt(async (g, T) => {
    T || f(!0);
    try {
      const I = await _n(g, {
        beforeSeq: T,
        limit: 200
      });
      Pe(null), r((B) => T && B ? {
        ...I,
        events: [...I.events, ...B.events]
      } : I);
    } catch (I) {
      Pe({
        message: String(I.message),
        status: I instanceof rn ? I.status : null
      });
    } finally {
      T || f(!1);
    }
  }, []), Me = Vt(async (g) => {
    try {
      const T = await Tn(g);
      V(T), se({
        sessionId: g,
        inputTokens: T.input_tokens,
        outputTokens: T.output_tokens,
        totalTokens: T.total_tokens,
        reasoningTokens: Number(T.reasoning_tokens ?? 0)
      });
    } catch {
      V(null), se(null);
    }
  }, []);
  pt(() => {
    e ? (j(null), d(null), p(null), A(/* @__PURE__ */ new Set()), c(""), H(e), Me(e)) : (r(null), V(null), se(null));
  }, [e, H, Me]);
  const Ie = de(
    () => o ? Js(o.events) : [],
    [o]
  ), { initial: ye, turns: G } = de(
    () => Qs(Ie),
    [Ie]
  ), Ce = de(
    () => ye ? [ye, ...jt(G)] : jt(G),
    [ye, G]
  ), ce = de(
    () => G.some((g) => g.status === "running"),
    [G]
  );
  pt(() => {
    if (!e || !ce) return;
    const g = setInterval(() => {
      document.visibilityState === "visible" && W.current && H(W.current);
    }, 5e3);
    return () => clearInterval(g);
  }, [e, ce, H]);
  const ze = de(
    () => _ === null ? null : tl(G, _, b),
    [_, G, b]
  ), Oe = de(() => {
    const g = h.trim().toLowerCase();
    return g ? new Set(
      Ce.filter(
        (T) => [
          T.text,
          T.outputText,
          T.thinkingText,
          T.toolName,
          T.toolInput,
          T.toolOutput,
          T.model
        ].filter(Boolean).join(`
`).toLowerCase().includes(g)
      ).map((T) => T.index)
    ) : null;
  }, [h, Ce]), Se = de(
    () => w === null ? null : Ce.find((g) => g.index === w) ?? null,
    [Ce, w]
  ), xe = de(() => {
    var wt, kt;
    if (m === null) return null;
    const g = G.find((N) => N.turn === m);
    if (!g) return null;
    const T = ((wt = g.groups[0]) == null ? void 0 : wt.cells) ?? [], I = T.filter((N) => N.kind === "message"), B = T.filter((N) => N.kind === "tool"), U = [
      ...new Set(
        I.map((N) => N.model).filter((N) => !!N)
      )
    ], Y = [
      ...new Set(
        I.map((N) => N.provider).filter((N) => !!N)
      )
    ];
    let J = 0, q = 0, X = 0, be = 0, ue = 0, oe = null, Ae = 0;
    const st = [];
    for (const N of T)
      N.usage && (J += N.usage.input_tokens ?? 0, q += N.usage.output_tokens ?? 0, X += N.usage.cache_input_tokens ?? 0, be += N.usage.cache_creation_input_tokens ?? 0, ue += N.usage.reasoning_tokens ?? 0), N.timing && (oe = oe === null ? N.timing.ttft_ms : Math.min(oe, N.timing.ttft_ms), Ae = (Ae ?? 0) + N.timing.decode_ms), N.isError && st.push(N.toolError ?? N.text ?? "error");
    const we = T.find((N) => N.kind === "user"), wn = (kt = [...I].reverse().find((N) => N.options)) == null ? void 0 : kt.options, lt = [...I].reverse().find((N) => N.outputText);
    return {
      turn: m,
      status: g.status,
      durationMs: g.durationMs,
      startedAt: (we == null ? void 0 : we.startedAt) ?? null,
      query: (we == null ? void 0 : we.text) ?? "",
      llmCalls: I.length,
      toolCalls: B.length,
      models: U,
      providers: Y,
      inputTokens: J,
      outputTokens: q,
      cacheReadTokens: X,
      cacheWriteTokens: be,
      reasoningTokens: ue,
      resultIndex: lt == null ? void 0 : lt.index,
      ttftMs: oe,
      decodeMs: Ae,
      errors: st,
      options: wn,
      sessionTotals: D && D.sessionId === e ? {
        inputTokens: D.inputTokens,
        outputTokens: D.outputTokens,
        totalTokens: D.totalTokens,
        reasoningTokens: D.reasoningTokens
      } : void 0
    };
  }, [m, G, D, e]), Ne = !!(o && o.events.length > 0 && o.events[0].seq > 1), Fe = async (g) => {
    try {
      M(await In(g));
    } catch (T) {
      Le.error(String(T.message));
    }
  }, et = de(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), tt = de(() => {
    if (!P) return null;
    const g = [
      `${P.runs} ${x(t, "statRounds")} · ${P.llm_calls} ${x(t, "statSteps")}`,
      `LLM ${le(P.llm_ms_total / 1e3)} · ${x(
        t,
        "toolCalls"
      )} ${le(P.tool_ms_total / 1e3)}`,
      `${x(t, "statTtftAvg")} ${P.ttft_ms_avg === null ? "-" : le(P.ttft_ms_avg / 1e3)} · ${St(
        P.output_tokens,
        P.decode_ms_total / 1e3
      )}`
    ];
    if (P.cache_read_tokens > 0 || P.cache_write_tokens > 0) {
      const T = P.cache_read_tokens + P.input_tokens, I = T > 0 ? Math.round(P.cache_read_tokens / T * 100) : 0;
      g.push(`${x(t, "statCacheHit")} ${I}%`);
    }
    return g.push(
      `${x(t, "statInput")} ${ee(
        P.input_tokens
      )} tok · ${x(t, "statOutput")} ${ee(
        P.output_tokens
      )} tok`
    ), s && g.push(Kt(s.size_bytes)), g.join(" | ");
  }, [P, s, t]), nt = () => {
    d(null), p(null);
  }, Be = (me == null ? void 0 : me.status) === 404, v = Se !== null || xe !== null;
  return /* @__PURE__ */ O.createElement(
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
    /* @__PURE__ */ O.createElement(
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
      e ? /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            minWidth: 0
          }
        },
        /* @__PURE__ */ O.createElement(
          ge,
          {
            strong: !0,
            ellipsis: {
              tooltip: (s == null ? void 0 : s.title) || e
            },
            style: { fontSize: 13, flex: "0 1 auto", minWidth: 60 }
          },
          (s == null ? void 0 : s.title) || (s == null ? void 0 : s.agent_id) || vn(e)
        ),
        /* @__PURE__ */ O.createElement(
          Il,
          {
            color: Sn[(s == null ? void 0 : s.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          xn((s == null ? void 0 : s.status) ?? "unknown")
        ),
        s != null && s.channel ? /* @__PURE__ */ O.createElement(ge, { type: "secondary", style: { fontSize: 11, flexShrink: 0 } }, s.channel) : null,
        /* @__PURE__ */ O.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ O.createElement(_l, null, /* @__PURE__ */ O.createElement(Jt, { config: z, onChange: Fe }, /* @__PURE__ */ O.createElement(Ke, { size: "small", icon: /* @__PURE__ */ O.createElement(Gt, null) })), /* @__PURE__ */ O.createElement(Cl, { title: x(t, "export") }, /* @__PURE__ */ O.createElement(
          Ke,
          {
            size: "small",
            icon: /* @__PURE__ */ O.createElement(Ol, null),
            onClick: () => {
              Cn(e).then(() => Le.success(x(t, "exported"))).catch(
                (g) => Le.error(String(g.message))
              );
            }
          },
          x(t, "export")
        )), /* @__PURE__ */ O.createElement(
          kl,
          {
            title: x(t, "deleteConfirm"),
            onConfirm: () => {
              zn(e).then(() => {
                Le.success(x(t, "deleted")), l == null || l();
              }).catch(
                (g) => Le.error(String(g.message))
              );
            }
          },
          /* @__PURE__ */ O.createElement(Ke, { size: "small", danger: !0, icon: /* @__PURE__ */ O.createElement(zl, null) }, x(t, "delete"))
        )))
      ), /* @__PURE__ */ O.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap"
          }
        },
        /* @__PURE__ */ O.createElement(
          ge,
          {
            type: "secondary",
            style: { fontSize: 11, flex: "1 1 300px", minWidth: 0 }
          },
          tt ?? // Transient line while the stats endpoint responds.
          (s ? `${s.runs} ${x(t, "statRounds")} · ${s.llm_calls} ${x(t, "statSteps")} · ${En(
            s.total_tokens
          )} ${x(t, "tokens")} · ${Kt(
            s.size_bytes
          )}` : "")
        ),
        /* @__PURE__ */ O.createElement(
          ge,
          {
            type: "secondary",
            copyable: {
              text: e,
              tooltips: [
                x(t, "copySessionId"),
                x(t, "copiedSessionId")
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
      )) : /* @__PURE__ */ O.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8
          }
        },
        /* @__PURE__ */ O.createElement(ge, { type: "secondary", style: { fontSize: 13 } }, x(t, "selectSession")),
        /* @__PURE__ */ O.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ O.createElement(Jt, { config: z, onChange: Fe }, /* @__PURE__ */ O.createElement(Ke, { size: "small", icon: /* @__PURE__ */ O.createElement(Gt, null) })))
      )
    ),
    me && !Be && /* @__PURE__ */ O.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ O.createElement(ge, { type: "danger", style: { fontSize: 12 } }, `${x(t, "loadFailed")}: ${me.message}`)),
    /* @__PURE__ */ O.createElement(
      Sl,
      {
        mode: b,
        onModeChange: k,
        search: h,
        onSearchChange: c,
        onRefresh: () => {
          e && (H(e), Me(e)), l == null || l();
        },
        modeOptions: et,
        allCollapsed: G.length > 0 && G.every((g) => S.has(g.turn ?? -1)),
        hasRequests: G.some((g) => g.turn !== null),
        callsCollapsed: E,
        onToggleCallsCollapsed: () => R((g) => !g),
        onToggleCollapseAll: () => {
          A((g) => G.some(
            (I) => I.turn !== null && !g.has(I.turn)
          ) ? new Set(
            G.map((I) => I.turn).filter((I) => I !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ O.createElement(
      hl,
      {
        turns: G,
        mode: b,
        range: _,
        hasEarlierRecords: Ne,
        onLoadEarlier: async () => {
          var g;
          return !o || o.events.length === 0 ? !1 : (await H(e, (g = o.events[0]) == null ? void 0 : g.seq), !0);
        },
        selectedIndex: w,
        searchMatchIndexes: Oe,
        onRangeChange: j,
        onRecordSelect: d,
        onRecordFocus: d
      }
    ),
    i && !o ? /* @__PURE__ */ O.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ O.createElement(bn, null)) : o ? /* @__PURE__ */ O.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ O.createElement(
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
      /* @__PURE__ */ O.createElement(
        Xs,
        {
          turns: G,
          selectedIndex: w,
          selectedTurn: m,
          collapsedTurns: S,
          focusIndexes: ze,
          searchMatchIndexes: Oe,
          onSelectedIndexChange: (g) => {
            if (g === w) {
              d(null);
              return;
            }
            d(g), p(null);
          },
          onSelectedTurnChange: (g) => {
            p(g), d(null);
          },
          callsCollapsed: E,
          onToggleTurn: (g) => {
            A((T) => {
              const I = new Set(T);
              return I.has(g) ? I.delete(g) : I.add(g), I;
            });
          },
          hasOlderRecords: Ne,
          loadingOlder: y,
          onLoadOlder: () => {
            var g;
            !o || o.events.length === 0 || (a(!0), H(
              e,
              (g = o.events[0]) == null ? void 0 : g.seq
            ).finally(() => a(!1)));
          },
          emptyText: x(t, "noSessions"),
          initialRecord: ye
        }
      )
    ), v ? /* @__PURE__ */ O.createElement(
      ss,
      {
        record: Se,
        request: xe,
        onJumpSession: n,
        onSelectTurn: (g) => {
          p(g), d(null);
        },
        onClose: nt
      }
    ) : null) : /* @__PURE__ */ O.createElement(
      Xt,
      {
        image: Xt.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: Be && e ? x(t, "noTraceForSession") : x(t, "selectSession")
      }
    )
  );
}
const _e = window.QwenPaw.host, L = _e.React, { useCallback: Qt, useEffect: gt, useMemo: Ve, useState: pe } = L, { Button: Yt, Empty: qt, Input: $l, Spin: Rl, Tag: Zt, Tooltip: en } = _e.antd, {
  CaretRightOutlined: Ll,
  MenuFoldOutlined: Dl,
  MenuUnfoldOutlined: jl,
  SearchOutlined: Pl
} = _e.antdIcons, { Text: je } = _e.antd.Typography;
function Nl({
  groups: e,
  collapsedAgents: s,
  onToggleAgent: t,
  searching: n,
  selected: l,
  onSelect: o,
  locale: r
}) {
  const i = e.length > 1;
  return /* @__PURE__ */ L.createElement(L.Fragment, null, e.map(([f, y]) => {
    const a = i && !n && s.has(f);
    return /* @__PURE__ */ L.createElement("div", { key: f }, i && /* @__PURE__ */ L.createElement(
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
      /* @__PURE__ */ L.createElement(
        Ll,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: a ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ L.createElement(je, { strong: !0, style: { fontSize: 12 } }, f),
      /* @__PURE__ */ L.createElement(je, { type: "secondary", style: { fontSize: 11 } }, y.length)
    ), !a && y.map((h) => {
      const c = h.session_id === l;
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
            background: c ? "rgba(22,119,255,0.10)" : "transparent",
            border: c ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ L.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ L.createElement(
            je,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${h.title ? `${h.title}
` : ""}${h.session_id}`
              }
            },
            h.title || h.agent_id || vn(h.session_id)
          ),
          i ? null : h.agent_id ? /* @__PURE__ */ L.createElement(
            Zt,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            h.agent_id
          ) : null,
          /* @__PURE__ */ L.createElement(
            Zt,
            {
              color: Sn[h.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            xn(h.status)
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
          /* @__PURE__ */ L.createElement("span", null, h.runs, " ", x(r, "runs")),
          /* @__PURE__ */ L.createElement("span", null, En(h.total_tokens), " tok"),
          /* @__PURE__ */ L.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: xl(h.last_event_t)
            },
            bl(h.last_event_t)
          )
        )
      );
    }));
  }));
}
function Fl() {
  const e = typeof _e.useLocale == "function" ? _e.useLocale() : void 0, s = Ve(
    () => Et(e ?? te()),
    [e]
  ), [t, n] = pe(null), [l, o] = pe(!1), [r, i] = pe(
    /* @__PURE__ */ new Set()
  ), [f, y] = pe(!1), [a, h] = pe(!1), [c, b] = pe(null), [k, _] = pe(""), [j, w] = pe(null), d = Qt(async () => {
    try {
      const E = await Tt({ limit: 100, offset: 0 });
      n(E.sessions), o(E.has_more), w(null);
    } catch (E) {
      w(String(E.message));
    }
  }, []), m = Qt(async () => {
    h(!0);
    try {
      const E = await Tt({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      n((R) => {
        const z = R ?? [];
        return [
          ...z,
          ...E.sessions.filter(
            (M) => !z.some((D) => D.session_id === M.session_id)
          )
        ];
      }), o(E.has_more);
    } catch (E) {
      w(String(E.message));
    } finally {
      h(!1);
    }
  }, [t]);
  gt(() => {
    d();
    try {
      const E = new URLSearchParams(window.location.search).get("session");
      E && an(E).then((R) => {
        b(R ?? E);
      });
    } catch {
    }
  }, [d]), gt(() => {
    try {
      const E = new URL(window.location.href);
      c ? E.searchParams.set("session", c) : E.searchParams.delete("session"), window.history.replaceState(window.history.state, "", E);
    } catch {
    }
  }, [c]), gt(() => {
    const E = setInterval(() => {
      document.visibilityState === "visible" && d();
    }, 15e3);
    return () => clearInterval(E);
  }, [d]);
  const p = Ve(
    () => (t == null ? void 0 : t.find((E) => E.session_id === c)) ?? null,
    [t, c]
  ), S = Ve(() => {
    if (!t) return [];
    const E = k.trim().toLowerCase();
    return E ? t.filter(
      (R) => [R.session_id, R.title ?? "", R.agent_id, R.channel].join(" ").toLowerCase().includes(E)
    ) : t;
  }, [t, k]), A = Ve(() => {
    const E = /* @__PURE__ */ new Map();
    for (const R of S) {
      const z = R.agent_id || "(unknown)", M = E.get(z);
      M ? M.push(R) : E.set(z, [R]);
    }
    return [...E.entries()];
  }, [S]);
  return /* @__PURE__ */ L.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, f ? /* @__PURE__ */ L.createElement(
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
    /* @__PURE__ */ L.createElement(en, { title: x(s, "expandSidebar"), placement: "right" }, /* @__PURE__ */ L.createElement(
      Yt,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ L.createElement(jl, null),
        onClick: () => y(!1)
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
        $l,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ L.createElement(Pl, null),
          placeholder: x(s, "searchPlaceholder"),
          value: k,
          style: { flex: 1, minWidth: 0 },
          onChange: (E) => _(E.target.value)
        }
      ),
      /* @__PURE__ */ L.createElement(en, { title: x(s, "collapseSidebar") }, /* @__PURE__ */ L.createElement(
        Yt,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ L.createElement(Dl, null),
          onClick: () => y(!0)
        }
      ))
    ),
    j ? /* @__PURE__ */ L.createElement("div", { style: { padding: "0 12px 4px" } }, /* @__PURE__ */ L.createElement(je, { type: "danger", style: { fontSize: 12 } }, `${x(s, "loadFailed")}: ${j}`)) : null,
    /* @__PURE__ */ L.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ L.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ L.createElement(Rl, null)) : S.length === 0 ? /* @__PURE__ */ L.createElement(
      qt,
      {
        image: qt.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ L.createElement("span", { style: { fontSize: 12 } }, x(s, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ L.createElement(
        je,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        x(s, "noSessionsHint")
      )
    ) : /* @__PURE__ */ L.createElement(
      Nl,
      {
        groups: A,
        collapsedAgents: r,
        onToggleAgent: (E) => {
          i((R) => {
            const z = new Set(R);
            return z.has(E) ? z.delete(E) : z.add(E), z;
          });
        },
        searching: !!k.trim(),
        selected: c,
        onSelect: b,
        locale: s
      }
    ), t !== null && l && !k.trim() && /* @__PURE__ */ L.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ L.createElement(
      "a",
      {
        onClick: () => void m(),
        style: { fontSize: 12 }
      },
      a ? "…" : `⋯ ${x(s, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ L.createElement(
    Al,
    {
      sessionId: c,
      summary: p,
      locale: s,
      onJumpSession: b,
      onRefreshSessions: () => void d()
    }
  ));
}
const Bl = window.QwenPaw.host.React;
var tn, nn;
(nn = (tn = window.QwenPaw).registerRoutes) == null || nn.call(tn, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: Fl,
    label: x(te(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
var sn, Xe, ln;
(ln = (Xe = (sn = window.QwenPaw.chat) == null ? void 0 : sn.rightHeader) == null ? void 0 : Xe.add) == null || ln.call(
  Xe,
  "agent-trace",
  Bl.createElement(jn),
  { id: "agent-trace-jump" }
);
