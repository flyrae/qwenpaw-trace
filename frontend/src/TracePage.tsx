/**
 * Trace page: session list on the left; on the right a dsh-style
 * trajectory view (toolbar → 3-lane timeline → ledger + inspector)
 * provided by the shared SessionTraceView.
 */

import type * as ReactNS from "react";

import { resolveLocale, storedLocale, t } from "./locale";
import {
  fetchSessionsPage,
  resolveTraceSessionId,
  type SessionSummary,
} from "./traceApi";
import { SessionTraceView } from "./SessionTraceView";
import {
  formatCount,
  formatRelative,
  formatTime,
  shortId,
  statusText,
  STATUS_COLORS,
} from "./uiShared";

const host = window.QwenPaw.host;
const React: typeof ReactNS = host.React;
const { useCallback, useEffect, useMemo, useState } = React;
const { Button, Empty, Input, Spin, Tag, Tooltip } = host.antd;
const {
  CaretRightOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
} = host.antdIcons;
const { Text } = host.antd.Typography;

/** Collapsible agent-grouped session list. */
function SessionGroups({
  groups,
  collapsedAgents,
  onToggleAgent,
  searching,
  selected,
  onSelect,
  locale,
}: {
  groups: [string, SessionSummary[]][];
  collapsedAgents: ReadonlySet<string>;
  onToggleAgent: (agent: string) => void;
  searching: boolean;
  selected: string | null;
  onSelect: (sessionId: string) => void;
  locale: string;
}) {
  const multiGroup = groups.length > 1;
  return (
    <>
      {groups.map(([agent, items]) => {
        const collapsed =
          multiGroup && !searching && collapsedAgents.has(agent);
        return (
          <div key={agent}>
            {multiGroup && (
              <div
                onClick={() => onToggleAgent(agent)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 6px 4px",
                  cursor: "pointer",
                  userSelect: "none",
                  color: "rgba(128,128,128,1)",
                  fontSize: 12,
                }}
              >
                <CaretRightOutlined
                  style={{
                    fontSize: 10,
                    transition: "transform 0.15s",
                    transform: collapsed ? "rotate(0deg)" : "rotate(90deg)",
                  }}
                />
                <Text strong style={{ fontSize: 12 }}>
                  {agent}
                </Text>
                <Text type="secondary" style={{ fontSize: 11 }}>
                  {items.length}
                </Text>
              </div>
            )}
            {!collapsed &&
              items.map((item) => {
                const active = item.session_id === selected;
                return (
                  <div
                    key={item.session_id}
                    onClick={() => onSelect(item.session_id)}
                    style={{
                      padding: "8px 10px",
                      marginBottom: 4,
                      borderRadius: 8,
                      cursor: "pointer",
                      background: active
                        ? "rgba(22,119,255,0.10)"
                        : "transparent",
                      border: active
                        ? "1px solid rgba(22,119,255,0.35)"
                        : "1px solid transparent",
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 6 }}
                    >
                      <Text
                        strong
                        style={{ fontSize: 13, flex: 1, minWidth: 0 }}
                        ellipsis={{
                          tooltip: `${item.title ? `${item.title}\n` : ""}${
                            item.session_id
                          }`,
                        }}
                      >
                        {item.title ||
                          item.agent_id ||
                          shortId(item.session_id)}
                      </Text>
                      {multiGroup ? null : item.agent_id ? (
                        <Tag
                          style={{ marginInlineEnd: 0, fontSize: 10 }}
                          color="geekblue"
                        >
                          {item.agent_id}
                        </Tag>
                      ) : null}
                      <Tag
                        color={STATUS_COLORS[item.status] ?? "default"}
                        style={{ marginInlineEnd: 0 }}
                      >
                        {statusText(item.status)}
                      </Tag>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        marginTop: 2,
                        fontSize: 12,
                        color: "rgba(128,128,128,1)",
                      }}
                    >
                      <span>{item.channel || "-"}</span>
                      <span>
                        {item.runs} {t(locale as never, "runs")}
                      </span>
                      <span>{formatCount(item.total_tokens)} tok</span>
                      <span
                        style={{ marginLeft: "auto" }}
                        title={formatTime(item.last_event_t)}
                      >
                        {formatRelative(item.last_event_t)}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        );
      })}
    </>
  );
}

/** The Console trace viewer page. */
export function TracePage() {
  const hostLocale =
    typeof host.useLocale === "function" ? host.useLocale() : undefined;
  const locale = useMemo(
    () => resolveLocale(hostLocale ?? storedLocale()),
    [hostLocale],
  );
  const [sessions, setSessions] = useState<SessionSummary[] | null>(null);
  const [sessionsHasMore, setSessionsHasMore] = useState(false);
  const [collapsedAgents, setCollapsedAgents] = useState<ReadonlySet<string>>(
    new Set(),
  );
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sessionsLoadingMore, setSessionsLoadingMore] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [sessionSearch, setSessionSearch] = useState("");
  const [error, setError] = useState<string | null>(null);

  const loadSessions = useCallback(async () => {
    try {
      const page = await fetchSessionsPage({ limit: 100, offset: 0 });
      setSessions(page.sessions);
      setSessionsHasMore(page.has_more);
      setError(null);
    } catch (exc) {
      setError(String((exc as Error).message));
    }
  }, []);

  const loadMoreSessions = useCallback(async () => {
    setSessionsLoadingMore(true);
    try {
      const page = await fetchSessionsPage({
        limit: 100,
        offset: sessions?.length ?? 0,
      });
      setSessions((prev) => {
        const existing = prev ?? [];
        return [
          ...existing,
          ...page.sessions.filter(
            (item) =>
              !existing.some((known) => known.session_id === item.session_id),
          ),
        ];
      });
      setSessionsHasMore(page.has_more);
    } catch (exc) {
      setError(String((exc as Error).message));
    } finally {
      setSessionsLoadingMore(false);
    }
  }, [sessions]);

  useEffect(() => {
    void loadSessions();
    // Deep link: /plugin/agent-trace?session=<id> preselects it. Console
    // local chat ids (timestamp format) resolve to the backend id first.
    try {
      const param = new URLSearchParams(window.location.search).get("session");
      if (param) {
        void resolveTraceSessionId(param).then((resolved) => {
          setSelected(resolved ?? param);
        });
      }
    } catch {
      /* ignore malformed URLs */
    }
  }, [loadSessions]);

  // Keep the URL's ?session= in sync with the sidebar selection so the
  // address stays shareable/refreshable. replaceState: no reload, no
  // extra history entry.
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      if (selected) url.searchParams.set("session", selected);
      else url.searchParams.delete("session");
      window.history.replaceState(window.history.state, "", url);
    } catch {
      /* ignore malformed URLs */
    }
  }, [selected]);

  // Keep the session list fresh so new conversations show up without
  // a manual refresh.
  useEffect(() => {
    const timer = setInterval(() => {
      if (document.visibilityState === "visible") {
        void loadSessions();
      }
    }, 15000);
    return () => clearInterval(timer);
  }, [loadSessions]);

  const selectedSummary = useMemo(
    () => sessions?.find((item) => item.session_id === selected) ?? null,
    [sessions, selected],
  );

  const filteredSessions = useMemo(() => {
    if (!sessions) return [];
    const needle = sessionSearch.trim().toLowerCase();
    if (!needle) return sessions;
    return sessions.filter((item) =>
      [item.session_id, item.title ?? "", item.agent_id, item.channel]
        .join(" ")
        .toLowerCase()
        .includes(needle),
    );
  }, [sessions, sessionSearch]);

  const agentGroups = useMemo(() => {
    const groups = new Map<string, SessionSummary[]>();
    for (const item of filteredSessions) {
      const key = item.agent_id || "(unknown)";
      const list = groups.get(key);
      if (list) list.push(item);
      else groups.set(key, [item]);
    }
    return [...groups.entries()];
  }, [filteredSessions]);

  return (
    <div style={{ display: "flex", height: "100%", minHeight: 0 }}>
      {/* Left: session list (collapsible) */}
      {sidebarCollapsed ? (
        <div
          style={{
            width: 32,
            flexShrink: 0,
            borderRight: "1px solid rgba(128,128,128,0.15)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 8,
          }}
        >
          <Tooltip title={t(locale, "expandSidebar")} placement="right">
            <Button
              size="small"
              type="text"
              icon={<MenuUnfoldOutlined />}
              onClick={() => setSidebarCollapsed(false)}
            />
          </Tooltip>
        </div>
      ) : (
        <div
          style={{
            width: 300,
            flexShrink: 0,
            borderRight: "1px solid rgba(128,128,128,0.15)",
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
          }}
        >
          <div
            style={{
              padding: "12px 12px 8px",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Input
              allowClear
              size="small"
              prefix={<SearchOutlined />}
              placeholder={t(locale, "searchPlaceholder")}
              value={sessionSearch}
              style={{ flex: 1, minWidth: 0 }}
              onChange={(event: { target: { value: string } }) =>
                setSessionSearch(event.target.value)
              }
            />
            <Tooltip title={t(locale, "collapseSidebar")}>
              <Button
                size="small"
                type="text"
                icon={<MenuFoldOutlined />}
                onClick={() => setSidebarCollapsed(true)}
              />
            </Tooltip>
          </div>
          {error ? (
            <div style={{ padding: "0 12px 4px" }}>
              <Text type="danger" style={{ fontSize: 12 }}>
                {`${t(locale, "loadFailed")}: ${error}`}
              </Text>
            </div>
          ) : null}
          <div style={{ flex: 1, overflow: "auto", padding: "0 8px 12px" }}>
            {sessions === null ? (
              <div style={{ textAlign: "center", paddingTop: 48 }}>
                <Spin />
              </div>
            ) : filteredSessions.length === 0 ? (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={
                  <span style={{ fontSize: 12 }}>
                    {t(locale, "noSessions")}
                  </span>
                }
                style={{ paddingTop: 32 }}
              >
                <Text
                  type="secondary"
                  style={{ fontSize: 12, maxWidth: 220, display: "block" }}
                >
                  {t(locale, "noSessionsHint")}
                </Text>
              </Empty>
            ) : (
              <SessionGroups
                groups={agentGroups}
                collapsedAgents={collapsedAgents}
                onToggleAgent={(agent) => {
                  setCollapsedAgents((prev) => {
                    const next = new Set(prev);
                    if (next.has(agent)) next.delete(agent);
                    else next.add(agent);
                    return next;
                  });
                }}
                searching={Boolean(sessionSearch.trim())}
                selected={selected}
                onSelect={setSelected}
                locale={locale}
              />
            )}
            {sessions !== null && sessionsHasMore && !sessionSearch.trim() && (
              <div style={{ textAlign: "center", padding: "8px 0 4px" }}>
                <a
                  onClick={() => void loadMoreSessions()}
                  style={{ fontSize: 12 }}
                >
                  {sessionsLoadingMore
                    ? "…"
                    : `⋯ ${t(locale, "loadOlder")} (${sessions?.length ?? 0})`}
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Right: trajectory view */}
      <SessionTraceView
        sessionId={selected}
        summary={selectedSummary}
        locale={locale}
        onJumpSession={setSelected}
        onRefreshSessions={() => void loadSessions()}
      />
    </div>
  );
}
