import { fs } from 'fs'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "demo",
  //   lib: {
  //     entry: resolve(__dirname, "src/textarea-autosize.js"),
  //     name: "TextareaAutoSize",
  //     // fileName: (format) => `textarea-autosize.${format}.js`,
  //     // fileName: "textarea-auto-size",
  //   },
  //   // rollupOptions: {
  //   //   input: { demo: resolve(__dirname, "index.html") },
  //   // },
  //   // rollupOptions: [ resolve(__dirname, "index.html"), resolve(__dirname, "src/textarea-autosize.js") ],
  //   minify: false,
  //   sourcemap: true,
  },
  server: {
    // host: true, // Enable to expose host for running app on phone
    open: true
  },
  base: '/textarea-autosize/' // use repo name https://vitejs.dev/guide/static-deploy.html#github-pages
})
