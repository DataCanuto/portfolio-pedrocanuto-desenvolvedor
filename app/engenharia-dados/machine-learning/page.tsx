'use client';

import React from 'react';
import ProjectOverview from '@/components/Projects/MachineLearning/ProjectOverview';
import FoldersAccordion from '@/components/Projects/MachineLearning/FoldersAccordion';
import ProjectHeader from '@/components/Projects/ProjectHeader';
import { Footer } from '@/components';
import { Code2, BookOpen, FolderTree, GraduationCap } from 'lucide-react';

const REPO_URL = 'https://github.com/DataCanuto/MachineLearning';

export default function MachineLearningPage() {
  const projectSections = [
    { id: 'overview', label: 'Visão Geral', icon: <BookOpen size={16} /> },
    { id: 'folders', label: 'Pastas do Repositório', icon: <FolderTree size={16} /> },
    { id: 'skills', label: 'Skills Desenvolvidas', icon: <GraduationCap size={16} /> },
  ];

  return (
    <main className="w-full bg-dark-bg">
      <ProjectHeader
        projectTitle="Machine Learning"
        sections={projectSections}
        areaSlug="engenharia-dados"
        backUrl="/engenharia-dados"
      />

      {/* Hero */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-20 pb-16 bg-dark-bg"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-accent-orange/10 border border-accent-orange/30 rounded-full text-accent-orange text-sm font-semibold mb-6">
              🧠 SENAI — IA NA INDÚSTRIA 4.0
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-dark-header-text mb-6">
            <span className="text-accent-orange">Machine</span> Learning
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Notebooks Jupyter em Python cobrindo ciência de dados, algoritmos de machine learning
            e uma introdução à visão computacional, produzidos ao longo do curso profissionalizante
            do SENAI Bahia.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-accent-orange text-black font-bold rounded-lg hover:shadow-lg hover:shadow-accent-orange/50 transition-all duration-300 flex items-center gap-2"
            >
              <Code2 size={20} />
              Ver no GitHub
            </a>
            <button
              onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-dark-bg-secondary border border-accent-orange/50 text-accent-orange font-bold rounded-lg hover:border-accent-orange transition-all duration-300"
            >
              Saiba Mais
            </button>
          </div>

          <div className="flex justify-center animate-bounce">
            <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Visão Geral */}
      <section id="overview">
        <ProjectOverview />
      </section>

      {/* Pastas do Repositório (Acordeão) */}
      <section id="folders">
        <FoldersAccordion />
      </section>

      {/* Skills Desenvolvidas */}
      <section id="skills" className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-12">
            📚 Skills <span className="text-accent-orange">Desenvolvidas</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Limpeza e Preparação de Dados', desc: 'Tratamento de nulos, tipos, datas e outliers com pandas' },
              { title: 'Análise Exploratória (EDA)', desc: 'Visualizações e estatística descritiva com matplotlib/seaborn' },
              { title: 'Engenharia de Atributos', desc: 'Encoding categórico e normalização/padronização' },
              { title: 'Aprendizado Supervisionado', desc: 'Regressão, KNN, árvores e random forest com scikit-learn' },
              { title: 'Aprendizado Não Supervisionado', desc: 'Clusterização K-Means e redução de dimensionalidade (PCA)' },
              { title: 'Avaliação de Modelos', desc: 'Métricas de classificação/regressão e seleção de atributos' },
              { title: 'Tuning de Hiperparâmetros', desc: 'Grid Search e Random Search' },
              { title: 'Gradient Boosting', desc: 'Classificação com XGBoost' },
              { title: 'Visão Computacional', desc: 'Detecção facial com OpenCV e Haar Cascade' },
              { title: 'Jupyter Notebook', desc: 'Ambiente de experimentação e documentação de análises' },
              { title: 'Versionamento com Git', desc: 'Controle de código-fonte' },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="bg-dark-bg border border-dark-border rounded-lg p-6 hover:border-accent-orange/50 transition-all duration-300 group"
              >
                <h3 className="text-lg font-bold text-accent-orange group-hover:text-accent-orange/80 transition-colors mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-400 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-dark-bg">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-accent-orange/10 to-accent-orange/5 border border-accent-orange/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-header-text mb-6">
            🤝 Precisa de <span className="text-accent-orange">Análise de Dados ou ML</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Se você tem dados brutos e quer transformá-los em modelos preditivos ou insights
            acionáveis, vamos conversar sobre como aplicar essas ferramentas ao seu problema.
          </p>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-accent-orange text-black font-bold rounded-lg hover:shadow-lg hover:shadow-accent-orange/50 transition-all duration-300"
          >
            Explorar Repositório Completo no GitHub
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
