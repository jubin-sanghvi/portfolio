import { seoDefaults } from '../data/seo';

export function buildPageTitle(title?: string): string {
  if (!title) return seoDefaults.defaultTitle;
  return seoDefaults.titleTemplate.replace('%s', title);
}

export function buildCanonicalUrl(pathname: string): string {
  return `${seoDefaults.canonicalBase}${pathname}`;
}

export function resolveOgImage(image?: string): string {
  return `${seoDefaults.canonicalBase}${image ?? seoDefaults.ogImage}`;
}
