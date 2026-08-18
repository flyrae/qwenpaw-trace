import type * as ReactNS from "react";

declare global {
  interface QwenPawHost {
    React: typeof ReactNS;
    antd: any;
    antdIcons: any;
    getApiUrl: (path: string) => string;
    getApiToken: () => string;
    useLocale?: () => string;
    useTheme?: () => "light" | "dark";
    fetch?: (path: string, init?: RequestInit) => Promise<Response>;
    getCurrentSessionId?: () => string | null;
  }

  interface QwenPawRoute {
    path: string;
    component: unknown;
    label?: string;
    icon?: string;
    priority?: number;
  }

  interface QwenPawChatNamespace {
    rightHeader?: {
      add?: (
        pluginId: string,
        node: ReactNS.ReactNode,
        opts?: { id?: string; order?: number },
      ) => unknown;
    };
  }

  interface QwenPawGlobal {
    host: QwenPawHost;
    registerRoutes?: (pluginId: string, routes: QwenPawRoute[]) => void;
    chat?: QwenPawChatNamespace;
  }

  interface Window {
    QwenPaw: QwenPawGlobal;
  }
}

export {};
