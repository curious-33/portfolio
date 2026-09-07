import { FloatingHeader } from '@/components/navigation/floating-header';
import { ScrollArea } from '@/components/scroll-area';
import CalEmbed from '@/features/cal';
import { JsonLd } from '@/lib/seo/json-ld';
import { createMetadata } from '@/lib/seo/metadata';
import { getContactPageGraph } from '@/lib/seo/schema';
import type { Metadata } from 'next/types';

export function generateMetadata(): Metadata {
  return createMetadata({
    title: 'Book a Meeting',
    description:
      'Schedule a meeting with Mukhammad Sodik to discuss design, engineering, product, or anything else.',
    path: '/cal',
  });
}

export default function BookingPage() {
  return (
    <>
      <JsonLd code={getContactPageGraph()} />
      <ScrollArea useScrollAreaId className="h-full bg-grid">
        <FloatingHeader />
        <div className="flex h-full flex-col content-wrapper md:min-h-dvh lg:px-8 lg:pt-12 lg:pb-20">
          <header className="px-4 pt-6 pb-4 lg:px-0 lg:pt-0">
            <h1 className="text-2xl font-semibold tracking-tight">
              Book a Meeting
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Schedule a time to talk design, engineering, or product.
            </p>
          </header>
          <div className="z-10 flex min-h-0 flex-1 items-center justify-center">
            <CalEmbed />
          </div>
        </div>
      </ScrollArea>
    </>
  );
}
