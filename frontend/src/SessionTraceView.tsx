/**
 * Session detail view shared by the full trace page and the docked
 * chat panel: header (identity + stats strip) → toolbar → 3-lane
 * timeline → ledger (+ inspector side pane or drawer in panel mode).
 */

import type * as ReactNS from "react";

import { resolveLocale, storedLocale, t, type TraceLocale } from "./locale";
import {
  ApiError,
  deleteSessionRemote,
  exportSessionFile,
  fetchConfig,
  fetchSessionEvents,
  fetchSessionStats,
  updateConfig,
  type SessionDetail,
  type SessionStats,
  type SessionSummary,
  type TraceConfigUi,
} from "./traceApi";
import { Inspector } from "./trajectory/Inspector";
import type { RequestSummary } from "./trajectory/Inspector";
import { Ledger } from "./trajectory/Ledger";
import {
  formatSeconds,
  formatThroughput,
  formatTokens,
} from "./trajectory/records";
import {
  buildTurns,
  splitInitialHeader,
  turnRecords,
} from "./trajectory/model";
import { TimelineBar } from "./trajectory/TimelineBar";
import {
  trajectoryTimelineFocusIndexes,
  type TrajectoryTimeRange,
  type TrajectoryTimelineMode,
} from "./trajectory/timeline";
import { Toolbar } from "./trajectory/Toolbar";
import {
  formatBytes,
  formatCount,
  shortId,
  statusText,
  STATUS_COLORS,
} from "./uiShared";

const host = window.QwenPaw.host;
const React: typeof ReactNS = host.React;
const { useCallback, useEffect, useMemo, useRef, useState } = React;
const {
  Button,
  Empty,
  Popconfirm,
  Popover,
  Space,
  Spin,
  Switch,
  Tag,
  Tooltip,
  message,
} = host.antd;
const { DeleteOutlined, DownloadOutlined, SettingOutlined } = host.antdIcons;
const { Text } = host.antd.Typography;

function SettingsPopover({
  config,
  onChange,
  children,
}: {
  config: TraceConfigUi | null;
  onChange: (patch: Partial<TraceConfigUi>) => void;
  children: ReactNS.ReactNode;
}) {
  const locale = storedLocale();
  const row = (label: string, checked: boolean | undefined, key: string) => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
        padding: "4px 0",
      }}
    >
      <Text style={{ fontSize: 13 }}>{label}</Text>
      <Switch
        size="small"
        checked={Boolean(checked)}
        onChange={(next: boolean) =>
          onChange({ [key]: next } as Partial<TraceConfigUi>)
        }
      />
    </div>
  );
  const content = (
    <div style={{ width: 220 }}>
      <Text strong style={{ fontSize: 13 }}>
        {t(locale, "settings")}
      </Text>
      <div style={{ marginTop: 8 }}>
        {config ? (
          [
            row(t(locale, "enabled"), config.enabled, "enabled"),
            row(t(locale, "captureLlm"), config.capture_llm, "capture_llm"),
            row(
              t(locale, "captureTools"),
              config.capture_tools,
              "capture_tools",
            ),
            row(
              t(locale, "captureHeaders"),
              (config.capture_headers as boolean | undefined) ?? true,
              "capture_headers",
            ),
          ]
        ) : (
          <Spin size="small" />
        )}
      </div>
    </div>
  );
  return (
    <Popover content={content} trigger="click" placement="bottomRight">
      {children}
    </Popover>
  );
}

export interface SessionTraceViewProps {
  /** Backend session id whose trace should be shown (null → empty state). */
  sessionId: string | null;
  /** Optional list metadata for the header (title/status/channel/size). */
  summary?: SessionSummary | null;
  locale: TraceLocale;
  /** Sub-agent lineage jump target (inspector). */
  onJumpSession: (sessionId: string) => void;
  /** Called on toolbar refresh so the parent can reload its session list. */
  onRefreshSessions?: () => void;
}

/**
 * The per-session trajectory view. Owns all detail state (events,
 * stats, selection); parents only supply which session to show.
 */
export function SessionTraceView({
  sessionId,
  summary,
  locale,
  onJumpSession,
  onRefreshSessions,
}: SessionTraceViewProps) {
  const [detail, setDetail] = useState<SessionDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [loadingOlder, setLoadingOlder] = useState(false);
  const [eventSearch, setEventSearch] = useState("");
  const [mode, setMode] = useState<TrajectoryTimelineMode>("sequence");
  const [range, setRange] = useState<TrajectoryTimeRange | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedTurn, setSelectedTurn] = useState<number | null>(null);
  const [collapsedTurns, setCollapsedTurns] = useState<ReadonlySet<number>>(
    new Set(),
  );
  const [callsCollapsed, setCallsCollapsed] = useState(false);
  const [config, setConfig] = useState<TraceConfigUi | null>(null);
  const [sessionTotals, setSessionTotals] = useState<{
    sessionId: string;
    inputTokens: number;
    outputTokens: number;
    totalTokens: number;
    reasoningTokens: number;
  } | null>(null);
  const [sessionStats, setSessionStats] = useState<SessionStats | null>(null);
  const [error, setError] = useState<{
    message: string;
    status: number | null;
  } | null>(null);
  const sessionIdRef = useRef<string | null>(null);
  sessionIdRef.current = sessionId;

  useEffect(() => {
    void fetchConfig()
      .then(setConfig)
      .catch(() => setConfig(null));
  }, []);

  const loadDetail = useCallback(async (target: string, beforeSeq?: number) => {
    if (!beforeSeq) setDetailLoading(true);
    try {
      const body = await fetchSessionEvents(target, {
        beforeSeq,
        limit: 200,
      });
      setError(null);
      setDetail((prev) => {
        if (beforeSeq && prev) {
          return {
            ...body,
            events: [...body.events, ...prev.events],
          };
        }
        return body;
      });
    } catch (exc) {
      setError({
        message: String((exc as Error).message),
        status: exc instanceof ApiError ? exc.status : null,
      });
    } finally {
      if (!beforeSeq) setDetailLoading(false);
    }
  }, []);

  const loadStats = useCallback(async (target: string) => {
    try {
      const stats = await fetchSessionStats(target);
      setSessionStats(stats);
      setSessionTotals({
        sessionId: target,
        inputTokens: stats.input_tokens,
        outputTokens: stats.output_tokens,
        totalTokens: stats.total_tokens,
        reasoningTokens: Number(stats.reasoning_tokens ?? 0),
      });
    } catch {
      setSessionStats(null);
      setSessionTotals(null);
    }
  }, []);

  useEffect(() => {
    if (sessionId) {
      setRange(null);
      setSelectedIndex(null);
      setSelectedTurn(null);
      setCollapsedTurns(new Set());
      setEventSearch("");
      void loadDetail(sessionId);
      void loadStats(sessionId);
    } else {
      setDetail(null);
      setSessionStats(null);
      setSessionTotals(null);
    }
  }, [sessionId, loadDetail, loadStats]);

  const allTurns = useMemo(
    () => (detail ? buildTurns(detail.events) : []),
    [detail],
  );
  // dsh convention: the initial system prompt sits above the ledger.
  const { initial: initialHeader, turns } = useMemo(
    () => splitInitialHeader(allTurns),
    [allTurns],
  );
  const records = useMemo(
    () =>
      initialHeader
        ? [initialHeader, ...turnRecords(turns)]
        : turnRecords(turns),
    [initialHeader, turns],
  );

  const hasOpenRun = useMemo(
    () => turns.some((turn) => turn.status === "running"),
    [turns],
  );

  // Live-poll while a run is in flight so the ledger stays current.
  useEffect(() => {
    if (!sessionId || !hasOpenRun) return undefined;
    const timer = setInterval(() => {
      if (document.visibilityState === "visible" && sessionIdRef.current) {
        void loadDetail(sessionIdRef.current);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [sessionId, hasOpenRun, loadDetail]);

  const focusIndexes = useMemo(
    () =>
      range === null
        ? null
        : trajectoryTimelineFocusIndexes(turns, range, mode),
    [range, turns, mode],
  );

  const searchMatchIndexes = useMemo(() => {
    const needle = eventSearch.trim().toLowerCase();
    if (!needle) return null;
    return new Set(
      records
        .filter((record) =>
          [
            record.text,
            record.outputText,
            record.thinkingText,
            record.toolName,
            record.toolInput,
            record.toolOutput,
            record.model,
          ]
            .filter(Boolean)
            .join("\n")
            .toLowerCase()
            .includes(needle),
        )
        .map((record) => record.index),
    );
  }, [eventSearch, records]);

  const selectedRecord = useMemo(
    () =>
      selectedIndex === null
        ? null
        : records.find((record) => record.index === selectedIndex) ?? null,
    [records, selectedIndex],
  );

  const requestSummary = useMemo<RequestSummary | null>(() => {
    if (selectedTurn === null) return null;
    const turn = turns.find((item) => item.turn === selectedTurn);
    if (!turn) return null;
    const cells = turn.groups[0]?.cells ?? [];
    const llmCells = cells.filter((cell) => cell.kind === "message");
    const toolCells = cells.filter((cell) => cell.kind === "tool");
    const models = [
      ...new Set(
        llmCells
          .map((cell) => cell.model)
          .filter((model): model is string => Boolean(model)),
      ),
    ];
    const providers = [
      ...new Set(
        llmCells
          .map((cell) => cell.provider)
          .filter((provider): provider is string => Boolean(provider)),
      ),
    ];
    let inputTokens = 0;
    let outputTokens = 0;
    let cacheReadTokens = 0;
    let cacheWriteTokens = 0;
    let reasoningTokens = 0;
    let ttftMs: number | null = null;
    let decodeMs: number | null = 0;
    const errors: string[] = [];
    for (const cell of cells) {
      if (cell.usage) {
        inputTokens += cell.usage.input_tokens ?? 0;
        outputTokens += cell.usage.output_tokens ?? 0;
        cacheReadTokens += cell.usage.cache_input_tokens ?? 0;
        cacheWriteTokens += cell.usage.cache_creation_input_tokens ?? 0;
        reasoningTokens += cell.usage.reasoning_tokens ?? 0;
      }
      if (cell.timing) {
        ttftMs =
          ttftMs === null
            ? cell.timing.ttft_ms
            : Math.min(ttftMs, cell.timing.ttft_ms);
        decodeMs = (decodeMs ?? 0) + cell.timing.decode_ms;
      }
      if (cell.isError) {
        errors.push(cell.toolError ?? cell.text ?? "error");
      }
    }
    const userCell = cells.find((cell) => cell.kind === "user");
    const lastOptions = [...llmCells].reverse().find((cell) => cell.options)
      ?.options;
    const lastMessage = [...llmCells].reverse().find((cell) => cell.outputText);
    return {
      turn: selectedTurn,
      status: turn.status,
      durationMs: turn.durationMs,
      startedAt: userCell?.startedAt ?? null,
      query: userCell?.text ?? "",
      llmCalls: llmCells.length,
      toolCalls: toolCells.length,
      models,
      providers,
      inputTokens,
      outputTokens,
      cacheReadTokens,
      cacheWriteTokens,
      reasoningTokens,
      resultIndex: lastMessage?.index,
      ttftMs,
      decodeMs,
      errors,
      options: lastOptions,
      sessionTotals:
        sessionTotals && sessionTotals.sessionId === sessionId
          ? {
              inputTokens: sessionTotals.inputTokens,
              outputTokens: sessionTotals.outputTokens,
              totalTokens: sessionTotals.totalTokens,
              reasoningTokens: sessionTotals.reasoningTokens,
            }
          : undefined,
    };
  }, [selectedTurn, turns, sessionTotals, sessionId]);

  const hasOlder = Boolean(
    detail && detail.events.length > 0 && detail.events[0].seq > 1,
  );

  const applyConfig = async (patch: Partial<TraceConfigUi>) => {
    try {
      setConfig(await updateConfig(patch));
    } catch (exc) {
      void message.error(String((exc as Error).message));
    }
  };

  // Projection mode labels stay in English (Sequence/Duration/Time/Actual)
  // per product preference — the Chinese translations read awkwardly.
  const modeOptions = useMemo(
    () => [
      { label: "Sequence", value: "sequence" as const },
      { label: "Duration", value: "duration" as const },
      { label: "Time", value: "time" as const },
      { label: "Actual", value: "actual" as const },
    ],
    [],
  );

  // dsh-style session stats strip: rounds · steps | LLM/tool wall time |
  // avg TTFT · throughput | cache hit % | input/output tokens.
  const statsStrip = useMemo(() => {
    if (!sessionStats) return null;
    const parts: string[] = [
      `${sessionStats.runs} ${t(locale, "statRounds")} · ${
        sessionStats.llm_calls
      } ${t(locale, "statSteps")}`,
      `LLM ${formatSeconds(sessionStats.llm_ms_total / 1000)} · ${t(
        locale,
        "toolCalls",
      )} ${formatSeconds(sessionStats.tool_ms_total / 1000)}`,
      `${t(locale, "statTtftAvg")} ${
        sessionStats.ttft_ms_avg === null
          ? "-"
          : formatSeconds(sessionStats.ttft_ms_avg / 1000)
      } · ${formatThroughput(
        sessionStats.output_tokens,
        sessionStats.decode_ms_total / 1000,
      )}`,
    ];
    if (
      sessionStats.cache_read_tokens > 0 ||
      sessionStats.cache_write_tokens > 0
    ) {
      const cacheBase =
        sessionStats.cache_read_tokens + sessionStats.input_tokens;
      const hit =
        cacheBase > 0
          ? Math.round((sessionStats.cache_read_tokens / cacheBase) * 100)
          : 0;
      parts.push(`${t(locale, "statCacheHit")} ${hit}%`);
    }
    parts.push(
      `${t(locale, "statInput")} ${formatTokens(
        sessionStats.input_tokens,
      )} tok · ${t(locale, "statOutput")} ${formatTokens(
        sessionStats.output_tokens,
      )} tok`,
    );
    if (summary) {
      parts.push(formatBytes(summary.size_bytes));
    }
    return parts.join(" | ");
  }, [sessionStats, summary, locale]);

  const closeInspector = () => {
    setSelectedIndex(null);
    setSelectedTurn(null);
  };

  // A deep link to a session without trace data yet (e.g. a brand-new
  // chat) is not an error — the API answers 404; render a friendly
  // empty state instead.
  const isNotFoundError = error?.status === 404;

  const showInspector = selectedRecord !== null || requestSummary !== null;

  return (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
      }}
    >
      <div
        style={{
          padding: "8px 12px",
          borderBottom: "1px solid rgba(128,128,128,0.15)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        {sessionId ? (
          <>
            {/* Row 1: session identity + actions */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                minWidth: 0,
              }}
            >
              <Text
                strong
                ellipsis={{
                  tooltip: summary?.title || sessionId,
                }}
                style={{ fontSize: 13, flex: "0 1 auto", minWidth: 60 }}
              >
                {summary?.title || summary?.agent_id || shortId(sessionId)}
              </Text>
              <Tag
                color={STATUS_COLORS[summary?.status ?? ""] ?? "default"}
                style={{ marginInlineEnd: 0, flexShrink: 0 }}
              >
                {statusText(summary?.status ?? "unknown")}
              </Tag>
              {summary?.channel ? (
                <Text type="secondary" style={{ fontSize: 11, flexShrink: 0 }}>
                  {summary.channel}
                </Text>
              ) : null}
              <div style={{ marginLeft: "auto", flexShrink: 0 }}>
                <Space>
                  <SettingsPopover config={config} onChange={applyConfig}>
                    <Button size="small" icon={<SettingOutlined />} />
                  </SettingsPopover>
                  <Tooltip title={t(locale, "export")}>
                    <Button
                      size="small"
                      icon={<DownloadOutlined />}
                      onClick={() => {
                        void exportSessionFile(sessionId)
                          .then(() => message.success(t(locale, "exported")))
                          .catch((exc: Error) =>
                            message.error(String(exc.message)),
                          );
                      }}
                    >
                      {t(locale, "export")}
                    </Button>
                  </Tooltip>
                  <Popconfirm
                    title={t(locale, "deleteConfirm")}
                    onConfirm={() => {
                      void deleteSessionRemote(sessionId)
                        .then(() => {
                          message.success(t(locale, "deleted"));
                          onRefreshSessions?.();
                        })
                        .catch((exc: Error) =>
                          message.error(String(exc.message)),
                        );
                    }}
                  >
                    <Button size="small" danger icon={<DeleteOutlined />}>
                      {t(locale, "delete")}
                    </Button>
                  </Popconfirm>
                </Space>
              </div>
            </div>
            {/* Row 2: stats strip (+ copyable session id on the page) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <Text
                type="secondary"
                style={{ fontSize: 11, flex: "1 1 300px", minWidth: 0 }}
              >
                {statsStrip ??
                  // Transient line while the stats endpoint responds.
                  (summary
                    ? `${summary.runs} ${t(locale, "statRounds")} · ${
                        summary.llm_calls
                      } ${t(locale, "statSteps")} · ${formatCount(
                        summary.total_tokens,
                      )} ${t(locale, "tokens")} · ${formatBytes(
                        summary.size_bytes,
                      )}`
                    : "")}
              </Text>
              <Text
                type="secondary"
                copyable={{
                  text: sessionId,
                  tooltips: [
                    t(locale, "copySessionId"),
                    t(locale, "copiedSessionId"),
                  ],
                }}
                style={{
                  fontSize: 11,
                  marginLeft: "auto",
                  flexShrink: 0,
                }}
              >
                {sessionId}
              </Text>
            </div>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Text type="secondary" style={{ fontSize: 13 }}>
              {t(locale, "selectSession")}
            </Text>
            {/* Capture settings are global — keep the entry visible
                even when no session is selected. */}
            <div style={{ marginLeft: "auto", flexShrink: 0 }}>
              <SettingsPopover config={config} onChange={applyConfig}>
                <Button size="small" icon={<SettingOutlined />} />
              </SettingsPopover>
            </div>
          </div>
        )}
      </div>
      {error && !isNotFoundError && (
        <div style={{ padding: "2px 12px" }}>
          <Text type="danger" style={{ fontSize: 12 }}>
            {`${t(locale, "loadFailed")}: ${error.message}`}
          </Text>
        </div>
      )}
      <Toolbar
        mode={mode}
        onModeChange={setMode}
        search={eventSearch}
        onSearchChange={setEventSearch}
        onRefresh={() => {
          if (sessionId) {
            void loadDetail(sessionId);
            void loadStats(sessionId);
          }
          onRefreshSessions?.();
        }}
        modeOptions={modeOptions}
        allCollapsed={
          turns.length > 0 &&
          turns.every((turn) => collapsedTurns.has(turn.turn ?? -1))
        }
        hasRequests={turns.some((turn) => turn.turn !== null)}
        callsCollapsed={callsCollapsed}
        onToggleCallsCollapsed={() => setCallsCollapsed((prev) => !prev)}
        onToggleCollapseAll={() => {
          setCollapsedTurns((prev) => {
            const anyOpen = turns.some(
              (turn) => turn.turn !== null && !prev.has(turn.turn),
            );
            if (!anyOpen) return new Set();
            return new Set(
              turns
                .map((turn) => turn.turn)
                .filter((turn): turn is number => turn !== null),
            );
          });
        }}
      />
      <TimelineBar
        turns={turns}
        mode={mode}
        range={range}
        hasEarlierRecords={hasOlder}
        onLoadEarlier={async () => {
          if (!detail || detail.events.length === 0) return false;
          await loadDetail(sessionId as string, detail.events[0]?.seq);
          return true;
        }}
        selectedIndex={selectedIndex}
        searchMatchIndexes={searchMatchIndexes}
        onRangeChange={setRange}
        onRecordSelect={setSelectedIndex}
        onRecordFocus={setSelectedIndex}
      />
      {detailLoading && !detail ? (
        <div style={{ textAlign: "center", paddingTop: 64 }}>
          <Spin />
        </div>
      ) : !detail ? (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          style={{ paddingTop: 64 }}
          description={
            isNotFoundError && sessionId
              ? t(locale, "noTraceForSession")
              : t(locale, "selectSession")
          }
        />
      ) : (
        <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
          <div
            style={{
              flex: 1,
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
            }}
          >
            <Ledger
              turns={turns}
              selectedIndex={selectedIndex}
              selectedTurn={selectedTurn}
              collapsedTurns={collapsedTurns}
              focusIndexes={focusIndexes}
              searchMatchIndexes={searchMatchIndexes}
              onSelectedIndexChange={(index: number) => {
                if (index === selectedIndex) {
                  setSelectedIndex(null);
                  return;
                }
                setSelectedIndex(index);
                setSelectedTurn(null);
              }}
              onSelectedTurnChange={(turn: number) => {
                setSelectedTurn(turn);
                setSelectedIndex(null);
              }}
              callsCollapsed={callsCollapsed}
              onToggleTurn={(turn: number) => {
                setCollapsedTurns((prev) => {
                  const next = new Set(prev);
                  if (next.has(turn)) next.delete(turn);
                  else next.add(turn);
                  return next;
                });
              }}
              hasOlderRecords={hasOlder}
              loadingOlder={loadingOlder}
              onLoadOlder={() => {
                if (!detail || detail.events.length === 0) return;
                setLoadingOlder(true);
                void loadDetail(
                  sessionId as string,
                  detail.events[0]?.seq,
                ).finally(() => setLoadingOlder(false));
              }}
              emptyText={t(locale, "noSessions")}
              initialRecord={initialHeader}
            />
          </div>
          {showInspector ? (
            <Inspector
              record={selectedRecord}
              request={requestSummary}
              onJumpSession={onJumpSession}
              onSelectTurn={(turn: number) => {
                setSelectedTurn(turn);
                setSelectedIndex(null);
              }}
              onClose={closeInspector}
            />
          ) : null}
        </div>
      )}
    </div>
  );
}
