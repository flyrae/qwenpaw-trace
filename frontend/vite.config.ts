import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react({ jsxRuntime: "classic" })],
  resolve: {
    alias: {
      // Dependencies that import "react"/"react-dom" resolve to host
      // shims so the emitted bundle never contains a bare specifier.
      react: resolve(__dirname, "src/reactShim.ts"),
      "react-dom": resolve(__dirname, "src/reactDomShim.ts"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      formats: ["es"],
      fileName: () => "index.js",
    },
    outDir: resolve(__dirname, "../dist"),
    emptyOutDir: true,
  },
});
