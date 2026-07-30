# profile readme

A self-updating GitHub profile page: ASCII portrait, contribution graph, language
and streak stats. [`README.md`](README.md) in this folder is generated output —
edit [`config.json`](config.json) instead.

## What is generated from what

| Part | Source |
| --- | --- |
| ASCII portrait | `assets/portrait.jpg` (or `.png`), re-rendered every run |
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

**2. Add a photo.** Drop it at `profile/assets/portrait.jpg`. A head-and-shoulders
crop against a plain background works best. Without a photo the portrait block is
skipped and the rest of the page still builds.

Note that the photo itself is committed to the repository, so it is public if the
repository is.

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
- `light_mode` — `invert` draws the portrait as dark ink on white. If your photo
  has a dark background that turns the light-theme version into a solid block;
  set it to `reuse` to keep the dark-theme artwork in both.

## Moving it to your profile

GitHub shows a profile README from a **public** repository named exactly after
your account — `bennyboy0409/bennyboy0409` — with the README at its root. To move
this there, copy `profile/README.md` to that repo's root as `README.md`, copy
`profile/assets/` and `profile/data/` alongside it, copy `config.json` and
`generate.py`, and adjust the paths in the workflow (`profile/` → repo root).
