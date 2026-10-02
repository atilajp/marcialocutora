# REFERÊNCIA DE ANÁLISE — Site "Márcia Locutora" (V2)

> ## ⛔ DIRETIVA DE ESCOPO — LER ANTES DE QUALQUER ALTERAÇÃO
>
> **Todo trabalho realizado neste repositório DEVE ficar restrito à pasta `V2/`.**
>
> - **NÃO alterar, criar, mover ou apagar nenhum arquivo FORA de `V2/`** — nem `index.html` da raiz,
>   nem `Images/`, nem `CNAME`, nem `.gitignore`, nem `.vs/`, nem arquivos de configuração da raiz.
> - **Motivo:** o que está fora da `V2/` é o **site em produção**. Qualquer modificação ali é publicada
>   diretamente para os usuários reais e pode derrubar ou alterar o site no ar.
> - A `V2/` é a área de desenvolvimento/estágio. Só nela se pode testar, renomear, refatorar e apagar.
> - **Ferramentas que devem ser evitadas fora de `V2/`:** `edit`, `write`, `delete`, `mv`, `git add`,
>   `git commit` de arquivos fora da pasta. Leitura (`read`, `grep`, `glob`) é permitida em qualquer lugar.
> - Se a tarefa exigir tocar algo fora da `V2/`, **parar e perguntar ao usuário** antes de prosseguir.
>
> Esta diretiva vale para todos os agentes que lerem este documento ou qualquer outro dentro de `V2/`.

> **Para agentes de IA / copilotos:** este documento é a análise completa e consolidada da pasta `V2/`.
> Consulte-o antes de executar qualquer nova auditoria. **Não repita a análise completa do zero** —
> use os comandos de verificação da seção 11 para confirmar apenas o que mudou desde a data abaixo.
>
> **Data da análise:** 02/10/2026
> **Estado do repositório na data:** working tree suja (renomes de CSS não commitados) — ver seção 1.
> **Nenhum arquivo foi alterado por esta análise.**
> **Atualizações desde a análise:** `css/files.zip` removido do disco (02/10/2026); diretiva de escopo
> adicionada a este documento e ao `README.md` (02/10/2026); **links dos CSS corrigidos nos 32 HTML**
> (`tokens.css`→`token.css`, `componentes.css`→`components.css`, `>>` do FAQ) — seções 3.1 e 3.5 resolvidas (02/10/2026);
> **mockup de design criado** em `docs/mockup/` (`mockup-home.jpg` para aprovação + `mockup-home.html` como fonte
> acessível + `README.md` com guia de implementação).

---

## 1. Inventário

| Grupo | Arquivos |
|---|---|
| HTML | **32** páginas `index.html` (raiz + 31 subpáginas) |
| CSS raiz | `V2/style.css` (608 B) |
| CSS `V2/css/` | `base.css`, `components.css`, `components_.css`, `layout.css`, `layout_.css`, `token.css`, `utilities.css` |
| JS | `V2/script.js` (261 B) |
| SEO técnico | `V2/robots.txt`, `V2/sitemap.xml` |
| Docs | `V2/README.md`, `V2/docs/Análise editorial - Márcia Locutora.md`, `V2/docs/calendario_editorial_marcia_locutora.txt` (353.787 B) |
| GitHub | `.github/prompts/seo-content.prompt.md` (507 linhas), `.github/agents/copilot-instructions.md` (**vazio, 0 B**) |

**Únicos assets referenciados pelos 32 HTML** (linhas 9–12 do `<head>` + `<script>` final):
`css/base.css`, `css/componentes.css`, `css/layout.css`, `css/tokens.css`, `script.js`.

**Assets NUNCA referenciados:** `style.css`, `utilities.css`, `components.css`, `components_.css`, `layout_.css`.
*(O `css/files.zip` também nunca foi referenciado e foi removido do disco em 02/10/2026 — ver seção 4.2.)*

---

## 2. Mapa do site (32 páginas)

Todas as páginas: `lang="pt-BR"`, charset, viewport, **1 único `<h1>`**, `<base href="/V2/">` (linha 4), mesmos 4 links CSS, `script.js` com `defer`. **Header e footer são idênticos byte a byte em todos os 32 arquivos** (verificado por hash).

### Principais (11)

| Arquivo | `<title>` | chars |
|---|---|---|
| `index.html` | Locutora profissional em João Pessoa \| Márcia Locutora | 56 |
| `locucao/index.html` | Locução profissional \| Márcia Locutora | 41 |
| `voz/index.html` | Vozes e estilos de locução \| Márcia Locutora | 47 |
| `servicos/index.html` | Serviços complementares \| Márcia Locutora | 43 |
| `sobre/index.html` | Sobre Márcia Domingos \| Locutora profissional | 46 |
| `contato/index.html` | Contato \| Márcia Locutora | 26 |
| `faq/index.html` | Perguntas frequentes sobre locução profissional \| Márcia Locutora | 68 ⚠️ |
| `portfolio/index.html` | Portfólio \| Márcia Locutora | 29 |
| `depoimentos/index.html` | Depoimentos \| Márcia Locutora | 30 |
| `banco-de-talentos/index.html` | Banco de talentos \| Márcia Locutora | 36 |
| `blog/index.html` | Blog \| Voz, locução e produção audiovisual \| Márcia Locutora | 65 ⚠️ |

### Locução (7 filhas)
`publicitaria` (55), `institucional` (55), `narracao` (**79** ⚠️), `elearning` (57), `audiolivro` (57), `documentario` (62), `sotaque-paraibano` (49).

### Vozes (5 filhas)
`voz-feminina` (58), `voz-natural` (52), `voz-jovem` (52), `voz-infantil` (**67** ⚠️), `voz-caricata` (54).

### Serviços (4 filhas)
`roteiro` (51), `texto` (58), `spot` (53), `edicao-video` (**70** ⚠️).

### Blog (5 posts)
`como-escolher-uma-voz` (**74** ⚠️), `quanto-custa-locucao` (64 ⚠️), `locucao-institucional` (57), `locucao-publicitaria` (57), `como-funciona-gravacao` (66 ⚠️).

**Inexistente:** `404.html`, política de privacidade/cookies, página de campanha.

---

## 3. 🔴 Problemas críticos (com arquivo:linha)

### 3.1 — Dois CSS dão 404 em 100% das páginas ✅ RESOLVIDO (02/10/2026)
- **Status atual:** os 32 HTML agora referenciam `css/token.css` e `css/components.css` (corrigido em commit posterior à análise). Nenhuma referência antiga permanece.
- **Resta (prioridade 7):** `token.css` continua sendo o **último** `<link>`, mas `token.css:3` declara `@layer reset, base, layout, componentes, utilitarios` e manda carregar **PRIMEIRO** → sem mover, a ordem real de camadas fica `reset, base, componentes, layout` (layout vence componentes, inverso do pretendido) e a camada `utilitarios` nunca é criada (`utilities.css` não é linkado).
- **Registro do problema original:** referenciava `css/tokens.css` e `css/componentes.css` (linhas 12 e 10) enquanto no disco existiam `token.css` e `components.css` (renome não commitado) → 404 nas 32 páginas e todas as `var(--*)` inválidas (design colapsava).

### 3.2 — `<base href="/V2/">` × sitemap/robots na raiz
- `<base href="/V2/">` na linha 4 dos 32 HTML.
- `sitemap.xml:3-34` e `robots.txt:3` usam `https://marcialocutora.com.br/` (**raiz**, sem `/V2/`).
- Fontes em `docs/Análise editorial - Márcia Locutora.md` confirmam o site publicado em `/V2/`.
- **Resultado:** ou as 32 URLs do sitemap estão erradas, ou os assets dão 404 na raiz. Impossível publicar correto com ambos.

### 3.3 — Skip link quebrado em 31 das 32 páginas
- `<a class="skip-link" href="#conteudo">` (linha 17 de todos) resolve contra o `<base>` → vira `/V2/#conteudo` (a home) em qualquer subpágina. Só funciona em `index.html`. Viola WCAG 2.4.1.
- Agravante: `<main id="conteudo">` não tem `tabindex="-1"` (mesmo corrigido o href, o foco pode não mover).
- `.skip-link` não tem CSS aplicado (as regras estão só em `style.css:8-11`, não linkado) → **fica visível como link comum** no topo de todas as páginas.

### 3.4 — Formulário de contato inoperante
- `contato/index.html:36` — `<form action="#" method="post">` sem backend e sem handler JS (`script.js` só preenche o ano). Com o `<base>`, submete para `/V2/#` e perde os dados.
- `contato/index.html:51` — **nota pública**: *"o formulário acima é um esqueleto…"*.
- `contato/index.html:42` — `<select id="projeto">` sem `required` (os outros 3 campos têm).
- Sem `aria-live`/feedback de sucesso/erro, sem honeypot/antispam.

### 3.5 — Erro de digitação ✅ RESOLVIDO (02/10/2026)
- `faq/index.html:12` tinha `<link … href="css/tokens.css">>` (**`>` extra**) → tag malformada, o parser podia renderizar um ">" visível. Corrigido junto com o rename dos CSS.

### 3.6 — Zero áudio/vídeo
- Grep por `<audio>`, `<video>`, `<iframe>` = **0 ocorrências** nos 32 HTML.
- 12 `<div class="audio-placeholder">` com texto "Espaço para demonstração…" — 7 em `locucao/*` (linha 38) e 5 em `voz/*` (linha 36). As páginas mais estratégicas não têm demo nenhuma.

---

## 4. Arquitetura de CSS

### 4.1 Design system (bem construído, mas morto)
- `token.css` (95 linhas): paleta da marca (`--marca-magenta #ae115b`, `--marca-roxo #3b1b3f`, `--marca-salmao #f08d8d`, `--marca-laranja #f5915e`), papéis (`--cor-fundo`, `--cor-texto`, `--cor-marca`, `--cor-botao`…), espaço/forma/medida (`--esp-1..5`, `--raio`, `--largura-texto 70ch`, `--largura-pagina 72rem`), temas claro/escuro (`prefers-color-scheme` + `:root[data-tema]`, linhas 58–94 — **nenhum HTML usa `data-tema`**).
- `base.css` (reset + elementos + `:focus-visible` + `prefers-reduced-motion`).
- `layout.css` (201 linhas): `.cabecalho`, `.rodape`, `.hero`, `.faixa`, `nav ul`, `[aria-current="page"]`, menu com `<details>/<summary>`.
- `components.css` (266 linhas): `.lista-cards`, `.card-servico`, `.card-video`, `.botao`, `.acoes`, `.passos`, `.credenciais`, `.numeros`, `@container` + `:has()`.
- `utilities.css`: `.so-leitor`, `.pular`, `.destaque`, `.texto-centro`, `.degrade-logo`.

### 4.2 O mismatch central
O HTML usa **apenas** `<header>/<nav>/<main>/<footer>` + classes `.skip-link` e `.audio-placeholder`.
**Nenhuma classe estilizada em `css/` existe no markup** (grep de `class=` nos 32 HTML só retorna `skip-link` e `audio-placeholder`).
E as duas classes que o HTML usa só existem em `style.css`, que **ninguém linka**.

**Balanço:**

| Arquivo | Status |
|---|---|
| `V2/style.css` | **órfão** — único que estiliza o markup real, não linkado |
| `css/token.css` | linkado como `tokens.css` → 404 |
| `css/components.css` | linkado como `componentes.css` → 404 |
| `css/components_.css` | **órfão** — é o conteúdo de `files.zip` (5.430 B idênticos) |
| `css/layout_.css` | **órfão** — é o conteúdo de `files.zip` (4.423 B idênticos) |
| `css/utilities.css` | **órfão** — nunca linkado, camada `utilitarios` nunca criada |
| `css/files.zip` | **removido do disco em 02/10/2026** (era binário versionado — não deveria ir ao repositório/deploy) |
| `css/base.css`, `layout.css` | linkados; funcionam só nos seletores de elemento (com `var()` inválido) |

→ **~715 linhas de design system são CSS morto.** O site renderiza quase sem estilo.

### 4.3 Ruídos menores
- `layout.css:180` e `:189` — `.rodape` declarado duas vezes.
- `token.css:58-69 / 72-82 / 84-94` — mesmo conjunto de variáveis 3× (claro/dark manual/light manual).
- `utilities.css:33` — `.destaque` em salmão sem proteção de fundo (contraste baixo em claro).
- `base.css:22` comenta âncoras de menu (`#locucao-profissional`) que nenhum HTML usa.

---

## 5. JavaScript

`V2/script.js` (6 linhas): `DOMContentLoaded` → preenche `[data-current-year]` no rodapé. Carregado com `defer` em 32/32. Guard `if (year)`, sem dependências.

**Problemas:** `script.js:2` comenta *"Navegação simples e acessível"* (falso — não há navegação no arquivo); sem fallback (JS off → `© Márcia Locutora` sem ano); `defer` + listener de `DOMContentLoaded` é redundante.

---

## 6. SEO

### 6.1 Bom ✅
- **32/32 titles únicos**, **32/32 descriptions únicas**, **exatamente 1 `<h1>` por página**, hierarquia h1→h2 sem pulos, sem `<meta keywords>`.
- `sitemap.xml` = **32 URLs = 32 HTML** (cobertura 100%, zero divergência de estrutura).
- `robots.txt` correto (`Allow: /` + `Sitemap:`).
- Nenhum link interno quebrado (todos os href de página existem).

### 6.2 Ausente em 32/32 ❌
`rel="canonical"` (0) · Open Graph (0) · Twitter Cards (0) · JSON-LD/Schema.org (0) · favicon (0) · `theme-color` (0) · breadcrumbs (0) · `<meta name="robots">` (0).

**Schema desperdiçado:** `faq/index.html:37-59` tem 8 pares pergunta/resposta (→ `FAQPage`); 5 posts com `<article>` (→ `BlogPosting`, mas **sem `<time>`, data, autor ou categoria**); home/`sobre` (→ `LocalBusiness`/`Person`).

### 6.3 Problemas de conteúdo/URL
- **Descriptions longas:** `index.html:8` (**185 chars**), `locucao/index.html:8` (163), `blog/quanto-custa-locucao/index.html:8` (157). Limite prático ~155-160.
- **Titles >60** (7 páginas, corte no SERP): `locucao/narracao` (79), `blog/como-escolher-uma-voz` (74), `servicos/edicao-video` (70), `faq` (68), `blog/como-funciona-gravacao` (66), `blog/index` (65), `blog/quanto-custa-locucao` (64).
- **Cannibalização:** "locução publicitária" → `locucao/publicitaria/index.html:7` × `blog/locucao-publicitaria/index.html:7`; "locução institucional" → `locucao/institucional/index.html:7` × `blog/locucao-institucional/index.html:7`.
- **URLs ruins:** `/voz/voz-feminina/` (redundância "voz/voz-", vale para as 5) e `/locucao/elearning/` (keyword é "e-learning").
- **H1 keyword-stuffed:** `index.html:34` (10 palavras). **H1 genérico:** `blog/index.html:34` = só "Blog".
- **H1 ≠ title** em: `servicos/edicao-video`, `voz/voz-natural`, `voz/voz-caricata`, `voz/voz-infantil`, `servicos/roteiro`, `locucao/sotaque-paraibano`.
- **Linkagem interna fraca:** `voz/voz-*`, `servicos/*` e `blog/*` são linkados **apenas 1×** (do respectivo hub). Blog, Depoimentos, Banco de Talentos e Serviços **fora do menu principal** (só rodapé). **Zero links externos** no site inteiro (nem `http://` no corpo).

---

## 7. Acessibilidade (WCAG)

**Bom ✅:** skip link em 32/32 · landmarks (`header/main/footer` + 2 `nav` rotulados) · `aria-labelledby` nas 5 seções da home (`index.html:38-86`) · `<label for>`↔`id` pareados, `fieldset`+`legend`, `type="email"`, `autocomplete` · `:focus-visible` e `prefers-reduced-motion` em `base.css` · nenhum `<img>` sem `alt` (porque não há imagens).

**Ruim ❌:**
1. Skip link quebrado (seção 3.3) + `main` sem `tabindex="-1"`.
2. `.skip-link` visível permanentemente (CSS órfão).
3. **Zero `aria-current="page"`** — `layout.css:59` prevê o estilo, o HTML nunca marca.
4. Placeholder de áudio inconsistente: `locucao/*` usa `role="region" aria-label` (7 landmarks extras), `voz/*` não usa (marcação diferente para a mesma função).
5. Formulário sem `aria-live`/mensagens de erro.
6. Contraste não verificável (tokens não carregam); `token.css:55-57` admite magenta 3:1 sobre preto.
7. **Zero imagens no site inteiro** (0 `<img>`, 0 `<svg>`) → sem logo, sem foto, sem OG image, sem favicon (fere E-E-A-T).
8. Ano do copyright depende de JS.

---

## 8. Conteúdo editorial

### 8.1 Placeholders visíveis ao público
| Arquivo:linha | Texto |
|---|---|
| `contato/index.html:51` | "Nota: o formulário acima é um esqueleto…" |
| `portfolio/index.html:36-39` | 4× "…inserir projeto, cliente, descrição e áudio ou vídeo." |
| `portfolio/index.html:41` | instrução interna sobre autorizações |
| `depoimentos/index.html:36-37` | "Inserir aqui depoimento autorizado de cliente." |
| 12 arquivos | `<div class="audio-placeholder>` "Espaço para demonstração…" |

**Não há lorem ipsum em lugar nenhum** ✅.

### 8.2 Duplicações
- Lista dos **7 tipos de locução** idêntica verbatim: `index.html:41-47` ≡ `locucao/index.html:39-45`.
- Credenciais repetidas: `index.html:54-59` ≡ `sobre/index.html:36-37` (5 anos / 20 anos / 25 marcas / 3.400 horas — consistentes entre si ✅).
- Template idêntico nas 7 páginas de locução (frase "Consulte a página de perguntas frequentes ou solicite um orçamento" repetida em 6), nas 5 de voz (H2 "Solicitar esta voz" igual nas 5, linha 39) e nas 4 de serviço.
- 5 posts com esqueleto idêntico ("Resposta direta" → "O que considerar" → … → "Próximo passo"); corpos diferem (não é plágio).

### 8.3 Inconsistências de tom
- `locucao/index.html:35` — 1ª pessoa: "*Ofereço* locução…" (resto do site é plural/neutro).
- `voz/index.html:51` — "conversar diretamente com **a equipe**" contradiz posicionamento de profissional autônoma.
- `voz/voz-jovem/index.html:34` — "cara de atualidade" (coloquial); "dinamicidade" × "dinamismo" na description.
- Marca × pessoa alterna sem regra: "Márcia Locutora" (títulos/header) × "Márcia Domingos" (H1 sobre, footer).
- `faq/index.html:44` — "pode ser feita" em vez de afirmar (perde convicção).

### 8.4 Thin content
`servicos/index.html:34-35` (1 frase + 4 links) · `banco-de-talentos/index.html:34-36` · `portfolio` e `depoimentos` (só placeholders) · 5 páginas de voz com ~3 parágrafos curtos · blog sem data/autor/tempo de leitura/imagem.

### 8.5 CTAs e canais
CTA único e consistente: **"Solicitar orçamento" → `contato/` (124 links)** ✅. Porém **zero telefone, e-mail, WhatsApp e redes sociais** em todo o site (grep `mailto:`/`tel:` = 0) — e o único canal de conversão (formulário) não funciona.

---

## 9. Documentação do projeto

### `README.md`
- Descreve o projeto como "esqueleto" (linha 28) e lista as 10 seções (bate 100% com os diretórios).
- Checklist de 8 itens pré-publicação (linhas 30-38); **ao menos 4 ainda pendentes** (formulário, Schema.org, validação, sitemap).
- **Desatualizado:** linha 40 diz "links absolutos a partir da raiz (`/`)", mas o HTML usa relativos + `<base href="/V2/">` (commit `2c656ae`).

### `.github/prompts/seo-content.prompt.md`
Prompt de 13 etapas (auditar → SEO → conteúdo → links → FAQ → Schema → metadata → SEO técnico → implementação → validação → relatório). **Nunca executado:** as etapas 7/8/9 exigem canonical, OG, Schema e breadcrumbs — 0 das 32 páginas tem.

### `.github/agents/copilot-instructions.md`
**Vazio (0 bytes).**

### `docs/Análise editorial - Márcia Locutora.md` (35 linhas, não versionado)
Posicionamento: Márcia Domingos, locutora em **João Pessoa/PB**, voz feminina para publicidade, institucional, narração, e-learning, audiolivros, documentários. Serviço de voz + produção de áudio (briefing → tonalidade → gravação → edição → entrega). Credenciais: Comunicação Social Rádio/TV, pós em Redação, +5 anos em locução, +20 anos com textos, +25 marcas, +3.400 horas. Tom: profissional, didático, consultivo, frases curtas. Diretriz: **não inventar clientes, resultados ou fatos**. Fontes citadas usam `/V2/` (prova do deploy em subpasta).

### `docs/calendario_editorial_marcia_locutora.txt` (3.629 linhas)
- **104 publicações**, 08/09/2026 → 02/09/2027, **100% terças e quintas**, 34 em 2026 / 70 em 2027.
- **46.586 palavras** totais; média 448 (min 375 / max 524); títulos 100% únicos.
- **7 categorias em 7 blocos contíguos de ~15 posts** (Fundamentos da voz, Produção e técnica, Roteiro e briefing, Vídeo e audiovisual, E-learning e educação, Publicidade e marcas, Audiolivros e narrativas) — publicado na ordem, o blog ficaria 15 posts seguidos sobre o mesmo tema (**intercalar**).
- Padrão por bloco: `PUBLICAÇÃO NNN` / Data / Categoria / Título / H1 repetido / Introdução / 4-7 seções / "Próximo passo" (103/104) / contagem de palavras.
- **Campos SEO ausentes (0 ocorrências):** slug, meta description, keyword, SEO title, H2/outline, FAQ, schema, links internos → **não é acionável sem uma etapa de mapeamento SEO**.
- **Bugs:** `linha 3517` — *"Personagens podem ter **respirations**"* (deveria ser "respirações"); `linha 3491` — Publicação 100 fecha com "Fechamento - Próximo passo" (quebra do padrão).
- Os 5 posts já publicados estão fora do calendário (como manda a diretriz de não repetir).

---

## 10. Prioridades de correção

| # | Sev. | Ação | Onde |
|---|---|---|---|
| 1 | ✅ | ~~Apontar `css/tokens.css`→`css/token.css` e `css/componentes.css`→`css/components.css` nos 32 HTML **e commitar o rename**~~ — **corrigido nos 32 HTML em 02/10/2026** (commit pendente na data desta nota) | linha 10 e 12 dos 32 HTML |
| 2 | 🔴 | Definir raiz de deploy: trocar `<base href="/V2/">` por `/` **ou** corrigir as 32 URLs de sitemap/robots para `/V2/` | `*:4` × `sitemap.xml:3-34`, `robots.txt:3` |
| 3 | 🔴 | Corrigir skip link (remover `<base>` ou usar caminho absoluto) + `tabindex="-1"` no `main` | `*:17` |
| 4 | ✅ | ~~Corrigir `>>` do FAQ~~ — **corrigido em 02/10/2026** | `faq/index.html:12` |
| 5 | 🔴 | Conectar formulário e remover a nota "esqueleto" | `contato/index.html:36,51` |
| 6 | 🔴 | Inserir áudios/vídeos reais nas 12 áreas de demo | `locucao/*:38`, `voz/*:36` |
| 7 | 🟠 | Mover `token.css` para o 1º `<link>`, adicionar `utilities.css`, decidir destino de `style.css` | `<head>` dos 32 HTML |
| 8 | 🟠 | Alinhar markup × design system (hoje são 2 projetos paralelos) ou reescrever o CSS para o markup atual | `css/*` × HTML |
| 9 | 🟠 | Executar etapas 7-9 do `seo-content.prompt.md` (canonical, OG, Schema, favicon) | 32/32 |
| 10 | 🟠 | Limpar órfãos: `components_.css`, `layout_.css`, `copilot-instructions.md` (`files.zip` já removido) | `V2/css/`, `.github/` |
| 11 | 🟡 | Trocar placeholders de portfólio/depoimentos; adicionar telefone/WhatsApp/e-mail | `portfolio:36-41`, `depoimentos:36-37` |
| 12 | 🟡 | Encurtar descriptions >160 e titles >60; resolver cannibalização; renomear `/voz/voz-*` e `elearning` | seção 6.3 |
| 13 | 🟡 | Remover duplicações (lista 7 tipos, templates) e unificar tom (1ª pessoa, marca × pessoa) | seção 8 |
| 14 | 🟡 | Atualizar `README.md:40` e `script.js:2`; corrigir calendário (`respirations`, pub. 100) e adicionar bloco SEO por post | docs |

---

## 11. Comandos de verificação rápida (não refaça a análise)

Rodar na raiz do repositório. Serve para confirmar se algum achado mudou.

```powershell
$html = Get-ChildItem V2 -Recurse -Filter *.html   # Select-String NÃO tem -Recurse; use o pipeline

# 1. Estado do git (renomes de CSS commitados?)
git status --short

# 2. CSS referenciado vs existente (esperado no 1º: 4 saídas; no 2º: 8 arquivos)
$html | Select-String -Pattern 'href="css/[^"]+"' | ForEach-Object { $_.Matches.Value } | Sort-Object -Unique
Get-ChildItem V2\css | Select-Object Name

# 3. Erros de digitação em tags (esperado: 1 — faq/index.html:12)
$html | Select-String -Pattern '>>'

# 4. Metadados ausentes (esperado: 0)
($html | Select-String -Pattern 'rel="canonical"|og:title|application/ld\+json|breadcrumb' | Measure-Object).Count

# 5. Áudio/vídeo real (esperado: 0)
($html | Select-String -Pattern '<audio|<video|<iframe' | Measure-Object).Count

# 6. Placeholders públicos (esperado: 12+ ocorrências)
$html | Select-String -Pattern 'esqueleto|inserir projeto|Inserir aqui|Espaço para'

# 7. Contatos e links externos (esperado: 0)
($html | Select-String -Pattern 'mailto:|tel:|wa\.me|https?://[a-z]' | Measure-Object).Count

# 8. <base> e âncoras (esperado: 32 de cada)
($html | Select-String -Pattern '<base href' | Measure-Object).Count
($html | Select-String -Pattern 'skip-link' | Measure-Object).Count

# 9. Sitemap vs HTML (esperado: 32 e 32)
(([xml](Get-Content V2\sitemap.xml)).urlset.url.loc).Count
(Get-ChildItem V2 -Recurse -Filter index.html).Count
```

**Regras para quem for alterar a V2:**
1. **⛔ ESCOPO:** alterar somente arquivos dentro de `V2/`. O que está fora da `V2/` está **em produção** e não pode ser modificado (ver diretiva no topo deste documento). Se a tarefa exigir tocar algo fora, interromper e perguntar ao usuário. Comandos git: `git status`/`git diff`/`git log` são livres; `git add`/`git commit` apenas com arquivos de `V2/`.
2. Mudanças em CSS/HTML devem manter a correspondência markup ↔ seletor (hoje quebrada — ver 4.2).
3. Nunca introduzir `<base href>` novo sem revisar âncoras (`#...`) e `action="#"`.
4. Ao adicionar página: atualizar `sitemap.xml` (hoje 32/32) e o menu/rodapé (header/footer são duplicados em 32 arquivos — alterar em todos).
5. Conteúdo novo: seguir o tom de `docs/Análise editorial - Márcia Locutora.md` e **nunca inventar clientes, números ou fatos**.
6. O `seo-content.prompt.md` é o checklist oficial de SEO não executado.

## 12. Estado da implementação do novo layout (02/10/2026)

Transformação completa dos 32 HTML + 5 CSS para o novo estilo (mockup `docs/mockup/mockup-home.jpg`), aprovada pelo usuário. **Não commitada** (último commit `0eae48b`).

### O que foi feito
- **CSS (5 arquivos reescritos/estendidos):** `token.css` (+`--marca-roxo-esc`, `--preto`), `base.css` (fonte Segoe UI, body flex, `scroll-padding-top`), `layout.css` (régua `--trilho` em `:root`, cabeçalho `.cabecalho__trilho` sticky com nav+`aria-current` e CTA, `.pagina-topo` em degradê, `.hero` com foto via `--hero-img`, faixas `.faixa` c/ variants `--roxo/--preta/--clara/--suave`, rodapé `.rodape__grid` 3 colunas + `.rodape__legal`), `components.css` (lista-cards em ilha branca c/ `:has`, `passos`, `acoes`/`botao--pequeno`, `audio-placeholder`, `main form`, FAB redondo c/ SVG), `utilities.css` (`.pular`→`.skip-link`).
- **HTML (32 arquivos):** header/footer/skip-link/FAB/tabindex/links de CSS/CTAs/`<ol class="passos">` via script; faixas em **todas** as páginas (total **96** `<section class="faixa">`); home editada à mão (hero c/ foto + 5 faixas + 2 `lista-cards`).
- **Acessibilidade:** 1 `<h1>`/página; `aria-current="page"` (18: início+locução*8+voz*6+portfólio+sobre+contato); skip-link com caminho absoluto por página (`/V2/...#conteudo`); cada faixa com `aria-labelledby` apontando para `id` único do `<h2>` (2 seções sem h2 — contato/serviços — ficam sem aria, correto); `main tabindex="-1"`.

### Padrão de faixas (ciclo por bloco de h2)
`1=faixa--roxo, 2=faixa--clara, 3=faixa--suave, 4=faixa--clara` repetindo; blocos = do `<h2>` até o próximo (ou pré-topo/último). Home manual: roxo, clara, suave, preta, clara.

### Armadilhas descobertas (reproduzir com cuidado)
1. **PowerShell: `,` tem precedência maior que `+`** — `'texto' + $var` como elemento de `@(...)` explode em pedaços (viram linhas separadas via `-join`). Envolver concatenações em parênteses: `('texto' + $var),`.
2. **`.ps1` sem BOM é lido como ANSI** pelo PS 5.1 → mojibake (`MÃ¡rcia`) em literais com acento. Gravar com `UTF8Encoding($true)` ou manter script ASCII puro.
3. **`--hero-img` com URL relativa não resolve** no style inline sob `<base>`; usar caminho absoluto `/V2/assets/...`.
4. **Edge headless:** `--window-size` mínimo ≈ 500 CSS px (não valida 390 de verdade); `--dump-dom` só retorna saída redirecionada via `cmd /c ... > arquivo` (o PowerShell engole). Medir overflow com página de debug injetada pelo servidor de teste.

### Verificação executada (tudo verde)
`32/32` com tags balanceadas, 1 h1, links na ordem (token→…→utilities), skip-link absoluto, FAB, rodapé, sem mojibake, sem `<p><a>` CTAs pendentes (2 no home são links editoriais legítimos); ids/aria: 0 erros, 0 ids duplicados. Screenshots Edge headless em `%TEMP%\opencode\shots\` (home desktop/mobile, locucao/, publicitaria, faq, sobre, contato, blog post, voz, portfolio).

### Infra de teste (fora do repositório, `%TEMP%\opencode\`)
- `servidor.ps1` — HTTP estático em `http://localhost:8123/` com rota de debug `/__dbg.html` (mede overflow).
- `reestilizar.ps1` (passo 1: header/footer/…) e `faixas2.ps1` (passo 2: faixas) — idempotentes.
- `verificar.ps1`, `verificar-ids.ps1`, `listar.ps1`, `screenshots.ps1`.
- Backups: `bak-v2-html/` (pré-passagem 1) e `bak-p2/` (pré-passo 2), 32 HTML cada.
