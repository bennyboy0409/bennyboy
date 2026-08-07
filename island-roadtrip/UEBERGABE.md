# Island-Roadtrip-Karte — Übergabe an eine lokale Sitzung

Stand der Arbeit und was als Nächstes zu tun ist. Geschrieben für eine
Claude-Code-Sitzung, die lokal läuft und **freien Netzzugang** hat.

## Dateien

| Datei | Was es ist |
|---|---|
| `karte.html` | Die Hauptkarte. Eine einzige Datei, komplett eigenständig, kein Build, keine Abhängigkeiten. Im Browser öffnen. |
| `karte-google-maps.html` | Zweitversion mit echtem Satellitenbild und Live-Fahrzeiten von Google. Braucht einen eigenen API-Key, oben im Skript einzutragen. |

## Was `karte.html` kann

- Islandkarte aus Natural-Earth-Geodaten (Küstenlinie, Gletscher, Straßennetz), direkt eingebettet
- 7 Unterkünfte mit Datum, Adresse, Koordinaten, Telefonnummer
- 8 Etappen mit Strecke, Fahrzeit und Straßennummern
- 34 Sehenswürdigkeiten, alle mit einem 2WD-Mietwagen (Toyota Yaris Cross) erreichbar
- 6 bewusst ausgeschlossene Ziele mit Begründung (F-Straßen, Furten)
- Weiche Kamera mit Trägheit, Pinch-Zoom, Doppeltipp, Tastatursteuerung
- Beim Reinzoomen erscheinen Bildkärtchen an jedem Ziel
- Eigene Punkte per Klick setzbar, Export als Code

## Die offene Aufgabe: echte Fotos fest einbauen

Aktuell zeigt die Karte **gezeichnete Motive** pro Kategorie. Der Grund: die
Sitzung, in der sie gebaut wurde, lief in einer Cloud-Umgebung, deren
Netzrichtlinie jeden Bildhost blockiert hat (`403` am Egress-Proxy) — weder
Wikimedia noch Unsplash noch Flickr waren erreichbar, und ein veröffentlichtes
Artifact auf claude.ai darf ohnehin keine fremden Server ansprechen.

Als Zwischenlösung lädt die Datei die Fotos **zur Laufzeit** nach, wenn man sie
lokal im Browser öffnet — siehe `fetchPhotos()`. Das funktioniert, ist aber vom
Netz abhängig und liefert nicht immer das schönste Bild.

**Zu tun:** Die Fotos herunterladen, verkleinern und als `data:`-URI fest in das
`POIS`-Array eintragen. Dann braucht die Karte kein Internet mehr, und die
Bilder funktionieren auch als veröffentlichtes Artifact.

### Vorgehen

1. Benedek hat eine Datei `island-fotos-uebersicht.csv` mit ausgewählten Bildern.
   Zuerst danach fragen und sie verwenden. Falls es sie nicht mehr gibt, die
   Bilder selbst von Wikimedia Commons holen.

2. **Auswahlregeln** (wichtig, wurde ausdrücklich so gewünscht):
   - Sommeraufnahmen. Kein Schnee, kein Winter, keine Nordlichter, keine Nacht.
   - Ausnahme: bei `Jökulsárlón`, `Diamond Beach`, `Sólheimajökull` und
     `Vatnajökull — Gletschertour` ist Eis erwünscht, das ist dort das Motiv.
   - Querformat, freie Lizenz (Commons), Fotograf und Lizenz notieren.

3. Bilder auf **640×360** beschneiden und als JPEG mit Qualität ~72 speichern.
   Bei 34 Bildern landet man so bei etwa 1,5–2,5 MB Gesamtgröße — die Obergrenze
   für ein Artifact liegt bei 16 MB, das passt bequem.

4. Pro Eintrag im `POIS`-Array setzen:
   ```js
   img: "data:image/jpeg;base64,...",
   credit: "Commons · Fotograf · CC BY-SA 4.0"
   ```
   Die Anzeige funktioniert dann automatisch — `attachPhoto()` und `drawThumbs()`
   bevorzugen `img` gegenüber der Zeichnung, das ist schon eingebaut.

5. `fetchPhotos()` überspringt alle Ziele, die bereits ein `img` haben. Wenn
   am Ende alle 34 versorgt sind, kann man `PHOTOS_ON = false` setzen, dann
   entfallen die Netzabfragen komplett.

6. Prüfen mit Playwright (Chromium liegt unter `/opt/pw-browsers`), in hell und
   dunkel, auf 1440 px und 390 px Breite. Auf Fehler in der Konsole achten und
   darauf, dass die Seite nicht seitlich scrollt.

## Zwei Sachen, die noch offen sind

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
