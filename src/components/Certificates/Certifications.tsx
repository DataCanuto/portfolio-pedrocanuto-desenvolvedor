'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Certificate } from '@/types/certificate';
import { CertificateViewer } from './CertificateViewer';

const certificationsData: Certificate[] = [
  {
    id: 'globant-1',
    title: 'Globant - Java Spring Boot AI',
    issuer: 'Globant',
    date: new Date('2025-05-24'),
    image: '/assets/certificados_img/globant-java-spring-boot-ai/certificate.jpg',
    logo: '/assets/logo_certificados/globant-logo.png',
    category: 'certification',
  },
  {
    id: '1',
    title: 'Santander - Ciência de Dados com Python',
    issuer: 'Santander / Coursera',
    date: new Date('2025-01-15'),
    image: '/assets/certificados_img/santander ciencia de dados python/Santander 2025 - Ciência de Dados com Python.jpg',
    logo: '/assets/logo_certificados/santander-bootcamp-2025.png',
    category: 'certification',
  },
  {
    id: '2',
    title: 'Inteligência Artificial Industrial',
    issuer: 'Senai',
    date: new Date('2024-12-10'),
    image: {
      front: '/assets/certificados_img/inteligencia artificial industrial/Inteligência_Artificial_Industrial-Certificado_48670 (1)_pag1.jpg',
      back: '/assets/certificados_img/inteligencia artificial industrial/Inteligência_Artificial_Industrial-Certificado_48670 (1)_pag2.jpg',
    },
    logo: '/assets/logo_certificados/SENAI_logo_2024.png',
    category: 'certification',
  },
  {
    id: '3',
    title: 'Estrutura de Dados - Python',
    issuer: 'SENAC',
    date: new Date('2024-11-20'),
    image: {
      front: '/assets/certificados_img/estrutura de dados python/CERTIFICADO_PYTHON_SENAC_2024_pag1.jpg',
      back: '/assets/certificados_img/estrutura de dados python/CERTIFICADO_PYTHON_SENAC_2024_pag2.jpg',
    },
    logo: '/assets/logo_certificados/python-logo.png',
    category: 'certification',
  },
  {
    id: '4',
    title: 'Google Data Analytics',
    issuer: 'Google / Coursera',
    date: new Date('2024-10-15'),
    image: '/assets/certificados_img/google data analytics/COURSERA_GOOGLE_DATA_ANALYTICS_2024.jpg',
    logo: '/assets/logo_certificados/google-coursera.png',
    category: 'certification',
  },
  {
    id: '5',
    title: 'Google AI Essentials',
    issuer: 'Google / Coursera',
    date: new Date('2024-09-20'),
    image: '/assets/certificados_img/google ai essentials/Coursera_Google AI Essentials.jpg',
    logo: '/assets/logo_certificados/google-coursera.png',
    category: 'certification',
  },
  {
    id: 't1',
    title: 'Deep Learning - Getting Started',
    issuer: 'LinkedIn Learning',
    date: new Date('2024-12-05'),
    image: '/assets/certificados_img/linkedin learning/CertificadoDeConclusao_Deep Learning Getting Started.jpg',
    logo: '/assets/logo_certificados/linkedin-learning.png',
    category: 'certification',
  },
  {
    id: 't2',
    title: 'Carreira em IA Generativa por Microsoft e LinkedIn',
    issuer: 'LinkedIn Learning / Microsoft',
    date: new Date('2024-11-30'),
    image: '/assets/certificados_img/linkedin learning/CertificadoDeConclusao_Fundamentos para uma Carreira em IA Generativa por Microsoft e LinkedIn.jpg',
    logo: '/assets/logo_certificados/linkedin-microssoft.jpg',
    category: 'certification',
  },
  {
    id: 't3',
    title: 'Introdução às Competências Essenciais para Análise de Dados',
    issuer: 'LinkedIn Learning',
    date: new Date('2024-11-15'),
    image: '/assets/certificados_img/linkedin learning/CertificadoDeConclusao_Introducao as Competencias Essenciais para a Carreira de Analise de Dados.jpg',
    logo: '/assets/logo_certificados/linkedin-learning.png',
    category: 'certification',
  },
  {
    id: 't4',
    title: 'Learning Excel Data Analysis',
    issuer: 'LinkedIn Learning',
    date: new Date('2024-10-20'),
    image: '/assets/certificados_img/linkedin learning/CertificadoDeConclusao_Learning Excel Data Analysis.jpg',
    logo: '/assets/logo_certificados/excel-logo.png',
    category: 'certification',
  },
  {
    id: 't5',
    title: 'SQL Server - Formação Básica',
    issuer: 'LinkedIn Learning',
    date: new Date('2024-09-30'),
    image: '/assets/certificados_img/linkedin learning/CertificadoDeConclusao_SQL Server Formacao Basica.jpg',
    logo: '/assets/logo_certificados/sql-logo.png',
    category: 'certification',
  },
];

interface CertificateCardProps {
  certificate: Certificate;
  onPreview: (cert: Certificate) => void;
}

const CertificateCard = ({ certificate, onPreview }: CertificateCardProps) => {
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
        <div className="w-full h-48 bg-gradient-to-br from-dark-header-btn to-dark-bg flex items-center justify-center overflow-hidden relative">
          {certificate.logo ? (
            <Image
              src={certificate.logo}
              alt={certificate.issuer}
              fill
              className="object-contain p-4"
            />
          ) : (
            <div className="text-accent-orange text-2xl font-bold opacity-20 text-center px-4">
              {certificate.issuer.split(' ')[0]}
            </div>
          )}
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

export const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const sortedCertificates = [...certificationsData].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  return (
    <section id="certifications" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            Meus <span className="text-accent-orange">Certificados</span>
          </h2>
          <div className="w-16 h-1 bg-accent-orange mb-4"></div>
          <p className="text-gray-400 max-w-2xl">
            Certificações profissionais, cursos especializados e certificados de conclusão em tecnologia e análise de dados.
          </p>
        </motion.div>

        {sortedCertificates.length > 0 ? (
          <div className="overflow-x-auto pb-4 scroll-smooth">
            <div className="flex gap-6 min-w-min px-4 md:px-0">
              {sortedCertificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <CertificateCard
                    certificate={cert}
                    onPreview={setSelectedCertificate}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-400 py-12">
            Nenhum certificado disponível no momento.
          </p>
        )}
      </div>

      <CertificateViewer
        isOpen={!!selectedCertificate}
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
};
