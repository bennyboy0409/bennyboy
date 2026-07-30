# profile readme

A self-updating GitHub profile page: ASCII portrait, contribution graph, language
and streak stats. [`README.md`](README.md) in this folder is generated output —
edit [`config.json`](config.json) instead.

## What is generated from what

| Part | Source |
| --- | --- |
| ASCII portrait | rendered once from a photo, committed as SVG |
| Big number, sparkline, active days, best week | GitHub contribution calendar |
| Streaks, language bars, year heatmap | contribution calendar + repo language sizes |
| about / tagline / stack / links | `config.json`, by hand |
| projects | `config.json`, merged with your public repos |

Everything ships as two SVGs, one per colour scheme, so the page reads correctly
in both GitHub themes.

## Setup

**1. Add a token.** Repo → Settings → Secrets and variables → Actions → New
repository secret, named `GH_PROFILE_TOKEN`. Use a classic personal access token
with the `read:user` scope. Without it the workflow falls back to the built-in
`GITHUB_TOKEN`, which cannot read the contribution calendar reliably.

To count activity in private repos as well, also tick `repo` on the token and set
`stats.include_private` to `true` in `config.json`. Private *names* are never
printed either way — only the aggregate byte counts move.

**2. The portrait.** Already rendered and committed as
`assets/portrait-dark.svg` / `assets/portrait-light.svg`.

The photograph it came from is **not** in this repository and is not meant to be.
Only the ASCII output ships — plain `<text>` elements, no embedded image data, so
the photo cannot be recovered from it. `.gitignore` blocks `profile/assets/portrait.*`
as a second line of defence.

To re-render from a different photo, point the generator at one anywhere on disk:

```sh
python3 profile/generate.py --offline --photo ~/Pictures/face.jpg
```

Then commit the two SVGs it rewrites. CI has no photo to work from, so it leaves
the committed artwork alone and only refreshes the numbers.

**3. Let it run.** The workflow rebuilds on every push that touches `config.json`,
`generate.py` or the portrait, once a day on a schedule, and on demand from the
Actions tab. The scheduled run only fires from the default branch.

## Running it yourself

```sh
pip install pillow
GH_PROFILE_TOKEN=ghp_xxx python3 profile/generate.py

python3 profile/generate.py --sample    # demo data, no token, to preview layout
python3 profile/generate.py --offline   # re-render from the last fetched data
```

Live runs cache their response in `data/stats.json`. If a later fetch fails —
rate limit, expired token — the page rebuilds from that cache instead of going
blank.

## Tuning the portrait

In `config.json` under `portrait`:

- `columns` — width in characters. More columns, more detail, wider image.
- `contrast` / `gamma` — raise the contrast, lower the gamma, if the face reads
  flat.
- `ink` — which end of the photo becomes glyphs. `dark` draws the dark parts and
  leaves a bright background empty; `bright` does the opposite, for a photo shot
  against a dark backdrop. Pick wrong and the frame fills in solid.

## Moving it to your profile

GitHub shows a profile README from a **public** repository named exactly after
your account — `bennyboy0409/bennyboy0409` — with the README at its root. To move
this there, copy `profile/README.md` to that repo's root as `README.md`, copy
`profile/assets/` and `profile/data/` alongside it, copy `config.json` and
`generate.py`, and adjust the paths in the workflow (`profile/` → repo root).
