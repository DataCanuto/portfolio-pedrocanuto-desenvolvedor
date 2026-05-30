'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Database, FileText, Settings, CheckCircle, AlertCircle } from 'lucide-react';

// Dados da arquitetura do sistema
const architectureComponents = [
  {
    id: 'input',
    name: 'Camada de Entrada',
    icon: FileText,
    description: 'PDFs (Nativas e Scans)',
    color: 'from-blue-500/20 to-blue-600/20',
    borderColor: 'border-blue-500/30',
    items: ['NF-e', 'Planilhas', 'Prestações', 'Documentos Escaneados'],
  },
  {
    id: 'processing',
    name: 'Camada de Processamento',
    icon: Settings,
    description: 'ETL & OCR Pipeline',
    color: 'from-orange-500/20 to-orange-600/20',
    borderColor: 'border-orange-500/30',
    items: ['PyMuPDF', 'Tesseract OCR', 'Pandas', 'Regex Engine'],
  },
  {
    id: 'output',
    name: 'Camada de Saída',
    icon: Database,
    description: 'Dados Consolidados',
    color: 'from-green-500/20 to-green-600/20',
    borderColor: 'border-green-500/30',
    items: ['Excel Reports', 'CSV Exports', 'Database', 'API Endpoints'],
  },
];

const dataFlowSteps = [
  {
    title: 'Descoberta de Arquivos',
    description: 'Sistema varre diretórios e identifica PDFs',
    status: 'active',
    metrics: '150 arquivos',
  },
  {
    title: 'Renderização de PDFs',
    description: 'Conversão de páginas para imagens',
    status: 'active',
    metrics: '2,450 páginas',
  },
  {
    title: 'OCR (Tesseract)',
    description: 'Reconhecimento de caracteres em imagens',
    status: 'active',
    metrics: '99.2% acurácia',
  },
  {
    title: 'Normalização de Dados',
    description: 'Limpeza e padronização de informações',
    status: 'completed',
    metrics: '95% match',
  },
  {
    title: 'Consolidação',
    description: 'Merge e deduplicação de registros',
    status: 'completed',
    metrics: '135 consolidados',
  },
  {
    title: 'Validação',
    description: 'Verificação de integridade dos dados',
    status: 'completed',
    metrics: '100% validado',
  },
];

interface ArchitectureVisualizationProps {
  title?: string;
  subtitle?: string;
}

export default function ArchitectureVisualization({
  title = 'Arquitetura do Sistema',
  subtitle = 'Visualização das camadas e fluxos de dados',
}: ArchitectureVisualizationProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            <span className="text-accent-orange">🏗️</span> {title}
          </h2>
          <p className="text-gray-400 text-lg">{subtitle}</p>
        </motion.div>

        {/* Arquitetura em 3 Camadas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Conectores visuais */}
            <div className="hidden md:block absolute top-32 left-1/3 right-1/3 h-1 bg-gradient-to-r from-accent-orange via-accent-orange to-accent-orange/20" />

            {architectureComponents.map((component, index) => {
              const Icon = component.icon;
              return (
                <motion.div
                  key={component.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${component.color} border ${component.borderColor} rounded-xl p-8 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-dark-bg rounded-lg">
                      <Icon className="text-accent-orange" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dark-header-text">
                        {component.name}
                      </h3>
                      <p className="text-sm text-gray-400">{component.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-dark-border/50">
                    {component.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-accent-orange" />
                        <span className="text-sm text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Data Flow Legend */}
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>
              <span className="inline-block w-3 h-1 bg-gradient-to-r from-accent-orange to-accent-orange/20 mr-2" />
              Fluxo de dados entre camadas
            </p>
          </div>
        </motion.div>

        {/* Fluxo de Processamento em Cascata */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-dark-header-text mb-8">
            <span className="text-accent-orange">📊</span> Fluxo de Processamento Detalhado
          </h3>

          <div className="space-y-3">
            {dataFlowSteps.map((step, index) => {
              const isActive = step.status === 'active';
              const isCompleted = step.status === 'completed';
              const StatusIcon = isCompleted ? CheckCircle : AlertCircle;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Conectores verticais */}
                  {index < dataFlowSteps.length - 1 && (
                    <div
                      className={`absolute left-6 top-16 w-1 h-8 ${
                        isActive
                          ? 'bg-accent-orange'
                          : 'bg-gradient-to-b from-accent-orange to-accent-orange/20'
                      }`}
                    />
                  )}

                  <div
                    className={`relative flex items-start gap-4 p-6 rounded-lg border transition-all duration-300 ${
                      isCompleted
                        ? 'bg-green-500/10 border-green-500/30 hover:border-green-500/50'
                        : isActive
                          ? 'bg-accent-orange/10 border-accent-orange/50 hover:border-accent-orange'
                          : 'bg-dark-bg border-dark-border hover:border-accent-orange/30'
                    }`}
                  >
                    {/* Status Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          isCompleted
                            ? 'bg-green-500/20'
                            : isActive
                              ? 'bg-accent-orange/20'
                              : 'bg-dark-border'
                        }`}
                      >
                        <StatusIcon
                          size={16}
                          className={
                            isCompleted
                              ? 'text-green-400'
                              : isActive
                                ? 'text-accent-orange'
                                : 'text-gray-500'
                          }
                        />
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold text-dark-header-text mb-1">
                        {step.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-2">{step.description}</p>
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-block px-3 py-1 rounded text-xs font-semibold ${
                            isCompleted
                              ? 'bg-green-500/20 text-green-400'
                              : isActive
                                ? 'bg-accent-orange/20 text-accent-orange'
                                : 'bg-gray-500/20 text-gray-400'
                          }`}
                        >
                          {step.metrics}
                        </span>
                        <span
                          className={`text-xs font-semibold uppercase tracking-wider ${
                            isCompleted
                              ? 'text-green-400'
                              : isActive
                                ? 'text-accent-orange'
                                : 'text-gray-500'
                          }`}
                        >
                          {isCompleted ? '✓ Concluído' : isActive ? '● Em Execução' : 'Aguardando'}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Architecture Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 bg-accent-orange/10 border border-accent-orange/30 rounded-xl p-6"
        >
          <h4 className="text-xl font-bold text-accent-orange mb-4">💡 Características da Arquitetura</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              '✓ Processamento escalável em batch',
              '✓ OCR integrado para PDFs escaneados',
              '✓ Normalização automática de dados',
              '✓ Deduplicação inteligente de registros',
              '✓ Validação em múltiplas etapas',
              '✓ Logging e rastreamento completo',
            ].map((feature, idx) => (
              <p key={idx} className="text-gray-300 text-sm">
                {feature}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
