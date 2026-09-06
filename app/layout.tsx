import { fontMono, fontX } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import type { Metadata, Viewport } from 'next';
import type React from 'react';

import './globals.css';

import Navigation from '@/components/navigation';
import { META_THEME_COLORS } from '@/lib/config/site';
import { Providers } from '@/lib/providers';
import { getRootMetadata } from '@/lib/seo/metadata';
import { themeInitScript } from '@/lib/theme-init-script';
import Script from 'next/script';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: META_THEME_COLORS.light },
    { media: '(prefers-color-scheme: dark)', color: META_THEME_COLORS.dark },
  ],
  width: 'device-width',
  initialScale: 1,
};

export function generateMetadata(): Metadata {
  return getRootMetadata();
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[10000] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-lg focus:ring-2 focus:ring-ring"
        >
          Skip to content
        </a>
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
