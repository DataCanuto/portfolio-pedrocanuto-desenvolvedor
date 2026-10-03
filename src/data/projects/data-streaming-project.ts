import type { Project } from '../types';

export const dataStreamingProject: Project = {
  id: 'data-streaming-project',
  name: 'Sistema de Gestão de Clientes e Documentos',
  slug: 'data-streaming-project',
  shortDescription:
    'Aplicação web full stack (FastAPI + PostgreSQL + React) que lê lotes de PDFs com OCR, consolida os documentos por cliente, mostra o que falta e permite revisar, corrigir e exportar a base.',
  description:
    'Evolução de um pipeline de extração em notebook para uma aplicação full stack de gestão de clientes. O backend em FastAPI recebe lotes de PDFs (notas fiscais, planilhas de comissão e prestações de contas), extrai os dados com PyMuPDF, PyPDF2 e Tesseract OCR em segundo plano, consolida os documentos por cliente e compara o lote com o que já está no banco (PostgreSQL, com migrations no Alembic) antes de importar. O frontend em React mostra o painel de pendências, a ficha de cada cliente, a revisão de duplicidades e as correções manuais com histórico, e exporta a base em planilha .xlsx e em pastas organizadas.',
  problem: 'Organizar os arquivos dos clientes.',
  objective: 'Projetar um software para gestão e controle de arquivos e versões.',
  status: 'em-producao',
  resumeTitle: 'Sistema de Gestão de Clientes e Documentos',
  resumeDescription:
    'Desenvolvimento, para cliente, de aplicação full stack (Python/FastAPI, PostgreSQL e React) que extrai dados de PDFs com OCR e consolida a documentação por cliente.',
  category: 'engenharia-dados',
  secondaryCategories: ['backend', 'frontend'],
  perspectives: {
    backend: {
      title: 'Sistema de Gestão de Clientes e Documentos — Backend',
      description:
        'API REST em FastAPI com arquitetura em camadas (rotas, serviços, repositórios, domínio): upload de lotes com processamento em segundo plano, extração por Strategy Pattern, comparação lote × banco e importação seletiva em PostgreSQL.',
      technologies: [
        'python',
        'fastapi',
        'pydantic',
        'sqlalchemy',
        'alembic',
        'postgresql',
        'pytest',
        'rest-api',
      ],
      features: [
        'Upload de lotes com resposta 202 e acompanhamento do progresso',
        'Extração de NF, planilha e prestação com OCR (Strategy Pattern)',
        'Comparação do lote com o banco antes de importar',
        'Correção manual de documentos com histórico de alterações',
      ],
    },
    frontend: {
      title: 'Sistema de Gestão de Clientes e Documentos — Frontend',
      description:
        'Interface em React + Vite organizada pelo fluxo de trabalho: enviar arquivos, conferir o lote, consultar clientes e documentos e exportar a base.',
      technologies: ['react', 'javascript', 'vite'],
      features: [
        'Painel com clientes completos e documentos faltantes',
        'Revisão de possíveis duplicidades e nomes ajustados pelo OCR',
        'Ficha do cliente com união de fichas e correção de nomes',
        'Exportação em planilha .xlsx e em pastas organizadas',
      ],
    },
  },
  featured: true,
  cover: {
    src: '/assets/gestao-clientes-wireframes/01-painel.svg',
    alt: 'Wireframe do painel do sistema, com dados fictícios',
  },
  onResume: 'freelance',
  date: '2025-01',
  context: { engagement: 'freelance', label: 'Projeto para Cliente' },
  domain: 'Gestão de documentação de clientes',
  technologies: [
    'python',
    'fastapi',
    'pydantic',
    'sqlalchemy',
    'alembic',
    'postgresql',
    'pymupdf',
    'pypdf2',
    'tesseract',
    'openpyxl',
    'regex',
    'pytest',
    'react',
    'javascript',
    'vite',
    'rest-api',
  ],
  skills: [
    'engenharia-dados',
    'api-design',
    'arquitetura-software',
    'banco-de-dados',
    'frontend-react',
    'testes-automatizados',
  ],
  features: [
    'Leitura de PDFs nativos e escaneados (OCR) em segundo plano',
    'Consolidação dos documentos por cliente e relatório do que falta',
    'Comparação do lote com o banco e importação seletiva',
    'Revisão de duplicidades, correções manuais e histórico',
    'Exportação em .xlsx e organização dos arquivos em pastas',
  ],
  repository: 'https://github.com/DataCanuto/data-streaming-project',
  caseStudy: '/engenharia-dados/data-streaming-project',
  images: [
    {
      src: '/assets/gestao-clientes-wireframes/01-painel.svg',
      alt: 'Wireframe do painel com números de clientes e pendências (dados fictícios)',
    },
    {
      src: '/assets/gestao-clientes-wireframes/02-enviar.svg',
      alt: 'Wireframe do envio de um lote de PDFs com progresso da leitura (dados fictícios)',
    },
    {
      src: '/assets/gestao-clientes-wireframes/03-lote.svg',
      alt: 'Wireframe da conferência do lote: comparação com o banco e revisão (dados fictícios)',
    },
    {
      src: '/assets/gestao-clientes-wireframes/04-clientes.svg',
      alt: 'Wireframe da tabela de clientes com documentos faltantes (dados fictícios)',
    },
    {
      src: '/assets/gestao-clientes-wireframes/05-cliente.svg',
      alt: 'Wireframe da ficha de um cliente com seus documentos (dados fictícios)',
    },
    {
      src: '/assets/gestao-clientes-wireframes/06-exportar.svg',
      alt: 'Wireframe da exportação em planilha e pastas (dados fictícios)',
    },
  ],
  evolution: [
    {
      version: 'v1',
      title: 'Pipeline em Jupyter Notebook',
      period: '2025',
      description:
        'Células executadas manualmente, em ordem: varredura das pastas, OCR das notas fiscais, extração por regex, junção das tabelas com pandas e exportação de relatórios em Excel. Cada nova leva de arquivos exigia rodar o notebook de novo, e correções eram feitas editando código ou planilhas.',
      technologies: [
        'python',
        'jupyter',
        'pandas',
        'tesseract',
        'pymupdf',
        'pypdf2',
        'openpyxl',
        'regex',
      ],
      highlights: [
        'Execução manual, célula a célula',
        'Cliente identificado pelo nome do arquivo, renomeado à mão',
        'Correções direto no código ou na planilha exportada',
        'Resultado em arquivos Excel, sem histórico',
      ],
    },
    {
      version: 'v2',
      title: 'Sistema full stack em produção',
      period: '2026',
      description:
        'Refatoração para uma aplicação web em camadas: API em FastAPI com processamento em segundo plano, um extractor por tipo de documento (Strategy Pattern), banco PostgreSQL com migrations e interface em React para enviar lotes, revisar, corrigir e exportar.',
      technologies: [
        'python',
        'fastapi',
        'sqlalchemy',
        'alembic',
        'postgresql',
        'tesseract',
        'react',
        'vite',
      ],
      highlights: [
        'Upload de lotes com leitura em segundo plano e progresso na tela',
        'Cliente identificado pelo nome lido de dentro do documento',
        'Comparação com o banco antes de importar',
        'Atribuição e correção manual com histórico de alterações',
      ],
    },
  ],
  metrics: {
    source: 'Painel do sistema, out/2026',
    items: [
      {
        id: 'clientes-completos',
        label: 'Clientes completos (NF + Planilha + Prestação)',
        value: 116,
        total: 169,
        detail: 'prontos para o PDF mesclado',
      },
      { id: 'clientes', label: 'Clientes', value: 169 },
      {
        id: 'documentos',
        label: 'Documentos',
        value: 502,
        detail: '191 notas fiscais · 151 planilhas de comissão · 160 prestações de contas',
      },
      { id: 'sem-cliente', label: 'Documentos sem cliente', value: 0, detail: '100% atribuídos' },
      {
        id: 'faltantes',
        label: 'Com documentos faltantes',
        value: 53,
        detail: '14 sem NF · 34 sem planilha · 28 sem prestação (entregas pendentes do cliente)',
      },
      {
        id: 'sem-pendencia',
        label: 'Clientes sem pendência após a extração automática',
        value: 151,
        total: 169,
        detail: '18 clientes com 21 documentos resolvidos por correção manual',
      },
      {
        id: 'primeiro-lote',
        label: 'Arquivos no 1º lote real',
        value: 507,
        detail: '0 com erro · cerca de 3 minutos',
      },
      {
        id: 'revisao',
        label: 'Nomes ajustados automaticamente pelo OCR',
        value: 31,
        detail: '29 possíveis duplicidades enviadas para revisão',
      },
    ],
  },
  results: [
    'Todos os 502 documentos atribuídos a um cliente.',
    '89% dos clientes sem nenhum campo pendente após a extração automática.',
    'Documentos faltantes por cliente visíveis no painel, em vez de conferidos pasta por pasta.',
  ],
  documentation: [
    { label: 'Documentação (PT-BR)', url: 'docs/DATA_STREAMING_PT_BR.md', kind: 'readme' },
  ],
  challenges: [
    {
      title: 'PDFs escaneados e nativos no mesmo lote',
      description:
        'As notas fiscais chegam como imagem (scan), enquanto planilhas e prestações de contas têm camada de texto ou tabelas. Um único método de leitura não serve para os três tipos.',
      solution:
        'Leitores separados por tipo de conteúdo (texto com PyPDF2, tabelas com PyMuPDF e OCR com Tesseract), escolhidos por um extractor por tipo de documento (Strategy Pattern). O OCR só roda quando é necessário e tem cache por hash do arquivo.',
      impact:
        'Primeiro lote real: 507 arquivos lidos, 0 com erro, em cerca de 3 minutos (registro do próprio processamento na API).',
      difficulty: 'high',
    },
    {
      title: 'Mesmo cliente com grafias diferentes',
      description:
        'O nome do cliente aparece de formas diferentes entre documentos e o OCR troca letras, o que gerava fichas duplicadas para a mesma pessoa.',
      solution:
        'A chave do cliente é o nome lido de dentro do documento, normalizado. Erros de OCR são reconciliados com o nome mais parecido da camada de texto, e os casos em dúvida vão para revisão do usuário, que pode unir fichas e corrigir nomes.',
      impact:
        'No primeiro lote, 31 nomes lidos por OCR foram ajustados automaticamente e 29 possíveis duplicidades foram enviadas para revisão. Após a revisão, as 190 fichas importadas viraram 169 clientes.',
      difficulty: 'high',
    },
    {
      title: 'Documentos que a leitura automática não resolve',
      description:
        'Arquivo de baixa qualidade, campo ilegível ou nome que não forma par com nenhum cliente não podem simplesmente sumir da base.',
      solution:
        'Atribuição manual de documentos a clientes e correção manual de campos (data, situação, cliente), com histórico de cada alteração. Campos corrigidos à mão não são sobrescritos por uma nova importação sem confirmação.',
      impact:
        '100% dos 502 documentos atribuídos a um cliente (0 sem cliente). 151 de 169 clientes (89%) sem nenhum campo pendente após a extração automática; os 21 documentos sinalizados, de 18 clientes, são resolvidos pela correção manual.',
      difficulty: 'medium',
    },
    {
      title: 'Reprocessar sem duplicar nem perder correções',
      description:
        'Novos lotes trazem documentos que já estão na base, às vezes com dados diferentes dos que foram corrigidos manualmente.',
      solution:
        'Antes de importar, o lote é comparado com o banco e cada documento é classificado como novo, igual, alterado, conflito ou erro. O usuário escolhe o que importar; arquivos repetidos são detectados pelo hash SHA-256.',
      impact: 'A importação passa a ser uma decisão revisável, e não uma sobrescrita da base.',
      difficulty: 'medium',
    },
    {
      title: 'Saber o que falta para cada cliente',
      description:
        'Cada cliente precisa de nota fiscal, planilha de comissão e prestação de contas. Antes, descobrir o que faltava exigia conferir pasta por pasta.',
      solution:
        'Consolidação dos documentos por cliente e painel com os faltantes por tipo, além de exportação em planilha .xlsx e organização dos arquivos em pastas por cliente.',
      impact:
        'Base atual: 169 clientes e 502 documentos (191 notas fiscais, 151 planilhas de comissão e 160 prestações de contas). 116 clientes completos (69%); os faltantes por tipo (14 sem nota fiscal, 34 sem planilha e 28 sem prestação) são documentos ainda não entregues, agora visíveis no painel.',
      difficulty: 'medium',
    },
  ],
  icon: '🔄',
};
