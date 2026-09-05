import { FloatingHeader } from '@/components/navigation/floating-header';
import { ProfileImage } from '@/components/profile-image';
import { PronounceMyName } from '@/components/pronounce-my-name';
import { ScrollArea } from '@/components/scroll-area';
import { USER } from '@/lib/config/user';
import { GitHubContribution } from '@/features/home/components/github-contribution';
import Info from '@/features/home/components/info';
import { Projects } from '@/features/home/components/projects';
import { createOgImage } from '@/lib/createOgImage';
import { JsonLd, type Organization, type WithContext } from '@/lib/seo/json-ld';
import { createMetadata } from '@/lib/seo/metadata';
import { FlipSentences } from '@/components/ui/flip-sentences';
import type { Metadata } from 'next/types';

// Force static generation at build time
export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const title = USER.tagline;
  const description = USER.description;
  const image = createOgImage({
    title: title,
    meta: description,
  });
  return createMetadata({
    title: title,
    description: description,
    image: image,
  });
}

export default async function Page() {
  const jsonLd: WithContext<Organization> = {
    '@type': 'Organization',
    '@context': 'https://schema.org',
  };

  return (
    <>
      <JsonLd code={jsonLd} />
      <Info show={['time', 'screen']} />
      <ScrollArea useScrollAreaId className="">
        <FloatingHeader scrollTitle={USER.name} />
        <div className="layout relative z-10 content-wrapper mb-10">
          <div className="flex flex-col gap-12">
            <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <ProfileImage />
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <h1 className="font-semibold text-3xl sm:text-l">
                    {USER.firstName}
                  </h1>
                  <PronounceMyName namePronunciationUrl="./assets/ritesh-bucha.mp3" />
                </div>
                <FlipSentences sentences={USER.flipSentences} />
              </div>
            </header>

            <section className="flex flex-col gap-3">
              <h2 className="font-medium text-lg">About</h2>
              <div className="flex flex-col gap-4 text-neutral-800 dark:text-neutral-300/80">
                <p>
                  I’m a Senior Frontend Engineer with 6+ years of experience building modern, responsive, and user-friendly web applications.
                </p>
                <p>
                  I enjoy turning ideas and designs into real products, solving complex problems, and paying attention to the small details that make a product feel right. I mainly work with React, Next.js, TypeScript, and modern frontend technologies.
                </p>
                <p>
                  Always learning, always building.
                </p>
              </div>
            </section>

            <section>
              <GitHubContribution />
            </section>

            <section>
              <Projects />
            </section>

            {/* <section>
              <h2 className="font-medium text-lg">Where</h2>
              <ViewMagnifier>
                <MapLocation />
              </ViewMagnifier>
            </section> */}
          </div>
        </div>
      </ScrollArea>
    </>
  );
}
