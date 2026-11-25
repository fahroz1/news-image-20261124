# THE WORLD — Tuesday, 24 November 2026

A one-page newspaper image summing up 24 November 2026's world news, built
for the make.fun competition **news-image-20261124** by @fahroz1.

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/fahroz1/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/fahroz1/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

## The paper

`entry.png` is a single 1024×1024 newspaper front page, drawn procedurally
and deterministically (no downloaded or stock imagery). It carries exactly
seven stories, all first reported on Tuesday, 24 November 2026:

1. **PATRIOTS HELD UP** — US Defence Secretary Pete Hegseth has yet to
   approve about 60 promised Patriot interceptors for Ukraine (Financial
   Times / Reuters).
2. **QUAKE SHAKES NEPAL** — a magnitude 5.6 earthquake in eastern Nepal
   near the Tibet border (The Himalayan Times).
3. **GAZA STRIKES KILL HAMAS SECURITY CHIEF** — Israeli strikes in Gaza
   killed Hamas internal-security chief Naeem Abu Nahel and six others
   (Reuters).
4. **ZAPORIZHZHIA HIT OVERNIGHT** — a Russian overnight strike killed 2
   and wounded 40, including 4 children (Reuters).
5. **TRUMP READIES NEW TARIFFS** — new Section 301 tariffs prepared
   against 16 major trading partners (Reuters).
6. **FACTORY FIRE TOLL RISES TO 26** — 26 workers killed in the PT Fonusa
   Agung Mulia candy-factory fire in Serang, Banten, Indonesia
   (Associated Press).
7. **RUSSIAN JETS ENTER KOREAN ZONE** — Russian aircraft entered South
   Korea's air defence identification zone (Reuters).

## How it is built

- `entry.png` — the finished newspaper page (1024×1024, ≤ 1 MiB).
- `main.ts` — copies `entry.png` into the directory given by the
  `MAKEFUN_OUTPUT_DIR` environment variable, or `/output` when unset.
  Paths are resolved relative to the script file itself, so it works from
  any working directory. Running it twice produces byte-identical output.

## License

MIT — see `LICENSE`.
