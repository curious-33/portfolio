import { getSiteUrl } from '@/lib/seo/site';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const sitemap = `${getSiteUrl()}/sitemap.xml`;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap,
    host: getSiteUrl(),
  };
}
