# 🎨 Galeria Digital de Paulo Canuto - Desenvolvimento

## 📋 Visão Geral do Projeto

A **Galeria Digital de Paulo Canuto** é uma landing page moderna que apresenta a obra de um artista plástico e urbanista com mais de 50 anos de experiência. O projeto cataloga **58 obras** em **5 categorias diferentes**, com integração de WhatsApp para contato direto e filtros dinâmicos.

---

## 🎯 Análise do Projeto Original

### Repositório Fonte
- **URL**: https://github.com/DataCanuto/galeria-digital-artes
- **Demo Ao Vivo**: https://datacanuto.github.io/galeria-digital-artes/
- **Tecnologia**: HTML/CSS/JavaScript puro (zero dependências)
- **Hospedagem**: GitHub Pages + Vercel

### Características Principais

#### 58 Obras Catalogadas
- **Telas (15)**: Acrílica sobre tela com temas urbanos
- **Aerografias (15)**: Técnica inovadora de pintura
- **Desenhos & Aquarelas (10)**: Série Mergulhos e variações
- **Dobraduras em Fio de Cobre (10)**: Esculturas miniaturizadas
- **Camisetas (8)**: Arte vestível e design pop

#### Performance & Otimização
- **Lighthouse Score**: 95+
- **Tempo de Carregamento**: <2s (4G)
- **Tamanho Total**: ~5MB
- **Imagens Otimizadas**: JPEG/PNG comprimidas

#### Funcionalidades
- ✅ Filtros dinâmicos por categoria
- ✅ Modal interativo para detalhes
- ✅ Integração WhatsApp com mensagens personalizadas
- ✅ Responsivo (Desktop, Tablet, Mobile)
- ✅ Service Worker para offline
- ✅ Progressive Web App (PWA)

---

## 🛠️ Implementação em Next.js

### Arquitetura Técnica

```
app/landing-pages/galeria-digital/
├── page.tsx                          # Página principal
└── (componentes)

src/components/Projects/GaleriaDigital/
├── index.ts                          # Exportações
├── galeriaData.ts                    # Base de dados das obras
├── GaleriaHero.tsx                   # Seção hero
├── GaleriaCategoryFilter.tsx          # Filtros de categoria
├── GaleriaGallery.tsx                # Grid de obras
├── GaleriaArtwork.tsx                # Card individual
└── GaleriaAbout.tsx                  # Sobre o artista

src/types/
└── galeryArts.ts                     # Tipagens TypeScript
```

### Stack Tecnológico
- **Framework**: Next.js 14+
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Comunicação**: WhatsApp API

---

## 📐 Estrutura de Dados

### Interface: Artwork
```typescript
{
  id: number;           // Identificador único
  title: string;        // Título da obra
  category: ArtCategory;// Telas, Aerografias, etc.
  technique: string;    // Técnica utilizada
  year: number;         // Ano de criação
  price: number;        // Preço em R$
  image: string;        // Caminho da imagem
  status: 'disponível' | 'vendido';
}
```

### Dados Inclusos
- **Total**: 58 obras
- **Preços**: R$ 250 a R$ 16.000
- **Anos**: 1988 a 2025
- **Status**: Mix de disponível e vendido

---

## 🎨 Componentes Criados

### 1. **GaleriaHero**
- Seção principal com apresentação
- Estatísticas (50+ anos, 58 obras, 5 categorias)
- CTA para exploração e WhatsApp

### 2. **GaleriaCategoryFilter**
- Filtro sticky/fixed
- Botões de categoria com contagem
- Animações ao clicar
- Estado ativo com destaque

### 3. **GaleriaGallery**
- Grid responsivo (1-4 colunas)
- Animações staggered
- Tratamento de lista vazia

### 4. **GaleriaArtwork**
- Card individual com:
  - Imagem com hover zoom
  - Badge de "Vendido"
  - Botão favorito (❤️)
  - Botão WhatsApp rápido
  - Modal expansível para detalhes completos

### 5. **GaleriaAbout**
- Seção sobre o artista
- Localização e contato
- Links para WhatsApp e Instagram
- Informações de 50+ anos de arte

---

## 🔌 Integrações

### WhatsApp Integration
Cada obra tem um link WhatsApp pré-formatado que envia:

```
Olá Paulo, tenho interesse na obra:

*TÍTULO DA OBRA*
Técnica: ACRÍLICA SOBRE TELA
Ano: 2024
Valor: R$ 7.500,00

Pode me disponibilizar mais informações?
```

**Número**: +55 71 99958-8950

---

## 📱 Responsividade

### Breakpoints
- **Mobile**: 1 coluna (sm:2)
- **Tablet**: 2 colunas (md:3)
- **Desktop**: 4 colunas (xl:4)
- **Filtros**: Flex wrap com gap

---

## ⚡ Performance & Otimizações

1. **Lazy Loading**: Imagens carregadas sob demanda
2. **Image Optimization**: Next.js Image component pronto
3. **CSS-in-JS**: Tailwind para bundle otimizado
4. **Framer Motion**: Animações performáticas com GPU
5. **Modal Lazy**: Conteúdo expandido sob demanda

---

## 🎯 UX/UI Decisões

### Design System
- **Cores**: Dark theme com accent orange
- **Tipografia**: Bold para títulos, Regular para corpo
- **Espaçamento**: Escala 4px consistente
- **Radius**: Bordas arredondadas moderadas (lg: 8px)

### Microcópias
- "Explorar Galeria" → Scroll suave
- "💬 Contato via WhatsApp" → Ação clara
- Status "VENDIDO" → Overlay com feedback

### Microinterações
- Hover zoom em imagens
- Scale em botões
- Stagger animations em grid
- Smooth scrolling

---

## 📊 Métricas do Projeto

| Métrica | Valor |
|---------|-------|
| Obras Catalogadas | 58 |
| Categorias | 5 |
| Preço Mínimo | R$ 150,00 |
| Preço Máximo | R$ 16.000,00 |
| Lighhouse Score | 95+ |
| Tempo de Load | <2s |

---

## 🚀 Como Acessar

### Localmente (Desenvolvimento)
```bash
# Terminal 1: Iniciar servidor
npm run dev

# Acessar:
http://localhost:3000/landing-pages/galeria-digital
```

### Ambiente de Produção
```
https://seudominio.com/landing-pages/galeria-digital
```

---

## 🎓 Conceitos Implementados

### Frontend
- ✅ **React Hooks**: useState para filtros
- ✅ **Component Composition**: Componentes reutilizáveis
- ✅ **TypeScript**: Tipagem forte de dados
- ✅ **Framer Motion**: Animações fluidas
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **URL Sharing**: Links com mensagens personalizadas

### UX/Design
- ✅ **Information Hierarchy**: Prioridade visual clara
- ✅ **Call-to-Action**: Múltiplas CTAs estratégicas
- ✅ **Accessibility**: Semântica HTML apropriada
- ✅ **Performance**: Otimizações para mobile

---

## 📈 Próximas Evoluções (Ideias)

1. **Checkout Integrado**: Mercado Pago para vendas
2. **Carrinho de Favoritos**: Salvar obras preferidas
3. **Galerias por Tema**: Agrupar por períodos
4. **QR Codes**: Para exposições físicas
5. **Analytics**: Rastrear visitantes e obras mais vistas
6. **Comentários**: Feedback dos visitantes

---

## 📚 Recursos Adicionais

### Repositório Original
- **GitHub**: https://github.com/DataCanuto/galeria-digital-artes
- **Demo**: https://datacanuto.github.io/galeria-digital-artes/
- **Commit Latest**: refactor: limpar repositório para produção

### Contato do Artista
- **WhatsApp**: +55 71 99958-8950
- **Email**: contato@paulocanuto.com
- **Instagram**: @paulocanuto

---

## 🏆 Destaques

- ✨ **58 Obras Catalogadas**: Diversidade artística
- 🎯 **Zero Dependências Original**: Inspiração para performance
- 💬 **Integração WhatsApp**: Contacto direto e fluido
- 📱 **Totalmente Responsivo**: Experiência consistente
- 🎨 **Design Moderno**: Dark theme com accent orange
- ⚡ **Performance Otimizada**: Carregamento rápido

---

**Desenvolvido com ❤️ para portfolio-digital**

*Última atualização: 30 de maio de 2026*
