# Portfolio — Astro + GitHub Pages

Portfolio de Product Designer construido con Astro, con sistema de diseño
derivado de un sitio de referencia (ver `DESIGN-SYSTEM.md` para la
trazabilidad completa de tokens y componentes).

## Arrancar en local

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera dist/
npm run preview    # sirve dist/ en local
```

## Deploy (GitHub Pages)

El workflow `.github/workflows/deploy.yml` construye y publica en cada push a
`main` usando `withastro/action`. Requisito único: en el repo
**chimpon/chimpon.github.io → Settings → Pages → Source: "GitHub Actions"**.

Al ser un repo de *user page*, el sitio se sirve en la raíz
(`https://chimpon.github.io`) y no hace falta `base` en `astro.config.mjs`.

### Dominio propio (opcional)

1. Renombra `public/CNAME.placeholder` → `public/CNAME` y pon tu dominio.
   (Se entrega desactivado a propósito: un CNAME con dominio falso rompería
   el deploy en chimpon.github.io.)
2. Cambia `site` en `astro.config.mjs` a `https://tu-dominio.com`.
3. Actualiza la línea `Sitemap:` de `public/robots.txt`.
4. Configura los DNS del dominio según la guía de GitHub Pages.

## Microsoft Clarity

En `src/layouts/Base.astro`, rellena la constante `CLARITY_ID` con tu ID de
proyecto. Vacía (por defecto) no se inyecta ningún script.

## Sustituir el contenido dummy

Todo el dummy está marcado con `<!-- DUMMY -->` o comentarios `DUMMY`:

| Qué | Dónde |
|---|---|
| Nombre, logo y email | `src/layouts/Base.astro` (`DESIGNER`, `LOGO`), `src/components/ContactSection.astro` (`EMAIL` y enlaces sociales) |
| Hero, bio, experiencia, premios | `src/pages/index.astro`, `src/pages/about.astro` |
| Casos de estudio | `src/content/work/*.md` — todo el contenido vive en el frontmatter (`sections[]`); tipos disponibles: `prose`, `findings`, `hypothesis`, `quests`, `steps`, `stakeholders`, `chart`, `results`, `quote`, `lessons`, `nextsteps`, `visual` |
| Marquee de disciplinas | `src/components/Marquee.astro` |
| Otros proyectos | `src/pages/work/index.astro` (array `others`) |
| Imágenes | Los visuales son placeholders con gradientes del sistema (`.pcard-vis`, sección `visual`). Para imágenes reales: añade el archivo a `public/` y sustituye el bloque placeholder por `<img>` (en `[slug].astro` la sección `visual` es el único sitio a tocar) |
| OG image | `public/og-image.png` (1200×630, ahora un placeholder plano) |
| Favicon | `public/favicon.svg` |

Los tres casos cubren el rango que pide el brief: B2C conversión/retención
(`bocado-first-week-quest`), B2B arquitectura compleja (`fletta-permissions`)
y 0→1/sistemas (`brizo-design-system`). Hay un cuarto proyecto WIP sin página
(card en home) y un bloque "Other projects" en `/work`.

## Estructura

```
src/
├── content.config.ts        # schema de la colección work
├── content/work/*.md        # casos de estudio (frontmatter estructurado)
├── layouts/Base.astro       # head/SEO/OG, nav, cursor, tema, scripts
├── components/              # ProjectCard, Marquee, ContactSection
├── pages/                   # /, /about, /work, /work/[slug], /contact, 404
└── styles/
    ├── tokens.css           # tokens derivados (con procedencia)
    └── global.css           # componentes construidos con esos tokens
```
