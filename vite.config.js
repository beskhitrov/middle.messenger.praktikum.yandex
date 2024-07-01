import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(process.cwd(), './src'),
  build: {
    outDir: path.resolve(process.cwd(), './dist'),
    emptyOutDir: true,
  },
  // css: {
  //     modules: {
  //         // Используем CSS Modules для уникальных классов
  //         generateScopedName: "[name]__[local]___[hash:base64:5]",
  //     },
  // },
});
