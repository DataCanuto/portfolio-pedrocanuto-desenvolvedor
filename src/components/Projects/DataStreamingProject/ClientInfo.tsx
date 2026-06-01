'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Users, Shield } from 'lucide-react';

interface ClientInfoProps {
  clientName?: string;
  clientFullName?: string;
  branch?: string;
  website?: string;
  contact?: string;
  description?: string;
}

export default function ClientInfo({
  clientName = 'ANDDIAP',
  clientFullName = 'Associação Nacional de Defesa do Direito dos Idosos, Aposentados e Pencionistas',
  branch = 'Filial Bahia',
  website = 'https://anddiap.org.br/',
  contact = 'Corretor Saul Freitas Figueiredo',
  description = 'Organização dedicada à defesa dos direitos e interesses de idosos, aposentados e pensionistas no Brasil.',
}: ClientInfoProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            🤝 Empresa <span className="text-accent-orange">Contratante</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Informações sobre a organização responsável pelo projeto
          </p>
        </motion.div>

        {/* Client Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-dark-bg border-2 border-accent-orange/30 rounded-2xl p-8 mb-12 hover:border-accent-orange/60 transition-all duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Logo/Icon Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <div className="p-6 bg-gradient-to-br from-accent-orange/20 to-accent-orange/10 rounded-xl border border-accent-orange/30 w-full max-w-xs aspect-square flex items-center justify-center">
                <div className="text-center">
                  <Shield className="text-accent-orange mx-auto mb-3" size={48} />
                  <p className="text-accent-orange font-bold text-center text-sm">
                    {clientName}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Client Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-2 space-y-6"
            >
              {/* Nome */}
              <motion.div variants={itemVariants}>
                <h3 className="text-3xl font-bold text-accent-orange mb-2">{clientName}</h3>
                <p className="text-gray-300 text-base leading-relaxed">{clientFullName}</p>
              </motion.div>

              {/* Descrição */}
              <motion.div variants={itemVariants}>
                <p className="text-gray-400 leading-relaxed text-base">{description}</p>
              </motion.div>

              {/* Informações de Contato */}
              <motion.div variants={containerVariants} className="space-y-3 pt-4">
                {/* Website */}
                <motion.a
                  variants={itemVariants}
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-accent-orange transition-colors"
                >
                  <Globe className="text-accent-orange flex-shrink-0" size={20} />
                  <span className="break-all hover:underline">{website}</span>
                </motion.a>

                {/* Branch */}
                <motion.div variants={itemVariants} className="flex items-center gap-3 text-gray-300">
                  <MapPin className="text-accent-orange flex-shrink-0" size={20} />
                  <span>{branch}</span>
                </motion.div>

                {/* Contact Person */}
                <motion.div variants={itemVariants} className="flex items-center gap-3 text-gray-300">
                  <Users className="text-accent-orange flex-shrink-0" size={20} />
                  <span>{contact}</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Project Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-dark-bg border border-dark-border rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-dark-header-text mb-6">
            📋 Contexto do <span className="text-accent-orange">Projeto</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Objetivo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <h4 className="text-lg font-bold text-accent-orange flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Objetivo do Projeto
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Automatizar a extração e consolidação de dados de documentos PDF financeiros para análise e relatórios administrativos da organização.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>✓ Processar múltiplas fontes de documentos</li>
                <li>✓ Extrair dados estruturados de PDFs</li>
                <li>✓ Consolidar informações de clientes</li>
                <li>✓ Gerar relatórios automatizados</li>
              </ul>
            </motion.div>

            {/* Impacto */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <h4 className="text-lg font-bold text-accent-orange flex items-center gap-2">
                <span className="text-2xl">📊</span>
                Impacto Esperado
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Redução significativa no tempo de processamento manual de documentos e melhoria na qualidade dos dados consolidados.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>✓ Automatização 100% do processo manual</li>
                <li>✓ Redução de 40+ horas/mês em trabalho administrativo</li>
                <li>✓ Precisão de dados garantida</li>
                <li>✓ Rastreabilidade completa de processamento</li>
              </ul>
            </motion.div>
          </div>

          {/* Números do Projeto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t border-dark-border grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-orange mb-1">3</div>
              <p className="text-gray-400 text-sm">Tipos de Documentos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-orange mb-1">100s</div>
              <p className="text-gray-400 text-sm">Arquivos Processáveis</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-orange mb-1">99%</div>
              <p className="text-gray-400 text-sm">Acurácia OCR</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-orange mb-1">2025</div>
              <p className="text-gray-400 text-sm">Ano de Desenvolvimento</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
