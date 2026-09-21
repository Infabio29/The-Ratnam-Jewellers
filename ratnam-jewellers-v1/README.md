# The Ratnam Jewellers: homepage (v1)

Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Run
Open `index.html` in a browser, or serve the folder:

    python3 -m http.server 8000

## Files
- `index.html`: page markup
- `style.css`: all styles (colour tokens are at the top, in `:root`)
- `script.js`: sticky header, mobile menu, piece scroller, credit-logo fallback
- `assets/img/`: logo and photographs (optimised JPEGs)
- `assets/fonts/allright.otf`: brand display font
- `standalone.html`: the same page as one self-contained file (images and font embedded)

## Notes
- First version: heritage-style lowercase headings, no Heritage section.
- Body font is Hanken Grotesk (Google Fonts, loaded in `index.html`). The brand body font Roc Grotesk is listed first in `--body`; add its files and an `@font-face` to use it.
- Brand colours: `#262262` (indigo) and `#FFFFFF`.
- Enquiry buttons are `mailto:` links; collection pages are not built yet.
- Site credits (FabulousMedia x GoCommercially) sit in the footer. Their logos load from `play.fabulousmedia.in`; if that host is blocked, the names show as text.
