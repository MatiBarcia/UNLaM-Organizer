import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'UNLaM Organizer',
        short_name: 'UNLaM Organizer',
        description: 'Seguimiento de progreso académico y mapa de correlatividades para carreras de la UNLaM.',
        lang: 'es-AR',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#101010',
        theme_color: '#101010',
        icons: [
          { src: '/pwa/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/pwa/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: '/pwa/icon-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // Precachea solo el build propio (JS/CSS/HTML/íconos); Google Fonts, el script
        // de GIS y las llamadas a Drive/Google APIs quedan afuera: son de otro origen y
        // dependen de red por diseño (login, sync, progreso en la nube), no hay que
        // cachearlas ni arriesgarse a servir tokens/datos stale.
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,woff2}'],
      },
    }),
  ],
})
