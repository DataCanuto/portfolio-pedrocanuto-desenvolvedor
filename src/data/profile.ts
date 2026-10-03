import type { Profile } from './types';

export const profile: Profile = {
  name: 'Pedro Canuto',
  title: 'Desenvolvedor Back-end Java/Spring | Dados com Python',
  tagline: 'Desenvolvedor de Soluções em Tecnologia',
  seo: {
    title: 'Pedro Canuto - Desenvolvedor Back-end Java/Spring',
    description:
      'Portfólio de Pedro Canuto, desenvolvedor back-end Java/Spring em início de carreira, com dados e Python como segundo foco. Sistemas em produção para clientes, APIs com Spring Boot e Spring AI, e automação de documentos com FastAPI.',
    shortDescription:
      'Desenvolvedor back-end Java/Spring em início de carreira, com dados e Python como segundo foco.',
    keywords: [
      'Desenvolvedor Back-end',
      'Java',
      'Spring Boot',
      'Desenvolvedor Júnior',
      'APIs REST',
      'PostgreSQL',
      'Python',
      'Dados',
      'Salvador',
    ],
  },
  summary:
    'Desenvolvedor back-end Java/Spring em formação (Java, Spring Boot, APIs REST, JPA/PostgreSQL, Docker), com sistemas completos entregues para clientes reais, do banco de dados à entrega. Meu segundo foco é dados com Python: automação e extração de documentos com FastAPI, análise de dados e machine learning (Pandas, Scikit-learn, OpenCV). Front-end com React e Next.js e repertório de UX completam o perfil e me ajudam a dialogar com produto. Antes da tecnologia, construí uma trajetória na música: bandas desde 2016, aulas para crianças desde 2018 e negócio próprio em educação musical e eventos desde 2020. Trago desse período a prática de traduzir problema real em solução, não só código.',
  careerObjective:
    'Em transição de carreira, busco uma oportunidade de nível inicial (entry level) em desenvolvimento e análise, usando tecnologia para criar soluções para empresas e clientes. Também atendo como freelancer nos tipos de projeto apresentados neste portfólio.',
  location: { city: 'Salvador', state: 'BA' },
  photo: '/img/profile.png',
  contacts: [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      display: '(71) 99958-8950',
      url: 'https://wa.me/5571999588950',
    },
    {
      id: 'email',
      label: 'Email',
      display: 'data.canuto@gmail.com',
      url: 'mailto:data.canuto@gmail.com',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      display: '/in/pedro-canuto-408867331',
      url: 'https://linkedin.com/in/pedro-canuto-408867331',
    },
    { id: 'github', label: 'GitHub', display: '/DataCanuto', url: 'https://github.com/DataCanuto' },
    {
      id: 'portfolio',
      label: 'Portfólio',
      display: 'portfolio-pedrocanuto-desenvolvedor.vercel.app',
      url: 'https://portfolio-pedrocanuto-desenvolvedor.vercel.app',
    },
  ],
  priorityTechnologies: [
    'java',
    'spring-boot',
    'postgresql',
    'python',
    'fastapi',
    'sql',
    'react',
    'javascript',
    'vite',
    'html5',
    'css3',
    'power-bi',
    'excel',
  ],
  mainCompetencies: [
    'backend-java',
    'api-design',
    'banco-de-dados',
    'analise-dados',
    'engenharia-dados',
    'frontend-react',
    'ux-design',
  ],
  softSkills: [
    {
      name: 'Empatia e Foco no Usuário (User-Centric)',
      description: 'escuta ativa para entender necessidades reais.',
    },
    {
      name: 'Comunicação Clara',
      description: 'traduzir conceitos técnicos para diversos públicos.',
    },
    { name: 'Resolução Criativa', description: 'visão fora da caixa para problemas difíceis.' },
    {
      name: 'Aprender a Aprender',
      description: 'agilidade para dominar novas tecnologias rapidamente.',
    },
  ],
  languages: [
    { name: 'Português', level: 'nativo' },
    { name: 'Inglês', level: 'fluente' },
  ],
  about: {
    developer:
      'Desenvolvedor back-end em formação, com foco em Java e Spring Boot para construção de APIs REST e aplicações orientadas a regras de negócio. Aplico Programação Orientada a Objetos, persistência com JPA/PostgreSQL e conteinerização com Docker em projetos completos, do banco de dados à entrega. Complemento o perfil com projetos em Python aplicado a dados e machine learning, e com repertório de UX/UI, o que amplia minha capacidade de dialogar com times de produto e dados.',
    journey: {
      paragraphs: [
        'Minha trajetória profissional não é convencional, e é exatamente isso que considero minha maior força. Construí minha base como Arte-educador, educador musical bilíngue e Musicoterapeuta, trabalhando com desenvolvimento humano.',
        'Hoje, como estudante no SENAI CIMATEC, trago essa bagagem para a tecnologia. Aprender novas linguagens ou arquitetar bancos de dados exige o mesmo que um instrumento musical: foco, prática, lógica e a capacidade de conectar elementos para criar algo em harmonia.',
      ],
      link: { label: 'aqui', url: 'https://pedrocanutomusico.app/' },
    },
    arsenal: [
      'Linguagens: Python, Java, C++, UML.',
      'Dados: SQL, ETL, Matplotlib, Seaborn.',
      'Negócios: Excel Avançado, Dashboards.',
      'Idiomas: Inglês Fluente.',
    ],
  },
};

export const getContact = (id: Profile['contacts'][number]['id']) => {
  const contact = profile.contacts.find((c) => c.id === id);
  if (!contact) throw new Error(`Contato desconhecido: ${id}`);
  return contact;
};
