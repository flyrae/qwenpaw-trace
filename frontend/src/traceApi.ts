/** REST client for the agent-trace backend + shared wire types. */

const host = window.QwenPaw.host;

export interface SessionSummary {
  session_id: string;
  title?: string;
  chat_status?: string;
  agent_id: string;
  channel: string;
  created_at: string | null;
  last_event_t: string | null;
  mtime: number;
  runs: number;
  llm_calls: number;
  tool_calls: number;
  total_tokens: number;
  status: string;
  size_bytes: number;
  /** Skill loads aggregated per skill name (builtin Skill tool calls). */
  skills?: Record<string, number>;
}

export interface TraceEvent {
  seq: number;
  t: string;
  type: string;
  run_id: string;
  data: Record<string, unknown>;
}

export interface SessionDetail {
  header: Record<string, unknown> | null;
  events: TraceEvent[];
  total_events: number;
  size_bytes: number;
  mtime: number;
}

export interface SessionStats {
  runs: number;
  llm_calls: number;
  tool_calls: number;
  errors: number;
  input_tokens: number;
  output_tokens: number;
  total_tokens: number;
  cache_read_tokens: number;
  cache_write_tokens: number;
  llm_ms_total: number;
  tool_ms_total: number;
  decode_ms_total: number;
  ttft_ms_avg: number | null;
  ttft_ms_first: number | null;
  skills?: Record<string, number>;
  [key: string]: unknown;
}

export async function fetchSessionStats(
  sessionId: string,
): Promise<SessionStats> {
  return requestJson<SessionStats>(
    `/agent-trace/sessions/${encodeURIComponent(sessionId)}/stats`,
  );
}

export interface TraceConfigUi {
  enabled: boolean;
  capture_llm: boolean;
  capture_tools: boolean;
  capture_headers?: boolean;
  [key: string]: unknown;
}

async function requestRaw(path: string, init?: RequestInit): Promise<Response> {
  return host.fetch
    ? host.fetch(path, init)
    : fetch(host.getApiUrl(path), {
        ...init,
        headers: {
          ...(init?.headers || {}),
          ...(host.getApiToken()
            ? { Authorization: `Bearer ${host.getApiToken()}` }
            : {}),
        },
      });
}

/** HTTP error from the plugin API, carrying the status code so callers
 * can branch on it (e.g. 404 = session without trace data) instead of
 * matching on the human-readable detail string. */
export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function requestJson<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const response = await requestRaw(path, init);
  const text = await response.text();
  let payload: unknown = null;
  try {
    payload = text ? JSON.parse(text) : null;
  } catch {
    payload = null;
  }
  if (!response.ok) {
    const detail =
      payload && typeof payload === "object" && "detail" in payload
        ? (payload as { detail?: unknown }).detail
        : undefined;
    throw new ApiError(
      response.status,
      typeof detail === "string" ? detail : `HTTP ${response.status}`,
    );
  }
  return payload as T;
}

export interface SessionsPage {
  sessions: SessionSummary[];
  total: number;
  offset: number;
  has_more: boolean;
}

export async function fetchSessionsPage(options?: {
  limit?: number;
  offset?: number;
}): Promise<SessionsPage> {
  const params = new URLSearchParams();
  params.set("limit", String(options?.limit ?? 100));
  if (options?.offset) params.set("offset", String(options.offset));
  return requestJson<SessionsPage>(
    `/agent-trace/sessions?${params.toString()}`,
  );
}

export async function fetchSessions(): Promise<SessionSummary[]> {
  const pages: SessionSummary[] = [];
  let offset = 0;
  for (;;) {
    const page = await fetchSessionsPage({ offset });
    pages.push(...page.sessions);
    if (!page.has_more) break;
    offset += page.sessions.length;
  }
  return pages;
}

export async function fetchSessionEvents(
  sessionId: string,
  options?: { beforeSeq?: number; limit?: number },
): Promise<SessionDetail> {
  const params = new URLSearchParams();
  if (options?.beforeSeq) {
    params.set("before_seq", String(options.beforeSeq));
  }
  params.set("limit", String(options?.limit ?? 200));
  const query = params.toString();
  return requestJson<SessionDetail>(
    `/agent-trace/sessions/${encodeURIComponent(sessionId)}?${query}`,
  );
}

export async function fetchConfig(): Promise<TraceConfigUi> {
  return requestJson<TraceConfigUi>("/agent-trace/config");
}

export async function updateConfig(
  patch: Partial<TraceConfigUi>,
): Promise<TraceConfigUi> {
  return requestJson<TraceConfigUi>("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patch),
  });
}

export async function exportSessionFile(sessionId: string): Promise<void> {
  const response = await requestRaw(
    `/agent-trace/sessions/${encodeURIComponent(sessionId)}/export`,
  );
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${sessionId}.jsonl`;
  anchor.click();
  URL.revokeObjectURL(url);
}

export async function deleteSessionRemote(sessionId: string): Promise<void> {
  await requestJson(`/agent-trace/sessions/${encodeURIComponent(sessionId)}`, {
    method: "DELETE",
  });
}

/**
 * Map the Console's current-session id to a backend trace session id.
 * Console chat ids come in more than one local shape (timestamp-random
 * or UUID), so no client-side pattern guessing — /resolve answers for
 * every form (backend trace ids resolve to themselves, unknown → null).
 * Falls back to the raw id when the API is unreachable.
 */
export async function resolveTraceSessionId(
  raw: string | null,
): Promise<string | null> {
  if (!raw) return null;
  try {
    const body = await requestJson<{ session_id: string | null }>(
      `/agent-trace/resolve?chat_id=${encodeURIComponent(raw)}`,
    );
    return body.session_id ?? null;
  } catch {
    return raw;
  }
}
