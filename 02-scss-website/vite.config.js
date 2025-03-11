import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
  },
  server: {
    port: 3000,
  },
  base: "/",
});
