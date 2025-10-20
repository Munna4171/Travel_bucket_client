// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  
  // 🔥 ADDED: Proxy configuration to fix the "Not Found" error
  server: {
    proxy: {
      // Any request starting with '/api' (like /api/auth/signup)
      '/api': {
        // Will be forwarded to your Express server
        target: 'http://localhost:8080', 
        // This is necessary for a successful backend connection
        changeOrigin: true,
      },
    },
  },
  // 🔥 END of Proxy configuration
  
  // *** CRITICAL TAILWIND/POSTCSS CONFIGURATION ***
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
  // **********************************************
});