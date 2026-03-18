import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // App is deployed at the root (e.g. https://drjieliulab.org/),
  // so built asset URLs should start with `/assets/...`.
  base: '/',
  plugins: [react()],
})
