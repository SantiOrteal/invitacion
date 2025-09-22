import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
import { fileURLToPath } from 'url';

// because __dirname was showing undefined
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  base: '/invitacion/', // ← importante si no es tu dominio principal
  server: {
    watch: {
      usePolling: true, // Utiliza "polling" para detectar cambios en algunos entornos
      interval: 100,    // Intervalo de detección en ms
    },
    // Increase performance for local development
    hmr: {
      overlay: false // Disable error overlay that can cause lag
    },
    fs: {
      strict: false // Enable strict file serving
    },
    historyApiFallback: true, // Enable history API fallback
  },
  plugins: [react({
      // Disable React Fast Refresh during animation development
      fastRefresh: false, // Only for animation testing, re-enable for normal dev
    }),
    tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: [
      'framer-motion',
      'react',
      'react-dom'],
      force: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'framer-motion': ['framer-motion']
        }
      }
    }
  },
  esbuild: {
    // Faster JavaScript transformation
    target: 'es2020',
    // Remove console logs in dev for better performance (optional)
    // drop: ['console', 'debugger']
  },
   // CSS processing optimizations
  css: {
    devSourcemap: false // Disable CSS source maps for better performance
  }
})


// Alternative minimal vite.config.js for animation development
/*
export default defineConfig({
  plugins: [react({ fastRefresh: false })],
  server: { hmr: { overlay: false } },
  optimizeDeps: { include: ['framer-motion'], force: true },
  css: { devSourcemap: false }
})
*/