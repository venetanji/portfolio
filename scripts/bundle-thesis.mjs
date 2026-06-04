// Copy the pre-built thesis web edition into the Astro output at /thesis/.
//
// The thesis lives in its own repo, pinned here as a git submodule at
// vendor/thesis. Its `site/` directory is a self-contained, pre-built static
// site (pandoc chunkedhtml). We serve it as a subdirectory of venetanji.com —
// not a subdomain — so its SEO authority consolidates on the main domain.
//
// Runs after `astro build`. If the submodule hasn't been checked out (e.g. a
// shallow clone without submodules) we warn rather than fail the whole build.
import { existsSync, cpSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "vendor", "thesis", "site");
const dest = join(root, "dist", "thesis");

if (!existsSync(src) || readdirSync(src).length === 0) {
  console.warn(
    `[bundle-thesis] vendor/thesis/site is missing or empty — skipping.\n` +
      `  Run: git submodule update --init --recursive`
  );
  process.exit(0);
}

cpSync(src, dest, { recursive: true });
console.log(`[bundle-thesis] copied thesis web edition -> dist/thesis`);
