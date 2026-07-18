import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Automatically update service worker
      includeAssets: ['favicon.svg', 'robots.txt', 'triodeLogo.png', 'apple-touch-icon.png'], // include assets
      manifest: {
        name: 'Triode Studio',
        short_name: 'Triode',
        description: 'Our Company PWA app',
        theme_color: '#052659',
        background_color: '#052659',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'triodeLogo.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'triodeLogo.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'triodeLogo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            // Cache API or CDN requests
            urlPattern: /^https:\/\/your-cdn-or-api\/.*$/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 24 * 60 * 60, // 1 day
              },
            },
          },
        ],
      },
    }),
  ],
});
