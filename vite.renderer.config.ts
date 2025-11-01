import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  root: 'src/renderer',
  plugins: [react()],
  build: {
    outDir: '../../.vite/renderer/main_window'
  },
  resolve: {
    alias: {
      '@': '',
      '@shared': '../shared'
    }
  }
})
