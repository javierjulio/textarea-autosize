import { fs } from 'fs'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "demo",
  },
  server: {
    // host: true, // Enable to expose host for running app on phone
    open: true
  },
  base: '/textarea-autosize/' // use repo name https://vitejs.dev/guide/static-deploy.html#github-pages
})
