/**
 * Pure formatting helpers + status constants shared between the full
 * trace page and the docked chat panel. No host dependencies.
 */

export function shortId(id: string): string {
  return id.length > 8 ? id.slice(0, 8) : id;
}

export function formatTime(iso: string | null | undefined): string {
  if (!iso) return "-";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleString();
}

export function formatRelative(iso: string | null | undefined): string {
  if (!iso) return "-";
  const value = Date.parse(iso);
  if (!Number.isFinite(value)) return iso;
  const delta = Date.now() - value;
  if (delta < 60_000) return "刚刚";
  if (delta < 3_600_000) return `${Math.floor(delta / 60_000)} 分钟前`;
  if (delta < 86_400_000) return `${Math.floor(delta / 3_600_000)} 小时前`;
  return new Date(value).toLocaleString();
}

export function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 10_000) return `${(n / 1000).toFixed(0)}k`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

export function formatBytes(n: number): string {
  if (n >= 1024 * 1024) return `${(n / (1024 * 1024)).toFixed(1)}MB`;
  if (n >= 1024) return `${(n / 1024).toFixed(1)}KB`;
  return `${n}B`;
}

export const STATUS_COLORS: Record<string, string> = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default",
};

export function statusText(status: string): string {
  return status || "unknown";
}
