export type GitHubRepo = {
  name: string;
  description: string | null;
  topics: string[];
  html_url: string;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
};

export type ProjectCardData = {
  name: string;
  description: string;
  topics: string[];
  htmlUrl: string;
  updatedAt: string;
};

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const token = import.meta.env.PORTFOLIO_GITHUB_PAT;
  if (!token) {
    console.warn('[github.ts] PORTFOLIO_GITHUB_PAT not set, skipping GitHub fetch');
    return [];
  }
  try {
    const res = await fetch(
      'https://api.github.com/users/jubin-sanghvi/repos?per_page=100&sort=updated',
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
        },
      }
    );
    if (!res.ok) {
      console.warn(`[github.ts] GitHub API returned ${res.status}`);
      return [];
    }
    return res.json();
  } catch (err) {
    console.warn('[github.ts] Fetch failed:', err);
    return [];
  }
}

export function filterDisplayRepos(repos: GitHubRepo[]): GitHubRepo[] {
  return repos.filter((r) => !r.fork && !r.archived);
}

export function mapRepoToProjectCard(repo: GitHubRepo): ProjectCardData {
  return {
    name: repo.name,
    description: repo.description ?? 'No description provided.',
    topics: repo.topics ?? [],
    htmlUrl: repo.html_url,
    updatedAt: repo.updated_at,
  };
}
