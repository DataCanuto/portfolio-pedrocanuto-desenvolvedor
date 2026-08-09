'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Database, FileText, Zap, Code } from 'lucide-react';

export default function TechStack() {
  const technologies = [
    {
      category: 'Linguagem & Ambiente',
      icon: Code,
      items: [
        { name: 'Python 3.x', description: 'Linguagem principal', badge: '★★★★★' },
        { name: 'Jupyter Notebook', description: 'Ambiente de desenvolvimento', badge: 'IDE' },
      ],
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
    },
    {
      category: 'Processamento de PDFs',
      icon: FileText,
      items: [
        { name: 'PyMuPDF (fitz)', description: 'Renderização e extração de imagens', badge: 'Core' },
        { name: 'PyPDF2', description: 'Manipulação e mesclagem de PDFs', badge: 'Utilitário' },
        { name: 'Tesseract OCR', description: 'Reconhecimento óptico de caracteres', badge: 'Premium' },
        {
          name: 'Pillow (PIL)',
          description: 'Processamento de imagens',
          badge: 'Auxiliar',
        },
      ],
      color: 'from-purple-500/20 to-purple-600/20',
      borderColor: 'border-purple-500/30',
    },
    {
      category: 'Análise & Consolidação de Dados',
      icon: Database,
      items: [
        { name: 'Pandas', description: 'Manipulação e análise de dados', badge: '★★★★★' },
        { name: 'OpenPyXL', description: 'Geração de arquivos Excel', badge: 'Export' },
        { name: 'Regex (re)', description: 'Pattern matching e extração', badge: 'Core' },
      ],
      color: 'from-green-500/20 to-green-600/20',
      borderColor: 'border-green-500/30',
    },
    {
      category: 'Padrões & Boas Práticas',
      icon: Zap,
      items: [
        { name: 'ETL Pipeline', description: 'Extract, Transform, Load', badge: 'Pattern' },
        { name: 'Data Quality Management', description: 'Validação e qualidade', badge: 'Framework' },
        { name: 'Automation & Scripting', description: 'Processamento em batch', badge: 'Approach' },
      ],
      color: 'from-orange-500/20 to-orange-600/20',
      borderColor: 'border-orange-500/30',
    },
  ];

  const documentTypes = [
    {
      name: 'NF (Notas Fiscais)',
      abbreviation: 'NF',
      description: 'Documentos de emissão',
      fields: ['Nome do Cliente(PK)','Data de Emissão'],
      icon: '📄',
      color: 'from-blue-500/10 to-blue-600/10',
    },
    {
      name: 'Planilhas',
      abbreviation: 'PL',
      description: 'Documentos estruturados',
      fields: ['Nome do Cliente(PK)','Corretor', 'Status'],
      icon: '📊',
      color: 'from-purple-500/10 to-purple-600/10',
    },
    {
      name: 'Prestações',
      abbreviation: 'PR',
      description: 'Extrato de contas',
      fields: ['Nome do Cliente(PK)','Número do Processo'],
      icon: '📋',
      color: 'from-green-500/10 to-green-600/10',
    },
  ];

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
    <section className="py-16 px-4 md:px-8 bg-dark-bg">
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
            🛠️ Stack <span className="text-accent-orange">Tecnológico</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Ferramentas, bibliotecas e padrões utilizados no projeto
          </p>
        </motion.div>

        {/* Tecnologias */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-gradient-to-br ${tech.color} border ${tech.borderColor} rounded-xl p-6 hover:border-accent-orange/50 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-accent-orange" size={28} />
                  <h3 className="text-xl font-bold text-dark-header-text">{tech.category}</h3>
                </div>

                <div className="space-y-3">
                  {tech.items.map((item, idx) => (
                    <div key={idx} className="bg-dark-bg/50 rounded-lg p-3">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <p className="font-semibold text-dark-header-text">{item.name}</p>
                        <span className="text-xs px-2 py-1 bg-accent-orange/20 text-accent-orange rounded border border-accent-orange/30 whitespace-nowrap">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tipos de Documentos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-dark-header-text mb-8">
            📄 Tipos de <span className="text-accent-orange">Documentos</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {documentTypes.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${doc.color} border border-dark-border rounded-xl p-6 hover:border-accent-orange/50 transition-all duration-300`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-dark-header-text">{doc.name}</h4>
                  <span className="text-4xl">{doc.icon}</span>
                </div>

                <p className="text-gray-400 text-sm mb-4">{doc.description}</p>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-400 uppercase">Campos Extraídos:</p>
                  {doc.fields.map((field, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-accent-orange rounded-full"></span>
                      {field}
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-dark-border">
                  <span className="inline-block px-3 py-1 bg-accent-orange/20 text-accent-orange text-xs font-semibold rounded">
                    {doc.abbreviation}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
}
