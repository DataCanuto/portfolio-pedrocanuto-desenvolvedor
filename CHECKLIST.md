# ✅ TODO CHECKLIST - Pós Instalação

## 🎯 Essencial (Fazer Primeiro)

- [ ] **Copiar `.env.local`**
  ```bash
  cp .env.example .env.local
  ```

- [ ] **Instalar dependências**
  ```bash
  npm install
  ```

- [ ] **Rodar em desenvolvimento**
  ```bash
  npm run dev
  ```

- [ ] **Confirmar que acessa** `http://localhost:3000`

---

## 🖼️ Conteúdo (Customizar)

### Imagens
- [ ] Adicionar foto de perfil: `/public/img/profile.jpg` (recomendado: 400x400px)
- [ ] Adicionar hero background (opcional): `/public/img/hero-bg.jpg`
- [ ] Adicionar ícone do site: `/public/favicon.ico`

### Seção Hero (`src/components/Hero/Hero.tsx`)
- [ ] Alterar nome (está "Pedro Canuto")
- [ ] Alterar subtítulo
- [ ] Customizar tags (Sistemas de Cadastro, etc)
- [ ] Customizar tecnologias (Java, Python, SQL, Power BI)

### Seção Sobre (`src/components/About/About.tsx`)
- [ ] Alterar conteúdo das 3 abas
- [ ] Adicionar/remover formações na timeline
- [ ] Alterar datas de formação

### Seção Projetos (`src/components/Projects/ProjectsGrid.tsx`)
- [ ] Confirmar que `.env.local` está com `NEXT_PUBLIC_GITHUB_TOKEN`
- [ ] Testar que projetos aparecem
- [ ] Se não aparecer, debugar na aba Network do navegador

### Seção Certificados (`src/components/Certificates/CertificateGallery.tsx`)
- [ ] Adicionar seus certificados no array `certificatesData`
- [ ] Ou deixar como está para mockup

### Landing Pages
- [x] **Galeria Digital de Paulo Canuto** ✨
  - [x] 58 obras catalogadas em 5 categorias
  - [x] Filtros dinâmicos
  - [x] Modal interativo para detalhes
  - [x] Integração WhatsApp
  - [x] Responsivo (mobile/tablet/desktop)
  - 🔗 Acesso: `http://localhost:3000/landing-pages/galeria-digital`
  - 📖 Docs: `GALERIA_DIGITAL_ACESSO.md`

### Seção Contato (`src/components/Contact/ContactSection.tsx`)
- [ ] Alterar número WhatsApp (+55 99 99588-9500)
- [ ] Alterar email (data.canuto@gmail.com)
- [ ] Alterar LinkedIn (/in/pedro-canuto-408867331)
- [ ] Alterar GitHub (/DataCanuto)

---

## 🎨 Design (Opcional)

### Cores (`tailwind.config.js`)
- [ ] Se não gostar de Slate-950, alterar em `colors.dark.bg`
- [ ] Se não gostar de DarkOrange, alterar em `colors.accent.orange`
- [ ] Executar `npm run dev` novamente

### Tipografia (`src/styles/globals.css`)
- [ ] Customizar fonte (atualmente Inter)
- [ ] Customizar tamanhos de fonte

### Animações (`src/components/...`)
- [ ] Remover Framer Motion se preferir CSS puro
- [ ] Customizar duração das animações

---

## 🚀 Antes de Deploy

### Performance
- [ ] Rodar `npm run build` com sucesso
- [ ] Verificar build size: `npm run build | grep "page"`)
- [ ] Testar no mobile (Chrome DevTools → Device Toolbar)
- [ ] Testar no desktop

### Qualidade
- [ ] Executar `npm run lint`
- [ ] Executar `npm run type-check`
- [ ] Executar `npm run format`

### Links
- [ ] Testar todos os links (WhatsApp, Email, LinkedIn, GitHub)
- [ ] Testar Scroll Spy (clicar em nav items e rolar)
- [ ] Testar modal dos projetos

### SEO
- [ ] Alterar `title` e `description` em `app/layout.tsx`
- [ ] Adicionar Open Graph image (opcional)
- [ ] Confirmar meta tags em DevTools

---

## 📱 Testing

### Desktop
- [ ] Testar em Chrome
- [ ] Testar em Firefox
- [ ] Testar em Safari

### Mobile
- [ ] Testar em iPhone (iOS)
- [ ] Testar em Android
- [ ] Testar navegação do menu hambúrguer
- [ ] Testar Scroll Spy no mobile

### Acessibilidade
- [ ] Testar navegação com Tab
- [ ] Testar com leitor de tela (NVDA, JAWS)
- [ ] Rodar Lighthouse Accessibility audit
- [ ] Confirmar contraste de cores (AAA)

---

## 🌐 Deploy na Vercel

- [ ] Criar conta em [vercel.com](https://vercel.com) (com GitHub)
- [ ] Conectar repositório ao Vercel
- [ ] Configurar variáveis de ambiente:
  - `NEXT_PUBLIC_GITHUB_USERNAME`
  - `NEXT_PUBLIC_GITHUB_TOKEN`
- [ ] Executar primeiro deploy
- [ ] Confirmar que site está ao vivo
- [ ] Testar todos os links em produção

### Domínio Customizado (Opcional)
- [ ] Comprar domínio (ou usar existente)
- [ ] Configurar em Vercel (Settings → Domains)
- [ ] Validar DNS
- [ ] Confirmar acesso pelo novo domínio

---

## 📊 Analytics & Monitoring (Opcional)

- [ ] Habilitar Vercel Analytics
- [ ] Configurar Google Analytics (GA4)
- [ ] Configurar error tracking (Sentry)
- [ ] Configurar uptime monitoring
- [ ] Configurar performance monitoring

---

## 🔒 Segurança

- [ ] Confirmar `.env.local` não está no Git
- [ ] Confirmar `.gitignore` inclui `.env.local`
- [ ] Regenerar GitHub Token se publicar código com token
- [ ] Ativar 2FA no GitHub
- [ ] Ativar branch protection em main

---

## 📝 Documentação

- [ ] Ler `README.md` completamente
- [ ] Ler `QUICK_START.md` para futuras referências
- [ ] Ler `COMPONENTS.md` para entender componentes
- [ ] Customizar `README.md` com suas informações
- [ ] Adicionar instruções específicas do seu projeto

---

## 🎉 Pós-Publicação

- [ ] Compartilhar portfólio com recrutadores
- [ ] Compartilhar no LinkedIn
- [ ] Adicionar link no GitHub profile
- [ ] Monitorar visitas e conversões
- [ ] Coletar feedback

---

## 💡 Dicas

✅ Usar `npm run dev` regularmente enquanto desenvolve
✅ Fazer commits pequenos e frequentes
✅ Manter `.env.local` como privado (nunca commitar)
✅ Testar responsividade ao modificar componentes
✅ Usar branches para features novas
✅ Revisar performance regularmente

---

## 🚨 Troubleshooting Rápido

| Problema | Solução |
|----------|---------|
| `npm install` falha | `rm -rf node_modules package-lock.json && npm install` |
| Porta 3000 em uso | `npm run dev -- -p 3001` |
| Estilos não aplicam | `rm -rf .next && npm run dev` |
| Projetos não aparecem | Confirmar `.env.local` e token GitHub |
| Build falha | `npm run type-check` para ver erros TS |
| Animações travadas | Limpar cache do navegador |

---

## 📞 Suporte

- Documentação: Veja `README.md`, `QUICK_START.md`, `COMPONENTS.md`
- Deploy: Veja `DEPLOY_VERCEL.md`
- Issues: Verifique as abas do GitHub
- Contato: Adicione seu email em `src/components/Contact`

---

**Bom desenvolvimento! 🚀**

Próximo passo: Execute `npm install && npm run dev` 🎯
