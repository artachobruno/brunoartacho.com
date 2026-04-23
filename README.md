# brunoartacho.com

Personal professional website for Bruno Artacho — AI Leader, Founder, Researcher.

Static site (no build step). Deployed as a Render static site on the custom domain `brunoartacho.com`.

## Structure

```
.
├── index.html            Home
├── about.html            About
├── leadership.html       Leadership / experience
├── research.html         Peer-reviewed research
├── athletespace.html     Athlete Space (venture)
├── writing.html          Essays
├── contact.html          Contact + intent cards
├── 404.html              Not-found page
├── assets/
│   ├── css/site.css      Design system (all styling)
│   ├── js/nav.js         Mobile nav toggle
│   └── img/              Photos (portrait.jpg, etc.)
├── papers/               PDFs of own publications (optional)
├── cv.pdf                Downloadable CV (add before deploy)
├── favicon.ico           Favicon (add before deploy)
├── render.yaml           Render deploy config
├── robots.txt
├── sitemap.xml
└── .gitignore
```

## Design system

- **Palette** — off-white `#FAFAF7` canvas, near-black `#141413` text, midnight-blue `#1A2B42` accent.
- **Typography** — Newsreader (serif) for headlines, Inter (sans) for body, Material Symbols Outlined for icons. All loaded from Google Fonts.
- **Layout** — centered 840px column, 80px section gap, 24px component gap.
- **Style** — sophisticated minimalism. No gradients. 1px rules for depth. Ghost buttons and subtle tonal layering for hover states.

All tokens live in `assets/css/site.css` (`:root`).

## Before first deploy

1. **Add the portrait photo.** Save Bruno's headshot to `/assets/img/portrait.jpg` (aspect ratio 4:5 preferred, ~800×1000 px). Until this file exists the home page falls back to an SVG placeholder.
2. ~~**Add the CV.**~~ ✓ Done — `cv.pdf` is generated and sanitized (no phone number).
3. ~~**Add a favicon.**~~ ✓ Done — `favicon.svg`, `favicon.ico` (multi-res), and `apple-touch-icon.png` are in place.
4. **Confirm social links.** Edit the footer in each page if any of these change:
   - LinkedIn: `https://www.linkedin.com/in/artachobruno/`
   - Google Scholar: `https://scholar.google.com/citations?user=PGlJ40EAAAAJ`
   - GitHub: `https://github.com/BrunoArtacho`

## Local preview

Any static server works, for example:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploying to Render

1. Push this repo to GitHub.
2. In Render, **New → Static Site** and point at the GitHub repo.
3. Render will pick up `render.yaml` automatically. If not, set:
   - **Build Command:** (empty)
   - **Publish Directory:** `.`
4. Once live, in **Settings → Custom Domains**, add `brunoartacho.com` and `www.brunoartacho.com`.
5. Update your DNS:
   - `ALIAS / ANAME` or `CNAME` at the apex → the Render hostname Render shows you.
   - `CNAME` for `www` → the Render hostname.
6. Render issues a free TLS certificate automatically once the DNS propagates.

## Editing content

Each page is a standalone HTML file. No framework, no JSX, no build. Edit the HTML directly.

- To add a new essay, duplicate an `<article class="essay-row">` in `writing.html`.
- To add a publication, duplicate a `<div class="paper">` in `research.html`.
- To update a role, edit the corresponding `<div class="timeline-row">` in `leadership.html`.

## Browser support

Modern evergreen browsers (Chrome, Safari, Firefox, Edge). No IE support. Tested responsive at ≥320 px.
