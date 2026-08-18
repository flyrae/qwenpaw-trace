/**
 * Guards against using icons missing from the Console host's
 * @ant-design/icons version (rendering an undefined icon crashes the
 * page with React error #130).
 *
 * Usage: node scripts/check-icons.js [path-to-console-node-modules]
 */

const fs = require("fs");
const path = require("path");

const fallbackRoots = [
  "D:/develop/QwenPaw/console/node_modules",
  "D:/develop/code/QwenPaw/console/node_modules",
];
const iconsRoot =
  process.argv[2] && fs.existsSync(process.argv[2])
    ? process.argv[2]
    : fallbackRoots.find((root) => fs.existsSync(root));
if (!iconsRoot) {
  console.error("check-icons: console node_modules not found; skipping");
  process.exit(0);
}
const icons = require(path.join(iconsRoot, "@ant-design/icons"));

const srcDir = path.resolve(__dirname, "../src");
const used = new Set();
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(tsx?|js)$/.test(entry.name)) {
      const text = fs.readFileSync(full, "utf8");
      for (const match of text.matchAll(
        /\b([A-Za-z]+(?:Outlined|Filled))\b/g,
      )) {
        used.add(match[1]);
      }
    }
  }
};
walk(srcDir);

const missing = [...used].filter((name) => typeof icons[name] === "undefined");
if (missing.length > 0) {
  console.error("check-icons: MISSING FROM HOST:", missing.join(", "));
  process.exit(1);
}
console.log(`check-icons: ${used.size} icon(s) all present in host`);
