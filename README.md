# De Loor Studio

Website voor **De Loor Studio** — film, fotografie en dronebeeld voor luxe verblijven:
alpine resorts, luxe glamping, chalets en fine dining, in Nederland en de Alpen.

Positionering, tone of voice, kleur en typografie volgen het brandingplan
(`Documenten Branding/De_Loor_Studio_Brandingplan.pdf`).

## Stack

Statische site, geen build-stap en geen dependencies.

```
index.html                    homepage
styles.css                    huisstijl + alle componenten
app.js                        i18n, reveals, filter, video, formulier
work/das-kaiserblick.html     case study — Ellmau, Tirol (AT)
work/natterer-see.html        case study — Natters, Tirol (AT)
work/le-sorelline.html        case study — Eindhoven (NL)
assets/img/*.webp             beeld, web-geoptimaliseerd
assets/video/*.mp4            drie verticale loops (±1,8 MB per stuk)
```

## Huisstijl

| Rol | Kleur | Hex |
|-----|-------|-----|
| Basis donker | Diepe inkt | `#1B1B18` |
| Basis licht | Warme crème | `#F4EEE3` |
| Accent | Brass gold | `#9C7A3C` |
| Accent koel | Dennengroen | `#3B4A3C` |

Vuistregel uit het brandingplan: ±90% inkt en crème, goud is een accent en nooit een vlak.

Typografie: **Cormorant Garamond** (display) + **Inter** (lopende tekst), via Google Fonts.

## Taal

Nederlands is standaard, met een NL/EN-schakelaar in de navigatie. De Engelse teksten
staan in het `EN`-object bovenaan `app.js`; het Nederlands staat in de HTML zelf.
Voorkeur wordt bewaard in `localStorage` (`dl-lang`).

Nieuwe tekst toevoegen: geef het element `data-i18n="sleutel"` (of `data-i18n-html`
voor tekst met opmaak, `data-i18n-ph` voor een placeholder) en zet de Engelse variant
onder dezelfde sleutel in `app.js`.

## Beeld vervangen

Alle beelden zijn WebP en worden geleverd op één of twee breedtes (`naam.webp` en
`naam-900.webp`). Vervangen betekent: bestand met dezelfde naam overschrijven, of de
`src`/`srcset` in de HTML aanpassen. Houd `width` en `height` op het element gelijk aan
de echte afmetingen, anders springt de pagina tijdens het laden.

De verticale loops zijn 6 seconden, zonder geluid, en laden pas wanneer ze in beeld
komen. Ze starten niet automatisch bij `prefers-reduced-motion`; dan verschijnen
de bedieningsknoppen.

## Contactformulier

Verstuurt via [Formspree](https://formspree.io/) (`https://formspree.io/f/xzdqoegp`),
asynchroon met een statusmelding onder het formulier. Inzendingen komen binnen op
`hello@deloor.studio`. Zonder JavaScript werkt het formulier als gewone POST.

## Lokaal bekijken

```bash
python3 -m http.server 4321
```

Daarna: <http://localhost:4321>

## Deployment

Wordt gehost via Cloud86 op `deloor.studio`. De `main`-branch is de bron.
