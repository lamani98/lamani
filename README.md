# Studio ACAL

Site estático de portfólio de arquitetura. Vanilla HTML, CSS e JavaScript — sem framework, sem build step, sem CMS.

## Execução local

Abra diretamente no navegador ou sirva com qualquer servidor estático:

```bash
npx serve .
# ou
python -m http.server 8080
```

## Estrutura de arquivos

```
index.html                          # Home — narrativa contínua com projetos
processo.html                       # Página de processo
studio.html                         # Apresentação do studio
contato.html                        # Página de contato
404.html
sitemap.xml
robots.txt
projetos/
  yellow_k.html                     # Projeto Yellow K (data-project="yellow-k")
  academia.html                     # Projeto SmartFit  (data-project="academia")
  estudio.html                      # Projeto Estúdio Mina (data-project="estudio")
assets/
  css/
    style.css                       # Identidade visual global + imagens da home
    projetos/
      yellow.css                    # Imagens do projeto Yellow K
      academia.css                  # Imagens do projeto SmartFit
      estudio.css                   # Imagens do projeto Estúdio Mina
  js/
    main.js                         # Interatividade das páginas gerais
    projects.js                     # Interatividade + carrossel das páginas de projeto
  img/
    yellow-k/                       # Fotos Yellow K (WebP 480/960/1440/1920px)
    academia/                       # Fotos SmartFit
    studio-mina/                    # Fotos Estúdio Mina
```

## JavaScript

O site usa dois scripts distintos. Nenhum carrega o outro — cada página inclui apenas o que precisa.

### `assets/js/main.js`

Carregado nas páginas gerais (`index.html`, `processo.html`, `studio.html`, `contato.html`).

| Módulo | O que faz |
|---|---|
| **Loader** | Anima a entrada da logo, bloqueia scroll até concluir, dispara o intro do hero ao terminar. Remove o elemento do DOM após a animação. |
| **Hero intro** | Revela o título palavra por palavra (`splitWords` + `playWords`) com stagger de 55ms. Eyebrow e indicador de scroll entram em cascata. |
| **Reveal** | `IntersectionObserver` reversível: elementos com classe `.reveal` entram em cena ao aparecer na viewport e voltam ao estado inicial ao sair pelo topo. Cada elemento recebe um tipo automático (`words`, `fade-up`, `fade-left`, `clip` etc.) com base em regras estruturais. |
| **Parallax** | Camadas `.tone` e headings do manifesto se movem levemente em relação ao scroll (fator 0.14). Ativação lazy via IO — o `Ticker` só corre enquanto há elementos próximos da viewport. |
| **Transição de seções** | Seção que sai pelo topo recua sutilmente em escala e opacidade. |
| **Header retrátil** | Esconde o header ao rolar para baixo além de 96px; volta ao rolar para cima. |
| **Smooth scroll** | Motor de inércia (lerp + `Ticker`) ativado em respostas ao `wheel` em desktop (> 1024px). Touch e teclado usam scroll nativo. |
| **Anchors** | Clique em links `#hash` fecha o menu e faz scroll suave até a seção. |
| **Cursor glow** | Gradiente radial com suavização (lerp) que segue o ponteiro. Só em desktop com ponteiro fino. |
| **Tilt 3D** | Cards de projeto rotacionam suavemente em `perspective` conforme a posição do ponteiro. |
| **Magnetismo** | Links e botões são atraídos levemente pelo ponteiro. |
| **Scroll progress** | Barra de 2px no topo da página indica o progresso de leitura. |
| **ARIA / menu** | Listener `change` no checkbox do menu atualiza `aria-expanded` no `.menu-trigger` dinamicamente. |
| **`prefers-reduced-motion`** | Todos os módulos de animação verificam a media query e retornam cedo quando ativa. |

O laço de animação é um `Ticker` compartilhado (singleton `requestAnimationFrame`) — módulos se inscrevem e desinscrevem; o loop só roda enquanto há assinantes, sem custo em ocioso.

### `assets/js/projects.js`

Carregado apenas nas páginas de projeto (`projetos/*.html`). Reutiliza os mesmos módulos do `main.js` (Ticker, reveal, parallax, smooth scroll, cursor glow, tilt, magnetismo) sem o loader — o hero intro dispara direto. Adiciona:

| Módulo | O que faz |
|---|---|
| **Carrossel** | Substitui a grade estática de `.banner4/.banner5/.banner6` por um carrossel com scroll snapping, setas de navegação e contador `01 / 12`. |
| **Lightbox de galeria** | Botão "Ver todas as imagens" abre um modal com grid de todas as fotos do projeto. |
| **Lightbox de imagem única** | Clicar em qualquer slide (carrossel ou lightbox) expande a imagem em tela cheia com botão X e Esc para fechar. |
| **`PROJECT_IMAGES`** | Mapa por `data-project` do `<body>` que associa cada projeto a seus arrays `{ carousel, lightbox }`. `carousel` usa variante 960px; `lightbox` usa 1920px. |

Estilos do carrossel e lightbox são injetados em runtime (`injectCroquiStyles`) para não poluir o `style.css` global.

## CSS

### `style.css`

Identidade visual global: tokens de cor (`--ink`, `--paper`, `--oxide`), tipografia (Fraunces + Inter + Space Grotesk), grid de 12 colunas, hero da home, blocos de projeto, manifesto, seção de contato, menu, loader, acessibilidade (`:focus-visible`, touch areas mínimas de 44×44px).

Imagens de fundo são declaradas via `background-image` com media queries WebP responsivas:

```css
/* desktop: 1920px */
.banner1_project1 { background-image: url("../img/yellow-k/IMG_4090-1920.webp"); }

/* tablet (≤ 1024px): 1440px */
@media (max-width: 1024px) { ... }

/* mobile (≤ 768px): 960px */
@media (max-width: 768px) { ... }

/* mobile pequeno (≤ 480px): 480px */
@media (max-width: 480px) { ... }
```

### `projetos/yellow.css`, `academia.css`, `estudio.css`

Cada arquivo define as imagens específicas daquele projeto (hero, banner1, banner2, render/animação). A ordem das media queries é sempre `1024px → 768px → 480px`.

## Estratégia de imagens

Todas as fotos são exportadas para WebP com quatro variantes:

| Variante | Largura | Uso |
|---|---|---|
| `-960.webp` | 480px | Mobile pequeno |
| `-960.webp` | 960px | Mobile / carousel |
| `-1440.webp` | 1440px | Tablet / hero base |
| `-1920.webp` | 1920px | Desktop / lightbox |

O CSS faz a troca por media query. O JavaScript usa a variante 960px no carrossel e a 1920px no lightbox de imagem ampliada.

## Menu

Usa o "checkbox hack" (CSS puro): `<input type="checkbox" class="menu-toggle">` controla a visibilidade do painel via `:checked ~ .menu-panel`. O JavaScript não abre/fecha o menu — apenas sincroniza o atributo `aria-expanded` do botão via listener `change`.

## SEO

Cada página tem `<title>`, `<meta description>`, canonical, Open Graph e (na home) `schema.org/ArchitectureFirm` em JSON-LD. O `sitemap.xml` lista as 7 páginas V1 com `<lastmod>`.
