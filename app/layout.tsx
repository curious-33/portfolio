import { fontMono, fontX } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import type { Metadata, Viewport } from 'next';
import type React from 'react';

import './globals.css';

import Navigation from '@/components/navigation';
import { META_THEME_COLORS } from '@/lib/config/site';
import { USER } from '@/lib/config/user';
import { Providers } from '@/lib/providers';
import { themeInitScript } from '@/lib/theme-init-script';
import Script from 'next/script';

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
  width: 'device-width',
  initialScale: 1,
};

export function generateMetadata(): Metadata {
  return {
    title: { template: `%s`, default: `${USER.name}` },
    metadataBase: new URL(`https://${USER.domain}`),
    openGraph: {
      title: USER.name,
      siteName: USER.name,
      type: 'website',
      url: `https://${USER.domain}`,
      images: [
        {
          url: USER.image.profile,
          width: 1200,
          height: 630,
          alt: USER.name,
        },
      ],
    },
    twitter: {
      creator: USER.twitterHandle,
      card: 'summary_large_image',
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn(fontX.variable, fontMono.variable, 'scroll-smooth')}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        {/*
          Fallback for not-found: native <script> in the React tree does not
          execute there, and would also trip React 19's client-script warning.
          afterInteractive injects via the DOM API instead of rendering <script>.
         */}
        <Script
          id="theme-init"
          src={`data:text/javascript;base64,${btoa(themeInitScript)}`}
        />
        <Providers>
          <Navigation />
          <main
            id="main-content"
            vaul-drawer-wrapper=""
            className="relative min-h-screen w-full bg-background"
          >
            {children}
          </main>
        </Providers>
        <Script
          defer
          strategy="lazyOnload"
          src="/stats/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        />
      </body>
    </html>
  );
}
