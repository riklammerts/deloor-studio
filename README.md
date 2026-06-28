# De Loor Studio

Premium landingspagina voor **De Loor Studio** — cinematografische studio voor luxe hospitality (boutiquehotels, Michelinrestaurants, resorts).

## Stack

Statische site, geen build-stap. Drie bestanden + drie case studies:

- `index.html` — homepage
- `styles.css` — gedeelde styling
- `app.js` — i18n (NL/EN), animaties, contactformulier
- `work/` — drie case-studypagina's

## Taal

Nederlands is standaard, met een NL/EN-toggle in de navigatie. Voorkeur wordt bewaard in `localStorage` (`dl-lang`).

## Contactformulier

Verstuurt via [Formspree](https://formspree.io/) (`index.html`, form-action). Inzendingen komen binnen op `hello@deloor.studio`.

## Lokaal bekijken

Geen build nodig — open `index.html` of draai een eenvoudige server:

```bash
python3 -m http.server 4321
```

## Deployment

Wordt gehost via Cloud86. De `main`-branch is de bron.
