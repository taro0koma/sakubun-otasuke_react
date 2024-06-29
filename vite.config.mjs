import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: 'terser', // 最小限のコードのみビルドする
  },

});
