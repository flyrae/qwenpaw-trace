const Sn = {
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
    copiedSessionId: "已复制"
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
    copiedSessionId: "Copied"
  }
};
function nn(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function ie() {
  try {
    return nn(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function x(e, l) {
  return Sn[e][l];
}
const De = window.QwenPaw.host;
async function xn(e) {
  return Re(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats`
  );
}
async function sn(e, l) {
  return De.fetch ? De.fetch(e, l) : fetch(De.getApiUrl(e), {
    ...l,
    headers: {
      ...(l == null ? void 0 : l.headers) || {},
      ...De.getApiToken() ? { Authorization: `Bearer ${De.getApiToken()}` } : {}
    }
  });
}
async function Re(e, l) {
  const t = await sn(e, l), n = await t.text();
  let s = null;
  try {
    s = n ? JSON.parse(n) : null;
  } catch {
    s = null;
  }
  if (!t.ok) {
    const r = s && typeof s == "object" && "detail" in s ? s.detail : void 0;
    throw new Error(
      typeof r == "string" ? r : `HTTP ${t.status}`
    );
  }
  return s;
}
async function zt(e) {
  const l = new URLSearchParams();
  return l.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && l.set("offset", String(e.offset)), Re(
    `/agent-trace/sessions?${l.toString()}`
  );
}
async function bn(e, l) {
  const t = new URLSearchParams();
  l != null && l.beforeSeq && t.set("before_seq", String(l.beforeSeq)), t.set("limit", String(l == null ? void 0 : l.limit));
  const n = t.toString();
  return Re(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${n}`
  );
}
async function wn() {
  return Re("/agent-trace/config");
}
async function kn(e) {
  return Re("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
}
async function Tn(e) {
  const l = await sn(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export`
  );
  if (!l.ok) throw new Error(`HTTP ${l.status}`);
  const t = await l.blob(), n = URL.createObjectURL(t), s = document.createElement("a");
  s.href = n, s.download = `${e}.jsonl`, s.click(), URL.revokeObjectURL(n);
}
async function _n(e) {
  await Re(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
const Ot = 3e3;
function At(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function In(e, l) {
  const t = At(e ?? ""), n = At(l ?? "");
  if (t.length > Ot || n.length > Ot)
    return [
      ...t.map((h) => ({ kind: "del", text: h })),
      ...n.map((h) => ({ kind: "add", text: h }))
    ];
  const s = t.length, r = n.length, o = new Int32Array((s + 1) * (r + 1)), a = (h, i) => h * (r + 1) + i;
  for (let h = s - 1; h >= 0; h -= 1)
    for (let i = r - 1; i >= 0; i -= 1)
      o[a(h, i)] = t[h] === n[i] ? o[a(h + 1, i + 1)] + 1 : Math.max(o[a(h + 1, i)], o[a(h, i + 1)]);
  const f = [];
  let y = 0, c = 0;
  for (; y < s && c < r; )
    t[y] === n[c] ? (f.push({ kind: "same", text: t[y] }), y += 1, c += 1) : o[a(y + 1, c)] >= o[a(y, c + 1)] ? (f.push({ kind: "del", text: t[y] }), y += 1) : (f.push({ kind: "add", text: n[c] }), c += 1);
  for (; y < s; )
    f.push({ kind: "del", text: t[y] }), y += 1;
  for (; c < r; )
    f.push({ kind: "add", text: n[c] }), c += 1;
  return f;
}
function Mn(e, l = 3) {
  const t = new Array(e.length).fill(!1);
  e.forEach((r, o) => {
    if (r.kind !== "same")
      for (let a = Math.max(0, o - l); a <= Math.min(e.length - 1, o + l); a += 1)
        t[a] = !0;
  });
  const n = [];
  let s = 0;
  return e.forEach((r, o) => {
    t[o] ? (s > 0 && (n.push({ kind: "gap", count: s }), s = 0), n.push(r)) : s += 1;
  }), s > 0 && n.push({ kind: "gap", count: s }), n;
}
function Cn(e) {
  let l = 0, t = 0;
  for (const n of e)
    n.kind === "add" ? l += 1 : n.kind === "del" && (t += 1);
  return { added: l, removed: t };
}
const zn = {
  approval: { zh: "审批", en: "Approval" },
  receipt: { zh: "回执", en: "Receipt" },
  spawn: { zh: "子代理", en: "Spawn" },
  header: { zh: "提示词", en: "Prompt" },
  error: { zh: "错误", en: "Error" }
}, On = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" }
};
function ln(e, l) {
  const t = e.markerKind ? zn[e.markerKind] : void 0;
  if (t) return l === "zh-CN" ? t.zh : t.en;
  const n = On[e.kind];
  return n ? l === "zh-CN" ? n.zh : n.en : e.kind;
}
function An(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function ae(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const l = e * 1e3;
  return l < 1e3 ? `${Math.round(l)}ms` : l < 6e4 ? `${(l / 1e3).toFixed(1)}s` : `${Math.floor(l / 6e4)}m${Math.round(l % 6e4 / 1e3)}s`;
}
function re(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function Et(e, l) {
  return e === void 0 || !Number.isFinite(e) || l === null || l === void 0 || l <= 0 ? "-" : `${(e / l).toFixed(1)} tok/s`;
}
function Pe(e) {
  return e == null || !Number.isFinite(e) ? "-" : new Date(e).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
  });
}
function ce(e) {
  if (!e) return null;
  const l = Date.parse(e);
  return Number.isFinite(l) ? l : null;
}
const qe = window.QwenPaw.host, u = qe.React, { useEffect: Rn, useRef: $n, useState: rn } = u, { Button: on, Collapse: Ln, Empty: Rt, Tabs: St } = qe.antd, { Text: J } = qe.antd.Typography, { CopyOutlined: Dn, CloseOutlined: jn } = qe.antdIcons, Nn = 320, Pn = 720, Ke = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, Fn = 2e4;
function Bn(e) {
  if (e.length > Fn) return e;
  const l = [], t = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let n = 0, s, r = 0;
  for (; (s = t.exec(e)) !== null; ) {
    s.index > n && l.push(e.slice(n, s.index));
    const o = s[0];
    let a = "rgba(128,128,128,1)";
    s[1] !== void 0 ? a = Ke.key : s[2] !== void 0 ? a = Ke.string : s[3] !== void 0 ? a = Ke.number : a = Ke.literal, l.push(
      /* @__PURE__ */ u.createElement("span", { key: r++, style: { color: a } }, o)
    ), n = s.index + o.length;
  }
  return n < e.length && l.push(e.slice(n)), l;
}
function he({ value: e, json: l = !1 }) {
  const [t, n] = rn(!1), s = typeof e == "string" ? e : JSON.stringify(e, null, 2);
  if (!s) return null;
  const r = async () => {
    try {
      await navigator.clipboard.writeText(s), n(!0), window.setTimeout(() => n(!1), 1500);
    } catch {
    }
  };
  return /* @__PURE__ */ u.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ u.createElement(
    "a",
    {
      onClick: () => void r(),
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
    t ? "✓" : /* @__PURE__ */ u.createElement(Dn, null)
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
    l ? Bn(s) : s
  ));
}
function z({
  label: e,
  value: l,
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
    /* @__PURE__ */ u.createElement(J, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ u.createElement(
      J,
      {
        type: t ? "danger" : void 0,
        style: { fontSize: 12, textAlign: "right" }
      },
      l
    )
  );
}
function $t({
  input: e,
  output: l,
  cacheRead: t,
  cacheWrite: n,
  reasoning: s
}) {
  const r = Math.max(0, e - t - n), o = Math.max(0, l - s);
  return /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(z, { label: "Input", value: `${re(e)} tok` }), t ? /* @__PURE__ */ u.createElement(z, { label: "Cached", value: `${re(t)} tok` }) : null, n ? /* @__PURE__ */ u.createElement(
    z,
    {
      label: "Cache created",
      value: `${re(n)} tok`
    }
  ) : null, t || n ? /* @__PURE__ */ u.createElement(z, { label: "Other", value: `${re(r)} tok` }) : null, /* @__PURE__ */ u.createElement(z, { label: "Output", value: `${re(l)} tok` }), s ? /* @__PURE__ */ u.createElement(z, { label: "Reasoning", value: `${re(s)} tok` }) : null, s ? /* @__PURE__ */ u.createElement(z, { label: "Content", value: `${re(o)} tok` }) : null);
}
function lt({
  label: e,
  onOpen: l,
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
    /* @__PURE__ */ u.createElement("a", { onClick: l, style: { fontSize: 12, fontWeight: 600 } }, e, " →"),
    /* @__PURE__ */ u.createElement("div", { style: { paddingTop: 2 } }, t)
  );
}
function Hn({
  request: e,
  onJumpRecord: l
}) {
  const t = ie(), [n, s] = u.useState("summary"), r = /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(z, { label: "Started", value: Pe(e.startedAt) }), /* @__PURE__ */ u.createElement(
    z,
    {
      label: "Total",
      value: ae(
        e.durationMs === null ? null : e.durationMs / 1e3
      )
    }
  ), e.ttftMs !== null ? /* @__PURE__ */ u.createElement(
    z,
    {
      label: "First TTFT",
      value: ae(e.ttftMs / 1e3)
    }
  ) : null, e.decodeMs !== null ? /* @__PURE__ */ u.createElement(
    z,
    {
      label: "Total decoding",
      value: ae(e.decodeMs / 1e3)
    }
  ) : null, /* @__PURE__ */ u.createElement(
    z,
    {
      label: x(t, "throughput"),
      value: Et(
        e.outputTokens,
        e.decodeMs === null ? null : e.decodeMs / 1e3
      )
    }
  )), o = /* @__PURE__ */ u.createElement(
    $t,
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
      label: x(t, "summary"),
      children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(z, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ u.createElement(
        z,
        {
          label: x(t, "status"),
          value: e.status || "unknown",
          danger: e.status === "error"
        }
      ), /* @__PURE__ */ u.createElement(z, { label: "Query", value: Wn(e.query) }), /* @__PURE__ */ u.createElement(
        z,
        {
          label: x(t, "model"),
          value: e.models.join(", ") || "-"
        }
      ), /* @__PURE__ */ u.createElement(z, { label: "Tool calls", value: String(e.toolCalls) }), e.errors.length > 0 ? /* @__PURE__ */ u.createElement(
        z,
        {
          label: "Error",
          value: e.errors.join("; ").slice(0, 120),
          danger: !0
        }
      ) : null, e.resultIndex !== void 0 && l ? /* @__PURE__ */ u.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ u.createElement(
        "a",
        {
          style: { fontSize: 12 },
          onClick: () => l(e.resultIndex)
        },
        "Result: Assistant Message →"
      )) : null, e.options ? /* @__PURE__ */ u.createElement(lt, { label: "Options", onOpen: () => s("options") }, /* @__PURE__ */ u.createElement(he, { value: e.options, json: !0 })) : null, /* @__PURE__ */ u.createElement(lt, { label: "Usage", onOpen: () => s("usage") }, o), /* @__PURE__ */ u.createElement(lt, { label: "Timing", onOpen: () => s("timing") }, r))
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(J, { strong: !0, style: { fontSize: 12 } }, x(t, "thisRequest")), o, e.sessionTotals ? /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(
        J,
        {
          strong: !0,
          style: { fontSize: 12, display: "block", marginTop: 10 }
        },
        x(t, "sessionTotal")
      ), /* @__PURE__ */ u.createElement(
        $t,
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
      children: r
    },
    ...e.options ? [
      {
        key: "options",
        label: "Options",
        children: /* @__PURE__ */ u.createElement(he, { value: e.options, json: !0 })
      }
    ] : []
  ];
  return /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 4px" } }, /* @__PURE__ */ u.createElement(
    St,
    {
      size: "small",
      activeKey: n,
      onChange: (f) => s(f),
      items: a,
      tabBarStyle: { marginBottom: 8 }
    }
  ));
}
function Wn(e, l = 200) {
  const t = e.split(`
`, 1)[0].trim();
  return t.length > l ? `${t.slice(0, l)}…` : t;
}
function Kn({
  oldText: e,
  newText: l
}) {
  const t = u.useMemo(
    () => In(e, l),
    [e, l]
  ), n = u.useMemo(() => Cn(t), [t]), s = u.useMemo(() => Mn(t), [t]), r = ie();
  return e === void 0 ? /* @__PURE__ */ u.createElement(J, { type: "secondary", style: { fontSize: 12 } }, x(r, "noPrevPrompt")) : /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ u.createElement("span", { style: { color: "#52c41a" } }, "+", n.added), " ", /* @__PURE__ */ u.createElement("span", { style: { color: "#ff4d4f" } }, "−", n.removed)), /* @__PURE__ */ u.createElement(
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
    s.map((o, a) => {
      if (o.kind === "gap")
        return /* @__PURE__ */ u.createElement(
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
          o.count
        );
      const f = o;
      return /* @__PURE__ */ u.createElement(
        "div",
        {
          key: a,
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
function Un({ record: e }) {
  var r;
  const l = ie(), t = e.headerTools ?? [], n = e.headerReason === "changed", s = [
    {
      key: "summary",
      label: x(l, "summary"),
      children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(z, { label: "#", value: String(e.index) }), /* @__PURE__ */ u.createElement(
        z,
        {
          label: x(l, "status"),
          value: n ? x(l, "promptChanged") : x(l, "promptInitial")
        }
      ), /* @__PURE__ */ u.createElement(z, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ u.createElement(z, { label: "Chars", value: String(((r = e.prompt) == null ? void 0 : r.length) ?? 0) }), /* @__PURE__ */ u.createElement(z, { label: "Tools", value: String(t.length) }))
    },
    ...n ? [
      {
        key: "diff",
        label: "Diff",
        children: /* @__PURE__ */ u.createElement(
          Kn,
          {
            oldText: e.prevPrompt,
            newText: e.prompt ?? ""
          }
        )
      }
    ] : [],
    {
      key: "prompt",
      label: x(l, "prompt"),
      children: /* @__PURE__ */ u.createElement(he, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ u.createElement("div", { style: { paddingTop: 4 } }, t.map((o) => /* @__PURE__ */ u.createElement(J, { key: o, code: !0, style: { fontSize: 11 } }, o)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ u.createElement(
          Ln,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((o, a) => {
              var y;
              const f = typeof o.name == "string" && o.name || typeof ((y = o.function) == null ? void 0 : y.name) == "string" && o.function.name || `tool-${a + 1}`;
              return {
                key: String(a),
                label: /* @__PURE__ */ u.createElement(J, { code: !0, style: { fontSize: 11 } }, f),
                children: /* @__PURE__ */ u.createElement(he, { value: o })
              };
            })
          }
        ) : null)
      }
    ] : [],
    {
      key: "raw",
      label: "Raw",
      children: /* @__PURE__ */ u.createElement(he, { value: e.raw })
    }
  ];
  return /* @__PURE__ */ u.createElement(St, { size: "small", items: s, tabBarStyle: { marginBottom: 8 } });
}
function rt({ dragRef: e, width: l }) {
  return /* @__PURE__ */ u.createElement(
    "div",
    {
      onPointerDown: (t) => {
        e.current = {
          anchorX: t.clientX,
          anchorWidth: l
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
  return e ? /* @__PURE__ */ u.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ u.createElement(
    on,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ u.createElement(jn, null),
      onClick: e
    }
  )) : null;
}
function Vn({
  record: e,
  request: l,
  onJumpSession: t,
  onJumpRecord: n,
  onSelectTurn: s,
  onClose: r
}) {
  const o = ie(), [a, f] = rn(400), y = $n(null);
  if (Rn(() => {
    const b = (D) => {
      const k = y.current;
      if (k === null) return;
      const d = k.anchorX - D.clientX;
      f(
        Math.min(Pn, Math.max(Nn, k.anchorWidth + d))
      );
    }, T = () => {
      y.current = null;
    };
    return window.addEventListener("pointermove", b), window.addEventListener("pointerup", T), () => {
      window.removeEventListener("pointermove", b), window.removeEventListener("pointerup", T);
    };
  }, []), e === null && l === null)
    return /* @__PURE__ */ u.createElement(
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
      /* @__PURE__ */ u.createElement(
        Rt,
        {
          image: Rt.PRESENTED_IMAGE_SIMPLE,
          description: x(o, "selectRecord")
        }
      )
    );
  if (e === null && l !== null)
    return /* @__PURE__ */ u.createElement(
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
      /* @__PURE__ */ u.createElement(rt, { dragRef: y, width: a }),
      /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ u.createElement(ot, { onClose: r }), /* @__PURE__ */ u.createElement(Hn, { request: l, onJumpRecord: n }))
    );
  const c = e;
  if (c.kind === "system" && c.prompt !== void 0)
    return /* @__PURE__ */ u.createElement(
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
      /* @__PURE__ */ u.createElement(rt, { dragRef: y, width: a }),
      /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ u.createElement(ot, { onClose: r }), /* @__PURE__ */ u.createElement(Un, { record: c }))
    );
  const h = c.usage, i = c.timing, w = [];
  return w.push({
    key: "summary",
    label: x(o, "summary"),
    children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(z, { label: "#", value: String(c.index) }), /* @__PURE__ */ u.createElement(z, { label: "Kind", value: ln(c, o) }), c.runIndex > 0 && s ? /* @__PURE__ */ u.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ u.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => s(c.runIndex)
      },
      "Request #",
      c.runIndex,
      " →"
    )) : null, /* @__PURE__ */ u.createElement(
      z,
      {
        label: x(o, "status"),
        value: c.running ? x(o, "running") : c.isError ? x(o, "error") : x(o, "success"),
        danger: c.isError
      }
    ), c.provider ? /* @__PURE__ */ u.createElement(z, { label: "Provider", value: c.provider }) : null, c.model ? /* @__PURE__ */ u.createElement(z, { label: x(o, "model"), value: c.model }) : null, c.toolName ? /* @__PURE__ */ u.createElement(z, { label: "Tool", value: c.toolName }) : null, c.kind === "user" && (c.channel || c.userId) ? /* @__PURE__ */ u.createElement(
      z,
      {
        label: x(o, "source"),
        value: [c.channel, c.userId].filter(Boolean).join(" · ")
      }
    ) : null, c.receipt ? /* @__PURE__ */ u.createElement(
      z,
      {
        label: x(o, "channel"),
        value: c.receipt.channel ?? "-"
      }
    ) : null, /* @__PURE__ */ u.createElement(
      z,
      {
        label: x(o, "duration"),
        value: ae(c.timeSeconds)
      }
    ), c.note ? /* @__PURE__ */ u.createElement(J, { type: "warning", style: { fontSize: 12 } }, c.note) : null, c.spawnSession ? /* @__PURE__ */ u.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ u.createElement(
      z,
      {
        label: x(o, "spawnedAgent"),
        value: c.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ u.createElement(
      on,
      {
        size: "small",
        onClick: () => c.spawnSession && t(c.spawnSession),
        style: { marginTop: 4 }
      },
      x(o, "openChildSession")
    ) : null) : null)
  }), c.kind === "tool" ? (c.toolInput && w.push({
    key: "payload",
    label: x(o, "input"),
    children: /* @__PURE__ */ u.createElement(he, { value: c.toolInput, json: !0 })
  }), (c.toolOutput || c.toolError) && w.push({
    key: "result",
    label: x(o, "output"),
    children: /* @__PURE__ */ u.createElement("div", { style: { display: "grid", gap: 8 } }, c.toolError ? /* @__PURE__ */ u.createElement(J, { type: "danger", style: { fontSize: 12 } }, c.toolError) : null, c.toolOutput ? /* @__PURE__ */ u.createElement(he, { value: c.toolOutput }) : null)
  })) : (c.outputText || c.thinkingText || c.messages || c.marker || c.toolCalls && c.toolCalls.length > 0) && w.push({
    key: "raw",
    label: x(o, "output"),
    children: /* @__PURE__ */ u.createElement("div", { style: { display: "grid", gap: 8 } }, c.inboundParts && c.inboundParts.length > 0 ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(J, { type: "secondary", style: { fontSize: 12 } }, `${x(o, "inboundParts")} (${c.inboundParts.length})`), c.inboundParts.map((b, T) => /* @__PURE__ */ u.createElement(
      "div",
      {
        key: T,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ u.createElement(J, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, b.type.replace("Content", "")),
      /* @__PURE__ */ u.createElement(
        J,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        b.text ?? "-"
      )
    ))) : null, c.marker ? /* @__PURE__ */ u.createElement(he, { value: c.marker }) : null, c.toolCalls && c.toolCalls.length > 0 ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(J, { type: "secondary", style: { fontSize: 12 } }, `${x(o, "toolCall")} (${c.toolCalls.length})`), c.toolCalls.map((b, T) => /* @__PURE__ */ u.createElement("div", { key: b.id || T, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ u.createElement(J, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", b.name), /* @__PURE__ */ u.createElement(J, { type: "secondary", style: { fontSize: 11 } }, b.id)))) : null, c.note ? /* @__PURE__ */ u.createElement(J, { type: "warning", style: { fontSize: 12 } }, c.note) : null, c.messages && c.messages.length > 0 ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(J, { type: "secondary", style: { fontSize: 12 } }, `${x(o, "query")} (${c.messages.length})`), c.messages.map((b, T) => /* @__PURE__ */ u.createElement(
      "div",
      {
        key: T,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ u.createElement(J, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, b.role),
      /* @__PURE__ */ u.createElement(
        J,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        b.text
      )
    ))) : null, c.thinkingText ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(J, { type: "secondary", style: { fontSize: 12 } }, x(o, "thinking")), /* @__PURE__ */ u.createElement(he, { value: c.thinkingText })) : null, c.outputText ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(J, { type: "secondary", style: { fontSize: 12 } }, x(o, "output")), /* @__PURE__ */ u.createElement(he, { value: c.outputText })) : null)
  }), (c.startedAt !== null || h || i) && w.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(z, { label: "Started", value: Pe(c.startedAt) }), /* @__PURE__ */ u.createElement(z, { label: "Total", value: ae(c.timeSeconds) }), i ? /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(
      z,
      {
        label: "TTFT",
        value: ae(i.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ u.createElement(
      z,
      {
        label: "Decoding",
        value: ae(i.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ u.createElement(
      z,
      {
        label: x(o, "throughput"),
        value: Et(
          h == null ? void 0 : h.output_tokens,
          i.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ u.createElement(J, { type: "secondary", style: { fontSize: 12 } }, x(o, "noTiming")))
  }), h && w.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(z, { label: "Input", value: re(h.input_tokens) }), /* @__PURE__ */ u.createElement(z, { label: "Output", value: re(h.output_tokens) }), h.cache_creation_input_tokens ? /* @__PURE__ */ u.createElement(
      z,
      {
        label: "Cache write",
        value: re(h.cache_creation_input_tokens)
      }
    ) : null, h.cache_input_tokens ? /* @__PURE__ */ u.createElement(
      z,
      {
        label: "Cache read",
        value: re(h.cache_input_tokens)
      }
    ) : null, h.total_tokens !== void 0 ? /* @__PURE__ */ u.createElement(z, { label: "Total", value: re(h.total_tokens) }) : null, h.time !== void 0 ? /* @__PURE__ */ u.createElement(z, { label: "API time", value: ae(h.time) }) : null)
  }), w.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ u.createElement(he, { value: c.raw })
  }), /* @__PURE__ */ u.createElement(
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
    /* @__PURE__ */ u.createElement(rt, { dragRef: y, width: a }),
    /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ u.createElement(ot, { onClose: r }), /* @__PURE__ */ u.createElement(St, { size: "small", items: w, tabBarStyle: { marginBottom: 8 } }))
  );
}
const ne = window.QwenPaw.host.React, Xn = ne.useRef, Gn = ne.useState;
ne.useCallback;
ne.useMemo;
const Jn = ne.useEffect, Yn = ne.useLayoutEffect, qn = ne.useReducer;
ne.createContext;
ne.useContext;
ne.createElement;
ne.cloneElement;
ne.isValidElement;
ne.memo;
ne.forwardRef;
ne.Fragment;
ne.StrictMode;
ne.version;
function Qn(e) {
  return e ? e() : void 0;
}
function Zn(e, l, t) {
  const n = new Array(e);
  return new Proxy(n, {
    get(s, r, o) {
      if (typeof r == "string") {
        const a = r.charCodeAt(0);
        if (a >= 48 && a <= 57) {
          const f = +r;
          if (Number.isInteger(f) && f >= 0 && f < e) {
            let y = s[f];
            if (!y) {
              const c = l[f * 2];
              y = s[f] = {
                index: f,
                key: t(f),
                start: c,
                size: l[f * 2 + 1],
                end: c + l[f * 2 + 1],
                lane: 0
              };
            }
            return y;
          }
        }
        if (r === "length") return e;
      }
      return Reflect.get(s, r, o);
    }
  });
}
function Ce(e, l, t) {
  let n = t.initialDeps ?? [], s, r = !0;
  function o() {
    var a;
    const f = process.env.NODE_ENV !== "production" && !!t.key && !!((a = t.debug) != null && a.call(t));
    let y = 0;
    f && (y = Date.now());
    const c = e();
    if (!(c.length !== n.length || c.some((w, b) => n[b] !== w)))
      return s;
    n = c;
    let i = 0;
    if (f && (i = Date.now()), s = l(...c), f) {
      const w = Math.round((Date.now() - y) * 100) / 100, b = Math.round((Date.now() - i) * 100) / 100, T = b / 16, D = (k, d) => {
        for (k = String(k); k.length < d; )
          k = " " + k;
        return k;
      };
      console.info(
        `%c⏱ ${D(b, 5)} /${D(w, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * T, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return t != null && t.onChange && !(r && t.skipInitialOnChange) && t.onChange(s), r = !1, s;
  }
  return o.updateDeps = (a) => {
    n = a;
  }, o;
}
function Lt(e, l) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const es = (e, l) => Math.abs(e - l) < 1.01, ts = (e, l, t) => {
  let n;
  return function(...s) {
    e.clearTimeout(n), n = e.setTimeout(() => l.apply(this, s), t);
  };
};
let je;
const it = () => {
  if (je !== void 0) return je;
  if (typeof navigator > "u") return je = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return je = !0;
  const e = navigator.maxTouchPoints;
  return je = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, Dt = (e) => {
  const { offsetWidth: l, offsetHeight: t } = e;
  return { width: l, height: t };
}, ns = (e) => e, ss = (e) => {
  const l = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1) - l + 1, s = new Array(n);
  for (let r = 0; r < n; r++)
    s[r] = l + r;
  return s;
}, ls = (e, l) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  const s = (o) => {
    const { width: a, height: f } = o;
    l({ width: Math.round(a), height: Math.round(f) });
  };
  if (s(Dt(t)), !n.ResizeObserver)
    return () => {
    };
  const r = new n.ResizeObserver((o) => {
    const a = () => {
      const f = o[0];
      if (f != null && f.borderBoxSize) {
        const y = f.borderBoxSize[0];
        if (y) {
          s({ width: y.inlineSize, height: y.blockSize });
          return;
        }
      }
      s(Dt(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
  });
  return r.observe(t, { box: "border-box" }), () => {
    r.unobserve(t);
  };
}, Je = {
  passive: !0
}, rs = typeof window > "u" ? !0 : "onscrollend" in window, os = (e, l, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const s = e.targetWindow;
  if (!s)
    return;
  const r = e.options.useScrollendEvent && rs;
  let o = 0;
  const a = r ? null : ts(
    s,
    () => l(o, !1),
    e.options.isScrollingResetDelay
  ), f = (h) => () => {
    o = t(n), a == null || a(), l(o, h);
  }, y = f(!0), c = f(!1);
  return n.addEventListener("scroll", y, Je), r && n.addEventListener("scrollend", c, Je), () => {
    n.removeEventListener("scroll", y), r && n.removeEventListener("scrollend", c);
  };
}, is = (e, l) => os(e, l, (t) => {
  const { horizontal: n, isRtl: s } = e.options;
  return n ? t.scrollLeft * (s && -1 || 1) : t.scrollTop;
}), as = (e, l, t) => {
  if (t.options.useCachedMeasurements) {
    const n = t.indexFromElement(e), s = t.options.getItemKey(n);
    return t.itemSizeCache.get(s) ?? t.options.estimateSize(n);
  }
  if (l != null && l.borderBoxSize) {
    const n = l.borderBoxSize[0];
    if (n)
      return Math.round(
        n[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  if (!l) {
    const n = t.indexFromElement(e), s = t.options.getItemKey(n), r = t.itemSizeCache.get(s);
    if (r !== void 0)
      return r;
  }
  return e[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, cs = (e, {
  adjustments: l = 0,
  behavior: t
}, n) => {
  var s, r;
  (r = (s = n.scrollElement) == null ? void 0 : s.scrollTo) == null || r.call(s, {
    [n.options.horizontal ? "left" : "top"]: e + l,
    behavior: t
  });
}, us = cs;
class ds {
  constructor(l) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, n, s;
      return ((s = (n = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : n.now) == null ? void 0 : s.call(n)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((s) => {
        s.forEach((r) => {
          const o = () => {
            const a = r.target, f = this.indexFromElement(a);
            if (!a.isConnected) {
              this.observer.unobserve(a);
              for (const [y, c] of this.elementsCache)
                if (c === a) {
                  this.elementsCache.delete(y);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(f) && this.resizeItem(
              f,
              this.options.measureElement(a, r, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(o) : o();
        });
      }));
      return {
        disconnect: () => {
          var s;
          (s = n()) == null || s.disconnect(), t = null;
        },
        observe: (s) => {
          var r;
          return (r = n()) == null ? void 0 : r.observe(s, { box: "border-box" });
        },
        unobserve: (s) => {
          var r;
          return (r = n()) == null ? void 0 : r.unobserve(s);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      var n, s;
      const r = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: ns,
        rangeExtractor: ss,
        onChange: () => {
        },
        measureElement: as,
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
      for (const i in t) {
        const w = t[i];
        w !== void 0 && (r[i] = w);
      }
      const o = this.options;
      let a = null, f = null, y = !1;
      if (o !== void 0 && o.enabled && r.enabled && r.anchorTo === "end" && this.scrollElement !== null) {
        const i = o.count, w = r.count, b = this.getMeasurements(), T = i > 0 ? ((n = b[0]) == null ? void 0 : n.key) ?? o.getItemKey(0) : null, D = i > 0 ? ((s = b[i - 1]) == null ? void 0 : s.key) ?? o.getItemKey(i - 1) : null;
        if (w !== i || i > 0 && w > 0 && (r.getItemKey(0) !== T || r.getItemKey(w - 1) !== D)) {
          y = !0;
          const m = i > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? b[0] : null;
          m && (a = [m.key, this.getScrollOffset() - m.start]);
          const p = r.followOnAppend === !0 ? "auto" : r.followOnAppend || null;
          p && w > i && this.isAtEnd(o.scrollEndThreshold) && (i === 0 || r.getItemKey(w - 1) !== D) && (f = p);
        }
      }
      this.options = r, y && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let c = !1, h = 0;
      if (a && this.scrollOffset !== null) {
        const [i, w] = a, b = this.getMeasurements(), { count: T, getItemKey: D } = this.options;
        let k = 0;
        for (; k < T && D(k) !== i; )
          k++;
        if (k < T) {
          const d = b[k];
          if (d) {
            const m = Math.max(0, d.start + w);
            m !== this.scrollOffset && (h = m - this.scrollOffset, this.scrollOffset = m, c = !0);
          }
        }
      }
      (c || f) && (this.pendingScrollAnchor = [
        c ? a[0] : null,
        c ? a[1] : 0,
        f,
        h
      ]);
    }, this.notify = (t) => {
      var n, s;
      (s = (n = this.options).onChange) == null || s.call(n, this, t);
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
        if (this.scrollElement = n, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((r) => {
          this.observer.observe(r);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (r) => {
            this.scrollRect = r, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (r, o) => {
            if (o && this._intendedScrollOffset === null && r === this.scrollOffset)
              return;
            this._intendedScrollOffset !== null && Math.abs(r - this._intendedScrollOffset) < 1.5 && (r = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
            const a = this.getScrollOffset();
            this.scrollDirection = o ? a === r ? this.scrollDirection : a < r ? "forward" : "backward" : null, this.scrollOffset = r, this.isScrolling = o, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const r = this.scrollElement, o = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, a = () => {
            this._iosTouching = !1, !(!it() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          r.addEventListener(
            "touchstart",
            o,
            Je
          ), r.addEventListener(
            "touchend",
            a,
            Je
          ), this.unsubs.push(() => {
            r.removeEventListener("touchstart", o), r.removeEventListener("touchend", a), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const s = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, s && this.scrollElement && this.options.enabled) {
        const [r, o, a, f] = s;
        r !== null && !a && (it() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? f !== 0 && (this._iosDeferredAdjustment += f) : this._scrollToOffset(this.getScrollOffset(), {
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
      const s = this._iosDeferredAdjustment;
      this._iosDeferredAdjustment = 0, this._scrollToOffset(t, {
        adjustments: this.scrollAdjustments += s,
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
      (t, n, s, r, o, a, f, y) => (this.prevLanes !== void 0 && this.prevLanes !== a && (this.lanesChangedFlag = !0), this.prevLanes = a, this.pendingMin = null, {
        count: t,
        paddingStart: n,
        scrollMargin: s,
        getItemKey: r,
        enabled: o,
        lanes: a,
        laneAssignmentMode: f,
        gap: y
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Ce(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: t,
        paddingStart: n,
        scrollMargin: s,
        getItemKey: r,
        enabled: o,
        lanes: a,
        laneAssignmentMode: f,
        gap: y
      }, c) => {
        const h = this.itemSizeCache;
        if (!o)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const k of this.laneAssignments.keys())
            k >= t && this.laneAssignments.delete(k);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((k) => {
          this.itemSizeCache.set(k.key, k.size);
        }));
        const i = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), a === 1) {
          const k = t * 2;
          let d = this._flatMeasurements;
          if (!d || d.length < k) {
            const S = new Float64Array(k);
            d && i > 0 && S.set(d.subarray(0, i * 2)), d = S, this._flatMeasurements = d;
          }
          let m;
          if (i === 0)
            m = n + s;
          else {
            const S = i - 1;
            m = d[S * 2] + d[S * 2 + 1] + y;
          }
          for (let S = i; S < t; S++) {
            const C = r(S), I = h.get(C), F = typeof I == "number" ? I : this.options.estimateSize(S);
            d[S * 2] = m, d[S * 2 + 1] = F, m += F + y;
          }
          const p = Zn(t, d, r);
          return this.measurementsCache = p, p;
        }
        const w = this.measurementsCache.slice(0, i), b = new Array(a).fill(
          void 0
        ), T = new Float64Array(a);
        let D = 0;
        for (let k = 0; k < i; k++) {
          const d = w[k];
          d && (b[d.lane] === void 0 && D++, b[d.lane] = k, T[d.lane] = d.end);
        }
        for (let k = i; k < t; k++) {
          const d = r(k), m = this.laneAssignments.get(k);
          let p, S;
          const C = f === "estimate" || h.has(d);
          if (m !== void 0 && this.options.lanes > 1) {
            p = m;
            const M = b[p], N = M !== void 0 ? w[M] : void 0;
            S = N ? N.end + y : n + s;
          } else if (D === a) {
            let M = 0, N = T[0], se = b[0];
            for (let W = 1; W < a; W++) {
              const X = T[W];
              (X < N || X === N && b[W] < se) && (M = W, N = X, se = b[W]);
            }
            p = M, S = N + y, C && this.laneAssignments.set(k, p);
          } else
            p = k % this.options.lanes, S = n + s, C && this.laneAssignments.set(k, p);
          const I = h.get(d), F = typeof I == "number" ? I : this.options.estimateSize(k), $ = S + F;
          w[k] = {
            index: k,
            start: S,
            size: F,
            end: $,
            key: d,
            lane: p
          }, b[p] === void 0 && D++, b[p] = k, T[p] = $;
        }
        return this.measurementsCache = w, w;
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
      (t, n, s, r) => t.length === 0 || n === 0 ? (this.range = null, null) : (this.range = ms(
        t,
        n,
        s,
        r,
        // Pass the typed array so binary search + forward-walk can read
        // start/end directly from Float64Array, skipping the Proxy traps.
        r === 1 && this._flatMeasurements != null ? this._flatMeasurements : null
      ), this.range),
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Ce(
      () => {
        let t = null, n = null;
        const s = this.calculateRange();
        return s && (t = s.startIndex, n = s.endIndex), this.maybeNotify.updateDeps([this.isScrolling, t, n]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          t,
          n
        ];
      },
      (t, n, s, r, o) => r === null || o === null ? [] : t({
        startIndex: r,
        endIndex: o,
        overscan: n,
        count: s
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (t) => {
      const n = this.options.indexAttribute, s = t.getAttribute(n);
      return s ? parseInt(s, 10) : (console.warn(
        `Missing attribute name '${n}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (t) => {
      var n;
      if (!this.scrollState || this.scrollState.behavior !== "smooth")
        return !0;
      const s = this.scrollState.index ?? ((n = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : n.index);
      if (s !== void 0 && this.range) {
        const r = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), o = Math.max(0, s - r), a = Math.min(
          this.options.count - 1,
          s + r
        );
        return t >= o && t <= a;
      }
      return !0;
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((o, a) => {
          o.isConnected || (this.observer.unobserve(o), this.elementsCache.delete(a));
        });
        return;
      }
      const n = this.indexFromElement(t), s = this.options.getItemKey(n), r = this.elementsCache.get(s);
      r !== t && (r && this.observer.unobserve(r), this.observer.observe(t), this.elementsCache.set(s, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(n) && this.resizeItem(n, this.options.measureElement(t, void 0, this));
    }, this.resizeItem = (t, n) => {
      var s, r;
      if (t < 0 || t >= this.options.count) return;
      let o, a, f;
      const y = this._flatMeasurements;
      if (this.options.lanes === 1 && y !== null)
        f = this.options.getItemKey(t), a = y[t * 2], o = y[t * 2 + 1];
      else {
        const i = this.measurementsCache[t];
        if (!i) return;
        f = i.key, a = i.start, o = i.size;
      }
      const c = this.itemSizeCache.get(f) ?? o, h = n - c;
      if (h !== 0) {
        const i = this.options.anchorTo === "end" && ((s = this.scrollState) == null ? void 0 : s.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, w = i ? this.getTotalSize() : 0, b = this.getScrollOffset() + this.scrollAdjustments, D = !this.itemSizeCache.has(f) ? (
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
          a + c <= b && this.scrollDirection !== "backward"
        ), k = ((r = this.scrollState) == null ? void 0 : r.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[t] ?? {
            index: t,
            key: f,
            start: a,
            size: o,
            end: a + o,
            lane: 0
          },
          h,
          this
        ) : D);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(f, n), this.itemSizeCacheVersion++;
        let d = !1;
        i ? d = this.applyScrollAdjustment(
          this.getTotalSize() - w
        ) : k && (d = this.applyScrollAdjustment(h)), this.notify(d);
      }
    }, this.getVirtualItems = Ce(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const s = [];
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r], f = n[a];
          s.push(f);
        }
        return s;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const n = this.getMeasurements();
      if (n.length === 0)
        return;
      const s = this._flatMeasurements, r = this.options.lanes === 1 && s != null, o = an(
        0,
        n.length - 1,
        r ? (a) => s[a * 2] : (a) => Lt(n[a]).start,
        t
      );
      return Lt(n[o]);
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
    ), this.getDistanceFromEnd = () => Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0), this.isAtEnd = (t = this.options.scrollEndThreshold) => this.getDistanceFromEnd() <= t, this.getOffsetForAlignment = (t, n, s = 0) => {
      if (!this.scrollElement) return 0;
      const r = this.getSize(), o = this.getScrollOffset();
      n === "auto" && (n = t >= o + r ? "end" : "start"), n === "center" ? t += (s - r) / 2 : n === "end" && (t -= r);
      const a = this.getMaxScrollOffset();
      return Math.max(Math.min(a, t), 0);
    }, this.getOffsetForIndex = (t, n = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const s = this.getSize(), r = this.getScrollOffset(), o = this.measurementsCache[t];
      if (!o) return;
      if (n === "auto")
        if (o.end >= r + s - this.options.scrollPaddingEnd)
          n = "end";
        else if (o.start <= r + this.options.scrollPaddingStart)
          n = "start";
        else
          return [r, n];
      if (n === "end" && t === this.options.count - 1)
        return [this.getMaxScrollOffset(), n];
      const a = n === "end" ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(a, n, o.size),
        n
      ];
    }, this.scrollToOffset = (t, { align: n = "start", behavior: s = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0;
      const r = this.getOffsetForAlignment(t, n), o = this.now();
      this.scrollState = {
        index: null,
        align: n,
        behavior: s,
        startedAt: o,
        lastTargetOffset: r,
        stableFrames: 0
      }, this._scrollToOffset(r, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (t, {
      align: n = "auto",
      behavior: s = "auto"
    } = {}) => {
      this._iosDeferredAdjustment = 0, t = Math.max(0, Math.min(t, this.options.count - 1));
      const r = this.getOffsetForIndex(t, n);
      if (!r)
        return;
      const [o, a] = r, f = this.now();
      this.scrollState = {
        index: t,
        align: a,
        behavior: s,
        startedAt: f,
        lastTargetOffset: o,
        stableFrames: 0
      }, this._scrollToOffset(o, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.scrollBy = (t, { behavior: n = "auto" } = {}) => {
      const s = this.getScrollOffset() + t, r = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: n,
        startedAt: r,
        lastTargetOffset: s,
        stableFrames: 0
      }, this._scrollToOffset(s, { adjustments: void 0, behavior: n }), this.scheduleScrollReconcile();
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
      let s;
      if (n.length === 0)
        s = this.options.paddingStart;
      else if (this.options.lanes === 1) {
        const r = n.length - 1, o = this._flatMeasurements;
        o != null ? s = o[r * 2] + o[r * 2 + 1] : s = ((t = n[r]) == null ? void 0 : t.end) ?? 0;
      } else {
        const r = Array(this.options.lanes).fill(null);
        let o = n.length - 1;
        for (; o >= 0 && r.some((a) => a === null); ) {
          const a = n[o];
          r[a.lane] === null && (r[a.lane] = a.end), o--;
        }
        s = Math.max(...r.filter((a) => a !== null));
      }
      return Math.max(
        s - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this.takeSnapshot = () => {
      const t = [];
      if (this.itemSizeCache.size === 0) return t;
      const n = this.getMeasurements();
      for (const s of n)
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
      adjustments: n,
      behavior: s
    }) => {
      this._intendedScrollOffset = t + (n ?? 0), this.options.scrollToFn(t, { behavior: s, adjustments: n }, this);
    }, this.measure = () => {
      this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(!1);
    }, this.setOptions(l);
  }
  // Returns `true` when it performed a synchronous `scrollTop` write this
  // tick, `false` when the delta was zero or the write was deferred (iOS).
  // `resizeItem` uses that to decide whether the follow-up `notify` must be
  // synchronous so the grown transforms commit in the same paint (#1227).
  applyScrollAdjustment(l, t) {
    return l === 0 ? !1 : (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", l), it() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += l, !1) : (this._scrollToOffset(this.getScrollOffset(), {
      adjustments: this.scrollAdjustments += l,
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
    const n = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, s = n ? n[0] : this.scrollState.lastTargetOffset, r = 1, o = s !== this.scrollState.lastTargetOffset;
    if (!o && es(s, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= r) {
        this.getScrollOffset() !== s && this._scrollToOffset(s, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, o) {
      const a = this.getSize() || 600, f = Math.abs(s - this.getScrollOffset()), y = this.scrollState.behavior === "smooth" && f > a;
      this.scrollState.lastTargetOffset = s, y || (this.scrollState.behavior = "auto"), this._scrollToOffset(s, {
        adjustments: void 0,
        behavior: y ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const an = (e, l, t, n) => {
  for (; e <= l; ) {
    const s = (e + l) / 2 | 0, r = t(s);
    if (r < n)
      e = s + 1;
    else if (r > n)
      l = s - 1;
    else
      return s;
  }
  return e > 0 ? e - 1 : 0;
};
function hs(e, l, t) {
  let n = 0;
  for (; n <= l; ) {
    const s = (n + l) / 2 | 0, r = e[s * 2];
    if (r < t)
      n = s + 1;
    else if (r > t)
      l = s - 1;
    else
      return s;
  }
  return n > 0 ? n - 1 : 0;
}
function ms(e, l, t, n, s) {
  const r = e.length - 1;
  if (e.length <= n)
    return { startIndex: 0, endIndex: r };
  if (n === 1 && s !== null) {
    const y = hs(
      s,
      r,
      t
    );
    let c = y;
    const h = t + l;
    for (; c < r && s[c * 2] + s[c * 2 + 1] < h; )
      c++;
    return { startIndex: y, endIndex: c };
  }
  let a = an(0, r, (y) => e[y].start, t), f = a;
  if (n === 1)
    for (; f < r && e[f].end < t + l; )
      f++;
  else if (n > 1) {
    const y = Array(n).fill(0);
    for (; f < r && y.some((h) => h < t + l); ) {
      const h = e[f];
      y[h.lane] = h.end, f++;
    }
    const c = Array(n).fill(t + l);
    for (; a >= 0 && c.some((h) => h >= t); ) {
      const h = e[a];
      c[h.lane] = h.start, a--;
    }
    a = Math.max(0, a - a % n), f = Math.min(r, f + (n - 1 - f % n));
  }
  return { startIndex: a, endIndex: f };
}
const at = typeof document < "u" ? Yn : Jn;
function fs({
  useFlushSync: e = !0,
  directDomUpdates: l = !1,
  directDomUpdatesMode: t = "transform",
  ...n
}) {
  const s = qn((c) => c + 1, 0)[1], r = Xn({
    enabled: l,
    mode: t,
    container: null,
    lastSize: null,
    // Keyed by the element itself so a remounted node (same key, new DOM
    // node — e.g. when `enabled` is toggled off then on) is treated as fresh
    // and gets its style written.
    lastPositions: /* @__PURE__ */ new WeakMap(),
    prevRange: null
  });
  r.current.enabled = l, r.current.mode = t;
  const o = (c) => {
    const h = r.current;
    if (!h.enabled || !h.container) return;
    const i = c.getTotalSize();
    if (i !== h.lastSize) {
      h.lastSize = i;
      const w = c.options.horizontal ? "width" : "height";
      h.container.style[w] = `${i}px`;
    }
  }, a = (c) => {
    const h = r.current;
    if (!h.enabled || !h.container) return;
    o(c);
    const i = !!c.options.horizontal, w = h.mode === "transform", b = i ? "left" : "top", T = c.options.scrollMargin, D = c.getVirtualItems();
    for (const k of D) {
      const d = k.start - T, m = c.elementsCache.get(k.key);
      m && h.lastPositions.get(m) !== d && (h.lastPositions.set(m, d), w ? m.style.transform = i ? `translate3d(${d}px, 0, 0)` : `translate3d(0, ${d}px, 0)` : m.style[b] = `${d}px`);
    }
  }, f = {
    ...n,
    onChange: (c, h) => {
      var i;
      const w = r.current;
      let b = !0;
      if (w.enabled) {
        a(c);
        const T = c.range, D = w.prevRange;
        b = !D || D.isScrolling !== c.isScrolling || D.startIndex !== (T == null ? void 0 : T.startIndex) || D.endIndex !== (T == null ? void 0 : T.endIndex), b && (w.prevRange = T ? {
          startIndex: T.startIndex,
          endIndex: T.endIndex,
          isScrolling: c.isScrolling
        } : null);
      }
      b && (e && h ? Qn(s) : s()), (i = n.onChange) == null || i.call(n, c, h);
    }
  }, [y] = Gn(() => {
    const c = new ds(f);
    return Object.assign(c, {
      containerRef: (h) => {
        const i = r.current;
        if (i.container = h, i.lastSize = null, h && i.enabled) {
          const w = c.getTotalSize();
          i.lastSize = w;
          const b = c.options.horizontal ? "width" : "height";
          h.style[b] = `${w}px`;
        }
      }
    });
  });
  return y.setOptions(f), at(() => y._didMount(), []), at(() => (o(y), y._willUpdate())), at(() => {
    a(y);
  }), y;
}
function ps(e) {
  return fs({
    observeElementRect: ls,
    observeElementOffset: is,
    scrollToFn: us,
    ...e
  });
}
const Qe = window.QwenPaw.host, _ = Qe.React, { useRef: gs } = _, { Tag: cn } = Qe.antd, { Text: me } = Qe.antd.Typography, {
  CaretRightOutlined: ys,
  CloseCircleOutlined: vs,
  FileTextOutlined: Es,
  RobotOutlined: Ss,
  RocketOutlined: xs,
  SafetyOutlined: bs,
  SendOutlined: ws,
  SettingOutlined: ks,
  ToolOutlined: Ts,
  UserOutlined: _s
} = Qe.antdIcons, Is = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, Ms = {
  user: /* @__PURE__ */ _.createElement(_s, null),
  message: /* @__PURE__ */ _.createElement(Ss, null),
  tool: /* @__PURE__ */ _.createElement(Ts, null),
  system: /* @__PURE__ */ _.createElement(ks, null)
}, jt = {
  approval: { color: "volcano", icon: /* @__PURE__ */ _.createElement(bs, null) },
  receipt: { color: "cyan", icon: /* @__PURE__ */ _.createElement(ws, null) },
  spawn: { color: "geekblue", icon: /* @__PURE__ */ _.createElement(xs, null) },
  header: { color: "green", icon: /* @__PURE__ */ _.createElement(Es, null) },
  error: { color: "red", icon: /* @__PURE__ */ _.createElement(vs, null) }
}, Cs = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default"
}, Nt = {
  running: { zh: "进行中", en: "Running" },
  success: { zh: "成功", en: "Success" },
  error: { zh: "错误", en: "Error" },
  cancelled: { zh: "已取消", en: "Cancelled" },
  interrupted: { zh: "已中断", en: "Interrupted" },
  unknown: { zh: "未知", en: "Unknown" }
}, zs = 150, pt = 26, un = 34, Pt = 9, Ft = 30;
function Os(e) {
  const l = ie(), t = Nt[e] ?? Nt.unknown;
  return l === "zh-CN" ? t.zh : t.en;
}
const As = {
  ImageContent: "image",
  FileContent: "file",
  AudioContent: "audio",
  VideoContent: "video"
};
function Rs(e, l) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.inboundParts ?? []) {
    const s = As[n.type];
    s && t.set(s, (t.get(s) ?? 0) + 1);
  }
  return t.size === 0 ? null : [...t.entries()].map(([n, s]) => `${x(l, n)}×${s}`).join(" ");
}
function $s(e, l) {
  const t = e.receipt, n = t != null && t.channel ? ` · ${t.channel}` : "";
  return `📤 ${x(l, "replySent")}${n} · ${((t == null ? void 0 : t.chars) ?? 0).toLocaleString()} ${x(l, "chars")}`;
}
function Bt({
  record: e,
  selected: l,
  dimmed: t,
  multiRequest: n,
  onSelect: s
}) {
  var a, f;
  const r = e.usage, o = r && (r.input_tokens || r.output_tokens) ? `${re(r.input_tokens)}→${re(
    r.output_tokens
  )}` : null;
  return /* @__PURE__ */ _.createElement(
    "div",
    {
      className: "at-ledger-row",
      "data-kind": e.kind,
      "data-error": e.isError || void 0,
      "data-running": e.running || void 0,
      "data-selected": l || void 0,
      "data-dimmed": t || void 0,
      onClick: s,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: pt,
        cursor: "pointer",
        background: l ? "rgba(22,119,255,0.08)" : void 0,
        opacity: t ? 0.35 : 1
      }
    },
    /* @__PURE__ */ _.createElement(
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
      n && /* @__PURE__ */ _.createElement("span", { style: { opacity: 0.65, marginRight: 3 } }, "R", e.runIndex),
      "#",
      e.index
    ),
    /* @__PURE__ */ _.createElement(
      cn,
      {
        color: e.markerKind && ((a = jt[e.markerKind]) == null ? void 0 : a.color) || Is[e.kind] || "default",
        icon: e.markerKind && ((f = jt[e.markerKind]) == null ? void 0 : f.icon) || Ms[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      ln(e, ie())
    ),
    /* @__PURE__ */ _.createElement(
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
      e.receipt ? /* @__PURE__ */ _.createElement(me, { type: "secondary", style: { fontSize: 12 } }, $s(e, ie())) : e.kind === "tool" && e.toolName ? /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(me, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ _.createElement(me, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ _.createElement(
        me,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(
        me,
        {
          type: e.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        e.running ? `⏳ ${e.text || "…"}` : e.text || "—"
      ), e.kind === "user" ? /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(me, { type: "secondary", style: { fontSize: 11 } }, ` ${Rs(e, ie()) ?? ""}`), e.channel && e.channel !== "console" ? /* @__PURE__ */ _.createElement(me, { code: !0, style: { fontSize: 10 } }, ` @${e.channel}`) : null) : null)
    ),
    /* @__PURE__ */ _.createElement(
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
      o ? /* @__PURE__ */ _.createElement("span", { style: { color: "#1677ff" } }, o) : null,
      o ? " · " : "",
      (e.kind === "message" || e.kind === "tool") && ae(e.timeSeconds)
    )
  );
}
function Ls({
  turn: e,
  collapsed: l,
  selected: t,
  cellCount: n,
  onToggle: s,
  onSelect: r
}) {
  const o = ie();
  return /* @__PURE__ */ _.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: un }
    },
    /* @__PURE__ */ _.createElement(
      "span",
      {
        onClick: (a) => {
          a.stopPropagation(), r();
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
      /* @__PURE__ */ _.createElement(
        ys,
        {
          onClick: (a) => {
            a.stopPropagation(), s();
          },
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: l ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ _.createElement(me, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ _.createElement(me, { type: "secondary", style: { fontSize: 11 } }, ae(e.durationMs / 1e3)),
      /* @__PURE__ */ _.createElement(me, { type: "secondary", style: { fontSize: 11 } }, n, " ", x(o, "events")),
      /* @__PURE__ */ _.createElement(
        cn,
        {
          color: Cs[e.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        Os(e.status)
      )
    )
  );
}
function Ds({
  turns: e,
  selectedIndex: l,
  selectedTurn: t,
  collapsedTurns: n,
  focusIndexes: s,
  searchMatchIndexes: r,
  onSelectedIndexChange: o,
  onSelectedTurnChange: a,
  onToggleTurn: f,
  callsCollapsed: y,
  hasOlderRecords: c,
  loadingOlder: h,
  onLoadOlder: i,
  initialRecord: w,
  emptyText: b
}) {
  const T = ie(), D = gs(null), k = e.filter((I) => I.turn !== null), d = k.length > 1, m = _.useMemo(() => {
    var F;
    const I = [];
    c && I.push({
      key: "load-older",
      height: Ft,
      type: "load-older"
    }), w && (I.push({
      key: "initial",
      height: pt,
      type: "initial",
      record: w
    }), I.push({
      key: "initial-divider",
      height: Pt,
      type: "divider"
    }));
    for (const $ of k) {
      const M = $.turn;
      if (I.push({
        key: `turn-${M}`,
        height: un,
        type: "boundary",
        turn: $
      }), !n.has(M))
        for (const N of ((F = $.groups[0]) == null ? void 0 : F.cells) ?? [])
          y && N.kind === "tool" || I.push({
            key: `rec-${N.index}`,
            height: pt,
            type: "record",
            record: N
          });
    }
    return I;
  }, [
    k,
    n,
    y,
    c,
    w
  ]), p = _.useCallback(
    (I) => s !== null && !s.has(I.index) || r !== null && !r.has(I.index),
    [s, r]
  ), S = (I) => {
    var F;
    switch (I.type) {
      case "load-older":
        return /* @__PURE__ */ _.createElement("div", { style: { textAlign: "center", height: Ft } }, /* @__PURE__ */ _.createElement(
          "button",
          {
            type: "button",
            onClick: i,
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
          h ? "…" : `⋯ ${x(T, "loadOlder")}`
        ));
      case "divider":
        return /* @__PURE__ */ _.createElement(
          "div",
          {
            style: {
              height: Pt,
              borderBottom: "1px dashed rgba(128,128,128,0.25)"
            }
          }
        );
      case "initial": {
        const $ = I.record;
        return /* @__PURE__ */ _.createElement(
          Bt,
          {
            record: $,
            selected: l === $.index,
            dimmed: p($),
            multiRequest: d,
            onSelect: () => o($.index)
          }
        );
      }
      case "boundary": {
        const $ = I.turn, M = $.turn;
        return /* @__PURE__ */ _.createElement(
          Ls,
          {
            turn: $,
            collapsed: n.has(M),
            selected: t === M,
            cellCount: ((F = $.groups[0]) == null ? void 0 : F.cells.length) ?? 0,
            onToggle: () => f(M),
            onSelect: () => a(M)
          }
        );
      }
      case "record":
      default: {
        const $ = I.record;
        return /* @__PURE__ */ _.createElement(
          Bt,
          {
            record: $,
            selected: l === $.index,
            dimmed: p($),
            multiRequest: d,
            onSelect: () => o($.index)
          }
        );
      }
    }
  };
  if (m.length === 0)
    return /* @__PURE__ */ _.createElement(
      "div",
      {
        style: {
          height: "100%",
          overflowY: "auto",
          padding: "4px 12px 24px"
        }
      },
      /* @__PURE__ */ _.createElement(
        "div",
        {
          style: {
            padding: 24,
            textAlign: "center",
            color: "rgba(128,128,128,1)",
            fontSize: 12
          }
        },
        b ?? x(T, "noSessions")
      )
    );
  const C = m.length <= zs ? /* @__PURE__ */ _.createElement("div", null, m.map((I) => S(I))) : /* @__PURE__ */ _.createElement(
    js,
    {
      rows: m,
      scrollRef: D,
      renderRow: S
    }
  );
  return /* @__PURE__ */ _.createElement(
    "div",
    {
      ref: D,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    C
  );
}
function js({
  rows: e,
  scrollRef: l,
  renderRow: t
}) {
  const n = ps({
    count: e.length,
    getScrollElement: () => l.current,
    estimateSize: (s) => e[s].height,
    overscan: 12
  });
  return /* @__PURE__ */ _.createElement(
    "div",
    {
      style: {
        height: n.getTotalSize(),
        position: "relative",
        width: "100%"
      }
    },
    n.getVirtualItems().map((s) => /* @__PURE__ */ _.createElement(
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
function ct(e) {
  return (e == null ? void 0 : e.data) ?? {};
}
function be(e, l = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > l ? `${t.slice(0, l)}…` : t;
}
function Ns(e) {
  var k;
  const l = [], t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), o = [];
  let a = "";
  const f = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
  let h = 0, i = 0;
  const w = (d) => d.groups[0].cells, b = (d, m) => {
    const p = r.get(d);
    p ? p.push(m) : r.set(d, [m]);
  }, T = (d, m) => {
    if (!d)
      if (a)
        d = a;
      else {
        o.push(m);
        return;
      }
    const p = t.get(d);
    if (p)
      m.runIndex = p.turn ?? 0, w(p).push(m);
    else if (a) {
      const S = t.get(a);
      S ? (m.runIndex = S.turn ?? 0, w(S).push(m)) : b(d, m);
    } else
      b(d, m);
  }, D = (d, m) => {
    const p = r.get(m);
    if (p) {
      for (const S of p) w(d).push(S);
      r.delete(m);
    }
  };
  for (const d of e) {
    const m = ct(d);
    switch (d.type) {
      case "run/start": {
        i += 1, f.set(
          d.run_id,
          typeof m.channel == "string" ? m.channel : ""
        );
        const p = {
          turn: i,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${i}`, cells: [] }]
        };
        t.set(d.run_id, p), l.push(p), a = d.run_id, D(p, d.run_id);
        for (const F of o.splice(0))
          F.runIndex = i, w(p).push(F);
        const S = Array.isArray(m.messages) ? m.messages : [], C = String(m.query ?? ""), I = {
          index: ++h,
          runIndex: i,
          runId: d.run_id,
          kind: "user",
          text: be(C) || be((k = S.at(-1)) == null ? void 0 : k.text),
          messages: S,
          timeSeconds: 0,
          startedAt: ce(d.t),
          isError: !1,
          running: !1,
          model: void 0
        };
        y.set(d.run_id, I), w(p).push(I);
        break;
      }
      case "run/end": {
        const p = t.get(d.run_id);
        a === d.run_id && (a = ""), f.delete(d.run_id), y.delete(d.run_id);
        const S = String(m.status ?? "unknown");
        if (p && (p.status = S, p.durationMs = typeof m.duration_ms == "number" ? m.duration_ms : null), S === "error" && m.error) {
          const C = p ?? {
            turn: null,
            status: S,
            durationMs: typeof m.duration_ms == "number" ? m.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          p || l.push(C), C.groups[0].cells.push({
            index: ++h,
            runIndex: i,
            runId: d.run_id,
            kind: "system",
            markerKind: "error",
            text: be(String(m.error)) || "run failed",
            marker: String(m.error ?? "run failed"),
            timeSeconds: typeof m.duration_ms == "number" ? m.duration_ms / 1e3 : null,
            startedAt: ce(d.t),
            isError: !0,
            running: !1,
            raw: [d]
          });
        }
        break;
      }
      case "agent/spawn": {
        const p = typeof m.child_session_id == "string" ? m.child_session_id : void 0, S = typeof m.child_agent_id == "string" ? m.child_agent_id : "?";
        T(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${S} → ${p ?? "?"}`,
          timeSeconds: 0,
          startedAt: ce(d.t),
          isError: !1,
          running: !1,
          spawnSession: p,
          spawnAgent: S,
          raw: [d]
        });
        break;
      }
      case "message/inbound": {
        const p = Array.isArray(m.parts) ? m.parts : [], S = m.channel_meta && typeof m.channel_meta == "object" ? m.channel_meta : void 0, C = p.map((N) => ({
          type: String(N.type ?? "?"),
          text: typeof N.text == "string" ? N.text : void 0
        })), I = f.get(d.run_id) ?? "", F = S && typeof S.user_id == "string" && S.user_id ? S.user_id : void 0, $ = be(
          C.map((N) => N.text ?? "").filter(Boolean).join(`
`)
        ), M = y.get(d.run_id);
        M && !M.inboundParts ? (M.inboundParts = C, M.channel = I || void 0, M.userId = F, M.raw = [
          ...M.raw ?? [],
          d
        ], M.text || (M.text = $)) : T(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "user",
          text: $ || "📥",
          timeSeconds: 0,
          startedAt: ce(d.t),
          isError: !1,
          running: !1,
          channel: I || void 0,
          userId: F,
          inboundParts: C,
          raw: [d]
        });
        break;
      }
      case "message/outbound": {
        const p = typeof m.text == "string" ? m.text : "";
        T(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "receipt",
          text: "📤",
          timeSeconds: 0,
          startedAt: ce(d.t),
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
        T(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "approval",
          text: String(m.tool_name ?? "?"),
          timeSeconds: 0,
          startedAt: ce(d.t),
          isError: !1,
          running: !1,
          raw: [d]
        });
        break;
      }
      case "approval/decided": {
        const p = String(m.decision ?? "?"), S = m.tool_name ? String(m.tool_name) : "";
        T(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "approval",
          text: S ? `${S} → ${p}` : p,
          timeSeconds: 0,
          startedAt: ce(d.t),
          isError: p === "denied",
          running: !1,
          raw: [d]
        });
        break;
      }
      case "llm/header": {
        const p = typeof m.sha256 == "string" ? m.sha256 : "", S = typeof m.prev_sha256 == "string" ? m.prev_sha256 : void 0, C = m.reason === "changed" ? "changed" : "initial", I = typeof m.system_prompt == "string" ? m.system_prompt : "", F = Array.isArray(m.tools) ? m.tools : [], $ = Array.isArray(m.schemas) ? m.schemas : void 0;
        T(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "header",
          text: C === "initial" ? `⚙ ${I ? `System Prompt (${I.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: ce(d.t),
          isError: !1,
          running: !1,
          prompt: I,
          prevPrompt: c.get(S ?? ""),
          headerTools: F,
          headerReason: C,
          sha: p,
          prevSha: S,
          schemas: $,
          raw: [d]
        }), p && c.set(p, I);
        break;
      }
      case "llm/call": {
        const p = ct(d), S = p.options && typeof p.options == "object" && Object.keys(p.options).length > 0 ? p.options : void 0, C = {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: ce(d.t),
          isError: !1,
          running: !0,
          model: String(p.model ?? "unknown"),
          provider: typeof p.provider == "string" && p.provider ? p.provider : void 0,
          options: S
        };
        T(d.run_id, C);
        const I = n.get(d.run_id) ?? [];
        I.push({ cell: C, callData: p, call: d }), n.set(d.run_id, I);
        break;
      }
      case "llm/result": {
        const p = n.get(d.run_id), S = p == null ? void 0 : p.shift(), C = (S == null ? void 0 : S.callData) ?? {}, I = typeof m.duration_ms == "number" ? m.duration_ms : null, F = m.usage ?? void 0, $ = m.timing, M = Array.isArray(m.tool_calls) ? m.tool_calls : void 0, W = {
          text: (m.error ? be(String(m.error)) : be(String(m.text ?? ""))) || (M && M.length > 0 ? `🛠 ${M.map((X) => X.name).join(", ")}` : ""),
          timeSeconds: I === null ? null : I / 1e3,
          isError: !!m.error,
          running: !1,
          outputText: m.text ? String(m.text) : void 0,
          thinkingText: m.thinking ? String(m.thinking) : void 0,
          usage: F,
          timing: $,
          toolCalls: M,
          note: m.note ? String(m.note) : void 0
        };
        S ? (Object.assign(S.cell, W), S.cell.model = String(
          m.model ?? C.model ?? S.cell.model
        ), S.cell.raw = [
          ...S.call ? [S.call] : [],
          d
        ]) : T(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "message",
          startedAt: ce(d.t),
          model: String(m.model ?? C.model ?? "unknown"),
          ...W
        });
        break;
      }
      case "tool/call": {
        const p = ct(d), S = {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "tool",
          text: `${String(p.name ?? "?")}(${be(
            String(p.input ?? ""),
            60
          )})`,
          timeSeconds: null,
          startedAt: ce(d.t),
          isError: !1,
          running: !0,
          toolName: String(p.name ?? "?"),
          toolInput: p.input ? String(p.input) : void 0
        };
        T(d.run_id, S);
        const C = s.get(d.run_id) ?? [];
        C.push({ cell: S, callData: p, call: d }), s.set(d.run_id, C);
        break;
      }
      case "tool/result": {
        const p = s.get(d.run_id), S = typeof m.tool_call_id == "string" ? m.tool_call_id : null;
        let C;
        if (p) {
          const se = S ? p.findIndex(
            (W) => W.callData.tool_call_id === S
          ) : -1;
          se >= 0 ? C = p.splice(se, 1)[0] : C = p.shift();
        }
        const I = typeof m.duration_ms == "number" ? m.duration_ms : null, F = m.ok !== !1 && !m.error, $ = m.output ? String(m.output) : void 0, M = $ ? ` → ${be($, 60)}` : "", N = {
          timeSeconds: I === null ? null : I / 1e3,
          isError: !F,
          running: !1,
          toolOutput: $,
          toolError: m.error ? String(m.error) : void 0,
          note: m.note ? String(m.note) : void 0
        };
        C ? (Object.assign(C.cell, N), C.cell.text = `${C.cell.text}${M}`, C.cell.raw = [
          ...C.call ? [C.call] : [],
          d
        ]) : T(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "tool",
          text: `?${M}`,
          startedAt: ce(d.t),
          ...N
        });
        break;
      }
    }
  }
  for (const [d, m] of r) {
    const p = t.get(d);
    if (p) {
      for (const S of m) w(p).push(S);
      r.delete(d);
    }
  }
  return l;
}
function Ht(e) {
  return e.flatMap((l) => l.groups.flatMap((t) => t.cells));
}
function Ps(e) {
  var o;
  if (e.length === 0) return { initial: null, turns: [...e] };
  const l = e[0], t = ((o = l.groups[0]) == null ? void 0 : o.cells) ?? [], n = t.findIndex(
    (a) => a.kind === "system" && a.headerReason === "initial" && a.prompt !== void 0
  );
  if (n < 0) return { initial: null, turns: [...e] };
  const s = t[n], r = {
    ...l,
    groups: [
      {
        ...l.groups[0],
        cells: t.filter((a, f) => f !== n)
      }
    ]
  };
  return { initial: s, turns: [r, ...e.slice(1)] };
}
const le = {
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
}, Wt = "agent-trace-timeline-styles", Fs = `
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
let ut = !1;
function Bs() {
  if (ut || typeof document > "u") return;
  if (document.getElementById(Wt)) {
    ut = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = Wt, e.textContent = Fs, document.head.appendChild(e), ut = !0;
}
function dt(e) {
  return An(e);
}
function dn(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function Kt(e) {
  return e != null && Number.isFinite(e);
}
function Hs(e) {
  if (!Kt(e.startedAt)) return null;
  const l = Kt(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + l };
}
function hn(e, l = "sequence") {
  if (l !== "sequence")
    return Ws(
      e,
      l === "duration" || l === "actual",
      l === "duration"
    );
  const t = [], n = [];
  for (const s of e) {
    const r = s.groups.flatMap((o) => o.cells);
    r.length !== 0 && (s.turn !== null && n.push({
      turn: s.turn,
      time: t.length
    }), t.push(
      ...r.map(
        (o, a) => ({
          start: t.length + a,
          end: t.length + a + 1,
          index: o.index,
          isError: o.isError === !0,
          kind: o.kind,
          label: o.text,
          lane: dn(o.kind)
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
function Ws(e, l, t) {
  const n = e.flatMap((c) => {
    const h = c.groups.flatMap(
      (i) => i.cells.flatMap((w) => {
        const b = Hs(w);
        return b === null ? [] : [
          {
            ...b,
            index: w.index,
            isError: w.isError === !0,
            kind: w.kind,
            label: w.text,
            lane: dn(w.kind)
          }
        ];
      })
    );
    return h.length === 0 ? [] : [{ turn: c.turn, rawSpans: h }];
  }), s = n.flatMap((c) => c.rawSpans);
  if (s.length === 0) return null;
  const r = /* @__PURE__ */ new Map();
  let o = 0, a = null;
  for (const c of [...s].sort(
    (h, i) => h.start - i.start || h.end - i.end
  ))
    t && a !== null && c.start > a && (o += c.start - a), r.set(c, o), a = a === null ? c.end : Math.max(a, c.end);
  const f = [], y = [];
  for (const c of n) {
    const h = c.rawSpans.map((i) => {
      const w = r.get(i) ?? 0;
      return {
        ...i,
        start: i.start - w,
        end: (l ? i.end : i.start) - w
      };
    });
    f.push(...h), c.turn !== null && y.push({
      turn: c.turn,
      time: Math.min(...h.map((i) => i.start))
    });
  }
  return {
    start: Math.min(...f.map((c) => c.start)),
    end: Math.max(...f.map((c) => c.end)),
    spans: f,
    turnBoundaries: y
  };
}
function Ks(e, l, t = "sequence") {
  const n = hn(e, t);
  return new Set(
    n == null ? void 0 : n.spans.filter((s) => s.start <= l.end && s.end >= l.start).map((s) => s.index)
  );
}
Bs();
const Ye = window.QwenPaw.host, P = Ye.React, { useEffect: Ue, useMemo: Ut, useRef: Ve, useState: ze } = P, { Tooltip: Us } = Ye.antd, ht = 3, Vs = 4, Xs = 0.08, Gs = 0.025, Js = 32, Ys = 0.5;
function qs(e) {
  const l = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, n = e.timing, s = n && Number.isFinite(n.ttft_ms) ? n.ttft_ms : void 0, r = n && Number.isFinite(n.decode_ms) ? n.decode_ms : void 0;
  return {
    ...l === void 0 ? {} : { durationMs: l },
    ...t === void 0 ? {} : { startedAt: t },
    ...s === void 0 || r === void 0 ? {} : { ttftMs: s, decodingMs: r }
  };
}
function Qs(e) {
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
function Zs(e, l) {
  const t = Qs(e);
  if (l === void 0) return t;
  const n = l.durationMs === void 0 ? null : `Total ${dt(l.durationMs)}`, s = l.startedAt === void 0 ? null : l.durationMs === void 0 ? `Started ${Pe(l.startedAt)}` : `${Pe(l.startedAt)} → ${Pe(
    l.startedAt + l.durationMs
  )}`, r = l.ttftMs === void 0 || l.decodingMs === void 0 ? null : `TTFT ${dt(
    l.ttftMs
  )} · Decoding ${dt(l.decodingMs)}`, o = [n, r].filter((a) => a !== null).join(" · ");
  return [t, s, o].filter((a) => a !== null && a !== "").join(`
`);
}
function gt(e, l) {
  return e <= l ? { start: e, end: l } : { start: l, end: e };
}
function mt(e) {
  return Math.min(1, Math.max(0, e));
}
function el(e, l, t, n) {
  const s = Math.min(n - t, Math.max(0, l)), r = Math.min(
    Math.max(e - s / 2, t),
    n - s
  );
  return { start: r, end: r + s };
}
function Vt(e, l, t, n, s) {
  const r = gt(
    Math.min(s, Math.max(n, e.start)),
    Math.min(s, Math.max(n, e.end))
  );
  return {
    start: (r.start - l) / t,
    end: (r.end - l) / t
  };
}
function mn({
  label: e,
  placement: l,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ P.createElement(
    Us,
    {
      title: /* @__PURE__ */ P.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: l,
      mouseEnterDelay: Ys,
      ...n
    },
    t
  );
}
function Xt() {
  return /* @__PURE__ */ P.createElement("div", { className: le.labels, "aria-hidden": "true" }, /* @__PURE__ */ P.createElement("span", null, "Input"), /* @__PURE__ */ P.createElement("span", null, "Model"), /* @__PURE__ */ P.createElement("span", null, "Tools"));
}
function Gt({
  loading: e,
  onHover: l,
  onLoad: t
}) {
  return /* @__PURE__ */ P.createElement(
    mn,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ P.createElement(
      "button",
      {
        type: "button",
        className: le.earlierHistory,
        "data-earlier-history": !0,
        "data-loading": e || void 0,
        "aria-label": e ? "Loading earlier history" : "Load earlier history",
        "aria-disabled": e || t === void 0,
        onClick: t,
        onPointerEnter: (n) => {
          n.stopPropagation(), l();
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
const tl = P.memo(function({
  turns: l,
  mode: t,
  range: n,
  hasEarlierRecords: s = !1,
  onLoadEarlier: r,
  selectedIndex: o = null,
  searchMatchIndexes: a = null,
  onRangeChange: f,
  onRecordSelect: y,
  onRecordFocus: c
}) {
  const h = typeof Ye.useTheme == "function" ? Ye.useTheme() : void 0, i = Ut(
    () => hn(l, t),
    [t, l]
  ), w = Ut(
    () => new Map(
      l.flatMap(
        (g) => g.groups.flatMap(
          (O) => O.cells.map(
            (B) => [B.index, qs(B)]
          )
        )
      )
    ),
    [l]
  ), b = Ve(null), T = Ve(null), D = Ve(null), k = Ve(null), [d, m] = ze(null), [p, S] = ze(null), [C, I] = ze(!1), [F, $] = ze(!1), [M, N] = ze(null), [se, W] = ze(!1);
  Ue(() => {
    i !== null && n !== null && (n.end < i.start || n.start > i.end) && f(null);
  }, [i, f, n]), Ue(() => {
    i !== null && (W(!1), N(
      (g) => g !== null && (g.end < i.start || g.start > i.end) ? null : g
    ));
  }, [i]), Ue(() => {
    if (i === null || o === null) return;
    const g = i.spans.find(
      (O) => O.index === o
    );
    g !== void 0 && (W(!0), N((O) => {
      if (O === null || g.end > O.start && g.start < O.end)
        return O;
      const B = Math.max(1, O.end - O.start), H = g.end <= O.start ? g.start : g.end - B, K = Math.min(
        Math.max(H, i.start),
        Math.max(i.start, i.end - B)
      );
      return K === O.start ? O : { start: K, end: K + B };
    }));
  }, [i, o]);
  const X = Math.max(1, ((i == null ? void 0 : i.end) ?? 0) - ((i == null ? void 0 : i.start) ?? 0)), Se = Math.min(
    X,
    Math.max(1, ((M == null ? void 0 : M.end) ?? 0) - ((M == null ? void 0 : M.start) ?? 0))
  ), Fe = i === null || M === null ? (i == null ? void 0 : i.start) ?? 0 : Math.min(
    Math.max(M.start, i.start),
    i.end - Se
  ), G = M === null ? X : Se, q = M === null ? (i == null ? void 0 : i.start) ?? 0 : Fe, Ze = s && i !== null && q === i.start, $e = r === void 0 || C ? void 0 : () => {
    I(!0), r().finally(() => {
      I(!1);
    });
  }, Te = i === null ? void 0 : {
    "--trajectory-domain-left": `${-(q - i.start) / G * 100}%`,
    "--trajectory-domain-width": `${X / G * 100}%`
  }, fe = i === null || n === null ? null : Vt(
    n,
    q,
    G,
    i.start,
    i.end
  ), U = (i === null || d === null ? null : Vt(
    d,
    q,
    G,
    i.start,
    i.end
  )) ?? fe, we = d ?? n;
  if (Ue(() => {
    const g = D.current;
    if (g === null) return;
    const O = (B) => {
      B.preventDefault();
      const H = k.current;
      if (H === null || i === null) return;
      W(!1);
      const K = H.getBoundingClientRect(), V = mt(
        (B.clientX - K.left) / Math.max(1, K.width)
      ), ee = Math.min(
        X,
        Math.max(
          Math.min(
            t === "sequence" ? Vs : 20,
            X
          ),
          G * Math.exp(B.deltaY * 15e-4)
        )
      );
      if (ee >= X * 0.999) {
        N(null);
        return;
      }
      const A = q + V * G, te = Math.min(
        Math.max(A - V * ee, i.start),
        i.end - ee
      );
      N({ start: te, end: te + ee });
    };
    return g.addEventListener("wheel", O, { passive: !1 }), () => {
      g.removeEventListener("wheel", O);
    };
  }, [G, q, X, t, i]), i === null)
    return /* @__PURE__ */ P.createElement(
      "section",
      {
        ref: D,
        className: le.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ P.createElement("div", { className: le.plot }, /* @__PURE__ */ P.createElement(Xt, null), /* @__PURE__ */ P.createElement("div", { className: le.track }, /* @__PURE__ */ P.createElement("span", { className: le.empty }, "No timing data"), s && /* @__PURE__ */ P.createElement(
        Gt,
        {
          loading: C,
          onHover: () => {
            S(null);
          },
          onLoad: $e
        }
      )))
    );
  const Le = Math.min(
    G,
    X / i.spans.length
  ), pe = (g) => {
    const O = g.currentTarget.getBoundingClientRect();
    return mt((g.clientX - O.left) / Math.max(1, O.width));
  }, ke = (g) => {
    var K;
    const O = g.target instanceof HTMLElement ? g.target : null, B = (K = O == null ? void 0 : O.closest("[data-timeline-record-index]")) == null ? void 0 : K.dataset.timelineRecordIndex;
    if (B === void 0) return null;
    const H = Number(B);
    return Number.isFinite(H) ? H : null;
  }, xe = (g) => {
    f(g);
  }, et = (g) => {
    if (g.button === 2) {
      T.current = {
        anchorClientX: g.clientX,
        anchorStart: q,
        moved: !1,
        pannable: M !== null,
        pointerId: g.pointerId
      }, M !== null && W(!1), $(!0), typeof g.currentTarget.setPointerCapture == "function" && g.currentTarget.setPointerCapture(g.pointerId);
      return;
    }
    if (g.button !== 0) return;
    const O = pe(g), B = q + O * G, H = ke(g);
    S({ fraction: O, recordIndex: H }), b.current = {
      pointerId: g.pointerId,
      anchorTime: B,
      anchorClientX: g.clientX,
      recordIndex: H
    }, typeof g.currentTarget.setPointerCapture == "function" && g.currentTarget.setPointerCapture(g.pointerId), m({ start: B, end: B });
  }, ge = (g) => {
    const O = g.currentTarget.getBoundingClientRect(), B = pe(g);
    S({ fraction: B, recordIndex: ke(g) });
    const H = T.current;
    if (H !== null && H.pointerId === g.pointerId) {
      if (Math.abs(g.clientX - H.anchorClientX) >= ht && (H.moved = !0), !H.pannable) return;
      const A = (g.clientX - H.anchorClientX) / Math.max(1, O.width), te = Math.min(
        Math.max(H.anchorStart - A * G, i.start),
        i.end - G
      );
      N({ start: te, end: te + G });
      return;
    }
    const K = b.current;
    if (K === null || K.pointerId !== g.pointerId) return;
    let V = q;
    if (M !== null) {
      const A = g.clientX - O.left, te = Math.min(
        Js,
        Math.max(1, O.width * Xs)
      ), Z = A < te ? -1 : A > O.width - te ? 1 : 0;
      if (Z !== 0) {
        const Ie = Z < 0 ? te - A : A - (O.width - te), ye = mt(Ie / te), ve = q + Z * G * Gs * Math.max(0.2, ye);
        V = Math.min(
          Math.max(ve, i.start),
          i.end - G
        ), V !== q && (W(!1), N({
          start: V,
          end: V + G
        }));
      }
    }
    const ee = V + B * G;
    m(gt(K.anchorTime, ee));
  }, He = (g) => {
    const O = T.current;
    if (O !== null && O.pointerId === g.pointerId) {
      const Z = O.moved || Math.abs(g.clientX - O.anchorClientX) >= ht;
      T.current = null, $(!1), Z || f(null);
      return;
    }
    const B = b.current;
    if (B === null || B.pointerId !== g.pointerId) return;
    const H = pe(g), K = q + H * G, V = gt(B.anchorTime, K);
    S({ fraction: H, recordIndex: ke(g) }), b.current = null, m(null);
    const ee = Math.abs(g.clientX - B.anchorClientX) < ht, A = ee && B.recordIndex !== null ? i.spans.find((Z) => Z.index === B.recordIndex) : void 0;
    if (A !== void 0) {
      f(null), y == null || y(A.index);
      return;
    }
    const te = V.end - V.start < Le ? el(
      ee ? V.start : (V.start + V.end) / 2,
      Le,
      i.start,
      i.end
    ) : V;
    if (xe(te), ee) {
      const Z = V.start, Ie = i.spans.reduce((ye, ve) => {
        const v = Z < ye.start ? ye.start - Z : Z > ye.end ? Z - ye.end : 0;
        return (Z < ve.start ? ve.start - Z : Z > ve.end ? Z - ve.end : 0) < v ? ve : ye;
      });
      c == null || c(Ie.index);
    }
  }, _e = (g) => {
    g.key !== "Escape" || n === null || (g.preventDefault(), f(null));
  }, Q = () => {
    b.current = null, T.current = null, m(null), S(null), $(!1);
  };
  return /* @__PURE__ */ P.createElement(
    "section",
    {
      ref: D,
      className: le.root,
      "data-theme": h || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ P.createElement("div", { className: le.plot }, /* @__PURE__ */ P.createElement(Xt, null), /* @__PURE__ */ P.createElement(
      "div",
      {
        ref: k,
        className: le.track,
        "data-panning": F || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: _e,
        onPointerDown: et,
        onPointerMove: ge,
        onPointerUp: He,
        onPointerCancel: Q,
        onPointerLeave: () => {
          b.current === null && T.current === null && S(null);
        },
        onDoubleClick: (g) => {
          g.preventDefault(), f(null);
        },
        onContextMenu: (g) => {
          g.preventDefault();
        }
      },
      Ze && /* @__PURE__ */ P.createElement(
        Gt,
        {
          loading: C,
          onHover: () => {
            S(null);
          },
          onLoad: $e
        }
      ),
      p !== null && p.recordIndex === null && d === null && /* @__PURE__ */ P.createElement(
        "div",
        {
          className: le.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${p.fraction * 100}%`
          }
        }
      ),
      U !== null && /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(
        "div",
        {
          className: le.selection,
          "data-dragging": d === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${U.start * 100}%`,
            "--trajectory-selection-width": `${(U.end - U.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ P.createElement(
        "div",
        {
          className: le.selectionEdges,
          "data-dragging": d === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${U.start * 100}%`,
            "--trajectory-selection-width": `${(U.end - U.start) * 100}%`
          }
        }
      )),
      /* @__PURE__ */ P.createElement(
        "div",
        {
          className: le.turnBoundaries,
          "data-animate-viewport": se || void 0,
          "aria-hidden": "true",
          style: Te
        },
        i.turnBoundaries.filter(
          (g) => g.time > i.start && g.time >= q && g.time <= q + G
        ).map((g) => /* @__PURE__ */ P.createElement(
          "span",
          {
            className: le.turnBoundary,
            "data-turn": g.turn,
            key: g.turn,
            style: {
              "--trajectory-turn-left": `${(g.time - i.start) / X * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ P.createElement(
        "div",
        {
          className: le.lanes,
          "data-animate-viewport": se || void 0,
          "data-timeline-domain": !0,
          style: Te
        },
        i.spans.filter(
          (g) => g.index === o || g.end >= q && g.start <= q + G
        ).map((g) => {
          const O = (g.start - i.start) / X, H = (g.end - g.start) / X * 100, K = w.get(g.index), V = K == null ? void 0 : K.ttftMs, ee = K == null ? void 0 : K.decodingMs, A = V === void 0 || ee === void 0 || V + ee <= 0 ? null : V / (V + ee);
          return /* @__PURE__ */ P.createElement(
            mn,
            {
              key: g.index,
              label: Zs(g.kind, K),
              placement: "bottom"
            },
            /* @__PURE__ */ P.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: le.span,
                "data-timeline-span": g.kind,
                "data-timeline-record-index": g.index,
                "data-assistant-timing": A === null ? void 0 : "true",
                "data-error": g.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": g.index === o || void 0,
                "data-hovered": (p == null ? void 0 : p.recordIndex) === g.index || void 0,
                "data-search-match": a === null ? void 0 : a.has(g.index) ? "true" : "false",
                "data-selected": we === null ? void 0 : g.start <= we.end && g.end >= we.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${O * 100}%`,
                  "--trajectory-span-width": `${H}%`,
                  "--trajectory-span-gap": `min(${H * 0.08}%, 1px)`,
                  "--trajectory-span-lane": g.lane,
                  ...A === null ? {} : {
                    "--trajectory-assistant-ttft": `${A * 100}%`
                  }
                }
              }
            )
          );
        })
      )
    ))
  );
}), xt = window.QwenPaw.host, ue = xt.React, { Button: nl, Input: sl, Segmented: ll, Tooltip: Jt } = xt.antd, { MenuFoldOutlined: rl, MenuUnfoldOutlined: ol, ReloadOutlined: il, SearchOutlined: al } = xt.antdIcons;
function cl({
  mode: e,
  onModeChange: l,
  search: t,
  onSearchChange: n,
  onRefresh: s,
  modeOptions: r,
  allCollapsed: o,
  hasRequests: a,
  onToggleCollapseAll: f,
  callsCollapsed: y,
  onToggleCallsCollapsed: c
}) {
  const h = ie();
  return /* @__PURE__ */ ue.createElement(
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
    /* @__PURE__ */ ue.createElement(Jt, { title: x(h, "projectionHint") }, /* @__PURE__ */ ue.createElement(
      ll,
      {
        size: "small",
        value: e,
        options: r,
        onChange: (i) => l(i)
      }
    )),
    /* @__PURE__ */ ue.createElement(
      sl,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ ue.createElement(al, null),
        placeholder: x(h, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (i) => n(i.target.value)
      }
    ),
    a && /* @__PURE__ */ ue.createElement(
      Jt,
      {
        title: o ? x(h, "expandAll") : x(h, "collapseAll")
      },
      /* @__PURE__ */ ue.createElement(
        nl,
        {
          size: "small",
          type: "text",
          icon: o ? /* @__PURE__ */ ue.createElement(ol, null) : /* @__PURE__ */ ue.createElement(rl, null),
          onClick: f
        }
      )
    ),
    /* @__PURE__ */ ue.createElement("span", { style: { marginLeft: "auto" } }, /* @__PURE__ */ ue.createElement(
      "a",
      {
        onClick: s,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ ue.createElement(il, null),
      " ",
      x(h, "refresh")
    ))
  );
}
const Ae = window.QwenPaw.host, E = Ae.React, { useCallback: ft, useEffect: Xe, useMemo: oe, useRef: ul, useState: Y } = E, {
  Button: Oe,
  Empty: Ge,
  Input: dl,
  Popconfirm: hl,
  Popover: ml,
  Space: fl,
  Spin: yt,
  Switch: pl,
  Tag: vt,
  Tooltip: Yt,
  message: Ne
} = Ae.antd, {
  CaretRightOutlined: gl,
  DeleteOutlined: yl,
  DownloadOutlined: vl,
  MenuFoldOutlined: El,
  MenuUnfoldOutlined: Sl,
  SearchOutlined: xl,
  SettingOutlined: qt
} = Ae.antdIcons, { Text: de } = Ae.antd.Typography;
function fn(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function bl(e) {
  if (!e) return "-";
  const l = new Date(e);
  return Number.isNaN(l.getTime()) ? e : l.toLocaleString();
}
function wl(e) {
  if (!e) return "-";
  const l = Date.parse(e);
  if (!Number.isFinite(l)) return e;
  const t = Date.now() - l;
  return t < 6e4 ? "刚刚" : t < 36e5 ? `${Math.floor(t / 6e4)} 分钟前` : t < 864e5 ? `${Math.floor(t / 36e5)} 小时前` : new Date(l).toLocaleString();
}
function pn(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function Qt(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const gn = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default"
};
function yn(e) {
  return e || "unknown";
}
function kl({
  groups: e,
  collapsedAgents: l,
  onToggleAgent: t,
  searching: n,
  selected: s,
  onSelect: r,
  locale: o
}) {
  const a = e.length > 1;
  return /* @__PURE__ */ E.createElement(E.Fragment, null, e.map(([f, y]) => {
    const c = a && !n && l.has(f);
    return /* @__PURE__ */ E.createElement("div", { key: f }, a && /* @__PURE__ */ E.createElement(
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
      /* @__PURE__ */ E.createElement(
        gl,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: c ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ E.createElement(de, { strong: !0, style: { fontSize: 12 } }, f),
      /* @__PURE__ */ E.createElement(de, { type: "secondary", style: { fontSize: 11 } }, y.length)
    ), !c && y.map((h) => {
      const i = h.session_id === s;
      return /* @__PURE__ */ E.createElement(
        "div",
        {
          key: h.session_id,
          onClick: () => r(h.session_id),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: i ? "rgba(22,119,255,0.10)" : "transparent",
            border: i ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ E.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ E.createElement(
            de,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${h.title ? `${h.title}
` : ""}${h.session_id}`
              }
            },
            h.title || h.agent_id || fn(h.session_id)
          ),
          a ? null : h.agent_id ? /* @__PURE__ */ E.createElement(
            vt,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            h.agent_id
          ) : null,
          /* @__PURE__ */ E.createElement(
            vt,
            {
              color: gn[h.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            yn(h.status)
          )
        ),
        /* @__PURE__ */ E.createElement(
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
          /* @__PURE__ */ E.createElement("span", null, h.channel || "-"),
          /* @__PURE__ */ E.createElement("span", null, h.runs, " ", x(o, "runs")),
          /* @__PURE__ */ E.createElement("span", null, pn(h.total_tokens), " tok"),
          /* @__PURE__ */ E.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: bl(h.last_event_t)
            },
            wl(h.last_event_t)
          )
        )
      );
    }));
  }));
}
function Zt({
  config: e,
  onChange: l,
  children: t
}) {
  const n = ie(), s = (o, a, f) => /* @__PURE__ */ E.createElement(
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
    /* @__PURE__ */ E.createElement(de, { style: { fontSize: 13 } }, o),
    /* @__PURE__ */ E.createElement(
      pl,
      {
        size: "small",
        checked: !!a,
        onChange: (y) => l({ [f]: y })
      }
    )
  ), r = /* @__PURE__ */ E.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ E.createElement(de, { strong: !0, style: { fontSize: 13 } }, x(n, "settings")), /* @__PURE__ */ E.createElement("div", { style: { marginTop: 8 } }, e ? [
    s(x(n, "enabled"), e.enabled, "enabled"),
    s(x(n, "captureLlm"), e.capture_llm, "capture_llm"),
    s(
      x(n, "captureTools"),
      e.capture_tools,
      "capture_tools"
    ),
    s(
      x(n, "captureHeaders"),
      e.capture_headers ?? !0,
      "capture_headers"
    )
  ] : /* @__PURE__ */ E.createElement(yt, { size: "small" })));
  return /* @__PURE__ */ E.createElement(ml, { content: r, trigger: "click", placement: "bottomRight" }, t);
}
function Tl() {
  const e = typeof Ae.useLocale == "function" ? Ae.useLocale() : void 0, l = oe(
    () => nn(e ?? ie()),
    [e]
  ), [t, n] = Y(null), [s, r] = Y(!1), [o, a] = Y(
    /* @__PURE__ */ new Set()
  ), [f, y] = Y(!1), [c, h] = Y(!1), [i, w] = Y(null), [b, T] = Y(null), [D, k] = Y(!1), [d, m] = Y(!1), [p, S] = Y(""), [C, I] = Y(""), [F, $] = Y("sequence"), [M, N] = Y(null), [se, W] = Y(null), [X, Se] = Y(null), [Fe, G] = Y(
    /* @__PURE__ */ new Set()
  ), [q, Ze] = Y(!1), [$e, Te] = Y(null), [fe, Be] = Y(null), [U, we] = Y(null), [Le, pe] = Y(null), ke = ul(null);
  ke.current = i;
  const xe = ft(async () => {
    try {
      const v = await zt({ limit: 100, offset: 0 });
      n(v.sessions), r(v.has_more), pe(null);
    } catch (v) {
      pe(String(v.message));
    }
  }, []), et = ft(async () => {
    h(!0);
    try {
      const v = await zt({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      n((R) => {
        const L = R ?? [];
        return [
          ...L,
          ...v.sessions.filter(
            (Ee) => !L.some((tt) => tt.session_id === Ee.session_id)
          )
        ];
      }), r(v.has_more);
    } catch (v) {
      pe(String(v.message));
    } finally {
      h(!1);
    }
  }, [t]), ge = ft(
    async (v, R) => {
      R || k(!0);
      try {
        const L = await bn(v, {
          beforeSeq: R,
          limit: 200
        });
        pe(null), T((Ee) => R && Ee ? {
          ...L,
          events: [...L.events, ...Ee.events]
        } : L);
      } catch (L) {
        pe(String(L.message));
      } finally {
        R || k(!1);
      }
    },
    []
  );
  Xe(() => {
    xe(), wn().then(Te).catch(() => Te(null));
    try {
      const v = new URLSearchParams(window.location.search).get("session");
      v && w(v);
    } catch {
    }
  }, [xe]), Xe(() => {
    const v = setInterval(() => {
      document.visibilityState === "visible" && xe();
    }, 15e3);
    return () => clearInterval(v);
  }, [xe]), Xe(() => {
    i ? (N(null), W(null), Se(null), G(/* @__PURE__ */ new Set()), I(""), ge(i), xn(i).then((v) => {
      we(v), Be({
        sessionId: i,
        inputTokens: v.input_tokens,
        outputTokens: v.output_tokens,
        totalTokens: v.total_tokens,
        reasoningTokens: Number(v.reasoning_tokens ?? 0)
      });
    }).catch(() => {
      we(null), Be(null);
    })) : (T(null), we(null), Be(null));
  }, [i, ge]);
  const He = oe(
    () => b ? Ns(b.events) : [],
    [b]
  ), { initial: _e, turns: Q } = oe(
    () => Ps(He),
    [He]
  ), g = oe(
    () => _e ? [_e, ...Ht(Q)] : Ht(Q),
    [_e, Q]
  ), O = oe(
    () => Q.some((v) => v.status === "running"),
    [Q]
  );
  Xe(() => {
    if (!i || !O) return;
    const v = setInterval(() => {
      document.visibilityState === "visible" && ke.current && ge(ke.current);
    }, 5e3);
    return () => clearInterval(v);
  }, [i, O, ge]);
  const B = oe(
    () => M === null ? null : Ks(Q, M, F),
    [M, Q, F]
  ), H = oe(() => {
    const v = C.trim().toLowerCase();
    return v ? new Set(
      g.filter(
        (R) => [
          R.text,
          R.outputText,
          R.thinkingText,
          R.toolName,
          R.toolInput,
          R.toolOutput,
          R.model
        ].filter(Boolean).join(`
`).toLowerCase().includes(v)
      ).map((R) => R.index)
    ) : null;
  }, [C, g]), K = oe(
    () => se === null ? null : g.find((v) => v.index === se) ?? null,
    [g, se]
  ), V = oe(() => {
    var Mt, Ct;
    if (X === null) return null;
    const v = Q.find((j) => j.turn === X);
    if (!v) return null;
    const R = ((Mt = v.groups[0]) == null ? void 0 : Mt.cells) ?? [], L = R.filter((j) => j.kind === "message"), Ee = R.filter((j) => j.kind === "tool"), tt = [
      ...new Set(
        L.map((j) => j.model).filter((j) => !!j)
      )
    ], vn = [
      ...new Set(
        L.map((j) => j.provider).filter((j) => !!j)
      )
    ];
    let bt = 0, wt = 0, kt = 0, Tt = 0, _t = 0, We = null, nt = 0;
    const It = [];
    for (const j of R)
      j.usage && (bt += j.usage.input_tokens ?? 0, wt += j.usage.output_tokens ?? 0, kt += j.usage.cache_input_tokens ?? 0, Tt += j.usage.cache_creation_input_tokens ?? 0, _t += j.usage.reasoning_tokens ?? 0), j.timing && (We = We === null ? j.timing.ttft_ms : Math.min(We, j.timing.ttft_ms), nt = (nt ?? 0) + j.timing.decode_ms), j.isError && It.push(j.toolError ?? j.text ?? "error");
    const Me = R.find((j) => j.kind === "user"), En = (Ct = [...L].reverse().find((j) => j.options)) == null ? void 0 : Ct.options, st = [...L].reverse().find((j) => j.outputText);
    return {
      turn: X,
      status: v.status,
      durationMs: v.durationMs,
      startedAt: (Me == null ? void 0 : Me.startedAt) ?? null,
      query: (Me == null ? void 0 : Me.text) ?? "",
      llmCalls: L.length,
      toolCalls: Ee.length,
      models: tt,
      providers: vn,
      inputTokens: bt,
      outputTokens: wt,
      cacheReadTokens: kt,
      cacheWriteTokens: Tt,
      reasoningTokens: _t,
      resultIndex: st == null ? void 0 : st.index,
      ttftMs: We,
      decodeMs: nt,
      errors: It,
      options: En,
      sessionTotals: fe && fe.sessionId === i ? {
        inputTokens: fe.inputTokens,
        outputTokens: fe.outputTokens,
        totalTokens: fe.totalTokens,
        reasoningTokens: fe.reasoningTokens
      } : void 0
    };
  }, [X, Q, fe, i]), ee = !!(b && b.events.length > 0 && b.events[0].seq > 1), A = oe(
    () => (t == null ? void 0 : t.find((v) => v.session_id === i)) ?? null,
    [t, i]
  ), te = oe(() => {
    if (!t) return [];
    const v = p.trim().toLowerCase();
    return v ? t.filter(
      (R) => [R.session_id, R.title ?? "", R.agent_id, R.channel].join(" ").toLowerCase().includes(v)
    ) : t;
  }, [t, p]), Z = oe(() => {
    const v = /* @__PURE__ */ new Map();
    for (const R of te) {
      const L = R.agent_id || "(unknown)", Ee = v.get(L);
      Ee ? Ee.push(R) : v.set(L, [R]);
    }
    return [...v.entries()];
  }, [te]), Ie = async (v) => {
    try {
      Te(await kn(v));
    } catch (R) {
      Ne.error(String(R.message));
    }
  }, ye = oe(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), ve = oe(() => {
    if (!U) return null;
    const v = [
      `${U.runs} ${x(l, "statRounds")} · ${U.llm_calls} ${x(l, "statSteps")}`,
      `LLM ${ae(U.llm_ms_total / 1e3)} · ${x(
        l,
        "toolCalls"
      )} ${ae(U.tool_ms_total / 1e3)}`,
      `${x(l, "statTtftAvg")} ${U.ttft_ms_avg === null ? "-" : ae(U.ttft_ms_avg / 1e3)} · ${Et(
        U.output_tokens,
        U.decode_ms_total / 1e3
      )}`
    ];
    if (U.cache_read_tokens > 0 || U.cache_write_tokens > 0) {
      const R = U.cache_read_tokens + U.input_tokens, L = R > 0 ? Math.round(U.cache_read_tokens / R * 100) : 0;
      v.push(`${x(l, "statCacheHit")} ${L}%`);
    }
    return v.push(
      `${x(l, "statInput")} ${re(
        U.input_tokens
      )} tok · ${x(l, "statOutput")} ${re(
        U.output_tokens
      )} tok`
    ), A && v.push(Qt(A.size_bytes)), v.join(" | ");
  }, [U, A, l]);
  return /* @__PURE__ */ E.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, f ? /* @__PURE__ */ E.createElement(
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
    /* @__PURE__ */ E.createElement(Yt, { title: x(l, "expandSidebar"), placement: "right" }, /* @__PURE__ */ E.createElement(
      Oe,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ E.createElement(Sl, null),
        onClick: () => y(!1)
      }
    ))
  ) : /* @__PURE__ */ E.createElement(
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
    /* @__PURE__ */ E.createElement(
      "div",
      {
        style: {
          padding: "12px 12px 8px",
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      },
      /* @__PURE__ */ E.createElement(
        dl,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ E.createElement(xl, null),
          placeholder: x(l, "searchPlaceholder"),
          value: p,
          style: { flex: 1, minWidth: 0 },
          onChange: (v) => S(v.target.value)
        }
      ),
      /* @__PURE__ */ E.createElement(Yt, { title: x(l, "collapseSidebar") }, /* @__PURE__ */ E.createElement(
        Oe,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ E.createElement(El, null),
          onClick: () => y(!0)
        }
      ))
    ),
    /* @__PURE__ */ E.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ E.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ E.createElement(yt, null)) : te.length === 0 ? /* @__PURE__ */ E.createElement(
      Ge,
      {
        image: Ge.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ E.createElement("span", { style: { fontSize: 12 } }, x(l, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ E.createElement(
        de,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        x(l, "noSessionsHint")
      )
    ) : /* @__PURE__ */ E.createElement(
      kl,
      {
        groups: Z,
        collapsedAgents: o,
        onToggleAgent: (v) => {
          a((R) => {
            const L = new Set(R);
            return L.has(v) ? L.delete(v) : L.add(v), L;
          });
        },
        searching: !!p.trim(),
        selected: i,
        onSelect: w,
        locale: l
      }
    ), t !== null && s && !p.trim() && /* @__PURE__ */ E.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ E.createElement(
      "a",
      {
        onClick: () => void et(),
        style: { fontSize: 12 }
      },
      c ? "…" : `⋯ ${x(l, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ E.createElement(
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
    /* @__PURE__ */ E.createElement(
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
      i ? /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            minWidth: 0
          }
        },
        /* @__PURE__ */ E.createElement(
          de,
          {
            strong: !0,
            ellipsis: {
              tooltip: (A == null ? void 0 : A.title) || i
            },
            style: { fontSize: 13, flex: "0 1 auto", minWidth: 60 }
          },
          (A == null ? void 0 : A.title) || (A == null ? void 0 : A.agent_id) || fn(i)
        ),
        /* @__PURE__ */ E.createElement(
          vt,
          {
            color: gn[(A == null ? void 0 : A.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          yn((A == null ? void 0 : A.status) ?? "unknown")
        ),
        A != null && A.channel ? /* @__PURE__ */ E.createElement(
          de,
          {
            type: "secondary",
            style: { fontSize: 11, flexShrink: 0 }
          },
          A.channel
        ) : null,
        /* @__PURE__ */ E.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ E.createElement(fl, null, /* @__PURE__ */ E.createElement(Zt, { config: $e, onChange: Ie }, /* @__PURE__ */ E.createElement(Oe, { size: "small", icon: /* @__PURE__ */ E.createElement(qt, null) })), /* @__PURE__ */ E.createElement(
          Oe,
          {
            size: "small",
            icon: /* @__PURE__ */ E.createElement(vl, null),
            onClick: () => {
              Tn(i).then(() => Ne.success(x(l, "exported"))).catch(
                (v) => Ne.error(String(v.message))
              );
            }
          },
          x(l, "export")
        ), /* @__PURE__ */ E.createElement(
          hl,
          {
            title: x(l, "deleteConfirm"),
            onConfirm: () => {
              _n(i).then(() => {
                Ne.success(x(l, "deleted")), w(null), xe();
              }).catch(
                (v) => Ne.error(String(v.message))
              );
            }
          },
          /* @__PURE__ */ E.createElement(Oe, { size: "small", danger: !0, icon: /* @__PURE__ */ E.createElement(yl, null) }, x(l, "delete"))
        )))
      ), /* @__PURE__ */ E.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap"
          }
        },
        /* @__PURE__ */ E.createElement(
          de,
          {
            type: "secondary",
            style: { fontSize: 11, flex: "1 1 300px", minWidth: 0 }
          },
          ve ?? // Transient line while the stats endpoint responds.
          (A ? `${A.runs} ${x(l, "statRounds")} · ${A.llm_calls} ${x(l, "statSteps")} · ${pn(
            A.total_tokens
          )} ${x(l, "tokens")} · ${Qt(
            A.size_bytes
          )}` : "")
        ),
        /* @__PURE__ */ E.createElement(
          de,
          {
            type: "secondary",
            copyable: {
              text: i,
              tooltips: [
                x(l, "copySessionId"),
                x(l, "copiedSessionId")
              ]
            },
            style: { fontSize: 11, marginLeft: "auto", flexShrink: 0 }
          },
          i
        )
      )) : /* @__PURE__ */ E.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8
          }
        },
        /* @__PURE__ */ E.createElement(de, { type: "secondary", style: { fontSize: 13 } }, x(l, "selectSession")),
        /* @__PURE__ */ E.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ E.createElement(Zt, { config: $e, onChange: Ie }, /* @__PURE__ */ E.createElement(Oe, { size: "small", icon: /* @__PURE__ */ E.createElement(qt, null) })))
      )
    ),
    Le && /* @__PURE__ */ E.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ E.createElement(de, { type: "danger", style: { fontSize: 12 } }, `${x(l, "loadFailed")}: ${Le}`)),
    /* @__PURE__ */ E.createElement(
      cl,
      {
        mode: F,
        onModeChange: $,
        search: C,
        onSearchChange: I,
        onRefresh: () => {
          xe(), i && ge(i);
        },
        modeOptions: ye,
        allCollapsed: Q.length > 0 && Q.every((v) => Fe.has(v.turn ?? -1)),
        hasRequests: Q.some((v) => v.turn !== null),
        callsCollapsed: q,
        onToggleCallsCollapsed: () => Ze((v) => !v),
        onToggleCollapseAll: () => {
          G((v) => Q.some(
            (L) => L.turn !== null && !v.has(L.turn)
          ) ? new Set(
            Q.map((L) => L.turn).filter((L) => L !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ E.createElement(
      tl,
      {
        turns: Q,
        mode: F,
        range: M,
        hasEarlierRecords: ee,
        onLoadEarlier: async () => {
          var v;
          return !b || b.events.length === 0 ? !1 : (await ge(i, (v = b.events[0]) == null ? void 0 : v.seq), !0);
        },
        selectedIndex: se,
        searchMatchIndexes: H,
        onRangeChange: N,
        onRecordSelect: W,
        onRecordFocus: W
      }
    ),
    D && !b ? /* @__PURE__ */ E.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ E.createElement(yt, null)) : b ? /* @__PURE__ */ E.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ E.createElement(
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
      /* @__PURE__ */ E.createElement(
        Ds,
        {
          turns: Q,
          selectedIndex: se,
          selectedTurn: X,
          collapsedTurns: Fe,
          focusIndexes: B,
          searchMatchIndexes: H,
          onSelectedIndexChange: (v) => {
            if (v === se) {
              W(null);
              return;
            }
            W(v), Se(null);
          },
          onSelectedTurnChange: (v) => {
            Se(v), W(null);
          },
          callsCollapsed: q,
          onToggleTurn: (v) => {
            G((R) => {
              const L = new Set(R);
              return L.has(v) ? L.delete(v) : L.add(v), L;
            });
          },
          hasOlderRecords: ee,
          loadingOlder: d,
          onLoadOlder: () => {
            var v;
            !b || b.events.length === 0 || (m(!0), ge(
              i,
              (v = b.events[0]) == null ? void 0 : v.seq
            ).finally(() => m(!1)));
          },
          emptyText: x(l, "noSessions"),
          initialRecord: _e
        }
      )
    ), (K !== null || V !== null) && /* @__PURE__ */ E.createElement(
      Vn,
      {
        record: K,
        request: V,
        onJumpSession: w,
        onSelectTurn: (v) => {
          Se(v), W(null);
        },
        onClose: () => {
          W(null), Se(null);
        }
      }
    )) : /* @__PURE__ */ E.createElement(
      Ge,
      {
        image: Ge.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: x(l, "selectSession")
      }
    )
  ));
}
var en, tn;
(tn = (en = window.QwenPaw).registerRoutes) == null || tn.call(en, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: Tl,
    label: x(ie(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
