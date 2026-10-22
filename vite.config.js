import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// base './' makes the build work on GitHub Pages sub-paths and Netlify alike
export default defineConfig({ plugins: [vue()], base: './' })
