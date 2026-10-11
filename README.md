# QSilon Tensorv — Company Website

Website for **QSilon Tensorv**: software & AI automation — AI voice agents, ERP, school management systems and websites.

Pure HTML + CSS + JavaScript. No build step, no framework. It runs on any static host (GitHub Pages, Netlify, Vercel, cPanel).

## Pages
| Page | File |
|------|------|
| Home | `index.html` |
| Services | `services.html` |
| Solutions | `solutions.html` |
| About | `about.html` |
| Contact (form + details) | `contact.html` |

## Editing the website (no coding needed)
**All content lives in one file: `assets/js/site-data.js`.**

- **Text, services, solutions, FAQ, stats**: edit the matching block.
- **Contact details**: edit `contact` (email, phone, WhatsApp, address, hours, optional Google Maps embed).
- **Page design and order**: `pages` lists the sections shown on each page, in order. Re-order, remove or add sections. For example:
  ```js
  home: ["hero", "techStrip", "services", "solutions", "stats", "process", "industries", "whyUs", "faq", "cta"],
  ```
  Available sections: `hero, pageHeader, techStrip, services, serviceDetails, solutions, solutionDetails, stats, process, industries, whyUs, techStack, about, values, testimonials, faq, cta, contact`.
- **Add a service**: add an item to `services.items`. It automatically appears on the Home page, the Services page, the footer and the contact form dropdown.
- **Service pictures**: every service on the Services page shows an animated product screen (`assets/js/mockups.js`). To show your own photo instead, put it in `assets/img/` and add `image: "assets/img/voice-ai.jpg"` to that service.
- **Logo**: the site uses the QSilon Tensorv logo (mark + full name). Ready-to-use files are in `assets/img/`: `qsilon-tensorv-logo-dark.png/.svg` (for dark backgrounds), `qsilon-tensorv-logo-light.png/.svg` (for light backgrounds) and `logo-mark-512.png` (square icon for social media / WhatsApp DP). To use your own logo image on the site, set `brand.logo` in `site-data.js`.
- **Testimonials**: add real client quotes to `testimonials`, then add `"testimonials"` to a page layout.
- **Colours**: change `--c1`, `--c2`, `--c3` at the top of `assets/css/style.css`.

## Contact form
- By default, the form opens the visitor's email app with the message pre-filled, addressed to `contact.email`.
- To receive submissions directly, create a free form on [Formspree](https://formspree.io), then set `contact.formEndpoint` to its URL (`https://formspree.io/f/xxxx`).
- The form includes validation and a spam honeypot. Service links (for example "Discuss ERP Solutions") pre-select the service.

## Run locally
```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy on Render (recommended)
This repo includes `render.yaml`, so Render sets everything up automatically.

1. Sign in at [render.com](https://render.com) with GitHub.
2. Click **New → Blueprint** and select the `QSilon-websites` repo.
3. Click **Apply**. Render creates a free **Static Site** named `qsilon-tensorv`.
4. In about a minute your site is live at `https://qsilon-tensorv.onrender.com` (or a similar URL).

Every push to `main` redeploys automatically.

**Manual option (without Blueprint):** New → **Static Site** → choose the repo → Branch `main`, Build Command: leave empty (or `echo ok`), Publish Directory: `.` → Create.

**Custom domain:** Site → Settings → Custom Domains → add `www.yourdomain.com`, then add the DNS record Render shows you at your domain provider. HTTPS is free and automatic.

## Deploy on GitHub Pages
Repo **Settings → Pages → Deploy from branch → `main` / root**.

## Before going live
Replace the placeholder email, phone, WhatsApp number, address and social links in `site-data.js`, and update `stats` with your real numbers.
