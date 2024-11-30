import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Directorio donde se generan los archivos de producción
  },
  assetsInclude: ['**/*.png', '**/*.PNG'], // Asegura soporte para imágenes
});
