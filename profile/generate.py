#!/usr/bin/env python3
"""Generate the profile README: ASCII portrait, contribution hero, stats.

Run it with a token to pull live data:

    GH_PROFILE_TOKEN=ghp_... python3 profile/generate.py

Without a token it falls back to the last cached run (profile/data/stats.json),
so a rate limit or an expired secret never blanks out the page.
"""

from __future__ import annotations

import argparse
import datetime as dt
import hashlib
import json
import os
import sys
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent
ASSETS = ROOT / "assets"
DATA = ROOT / "data"

GRAPHQL = "https://api.github.com/graphql"

QUERY = """
query($login: String!, $privacy: RepositoryPrivacy) {
  user(login: $login) {
    login
    url
    avatarUrl(size: 460)
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount weekday } }
      }
    }
    repositories(first: 100, ownerAffiliations: OWNER, isFork: false,
                 privacy: $privacy, orderBy: {field: PUSHED_AT, direction: DESC}) {
      nodes {
        name url description isPrivate stargazerCount pushedAt
        primaryLanguage { name }
        languages(first: 12, orderBy: {field: SIZE, direction: DESC}) {
          edges { size node { name } }
        }
      }
    }
  }
}
"""

# ---------------------------------------------------------------- palettes

THEMES = {
    "dark": {
        "fg": "#e6edf3",
        "muted": "#8b949e",
        "faint": "#484f58",
        "line": "#e6edf3",
        "fill": "#e6edf3",
        "fill_opacity": "0.09",
    },
    "light": {
        "fg": "#1f2328",
        "muted": "#59636e",
        "faint": "#afb8c1",
        "line": "#1f2328",
        "fill": "#1f2328",
        "fill_opacity": "0.07",
    },
}

MONO = "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace"
SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"


# ---------------------------------------------------------------- fetching


def fetch(login: str, token: str, include_private: bool) -> dict:
    payload = {
        "query": QUERY,
        "variables": {"login": login, "privacy": None if include_private else "PUBLIC"},
    }
    req = urllib.request.Request(
        GRAPHQL,
        data=json.dumps(payload).encode(),
        headers={
            "Authorization": f"bearer {token}",
            "Content-Type": "application/json",
            "User-Agent": f"{login}-profile-readme",
        },
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        body = json.load(resp)
    if "errors" in body:
        raise RuntimeError(json.dumps(body["errors"])[:400])
    user = body.get("data", {}).get("user")
    if not user:
        raise RuntimeError(f"no such user: {login}")
    return user


def normalise(user: dict) -> dict:
    """Flatten the GraphQL payload into the shape the renderers want."""
    cal = user["contributionsCollection"]["contributionCalendar"]
    days = [
        {"date": d["date"], "count": d["contributionCount"], "weekday": d["weekday"]}
        for w in cal["weeks"]
        for d in w["contributionDays"]
    ]
    repos = []
    for node in user["repositories"]["nodes"]:
        repos.append(
            {
                "name": node["name"],
                "url": node["url"],
                "description": node.get("description") or "",
                "private": node["isPrivate"],
                "stars": node["stargazerCount"],
                "pushed_at": node["pushedAt"],
                "primary_language": (node.get("primaryLanguage") or {}).get("name"),
                "languages": [
                    {"name": e["node"]["name"], "size": e["size"]}
                    for e in node["languages"]["edges"]
                ],
            }
        )
    return {
        "login": user["login"],
        "url": user["url"],
        "avatar_url": user["avatarUrl"],
        "total_contributions": cal["totalContributions"],
        "days": days,
        "repos": repos,
        "generated_at": dt.datetime.now(dt.timezone.utc).isoformat(timespec="seconds"),
        "sample": False,
    }


# ---------------------------------------------------------------- stats


def daily_series(days: list[dict]) -> list[dict]:
    """The last 365 days, oldest first.

    GitHub pads the calendar out to whole weeks at both ends, so the raw range
    runs a few days long — enough to make "N of 369 days" show up on the page.
    """
    today = dt.date.today()
    first = (today - dt.timedelta(days=364)).isoformat()
    return [d for d in days if first <= d["date"] <= today.isoformat()]


def streaks(days: list[dict]) -> tuple[dict, dict]:
    best = {"length": 0, "start": None, "end": None}
    run = {"length": 0, "start": None, "end": None}
    for d in days:
        if d["count"] > 0:
            if run["length"] == 0:
                run["start"] = d["date"]
            run["length"] += 1
            run["end"] = d["date"]
            if run["length"] > best["length"]:
                best = dict(run)
        else:
            run = {"length": 0, "start": None, "end": None}

    # The current streak may legitimately end yesterday: today isn't over yet.
    current = {"length": 0, "start": None, "end": None}
    for d in reversed(days):
        if d["count"] > 0:
            current["length"] += 1
            current["start"] = d["date"]
            if current["end"] is None:
                current["end"] = d["date"]
        elif current["length"] or d["date"] != days[-1]["date"]:
            break
    return current, best


def best_week(days: list[dict]) -> int:
    counts = [d["count"] for d in days]
    return max(
        (sum(counts[i : i + 7]) for i in range(0, max(len(counts) - 6, 1))), default=0
    )


def language_totals(repos: list[dict], limit: int) -> tuple[list, list]:
    by_bytes: dict[str, int] = {}
    by_repos: dict[str, int] = {}
    for repo in repos:
        for lang in repo["languages"]:
            by_bytes[lang["name"]] = by_bytes.get(lang["name"], 0) + lang["size"]
        if repo["primary_language"]:
            name = repo["primary_language"]
            by_repos[name] = by_repos.get(name, 0) + 1

    total = sum(by_bytes.values()) or 1
    top_bytes = sorted(by_bytes.items(), key=lambda kv: -kv[1])[:limit]
    top_repos = sorted(by_repos.items(), key=lambda kv: -kv[1])[:limit]
    ranked = [(name, size, round(100 * size / total)) for name, size in top_bytes]
    # A language that rounds to 0% is noise, not a row.
    return [row for row in ranked if row[2] > 0], top_repos


def summarise(data: dict, cfg: dict) -> dict:
    days = daily_series(data["days"])
    current, longest = streaks(days)
    limit = cfg.get("stats", {}).get("max_languages", 5)
    by_bytes, by_repos = language_totals(data["repos"], limit)
    active = sum(1 for d in days if d["count"] > 0)
    return {
        "total": data["total_contributions"],
        "days": days,
        "active_days": active,
        "total_days": len(days),
        "best_week": best_week(days),
        "current_streak": current,
        "longest_streak": longest,
        "by_bytes": by_bytes,
        "by_repos": by_repos,
    }


# ---------------------------------------------------------------- svg bits


def esc(text: str) -> str:
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def smooth_path(points: list[tuple[float, float]]) -> str:
    """Catmull-Rom through the points, emitted as cubic beziers."""
    if len(points) < 2:
        return ""
    out = [f"M {points[0][0]:.2f} {points[0][1]:.2f}"]
    for i in range(len(points) - 1):
        p0 = points[i - 1] if i else points[0]
        p1, p2 = points[i], points[i + 1]
        p3 = points[i + 2] if i + 2 < len(points) else p2
        c1 = (p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6)
        c2 = (p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6)
        out.append(
            f"C {c1[0]:.2f} {c1[1]:.2f} {c2[0]:.2f} {c2[1]:.2f} {p2[0]:.2f} {p2[1]:.2f}"
        )
    return " ".join(out)


def moving_average(values: list[float], window: int) -> list[float]:
    half = window // 2
    out = []
    for i in range(len(values)):
        lo, hi = max(0, i - half), min(len(values), i + half + 1)
        out.append(sum(values[lo:hi]) / (hi - lo))
    return out


def hero_svg(stats: dict, theme: str) -> str:
    c = THEMES[theme]
    w, h = 880.0, 152.0
    # Zero sits a little above the bottom edge, or the stroke gets clipped in half
    # and quiet stretches of the year vanish entirely.
    chart_top, baseline = 86.0, h - 5.0

    values = moving_average([d["count"] for d in stats["days"]], 9)
    peak = max(values) or 1
    step = w / max(len(values) - 1, 1)
    points = [
        (i * step, baseline - (v / peak) * (baseline - chart_top))
        for i, v in enumerate(values)
    ]
    line = smooth_path(points)
    area = f"{line} L {w:.2f} {h:.2f} L 0 {h:.2f} Z" if line else ""

    def stat(x, y, value, label):
        return (
            f'<text x="{x}" y="{y}" font-family="{SANS}" font-size="19" font-weight="500" '
            f'fill="{c["fg"]}" text-anchor="end">{value}</text>'
            f'<text x="{x}" y="{y + 12}" font-family="{MONO}" font-size="8.5" '
            f'letter-spacing="0.6" fill="{c["muted"]}" text-anchor="end">{label}</text>'
        )

    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="{w:.0f}" height="{h:.0f}" viewBox="0 0 {w:.0f} {h:.0f}" role="img" aria-label="{stats['total']} contributions in the last year">
  <text x="0" y="52" font-family="{SANS}" font-size="52" font-weight="500" letter-spacing="-1.5" fill="{c['fg']}">{stats['total']}</text>
  <text x="2" y="70" font-family="{MONO}" font-size="10" letter-spacing="0.8" fill="{c['muted']}">contributions in the last year</text>
  {stat(w, 32, stats['active_days'], 'active days')}
  {stat(w, 62, stats['best_week'], 'best week')}
  <path d="{area}" fill="{c['fill']}" fill-opacity="{c['fill_opacity']}"/>
  <path d="{line}" fill="none" stroke="{c['line']}" stroke-width="1.2" stroke-linejoin="round" stroke-linecap="round"/>
</svg>
"""


# ---------------------------------------------------------------- portrait

RAMP = " .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$"


def find_portrait(override: str | None) -> Path | None:
    if override:
        path = Path(override).expanduser()
        if not path.exists():
            raise SystemExit(f"no such photo: {path}")
        return path
    for ext in ("jpg", "jpeg", "png", "webp"):
        candidate = ASSETS / f"portrait.{ext}"
        if candidate.exists():
            return candidate
    return None


def prepare_portrait(path: Path, cols: int, contrast: float, crop: str, crop_top: float):
    """Return the greyscale image resampled onto the character grid.

    crop_top slides the square window down the frame: 0 hugs the top edge, 1 the
    bottom. Where the head sits depends entirely on how the photo was framed, so
    there is no sensible automatic value.
    """
    from PIL import Image, ImageEnhance, ImageOps

    img = Image.open(path).convert("L")
    if crop == "square":
        side = min(img.size)
        left = (img.width - side) // 2
        top = round((img.height - side) * min(max(crop_top, 0.0), 1.0))
        img = img.crop((left, top, left + side, top + side))

    img = ImageOps.autocontrast(img, cutoff=1)
    img = ImageEnhance.Contrast(img).enhance(contrast)

    # A monospace cell is roughly twice as tall as it is wide.
    rows = max(1, round(cols * (img.height / img.width) * 0.55))
    return img.resize((cols, rows), Image.LANCZOS)


def ascii_rows(img, cols: int, gamma: float, invert: bool) -> list[str]:
    """Map pixels onto the density ramp.

    Which end of the ramp the subject lands on depends on the photo, not the
    theme: shot against a dark backdrop, the subject is the bright part and
    brightness maps straight onto density. Shot against a bright wall, that
    fills the whole frame with glyphs and the mapping has to flip.
    """
    pixels = img.tobytes()
    last = len(RAMP) - 1
    out = []
    for r in range(img.height):
        line = []
        for value in pixels[r * cols : (r + 1) * cols]:
            level = (value / 255) ** gamma
            if invert:
                level = 1.0 - level
            line.append(RAMP[round(level * last)])
        out.append("".join(line).rstrip())
    while out and not out[0].strip():
        out.pop(0)
    while out and not out[-1].strip():
        out.pop()
    return out


def portrait_svg(rows: list[str], cols: int, theme: str) -> str:
    c = THEMES[theme]
    size, char_w, line_h = 10.0, 6.0, 9.6
    width = cols * char_w
    height = len(rows) * line_h + 4

    lines = []
    for i, row in enumerate(rows):
        if not row:
            continue
        # textLength pins each row to the character grid, so the picture holds
        # together whichever monospace face the viewer's browser picks.
        lines.append(
            f'<text x="0" y="{(i + 1) * line_h:.1f}" textLength="{len(row) * char_w:.1f}" '
            f'lengthAdjust="spacingAndGlyphs" xml:space="preserve">{esc(row)}</text>'
        )
    body = "\n    ".join(lines)
    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="{width:.0f}" height="{height:.0f}" viewBox="0 0 {width:.1f} {height:.1f}" role="img" aria-label="ASCII portrait">
  <g font-family="{MONO}" font-size="{size}" fill="{c['fg']}">
    {body}
  </g>
</svg>
"""


# ---------------------------------------------------------------- markdown


def bar(fraction: float, width: int) -> str:
    filled = max(1, round(fraction * width)) if fraction > 0 else 0
    return "█" * filled + " " * (width - filled)


def pretty_date(iso: str | None) -> str:
    if not iso:
        return "—"
    d = dt.date.fromisoformat(iso)
    return f"{d.strftime('%b').lower()} {d.day}"


def language_block(stats: dict) -> str:
    by_bytes, by_repos = stats["by_bytes"], stats["by_repos"]
    if not by_bytes:
        return ""
    name_w = max(len(n) for n, _, _ in by_bytes)
    peak_repos = max((n for _, n in by_repos), default=1) or 1
    repo_name_w = max((len(n) for n, _ in by_repos), default=0)
    gutter = name_w + 32  # where the right-hand column starts

    lines = [f"{'BY BYTES':<{gutter}}BY REPOS"]
    for i in range(max(len(by_bytes), len(by_repos))):
        left = ""
        if i < len(by_bytes):
            name, _, pct = by_bytes[i]
            left = f"{name.lower():<{name_w}}  {bar(pct / 100, 22)}{pct:>4}%"
        right = ""
        if i < len(by_repos):
            name, count = by_repos[i]
            right = f"{name.lower():<{repo_name_w}}  {bar(count / peak_repos, 10)}{count:>3}"
        lines.append(f"{left:<{gutter}}{right}".rstrip())
    return "\n".join(lines)


def heatmap_block(stats: dict) -> str:
    levels = " ·:+#"
    days = stats["days"]
    if not days:
        return ""
    peak = max(d["count"] for d in days) or 1

    # Columns are weeks; rows are weekdays, Sunday first (GitHub's own layout).
    grid = [[" "] * 53 for _ in range(7)]
    first = dt.date.fromisoformat(days[0]["date"])
    origin = first - dt.timedelta(days=(first.weekday() + 1) % 7)
    # Keyed by (year, month): a 12-month window opens and closes in the same
    # month, and both ends deserve their own label.
    months: dict[tuple[int, int], tuple[int, str]] = {}
    for d in days:
        date = dt.date.fromisoformat(d["date"])
        week = (date - origin).days // 7
        if week >= 53:
            continue
        row = (date.weekday() + 1) % 7
        if d["count"]:
            step = min(len(levels) - 1, 1 + int(3 * d["count"] / peak))
        else:
            step = 0
        grid[row][week] = levels[step]
        months.setdefault((date.year, date.month), (week, date.strftime("%b").lower()))

    label = {1: "mon", 3: "wed", 5: "fri"}
    lines = []
    month_row = [" "] * 56
    for week, name in months.values():
        # Skip a month whose first week already carries the previous label.
        if week + len(name) <= 56 and all(ch == " " for ch in month_row[week - 1 : week + len(name)]):
            month_row[week : week + len(name)] = list(name)
    lines.append("    " + "".join(month_row).rstrip())
    for row in range(7):
        lines.append((f"{label.get(row, ''):<4}" + "".join(grid[row])).rstrip())
    lines.append("")
    lines.append(
        f"{stats['active_days']} of {stats['total_days']} days had a contribution"
    )
    return "\n".join(lines)


def streak_block(stats: dict) -> str:
    cur, best = stats["current_streak"], stats["longest_streak"]
    col = 27

    def column(value, label, start, end):
        span = "—" if not start else f"{pretty_date(start)} – {pretty_date(end)}"
        return (str(value), label, span)

    a = column(cur["length"], "current streak", cur["start"], cur["end"])
    b = column(best["length"], "longest streak", best["start"], best["end"])
    return "\n".join(f"{a[i]:<{col}}{b[i]}".rstrip() for i in range(3))


def project_entries(cfg: dict, data: dict) -> list[dict]:
    repos = {r["name"]: r for r in data["repos"] if not r["private"]}
    entries, claimed = [], set()

    for item in cfg.get("projects", []):
        repo = repos.get(item.get("repo", ""))
        if item.get("repo") and not repo and not item.get("url"):
            continue  # repo went private or was renamed — drop it rather than 404
        if repo:
            claimed.add(repo["name"])
        tags = item.get("tags")
        if tags is None:
            tags = [repo["primary_language"].lower()] if repo and repo["primary_language"] else []
        entries.append(
            {
                "name": item.get("name") or (repo["name"] if repo else ""),
                "url": item.get("url") or (repo["url"] if repo else ""),
                "tags": tags,
                "description": item.get("description")
                or (repo["description"] if repo else ""),
            }
        )

    for repo in repos.values():
        if repo["name"] in claimed or not repo["description"]:
            continue
        entries.append(
            {
                "name": repo["name"],
                "url": repo["url"],
                "tags": [repo["primary_language"].lower()] if repo["primary_language"] else [],
                "description": repo["description"],
            }
        )
    return entries


def picture(base: str, alt: str, stamp: str) -> str:
    dark = f"assets/{base}-dark.svg?v={stamp}"
    light = f"assets/{base}-light.svg?v={stamp}"
    return (
        "<picture>\n"
        f'  <source media="(prefers-color-scheme: dark)" srcset="{dark}">\n'
        f'  <img alt="{alt}" src="{light}">\n'
        "</picture>"
    )


def render_markdown(cfg: dict, data: dict, stats: dict, has_portrait: bool, stamp: str) -> str:
    out: list[str] = []

    if has_portrait:
        out.append('<p align="center">')
        out.append(picture("portrait", "ASCII portrait", stamp))
        out.append("</p>")
        out.append("")

    out.append(picture("hero", f"{stats['total']} contributions in the last year", stamp))
    out.append("")

    links = cfg.get("links") or []
    if links:
        # Plain <a> rather than markdown links: GitHub does not reliably parse
        # markdown inside a block-level HTML element.
        row = " · ".join(f'<a href="{l["url"]}">{esc(l["label"])}</a>' for l in links)
        out.append(f'<p align="center">{row}</p>')
        out.append("")

    out.append("## about")
    out.append("")
    if cfg.get("tagline"):
        out.append(f"> {cfg['tagline']}")
        out.append("")
    for para in cfg.get("about", []):
        out.append(para)
        out.append("")

    stack = cfg.get("stack") or []
    if stack:
        out.append("## stack")
        out.append("")
        out.append("```")
        line, lines = "", []
        for item in stack:
            if len(line) + len(item) + 2 > 76:
                lines.append(line.rstrip())
                line = ""
            line += f"{item}  "
        lines.append(line.rstrip())
        out.extend(lines)
        out.append("```")
        out.append("")

    entries = project_entries(cfg, data)
    if entries:
        out.append("## projects")
        out.append("")
        for e in entries:
            tags = ", ".join(e["tags"])
            head = f"**[{e['name']}]({e['url']})**" if e["url"] else f"**{e['name']}**"
            if tags:
                head += f" · `{tags}`"
            if e["description"]:
                head += "  "  # trailing spaces = hard line break
            out.append(head)
            if e["description"]:
                out.append(e["description"])
            out.append("")

    out.append("## stats")
    out.append("")
    out.append("```")
    out.append(streak_block(stats))
    out.append("")
    langs = language_block(stats)
    if langs:
        out.append(langs)
        out.append("")
    heat = heatmap_block(stats)
    if heat:
        out.append("THE YEAR")
        out.append(heat)
    out.append("```")
    out.append("")

    if data.get("sample"):
        note = "sample data — the numbers fill in on the first workflow run"
    else:
        when = data["generated_at"].replace("T", " ").replace("+00:00", " UTC")
        note = f"generated from the GitHub API · last run {when}"
    out.append(f"<sub>{note}</sub>")
    out.append("")
    return "\n".join(out)


# ---------------------------------------------------------------- driver


def load_config() -> dict:
    return json.loads((ROOT / "config.json").read_text())


def sample_data(login: str) -> dict:
    """A plausible year of activity, so the layout can be reviewed offline."""
    import math
    import random

    random.seed(7)
    today = dt.date.today()
    start = today - dt.timedelta(days=364)
    days = []
    for i in range(365):
        date = start + dt.timedelta(days=i)
        season = 0.5 + 0.5 * math.sin(i / 58.0)
        weekday_dip = 0.45 if date.weekday() >= 5 else 1.0
        base = season * weekday_dip * 7
        count = max(0, int(random.gauss(base, 3)))
        if random.random() < 0.18:
            count = 0
        days.append({"date": date.isoformat(), "count": count, "weekday": date.weekday()})

    repos = [
        {
            "name": "neuro-psy", "url": f"https://github.com/{login}/neuro-psy",
            "description": "Interactive explainers for neuroscience and psychology topics.",
            "private": False, "stars": 0, "pushed_at": "", "primary_language": "TypeScript",
            "languages": [{"name": "TypeScript", "size": 180000}, {"name": "CSS", "size": 21000}],
        },
        {
            "name": "hermes-showcase", "url": f"https://github.com/{login}/hermes-showcase",
            "description": "Website demos and design building blocks.",
            "private": False, "stars": 0, "pushed_at": "", "primary_language": "HTML",
            "languages": [{"name": "HTML", "size": 96000}, {"name": "CSS", "size": 30000}],
        },
        {
            "name": "bennyboy", "url": f"https://github.com/{login}/bennyboy",
            "description": "no responsibility, own risk",
            "private": False, "stars": 0, "pushed_at": "", "primary_language": "TypeScript",
            "languages": [{"name": "TypeScript", "size": 140000}, {"name": "JavaScript", "size": 9000}],
        },
    ]
    return {
        "login": login,
        "url": f"https://github.com/{login}",
        "avatar_url": "",
        "total_contributions": sum(d["count"] for d in days),
        "days": days,
        "repos": repos,
        "generated_at": dt.datetime.now(dt.timezone.utc).isoformat(timespec="seconds"),
        "sample": True,
    }


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--offline", action="store_true", help="use the cached stats.json")
    ap.add_argument("--sample", action="store_true", help="render with generated demo data")
    ap.add_argument(
        "--photo",
        metavar="PATH",
        help="re-render the ASCII portrait from this image. Keep it outside the "
        "repository: only the generated SVG is meant to be committed.",
    )
    args = ap.parse_args()

    cfg = load_config()
    login = cfg["login"]
    cache = DATA / "stats.json"

    if args.sample:
        data = sample_data(login)
    elif args.offline:
        if not cache.exists():
            print("no cached data; run once with a token or pass --sample", file=sys.stderr)
            return 1
        data = json.loads(cache.read_text())
    else:
        token = os.environ.get("GH_PROFILE_TOKEN") or os.environ.get("GITHUB_TOKEN")
        if not token:
            print("set GH_PROFILE_TOKEN (or GITHUB_TOKEN)", file=sys.stderr)
            return 1
        try:
            data = normalise(fetch(login, token, cfg["stats"].get("include_private", False)))
            DATA.mkdir(parents=True, exist_ok=True)
            cache.write_text(json.dumps(data, indent=1) + "\n")
        except (urllib.error.URLError, RuntimeError, KeyError) as exc:
            if not cache.exists():
                print(f"fetch failed and no cache to fall back on: {exc}", file=sys.stderr)
                return 1
            print(f"fetch failed ({exc}); reusing cached data", file=sys.stderr)
            data = json.loads(cache.read_text())

    stats = summarise(data, cfg)
    ASSETS.mkdir(parents=True, exist_ok=True)

    written = []
    for theme in THEMES:
        path = ASSETS / f"hero-{theme}.svg"
        path.write_text(hero_svg(stats, theme))
        written.append(path)

    portrait_cfg = cfg.get("portrait", {})
    portrait_paths = [ASSETS / f"portrait-{theme}.svg" for theme in THEMES]
    enabled = portrait_cfg.get("enabled", True)
    source = find_portrait(args.photo) if enabled else None
    has_portrait = False

    if source:
        try:
            cols = portrait_cfg.get("columns", 100)
            img = prepare_portrait(
                source,
                cols,
                portrait_cfg.get("contrast", 1.9),
                portrait_cfg.get("crop", "square"),
                portrait_cfg.get("crop_top", 0.5),
            )
            rows = ascii_rows(
                img,
                cols,
                portrait_cfg.get("gamma", 0.9),
                invert=portrait_cfg.get("ink", "dark") == "dark",
            )
            for path, theme in zip(portrait_paths, THEMES):
                path.write_text(portrait_svg(rows, cols, theme))
            written.extend(portrait_paths)
            has_portrait = True
        except ImportError:
            print("Pillow missing — skipping the portrait", file=sys.stderr)
    elif enabled and all(p.exists() for p in portrait_paths):
        # The source photo is deliberately kept out of the repository, so a CI
        # run has nothing to render from. Keep the committed artwork.
        written.extend(portrait_paths)
        has_portrait = True

    stamp = hashlib.sha256(
        b"".join(p.read_bytes() for p in sorted(written))
    ).hexdigest()[:8]

    (ROOT / "README.md").write_text(render_markdown(cfg, data, stats, has_portrait, stamp))
    kind = "sample" if data.get("sample") else "live"
    print(
        f"wrote profile/README.md ({kind}): {stats['total']} contributions, "
        f"{stats['active_days']} active days, portrait={'yes' if has_portrait else 'no'}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
