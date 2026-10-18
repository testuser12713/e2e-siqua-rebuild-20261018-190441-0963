# SIQUA GmbH – Website

Die Website der SIQUA GmbH in St. Valentin stellt die beiden Geschäftsbereiche
Rauch- und Wärmeabzugsanlage sowie IBAK Servicestelle vor. Besucherinnen und
Besucher finden zu jedem Bereich die sechs Leistungen mit den Original-Icons,
die Kontaktkarte des zuständigen Bereichsleiters mit Foto, Rolle, E-Mail-Adresse
und Mobilnummer sowie im Footer die vollständigen Firmendaten. Dazu kommen ein
Impressum, eine Datenschutzerklärung und eine deutsche 404-Seite, die zurück zur
Startseite führt. Alle Inhalte und Bilder stammen aus dem Bestand der bisherigen
Website; Referenzen, Kundenstimmen und erfundene Angaben gibt es nicht.

## Technik

- React 18 und TypeScript im Strict-Modus
- Vite als Entwicklungs- und Build-Werkzeug (statischer Produktionsbuild)
- React Router mit BrowserRouter für die Adressen der einzelnen Seiten
- framer-motion für Reveal-, Hover- und Seitenübergänge
- Reines CSS mit Custom Properties für Farb-, Typografie-, Abstands-, Radius-,
  Schatten- und Bewegungstokens
- Vitest und Testing Library für die automatisierten Tests

## Dienst `web`

Das Produkt besteht aus dem einen Dienst `web`: der Website selbst. Er liegt in
der Projektwurzel (`./`), ist ein statischer Vite-Build ohne eigenen
Serverprozess und wird im Betrieb als Verzeichnis `dist/` ausgeliefert.

| Dienst | Was es ist | Wo es läuft | Start |
| --- | --- | --- | --- |
| `web` | Website (React/Vite, statischer Produktionsbuild) | Projektwurzel `./`, Auslieferung aus `dist/` | `npm ci && npm run build && npm start` |

In der Entwicklung startet `npm run dev` denselben Dienst mit Hot Reload.

## Installation

Voraussetzung ist Node.js 22 (oder Node.js 20.19 und neuer) mit npm.

```bash
npm ci
```

## Entwicklung

```bash
npm run dev
```

Anschließend ist die Website unter der von Vite ausgegebenen Adresse erreichbar,
standardmäßig unter <http://localhost:5173>.

## Produktionsbuild

```bash
npm run build
npm start
```

`npm run build` prüft zuerst die TypeScript-Typen und erzeugt danach den
statischen Build im Verzeichnis `dist/`. `npm start` liefert diesen Build lokal
aus (dasselbe wie `npm run preview`). Für den Betrieb genügt ein Webserver, der
die Dateien aus `dist/` ausliefert und unbekannte Pfade auf `index.html`
zurückführt, damit die Adressen der Seiten auch beim direkten Aufruf oder
Neuladen funktionieren.

## Tests

```bash
npm test -- --run
```

Die Tests prüfen den gemeinsamen Seitenrahmen aller Adressen und die 404-Seite
samt Rückweg zur Startseite.

## Bedienung

Die Website besteht aus fünf direkt aufrufbaren Seiten:

| Adresse | Inhalt |
| --- | --- |
| `/` | Startseite mit Claim, beiden Geschäftsbereichen und Firmendaten |
| `/rauch-waermeabzugsanlage` | Leistungen und Ansprechpartner Rauch- und Wärmeabzugsanlage |
| `/ibak-servicestelle` | Leistungen und Ansprechpartner IBAK Servicestelle |
| `/impressum` | Impressum und Offenlegung |
| `/datenschutz` | Datenschutzerklärung |

Die Hauptnavigation im Kopfbereich führt zu Startseite, Rauch- und
Wärmeabzugsanlage sowie IBAK Servicestelle; auf schmalen Bildschirmen öffnet der
Menü-Button dieselbe Navigation als Panel. Die aktuell geöffnete Seite ist in der
Navigation markiert. Auf der Startseite führen die beiden Bereichseinstiege und
die Links „Bereichsseite öffnen“ zu den Bereichsseiten. Jede Bereichsseite bietet
zusätzlich einen Querverweis auf den anderen Bereich und auf die Startseite. Im
Footer führen „Impressum“ und „Datenschutz“ zu den Rechtstexten.

E-Mail-Adressen öffnen das Mailprogramm (`mailto:`), Telefon- und Mobilnummern
starten den Anruf (`tel:`). Eine unbekannte Adresse zeigt die 404-Seite mit
„Zur Startseite“, beiden Geschäftsbereichen und den Rechtstexten.

## Funktionen

- Startseite mit Claim, den zwei Geschäftsbereichen und den vollständigen
  Firmendaten
- Zwei Bereichsseiten mit jeweils sechs belegten Leistungen und Original-Icons
- Kontaktkarten beider Bereichsleiter mit Originalfoto, Rolle, E-Mail-Adresse und
  Mobilnummer
- Footer mit Anschrift, Telefon, E-Mail, UID und FN auf jeder Seite
- Impressum und Datenschutzerklärung
- Deutsche 404-Seite für unbekannte Adressen
- Responsives Layout von 360 px bis 1920 px ohne horizontales Scrollen
- Sanfte Einblend-, Hover- und Seitenwechselanimationen, die bei
  `prefers-reduced-motion: reduce` vollständig abgeschaltet werden
- Tastaturbedienung mit sichtbarem Fokus, sinnvolle Alternativtexte und
  Kontraste nach WCAG AA
- Eigener Seitentitel und deutsche Meta-Description je Seite, `lang="de"`,
  Favicon und Open-Graph-Angaben
- Keine externen Skripte, Schriften oder Tracker, keine Cookies und keine
  Speicherung von Besucherdaten in `localStorage` oder `sessionStorage`
