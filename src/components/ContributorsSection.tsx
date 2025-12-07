import { useState, useEffect } from 'react';

interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

interface ContributorsSectionProps {
  repoOwner?: string;
  repoName?: string;
}

export default function ContributorsSection({
  repoOwner = 'ferrislabs',
  repoName = 'ferriskey',
}: ContributorsSectionProps) {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [displayCount, setDisplayCount] = useState(12);

  useEffect(() => {
    fetchContributors();
  }, [repoOwner, repoName]);

  const fetchContributors = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.github.com/repos/${repoOwner}/${repoName}/contributors?per_page=100`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch contributors');
      }

      const data = await response.json();
      setContributors(data);
    } catch (err) {
      console.error('Error fetching contributors:', err);
      setError('Impossible de charger les contributeurs');
      // Fallback to mock data for demonstration
      setContributors(generateMockContributors());
    } finally {
      setLoading(false);
    }
  };

  const generateMockContributors = (): Contributor[] => {
    return Array.from({ length: 24 }, (_, i) => ({
      id: i + 1,
      login: `contributor${i + 1}`,
      avatar_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
      html_url: `https://github.com/contributor${i + 1}`,
      contributions: Math.floor(Math.random() * 100) + 1,
    }));
  };

  const visibleContributors = contributors.slice(0, displayCount);
  const hasMore = contributors.length > displayCount;

  if (loading) {
    return (
      <section id="contributors" className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-white">Nos</span>
              <span className="text-gradient"> Contributeurs</span>
            </h2>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="w-16 h-16 rounded-full bg-deep-800/50 animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contributors" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Nos</span>
            <span className="text-gradient"> Contributeurs</span>
          </h2>
          <p className="text-xl text-gray-400">
            FerrisKey est rendu possible grâce à une communauté mondiale de contributeurs
            passionnés. Merci à tous ceux qui font avancer le projet ! 🙏
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <p className="text-yellow-400 text-center">{error}</p>
          </div>
        )}

        {/* Contributors Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-4">
            {visibleContributors.map((contributor, index) => (
              <a
                key={contributor.id}
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center animate-fade-in"
                style={{ animationDelay: `${index * 0.02}s` }}
                title={`${contributor.login} - ${contributor.contributions} contributions`}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-deep-700 group-hover:border-ferris-500 transition-all duration-300 group-hover:scale-110 shadow-lg">
                  <img
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Tooltip */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-deep-900 border border-deep-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10 shadow-xl">
                  <p className="text-sm font-medium text-white">{contributor.login}</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {contributor.contributions} contribution{contributor.contributions > 1 ? 's' : ''}
                  </p>
                  {/* Arrow */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-deep-900 border-b border-r border-deep-700 rotate-45" />
                </div>

                {/* Contribution badge */}
                {contributor.contributions > 50 && (
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-ferris-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-lg border-2 border-deep-900">
                    ⭐
                  </div>
                )}

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-ferris-500/0 group-hover:bg-ferris-500/20 transition-colors duration-300 blur-sm" />
              </a>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={() => setDisplayCount((prev) => prev + 12)}
                className="btn-secondary"
              >
                Afficher plus de contributeurs
              </button>
            </div>
          )}

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-base p-6 text-center">
              <div className="text-4xl font-bold text-gradient mb-2">
                {contributors.length}
              </div>
              <p className="text-sm text-gray-400">Contributeurs</p>
            </div>
            <div className="card-base p-6 text-center">
              <div className="text-4xl font-bold text-gradient mb-2">
                {contributors.reduce((sum, c) => sum + c.contributions, 0).toLocaleString()}
              </div>
              <p className="text-sm text-gray-400">Contributions totales</p>
            </div>
            <div className="card-base p-6 text-center">
              <div className="text-4xl font-bold text-gradient mb-2">
                {contributors.filter((c) => c.contributions > 10).length}
              </div>
              <p className="text-sm text-gray-400">Contributeurs actifs</p>
            </div>
          </div>
        </div>

        {/* Become a Contributor CTA */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="card-base p-8 text-center">
            <div className="text-5xl mb-4">💻</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Devenez contributeur
            </h3>
            <p className="text-gray-400 mb-6">
              Que vous soyez développeur Rust expérimenté ou débutant, il y a toujours
              des façons de contribuer à FerrisKey. Code, documentation, traductions,
              tests... toutes les contributions sont les bienvenues !
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://github.com/${repoOwner}/${repoName}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                <span className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Voir le dépôt</span>
                </span>
              </a>
              <a
                href={`https://github.com/${repoOwner}/${repoName}/blob/main/CONTRIBUTING.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto"
              >
                Guide de contribution
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
