#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Refresh the standalone UI shell under server/ui/.

Copies the vendored UMD libraries (React / ReactDOM / antd / icons —
same versions the QwenPaw Console uses) and the plugin's built bundle
(frontend/dist/index.js → app.js).

Usage:
    python server/ui/build-ui.py [--console-node-modules PATH]

Defaults to the sibling QwenPaw checkout's console/node_modules; any
npm-installed antd 5.x + react 18 tree works.
"""
from __future__ import annotations

import argparse
import shutil
import sys
from pathlib import Path

UI_DIR = Path(__file__).resolve().parent
REPO = UI_DIR.parent.parent

VENDOR_SOURCES = {
    "react.production.min.js": "react/umd/react.production.min.js",
    "react-dom.production.min.js": (
        "react-dom/umd/react-dom.production.min.js"
    ),
    "dayjs.min.js": "dayjs/dayjs.min.js",
    "antd.min.js": "antd/dist/antd.min.js",
    "antd-reset.css": "antd/dist/reset.css",
    "icons.umd.min.js": "@ant-design/icons/dist/index.umd.min.js",
}


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--console-node-modules",
        default=r"D:\develop\code\QwenPaw\console\node_modules",
    )
    args = parser.parse_args()
    node_modules = Path(args.console_node_modules)

    vendor = UI_DIR / "vendor"
    vendor.mkdir(exist_ok=True)
    for target, relative in VENDOR_SOURCES.items():
        source = node_modules / relative
        if not source.exists():
            print(f"missing vendor source: {source}", file=sys.stderr)
            return 1
        shutil.copy2(source, vendor / target)
        print(f"vendor/{target}  <-  {relative}")

    bundle = REPO / "dist" / "index.js"
    if not bundle.exists():
        print(
            f"bundle missing: {bundle} (run npm run build in frontend/)",
            file=sys.stderr,
        )
        return 1
    shutil.copy2(bundle, UI_DIR / "app.js")
    print("app.js  <-  dist/index.js")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
