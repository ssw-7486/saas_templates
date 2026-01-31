# Framework: Vite vs Next.js

Repos must follow the same **contract** (scripts, port policy, DB policy). How you implement that contract depends on whether the app uses **Vite** or **Next.js**. This doc spells out what must happen for each.

---

## Rule: One framework per repo

- **Either** Vite **or** Next.js — not both in the same app root.
- The template ships **Vite**. If you choose Next.js instead, you must still satisfy [REPO_STANDARDS.md](REPO_STANDARDS.md) (scripts, port, env, DB).

---

## Port policy (framework-specific)

| Framework | Env var | Default | Where it’s used |
|-----------|---------|---------|------------------|
| **Vite**  | `VITE_PORT` | `5173` | `vite.config.ts` — read via `loadEnv()` and set `server.port`. |
| **Next.js** | `PORT` | `3000` | Next reads `PORT` automatically for `next dev`. Document it in `.env.example`. |

**Requirements (both):**

- The port must be **explicit** (no “next available port” fallback).
- **Vite:** Set `server.strictPort: true` so the process fails if the port is in use.
- **Next.js:** Use `--port $PORT` (or equivalent) so the port comes from env; avoid default 3000 without env.
- **Document** the env var and default in `.env.example` and in the README (or this doc).

---

## Vite: what must be in place

1. **`.env.example`** must include:
   ```bash
   VITE_PORT=5173
   ```

2. **`vite.config.ts`** (or `vite.config.js`) must:
   - Load the port from env, e.g. `loadEnv(mode, process.cwd(), '')` then `Number(env.VITE_PORT) || 5173`.
   - Set `server.port` to that value and `server.strictPort: true`.

3. **Standard scripts** must map as follows:
   - `dev` → `vite` (Vite uses port from config).
   - `build` → `tsc -b && vite build` (or equivalent: type-check + Vite build).
   - `lint` → `eslint .` (or your chosen linter).
   - `test` → test runner or placeholder (e.g. `echo "No tests yet"`).

4. **Entry:** Root `index.html` with a script tag to the app entry (e.g. `/src/main.tsx`). App code lives under `src/` (or your chosen layout).

5. **No** auto port switching: if the port is in use, the dev server must fail or the user must change `VITE_PORT`.

---

## Next.js: what must be in place

1. **`.env.example`** must include:
   ```bash
   PORT=3000
   ```

2. **`next.config.js`** (or `next.config.mjs` / `next.config.ts`) — no need to set port there; Next reads `PORT` from the environment when running `next dev`.

3. **Standard scripts** must map as follows:
   - `dev` → `next dev` (Next uses `PORT` from env; if unset, it defaults to 3000 — document that in README).
   - **Recommended:** Use `next dev --port ${PORT:-3000}` so the port is always from env with a documented default.
   - `build` → `next build` (optionally preceded by `tsc --noEmit` if you want strict type-check in build).
   - `lint` → `next lint` (or `eslint .` if you use a custom ESLint config).
   - `test` → test runner or placeholder.

4. **Entry:** Next uses `app/` (App Router) or `pages/` (Pages Router). No root `index.html` for the app; Next generates it.

5. **Port behavior:** Next does not have a built-in “strict port” mode. Document that users should set `PORT` in `.env` and, if the port is in use, change it or stop the other process. Optionally use `--port` in the `dev` script so the port is always explicit from env.

---

## Script mapping summary

| Script   | Vite | Next.js |
|----------|------|---------|
| `dev`    | `vite` (port from `vite.config` via `VITE_PORT`) | `next dev` or `next dev --port ${PORT:-3000}` |
| `build`  | `tsc -b && vite build` | `next build` (optionally `tsc --noEmit && next build`) |
| `lint`   | `eslint .` | `next lint` or `eslint .` |
| `test`   | Test command or placeholder | Test command or placeholder |

---

## Tailwind (both)

- **Vite:** This template uses Tailwind v4 with `@import "tailwindcss"` and `@theme` in CSS (no `tailwind.config.js`). PostCSS: `@tailwindcss/postcss`.
- **Next.js:** Can use Tailwind v3 (e.g. `tailwind.config.ts`) or v4; document which version and where config lives (e.g. `tailwind.config.ts` for v3, or `@theme` in global CSS for v4).

---

## Checklist: “I’m using Vite”

- [ ] `.env.example` has `VITE_PORT=5173` (or your chosen default).
- [ ] `vite.config.ts` reads `VITE_PORT` via `loadEnv`, sets `server.port` and `server.strictPort: true`.
- [ ] Scripts: `dev`, `build`, `lint`, `test` exist and match the contract.
- [ ] Port is documented (README or REPO_STANDARDS / this doc).

---

## Checklist: “I’m using Next.js”

- [ ] `.env.example` has `PORT=3000` (or your chosen default).
- [ ] `dev` script uses `next dev` and preferably `--port ${PORT:-3000}` (or equivalent) so port is from env.
- [ ] Scripts: `dev`, `build`, `lint`, `test` exist and match the contract.
- [ ] Port is documented (README or REPO_STANDARDS / this doc).
- [ ] No Vite-specific files (e.g. root `index.html` as app entry, `vite.config.ts`) unless you have a hybrid setup (not recommended).

---

**Version:** 1.0  
**Last updated:** 2026-01-31
