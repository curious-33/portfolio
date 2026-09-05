'use client';

import { themeInitScript } from '@/lib/theme-init-script';
import { TooltipProvider } from '@/components/ui/tooltip';
import { useServerInsertedHTML } from 'next/navigation';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { useRef } from 'react';

export function Providers({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const themeInitInserted = useRef(false);

  useServerInsertedHTML(() => {
    if (themeInitInserted.current) return null;
    themeInitInserted.current = true;
    return (
      <script
        dangerouslySetInnerHTML={{ __html: themeInitScript }}
      />
    );
  });

  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
      storageKey="theme"
      {...props}
      // React 19 warns on client-rendered JS <script> tags. next-themes injects
      // one for FOUC prevention; mark it as a data block on the client so React
      // skips the warning. SSR still emits a real JS script that the browser runs.
      scriptProps={
        typeof window === 'undefined' ? undefined : { type: 'application/json' }
      }
    >
      <TooltipProvider>{children}</TooltipProvider>
    </NextThemeProvider>
  );
}
