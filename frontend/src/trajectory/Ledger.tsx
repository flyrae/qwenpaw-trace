/**
 * The ledger: one row per trajectory record, grouped by request with
 * kind tags, inline previews, and inline tool results.
 *
 * Visual language adapted from the trajectory table in deepseek-harness
 * (packages/client/ui-trajectory), MIT License, Copyright (c) 2026
 * DeepSeek; rebuilt as div rows on antd primitives for the QwenPaw
 * plugin host, with windowed rendering (react-virtual) for long
 * sessions — mirroring dsh's virtualized ledger.
 */

import { useVirtualizer } from "@tanstack/react-virtual";
import type * as ReactNS from "react";

import { storedLocale, t } from "../locale";
import type { TraceLocale, TraceStringKey } from "../locale";
import type {
  MarkerKind,
  TrajectoryRecord,
  TrajectoryTurnModel,
} from "./records";
import { formatSeconds, formatTokens, recordKindLabel } from "./records";

const host = window.QwenPaw.host;
const React: typeof ReactNS = host.React;
const { useRef } = React;
const { Tag } = host.antd;
const { Text } = host.antd.Typography;
const {
  CaretRightOutlined,
  CloseCircleOutlined,
  FileTextOutlined,
  RobotOutlined,
  RocketOutlined,
  SafetyOutlined,
  SendOutlined,
  SettingOutlined,
  ToolOutlined,
  UserOutlined,
} = host.antdIcons;

const KIND_COLORS: Record<string, string> = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green",
};

const KIND_ICONS: Record<string, ReactNS.ReactNode> = {
  user: <UserOutlined />,
  message: <RobotOutlined />,
  tool: <ToolOutlined />,
  system: <SettingOutlined />,
};

/** Distinct tag color/icon per marker sub-kind (label via records.ts). */
const MARKER_META: Record<
  MarkerKind,
  { color: string; icon: ReactNS.ReactNode }
> = {
  approval: { color: "volcano", icon: <SafetyOutlined /> },
  receipt: { color: "cyan", icon: <SendOutlined /> },
  spawn: { color: "geekblue", icon: <RocketOutlined /> },
  header: { color: "green", icon: <FileTextOutlined /> },
  error: { color: "red", icon: <CloseCircleOutlined /> },
};

const STATUS_COLORS: Record<string, string> = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default",
};

const STATUS_LABELS: Record<string, { zh: string; en: string }> = {
  running: { zh: "进行中", en: "Running" },
  success: { zh: "成功", en: "Success" },
  error: { zh: "错误", en: "Error" },
  cancelled: { zh: "已取消", en: "Cancelled" },
  interrupted: { zh: "已中断", en: "Interrupted" },
  unknown: { zh: "未知", en: "Unknown" },
};

/** Windowed rendering kicks in beyond this many rows. */
const VIRTUALIZE_THRESHOLD = 150;
const ROW_HEIGHT = 26;
const BOUNDARY_HEIGHT = 34;
const DIVIDER_HEIGHT = 9;
const LOAD_OLDER_HEIGHT = 30;

function statusLabel(status: string): string {
  const locale = storedLocale();
  const entry = STATUS_LABELS[status] ?? STATUS_LABELS.unknown;
  return locale === "zh-CN" ? entry.zh : entry.en;
}

const PART_TYPE_KEYS: Record<string, TraceStringKey> = {
  ImageContent: "image",
  FileContent: "file",
  AudioContent: "audio",
  VideoContent: "video",
};

/** Non-text media summary of a user message, e.g. "图片×1 文件×2". */
function mediaPartsLabel(
  record: TrajectoryRecord,
  locale: TraceLocale,
): string | null {
  const counts = new Map<TraceStringKey, number>();
  for (const part of record.inboundParts ?? []) {
    const key = PART_TYPE_KEYS[part.type];
    if (key) counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  if (counts.size === 0) return null;
  return [...counts.entries()]
    .map(([key, count]) => `${t(locale, key)}×${count}`)
    .join(" ");
}

/** One-line delivery receipt for an outbound message row. */
function receiptLabel(record: TrajectoryRecord, locale: TraceLocale): string {
  const receipt = record.receipt;
  const channel = receipt?.channel ? ` · ${receipt.channel}` : "";
  return `📤 ${t(locale, "replySent")}${channel} · ${(
    receipt?.chars ?? 0
  ).toLocaleString()} ${t(locale, "chars")}`;
}

interface LedgerRowModel {
  key: string;
  height: number;
  type: "load-older" | "initial" | "divider" | "boundary" | "record";
  record?: TrajectoryRecord;
  turn?: TrajectoryTurnModel;
}

export interface LedgerProps {
  turns: readonly TrajectoryTurnModel[];
  selectedIndex: number | null;
  selectedTurn: number | null;
  collapsedTurns: ReadonlySet<number>;
  focusIndexes: ReadonlySet<number> | null;
  searchMatchIndexes: ReadonlySet<number> | null;
  onSelectedIndexChange: (index: number) => void;
  onSelectedTurnChange: (turn: number) => void;
  onToggleTurn: (turn: number) => void;
  callsCollapsed: boolean;
  hasOlderRecords: boolean;
  loadingOlder: boolean;
  onLoadOlder: () => void;
  initialRecord?: TrajectoryRecord | null;
  emptyText?: string;
}

function RecordRow({
  record,
  selected,
  dimmed,
  multiRequest,
  onSelect,
}: {
  record: TrajectoryRecord;
  selected: boolean;
  dimmed: boolean;
  multiRequest: boolean;
  onSelect: () => void;
}) {
  const usage = record.usage;
  const tokens =
    usage && (usage.input_tokens || usage.output_tokens)
      ? `${formatTokens(usage.input_tokens)}→${formatTokens(
          usage.output_tokens,
        )}`
      : null;
  return (
    <div
      className="at-ledger-row"
      data-kind={record.kind}
      data-error={record.isError || undefined}
      data-running={record.running || undefined}
      data-selected={selected || undefined}
      data-dimmed={dimmed || undefined}
      onClick={onSelect}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: ROW_HEIGHT,
        cursor: "pointer",
        background: selected ? "rgba(22,119,255,0.08)" : undefined,
        opacity: dimmed ? 0.35 : 1,
      }}
    >
      <span
        style={{
          flexShrink: 0,
          width: 68,
          color: "rgba(128,128,128,1)",
          fontSize: 11,
          textAlign: "right",
        }}
      >
        {multiRequest && (
          <span style={{ opacity: 0.65, marginRight: 3 }}>
            R{record.runIndex}
          </span>
        )}
        #{record.index}
      </span>
      <Tag
        color={
          (record.markerKind && MARKER_META[record.markerKind]?.color) ||
          KIND_COLORS[record.kind] ||
          "default"
        }
        icon={
          (record.markerKind && MARKER_META[record.markerKind]?.icon) ||
          KIND_ICONS[record.kind]
        }
        style={{
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0,
        }}
      >
        {recordKindLabel(record, storedLocale())}
      </Tag>
      <span
        style={{
          flex: 1,
          minWidth: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          fontSize: 12,
        }}
      >
        {record.receipt ? (
          <Text type="secondary" style={{ fontSize: 12 }}>
            {receiptLabel(record, storedLocale())}
          </Text>
        ) : record.kind === "tool" && record.toolName ? (
          <>
            <Text strong style={{ fontSize: 12 }}>
              {record.toolName}
            </Text>
            <Text type="secondary" style={{ fontSize: 12 }}>{` ${
              record.toolInput ?? ""
            }`}</Text>
            {record.toolOutput ? (
              <Text
                type={record.isError ? "danger" : "secondary"}
                style={{ fontSize: 12 }}
              >{` → ${record.toolOutput}`}</Text>
            ) : null}
          </>
        ) : (
          <>
            <Text
              type={record.isError ? "danger" : undefined}
              style={{ fontSize: 12 }}
            >
              {record.running ? `⏳ ${record.text || "…"}` : record.text || "—"}
            </Text>
            {record.kind === "user" ? (
              <>
                <Text type="secondary" style={{ fontSize: 11 }}>{` ${
                  mediaPartsLabel(record, storedLocale()) ?? ""
                }`}</Text>
                {record.channel && record.channel !== "console" ? (
                  <Text code style={{ fontSize: 10 }}>
                    {` @${record.channel}`}
                  </Text>
                ) : null}
              </>
            ) : null}
          </>
        )}
      </span>
      <span
        style={{
          flexShrink: 0,
          whiteSpace: "nowrap",
          fontSize: 11,
          color: "rgba(128,128,128,1)",
          textAlign: "right",
        }}
      >
        {tokens ? <span style={{ color: "#1677ff" }}>{tokens}</span> : null}
        {tokens ? " · " : ""}
        {(record.kind === "message" || record.kind === "tool") &&
          formatSeconds(record.timeSeconds)}
      </span>
    </div>
  );
}

function BoundaryRow({
  turn,
  collapsed,
  selected,
  cellCount,
  onToggle,
  onSelect,
}: {
  turn: TrajectoryTurnModel;
  collapsed: boolean;
  selected: boolean;
  cellCount: number;
  onToggle: () => void;
  onSelect: () => void;
}) {
  const locale = storedLocale();
  return (
    <div
      style={{ display: "flex", alignItems: "center", height: BOUNDARY_HEIGHT }}
    >
      <span
        onClick={(event: ReactNS.MouseEvent<HTMLSpanElement>) => {
          event.stopPropagation();
          onSelect();
        }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "1px 10px",
          borderRadius: 999,
          background: selected
            ? "rgba(22,119,255,0.16)"
            : "rgba(22,119,255,0.08)",
          border: "1px solid rgba(22,119,255,0.25)",
          fontSize: 11,
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <CaretRightOutlined
          onClick={(event: ReactNS.MouseEvent<HTMLSpanElement>) => {
            event.stopPropagation();
            onToggle();
          }}
          style={{
            fontSize: 10,
            transition: "transform 0.15s",
            transform: collapsed ? "rotate(0deg)" : "rotate(90deg)",
          }}
        />
        <Text strong style={{ fontSize: 11 }}>
          Request #{turn.turn}
        </Text>
        {turn.durationMs !== null && (
          <Text type="secondary" style={{ fontSize: 11 }}>
            {formatSeconds(turn.durationMs / 1000)}
          </Text>
        )}
        <Text type="secondary" style={{ fontSize: 11 }}>
          {cellCount} {t(locale, "events")}
        </Text>
        <Tag
          color={STATUS_COLORS[turn.status] ?? "default"}
          style={{ marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }}
        >
          {statusLabel(turn.status)}
        </Tag>
      </span>
    </div>
  );
}

/** The trajectory ledger with windowed rendering for long sessions. */
export function Ledger({
  turns,
  selectedIndex,
  selectedTurn,
  collapsedTurns,
  focusIndexes,
  searchMatchIndexes,
  onSelectedIndexChange,
  onSelectedTurnChange,
  onToggleTurn,
  callsCollapsed,
  hasOlderRecords,
  loadingOlder,
  onLoadOlder,
  initialRecord,
  emptyText,
}: LedgerProps) {
  const locale = storedLocale();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const visibleTurns = turns.filter((turn) => turn.turn !== null);
  const multiRequest = visibleTurns.length > 1;

  const rows = React.useMemo<LedgerRowModel[]>(() => {
    const out: LedgerRowModel[] = [];
    if (hasOlderRecords) {
      out.push({
        key: "load-older",
        height: LOAD_OLDER_HEIGHT,
        type: "load-older",
      });
    }
    if (initialRecord) {
      out.push({
        key: "initial",
        height: ROW_HEIGHT,
        type: "initial",
        record: initialRecord,
      });
      out.push({
        key: "initial-divider",
        height: DIVIDER_HEIGHT,
        type: "divider",
      });
    }
    for (const turn of visibleTurns) {
      const turnNumber = turn.turn as number;
      out.push({
        key: `turn-${turnNumber}`,
        height: BOUNDARY_HEIGHT,
        type: "boundary",
        turn,
      });
      if (collapsedTurns.has(turnNumber)) continue;
      for (const record of turn.groups[0]?.cells ?? []) {
        if (callsCollapsed && record.kind === "tool") continue;
        out.push({
          key: `rec-${record.index}`,
          height: ROW_HEIGHT,
          type: "record",
          record,
        });
      }
    }
    return out;
  }, [
    visibleTurns,
    collapsedTurns,
    callsCollapsed,
    hasOlderRecords,
    initialRecord,
  ]);

  const dimFor = React.useCallback(
    (record: TrajectoryRecord): boolean => {
      if (focusIndexes !== null && !focusIndexes.has(record.index)) {
        return true;
      }
      if (
        searchMatchIndexes !== null &&
        !searchMatchIndexes.has(record.index)
      ) {
        return true;
      }
      return false;
    },
    [focusIndexes, searchMatchIndexes],
  );

  const renderRow = (row: LedgerRowModel): ReactNS.ReactNode => {
    switch (row.type) {
      case "load-older":
        return (
          <div style={{ textAlign: "center", height: LOAD_OLDER_HEIGHT }}>
            <button
              type="button"
              onClick={onLoadOlder}
              disabled={loadingOlder}
              style={{
                border: "1px solid rgba(128,128,128,0.3)",
                borderRadius: 10,
                background: "transparent",
                padding: "1px 12px",
                fontSize: 11,
                cursor: loadingOlder ? "default" : "pointer",
                color: "rgba(128,128,128,1)",
              }}
            >
              {loadingOlder ? "…" : `⋯ ${t(locale, "loadOlder")}`}
            </button>
          </div>
        );
      case "divider":
        return (
          <div
            style={{
              height: DIVIDER_HEIGHT,
              borderBottom: "1px dashed rgba(128,128,128,0.25)",
            }}
          />
        );
      case "initial": {
        const record = row.record as TrajectoryRecord;
        return (
          <RecordRow
            record={record}
            selected={selectedIndex === record.index}
            dimmed={dimFor(record)}
            multiRequest={multiRequest}
            onSelect={() => onSelectedIndexChange(record.index)}
          />
        );
      }
      case "boundary": {
        const turn = row.turn as TrajectoryTurnModel;
        const turnNumber = turn.turn as number;
        return (
          <BoundaryRow
            turn={turn}
            collapsed={collapsedTurns.has(turnNumber)}
            selected={selectedTurn === turnNumber}
            cellCount={turn.groups[0]?.cells.length ?? 0}
            onToggle={() => onToggleTurn(turnNumber)}
            onSelect={() => onSelectedTurnChange(turnNumber)}
          />
        );
      }
      case "record":
      default: {
        const record = row.record as TrajectoryRecord;
        return (
          <RecordRow
            record={record}
            selected={selectedIndex === record.index}
            dimmed={dimFor(record)}
            multiRequest={multiRequest}
            onSelect={() => onSelectedIndexChange(record.index)}
          />
        );
      }
    }
  };

  if (rows.length === 0) {
    return (
      <div
        style={{
          height: "100%",
          overflowY: "auto",
          padding: "4px 12px 24px",
        }}
      >
        <div
          style={{
            padding: 24,
            textAlign: "center",
            color: "rgba(128,128,128,1)",
            fontSize: 12,
          }}
        >
          {emptyText ?? t(locale, "noSessions")}
        </div>
      </div>
    );
  }

  const body =
    rows.length <= VIRTUALIZE_THRESHOLD ? (
      <div>{rows.map((row) => renderRow(row))}</div>
    ) : (
      <VirtualizedLedger
        rows={rows}
        scrollRef={scrollRef}
        renderRow={renderRow}
      />
    );

  return (
    <div
      ref={scrollRef}
      style={{
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px",
      }}
    >
      {body}
    </div>
  );
}

/** Windowed ledger body for very long sessions. */
function VirtualizedLedger({
  rows,
  scrollRef,
  renderRow,
}: {
  rows: LedgerRowModel[];
  scrollRef: ReactNS.RefObject<HTMLDivElement | null>;
  renderRow: (row: LedgerRowModel) => ReactNS.ReactNode;
}) {
  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: (index: number) => rows[index].height,
    overscan: 12,
  });
  return (
    <div
      style={{
        height: virtualizer.getTotalSize(),
        position: "relative",
        width: "100%",
      }}
    >
      {virtualizer.getVirtualItems().map((item) => (
        <div
          key={rows[item.index].key}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: item.size,
            transform: `translateY(${item.start}px)`,
          }}
        >
          {renderRow(rows[item.index])}
        </div>
      ))}
    </div>
  );
}
