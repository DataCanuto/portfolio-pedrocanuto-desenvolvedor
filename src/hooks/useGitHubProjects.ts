import useSWR from 'swr';
import { GitHubRepository } from '@/types/github';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useGitHubProjects(username: string = process.env.NEXT_PUBLIC_GITHUB_USERNAME || '') {
  const { data, error, isLoading } = useSWR<GitHubRepository[]>(
    username ? `https://api.github.com/users/${username}/repos?sort=updated&per_page=6&type=public` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1 minute
    }
  );

  return {
    projects: data || [],
    isLoading,
    error,
  };
}
