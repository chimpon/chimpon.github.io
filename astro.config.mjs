import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Repo de user page (chimpon.github.io) → se sirve en la raíz, base '/'.
// Si más adelante usas dominio propio: cambia `site` y activa public/CNAME
// (ver README.md, sección "Dominio propio").
export default defineConfig({
  site: 'https://chimpon.github.io',
  integrations: [sitemap()],
});
