import { USER } from '@/lib/config/user';
import type { Activity } from '@/components/ui/contribution-graph';

type GitHubContributionsResponse = {
  contributions: Activity[];
};

export const CONTRIBUTIONS_START_YEAR = 2021;

export function getContributionYears() {
  const currentYear = new Date().getFullYear();

  return Array.from(
    { length: currentYear - CONTRIBUTIONS_START_YEAR + 1 },
    (_, index) => currentYear - index
  );
}

export async function getContributions(year: number) {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${USER.username}?y=${year}`,
      {
        next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
      }
    );

    if (!res.ok) {
      return [];
    }

    const data = (await res.json()) as GitHubContributionsResponse;
    return data.contributions ?? [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
