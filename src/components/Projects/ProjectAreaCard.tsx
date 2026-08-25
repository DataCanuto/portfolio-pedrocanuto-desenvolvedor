'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  company: string;
  technologies: string[];
  slug: string;
  areaSlug: string;
  icon?: React.ReactNode;
  href?: string;
}

export default function ProjectAreaCard({
  title,
  description,
  company,
  technologies,
  slug,
  areaSlug,
  icon,
  href,
}: ProjectCardProps) {
  const projectUrl = href || `/${areaSlug}/${slug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-dark-bg-secondary border border-dark-border hover:border-accent-orange/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-accent-orange/20 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-4 flex-1">
          {icon && (
            <div className="text-3xl mt-1 group-hover:scale-110 transition-transform">
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-2xl font-bold text-accent-orange mb-1">{title}</h3>
            <p className="text-sm text-gray-400">{company}</p>
          </div>
        </div>
      </div>

      {/* Descrição */}
      <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>

      {/* Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 bg-accent-orange/10 text-accent-orange border border-accent-orange/30 rounded-full font-semibold"
          >
            {tech}
          </span>
        ))}
        {technologies.length > 4 && (
          <span className="text-xs px-3 py-1 bg-dark-border text-gray-400 rounded-full font-semibold">
            +{technologies.length - 4} mais
          </span>
        )}
      </div>

      {/* Link */}
      <Link
        href={projectUrl}
        className="inline-flex items-center gap-2 px-4 py-2 bg-accent-orange text-black font-bold rounded-lg hover:shadow-lg hover:shadow-accent-orange/50 transition-all duration-300 group/btn"
      >
        Mais Informações
        <ArrowRight
          size={18}
          className="group-hover/btn:translate-x-1 transition-transform"
        />
      </Link>
    </motion.div>
  );
}
