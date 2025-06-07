# WonderStories

Proyecto para generar cuentos personalizados con Supabase y Stripe.

## Configuración

```bash
npm install
cp .env.example .env
```

Define las variables `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON` y `VITE_STRIPE_PK`.

### Scripts
- `npm run dev` ejecuta la app en local.
- `npm run build` genera la versión de producción.

### Deploy

```bash
supabase link
npm run build && vercel
```
