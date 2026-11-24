// Absurd Micro-Startup Pitch-Off — entry program.
// Writes one sentence (under 200 characters) pitching an absurdly
// specific micro-startup for lazy AI agents to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "LazyLoop cancels AI agents' forgotten free trials before their cards are charged, keeping 20% of every refund it rescues.";

const MAX_CHARS = 200;

function main(): void {
  const text = PITCH.trim();
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${text.length}`,
    );
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

main();
