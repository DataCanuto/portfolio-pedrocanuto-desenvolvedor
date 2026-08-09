'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle, ChevronDown } from 'lucide-react';

interface Challenge {
  id: number;
  title: string;
  description: string;
  solution: string;
  impact: string;
  difficulty: 'low' | 'medium' | 'high';
}

const challenges: Challenge[] = [
  {
    id: 1,
    title: 'Do Zero ao Deploy: Primeira Aplicação Full Stack em Java',
    description:
      'Este foi o primeiro projeto aplicando de ponta a ponta os conceitos de Spring Boot vistos em sala de aula, unindo backend Java a uma interface web funcional para um caso de uso real.',
    solution:
      'Estruturação da aplicação em camadas (Controller, Service, Repository), seguindo as boas práticas de arquitetura MVC ensinadas no curso técnico do SENAI CIMATEC.',
    impact:
      'Consolidação prática dos fundamentos de Spring Boot, servindo de base para os próximos sistemas de cadastro do portfólio.',
    difficulty: 'high',
  },
  {
    id: 2,
    title: 'Conflito de Horários na Agenda',
    description:
      'Duas aulas não podem ocupar o mesmo horário. Era preciso impedir que um novo agendamento sobrepusesse um compromisso já existente na agenda do professor.',
    solution:
      'Implementação de uma regra de negócio na camada de serviço que valida a sobreposição de intervalos de horário antes de persistir uma nova aula, comparando data e hora de início/fim.',
    impact:
      'Eliminação de conflitos de agenda, garantindo que cada horário tenha no máximo uma aula vinculada.',
    difficulty: 'high',
  },
  {
    id: 3,
    title: 'Modelagem do Relacionamento Aluno–Aula',
    description:
      'Um aluno pode ter várias aulas ao longo do tempo, e cada aula pertence a um único aluno. Era preciso representar corretamente essa relação no banco de dados.',
    solution:
      'Uso das anotações @OneToMany e @ManyToOne do Spring Data JPA entre as entidades Aluno e Aula, com chave estrangeira e carregamento otimizado das relações.',
    impact:
      'Estrutura de dados normalizada, permitindo consultar rapidamente o histórico completo de aulas de cada aluno.',
    difficulty: 'medium',
  },
  {
    id: 4,
    title: 'Autenticação e Separação de Papéis (Admin x Público)',
    description:
      'A área administrativa — agenda e cadastro de alunos — precisa ficar protegida, enquanto a página pública de apresentação do serviço deve permanecer aberta a qualquer visitante.',
    solution:
      'Configuração do Spring Security restringindo as rotas administrativas a usuários autenticados, mantendo as rotas públicas de apresentação liberadas.',
    impact:
      'Separação clara entre a experiência do visitante/aluno e o painel de controle do administrador.',
    difficulty: 'high',
  },
  {
    id: 5,
    title: 'Validação de Dados de Cadastro',
    description:
      'Os formulários de cadastro de alunos e agendamento de aulas precisavam impedir dados inválidos: e-mails malformados, horários inconsistentes e campos obrigatórios em branco.',
    solution:
      'Aplicação de Bean Validation (@NotBlank, @Email, @Future) diretamente nas entidades e DTOs, com tratamento centralizado de exceções para retornar mensagens claras ao usuário.',
    impact:
      'Redução de erros de cadastro e maior confiabilidade dos dados armazenados no sistema.',
    difficulty: 'medium',
  },
  {
    id: 6,
    title: 'Persistência e Organização do Schema do Banco',
    description:
      'Era necessário manter a estrutura do banco relacional consistente entre o ambiente de desenvolvimento e as evoluções do código ao longo do curso.',
    solution:
      'Uso do Spring Data JPA com Hibernate para geração e controle do schema, junto de dados iniciais de teste para validar os fluxos de cadastro e agendamento.',
    impact:
      'Ambiente de desenvolvimento reproduzível, com o schema do banco sempre sincronizado ao modelo de entidades.',
    difficulty: 'medium',
  },
];

export default function ProjectChallenges() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'low':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'high':
        return 'bg-red-500/20 text-red-400 border-red-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    const labels = { low: 'Baixa', medium: 'Média', high: 'Alta' };
    return labels[difficulty as keyof typeof labels] || difficulty;
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
            🛠️ <span className="text-accent-orange">Desafios</span> & Soluções
          </h2>
          <p className="text-gray-400 text-lg">
            Principais obstáculos encontrados ao aplicar Spring Boot em um projeto real e as
            soluções implementadas
          </p>
        </motion.div>

        {/* Challenges List */}
        <div className="space-y-4">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-bg-secondary border border-dark-border rounded-xl overflow-hidden hover:border-accent-orange/50 transition-all duration-300"
            >
              {/* Header */}
              <button
                onClick={() => setExpandedId(expandedId === challenge.id ? null : challenge.id)}
                className="w-full p-6 flex items-start justify-between hover:bg-dark-bg/50 transition-colors"
              >
                <div className="flex items-start gap-4 text-left flex-1">
                  <div className="p-3 bg-accent-orange/10 rounded-lg flex-shrink-0 mt-1">
                    <AlertCircle className="text-accent-orange" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-dark-header-text mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{challenge.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold border ${getDifficultyColor(challenge.difficulty)}`}
                  >
                    {getDifficultyLabel(challenge.difficulty)}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedId === challenge.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-accent-orange" size={24} />
                  </motion.div>
                </div>
              </button>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedId === challenge.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-dark-border overflow-hidden"
                  >
                    <div className="p-6 space-y-6">
                      {/* Descrição Completa */}
                      <div>
                        <h4 className="text-lg font-bold text-dark-header-text mb-2 flex items-center gap-2">
                          <AlertCircle className="text-red-400" size={20} />
                          Problema
                        </h4>
                        <p className="text-gray-300 leading-relaxed">{challenge.description}</p>
                      </div>

                      {/* Solução */}
                      <div>
                        <h4 className="text-lg font-bold text-dark-header-text mb-2 flex items-center gap-2">
                          <CheckCircle className="text-green-400" size={20} />
                          Solução Implementada
                        </h4>
                        <p className="text-gray-300 leading-relaxed">{challenge.solution}</p>
                      </div>

                      {/* Impacto */}
                      <div className="bg-accent-orange/10 border border-accent-orange/30 rounded-lg p-4">
                        <h4 className="text-lg font-bold text-accent-orange mb-2">📊 Impacto</h4>
                        <p className="text-gray-300">{challenge.impact}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-dark-bg-secondary border border-dark-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent-orange mb-2">
              {challenges.filter((c) => c.difficulty === 'high').length}
            </div>
            <p className="text-gray-400">Desafios Complexos (Alta Dificuldade)</p>
          </div>
          <div className="bg-dark-bg-secondary border border-dark-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent-orange mb-2">
              {challenges.filter((c) => c.difficulty === 'medium').length}
            </div>
            <p className="text-gray-400">Desafios Moderados (Média Dificuldade)</p>
          </div>
          <div className="bg-dark-bg-secondary border border-dark-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent-orange mb-2">100%</div>
            <p className="text-gray-400">Taxa de Resolução</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
