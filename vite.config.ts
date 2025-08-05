import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// ⬇️ This is what caused the crash if it was missing!
export default defineConfig({
  root: "pages",
  plugins: [react()],
  build: {
    outDir: "../dist/client",
    emptyOutDir: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client")
    }
  },
  publicDir: "../public"
});
