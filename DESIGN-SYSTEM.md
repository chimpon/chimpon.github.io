# DESIGN-SYSTEM.md — Trazabilidad del sistema derivado

Sitio de referencia: **dvdrod.com** (David Rodriguez, Senior Product Designer).

**Método de extracción:** las dos URLs se descargaron en vivo. Todo el CSS del
sitio está embebido en `<style>` dentro del HTML, así que los valores de esta
tabla son **exactos** (copiados del código fuente, no medidos sobre capturas).
Las capturas adjuntas se usaron para confirmación visual (hero, cards, header
cápsula, versión móvil, secciones del caso de estudio).

Fuentes citadas:

| Clave | Fuente |
|---|---|
| `[H]` | `https://dvdrod.com/` — bloque `<style>` inline |
| `[C]` | `https://dvdrod.com/neotaste-quests` — bloque `<style>` inline |
| `[G]` | `<link>` a Google Fonts presente en ambas páginas |
| `[S1..S4]` | Capturas adjuntas (S1 hero desktop, S2 listado work + header cápsula, S3 caso "lessons learned/what's next" + next project, S4 móvil) |

---

## 1. Tokens

### Color

| Token | Dark (defecto) | Light | Fuente |
|---|---|---|---|
| `--bg` | `#0C0C0B` | `#F0EDE5` | `[H] :root` / `[H] [data-theme="light"]` |
| `--bg2` | `#141413` | `#E8E5DD` | `[H]` |
| `--fg` | `#EDEDE8` | `#0C0C0B` | `[H]` |
| `--muted` | `#93938F` | `#5B5A57` | `[H]` |
| `--border` | `rgba(237,237,232,.09)` | `rgba(12,12,11,.1)` | `[H]` |
| `--border-hover` | `rgba(237,237,232,.38)` | `rgba(12,12,11,.38)` | `[H]` |
| `--accent` (global) | `#FF3D00` | `#FF3D00` | `[H]` |
| `--accent2` | `#FF7A5C` | `#D93300` | `[H]` |
| `--accent` (página de caso NeoTaste) | `#00C96B` | `#00A854` | `[C] :root` — cada caso puede redefinir el acento |
| Disponible ("available for work") | `rgba(0,220,100,.85)` / borde `.28` | `#006E2D` / borde `.35` | `[H] .pill.available` |
| WIP badge | `#F59E0B`, bg `rgba(245,158,11,.12)`, borde `.3` | igual | `[H] .wip-badge`, confirmado en S2/S3 |
| Nav cápsula fondo | `rgba(12,12,11,.80)` | `rgba(240,237,229,.85)` | `[H] nav.scrolled` |

### Tipografía

| Uso | Valor | Fuente |
|---|---|---|
| Display (logo, hero, títulos de sección, nº de caso) | **Roc Grotesk Wide** 700 (Adobe Fonts, `roc-grotesk-wide`; fallback: Syne 700 vía Google) | `[G]`, `[H] .hero-title, .s-title, .nav-logo` |
| Cuerpo, UI, títulos de caso y métricas | **Neue Haas Unica** 300/400/600 (+700/800 en headings/valores) (Adobe Fonts, `neue-haas-unica`; fallback: Inter vía Google) | `[G]`, `[H] body, .pname, .pm-val`, `[C] .cs-title` |
| Hero title | `clamp(72px,12vw,176px)` · 800 · lh 0.88 · ls −0.05em | `[H] .hero-title` |
| Section title | `clamp(52px,8vw,110px)` · 800 · lh 0.88 · ls −0.045em | `[H] .s-title` |
| Título de caso (hero) | Neue Haas Unica `clamp(52px,9vw,130px)` · 800 · lh 0.9 · ls −0.045em | `[C] .cs-title` |
| Título de sección de caso | Neue Haas Unica `clamp(32px,4.5vw,60px)` · 800 · lh 1.05 · ls −0.035em | `[C] .cs-section-title` |
| Párrafo de caso | 17px · 300 · lh 1.7 | `[C] .cs-section-body p` |
| Labels/eyebrows | 9–12px · uppercase · ls 0.08–0.18em · `--muted` | `[H] .s-label, .hero-eyebrow`, `[C] .cs-section-label` |
| Descripción hero | 15px · 300 · lh 1.65 · máx 360px | `[H] .hero-desc` |

### Espaciado, grid, radios, sombras

| Token | Valor | Fuente |
|---|---|---|
| Padding lateral | 44px desktop / 24px ≤900px | `[H] nav, #work…`, media queries |
| Padding vertical de sección | 120px home · 100px caso · 72–80px móvil | `[H] #work`, `[C] .cs-section` |
| Ancho interior del caso | `max-width: 1200px` centrado | `[C] .cs-section-inner` |
| Cuerpo de caso | `max-width: 640px` (párrafos), 760px (títulos) | `[C] .cs-section-body/.cs-section-title` |
| `--radius` 14px | cards proyecto, result cards | `[H] :root`, `[C] .cs-result-card` |
| 12px | meta-strip, findings, quote, stakeholders | `[C]` |
| 16px | quest cards, chart, metrics, visuales | `[C]` |
| 100px (pill) | botones, tags, badges, nav cápsula | `[H]` |
| Sombra nav | `0 4px 24px rgba(0,0,0,.25)` dark / `.10` light | `[H] nav.scrolled` |
| Ruido de fondo | SVG `feTurbulence` inline, opacidad 0.028, `position:fixed` | `[H] body::after` |

### Motion

| Uso | Valor | Fuente |
|---|---|---|
| Transición global de tema | `0.4s cubic-bezier(.25,.46,.45,.94)` | `[H] :root --transition` |
| Nav plano → cápsula | `0.45s cubic-bezier(.4,0,.2,1)` en top/left/right/padding/radius + `0.4s ease` en fondo/blur/sombra | `[H] nav → nav.scrolled` |
| Zoom imagen card hover | `transform 0.9s`, `scale(1.06)` | `[H] .pcard-bg` |
| Marquee | `28s linear infinite`, pausa on hover | `[H] .marquee-track` |
| Dot parpadeante | `blink 2.2s ease infinite` | `[H] @keyframes blink` |
| Preloader | nombre con reveal + barra `0.9s cubic-bezier(.76,0,.24,1)` | `[H] #preloader` |
| Reveals de entrada | el origen usa GSAP (`gsap.set` en comentarios del CSS) | `[H]` comentarios |

---

## 2. Header (requisito explícito del encargo)

Comportamiento copiado literal de `[H] nav / nav.scrolled`:

- **Reposo:** barra plana `position:fixed`, ancho completo, `padding:22px 44px`, sin fondo.
- **Con scroll (`.scrolled`):** `top:16px; left:22%; right:22%; padding:14px 36px; border-radius:100px; background rgba translúcido; backdrop-filter:blur(20px); box-shadow`.
- **Móvil ≤900px:** reposo `18px 24px`; scrolled `top:12px; left:16px; right:16px; padding:12px 20px` (casi todo el ancho con márgenes, como pediste y como muestra S4).

## 3. Inventario de componentes

| Componente | Composición (todo con tokens de arriba) | Fuente |
|---|---|---|
| **Nav** | logo Roc Grotesk Wide 15px/700 + links 12px uppercase con subrayado animado + botón tema pill | `[H] nav`, S1/S2/S4 |
| **Theme toggle** | pill borde `--border`, 11px uppercase; hover invierte a `--fg`/`--bg` | `[H] .theme-btn` |
| **Preloader** | nombre Roc Grotesk Wide clamp + barra de progreso 160×1px | `[H] #preloader` |
| **Hero** | eyebrow + título 2 líneas + descripción 360px + pills derecha + scroll-hint vertical con línea animada | `[H] #hero`, S1 |
| **Pills de estado** | `available` (verde, dot blink), ubicación, premio | `[H] .pill`, S1 |
| **Marquee** | franja con bordes, items Roc Grotesk Wide 11px uppercase separados por ✦ | `[H] .marquee-wrap` |
| **Section header** | label 10px + título Roc Grotesk Wide + contador, borde inferior | `[H] .s-header` |
| **Project card (pcard)** | grid 2 col (info / visual), borde `--radius`, nº + tags pill, empresa + nombre Neue Haas Unica 800, métricas, visual con gradiente 145deg + blobs + flecha circular 44px | `[H] .pcard*`, S2 |
| **WIP badge** | pill ámbar con dot blink | `[H] .wip-badge`, S2/S3 |
| **About** | grid 1.1fr/0.9fr, bio 300 con `em` en acento, listas experiencia/premios con borde inferior, skill pills | `[H] #about` |
| **Contact** | headline Roc Grotesk Wide gigante con link subrayado 4px acento, footer email + social links | `[H] #contact` |
| **Case hero** | full-height, cover oscurecida, nº outline gigante (`-webkit-text-stroke`), título Neue Haas Unica, meta-strip 4 celdas | `[C] .cs-hero*` |
| **Summary band** | TL;DR 19px + stats acento 34px | `[C] .cs-summary*` |
| **Case sections** | label + título + body 640px; two-col; findings grid; steps list; quest cards con XP pill; chart de barras; quote borde-izq acento; metrics band; result cards; hypothesis; stakeholders; impl-steps; lessons; next-steps | `[C]`, S3 |
| **Next project footer** | banda `--bg2` con nombre gigante + flecha circular 64px; variante WIP | `[C] .cs-next`, S3 |
| **Cursor custom** | flecha SVG + pill etiqueta (estilo Miro), oculto en táctil | `[H] .cursor*` |

## 4. Inferencias permitidas (estados no visibles en capturas)

Todas están **en el CSS de origen**, así que ni siquiera hubo que inventar
hovers; se copian tal cual (`.theme-btn:hover`, `.pcard:hover`, `.nav-links
a:hover::after`, `.cs-next:hover`, `.copy-btn.copied`, etc.). Las únicas
inferencias reales son:

1. **Animaciones de entrada (reveals):** el origen las hace con GSAP y los
   valores iniciales viven en JS (`gsap.set`), no en CSS. Se replican de forma
   conservadora con CSS/JS vanilla (translateY(110%) → 0, que sí está en el
   CSS como estado inicial de los spans) y `IntersectionObserver`.
   *Justificación:* mismo efecto visible, sin dependencia de GSAP.
2. **`:focus-visible`:** el origen no define estilos de foco; se añade un
   outline con `--border-hover` por accesibilidad. Marcado como inferencia.
3. **Página `/work` como listado propio:** el origen lista los proyectos en la
   home (`#work`). La ruta `/work` exigida por el brief reutiliza exactamente
   el mismo patrón `s-header + pcard`, sin componentes nuevos.
4. **Pill de XP en quest cards:** el origen hardcodea el tinte verde
   (`rgba(0,201,107,.1)`). Aquí se deriva del token con
   `color-mix(in srgb, var(--accent) 10%, transparent)` para que funcione con
   cualquier acento de caso. Mismo resultado visual con el acento verde.
5. **`overflow-wrap: anywhere` en `.contact-headline`:** corrección detectada
   en la auto-auditoría — el email dummy desbordaba en viewports estrechos.
   No altera ningún token; solo permite partir la palabra.

## 5. Divergencias deliberadas respecto al origen (contenido, no visual)

- Textos e imágenes: **dummy** (marcados `<!-- DUMMY -->`), sin empresas reales.
- Los placeholders de imagen usan los gradientes/blobs del propio sistema
  (`[H] .p-* .pcard-bg`), nunca fotografía externa.
- Analítica: Clarity con ID placeholder (el origen usa GA4).
