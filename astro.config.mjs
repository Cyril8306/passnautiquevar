// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.passnautiquevar.fr',
  integrations: [sitemap()],
  build: {
    // Inline le petit CSS critique, garde le reste en fichier -> bon LCP
    inlineStylesheets: 'auto',
  },
});
