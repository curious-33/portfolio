import { FloatingHeader } from '@/components/navigation/floating-header';
import { ProfileImage } from '@/components/profile-image';
import { PronounceMyName } from '@/components/pronounce-my-name';
import { ScrollArea } from '@/components/scroll-area';
import { USER } from '@/lib/config/user';
import { GitHubContribution } from '@/features/home/components/github-contribution';
import Info from '@/features/home/components/info';
import { Projects } from '@/features/home/components/projects';
import { JsonLd } from '@/lib/seo/json-ld';
import { createMetadata } from '@/lib/seo/metadata';
import { getHomeGraph } from '@/lib/seo/schema';
import { defaultTitle } from '@/lib/seo/site';
import { FlipSentences } from '@/components/ui/flip-sentences';
import type { Metadata } from 'next/types';

export function generateMetadata(): Metadata {
  return createMetadata({
    title: defaultTitle,
    description: USER.description,
    path: '/',
    absolute: true,
  });
}

export default function Page() {
  return (
    <>
      <JsonLd code={getHomeGraph()} />
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
                    {USER.firstName}{' '}
                    <span className="font-medium text-muted-foreground">
                      {USER.lastName}
                    </span>
                  </h1>
                  <PronounceMyName
                    namePronunciationUrl={USER.namePronunciationUrl}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  If that&apos;s hard to pronounce, Curious is fine.
                </p>
                <FlipSentences sentences={USER.flipSentences} />
              </div>
            </header>

            <section className="flex flex-col gap-3">
              <h2 className="font-medium text-lg">About</h2>
              <div className="flex flex-col gap-4 text-neutral-800 dark:text-neutral-300/80">
                <p>
                  I’m a Software Engineer building modern, responsive, and user-friendly web applications.
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
          </div>
        </div>
      </ScrollArea>
    </>
  );
}
