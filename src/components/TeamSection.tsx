import type { TeamMember } from '../data/team';

interface TeamSectionProps {
  team: TeamMember[];
}

function SocialLink({
  platform,
  url,
  icon,
}: {
  platform: string;
  url: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center rounded-lg bg-deep-700/50 border border-gray-800 hover:border-ferris-500 hover:bg-deep-600/50 transition-all duration-300 hover:scale-110"
      aria-label={platform}
    >
      {icon}
    </a>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group relative bg-deep-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-ferris-500/50 hover:-translate-y-2 transition-all duration-300">
      {/* Avatar */}
      <div className="relative mb-5">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-800 transition-all duration-300 shadow-lg">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

      </div>

      {/* Member Info */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-ferris-400 transition-colors">
          {member.name}
        </h3>
        <p className="text-sm font-medium text-ferris-400 mb-2">{member.role}</p>
        {member.location && (
          <p className="text-xs text-gray-500 flex items-center justify-center">
            <svg
              className="w-3 h-3 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {member.location}
          </p>
        )}
      </div>

      {/* Bio */}
      <p className="text-sm text-gray-400 text-center mb-5 leading-relaxed min-h-[60px]">
        {member.bio}
      </p>

      {/* Social Links */}
      <div className="flex items-center justify-center space-x-2 pt-4 border-t border-gray-800">
        {member.github && (
          <SocialLink
            platform="GitHub"
            url={`https://github.com/${member.github}`}
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />
        )}
        {member.linkedin && (
          <SocialLink
            platform="LinkedIn"
            url={`https://linkedin.com/in/${member.linkedin}`}
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            }
          />
        )}
        {member.twitter && (
          <SocialLink
            platform="Twitter"
            url={`https://twitter.com/${member.twitter}`}
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            }
          />
        )}
        {member.website && (
          <SocialLink
            platform="Website"
            url={member.website}
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            }
          />
        )}
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-ferris opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}

export default function TeamSection({ team }: TeamSectionProps) {
  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Our</span>
            <span className="text-gradient"> Core Team</span>
          </h2>
          <p className="text-xl text-gray-400">
            A passionate team of developers, architects, and security experts,
            dedicated to making FerrisKey the best open-source IAM solution.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <div
              key={member.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="card-base p-8 text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Join the team
            </h3>
            <p className="text-gray-400 mb-6">
              Are you passionate about Rust, security, and distributed systems?
              We are always looking for talented individuals to contribute to FerrisKey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/ferriskey/ferriskey/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                Guide of contribution
              </a>
              <a
                href="mailto:pro.nathaelbonnal@gmail.com"
                className="btn-secondary w-full sm:w-auto"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
