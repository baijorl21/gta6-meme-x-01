# GTA 6 Meme for make.fun

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/baijorl21/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/baijorl21/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for make.fun's bounty ["Post a GTA 6 meme on X"](https://make.fun/bounty/gta6-meme-x-01):
an original GTA 6 meme featuring make.fun's ghost mascot grinding bounties in a
neon Vice City-style street, posted on X from a public account. The post itself
is the entry; this repository hands in its address in `POST.json`.

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win.

## Files

- `meme.png` — the meme picture posted on X (original artwork; make.fun ghost
  mascot from the official press kit at https://make.fun/press/).
- `POST.json` — `{"url": "https://x.com/<handle>/status/<id>"}` naming the post.
- `main.ts` — copies `POST.json` to the output directory for the gate.
- `draft-post.txt` — the exact post text used on X.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
