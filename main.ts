import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Away until Friday. I have forwarded urgent matters to my neighbour's dog, Rex, who has read 0 emails and barked at 14.";

// Guard: 1–160 chars, no surrounding whitespace (bounty rule).
if (LINE.length < 1 || LINE.length > 160 || LINE !== LINE.trim()) {
  throw new Error(`entry must be 1-160 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
