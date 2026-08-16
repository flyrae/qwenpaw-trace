import { TracePage } from "./TracePage";
import { storedLocale, t } from "./locale";

window.QwenPaw.registerRoutes?.("agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: TracePage,
    label: t(storedLocale(), "routeLabel"),
    icon: "🧭",
    priority: 44,
  },
]);
