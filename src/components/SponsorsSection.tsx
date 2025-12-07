import { useState } from 'react';
import type { Sponsor, SponsorTier } from '../data/sponsors';

interface SponsorsSectionProps {
  sponsors: Sponsor[];
}

const tierConfig = {
  premium: {
    title: 'Premium Sponsors',
    description: 'Nos partenaires premium qui soutiennent activement le projet',
    logoSize: 'h-20',
    gridCols: 'grid-cols-2 md:grid-cols-3',
  },
  classic: {
    title: 'Classic Sponsors',
    description: 'Nos sponsors qui contribuent au développement de FerrisKey',
    logoSize: 'h-14',
    gridCols: 'grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
  },
  supporter: {
    title: 'Supporters',
    description: 'Nos supporters individuels',
    logoSize: 'h-10',
    gridCols: 'grid-cols-4 md:grid-cols-6 lg:grid-cols-8',
  },
};

function SponsorCard({ sponsor, size }: { sponsor: Sponsor; size: string }) {
  const [imageError, setImageError] = useState(false);

  return (
    <a
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center p-6 bg-deep-800/30 border border-deep-700/50 rounded-xl hover:border-ferris-500/50 hover:bg-deep-700/30 transition-all duration-300 hover:-translate-y-1"
      title={sponsor.name}
    >
      <div className={`${size} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
        {!imageError ? (
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="max-h-full max-w-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-center">
            <div className="text-3xl mb-2">🏢</div>
            <p className="text-xs font-medium text-gray-400 group-hover:text-ferris-400">
              {sponsor.name}
            </p>
          </div>
        )}
      </div>

      {/* Tooltip on hover */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-deep-900 border border-deep-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
        <p className="text-sm font-medium text-white">{sponsor.name}</p>
        {sponsor.description && (
          <p className="text-xs text-gray-400 mt-1">{sponsor.description}</p>
        )}
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-ferris-500/0 group-hover:bg-ferris-500/5 transition-colors duration-300" />
    </a>
  );
}

function SponsorTierSection({
  tier,
  sponsors,
}: {
  tier: SponsorTier;
  sponsors: Sponsor[];
}) {
  const config = tierConfig[tier];

  if (sponsors.length === 0) return null;

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {config.title}
        </h3>
        <p className="text-gray-400">{config.description}</p>
      </div>

      <div className={`grid ${config.gridCols} gap-6`}>
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor.id} sponsor={sponsor} size={config.logoSize} />
        ))}
      </div>
    </div>
  );
}

export default function SponsorsSection({ sponsors }: SponsorsSectionProps) {
  const premiumSponsors = sponsors.filter((s) => s.tier === 'premium');
  const classicSponsors = sponsors.filter((s) => s.tier === 'classic');
  const supporters = sponsors.filter((s) => s.tier === 'supporter');

  return (
    <section id="sponsors" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">f
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Nos</span>
            <span className="text-gradient"> Sponsors</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            FerrisKey est soutenu par des entreprises et des individus qui croient en
            l'importance d'un IAM open-source, performant et moderne.
          </p>
          <a
            href="https://github.com/sponsors/ferriskey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 btn-primary"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>Devenir Sponsor</span>
          </a>
        </div>

        {/* Sponsor Tiers */}
        <div className="max-w-7xl mx-auto">
          <SponsorTierSection tier="premium" sponsors={premiumSponsors} />
          <SponsorTierSection tier="classic" sponsors={classicSponsors} />
          <SponsorTierSection tier="supporter" sponsors={supporters} />
        </div>

        {/* Call to Action */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="card-base p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Soutenez FerrisKey
            </h3>
            <p className="text-gray-400 mb-6">
              Votre soutien nous aide à maintenir et développer FerrisKey. En tant que
              sponsor, vous contribuez directement à l'évolution de la solution et
              bénéficiez d'une visibilité auprès de notre communauté.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/sponsors/ferriskey"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                GitHub Sponsors
              </a>
              <a
                href="mailto:sponsors@ferriskey.io"
                className="btn-secondary w-full sm:w-auto"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">
              {sponsors.length}
            </div>
            <p className="text-sm text-gray-400">Sponsors actifs</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">
              {premiumSponsors.length}
            </div>
            <p className="text-sm text-gray-400">Premium Sponsors</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">100%</div>
            <p className="text-sm text-gray-400">Open Source</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">∞</div>
            <p className="text-sm text-gray-400">Gratitude</p>
          </div>
        </div>
      </div>
    </section>
  );
}
