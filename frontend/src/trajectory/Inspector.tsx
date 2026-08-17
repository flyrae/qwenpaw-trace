/**
 * The record inspector: a resizable side pane with Summary / Raw /
 * Timing / Usage tabs for the selected ledger record.
 *
 * Interaction model adapted from the trajectory inspector in
 * deepseek-harness (packages/client/ui-trajectory), MIT License,
 * Copyright (c) 2026 DeepSeek.
 */

import type * as ReactNS from "react";

import { storedLocale, t } from "../locale";
import { collapseContext, diffLines, diffStats } from "./diff";
import type { TrajectoryRecord } from "./records";
import {
  formatEpochMs,
  formatSeconds,
  formatThroughput,
  formatTokens,
  recordKindLabel,
} from "./records";

const host = window.QwenPaw.host;
const React: typeof ReactNS = host.React;
const { useEffect, useRef, useState } = React;
const { Button, Collapse, Empty, Tabs } = host.antd;
const { Text } = host.antd.Typography;
const { CopyOutlined, CloseOutlined } = host.antdIcons;

const MIN_WIDTH = 320;
const MAX_WIDTH = 720;

/** Aggregated view of one request (run) for the request inspector. */
export interface RequestSummary {
  turn: number;
  status: string;
  durationMs: number | null;
  startedAt: number | null;
  query: string;
  llmCalls: number;
  toolCalls: number;
  models: string[];
  providers: string[];
  inputTokens: number;
  outputTokens: number;
  cacheReadTokens: number;
  cacheWriteTokens: number;
  reasoningTokens: number;
  ttftMs: number | null;
  decodeMs: number | null;
  errors: string[];
  options?: Record<string, unknown>;
  resultIndex?: number;
  sessionTotals?: {
    inputTokens: number;
    outputTokens: number;
    totalTokens: number;
    reasoningTokens: number;
  };
}

/** Token colors for the JSON highlighter (theme-neutral). */
const JSON_COLORS = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e",
};

/** Regex-based JSON syntax highlighting for short payloads. */
const HIGHLIGHT_LIMIT = 20000;

function highlightJson(text: string): ReactNS.ReactNode {
  if (text.length > HIGHLIGHT_LIMIT) return text;
  const parts: ReactNS.ReactNode[] = [];
  const pattern =
    /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let keyIndex = 0;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }
    const full = match[0];
    let color = "rgba(128,128,128,1)";
    if (match[1] !== undefined) {
      color = JSON_COLORS.key;
    } else if (match[2] !== undefined) {
      color = JSON_COLORS.string;
    } else if (match[3] !== undefined) {
      color = JSON_COLORS.number;
    } else {
      color = JSON_COLORS.literal;
    }
    parts.push(
      <span key={keyIndex++} style={{ color }}>
        {full}
      </span>,
    );
    last = match.index + full.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function Pre({ value, json = false }: { value: unknown; json?: boolean }) {
  const [copied, setCopied] = useState(false);
  const text =
    typeof value === "string" ? value : JSON.stringify(value, null, 2);
  if (!text) return null;
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };
  return (
    <div style={{ position: "relative" }}>
      <a
        onClick={() => void onCopy()}
        title="Copy"
        style={{
          position: "absolute",
          top: 4,
          right: 6,
          fontSize: 11,
          color: copied ? "#52c41a" : "rgba(128,128,128,1)",
          zIndex: 1,
        }}
      >
        {copied ? "✓" : <CopyOutlined />}
      </a>
      <pre
        style={{
          margin: 0,
          padding: "6px 10px",
          background: "rgba(128,128,128,0.06)",
          borderRadius: 6,
          fontSize: 12,
          maxHeight: 380,
          overflow: "auto",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {json ? highlightJson(text) : text}
      </pre>
    </div>
  );
}

function KeyValue({
  label,
  value,
  danger = false,
}: {
  label: string;
  value: string;
  danger?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        padding: "3px 0",
        fontSize: 12,
      }}
    >
      <Text type="secondary" style={{ fontSize: 12 }}>
        {label}
      </Text>
      <Text
        type={danger ? "danger" : undefined}
        style={{ fontSize: 12, textAlign: "right" }}
      >
        {value}
      </Text>
    </div>
  );
}

export interface InspectorProps {
  record: TrajectoryRecord | null;
  request: RequestSummary | null;
  onJumpSession?: (sessionId: string) => void;
  onJumpRecord?: (index: number) => void;
  onSelectTurn?: (turn: number) => void;
  onClose?: () => void;
}

/** dsh-style token breakdown rows (UsageRows parity). */
function UsageBreakdown({
  input,
  output,
  cacheRead,
  cacheWrite,
  reasoning,
}: {
  input: number;
  output: number;
  cacheRead: number;
  cacheWrite: number;
  reasoning: number;
}) {
  const other = Math.max(0, input - cacheRead - cacheWrite);
  const content = Math.max(0, output - reasoning);
  return (
    <div>
      <KeyValue label="Input" value={`${formatTokens(input)} tok`} />
      {cacheRead ? (
        <KeyValue label="Cached" value={`${formatTokens(cacheRead)} tok`} />
      ) : null}
      {cacheWrite ? (
        <KeyValue
          label="Cache created"
          value={`${formatTokens(cacheWrite)} tok`}
        />
      ) : null}
      {cacheRead || cacheWrite ? (
        <KeyValue label="Other" value={`${formatTokens(other)} tok`} />
      ) : null}
      <KeyValue label="Output" value={`${formatTokens(output)} tok`} />
      {reasoning ? (
        <KeyValue label="Reasoning" value={`${formatTokens(reasoning)} tok`} />
      ) : null}
      {reasoning ? (
        <KeyValue label="Content" value={`${formatTokens(content)} tok`} />
      ) : null}
    </div>
  );
}

/** Clickable section header that jumps to a sibling tab (dsh OverviewSection). */
function OverviewSection({
  label,
  onOpen,
  children,
}: {
  label: string;
  onOpen: () => void;
  children: ReactNS.ReactNode;
}) {
  return (
    <div
      style={{
        marginTop: 8,
        borderTop: "1px solid rgba(128,128,128,0.15)",
        paddingTop: 6,
      }}
    >
      <a onClick={onOpen} style={{ fontSize: 12, fontWeight: 600 }}>
        {label} →
      </a>
      <div style={{ paddingTop: 2 }}>{children}</div>
    </div>
  );
}

function RequestInspector({
  request,
  onJumpRecord,
}: {
  request: RequestSummary;
  onJumpRecord?: (index: number) => void;
}) {
  const locale = storedLocale();
  const [tab, setTab] = React.useState("summary");
  const timingRows = (
    <div>
      <KeyValue label="Started" value={formatEpochMs(request.startedAt)} />
      <KeyValue
        label="Total"
        value={formatSeconds(
          request.durationMs === null ? null : request.durationMs / 1000,
        )}
      />
      {request.ttftMs !== null ? (
        <KeyValue
          label="First TTFT"
          value={formatSeconds(request.ttftMs / 1000)}
        />
      ) : null}
      {request.decodeMs !== null ? (
        <KeyValue
          label="Total decoding"
          value={formatSeconds(request.decodeMs / 1000)}
        />
      ) : null}
      <KeyValue
        label={t(locale, "throughput")}
        value={formatThroughput(
          request.outputTokens,
          request.decodeMs === null ? null : request.decodeMs / 1000,
        )}
      />
    </div>
  );
  const usageRows = (
    <UsageBreakdown
      input={request.inputTokens}
      output={request.outputTokens}
      cacheRead={request.cacheReadTokens}
      cacheWrite={request.cacheWriteTokens}
      reasoning={request.reasoningTokens}
    />
  );
  const items: { key: string; label: string; children: ReactNS.ReactNode }[] = [
    {
      key: "summary",
      label: t(locale, "summary"),
      children: (
        <div>
          <KeyValue label="Request" value={`#${request.turn}`} />
          <KeyValue
            label={t(locale, "status")}
            value={request.status || "unknown"}
            danger={request.status === "error"}
          />
          <KeyValue label="Query" value={firstLineOf(request.query)} />
          <KeyValue
            label={t(locale, "model")}
            value={request.models.join(", ") || "-"}
          />
          <KeyValue label="Tool calls" value={String(request.toolCalls)} />
          {request.errors.length > 0 ? (
            <KeyValue
              label="Error"
              value={request.errors.join("; ").slice(0, 120)}
              danger
            />
          ) : null}
          {request.resultIndex !== undefined && onJumpRecord ? (
            <div style={{ padding: "3px 0", textAlign: "right" }}>
              <a
                style={{ fontSize: 12 }}
                onClick={() => onJumpRecord(request.resultIndex as number)}
              >
                Result: Assistant Message →
              </a>
            </div>
          ) : null}
          {request.options ? (
            <OverviewSection label="Options" onOpen={() => setTab("options")}>
              <Pre value={request.options} json />
            </OverviewSection>
          ) : null}
          <OverviewSection label="Usage" onOpen={() => setTab("usage")}>
            {usageRows}
          </OverviewSection>
          <OverviewSection label="Timing" onOpen={() => setTab("timing")}>
            {timingRows}
          </OverviewSection>
        </div>
      ),
    },
    {
      key: "usage",
      label: "Usage",
      children: (
        <div>
          <Text strong style={{ fontSize: 12 }}>
            {t(locale, "thisRequest")}
          </Text>
          {usageRows}
          {request.sessionTotals ? (
            <>
              <Text
                strong
                style={{ fontSize: 12, display: "block", marginTop: 10 }}
              >
                {t(locale, "sessionTotal")}
              </Text>
              <UsageBreakdown
                input={request.sessionTotals.inputTokens}
                output={request.sessionTotals.outputTokens}
                cacheRead={0}
                cacheWrite={0}
                reasoning={request.sessionTotals.reasoningTokens}
              />
            </>
          ) : null}
        </div>
      ),
    },
    {
      key: "timing",
      label: "Timing",
      children: timingRows,
    },
    ...(request.options
      ? [
          {
            key: "options",
            label: "Options",
            children: <Pre value={request.options} json />,
          },
        ]
      : []),
  ];
  return (
    <div style={{ padding: "8px 4px" }}>
      <Tabs
        size="small"
        activeKey={tab}
        onChange={(key: string) => setTab(key)}
        items={items}
        tabBarStyle={{ marginBottom: 8 }}
      />
    </div>
  );
}

function firstLineOf(text: string, max = 200): string {
  const line = text.split("\n", 1)[0].trim();
  return line.length > max ? `${line.slice(0, max)}…` : line;
}

function DiffView({
  oldText,
  newText,
}: {
  oldText: string | undefined;
  newText: string;
}) {
  const rows = React.useMemo(
    () => diffLines(oldText, newText),
    [oldText, newText],
  );
  const stats = React.useMemo(() => diffStats(rows), [rows]);
  const view = React.useMemo(() => collapseContext(rows), [rows]);
  const locale = storedLocale();
  if (oldText === undefined) {
    return (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {t(locale, "noPrevPrompt")}
      </Text>
    );
  }
  return (
    <div>
      <div style={{ marginBottom: 6, fontSize: 12 }}>
        <span style={{ color: "#52c41a" }}>+{stats.added}</span>{" "}
        <span style={{ color: "#ff4d4f" }}>−{stats.removed}</span>
      </div>
      <div
        style={{
          borderRadius: 6,
          border: "1px solid rgba(128,128,128,0.2)",
          overflow: "auto",
          maxHeight: 420,
          fontSize: 11,
          fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
          lineHeight: "18px",
        }}
      >
        {view.map((row, index) => {
          if (row.kind === "gap") {
            return (
              <div
                key={index}
                style={{
                  padding: "0 8px",
                  color: "rgba(128,128,128,0.8)",
                  background: "rgba(128,128,128,0.05)",
                  userSelect: "none",
                }}
              >
                ⋯ {row.count}
              </div>
            );
          }
          const diffRow = row as { kind: "same" | "add" | "del"; text: string };
          return (
            <div
              key={index}
              style={{
                padding: "0 8px",
                whiteSpace: "pre-wrap",
                wordBreak: "break-all",
                background:
                  diffRow.kind === "add"
                    ? "rgba(82,196,26,0.12)"
                    : diffRow.kind === "del"
                    ? "rgba(255,77,79,0.10)"
                    : undefined,
                color:
                  diffRow.kind === "del" ? "rgba(255,77,79,0.9)" : undefined,
              }}
            >
              {diffRow.kind === "add"
                ? "+ "
                : diffRow.kind === "del"
                ? "− "
                : "  "}
              {diffRow.text || " "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function HeaderInspector({ record }: { record: TrajectoryRecord }) {
  const locale = storedLocale();
  const tools = record.headerTools ?? [];
  const changed = record.headerReason === "changed";
  const items: { key: string; label: string; children: ReactNS.ReactNode }[] = [
    {
      key: "summary",
      label: t(locale, "summary"),
      children: (
        <div>
          <KeyValue label="#" value={String(record.index)} />
          <KeyValue
            label={t(locale, "status")}
            value={
              changed ? t(locale, "promptChanged") : t(locale, "promptInitial")
            }
          />
          <KeyValue label="SHA" value={record.sha ?? "-"} />
          <KeyValue label="Chars" value={String(record.prompt?.length ?? 0)} />
          <KeyValue label="Tools" value={String(tools.length)} />
        </div>
      ),
    },
    ...(changed
      ? [
          {
            key: "diff",
            label: "Diff",
            children: (
              <DiffView
                oldText={record.prevPrompt}
                newText={record.prompt ?? ""}
              />
            ),
          },
        ]
      : []),
    {
      key: "prompt",
      label: t(locale, "prompt"),
      children: <Pre value={record.prompt} />,
    },
    ...(tools.length > 0
      ? [
          {
            key: "tools",
            label: "Tools",
            children: (
              <div style={{ paddingTop: 4 }}>
                {tools.map((name) => (
                  <Text key={name} code style={{ fontSize: 11 }}>
                    {name}
                  </Text>
                ))}
                {record.schemas && record.schemas.length > 0 ? (
                  <Collapse
                    size="small"
                    ghost
                    style={{ marginTop: 6 }}
                    items={record.schemas.map((schema, index) => {
                      const name =
                        (typeof schema.name === "string" && schema.name) ||
                        (typeof (
                          schema.function as Record<string, unknown> | undefined
                        )?.name === "string" &&
                          (schema.function as { name: string }).name) ||
                        `tool-${index + 1}`;
                      return {
                        key: String(index),
                        label: (
                          <Text code style={{ fontSize: 11 }}>
                            {name}
                          </Text>
                        ),
                        children: <Pre value={schema} />,
                      };
                    })}
                  />
                ) : null}
              </div>
            ),
          },
        ]
      : []),
    {
      key: "raw",
      label: "Raw",
      children: <Pre value={record.raw} />,
    },
  ];
  return <Tabs size="small" items={items} tabBarStyle={{ marginBottom: 8 }} />;
}

type DragRef = {
  current: { anchorX: number; anchorWidth: number } | null;
};

function ResizeHandle({ dragRef, width }: { dragRef: DragRef; width: number }) {
  return (
    <div
      onPointerDown={(event: ReactNS.PointerEvent<HTMLDivElement>) => {
        dragRef.current = {
          anchorX: event.clientX,
          anchorWidth: width,
        };
      }}
      style={{
        position: "absolute",
        left: -3,
        top: 0,
        bottom: 0,
        width: 6,
        cursor: "col-resize",
        zIndex: 10,
      }}
      title="Drag to resize"
    />
  );
}

/** Resizable detail pane for the selected record or request. */
function CloseButton({ onClose }: { onClose?: () => void }) {
  if (!onClose) return null;
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Button
        size="small"
        type="text"
        icon={<CloseOutlined />}
        onClick={onClose}
      />
    </div>
  );
}

export function Inspector({
  record,
  request,
  onJumpSession,
  onJumpRecord,
  onSelectTurn,
  onClose,
}: InspectorProps) {
  const locale = storedLocale();
  const [width, setWidth] = useState(400);
  const dragRef = useRef<{ anchorX: number; anchorWidth: number } | null>(null);
  useEffect(() => {
    const onMove = (event: globalThis.PointerEvent) => {
      const drag = dragRef.current;
      if (drag === null) return;
      const delta = drag.anchorX - event.clientX;
      setWidth(
        Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, drag.anchorWidth + delta)),
      );
    };
    const onUp = () => {
      dragRef.current = null;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  if (record === null && request === null) {
    return (
      <aside
        style={{
          flexShrink: 0,
          width,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={t(locale, "selectRecord")}
        />
      </aside>
    );
  }

  if (record === null && request !== null) {
    return (
      <aside
        style={{
          flexShrink: 0,
          width,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative",
        }}
      >
        <ResizeHandle dragRef={dragRef} width={width} />
        <div style={{ padding: "8px 12px 0", overflow: "auto" }}>
          <CloseButton onClose={onClose} />
          <RequestInspector request={request} onJumpRecord={onJumpRecord} />
        </div>
      </aside>
    );
  }
  const selected = record as TrajectoryRecord;

  if (selected.kind === "system" && selected.prompt !== undefined) {
    return (
      <aside
        style={{
          flexShrink: 0,
          width,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative",
        }}
      >
        <ResizeHandle dragRef={dragRef} width={width} />
        <div style={{ padding: "8px 12px 0", overflow: "auto" }}>
          <CloseButton onClose={onClose} />
          <HeaderInspector record={selected} />
        </div>
      </aside>
    );
  }

  const usage = selected.usage;
  const timing = selected.timing;
  const items: { key: string; label: string; children: ReactNS.ReactNode }[] =
    [];
  items.push({
    key: "summary",
    label: t(locale, "summary"),
    children: (
      <div>
        <KeyValue label="#" value={String(selected.index)} />
        <KeyValue label="Kind" value={recordKindLabel(selected, locale)} />
        {selected.runIndex > 0 && onSelectTurn ? (
          <div style={{ padding: "3px 0", textAlign: "right" }}>
            <a
              style={{ fontSize: 12 }}
              onClick={() => onSelectTurn(selected.runIndex)}
            >
              Request #{selected.runIndex} →
            </a>
          </div>
        ) : null}
        <KeyValue
          label={t(locale, "status")}
          value={
            selected.running
              ? t(locale, "running")
              : selected.isError
              ? t(locale, "error")
              : t(locale, "success")
          }
          danger={selected.isError}
        />
        {selected.provider ? (
          <KeyValue label="Provider" value={selected.provider} />
        ) : null}
        {selected.model ? (
          <KeyValue label={t(locale, "model")} value={selected.model} />
        ) : null}
        {selected.toolName ? (
          <KeyValue label="Tool" value={selected.toolName} />
        ) : null}
        {selected.kind === "user" && (selected.channel || selected.userId) ? (
          <KeyValue
            label={t(locale, "source")}
            value={[selected.channel, selected.userId]
              .filter(Boolean)
              .join(" · ")}
          />
        ) : null}
        {selected.receipt ? (
          <KeyValue
            label={t(locale, "channel")}
            value={selected.receipt.channel ?? "-"}
          />
        ) : null}
        <KeyValue
          label={t(locale, "duration")}
          value={formatSeconds(selected.timeSeconds)}
        />
        {selected.note ? (
          <Text type="warning" style={{ fontSize: 12 }}>
            {selected.note}
          </Text>
        ) : null}
        {selected.spawnSession ? (
          <div style={{ marginTop: 6 }}>
            <KeyValue
              label={t(locale, "spawnedAgent")}
              value={selected.spawnAgent ?? "?"}
            />
            {onJumpSession ? (
              <Button
                size="small"
                onClick={() =>
                  selected.spawnSession && onJumpSession(selected.spawnSession)
                }
                style={{ marginTop: 4 }}
              >
                {t(locale, "openChildSession")}
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
    ),
  });
  if (selected.kind === "tool") {
    // Tool records split into Payload / Result tabs (dsh convention).
    if (selected.toolInput) {
      items.push({
        key: "payload",
        label: t(locale, "input"),
        children: <Pre value={selected.toolInput} json />,
      });
    }
    if (selected.toolOutput || selected.toolError) {
      items.push({
        key: "result",
        label: t(locale, "output"),
        children: (
          <div style={{ display: "grid", gap: 8 }}>
            {selected.toolError ? (
              <Text type="danger" style={{ fontSize: 12 }}>
                {selected.toolError}
              </Text>
            ) : null}
            {selected.toolOutput ? <Pre value={selected.toolOutput} /> : null}
          </div>
        ),
      });
    }
  } else if (
    selected.outputText ||
    selected.thinkingText ||
    selected.messages ||
    selected.marker ||
    (selected.toolCalls && selected.toolCalls.length > 0)
  ) {
    items.push({
      key: "raw",
      label: t(locale, "output"),
      children: (
        <div style={{ display: "grid", gap: 8 }}>
          {selected.inboundParts && selected.inboundParts.length > 0 ? (
            <div>
              <Text type="secondary" style={{ fontSize: 12 }}>
                {`${t(locale, "inboundParts")} (${
                  selected.inboundParts.length
                })`}
              </Text>
              {selected.inboundParts.map((part, index) => (
                <div
                  key={index}
                  style={{ display: "flex", gap: 8, alignItems: "baseline" }}
                >
                  <Text code style={{ fontSize: 11, flexShrink: 0 }}>
                    {part.type.replace("Content", "")}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                    }}
                  >
                    {part.text ?? "-"}
                  </Text>
                </div>
              ))}
            </div>
          ) : null}
          {selected.marker ? <Pre value={selected.marker} /> : null}
          {selected.toolCalls && selected.toolCalls.length > 0 ? (
            <div>
              <Text type="secondary" style={{ fontSize: 12 }}>
                {`${t(locale, "toolCall")} (${selected.toolCalls.length})`}
              </Text>
              {selected.toolCalls.map((call, index) => (
                <div key={call.id || index} style={{ display: "flex", gap: 8 }}>
                  <Text code style={{ fontSize: 11, flexShrink: 0 }}>
                    🛠 {call.name}
                  </Text>
                  <Text type="secondary" style={{ fontSize: 11 }}>
                    {call.id}
                  </Text>
                </div>
              ))}
            </div>
          ) : null}
          {selected.note ? (
            <Text type="warning" style={{ fontSize: 12 }}>
              {selected.note}
            </Text>
          ) : null}
          {selected.messages && selected.messages.length > 0 ? (
            <div>
              <Text type="secondary" style={{ fontSize: 12 }}>
                {`${t(locale, "query")} (${selected.messages.length})`}
              </Text>
              {selected.messages.map((message, index) => (
                <div
                  key={index}
                  style={{ display: "flex", gap: 8, alignItems: "baseline" }}
                >
                  <Text code style={{ fontSize: 11, flexShrink: 0 }}>
                    {message.role}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                    }}
                  >
                    {message.text}
                  </Text>
                </div>
              ))}
            </div>
          ) : null}
          {selected.thinkingText ? (
            <div>
              <Text type="secondary" style={{ fontSize: 12 }}>
                {t(locale, "thinking")}
              </Text>
              <Pre value={selected.thinkingText} />
            </div>
          ) : null}
          {selected.outputText ? (
            <div>
              <Text type="secondary" style={{ fontSize: 12 }}>
                {t(locale, "output")}
              </Text>
              <Pre value={selected.outputText} />
            </div>
          ) : null}
        </div>
      ),
    });
  }
  if (selected.startedAt !== null || usage || timing) {
    items.push({
      key: "timing",
      label: "Timing",
      children: (
        <div>
          <KeyValue label="Started" value={formatEpochMs(selected.startedAt)} />
          <KeyValue label="Total" value={formatSeconds(selected.timeSeconds)} />
          {timing ? (
            <>
              <KeyValue
                label="TTFT"
                value={formatSeconds(timing.ttft_ms / 1000)}
              />
              <KeyValue
                label="Decoding"
                value={formatSeconds(timing.decode_ms / 1000)}
              />
              <KeyValue
                label={t(locale, "throughput")}
                value={formatThroughput(
                  usage?.output_tokens,
                  timing.decode_ms / 1000,
                )}
              />
            </>
          ) : (
            <Text type="secondary" style={{ fontSize: 12 }}>
              {t(locale, "noTiming")}
            </Text>
          )}
        </div>
      ),
    });
  }
  if (usage) {
    items.push({
      key: "usage",
      label: "Usage",
      children: (
        <div>
          <KeyValue label="Input" value={formatTokens(usage.input_tokens)} />
          <KeyValue label="Output" value={formatTokens(usage.output_tokens)} />
          {usage.cache_creation_input_tokens ? (
            <KeyValue
              label="Cache write"
              value={formatTokens(usage.cache_creation_input_tokens)}
            />
          ) : null}
          {usage.cache_input_tokens ? (
            <KeyValue
              label="Cache read"
              value={formatTokens(usage.cache_input_tokens)}
            />
          ) : null}
          {usage.total_tokens !== undefined ? (
            <KeyValue label="Total" value={formatTokens(usage.total_tokens)} />
          ) : null}
          {usage.time !== undefined ? (
            <KeyValue label="API time" value={formatSeconds(usage.time)} />
          ) : null}
        </div>
      ),
    });
  }
  items.push({
    key: "rawjson",
    label: "Raw",
    children: <Pre value={selected.raw} />,
  });

  return (
    <aside
      style={{
        flexShrink: 0,
        width,
        borderLeft: "1px solid rgba(128,128,128,0.18)",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        position: "relative",
      }}
    >
      <ResizeHandle dragRef={dragRef} width={width} />
      <div style={{ padding: "8px 12px 0", overflow: "auto" }}>
        <CloseButton onClose={onClose} />
        <Tabs size="small" items={items} tabBarStyle={{ marginBottom: 8 }} />
      </div>
    </aside>
  );
}
