const mn = {
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
    statOutput: "输出"
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
    statOutput: "Out"
  }
};
function Zt(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function ue() {
  try {
    return Zt(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function x(e, l) {
  return mn[e][l];
}
const $e = window.QwenPaw.host;
async function fn(e) {
  return Oe(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats`
  );
}
async function en(e, l) {
  return $e.fetch ? $e.fetch(e, l) : fetch($e.getApiUrl(e), {
    ...l,
    headers: {
      ...(l == null ? void 0 : l.headers) || {},
      ...$e.getApiToken() ? { Authorization: `Bearer ${$e.getApiToken()}` } : {}
    }
  });
}
async function Oe(e, l) {
  const t = await en(e, l), n = await t.text();
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
async function Ct(e) {
  const l = new URLSearchParams();
  return l.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && l.set("offset", String(e.offset)), Oe(
    `/agent-trace/sessions?${l.toString()}`
  );
}
async function pn(e, l) {
  const t = new URLSearchParams();
  l != null && l.beforeSeq && t.set("before_seq", String(l.beforeSeq)), t.set("limit", String(l == null ? void 0 : l.limit));
  const n = t.toString();
  return Oe(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${n}`
  );
}
async function gn() {
  return Oe("/agent-trace/config");
}
async function yn(e) {
  return Oe("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
}
async function vn(e) {
  const l = await en(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export`
  );
  if (!l.ok) throw new Error(`HTTP ${l.status}`);
  const t = await l.blob(), n = URL.createObjectURL(t), s = document.createElement("a");
  s.href = n, s.download = `${e}.jsonl`, s.click(), URL.revokeObjectURL(n);
}
async function En(e) {
  await Oe(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
const zt = 3e3;
function Ot(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function Sn(e, l) {
  const t = Ot(e ?? ""), n = Ot(l ?? "");
  if (t.length > zt || n.length > zt)
    return [
      ...t.map((h) => ({ kind: "del", text: h })),
      ...n.map((h) => ({ kind: "add", text: h }))
    ];
  const s = t.length, r = n.length, o = new Int32Array((s + 1) * (r + 1)), i = (h, a) => h * (r + 1) + a;
  for (let h = s - 1; h >= 0; h -= 1)
    for (let a = r - 1; a >= 0; a -= 1)
      o[i(h, a)] = t[h] === n[a] ? o[i(h + 1, a + 1)] + 1 : Math.max(o[i(h + 1, a)], o[i(h, a + 1)]);
  const f = [];
  let g = 0, c = 0;
  for (; g < s && c < r; )
    t[g] === n[c] ? (f.push({ kind: "same", text: t[g] }), g += 1, c += 1) : o[i(g + 1, c)] >= o[i(g, c + 1)] ? (f.push({ kind: "del", text: t[g] }), g += 1) : (f.push({ kind: "add", text: n[c] }), c += 1);
  for (; g < s; )
    f.push({ kind: "del", text: t[g] }), g += 1;
  for (; c < r; )
    f.push({ kind: "add", text: n[c] }), c += 1;
  return f;
}
function bn(e, l = 3) {
  const t = new Array(e.length).fill(!1);
  e.forEach((r, o) => {
    if (r.kind !== "same")
      for (let i = Math.max(0, o - l); i <= Math.min(e.length - 1, o + l); i += 1)
        t[i] = !0;
  });
  const n = [];
  let s = 0;
  return e.forEach((r, o) => {
    t[o] ? (s > 0 && (n.push({ kind: "gap", count: s }), s = 0), n.push(r)) : s += 1;
  }), s > 0 && n.push({ kind: "gap", count: s }), n;
}
function xn(e) {
  let l = 0, t = 0;
  for (const n of e)
    n.kind === "add" ? l += 1 : n.kind === "del" && (t += 1);
  return { added: l, removed: t };
}
function wn(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function ie(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const l = e * 1e3;
  return l < 1e3 ? `${Math.round(l)}ms` : l < 6e4 ? `${(l / 1e3).toFixed(1)}s` : `${Math.floor(l / 6e4)}m${Math.round(l % 6e4 / 1e3)}s`;
}
function le(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function vt(e, l) {
  return e === void 0 || !Number.isFinite(e) || l === null || l === void 0 || l <= 0 ? "-" : `${(e / l).toFixed(1)} tok/s`;
}
function Ne(e) {
  return e == null || !Number.isFinite(e) ? "-" : new Date(e).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
  });
}
function ae(e) {
  if (!e) return null;
  const l = Date.parse(e);
  return Number.isFinite(l) ? l : null;
}
const Qe = window.QwenPaw.host, u = Qe.React, { useEffect: kn, useRef: Tn, useState: tn } = u, { Button: nn, Collapse: _n, Empty: At, Tabs: Et } = Qe.antd, { Text: Q } = Qe.antd.Typography, { CopyOutlined: Mn, CloseOutlined: In } = Qe.antdIcons, Cn = 320, zn = 720, Ue = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, On = 2e4;
function An(e) {
  if (e.length > On) return e;
  const l = [], t = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let n = 0, s, r = 0;
  for (; (s = t.exec(e)) !== null; ) {
    s.index > n && l.push(e.slice(n, s.index));
    const o = s[0];
    let i = "rgba(128,128,128,1)";
    s[1] !== void 0 ? i = Ue.key : s[2] !== void 0 ? i = Ue.string : s[3] !== void 0 ? i = Ue.number : i = Ue.literal, l.push(
      /* @__PURE__ */ u.createElement("span", { key: r++, style: { color: i } }, o)
    ), n = s.index + o.length;
  }
  return n < e.length && l.push(e.slice(n)), l;
}
function de({ value: e, json: l = !1 }) {
  const [t, n] = tn(!1), s = typeof e == "string" ? e : JSON.stringify(e, null, 2);
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
    t ? "✓" : /* @__PURE__ */ u.createElement(Mn, null)
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
    l ? An(s) : s
  ));
}
function I({
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
    /* @__PURE__ */ u.createElement(Q, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ u.createElement(
      Q,
      {
        type: t ? "danger" : void 0,
        style: { fontSize: 12, textAlign: "right" }
      },
      l
    )
  );
}
function Rt({
  input: e,
  output: l,
  cacheRead: t,
  cacheWrite: n,
  reasoning: s
}) {
  const r = Math.max(0, e - t - n), o = Math.max(0, l - s);
  return /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(I, { label: "Input", value: `${le(e)} tok` }), t ? /* @__PURE__ */ u.createElement(I, { label: "Cached", value: `${le(t)} tok` }) : null, n ? /* @__PURE__ */ u.createElement(
    I,
    {
      label: "Cache created",
      value: `${le(n)} tok`
    }
  ) : null, t || n ? /* @__PURE__ */ u.createElement(I, { label: "Other", value: `${le(r)} tok` }) : null, /* @__PURE__ */ u.createElement(I, { label: "Output", value: `${le(l)} tok` }), s ? /* @__PURE__ */ u.createElement(I, { label: "Reasoning", value: `${le(s)} tok` }) : null, s ? /* @__PURE__ */ u.createElement(I, { label: "Content", value: `${le(o)} tok` }) : null);
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
function Rn({
  request: e,
  onJumpRecord: l
}) {
  const t = ue(), [n, s] = u.useState("summary"), r = /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(I, { label: "Started", value: Ne(e.startedAt) }), /* @__PURE__ */ u.createElement(
    I,
    {
      label: "Total",
      value: ie(
        e.durationMs === null ? null : e.durationMs / 1e3
      )
    }
  ), e.ttftMs !== null ? /* @__PURE__ */ u.createElement(
    I,
    {
      label: "First TTFT",
      value: ie(e.ttftMs / 1e3)
    }
  ) : null, e.decodeMs !== null ? /* @__PURE__ */ u.createElement(
    I,
    {
      label: "Total decoding",
      value: ie(e.decodeMs / 1e3)
    }
  ) : null, /* @__PURE__ */ u.createElement(
    I,
    {
      label: x(t, "throughput"),
      value: vt(
        e.outputTokens,
        e.decodeMs === null ? null : e.decodeMs / 1e3
      )
    }
  )), o = /* @__PURE__ */ u.createElement(
    Rt,
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
      children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(I, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ u.createElement(
        I,
        {
          label: x(t, "status"),
          value: e.status || "unknown",
          danger: e.status === "error"
        }
      ), /* @__PURE__ */ u.createElement(I, { label: "Query", value: $n(e.query) }), /* @__PURE__ */ u.createElement(
        I,
        {
          label: x(t, "model"),
          value: e.models.join(", ") || "-"
        }
      ), /* @__PURE__ */ u.createElement(I, { label: "Tool calls", value: String(e.toolCalls) }), e.errors.length > 0 ? /* @__PURE__ */ u.createElement(
        I,
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
      )) : null, e.options ? /* @__PURE__ */ u.createElement(lt, { label: "Options", onOpen: () => s("options") }, /* @__PURE__ */ u.createElement(de, { value: e.options, json: !0 })) : null, /* @__PURE__ */ u.createElement(lt, { label: "Usage", onOpen: () => s("usage") }, o), /* @__PURE__ */ u.createElement(lt, { label: "Timing", onOpen: () => s("timing") }, r))
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(Q, { strong: !0, style: { fontSize: 12 } }, x(t, "thisRequest")), o, e.sessionTotals ? /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(
        Q,
        {
          strong: !0,
          style: { fontSize: 12, display: "block", marginTop: 10 }
        },
        x(t, "sessionTotal")
      ), /* @__PURE__ */ u.createElement(
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
      children: r
    },
    ...e.options ? [
      {
        key: "options",
        label: "Options",
        children: /* @__PURE__ */ u.createElement(de, { value: e.options, json: !0 })
      }
    ] : []
  ];
  return /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 4px" } }, /* @__PURE__ */ u.createElement(
    Et,
    {
      size: "small",
      activeKey: n,
      onChange: (f) => s(f),
      items: i,
      tabBarStyle: { marginBottom: 8 }
    }
  ));
}
function $n(e, l = 200) {
  const t = e.split(`
`, 1)[0].trim();
  return t.length > l ? `${t.slice(0, l)}…` : t;
}
function Ln({
  oldText: e,
  newText: l
}) {
  const t = u.useMemo(
    () => Sn(e, l),
    [e, l]
  ), n = u.useMemo(() => xn(t), [t]), s = u.useMemo(() => bn(t), [t]), r = ue();
  return e === void 0 ? /* @__PURE__ */ u.createElement(Q, { type: "secondary", style: { fontSize: 12 } }, x(r, "noPrevPrompt")) : /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ u.createElement("span", { style: { color: "#52c41a" } }, "+", n.added), " ", /* @__PURE__ */ u.createElement("span", { style: { color: "#ff4d4f" } }, "−", n.removed)), /* @__PURE__ */ u.createElement(
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
    s.map((o, i) => {
      if (o.kind === "gap")
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
          o.count
        );
      const f = o;
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
function Dn({ record: e }) {
  var r;
  const l = ue(), t = e.headerTools ?? [], n = e.headerReason === "changed", s = [
    {
      key: "summary",
      label: x(l, "summary"),
      children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(I, { label: "#", value: String(e.index) }), /* @__PURE__ */ u.createElement(
        I,
        {
          label: x(l, "status"),
          value: n ? x(l, "promptChanged") : x(l, "promptInitial")
        }
      ), /* @__PURE__ */ u.createElement(I, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ u.createElement(I, { label: "Chars", value: String(((r = e.prompt) == null ? void 0 : r.length) ?? 0) }), /* @__PURE__ */ u.createElement(I, { label: "Tools", value: String(t.length) }))
    },
    ...n ? [
      {
        key: "diff",
        label: "Diff",
        children: /* @__PURE__ */ u.createElement(
          Ln,
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
      children: /* @__PURE__ */ u.createElement(de, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ u.createElement("div", { style: { paddingTop: 4 } }, t.map((o) => /* @__PURE__ */ u.createElement(Q, { key: o, code: !0, style: { fontSize: 11 } }, o)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ u.createElement(
          _n,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((o, i) => {
              var g;
              const f = typeof o.name == "string" && o.name || typeof ((g = o.function) == null ? void 0 : g.name) == "string" && o.function.name || `tool-${i + 1}`;
              return {
                key: String(i),
                label: /* @__PURE__ */ u.createElement(Q, { code: !0, style: { fontSize: 11 } }, f),
                children: /* @__PURE__ */ u.createElement(de, { value: o })
              };
            })
          }
        ) : null)
      }
    ] : [],
    {
      key: "raw",
      label: "Raw",
      children: /* @__PURE__ */ u.createElement(de, { value: e.raw })
    }
  ];
  return /* @__PURE__ */ u.createElement(Et, { size: "small", items: s, tabBarStyle: { marginBottom: 8 } });
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
    nn,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ u.createElement(In, null),
      onClick: e
    }
  )) : null;
}
function jn({
  record: e,
  request: l,
  onJumpSession: t,
  onJumpRecord: n,
  onSelectTurn: s,
  onClose: r
}) {
  const o = ue(), [i, f] = tn(400), g = Tn(null);
  if (kn(() => {
    const w = (p) => {
      const d = g.current;
      if (d === null) return;
      const m = d.anchorX - p.clientX;
      f(
        Math.min(zn, Math.max(Cn, d.anchorWidth + m))
      );
    }, _ = () => {
      g.current = null;
    };
    return window.addEventListener("pointermove", w), window.addEventListener("pointerup", _), () => {
      window.removeEventListener("pointermove", w), window.removeEventListener("pointerup", _);
    };
  }, []), e === null && l === null)
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
        At,
        {
          image: At.PRESENTED_IMAGE_SIMPLE,
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
          width: i,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative"
        }
      },
      /* @__PURE__ */ u.createElement(rt, { dragRef: g, width: i }),
      /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ u.createElement(ot, { onClose: r }), /* @__PURE__ */ u.createElement(Rn, { request: l, onJumpRecord: n }))
    );
  const c = e;
  if (c.kind === "system" && c.prompt !== void 0)
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
      /* @__PURE__ */ u.createElement(rt, { dragRef: g, width: i }),
      /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ u.createElement(ot, { onClose: r }), /* @__PURE__ */ u.createElement(Dn, { record: c }))
    );
  const h = c.usage, a = c.timing, b = [];
  return b.push({
    key: "summary",
    label: x(o, "summary"),
    children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(I, { label: "#", value: String(c.index) }), /* @__PURE__ */ u.createElement(I, { label: "Kind", value: c.kind }), c.runIndex > 0 && s ? /* @__PURE__ */ u.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ u.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => s(c.runIndex)
      },
      "Request #",
      c.runIndex,
      " →"
    )) : null, /* @__PURE__ */ u.createElement(
      I,
      {
        label: x(o, "status"),
        value: c.running ? x(o, "running") : c.isError ? x(o, "error") : x(o, "success"),
        danger: c.isError
      }
    ), c.provider ? /* @__PURE__ */ u.createElement(I, { label: "Provider", value: c.provider }) : null, c.model ? /* @__PURE__ */ u.createElement(I, { label: x(o, "model"), value: c.model }) : null, c.toolName ? /* @__PURE__ */ u.createElement(I, { label: "Tool", value: c.toolName }) : null, /* @__PURE__ */ u.createElement(
      I,
      {
        label: x(o, "duration"),
        value: ie(c.timeSeconds)
      }
    ), c.note ? /* @__PURE__ */ u.createElement(Q, { type: "warning", style: { fontSize: 12 } }, c.note) : null, c.spawnSession ? /* @__PURE__ */ u.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ u.createElement(
      I,
      {
        label: x(o, "spawnedAgent"),
        value: c.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ u.createElement(
      nn,
      {
        size: "small",
        onClick: () => c.spawnSession && t(c.spawnSession),
        style: { marginTop: 4 }
      },
      x(o, "openChildSession")
    ) : null) : null)
  }), c.kind === "tool" ? (c.toolInput && b.push({
    key: "payload",
    label: x(o, "input"),
    children: /* @__PURE__ */ u.createElement(de, { value: c.toolInput, json: !0 })
  }), (c.toolOutput || c.toolError) && b.push({
    key: "result",
    label: x(o, "output"),
    children: /* @__PURE__ */ u.createElement("div", { style: { display: "grid", gap: 8 } }, c.toolError ? /* @__PURE__ */ u.createElement(Q, { type: "danger", style: { fontSize: 12 } }, c.toolError) : null, c.toolOutput ? /* @__PURE__ */ u.createElement(de, { value: c.toolOutput }) : null)
  })) : (c.outputText || c.thinkingText || c.messages || c.marker || c.toolCalls && c.toolCalls.length > 0) && b.push({
    key: "raw",
    label: x(o, "output"),
    children: /* @__PURE__ */ u.createElement("div", { style: { display: "grid", gap: 8 } }, c.marker ? /* @__PURE__ */ u.createElement(de, { value: c.marker }) : null, c.toolCalls && c.toolCalls.length > 0 ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(Q, { type: "secondary", style: { fontSize: 12 } }, `${x(o, "toolCall")} (${c.toolCalls.length})`), c.toolCalls.map((w, _) => /* @__PURE__ */ u.createElement("div", { key: w.id || _, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ u.createElement(Q, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", w.name), /* @__PURE__ */ u.createElement(Q, { type: "secondary", style: { fontSize: 11 } }, w.id)))) : null, c.note ? /* @__PURE__ */ u.createElement(Q, { type: "warning", style: { fontSize: 12 } }, c.note) : null, c.messages && c.messages.length > 0 ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(Q, { type: "secondary", style: { fontSize: 12 } }, `${x(o, "query")} (${c.messages.length})`), c.messages.map((w, _) => /* @__PURE__ */ u.createElement(
      "div",
      {
        key: _,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ u.createElement(Q, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, w.role),
      /* @__PURE__ */ u.createElement(
        Q,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        w.text
      )
    ))) : null, c.thinkingText ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(Q, { type: "secondary", style: { fontSize: 12 } }, x(o, "thinking")), /* @__PURE__ */ u.createElement(de, { value: c.thinkingText })) : null, c.outputText ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(Q, { type: "secondary", style: { fontSize: 12 } }, x(o, "output")), /* @__PURE__ */ u.createElement(de, { value: c.outputText })) : null)
  }), (c.startedAt !== null || h || a) && b.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(I, { label: "Started", value: Ne(c.startedAt) }), /* @__PURE__ */ u.createElement(I, { label: "Total", value: ie(c.timeSeconds) }), a ? /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(
      I,
      {
        label: "TTFT",
        value: ie(a.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ u.createElement(
      I,
      {
        label: "Decoding",
        value: ie(a.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ u.createElement(
      I,
      {
        label: x(o, "throughput"),
        value: vt(
          h == null ? void 0 : h.output_tokens,
          a.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ u.createElement(Q, { type: "secondary", style: { fontSize: 12 } }, x(o, "noTiming")))
  }), h && b.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(I, { label: "Input", value: le(h.input_tokens) }), /* @__PURE__ */ u.createElement(I, { label: "Output", value: le(h.output_tokens) }), h.cache_creation_input_tokens ? /* @__PURE__ */ u.createElement(
      I,
      {
        label: "Cache write",
        value: le(h.cache_creation_input_tokens)
      }
    ) : null, h.cache_input_tokens ? /* @__PURE__ */ u.createElement(
      I,
      {
        label: "Cache read",
        value: le(h.cache_input_tokens)
      }
    ) : null, h.total_tokens !== void 0 ? /* @__PURE__ */ u.createElement(I, { label: "Total", value: le(h.total_tokens) }) : null, h.time !== void 0 ? /* @__PURE__ */ u.createElement(I, { label: "API time", value: ie(h.time) }) : null)
  }), b.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ u.createElement(de, { value: c.raw })
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
    /* @__PURE__ */ u.createElement(rt, { dragRef: g, width: i }),
    /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ u.createElement(ot, { onClose: r }), /* @__PURE__ */ u.createElement(Et, { size: "small", items: b, tabBarStyle: { marginBottom: 8 } }))
  );
}
const ne = window.QwenPaw.host.React, Nn = ne.useRef, Fn = ne.useState;
ne.useCallback;
ne.useMemo;
const Pn = ne.useEffect, Bn = ne.useLayoutEffect, Hn = ne.useReducer;
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
function Wn(e) {
  return e ? e() : void 0;
}
function Un(e, l, t) {
  const n = new Array(e);
  return new Proxy(n, {
    get(s, r, o) {
      if (typeof r == "string") {
        const i = r.charCodeAt(0);
        if (i >= 48 && i <= 57) {
          const f = +r;
          if (Number.isInteger(f) && f >= 0 && f < e) {
            let g = s[f];
            if (!g) {
              const c = l[f * 2];
              g = s[f] = {
                index: f,
                key: t(f),
                start: c,
                size: l[f * 2 + 1],
                end: c + l[f * 2 + 1],
                lane: 0
              };
            }
            return g;
          }
        }
        if (r === "length") return e;
      }
      return Reflect.get(s, r, o);
    }
  });
}
function Ie(e, l, t) {
  let n = t.initialDeps ?? [], s, r = !0;
  function o() {
    var i;
    const f = process.env.NODE_ENV !== "production" && !!t.key && !!((i = t.debug) != null && i.call(t));
    let g = 0;
    f && (g = Date.now());
    const c = e();
    if (!(c.length !== n.length || c.some((b, w) => n[w] !== b)))
      return s;
    n = c;
    let a = 0;
    if (f && (a = Date.now()), s = l(...c), f) {
      const b = Math.round((Date.now() - g) * 100) / 100, w = Math.round((Date.now() - a) * 100) / 100, _ = w / 16, p = (d, m) => {
        for (d = String(d); d.length < m; )
          d = " " + d;
        return d;
      };
      console.info(
        `%c⏱ ${p(w, 5)} /${p(b, 5)} ms`,
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
    return t != null && t.onChange && !(r && t.skipInitialOnChange) && t.onChange(s), r = !1, s;
  }
  return o.updateDeps = (i) => {
    n = i;
  }, o;
}
function $t(e, l) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Vn = (e, l) => Math.abs(e - l) < 1.01, Kn = (e, l, t) => {
  let n;
  return function(...s) {
    e.clearTimeout(n), n = e.setTimeout(() => l.apply(this, s), t);
  };
};
let Le;
const it = () => {
  if (Le !== void 0) return Le;
  if (typeof navigator > "u") return Le = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return Le = !0;
  const e = navigator.maxTouchPoints;
  return Le = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, Lt = (e) => {
  const { offsetWidth: l, offsetHeight: t } = e;
  return { width: l, height: t };
}, Xn = (e) => e, Gn = (e) => {
  const l = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1) - l + 1, s = new Array(n);
  for (let r = 0; r < n; r++)
    s[r] = l + r;
  return s;
}, Jn = (e, l) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  const s = (o) => {
    const { width: i, height: f } = o;
    l({ width: Math.round(i), height: Math.round(f) });
  };
  if (s(Lt(t)), !n.ResizeObserver)
    return () => {
    };
  const r = new n.ResizeObserver((o) => {
    const i = () => {
      const f = o[0];
      if (f != null && f.borderBoxSize) {
        const g = f.borderBoxSize[0];
        if (g) {
          s({ width: g.inlineSize, height: g.blockSize });
          return;
        }
      }
      s(Lt(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return r.observe(t, { box: "border-box" }), () => {
    r.unobserve(t);
  };
}, Je = {
  passive: !0
}, qn = typeof window > "u" ? !0 : "onscrollend" in window, Qn = (e, l, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const s = e.targetWindow;
  if (!s)
    return;
  const r = e.options.useScrollendEvent && qn;
  let o = 0;
  const i = r ? null : Kn(
    s,
    () => l(o, !1),
    e.options.isScrollingResetDelay
  ), f = (h) => () => {
    o = t(n), i == null || i(), l(o, h);
  }, g = f(!0), c = f(!1);
  return n.addEventListener("scroll", g, Je), r && n.addEventListener("scrollend", c, Je), () => {
    n.removeEventListener("scroll", g), r && n.removeEventListener("scrollend", c);
  };
}, Yn = (e, l) => Qn(e, l, (t) => {
  const { horizontal: n, isRtl: s } = e.options;
  return n ? t.scrollLeft * (s && -1 || 1) : t.scrollTop;
}), Zn = (e, l, t) => {
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
}, es = (e, {
  adjustments: l = 0,
  behavior: t
}, n) => {
  var s, r;
  (r = (s = n.scrollElement) == null ? void 0 : s.scrollTo) == null || r.call(s, {
    [n.options.horizontal ? "left" : "top"]: e + l,
    behavior: t
  });
}, ts = es;
class ns {
  constructor(l) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, n, s;
      return ((s = (n = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : n.now) == null ? void 0 : s.call(n)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((s) => {
        s.forEach((r) => {
          const o = () => {
            const i = r.target, f = this.indexFromElement(i);
            if (!i.isConnected) {
              this.observer.unobserve(i);
              for (const [g, c] of this.elementsCache)
                if (c === i) {
                  this.elementsCache.delete(g);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(f) && this.resizeItem(
              f,
              this.options.measureElement(i, r, this)
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
        getItemKey: Xn,
        rangeExtractor: Gn,
        onChange: () => {
        },
        measureElement: Zn,
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
      for (const a in t) {
        const b = t[a];
        b !== void 0 && (r[a] = b);
      }
      const o = this.options;
      let i = null, f = null, g = !1;
      if (o !== void 0 && o.enabled && r.enabled && r.anchorTo === "end" && this.scrollElement !== null) {
        const a = o.count, b = r.count, w = this.getMeasurements(), _ = a > 0 ? ((n = w[0]) == null ? void 0 : n.key) ?? o.getItemKey(0) : null, p = a > 0 ? ((s = w[a - 1]) == null ? void 0 : s.key) ?? o.getItemKey(a - 1) : null;
        if (b !== a || a > 0 && b > 0 && (r.getItemKey(0) !== _ || r.getItemKey(b - 1) !== p)) {
          g = !0;
          const E = a > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? w[0] : null;
          E && (i = [E.key, this.getScrollOffset() - E.start]);
          const k = r.followOnAppend === !0 ? "auto" : r.followOnAppend || null;
          k && b > a && this.isAtEnd(o.scrollEndThreshold) && (a === 0 || r.getItemKey(b - 1) !== p) && (f = k);
        }
      }
      this.options = r, g && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let c = !1, h = 0;
      if (i && this.scrollOffset !== null) {
        const [a, b] = i, w = this.getMeasurements(), { count: _, getItemKey: p } = this.options;
        let d = 0;
        for (; d < _ && p(d) !== a; )
          d++;
        if (d < _) {
          const m = w[d];
          if (m) {
            const E = Math.max(0, m.start + b);
            E !== this.scrollOffset && (h = E - this.scrollOffset, this.scrollOffset = E, c = !0);
          }
        }
      }
      (c || f) && (this.pendingScrollAnchor = [
        c ? i[0] : null,
        c ? i[1] : 0,
        f,
        h
      ]);
    }, this.notify = (t) => {
      var n, s;
      (s = (n = this.options).onChange) == null || s.call(n, this, t);
    }, this.maybeNotify = Ie(
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
            const i = this.getScrollOffset();
            this.scrollDirection = o ? i === r ? this.scrollDirection : i < r ? "forward" : "backward" : null, this.scrollOffset = r, this.isScrolling = o, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const r = this.scrollElement, o = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, i = () => {
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
            i,
            Je
          ), this.unsubs.push(() => {
            r.removeEventListener("touchstart", o), r.removeEventListener("touchend", i), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const s = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, s && this.scrollElement && this.options.enabled) {
        const [r, o, i, f] = s;
        r !== null && !i && (it() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? f !== 0 && (this._iosDeferredAdjustment += f) : this._scrollToOffset(this.getScrollOffset(), {
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
      const s = this._iosDeferredAdjustment;
      this._iosDeferredAdjustment = 0, this._scrollToOffset(t, {
        adjustments: this.scrollAdjustments += s,
        behavior: void 0
      });
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = Ie(
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
      (t, n, s, r, o, i, f, g) => (this.prevLanes !== void 0 && this.prevLanes !== i && (this.lanesChangedFlag = !0), this.prevLanes = i, this.pendingMin = null, {
        count: t,
        paddingStart: n,
        scrollMargin: s,
        getItemKey: r,
        enabled: o,
        lanes: i,
        laneAssignmentMode: f,
        gap: g
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Ie(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: t,
        paddingStart: n,
        scrollMargin: s,
        getItemKey: r,
        enabled: o,
        lanes: i,
        laneAssignmentMode: f,
        gap: g
      }, c) => {
        const h = this.itemSizeCache;
        if (!o)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const d of this.laneAssignments.keys())
            d >= t && this.laneAssignments.delete(d);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((d) => {
          this.itemSizeCache.set(d.key, d.size);
        }));
        const a = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), i === 1) {
          const d = t * 2;
          let m = this._flatMeasurements;
          if (!m || m.length < d) {
            const T = new Float64Array(d);
            m && a > 0 && T.set(m.subarray(0, a * 2)), m = T, this._flatMeasurements = m;
          }
          let E;
          if (a === 0)
            E = n + s;
          else {
            const T = a - 1;
            E = m[T * 2] + m[T * 2 + 1] + g;
          }
          for (let T = a; T < t; T++) {
            const J = r(T), O = h.get(J), F = typeof O == "number" ? O : this.options.estimateSize(T);
            m[T * 2] = E, m[T * 2 + 1] = F, E += F + g;
          }
          const k = Un(t, m, r);
          return this.measurementsCache = k, k;
        }
        const b = this.measurementsCache.slice(0, a), w = new Array(i).fill(
          void 0
        ), _ = new Float64Array(i);
        let p = 0;
        for (let d = 0; d < a; d++) {
          const m = b[d];
          m && (w[m.lane] === void 0 && p++, w[m.lane] = d, _[m.lane] = m.end);
        }
        for (let d = a; d < t; d++) {
          const m = r(d), E = this.laneAssignments.get(d);
          let k, T;
          const J = f === "estimate" || h.has(m);
          if (E !== void 0 && this.options.lanes > 1) {
            k = E;
            const A = w[k], P = A !== void 0 ? b[A] : void 0;
            T = P ? P.end + g : n + s;
          } else if (p === i) {
            let A = 0, P = _[0], re = w[0];
            for (let K = 1; K < i; K++) {
              const X = _[K];
              (X < P || X === P && w[K] < re) && (A = K, P = X, re = w[K]);
            }
            k = A, T = P + g, J && this.laneAssignments.set(d, k);
          } else
            k = d % this.options.lanes, T = n + s, J && this.laneAssignments.set(d, k);
          const O = h.get(m), F = typeof O == "number" ? O : this.options.estimateSize(d), D = T + F;
          b[d] = {
            index: d,
            start: T,
            size: F,
            end: D,
            key: m,
            lane: k
          }, w[k] === void 0 && p++, w[k] = d, _[k] = D;
        }
        return this.measurementsCache = b, b;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Ie(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, n, s, r) => t.length === 0 || n === 0 ? (this.range = null, null) : (this.range = ls(
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
    ), this.getVirtualIndexes = Ie(
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
        ), o = Math.max(0, s - r), i = Math.min(
          this.options.count - 1,
          s + r
        );
        return t >= o && t <= i;
      }
      return !0;
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((o, i) => {
          o.isConnected || (this.observer.unobserve(o), this.elementsCache.delete(i));
        });
        return;
      }
      const n = this.indexFromElement(t), s = this.options.getItemKey(n), r = this.elementsCache.get(s);
      r !== t && (r && this.observer.unobserve(r), this.observer.observe(t), this.elementsCache.set(s, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(n) && this.resizeItem(n, this.options.measureElement(t, void 0, this));
    }, this.resizeItem = (t, n) => {
      var s, r;
      if (t < 0 || t >= this.options.count) return;
      let o, i, f;
      const g = this._flatMeasurements;
      if (this.options.lanes === 1 && g !== null)
        f = this.options.getItemKey(t), i = g[t * 2], o = g[t * 2 + 1];
      else {
        const a = this.measurementsCache[t];
        if (!a) return;
        f = a.key, i = a.start, o = a.size;
      }
      const c = this.itemSizeCache.get(f) ?? o, h = n - c;
      if (h !== 0) {
        const a = this.options.anchorTo === "end" && ((s = this.scrollState) == null ? void 0 : s.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, b = a ? this.getTotalSize() : 0, w = this.getScrollOffset() + this.scrollAdjustments, p = !this.itemSizeCache.has(f) ? (
          // First measurement: compensate any item whose top sits above the
          // fold — the estimate→actual delta must be corrected regardless of
          // scroll direction, since the whole estimated block was above it.
          i < w
        ) : (
          // Re-measurement: only compensate an item that is ENTIRELY above the
          // fold. An item that merely *spans* the fold (top above, bottom
          // below — e.g. a streaming chat message growing at its bottom)
          // changes size *below* the anchor point, so shifting scrollTop by the
          // delta would drag the viewport downward on every growth (#1218).
          // Also skip during backward scroll to avoid the "items jump while
          // scrolling up" cascade.
          i + c <= w && this.scrollDirection !== "backward"
        ), d = ((r = this.scrollState) == null ? void 0 : r.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[t] ?? {
            index: t,
            key: f,
            start: i,
            size: o,
            end: i + o,
            lane: 0
          },
          h,
          this
        ) : p);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(f, n), this.itemSizeCacheVersion++;
        let m = !1;
        a ? m = this.applyScrollAdjustment(
          this.getTotalSize() - b
        ) : d && (m = this.applyScrollAdjustment(h)), this.notify(m);
      }
    }, this.getVirtualItems = Ie(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const s = [];
        for (let r = 0, o = t.length; r < o; r++) {
          const i = t[r], f = n[i];
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
      const s = this._flatMeasurements, r = this.options.lanes === 1 && s != null, o = sn(
        0,
        n.length - 1,
        r ? (i) => s[i * 2] : (i) => $t(n[i]).start,
        t
      );
      return $t(n[o]);
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
      const i = this.getMaxScrollOffset();
      return Math.max(Math.min(i, t), 0);
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
      const i = n === "end" ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(i, n, o.size),
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
      const [o, i] = r, f = this.now();
      this.scrollState = {
        index: t,
        align: i,
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
        for (; o >= 0 && r.some((i) => i === null); ) {
          const i = n[o];
          r[i.lane] === null && (r[i.lane] = i.end), o--;
        }
        s = Math.max(...r.filter((i) => i !== null));
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
    if (!o && Vn(s, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= r) {
        this.getScrollOffset() !== s && this._scrollToOffset(s, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, o) {
      const i = this.getSize() || 600, f = Math.abs(s - this.getScrollOffset()), g = this.scrollState.behavior === "smooth" && f > i;
      this.scrollState.lastTargetOffset = s, g || (this.scrollState.behavior = "auto"), this._scrollToOffset(s, {
        adjustments: void 0,
        behavior: g ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const sn = (e, l, t, n) => {
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
function ss(e, l, t) {
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
function ls(e, l, t, n, s) {
  const r = e.length - 1;
  if (e.length <= n)
    return { startIndex: 0, endIndex: r };
  if (n === 1 && s !== null) {
    const g = ss(
      s,
      r,
      t
    );
    let c = g;
    const h = t + l;
    for (; c < r && s[c * 2] + s[c * 2 + 1] < h; )
      c++;
    return { startIndex: g, endIndex: c };
  }
  let i = sn(0, r, (g) => e[g].start, t), f = i;
  if (n === 1)
    for (; f < r && e[f].end < t + l; )
      f++;
  else if (n > 1) {
    const g = Array(n).fill(0);
    for (; f < r && g.some((h) => h < t + l); ) {
      const h = e[f];
      g[h.lane] = h.end, f++;
    }
    const c = Array(n).fill(t + l);
    for (; i >= 0 && c.some((h) => h >= t); ) {
      const h = e[i];
      c[h.lane] = h.start, i--;
    }
    i = Math.max(0, i - i % n), f = Math.min(r, f + (n - 1 - f % n));
  }
  return { startIndex: i, endIndex: f };
}
const at = typeof document < "u" ? Bn : Pn;
function rs({
  useFlushSync: e = !0,
  directDomUpdates: l = !1,
  directDomUpdatesMode: t = "transform",
  ...n
}) {
  const s = Hn((c) => c + 1, 0)[1], r = Nn({
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
    const a = c.getTotalSize();
    if (a !== h.lastSize) {
      h.lastSize = a;
      const b = c.options.horizontal ? "width" : "height";
      h.container.style[b] = `${a}px`;
    }
  }, i = (c) => {
    const h = r.current;
    if (!h.enabled || !h.container) return;
    o(c);
    const a = !!c.options.horizontal, b = h.mode === "transform", w = a ? "left" : "top", _ = c.options.scrollMargin, p = c.getVirtualItems();
    for (const d of p) {
      const m = d.start - _, E = c.elementsCache.get(d.key);
      E && h.lastPositions.get(E) !== m && (h.lastPositions.set(E, m), b ? E.style.transform = a ? `translate3d(${m}px, 0, 0)` : `translate3d(0, ${m}px, 0)` : E.style[w] = `${m}px`);
    }
  }, f = {
    ...n,
    onChange: (c, h) => {
      var a;
      const b = r.current;
      let w = !0;
      if (b.enabled) {
        i(c);
        const _ = c.range, p = b.prevRange;
        w = !p || p.isScrolling !== c.isScrolling || p.startIndex !== (_ == null ? void 0 : _.startIndex) || p.endIndex !== (_ == null ? void 0 : _.endIndex), w && (b.prevRange = _ ? {
          startIndex: _.startIndex,
          endIndex: _.endIndex,
          isScrolling: c.isScrolling
        } : null);
      }
      w && (e && h ? Wn(s) : s()), (a = n.onChange) == null || a.call(n, c, h);
    }
  }, [g] = Fn(() => {
    const c = new ns(f);
    return Object.assign(c, {
      containerRef: (h) => {
        const a = r.current;
        if (a.container = h, a.lastSize = null, h && a.enabled) {
          const b = c.getTotalSize();
          a.lastSize = b;
          const w = c.options.horizontal ? "width" : "height";
          h.style[w] = `${b}px`;
        }
      }
    });
  });
  return g.setOptions(f), at(() => g._didMount(), []), at(() => (o(g), g._willUpdate())), at(() => {
    i(g);
  }), g;
}
function os(e) {
  return rs({
    observeElementRect: Jn,
    observeElementOffset: Yn,
    scrollToFn: ts,
    ...e
  });
}
const Ye = window.QwenPaw.host, z = Ye.React, { useRef: is } = z, { Tag: ln } = Ye.antd, { Text: ke } = Ye.antd.Typography, {
  CaretRightOutlined: as,
  RobotOutlined: cs,
  SettingOutlined: us,
  ToolOutlined: ds,
  UserOutlined: hs
} = Ye.antdIcons, ms = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, fs = {
  user: /* @__PURE__ */ z.createElement(hs, null),
  message: /* @__PURE__ */ z.createElement(cs, null),
  tool: /* @__PURE__ */ z.createElement(ds, null),
  system: /* @__PURE__ */ z.createElement(us, null)
}, ps = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" }
}, gs = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default"
}, Dt = {
  running: { zh: "进行中", en: "Running" },
  success: { zh: "成功", en: "Success" },
  error: { zh: "错误", en: "Error" },
  cancelled: { zh: "已取消", en: "Cancelled" },
  interrupted: { zh: "已中断", en: "Interrupted" },
  unknown: { zh: "未知", en: "Unknown" }
}, ys = 150, pt = 26, rn = 34, jt = 9, Nt = 30;
function vs(e) {
  const l = ue(), t = ps[e];
  return t ? l === "zh-CN" ? t.zh : t.en : e;
}
function Es(e) {
  const l = ue(), t = Dt[e] ?? Dt.unknown;
  return l === "zh-CN" ? t.zh : t.en;
}
function Ft({
  record: e,
  selected: l,
  dimmed: t,
  multiRequest: n,
  onSelect: s
}) {
  const r = e.usage, o = r && (r.input_tokens || r.output_tokens) ? `${le(r.input_tokens)}→${le(
    r.output_tokens
  )}` : null;
  return /* @__PURE__ */ z.createElement(
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
      n && /* @__PURE__ */ z.createElement("span", { style: { opacity: 0.65, marginRight: 3 } }, "R", e.runIndex),
      "#",
      e.index
    ),
    /* @__PURE__ */ z.createElement(
      ln,
      {
        color: ms[e.kind] ?? "default",
        icon: fs[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      vs(e.kind)
    ),
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
      e.kind === "tool" && e.toolName ? /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(ke, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ z.createElement(ke, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ z.createElement(
        ke,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ z.createElement(
        ke,
        {
          type: e.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        e.running ? `⏳ ${e.text || "…"}` : e.text || "—"
      )
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
      o ? /* @__PURE__ */ z.createElement("span", { style: { color: "#1677ff" } }, o) : null,
      o ? " · " : "",
      (e.kind === "message" || e.kind === "tool") && ie(e.timeSeconds)
    )
  );
}
function Ss({
  turn: e,
  collapsed: l,
  selected: t,
  cellCount: n,
  onToggle: s,
  onSelect: r
}) {
  const o = ue();
  return /* @__PURE__ */ z.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: rn }
    },
    /* @__PURE__ */ z.createElement(
      "span",
      {
        onClick: (i) => {
          i.stopPropagation(), r();
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
        as,
        {
          onClick: (i) => {
            i.stopPropagation(), s();
          },
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: l ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ z.createElement(ke, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ z.createElement(ke, { type: "secondary", style: { fontSize: 11 } }, ie(e.durationMs / 1e3)),
      /* @__PURE__ */ z.createElement(ke, { type: "secondary", style: { fontSize: 11 } }, n, " ", x(o, "events")),
      /* @__PURE__ */ z.createElement(
        ln,
        {
          color: gs[e.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        Es(e.status)
      )
    )
  );
}
function bs({
  turns: e,
  selectedIndex: l,
  selectedTurn: t,
  collapsedTurns: n,
  focusIndexes: s,
  searchMatchIndexes: r,
  onSelectedIndexChange: o,
  onSelectedTurnChange: i,
  onToggleTurn: f,
  callsCollapsed: g,
  hasOlderRecords: c,
  loadingOlder: h,
  onLoadOlder: a,
  initialRecord: b,
  emptyText: w
}) {
  const _ = ue(), p = is(null), d = e.filter((O) => O.turn !== null), m = d.length > 1, E = z.useMemo(() => {
    var F;
    const O = [];
    c && O.push({
      key: "load-older",
      height: Nt,
      type: "load-older"
    }), b && (O.push({
      key: "initial",
      height: pt,
      type: "initial",
      record: b
    }), O.push({
      key: "initial-divider",
      height: jt,
      type: "divider"
    }));
    for (const D of d) {
      const A = D.turn;
      if (O.push({
        key: `turn-${A}`,
        height: rn,
        type: "boundary",
        turn: D
      }), !n.has(A))
        for (const P of ((F = D.groups[0]) == null ? void 0 : F.cells) ?? [])
          g && P.kind === "tool" || O.push({
            key: `rec-${P.index}`,
            height: pt,
            type: "record",
            record: P
          });
    }
    return O;
  }, [
    d,
    n,
    g,
    c,
    b
  ]), k = z.useCallback(
    (O) => s !== null && !s.has(O.index) || r !== null && !r.has(O.index),
    [s, r]
  ), T = (O) => {
    var F;
    switch (O.type) {
      case "load-older":
        return /* @__PURE__ */ z.createElement("div", { style: { textAlign: "center", height: Nt } }, /* @__PURE__ */ z.createElement(
          "button",
          {
            type: "button",
            onClick: a,
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
        return /* @__PURE__ */ z.createElement(
          "div",
          {
            style: {
              height: jt,
              borderBottom: "1px dashed rgba(128,128,128,0.25)"
            }
          }
        );
      case "initial": {
        const D = O.record;
        return /* @__PURE__ */ z.createElement(
          Ft,
          {
            record: D,
            selected: l === D.index,
            dimmed: k(D),
            multiRequest: m,
            onSelect: () => o(D.index)
          }
        );
      }
      case "boundary": {
        const D = O.turn, A = D.turn;
        return /* @__PURE__ */ z.createElement(
          Ss,
          {
            turn: D,
            collapsed: n.has(A),
            selected: t === A,
            cellCount: ((F = D.groups[0]) == null ? void 0 : F.cells.length) ?? 0,
            onToggle: () => f(A),
            onSelect: () => i(A)
          }
        );
      }
      case "record":
      default: {
        const D = O.record;
        return /* @__PURE__ */ z.createElement(
          Ft,
          {
            record: D,
            selected: l === D.index,
            dimmed: k(D),
            multiRequest: m,
            onSelect: () => o(D.index)
          }
        );
      }
    }
  };
  if (E.length === 0)
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
        w ?? x(_, "noSessions")
      )
    );
  const J = E.length <= ys ? /* @__PURE__ */ z.createElement("div", null, E.map((O) => T(O))) : /* @__PURE__ */ z.createElement(
    xs,
    {
      rows: E,
      scrollRef: p,
      renderRow: T
    }
  );
  return /* @__PURE__ */ z.createElement(
    "div",
    {
      ref: p,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    J
  );
}
function xs({
  rows: e,
  scrollRef: l,
  renderRow: t
}) {
  const n = os({
    count: e.length,
    getScrollElement: () => l.current,
    estimateSize: (s) => e[s].height,
    overscan: 12
  });
  return /* @__PURE__ */ z.createElement(
    "div",
    {
      style: {
        height: n.getTotalSize(),
        position: "relative",
        width: "100%"
      }
    },
    n.getVirtualItems().map((s) => /* @__PURE__ */ z.createElement(
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
function ws(e) {
  var _;
  const l = [], t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), o = [];
  let i = "";
  const f = /* @__PURE__ */ new Map();
  let g = 0, c = 0;
  const h = (p) => p.groups[0].cells, a = (p, d) => {
    const m = r.get(p);
    m ? m.push(d) : r.set(p, [d]);
  }, b = (p, d) => {
    if (!p)
      if (i)
        p = i;
      else {
        o.push(d);
        return;
      }
    const m = t.get(p);
    if (m)
      d.runIndex = m.turn ?? 0, h(m).push(d);
    else if (i) {
      const E = t.get(i);
      E ? (d.runIndex = E.turn ?? 0, h(E).push(d)) : a(p, d);
    } else
      a(p, d);
  }, w = (p, d) => {
    const m = r.get(d);
    if (m) {
      for (const E of m) h(p).push(E);
      r.delete(d);
    }
  };
  for (const p of e) {
    const d = ct(p);
    switch (p.type) {
      case "run/start": {
        c += 1;
        const m = {
          turn: c,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${c}`, cells: [] }]
        };
        t.set(p.run_id, m), l.push(m), i = p.run_id, w(m, p.run_id);
        for (const T of o.splice(0))
          T.runIndex = c, h(m).push(T);
        const E = Array.isArray(d.messages) ? d.messages : [], k = String(d.query ?? "");
        h(m).push({
          index: ++g,
          runIndex: c,
          runId: p.run_id,
          kind: "user",
          text: be(k) || be((_ = E.at(-1)) == null ? void 0 : _.text),
          messages: E,
          timeSeconds: 0,
          startedAt: ae(p.t),
          isError: !1,
          running: !1,
          model: void 0
        });
        break;
      }
      case "run/end": {
        const m = t.get(p.run_id);
        i === p.run_id && (i = "");
        const E = String(d.status ?? "unknown");
        if (m && (m.status = E, m.durationMs = typeof d.duration_ms == "number" ? d.duration_ms : null), E === "error" && d.error) {
          const k = m ?? {
            turn: null,
            status: E,
            durationMs: typeof d.duration_ms == "number" ? d.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          m || l.push(k), k.groups[0].cells.push({
            index: ++g,
            runIndex: c,
            runId: p.run_id,
            kind: "system",
            text: be(String(d.error)) || "run failed",
            marker: String(d.error ?? "run failed"),
            timeSeconds: typeof d.duration_ms == "number" ? d.duration_ms / 1e3 : null,
            startedAt: ae(p.t),
            isError: !0,
            running: !1,
            raw: [p]
          });
        }
        break;
      }
      case "agent/spawn": {
        const m = typeof d.child_session_id == "string" ? d.child_session_id : void 0, E = typeof d.child_agent_id == "string" ? d.child_agent_id : "?";
        b(p.run_id, {
          index: ++g,
          runIndex: 0,
          runId: p.run_id,
          kind: "system",
          text: `🚀 ${E} → ${m ?? "?"}`,
          timeSeconds: 0,
          startedAt: ae(p.t),
          isError: !1,
          running: !1,
          spawnSession: m,
          spawnAgent: E,
          raw: [p]
        });
        break;
      }
      case "message/inbound": {
        const m = Array.isArray(d.parts) ? d.parts : [], E = m.map((k) => String(k.type ?? "?").replace("Content", "")).join(",");
        b(p.run_id, {
          index: ++g,
          runIndex: 0,
          runId: p.run_id,
          kind: "system",
          text: `📥 ${m.length} part(s)${E ? ` [${E}]` : ""}`,
          timeSeconds: 0,
          startedAt: ae(p.t),
          isError: !1,
          running: !1,
          raw: [p]
        });
        break;
      }
      case "message/outbound": {
        const m = typeof d.text == "string" ? d.text : "";
        b(p.run_id, {
          index: ++g,
          runIndex: 0,
          runId: p.run_id,
          kind: "system",
          text: `📤 ${be(m) || "(empty)"}`,
          timeSeconds: 0,
          startedAt: ae(p.t),
          isError: !1,
          running: !1,
          outputText: m || void 0,
          raw: [p]
        });
        break;
      }
      case "approval/asked": {
        b(p.run_id, {
          index: ++g,
          runIndex: 0,
          runId: p.run_id,
          kind: "system",
          text: `🛡 approval asked: ${String(d.tool_name ?? "?")}`,
          timeSeconds: 0,
          startedAt: ae(p.t),
          isError: !1,
          running: !1,
          raw: [p]
        });
        break;
      }
      case "approval/decided": {
        const m = String(d.decision ?? "?");
        b(p.run_id, {
          index: ++g,
          runIndex: 0,
          runId: p.run_id,
          kind: "system",
          text: `🛡 approval ${m}${d.tool_name ? `: ${String(d.tool_name)}` : ""}`,
          timeSeconds: 0,
          startedAt: ae(p.t),
          isError: m === "denied",
          running: !1,
          raw: [p]
        });
        break;
      }
      case "llm/header": {
        const m = typeof d.sha256 == "string" ? d.sha256 : "", E = typeof d.prev_sha256 == "string" ? d.prev_sha256 : void 0, k = d.reason === "changed" ? "changed" : "initial", T = typeof d.system_prompt == "string" ? d.system_prompt : "", J = Array.isArray(d.tools) ? d.tools : [], O = Array.isArray(d.schemas) ? d.schemas : void 0;
        b(p.run_id, {
          index: ++g,
          runIndex: 0,
          runId: p.run_id,
          kind: "system",
          text: k === "initial" ? `⚙ ${T ? `System Prompt (${T.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: ae(p.t),
          isError: !1,
          running: !1,
          prompt: T,
          prevPrompt: f.get(E ?? ""),
          headerTools: J,
          headerReason: k,
          sha: m,
          prevSha: E,
          schemas: O,
          raw: [p]
        }), m && f.set(m, T);
        break;
      }
      case "llm/call": {
        const m = ct(p), E = m.options && typeof m.options == "object" && Object.keys(m.options).length > 0 ? m.options : void 0, k = {
          index: ++g,
          runIndex: 0,
          runId: p.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: ae(p.t),
          isError: !1,
          running: !0,
          model: String(m.model ?? "unknown"),
          provider: typeof m.provider == "string" && m.provider ? m.provider : void 0,
          options: E
        };
        b(p.run_id, k);
        const T = n.get(p.run_id) ?? [];
        T.push({ cell: k, callData: m, call: p }), n.set(p.run_id, T);
        break;
      }
      case "llm/result": {
        const m = n.get(p.run_id), E = m == null ? void 0 : m.shift(), k = (E == null ? void 0 : E.callData) ?? {}, T = typeof d.duration_ms == "number" ? d.duration_ms : null, J = d.usage ?? void 0, O = d.timing, F = Array.isArray(d.tool_calls) ? d.tool_calls : void 0, P = {
          text: (d.error ? be(String(d.error)) : be(String(d.text ?? ""))) || (F && F.length > 0 ? `🛠 ${F.map((re) => re.name).join(", ")}` : ""),
          timeSeconds: T === null ? null : T / 1e3,
          isError: !!d.error,
          running: !1,
          outputText: d.text ? String(d.text) : void 0,
          thinkingText: d.thinking ? String(d.thinking) : void 0,
          usage: J,
          timing: O,
          toolCalls: F,
          note: d.note ? String(d.note) : void 0
        };
        E ? (Object.assign(E.cell, P), E.cell.model = String(
          d.model ?? k.model ?? E.cell.model
        ), E.cell.raw = [
          ...E.call ? [E.call] : [],
          p
        ]) : b(p.run_id, {
          index: ++g,
          runIndex: 0,
          runId: p.run_id,
          kind: "message",
          startedAt: ae(p.t),
          model: String(d.model ?? k.model ?? "unknown"),
          ...P
        });
        break;
      }
      case "tool/call": {
        const m = ct(p), E = {
          index: ++g,
          runIndex: 0,
          runId: p.run_id,
          kind: "tool",
          text: `${String(m.name ?? "?")}(${be(
            String(m.input ?? ""),
            60
          )})`,
          timeSeconds: null,
          startedAt: ae(p.t),
          isError: !1,
          running: !0,
          toolName: String(m.name ?? "?"),
          toolInput: m.input ? String(m.input) : void 0
        };
        b(p.run_id, E);
        const k = s.get(p.run_id) ?? [];
        k.push({ cell: E, callData: m, call: p }), s.set(p.run_id, k);
        break;
      }
      case "tool/result": {
        const m = s.get(p.run_id), E = typeof d.tool_call_id == "string" ? d.tool_call_id : null;
        let k;
        if (m) {
          const A = E ? m.findIndex(
            (P) => P.callData.tool_call_id === E
          ) : -1;
          A >= 0 ? k = m.splice(A, 1)[0] : k = m.shift();
        }
        const T = typeof d.duration_ms == "number" ? d.duration_ms : null, J = d.ok !== !1 && !d.error, O = d.output ? String(d.output) : void 0, F = O ? ` → ${be(O, 60)}` : "", D = {
          timeSeconds: T === null ? null : T / 1e3,
          isError: !J,
          running: !1,
          toolOutput: O,
          toolError: d.error ? String(d.error) : void 0,
          note: d.note ? String(d.note) : void 0
        };
        k ? (Object.assign(k.cell, D), k.cell.text = `${k.cell.text}${F}`, k.cell.raw = [
          ...k.call ? [k.call] : [],
          p
        ]) : b(p.run_id, {
          index: ++g,
          runIndex: 0,
          runId: p.run_id,
          kind: "tool",
          text: `?${F}`,
          startedAt: ae(p.t),
          ...D
        });
        break;
      }
    }
  }
  for (const [p, d] of r) {
    const m = t.get(p);
    if (m) {
      for (const E of d) h(m).push(E);
      r.delete(p);
    }
  }
  return l;
}
function Pt(e) {
  return e.flatMap((l) => l.groups.flatMap((t) => t.cells));
}
function ks(e) {
  var o;
  if (e.length === 0) return { initial: null, turns: [...e] };
  const l = e[0], t = ((o = l.groups[0]) == null ? void 0 : o.cells) ?? [], n = t.findIndex(
    (i) => i.kind === "system" && i.headerReason === "initial" && i.prompt !== void 0
  );
  if (n < 0) return { initial: null, turns: [...e] };
  const s = t[n], r = {
    ...l,
    groups: [
      {
        ...l.groups[0],
        cells: t.filter((i, f) => f !== n)
      }
    ]
  };
  return { initial: s, turns: [r, ...e.slice(1)] };
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
}, Bt = "agent-trace-timeline-styles", Ts = `
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
function _s() {
  if (ut || typeof document > "u") return;
  if (document.getElementById(Bt)) {
    ut = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = Bt, e.textContent = Ts, document.head.appendChild(e), ut = !0;
}
function dt(e) {
  return wn(e);
}
function on(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function Ht(e) {
  return e != null && Number.isFinite(e);
}
function Ms(e) {
  if (!Ht(e.startedAt)) return null;
  const l = Ht(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + l };
}
function an(e, l = "sequence") {
  if (l !== "sequence")
    return Is(
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
        (o, i) => ({
          start: t.length + i,
          end: t.length + i + 1,
          index: o.index,
          isError: o.isError === !0,
          kind: o.kind,
          label: o.text,
          lane: on(o.kind)
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
function Is(e, l, t) {
  const n = e.flatMap((c) => {
    const h = c.groups.flatMap(
      (a) => a.cells.flatMap((b) => {
        const w = Ms(b);
        return w === null ? [] : [
          {
            ...w,
            index: b.index,
            isError: b.isError === !0,
            kind: b.kind,
            label: b.text,
            lane: on(b.kind)
          }
        ];
      })
    );
    return h.length === 0 ? [] : [{ turn: c.turn, rawSpans: h }];
  }), s = n.flatMap((c) => c.rawSpans);
  if (s.length === 0) return null;
  const r = /* @__PURE__ */ new Map();
  let o = 0, i = null;
  for (const c of [...s].sort(
    (h, a) => h.start - a.start || h.end - a.end
  ))
    t && i !== null && c.start > i && (o += c.start - i), r.set(c, o), i = i === null ? c.end : Math.max(i, c.end);
  const f = [], g = [];
  for (const c of n) {
    const h = c.rawSpans.map((a) => {
      const b = r.get(a) ?? 0;
      return {
        ...a,
        start: a.start - b,
        end: (l ? a.end : a.start) - b
      };
    });
    f.push(...h), c.turn !== null && g.push({
      turn: c.turn,
      time: Math.min(...h.map((a) => a.start))
    });
  }
  return {
    start: Math.min(...f.map((c) => c.start)),
    end: Math.max(...f.map((c) => c.end)),
    spans: f,
    turnBoundaries: g
  };
}
function Cs(e, l, t = "sequence") {
  const n = an(e, t);
  return new Set(
    n == null ? void 0 : n.spans.filter((s) => s.start <= l.end && s.end >= l.start).map((s) => s.index)
  );
}
_s();
const qe = window.QwenPaw.host, L = qe.React, { useEffect: Ve, useMemo: Wt, useRef: Ke, useState: Ce } = L, { Tooltip: zs } = qe.antd, ht = 3, Os = 4, As = 0.08, Rs = 0.025, $s = 32, Ls = 0.5;
function Ds(e) {
  const l = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, n = e.timing, s = n && Number.isFinite(n.ttft_ms) ? n.ttft_ms : void 0, r = n && Number.isFinite(n.decode_ms) ? n.decode_ms : void 0;
  return {
    ...l === void 0 ? {} : { durationMs: l },
    ...t === void 0 ? {} : { startedAt: t },
    ...s === void 0 || r === void 0 ? {} : { ttftMs: s, decodingMs: r }
  };
}
function js(e) {
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
function Ns(e, l) {
  const t = js(e);
  if (l === void 0) return t;
  const n = l.durationMs === void 0 ? null : `Total ${dt(l.durationMs)}`, s = l.startedAt === void 0 ? null : l.durationMs === void 0 ? `Started ${Ne(l.startedAt)}` : `${Ne(l.startedAt)} → ${Ne(
    l.startedAt + l.durationMs
  )}`, r = l.ttftMs === void 0 || l.decodingMs === void 0 ? null : `TTFT ${dt(
    l.ttftMs
  )} · Decoding ${dt(l.decodingMs)}`, o = [n, r].filter((i) => i !== null).join(" · ");
  return [t, s, o].filter((i) => i !== null && i !== "").join(`
`);
}
function gt(e, l) {
  return e <= l ? { start: e, end: l } : { start: l, end: e };
}
function mt(e) {
  return Math.min(1, Math.max(0, e));
}
function Fs(e, l, t, n) {
  const s = Math.min(n - t, Math.max(0, l)), r = Math.min(
    Math.max(e - s / 2, t),
    n - s
  );
  return { start: r, end: r + s };
}
function Ut(e, l, t, n, s) {
  const r = gt(
    Math.min(s, Math.max(n, e.start)),
    Math.min(s, Math.max(n, e.end))
  );
  return {
    start: (r.start - l) / t,
    end: (r.end - l) / t
  };
}
function cn({
  label: e,
  placement: l,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ L.createElement(
    zs,
    {
      title: /* @__PURE__ */ L.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: l,
      mouseEnterDelay: Ls,
      ...n
    },
    t
  );
}
function Vt() {
  return /* @__PURE__ */ L.createElement("div", { className: se.labels, "aria-hidden": "true" }, /* @__PURE__ */ L.createElement("span", null, "Input"), /* @__PURE__ */ L.createElement("span", null, "Model"), /* @__PURE__ */ L.createElement("span", null, "Tools"));
}
function Kt({
  loading: e,
  onHover: l,
  onLoad: t
}) {
  return /* @__PURE__ */ L.createElement(
    cn,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ L.createElement(
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
const Ps = L.memo(function({
  turns: l,
  mode: t,
  range: n,
  hasEarlierRecords: s = !1,
  onLoadEarlier: r,
  selectedIndex: o = null,
  searchMatchIndexes: i = null,
  onRangeChange: f,
  onRecordSelect: g,
  onRecordFocus: c
}) {
  const h = typeof qe.useTheme == "function" ? qe.useTheme() : void 0, a = Wt(
    () => an(l, t),
    [t, l]
  ), b = Wt(
    () => new Map(
      l.flatMap(
        (y) => y.groups.flatMap(
          (M) => M.cells.map(
            (j) => [j.index, Ds(j)]
          )
        )
      )
    ),
    [l]
  ), w = Ke(null), _ = Ke(null), p = Ke(null), d = Ke(null), [m, E] = Ce(null), [k, T] = Ce(null), [J, O] = Ce(!1), [F, D] = Ce(!1), [A, P] = Ce(null), [re, K] = Ce(!1);
  Ve(() => {
    a !== null && n !== null && (n.end < a.start || n.start > a.end) && f(null);
  }, [a, f, n]), Ve(() => {
    a !== null && (K(!1), P(
      (y) => y !== null && (y.end < a.start || y.start > a.end) ? null : y
    ));
  }, [a]), Ve(() => {
    if (a === null || o === null) return;
    const y = a.spans.find(
      (M) => M.index === o
    );
    y !== void 0 && (K(!0), P((M) => {
      if (M === null || y.end > M.start && y.start < M.end)
        return M;
      const j = Math.max(1, M.end - M.start), N = y.end <= M.start ? y.start : y.end - j, B = Math.min(
        Math.max(N, a.start),
        Math.max(a.start, a.end - j)
      );
      return B === M.start ? M : { start: B, end: B + j };
    }));
  }, [a, o]);
  const X = Math.max(1, ((a == null ? void 0 : a.end) ?? 0) - ((a == null ? void 0 : a.start) ?? 0)), Ee = Math.min(
    X,
    Math.max(1, ((A == null ? void 0 : A.end) ?? 0) - ((A == null ? void 0 : A.start) ?? 0))
  ), Fe = a === null || A === null ? (a == null ? void 0 : a.start) ?? 0 : Math.min(
    Math.max(A.start, a.start),
    a.end - Ee
  ), V = A === null ? X : Ee, q = A === null ? (a == null ? void 0 : a.start) ?? 0 : Fe, Ze = s && a !== null && q === a.start, Pe = r === void 0 || J ? void 0 : () => {
    O(!0), r().finally(() => {
      O(!1);
    });
  }, Te = a === null ? void 0 : {
    "--trajectory-domain-left": `${-(q - a.start) / V * 100}%`,
    "--trajectory-domain-width": `${X / V * 100}%`
  }, fe = a === null || n === null ? null : Ut(
    n,
    q,
    V,
    a.start,
    a.end
  ), H = (a === null || m === null ? null : Ut(
    m,
    q,
    V,
    a.start,
    a.end
  )) ?? fe, xe = m ?? n;
  if (Ve(() => {
    const y = p.current;
    if (y === null) return;
    const M = (j) => {
      j.preventDefault();
      const N = d.current;
      if (N === null || a === null) return;
      K(!1);
      const B = N.getBoundingClientRect(), W = mt(
        (j.clientX - B.left) / Math.max(1, B.width)
      ), ee = Math.min(
        X,
        Math.max(
          Math.min(
            t === "sequence" ? Os : 20,
            X
          ),
          V * Math.exp(j.deltaY * 15e-4)
        )
      );
      if (ee >= X * 0.999) {
        P(null);
        return;
      }
      const U = q + W * V, te = Math.min(
        Math.max(U - W * ee, a.start),
        a.end - ee
      );
      P({ start: te, end: te + ee });
    };
    return y.addEventListener("wheel", M, { passive: !1 }), () => {
      y.removeEventListener("wheel", M);
    };
  }, [V, q, X, t, a]), a === null)
    return /* @__PURE__ */ L.createElement(
      "section",
      {
        ref: p,
        className: se.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ L.createElement("div", { className: se.plot }, /* @__PURE__ */ L.createElement(Vt, null), /* @__PURE__ */ L.createElement("div", { className: se.track }, /* @__PURE__ */ L.createElement("span", { className: se.empty }, "No timing data"), s && /* @__PURE__ */ L.createElement(
        Kt,
        {
          loading: J,
          onHover: () => {
            T(null);
          },
          onLoad: Pe
        }
      )))
    );
  const Ae = Math.min(
    V,
    X / a.spans.length
  ), pe = (y) => {
    const M = y.currentTarget.getBoundingClientRect();
    return mt((y.clientX - M.left) / Math.max(1, M.width));
  }, we = (y) => {
    var B;
    const M = y.target instanceof HTMLElement ? y.target : null, j = (B = M == null ? void 0 : M.closest("[data-timeline-record-index]")) == null ? void 0 : B.dataset.timelineRecordIndex;
    if (j === void 0) return null;
    const N = Number(j);
    return Number.isFinite(N) ? N : null;
  }, Se = (y) => {
    f(y);
  }, et = (y) => {
    if (y.button === 2) {
      _.current = {
        anchorClientX: y.clientX,
        anchorStart: q,
        moved: !1,
        pannable: A !== null,
        pointerId: y.pointerId
      }, A !== null && K(!1), D(!0), typeof y.currentTarget.setPointerCapture == "function" && y.currentTarget.setPointerCapture(y.pointerId);
      return;
    }
    if (y.button !== 0) return;
    const M = pe(y), j = q + M * V, N = we(y);
    T({ fraction: M, recordIndex: N }), w.current = {
      pointerId: y.pointerId,
      anchorTime: j,
      anchorClientX: y.clientX,
      recordIndex: N
    }, typeof y.currentTarget.setPointerCapture == "function" && y.currentTarget.setPointerCapture(y.pointerId), E({ start: j, end: j });
  }, ge = (y) => {
    const M = y.currentTarget.getBoundingClientRect(), j = pe(y);
    T({ fraction: j, recordIndex: we(y) });
    const N = _.current;
    if (N !== null && N.pointerId === y.pointerId) {
      if (Math.abs(y.clientX - N.anchorClientX) >= ht && (N.moved = !0), !N.pannable) return;
      const U = (y.clientX - N.anchorClientX) / Math.max(1, M.width), te = Math.min(
        Math.max(N.anchorStart - U * V, a.start),
        a.end - V
      );
      P({ start: te, end: te + V });
      return;
    }
    const B = w.current;
    if (B === null || B.pointerId !== y.pointerId) return;
    let W = q;
    if (A !== null) {
      const U = y.clientX - M.left, te = Math.min(
        $s,
        Math.max(1, M.width * As)
      ), Z = U < te ? -1 : U > M.width - te ? 1 : 0;
      if (Z !== 0) {
        const Re = Z < 0 ? te - U : U - (M.width - te), ye = mt(Re / te), he = q + Z * V * Rs * Math.max(0.2, ye);
        W = Math.min(
          Math.max(he, a.start),
          a.end - V
        ), W !== q && (K(!1), P({
          start: W,
          end: W + V
        }));
      }
    }
    const ee = W + j * V;
    E(gt(B.anchorTime, ee));
  }, He = (y) => {
    const M = _.current;
    if (M !== null && M.pointerId === y.pointerId) {
      const Z = M.moved || Math.abs(y.clientX - M.anchorClientX) >= ht;
      _.current = null, D(!1), Z || f(null);
      return;
    }
    const j = w.current;
    if (j === null || j.pointerId !== y.pointerId) return;
    const N = pe(y), B = q + N * V, W = gt(j.anchorTime, B);
    T({ fraction: N, recordIndex: we(y) }), w.current = null, E(null);
    const ee = Math.abs(y.clientX - j.anchorClientX) < ht, U = ee && j.recordIndex !== null ? a.spans.find((Z) => Z.index === j.recordIndex) : void 0;
    if (U !== void 0) {
      f(null), g == null || g(U.index);
      return;
    }
    const te = W.end - W.start < Ae ? Fs(
      ee ? W.start : (W.start + W.end) / 2,
      Ae,
      a.start,
      a.end
    ) : W;
    if (Se(te), ee) {
      const Z = W.start, Re = a.spans.reduce((ye, he) => {
        const v = Z < ye.start ? ye.start - Z : Z > ye.end ? Z - ye.end : 0;
        return (Z < he.start ? he.start - Z : Z > he.end ? Z - he.end : 0) < v ? he : ye;
      });
      c == null || c(Re.index);
    }
  }, _e = (y) => {
    y.key !== "Escape" || n === null || (y.preventDefault(), f(null));
  }, Y = () => {
    w.current = null, _.current = null, E(null), T(null), D(!1);
  };
  return /* @__PURE__ */ L.createElement(
    "section",
    {
      ref: p,
      className: se.root,
      "data-theme": h || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ L.createElement("div", { className: se.plot }, /* @__PURE__ */ L.createElement(Vt, null), /* @__PURE__ */ L.createElement(
      "div",
      {
        ref: d,
        className: se.track,
        "data-panning": F || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: _e,
        onPointerDown: et,
        onPointerMove: ge,
        onPointerUp: He,
        onPointerCancel: Y,
        onPointerLeave: () => {
          w.current === null && _.current === null && T(null);
        },
        onDoubleClick: (y) => {
          y.preventDefault(), f(null);
        },
        onContextMenu: (y) => {
          y.preventDefault();
        }
      },
      Ze && /* @__PURE__ */ L.createElement(
        Kt,
        {
          loading: J,
          onHover: () => {
            T(null);
          },
          onLoad: Pe
        }
      ),
      k !== null && k.recordIndex === null && m === null && /* @__PURE__ */ L.createElement(
        "div",
        {
          className: se.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${k.fraction * 100}%`
          }
        }
      ),
      H !== null && /* @__PURE__ */ L.createElement(L.Fragment, null, /* @__PURE__ */ L.createElement(
        "div",
        {
          className: se.selection,
          "data-dragging": m === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${H.start * 100}%`,
            "--trajectory-selection-width": `${(H.end - H.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ L.createElement(
        "div",
        {
          className: se.selectionEdges,
          "data-dragging": m === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${H.start * 100}%`,
            "--trajectory-selection-width": `${(H.end - H.start) * 100}%`
          }
        }
      )),
      /* @__PURE__ */ L.createElement(
        "div",
        {
          className: se.turnBoundaries,
          "data-animate-viewport": re || void 0,
          "aria-hidden": "true",
          style: Te
        },
        a.turnBoundaries.filter(
          (y) => y.time > a.start && y.time >= q && y.time <= q + V
        ).map((y) => /* @__PURE__ */ L.createElement(
          "span",
          {
            className: se.turnBoundary,
            "data-turn": y.turn,
            key: y.turn,
            style: {
              "--trajectory-turn-left": `${(y.time - a.start) / X * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ L.createElement(
        "div",
        {
          className: se.lanes,
          "data-animate-viewport": re || void 0,
          "data-timeline-domain": !0,
          style: Te
        },
        a.spans.filter(
          (y) => y.index === o || y.end >= q && y.start <= q + V
        ).map((y) => {
          const M = (y.start - a.start) / X, N = (y.end - y.start) / X * 100, B = b.get(y.index), W = B == null ? void 0 : B.ttftMs, ee = B == null ? void 0 : B.decodingMs, U = W === void 0 || ee === void 0 || W + ee <= 0 ? null : W / (W + ee);
          return /* @__PURE__ */ L.createElement(
            cn,
            {
              key: y.index,
              label: Ns(y.kind, B),
              placement: "bottom"
            },
            /* @__PURE__ */ L.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: se.span,
                "data-timeline-span": y.kind,
                "data-timeline-record-index": y.index,
                "data-assistant-timing": U === null ? void 0 : "true",
                "data-error": y.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": y.index === o || void 0,
                "data-hovered": (k == null ? void 0 : k.recordIndex) === y.index || void 0,
                "data-search-match": i === null ? void 0 : i.has(y.index) ? "true" : "false",
                "data-selected": xe === null ? void 0 : y.start <= xe.end && y.end >= xe.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${M * 100}%`,
                  "--trajectory-span-width": `${N}%`,
                  "--trajectory-span-gap": `min(${N * 0.08}%, 1px)`,
                  "--trajectory-span-lane": y.lane,
                  ...U === null ? {} : {
                    "--trajectory-assistant-ttft": `${U * 100}%`
                  }
                }
              }
            )
          );
        })
      )
    ))
  );
}), St = window.QwenPaw.host, ce = St.React, { Button: Bs, Input: Hs, Segmented: Ws, Tooltip: Xt } = St.antd, { MenuFoldOutlined: Us, MenuUnfoldOutlined: Vs, ReloadOutlined: Ks, SearchOutlined: Xs } = St.antdIcons;
function Gs({
  mode: e,
  onModeChange: l,
  search: t,
  onSearchChange: n,
  onRefresh: s,
  modeOptions: r,
  allCollapsed: o,
  hasRequests: i,
  onToggleCollapseAll: f,
  callsCollapsed: g,
  onToggleCallsCollapsed: c
}) {
  const h = ue();
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
    /* @__PURE__ */ ce.createElement(Xt, { title: x(h, "projectionHint") }, /* @__PURE__ */ ce.createElement(
      Ws,
      {
        size: "small",
        value: e,
        options: r,
        onChange: (a) => l(a)
      }
    )),
    /* @__PURE__ */ ce.createElement(
      Hs,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ ce.createElement(Xs, null),
        placeholder: x(h, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (a) => n(a.target.value)
      }
    ),
    i && /* @__PURE__ */ ce.createElement(
      Xt,
      {
        title: o ? x(h, "expandAll") : x(h, "collapseAll")
      },
      /* @__PURE__ */ ce.createElement(
        Bs,
        {
          size: "small",
          type: "text",
          icon: o ? /* @__PURE__ */ ce.createElement(Vs, null) : /* @__PURE__ */ ce.createElement(Us, null),
          onClick: f
        }
      )
    ),
    /* @__PURE__ */ ce.createElement("span", { style: { marginLeft: "auto" } }, /* @__PURE__ */ ce.createElement(
      "a",
      {
        onClick: s,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ ce.createElement(Ks, null),
      " ",
      x(h, "refresh")
    ))
  );
}
const ze = window.QwenPaw.host, S = ze.React, { useCallback: ft, useEffect: Xe, useMemo: oe, useRef: Js, useState: G } = S, {
  Button: De,
  Empty: Ge,
  Input: qs,
  Popconfirm: Qs,
  Popover: Ys,
  Space: Zs,
  Spin: yt,
  Switch: el,
  Tag: Gt,
  Tooltip: Jt,
  message: je
} = ze.antd, {
  CaretRightOutlined: tl,
  DeleteOutlined: nl,
  DownloadOutlined: sl,
  MenuFoldOutlined: ll,
  MenuUnfoldOutlined: rl,
  SearchOutlined: ol,
  SettingOutlined: il
} = ze.antdIcons, { Text: me } = ze.antd.Typography;
function al(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function cl(e) {
  if (!e) return "-";
  const l = new Date(e);
  return Number.isNaN(l.getTime()) ? e : l.toLocaleString();
}
function ul(e) {
  if (!e) return "-";
  const l = Date.parse(e);
  if (!Number.isFinite(l)) return e;
  const t = Date.now() - l;
  return t < 6e4 ? "刚刚" : t < 36e5 ? `${Math.floor(t / 6e4)} 分钟前` : t < 864e5 ? `${Math.floor(t / 36e5)} 小时前` : new Date(l).toLocaleString();
}
function un(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function qt(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const dl = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default"
};
function hl(e) {
  return e || "unknown";
}
function ml({
  groups: e,
  collapsedAgents: l,
  onToggleAgent: t,
  searching: n,
  selected: s,
  onSelect: r,
  locale: o
}) {
  const i = e.length > 1;
  return /* @__PURE__ */ S.createElement(S.Fragment, null, e.map(([f, g]) => {
    const c = i && !n && l.has(f);
    return /* @__PURE__ */ S.createElement("div", { key: f }, i && /* @__PURE__ */ S.createElement(
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
      /* @__PURE__ */ S.createElement(
        tl,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: c ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ S.createElement(me, { strong: !0, style: { fontSize: 12 } }, f),
      /* @__PURE__ */ S.createElement(me, { type: "secondary", style: { fontSize: 11 } }, g.length)
    ), !c && g.map((h) => {
      const a = h.session_id === s;
      return /* @__PURE__ */ S.createElement(
        "div",
        {
          key: h.session_id,
          onClick: () => r(h.session_id),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: a ? "rgba(22,119,255,0.10)" : "transparent",
            border: a ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ S.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ S.createElement(
            me,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${h.title ? `${h.title}
` : ""}${h.session_id}`
              }
            },
            h.title || h.agent_id || al(h.session_id)
          ),
          i ? null : h.agent_id ? /* @__PURE__ */ S.createElement(
            Gt,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            h.agent_id
          ) : null,
          /* @__PURE__ */ S.createElement(
            Gt,
            {
              color: dl[h.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            hl(h.status)
          )
        ),
        /* @__PURE__ */ S.createElement(
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
          /* @__PURE__ */ S.createElement("span", null, h.channel || "-"),
          /* @__PURE__ */ S.createElement("span", null, h.runs, " ", x(o, "runs")),
          /* @__PURE__ */ S.createElement("span", null, un(h.total_tokens), " tok"),
          /* @__PURE__ */ S.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: cl(h.last_event_t)
            },
            ul(h.last_event_t)
          )
        )
      );
    }));
  }));
}
function fl({
  config: e,
  onChange: l,
  children: t
}) {
  const n = ue(), s = (o, i, f) => /* @__PURE__ */ S.createElement(
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
    /* @__PURE__ */ S.createElement(me, { style: { fontSize: 13 } }, o),
    /* @__PURE__ */ S.createElement(
      el,
      {
        size: "small",
        checked: !!i,
        onChange: (g) => l({ [f]: g })
      }
    )
  ), r = /* @__PURE__ */ S.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ S.createElement(me, { strong: !0, style: { fontSize: 13 } }, x(n, "settings")), /* @__PURE__ */ S.createElement("div", { style: { marginTop: 8 } }, e ? [
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
  ] : /* @__PURE__ */ S.createElement(yt, { size: "small" })));
  return /* @__PURE__ */ S.createElement(Ys, { content: r, trigger: "click", placement: "bottomRight" }, t);
}
function pl() {
  const e = typeof ze.useLocale == "function" ? ze.useLocale() : void 0, l = oe(
    () => Zt(e ?? ue()),
    [e]
  ), [t, n] = G(null), [s, r] = G(!1), [o, i] = G(
    /* @__PURE__ */ new Set()
  ), [f, g] = G(!1), [c, h] = G(!1), [a, b] = G(null), [w, _] = G(null), [p, d] = G(!1), [m, E] = G(!1), [k, T] = G(""), [J, O] = G(""), [F, D] = G("sequence"), [A, P] = G(null), [re, K] = G(null), [X, Ee] = G(null), [Fe, V] = G(
    /* @__PURE__ */ new Set()
  ), [q, Ze] = G(!1), [Pe, Te] = G(null), [fe, Be] = G(null), [H, xe] = G(null), [Ae, pe] = G(null), we = Js(null);
  we.current = a;
  const Se = ft(async () => {
    try {
      const v = await Ct({ limit: 100, offset: 0 });
      n(v.sessions), r(v.has_more), pe(null);
    } catch (v) {
      pe(String(v.message));
    }
  }, []), et = ft(async () => {
    h(!0);
    try {
      const v = await Ct({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      n((C) => {
        const R = C ?? [];
        return [
          ...R,
          ...v.sessions.filter(
            (ve) => !R.some((tt) => tt.session_id === ve.session_id)
          )
        ];
      }), r(v.has_more);
    } catch (v) {
      pe(String(v.message));
    } finally {
      h(!1);
    }
  }, [t]), ge = ft(
    async (v, C) => {
      C || d(!0);
      try {
        const R = await pn(v, {
          beforeSeq: C,
          limit: 200
        });
        pe(null), _((ve) => C && ve ? {
          ...R,
          events: [...R.events, ...ve.events]
        } : R);
      } catch (R) {
        pe(String(R.message));
      } finally {
        C || d(!1);
      }
    },
    []
  );
  Xe(() => {
    Se(), gn().then(Te).catch(() => Te(null));
    try {
      const v = new URLSearchParams(window.location.search).get("session");
      v && b(v);
    } catch {
    }
  }, [Se]), Xe(() => {
    const v = setInterval(() => {
      document.visibilityState === "visible" && Se();
    }, 15e3);
    return () => clearInterval(v);
  }, [Se]), Xe(() => {
    a ? (P(null), K(null), Ee(null), V(/* @__PURE__ */ new Set()), O(""), ge(a), fn(a).then((v) => {
      xe(v), Be({
        sessionId: a,
        inputTokens: v.input_tokens,
        outputTokens: v.output_tokens,
        totalTokens: v.total_tokens,
        reasoningTokens: Number(v.reasoning_tokens ?? 0)
      });
    }).catch(() => {
      xe(null), Be(null);
    })) : (_(null), xe(null), Be(null));
  }, [a, ge]);
  const He = oe(
    () => w ? ws(w.events) : [],
    [w]
  ), { initial: _e, turns: Y } = oe(
    () => ks(He),
    [He]
  ), y = oe(
    () => _e ? [_e, ...Pt(Y)] : Pt(Y),
    [_e, Y]
  ), M = oe(
    () => Y.some((v) => v.status === "running"),
    [Y]
  );
  Xe(() => {
    if (!a || !M) return;
    const v = setInterval(() => {
      document.visibilityState === "visible" && we.current && ge(we.current);
    }, 5e3);
    return () => clearInterval(v);
  }, [a, M, ge]);
  const j = oe(
    () => A === null ? null : Cs(Y, A, F),
    [A, Y, F]
  ), N = oe(() => {
    const v = J.trim().toLowerCase();
    return v ? new Set(
      y.filter(
        (C) => [
          C.text,
          C.outputText,
          C.thinkingText,
          C.toolName,
          C.toolInput,
          C.toolOutput,
          C.model
        ].filter(Boolean).join(`
`).toLowerCase().includes(v)
      ).map((C) => C.index)
    ) : null;
  }, [J, y]), B = oe(
    () => re === null ? null : y.find((v) => v.index === re) ?? null,
    [y, re]
  ), W = oe(() => {
    var Mt, It;
    if (X === null) return null;
    const v = Y.find(($) => $.turn === X);
    if (!v) return null;
    const C = ((Mt = v.groups[0]) == null ? void 0 : Mt.cells) ?? [], R = C.filter(($) => $.kind === "message"), ve = C.filter(($) => $.kind === "tool"), tt = [
      ...new Set(
        R.map(($) => $.model).filter(($) => !!$)
      )
    ], dn = [
      ...new Set(
        R.map(($) => $.provider).filter(($) => !!$)
      )
    ];
    let bt = 0, xt = 0, wt = 0, kt = 0, Tt = 0, We = null, nt = 0;
    const _t = [];
    for (const $ of C)
      $.usage && (bt += $.usage.input_tokens ?? 0, xt += $.usage.output_tokens ?? 0, wt += $.usage.cache_input_tokens ?? 0, kt += $.usage.cache_creation_input_tokens ?? 0, Tt += $.usage.reasoning_tokens ?? 0), $.timing && (We = We === null ? $.timing.ttft_ms : Math.min(We, $.timing.ttft_ms), nt = (nt ?? 0) + $.timing.decode_ms), $.isError && _t.push($.toolError ?? $.text ?? "error");
    const Me = C.find(($) => $.kind === "user"), hn = (It = [...R].reverse().find(($) => $.options)) == null ? void 0 : It.options, st = [...R].reverse().find(($) => $.outputText);
    return {
      turn: X,
      status: v.status,
      durationMs: v.durationMs,
      startedAt: (Me == null ? void 0 : Me.startedAt) ?? null,
      query: (Me == null ? void 0 : Me.text) ?? "",
      llmCalls: R.length,
      toolCalls: ve.length,
      models: tt,
      providers: dn,
      inputTokens: bt,
      outputTokens: xt,
      cacheReadTokens: wt,
      cacheWriteTokens: kt,
      reasoningTokens: Tt,
      resultIndex: st == null ? void 0 : st.index,
      ttftMs: We,
      decodeMs: nt,
      errors: _t,
      options: hn,
      sessionTotals: fe && fe.sessionId === a ? {
        inputTokens: fe.inputTokens,
        outputTokens: fe.outputTokens,
        totalTokens: fe.totalTokens,
        reasoningTokens: fe.reasoningTokens
      } : void 0
    };
  }, [X, Y, fe, a]), ee = !!(w && w.events.length > 0 && w.events[0].seq > 1), U = oe(
    () => (t == null ? void 0 : t.find((v) => v.session_id === a)) ?? null,
    [t, a]
  ), te = oe(() => {
    if (!t) return [];
    const v = k.trim().toLowerCase();
    return v ? t.filter(
      (C) => [C.session_id, C.title ?? "", C.agent_id, C.channel].join(" ").toLowerCase().includes(v)
    ) : t;
  }, [t, k]), Z = oe(() => {
    const v = /* @__PURE__ */ new Map();
    for (const C of te) {
      const R = C.agent_id || "(unknown)", ve = v.get(R);
      ve ? ve.push(C) : v.set(R, [C]);
    }
    return [...v.entries()];
  }, [te]), Re = async (v) => {
    try {
      Te(await yn(v));
    } catch (C) {
      je.error(String(C.message));
    }
  }, ye = oe(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), he = oe(() => {
    if (!H) return null;
    const v = [
      `${H.runs} ${x(l, "statRounds")} · ${H.llm_calls} ${x(l, "statSteps")}`,
      `LLM ${ie(H.llm_ms_total / 1e3)} · ${x(
        l,
        "toolCalls"
      )} ${ie(H.tool_ms_total / 1e3)}`,
      `${x(l, "statTtftAvg")} ${H.ttft_ms_avg === null ? "-" : ie(H.ttft_ms_avg / 1e3)} · ${vt(
        H.output_tokens,
        H.decode_ms_total / 1e3
      )}`
    ];
    if (H.cache_read_tokens > 0 || H.cache_write_tokens > 0) {
      const C = H.cache_read_tokens + H.input_tokens, R = C > 0 ? Math.round(H.cache_read_tokens / C * 100) : 0;
      v.push(`${x(l, "statCacheHit")} ${R}%`);
    }
    return v.push(
      `${x(l, "statInput")} ${le(
        H.input_tokens
      )} tok · ${x(l, "statOutput")} ${le(
        H.output_tokens
      )} tok`
    ), U && v.push(qt(U.size_bytes)), v.join(" | ");
  }, [H, U, l]);
  return /* @__PURE__ */ S.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, f ? /* @__PURE__ */ S.createElement(
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
    /* @__PURE__ */ S.createElement(Jt, { title: x(l, "expandSidebar"), placement: "right" }, /* @__PURE__ */ S.createElement(
      De,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ S.createElement(rl, null),
        onClick: () => g(!1)
      }
    ))
  ) : /* @__PURE__ */ S.createElement(
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
    /* @__PURE__ */ S.createElement(
      "div",
      {
        style: {
          padding: "12px 12px 8px",
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      },
      /* @__PURE__ */ S.createElement(
        qs,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ S.createElement(ol, null),
          placeholder: x(l, "searchPlaceholder"),
          value: k,
          style: { flex: 1, minWidth: 0 },
          onChange: (v) => T(v.target.value)
        }
      ),
      /* @__PURE__ */ S.createElement(Jt, { title: x(l, "collapseSidebar") }, /* @__PURE__ */ S.createElement(
        De,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ S.createElement(ll, null),
          onClick: () => g(!0)
        }
      ))
    ),
    /* @__PURE__ */ S.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ S.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ S.createElement(yt, null)) : te.length === 0 ? /* @__PURE__ */ S.createElement(
      Ge,
      {
        image: Ge.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ S.createElement("span", { style: { fontSize: 12 } }, x(l, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ S.createElement(
        me,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        x(l, "noSessionsHint")
      )
    ) : /* @__PURE__ */ S.createElement(
      ml,
      {
        groups: Z,
        collapsedAgents: o,
        onToggleAgent: (v) => {
          i((C) => {
            const R = new Set(C);
            return R.has(v) ? R.delete(v) : R.add(v), R;
          });
        },
        searching: !!k.trim(),
        selected: a,
        onSelect: b,
        locale: l
      }
    ), t !== null && s && !k.trim() && /* @__PURE__ */ S.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ S.createElement(
      "a",
      {
        onClick: () => void et(),
        style: { fontSize: 12 }
      },
      c ? "…" : `⋯ ${x(l, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ S.createElement(
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
    /* @__PURE__ */ S.createElement(
      "div",
      {
        style: {
          padding: "8px 12px",
          borderBottom: "1px solid rgba(128,128,128,0.15)",
          display: "flex",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap"
        }
      },
      he ? /* @__PURE__ */ S.createElement(me, { type: "secondary", style: { fontSize: 12 } }, he) : U ? (
        // Transient line while the stats endpoint responds.
        /* @__PURE__ */ S.createElement(me, { type: "secondary", style: { fontSize: 12 } }, `${U.runs} ${x(l, "statRounds")} · ${U.llm_calls} ${x(l, "statSteps")} · ${un(
          U.total_tokens
        )} ${x(l, "tokens")} · ${qt(
          U.size_bytes
        )}`)
      ) : /* @__PURE__ */ S.createElement(me, { type: "secondary", style: { fontSize: 13 } }, x(l, "selectSession")),
      /* @__PURE__ */ S.createElement("div", { style: { marginLeft: "auto" } }, /* @__PURE__ */ S.createElement(Zs, null, /* @__PURE__ */ S.createElement(fl, { config: Pe, onChange: Re }, /* @__PURE__ */ S.createElement(De, { size: "small", icon: /* @__PURE__ */ S.createElement(il, null) })), a && /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(
        De,
        {
          size: "small",
          icon: /* @__PURE__ */ S.createElement(sl, null),
          onClick: () => {
            vn(a).then(() => je.success(x(l, "exported"))).catch(
              (v) => je.error(String(v.message))
            );
          }
        },
        x(l, "export")
      ), /* @__PURE__ */ S.createElement(
        Qs,
        {
          title: x(l, "deleteConfirm"),
          onConfirm: () => {
            En(a).then(() => {
              je.success(x(l, "deleted")), b(null), Se();
            }).catch(
              (v) => je.error(String(v.message))
            );
          }
        },
        /* @__PURE__ */ S.createElement(De, { size: "small", danger: !0, icon: /* @__PURE__ */ S.createElement(nl, null) }, x(l, "delete"))
      ))))
    ),
    Ae && /* @__PURE__ */ S.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ S.createElement(me, { type: "danger", style: { fontSize: 12 } }, `${x(l, "loadFailed")}: ${Ae}`)),
    /* @__PURE__ */ S.createElement(
      Gs,
      {
        mode: F,
        onModeChange: D,
        search: J,
        onSearchChange: O,
        onRefresh: () => {
          Se(), a && ge(a);
        },
        modeOptions: ye,
        allCollapsed: Y.length > 0 && Y.every((v) => Fe.has(v.turn ?? -1)),
        hasRequests: Y.some((v) => v.turn !== null),
        callsCollapsed: q,
        onToggleCallsCollapsed: () => Ze((v) => !v),
        onToggleCollapseAll: () => {
          V((v) => Y.some(
            (R) => R.turn !== null && !v.has(R.turn)
          ) ? new Set(
            Y.map((R) => R.turn).filter((R) => R !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ S.createElement(
      Ps,
      {
        turns: Y,
        mode: F,
        range: A,
        hasEarlierRecords: ee,
        onLoadEarlier: async () => {
          var v;
          return !w || w.events.length === 0 ? !1 : (await ge(a, (v = w.events[0]) == null ? void 0 : v.seq), !0);
        },
        selectedIndex: re,
        searchMatchIndexes: N,
        onRangeChange: P,
        onRecordSelect: K,
        onRecordFocus: K
      }
    ),
    p && !w ? /* @__PURE__ */ S.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ S.createElement(yt, null)) : w ? /* @__PURE__ */ S.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ S.createElement(
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
      /* @__PURE__ */ S.createElement(
        bs,
        {
          turns: Y,
          selectedIndex: re,
          selectedTurn: X,
          collapsedTurns: Fe,
          focusIndexes: j,
          searchMatchIndexes: N,
          onSelectedIndexChange: (v) => {
            if (v === re) {
              K(null);
              return;
            }
            K(v), Ee(null);
          },
          onSelectedTurnChange: (v) => {
            Ee(v), K(null);
          },
          callsCollapsed: q,
          onToggleTurn: (v) => {
            V((C) => {
              const R = new Set(C);
              return R.has(v) ? R.delete(v) : R.add(v), R;
            });
          },
          hasOlderRecords: ee,
          loadingOlder: m,
          onLoadOlder: () => {
            var v;
            !w || w.events.length === 0 || (E(!0), ge(
              a,
              (v = w.events[0]) == null ? void 0 : v.seq
            ).finally(() => E(!1)));
          },
          emptyText: x(l, "noSessions"),
          initialRecord: _e
        }
      )
    ), (B !== null || W !== null) && /* @__PURE__ */ S.createElement(
      jn,
      {
        record: B,
        request: W,
        onJumpSession: b,
        onSelectTurn: (v) => {
          Ee(v), K(null);
        },
        onClose: () => {
          K(null), Ee(null);
        }
      }
    )) : /* @__PURE__ */ S.createElement(
      Ge,
      {
        image: Ge.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: x(l, "selectSession")
      }
    )
  ));
}
var Qt, Yt;
(Yt = (Qt = window.QwenPaw).registerRoutes) == null || Yt.call(Qt, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: pl,
    label: x(ue(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
