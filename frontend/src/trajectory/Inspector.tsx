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
import { spanDurationMs } from "./skillSpans";
import type { SkillSpan } from "./skillSpans";
import {
  formatEpochMs,
  formatSeconds,
  formatThroughput,
  formatTokens,
  recordKindLabel,
  type ApiPayloadMessage,
} from "./records";
import { formatBytes } from "../uiShared";

const host = window.QwenPaw.host;
const React: typeof ReactNS = host.React;
const { useEffect, useRef, useState } = React;
const { Button, Collapse, Empty, Tabs, Tag } = host.antd;
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
  /** Size-only input decomposition of this run's model calls. */
  inputComposition?: {
    charsByRole: Record<string, number>;
    totalChars: number;
    maxToolChars: number;
  };
  /** Billed-input growth vs the previous run (delta accounting). */
  growth?: {
    prevInputTokens: number | null;
    deltaTokens: number;
  };
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

const ROLE_BUCKET_ORDER = ["system", "user", "assistant", "tool"] as const;

const ROLE_LABEL_KEYS: Record<
  string,
  "roleSystem" | "roleUser" | "roleAssistant" | "roleTool" | "roleOther"
> = {
  system: "roleSystem",
  user: "roleUser",
  assistant: "roleAssistant",
  tool: "roleTool",
};

/**
 * Input composition: per-bucket CHARACTER counts and their share of the
 * message-borne input (real chars), plus the run's REAL token totals
 * from the provider usage — no estimated per-bucket tokens.
 */
function InputCompositionSection({
  request,
  locale,
}: {
  request: RequestSummary;
  locale: ReturnType<typeof storedLocale>;
}) {
  const composition = request.inputComposition;
  if (!composition) return null;
  const rows: ReactNS.ReactNode[] = [];
  const known = new Set<string>(ROLE_BUCKET_ORDER);
  const orderedRoles = [
    ...ROLE_BUCKET_ORDER.filter((role) => composition.charsByRole[role]),
    ...Object.keys(composition.charsByRole).filter(
      (role) => !known.has(role) && composition.charsByRole[role],
    ),
  ];
  const total = composition.totalChars || 1;
  for (const role of orderedRoles) {
    const chars = composition.charsByRole[role];
    const labelKey = ROLE_LABEL_KEYS[role] ?? "roleOther";
    const share = Math.round((chars / total) * 100);
    rows.push(
      <KeyValue
        key={role}
        label={t(locale, labelKey)}
        value={`${formatTokens(chars)} ${t(locale, "charUnit")} · ${share}%`}
      />,
    );
  }
  if (composition.maxToolChars > 0) {
    rows.push(
      <KeyValue
        key="max-tool"
        label={t(locale, "maxToolMsg")}
        value={`${formatTokens(composition.maxToolChars)} ${t(
          locale,
          "charUnit",
        )}`}
      />,
    );
  }
  return (
    <>
      <Text strong style={{ fontSize: 12, display: "block", marginTop: 10 }}>
        {t(locale, "inputComposition")}
      </Text>
      {rows}
      {request.inputTokens > 0 ? (
        <KeyValue
          label={t(locale, "realInputTokens")}
          value={`${formatTokens(request.inputTokens)} tok`}
        />
      ) : null}
      <Text
        type="secondary"
        style={{ fontSize: 11, display: "block", padding: "2px 0" }}
      >
        {t(locale, "compositionNote")}
      </Text>
      {request.growth ? (
        <>
          <KeyValue
            label={t(locale, "growthVsPrev")}
            value={
              request.growth.prevInputTokens === null
                ? t(locale, "firstRound")
                : `${request.growth.deltaTokens >= 0 ? "+" : ""}${formatTokens(
                    request.growth.deltaTokens,
                  )} tok`
            }
          />
          {request.growth.prevInputTokens !== null &&
          request.growth.deltaTokens > 0 ? (
            <KeyValue
              label={t(locale, "cacheAbsorbed")}
              value={`${formatTokens(request.cacheReadTokens)} tok`}
            />
          ) : null}
        </>
      ) : null}
    </>
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
      <KeyValue
        label={t(locale, "startedAt")}
        value={formatEpochMs(request.startedAt)}
      />
      <KeyValue
        label={t(locale, "duration")}
        value={formatSeconds(
          request.durationMs === null ? null : request.durationMs / 1000,
        )}
      />
      {request.ttftMs !== null ? (
        <KeyValue
          label={t(locale, "ttftLabel")}
          value={formatSeconds(request.ttftMs / 1000)}
        />
      ) : null}
      {request.decodeMs !== null ? (
        <KeyValue
          label={t(locale, "decodeLabel")}
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
          {request.providers.length > 0 ? (
            <KeyValue label="Provider" value={request.providers.join(" · ")} />
          ) : null}
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
          <InputCompositionSection request={request} locale={locale} />
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
        {selected.inSkill ? (
          <KeyValue
            label={t(locale, "skillResource")}
            value={
              selected.inSkillLoaded
                ? `⚡ ${selected.inSkill}`
                : `⚡ ${selected.inSkill}（${t(locale, "skillBypass")}）`
            }
          />
        ) : null}
        {selected.guidedSkill ? (
          <KeyValue
            label={t(locale, "skillGuided")}
            value={`∈ ${selected.guidedSkill}（${
              selected.guidedReason === "slash"
                ? t(locale, "guidedBySlash")
                : t(locale, "guidedByLoad")
            }）`}
          />
        ) : null}
        {selected.toolOutputChars ? (
          <KeyValue
            label={t(locale, "outputSize")}
            value={
              selected.toolOutputBytes
                ? `${formatTokens(selected.toolOutputChars)} ${t(
                    locale,
                    "charUnit",
                  )} · ${formatBytes(selected.toolOutputBytes)} (${t(
                    locale,
                    "beforeTruncation",
                  )})`
                : `${formatTokens(selected.toolOutputChars)} ${t(
                    locale,
                    "charUnit",
                  )}`
            }
          />
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
  // Request tab (dsh request-view parity): one place for the call's
  // provider, generation options, token breakdown, timing, and the
  // tool calls this response emitted.
  if (
    selected.kind === "message" &&
    (selected.usage ||
      selected.timing ||
      selected.options ||
      selected.apiPayload?.params ||
      (selected.toolCalls && selected.toolCalls.length > 0))
  ) {
    const wireParams = selected.apiPayload?.params;
    const hasBothOptions =
      wireParams !== undefined && selected.options !== undefined;
    items.push({
      key: "request",
      label: t(locale, "requestTab"),
      children: (
        <div style={{ display: "grid", gap: 8 }}>
          {selected.toolCalls && selected.toolCalls.length > 0 ? (
            <div>
              <Text strong style={{ fontSize: 12 }}>
                {t(locale, "toolCallsEmitted")} ({selected.toolCalls.length})
              </Text>
              {selected.toolCalls.map((call, i) => (
                <div
                  key={call.id || i}
                  style={{ display: "flex", gap: 6, alignItems: "baseline" }}
                >
                  <Text code style={{ fontSize: 11, flexShrink: 0 }}>
                    {call.name}
                  </Text>
                  {call.id ? (
                    <Text
                      type="secondary"
                      style={{ fontSize: 10, flexShrink: 0 }}
                    >
                      …{call.id.slice(-8)}
                    </Text>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
          {wireParams || selected.options ? (
            <div>
              <Text strong style={{ fontSize: 12 }}>
                {t(locale, "generationOptions")}
              </Text>
              {hasBothOptions ? (
                <Text
                  type="secondary"
                  style={{ fontSize: 11, display: "block" }}
                >
                  {`${t(locale, "wireParams")} + ${t(
                    locale,
                    "callOptionsDigest",
                  )}`}
                </Text>
              ) : null}
              <Pre
                value={{ ...(selected.options ?? {}), ...(wireParams ?? {}) }}
                json
              />
            </div>
          ) : null}
          {selected.usage ? (
            <div>
              <Text strong style={{ fontSize: 12 }}>
                {t(locale, "usage")}
              </Text>
              <UsageBreakdown
                input={selected.usage.input_tokens ?? 0}
                output={selected.usage.output_tokens ?? 0}
                cacheRead={selected.usage.cache_input_tokens ?? 0}
                cacheWrite={selected.usage.cache_creation_input_tokens ?? 0}
                reasoning={selected.usage.reasoning_tokens ?? 0}
              />
            </div>
          ) : null}
          <div>
            <Text strong style={{ fontSize: 12 }}>
              {t(locale, "timing")}
            </Text>
            <KeyValue
              label={t(locale, "startedAt")}
              value={formatEpochMs(selected.startedAt)}
            />
            <KeyValue
              label={t(locale, "duration")}
              value={formatSeconds(selected.timeSeconds)}
            />
            {selected.timing ? (
              <>
                <KeyValue
                  label={t(locale, "ttftLabel")}
                  value={formatSeconds(selected.timing.ttft_ms / 1000)}
                />
                <KeyValue
                  label={t(locale, "decodeLabel")}
                  value={formatSeconds(selected.timing.decode_ms / 1000)}
                />
                <KeyValue
                  label={t(locale, "throughput")}
                  value={formatThroughput(
                    selected.usage?.output_tokens,
                    selected.timing.decode_ms / 1000,
                  )}
                />
              </>
            ) : (
              <Text type="secondary" style={{ fontSize: 11 }}>
                {t(locale, "noTiming")}
              </Text>
            )}
          </div>
        </div>
      ),
    });
  }
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
    // Schema tab: the call-time model-visible tool definition (dsh
    // schemaDetail parity) — description text + parameters JSON.
    if (selected.toolSchema) {
      const fn = selected.toolSchema.function as
        | { description?: unknown; parameters?: unknown }
        | undefined;
      const flat = selected.toolSchema as {
        description?: unknown;
        parameters?: unknown;
      };
      const description =
        typeof fn?.description === "string"
          ? fn.description
          : typeof flat.description === "string"
          ? flat.description
          : undefined;
      const parameters =
        fn?.parameters !== undefined ? fn.parameters : flat.parameters;
      items.push({
        key: "schema",
        label: "Schema",
        children: (
          <div style={{ display: "grid", gap: 8 }}>
            <Text type="secondary" style={{ fontSize: 11 }}>
              {t(locale, "toolSchemaNote")}
            </Text>
            {description ? (
              <Text
                style={{
                  fontSize: 12,
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
              >
                {description}
              </Text>
            ) : null}
            {parameters !== undefined ? <Pre value={parameters} json /> : null}
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
    // Input tab renders even when the delta is empty (no-change calls)
    // or when only messagesMeta is available — the kind of delta is
    // shown explicitly instead of silently hiding the tab.
    if (selected.inputNew || selected.messagesMeta) {
      const deltaCount = selected.inputNew?.length ?? 0;
      const totalCount = selected.messagesMeta?.count ?? 0;
      let deltaKind: string;
      if (selected.contextReset) {
        deltaKind = `${t(locale, "deltaReset")} (${totalCount})`;
      } else if (deltaCount === 0) {
        deltaKind = t(locale, "deltaNoChange");
      } else if (
        selected.inputNew &&
        selected.inputNew.length === 1 &&
        selected.inputNew[0].role === "assistant" &&
        totalCount > 1
      ) {
        deltaKind = t(locale, "deltaTailUpdate");
      } else {
        deltaKind = `${t(locale, "deltaAppend")} (${deltaCount})`;
      }
      items.push({
        key: "input",
        label: t(locale, "inputTab"),
        children: (
          <div style={{ display: "grid", gap: 8 }}>
            <KeyValue label={t(locale, "deltaKind")} value={deltaKind} />
            {selected.contextReset ? (
              <Text type="warning" style={{ fontSize: 12 }}>
                {t(locale, "contextReset")}
              </Text>
            ) : null}
            {selected.resetDetail ? (
              <div
                style={{
                  border: "1px solid rgba(250,173,20,0.4)",
                  borderRadius: 6,
                  padding: "6px 8px",
                }}
              >
                <KeyValue
                  label={t(locale, "resetBreakAt")}
                  value={`#${selected.resetDetail.breakAt + 1}`}
                />
                <KeyValue
                  label={t(locale, "resetSizes")}
                  value={`${selected.resetDetail.beforeCount} ${t(
                    locale,
                    "resetMsgs",
                  )} · ${formatTokens(selected.resetDetail.beforeChars)} ${t(
                    locale,
                    "charUnit",
                  )} → ${selected.resetDetail.afterCount} ${t(
                    locale,
                    "resetMsgs",
                  )} · ${formatTokens(selected.resetDetail.afterChars)} ${t(
                    locale,
                    "charUnit",
                  )}`}
                />
                <KeyValue
                  label={t(locale, "resetRoles")}
                  value={
                    Object.keys(selected.resetDetail.afterByRole)
                      .map((role) => {
                        const before =
                          selected.resetDetail!.beforeByRole[role] ?? 0;
                        const after =
                          selected.resetDetail!.afterByRole[role] ?? 0;
                        return before === after
                          ? null
                          : `${role} ${before}→${after}`;
                      })
                      .filter(Boolean)
                      .join(" · ") || "-"
                  }
                />
                {selected.resetDetail.changes.length > 0 ? (
                  <div style={{ marginTop: 4 }}>
                    <Text strong style={{ fontSize: 12 }}>
                      {t(locale, "resetChanges")}
                    </Text>
                    {selected.resetDetail.changes
                      .slice(0, 20)
                      .map((change, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            gap: 6,
                            alignItems: "baseline",
                          }}
                        >
                          <Tag
                            color={
                              change.status === "kept"
                                ? "default"
                                : change.status === "rewritten"
                                ? "orange"
                                : change.status === "removed"
                                ? "red"
                                : "green"
                            }
                            style={{ marginInlineEnd: 0, fontSize: 10 }}
                          >
                            {t(locale, RESET_STATUS_LABEL[change.status])}
                          </Tag>
                          <Text code style={{ fontSize: 11, flexShrink: 0 }}>
                            {change.role}
                          </Text>
                          {change.status === "rewritten" ? (
                            <Text
                              type="secondary"
                              style={{ fontSize: 11, minWidth: 0 }}
                              ellipsis={true}
                            >
                              {`${t(locale, "resetOldPrefix")}${(
                                change.oldText ?? ""
                              ).slice(0, 40)} → ${t(
                                locale,
                                "resetNewPrefix",
                              )}${(change.newText ?? "").slice(0, 40)}`}
                            </Text>
                          ) : (
                            <Text
                              type="secondary"
                              style={{ fontSize: 11, minWidth: 0 }}
                              ellipsis={true}
                            >
                              {`${
                                change.status === "removed"
                                  ? t(locale, "resetOldPrefix")
                                  : t(locale, "resetNewPrefix")
                              }${(change.oldText ?? change.newText ?? "").slice(
                                0,
                                60,
                              )}`}
                            </Text>
                          )}
                        </div>
                      ))}
                  </div>
                ) : null}
              </div>
            ) : null}
            {selected.messagesMeta ? (
              <KeyValue
                label={t(locale, "inputTotal")}
                value={`${selected.messagesMeta.count} · ${formatTokens(
                  selected.messagesMeta.totalChars,
                )} ${t(locale, "charUnit")}`}
              />
            ) : null}
            {selected.inputNew && selected.inputNew.length > 0 ? (
              <>
                {selected.inputNew.some((m) => m.role === "assistant") ? (
                  <Text
                    type="secondary"
                    style={{ fontSize: 11, display: "block" }}
                  >
                    {t(locale, "assistantInputNote")}
                  </Text>
                ) : null}
                <Collapse
                  size="small"
                  defaultActiveKey={
                    selected.inputNew.length <= 5 ? ["messages"] : []
                  }
                  items={[
                    {
                      key: "messages",
                      label: `${t(locale, "inputMessages")} (${
                        selected.inputNew.length
                      })`,
                      children: (
                        <div style={{ display: "grid", gap: 8 }}>
                          {selected.inputNew.map((message, index) => (
                            <InputMessageItem
                              key={index}
                              message={message}
                              locale={locale}
                            />
                          ))}
                        </div>
                      ),
                    },
                  ]}
                />
              </>
            ) : null}
          </div>
        ),
      });
    }
    // Wire-level API payload tab (from llm/api_request events)
    if (selected.apiPayload && selected.apiPayload.messages.length > 0) {
      const ap = selected.apiPayload;
      items.push({
        key: "api",
        label: "API",
        children: (
          <div style={{ display: "grid", gap: 8 }}>
            <Text type="secondary" style={{ fontSize: 11 }}>
              {t(locale, "apiPayloadNote")}
            </Text>
            <KeyValue label="Model" value={ap.model} />
            <KeyValue
              label={t(locale, "apiMsgCount")}
              value={String(ap.messages.length)}
            />
            {ap.usage ? (
              <KeyValue
                label="Usage"
                value={`in ${ap.usage.input_tokens ?? 0} · out ${
                  ap.usage.output_tokens ?? 0
                } tok`}
              />
            ) : null}
            {ap.durationMs !== undefined ? (
              <KeyValue
                label={t(locale, "duration")}
                value={formatSeconds(ap.durationMs / 1000)}
              />
            ) : null}
            <Collapse
              size="small"
              items={[
                {
                  key: "api-msgs",
                  label: `${t(locale, "apiMessages")} (${ap.messages.length})`,
                  children: (
                    <ApiMessagesSection
                      messages={ap.messages}
                      locale={locale}
                    />
                  ),
                },
              ]}
            />
          </div>
        ),
      });
    }
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

const RESET_STATUS_LABEL: Record<
  string,
  "resetKept" | "resetRemoved" | "resetRewritten" | "resetAdded"
> = {
  kept: "resetKept",
  removed: "resetRemoved",
  rewritten: "resetRewritten",
  added: "resetAdded",
};

/** One input message with a 3-line preview and a show-full toggle. */
const API_TAIL_DEFAULT = 8;
const API_ROLE_COLORS: Record<string, string> = {
  system: "green",
  user: "blue",
  tool: "gold",
};

/**
 * Wire-level message list built for scanning: role filter chips, a
 * recent-tail focus with an "earlier" reveal (the prefix repeats the
 * same context on every call), and compact one-line rows that expand
 * in place — one at a time — instead of a wall of lookalike previews.
 */
function ApiMessagesSection({
  messages,
  locale,
}: {
  messages: ApiPayloadMessage[];
  locale: ReturnType<typeof storedLocale>;
}) {
  const [roleFilter, setRoleFilter] = useState<string | null>(null);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [showEarlier, setShowEarlier] = useState(false);

  const counts = new Map<string, number>();
  for (const message of messages) {
    counts.set(message.role, (counts.get(message.role) ?? 0) + 1);
  }
  const filteredIdx =
    roleFilter === null
      ? messages.map((_, i) => i)
      : messages.flatMap((message, i) =>
          message.role === roleFilter ? [i] : [],
        );
  const hiddenPrefix =
    !showEarlier &&
    roleFilter === null &&
    messages.length > API_TAIL_DEFAULT + 4
      ? messages.length - API_TAIL_DEFAULT
      : 0;
  const visibleIdx = filteredIdx.filter((i) => i >= hiddenPrefix);

  const chip = (label: string, active: boolean, onClick: () => void) => (
    <span
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "0 8px",
        borderRadius: 999,
        fontSize: 10,
        lineHeight: "18px",
        cursor: "pointer",
        userSelect: "none",
        border: `1px solid ${
          active ? "rgba(22,119,255,0.6)" : "rgba(128,128,128,0.35)"
        }`,
        background: active ? "rgba(22,119,255,0.10)" : "transparent",
        color: active ? "#1677ff" : "rgba(128,128,128,1)",
      }}
    >
      {label}
    </span>
  );

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
        {chip(
          `${t(locale, "apiFilterAll")} ${messages.length}`,
          roleFilter === null,
          () => setRoleFilter(null),
        )}
        {[...counts.entries()].map(([role, count]) =>
          chip(`${role} ${count}`, roleFilter === role, () =>
            setRoleFilter(roleFilter === role ? null : role),
          ),
        )}
      </div>
      {hiddenPrefix > 0 ? (
        <a
          style={{ fontSize: 11 }}
          onClick={() => setShowEarlier(true)}
        >{`⋯ ${t(locale, "apiShowEarlier")} (${hiddenPrefix})`}</a>
      ) : null}
      {showEarlier && roleFilter === null && hiddenPrefix === 0 ? (
        <a style={{ fontSize: 11 }} onClick={() => setShowEarlier(false)}>
          {t(locale, "apiCollapseEarlier")}
        </a>
      ) : null}
      <div style={{ display: "grid", gap: 4 }}>
        {visibleIdx.map((i) => {
          const message = messages[i];
          const expanded = expandedIdx === i;
          return (
            <div
              key={i}
              style={{
                borderRadius: 6,
                border: `1px solid ${
                  expanded ? "rgba(22,119,255,0.35)" : "rgba(128,128,128,0.18)"
                }`,
                padding: expanded ? "4px 8px" : "2px 8px",
                background: expanded ? "rgba(22,119,255,0.04)" : "transparent",
              }}
            >
              <div
                onClick={() => setExpandedIdx(expanded ? null : i)}
                style={{
                  display: "flex",
                  gap: 6,
                  alignItems: "center",
                  cursor: "pointer",
                  minWidth: 0,
                }}
              >
                <Tag
                  color={API_ROLE_COLORS[message.role] ?? "purple"}
                  style={{
                    marginInlineEnd: 0,
                    fontSize: 10,
                    lineHeight: "16px",
                    flexShrink: 0,
                  }}
                >
                  {message.role}
                </Tag>
                <Text type="secondary" style={{ fontSize: 10, flexShrink: 0 }}>
                  #{i + 1}
                </Text>
                {message.toolCallId ? (
                  <Text code style={{ fontSize: 9, flexShrink: 0 }}>
                    …{message.toolCallId.slice(-8)}
                  </Text>
                ) : null}
                <Text type="secondary" style={{ fontSize: 10, flexShrink: 0 }}>
                  {formatTokens(message.content.length)} {t(locale, "charUnit")}
                </Text>
                {!expanded ? (
                  <Text
                    type="secondary"
                    style={{
                      fontSize: 11,
                      minWidth: 0,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {message.content.split("\n", 1)[0].slice(0, 120) || "—"}
                  </Text>
                ) : null}
              </div>
              {expanded ? (
                <div
                  style={{
                    marginTop: 4,
                    maxHeight: 260,
                    overflowY: "auto",
                  }}
                >
                  <Pre value={message.content} />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function InputMessageItem({
  message,
  locale,
}: {
  message: { role: string; chars: number; text?: string; toolCallId?: string };
  locale: ReturnType<typeof storedLocale>;
}) {
  const [expanded, setExpanded] = React.useState(false);
  const text = message.text ?? "";
  return (
    <div>
      <div style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
        <Text code style={{ fontSize: 11, flexShrink: 0 }}>
          {message.role}
        </Text>
        <Text type="secondary" style={{ fontSize: 11 }}>
          {formatTokens(message.chars)} {t(locale, "charUnit")}
          {message.toolCallId ? ` · ${message.toolCallId}` : ""}
        </Text>
        {text.length > 200 ? (
          <a
            style={{ fontSize: 11 }}
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded
              ? t(locale, "inputCollapseText")
              : t(locale, "inputExpand")}
          </a>
        ) : null}
      </div>
      {text ? (
        <div
          style={
            expanded
              ? undefined
              : {
                  maxHeight: 57,
                  overflow: "hidden",
                  position: "relative",
                }
          }
        >
          <Pre value={text} />
        </div>
      ) : null}
    </div>
  );
}

const SPAN_TRIGGER_LABEL: Record<
  string,
  "spanTriggerSlash" | "spanTriggerLoad" | "spanTriggerResource"
> = {
  slash: "spanTriggerSlash",
  load: "spanTriggerLoad",
  resource: "spanTriggerResource",
};

const SPAN_END_LABEL: Record<
  string,
  "spanEndRun" | "spanEndLast" | "spanOpen"
> = {
  run_end: "spanEndRun",
  last_activity: "spanEndLast",
};

/** Inspector for one skill execution span (opened from timeline bands). */
export function SpanInspector({
  span,
  records,
  onJumpRecord,
  onClose,
}: {
  span: SkillSpan;
  records: TrajectoryRecord[];
  onJumpRecord: (index: number) => void;
  onClose: () => void;
}) {
  const locale = storedLocale();
  const endLabel = span.endKind
    ? t(locale, SPAN_END_LABEL[span.endKind])
    : t(locale, "spanOpen");
  const durationMs = spanDurationMs(span);
  const recordByIndex = new Map(records.map((r) => [r.index, r]));
  return (
    <aside
      style={{
        flexShrink: 0,
        width: 380,
        borderLeft: "1px solid rgba(128,128,128,0.18)",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        position: "relative",
        background: "inherit",
      }}
    >
      <div style={{ padding: "8px 12px 0", overflow: "auto" }}>
        <CloseButton onClose={onClose} />
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: 3,
              flexShrink: 0,
              background: `hsl(${span.colorHue}, 65%, 55%)`,
              border: span.bypass
                ? "1px dashed rgba(250,140,22,0.9)"
                : undefined,
            }}
          />
          <Text strong style={{ fontSize: 13 }}>
            {span.skill}
          </Text>
          <Tag
            color={span.bypass ? "orange" : "geekblue"}
            style={{ marginInlineEnd: 0, fontSize: 10 }}
          >
            {t(locale, SPAN_TRIGGER_LABEL[span.trigger])}
          </Tag>
        </div>
        <div style={{ marginTop: 6 }}>
          <KeyValue
            label={t(locale, "spanStart")}
            value={formatEpochMs(span.startT)}
          />
          <KeyValue label={t(locale, "spanEnd")} value={endLabel} />
          {span.endT !== null ? (
            <KeyValue label=" " value={formatEpochMs(span.endT)} />
          ) : null}
          {span.lastActivityT !== null ? (
            <KeyValue
              label={t(locale, "spanLastActivity")}
              value={formatEpochMs(span.lastActivityT)}
            />
          ) : null}
          <KeyValue
            label={t(locale, "spanDuration")}
            value={durationMs === null ? "-" : formatSeconds(durationMs / 1000)}
          />
          <KeyValue
            label={t(locale, "spanAttributed")}
            value={String(span.attributedIndexes.length)}
          />
          <KeyValue
            label={t(locale, "spanLoadState")}
            value={
              span.bypass
                ? t(locale, "skillBypass")
                : span.loadSeq !== null
                ? `seq ${span.loadSeq}`
                : "-"
            }
            danger={span.bypass}
          />
        </div>
        {span.evidences.length > 0 ? (
          <div style={{ marginTop: 10 }}>
            <Text strong style={{ fontSize: 12 }}>
              {t(locale, "spanEvidence")}
            </Text>
            {span.evidences.slice(0, 30).map((evidence, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 6,
                  alignItems: "baseline",
                  padding: "2px 0",
                }}
              >
                <Tag
                  color={
                    evidence.kind === "path"
                      ? "geekblue"
                      : evidence.kind === "content"
                      ? "blue"
                      : "default"
                  }
                  style={{ marginInlineEnd: 0, fontSize: 10 }}
                >
                  {evidence.kind}
                </Tag>
                <a
                  style={{ fontSize: 12 }}
                  onClick={() => onJumpRecord(evidence.recordIndex)}
                >
                  #{evidence.recordIndex}
                </a>
                <Text type="secondary" style={{ fontSize: 11 }}>
                  {evidence.detail}
                </Text>
              </div>
            ))}
          </div>
        ) : (
          <Text
            type="secondary"
            style={{ fontSize: 12, display: "block", marginTop: 10 }}
          >
            {t(locale, "spanNoActivity")}
          </Text>
        )}
      </div>
    </aside>
  );
}
