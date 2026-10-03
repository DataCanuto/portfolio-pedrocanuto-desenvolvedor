import type { MetadataRoute } from 'next';
import { categories, projects } from '@/data';
import { siteUrl } from '@/utils/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/projetos',
    '/portfolio',
    ...categories.map((c) => c.href),
    ...projects.flatMap((p) => (p.caseStudy ? [p.caseStudy] : [])),
  ];
  return [...new Set(routes)].map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
