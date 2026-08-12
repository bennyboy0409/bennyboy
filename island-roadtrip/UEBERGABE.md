# Island-Roadtrip-Karte — Stand

## Dateien

| Datei | Was es ist |
|---|---|
| `karte.html` | Die Hauptkarte. Eine einzige Datei, komplett eigenständig, kein Build, keine Abhängigkeiten, **kein Internet nötig**. Im Browser öffnen. |
| `karte-google-maps.html` | Zweitversion mit echtem Satellitenbild und Live-Fahrzeiten von Google. Braucht einen eigenen API-Key, oben im Skript einzutragen. |
| `fotos-quellen.csv` | Herkunft aller 38 Fotos: Fotograf, Lizenz, Quell-URL. |

## Was `karte.html` kann

- Islandkarte aus Natural-Earth-Geodaten (Küstenlinie, Gletscher, Straßennetz), direkt eingebettet
- 7 Unterkünfte mit Datum, Adresse, Koordinaten, Telefonnummer
- 8 Etappen mit Strecke, Fahrzeit und Straßennummern
- 38 Sehenswürdigkeiten, bis auf Sigöldugljúfur alle mit einem 2WD-Mietwagen (Toyota Yaris Cross) erreichbar
- 5 bewusst ausgeschlossene Ziele mit Begründung (F-Straßen, Furten)
- Weiche Kamera mit Trägheit, Pinch-Zoom, Doppeltipp, Tastatursteuerung
- Beim Reinzoomen erscheinen Bildkärtchen an jedem Ziel
- Eigene Punkte per Klick setzbar, Export als Code

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

Neues Bild nach `Downloads` legen, den Dateinamen in `fotos-quellen.csv`
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
