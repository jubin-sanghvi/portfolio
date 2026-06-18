import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://jubinsanghvi.com',
  integrations: [sitemap(), icon()],
  output: 'static',
});
