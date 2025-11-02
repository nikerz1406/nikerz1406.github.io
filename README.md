# nikerz1406.github.io

This repository is a static personal website (GitHub Pages). It includes a small loading curtain animation that runs before the page content is displayed and a collection of static assets (CSS, JS, fonts, and images).

Live demo: https://nikerz1406.github.io/ (public)

## Contents
- `index.html` — entry page (the loading curtain is initialized early in the `<head>` to prevent content flashing)
- `fragments/` — HTML fragments loaded by the curtain (e.g. `temp2.html`)
- `js/` — JavaScript source (including `curtain.js`, `helper.js`, `cvPlugin.js`, and `script.js`)
- `css/` — project styles (`style.css`, `styleCV1.css`, ...)
- `BootstrapFontawesome/` — bundled Bootstrap and FontAwesome assets used offline
- `img/` — images and logos

## Goals / Features
- Small startup curtain/spinner animation to hide initial rendering until content is loaded
- Color/theme utilities and small UI animations (implemented with jQuery)
- Bundle of Bootstrap & FontAwesome for offline use

## Requirements
- A modern browser (Chrome, Firefox, Edge)
- A local HTTP server to serve files (the site uses `fetch` / XHR; `file://` won't work)

## Run locally
You can serve the project quickly with one of these methods from the project root (use the repository root):

1) VS Code — Live Server (recommended for development)

- Install the "Live Server" extension.
- Right-click `index.html` → "Open with Live Server".

2) Python (PowerShell)

```powershell
cd ./
py -m http.server 8000
# or: python -m http.server 8000
```

Open http://localhost:8000 in your browser.

3) Node (http-server)

```powershell
npx http-server ./ -p 8000
npx http-server -p 8000
```

## Quick checks after starting
- Open Developer Tools (F12) → Console and Network
- Confirm `fragments/temp2.html` is loaded (XHR) and that there are no `$ is not defined` or `jQuery is not defined` errors
- If jQuery is blocked by SRI, fallback to the local copy is present (see Troubleshooting)

## Important implementation notes (curtain initialization)
- The loading curtain is started early so it appears before the page content. The project now loads `jQuery`, `js/helper.js`, and `js/curtain.js` in the `<head>` and runs a small initializer on `DOMContentLoaded`.
- The `CurtainFactory` instance loads `fragments/temp2.html` into `#content` and hides/shows navigation via a `completed` callback.

## Troubleshooting common errors

- Error: "Failed to find a valid digest in the 'integrity' attribute ... resource has been blocked"
	- This means the Subresource Integrity (SRI) hash for a CDN file does not match the downloaded bytes and the browser blocked the resource. The project removed the broken `integrity` attribute and uses a local fallback for jQuery. To harden with SRI, compute the correct hash for the exact jQuery file you serve (see below).

- Error: "$ is not defined" or "jQuery is not defined"
	- Cause: jQuery didn't load (CDN blocked or wrong path). Fix: ensure you're serving via HTTP and that either the CDN copy loads or the local fallback `BootstrapFontawesome/jquery/jquery.js` is available.

- Error: `fragments/temp2.html` not found (XHR fails)
	- Cause: wrong path or not served over HTTP. Verify `fragments/temp2.html` exists and the server root is the project root.

## How to add correct SRI (optional)
If you want to re-enable SRI for a CDN file or use SRI for your local copy, compute SHA-256 base64 and prefix with `sha256-`.

Example (Node):

```powershell
node -e "const fs=require('fs'),c=require('crypto');console.log('sha256-'+c.createHash('sha256').update(fs.readFileSync('BootstrapFontawesome/jquery/jquery.js')).digest('base64'))"
```

Copy the printed value and use it in the `integrity` attribute. Example:

```html
<script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-<BASE64_HERE>" crossorigin="anonymous"></script>
```

Note: SRI will only match if the file bytes are exactly the same as the file used to compute the hash.

## Development notes & suggestions
- Consider removing jQuery for small helper functions — replacing with vanilla JS reduces payload.
- Convert jQuery animations in `js/curtain.js` to CSS transforms/keyframes where possible (GPU-accelerated and smoother).
- Bundle & minify CSS/JS for production; enable gzip/brotli on the server.
- Use `preload` for important fonts or hero images to speed painting of above-the-fold content.

## Files to look at for future improvements
- `js/curtain.js` — curtain animation logic and CurtainFactory
- `js/helper.js` — utilities (random, send/fetch wrapper)
- `js/cvPlugin.js` — UI behaviors and color theming
- `index.html` — head script ordering and initializers

## License & contact
This repo contains bundled third-party assets (Bootstrap, FontAwesome); respect their licenses (bundled in `BootstrapFontawesome/`).

If you want me to make any of the following changes, tell me which one and I'll implement it:
- Replace the jQuery-based `helper.send` with a smaller vanilla-`fetch` wrapper and update callers
- Convert one `curtain.js` animation to CSS (as an example optimization)
- Add a small PowerShell script to start the server and open the browser automatically

---
Last updated: 2025-10-29
