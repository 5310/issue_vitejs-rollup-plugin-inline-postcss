import { defineConfig } from 'vite'
import inlinePostCSS from 'rollup-plugin-inline-postcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inlinePostCSS(),
  ],
})
