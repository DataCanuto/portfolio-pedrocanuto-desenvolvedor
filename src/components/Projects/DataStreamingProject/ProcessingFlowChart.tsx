'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import { ArrowRight } from 'lucide-react';

// Dados do pipeline de processamento
const pipelineStagesData = [
  {
    stage: 'Descoberta',
    duration: 2,
    filesProcessed: 150,
    description: 'Varredura e identificação de arquivos',
  },
  {
    stage: 'Extração',
    duration: 35,
    filesProcessed: 140,
    description: 'Extração de dados e OCR',
  },
  {
    stage: 'Normalização',
    duration: 18,
    filesProcessed: 140,
    description: 'Padronização e limpeza de dados',
  },
  {
    stage: 'Consolidação',
    duration: 12,
    filesProcessed: 140,
    description: 'Merge e deduplic ação de dados',
  },
  {
    stage: 'Validação',
    duration: 8,
    filesProcessed: 135,
    description: 'Verificação de qualidade',
  },
  {
    stage: 'Exportação',
    duration: 5,
    filesProcessed: 135,
    description: 'Geração de relatórios finais',
  },
];

const documentTypeFlowData = [
  { type: 'Notas Fiscais', input: 50, output: 48, percentage: 96 },
  { type: 'Planilhas', input: 60, output: 58, percentage: 97 },
  { type: 'Prestações', input: 40, output: 29, percentage: 73 },
];

const errorRateData = [
  { stage: 'Descoberta', errorRate: 0 },
  { stage: 'Extração', errorRate: 12 },
  { stage: 'Normalização', errorRate: 5 },
  { stage: 'Consolidação', errorRate: 2 },
  { stage: 'Validação', errorRate: 3 },
  { stage: 'Exportação', errorRate: 1 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-dark-bg border border-accent-orange/50 rounded-lg p-3 shadow-lg">
        <p className="text-gray-300 text-sm font-semibold">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }} className="text-xs">
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

interface ProcessingFlowChartProps {
  data?: typeof pipelineStagesData;
  title?: string;
  subtitle?: string;
}

export default function ProcessingFlowChart({
  data = pipelineStagesData,
  title = 'Fluxo de Processamento do Pipeline',
  subtitle = 'Etapas sequenciais de transformação de dados',
}: ProcessingFlowChartProps) {
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-dark-bg">
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
            <span className="text-accent-orange">🔄</span> {title}
          </h2>
          <p className="text-gray-400 text-lg">{subtitle}</p>
        </motion.div>

        {/* Pipeline Stages Visualization */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Flow Chart */}
          <motion.div
            variants={itemVariants}
            className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6 lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-dark-header-text mb-4">
              ⏱️ Duração de Processamento por Etapa
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="stage" stroke="#9ca3af" angle={-45} textAnchor="end" height={100} />
                <YAxis stroke="#9ca3af" label={{ value: 'Tempo (min)', angle: -90, position: 'insideLeft' }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ color: '#9ca3af' }} />
                <Bar
                  dataKey="duration"
                  fill="#f97316"
                  radius={[8, 8, 0, 0]}
                  name="Duração (minutos)"
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Document Type Flow */}
          <motion.div
            variants={itemVariants}
            className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6"
          >
            <h3 className="text-2xl font-bold text-dark-header-text mb-4">
              📄 Fluxo por Tipo de Documento
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={documentTypeFlowData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="type" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ color: '#9ca3af' }} />
                <Bar
                  dataKey="input"
                  fill="#3b82f6"
                  radius={[8, 8, 0, 0]}
                  name="Entrada"
                />
                <Bar
                  dataKey="output"
                  fill="#10b981"
                  radius={[8, 8, 0, 0]}
                  name="Saída"
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Error Rate Tracking */}
          <motion.div
            variants={itemVariants}
            className="bg-dark-bg-secondary border border-dark-border rounded-xl p-6"
          >
            <h3 className="text-2xl font-bold text-dark-header-text mb-4">
              ⚠️ Taxa de Erros por Etapa
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={errorRateData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="stage" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" label={{ value: 'Taxa %', angle: -90, position: 'insideLeft' }} />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="errorRate"
                  stroke="#ef4444"
                  strokeWidth={3}
                  dot={{ fill: '#ef4444', r: 5 }}
                  name="Taxa de Erro (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>

        {/* Pipeline Stage Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-dark-header-text mb-6">📍 Detalhes das Etapas</h3>

          <div className="space-y-4">
            {data.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Conector visual */}
                {index < data.length - 1 && (
                  <div className="absolute left-12 top-20 w-1 h-12 bg-gradient-to-b from-accent-orange to-accent-orange/20" />
                )}

                <div className="bg-dark-bg-secondary border border-dark-border rounded-lg p-6 hover:border-accent-orange/50 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent-orange/20 rounded-full flex items-center justify-center font-bold text-accent-orange group-hover:bg-accent-orange group-hover:text-black transition-all duration-300">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-dark-header-text">
                          {stage.stage}
                        </h4>
                        <div className="flex gap-4 text-sm">
                          <span className="px-3 py-1 bg-accent-orange/10 text-accent-orange rounded font-semibold">
                            ⏱️ {stage.duration}min
                          </span>
                          <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded font-semibold">
                            📄 {stage.filesProcessed} arquivos
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">{stage.description}</p>
                    </div>
                    {index < data.length - 1 && (
                      <ArrowRight className="flex-shrink-0 text-accent-orange/50 group-hover:text-accent-orange transition-colors mt-1" size={20} />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Tempo Total', value: `${data.reduce((acc, d) => acc + d.duration, 0)}min`, icon: '⏱️' },
            { label: 'Taxa de Sucesso', value: '99%', icon: '✅' },
            { label: 'Arquivos Processados', value: '135', icon: '📄' },
            { label: 'Taxa de Erro Média', value: '4.2%', icon: '⚠️' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-dark-bg-secondary border border-dark-border rounded-lg p-4 hover:border-accent-orange/50 transition-all"
            >
              <p className="text-3xl mb-2">{stat.icon}</p>
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-accent-orange">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
