export default defineConfig({
  root: "pages", // <-- corrected from "client"
  plugins: [react()],
  build: {
    outDir: "../dist/client", // or "../dist" as you prefer
    emptyOutDir: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client") // keep if you're importing from client/
    }
  },
  publicDir: "../public"
});
