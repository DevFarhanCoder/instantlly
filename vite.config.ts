import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  root: "client", // 👈 Tell Vite to treat /client as the root
  plugins: [react()],
  build: {
    outDir: "../dist/client", // 👈 Output to dist/client
    emptyOutDir: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client") // Optional: useful for cleaner imports
    }
  },
  publicDir: "../public" // 👈 If you are using public assets
});
