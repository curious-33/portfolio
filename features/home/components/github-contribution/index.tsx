import { Suspense } from 'react';

import { getContributionYears, getContributions } from '@/features/home/data/graph';

import { GitHubContributionFallback, GitHubContributionGraph } from './graph';

export function GitHubContribution() {
  const years = getContributionYears();
  const contributionsByYear = Object.fromEntries(
    years.map((year) => [year, getContributions(year)])
  );

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h2 className="font-medium text-lg">GitHub</h2>
        <p className="text-sm text-muted-foreground">
          Public GitHub activity. Most client work lives on Bitbucket, so this
          is only a slice.
        </p>
      </div>

      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph
          years={years}
          contributionsByYear={contributionsByYear}
        />
      </Suspense>
    </div>
  );
}
