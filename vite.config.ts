import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/research-bank/',  // 替换为你的仓库名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})