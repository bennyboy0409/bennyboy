# -*- coding: utf-8 -*-
"""Schneidet die 38 Island-Fotos auf 640x360 und baut sie als data:-URI in karte.html ein."""
import base64, csv, io, os, re, sys
from PIL import Image, ImageOps

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SOURCE_DIR = os.path.join(HERE, "source-fotos")
# Die Originale gehören zum Projekt. Der Downloads-Ordner bleibt nur ein
# Rückwärtskompatibilitäts-Fallback für ältere lokale Checkouts.
DL   = SOURCE_DIR if os.path.isdir(SOURCE_DIR) else os.path.join(os.path.expanduser("~"), "Downloads")
CSV  = os.path.join(HERE, "fotos-quellen.csv")
HTML = os.path.join(HERE, "karte.html")

# CSV-Sehenswuerdigkeit -> exakter POI-Name in karte.html
NAME2POI = {
    "Blaue Lagune (Bláa lónið)": "Blaue Lagune",
    "Arnarstapi": "Arnarstapi",
    "Deildartunguhver": "Deildartunguhver",
    "Hraunfossar": "Hraunfossar",
    "Djúpavík": "Djúpavík",
    "Hvítserkur": "Hvítserkur",
    "Glaumbær": "Glaumbær Torfhöfe",
    "Goðafoss": "Goðafoss",
    "Mývatn": "Mývatn",
    "Grjótagjá": "Grjótagjá",
    "Dettifoss": "Dettifoss (Westseite)",
    "Selfoss (Wasserfall an der Jökulsá)": "Selfoss (Wasserfall)",
    "Ásbyrgi": "Ásbyrgi",
    "Stuðlagil": "Stuðlagil",
    "Hengifoss": "Hengifoss",
    "Seyðisfjörður": "Seyðisfjörður",
    "Eystrahorn": "Eystrahorn / Hvalnes",
    "Vestrahorn / Stokksnes": "Stokksnes / Vestrahorn",
    "Jökulsárlón": "Jökulsárlón",
    "Diamond Beach": "Diamond Beach",
    "Vatnajökull": "Vatnajökull — Gletschertour",
    "Svartifoss": "Svartifoss",
    "Fjaðrárgljúfur": "Fjaðrárgljúfur",
    "Dyrhólaey": "Dyrhólaey",
    "Reynisfjara / Reynisdrangar": "Reynisfjara",
    "Sólheimajökull": "Sólheimajökull",
    "Skógafoss": "Skógafoss",
    "Seljalandsfoss": "Seljalandsfoss",
    "Gljúfrabúi": "Gljúfrabúi",
    "Reykjadalur (Hveragerði)": "Reykjadalur",
    "Þingvellir": "Þingvellir",
    "Strokkur (Geysir)": "Geysir / Strokkur",
    "Gullfoss": "Gullfoss",
    "Kerið": "Kerið Kratersee",
    "Kirkjufell": "Kirkjufell",
    "Sigöldugljúfur": "Sigöldugljúfur",
    "Gunnuhver": "Gunnuhver",
    "Þjórsárdalur": "Þjórsárdalur",
}

W, H, Q = 640, 360, 72

def make_uri(path):
    im = Image.open(path)
    im = ImageOps.exif_transpose(im).convert("RGB")
    im = ImageOps.fit(im, (W, H), method=Image.LANCZOS, centering=(0.5, 0.45))
    buf = io.BytesIO()
    im.save(buf, "JPEG", quality=Q, optimize=True, progressive=True)
    return "data:image/jpeg;base64," + base64.b64encode(buf.getvalue()).decode("ascii"), len(buf.getvalue())

# ── CSV lesen ────────────────────────────────────────────────────────
photos, total = {}, 0
with open(CSV, encoding="utf-8-sig", newline="") as f:
    for row in csv.DictReader(f, delimiter=";"):
        sehens = row["Sehenswuerdigkeit"].strip()
        poi = NAME2POI.get(sehens)
        if not poi:
            sys.exit("Kein POI-Name fuer CSV-Zeile: " + sehens)
        img = os.path.join(DL, row["Dateiname"].strip())
        if not os.path.exists(img):
            sys.exit("Bild fehlt: " + img)
        uri, nbytes = make_uri(img)
        total += nbytes
        q, f, l = row["Quelle"].strip(), row["Fotograf"].strip(), row["Lizenz"].strip()
        credit = " · ".join(x for x in (q, f, l) if x)   # leer = keine Credit-Zeile im Popup
        photos[poi] = (uri, credit)
        print("  %-28s %6.1f KB%s" % (poi, nbytes / 1024, "" if credit else "   (ohne Quellenangabe)"))

print("\n%d Bilder, zusammen %.2f MB (base64 ca. %.2f MB)"
      % (len(photos), total / 1048576, total * 4 / 3 / 1048576))

# ── karte.html patchen ───────────────────────────────────────────────
src = open(HTML, encoding="utf-8").read()
a = src.index("const POIS = [")
b = src.index("\n];", a) + 3
block = src[a:b]

names = [(m.start(), m.group(1)) for m in re.finditer(r'name:"([^"]+)"', block)]
print("%d POIs in karte.html" % len(names))

out, done, schon, missing = [], 0, 0, []
for i, (pos, nm) in enumerate(names):
    end = names[i + 1][0] if i + 1 < len(names) else len(block)
    seg = block[pos:end]
    if nm not in photos:
        missing.append(nm)
    elif 'img:null' not in seg:
        schon += 1                       # hat schon ein Bild — nicht anfassen
    else:
        uri, credit = photos[nm]
        repl = 'img:"%s"' % uri
        if credit:
            repl += ',\n    credit:"%s"' % credit
        seg = seg.replace('img:null', repl, 1)
        done += 1
    out.append((pos, end, seg))

if missing:
    sys.exit("Ohne Foto geblieben: " + ", ".join(missing))

new_block = block[:names[0][0]] + "".join(s for _, _, s in out)
src = src[:a] + new_block + src[b:]

# Netz-Nachladen abschalten, Bilder sind jetzt fest drin
src = src.replace("const PHOTOS_ON = true;", "const PHOTOS_ON = false;", 1)

open(HTML, "w", encoding="utf-8", newline="\n").write(src)
print("%d neu bestueckt, %d hatten schon ein Bild · karte.html jetzt %.2f MB"
      % (done, schon, len(src.encode()) / 1048576))
