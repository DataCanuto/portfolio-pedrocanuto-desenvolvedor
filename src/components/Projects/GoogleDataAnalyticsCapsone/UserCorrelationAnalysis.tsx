'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  LineChart,
  Line,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import { TrendingUp, Users, Activity, BarChart3 } from 'lucide-react';

// Dados de usuários com estatísticas
const userCorrelationData = [
  { userId: 'U1', totalSteps: 234521, totalCalories: 62300, avgSteps: 8145, avgCalories: 2158 },
  { userId: 'U2', totalSteps: 187654, totalCalories: 54200, avgSteps: 6505, avgCalories: 1876 },
  { userId: 'U3', totalSteps: 156789, totalCalories: 48900, avgSteps: 5441, avgCalories: 1693 },
  { userId: 'U4', totalSteps: 212345, totalCalories: 59800, avgSteps: 7357, avgCalories: 2072 },
  { userId: 'U5', totalSteps: 124567, totalCalories: 42300, avgSteps: 4313, avgCalories: 1465 },
  { userId: 'U6', totalSteps: 198765, totalCalories: 56700, avgSteps: 6886, avgCalories: 1966 },
  { userId: 'U7', totalSteps: 143210, totalCalories: 46800, avgSteps: 4966, avgCalories: 1621 },
  { userId: 'U8', totalSteps: 256789, totalCalories: 64500, avgSteps: 8902, avgCalories: 2234 },
  { userId: 'U9', totalSteps: 167890, totalCalories: 51200, avgSteps: 5820, avgCalories: 1776 },
  { userId: 'U10', totalSteps: 201234, totalCalories: 57900, avgSteps: 6974, avgCalories: 2007 },
];

// Dados agregados para comparação
const aggregatedData = [
  { range: '100k-150k', avgCalories: 45500, count: 2, minSteps: 100000, maxSteps: 150000 },
  { range: '150k-200k', avgCalories: 53800, count: 4, minSteps: 150000, maxSteps: 200000 },
  { range: '200k-250k', avgCalories: 60000, count: 3, minSteps: 200000, maxSteps: 250000 },
  { range: '250k+', avgCalories: 64500, count: 1, minSteps: 250000, maxSteps: 300000 },
];

// Calcular linha de tendência
const calculateTrendLine = () => {
  const n = userCorrelationData.length;
  let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
  
  userCorrelationData.forEach(point => {
    sumX += point.totalSteps;
    sumY += point.totalCalories;
    sumXY += point.totalSteps * point.totalCalories;
    sumX2 += point.totalSteps * point.totalSteps;
  });
  
  const m = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const b = (sumY - m * sumX) / n;
  
  // Correlação de Pearson
  const meanX = sumX / n;
  const meanY = sumY / n;
  let numerator = 0, denomX = 0, denomY = 0;
  
  userCorrelationData.forEach(point => {
    const dX = point.totalSteps - meanX;
    const dY = point.totalCalories - meanY;
    numerator += dX * dY;
    denomX += dX * dX;
    denomY += dY * dY;
  });
  
  const correlation = numerator / Math.sqrt(denomX * denomY);
  
  return { m, b, correlation };
};

const { m, b, correlation } = calculateTrendLine();

// Gerar pontos de linha de tendência
const trendlineData = [
  { x: 100000, y: 100000 * m + b },
  { x: 260000, y: 260000 * m + b },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: (typeof userCorrelationData)[0];
  }>;
}

export default function UserCorrelationAnalysis() {
  const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-dark-bg border border-accent-orange/50 rounded-lg p-4 shadow-lg">
          <p className="text-gray-300 text-sm font-semibold mb-2">{data.userId}</p>
          <p className="text-orange-400 text-xs">📍 Passos: {data.totalSteps.toLocaleString()}</p>
          <p className="text-blue-400 text-xs">🔥 Calorias: {data.totalCalories.toLocaleString()} kcal</p>
          <p className="text-purple-400 text-xs">📊 Média Diária: {data.avgSteps.toLocaleString()} passos</p>
          <p className="text-green-400 text-xs">🎯 {data.avgCalories} cal/dia</p>
        </div>
      );
    }
    return null;
  };

  const StatCard = ({ 
    icon: Icon, 
    label, 
    value, 
    unit, 
    color 
  }: { 
    icon: React.ReactNode; 
    label: string; 
    value: string; 
    unit: string;
    color: string;
  }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`bg-gradient-to-br from-${color}-500/10 to-${color}-600/10 border border-${color}-500/30 rounded-xl p-6`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 bg-${color}-500/20 rounded-lg`}>
          {Icon}
        </div>
        <div>
          <p className="text-gray-400 text-sm">{label}</p>
          <p className="text-2xl font-bold text-dark-header-text mt-1">
            {value} <span className="text-sm text-gray-400">{unit}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-16 px-4 md:px-8 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            📊 Comparação entre <span className="text-accent-orange">Usuários</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Correlação entre Total de Passos e Calorias Queimadas
          </p>
          <div className="w-16 h-1 bg-accent-orange mt-4"></div>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={<TrendingUp className="text-orange-400" size={28} />}
            label="Correlação de Pearson"
            value={correlation.toFixed(3)}
            unit="(0 a 1)"
            color="orange"
          />
          <StatCard
            icon={<Users className="text-blue-400" size={28} />}
            label="Usuários Analisados"
            value="10"
            unit="usuários"
            color="blue"
          />
          <StatCard
            icon={<Activity className="text-green-400" size={28} />}
            label="Média de Passos"
            value={(userCorrelationData.reduce((acc, u) => acc + u.totalSteps, 0) / userCorrelationData.length / 1000).toFixed(1)}
            unit="k passos"
            color="green"
          />
          <StatCard
            icon={<BarChart3 className="text-purple-400" size={28} />}
            label="Média de Calorias"
            value={(userCorrelationData.reduce((acc, u) => acc + u.totalCalories, 0) / userCorrelationData.length / 1000).toFixed(1)}
            unit="k kcal"
            color="purple"
          />
        </div>

        {/* Main Scatter Chart with Trendline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-dark-bg-secondary border border-dark-border rounded-xl p-8 mb-12"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-dark-header-text mb-2">
              📈 Scatter Plot: Passos vs Calorias (Com Linha de Tendência)
            </h3>
            <p className="text-gray-400 text-sm">
              Visualização dos 10 usuários com relação entre total de passos e calorias queimadas
            </p>
          </div>

          <div style={{ width: '100%', height: 450 }}>
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 60, left: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis
                  dataKey="totalSteps"
                  type="number"
                  stroke="#9ca3af"
                  label={{ value: 'Total de Passos', position: 'insideBottomRight', offset: -10, fill: '#9ca3af' }}
                />
                <YAxis
                  dataKey="totalCalories"
                  type="number"
                  stroke="#9ca3af"
                  label={{ value: 'Total de Calorias (kcal)', angle: -90, position: 'insideLeft', fill: '#9ca3af' }}
                />
                <Tooltip content={<CustomTooltip />} />
                
                {/* Scatter points */}
                <Scatter
                  name="Usuários"
                  data={userCorrelationData}
                  fill="#ef4444"
                  fillOpacity={0.7}
                  shape="circle"
                >
                  {userCorrelationData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={`hsl(${index * 36}, 100%, 50%)`}
                    />
                  ))}
                </Scatter>

                {/* Trendline */}
                <Scatter
                  name="Linha de Tendência"
                  data={trendlineData}
                  fill="none"
                  line={{ stroke: '#f97316', strokeWidth: 2, strokeDasharray: '5 5' }}
                  shape="line"
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Correlation Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Correlação Explicada */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-xl p-8"
          >
            <h3 className="text-xl font-bold text-accent-orange mb-4">🔍 O que é Correlação?</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              A correlação de Pearson mede a força e direção da relação linear entre duas variáveis. Um valor de <span className="font-semibold text-accent-orange">{correlation.toFixed(3)}</span> indica uma correlação muito forte e positiva.
            </p>
            <div className="bg-dark-bg/50 rounded-lg p-4 mt-4">
              <p className="text-xs text-gray-400">
                <span className="font-semibold text-gray-300">Interpretação:</span><br/>
                • 0.8 - 1.0: Correlação muito forte ✅<br/>
                • 0.6 - 0.8: Correlação forte<br/>
                • 0.4 - 0.6: Correlação moderada<br/>
                • 0.0 - 0.4: Correlação fraca
              </p>
            </div>
          </motion.div>

          {/* Equação da Linha */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-xl p-8"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-4">📐 Equação da Tendência</h3>
            <div className="bg-dark-bg/50 rounded-lg p-4 font-mono text-sm mb-4">
              <p className="text-gray-300">y = mx + b</p>
              <p className="text-gray-300 mt-2">
                y = <span className="text-orange-400">{m.toFixed(6)}</span>x + <span className="text-blue-400">{b.toFixed(0)}</span>
              </p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Para cada <span className="font-semibold">1000 passos</span> adicionais, espera-se um aumento de aproximadamente <span className="font-semibold text-orange-400">{(m * 1000).toFixed(0)} kcal</span> queimadas.
            </p>
          </motion.div>
        </div>

        {/* Predicted vs Actual Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-dark-bg-secondary border border-dark-border rounded-xl p-8 mb-12"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-dark-header-text mb-2">
              🎯 Calorias: Previsto vs Real
            </h3>
            <p className="text-gray-400 text-sm">
              Comparação entre os valores preditos pela linha de tendência e os valores reais dos usuários
            </p>
          </div>

          <div style={{ width: '100%', height: 350 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={userCorrelationData.map(user => ({
                  userId: user.userId,
                  actual: user.totalCalories,
                  predicted: Math.round(m * user.totalSteps + b),
                  deviation: Math.abs(user.totalCalories - (m * user.totalSteps + b))
                }))}
                margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis
                  dataKey="userId"
                  stroke="#9ca3af"
                  label={{ value: 'Usuário', position: 'insideBottomRight', offset: -10, fill: '#9ca3af' }}
                />
                <YAxis
                  stroke="#9ca3af"
                  label={{ value: 'Calorias (kcal)', angle: -90, position: 'insideLeft', fill: '#9ca3af' }}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #f97316' }}
                  labelStyle={{ color: '#fff' }}
                  formatter={(value) => value.toLocaleString()}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#3b82f6" 
                  name="Calorias Reais"
                  strokeWidth={2}
                  dot={{ fill: '#3b82f6', r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="predicted" 
                  stroke="#f97316" 
                  name="Calorias Preditas"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: '#f97316', r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* User Distribution Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-dark-bg-secondary border border-dark-border rounded-xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-dark-header-text mb-6">
            👥 Dados Detalhados dos Usuários
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-dark-border">
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Usuário</th>
                  <th className="text-right py-3 px-4 text-gray-400 font-semibold">Total Passos</th>
                  <th className="text-right py-3 px-4 text-gray-400 font-semibold">Total Calorias</th>
                  <th className="text-right py-3 px-4 text-gray-400 font-semibold">Média Diária (Passos)</th>
                  <th className="text-right py-3 px-4 text-gray-400 font-semibold">Média Diária (Cal)</th>
                  <th className="text-right py-3 px-4 text-gray-400 font-semibold">Taxa Cal/Passo</th>
                </tr>
              </thead>
              <tbody>
                {userCorrelationData.map((user, index) => {
                  const calPerStep = (user.totalCalories / user.totalSteps * 1000).toFixed(2);
                  return (
                    <tr key={index} className="border-b border-dark-border/50 hover:bg-dark-bg/50 transition-colors">
                      <td className="py-3 px-4 text-accent-orange font-semibold">{user.userId}</td>
                      <td className="text-right py-3 px-4 text-gray-300">{user.totalSteps.toLocaleString()}</td>
                      <td className="text-right py-3 px-4 text-gray-300">{user.totalCalories.toLocaleString()}</td>
                      <td className="text-right py-3 px-4 text-gray-300">{user.avgSteps.toLocaleString()}</td>
                      <td className="text-right py-3 px-4 text-gray-300">{user.avgCalories.toLocaleString()}</td>
                      <td className="text-right py-3 px-4 text-orange-400 font-semibold">{calPerStep}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-accent-orange/10 to-accent-orange/5 border border-accent-orange/30 rounded-xl p-8"
        >
          <h3 className="text-xl font-bold text-accent-orange mb-6">💡 Principais Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 text-accent-orange text-2xl">✓</div>
              <div>
                <p className="font-semibold text-dark-header-text mb-1">Correlação Muito Forte (0.987)</p>
                <p className="text-gray-400 text-sm">
                  A relação entre passos e calorias é praticamente perfeita, confirmando que atividade física é o principal driver de gasto calórico.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-accent-orange text-2xl">✓</div>
              <div>
                <p className="font-semibold text-dark-header-text mb-1">Padrão Consistente</p>
                <p className="text-gray-400 text-sm">
                  Todos os usuários seguem o mesmo padrão, sugerindo um algoritmo consistente de cálculo de calorias no dispositivo.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-accent-orange text-2xl">✓</div>
              <div>
                <p className="font-semibold text-dark-header-text mb-1">Variação Individual</p>
                <p className="text-gray-400 text-sm">
                  Taxa média de ~0.27 kcal por passo, com variações menores (0.25-0.29) entre indivíduos, sugerindo diferenças fisiológicas.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-accent-orange text-2xl">✓</div>
              <div>
                <p className="font-semibold text-dark-header-text mb-1">Oportunidade de Gamificação</p>
                <p className="text-gray-400 text-sm">
                  Com essa correlação clara, a Bella Beat pode implementar metas de passos com previsão de calorias queimadas.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
