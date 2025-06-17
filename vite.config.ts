import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import checker from 'vite-plugin-checker'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
      }
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@Components': resolve(__dirname, './src/Components'),
      '@Interfaces': resolve(__dirname, './src/Interfaces'),
      '@Store': resolve(__dirname, './src/Store'),
      '@Assets': resolve(__dirname, './src/Assets'),
      '@Utils': resolve(__dirname, './src/Components/utils'),
      '@Hooks': resolve(__dirname, './src/hooks'),
      '@Styles': resolve(__dirname, './src/styles')
    }
  }
})
