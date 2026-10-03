'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, FileText, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getTechnology, profile } from '@/data';

const technologies = profile.priorityTechnologies.map((id) => getTechnology(id).name);

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-b from-dark-bg to-dark-bg-secondary flex items-center justify-center pt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-accent-orange shadow-lg shadow-accent-orange/30 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Image src={profile.photo} alt={profile.name} fill className="object-cover" priority />
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-dark-header-text mb-4">
            {profile.name.split(' ')[0]}{' '}
            <span className="text-accent-orange">{profile.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          <p className="text-xl sm:text-2xl text-dark-header-text font-semibold mb-4">{profile.title}</p>

          <p className="max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed mb-8">
            {profile.careerObjective}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-10">
            <button
              onClick={() => scrollTo('projetos')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent-orange text-white font-semibold hover:bg-accent-orange-light transition-colors"
            >
              Ver projetos
              <ArrowRight size={18} />
            </button>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-accent-orange text-accent-orange font-semibold hover:bg-accent-orange/10 transition-colors"
            >
              <FileText size={18} />
              Currículo
            </Link>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-dark-border text-dark-header-text font-semibold hover:border-accent-orange hover:text-accent-orange transition-colors"
            >
              <MessageCircle size={18} />
              Contato
            </button>
          </div>

          <ul className="flex flex-wrap justify-center gap-2 max-w-xl" aria-label="Tecnologias principais">
            {technologies.map((name) => (
              <li
                key={name}
                className="px-3 py-1 rounded-full border border-dark-border bg-dark-bg-secondary text-gray-300 text-xs sm:text-sm"
              >
                {name}
              </li>
            ))}
          </ul>

          <motion.button
            className="flex flex-col items-center gap-1 mt-12 text-accent-orange"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollTo('projetos')}
            aria-label="Ir para os projetos"
          >
            <ChevronDown size={28} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
