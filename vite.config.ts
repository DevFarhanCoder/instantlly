import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  root: "client", // 👈 Your actual app lives in ./client
  plugins: [react()],
  build: {
    outDir: "../dist/client", // 👈 Output path relative to root
    emptyOutDir: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client")
    }
  },
  publicDir: "../public" // 👈 Optional, only if you're using /public
});
