import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'

export default defineConfig({
  root: 'src/renderer',
  plugins: [react()],
  build: {
    outDir: '../../.vite/renderer/main_window'
  },
  resolve: {
    alias: {
      '@': '',
      '@shared': path.resolve(__dirname, 'src/shared')
    }
  }
})
