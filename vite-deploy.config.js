import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/textarea-autosize.js"),
      name: "TextareaAutoSize",
      formats: ["es", "cjs", "umd", "iife"],
    },
    minify: true,
    sourcemap: true,
  },
})
