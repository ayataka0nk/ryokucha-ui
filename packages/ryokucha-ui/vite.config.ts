import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ include: ["./lib", "./src/vite-env.d.ts"], insertTypesEntry: true }),
  ],
  css: {
    modules: {
      scopeBehaviour: "local",
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "./lib/index.ts"),
      name: "index",
      formats: ["es", "umd"],
      fileName: "index",
    },
    rollupOptions: {
      external: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
  },
});
