import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  root: "client", // 👈 set client as the root
  plugins: [react()],
  build: {
    outDir: "../dist/client", // 👈 optional: adjust to desired output dir
    emptyOutDir: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client")
    }
  }
});
