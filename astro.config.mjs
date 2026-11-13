// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Live URL. Change this when the custom domain is connected.
  site: 'https://niki-mental-hig.adam2toth.workers.dev',
  i18n: {
    defaultLocale: 'hu',
    locales: ['hu', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
});
