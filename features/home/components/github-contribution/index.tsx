import { Suspense } from 'react';

import { getContributionYears, getContributions } from '@/features/home/data/graph';

import { GitHubContributionFallback, GitHubContributionGraph } from './graph';

export function GitHubContribution() {
  const years = getContributionYears();
  const contributionsByYear = Object.fromEntries(
    years.map((year) => [year, getContributions(year)])
  );

  return (
    <>
      <h2 className="sr-only">GitHub Contribution</h2>

      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph
          years={years}
          contributionsByYear={contributionsByYear}
        />
      </Suspense>
    </>
  );
}
