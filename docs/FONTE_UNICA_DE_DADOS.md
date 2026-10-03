# Fonte única de dados do portfólio

Todas as informações profissionais ficam em `src/data/`. Os componentes **apresentam**
os dados; nenhum componente armazena perfil, projetos, formação ou certificações.

```text
              ┌── Home (Hero, Sobre, Formação, Certificados, Projetos, Contato, Footer)
              ├── /projetos (todos os projetos, com filtros)
              ├── Páginas de área (/backend, /frontend, /engenharia-dados, /dashboards)
src/data ─────┼── Case studies (título, GitHub, objetivo, desafios)
              ├── Currículo (/portfolio)
              └── Metadados de SEO (app/layout.tsx)
```

## Estrutura

| Arquivo | Conteúdo |
| --- | --- |
| `types.ts` | Modelo de dados (Project, Profile, Competency, Technology, Education, Certification, Experience) |
| `profile.ts` | Nome, títulos, resumo, contatos, tecnologias em destaque, textos do "Sobre Mim" |
| `projects/*.ts` | Um arquivo por projeto; `projects/index.ts` define a lista e a ordem |
| `technologies.ts` | Catálogo de tecnologias (id → nome, tipo, cor) |
| `competencies.ts` | Competências, nível declarado e tecnologias que as sustentam; grupos do currículo |
| `education.ts` | Formação (curso, instituição, período, status) |
| `certifications.ts` | Certificações (nome, emissor, data, imagem, URL, credencial) |
| `experiences.ts` | Experiências profissionais |
| `categories.ts` | Áreas do portfólio e suas rotas |
| `queries.ts` | Consultas de exibição e de relacionamento (Projeto → Tecnologia → Competência → Evidência) |
| `completeness.ts` | Validação de completude e integridade |

## Como usar

- **Adicionar um projeto:** criar `src/data/projects/<id>.ts` e incluí-lo em `projects/index.ts`.
  Ele aparece automaticamente em `/projetos`, na página da área e, com `featured: true`, na Home.
- **Escolher os destaques da Home:** alterar `featured` no arquivo do projeto.
- **Currículo:** `onResume` ('freelance' | 'pessoal' | 'dados') define a seção; `resumeTitle` e
  `resumeDescription` ajustam o texto. Certificações entram com `onResume: true`.
- **Nunca inventar:** campo desconhecido fica ausente. O validador mostra o que falta.
- **Texto ainda não revisado:** `draftFields` lista os campos (`problem`, `objective`) redigidos a
  partir do código e dos dados que o Pedro ainda não revisou. Quando ele confirma ou reescreve o
  texto, o campo sai da lista. Uso interno: aparece no validador, nunca no site.
- **Marcos do projeto:** `milestones` guarda datas e etapas em ordem cronológica.
- **Números de resultado:** só entram nos desafios (`challenges[].impact`) números medidos, com a
  origem registrada na documentação do projeto; o que não pode ser medido vira frase sem número.

## Validação

```bash
npm run validate:data          # relatório legível
npm run validate:data -- --json # JSON para o agente de portfólio
```

O relatório lista, por projeto, campos obrigatórios (✗) e recomendados (⚠) ausentes e os pontos
de revisão (`reviewNotes`). Também lista lacunas do perfil (objetivo de carreira, tecnologias em
destaque sem projeto como evidência, competências sem nível declarado, certificações sem
comprovação). Sai com código 1 se houver referência quebrada entre os dados. Nada disso aparece
para visitantes.

## Auditoria (outubro/2026) — o que foi centralizado

| Dado | Onde estava duplicado |
| --- | --- |
| Projetos | `ProjectsTimeline/projectsData.ts`, `Portfolio.tsx` (currículo), arrays em `app/backend`, `app/engenharia-dados`, `app/dashboards`, três cards fixos em `app/frontend`, URLs de GitHub em cada case study |
| Flora Hub | Timeline (2 entradas), página Backend, página Frontend, os dois case studies |
| Perfil e contatos | `Hero`, `About`, `ContactSection`, `Footer`, `Portfolio`, `app/layout.tsx` |
| Formação | `Formation.tsx` e `Portfolio.tsx` (textos diferentes) |
| Certificações | `Certifications.tsx` e `Portfolio.tsx` (datas diferentes) |
| Desafios dos cases | `DataStreamingProject/ProjectChallenges.tsx`, `PedroCanutoMusico/ProjectChallenges.tsx` |

### Inconsistências encontradas (registradas em `reviewNotes` quando são de projeto)

- **Pedro Canuto Música:** o currículo dizia "Freelance, sob demanda de cliente"; timeline, página
  Backend e case study dizem "meu próprio serviço". Mantido como Projeto Pessoal.
- **Pedro Canuto Música:** repositório `pedro-canuto-musico` (case study) × `pedrocanutomusico`
  (página Frontend). Mantido o do case study.
- **Galeria Digital:** timeline dizia 2026 / Projeto Pessoal; currículo e página Frontend dizem
  Dezembro/2025 / Freelance. Mantido Dezembro/2025 / Freelance.
- **Certificações:** o currículo tinha anos diferentes da galeria para Globant (2026 × 2025-05-24),
  SENAI IA Industrial (2025 × 2024-12-10) e Microsoft + LinkedIn (2025 × 2024-11-30). Mantidas as
  datas da galeria. "Santander — AI Java Back-End" só existia no currículo e não tem imagem nem URL.
- **Títulos do perfil:** "Desenvolvedor de Soluções em Tecnologia" (Home), "Desenvolvedor Full Stack |
  Java, React & Dados" (currículo) e "Desenvolvedor de Sistemas" (SEO). Mantidos os três em
  `profile.ts` (`tagline`, `title`, `seo.title`) até definição.
- **SEO:** Open Graph aponta para `https://pedrocanuto.dev`; o portfólio publicado está na Vercel.
- **Galeria Digital (conteúdo do cliente):** dois números de WhatsApp diferentes em `GaleriaHero`
  e `GaleriaAbout`/`GaleriaArtwork`. Não alterado (dados do cliente, fora do perfil).

### Projeto renomeado (outubro/2026)

O antigo "Data Streaming Pipeline" (`data-streaming-project`) passou a ser apresentado como
**Sistema de Gestão de Clientes e Documentos**, a aplicação full stack que substituiu o notebook.
O `id`, o `slug` e a rota do case (`/engenharia-dados/data-streaming-project`) foram mantidos para
não quebrar links. O nome do cliente e da empresa contratante não aparece em nenhum dado, texto ou
imagem; as telas são wireframes com dados fictícios em `public/assets/gestao-clientes-wireframes/`.

### Fora do escopo desta etapa

O texto narrativo dos case studies (seções, diagramas, simulações) continua nos componentes de
cada case: é conteúdo de apresentação, não metadado. Metadados (título, GitHub, objetivo,
desafios) já vêm de `src/data`.
