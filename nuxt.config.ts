import tailwindcss from '@tailwindcss/vite'

const DEFAULT_BASEURL = 'https://open-api.delcom.org/api/v1'
const FONT_URL =
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false, // SPA mode
  srcDir: 'src/',
  pages: true, // rute dideklarasikan di src/routes.ts melalui src/router.options.ts
  modules: ['@pinia/nuxt'],
  css: ['~/index.css'],
  devtools: { enabled: false },
  telemetry: false,
  sourcemap: { client: true, server: false },
  devServer: {
    port: Number(process.env.APP_PORT) || 3000,
  },
  vite: {
    plugins: [tailwindcss()],
    define: {
      // variabel lingkungan global (lihat src/env.d.ts)
      DELCOM_BASEURL: JSON.stringify(process.env.VITE_DELCOM_BASEURL || DEFAULT_BASEURL),
    },
    build: {
      chunkSizeWarningLimit: 1500,
    },
  },
  nitro: {
    devPort: Number(process.env.APP_PORT) || 3000,
    externals: { inline: ['@vue/shared'] },
  },
  app: {
    head: {
      title: 'Delcom Cash Flow',
      htmlAttrs: { lang: 'id' },
      meta: [
        {
          name: 'description',
          content:
            'Delcom Cash Flow: aplikasi pencatat pemasukan dan pengeluaran, pantau saldo kas, tabungan, dan pinjaman.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        // Dimuat non-blocking agar tidak menghambat render pertama.
        { rel: 'preload', as: 'style', href: FONT_URL, onload: "this.onload=null;this.rel='stylesheet'" },
      ],
      noscript: [{ innerHTML: `<link rel="stylesheet" href="${FONT_URL}">` }],
    },
  },
})
