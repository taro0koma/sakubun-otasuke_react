import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [react()],
  vite: {
    server: {
      hmr: process.env.NODE_ENV === 'development',
    },
    build: {
      outDir: 'dist', //出力ディレクトリをdistに設定
    },
    plugins: [
      {
        name: 'disable-fast-refresh',
        apply: 'serve',
        config() {
          return {
            esbuild: {
              jsxInject: `import React from 'react'`,
              loader: {
                '.js': 'jsx'
              },
            },
            optimizeDeps: {
              include: ['react', 'react-dom'],
            }
          }
        }
      }
    ]
  },
  output: 'server',
  buildOptions: {
    site: 'https://sakubun-otasuke_leact.onrender.com',
    sitemap: true,
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  adapter: node({
    mode: 'standalone',
  }),
  publicDir: 'public', // 本番環境でfastRefreshを作動しないためpublicフォルダを指定
});
