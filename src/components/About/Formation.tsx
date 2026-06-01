'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/UI/Badge';

interface Education {
  year: string;
  title: string;
  institution: string;
  description: string;
  logo: string;
}

const education: Education[] = [
  {
    year: '2026-2030',
    title: 'Engenharia de Software',
    institution: 'Estácio',
    description: 'Curso de ensino superior',
    logo: '/assets/logo_formacoes/logo-estacio.png',
  },
  {
    year: '2025-2027',
    title: 'Desenvolvimento de Sistemas',
    institution: 'SENAI CIMATEC',
    description: 'Curso técnico em desenvolvimento de sistemas',
    logo: '/assets/logo_formacoes/logo-senai.png',
  },
  {
    year: '2022',
    title: 'Especialização em Musicoterapia',
    institution: 'ALPHA Faculdade',
    description: 'Pós-Graduação em Musicoterapia',
    logo: '/assets/logo_formacoes/logo-alpha.png',
  },
  {
    year: '2019',
    title: 'Bacharelado Interdisciplinar em Artes',
    institution: 'Universidade Federal da Bahia',
    description: 'Formação em artes com ênfase em música popular',
    logo: '/assets/logo_formacoes/logo-ufba.png',
  },
];

export const Formation = () => {
  return (
    <section id="formation" className="py-20 bg-dark-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            Minha <span className="text-accent-orange">Formação</span>
          </h2>
          <div className="w-16 h-1 bg-accent-orange mb-4"></div>
          <p className="text-gray-400 max-w-2xl">
            Trajetória educacional em ensino técnico, superior e pós-graduação.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex gap-6 pb-6 border-b border-dark-border last:border-b-0"
            >
              {/* Logo */}
              <div className="w-20 h-20 flex-shrink-0 bg-dark-bg rounded-lg p-2 border border-dark-border flex items-center justify-center">
                <img
                  src={edu.logo}
                  alt={edu.institution}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="primary">{edu.year}</Badge>
                    </div>
                    <h3 className="text-xl font-bold text-accent-orange">
                      {edu.title}
                    </h3>
                    <p className="text-dark-header-text font-semibold">{edu.institution}</p>
                    <p className="text-gray-400 mt-1">{edu.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
