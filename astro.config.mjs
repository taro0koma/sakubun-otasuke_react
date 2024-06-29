import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [react()],
  output: 'server',
  buildOptiions:{
    site:'https://sakubun-otasuke_leact.onrender.com',
    sitemap:true,
  },
  server:{
    host:'0.0.0.0',
    port: 3000
  },
  adapter: node({
    mode: 'standalone'
  }),
});
