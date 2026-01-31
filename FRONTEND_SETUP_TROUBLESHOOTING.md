# Frontend Setup Troubleshooting Guide

This template is **Vite + React + TypeScript** at the **repository root**. For what must happen if you use **Next.js** instead (port env var, scripts, config), see **[docs/FRAMEWORK_VITE_VS_NEXT.md](docs/FRAMEWORK_VITE_VS_NEXT.md)**.

---

## Port: fixed via env (framework-specific)

- **Vite:** Set **VITE_PORT** in `.env` (copy from [.env.example](.env.example)). Example: `VITE_PORT=5173`. Vite config must use `loadEnv()` and `server.strictPort: true`.
- **Next.js:** Set **PORT** in `.env`. Example: `PORT=3000`. Prefer `next dev --port ${PORT:-3000}` in the `dev` script so the port is from env. See [docs/FRAMEWORK_VITE_VS_NEXT.md](docs/FRAMEWORK_VITE_VS_NEXT.md).
- **Both:** No auto port switching; if the port is in use, change it in `.env` or free the port.

### Port already in use

```bash
# Find process
lsof -i :5173

# Kill it (replace PID with the number from lsof)
kill -9 <PID>

# Or use another port in .env
echo "VITE_PORT=5174" >> .env
npm run dev
```

---

## Remote / container access

If the dev server runs in a remote or container environment:

- **Option A:** Run locally: `git pull`, then `npm install` and `npm run dev` on your machine
- **Option B:** SSH port forward: `ssh -L 5173:localhost:5173 user@remote-host`, then open `http://localhost:5173`

---

## Tailwind CSS

- **Vite (this template):** Tailwind v4 with `@theme` in CSS (no `tailwind.config.js`). See below.
- **Next.js:** Can use Tailwind v3 (e.g. `tailwind.config.ts`) or v4; see [docs/FRAMEWORK_VITE_VS_NEXT.md](docs/FRAMEWORK_VITE_VS_NEXT.md).

### Vite: Tailwind v4

- **Import:** `@import "tailwindcss";` in `src/index.css`
- **Custom colors:** Define in `@theme { ... }` in `src/index.css` (see [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md))
- **PostCSS:** `postcss.config.js` uses `@tailwindcss/postcss` and `autoprefixer`

If styles don’t apply:

1. Confirm `src/index.css` has `@import "tailwindcss"` and your `@theme` block
2. Confirm `postcss.config.js` has `'@tailwindcss/postcss': {}`
3. Remove any legacy `tailwind.config.js` or `tailwind.config.ts` from the project
4. Restart the dev server

Check version: `npm list tailwindcss` (expect v4.x).

---

## Clean install

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## Quick reference

```bash
# Port in use
lsof -i :5173
kill -9 $(lsof -t -i:5173)

# Clear Vite cache (Vite only)
rm -rf node_modules/.vite

# Next.js: clear Next cache
# rm -rf .next
```

---

**Last Updated:** 2026-01-30
