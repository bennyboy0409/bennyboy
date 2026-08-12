# Island-Roadtrip-Karte — Stand

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

## Tagesplaner — neu (12. August 2026, abends)

Aufklappbare Box ganz oben in der Seitenleiste. Ablauf: Tag wählen (bei
laufender Reise ist das echte Heute vorgewählt), Ziele anhaken (schon
besuchte sind automatisch abgewählt), „Reihenfolge berechnen". Ergebnis:
nummerierte Liste mit km und Minuten pro Abschnitt, und die Route liegt
türkis mit Nummernpunkten auf der Karte, die dorthin zoomt.

Start ist die Unterkunft des Vortags — oder **der eigene Standort, wenn
GPS (◉) läuft**. Ziel ist immer automatisch die Unterkunft des gewählten
Tages. Man kann den Plan also mittags neu rechnen: Gesehenes abhaken,
neu berechnen, und er plant den Rest des Tages ab dem aktuellen Standort.

Technik, komplett offline:

- Gerechnet wird auf dem eingebetteten Natural-Earth-Straßennetz
  (93 Linien, ~2.600 Knoten, 5.076 km). `buildRoadGraph` heftet
  Linienenden unter 2,5 km aneinander, `dijkstra` liefert die
  Distanzmatrix samt Pfadgeometrie fürs Zeichnen.
- Die Reihenfolge (Start fest, Ende fest) löst `tspOrder` exakt per
  Bitmasken-DP bis 13 Ziele, darüber Greedy mit 2-Opt.
- Anfahrt vom Punkt zum Netz zählt als Luftlinie ×1,3; sind zwei Punkte
  im Netz nicht verbunden, fällt das Paar auf Luftlinie ×1,35 zurück.
- Zeitschätzung: 62 km/h Schnitt, ausgewiesen als „grob geschätzt".
  Das Netz ist generalisiert — die *Reihenfolge* ist verlässlich,
  einzelne km-Angaben können 10–20 % danebenliegen.

Stichprobe geprüft: Südküsten-Tag (11 Ziele) ergibt exakt die richtige
West-Reihenfolge Lagune → Skaftafell → Fjaðrárgljúfur → Vík → … →
Seljalandsfoss, 369 km gegen real ~360; Rechenzeit ~0,5 s inklusive
Graphaufbau.

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
