import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative asset paths let the same build run at the root of localhost
  // and under a GitHub Pages sub-path (/PortfolioWebsite/).
  base: './',
  server: {
    host: 'localhost',
    port: 5173,
  },
})
