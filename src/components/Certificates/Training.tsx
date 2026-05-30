'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Certificate } from '@/types/certificate';
import { CertificateViewer } from './CertificateViewer';

const trainingData: Certificate[] = [
  {
    id: 't1',
    title: 'Deep Learning - Getting Started',
    issuer: 'LinkedIn Learning',
    date: new Date('2024-12-05'),
    image: '/assets/certificados_img/linkedin learning/CertificadoDeConclusao_Deep Learning Getting Started.jpg',
    category: 'training',
  },
  {
    id: 't2',
    title: 'Carreira em IA Generativa por Microsoft e LinkedIn',
    issuer: 'LinkedIn Learning / Microsoft',
    date: new Date('2024-11-30'),
    image: '/assets/certificados_img/linkedin learning/CertificadoDeConclusao_Fundamentos para uma Carreira em IA Generativa por Microsoft e LinkedIn.jpg',
    category: 'training',
  },
  {
    id: 't3',
    title: 'Introdução às Competências Essenciais para Análise de Dados',
    issuer: 'LinkedIn Learning',
    date: new Date('2024-11-15'),
    image: '/assets/certificados_img/linkedin learning/CertificadoDeConclusao_Introducao as Competencias Essenciais para a Carreira de Analise de Dados.jpg',
    category: 'training',
  },
  {
    id: 't4',
    title: 'Learning Excel Data Analysis',
    issuer: 'LinkedIn Learning',
    date: new Date('2024-10-20'),
    image: '/assets/certificados_img/linkedin learning/CertificadoDeConclusao_Learning Excel Data Analysis.jpg',
    category: 'training',
  },
  {
    id: 't5',
    title: 'SQL Server - Formação Básica',
    issuer: 'LinkedIn Learning',
    date: new Date('2024-09-30'),
    image: '/assets/certificados_img/linkedin learning/CertificadoDeConclusao_SQL Server Formacao Basica.jpg',
    category: 'training',
  },
];

interface CertificateCardProps {
  certificate: Certificate;
  onPreview: (cert: Certificate) => void;
}

const TrainingCard = ({ certificate, onPreview }: CertificateCardProps) => {
  return (
    <motion.button
      onClick={() => onPreview(certificate)}
      className="group flex-shrink-0 w-64 h-80"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-dark-bg-secondary border border-dark-border rounded-lg overflow-hidden transition-all duration-300 group-hover:border-accent-orange group-hover:shadow-lg group-hover:shadow-accent-orange/20 h-full flex flex-col cursor-pointer">
        {/* Certificate Preview */}
        <div className="w-full h-48 bg-gradient-to-br from-dark-header-btn to-dark-bg flex items-center justify-center overflow-hidden">
          <div className="text-accent-orange text-2xl font-bold opacity-20 text-center px-4">
            {certificate.issuer.split(' ')[0]}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-base font-bold text-dark-header-text group-hover:text-accent-orange transition-colors mb-2 line-clamp-3">
            {certificate.title}
          </h3>
          <p className="text-gray-400 text-sm mb-auto">{certificate.issuer}</p>
          <div className="mt-4 pt-4 border-t border-dark-border">
            <p className="text-xs text-gray-500">
              {certificate.date.toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'short',
              })}
            </p>
          </div>
        </div>
      </div>
    </motion.button>
  );
};

export const Training = () => {
  const [selectedTraining, setSelectedTraining] = useState<Certificate | null>(null);

  const sortedTraining = [...trainingData].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  return (
    <section id="training" className="py-20 bg-dark-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Cursos e treinamentos complementares em tecnologia e desenvolvimento.
          </p>
        </motion.div>

        {sortedTraining.length > 0 ? (
          <div className="overflow-x-auto pb-4 scroll-smooth">
            <div className="flex gap-6 min-w-min px-4 md:px-0">
              {sortedTraining.map((training, index) => (
                <motion.div
                  key={training.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <TrainingCard
                    certificate={training}
                    onPreview={setSelectedTraining}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-400 py-12">
            Nenhuma formação disponível no momento.
          </p>
        )}
      </div>

      <CertificateViewer
        isOpen={!!selectedTraining}
        certificate={selectedTraining}
        onClose={() => setSelectedTraining(null)}
      />
    </section>
  );
};
