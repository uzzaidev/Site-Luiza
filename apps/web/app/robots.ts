import type { MetadataRoute } from 'next';
import { siteConfig } from '@/site.config';

/** Permite indexação e aponta crawlers para o sitemap. */
export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.urls.production.replace(/\/$/, '');
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${base}/sitemap.xml`,
    host: new URL(siteConfig.urls.production).host,
  };
}
