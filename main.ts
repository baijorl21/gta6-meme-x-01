// Entry program for make.fun's gta6-meme-x-01 bounty ("Post a GTA 6 meme on X").
//
// The entry itself is the X post: an original GTA 6 meme picture with make.fun's
// ghost mascot in it (meme.png in this repo), posted from a public X account with
// make.fun and the entrant's play code in the post text. This program's only job
// is to hand the post's address to the gate: it copies POST.json from the
// repository root to the output directory, byte for byte.
//
// Locally:  mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
