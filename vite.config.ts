import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'powerset-data': [
            './src/data/powersets/blaster.ts',
            './src/data/powersets/blaster_expanded.ts',
            './src/data/powersets/tanker.ts',
            './src/data/powersets/tanker_expanded.ts',
            './src/data/powersets/scrapper.ts',
            './src/data/powersets/scrapper_expanded.ts',
            './src/data/powersets/controller.ts',
            './src/data/powersets/controller_expanded.ts',
            './src/data/powersets/defender.ts',
            './src/data/powersets/defender_expanded.ts',
            './src/data/powersets/defender_missing.ts',
            './src/data/powersets/sentinel.ts',
          ],
        },
      },
    },
  },
})
