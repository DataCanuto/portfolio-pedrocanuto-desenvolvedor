import type { Project } from '../types';

export const dataStreamingProject: Project = {
  id: 'data-streaming-project',
  name: 'Data Streaming Pipeline',
  slug: 'data-streaming-project',
  shortDescription:
    'Pipeline automatizado para extração, consolidação e análise de dados de múltiplos tipos de documentos PDF (notas fiscais, planilhas, prestações) com OCR via Tesseract e exportação estruturada em Excel.',
  description:
    'Pipeline completo de extração, processamento e consolidação de dados de múltiplos tipos de documentos (Notas Fiscais, Planilhas, Prestações) com OCR integrado.',
  objective:
    'Automatizar a extração e consolidação de dados de documentos PDF (NFs, Planilhas, Prestações) com suporte para PDFs escaneados via OCR, gerando relatórios estruturados e consolidados para análise.',
  resumeTitle: 'Pipeline de Dados — Data Flow Pipeline',
  resumeDescription:
    'Construção, para cliente, de pipeline em Python para análise de fluxo e gerenciamento de dados.',
  category: 'engenharia-dados',
  featured: true,
  onResume: 'freelance',
  date: '2025-01',
  context: { engagement: 'freelance', label: 'Projeto para Cliente' },
  technologies: [
    'python',
    'tesseract',
    'pandas',
    'etl',
    'pymupdf',
    'pypdf2',
    'openpyxl',
    'regex',
    'jupyter',
  ],
  skills: ['engenharia-dados', 'analise-dados'],
  features: [
    'Extração de texto de PDFs nativos e escaneados (OCR)',
    'Mesclagem completa de dados com full outer join',
    'Consolidação de múltiplos documentos por cliente',
    'Relatório de arquivos faltantes em Excel',
  ],
  repository: 'https://github.com/DataCanuto/data-streaming-project',
  caseStudy: '/engenharia-dados/data-streaming-project',
  images: [
    {
      src: '/assets/data-streaming-img/File_Discovery_Process.png',
      alt: 'Processo de descoberta de arquivos',
    },
    { src: '/assets/data-streaming-img/uml.png', alt: 'Diagrama UML' },
    { src: '/assets/data-streaming-img/uml_2.png', alt: 'Diagrama UML 2' },
  ],
  documentation: [
    { label: 'Documentação (PT-BR)', url: 'docs/DATA_STREAMING_PT_BR.md', kind: 'readme' },
  ],
  challenges: [
    {
      title: 'Processamento de PDFs Escaneados',
      description:
        'Muitos documentos eram imagens de PDF (scans), impossibilitando extração de texto direta. Necessário implementar OCR para reconhecer caracteres em imagens.',
      solution:
        'Integração com Tesseract OCR com configuração otimizada para documentos financeiros em português. Implementação de pré-processamento de imagens com Pillow para aumentar acurácia.',
      impact:
        'Capacidade de processar 100% dos documentos, incluindo scans antigos de baixa qualidade.',
      difficulty: 'high',
    },
    {
      title: 'Normalização de Nomes de Clientes',
      description:
        'Nomes inconsistentes entre fontes diferentes: abreviações, prefixos (Sr., Sra.), sobrenomes em diferentes ordens. Dificultava matching cross-referência.',
      solution:
        'Desenvolvimento de algoritmo customizado de processamento de nomes com regras específicas para nomes brasileiros. Remoção de prefixos, tratamento de casos especiais (herança, empresa).',
      impact:
        'Redução de 95% em inconsistências de nomes, melhorando precisão do matching de clientes.',
      difficulty: 'medium',
    },
    {
      title: 'Extração Precisa de Datas em Português',
      description:
        'Variações no formato de datas brasileiras (dd/mm/yyyy), diferentes labels e formatos de texto. Regex simples falhava em casos edge.',
      solution:
        'Implementação de regex robusto com múltiplos padrões e tratamento de exceções. Validação com biblioteca `dateutil` para garantir datas válidas.',
      impact: 'Taxa de sucesso de 99% na extração de datas, eliminando erros de parsing.',
      difficulty: 'medium',
    },
    {
      title: 'Consolidação de Múltiplos Documentos por Cliente',
      description:
        'Clientes possuem múltiplas NFs, Prestações e Planilhas. Full Outer Join complexo para manter integridade de dados sem perder informações.',
      solution:
        'Implementação de pandas merge com chaves compostas e validação pós-merge. Estrutura de dados com listas para armazenar múltiplas origens.',
      impact:
        'Consolidação perfeita de dados com 100% de integridade, documentação de clientes com arquivos faltantes.',
      difficulty: 'high',
    },
    {
      title: 'Performance com Grandes Volumes',
      description:
        'Pipeline processando centenas de arquivos PDF. Operações de file I/O e OCR são lentas. Necessidade de otimização para execução eficiente.',
      solution:
        'Implementação de processamento em chunks, cache de resultados OCR, e otimização de regex. Uso de pandas operations vetorizadas em vez de loops.',
      impact: 'Redução de 60% no tempo de processamento mantendo qualidade dos resultados.',
      difficulty: 'high',
    },
    {
      title: 'Validação e Relatório de Qualidade',
      description:
        'Necessidade de identificar documentos faltantes, duplicatas e inconsistências. Rastreamento de qualidade crítico para análise posterior.',
      solution:
        'Desenvolvimento de sistema de validação multi-camadas com métricas de qualidade. Geração automática de relatório de arquivos faltantes em Excel.',
      impact:
        'Visibilidade total da qualidade dos dados com documentação de gaps e inconsistências.',
      difficulty: 'medium',
    },
  ],
  icon: '🔄',
};
