import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

const isDevelopment = import.meta.env.DEV;

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
        name: 'react-refresh-plugin',
        apply: 'serve', // 開発環境でのみ適用
        config: {
          optimizeDeps: {
            include: ['react', 'react-dom'],
          },
          // 本番環境ではReact Refreshを無効にする
          optimize: isDevelopment ? undefined : false,
        },
      },
    ],
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
