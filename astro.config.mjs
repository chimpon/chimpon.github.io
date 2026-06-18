import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// =====================================================================
//  CONFIG DE DEPLOY
//  - `site`: URL pública final. PLACEHOLDER -> reemplazar por tu dominio.
//    El sitemap y las OG urls absolutas dependen de este valor.
//  - Dominio propio vía CNAME (public/CNAME): NO necesitas `base`.
//  - Si en cambio publicas como project page (usuario.github.io/portfolio),
//    descomenta `base: '/portfolio'` y borra public/CNAME.
// =====================================================================
export default defineConfig({
  site: 'https://REEMPLAZAR-DOMINIO.example.com', // <-- PLACEHOLDER
  // base: '/portfolio',
  integrations: [sitemap()],
});
