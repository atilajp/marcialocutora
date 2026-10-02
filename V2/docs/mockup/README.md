# Mockup de design — Home "Márcia Locutora"

> **⛔ Escopo:** tudo aqui está dentro de `V2/`. Não modificar arquivos fora da `V2/`
> (o restante do repositório está em produção). Ver `../REFERENCIA-ANALISE-V2.md`.

## Arquivos

| Arquivo | O que é |
|---|---|
| `mockup-home.jpg` | **Imagem do mockup** (1440×4036) para aprovação do design |
| `mockup-home.html` | **Fonte do mockup** — HTML semântico e acessível, autocontido (CSS embutido) |

Este é um **mockup estático para aprovação**, não uma página pública:
o HTML tem `<meta name="robots" content="noindex, nofollow">` e o rodapé avisa que não deve ser publicado como está.

## Como o JPG foi gerado (reproduzir)

```powershell
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless=new --disable-gpu `
  --hide-scrollbars --force-device-scale-factor=1 --window-size=1440,4036 `
  --user-data-dir="$env:TEMP\edge-mock" `
  --screenshot="mockup-home.png" "file:///<caminho-absoluto>/mockup-home.html"
```

Depois, converter PNG → JPG (System.Drawing, qualidade 92) e apagar o PNG.
Se o layout mudar, refaça a captura com a nova altura do documento.

## Direção de design (baseada nas referências do site em produção)

**Seções, de cima para baixo:**

1. **Header branco fixo** — logo (SVG inline do microfone com degradê), nav 6 itens com
   `aria-current="page"`, CTA "Solicitar orçamento" (pílula magenta).
2. **Hero** — foto `Images/microphone-headset.png` (já traz o branding "Márcia Locutora Home Studio"),
   scrim escuro à esquerda, h1 "Voz versátil, projetos com essência" + subtítulo com a phrase SEO,
   2 CTAs (sólido + contorno).
3. **Roxo (#3b1b3f)** — "Voz de Márcia Locutora": 3 cards brancos de vídeo
   (Institucional / Publicidade / Manifesto) com thumb em degradê e play.
4. **Branco** — "Estilos de locução": player simulado (avatar, waveform de 96 barras, playlist de 6 faixas).
5. **Preto (#0d0d0d)** — "Banco de talentos": título em salmão + CTA "Quero contratar" à esquerda,
   texto à direita, 2 cards (Aurora/infantil, Marília/jovem).
6. **Branco** — "Márcia Domingos": bio + 4 credenciais (+5 / +20 / +25 / +3.400h) + foto com moldura roxa.
7. **Faixa CTA magenta** — "Pronto para dar voz ao seu projeto?".
8. **Rodapé roxo escuro** — 3 colunas (marca, Explore o site, Mais) + legal.
9. **Botão flutuante do WhatsApp** (magenta, canto inferior direito).

**Paleta (mesmos valores de `V2/css/token.css`):**

| Token | Valor | Uso |
|---|---|---|
| `--marca-magenta` | `#ae115b` | botões, links, títulos sobre branco (contraste 6,9:1 ✅) |
| `--marca-roxo` | `#3b1b3f` | seção de demos, molduras, header texto |
| `--marca-roxo-esc` | `#2a1230` | rodapé (branco 14,8:1 ✅) |
| `--marca-salmao` | `#f08d8d` | títulos sobre preto (8,9:1 ✅) |
| `--marca-laranja` | `#f5915e` | degradê da marca e anel de foco |
| `--preto` | `#0d0d0d` | seção banco de talentos |

**Tipografia:** `"Segoe UI", Arial, Helvetica, sans-serif` (sem fontes externas —
na implementação pode-se usar a fonte escolhida desde que carregada localmente ou com fallback).

## Acessibilidade mantida no mockup (replicar na implementação)

- Skip link (`#conteudo`) como primeiro focável + `<main id="conteudo" tabindex="-1">`.
- Landmarks: `header` / `nav[aria-label]` / `section[aria-labelledby]` / `footer`;
  **1 único `<h1>`** e `h2` por seção com IDs válidos.
- `aria-current="page"` no item ativo do menu (o `layout.css:59` já prevê o estilo).
- Texto alternativo real na foto (`alt="Márcia Domingos sintonizada nos fones…"`);
  imagens decorativas com `alt=""` + `aria-hidden`.
- Controles fictícios com nome acessível (botão do player tem `aria-label` explicando o mock).
- Contraste AA+ em todas as combinações de cor usadas (valores acima).
- `:focus-visible` com anel laranja 3px; `prefers-reduced-motion` desativa transições.
- Links de card são blocos com `aria-label` descritivo ("Assistir demo… (vídeo)").

## Guia de implementação posterior (sem quebrar padrões)

1. **Copiar seções para dentro da V2** — este mockup pode ser desmembrado nas páginas reais
   mantendo o markup semântico atual (header/footer já existentes nos 32 HTML podem receber
   o novo estilo; não duplicar landmark).
2. **Imagens:** hoje o mockup referencia `../../../Images/` (fora da V2, somente leitura).
   Na implementação, **copiar** os arquivos necessários para dentro de `V2/` (ex.: `V2/assets/`)
   e atualizar os `src`. Não alterar nada em `Images/`.
3. **CSS:** o `<style>` do mockup é autocontido de propósito. Migrar as regras para
   `V2/css/` respeitando `@layer` (token → base → layout → componentes) e as variáveis já
   existentes em `token.css` (evitar duplicar tokens).
4. **Links:** no mockup os `href` já apontam para os caminhos reais da V2
   (`locucao/`, `voz/`, `contato/`…), mas resolvem errado dentro de `docs/mockup/` —
   ao mover para a raiz da V2 passam a funcionar sem alteração.
5. **Placeholders a substituir:**
   - thumbs dos vídeos → iframes reais do YouTube (com `title` e `loading="lazy"`);
   - player simulado → embed do SoundCloud ou `<audio>` nativo + transcrição;
   - botão WhatsApp → `https://wa.me/<número real>` (hoje aponta para `contato/`);
   - ano do rodapé → padrão `data-current-year` já usado pelo `script.js`.
6. **Não regredir o que a análise já apontou:** manter 1 `h1`, skip link, `aria-labelledby`,
   labels de formulário e evitar o uso de `<base href>` sem revisar âncoras
   (ver `../REFERENCIA-ANALISE-V2.md`, seções 3 e 7).

## Responsivo (referência)

Breakpoints usados no mockup: `1024px` (3→2 colunas, sobre empilha) e `720px`
(menu some — na implementação trocar por `<details>/<summary>` como previsto em `layout.css`,
cards em 1 coluna, rodapé empilhado).
