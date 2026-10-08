import tailwindcss from '@tailwindcss/vite'

const DEFAULT_BASEURL = 'https://open-api.delcom.org/api/v1'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false, // SPA mode
  srcDir: 'src/',
  pages: true, // rute dideklarasikan di src/routes.ts melalui src/router.options.ts
  modules: ['@pinia/nuxt'],
  css: ['~/index.css'],
  devtools: { enabled: false },
  devServer: {
    port: Number(process.env.APP_PORT) || 3000,
  },
  vite: {
    plugins: [tailwindcss()],
    define: {
      // variabel lingkungan global (lihat src/env.d.ts)
      DELCOM_BASEURL: JSON.stringify(process.env.VITE_DELCOM_BASEURL || DEFAULT_BASEURL),
    },
  },
  app: {
    head: {
      title: 'Delcom Cash Flow',
      htmlAttrs: { lang: 'id' },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
        },
      ],
    },
  },
})
