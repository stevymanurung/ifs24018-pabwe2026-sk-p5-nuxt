# Delcom Cash Flow — Nuxt 4 (TypeScript)

Aplikasi pencatatan arus kas berbasis [Delcom Open API](https://open-api.delcom.org/docs/1.0/api-cash-flows).
Stack: **bun**, **Nuxt 4** (SPA, `ssr: false`), **TypeScript**, **Pinia**, **Tailwind CSS v4**, SweetAlert2, lucide-vue-next, Plus Jakarta Sans, Vitest.

## Menjalankan
```bash
bun install
cp .env.example .env      # VITE_DELCOM_BASEURL dan APP_PORT
bun run dev               # mode pengembangan
bun run build && bun run start   # build lalu preview (port dari APP_PORT via start.mjs)
bun run test:coverage     # unit + integration test, threshold coverage 100%
```

## Struktur utama
- `src/helpers` — `apiHelper.ts`, `toolsHelper.ts` · `src/hooks/useInput.ts` · `src/env.d.ts`
- `src/features/auth|users|cashflows|common` — `api/`, `states/` (Pinia), `layouts/`, `components/`, `pages/`
- `src/routes.ts` + `src/router.options.ts` — deklarasi rute · `src/test-utils.ts`, `src/setupTests.ts` — utilitas pengujian

Catatan: endpoint ubah password memakai `PUT /users/password` sesuai dokumentasi resmi Delcom Open API.
