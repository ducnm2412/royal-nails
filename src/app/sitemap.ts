import type { MetadataRoute } from 'next';
import { site } from '@/config/site';

const pages: { path: string; priority: number }[] = [
  { path: '', priority: 1 },
  { path: '/services', priority: 0.9 },
  { path: '/book', priority: 0.9 },
  { path: '/gallery', priority: 0.7 },
  { path: '/about', priority: 0.6 },
  { path: '/contact', priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({ url: `${site.url}${p.path}`, changeFrequency: 'monthly', priority: p.priority }));
}
