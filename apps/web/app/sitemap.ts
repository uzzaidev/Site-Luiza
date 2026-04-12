import type { MetadataRoute } from 'next';
import { siteConfig } from '@/site.config';
import { services } from '@/data/services';

/**
 * Sitemap para SEO: rotas públicas com localePrefix "as-needed" (pt = URLs sem /pt).
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.urls.production.replace(/\/$/, '');
  const lastModified = new Date();

  const staticPaths: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'] }> = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/sobre', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/contato', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/servicos', priority: 0.9, changeFrequency: 'weekly' },
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path || '/'}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  for (const s of services) {
    entries.push({
      url: `${base}/servicos/${s.slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    });
  }

  return entries;
}
