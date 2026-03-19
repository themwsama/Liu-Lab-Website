import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // App is deployed at the root (e.g. https://drjieliulab.org/),
  // so built asset URLs should start with `/assets/...`.
  // Use relative paths so it works both for root domains and GitHub Pages
  // (which typically hosts at `/<repo>/`).
  base: './',
  plugins: [react()],
})
