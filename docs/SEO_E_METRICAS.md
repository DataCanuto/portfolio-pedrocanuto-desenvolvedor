# SEO e métricas

O que o portfólio faz para ser encontrado no Google e para medir visitas, e o que precisa ser feito
fora do código.

## Endereço oficial

`https://portfolio-pedrocanuto-desenvolvedor.vercel.app`, definido uma única vez no contato
`portfolio` de `src/data/profile.ts`. Sitemap, `robots.txt`, links canônicos, Open Graph e dados
estruturados leem esse valor por meio de `siteUrl` (`src/utils/metadata.ts`). Se um domínio próprio
for comprado, basta trocar a URL desse contato.

## O que está no código

| Item | Onde | Para quê |
|---|---|---|
| Título, descrição e palavras-chave | `profile.seo` em `src/data/profile.ts`, usado em `app/layout.tsx` | Resultado no Google |
| Título e descrição por página | `layout.tsx` de cada rota, via `projectMetadata` e `pageMetadata` | Cada projeto aparece com o próprio nome e resumo (`shortDescription`) |
| Link canônico | `alternates.canonical` | Evita que o Google trate a URL de preview da Vercel como duplicata |
| Imagem de compartilhamento | `app/opengraph-image.tsx` e `cover` de cada projeto | Prévia no LinkedIn, WhatsApp e Google: a capa do projeto (quando não é SVG) ou a imagem gerada a partir do perfil |
| Verificação do Search Console | variável `GOOGLE_SITE_VERIFICATION` na Vercel | Prova ao Google que o site é seu |
| Ícone do site | `app/icon.png`, `app/apple-icon.png` | Aba do navegador e atalho no celular |
| Sitemap | `app/sitemap.ts` → `/sitemap.xml` | Lista Home, /projetos, currículo, áreas e todos os projetos com página |
| Robots | `app/robots.ts` → `/robots.txt` | Libera o site para buscadores e aponta o sitemap |
| Dados estruturados (schema.org `Person`) | `app/layout.tsx` | Nome, cargo, cidade, LinkedIn, GitHub e tecnologias, para o Google associar o site a você |
| Vercel Web Analytics | `<Analytics />` em `app/layout.tsx` | Visitas, páginas mais vistas, origem das visitas, país e dispositivo |

Tudo vem de `src/data`: ao mudar título, resumo de projeto ou contatos, o SEO acompanha.

## O que fazer fora do código

1. **Ativar o Analytics na Vercel** (uma vez): painel da Vercel → projeto
   `portfolio-pedrocanuto-desenvolvedor` → aba **Analytics** → **Enable**. É gratuito no plano Hobby,
   com limite mensal de eventos. Sem esse passo o componente não envia nada.
2. **Google Search Console** (gratuito): em https://search.google.com/search-console adicione a
   propriedade com prefixo de URL `https://portfolio-pedrocanuto-desenvolvedor.vercel.app/` e escolha
   a verificação por **tag HTML**. Copie só o valor de `content` e crie na Vercel (Settings →
   Environment Variables) a variável `GOOGLE_SITE_VERIFICATION` com esse valor; faça um novo deploy e
   clique em **Verificar**. Depois, em **Sitemaps**, envie `sitemap.xml`.
3. **Links com UTM** para saber de onde vêm as visitas: use o endereço com parâmetros no LinkedIn,
   no currículo em PDF e em candidaturas. Exemplos:
   - LinkedIn: `...vercel.app/?utm_source=linkedin&utm_medium=perfil`
   - Currículo: `...vercel.app/?utm_source=curriculo&utm_medium=pdf`
   - Candidatura: `...vercel.app/?utm_source=gupy&utm_medium=candidatura&utm_campaign=nome-da-vaga`

## Limites conhecidos

- No plano gratuito da Vercel não há eventos personalizados (por exemplo, contar cliques no
  WhatsApp). Se isso for necessário, a alternativa gratuita é o Google Analytics 4, que exige um ID
  de medição.
- Google Ads não está configurado: anúncios pagos não foram pedidos. Se um dia forem, a conversão
  pode ser medida pelo GA4.
