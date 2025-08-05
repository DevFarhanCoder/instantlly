import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  root: 'client', // 👈 this tells Vite where your index.html, main.tsx, and global.css live
  plugins: [react()],
  build: {
    outDir: '../dist', // 👈 output will be at root-level /dist, not inside /client
    emptyOutDir: true,
  }
});
