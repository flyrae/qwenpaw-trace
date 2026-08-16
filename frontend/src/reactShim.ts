/**
 * Runtime "react" module for bundled dependencies.
 *
 * The plugin host executes our bundle as a native ES module where bare
 * specifiers like `react` cannot resolve — our own code always uses
 * `window.QwenPaw.host.React`. Dependencies that statically import
 * "react" (e.g. @tanstack/react-virtual) are aliased to this shim at
 * build time so the emitted bundle never contains a bare import.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */

const R: any = (window as any).QwenPaw.host.React;

export const useRef: any = R.useRef;
export const useState: any = R.useState;
export const useCallback: any = R.useCallback;
export const useMemo: any = R.useMemo;
export const useEffect: any = R.useEffect;
export const useLayoutEffect: any = R.useLayoutEffect;
export const useReducer: any = R.useReducer;
export const createContext: any = R.createContext;
export const useContext: any = R.useContext;
export const createElement: any = R.createElement;
export const cloneElement: any = R.cloneElement;
export const isValidElement: any = R.isValidElement;
export const memo: any = R.memo;
export const forwardRef: any = R.forwardRef;
export const Fragment: any = R.Fragment;
export const StrictMode: any = R.StrictMode;
export const version: string = R.version;

export default R;
