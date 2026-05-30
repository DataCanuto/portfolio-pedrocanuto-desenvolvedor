'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap } from 'lucide-react';
import Link from 'next/link';

interface FeaturedProjectProps {
  title: string;
  description: string;
  technologies: string[];
  stats: Array<{ label: string; value: string }>;
  gitHubUrl: string;
  projectUrl: string;
  badge?: string;
}

export const FeaturedProject = ({
  title,
  description,
  technologies,
  stats,
  gitHubUrl,
  projectUrl,
  badge = 'PROJETO EM DESTAQUE',
}: FeaturedProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="relative overflow-hidden bg-gradient-to-r from-accent-orange/10 to-accent-orange/5 border-2 border-accent-orange/50 rounded-xl p-8 group hover:border-accent-orange transition-all duration-300 hover:shadow-lg hover:shadow-accent-orange/20"
      >
        {/* Badge */}
        <div className="absolute top-0 right-0">
          <span className="inline-block px-4 py-2 bg-accent-orange text-black text-xs font-bold rounded-bl-lg">
            ⭐ {badge}
          </span>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Title and Description */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-3xl font-bold text-accent-orange group-hover:text-accent-orange/90 transition-colors">
              {title}
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">{description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-4">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-dark-bg border border-accent-orange/30 text-accent-orange text-xs font-semibold rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-6">
              <a
                href={gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-dark-bg border border-accent-orange text-accent-orange font-bold rounded-lg hover:bg-accent-orange hover:text-black transition-all duration-300"
              >
                <Github size={20} />
                GitHub
              </a>
              <Link
                href={projectUrl}
                className="flex items-center gap-2 px-6 py-3 bg-accent-orange text-black font-bold rounded-lg hover:shadow-lg hover:shadow-accent-orange/50 transition-all duration-300"
              >
                <Zap size={20} />
                Ver Projeto Completo
              </Link>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="space-y-3">
            <p className="text-gray-400 text-xs uppercase font-bold tracking-wider">📊 Destaques</p>
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-dark-bg/50 rounded-lg p-3 border border-dark-border">
                <p className="text-gray-400 text-xs mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-accent-orange">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
