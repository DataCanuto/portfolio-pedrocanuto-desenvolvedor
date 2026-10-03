'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, GitBranch, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import MermaidDiagram from '@/components/UI/MermaidDiagram';

const CLASS_DIAGRAM = `
classDiagram
  class DocumentExtractor {
    <<interface>>
    +extract(file) ExtractedDocument
  }
  class NotaFiscalExtractor {
    +extract(file) ExtractedDocument
  }
  class PlanilhaComissaoExtractor {
    +extract(file) ExtractedDocument
  }
  class PrestacaoContasExtractor {
    +extract(file) ExtractedDocument
  }
  class ExtractorFactory {
    +getExtractor(tipo) DocumentExtractor
  }
  class Cliente {
    +id
    +nome_normalizado
    +documentos
  }
  class Documento {
    +id
    +tipo
    +hash_sha256
    +status
    +cliente_id
  }
  class LoteImportacao {
    +id
    +arquivos
    +compararComBanco()
    +importarSelecionado()
  }
  class CorrecaoHistorico {
    +campo
    +valor_antigo
    +valor_novo
    +usuario
  }

  DocumentExtractor <|.. NotaFiscalExtractor
  DocumentExtractor <|.. PlanilhaComissaoExtractor
  DocumentExtractor <|.. PrestacaoContasExtractor
  ExtractorFactory ..> DocumentExtractor : cria
  LoteImportacao --> ExtractorFactory : usa
  LoteImportacao --> Documento : gera
  Documento --> Cliente : pertence a
  Documento --> CorrecaoHistorico : registra
`;

const FLOW_DIAGRAM = `
flowchart TD
  A[Upload do lote de PDFs] --> B[API responde 202 Accepted]
  B --> C[Processamento em segundo plano]
  C --> D{Tipo de documento}
  D -->|Nota fiscal escaneada| E[OCR com Tesseract]
  D -->|Planilha / tabela| F[Extração com PyMuPDF]
  D -->|Texto nativo| G[Extração com PyPDF2]
  E --> H[Normalização do nome do cliente]
  F --> H
  G --> H
  H --> I[Comparação do lote com o banco]
  I --> J{Classificação}
  J -->|Novo| K[Pronto para importar]
  J -->|Igual| L[Ignorado]
  J -->|Alterado / Conflito| M[Revisão manual]
  K --> N[(PostgreSQL)]
  M -->|Usuário decide| N
  N --> O[Painel de clientes e pendências]
`;

const ARCHITECTURE_DIAGRAM = `
flowchart LR
  subgraph Frontend [React + Vite]
    UI1[Painel de pendências]
    UI2[Revisão de lote]
    UI3[Ficha do cliente]
    UI4[Exportação]
  end

  subgraph Backend [FastAPI]
    R[Rotas REST]
    S[Serviços]
    RP[Repositórios]
    DM[Domínio]
  end

  subgraph Dados [Persistência]
    DB[(PostgreSQL)]
    AL[Alembic migrations]
  end

  Frontend <--> |REST / JSON| R
  R --> S
  S --> DM
  S --> RP
  RP --> DB
  AL -.-> DB
`;

const diagrams = [
  {
    id: 'classes' as const,
    name: 'Diagrama de Classes',
    icon: Code2,
    description: 'Extractors por Strategy Pattern, cliente, documento e histórico de correções',
    chart: CLASS_DIAGRAM,
  },
  {
    id: 'flow' as const,
    name: 'Fluxo de Processamento',
    icon: GitBranch,
    description: 'Upload, OCR, normalização, comparação com o banco e importação seletiva',
    chart: FLOW_DIAGRAM,
  },
  {
    id: 'arquitetura' as const,
    name: 'Arquitetura em Camadas',
    icon: Layers,
    description: 'Frontend React, API FastAPI em camadas e persistência em PostgreSQL',
    chart: ARCHITECTURE_DIAGRAM,
  },
];

type DiagramId = (typeof diagrams)[number]['id'];

export default function ProjectDiagrams() {
  const [activeDiagram, setActiveDiagram] = useState<DiagramId>('arquitetura');

  const currentDiagram = diagrams.find((d) => d.id === activeDiagram)!;
  const getCurrentIndex = () => diagrams.findIndex((d) => d.id === activeDiagram);

  const handleNext = () => {
    const nextIndex = (getCurrentIndex() + 1) % diagrams.length;
    setActiveDiagram(diagrams[nextIndex].id);
    scrollToTop();
  };

  const handlePrev = () => {
    const prevIndex = (getCurrentIndex() - 1 + diagrams.length) % diagrams.length;
    setActiveDiagram(diagrams[prevIndex].id);
    scrollToTop();
  };

  const scrollToTop = () => {
    document.querySelector('#diagrams')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="diagrams" className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            Diagramas do <span className="text-accent-orange">sistema em produção</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Estrutura e fluxo da aplicação full stack usada hoje pelo cliente, com FastAPI,
            PostgreSQL e React
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {diagrams.map((diagram) => {
            const Icon = diagram.icon;
            const isActive = activeDiagram === diagram.id;
            return (
              <button
                key={diagram.id}
                onClick={() => setActiveDiagram(diagram.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-accent-orange text-black shadow-lg shadow-accent-orange/50'
                    : 'bg-dark-bg border border-dark-border text-gray-300 hover:border-accent-orange/50'
                }`}
              >
                <Icon size={20} />
                {diagram.name}
              </button>
            );
          })}
        </motion.div>

        <motion.div
          key={activeDiagram}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-dark-bg border border-dark-border rounded-xl p-5 md:p-8 overflow-x-auto"
        >
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-accent-orange mb-2">{currentDiagram.name}</h3>
            <p className="text-gray-400">{currentDiagram.description}</p>
          </div>

          <div className="bg-dark-bg rounded-lg p-4 overflow-x-auto">
            <MermaidDiagram
              chart={currentDiagram.chart}
              className="flex justify-center min-w-[640px]"
            />
          </div>

          <div className="flex justify-between items-center gap-3 mt-8 pt-8 border-t border-dark-border">
            <button
              onClick={handlePrev}
              aria-label="Anterior"
              className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-dark-bg-secondary border border-accent-orange text-accent-orange rounded-lg font-semibold hover:bg-accent-orange hover:text-black transition-all duration-300 group"
            >
              <ChevronLeft size={20} className="group-hover:translate-x-1 transition-transform" />
              <span className="hidden sm:inline">Anterior</span>
            </button>

            <div className="flex gap-2">
              {diagrams.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === getCurrentIndex() ? 'w-8 bg-accent-orange' : 'w-2 bg-dark-border'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Próximo"
              className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-accent-orange text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-orange/50 transition-all duration-300 group"
            >
              <span className="hidden sm:inline">Próximo</span>
              <ChevronRight size={20} className="group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
