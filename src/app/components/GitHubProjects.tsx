import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Star, GitFork, ExternalLink, Loader2 } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

interface GitHubProjectsProps {
  username: string;
  maxRepos?: number;
}

const languageColors: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516',
  PHP: '#4F5D95',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  Shell: '#89e051',
  Vue: '#41b883',
  React: '#61dafb'
};

export function GitHubProjects({ username, maxRepos = 6 }: GitHubProjectsProps) {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const data: Repository[] = await response.json();
        const sortedRepos = data
          .filter(repo =>
            !repo.name.includes('config') &&
            !repo.name.includes('dotfiles') &&
            repo.name !== 'SHasHwatModi05'
          )
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, maxRepos);

        setRepos(sortedRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username, maxRepos]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Loader2 className="w-10 h-10 text-primary" />
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-destructive">Error loading repositories: {error}</p>
        <p className="text-muted-foreground mt-2">Please check the GitHub username</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo, index) => (
        <motion.div
          key={repo.id}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
          whileHover={{ y: -12, scale: 1.02 }}
          className="p-7 bg-card border-2 border-border rounded-xl hover:bg-primary/5 hover:border-primary hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 group flex flex-col"
        >
          <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{repo.name}</h3>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-[40px] leading-relaxed flex-grow">
            {repo.description || 'No description provided.'}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            {repo.language && (
              <motion.div
                className="flex items-center gap-1.5"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: languageColors[repo.language] || '#8b5cf6' }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <span>{repo.language}</span>
              </motion.div>
            )}
            {repo.stargazers_count > 0 && (
              <motion.div
                className="flex items-center gap-1"
                whileHover={{ scale: 1.1 }}
              >
                <Star className="w-4 h-4" />
                <span>{repo.stargazers_count}</span>
              </motion.div>
            )}
            {repo.forks_count > 0 && (
              <motion.div
                className="flex items-center gap-1"
                whileHover={{ scale: 1.1 }}
              >
                <GitFork className="w-4 h-4" />
                <span>{repo.forks_count}</span>
              </motion.div>
            )}
          </div>

          {/* Tech Stack Badges */}
          {repo.topics && repo.topics.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {repo.topics.slice(0, 4).map((topic, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs bg-primary/10 text-primary rounded-md font-medium border border-primary/20"
                >
                  {topic}
                </span>
              ))}
            </div>
          )}

          <motion.a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full px-5 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
          >
            <Github className="w-4 h-4" />
            View Code
          </motion.a>
        </motion.div>
      ))}
    </div>
  );
}
