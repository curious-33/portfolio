import { JetBrains_Mono as FontMono } from 'next/font/google';
import localFont from 'next/font/local';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import { cn } from '@/lib/utils';

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const fontX = localFont({
  src: [
    {
      path: '../public/assets/X-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/assets/X-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-x', // This creates the CSS variable
});

export const fontNdot55 = localFont({
  src: '../public/assets/Ndot-55.otf',
  variable: '--font-ndot-55',
});



export const fonts = cn(
  GeistSans.variable,
  GeistMono.variable,
  'touch-manipulation font-sans antialiased'
);
