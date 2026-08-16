const an = {
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
function Jt(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function ue() {
  try {
    return Jt(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function b(e, s) {
  return an[e][s];
}
const $e = window.QwenPaw.host;
async function cn(e) {
  return Oe(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats`
  );
}
async function qt(e, s) {
  return $e.fetch ? $e.fetch(e, s) : fetch($e.getApiUrl(e), {
    ...s,
    headers: {
      ...(s == null ? void 0 : s.headers) || {},
      ...$e.getApiToken() ? { Authorization: `Bearer ${$e.getApiToken()}` } : {}
    }
  });
}
async function Oe(e, s) {
  const t = await qt(e, s), n = await t.text();
  let l = null;
  try {
    l = n ? JSON.parse(n) : null;
  } catch {
    l = null;
  }
  if (!t.ok) {
    const r = l && typeof l == "object" && "detail" in l ? l.detail : void 0;
    throw new Error(
      typeof r == "string" ? r : `HTTP ${t.status}`
    );
  }
  return l;
}
async function Tt(e) {
  const s = new URLSearchParams();
  return s.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && s.set("offset", String(e.offset)), Oe(
    `/agent-trace/sessions?${s.toString()}`
  );
}
async function un(e, s) {
  const t = new URLSearchParams();
  s != null && s.beforeSeq && t.set("before_seq", String(s.beforeSeq)), t.set("limit", String(s == null ? void 0 : s.limit));
  const n = t.toString();
  return Oe(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${n}`
  );
}
async function dn() {
  return Oe("/agent-trace/config");
}
async function hn(e) {
  return Oe("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
}
async function mn(e) {
  const s = await qt(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export`
  );
  if (!s.ok) throw new Error(`HTTP ${s.status}`);
  const t = await s.blob(), n = URL.createObjectURL(t), l = document.createElement("a");
  l.href = n, l.download = `${e}.jsonl`, l.click(), URL.revokeObjectURL(n);
}
async function fn(e) {
  await Oe(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
const Mt = 3e3;
function It(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function pn(e, s) {
  const t = It(e ?? ""), n = It(s ?? "");
  if (t.length > Mt || n.length > Mt)
    return [
      ...t.map((f) => ({ kind: "del", text: f })),
      ...n.map((f) => ({ kind: "add", text: f }))
    ];
  const l = t.length, r = n.length, a = new Int32Array((l + 1) * (r + 1)), i = (f, o) => f * (r + 1) + o;
  for (let f = l - 1; f >= 0; f -= 1)
    for (let o = r - 1; o >= 0; o -= 1)
      a[i(f, o)] = t[f] === n[o] ? a[i(f + 1, o + 1)] + 1 : Math.max(a[i(f + 1, o)], a[i(f, o + 1)]);
  const m = [];
  let c = 0, h = 0;
  for (; c < l && h < r; )
    t[c] === n[h] ? (m.push({ kind: "same", text: t[c] }), c += 1, h += 1) : a[i(c + 1, h)] >= a[i(c, h + 1)] ? (m.push({ kind: "del", text: t[c] }), c += 1) : (m.push({ kind: "add", text: n[h] }), h += 1);
  for (; c < l; )
    m.push({ kind: "del", text: t[c] }), c += 1;
  for (; h < r; )
    m.push({ kind: "add", text: n[h] }), h += 1;
  return m;
}
function gn(e, s = 3) {
  const t = new Array(e.length).fill(!1);
  e.forEach((r, a) => {
    if (r.kind !== "same")
      for (let i = Math.max(0, a - s); i <= Math.min(e.length - 1, a + s); i += 1)
        t[i] = !0;
  });
  const n = [];
  let l = 0;
  return e.forEach((r, a) => {
    t[a] ? (l > 0 && (n.push({ kind: "gap", count: l }), l = 0), n.push(r)) : l += 1;
  }), l > 0 && n.push({ kind: "gap", count: l }), n;
}
function yn(e) {
  let s = 0, t = 0;
  for (const n of e)
    n.kind === "add" ? s += 1 : n.kind === "del" && (t += 1);
  return { added: s, removed: t };
}
function vn(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function oe(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const s = e * 1e3;
  return s < 1e3 ? `${Math.round(s)}ms` : s < 6e4 ? `${(s / 1e3).toFixed(1)}s` : `${Math.floor(s / 6e4)}m${Math.round(s % 6e4 / 1e3)}s`;
}
function ce(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function gt(e, s) {
  return e === void 0 || !Number.isFinite(e) || s === null || s === void 0 || s <= 0 ? "-" : `${(e / s).toFixed(1)} tok/s`;
}
function Ne(e) {
  return e == null || !Number.isFinite(e) ? "-" : new Date(e).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
  });
}
function ie(e) {
  if (!e) return null;
  const s = Date.parse(e);
  return Number.isFinite(s) ? s : null;
}
const Qe = window.QwenPaw.host, d = Qe.React, { useEffect: En, useRef: Sn, useState: Qt } = d, { Button: Yt, Collapse: xn, Empty: Ct, Tabs: yt } = Qe.antd, { Text: Z } = Qe.antd.Typography, { CopyOutlined: bn, CloseOutlined: wn } = Qe.antdIcons, kn = 320, _n = 720, Ue = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, Tn = 2e4;
function Mn(e) {
  if (e.length > Tn) return e;
  const s = [], t = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let n = 0, l, r = 0;
  for (; (l = t.exec(e)) !== null; ) {
    l.index > n && s.push(e.slice(n, l.index));
    const a = l[0];
    let i = "rgba(128,128,128,1)";
    l[1] !== void 0 ? i = Ue.key : l[2] !== void 0 ? i = Ue.string : l[3] !== void 0 ? i = Ue.number : i = Ue.literal, s.push(
      /* @__PURE__ */ d.createElement("span", { key: r++, style: { color: i } }, a)
    ), n = l.index + a.length;
  }
  return n < e.length && s.push(e.slice(n)), s;
}
function ye({ value: e, json: s = !1 }) {
  const [t, n] = Qt(!1), l = typeof e == "string" ? e : JSON.stringify(e, null, 2);
  if (!l) return null;
  const r = async () => {
    try {
      await navigator.clipboard.writeText(l), n(!0), window.setTimeout(() => n(!1), 1500);
    } catch {
    }
  };
  return /* @__PURE__ */ d.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ d.createElement(
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
    t ? "✓" : /* @__PURE__ */ d.createElement(bn, null)
  ), /* @__PURE__ */ d.createElement(
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
    s ? Mn(l) : l
  ));
}
function O({
  label: e,
  value: s,
  danger: t = !1
}) {
  return /* @__PURE__ */ d.createElement(
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
    /* @__PURE__ */ d.createElement(Z, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ d.createElement(
      Z,
      {
        type: t ? "danger" : void 0,
        style: { fontSize: 12, textAlign: "right" }
      },
      s
    )
  );
}
function In({ request: e }) {
  const s = ue(), t = [
    {
      key: "summary",
      label: b(s, "summary"),
      children: /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(O, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ d.createElement(
        O,
        {
          label: b(s, "status"),
          value: e.status || "unknown"
        }
      ), /* @__PURE__ */ d.createElement(O, { label: "Query", value: Cn(e.query) }), /* @__PURE__ */ d.createElement(
        O,
        {
          label: b(s, "duration"),
          value: oe(
            e.durationMs === null ? null : e.durationMs / 1e3
          )
        }
      ), /* @__PURE__ */ d.createElement(O, { label: "Started", value: Ne(e.startedAt) }), /* @__PURE__ */ d.createElement(
        O,
        {
          label: b(s, "llmCalls"),
          value: String(e.llmCalls)
        }
      ), /* @__PURE__ */ d.createElement(
        O,
        {
          label: b(s, "toolCalls"),
          value: String(e.toolCalls)
        }
      ), e.models.length > 0 ? /* @__PURE__ */ d.createElement(
        O,
        {
          label: b(s, "model"),
          value: e.models.join(", ")
        }
      ) : null, e.errors.length > 0 ? /* @__PURE__ */ d.createElement(Z, { type: "danger", style: { fontSize: 12 } }, e.errors.join("; ")) : null)
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(O, { label: "Input", value: ce(e.inputTokens) }), /* @__PURE__ */ d.createElement(O, { label: "Output", value: ce(e.outputTokens) }), /* @__PURE__ */ d.createElement(
        O,
        {
          label: "Total",
          value: ce(e.inputTokens + e.outputTokens)
        }
      ))
    }
  ];
  return (e.ttftMs !== null || e.decodeMs !== null) && t.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ d.createElement("div", null, e.ttftMs !== null ? /* @__PURE__ */ d.createElement(
      O,
      {
        label: "First TTFT",
        value: oe(e.ttftMs / 1e3)
      }
    ) : null, e.decodeMs !== null ? /* @__PURE__ */ d.createElement(
      O,
      {
        label: "Total decoding",
        value: oe(e.decodeMs / 1e3)
      }
    ) : null, /* @__PURE__ */ d.createElement(
      O,
      {
        label: b(s, "throughput"),
        value: gt(
          e.outputTokens,
          e.decodeMs === null ? null : e.decodeMs / 1e3
        )
      }
    ))
  }), /* @__PURE__ */ d.createElement("div", { style: { padding: "8px 4px" } }, /* @__PURE__ */ d.createElement(yt, { size: "small", items: t, tabBarStyle: { marginBottom: 8 } }));
}
function Cn(e, s = 200) {
  const t = e.split(`
`, 1)[0].trim();
  return t.length > s ? `${t.slice(0, s)}…` : t;
}
function zn({
  oldText: e,
  newText: s
}) {
  const t = d.useMemo(
    () => pn(e, s),
    [e, s]
  ), n = d.useMemo(() => yn(t), [t]), l = d.useMemo(() => gn(t), [t]), r = ue();
  return e === void 0 ? /* @__PURE__ */ d.createElement(Z, { type: "secondary", style: { fontSize: 12 } }, b(r, "noPrevPrompt")) : /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ d.createElement("span", { style: { color: "#52c41a" } }, "+", n.added), " ", /* @__PURE__ */ d.createElement("span", { style: { color: "#ff4d4f" } }, "−", n.removed)), /* @__PURE__ */ d.createElement(
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
    l.map((a, i) => {
      if (a.kind === "gap")
        return /* @__PURE__ */ d.createElement(
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
          a.count
        );
      const m = a;
      return /* @__PURE__ */ d.createElement(
        "div",
        {
          key: i,
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
function On({ record: e }) {
  var r;
  const s = ue(), t = e.headerTools ?? [], n = e.headerReason === "changed", l = [
    {
      key: "summary",
      label: b(s, "summary"),
      children: /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(O, { label: "#", value: String(e.index) }), /* @__PURE__ */ d.createElement(
        O,
        {
          label: b(s, "status"),
          value: n ? b(s, "promptChanged") : b(s, "promptInitial")
        }
      ), /* @__PURE__ */ d.createElement(O, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ d.createElement(O, { label: "Chars", value: String(((r = e.prompt) == null ? void 0 : r.length) ?? 0) }), /* @__PURE__ */ d.createElement(O, { label: "Tools", value: String(t.length) }))
    },
    ...n ? [
      {
        key: "diff",
        label: "Diff",
        children: /* @__PURE__ */ d.createElement(
          zn,
          {
            oldText: e.prevPrompt,
            newText: e.prompt ?? ""
          }
        )
      }
    ] : [],
    {
      key: "prompt",
      label: b(s, "prompt"),
      children: /* @__PURE__ */ d.createElement(ye, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ d.createElement("div", { style: { paddingTop: 4 } }, t.map((a) => /* @__PURE__ */ d.createElement(Z, { key: a, code: !0, style: { fontSize: 11 } }, a)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ d.createElement(
          xn,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((a, i) => {
              var c;
              const m = typeof a.name == "string" && a.name || typeof ((c = a.function) == null ? void 0 : c.name) == "string" && a.function.name || `tool-${i + 1}`;
              return {
                key: String(i),
                label: /* @__PURE__ */ d.createElement(Z, { code: !0, style: { fontSize: 11 } }, m),
                children: /* @__PURE__ */ d.createElement(ye, { value: a })
              };
            })
          }
        ) : null)
      }
    ] : [],
    {
      key: "raw",
      label: "Raw",
      children: /* @__PURE__ */ d.createElement(ye, { value: e.raw })
    }
  ];
  return /* @__PURE__ */ d.createElement(yt, { size: "small", items: l, tabBarStyle: { marginBottom: 8 } });
}
function st({ dragRef: e, width: s }) {
  return /* @__PURE__ */ d.createElement(
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
function lt({ onClose: e }) {
  return e ? /* @__PURE__ */ d.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ d.createElement(
    Yt,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ d.createElement(wn, null),
      onClick: e
    }
  )) : null;
}
function An({
  record: e,
  request: s,
  onJumpSession: t,
  onSelectTurn: n,
  onClose: l
}) {
  const r = ue(), [a, i] = Qt(400), m = Sn(null);
  if (En(() => {
    const S = (I) => {
      const g = m.current;
      if (g === null) return;
      const u = g.anchorX - I.clientX;
      i(
        Math.min(_n, Math.max(kn, g.anchorWidth + u))
      );
    }, w = () => {
      m.current = null;
    };
    return window.addEventListener("pointermove", S), window.addEventListener("pointerup", w), () => {
      window.removeEventListener("pointermove", S), window.removeEventListener("pointerup", w);
    };
  }, []), e === null && s === null)
    return /* @__PURE__ */ d.createElement(
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
      /* @__PURE__ */ d.createElement(
        Ct,
        {
          image: Ct.PRESENTED_IMAGE_SIMPLE,
          description: b(r, "selectRecord")
        }
      )
    );
  if (e === null && s !== null)
    return /* @__PURE__ */ d.createElement(
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
      /* @__PURE__ */ d.createElement(st, { dragRef: m, width: a }),
      /* @__PURE__ */ d.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ d.createElement(lt, { onClose: l }), /* @__PURE__ */ d.createElement(In, { request: s }))
    );
  const c = e;
  if (c.kind === "system" && c.prompt !== void 0)
    return /* @__PURE__ */ d.createElement(
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
      /* @__PURE__ */ d.createElement(st, { dragRef: m, width: a }),
      /* @__PURE__ */ d.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ d.createElement(lt, { onClose: l }), /* @__PURE__ */ d.createElement(On, { record: c }))
    );
  const h = c.usage, f = c.timing, o = [];
  return o.push({
    key: "summary",
    label: b(r, "summary"),
    children: /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(O, { label: "#", value: String(c.index) }), /* @__PURE__ */ d.createElement(O, { label: "Kind", value: c.kind }), c.runIndex > 0 && n ? /* @__PURE__ */ d.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ d.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => n(c.runIndex)
      },
      "Request #",
      c.runIndex,
      " →"
    )) : null, /* @__PURE__ */ d.createElement(
      O,
      {
        label: b(r, "status"),
        value: c.running ? b(r, "running") : c.isError ? b(r, "error") : b(r, "success"),
        danger: c.isError
      }
    ), c.model ? /* @__PURE__ */ d.createElement(O, { label: b(r, "model"), value: c.model }) : null, c.toolName ? /* @__PURE__ */ d.createElement(O, { label: "Tool", value: c.toolName }) : null, /* @__PURE__ */ d.createElement(
      O,
      {
        label: b(r, "duration"),
        value: oe(c.timeSeconds)
      }
    ), c.note ? /* @__PURE__ */ d.createElement(Z, { type: "warning", style: { fontSize: 12 } }, c.note) : null, c.spawnSession ? /* @__PURE__ */ d.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ d.createElement(
      O,
      {
        label: b(r, "spawnedAgent"),
        value: c.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ d.createElement(
      Yt,
      {
        size: "small",
        onClick: () => c.spawnSession && t(c.spawnSession),
        style: { marginTop: 4 }
      },
      b(r, "openChildSession")
    ) : null) : null)
  }), c.kind === "tool" ? (c.toolInput && o.push({
    key: "payload",
    label: b(r, "input"),
    children: /* @__PURE__ */ d.createElement(ye, { value: c.toolInput, json: !0 })
  }), (c.toolOutput || c.toolError) && o.push({
    key: "result",
    label: b(r, "output"),
    children: /* @__PURE__ */ d.createElement("div", { style: { display: "grid", gap: 8 } }, c.toolError ? /* @__PURE__ */ d.createElement(Z, { type: "danger", style: { fontSize: 12 } }, c.toolError) : null, c.toolOutput ? /* @__PURE__ */ d.createElement(ye, { value: c.toolOutput }) : null)
  })) : (c.outputText || c.thinkingText || c.messages || c.marker || c.toolCalls && c.toolCalls.length > 0) && o.push({
    key: "raw",
    label: b(r, "output"),
    children: /* @__PURE__ */ d.createElement("div", { style: { display: "grid", gap: 8 } }, c.marker ? /* @__PURE__ */ d.createElement(ye, { value: c.marker }) : null, c.toolCalls && c.toolCalls.length > 0 ? /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(Z, { type: "secondary", style: { fontSize: 12 } }, `${b(r, "toolCall")} (${c.toolCalls.length})`), c.toolCalls.map((S, w) => /* @__PURE__ */ d.createElement("div", { key: S.id || w, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ d.createElement(Z, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", S.name), /* @__PURE__ */ d.createElement(Z, { type: "secondary", style: { fontSize: 11 } }, S.id)))) : null, c.note ? /* @__PURE__ */ d.createElement(Z, { type: "warning", style: { fontSize: 12 } }, c.note) : null, c.messages && c.messages.length > 0 ? /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(Z, { type: "secondary", style: { fontSize: 12 } }, `${b(r, "query")} (${c.messages.length})`), c.messages.map((S, w) => /* @__PURE__ */ d.createElement(
      "div",
      {
        key: w,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ d.createElement(Z, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, S.role),
      /* @__PURE__ */ d.createElement(
        Z,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        S.text
      )
    ))) : null, c.thinkingText ? /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(Z, { type: "secondary", style: { fontSize: 12 } }, b(r, "thinking")), /* @__PURE__ */ d.createElement(ye, { value: c.thinkingText })) : null, c.outputText ? /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(Z, { type: "secondary", style: { fontSize: 12 } }, b(r, "output")), /* @__PURE__ */ d.createElement(ye, { value: c.outputText })) : null)
  }), (c.startedAt !== null || h || f) && o.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(O, { label: "Started", value: Ne(c.startedAt) }), /* @__PURE__ */ d.createElement(O, { label: "Total", value: oe(c.timeSeconds) }), f ? /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(
      O,
      {
        label: "TTFT",
        value: oe(f.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ d.createElement(
      O,
      {
        label: "Decoding",
        value: oe(f.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ d.createElement(
      O,
      {
        label: b(r, "throughput"),
        value: gt(
          h == null ? void 0 : h.output_tokens,
          f.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ d.createElement(Z, { type: "secondary", style: { fontSize: 12 } }, b(r, "noTiming")))
  }), h && o.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(O, { label: "Input", value: ce(h.input_tokens) }), /* @__PURE__ */ d.createElement(O, { label: "Output", value: ce(h.output_tokens) }), h.cache_creation_input_tokens ? /* @__PURE__ */ d.createElement(
      O,
      {
        label: "Cache write",
        value: ce(h.cache_creation_input_tokens)
      }
    ) : null, h.cache_input_tokens ? /* @__PURE__ */ d.createElement(
      O,
      {
        label: "Cache read",
        value: ce(h.cache_input_tokens)
      }
    ) : null, h.total_tokens !== void 0 ? /* @__PURE__ */ d.createElement(O, { label: "Total", value: ce(h.total_tokens) }) : null, h.time !== void 0 ? /* @__PURE__ */ d.createElement(O, { label: "API time", value: oe(h.time) }) : null)
  }), o.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ d.createElement(ye, { value: c.raw })
  }), /* @__PURE__ */ d.createElement(
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
    /* @__PURE__ */ d.createElement(st, { dragRef: m, width: a }),
    /* @__PURE__ */ d.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ d.createElement(lt, { onClose: l }), /* @__PURE__ */ d.createElement(yt, { size: "small", items: o, tabBarStyle: { marginBottom: 8 } }))
  );
}
const ne = window.QwenPaw.host.React, Rn = ne.useRef, $n = ne.useState;
ne.useCallback;
ne.useMemo;
const Ln = ne.useEffect, Dn = ne.useLayoutEffect, jn = ne.useReducer;
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
function Nn(e) {
  return e ? e() : void 0;
}
function Fn(e, s, t) {
  const n = new Array(e);
  return new Proxy(n, {
    get(l, r, a) {
      if (typeof r == "string") {
        const i = r.charCodeAt(0);
        if (i >= 48 && i <= 57) {
          const m = +r;
          if (Number.isInteger(m) && m >= 0 && m < e) {
            let c = l[m];
            if (!c) {
              const h = s[m * 2];
              c = l[m] = {
                index: m,
                key: t(m),
                start: h,
                size: s[m * 2 + 1],
                end: h + s[m * 2 + 1],
                lane: 0
              };
            }
            return c;
          }
        }
        if (r === "length") return e;
      }
      return Reflect.get(l, r, a);
    }
  });
}
function Ie(e, s, t) {
  let n = t.initialDeps ?? [], l, r = !0;
  function a() {
    var i;
    const m = process.env.NODE_ENV !== "production" && !!t.key && !!((i = t.debug) != null && i.call(t));
    let c = 0;
    m && (c = Date.now());
    const h = e();
    if (!(h.length !== n.length || h.some((S, w) => n[w] !== S)))
      return l;
    n = h;
    let o = 0;
    if (m && (o = Date.now()), l = s(...h), m) {
      const S = Math.round((Date.now() - c) * 100) / 100, w = Math.round((Date.now() - o) * 100) / 100, I = w / 16, g = (u, p) => {
        for (u = String(u); u.length < p; )
          u = " " + u;
        return u;
      };
      console.info(
        `%c⏱ ${g(w, 5)} /${g(S, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * I, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return t != null && t.onChange && !(r && t.skipInitialOnChange) && t.onChange(l), r = !1, l;
  }
  return a.updateDeps = (i) => {
    n = i;
  }, a;
}
function zt(e, s) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Pn = (e, s) => Math.abs(e - s) < 1.01, Bn = (e, s, t) => {
  let n;
  return function(...l) {
    e.clearTimeout(n), n = e.setTimeout(() => s.apply(this, l), t);
  };
};
let Le;
const rt = () => {
  if (Le !== void 0) return Le;
  if (typeof navigator > "u") return Le = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return Le = !0;
  const e = navigator.maxTouchPoints;
  return Le = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, Ot = (e) => {
  const { offsetWidth: s, offsetHeight: t } = e;
  return { width: s, height: t };
}, Hn = (e) => e, Wn = (e) => {
  const s = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1) - s + 1, l = new Array(n);
  for (let r = 0; r < n; r++)
    l[r] = s + r;
  return l;
}, Un = (e, s) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  const l = (a) => {
    const { width: i, height: m } = a;
    s({ width: Math.round(i), height: Math.round(m) });
  };
  if (l(Ot(t)), !n.ResizeObserver)
    return () => {
    };
  const r = new n.ResizeObserver((a) => {
    const i = () => {
      const m = a[0];
      if (m != null && m.borderBoxSize) {
        const c = m.borderBoxSize[0];
        if (c) {
          l({ width: c.inlineSize, height: c.blockSize });
          return;
        }
      }
      l(Ot(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return r.observe(t, { box: "border-box" }), () => {
    r.unobserve(t);
  };
}, Je = {
  passive: !0
}, Vn = typeof window > "u" ? !0 : "onscrollend" in window, Kn = (e, s, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const l = e.targetWindow;
  if (!l)
    return;
  const r = e.options.useScrollendEvent && Vn;
  let a = 0;
  const i = r ? null : Bn(
    l,
    () => s(a, !1),
    e.options.isScrollingResetDelay
  ), m = (f) => () => {
    a = t(n), i == null || i(), s(a, f);
  }, c = m(!0), h = m(!1);
  return n.addEventListener("scroll", c, Je), r && n.addEventListener("scrollend", h, Je), () => {
    n.removeEventListener("scroll", c), r && n.removeEventListener("scrollend", h);
  };
}, Xn = (e, s) => Kn(e, s, (t) => {
  const { horizontal: n, isRtl: l } = e.options;
  return n ? t.scrollLeft * (l && -1 || 1) : t.scrollTop;
}), Gn = (e, s, t) => {
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
    const n = t.indexFromElement(e), l = t.options.getItemKey(n), r = t.itemSizeCache.get(l);
    if (r !== void 0)
      return r;
  }
  return e[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Jn = (e, {
  adjustments: s = 0,
  behavior: t
}, n) => {
  var l, r;
  (r = (l = n.scrollElement) == null ? void 0 : l.scrollTo) == null || r.call(l, {
    [n.options.horizontal ? "left" : "top"]: e + s,
    behavior: t
  });
}, qn = Jn;
class Qn {
  constructor(s) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, n, l;
      return ((l = (n = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : n.now) == null ? void 0 : l.call(n)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((r) => {
          const a = () => {
            const i = r.target, m = this.indexFromElement(i);
            if (!i.isConnected) {
              this.observer.unobserve(i);
              for (const [c, h] of this.elementsCache)
                if (h === i) {
                  this.elementsCache.delete(c);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(m) && this.resizeItem(
              m,
              this.options.measureElement(i, r, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
        });
      }));
      return {
        disconnect: () => {
          var l;
          (l = n()) == null || l.disconnect(), t = null;
        },
        observe: (l) => {
          var r;
          return (r = n()) == null ? void 0 : r.observe(l, { box: "border-box" });
        },
        unobserve: (l) => {
          var r;
          return (r = n()) == null ? void 0 : r.unobserve(l);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      var n, l;
      const r = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Hn,
        rangeExtractor: Wn,
        onChange: () => {
        },
        measureElement: Gn,
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
      for (const o in t) {
        const S = t[o];
        S !== void 0 && (r[o] = S);
      }
      const a = this.options;
      let i = null, m = null, c = !1;
      if (a !== void 0 && a.enabled && r.enabled && r.anchorTo === "end" && this.scrollElement !== null) {
        const o = a.count, S = r.count, w = this.getMeasurements(), I = o > 0 ? ((n = w[0]) == null ? void 0 : n.key) ?? a.getItemKey(0) : null, g = o > 0 ? ((l = w[o - 1]) == null ? void 0 : l.key) ?? a.getItemKey(o - 1) : null;
        if (S !== o || o > 0 && S > 0 && (r.getItemKey(0) !== I || r.getItemKey(S - 1) !== g)) {
          c = !0;
          const E = o > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? w[0] : null;
          E && (i = [E.key, this.getScrollOffset() - E.start]);
          const k = r.followOnAppend === !0 ? "auto" : r.followOnAppend || null;
          k && S > o && this.isAtEnd(a.scrollEndThreshold) && (o === 0 || r.getItemKey(S - 1) !== g) && (m = k);
        }
      }
      this.options = r, c && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let h = !1, f = 0;
      if (i && this.scrollOffset !== null) {
        const [o, S] = i, w = this.getMeasurements(), { count: I, getItemKey: g } = this.options;
        let u = 0;
        for (; u < I && g(u) !== o; )
          u++;
        if (u < I) {
          const p = w[u];
          if (p) {
            const E = Math.max(0, p.start + S);
            E !== this.scrollOffset && (f = E - this.scrollOffset, this.scrollOffset = E, h = !0);
          }
        }
      }
      (h || m) && (this.pendingScrollAnchor = [
        h ? i[0] : null,
        h ? i[1] : 0,
        m,
        f
      ]);
    }, this.notify = (t) => {
      var n, l;
      (l = (n = this.options).onChange) == null || l.call(n, this, t);
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
          this.options.observeElementOffset(this, (r, a) => {
            if (a && this._intendedScrollOffset === null && r === this.scrollOffset)
              return;
            this._intendedScrollOffset !== null && Math.abs(r - this._intendedScrollOffset) < 1.5 && (r = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
            const i = this.getScrollOffset();
            this.scrollDirection = a ? i === r ? this.scrollDirection : i < r ? "forward" : "backward" : null, this.scrollOffset = r, this.isScrolling = a, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const r = this.scrollElement, a = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, i = () => {
            this._iosTouching = !1, !(!rt() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          r.addEventListener(
            "touchstart",
            a,
            Je
          ), r.addEventListener(
            "touchend",
            i,
            Je
          ), this.unsubs.push(() => {
            r.removeEventListener("touchstart", a), r.removeEventListener("touchend", i), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const l = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, l && this.scrollElement && this.options.enabled) {
        const [r, a, i, m] = l;
        r !== null && !i && (rt() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? m !== 0 && (this._iosDeferredAdjustment += m) : this._scrollToOffset(this.getScrollOffset(), {
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
      (t, n, l, r, a, i, m, c) => (this.prevLanes !== void 0 && this.prevLanes !== i && (this.lanesChangedFlag = !0), this.prevLanes = i, this.pendingMin = null, {
        count: t,
        paddingStart: n,
        scrollMargin: l,
        getItemKey: r,
        enabled: a,
        lanes: i,
        laneAssignmentMode: m,
        gap: c
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Ie(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: t,
        paddingStart: n,
        scrollMargin: l,
        getItemKey: r,
        enabled: a,
        lanes: i,
        laneAssignmentMode: m,
        gap: c
      }, h) => {
        const f = this.itemSizeCache;
        if (!a)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const u of this.laneAssignments.keys())
            u >= t && this.laneAssignments.delete(u);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((u) => {
          this.itemSizeCache.set(u.key, u.size);
        }));
        const o = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), i === 1) {
          const u = t * 2;
          let p = this._flatMeasurements;
          if (!p || p.length < u) {
            const _ = new Float64Array(u);
            p && o > 0 && _.set(p.subarray(0, o * 2)), p = _, this._flatMeasurements = p;
          }
          let E;
          if (o === 0)
            E = n + l;
          else {
            const _ = o - 1;
            E = p[_ * 2] + p[_ * 2 + 1] + c;
          }
          for (let _ = o; _ < t; _++) {
            const J = r(_), z = f.get(J), N = typeof z == "number" ? z : this.options.estimateSize(_);
            p[_ * 2] = E, p[_ * 2 + 1] = N, E += N + c;
          }
          const k = Fn(t, p, r);
          return this.measurementsCache = k, k;
        }
        const S = this.measurementsCache.slice(0, o), w = new Array(i).fill(
          void 0
        ), I = new Float64Array(i);
        let g = 0;
        for (let u = 0; u < o; u++) {
          const p = S[u];
          p && (w[p.lane] === void 0 && g++, w[p.lane] = u, I[p.lane] = p.end);
        }
        for (let u = o; u < t; u++) {
          const p = r(u), E = this.laneAssignments.get(u);
          let k, _;
          const J = m === "estimate" || f.has(p);
          if (E !== void 0 && this.options.lanes > 1) {
            k = E;
            const A = w[k], F = A !== void 0 ? S[A] : void 0;
            _ = F ? F.end + c : n + l;
          } else if (g === i) {
            let A = 0, F = I[0], le = w[0];
            for (let K = 1; K < i; K++) {
              const X = I[K];
              (X < F || X === F && w[K] < le) && (A = K, F = X, le = w[K]);
            }
            k = A, _ = F + c, J && this.laneAssignments.set(u, k);
          } else
            k = u % this.options.lanes, _ = n + l, J && this.laneAssignments.set(u, k);
          const z = f.get(p), N = typeof z == "number" ? z : this.options.estimateSize(u), L = _ + N;
          S[u] = {
            index: u,
            start: _,
            size: N,
            end: L,
            key: p,
            lane: k
          }, w[k] === void 0 && g++, w[k] = u, I[k] = L;
        }
        return this.measurementsCache = S, S;
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
      (t, n, l, r) => t.length === 0 || n === 0 ? (this.range = null, null) : (this.range = Zn(
        t,
        n,
        l,
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
        const l = this.calculateRange();
        return l && (t = l.startIndex, n = l.endIndex), this.maybeNotify.updateDeps([this.isScrolling, t, n]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          t,
          n
        ];
      },
      (t, n, l, r, a) => r === null || a === null ? [] : t({
        startIndex: r,
        endIndex: a,
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
        const r = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), a = Math.max(0, l - r), i = Math.min(
          this.options.count - 1,
          l + r
        );
        return t >= a && t <= i;
      }
      return !0;
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((a, i) => {
          a.isConnected || (this.observer.unobserve(a), this.elementsCache.delete(i));
        });
        return;
      }
      const n = this.indexFromElement(t), l = this.options.getItemKey(n), r = this.elementsCache.get(l);
      r !== t && (r && this.observer.unobserve(r), this.observer.observe(t), this.elementsCache.set(l, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(n) && this.resizeItem(n, this.options.measureElement(t, void 0, this));
    }, this.resizeItem = (t, n) => {
      var l, r;
      if (t < 0 || t >= this.options.count) return;
      let a, i, m;
      const c = this._flatMeasurements;
      if (this.options.lanes === 1 && c !== null)
        m = this.options.getItemKey(t), i = c[t * 2], a = c[t * 2 + 1];
      else {
        const o = this.measurementsCache[t];
        if (!o) return;
        m = o.key, i = o.start, a = o.size;
      }
      const h = this.itemSizeCache.get(m) ?? a, f = n - h;
      if (f !== 0) {
        const o = this.options.anchorTo === "end" && ((l = this.scrollState) == null ? void 0 : l.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, S = o ? this.getTotalSize() : 0, w = this.getScrollOffset() + this.scrollAdjustments, g = !this.itemSizeCache.has(m) ? (
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
          i + h <= w && this.scrollDirection !== "backward"
        ), u = ((r = this.scrollState) == null ? void 0 : r.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[t] ?? {
            index: t,
            key: m,
            start: i,
            size: a,
            end: i + a,
            lane: 0
          },
          f,
          this
        ) : g);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(m, n), this.itemSizeCacheVersion++;
        let p = !1;
        o ? p = this.applyScrollAdjustment(
          this.getTotalSize() - S
        ) : u && (p = this.applyScrollAdjustment(f)), this.notify(p);
      }
    }, this.getVirtualItems = Ie(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const l = [];
        for (let r = 0, a = t.length; r < a; r++) {
          const i = t[r], m = n[i];
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
      const l = this._flatMeasurements, r = this.options.lanes === 1 && l != null, a = Zt(
        0,
        n.length - 1,
        r ? (i) => l[i * 2] : (i) => zt(n[i]).start,
        t
      );
      return zt(n[a]);
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
      const r = this.getSize(), a = this.getScrollOffset();
      n === "auto" && (n = t >= a + r ? "end" : "start"), n === "center" ? t += (l - r) / 2 : n === "end" && (t -= r);
      const i = this.getMaxScrollOffset();
      return Math.max(Math.min(i, t), 0);
    }, this.getOffsetForIndex = (t, n = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const l = this.getSize(), r = this.getScrollOffset(), a = this.measurementsCache[t];
      if (!a) return;
      if (n === "auto")
        if (a.end >= r + l - this.options.scrollPaddingEnd)
          n = "end";
        else if (a.start <= r + this.options.scrollPaddingStart)
          n = "start";
        else
          return [r, n];
      if (n === "end" && t === this.options.count - 1)
        return [this.getMaxScrollOffset(), n];
      const i = n === "end" ? a.end + this.options.scrollPaddingEnd : a.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(i, n, a.size),
        n
      ];
    }, this.scrollToOffset = (t, { align: n = "start", behavior: l = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0;
      const r = this.getOffsetForAlignment(t, n), a = this.now();
      this.scrollState = {
        index: null,
        align: n,
        behavior: l,
        startedAt: a,
        lastTargetOffset: r,
        stableFrames: 0
      }, this._scrollToOffset(r, { adjustments: void 0, behavior: l }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (t, {
      align: n = "auto",
      behavior: l = "auto"
    } = {}) => {
      this._iosDeferredAdjustment = 0, t = Math.max(0, Math.min(t, this.options.count - 1));
      const r = this.getOffsetForIndex(t, n);
      if (!r)
        return;
      const [a, i] = r, m = this.now();
      this.scrollState = {
        index: t,
        align: i,
        behavior: l,
        startedAt: m,
        lastTargetOffset: a,
        stableFrames: 0
      }, this._scrollToOffset(a, { adjustments: void 0, behavior: l }), this.scheduleScrollReconcile();
    }, this.scrollBy = (t, { behavior: n = "auto" } = {}) => {
      const l = this.getScrollOffset() + t, r = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: n,
        startedAt: r,
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
        const r = n.length - 1, a = this._flatMeasurements;
        a != null ? l = a[r * 2] + a[r * 2 + 1] : l = ((t = n[r]) == null ? void 0 : t.end) ?? 0;
      } else {
        const r = Array(this.options.lanes).fill(null);
        let a = n.length - 1;
        for (; a >= 0 && r.some((i) => i === null); ) {
          const i = n[a];
          r[i.lane] === null && (r[i.lane] = i.end), a--;
        }
        l = Math.max(...r.filter((i) => i !== null));
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
    return s === 0 ? !1 : (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", s), rt() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += s, !1) : (this._scrollToOffset(this.getScrollOffset(), {
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
    const n = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, l = n ? n[0] : this.scrollState.lastTargetOffset, r = 1, a = l !== this.scrollState.lastTargetOffset;
    if (!a && Pn(l, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= r) {
        this.getScrollOffset() !== l && this._scrollToOffset(l, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, a) {
      const i = this.getSize() || 600, m = Math.abs(l - this.getScrollOffset()), c = this.scrollState.behavior === "smooth" && m > i;
      this.scrollState.lastTargetOffset = l, c || (this.scrollState.behavior = "auto"), this._scrollToOffset(l, {
        adjustments: void 0,
        behavior: c ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const Zt = (e, s, t, n) => {
  for (; e <= s; ) {
    const l = (e + s) / 2 | 0, r = t(l);
    if (r < n)
      e = l + 1;
    else if (r > n)
      s = l - 1;
    else
      return l;
  }
  return e > 0 ? e - 1 : 0;
};
function Yn(e, s, t) {
  let n = 0;
  for (; n <= s; ) {
    const l = (n + s) / 2 | 0, r = e[l * 2];
    if (r < t)
      n = l + 1;
    else if (r > t)
      s = l - 1;
    else
      return l;
  }
  return n > 0 ? n - 1 : 0;
}
function Zn(e, s, t, n, l) {
  const r = e.length - 1;
  if (e.length <= n)
    return { startIndex: 0, endIndex: r };
  if (n === 1 && l !== null) {
    const c = Yn(
      l,
      r,
      t
    );
    let h = c;
    const f = t + s;
    for (; h < r && l[h * 2] + l[h * 2 + 1] < f; )
      h++;
    return { startIndex: c, endIndex: h };
  }
  let i = Zt(0, r, (c) => e[c].start, t), m = i;
  if (n === 1)
    for (; m < r && e[m].end < t + s; )
      m++;
  else if (n > 1) {
    const c = Array(n).fill(0);
    for (; m < r && c.some((f) => f < t + s); ) {
      const f = e[m];
      c[f.lane] = f.end, m++;
    }
    const h = Array(n).fill(t + s);
    for (; i >= 0 && h.some((f) => f >= t); ) {
      const f = e[i];
      h[f.lane] = f.start, i--;
    }
    i = Math.max(0, i - i % n), m = Math.min(r, m + (n - 1 - m % n));
  }
  return { startIndex: i, endIndex: m };
}
const ot = typeof document < "u" ? Dn : Ln;
function es({
  useFlushSync: e = !0,
  directDomUpdates: s = !1,
  directDomUpdatesMode: t = "transform",
  ...n
}) {
  const l = jn((h) => h + 1, 0)[1], r = Rn({
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
  r.current.enabled = s, r.current.mode = t;
  const a = (h) => {
    const f = r.current;
    if (!f.enabled || !f.container) return;
    const o = h.getTotalSize();
    if (o !== f.lastSize) {
      f.lastSize = o;
      const S = h.options.horizontal ? "width" : "height";
      f.container.style[S] = `${o}px`;
    }
  }, i = (h) => {
    const f = r.current;
    if (!f.enabled || !f.container) return;
    a(h);
    const o = !!h.options.horizontal, S = f.mode === "transform", w = o ? "left" : "top", I = h.options.scrollMargin, g = h.getVirtualItems();
    for (const u of g) {
      const p = u.start - I, E = h.elementsCache.get(u.key);
      E && f.lastPositions.get(E) !== p && (f.lastPositions.set(E, p), S ? E.style.transform = o ? `translate3d(${p}px, 0, 0)` : `translate3d(0, ${p}px, 0)` : E.style[w] = `${p}px`);
    }
  }, m = {
    ...n,
    onChange: (h, f) => {
      var o;
      const S = r.current;
      let w = !0;
      if (S.enabled) {
        i(h);
        const I = h.range, g = S.prevRange;
        w = !g || g.isScrolling !== h.isScrolling || g.startIndex !== (I == null ? void 0 : I.startIndex) || g.endIndex !== (I == null ? void 0 : I.endIndex), w && (S.prevRange = I ? {
          startIndex: I.startIndex,
          endIndex: I.endIndex,
          isScrolling: h.isScrolling
        } : null);
      }
      w && (e && f ? Nn(l) : l()), (o = n.onChange) == null || o.call(n, h, f);
    }
  }, [c] = $n(() => {
    const h = new Qn(m);
    return Object.assign(h, {
      containerRef: (f) => {
        const o = r.current;
        if (o.container = f, o.lastSize = null, f && o.enabled) {
          const S = h.getTotalSize();
          o.lastSize = S;
          const w = h.options.horizontal ? "width" : "height";
          f.style[w] = `${S}px`;
        }
      }
    });
  });
  return c.setOptions(m), ot(() => c._didMount(), []), ot(() => (a(c), c._willUpdate())), ot(() => {
    i(c);
  }), c;
}
function ts(e) {
  return es({
    observeElementRect: Un,
    observeElementOffset: Xn,
    scrollToFn: qn,
    ...e
  });
}
const Ye = window.QwenPaw.host, C = Ye.React, { useRef: ns } = C, { Tag: en } = Ye.antd, { Text: ke } = Ye.antd.Typography, {
  CaretRightOutlined: ss,
  RobotOutlined: ls,
  SettingOutlined: rs,
  ToolOutlined: os,
  UserOutlined: is
} = Ye.antdIcons, as = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, cs = {
  user: /* @__PURE__ */ C.createElement(is, null),
  message: /* @__PURE__ */ C.createElement(ls, null),
  tool: /* @__PURE__ */ C.createElement(os, null),
  system: /* @__PURE__ */ C.createElement(rs, null)
}, us = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" }
}, ds = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default"
}, At = {
  running: { zh: "进行中", en: "Running" },
  success: { zh: "成功", en: "Success" },
  error: { zh: "错误", en: "Error" },
  cancelled: { zh: "已取消", en: "Cancelled" },
  interrupted: { zh: "已中断", en: "Interrupted" },
  unknown: { zh: "未知", en: "Unknown" }
}, hs = 150, mt = 26, tn = 34, Rt = 9, $t = 30;
function ms(e) {
  const s = ue(), t = us[e];
  return t ? s === "zh-CN" ? t.zh : t.en : e;
}
function fs(e) {
  const s = ue(), t = At[e] ?? At.unknown;
  return s === "zh-CN" ? t.zh : t.en;
}
function Lt({
  record: e,
  selected: s,
  dimmed: t,
  multiRequest: n,
  onSelect: l
}) {
  const r = e.usage, a = r && (r.input_tokens || r.output_tokens) ? `${ce(r.input_tokens)}→${ce(
    r.output_tokens
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
        height: mt,
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
      en,
      {
        color: as[e.kind] ?? "default",
        icon: cs[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      ms(e.kind)
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
      e.kind === "tool" && e.toolName ? /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(ke, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ C.createElement(ke, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ C.createElement(
        ke,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ C.createElement(
        ke,
        {
          type: e.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        e.running ? `⏳ ${e.text || "…"}` : e.text || "—"
      )
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
      a ? /* @__PURE__ */ C.createElement("span", { style: { color: "#1677ff" } }, a) : null,
      a ? " · " : "",
      (e.kind === "message" || e.kind === "tool") && oe(e.timeSeconds)
    )
  );
}
function ps({
  turn: e,
  collapsed: s,
  selected: t,
  cellCount: n,
  onToggle: l,
  onSelect: r
}) {
  const a = ue();
  return /* @__PURE__ */ C.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: tn }
    },
    /* @__PURE__ */ C.createElement(
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
      /* @__PURE__ */ C.createElement(
        ss,
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
      /* @__PURE__ */ C.createElement(ke, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ C.createElement(ke, { type: "secondary", style: { fontSize: 11 } }, oe(e.durationMs / 1e3)),
      /* @__PURE__ */ C.createElement(ke, { type: "secondary", style: { fontSize: 11 } }, n, " ", b(a, "events")),
      /* @__PURE__ */ C.createElement(
        en,
        {
          color: ds[e.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        fs(e.status)
      )
    )
  );
}
function gs({
  turns: e,
  selectedIndex: s,
  selectedTurn: t,
  collapsedTurns: n,
  focusIndexes: l,
  searchMatchIndexes: r,
  onSelectedIndexChange: a,
  onSelectedTurnChange: i,
  onToggleTurn: m,
  callsCollapsed: c,
  hasOlderRecords: h,
  loadingOlder: f,
  onLoadOlder: o,
  initialRecord: S,
  emptyText: w
}) {
  const I = ue(), g = ns(null), u = e.filter((z) => z.turn !== null), p = u.length > 1, E = C.useMemo(() => {
    var N;
    const z = [];
    h && z.push({
      key: "load-older",
      height: $t,
      type: "load-older"
    }), S && (z.push({
      key: "initial",
      height: mt,
      type: "initial",
      record: S
    }), z.push({
      key: "initial-divider",
      height: Rt,
      type: "divider"
    }));
    for (const L of u) {
      const A = L.turn;
      if (z.push({
        key: `turn-${A}`,
        height: tn,
        type: "boundary",
        turn: L
      }), !n.has(A))
        for (const F of ((N = L.groups[0]) == null ? void 0 : N.cells) ?? [])
          c && F.kind === "tool" || z.push({
            key: `rec-${F.index}`,
            height: mt,
            type: "record",
            record: F
          });
    }
    return z;
  }, [
    u,
    n,
    c,
    h,
    S
  ]), k = C.useCallback(
    (z) => l !== null && !l.has(z.index) || r !== null && !r.has(z.index),
    [l, r]
  ), _ = (z) => {
    var N;
    switch (z.type) {
      case "load-older":
        return /* @__PURE__ */ C.createElement("div", { style: { textAlign: "center", height: $t } }, /* @__PURE__ */ C.createElement(
          "button",
          {
            type: "button",
            onClick: o,
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
          f ? "…" : `⋯ ${b(I, "loadOlder")}`
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
        const L = z.record;
        return /* @__PURE__ */ C.createElement(
          Lt,
          {
            record: L,
            selected: s === L.index,
            dimmed: k(L),
            multiRequest: p,
            onSelect: () => a(L.index)
          }
        );
      }
      case "boundary": {
        const L = z.turn, A = L.turn;
        return /* @__PURE__ */ C.createElement(
          ps,
          {
            turn: L,
            collapsed: n.has(A),
            selected: t === A,
            cellCount: ((N = L.groups[0]) == null ? void 0 : N.cells.length) ?? 0,
            onToggle: () => m(A),
            onSelect: () => i(A)
          }
        );
      }
      case "record":
      default: {
        const L = z.record;
        return /* @__PURE__ */ C.createElement(
          Lt,
          {
            record: L,
            selected: s === L.index,
            dimmed: k(L),
            multiRequest: p,
            onSelect: () => a(L.index)
          }
        );
      }
    }
  };
  if (E.length === 0)
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
        w ?? b(I, "noSessions")
      )
    );
  const J = E.length <= hs ? /* @__PURE__ */ C.createElement("div", null, E.map((z) => _(z))) : /* @__PURE__ */ C.createElement(
    ys,
    {
      rows: E,
      scrollRef: g,
      renderRow: _
    }
  );
  return /* @__PURE__ */ C.createElement(
    "div",
    {
      ref: g,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    J
  );
}
function ys({
  rows: e,
  scrollRef: s,
  renderRow: t
}) {
  const n = ts({
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
function it(e) {
  return (e == null ? void 0 : e.data) ?? {};
}
function xe(e, s = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > s ? `${t.slice(0, s)}…` : t;
}
function vs(e) {
  var I;
  const s = [], t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), a = [];
  let i = "";
  const m = /* @__PURE__ */ new Map();
  let c = 0, h = 0;
  const f = (g) => g.groups[0].cells, o = (g, u) => {
    const p = r.get(g);
    p ? p.push(u) : r.set(g, [u]);
  }, S = (g, u) => {
    if (!g)
      if (i)
        g = i;
      else {
        a.push(u);
        return;
      }
    const p = t.get(g);
    if (p)
      u.runIndex = p.turn ?? 0, f(p).push(u);
    else if (i) {
      const E = t.get(i);
      E ? (u.runIndex = E.turn ?? 0, f(E).push(u)) : o(g, u);
    } else
      o(g, u);
  }, w = (g, u) => {
    const p = r.get(u);
    if (p) {
      for (const E of p) f(g).push(E);
      r.delete(u);
    }
  };
  for (const g of e) {
    const u = it(g);
    switch (g.type) {
      case "run/start": {
        h += 1;
        const p = {
          turn: h,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${h}`, cells: [] }]
        };
        t.set(g.run_id, p), s.push(p), i = g.run_id, w(p, g.run_id);
        for (const _ of a.splice(0))
          _.runIndex = h, f(p).push(_);
        const E = Array.isArray(u.messages) ? u.messages : [], k = String(u.query ?? "");
        f(p).push({
          index: ++c,
          runIndex: h,
          runId: g.run_id,
          kind: "user",
          text: xe(k) || xe((I = E.at(-1)) == null ? void 0 : I.text),
          messages: E,
          timeSeconds: 0,
          startedAt: ie(g.t),
          isError: !1,
          running: !1,
          model: void 0
        });
        break;
      }
      case "run/end": {
        const p = t.get(g.run_id);
        i === g.run_id && (i = "");
        const E = String(u.status ?? "unknown");
        if (p && (p.status = E, p.durationMs = typeof u.duration_ms == "number" ? u.duration_ms : null), E === "error" && u.error) {
          const k = p ?? {
            turn: null,
            status: E,
            durationMs: typeof u.duration_ms == "number" ? u.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          p || s.push(k), k.groups[0].cells.push({
            index: ++c,
            runIndex: h,
            runId: g.run_id,
            kind: "system",
            text: xe(String(u.error)) || "run failed",
            marker: String(u.error ?? "run failed"),
            timeSeconds: typeof u.duration_ms == "number" ? u.duration_ms / 1e3 : null,
            startedAt: ie(g.t),
            isError: !0,
            running: !1,
            raw: [g]
          });
        }
        break;
      }
      case "agent/spawn": {
        const p = typeof u.child_session_id == "string" ? u.child_session_id : void 0, E = typeof u.child_agent_id == "string" ? u.child_agent_id : "?";
        S(g.run_id, {
          index: ++c,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          text: `🚀 ${E} → ${p ?? "?"}`,
          timeSeconds: 0,
          startedAt: ie(g.t),
          isError: !1,
          running: !1,
          spawnSession: p,
          spawnAgent: E,
          raw: [g]
        });
        break;
      }
      case "message/inbound": {
        const p = Array.isArray(u.parts) ? u.parts : [], E = p.map((k) => String(k.type ?? "?").replace("Content", "")).join(",");
        S(g.run_id, {
          index: ++c,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          text: `📥 ${p.length} part(s)${E ? ` [${E}]` : ""}`,
          timeSeconds: 0,
          startedAt: ie(g.t),
          isError: !1,
          running: !1,
          raw: [g]
        });
        break;
      }
      case "message/outbound": {
        const p = typeof u.text == "string" ? u.text : "";
        S(g.run_id, {
          index: ++c,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          text: `📤 ${xe(p) || "(empty)"}`,
          timeSeconds: 0,
          startedAt: ie(g.t),
          isError: !1,
          running: !1,
          outputText: p || void 0,
          raw: [g]
        });
        break;
      }
      case "approval/asked": {
        S(g.run_id, {
          index: ++c,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          text: `🛡 approval asked: ${String(u.tool_name ?? "?")}`,
          timeSeconds: 0,
          startedAt: ie(g.t),
          isError: !1,
          running: !1,
          raw: [g]
        });
        break;
      }
      case "approval/decided": {
        const p = String(u.decision ?? "?");
        S(g.run_id, {
          index: ++c,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          text: `🛡 approval ${p}${u.tool_name ? `: ${String(u.tool_name)}` : ""}`,
          timeSeconds: 0,
          startedAt: ie(g.t),
          isError: p === "denied",
          running: !1,
          raw: [g]
        });
        break;
      }
      case "llm/header": {
        const p = typeof u.sha256 == "string" ? u.sha256 : "", E = typeof u.prev_sha256 == "string" ? u.prev_sha256 : void 0, k = u.reason === "changed" ? "changed" : "initial", _ = typeof u.system_prompt == "string" ? u.system_prompt : "", J = Array.isArray(u.tools) ? u.tools : [], z = Array.isArray(u.schemas) ? u.schemas : void 0;
        S(g.run_id, {
          index: ++c,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          text: k === "initial" ? `⚙ ${_ ? `System Prompt (${_.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: ie(g.t),
          isError: !1,
          running: !1,
          prompt: _,
          prevPrompt: m.get(E ?? ""),
          headerTools: J,
          headerReason: k,
          sha: p,
          prevSha: E,
          schemas: z,
          raw: [g]
        }), p && m.set(p, _);
        break;
      }
      case "llm/call": {
        const p = it(g), E = p.options && typeof p.options == "object" && Object.keys(p.options).length > 0 ? p.options : void 0, k = {
          index: ++c,
          runIndex: 0,
          runId: g.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: ie(g.t),
          isError: !1,
          running: !0,
          model: String(p.model ?? "unknown"),
          options: E
        };
        S(g.run_id, k);
        const _ = n.get(g.run_id) ?? [];
        _.push({ cell: k, callData: p, call: g }), n.set(g.run_id, _);
        break;
      }
      case "llm/result": {
        const p = n.get(g.run_id), E = p == null ? void 0 : p.shift(), k = (E == null ? void 0 : E.callData) ?? {}, _ = typeof u.duration_ms == "number" ? u.duration_ms : null, J = u.usage ?? void 0, z = u.timing, N = Array.isArray(u.tool_calls) ? u.tool_calls : void 0, F = {
          text: (u.error ? xe(String(u.error)) : xe(String(u.text ?? ""))) || (N && N.length > 0 ? `🛠 ${N.map((le) => le.name).join(", ")}` : ""),
          timeSeconds: _ === null ? null : _ / 1e3,
          isError: !!u.error,
          running: !1,
          outputText: u.text ? String(u.text) : void 0,
          thinkingText: u.thinking ? String(u.thinking) : void 0,
          usage: J,
          timing: z,
          toolCalls: N,
          note: u.note ? String(u.note) : void 0
        };
        E ? (Object.assign(E.cell, F), E.cell.model = String(
          u.model ?? k.model ?? E.cell.model
        ), E.cell.raw = [
          ...E.call ? [E.call] : [],
          g
        ]) : S(g.run_id, {
          index: ++c,
          runIndex: 0,
          runId: g.run_id,
          kind: "message",
          startedAt: ie(g.t),
          model: String(u.model ?? k.model ?? "unknown"),
          ...F
        });
        break;
      }
      case "tool/call": {
        const p = it(g), E = {
          index: ++c,
          runIndex: 0,
          runId: g.run_id,
          kind: "tool",
          text: `${String(p.name ?? "?")}(${xe(
            String(p.input ?? ""),
            60
          )})`,
          timeSeconds: null,
          startedAt: ie(g.t),
          isError: !1,
          running: !0,
          toolName: String(p.name ?? "?"),
          toolInput: p.input ? String(p.input) : void 0
        };
        S(g.run_id, E);
        const k = l.get(g.run_id) ?? [];
        k.push({ cell: E, callData: p, call: g }), l.set(g.run_id, k);
        break;
      }
      case "tool/result": {
        const p = l.get(g.run_id), E = typeof u.tool_call_id == "string" ? u.tool_call_id : null;
        let k;
        if (p) {
          const A = E ? p.findIndex(
            (F) => F.callData.tool_call_id === E
          ) : -1;
          A >= 0 ? k = p.splice(A, 1)[0] : k = p.shift();
        }
        const _ = typeof u.duration_ms == "number" ? u.duration_ms : null, J = u.ok !== !1 && !u.error, z = u.output ? String(u.output) : void 0, N = z ? ` → ${xe(z, 60)}` : "", L = {
          timeSeconds: _ === null ? null : _ / 1e3,
          isError: !J,
          running: !1,
          toolOutput: z,
          toolError: u.error ? String(u.error) : void 0,
          note: u.note ? String(u.note) : void 0
        };
        k ? (Object.assign(k.cell, L), k.cell.text = `${k.cell.text}${N}`, k.cell.raw = [
          ...k.call ? [k.call] : [],
          g
        ]) : S(g.run_id, {
          index: ++c,
          runIndex: 0,
          runId: g.run_id,
          kind: "tool",
          text: `?${N}`,
          startedAt: ie(g.t),
          ...L
        });
        break;
      }
    }
  }
  for (const [g, u] of r) {
    const p = t.get(g);
    if (p) {
      for (const E of u) f(p).push(E);
      r.delete(g);
    }
  }
  return s;
}
function Dt(e) {
  return e.flatMap((s) => s.groups.flatMap((t) => t.cells));
}
function Es(e) {
  var a;
  if (e.length === 0) return { initial: null, turns: [...e] };
  const s = e[0], t = ((a = s.groups[0]) == null ? void 0 : a.cells) ?? [], n = t.findIndex(
    (i) => i.kind === "system" && i.headerReason === "initial" && i.prompt !== void 0
  );
  if (n < 0) return { initial: null, turns: [...e] };
  const l = t[n], r = {
    ...s,
    groups: [
      {
        ...s.groups[0],
        cells: t.filter((i, m) => m !== n)
      }
    ]
  };
  return { initial: l, turns: [r, ...e.slice(1)] };
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
}, jt = "agent-trace-timeline-styles", Ss = `
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
let at = !1;
function xs() {
  if (at || typeof document > "u") return;
  if (document.getElementById(jt)) {
    at = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = jt, e.textContent = Ss, document.head.appendChild(e), at = !0;
}
function ct(e) {
  return vn(e);
}
function nn(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function Nt(e) {
  return e != null && Number.isFinite(e);
}
function bs(e) {
  if (!Nt(e.startedAt)) return null;
  const s = Nt(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + s };
}
function sn(e, s = "sequence") {
  if (s !== "sequence")
    return ws(
      e,
      s === "duration" || s === "actual",
      s === "duration"
    );
  const t = [], n = [];
  for (const l of e) {
    const r = l.groups.flatMap((a) => a.cells);
    r.length !== 0 && (l.turn !== null && n.push({
      turn: l.turn,
      time: t.length
    }), t.push(
      ...r.map(
        (a, i) => ({
          start: t.length + i,
          end: t.length + i + 1,
          index: a.index,
          isError: a.isError === !0,
          kind: a.kind,
          label: a.text,
          lane: nn(a.kind)
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
function ws(e, s, t) {
  const n = e.flatMap((h) => {
    const f = h.groups.flatMap(
      (o) => o.cells.flatMap((S) => {
        const w = bs(S);
        return w === null ? [] : [
          {
            ...w,
            index: S.index,
            isError: S.isError === !0,
            kind: S.kind,
            label: S.text,
            lane: nn(S.kind)
          }
        ];
      })
    );
    return f.length === 0 ? [] : [{ turn: h.turn, rawSpans: f }];
  }), l = n.flatMap((h) => h.rawSpans);
  if (l.length === 0) return null;
  const r = /* @__PURE__ */ new Map();
  let a = 0, i = null;
  for (const h of [...l].sort(
    (f, o) => f.start - o.start || f.end - o.end
  ))
    t && i !== null && h.start > i && (a += h.start - i), r.set(h, a), i = i === null ? h.end : Math.max(i, h.end);
  const m = [], c = [];
  for (const h of n) {
    const f = h.rawSpans.map((o) => {
      const S = r.get(o) ?? 0;
      return {
        ...o,
        start: o.start - S,
        end: (s ? o.end : o.start) - S
      };
    });
    m.push(...f), h.turn !== null && c.push({
      turn: h.turn,
      time: Math.min(...f.map((o) => o.start))
    });
  }
  return {
    start: Math.min(...m.map((h) => h.start)),
    end: Math.max(...m.map((h) => h.end)),
    spans: m,
    turnBoundaries: c
  };
}
function ks(e, s, t = "sequence") {
  const n = sn(e, t);
  return new Set(
    n == null ? void 0 : n.spans.filter((l) => l.start <= s.end && l.end >= s.start).map((l) => l.index)
  );
}
xs();
const qe = window.QwenPaw.host, $ = qe.React, { useEffect: Ve, useMemo: Ft, useRef: Ke, useState: Ce } = $, { Tooltip: _s } = qe.antd, ut = 3, Ts = 4, Ms = 0.08, Is = 0.025, Cs = 32, zs = 0.5;
function Os(e) {
  const s = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, n = e.timing, l = n && Number.isFinite(n.ttft_ms) ? n.ttft_ms : void 0, r = n && Number.isFinite(n.decode_ms) ? n.decode_ms : void 0;
  return {
    ...s === void 0 ? {} : { durationMs: s },
    ...t === void 0 ? {} : { startedAt: t },
    ...l === void 0 || r === void 0 ? {} : { ttftMs: l, decodingMs: r }
  };
}
function As(e) {
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
function Rs(e, s) {
  const t = As(e);
  if (s === void 0) return t;
  const n = s.durationMs === void 0 ? null : `Total ${ct(s.durationMs)}`, l = s.startedAt === void 0 ? null : s.durationMs === void 0 ? `Started ${Ne(s.startedAt)}` : `${Ne(s.startedAt)} → ${Ne(
    s.startedAt + s.durationMs
  )}`, r = s.ttftMs === void 0 || s.decodingMs === void 0 ? null : `TTFT ${ct(
    s.ttftMs
  )} · Decoding ${ct(s.decodingMs)}`, a = [n, r].filter((i) => i !== null).join(" · ");
  return [t, l, a].filter((i) => i !== null && i !== "").join(`
`);
}
function ft(e, s) {
  return e <= s ? { start: e, end: s } : { start: s, end: e };
}
function dt(e) {
  return Math.min(1, Math.max(0, e));
}
function $s(e, s, t, n) {
  const l = Math.min(n - t, Math.max(0, s)), r = Math.min(
    Math.max(e - l / 2, t),
    n - l
  );
  return { start: r, end: r + l };
}
function Pt(e, s, t, n, l) {
  const r = ft(
    Math.min(l, Math.max(n, e.start)),
    Math.min(l, Math.max(n, e.end))
  );
  return {
    start: (r.start - s) / t,
    end: (r.end - s) / t
  };
}
function ln({
  label: e,
  placement: s,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ $.createElement(
    _s,
    {
      title: /* @__PURE__ */ $.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: s,
      mouseEnterDelay: zs,
      ...n
    },
    t
  );
}
function Bt() {
  return /* @__PURE__ */ $.createElement("div", { className: se.labels, "aria-hidden": "true" }, /* @__PURE__ */ $.createElement("span", null, "Input"), /* @__PURE__ */ $.createElement("span", null, "Model"), /* @__PURE__ */ $.createElement("span", null, "Tools"));
}
function Ht({
  loading: e,
  onHover: s,
  onLoad: t
}) {
  return /* @__PURE__ */ $.createElement(
    ln,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ $.createElement(
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
const Ls = $.memo(function({
  turns: s,
  mode: t,
  range: n,
  hasEarlierRecords: l = !1,
  onLoadEarlier: r,
  selectedIndex: a = null,
  searchMatchIndexes: i = null,
  onRangeChange: m,
  onRecordSelect: c,
  onRecordFocus: h
}) {
  const f = typeof qe.useTheme == "function" ? qe.useTheme() : void 0, o = Ft(
    () => sn(s, t),
    [t, s]
  ), S = Ft(
    () => new Map(
      s.flatMap(
        (y) => y.groups.flatMap(
          (T) => T.cells.map(
            (D) => [D.index, Os(D)]
          )
        )
      )
    ),
    [s]
  ), w = Ke(null), I = Ke(null), g = Ke(null), u = Ke(null), [p, E] = Ce(null), [k, _] = Ce(null), [J, z] = Ce(!1), [N, L] = Ce(!1), [A, F] = Ce(null), [le, K] = Ce(!1);
  Ve(() => {
    o !== null && n !== null && (n.end < o.start || n.start > o.end) && m(null);
  }, [o, m, n]), Ve(() => {
    o !== null && (K(!1), F(
      (y) => y !== null && (y.end < o.start || y.start > o.end) ? null : y
    ));
  }, [o]), Ve(() => {
    if (o === null || a === null) return;
    const y = o.spans.find(
      (T) => T.index === a
    );
    y !== void 0 && (K(!0), F((T) => {
      if (T === null || y.end > T.start && y.start < T.end)
        return T;
      const D = Math.max(1, T.end - T.start), j = y.end <= T.start ? y.start : y.end - D, P = Math.min(
        Math.max(j, o.start),
        Math.max(o.start, o.end - D)
      );
      return P === T.start ? T : { start: P, end: P + D };
    }));
  }, [o, a]);
  const X = Math.max(1, ((o == null ? void 0 : o.end) ?? 0) - ((o == null ? void 0 : o.start) ?? 0)), ve = Math.min(
    X,
    Math.max(1, ((A == null ? void 0 : A.end) ?? 0) - ((A == null ? void 0 : A.start) ?? 0))
  ), Fe = o === null || A === null ? (o == null ? void 0 : o.start) ?? 0 : Math.min(
    Math.max(A.start, o.start),
    o.end - ve
  ), V = A === null ? X : ve, q = A === null ? (o == null ? void 0 : o.start) ?? 0 : Fe, Ze = l && o !== null && q === o.start, Pe = r === void 0 || J ? void 0 : () => {
    z(!0), r().finally(() => {
      z(!1);
    });
  }, _e = o === null ? void 0 : {
    "--trajectory-domain-left": `${-(q - o.start) / V * 100}%`,
    "--trajectory-domain-width": `${X / V * 100}%`
  }, Ee = o === null || n === null ? null : Pt(
    n,
    q,
    V,
    o.start,
    o.end
  ), H = (o === null || p === null ? null : Pt(
    p,
    q,
    V,
    o.start,
    o.end
  )) ?? Ee, be = p ?? n;
  if (Ve(() => {
    const y = g.current;
    if (y === null) return;
    const T = (D) => {
      D.preventDefault();
      const j = u.current;
      if (j === null || o === null) return;
      K(!1);
      const P = j.getBoundingClientRect(), W = dt(
        (D.clientX - P.left) / Math.max(1, P.width)
      ), ee = Math.min(
        X,
        Math.max(
          Math.min(
            t === "sequence" ? Ts : 20,
            X
          ),
          V * Math.exp(D.deltaY * 15e-4)
        )
      );
      if (ee >= X * 0.999) {
        F(null);
        return;
      }
      const U = q + W * V, te = Math.min(
        Math.max(U - W * ee, o.start),
        o.end - ee
      );
      F({ start: te, end: te + ee });
    };
    return y.addEventListener("wheel", T, { passive: !1 }), () => {
      y.removeEventListener("wheel", T);
    };
  }, [V, q, X, t, o]), o === null)
    return /* @__PURE__ */ $.createElement(
      "section",
      {
        ref: g,
        className: se.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ $.createElement("div", { className: se.plot }, /* @__PURE__ */ $.createElement(Bt, null), /* @__PURE__ */ $.createElement("div", { className: se.track }, /* @__PURE__ */ $.createElement("span", { className: se.empty }, "No timing data"), l && /* @__PURE__ */ $.createElement(
        Ht,
        {
          loading: J,
          onHover: () => {
            _(null);
          },
          onLoad: Pe
        }
      )))
    );
  const Ae = Math.min(
    V,
    X / o.spans.length
  ), me = (y) => {
    const T = y.currentTarget.getBoundingClientRect();
    return dt((y.clientX - T.left) / Math.max(1, T.width));
  }, we = (y) => {
    var P;
    const T = y.target instanceof HTMLElement ? y.target : null, D = (P = T == null ? void 0 : T.closest("[data-timeline-record-index]")) == null ? void 0 : P.dataset.timelineRecordIndex;
    if (D === void 0) return null;
    const j = Number(D);
    return Number.isFinite(j) ? j : null;
  }, Se = (y) => {
    m(y);
  }, et = (y) => {
    if (y.button === 2) {
      I.current = {
        anchorClientX: y.clientX,
        anchorStart: q,
        moved: !1,
        pannable: A !== null,
        pointerId: y.pointerId
      }, A !== null && K(!1), L(!0), typeof y.currentTarget.setPointerCapture == "function" && y.currentTarget.setPointerCapture(y.pointerId);
      return;
    }
    if (y.button !== 0) return;
    const T = me(y), D = q + T * V, j = we(y);
    _({ fraction: T, recordIndex: j }), w.current = {
      pointerId: y.pointerId,
      anchorTime: D,
      anchorClientX: y.clientX,
      recordIndex: j
    }, typeof y.currentTarget.setPointerCapture == "function" && y.currentTarget.setPointerCapture(y.pointerId), E({ start: D, end: D });
  }, fe = (y) => {
    const T = y.currentTarget.getBoundingClientRect(), D = me(y);
    _({ fraction: D, recordIndex: we(y) });
    const j = I.current;
    if (j !== null && j.pointerId === y.pointerId) {
      if (Math.abs(y.clientX - j.anchorClientX) >= ut && (j.moved = !0), !j.pannable) return;
      const U = (y.clientX - j.anchorClientX) / Math.max(1, T.width), te = Math.min(
        Math.max(j.anchorStart - U * V, o.start),
        o.end - V
      );
      F({ start: te, end: te + V });
      return;
    }
    const P = w.current;
    if (P === null || P.pointerId !== y.pointerId) return;
    let W = q;
    if (A !== null) {
      const U = y.clientX - T.left, te = Math.min(
        Cs,
        Math.max(1, T.width * Ms)
      ), Y = U < te ? -1 : U > T.width - te ? 1 : 0;
      if (Y !== 0) {
        const Re = Y < 0 ? te - U : U - (T.width - te), pe = dt(Re / te), de = q + Y * V * Is * Math.max(0.2, pe);
        W = Math.min(
          Math.max(de, o.start),
          o.end - V
        ), W !== q && (K(!1), F({
          start: W,
          end: W + V
        }));
      }
    }
    const ee = W + D * V;
    E(ft(P.anchorTime, ee));
  }, He = (y) => {
    const T = I.current;
    if (T !== null && T.pointerId === y.pointerId) {
      const Y = T.moved || Math.abs(y.clientX - T.anchorClientX) >= ut;
      I.current = null, L(!1), Y || m(null);
      return;
    }
    const D = w.current;
    if (D === null || D.pointerId !== y.pointerId) return;
    const j = me(y), P = q + j * V, W = ft(D.anchorTime, P);
    _({ fraction: j, recordIndex: we(y) }), w.current = null, E(null);
    const ee = Math.abs(y.clientX - D.anchorClientX) < ut, U = ee && D.recordIndex !== null ? o.spans.find((Y) => Y.index === D.recordIndex) : void 0;
    if (U !== void 0) {
      m(null), c == null || c(U.index);
      return;
    }
    const te = W.end - W.start < Ae ? $s(
      ee ? W.start : (W.start + W.end) / 2,
      Ae,
      o.start,
      o.end
    ) : W;
    if (Se(te), ee) {
      const Y = W.start, Re = o.spans.reduce((pe, de) => {
        const v = Y < pe.start ? pe.start - Y : Y > pe.end ? Y - pe.end : 0;
        return (Y < de.start ? de.start - Y : Y > de.end ? Y - de.end : 0) < v ? de : pe;
      });
      h == null || h(Re.index);
    }
  }, Te = (y) => {
    y.key !== "Escape" || n === null || (y.preventDefault(), m(null));
  }, Q = () => {
    w.current = null, I.current = null, E(null), _(null), L(!1);
  };
  return /* @__PURE__ */ $.createElement(
    "section",
    {
      ref: g,
      className: se.root,
      "data-theme": f || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ $.createElement("div", { className: se.plot }, /* @__PURE__ */ $.createElement(Bt, null), /* @__PURE__ */ $.createElement(
      "div",
      {
        ref: u,
        className: se.track,
        "data-panning": N || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: Te,
        onPointerDown: et,
        onPointerMove: fe,
        onPointerUp: He,
        onPointerCancel: Q,
        onPointerLeave: () => {
          w.current === null && I.current === null && _(null);
        },
        onDoubleClick: (y) => {
          y.preventDefault(), m(null);
        },
        onContextMenu: (y) => {
          y.preventDefault();
        }
      },
      Ze && /* @__PURE__ */ $.createElement(
        Ht,
        {
          loading: J,
          onHover: () => {
            _(null);
          },
          onLoad: Pe
        }
      ),
      k !== null && k.recordIndex === null && p === null && /* @__PURE__ */ $.createElement(
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
      H !== null && /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(
        "div",
        {
          className: se.selection,
          "data-dragging": p === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${H.start * 100}%`,
            "--trajectory-selection-width": `${(H.end - H.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ $.createElement(
        "div",
        {
          className: se.selectionEdges,
          "data-dragging": p === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${H.start * 100}%`,
            "--trajectory-selection-width": `${(H.end - H.start) * 100}%`
          }
        }
      )),
      /* @__PURE__ */ $.createElement(
        "div",
        {
          className: se.turnBoundaries,
          "data-animate-viewport": le || void 0,
          "aria-hidden": "true",
          style: _e
        },
        o.turnBoundaries.filter(
          (y) => y.time > o.start && y.time >= q && y.time <= q + V
        ).map((y) => /* @__PURE__ */ $.createElement(
          "span",
          {
            className: se.turnBoundary,
            "data-turn": y.turn,
            key: y.turn,
            style: {
              "--trajectory-turn-left": `${(y.time - o.start) / X * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ $.createElement(
        "div",
        {
          className: se.lanes,
          "data-animate-viewport": le || void 0,
          "data-timeline-domain": !0,
          style: _e
        },
        o.spans.filter(
          (y) => y.index === a || y.end >= q && y.start <= q + V
        ).map((y) => {
          const T = (y.start - o.start) / X, j = (y.end - y.start) / X * 100, P = S.get(y.index), W = P == null ? void 0 : P.ttftMs, ee = P == null ? void 0 : P.decodingMs, U = W === void 0 || ee === void 0 || W + ee <= 0 ? null : W / (W + ee);
          return /* @__PURE__ */ $.createElement(
            ln,
            {
              key: y.index,
              label: Rs(y.kind, P),
              placement: "bottom"
            },
            /* @__PURE__ */ $.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: se.span,
                "data-timeline-span": y.kind,
                "data-timeline-record-index": y.index,
                "data-assistant-timing": U === null ? void 0 : "true",
                "data-error": y.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": y.index === a || void 0,
                "data-hovered": (k == null ? void 0 : k.recordIndex) === y.index || void 0,
                "data-search-match": i === null ? void 0 : i.has(y.index) ? "true" : "false",
                "data-selected": be === null ? void 0 : y.start <= be.end && y.end >= be.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${T * 100}%`,
                  "--trajectory-span-width": `${j}%`,
                  "--trajectory-span-gap": `min(${j * 0.08}%, 1px)`,
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
}), vt = window.QwenPaw.host, ae = vt.React, { Button: Ds, Input: js, Segmented: Ns, Tooltip: Wt } = vt.antd, { MenuFoldOutlined: Fs, MenuUnfoldOutlined: Ps, ReloadOutlined: Bs, SearchOutlined: Hs } = vt.antdIcons;
function Ws({
  mode: e,
  onModeChange: s,
  search: t,
  onSearchChange: n,
  onRefresh: l,
  modeOptions: r,
  allCollapsed: a,
  hasRequests: i,
  onToggleCollapseAll: m,
  callsCollapsed: c,
  onToggleCallsCollapsed: h
}) {
  const f = ue();
  return /* @__PURE__ */ ae.createElement(
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
    /* @__PURE__ */ ae.createElement(Wt, { title: b(f, "projectionHint") }, /* @__PURE__ */ ae.createElement(
      Ns,
      {
        size: "small",
        value: e,
        options: r,
        onChange: (o) => s(o)
      }
    )),
    /* @__PURE__ */ ae.createElement(
      js,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ ae.createElement(Hs, null),
        placeholder: b(f, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (o) => n(o.target.value)
      }
    ),
    i && /* @__PURE__ */ ae.createElement(
      Wt,
      {
        title: a ? b(f, "expandAll") : b(f, "collapseAll")
      },
      /* @__PURE__ */ ae.createElement(
        Ds,
        {
          size: "small",
          type: "text",
          icon: a ? /* @__PURE__ */ ae.createElement(Ps, null) : /* @__PURE__ */ ae.createElement(Fs, null),
          onClick: m
        }
      )
    ),
    /* @__PURE__ */ ae.createElement("span", { style: { marginLeft: "auto" } }, /* @__PURE__ */ ae.createElement(
      "a",
      {
        onClick: l,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ ae.createElement(Bs, null),
      " ",
      b(f, "refresh")
    ))
  );
}
const ze = window.QwenPaw.host, x = ze.React, { useCallback: ht, useEffect: Xe, useMemo: re, useRef: Us, useState: G } = x, {
  Button: De,
  Empty: Ge,
  Input: Vs,
  Popconfirm: Ks,
  Popover: Xs,
  Space: Gs,
  Spin: pt,
  Switch: Js,
  Tag: Ut,
  Tooltip: Vt,
  message: je
} = ze.antd, {
  CaretRightOutlined: qs,
  DeleteOutlined: Qs,
  DownloadOutlined: Ys,
  MenuFoldOutlined: Zs,
  MenuUnfoldOutlined: el,
  SearchOutlined: tl,
  SettingOutlined: nl
} = ze.antdIcons, { Text: he } = ze.antd.Typography;
function sl(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function ll(e) {
  if (!e) return "-";
  const s = new Date(e);
  return Number.isNaN(s.getTime()) ? e : s.toLocaleString();
}
function rl(e) {
  if (!e) return "-";
  const s = Date.parse(e);
  if (!Number.isFinite(s)) return e;
  const t = Date.now() - s;
  return t < 6e4 ? "刚刚" : t < 36e5 ? `${Math.floor(t / 6e4)} 分钟前` : t < 864e5 ? `${Math.floor(t / 36e5)} 小时前` : new Date(s).toLocaleString();
}
function rn(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function Kt(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const ol = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default"
};
function il(e) {
  return e || "unknown";
}
function al({
  groups: e,
  collapsedAgents: s,
  onToggleAgent: t,
  searching: n,
  selected: l,
  onSelect: r,
  locale: a
}) {
  const i = e.length > 1;
  return /* @__PURE__ */ x.createElement(x.Fragment, null, e.map(([m, c]) => {
    const h = i && !n && s.has(m);
    return /* @__PURE__ */ x.createElement("div", { key: m }, i && /* @__PURE__ */ x.createElement(
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
      /* @__PURE__ */ x.createElement(
        qs,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: h ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ x.createElement(he, { strong: !0, style: { fontSize: 12 } }, m),
      /* @__PURE__ */ x.createElement(he, { type: "secondary", style: { fontSize: 11 } }, c.length)
    ), !h && c.map((f) => {
      const o = f.session_id === l;
      return /* @__PURE__ */ x.createElement(
        "div",
        {
          key: f.session_id,
          onClick: () => r(f.session_id),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: o ? "rgba(22,119,255,0.10)" : "transparent",
            border: o ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ x.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ x.createElement(
            he,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${f.title ? `${f.title}
` : ""}${f.session_id}`
              }
            },
            f.title || f.agent_id || sl(f.session_id)
          ),
          i ? null : f.agent_id ? /* @__PURE__ */ x.createElement(
            Ut,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            f.agent_id
          ) : null,
          /* @__PURE__ */ x.createElement(
            Ut,
            {
              color: ol[f.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            il(f.status)
          )
        ),
        /* @__PURE__ */ x.createElement(
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
          /* @__PURE__ */ x.createElement("span", null, f.channel || "-"),
          /* @__PURE__ */ x.createElement("span", null, f.runs, " ", b(a, "runs")),
          /* @__PURE__ */ x.createElement("span", null, rn(f.total_tokens), " tok"),
          /* @__PURE__ */ x.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: ll(f.last_event_t)
            },
            rl(f.last_event_t)
          )
        )
      );
    }));
  }));
}
function cl({
  config: e,
  onChange: s,
  children: t
}) {
  const n = ue(), l = (a, i, m) => /* @__PURE__ */ x.createElement(
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
    /* @__PURE__ */ x.createElement(he, { style: { fontSize: 13 } }, a),
    /* @__PURE__ */ x.createElement(
      Js,
      {
        size: "small",
        checked: !!i,
        onChange: (c) => s({ [m]: c })
      }
    )
  ), r = /* @__PURE__ */ x.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ x.createElement(he, { strong: !0, style: { fontSize: 13 } }, b(n, "settings")), /* @__PURE__ */ x.createElement("div", { style: { marginTop: 8 } }, e ? [
    l(b(n, "enabled"), e.enabled, "enabled"),
    l(b(n, "captureLlm"), e.capture_llm, "capture_llm"),
    l(
      b(n, "captureTools"),
      e.capture_tools,
      "capture_tools"
    ),
    l(
      b(n, "captureHeaders"),
      e.capture_headers ?? !0,
      "capture_headers"
    )
  ] : /* @__PURE__ */ x.createElement(pt, { size: "small" })));
  return /* @__PURE__ */ x.createElement(Xs, { content: r, trigger: "click", placement: "bottomRight" }, t);
}
function ul() {
  const e = typeof ze.useLocale == "function" ? ze.useLocale() : void 0, s = re(
    () => Jt(e ?? ue()),
    [e]
  ), [t, n] = G(null), [l, r] = G(!1), [a, i] = G(
    /* @__PURE__ */ new Set()
  ), [m, c] = G(!1), [h, f] = G(!1), [o, S] = G(null), [w, I] = G(null), [g, u] = G(!1), [p, E] = G(!1), [k, _] = G(""), [J, z] = G(""), [N, L] = G("sequence"), [A, F] = G(null), [le, K] = G(null), [X, ve] = G(null), [Fe, V] = G(
    /* @__PURE__ */ new Set()
  ), [q, Ze] = G(!1), [Pe, _e] = G(null), [Ee, Be] = G(null), [H, be] = G(null), [Ae, me] = G(null), we = Us(null);
  we.current = o;
  const Se = ht(async () => {
    try {
      const v = await Tt({ limit: 100, offset: 0 });
      n(v.sessions), r(v.has_more), me(null);
    } catch (v) {
      me(String(v.message));
    }
  }, []), et = ht(async () => {
    f(!0);
    try {
      const v = await Tt({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      n((M) => {
        const R = M ?? [];
        return [
          ...R,
          ...v.sessions.filter(
            (ge) => !R.some((tt) => tt.session_id === ge.session_id)
          )
        ];
      }), r(v.has_more);
    } catch (v) {
      me(String(v.message));
    } finally {
      f(!1);
    }
  }, [t]), fe = ht(
    async (v, M) => {
      M || u(!0);
      try {
        const R = await un(v, {
          beforeSeq: M,
          limit: 200
        });
        me(null), I((ge) => M && ge ? {
          ...R,
          events: [...R.events, ...ge.events]
        } : R);
      } catch (R) {
        me(String(R.message));
      } finally {
        M || u(!1);
      }
    },
    []
  );
  Xe(() => {
    Se(), dn().then(_e).catch(() => _e(null));
    try {
      const v = new URLSearchParams(window.location.search).get("session");
      v && S(v);
    } catch {
    }
  }, [Se]), Xe(() => {
    const v = setInterval(() => {
      document.visibilityState === "visible" && Se();
    }, 15e3);
    return () => clearInterval(v);
  }, [Se]), Xe(() => {
    o ? (F(null), K(null), ve(null), V(/* @__PURE__ */ new Set()), z(""), fe(o), cn(o).then((v) => {
      be(v), Be({
        sessionId: o,
        inputTokens: v.input_tokens,
        outputTokens: v.output_tokens,
        totalTokens: v.total_tokens
      });
    }).catch(() => {
      be(null), Be(null);
    })) : (I(null), be(null), Be(null));
  }, [o, fe]);
  const He = re(
    () => w ? vs(w.events) : [],
    [w]
  ), { initial: Te, turns: Q } = re(
    () => Es(He),
    [He]
  ), y = re(
    () => Te ? [Te, ...Dt(Q)] : Dt(Q),
    [Te, Q]
  ), T = re(
    () => Q.some((v) => v.status === "running"),
    [Q]
  );
  Xe(() => {
    if (!o || !T) return;
    const v = setInterval(() => {
      document.visibilityState === "visible" && we.current && fe(we.current);
    }, 5e3);
    return () => clearInterval(v);
  }, [o, T, fe]);
  const D = re(
    () => A === null ? null : ks(Q, A, N),
    [A, Q, N]
  ), j = re(() => {
    const v = J.trim().toLowerCase();
    return v ? new Set(
      y.filter(
        (M) => [
          M.text,
          M.outputText,
          M.thinkingText,
          M.toolName,
          M.toolInput,
          M.toolOutput,
          M.model
        ].filter(Boolean).join(`
`).toLowerCase().includes(v)
      ).map((M) => M.index)
    ) : null;
  }, [J, y]), P = re(
    () => le === null ? null : y.find((v) => v.index === le) ?? null,
    [y, le]
  ), W = re(() => {
    var kt, _t;
    if (X === null) return null;
    const v = Q.find((B) => B.turn === X);
    if (!v) return null;
    const M = ((kt = v.groups[0]) == null ? void 0 : kt.cells) ?? [], R = M.filter((B) => B.kind === "message"), ge = M.filter((B) => B.kind === "tool"), tt = [
      ...new Set(
        R.map((B) => B.model).filter((B) => !!B)
      )
    ];
    let Et = 0, St = 0, xt = 0, bt = 0, We = null, nt = 0;
    const wt = [];
    for (const B of M)
      B.usage && (Et += B.usage.input_tokens ?? 0, St += B.usage.output_tokens ?? 0, xt += B.usage.cache_input_tokens ?? 0, bt += B.usage.cache_creation_input_tokens ?? 0), B.timing && (We = We === null ? B.timing.ttft_ms : Math.min(We, B.timing.ttft_ms), nt = (nt ?? 0) + B.timing.decode_ms), B.isError && wt.push(B.toolError ?? B.text ?? "error");
    const Me = M.find((B) => B.kind === "user"), on = (_t = [...R].reverse().find((B) => B.options)) == null ? void 0 : _t.options;
    return {
      turn: X,
      status: v.status,
      durationMs: v.durationMs,
      startedAt: (Me == null ? void 0 : Me.startedAt) ?? null,
      query: (Me == null ? void 0 : Me.text) ?? "",
      llmCalls: R.length,
      toolCalls: ge.length,
      models: tt,
      inputTokens: Et,
      outputTokens: St,
      cacheReadTokens: xt,
      cacheWriteTokens: bt,
      ttftMs: We,
      decodeMs: nt,
      errors: wt,
      options: on,
      sessionTotals: Ee && Ee.sessionId === o ? {
        inputTokens: Ee.inputTokens,
        outputTokens: Ee.outputTokens,
        totalTokens: Ee.totalTokens
      } : void 0
    };
  }, [X, Q, Ee, o]), ee = !!(w && w.events.length > 0 && w.events[0].seq > 1), U = re(
    () => (t == null ? void 0 : t.find((v) => v.session_id === o)) ?? null,
    [t, o]
  ), te = re(() => {
    if (!t) return [];
    const v = k.trim().toLowerCase();
    return v ? t.filter(
      (M) => [M.session_id, M.title ?? "", M.agent_id, M.channel].join(" ").toLowerCase().includes(v)
    ) : t;
  }, [t, k]), Y = re(() => {
    const v = /* @__PURE__ */ new Map();
    for (const M of te) {
      const R = M.agent_id || "(unknown)", ge = v.get(R);
      ge ? ge.push(M) : v.set(R, [M]);
    }
    return [...v.entries()];
  }, [te]), Re = async (v) => {
    try {
      _e(await hn(v));
    } catch (M) {
      je.error(String(M.message));
    }
  }, pe = re(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), de = re(() => {
    if (!H) return null;
    const v = [
      `${H.runs} ${b(s, "statRounds")} · ${H.llm_calls} ${b(s, "statSteps")}`,
      `LLM ${oe(H.llm_ms_total / 1e3)} · ${b(
        s,
        "toolCalls"
      )} ${oe(H.tool_ms_total / 1e3)}`,
      `${b(s, "statTtftAvg")} ${H.ttft_ms_avg === null ? "-" : oe(H.ttft_ms_avg / 1e3)} · ${gt(
        H.output_tokens,
        H.decode_ms_total / 1e3
      )}`
    ];
    if (H.cache_read_tokens > 0 || H.cache_write_tokens > 0) {
      const M = H.cache_read_tokens + H.input_tokens, R = M > 0 ? Math.round(H.cache_read_tokens / M * 100) : 0;
      v.push(`${b(s, "statCacheHit")} ${R}%`);
    }
    return v.push(
      `${b(s, "statInput")} ${ce(
        H.input_tokens
      )} tok · ${b(s, "statOutput")} ${ce(
        H.output_tokens
      )} tok`
    ), U && v.push(Kt(U.size_bytes)), v.join(" | ");
  }, [H, U, s]);
  return /* @__PURE__ */ x.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, m ? /* @__PURE__ */ x.createElement(
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
    /* @__PURE__ */ x.createElement(Vt, { title: b(s, "expandSidebar"), placement: "right" }, /* @__PURE__ */ x.createElement(
      De,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ x.createElement(el, null),
        onClick: () => c(!1)
      }
    ))
  ) : /* @__PURE__ */ x.createElement(
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
    /* @__PURE__ */ x.createElement(
      "div",
      {
        style: {
          padding: "12px 12px 8px",
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      },
      /* @__PURE__ */ x.createElement(
        Vs,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ x.createElement(tl, null),
          placeholder: b(s, "searchPlaceholder"),
          value: k,
          style: { flex: 1, minWidth: 0 },
          onChange: (v) => _(v.target.value)
        }
      ),
      /* @__PURE__ */ x.createElement(Vt, { title: b(s, "collapseSidebar") }, /* @__PURE__ */ x.createElement(
        De,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ x.createElement(Zs, null),
          onClick: () => c(!0)
        }
      ))
    ),
    /* @__PURE__ */ x.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ x.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ x.createElement(pt, null)) : te.length === 0 ? /* @__PURE__ */ x.createElement(
      Ge,
      {
        image: Ge.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ x.createElement("span", { style: { fontSize: 12 } }, b(s, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ x.createElement(
        he,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        b(s, "noSessionsHint")
      )
    ) : /* @__PURE__ */ x.createElement(
      al,
      {
        groups: Y,
        collapsedAgents: a,
        onToggleAgent: (v) => {
          i((M) => {
            const R = new Set(M);
            return R.has(v) ? R.delete(v) : R.add(v), R;
          });
        },
        searching: !!k.trim(),
        selected: o,
        onSelect: S,
        locale: s
      }
    ), t !== null && l && !k.trim() && /* @__PURE__ */ x.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ x.createElement(
      "a",
      {
        onClick: () => void et(),
        style: { fontSize: 12 }
      },
      h ? "…" : `⋯ ${b(s, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ x.createElement(
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
    /* @__PURE__ */ x.createElement(
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
      de ? /* @__PURE__ */ x.createElement(he, { type: "secondary", style: { fontSize: 12 } }, de) : U ? (
        // Transient line while the stats endpoint responds.
        /* @__PURE__ */ x.createElement(he, { type: "secondary", style: { fontSize: 12 } }, `${U.runs} ${b(s, "statRounds")} · ${U.llm_calls} ${b(s, "statSteps")} · ${rn(
          U.total_tokens
        )} ${b(s, "tokens")} · ${Kt(
          U.size_bytes
        )}`)
      ) : /* @__PURE__ */ x.createElement(he, { type: "secondary", style: { fontSize: 13 } }, b(s, "selectSession")),
      /* @__PURE__ */ x.createElement("div", { style: { marginLeft: "auto" } }, /* @__PURE__ */ x.createElement(Gs, null, /* @__PURE__ */ x.createElement(cl, { config: Pe, onChange: Re }, /* @__PURE__ */ x.createElement(De, { size: "small", icon: /* @__PURE__ */ x.createElement(nl, null) })), o && /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(
        De,
        {
          size: "small",
          icon: /* @__PURE__ */ x.createElement(Ys, null),
          onClick: () => {
            mn(o).then(() => je.success(b(s, "exported"))).catch(
              (v) => je.error(String(v.message))
            );
          }
        },
        b(s, "export")
      ), /* @__PURE__ */ x.createElement(
        Ks,
        {
          title: b(s, "deleteConfirm"),
          onConfirm: () => {
            fn(o).then(() => {
              je.success(b(s, "deleted")), S(null), Se();
            }).catch(
              (v) => je.error(String(v.message))
            );
          }
        },
        /* @__PURE__ */ x.createElement(De, { size: "small", danger: !0, icon: /* @__PURE__ */ x.createElement(Qs, null) }, b(s, "delete"))
      ))))
    ),
    Ae && /* @__PURE__ */ x.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ x.createElement(he, { type: "danger", style: { fontSize: 12 } }, `${b(s, "loadFailed")}: ${Ae}`)),
    /* @__PURE__ */ x.createElement(
      Ws,
      {
        mode: N,
        onModeChange: L,
        search: J,
        onSearchChange: z,
        onRefresh: () => {
          Se(), o && fe(o);
        },
        modeOptions: pe,
        allCollapsed: Q.length > 0 && Q.every((v) => Fe.has(v.turn ?? -1)),
        hasRequests: Q.some((v) => v.turn !== null),
        callsCollapsed: q,
        onToggleCallsCollapsed: () => Ze((v) => !v),
        onToggleCollapseAll: () => {
          V((v) => Q.some(
            (R) => R.turn !== null && !v.has(R.turn)
          ) ? new Set(
            Q.map((R) => R.turn).filter((R) => R !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ x.createElement(
      Ls,
      {
        turns: Q,
        mode: N,
        range: A,
        hasEarlierRecords: ee,
        onLoadEarlier: async () => {
          var v;
          return !w || w.events.length === 0 ? !1 : (await fe(o, (v = w.events[0]) == null ? void 0 : v.seq), !0);
        },
        selectedIndex: le,
        searchMatchIndexes: j,
        onRangeChange: F,
        onRecordSelect: K,
        onRecordFocus: K
      }
    ),
    g && !w ? /* @__PURE__ */ x.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ x.createElement(pt, null)) : w ? /* @__PURE__ */ x.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ x.createElement(
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
      /* @__PURE__ */ x.createElement(
        gs,
        {
          turns: Q,
          selectedIndex: le,
          selectedTurn: X,
          collapsedTurns: Fe,
          focusIndexes: D,
          searchMatchIndexes: j,
          onSelectedIndexChange: (v) => {
            if (v === le) {
              K(null);
              return;
            }
            K(v), ve(null);
          },
          onSelectedTurnChange: (v) => {
            ve(v), K(null);
          },
          callsCollapsed: q,
          onToggleTurn: (v) => {
            V((M) => {
              const R = new Set(M);
              return R.has(v) ? R.delete(v) : R.add(v), R;
            });
          },
          hasOlderRecords: ee,
          loadingOlder: p,
          onLoadOlder: () => {
            var v;
            !w || w.events.length === 0 || (E(!0), fe(
              o,
              (v = w.events[0]) == null ? void 0 : v.seq
            ).finally(() => E(!1)));
          },
          emptyText: b(s, "noSessions"),
          initialRecord: Te
        }
      )
    ), (P !== null || W !== null) && /* @__PURE__ */ x.createElement(
      An,
      {
        record: P,
        request: W,
        onJumpSession: S,
        onSelectTurn: (v) => {
          ve(v), K(null);
        },
        onClose: () => {
          K(null), ve(null);
        }
      }
    )) : /* @__PURE__ */ x.createElement(
      Ge,
      {
        image: Ge.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: b(s, "selectSession")
      }
    )
  ));
}
var Xt, Gt;
(Gt = (Xt = window.QwenPaw).registerRoutes) == null || Gt.call(Xt, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: ul,
    label: b(ue(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
