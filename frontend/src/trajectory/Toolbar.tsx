/** Sticky trajectory toolbar: projection mode, search, refresh. */

import type * as ReactNS from "react";

import { storedLocale, t } from "../locale";
import type { TrajectoryTimelineMode } from "./timeline";

const host = window.QwenPaw.host;
const React: typeof ReactNS = host.React;
const { Button, Input, Popover, Segmented, Tooltip } = host.antd;
const {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  SearchOutlined,
} = host.antdIcons;

export interface ToolbarProps {
  mode: TrajectoryTimelineMode;
  onModeChange: (mode: TrajectoryTimelineMode) => void;
  search: string;
  onSearchChange: (value: string) => void;
  onRefresh: () => void;
  modeOptions: { label: string; value: TrajectoryTimelineMode }[];
  allCollapsed: boolean;
  hasRequests: boolean;
  onToggleCollapseAll: () => void;
  callsCollapsed: boolean;
  onToggleCallsCollapsed: () => void;
}

/** Toolbar above the timeline with projection switch and search. */
export function Toolbar({
  mode,
  onModeChange,
  search,
  onSearchChange,
  onRefresh,
  modeOptions,
  allCollapsed,
  hasRequests,
  onToggleCollapseAll,
  callsCollapsed,
  onToggleCallsCollapsed,
}: ToolbarProps) {
  const locale = storedLocale();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "6px 12px",
        borderBottom: "1px solid rgba(128,128,128,0.15)",
        flexWrap: "wrap",
      }}
    >
      <Tooltip title={t(locale, "projectionHint")}>
        <Segmented
          size="small"
          value={mode}
          options={modeOptions}
          onChange={(value: string | number) =>
            onModeChange(value as TrajectoryTimelineMode)
          }
        />
      </Tooltip>
      <Input
        size="small"
        allowClear
        prefix={<SearchOutlined />}
        placeholder={t(locale, "searchEvents")}
        value={search}
        style={{ width: 220 }}
        onChange={(event: { target: { value: string } }) =>
          onSearchChange(event.target.value)
        }
      />
      {hasRequests && (
        <Tooltip
          title={
            allCollapsed ? t(locale, "expandAll") : t(locale, "collapseAll")
          }
        >
          <Button
            size="small"
            type="text"
            icon={allCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={onToggleCollapseAll}
          />
        </Tooltip>
      )}
      <span style={{ marginLeft: "auto", display: "inline-flex", gap: 10 }}>
        <Popover
          trigger="click"
          placement="bottomRight"
          content={
            <div style={{ maxWidth: 340, fontSize: 12, lineHeight: "20px" }}>
              <div>
                <strong>📚</strong> {t(locale, "legendLoad")}
              </div>
              <div>
                <strong>⚡</strong> {t(locale, "legendResource")}
              </div>
              <div>
                <strong>∈</strong> {t(locale, "legendGuided")}
              </div>
              <div>
                <strong>{t(locale, "legendStripTitle")}</strong>{" "}
                {t(locale, "legendStrip")}
              </div>
              <div>
                <strong>{t(locale, "legendBandTitle")}</strong>{" "}
                {t(locale, "legendBand")}
              </div>
            </div>
          }
        >
          <a style={{ fontSize: 12, color: "rgba(128,128,128,1)" }}>
            <QuestionCircleOutlined /> {t(locale, "legendTitle")}
          </a>
        </Popover>
        <a
          onClick={onRefresh}
          style={{ fontSize: 12, color: "rgba(128,128,128,1)" }}
        >
          <ReloadOutlined /> {t(locale, "refresh")}
        </a>
      </span>
    </div>
  );
}
