// main.ts — make.fun entry: news-image-20261124 ("THE WORLD", 24 Nov 2026)
// Written fresh for this entry. The newspaper image (entry.png) is a
// pre-rendered, deterministic 1024x1024 PNG that lives next to this script.
// This script's only job is to copy that image into the output directory
// chosen by MAKEFUN_OUTPUT_DIR (or "/output" when the variable is unset).
// It performs no network access, no downloads, and no other file writes.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve paths relative to this script file, never relative to the
// process working directory, so the grader can run it from any cwd.
const scriptDir = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(scriptDir, "entry.png");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const destinationImage = join(outputDir, "entry.png");

if (!existsSync(sourceImage)) {
  throw new Error(`entry.png not found next to main.ts: ${sourceImage}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourceImage, destinationImage);

console.log(`Copied entry.png to ${destinationImage}`);
