import { FloatingHeader } from '@/components/navigation/floating-header';
import { ScrollArea } from '@/components/scroll-area';
import CalEmbed from '@/features/cal';
import { USER } from '@/lib/config/user';
import { createMetadata } from '@/lib/seo/metadata';
import type { Metadata } from 'next/types';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Book a Meeting';
  const description =
    'Schedule a meeting with me to discuss anything from design to engineering to business to anything else.';

  return createMetadata({
    title: title,
    description: description,
    image: USER.image.profile,
  });
}

export default function BookingPage() {
  return (
    <ScrollArea useScrollAreaId className="h-full bg-grid">
      <FloatingHeader title="Book a Meeting" />
      <div className="flex h-full select-none items-center justify-center space-y-12 p-0 content-wrapper md:min-h-dvh lg:px-8 lg:pt-12 lg:pb-20">
        <div className="z-10 mx-auto flex h-full w-full items-center justify-center">
          <CalEmbed />
        </div>
      </div>
    </ScrollArea>
  );
}
