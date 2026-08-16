/**
 * Runtime "react-dom" module for bundled dependencies.
 *
 * The plugin host does not expose ReactDOM; the only API our bundled
 * deps use is `flushSync` (@tanstack/react-virtual measurement
 * flushes). Executing the callback synchronously preserves behavior —
 * React 18 batching makes the difference at most one extra frame.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */

export function flushSync(fn?: () => unknown): unknown {
  return fn ? fn() : undefined;
}

const ReactDOM: any = { flushSync };
export default ReactDOM;
