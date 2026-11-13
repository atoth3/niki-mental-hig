# Niki – personal brand website

Bilingual (HU/EN) one-page personal brand site. **Skeleton** – content is `[TODO]` placeholders.

- **Stack:** Astro 7, Tailwind CSS 4, Cloudflare Workers (static assets)
- **Edit content:** see `CLAUDE.md` – texts in `src/content/`, images in `src/assets/images/`

## Local development
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

## Deployment (Cloudflare Workers Builds)
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Preview command: `npx wrangler preview`
