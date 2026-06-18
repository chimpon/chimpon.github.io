# Portfolio — Product Designer

Sitio estático en **Astro** con un sistema visual **derivado de una referencia
editorial** (ver `DESIGN-SYSTEM.md`). Todo el contenido y las imágenes son
**dummy** y están marcados para reemplazo. Replica el *lenguaje visual* de la
referencia, no su identidad de marca.

## Requisitos
- Node 18+ (probado con Node 22).

## Local
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
npm run preview  # sirve /dist
```

## Estructura
```
src/
  styles/   tokens.css (sistema)  ·  global.css
  data/     site.ts  ← nombre, claims y enlaces DUMMY (edítalo primero)
  components/  Header, Footer, Button, Tag, Card, SectionBar, Placeholder, CtaBlock, Meta
  layouts/  BaseLayout (head/SEO/OG/Clarity)  ·  CaseLayout (caso de estudio)
  content/work/  *.md  ← casos de estudio (frontmatter + cuerpo)
  pages/    index · about · contact · work/index · work/[slug]
public/     CNAME · robots.txt · favicon.svg · og-default.png · placeholders/
```

## Deploy a GitHub Pages
1. `astro.config.mjs` → reemplaza `site` por tu URL final.
2. **Dominio propio:** edita `public/CNAME` con tu dominio (solo el dominio, sin
   `https://`). Si en su lugar usas *project page*
   (`usuario.github.io/portfolio`), borra `public/CNAME` y descomenta
   `base: '/portfolio'` en `astro.config.mjs`.
3. En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Push a `main`. El workflow `.github/workflows/deploy.yml` construye y publica.
5. Actualiza la línea `Sitemap:` de `public/robots.txt` con tu dominio.

## Microsoft Clarity
Pega tu **Project ID** en `src/layouts/BaseLayout.astro`, constante
`CLARITY_PROJECT_ID`. Mientras valga el placeholder, el script **no** se carga
(evita ejecutar con un ID inválido).

## Reemplazar el contenido/imágenes DUMMY
Busca el marcador **`<!-- DUMMY -->`** y `DUMMY` en todo el repo. Puntos clave:
- **`src/data/site.ts`** — nombre (wordmark), rol, ubicación, email, enlaces, tagline.
- **`src/content/work/*.md`** — los 3 casos (frontmatter + cuerpo). Añade casos
  creando nuevos `.md` con el mismo frontmatter; `order` controla el orden.
- **Imágenes:** todo usa el componente `Placeholder` (bloque neutro etiquetado).
  Para imágenes reales:
  - Sube tus ficheros a `public/` (o `src/assets/`).
  - En `Card.astro` y `CaseLayout.astro` sustituye `<Placeholder … />` por
    `<img src={…} alt="…" />` (el campo `cover` del frontmatter ya está disponible).
  - Reemplaza `public/og-default.png` por una imagen real **1200×630**.
- **Formulario de contacto:** `src/pages/contact.astro` apunta a un endpoint
  placeholder de Formspree (`FORM_ID_PLACEHOLDER`). GitHub Pages es estático:
  necesitas un backend de formularios. Cambia la `action` o usa solo el `mailto`.

## Notas del sistema de diseño
- Tipografías `[SUSTITUTO]`: las de la referencia son propietarias. Aquí:
  Playfair Display (display), Source Serif 4 (serif), stack Helvetica (UI).
  Cámbialas en `tokens.css` (`--font-*`) y en el `<link>` de fuentes de
  `BaseLayout.astro`.
- Estados de interacción `[INFERIDO]` (hover/focus/transiciones) y su
  justificación: `DESIGN-SYSTEM.md` §3.
