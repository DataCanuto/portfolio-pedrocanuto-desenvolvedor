# 🎯 PROJECT SUMMARY

## Pedro Canuto - Portfólio Digital | Next.js 14 + TypeScript + Tailwind CSS

Este é um portfólio digital completo, moderno e pronto para produção, desenvolvido com Next.js, TypeScript e Tailwind CSS.

---

## ✨ Destaques

✅ **Next.js 14** - Framework React com SSR e otimizações automáticas  
✅ **TypeScript** - Type safety completo  
✅ **Tailwind CSS** - Design system elegante (Dark Mode)  
✅ **Framer Motion** - Animações suaves e profissionais  
✅ **GitHub API Integration** - Exibe projetos em tempo real  
✅ **Scroll Spy** - Header dinâmico com destaque da seção ativa  
✅ **Responsivo** - Mobile First, totalmente funcional  
✅ **WCAG AAA** - Acessibilidade garantida  
✅ **Performance** - Otimizado para velocidade  
✅ **SEO Ready** - Meta tags e Open Graph configurados  

---

## 📁 Arquitetura

```
portfolio-digital/
├── app/                        # Next.js 14 App Router
│   ├── layout.tsx             # Layout global com meta tags
│   ├── page.tsx               # Página principal
│   └── globals.css            # Estilos globais
├── src/
│   ├── components/            # React Components
│   │   ├── Header/            # Navbar com Scroll Spy
│   │   ├── Hero/              # Seção Hero
│   │   ├── About/             # Sobre (3 abas + timeline)
│   │   ├── Projects/          # Grid com GitHub API
│   │   ├── Certificates/      # Galeria de certificados
│   │   ├── Contact/           # Seção de contato
│   │   ├── Footer/            # Rodapé
│   │   └── UI/                # Componentes reutilizáveis (Button, Badge)
│   ├── hooks/                 # Custom React Hooks
│   │   ├── useScrollSpy.ts    # Hook para Scroll Spy
│   │   └── useGitHubProjects.ts # Hook para GitHub API (SWR)
│   ├── types/                 # TypeScript Interfaces
│   │   ├── github.ts          # Types do GitHub
│   │   └── certificate.ts     # Types de certificados
│   ├── utils/                 # Funções utilitárias
│   │   ├── cn.ts              # Classname merger (cn())
│   │   └── dateFormatter.ts   # Formatadores de data
│   └── styles/                # CSS customizado
├── public/                     # Assets públicos
│   ├── img/                    # Imagens
│   └── icons/                  # Ícones
├── .env.example               # Exemplo de env vars
├── .env.local                 # Env vars (não commitar)
├── .gitignore                 # Git ignore patterns
├── .eslintrc.json             # ESLint config
├── .prettierrc                # Prettier config
├── .vercelignore              # Vercel ignore patterns
├── tailwind.config.js         # Tailwind CSS customization
├── tsconfig.json              # TypeScript config
├── next.config.js             # Next.js config
├── postcss.config.js          # PostCSS config
├── package.json               # Dependencies
├── README.md                  # Documentação completa
├── QUICK_START.md             # Setup rápido
├── COMPONENTS.md              # Documentação de componentes
└── DEPLOY_VERCEL.md           # Guia de deploy
```

---

## 🎨 Design System

### Paleta de Cores

| Elemento | Hex | Uso |
|----------|-----|-----|
| Background Primário | #0F172A (Slate-950) | Fundo geral |
| Background Secundário | #1E293B (Slate-800) | Cards, seções |
| Header | #000000 (Black) | Navbar, seções |
| Textos Primários | #F1F5F9 (Slate-100) | Títulos, corpo |
| Textos Secundários | #94A3B8 (Slate-400) | Subtítulos, hints |
| Destaque | #FF8C00 (DarkOrange) | CTA, hover, links ativos |
| Hover | #FFA500 (Orange) | Estados hover |
| Borders | #334155 (Slate-700) | Linhas, divisores |

### Tipografia

- **Font**: Inter, Segoe UI, sans-serif
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Sizes**: Responsivo com Mobile First

### Componentes

- **Button**: 4 variantes (primary, secondary, outline, ghost) × 3 tamanhos
- **Badge**: 3 variantes para tags e status
- **Cards**: Hover effects, animations, responsive
- **Inputs**: Accessibility-ready

---

## 🚀 Seções do Site

### 1. Hero (Início)
- Título com nome em destaque
- Subtítulo profissional
- Tags de especialidades
- Tecnologias destacadas
- 2 CTAs: "Ver Projetos" e "Conectar Comigo"
- Animações de entrada suave

### 2. Sobre
- **3 Abas Interativas:**
  1. De Orquestrar Sons a Orquestrar Dados (trajetória)
  2. O Diferencial Humano - Soft Skills
  3. Meu Arsenal Técnico
- **Timeline de Educação:**
  - 2025-2027: Desenvolvimento de Sistemas (SENAI)
  - 2024: Java & Spring Boot AI
  - 2024: Google Data Analytics
  - 2022: Pós-graduação em Musicoterapia
  - 2019: Bacharelado em Artes
- Transições suaves entre abas

### 3. Projetos
- Grid responsivo (1 col mobile, 2 cols tablet, 3 cols desktop)
- Integração com GitHub API (DataCanuto)
- Cards com stars, forks, language, topics
- Modal ao clicar (detalha projeto)
- Links para GitHub e site live
- Loading skeleton enquanto carrega

### 4. Certificações
- Galeria de certificados
- Ordenados por data (recentes primeiro)
- Exibe issuer e data
- Categorias de foco (Data Science, Desenvolvimento, Cloud, Soft Skills)

### 5. Contato
- 4 Links principais:
  - WhatsApp: +55 (99) 99588-9500
  - Email: data.canuto@gmail.com
  - LinkedIn: /in/pedro-canuto-408867331
  - GitHub: /DataCanuto
- CTA para iniciar conversa no WhatsApp
- Design responsivo e acessível

### 6. Footer
- Copyright dinâmico
- Links rápidos para redes sociais
- Ícone animado de coração

---

## 🔧 Funcionalidades Técnicas

### Scroll Spy
- Header fixo no topo
- Navlink destacado dinamicamente conforme usuário rola
- Transição suave com underline em DarkOrange
- Navegação fluida ao clicar

### GitHub API Integration
- Fetch automático de repositórios público (últimos 6)
- Ordenados por atualização recente
- Mostra language, stars, forks, topics
- Modal com descrição completa
- Tratamento de erros e loading states

### Animações
- Todas as transições suaves com Framer Motion
- Animations disparadas ao entrar na viewport
- Hover effects em botões e cards
- AnimatePresence para modais
- Respeita `prefers-reduced-motion`

### Responsividade
- Mobile First
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Menu hambúrguer no mobile
- Imagens responsivas
- Touch-friendly buttons

### Performance
- Next.js Image optimization
- Code splitting automático
- Lazy loading de componentes
- SWR para fetch eficiente
- Revalidation caching

### SEO
- Meta tags dinâmicas
- Open Graph (OG) tags
- Twitter Card
- Sitemap ready
- Canonical URLs
- Structured data ready

---

## 📦 Dependências

```json
{
  "react": "^18.2.0",          // Framework UI
  "next": "^14.0.0",           // Framework fullstack
  "typescript": "^5.3.0",      // Type safety
  "tailwindcss": "^3.3.0",     // CSS framework
  "framer-motion": "^10.16.0", // Animações
  "lucide-react": "^0.292.0",  // Ícones
  "swr": "^2.2.0",             // Data fetching
  "clsx": "^2.0.0"             // Classname utilities
}
```

---

## 🔐 Variáveis de Ambiente

```env
# OBRIGATÓRIAS
NEXT_PUBLIC_GITHUB_USERNAME=DataCanuto
NEXT_PUBLIC_GITHUB_TOKEN=seu_token_aqui

# OPCIONAL
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

**Segurança**: 
- Nunca commitar `.env.local`
- Token GitHub: regenerar após publicação
- Usar `.env.example` como referência

---

## 📚 Documentação

- **README.md** - Documentação completa e detalhada
- **QUICK_START.md** - Setup rápido (5 minutos)
- **COMPONENTS.md** - Documentação de todos os componentes
- **DEPLOY_VERCEL.md** - Guia completo de deploy na Vercel

---

## 🚀 Getting Started

### 1. Instalar
```bash
npm install
```

### 2. Configurar `.env.local`
```env
NEXT_PUBLIC_GITHUB_USERNAME=DataCanuto
NEXT_PUBLIC_GITHUB_TOKEN=seu_token_aqui
```

### 3. Rodar em desenvolvimento
```bash
npm run dev
# Acesse http://localhost:3000
```

### 4. Build para produção
```bash
npm run build
npm start
```

### 5. Deploy na Vercel
```bash
npm i -g vercel
vercel --prod
```

---

## 📊 Checklist de Deployment

- [ ] Imagem de perfil em `/public/img/profile.jpg`
- [ ] `.env.local` configurado
- [ ] Testar links de contato
- [ ] Verificar projetos GitHub aparecem
- [ ] Certificados configurados
- [ ] Testar responsividade no mobile
- [ ] Testar navegação e Scroll Spy
- [ ] Testar formulários
- [ ] Performance check (Lighthouse)
- [ ] Deploy na Vercel
- [ ] Configurar domínio customizado
- [ ] Analytics habilitado
- [ ] SSL certificado válido

---

## 🎯 Próximas Melhorias (Optional)

- [ ] Dark/Light Mode Toggle
- [ ] Blog seção com artigos
- [ ] Newsletter subscription
- [ ] Comentários em projetos
- [ ] CV download
- [ ] Testimonials seção
- [ ] Analytics avançado
- [ ] Multi-idioma (i18n)
- [ ] CMS integration (Sanity, Contentful)
- [ ] Performance monitoring
- [ ] Error tracking (Sentry)

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: NovaFeature'`)
4. Push para branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

---

## 📞 Suporte

- **Email**: data.canuto@gmail.com
- **WhatsApp**: +55 (99) 99588-9500
- **LinkedIn**: linkedin.com/in/pedro-canuto-408867331
- **GitHub**: github.com/DataCanuto

---

## 📄 Licença

MIT © 2024 Pedro Canuto

---

## 🙏 Agradecimentos

Desenvolvido com ❤️ usando:
- Next.js para framework robusto
- Tailwind CSS para design system
- Framer Motion para animações suaves
- GitHub API para integração de projetos

**Começar é fácil, bom desenvolvimento! 🚀**
