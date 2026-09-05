'use client';

import { LoaderIcon } from 'lucide-react';
import { startTransition, use, useState } from 'react';

import type { Activity } from '@/components/ui/contribution-graph';
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from '@/components/ui/contribution-graph';
import { cn } from '@/lib/utils';

const EMPTY_CONTRIBUTIONS: Promise<Activity[]> = Promise.resolve([]);

export function GitHubContributionGraph({
  years,
  contributionsByYear,
}: {
  years: number[];
  contributionsByYear: Record<number, Promise<Activity[]>>;
}) {
  const [selectedYear, setSelectedYear] = useState(
    years[0] ?? new Date().getFullYear()
  );
  const data = use(
    contributionsByYear[selectedYear] ?? EMPTY_CONTRIBUTIONS
  );

  return (
    <div className="mx-auto flex w-max max-w-full flex-col gap-5 font-mono">
      <div className="flex flex-wrap gap-1">
        {years.map((year) => (
          <button
            key={year}
            type="button"
            aria-pressed={selectedYear === year}
            onClick={() => {
              startTransition(() => {
                setSelectedYear(year);
              });
            }}
            className={cn(
              'rounded-md px-2 py-1 text-xs font-medium transition-colors',
              selectedYear === year
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            )}
          >
            {year}
          </button>
        ))}
      </div>

      <ContributionGraph
        data={data}
        fontSize={11}
        blockSize={9}
        blockMargin={3}
        labels={{
          totalCount: '{{count}} on GitHub in {{year}}',
        }}
      >
        <ContributionGraphCalendar className="no-scrollbar">
          {({ activity, dayIndex, weekIndex }) => (
            <ContributionGraphBlock
              activity={activity}
              dayIndex={dayIndex}
              weekIndex={weekIndex}
            />
          )}
        </ContributionGraphCalendar>

        <ContributionGraphFooter>
          <ContributionGraphTotalCount className="text-foreground" />
          <ContributionGraphLegend />
        </ContributionGraphFooter>
      </ContributionGraph>

      
    </div>
  );
}

export function GitHubContributionFallback() {
  return (
    <div className="flex h-[162px] items-center justify-center">
      <LoaderIcon className="animate-spin text-foreground" />
    </div>
  );
}
