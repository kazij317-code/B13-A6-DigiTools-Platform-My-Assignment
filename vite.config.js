

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// tailwindcss 
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // tailwindcss()
    react(),
    tailwindcss()
  ],
  base: "/B13-A6-DigiTools-Platform-My-Assignment/"
});
