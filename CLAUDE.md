# Niki – personal brand website – instructions for Claude

One-page bilingual (Hungarian + English) personal brand site for Niki (mental hygiene / wellbeing – details TBD).
Built with Astro + Tailwind, hosted on Cloudflare Workers, deployed automatically from GitHub.
**Status: skeleton.** Structure is in place, almost every text is a `[TODO]` placeholder.

## Project facts
| Item | Value |
|---|---|
| Owner / editor | Niki, technical help: Adam – based in Hungary |
| Live site | https://niki-mental-hig.adam2toth.workers.dev/ (HU) · `/en/` (EN) – once Cloudflare is connected |
| Custom domain | Not purchased yet. When added: Cloudflare dashboard → Workers & Pages → niki-mental-hig → Settings → Domains & Routes, then update `site` in `astro.config.mjs` |
| GitHub repo | https://github.com/atoth3/niki-mental-hig (private), default branch `main` |
| Hosting | Cloudflare Workers (free plan), Worker name `niki-mental-hig` (must match `wrangler.jsonc`) |
| Deploys | Cloudflare Workers Builds connected to GitHub. Push to `main` → production. Other branches → preview URL |
| Build command | `npm run build` · Deploy `npx wrangler deploy` · Preview `npx wrangler preview` (needs the `"previews": {}` block in `wrangler.jsonc`) |
| Stack | Astro 7, Tailwind CSS 4, self-hosted fonts (Inter, Fraunces), Node 22+ |
| Local dev | `npm install`, then `npm run dev` → http://localhost:4321 |

## Decisions (keep unless the owner changes them)
- One-page site, two languages: Hungarian is default at `/`, English at `/en/`.
- **No contact form.** Visitors call, email, or use an external booking link. Nothing is stored → no GDPR data-processing burden.
- No cookies, no tracking scripts, no third-party embeds. If analytics is wanted, use Cloudflare Web Analytics (cookieless).
- Colours/fonts are a neutral placeholder (terracotta + cream, Fraunces + Inter) until the brand is decided.

## Status / open items
- [ ] Decide name / brand, field, tone → fill every `[TODO]` text (both languages)
- [ ] Portrait photo (`portrait/`) and optional hero photo (`hero/`)
- [ ] Phone / email / booking link / social links in `settings.json`
- [ ] Brand colours and fonts (`src/styles/global.css` `@theme`) and favicon (`public/favicon.svg`)
- [ ] Connect the repo in Cloudflare Workers Builds
- [ ] Buy domain and connect it

## Who edits this repo
Niki and Adam update the site by asking Claude, usually in plain Hungarian.
Assume the person is NOT a developer: do the work, explain the result briefly in their language.

## Content changes – the ONLY places to edit for normal updates
| What | File |
|---|---|
| Name, phone, email, booking link, Instagram/Facebook/LinkedIn | `src/content/settings.json` (empty value = hidden) |
| All Hungarian texts | `src/content/site.hu.json` |
| All English texts | `src/content/site.en.json` |
| Images | `src/assets/images/<folder>/` |

Rules:
- **Always update BOTH languages.** Same key in `site.hu.json` and `site.en.json`.
- Testimonials: `testimonials.items` = list of `{ "quote": "...", "name": "..." }`. The section and its menu link are hidden while the list is empty.
- Lists (`about.paragraphs`, `about.facts`, `services.items`, `process.steps`) can have any number of entries.
- Keep JSON valid (double quotes, no trailing commas).
- Do not touch `src/components`, `src/layouts`, `src/styles`, config files unless the user asks for a design/layout change. During the skeleton phase, adding/removing sections is expected – keep both languages in sync.

## Images
- `hero/` – optional photo on the right side of the top section (first file by name). Empty → soft colour placeholder.
- `portrait/` – portrait in the "About" section (first file by name). Also the social-share image if `hero/` is empty.
- `gallery/` – reserved, not shown yet.
- Lowercase file names, no spaces or accents. Resize anything over ~3000 px before committing. Astro optimises for the web.

## Workflow for every change
1. `git pull` on `main` first.
2. `npm install` (first time only), then `npm run build` – must finish without errors.
3. Commit on a new branch with a clear message, e.g. `content: add about text`.
4. Push the branch → Cloudflare builds a preview URL: `https://<branch with / replaced by ->-niki-mental-hig.adam2toth.workers.dev`. Confirm the build succeeded and **send the preview URL directly** to the user (HU `/` and EN `/en/`).
5. When approved, merge into `main` → production updates within ~1–2 minutes.
For a tiny text fix the user may say "publish directly" – then commit to `main`.

## Placeholders
Values containing `[TODO]` are waiting for real data. When asked "mi hiányzik még?", search for `[TODO]` and list them.

## Tech notes
- Pages: `src/pages/index.astro` (HU) and `src/pages/en/index.astro` (EN) both render `src/components/Landing.astro` (section order lives there).
- Sections: Header, Hero, About, Services, Process, Testimonials, Contact (+ footer).
- Content/image helpers: `src/lib/content.ts`. Theme: `src/styles/global.css` (`@theme`).
