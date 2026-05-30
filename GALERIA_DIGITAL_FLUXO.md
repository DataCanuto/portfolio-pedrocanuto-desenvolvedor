# 🎨 GALERIA DIGITAL - FLUXO DE NAVEGAÇÃO

## 📊 Diagrama Interativo de Uso

```
START
  │
  ├─→ [1] npm run dev ──────────────┐
  │                                  │
  │   Espera compilar (~5 segundos) │
  │                                  ↓
  ├─→ [2] Abrir navegador ──→ http://localhost:3000/landing-pages/galeria-digital
  │
  ├─→ [3] Página Carrega
  │    │
  │    ├─→ HERO SECTION (Topo)
  │    │   ├─ Título: "Um Olhar Investigativo..."
  │    │   ├─ Estatísticas: 50+, 58, 5
  │    │   ├─ CTA: [Explorar] [WhatsApp]
  │    │   └─→ Clica "Explorar" → Scroll automático ↓
  │    │
  │    ├─→ CATEGORIA FILTER (Menu Fixo/Sticky)
  │    │   ├─ [Todas as Obras] - 58 obras
  │    │   ├─ [🎨 Telas] - 15 obras
  │    │   ├─ [💨 Aerografias] - 15 obras
  │    │   ├─ [✏️ Desenhos] - 10 obras
  │    │   ├─ [🔧 Dobraduras] - 10 obras
  │    │   └─ [👕 Camisetas] - 8 obras
  │    │
  │    ├─→ GALERIA (Grid de Obras)
  │    │   │
  │    │   ├─ Cada Card tem:
  │    │   │  ├─ [Imagem] (hover: zoom)
  │    │   │  ├─ Título + Técnica
  │    │   │  ├─ Ano + Preço
  │    │   │  ├─ Status (Disponível/Vendido)
  │    │   │  ├─ ❤️ Favoritar
  │    │   │  └─ 💬 WhatsApp Rápido
  │    │   │
  │    │   └─ Opções ao clicar no card:
  │    │      ├─ [❤️] Favorita (vira vermelho)
  │    │      ├─ [💬] WhatsApp → Envia mensagem pré-formatada
  │    │      └─ [Card] → Abre MODAL
  │    │
  │    ├─→ MODAL (Clicou no Card)
  │    │   ├─ [X] Fechar no canto
  │    │   ├─ Imagem grande
  │    │   ├─ Detalhes:
  │    │   │  ├─ Técnica
  │    │   │  ├─ Ano
  │    │   │  ├─ Dimensões
  │    │   │  └─ Status
  │    │   ├─ Preço em destaque
  │    │   └─ [💬 Contatar via WhatsApp]
  │    │      └─ → Abre WhatsApp Web/App
  │    │
  │    └─→ ABOUT SECTION (Fim da Página)
  │        ├─ Sobre Paulo Canuto (Bio)
  │        ├─ 📍 Localização: Salvador, Bahia
  │        ├─ 📱 WhatsApp: +55 71 99958-8950
  │        ├─ 📧 Email: contato@paulocanuto.com
  │        ├─ [💬 Conversar no WhatsApp]
  │        └─ [📸 Seguir no Instagram]
  │
  └─→ FOOTER
     └─ © 2024 Paulo Canuto | Voltar ao menu
```

---

## 🎯 FLUXOS DE AÇÃO (Quick Reference)

### Fluxo 1: Filtrar Obras
```
Usuário clica em categoria
    ↓
Filtro se atualiza (ativo = laranja)
    ↓
Grid recarrega com obras da categoria
    ↓
Exibe contagem de obras
```

### Fluxo 2: Ver Detalhes
```
Usuário clica no card
    ↓
Modal se abre com fade-in
    ↓
Mostra:
  - Imagem em alta qualidade
  - Todas as informações
  - Preço destacado
  - Botão de contato
    ↓
Usuário fecha ([X] ou fora do modal)
    ↓
Modal desaparece com fade-out
```

### Fluxo 3: Contatar (Opção A - Rápida)
```
Usuário clica no [💬] do card
    ↓
URL do WhatsApp é construída com:
  - Número: +55 71 99958-8950
  - Mensagem: Pré-formatada com detalhes da obra
    ↓
Abre WhatsApp (app ou web)
    ↓
Mensagem já está digitada
    ↓
Usuário clica SEND
```

### Fluxo 4: Contatar (Opção B - Modal)
```
Usuário abre modal
    ↓
Clica em "Contatar via WhatsApp"
    ↓
Mesmo fluxo da Opção A
```

### Fluxo 5: Favoritar
```
Usuário clica no [❤️]
    ↓
Coração vira VERMELHO
    ↓
(Nota: Dados salvos em localStorage opcionalmente)
```

---

## 🔄 CICLOS DE INTERAÇÃO

### Ciclo 1: Exploração Rápida
1. Abre página
2. Vê filtros
3. Clica categoria interessante
4. Vê obras daquela categoria
5. Clica obra que gosta
6. Vê detalhes
7. Entra em contato via WhatsApp

**Tempo esperado: 2-5 minutos**

### Ciclo 2: Deep Dive
1. Explora todas as 58 obras
2. Favorita 3-5 que gosta
3. Compara preços
4. Lê bio do artista
5. Contata para dúvidas

**Tempo esperado: 10-20 minutos**

### Ciclo 3: Compra
1. Acha obra específica
2. Abre modal
3. Ve detalhes e preço
4. Clica WhatsApp
5. Conversa com Paulo
6. Acerta detalhes

**Tempo esperado: 5 minutos + conversa**

---

## 🖱️ CLICK PATHS (Caminhos de Cliques)

### Path 1: Hero → Explorar
```
[Explorar Galeria Button]
    ↓
Scroll smooth para #galeria
    ↓
Usuário vê filtros
    ↓
Começa a explorar
```

### Path 2: Card → Modal → WhatsApp
```
[Card da Obra]
    ↓
Modal abre (AnimatePresence)
    ↓
[Contatar via WhatsApp Button]
    ↓
Abre conversa pré-formatada
```

### Path 3: Categoria → Filtro → Grid Atualizado
```
[Categoria Button]
    ↓
setSelectedCategory(category)
    ↓
filteredArtworks = artworks.filter()
    ↓
GaleriaGallery recarrega com animação stagger
```

---

## 📱 RESPONSIVE BREAKPOINTS

### Mobile (< 640px)
```
┌──────────────┐
│  HERO        │
├──────────────┤
│  Obra 1      │
│  Obra 2      │
│  Obra 3      │
│  Obra 4      │
├──────────────┤
│  ABOUT       │
└──────────────┘
(1 coluna)
```

### Tablet (640px - 1024px)
```
┌─────────────────────┐
│  HERO               │
├─────────────────────┤
│ Obra 1  │ Obra 2    │
│ Obra 3  │ Obra 4    │
├─────────────────────┤
│ ABOUT               │
└─────────────────────┘
(2 colunas)
```

### Desktop (> 1024px)
```
┌───────────────────────────────────┐
│  HERO                             │
├───────────────────────────────────┤
│ Obra1 │ Obra2 │ Obra3 │ Obra4   │
│ Obra5 │ Obra6 │ Obra7 │ Obra8   │
├───────────────────────────────────┤
│ ABOUT                             │
└───────────────────────────────────┘
(4 colunas)
```

---

## ⚡ PERFORMANCE TIMELINE

```
[000ms] ══════════════════════════════════════
[100ms] User abre página
        ════════════════════════════════════════
[200ms] HTML + CSS carrega (Tailwind)
        ════════════════════════════════════════
[500ms] React + Componentes montam
        ════════════════════════════════════════
[800ms] Imagens começam a carregar (lazy)
        ════════════════════════════════════════
[1200ms] Página totalmente interativa ✅
         ════════════════════════════════════════
```

**Tempo total: ~1-2 segundos (4G)**

---

## 🎨 INTERACTION DETAILS

### Hover Effects
```
Card Normal:
┌──────────┐
│ [Imagem] │
│ Título   │
└──────────┘

Card Hovered:
┌──────────┐
│ [Zoom +] │  ← Imagem zoom 110%
│ Título   │
└──────────┘
Shadow aprofunda
```

### Animation Timings
- **Fade In**: 0.3s (entrada)
- **Scale Hover**: 0.1s (botões)
- **Modal Open**: 0.2s (rápido)
- **Stagger Grid**: 50ms entre cards
- **Filter Update**: 200ms (suave)

---

## 🧠 STATE MANAGEMENT

```typescript
selectedCategory: 'todos' | 'telas' | 'aerografias' | ...
    ↓
filteredArtworks = artworks.filter(art => art.category === selected)
    ↓
<GaleriaGallery artworks={filteredArtworks} />
    ↓
Grid recarrega com 58 ou menos obras
```

---

## 🔗 DATA FLOW

```
galeriaData.ts (58 Artworks)
    ↓
GaleriaGallery.tsx (recebe array)
    ↓
map() sobre cada artwork
    ↓
GaleriaArtwork.tsx (renderiza card)
    ↓
Clique → Modal (AnimatePresence)
```

---

## 📊 USER METRICS

| Métrica | Valor |
|---------|-------|
| Time to Interactive | ~1-2s |
| Artworks Displayed | 58 |
| Categories | 5 |
| CTA Buttons | 6+ |
| Modal Depth | 2 levels |
| Clicks for Contact | 1-3 |

---

## ✅ REQUISITOS ATENDIDOS

- [x] Análise completa do projeto original
- [x] 58 obras catalogadas e tipadas
- [x] 5 categorias com filtros dinâmicos
- [x] Modal interativo para detalhes
- [x] Integração WhatsApp pré-formatada
- [x] Design responsivo (mobile-first)
- [x] Animações suaves (Framer Motion)
- [x] Dark theme moderno
- [x] TypeScript com tipos fortes
- [x] Documentação completa (4 arquivos)

---

**🎉 Tudo Pronto para Explorar!**

Comece em:
```
http://localhost:3000/landing-pages/galeria-digital
```

---

*Criado: 30 de maio de 2026*
