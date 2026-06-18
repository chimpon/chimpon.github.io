# DESIGN-SYSTEM.md — sistema derivado de monocle.com

Portfolio de Product Designer que debe ser **indistinguible** de monocle.com.
Todo token/componente se traza a una fuente. Las inferencias permitidas
(estados de interacción) y las sustituciones de tipografía propietaria están
marcadas y justificadas.

## Fuentes

| Código | Fuente |
|---|---|
| C-ART | Captura artículo — *Hydro Circal 100R* (`/design/hydro-circal-100r-norway/`) |
| C-DES | Captura listado Design (`/design/page/2/`) |
| C-SHOP | Captura Shop (`/shop/`) |
| C-RAD | Captura Radio (`/radio/`) |
| C-MENU | Captura menú móvil (overlay) |
| LIVE | `https://monocle.com/` — estructura confirmada en vivo; **CSS computado no expuesto** por el extractor |

> **Método.** Pude leer la home en vivo (confirma que es WordPress y los patrones
> de maquetación), pero no el CSS computado, y `bash` no tiene salida a `monocle.com`.
> Por tanto los **valores numéricos están medidos sobre captura**, vía permitida
> por el brief cuando no hay acceso al CSS. Marcados como aproximados (`≈`).

---

## 1. Trazabilidad de tokens

### Color

| Token | Valor | Fuente | Nota |
|---|---|---|---|
| `--color-paper` | `#ffffff` | C-ART, C-DES, C-RAD | Fondo de página |
| `--color-ink` | `#000000` | C-ART, C-DES | Texto, titulares, barras de sección |
| `--color-cream` | `#eae7dd` ≈ | C-SHOP | Fondo cálido de tiles de producto |
| `--color-cream-soft` | `#f3f1ea` ≈ | C-SHOP | Paneles claros del hero de Shop |
| `--color-accent` | `#ffd200` ≈ | C-RAD, C-SHOP, C-DES | Amarillo de marca: SUBSCRIBE, LISTEN LIVE, badge play, paginación activa, "ON AIR" |
| `--color-accent-soft` | `#f6f1d6` ≈ | C-RAD | Fondo del bloque newsletter |
| `--color-dark` | `#1a1a1a` ≈ | C-DES, C-RAD | "LATEST IN MONOCLE RADIO" y fondo de la página Radio |
| `--color-black` | `#000000` | todas | Footer sólido |
| `--color-on-dark` | `#ffffff` | C-RAD | Texto sobre oscuro |
| `--color-on-dark-muted` | `#bfbfbf` ≈ | C-RAD | Meta sobre oscuro |
| `--color-muted` | `#6e6e6e` ≈ | C-DES, C-ART | Meta "X MIN READ", standfirst secundario |
| `--color-rule` | `#000000` | C-DES, C-SHOP | Regla pesada sobre títulos de sección |
| `--color-rule-hair` | `#dddddd` ≈ | C-DES | Hairline entre items de la lista LATEST |
| `--color-field-border` | `#cccccc` ≈ | C-RAD, C-DES | Borde del input de email |

**Exclusión explícita — ROJO.** El rojo presente (anuncios *le19M*/*Chanel*,
portadas de revista, ilustración de la columna de Opinión) es contenido
publicitario/editorial, **no** un token de UI del sitio. Se excluye del sistema
para no inventar un acento que la interfaz no usa.

### Tipografía

| Token | Valor | Fuente | Nota |
|---|---|---|---|
| `--font-display` | `"Playfair Display", "GFS Didot", Georgia, serif` | C-DES (wordmark) | **[SUSTITUTO]** Didone de alto contraste; fuente real propietaria |
| `--font-serif` | `"Source Serif 4", "Spectral", Georgia, serif` | C-ART | **[SUSTITUTO]** Serif transicional tipo Plantin para titulares + cuerpo |
| `--font-ui` | `"Helvetica Neue", Helvetica, Arial, sans-serif` | C-DES, C-RAD | **[SUSTITUTO]** Sans neo-grotesca para nav/labels/botones |
| `--fs-wordmark` | `4rem` (64px ≈) | C-DES | MONOCLE en masthead |
| `--fs-h1` | `2.25rem` (36px ≈) | C-ART | Título de artículo |
| `--fs-h2` | `1.375rem` (22px ≈) | C-DES | Titular de card / heading de sección |
| `--fs-lead` | `1.1875rem` (19px ≈) | C-ART | Standfirst |
| `--fs-body` | `1.0625rem` (17px ≈) | C-ART | Cuerpo |
| `--fs-nav` | `0.8125rem` (13px ≈) | C-DES | Nav horizontal |
| `--fs-button` | `0.75rem` (12px ≈) | C-SHOP | Texto de botón |
| `--fs-label` | `0.6875rem` (11px ≈) | C-DES | Categoría / meta en mayúsculas |
| `--lh-body` | `1.55` | C-ART | Interlineado de lectura |
| `--ls-label` | `0.08em` | C-DES | Tracking de labels/nav/botones |
| `--fw-regular` | `400` | C-ART | Titulares serif en peso libro (no bold) |
| `--fw-medium` | `500` | C-DES | Nav, labels, botones |

### Espaciado, layout, radios, bordes, sombra

| Token | Valor | Fuente | Nota |
|---|---|---|---|
| `--space-1..9` | `4 → 96px` | C-DES, C-ART | Escala derivada de ritmos observados |
| `--container-wide` | `1200px` ≈ | C-DES | Ancho máximo de contenido |
| `--measure` | `680px` ≈ | C-ART | Columna de lectura del artículo |
| `--radius-none` | `0` | C-SHOP, C-RAD | Botones/inputs/cards de esquina viva |
| `--radius-pill` | `999px` | C-DES, C-RAD | Badge play y paginación activa (círculo) |
| `--rule-heavy` | `2px solid #000` | C-DES, C-SHOP | Sobre LATEST/RELATED/FEATURED PRODUCTS |
| `--rule-hair` | `1px solid #ddd` | C-DES | Entre items de lista |
| `--border-button` | `1px solid #000` | C-DES | Botón outline SHARE |
| `--shadow-product` | `0 12px 28px rgba(0,0,0,.18)` ≈ | C-SHOP | **Solo imagen de portada/producto**; la UI es plana |

---

## 2. Inventario de componentes

Todos se componen con las primitivas anteriores. Ninguno introduce lenguaje
visual nuevo.

| # | Componente | Fuente | Composición |
|---|---|---|---|
| 1 | Topbar utilitaria (MAGAZINE/RADIO/SHOP · search/LOG IN/SUBSCRIBE/bag/€) | C-DES, C-SHOP | sans 13px + botón amarillo |
| 2 | Masthead (wordmark centrado + flanco izq./der. con iconos) | C-DES, LIVE | display 64px tracked |
| 3 | Nav primaria horizontal (uppercase, hairline inferior) | C-DES | sans uppercase + `--ls-label` |
| 4 | Barra de sección (banda negra, label blanco) | C-DES | `--color-ink` + texto blanco |
| 5 | Breadcrumb ("Home") | C-DES | sans small |
| 6 | Lead/hero de artículo (imagen + categoría + titular + lead + meta) | C-DES | card grande |
| 7 | Card de artículo (cover, categoría, titular serif, meta) — variantes large / 4-up / fila | C-DES | imagen + labels + serif |
| 8 | Fila de lista LATEST (hairline, titular + lead + thumb + meta) | C-DES | `--rule-hair` |
| 9 | Módulo oscuro (LATEST IN MONOCLE RADIO) | C-DES, C-RAD | `--color-dark` + texto blanco |
| 10 | Widget "On Air" (ON AIR amarillo + título + LISTEN LIVE) | C-RAD | card oscura + botón amarillo |
| 11 | Card de audio (thumb + badge play circular amarillo + categoría + "X MIN") | C-RAD | badge `--radius-pill` |
| 12 | Botón primario (amarillo / texto negro / uppercase) | C-SHOP, C-RAD | `--color-accent` |
| 13 | Botón secundario (outline negro o fondo negro/texto blanco) | C-DES | `--border-button` |
| 14 | Tag / categoría (uppercase sans pequeño) | C-DES | `--fs-label` |
| 15 | Línea de meta (icono libro + "X MIN READ") | C-ART, C-DES | sans + `--color-muted` |
| 16 | Bloque newsletter (fondo amarillo pálido, ilustración, input + botón) | C-RAD | `--color-accent-soft` |
| 17 | Input de email (rectángulo bordeado + botón adyacente) | C-RAD, C-DES | `--border-field` |
| 18 | Card de producto (fondo cream, marca, nombre serif, precio "€ 355.00") | C-SHOP | `--color-cream` |
| 19 | Paginación (números; activo = círculo amarillo; siguiente = flecha en círculo) | C-DES, C-SHOP | `--radius-pill` |
| 20 | Fila de compartir (SHARE + iconos sociales) | C-ART | sans + iconos |
| 21 | Sidebar RECOMMENDATIONS (thumb + titular + meta) | C-ART | lista compacta |
| 22 | Footer (negro, wordmark + tagline, SUBSCRIBE/SHARE, columnas, © 2026) | todas | `--color-black` + columnas |
| 23 | Menú móvil overlay (links serif grandes + columnas TOPICS/DISCOVER/MONOCLE) | C-MENU | full-screen |
| 24 | Barra free-shipping (texto serif itálico centrado) | C-SHOP | serif italic |

**Componentes que el portfolio necesita y NO existen en Monocle**
(se compondrán solo con primitivas existentes, sin lenguaje nuevo):
- **Card de caso de estudio** → patrón de la card de artículo (#7): cover 16:9 + categoría/tag + titular serif + lead + meta.
- **Cabecera de caso** → patrón del lead de artículo (#6) + columna `--measure`.
- **Bloque antes/después y artefactos** → imágenes placeholder en cuadrícula con la misma tipografía de pie de foto que C-ART ("Safety first", "The Othr light…").

---

## 3. Inferencias declaradas (la única licencia permitida)

Estados no observables en captura estática, inferidos de forma conservadora y
coherente con lo visible:

| Inferencia | Decisión | Justificación |
|---|---|---|
| `:hover` nav/links | Subrayado | Patrón editorial estándar; no introduce color nuevo |
| `:hover` botón primario | Amarillo `#f0c400` (–oscurecido) | Variación mínima del propio acento |
| `:hover` botón outline | Relleno negro + texto blanco | Reutiliza la variante negra ya visible en el sitio |
| `:hover` card | Subrayado del titular | Conservador; evita zoom/sombra inventados |
| `:focus` | Anillo `2px` color ink | **Adición de accesibilidad** (no visible en captura); declarada |
| Transiciones | `150–200ms ease` en color/opacidad | Estándar discreto |

---

## 4. Decisión abierta para el checkpoint (la marco, no la invento)

Las tres familias tipográficas de Monocle son **propietarias y no
licenciables**. No puedo extraer ni usar los archivos reales. Por eso son
`[SUSTITUTO]` y necesito tu confirmación. Recomendación por defecto y
alternativas en el mensaje del chat.
