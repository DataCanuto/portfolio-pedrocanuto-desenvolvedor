# 🚀 Guia de Deploy - Vercel

## Opção 1: Deploy via Vercel Dashboard (Recomendado)

### Passo 1: Conectar GitHub à Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign Up" ou "Sign In" com sua conta GitHub
3. Autentique seu GitHub account

### Passo 2: Importar Projeto

1. Clique em "New Project"
2. Selecione seu repositório `portfolio-digital`
3. Vercel detectará automaticamente como Next.js
4. Clique em "Import"

### Passo 3: Configurar Variáveis de Ambiente

1. Em "Environment Variables", adicione:
   ```
   NEXT_PUBLIC_GITHUB_USERNAME = DataCanuto
   NEXT_PUBLIC_GITHUB_TOKEN = seu_token_aqui
   NEXT_PUBLIC_SITE_URL = https://seu-dominio.com
   ```

2. Clique em "Deploy"

### Passo 4: Aguardar Deploy

- Vercel fará build e deploy automaticamente
- Você receberá URL temporária: `portfolio-digital-[random].vercel.app`
- Deploy leva 2-5 minutos

---

## Opção 2: Deploy via CLI

### Pré-requisitos

```bash
npm i -g vercel
```

### Deploy

```bash
# No diretório do projeto
vercel

# Siga as instruções:
# 1. Conecte sua conta Vercel
# 2. Confirme o projeto
# 3. Configure build settings (use defaults)
# 4. Confirme deploy
```

### Deploy em Produção

```bash
vercel --prod
```

---

## Opção 3: Deploy via GitHub Actions (CI/CD)

### Criar Arquivo de Workflow

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Install Vercel CLI
        run: npm i -g vercel
      
      - name: Pull Vercel config
        run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}
      
      - name: Build
        run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}
      
      - name: Deploy
        run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}
```

### Configurar Secrets no GitHub

1. Vá para seu repositório → Settings → Secrets
2. Adicione `VERCEL_TOKEN`:
   - Em vercel.com, vá a Settings → Tokens
   - Crie novo token e copie
   - No GitHub, crie secret `VERCEL_TOKEN`

---

## Configurar Domínio Customizado

### Conectar Domínio na Vercel

1. Vá para projeto no Vercel
2. Clique em "Settings" → "Domains"
3. Adicione seu domínio
4. Siga instruções para configurar DNS

### Opções de Domínio

- **Comprar na Vercel**: Mais fácil, gerenciado automaticamente
- **Domínio externo**: Configure nameservers do provedor

---

## Otimizações pós-Deploy

### 1. Configurar Analytics

```bash
# Via CLI
vercel analytics enable
```

Ou em `vercel.json`:

```json
{
  "analytics": true
}
```

### 2. Configurar Redirecionamentos

Em `vercel.json`:

```json
{
  "rewrites": [
    {
      "source": "/api/github/:path*",
      "destination": "https://api.github.com/:path*"
    }
  ],
  "redirects": [
    {
      "source": "/github",
      "destination": "https://github.com/DataCanuto",
      "permanent": false
    }
  ]
}
```

### 3. Configurar Headers de Segurança

Em `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        }
      ]
    }
  ]
}
```

---

## Monitorar Performance

### Web Vitals

Vercel mostra automaticamente Core Web Vitals:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

### Logs

```bash
# Ver logs de build
vercel logs --prod

# Ver erro recente
vercel logs [deployment-url]
```

### Error Tracking

1. Em Vercel Dashboard → "Monitoring"
2. Configure integração com Sentry ou similar

---

## Troubleshooting

### Build falha

```
Error: NEXT_PUBLIC_GITHUB_TOKEN is not defined
```

**Solução**: Verifique variáveis de ambiente em Vercel Dashboard

### Timeout no build

Aumentar timeout em `vercel.json`:

```json
{
  "buildCommand": "next build",
  "env": {
    "NODE_OPTIONS": "--max-old-space-size=4096"
  }
}
```

### GitHub API Rate Limit

Use GitHub token para aumentar limite:
- Sem token: 60 requisições/hora
- Com token: 5000 requisições/hora

Confirme que `NEXT_PUBLIC_GITHUB_TOKEN` está configurado.

---

## Variáveis de Ambiente por Ambiente

### Development

```env
NEXT_PUBLIC_GITHUB_TOKEN=seu_token_dev
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Preview (Pull Requests)

Em Vercel Dashboard → Settings → Environment Variables:
- Selecione "Preview" apenas

### Production

Em Vercel Dashboard → Settings → Environment Variables:
- Selecione "Production" apenas
- Use token com permissões limitadas

---

## Rollback

Se algo der errado após deploy:

1. Vá para projeto em Vercel
2. Clique em "Deployments"
3. Encontre deployment anterior
4. Clique em "..." → "Promote to Production"

---

## Integração com GitHub

### Proteção de Branch

1. Vá para Settings → Branches → Add Rule
2. Selecione `main`
3. Exija que "Vercel/production" passe
4. Agora PRs só mergeiam após Vercel build com sucesso

### Preview URLs

Cada PR gera URL de preview automática:
- https://portfolio-digital-pr-123.vercel.app

---

## Custos

- **Hobby (Gratuito)**: 
  - Deployments ilimitados
  - Bandwidth limitado
  - Sem Edge Middleware

- **Pro ($20/mês)**:
  - Deployments ilimitados
  - Bandwidth ilimitado
  - Edge Middleware
  - Prioridade em suporte

[Consulte pricing](https://vercel.com/pricing)

---

## Próximos Passos

1. ✅ Deploy inicial na Vercel
2. ✅ Configurar domínio customizado
3. ✅ Habilitar Analytics
4. ✅ Configurar GitHub branch protection
5. ✅ Monitorar performance
6. ✅ Adicionar integração de error tracking

---

## Dúvidas?

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/learn/basics/deploying-nextjs-app)
- [GitHub Pages Alternative](https://docs.github.com/en/pages)
