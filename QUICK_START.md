# 🚀 Guia Rápido de Setup

## Início Rápido (5 minutos)

### 1. Instalar Dependências
```bash
npm install
```

### 2. Configurar Variáveis de Ambiente
Crie `.env.local` na raiz do projeto:
```env
NEXT_PUBLIC_GITHUB_USERNAME=DataCanuto
NEXT_PUBLIC_GITHUB_TOKEN=seu_token_aqui
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Executar em Desenvolvimento
```bash
npm run dev
```

Acesse: http://localhost:3000

## Estrutura de Componentes

### Adicionar Nova Seção

1. Crie pasta em `src/components/NovaSecao/`
2. Crie arquivo `NovaSecao.tsx`:

```tsx
'use client';

import { motion } from 'framer-motion';

export const NovaSecao = () => {
  return (
    <section id="nova-secao" className="py-20 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-dark-header-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Nova Seção
        </motion.h2>
      </div>
    </section>
  );
};
```

3. Importe em `app/page.tsx`:
```tsx
import { NovaSecao } from '@/components/NovaSecao/NovaSecao';

export default function Home() {
  return (
    <main>
      {/* ... outros componentes */}
      <NovaSecao />
      {/* ... */}
    </main>
  );
}
```

## Customização

### Alterar Cores
Edite `tailwind.config.js`:
```js
colors: {
  accent: {
    orange: '#FF8C00', // Altere aqui
  }
}
```

### Adicionar Fontes
Em `app/layout.tsx`:
```tsx
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
```

### Modificar Header
Edite `src/components/Header/Navbar.tsx`

## Comandos Úteis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia desenvolvimento |
| `npm run build` | Build para produção |
| `npm start` | Inicia servidor prod |
| `npm run lint` | Verifica código |
| `npm run format` | Formata código |
| `npm run type-check` | Verifica tipos TS |

## Variáveis de Ambiente

| Variável | Descrição | Obrigatória |
|----------|-----------|-------------|
| `NEXT_PUBLIC_GITHUB_USERNAME` | Username do GitHub | ✅ |
| `NEXT_PUBLIC_GITHUB_TOKEN` | Token da API GitHub | ✅ |
| `NEXT_PUBLIC_SITE_URL` | URL do site | ❌ |

## Performance Tips

- ✅ Use `whileInView` para lazy load animations
- ✅ Otimize imagens com Next.js Image
- ✅ Use `revalidateOnFocus: false` em SWR
- ✅ Minimize bundle com tree-shaking
- ✅ Deploy na Vercel para melhor performance

## Troubleshooting

### Build falha
```bash
rm -rf node_modules .next
npm install
npm run build
```

### TypeScript errors
```bash
npm run type-check
```

### Porta em uso
```bash
npm run dev -- -p 3001
```

## Próximos Passos

1. Adicione imagem de perfil em `/public/img/profile.jpg`
2. Configure meta tags em `app/layout.tsx`
3. Configure domínio customizado
4. Configure analytics (Vercel Analytics)
5. Teste no mobile
6. Deploy na Vercel

---

Dúvidas? Veja [README.md](./README.md) para documentação completa.
