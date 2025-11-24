import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // 确保路径是绝对路径
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});