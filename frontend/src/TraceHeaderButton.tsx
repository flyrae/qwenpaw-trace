/**
 * Chat-header quick jump: opens the standalone trace page with the
 * current conversation preselected (deep link ?session=…), registered
 * via QwenPaw.chat.rightHeader.add.
 */

import type * as ReactNS from "react";

import { resolveLocale, storedLocale, t } from "./locale";
import { resolveTraceSessionId } from "./traceApi";

const host = window.QwenPaw.host;
const React: typeof ReactNS = host.React;
const { useMemo } = React;
const { Button, Tooltip } = host.antd;
const { CompassOutlined } = host.antdIcons;

/**
 * Absolute URL path for the trace page, keeping the `/console` router
 * basename the host may be serving under (App.tsx getRouterBasename).
 */
export function tracePagePath(sessionId: string | null): string {
  const base = window.location.pathname.startsWith("/console")
    ? "/console"
    : "";
  return `${base}/plugin/agent-trace${
    sessionId ? `?session=${encodeURIComponent(sessionId)}` : ""
  }`;
}

/** 🧭 header button — jumps straight to the current session's trace. */
export function TraceHeaderButton() {
  // Host hooks must be called at the top level on every render — the
  // hook count has to stay stable.
  const hostLocale =
    typeof host.useLocale === "function" ? host.useLocale() : undefined;
  const locale = useMemo(
    () => resolveLocale(hostLocale ?? storedLocale()),
    [hostLocale],
  );
  return (
    <Tooltip title={t(locale, "viewCurrentTrace")}>
      <Button
        size="small"
        type="text"
        icon={<CompassOutlined />}
        aria-label={t(locale, "viewCurrentTrace")}
        onClick={() => {
          const raw =
            typeof host.getCurrentSessionId === "function"
              ? host.getCurrentSessionId()
              : null;
          // When nothing resolves yet (e.g. a brand-new chat with no
          // trace), keep the raw id so the page shows its friendly
          // "no trace yet" state instead of the bare session list.
          void resolveTraceSessionId(raw).then((sessionId) => {
            window.location.href = tracePagePath(sessionId ?? raw);
          });
        }}
      />
    </Tooltip>
  );
}
