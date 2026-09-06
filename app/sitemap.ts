import { absoluteUrl, getSiteUrl } from '@/lib/seo/site';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: getSiteUrl() }, { url: absoluteUrl('/cal') }];
}
