import { defineConfig } from 'vite'

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    alias: {
      '@/p': 'src/preload'
    }
  }
})
