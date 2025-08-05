import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'client'), // 👈 THIS IS CRUCIAL
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'dist/spa'),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client'),
    },
  },
});
