# 📚 Documentação de Componentes

## UI Components

### Button

Botão reutilizável com variantes e tamanhos.

```tsx
import { Button } from '@/components/UI/Button';

// Variantes: 'primary' | 'secondary' | 'outline' | 'ghost'
// Tamanhos: 'sm' | 'md' | 'lg'

<Button variant="primary" size="lg">
  Click me
</Button>

<Button variant="outline" onClick={() => {}}>
  Outline Button
</Button>
```

**Props:**
- `variant?`: 'primary' | 'secondary' | 'outline' | 'ghost' (default: 'primary')
- `size?`: 'sm' | 'md' | 'lg' (default: 'md')
- Aceita todas as props padrão de `<button>`

---

### Badge

Badge/pill de status ou tag.

```tsx
import { Badge } from '@/components/UI/Badge';

// Variantes: 'primary' | 'secondary' | 'outline'

<Badge variant="primary">Java</Badge>
<Badge variant="outline">Python</Badge>
```

**Props:**
- `variant?`: 'primary' | 'secondary' | 'outline' (default: 'primary')
- Aceita todas as props de `<span>`

---

## Page Sections

### Navbar

Header sticky com Scroll Spy dinâmico.

```tsx
import { Navbar } from '@/components/Header/Navbar';

<Navbar />
```

**Características:**
- ✅ Header fixo no topo
- ✅ Menu responsivo (hambúrguer no mobile)
- ✅ Scroll Spy automático
- ✅ Smooth scroll ao clicar

---

### Hero

Seção inicial com título, subtítulo e CTAs.

```tsx
import { Hero } from '@/components/Hero/Hero';

<Hero />
```

**Customização:**
Edite os arrays em `src/components/Hero/Hero.tsx`:
```tsx
const tags = ['Sua Tag 1', 'Sua Tag 2'];
const techs = ['Tech 1', 'Tech 2'];
```

---

### About

Seção Sobre com abas interativas e timeline.

```tsx
import { About } from '@/components/About/About';

<About />
```

**Abas Padrão:**
1. De Orquestrar Sons a Orquestrar Dados
2. O Diferencial Humano - Soft Skills
3. Meu Arsenal Técnico

**Adicionar nova aba:**
```tsx
const tabs = [
  {
    id: 'nova-aba',
    label: 'Minha Aba',
    content: 'Conteúdo da aba...'
  },
  // ... mais abas
];
```

---

### Projects

Grid de projetos consumindo GitHub API.

```tsx
import { Projects } from '@/components/Projects/ProjectsGrid';

<Projects />
```

**Funcionalidades:**
- ✅ Fetch automático de repositórios via GitHub API
- ✅ Modal com detalhes do projeto
- ✅ Links para GitHub e site live
- ✅ Loading skeleton enquanto carrega
- ✅ Tratamento de erros

**Requisitos:**
- `.env.local` com `NEXT_PUBLIC_GITHUB_USERNAME` e `NEXT_PUBLIC_GITHUB_TOKEN`

---

### CertificateGallery

Galeria de certificados ordenados por data.

```tsx
import { CertificateGallery } from '@/components/Certificates/CertificateGallery';

<CertificateGallery />
```

**Adicionar certificados:**
Edite `certificatesData` em `src/components/Certificates/CertificateGallery.tsx`:

```tsx
const certificatesData: Certificate[] = [
  {
    id: '1',
    title: 'Seu Certificado',
    issuer: 'Instituição',
    date: new Date('2024-12-31'),
    filePath: '/path/to/cert',
    imageUrl: '/img/cert.jpg',
  },
];
```

---

### Contact

Seção de contato com links de redes sociais.

```tsx
import { Contact } from '@/components/Contact/ContactSection';

<Contact />
```

**Editar contatos:**
Modifique `contactLinks` em `src/components/Contact/ContactSection.tsx`

```tsx
const contactLinks = [
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+55 (99) 99588-9500',
    href: 'https://wa.me/5599995889500',
  },
  // ... mais contatos
];
```

---

### Footer

Rodapé com links e informações de copyright.

```tsx
import { Footer } from '@/components/Footer/Footer';

<Footer />
```

---

## Custom Hooks

### useScrollSpy

Hook para detectar qual seção está visível durante scroll.

```tsx
import { useScrollSpy } from '@/hooks/useScrollSpy';

const items = [
  { id: 'hero', label: 'Início' },
  { id: 'about', label: 'Sobre' },
];

const activeId = useScrollSpy(items, 100); // offset de 100px

// Use o activeId para destacar nav items
```

---

### useGitHubProjects

Hook para buscar repositórios do GitHub.

```tsx
import { useGitHubProjects } from '@/hooks/useGitHubProjects';

const { projects, isLoading, error } = useGitHubProjects('DataCanuto');

if (isLoading) return <div>Carregando...</div>;
if (error) return <div>Erro ao carregar</div>;

return (
  <div>
    {projects.map(project => (
      <div key={project.id}>{project.name}</div>
    ))}
  </div>
);
```

---

## Utilities

### cn (classname merger)

Função para mesclar classes Tailwind com segurança.

```tsx
import { cn } from '@/utils/cn';

cn('p-4', isActive && 'bg-blue-500', null, undefined)
// Resultado: 'p-4 bg-blue-500'
```

---

### Date Formatters

```tsx
import { formatDate, formatDateShort, getMonthYear } from '@/utils/dateFormatter';

formatDate('2024-12-31');      // '31 de dezembro de 2024'
formatDateShort('2024-12-31'); // '31/12/2024'
getMonthYear('2024-12-31');    // 'dezembro de 2024'
```

---

## Types

```tsx
// GitHub
export interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

// Certificates
export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: Date;
  filePath: string;
  imageUrl: string;
}
```

---

## Animations com Framer Motion

Todos os componentes usam Framer Motion. Exemplos comuns:

```tsx
import { motion } from 'framer-motion';

// Fade In
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Conteúdo
</motion.div>

// Slide Up
<motion.div
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.2 }}
>
  Conteúdo
</motion.div>

// Hover Effect
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>

// View Animation (dispara ao entrar na viewport)
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  Dispara uma vez ao entrar
</motion.div>
```

---

## Troubleshooting

### Componente não anima
- ✅ Use `'use client'` no topo do arquivo
- ✅ Verifique se Framer Motion está instalado
- ✅ Confirme que tem `animate` com valores diferentes de `initial`

### Scroll Spy não funciona
- ✅ Confira se cada seção tem um `id` único
- ✅ Verifique se o `offset` está correto
- ✅ Confirme que tem `'use client'` no componente

### GitHub Projects vazio
- ✅ Verifique `.env.local`
- ✅ Confirme token e username
- ✅ Teste no navegador: `https://api.github.com/users/DataCanuto/repos`

---

## Para Saber Mais

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide React Icons](https://lucide.dev)
