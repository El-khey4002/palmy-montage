import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// base: './' → le site fonctionne partout (GitHub Pages, Netlify, Vercel, ouverture locale)
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
});
