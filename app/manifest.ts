import { USER } from '@/lib/config/user';
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${USER.name} — ${USER.jobTitle}`,
    short_name: 'Curious',
    description: USER.description,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#09090b',
    lang: 'en',
    categories: ['portfolio', 'personalization', 'productivity'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
