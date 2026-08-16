/**
 * Executes the built bundle's top level under a faked plugin host.
 *
 * The Console loads dist/index.js as a native ES module — this smoke
 * test imports it in Node with a Proxy-based host so load-time
 * failures (bare specifiers, undefined members at module scope,
 * document access) break the build instead of the user's page.
 */

const path = require("path");

function makeProxy() {
  const handler = {
    get(target, prop) {
      if (prop === Symbol.toPrimitive) return () => "";
      if (prop === "then") return undefined;
      return makeProxy();
    },
    apply() {
      return makeProxy();
    },
    construct() {
      return makeProxy();
    },
  };
  return new Proxy(function stub() {}, handler);
}

globalThis.window = makeProxy();
globalThis.document = {
  createElement: () => ({
    style: {},
    set textContent(_value) {},
    appendChild() {},
  }),
  head: { appendChild() {} },
  getElementById: () => null,
};

const dist = path.resolve(__dirname, "../../dist/index.js");
import(`file:///${dist.replace(/\\/g, "/")}`)
  .then(() => {
    console.log("smoke-import: bundle executed cleanly");
  })
  .catch((error) => {
    console.error("smoke-import: FAILED:", error && error.stack);
    process.exit(1);
  });
