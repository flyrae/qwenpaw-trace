import { TraceHeaderButton } from "./TraceHeaderButton";
import { TracePage } from "./TracePage";
import { storedLocale, t } from "./locale";

const React = window.QwenPaw.host.React;

window.QwenPaw.registerRoutes?.("agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: TracePage,
    label: t(storedLocale(), "routeLabel"),
    icon: "🧭",
    priority: 44,
  },
]);

// Chat-header quick jump straight into the current session's trace.
// Optional chaining: hosts without the chat SDK keep the standalone page.
window.QwenPaw.chat?.rightHeader?.add?.(
  "agent-trace",
  React.createElement(TraceHeaderButton),
  { id: "agent-trace-jump" },
);
