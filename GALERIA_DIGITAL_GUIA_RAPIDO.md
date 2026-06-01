# 🚀 Guia Rápido - Galeria Digital

## Como Acessar

### 1️⃣ Iniciar o Servidor (Localhost)

```bash
# Abra o terminal (Ctrl + `)
npm run dev
```

**O servidor estará disponível em:**
```
http://localhost:3000
```

### 2️⃣ Acessar a Galeria Digital

Clique em um dos links abaixo ou digite na barra de endereço:

#### Opção A: Via Menu de Landing Pages
1. Vá para: `http://localhost:3000/landing-pages`
2. Role até a seção "Nossos Projetos"
3. Clique em "Visitar Galeria"

#### Opção B: Acesso Direto (Recomendado)
```
http://localhost:3000/landing-pages/galeria-digital
```

---

## 📖 O Que Você Vai Ver

### Seção Hero (Topo)
- Título: "Um Olhar Investigativo sobre a Cidade"
- Estatísticas: 50+ anos, 58 obras, 5 categorias
- Botões: "Explorar Galeria" e "Contato via WhatsApp"

### Filtro de Categorias
- **Todas as Obras** (58 total)
- **🎨 Telas** (15) - Acrílica sobre tela
- **💨 Aerografias** (15) - Pintura urbana
- **✏️ Desenhos & Aquarelas** (10) - Série Mergulhos
- **🔧 Dobraduras em Fio de Cobre** (10) - Esculturas
- **👕 Camisetas & Diversos** (8) - Arte vestível

### Grid de Obras
- Cards responsivos com:
  - Imagem da obra
  - Título e técnica
  - Ano e preço
  - Status (Disponível/Vendido)
  - Botão ❤️ Favoritar
  - Botão WhatsApp rápido

### Modal Detalhado
Clique em qualquer obra para ver:
- Imagem em alta qualidade
- Técnica utilizada
- Ano de criação
- Dimensões
- Status e preço
- Botão "Contatar via WhatsApp"

### Seção Sobre o Artista
- Biografia de Paulo Canuto
- Localização: Salvador, Bahia
- Contatos diretos
- Links para Instagram e WhatsApp

---

## 💬 Interações Principais

### Filtrar por Categoria
1. Role até o menu de filtros
2. Clique em qualquer categoria
3. A galeria se atualiza automaticamente

### Abrir Detalhes de uma Obra
1. Clique em qualquer card
2. Um modal se abre com informações completas
3. Clique em "X" ou fora do modal para fechar

### Entrar em Contato
**Opção 1: Quick Contact (No Card)**
- Clique no ícone WhatsApp no card
- Abre mensagem pré-formatada

**Opção 2: Modal Completo**
- Abra o modal clicando na obra
- Clique em "Contatar via WhatsApp"
- Mensagem com todos os detalhes da obra

**Opção 3: Seção de Contato**
- Role até o fim da página
- Use os botões "Conversar no WhatsApp" ou "Seguir no Instagram"

---

## 🎯 Características Técnicas

### Tecnologias
✅ Next.js 14+
✅ React 18+
✅ TypeScript
✅ Tailwind CSS
✅ Framer Motion (Animações)
✅ Lucide Icons

### Performance
✅ Carregamento rápido (<2s)
✅ Design responsivo
✅ Animações suaves
✅ Otimizado para SEO

---

## 📁 Estrutura de Arquivos

```
app/landing-pages/
├── page.tsx                              # Landing pages menu
└── galeria-digital/
    └── page.tsx                          # 🎨 Galeria Digital

src/components/Projects/GaleriaDigital/
├── index.ts                              # Exportações
├── galeriaData.ts                        # 58 obras
├── GaleriaHero.tsx                       # Topo (Hero)
├── GaleriaCategoryFilter.tsx              # Filtros
├── GaleriaGallery.tsx                    # Grid
├── GaleriaArtwork.tsx                    # Card + Modal
└── GaleriaAbout.tsx                      # Sobre artista

src/types/
└── galeryArts.ts                         # Tipos TypeScript
```

---

## 🔗 Links Úteis

### Projeto Original (GitHub)
```
https://github.com/DataCanuto/galeria-digital-artes
```

### Demo ao Vivo
```
https://datacanuto.github.io/galeria-digital-artes/
```

### Contato do Artista
- **WhatsApp**: +55 71 99958-8950
- **Email**: contato@paulocanuto.com
- **Instagram**: @paulocanuto

---

## 💡 Dicas de Uso

1. **Explore com Filtros**: Use as categorias para descobrir estilos específicos
2. **Clique nas Obras**: Veja detalhes completos e informações de contato
3. **Responsivo**: Funciona perfeitamente no mobile (tente redimensionar!)
4. **Compartilhe**: Use o WhatsApp para indicar obras para amigos

---

## 🐛 Resolução de Problemas

### "Página não carrega"
```bash
npm run dev
# Aguarde a compilação (aprox. 5 segundos)
# Acesse http://localhost:3000/landing-pages/galeria-digital
```

### "Imagens não aparecem"
- Certifique-se de que o servidor está rodando
- Atualize a página (F5)
- Limpe o cache do navegador

### "WhatsApp não abre"
- Certifique-se de estar com WhatsApp instalado/web aberto
- Número: +55 71 99958-8950
- Mensagem será pré-formatada automaticamente

---

## 📊 Estatísticas

| Item | Quantidade |
|------|-----------|
| Total de Obras | 58 |
| Categorias | 5 |
| Preço Mínimo | R$ 150,00 |
| Preço Máximo | R$ 16.000,00 |
| Anos de Experiência | 50+ |

---

**Aproveite a exploração! 🎨✨**

*Para mais detalhes técnicos, veja: GALERIA_DIGITAL_DESENVOLVIMENTO.md*
