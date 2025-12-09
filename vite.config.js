import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-framer': ['framer-motion'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    // Optimize asset handling
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    minify: 'esbuild',
    // Remove console in production
    esbuild: {
      drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  // Performance optimizations
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
})
