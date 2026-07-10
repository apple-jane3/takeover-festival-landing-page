import path from 'node:path'
import fs from 'node:fs'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/takeover-festival-landing-page/' : '/',
  plugins: [
    react(),
    {
      name: 'spa-fallback',
      closeBundle() {
        const outDir = path.resolve(__dirname, 'dist')
        const indexPath = path.join(outDir, 'index.html')
        const fallbackPath = path.join(outDir, '404.html')
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, fallbackPath)
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
})
