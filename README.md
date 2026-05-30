# Pedro Canuto - Portfólio Digital 🚀

Portfólio digital moderno de Pedro Canuto, focado em Desenvolvimento de Sistemas e Engenharia de Dados.

## 🎯 Características

- ✨ **Design System Elegante** - Dark mode com paleta de cores moderna (Slate + DarkOrange)
- 🎬 **Animações Suaves** - Framer Motion para transições sofisticadas
- 📱 **Responsivo** - Mobile First, totalmente funcional em todos os dispositivos
- ♿ **Acessível** - WCAG AAA compliant
- ⚡ **Performance** - Next.js 14 com otimizações automáticas
- 🔗 **Integração GitHub** - Exibe projetos em tempo real via GitHub API
- 📊 **Scroll Spy** - Header dinâmico com destaque da seção ativa
- 🎨 **Customizável** - Componentes reutilizáveis e bem estruturados

## 🛠️ Stack Técnico

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **API Fetching**: SWR
- **Code Quality**: ESLint + Prettier

## 📦 Instalação

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Setup

1. **Clone o repositório**
```bash
git clone https://github.com/DataCanuto/portfolio-digital.git
cd portfolio-digital
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
# Copie o arquivo de exemplo
cp .env.example .env.local

# Edite .env.local com suas credenciais
NEXT_PUBLIC_GITHUB_USERNAME=DataCanuto
NEXT_PUBLIC_GITHUB_TOKEN=seu_token_github_aqui
```

4. **Execute o servidor de desenvolvimento**
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa ESLint
- `npm run format` - Formata código com Prettier
- `npm run type-check` - Verifica tipos TypeScript

## 🏗️ Estrutura de Diretórios

```
portfolio-digital/
├── app/                          # Rotas e layout do Next.js
│   ├── layout.tsx               # Layout global
│   ├── page.tsx                 # Página principal
│   └── globals.css              # Estilos globais
├── src/
│   ├── components/              # Componentes React
│   │   ├── Header/              # Navbar com Scroll Spy
│   │   ├── Hero/                # Seção Hero
│   │   ├── About/               # Seção Sobre (com abas)
│   │   ├── Projects/            # Grid de Projetos (GitHub API)
│   │   ├── Certificates/        # Galeria de Certificados
│   │   ├── Contact/             # Seção de Contato
│   │   ├── Footer/              # Rodapé
│   │   └── UI/                  # Componentes reutilizáveis
│   ├── hooks/                   # Custom React Hooks
│   │   ├── useScrollSpy.ts      # Hook para Scroll Spy
│   │   └── useGitHubProjects.ts # Hook para GitHub API
│   ├── types/                   # Tipos TypeScript
│   ├── utils/                   # Funções utilitárias
│   └── styles/                  # Estilos CSS
├── public/                       # Assets públicos
│   ├── img/                      # Imagens
│   └── icons/                    # Ícones
├── tailwind.config.js           # Configuração Tailwind
├── next.config.js               # Configuração Next.js
└── package.json                 # Dependências
```

## 🎨 Paleta de Cores

| Uso | Cor | Hex |
|-----|-----|-----|
| Background Principal | Slate-950 | #0F172A |
| Background Secundário | Slate-800 | #1E293B |
| Header | Black | #000000 |
| Textos Primários | Slate-100 | #F1F5F9 |
| Textos Secundários | Slate-400 | #94A3B8 |
| Destaque/CTA | DarkOrange | #FF8C00 |
| Hover | Orange | #FFA500 |
| Borders | Slate-700 | #334155 |

## 📱 Seções

### Hero
- Introdução impactante com nome e subtítulo
- Tags de especialidades
- Tecnologias em destaque
- CTAs para Projetos e Contato

### Sobre
- **3 Abas Interativas:**
  1. Trajetória profissional (Arte → Tech)
  2. Soft Skills (Empatia, Comunicação, Criatividade)
  3. Arsenal Técnico (Linguagens, Ferramentas, Idiomas)
- Timeline de Educação e Formações

### Projetos
- Grid responsivo de projetos do GitHub
- Exibe stars e forks
- Modal com detalhes completos
- Links diretos para GitHub e site live

### Certificações
- Galeria de certificados
- Ordenados por data (mais recentes primeiro)
- Categorias de foco

### Contato
- Links para WhatsApp, Email, LinkedIn, GitHub
- Design responsivo
- Acessibilidade garantida

## 🚀 Deploy

### Vercel (Recomendado)

1. Push seu código para GitHub
2. Conecte seu repositório no [Vercel](https://vercel.com)
3. Configure variáveis de ambiente no Vercel
4. Deploy automático em push

```bash
# Ou deploy via CLI
npm i -g vercel
vercel
```

### GitHub Pages

```bash
npm run build
npm run export # Se necessário
# Push para branch gh-pages
```

## 🔐 Segurança

- ⚠️ **IMPORTANTE**: Nunca commit `.env.local`
- Use `.env.example` para exemplo de variáveis
- GitHub Token: Considere regenerar após publicação
- Sempre use HTTPS em produção

## ♿ Acessibilidade

- ✅ Contraste WCAG AAA
- ✅ Navegação por teclado completa
- ✅ Semantic HTML
- ✅ ARIA labels onde necessário
- ✅ Focus management
- ✅ Respect prefers-reduced-motion

## 🐛 Troubleshooting

### Projetos GitHub não aparecem
1. Verifique se o token está correto
2. Confirme username do GitHub
3. Verifique rate limit da API: `curl -i https://api.github.com`

### Estilos não aplicados
```bash
# Limpe cache do Next.js
rm -rf .next
npm run dev
```

### Porta 3000 já em uso
```bash
npm run dev -- -p 3001
```

## 📞 Contato

- **Email**: data.canuto@gmail.com
- **WhatsApp**: +55 (99) 99588-9500
- **LinkedIn**: linkedin.com/in/pedro-canuto-408867331
- **GitHub**: github.com/DataCanuto

## 📄 Licença

MIT © 2024 Pedro Canuto

---

Desenvolvido com ❤️ e React + Next.js
