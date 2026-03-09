import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Liu-Lab-Website/', // IMPORTANT: must match repo name
  plugins: [react()],
})
