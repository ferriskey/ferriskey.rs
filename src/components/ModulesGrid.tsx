import { useState } from 'react';
import type { Module } from '../data/modules';

interface ModulesGridProps {
  modules: Module[];
}

const statusColors = {
  stable: 'bg-green-500/10 text-green-400 border-green-500/30',
  beta: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  alpha: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
};

const statusLabels = {
  stable: 'Stable',
  beta: 'Beta',
  alpha: 'Alpha',
};

export default function ModulesGrid({ modules }: ModulesGridProps) {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'stable' | 'beta' | 'alpha'>('all');

  const filteredModules = modules.filter((module) => {
    if (filter === 'all') return true;
    return module.status === filter;
  });

  return (
    <div className="w-full">
      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        <button
          onClick={() => setFilter('all')}
          className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${filter === 'all'
              ? 'bg-gradient-ferris text-white shadow-glow-ferris'
              : 'bg-deep-700/50 text-gray-300 hover:bg-deep-600/50 border border-deep-600'
            }`}
        >
          Tous les modules
        </button>
        <button
          onClick={() => setFilter('stable')}
          className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${filter === 'stable'
              ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
              : 'bg-deep-700/50 text-gray-300 hover:bg-deep-600/50 border border-deep-600'
            }`}
        >
          Stable
        </button>
        <button
          onClick={() => setFilter('beta')}
          className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${filter === 'beta'
              ? 'bg-yellow-500 text-white shadow-lg shadow-yellow-500/30'
              : 'bg-deep-700/50 text-gray-300 hover:bg-deep-600/50 border border-deep-600'
            }`}
        >
          Beta
        </button>
        <button
          onClick={() => setFilter('alpha')}
          className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${filter === 'alpha'
              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
              : 'bg-deep-700/50 text-gray-300 hover:bg-deep-600/50 border border-deep-600'
            }`}
        >
          Alpha
        </button>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.map((module, index) => (
          <div
            key={module.id}
            className={`group relative bg-deep-800/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 cursor-pointer ${selectedModule === module.id
                ? 'border-ferris-500 shadow-glow-ferris scale-105'
                : 'border-deep-700/50 hover:border-ferris-500/50 hover:-translate-y-1'
              }`}
            onClick={() =>
              setSelectedModule(selectedModule === module.id ? null : module.id)
            }
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full border ${statusColors[module.status]
                  }`}
              >
                {statusLabels[module.status]}
              </span>
            </div>

            {/* Module Icon with Gradient */}
            <div
              className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${module.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
            >
              <span className="text-4xl">{module.icon}</span>
            </div>

            {/* Module Name */}
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-ferris-400 transition-colors">
              {module.name}
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-4 text-sm">
              {module.description}
            </p>

            {/* Features List - Visible on expand */}
            <div
              className={`overflow-hidden transition-all duration-300 ${selectedModule === module.id
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0'
                }`}
            >
              <div className="pt-4 border-t border-deep-700/50">
                <h4 className="text-sm font-semibold text-ferris-400 mb-3">
                  Fonctionnalités clés :
                </h4>
                <ul className="space-y-2">
                  {module.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-gray-400"
                    >
                      <svg
                        className="w-4 h-4 mr-2 mt-0.5 text-ferris-400 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="mt-4">
              <button
                className={`w-full px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${selectedModule === module.id
                    ? 'bg-gradient-ferris text-white shadow-glow-ferris'
                    : 'bg-deep-700/50 text-gray-300 hover:bg-deep-600/50 border border-deep-600'
                  }`}
              >
                {selectedModule === module.id ? 'Réduire' : 'En savoir plus'}
              </button>
            </div>

            {/* Hover Glow Effect */}
            <div
              className={`absolute inset-0 rounded-xl bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
            />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredModules.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">
            Aucun module trouvé avec ce filtre.
          </p>
        </div>
      )}

      {/* Module Count */}
      <div className="text-center mt-12">
        <p className="text-gray-500">
          {filteredModules.length} module{filteredModules.length > 1 ? 's' : ''}{' '}
          {filter !== 'all' && `en ${statusLabels[filter]}`}
        </p>
      </div>
    </div>
  );
}
