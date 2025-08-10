import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  root: 'demo',
  build: {
    outDir: '../dist/demo',
    emptyOutDir: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./node_modules', import.meta.url)),
      '@assets': resolve(__dirname, "src/assets"),
      '@lib': resolve(__dirname, "src"),
      '@livz/bare': resolve(__dirname, "src"),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
    port: 3000,
  },
}); 