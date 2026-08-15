# Island-Roadtrip-Karte — Stand

**Live:** https://bennyboy0409.github.io/bennyboy/ — für jeden ohne Login
öffenbar. **Der Einstieg ist seit 13. August die Satellitenkarte** (Google,
Key kommt beim Deploy aus dem GitHub-Secret); lädt Google nicht (kein
Internet, Fjord), leitet sie automatisch auf `/karte.html` um — die
Offline-Karte. Beide sind gegenseitig verlinkt („Satellit ↗" in der
Ebenen-Box bzw. „← Offline-Karte"). Veröffentlicht per GitHub Pages,
aktualisiert sich bei jedem Push auf `main` (Workflow
`.github/workflows/pages.yml`); Änderungen vom Arbeits-Branch dafür nach
`main` mergen. Fürs Offline-Nutzen in Island `/karte.html` einmal mit Netz
öffnen und lokal speichern.

**Tagesplaner auch auf der Satellitenseite (13.8., spät):** Jede
Tageskarte hat dort dieselben Knöpfe wie offline („Besuchsorte
markieren" → anhaken → „Route berechnen"). Die Reihenfolge optimiert
Google selbst (`optimizeWaypoints`), die Route liegt in der Tagesfarbe
mit nummerierten Pins auf dem Satellitenbild, der Ablauf zeigt echte
Google-Zeiten je Abschnitt. Läuft GPS, startet die Route am eigenen
Standort. Pläne dort sind bewusst nicht persistent (jede Berechnung
ist ein API-Aufruf; neu rechnen ist billig und immer aktuell).

**Google-Fahrzeiten überall:** Die Satellitenseite rechnet die acht
Etappen live über die Directions API und legt sie in localStorage ab
(`island-google-legs`); die Offline-Karte zeigt dann dieselben Zeiten in
den Etappenzeilen (kleines „G" samt Tooltip) statt der Richtwerte —
einmal die Satellitenseite öffnen genügt. Die Satellitenseite fragt beim
Öffnen automatisch nach dem Standort (blauer Punkt, Genauigkeitskreis).

## Dateien

| Datei | Was es ist |
|---|---|
| `karte.html` | Die Hauptkarte. Eine einzige Datei, komplett eigenständig, kein Build, keine Abhängigkeiten, **kein Internet nötig**. Im Browser öffnen. |
| `karte-google-maps.html` | Zweitversion mit echtem Satellitenbild und Live-Fahrzeiten von Google. Braucht einen eigenen API-Key, oben im Skript einzutragen. |
| `fotos-quellen.csv` | Herkunft aller 38 Fotos: Fotograf, Lizenz, Quell-URL. |
| `source-fotos/` | Die 38 Original-JPEGs. Nicht für den Betrieb der Offline-Karte nötig, aber zum erneuten Zuschneiden oder Austauschen der eingebetteten Bilder. |
| `tools/embed_fotos.py` | Schneidet Originalfotos auf 640 × 360 zu und bettet sie in `karte.html` ein. |

## Was `karte.html` kann

- Islandkarte aus Natural-Earth-Geodaten (Küstenlinie, Gletscher, Straßennetz), direkt eingebettet
- 7 Unterkünfte mit Datum, Adresse, Koordinaten, Telefonnummer
- 8 Etappen mit Strecke, Fahrzeit und Straßennummern
- 38 Sehenswürdigkeiten, bis auf Sigöldugljúfur alle mit einem 2WD-Mietwagen (Toyota Yaris Cross) erreichbar
- 5 bewusst ausgeschlossene Ziele mit Begründung (F-Straßen, Furten)
- Weiche Kamera mit Trägheit, Pinch-Zoom, Doppeltipp, Tastatursteuerung
- Beim Reinzoomen erscheinen Bildkärtchen an jedem Ziel
- Eigene Punkte per Klick setzbar, Export als Code
- 16 Kostenstellen rot markiert: Maut, Parkgebühren, Eintritte
- Zwei Kartenstile: „Atlas" (Standard) und „Natur" mit Satelliten-Optik
- Eigener Standort per GPS (blauer Punkt), Vollbildmodus
- Ziele als besucht abhakbar, Zähler in der Seitenleiste
- Sonnenauf- und -untergang pro Übernachtung
- Tagesplaner: rechnet die schnellste Reihenfolge der Tagesziele aus,
  vom Standort (GPS) oder der letzten Unterkunft bis zum Hotel des Tages

## Fotos — erledigt (8. August 2026)

Alle **38 Sehenswürdigkeiten haben ein echtes Foto**, fest als `data:`-URI im
`POIS`-Array. Die Karte braucht dafür kein Internet mehr — wichtig in Island,
wo das Netz zwischen den Fjorden gern wegbricht.

- Quelle: Unsplash und Pexels (nicht Wikimedia Commons wie ursprünglich geplant).
  Benedek hatte die Bilder bereits ausgewählt und heruntergeladen, die Auswahl
  steht in `fotos-quellen.csv`.
- Auswahlregel eingehalten: Sommeraufnahmen, kein Schnee, keine Nordlichter.
  Ausnahme wie besprochen bei `Jökulsárlón`, `Diamond Beach`, `Sólheimajökull`
  und `Vatnajökull — Gletschertour`, dort gehört das Eis zum Motiv.
- Format: 640×360, JPEG Qualität 72, mittiger Ausschnitt leicht nach oben
  versetzt. Zusammen 1,46 MB, als base64 im HTML 2,16 MB — die Artifact-Grenze
  liegt bei 16 MB.
- 34 der 38 Einträge haben ein Feld `credit` mit Quelle, Fotograf und Lizenz.
  Das steht im Popup unter „Foto: …". Die vier ohne siehe Nachtrag unten.
- `PHOTOS_ON` steht jetzt auf `false`, `fetchPhotos()` läuft also gar nicht mehr.
  Der Code bleibt drin, falls man später neue Ziele ohne Bild ergänzt.

Geprüft im Browser: hell und dunkel, 1440 px und 375 px, keine Konsolenfehler,
kein seitliches Scrollen, alle 38 Bilder dekodieren sauber auf 640×360.

### Ein Foto austauschen

Neues Bild nach `source-fotos/` legen, den Dateinamen in `fotos-quellen.csv`
eintragen und dieses Skript laufen lassen — es schneidet zu, kodiert und setzt
den Eintrag samt Credit neu:

```
python C:\Users\varga\bennyboy\island-roadtrip\tools\embed_fotos.py
```

Das Skript überspringt alle POIs, die schon ein Bild haben. Um eins zu
**ersetzen**, vorher im `POIS`-Array die betroffene `img:"data:…"`-Zeile wieder
auf `img:null` setzen und die `credit`-Zeile löschen.

Sind `Fotograf` und `Lizenz` in der CSV leer, bekommt der Eintrag gar kein
`credit`-Feld — im Popup steht dann nur die Koordinate, keine falsche Quelle.

## Nachtrag 8. August: vier weitere Ziele

Kirkjufell, Gunnuhver, Þjórsárdalur und Sigöldugljúfur sind dazugekommen,
alle vier mit Foto. Dabei zu beachten:

- **Sigöldugljúfur stand vorher in `NO_GO`** und ist jetzt ein normaler
  Kartenpunkt. Der Grund für den Ausschluss gilt aber weiter: die letzten 2 km
  sind F208. Keine Furt, aber F-Straßen sind im Mietvertrag verboten und die
  Versicherung greift dort nicht. Steht so als Warnung im Popup.
- **Zwei Fotos sind fachlich fraglich** (siehe `fotos-quellen.csv`):
  `thjorsardalur.jpg` zeigt eine Küstenwiese mit Meer und Tafelberg —
  Þjórsárdalur liegt aber im Binnenland, das passt nicht.
  `sigoldugljufur.jpg` zeigt einen einzelnen Fall in einer Moosschlucht statt
  der bekannten Wasserfallreihe.
- **Quellenangaben fehlen** bei allen vier — Herkunft unbekannt, deshalb steht
  im Popup bewusst keine Zeile „Foto: …". Sobald Bene die Quelle nennt, in die
  CSV eintragen und das Skript neu laufen lassen.

## Kostenstellen — neu (12. August 2026)

Überall dort, wo unterwegs Geld fällig wird, steht jetzt ein roter Punkt mit
„kr". Beim Reinzoomen kommt der Betrag als Plakette dazu; in der Islandübersicht
bleiben es bewusst nur Punkte, sonst pflastert die Südküste zu.

Das Rot ist ein eigenes Karminrot (`--pay`), **nicht** das Orangerot der Route.
Beide nebeneinander wären nicht auseinanderzuhalten.

Die Daten stehen in einem Array `COSTS`, ein Eintrag pro Stelle. Wichtig: die
Zuordnung zur Etappe passiert **automatisch über die Entfernung zur Fahrlinie**
(`assignCosts`, Schwelle 6 km). Ändert sich die Route, ordnet sich das von
selbst neu — man muss nichts nachpflegen.

Wo es auftaucht:

| Stelle | Was man sieht |
|---|---|
| Karte | roter Punkt, ab ca. 420 km Sichtbreite mit Preis |
| Karte, Tunnel | die Röhre selbst wird rot überzeichnet |
| Etappenzeile | rote Zeile mit Preis, Zahlweg und Gratis-Alternative |
| Zielliste im Tag | kleines rotes Preisschildchen hinter dem Namen |
| Popup | roter Reiter oben und ein Absatz mit den Details |
| Kopfzeile | Summe „Gebühren", getrennt nach pro Auto und pro Kopf |
| Ebenen | Häkchen „Kostenstellen" blendet alles aus |

### Die drei wichtigsten Fakten dahinter

- **Vaðlaheiðargöng ist Islands einzige Maut.** 2.216 ISK, zu zahlen auf
  `tunnel.is` vorher oder bis 3 h nach der Durchfahrt, Kennzeichenerkennung.
  Liegt auf eurer Etappe 4 (Hofsós → Aðaldalur). Gratis drumherum: die alte
  Straße 1 über den Víkurskarð-Pass, kostet ~16 km und ~12 Minuten.
- **Der Hvalfjörður-Tunnel ist seit 28. September 2018 mautfrei.** Ältere
  Reiseführer behaupten das Gegenteil. Er liegt auf Etappe 2 und steht deshalb
  ausdrücklich als grauer, gestrichelter „gratis"-Eintrag drin — damit niemand
  nach einer Zahlstelle sucht, die es nicht mehr gibt. Dasselbe gilt für den
  Ostfjord-Tunnel Fáskrúðsfjörður auf Etappe 6.
- **Parkgebühren liegen fast überall bei 1.000 ISK pro Auto und Tag**, meist
  über die Parka-App. Þingvellir und Jökulsárlón gehören zu Nationalparks und
  erlassen einem oft die Hälfte, wenn man am selben Tag schon woanders im Park
  gezahlt hat.

### Wie belastbar sind die Preise

Stand August 2026, recherchiert über Vermieter- und Tourismusseiten. Einträge,
bei denen sich die Quellen widersprechen, tragen `unsure:true` und erscheinen
mit einem „ca." — betrifft Kerið, Reykjadalur, Skógafoss, Sólheimajökull und
Stokksnes. Zwei Posten haben `isk:null`, weil der Preis vom Anbieter abhängt
(Blaue Lagune, Gletschertour); sie sind rot markiert, fließen aber nicht in die
Summe ein.

Zwei Dinge, die man wissen sollte:

- **Bei Skógafoss gibt es neben dem kostenpflichtigen Hauptplatz einen
  kostenlosen Platz etwas abseits.** Steht als Warnung im Popup.
- **Stokksnes und Kerið werden pro Kopf verlangt, nicht pro Auto.** Deshalb
  weist die Kopfzeile zwei getrennte Summen aus — das ließe sich sonst nicht
  ehrlich addieren, solange die Personenzahl nicht feststeht.

Die Liste ist **nicht vollständig**. Aufgenommen wurde nur, was sich belegen
ließ; bei Zielen wie Goðafoss, Dettifoss oder Hengifoss war die Quellenlage zu
dünn, um „gratis" oder „kostet" zu behaupten. Dass dort kein roter Punkt steht,
heißt also nicht sicher, dass es nichts kostet.

Preise ändern sich in Island fast jede Saison — vor der Abfahrt kurz gegenprüfen
und in `COSTS` nachziehen.

## Nachtrag 12. August: Handy, Natur-Stil, GPS, Besucht-Häkchen

- **Kartenstil „Natur"** (Umschalter unten in der Ebenen-Box): Satelliten-Optik
  aus den vorhandenen Vektordaten — dunkler Ozean mit Küstenschein, moosgrünes
  Land, weiße Gletscher. Kein echtes Satellitenbild: jede Bildquelle (NASA,
  ArcGIS, EOX, Wikimedia) war aus dieser Umgebung heraus blockiert, und
  Online-Tiles würden die Offline-Fähigkeit zerstören. Für echten Satellit gibt
  es weiter `karte-google-maps.html`. Die Stilwahl bleibt in localStorage.
- **GPS-Knopf** (◉): zeigt den eigenen Standort als blauen Punkt mit
  Genauigkeitskreis, erster Fix zentriert die Karte. GPS braucht kein
  Datennetz — genau dafür ist die Offline-Karte da. Auf iOS muss die Datei
  dafür über die Dateien-App im Safari geöffnet werden, sonst fehlt die
  Standort-Berechtigung.
- **Vollbild** (⛶): legt die Karte über die ganze Seite, Esc oder ✕ beendet.
  Bewusst kein Fullscreen-API — das scheitert auf iOS.
- **Besucht-Häkchen**: im Popup jedes Ziels abhakbar, bleibt in localStorage.
  Besuchte Ziele werden auf der Karte blass, in der Tagesliste steht ein grünes
  ✓, oben in der Seitenleiste zählt „✓ n/38" mit.
- **Sonnenzeiten**: jede Unterkunft zeigt ☀ Aufgang–Untergang für ihr Datum
  (NOAA-Näherung, ±3 Minuten; Island läuft ganzjährig auf UTC).
- **Handy**: Karte 66 statt 56 dvh, Zoomknöpfe 42 px, kompakter Kopf, Popup
  passt sich der Bildschirmbreite an.

## Tagesplaner — direkt in den Tageskarten (12. August 2026, abends)

Kein separates Kastl mehr: Die Planung sitzt in jeder Tageskarte der
Seitenleiste. Der gewählte Tag ist deutlich hervorgehoben (heller, mit
türkisem Ring). Ablauf:

1. „✦ Besuchsorte markieren" in der Tageskarte → neben jedem Ziel
   erscheint ein Häkchen (schon Besuchtes ist abgewählt)
2. anhaken, was ihr sehen wollt → „✓ Route berechnen"
3. Ergebnis direkt in der Karte des Tages: **Ablauf** mit Gesamtzeit
   („insgesamt 5:59 h Fahrt · ~369 km") und jedem Abschnitt
   („0:20 h Diamond Beach, dann 0:10 h Jökulsárlón, …"), und auf der
   Landkarte liegt die Strecke **in einer eigenen Farbe pro Tag** mit
   nummerierten Punkten in Besuchsreihenfolge.

Pläne mehrerer Tage bleiben gleichzeitig sichtbar, jeder in seiner
Farbe (Palette `DAY_COLORS`), der linke Kartenrand der Tageskarte trägt
dieselbe Farbe. Alles überlebt in localStorage einen Neustart.
„✎ Besuchsorte ändern" rechnet neu, „✕ Plan löschen" räumt weg.

Start ist die Unterkunft des Tages — oder **der eigene Standort, wenn
GPS (◉) läuft**. Man kann also mittags neu rechnen: Gesehenes abhaken,
neu berechnen, und der Rest des Tages wird ab der aktuellen Position
geplant. Ziel ist automatisch die nächste Unterkunft (bzw. der
Flughafen am letzten Tag).

Technik, komplett offline:

- Gerechnet wird auf dem eingebetteten Natural-Earth-Straßennetz
  (93 Linien, ~2.600 Knoten, 5.076 km). `buildRoadGraph` heftet
  Linienenden unter 2,5 km aneinander, `dijkstra` liefert die
  Distanzmatrix samt Pfadgeometrie fürs Zeichnen.
- Die Reihenfolge (Start fest, Ende fest) löst `tspOrder` exakt per
  Bitmasken-DP bis 13 Ziele, darüber Greedy mit 2-Opt.
- **Optimiert wird nach Fahrzeit, nicht nach Kilometern** (13. August):
  Hauptstraßen 88 km/h, Nebenstraßen 68, Anfahrt abseits des Netzes 40.
  Damit bevorzugt der Planer die Strecke, die man wirklich fahren würde.
- Anfahrt vom Punkt zum Netz zählt als Luftlinie ×1,3; sind zwei Punkte
  im Netz nicht verbunden, fällt das Paar auf Luftlinie ×1,35 zurück.
- **`EXTRA_ROADS`**: zwei Straßen, die im Natural-Earth-Netz fehlen und
  die Optimierung nachweislich verfälscht haben — die Vatnaleið (56)
  über Snæfellsnes und der 5-km-Anschluss der Skógarströnd (54) an
  die 60. Ohne letzteren wurde alles von Snæfellsnes nach Norden über
  Borgarnes zurückgeschickt (~80 km Umweg), was am Tag 2 die falsche
  Reihenfolge „erst Kirkjufell, dann Hraunfossar" erzeugte. Wichtig
  beim Ergänzen weiterer Straßen: Endpunkte exakt auf vorhandene
  Netzknoten legen, das Anheften über Distanz greift nur unter 2,5 km.
- **Die Etappenzeiten Hotel→Hotel in `LEGS` sind bewusst fest** —
  recherchierte Werte aus echter Routenplanung, genauer als der
  generalisierte Graph. Der Graph rechnet nur den Tagesplaner.
  Abgleich (13.8.): 6 von 8 Etappen trifft der Graph auf ±12 min;
  dafür sind `GRAVEL_ZONES` (Strandir-Schotter, 50 km/h) und der
  Fáskrúðsfjarðargöng in `EXTRA_ROADS` nötig gewesen. Restabweichung
  ±10–15 % bleibt (Südküste rechnet er ~40 min flotter als die
  bewusst konservative Etappenangabe).
- Alte gespeicherte Pläne wurden mit dem Schlüsselwechsel auf
  `island-dayplans-v2` bewusst verworfen (waren mit dem kaputten
  Graphen gerechnet).

Stichprobe geprüft: Südküsten-Tag (11 Ziele) ergibt exakt die richtige
West-Reihenfolge Lagune → Skaftafell → Fjaðrárgljúfur → Vík → … →
Seljalandsfoss, 369 km gegen real ~360; Rechenzeit ~0,5 s inklusive
Graphaufbau.

## Zusatz-Tipps, Lightbox, Foto-Nachladen (13. August 2026)

**13 neue Ziele** entlang der Route, violett markiert (`src:"tipp"`,
Farbe `--tip`), mit „Tipp"-Chip in der Tagesliste und eigener
Legendenzeile: Kontinentalbrücke und Seltún (Ankunftstag), Grábrók,
Kolugljúfur, Schwimmbad Hofsós, Víti/Krafla, Húsavík, Rjúkandi,
Steinasafn Petru, Fjallsárlón, Kvernufoss, Urriðafoss, Brúarfoss.
Alle 2WD-tauglich (Kolugljúfur: 6 km Schotter). Petra (Eintritt) und
Húsavík (Waltour) stehen auch in `COSTS`.

**Lightbox:** Tipp aufs Foto im Popup zeigt es groß über der Karte,
mit Name und Bildnachweis. Schließen per Tipp oder Esc (Esc schließt
erst das Großbild, dann das Popup).

**Foto-Nachladen mit Gedächtnis:** `PHOTOS_ON` steht wieder auf
`true`, greift aber nur für Ziele **ohne** eingebettetes Bild — also
die neuen Tipps. Die alte Wikipedia-Kette (de → en → Commons,
Winterfilter) läuft auf dem Gerät des Nutzers; ein geladenes Foto
wird auf 640×360 zugeschnitten und in localStorage gelegt
(`cachePhoto`), beim nächsten Start kommt es von dort — einmal mit
Internet öffnen genügt also, danach ist es offline da. Ohne Internet
oder ohne Treffer bleibt das gezeichnete Motiv, ohne Fehler.

Ehrlicher Vorbehalt: Der Live-Abruf von Wikipedia ließ sich aus der
Arbeitsumgebung nicht testen (Netz dorthin gesperrt) — der Code ist
die früher nachweislich funktionierende Kette plus Cache; Fallback
und Cache-Pfad sind im Browser durchgetestet. Auf dem claude.ai-Link
blockiert die Seite selbst fremde Server (CSP), dort bleiben die
Tipps bei den gezeichneten Motiven — auf der GitHub-Pages-Seite und
bei der lokalen Datei lädt es.

## Drohne, Tankstellen, Restaurants (13. August 2026, Nacht)

**Drohnen-Info an jedem Ziel** (für <250 g MIT Kamera): Im Popup jeder
Sehenswürdigkeit (beide Karten) steht farbig ERLAUBT / EINGESCHRÄNKT /
VERBOTEN plus Begründung. Datenbasis `DRONE` in karte.html, Stand
August 2026: EU-Regeln gelten (Betreiber-Registrierung wegen Kamera
Pflicht, 120 m, Sichtkontakt); seit 17. Mai 2026 keine
Hobby-Genehmigungen mehr in gelisteten Schutzgebieten (Gullfoss,
Geysir, Goðafoss, Dyrhólaey, Mývatn, Háifoss, Fjallabak …);
Vatnajökull-NP: Skaftafell/Jökulsárgljúfur zu, Jökulsárlón nur
Zeitfenster; Þingvellir-Kern 9–18 Uhr zu; Brutzeit bis 15.9.
Quellen: jvn.photo/drone-flying-in-iceland, icelandplanner.com,
nattura.is. Einträge mit unklarem Schutzstatus stehen bewusst auf
„eingeschränkt" mit Prüfauftrag. Vor jedem Start: dronamap.is.

**Tankstellen offline:** Array `FUEL` (34 Orte entlang der Route,
Position = Ortsmitte, „ca."). Eigene Ebene „Tankstellen"
(bernsteinfarbene Punkte, Namen beim Reinzoomen). Merksatz im
Hinweistext: zwischen Hólmavík und der kleinen Pumpe in Norðurfjörður
kommt nichts.

**Supermärkte:** Array `SHOPS` (26 Orte, grüne Punkte in derselben
Ebene „Tanken & Einkaufen"). Bónus/Krónan/Nettó = günstige Ketten
(Bónus öffnet meist erst 11 Uhr), Dorfläden schließen 18–19 Uhr.
Hólmavík ist der letzte richtige Einkauf vor Strandir. Auf der
Satellitenseite gibt es zusätzlich den dritten Live-Knopf
„🛒 Supermärkte" (Places-Typ `supermarket`).

**Restaurants & Tankstellen live (Satellitenseite):** Zwei Knöpfe über
der Etappenliste suchen den sichtbaren Kartenausschnitt per Google
Places ab (Marker mit Name, Adresse, Bewertung, offen/zu). **Dafür muss
im Google-Projekt die „Places API" aktiviert und in der
API-Beschränkung des Keys ergänzt werden** — sonst zeigen die Knöpfe
eine entsprechende Meldung. Restaurants sind bewusst nicht in der
Offline-Karte (zu volatil zum Einbetten); Tankstellen schon, weil
sicherheitsrelevant.

## Popup-Aufräumen + Fotos am Satelliten (14. August 2026, früh)

Das Foto ist wieder der Star: In beiden Karten zeigt das Popup nur noch
Bild, Name und Kurzfakt — Notiz, Kosten, Drohnen-Ampel und Koordinaten
klappen erst über „ℹ️ Mehr Infos" auf (frisch geöffnete Popups starten
zugeklappt).

Die Satellitenseite zeigt jetzt auch Fotos: Der Pages-Deploy schreibt
die 38 eingebetteten Bilder als `fotos/<slug>.jpg` heraus (Schritt im
Workflow, Slug = kleingeschrieben, alles außer a–z0–9 wird „-"), das
Popup lädt sie einzeln nach (~40 KB pro Antippen). Zusatz-Tipps ohne
Datei versuchen den localStorage-Cache der Offline-Karte (gleiche
Origin), sonst bleibt das Popup ohne Bild. Lokal geöffnet (ohne
fotos/-Ordner) verschwindet das Bild sauber per onerror.

## Tag 3/4 aufgefüllt + Kostenstellen am Satelliten (14. August 2026)

**9 neue Zusatz-Tipps** (violett), weil Tag 3 und 4 dünn waren:
Tag 3 (Strandir→Hofsós): Krossneslaug (Meerbecken 4 km ab der
Unterkunft!, Eintritt in COSTS), Hot Pots Drangsnes, Borgarvirki.
Tag 4 (Hofsós→Aðaldalur): Staðarbjargavík, Grafarkirkja, Hólar,
Reykjafoss & Fosslaug, Akureyri, Siglufjörður (nur Tröllaskagi-
Variante). Damit 60 Ziele gesamt, alle mit Drohnen-Ampel.

**Kostenstellen jetzt auch auf der Satellitenseite:** rote kr-Marker
(grau = ausdrücklich gratis) mit Preis/Zahlweg/Alternative im
Popup, Mauttunnel als Linie, und die 💰-Zeile im „Mehr Infos" jedes
betroffenen Ziels. Datenquelle bleibt allein `COSTS` in karte.html —
beim Übertragen aufs Satellitenformat (`GCOSTS`) nichts von Hand
pflegen, sondern das Sync-Vorgehen aus der Git-History nutzen.

## Seen, Natur-Nachschub, ruhigere Satellitenkarte (14. August, mittags)

- **`LAKES`**: Mývatn, Þingvallavatn und Lagarfljót von Hand
  nachgezeichnet (Natural Earth liefert keine Binnenseen), gezeichnet
  in Ozeanfarbe zwischen Land und Gletschern.
- **6 Natur-Ziele dazu** (violett): Hverir/Námaskarð, Dimmuborgir,
  Hverfjall, Skútustaðagígar, Aldeyjarfoss, Múlagljúfur — alle mit
  Drohnen-Ampel (Mývatn-Gebiet weitgehend „nein", steht dabei).
  Jetzt 66 Ziele gesamt.
- **Satellitenkarte bedienbar wie offline**: `gestureHandling:
  "greedy"` (ein Finger schiebt/zoomt), `clickableIcons:false`, und
  Start in **purer Satellitenansicht** — Googles Häuser-/Friedhofs-/
  Ortsicons sind Teil der Hybrid-Beschriftung und lassen sich bei
  hybrid nicht stylen, deshalb ist „satellite" der Standard;
  „Hybrid" mit Ortsnamen liegt im Umschalter oben links.

## Voreingestellte Nord-Tour + Straße 862 (14. August, nachmittags)

Benedeks Pflichtprogramm für den Tag Aðaldalur → Reyðarfjörður steckt
jetzt als **automatischer Tagesplan** in beiden Karten (erscheint beim
Laden, solange kein eigener Plan gespeichert ist; „Besuchsorte ändern"
überschreibt): **Goðafoss (0:30) → Mývatn (0:38) → Hverir (0:21) →
Dettifoss (0:24) → Ásbyrgi (0:20) → Hótel Austur (2:46) — 4:59 h,
~365 km.** Goðafoss gehört offiziell zum Vortag, ist bewusst drin.

Dafür nötig: **Straße 862 (Dettifossvegur)** in `EXTRA_ROADS` —
durchgehend asphaltiert bis Ásbyrgi, fehlte in Natural Earth komplett
(Dettifoss wäre sonst als 20-km-Anfahrt abseits des Netzes gerechnet
worden). Endpunkte exakt auf Netzknoten der 1 bzw. 85.

## Nachschlage-Links + Wikipedia-Fotos am Satelliten (15. August 2026)

Benedek wollte bei den Tipps ohne eingebettetes Foto nachschauen können,
wie ein Ort aussieht. Zwei Dinge:

1. **Jedes Popup hat jetzt Links** — „🔍 Fotos ansehen" (Google-Bildersuche
   nach `wiki`-Begriff bzw. Name + Iceland) und, wo ein `wiki`-Feld
   existiert, „📖 Wikipedia". Offline-Karte: `#cardLook` in `showCard()`;
   Satellitenkarte: `look`-Zeile in `poiCard()`. Öffnen im neuen Tab,
   brauchen naturgemäß Internet.
2. **Die Satellitenkarte lädt Fotos jetzt selbst von Wikipedia nach**
   (`wikiFotoUrl()` + `stashFoto()`): schlägt `fotos/<slug>.jpg` fehl
   (Tipps sind nicht unter den 38 extrahierten), versucht sie de/en-
   Wikipedia-Artikelbild, dann Commons (JPEGs, Winterbilder gemieden) —
   und legt den Treffer unter `island-photo:<name>` in localStorage ab,
   **derselbe Schlüssel wie auf der Offline-Karte**: einmal am Satelliten
   angetippt = Foto auch offline da. Dafür tragen die kompakten POI-
   Einträge der Satellitenkarte jetzt das `wiki`-Feld (28 Stück,
   Sync-Skript-Logik wie gehabt: karte.html ist die Quelle).

## Tag-3-Tour umgebaut: Ziel Húsavík (15. August 2026, mittags — AKTUELL)

Benedek hat unterwegs umgeplant. Die heutige Tour ist jetzt:
**Goðafoss + Aldeyjarfoss + Hverir/Námaskarð + Dimmuborgir + Hverfjall
+ Skútustaðagígar, Ziel Húsavík** (nicht die Unterkunft!). Engine-
Schätzung ab Frændgarður: **5:12 h, ~394 km** — Reihenfolge
Aldeyjarfoss → Goðafoss → Skútustaðagígar → Dimmuborgir → Hverfjall →
Hverir → Húsavík. Mývatn-See/Dettifoss/Ásbyrgi/Grjótagjá/Víti/Selfoss
sind **zurück auf Tag 4 → 5** (ab morgen machbar); Múlagljúfur war
schon als Tipp bei Tag 6 (Südküste) drin — Benedek hatte ihn für heute
gelistet, liegt aber ~400 km entfernt beim Fjallsárlón.

Technik: `computeDayPlan(i, chosen, endOv)` bzw.
`computeDayRoute(i, chosen, endOv)` können jetzt ein vom nächsten
Hotel abweichendes Tagesziel (`kind:"via"`, Anzeige 📍) bekommen —
genutzt vom Preset (`PRESET_END` = Húsavík). Migration erweitert:
`OLD_PRESETS`-Liste, unveränderte alte Auto-Vorschläge auf Tag 3 UND 4
werden ersetzt, eigene Pläne nie. Achtung: „Besuchsorte ändern" auf
Tag 3 rechnet wieder zur Unterkunft — Húsavík ist als POI auf Tag 3
anwählbar, wenn es Endpunkt bleiben soll.

## Nord-Tour auf Tag 3 → 4 verlegt (15. August 2026, früh — überholt, s. o.)

Benedek fährt die Runde **heute** auf dem Weg Hofsós → Vestmannsvatn,
nicht erst morgen Richtung Reyðarfjörður. Deshalb:

- `PRESET_DAY` von 4 auf **3** (beide Karten). Neue Rechnung ab
  Frændgarður: **Goðafoss (2:15) → Mývatn (0:38) → Hverir (0:21) →
  Dettifoss (0:24) → Ásbyrgi (0:20) → Vestmannsvatn (1:22) —
  5:20 h, ~416 km.** Am Handy startet die Route ab GPS-Position.
- **Migration:** lag der alte, unveränderte Tag-4-Vorschlag noch in
  localStorage, löscht `applyPresetPlan()` ihn einmalig (Abgleich der
  `sel`-Namen). Selbst gebaute Tag-4-Pläne bleiben unangetastet.
- **12 Ziele umgehängt** (`day:"adaldalur"` → `"hofsos"`): Mývatn,
  Grjótagjá, Dimmuborgir, Hverfjall, Skútustaðagígar, Hverir/Námaskarð,
  Víti-Krater, Dettifoss W, Selfoss, Ásbyrgi, Húsavík, Aldeyjarfoss —
  sie stehen jetzt in der Tageskarte 3 und sind dort an-/abwählbar.
  Stuðlagil, Hengifoss und Rjúkandi bleiben auf Tag 4 → 5 (liegen an
  der Strecke nach Osten).

## Was noch offen ist

- **Koordinaten prüfen:** `Hótel Jökulsárlón` (Reynivellir) und
  `Vestra-Fíflholt` sind geschätzt und in der Karte mit „ca." markiert. Beide
  Adressen sind Höfe ohne Hausnummer. Exakte Werte in `STOPS` eintragen.
- **Zwei Zeilen vom handschriftlichen Zettel** waren nicht sicher lesbar:
  „Sólheim~foss" (vermutlich Sólheimajökull, so eingetragen) und ein
  „H…~foss" darunter. Benedek fragen.

## Wichtige Stellen im Code

Alles in `karte.html`, ein einziges `<script>`:

| Suchen nach | Was dort steht |
|---|---|
| `const STOPS` | Unterkünfte mit Datum und Koordinaten |
| `const LEGS` | Etappen: Fahrzeit in Minuten, km, Wegpunkte für die Linie |
| `const POIS` | Sehenswürdigkeiten — hier kommen die Fotos rein |
| `const NO_GO` | Ziele, die 4x4 oder Hochlandbus brauchen |
| `const COSTS` | Kostenstellen: Maut, Parken, Eintritt |
| `assignCosts` | hängt jede Kostenstelle an die nächste Etappe |
| `drawCosts` | zeichnet die roten Punkte und Preisplaketten |
| `setMapStyle` | Umschalter Atlas ↔ Natur |
| `drawGps` | blauer Standortpunkt mit Genauigkeitskreis |
| `VISIT_KEY` | Besucht-Häkchen, localStorage |
| `sunTimes` | Sonnenauf-/-untergang, NOAA-Näherung |
| `buildRoadGraph` | Straßennetz → Routing-Graph (einmalig) |
| `tspOrder` | beste Besuchsreihenfolge, exakt bis 13 Ziele |
| `drawPlan` | türkise Tagesroute mit Nummernpunkten |
| `WIKI_TERMS` | Suchbegriffe fürs Foto-Nachladen |
| `SCENES` | Die gezeichneten Motive, ein Objekt pro Kategorie |
| `fetchPhotos` | Ladekette Wikipedia de → en → Commons, mit Winterfilter |
| `function tick` | Die weiche Kamera mit Trägheit |
| `const GEO` | Die eingebetteten Geodaten (Natural Earth 10m) |

## Zahlen zur Reise

12.–20. August 2026, 7 Nächte, rund 1.880 km und 25:40 h reine Fahrzeit.
Hinflug ab Wien am 12., Rückflug am 20. um 0:10 ab Keflavík.
Die längste Etappe ist Reykjavík → Norðurfjörður mit 340 km in gut 5 Stunden,
davon etwa 100 km Schotterpiste auf der Straße 643.
