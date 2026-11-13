import type { ImageMetadata } from 'astro';
import settings from '../content/settings.json';
import siteHu from '../content/site.hu.json';
import siteEn from '../content/site.en.json';

export type Lang = 'hu' | 'en';
export type Testimonial = { quote: string; name: string };

export const languages: Lang[] = ['hu', 'en'];
export const homePath = (lang: Lang) => (lang === 'hu' ? '/' : '/en/');

export function getContent(lang: Lang) {
  const site = lang === 'hu' ? siteHu : siteEn;
  return {
    settings,
    site: { ...site, testimonials: { ...site.testimonials, items: site.testimonials.items as Testimonial[] } },
  };
}

// ---- Images ---------------------------------------------------------------
// Every image under src/assets/images is available by its path relative to that folder.
const all = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}',
  { eager: true },
);
const PREFIX = '/src/assets/images/';

/** All images in the given folders, sorted by file name. */
export function imagesIn(...folders: string[]) {
  return Object.entries(all)
    .filter(([p]) => folders.some((f) => p.startsWith(PREFIX + f + '/')))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([p, m]) => ({ path: p.slice(PREFIX.length), src: m.default }));
}
