/**
 * Guards the built plugin bundle against bare module specifiers.
 *
 * The Console host executes dist/index.js as a native ES module, so
 * any bare import (e.g. `from "react"`) fails at load time with
 * "Failed to resolve module specifier". This script fails the build
 * if one slips through.
 */

const fs = require("fs");
const path = require("path");

const dist = path.resolve(__dirname, "../../dist/index.js");
if (!fs.existsSync(dist)) {
  console.error("check-bundle: dist/index.js not built yet; skipping");
  process.exit(0);
}
const source = fs.readFileSync(dist, "utf8");
const staticFrom = /(?:^|[\n;])\s*import\s+[^'"]*?from\s*["']([^"']+)["']/g;
const sideEffect = /(?:^|[\n;])\s*import\s*["']([^"']+)["']/g;
const dynamic = /import\s*\(\s*["']([^"']+)["']\s*\)/g;

// Only relative ("./", "../") and absolute ("/") specifiers are legal in
// a native ES module without an import map; anything else — including
// scoped packages like "@tanstack/react-virtual" — is a bare specifier.
const isBare = (spec) => !spec.startsWith(".") && !spec.startsWith("/");

const offenders = new Set();
let match;
for (const pattern of [staticFrom, sideEffect, dynamic]) {
  while ((match = pattern.exec(source)) !== null) {
    if (isBare(match[1])) offenders.add(match[1]);
  }
}

if (offenders.size > 0) {
  console.error(
    "check-bundle: bare module specifiers in bundle:",
    [...offenders].join(", "),
  );
  process.exit(1);
}
console.log("check-bundle: no bare module specifiers");
