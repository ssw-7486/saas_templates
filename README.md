# SaaS Template

GitHub template repository for web SaaS projects. **This template uses Vite + React + TypeScript.** If you use Next.js instead, follow [docs/FRAMEWORK_VITE_VS_NEXT.md](docs/FRAMEWORK_VITE_VS_NEXT.md) for port, scripts, and config.

- **Node:** [.nvmrc](.nvmrc). **Package manager:** npm. **Port:** explicit via env (see below).

## Prerequisites

- **Node:** See [.nvmrc](.nvmrc) (e.g. `nvm use` or install that version).
- **Env:** Copy [.env.example](.env.example) to `.env` and set values. **Vite:** use `VITE_PORT`. **Next:** use `PORT`. See [docs/FRAMEWORK_VITE_VS_NEXT.md](docs/FRAMEWORK_VITE_VS_NEXT.md).

## Quick start

```bash
npm install
npm run dev
```

Open the URL shown in the terminal. **Vite default:** `http://localhost:5173` (port from `VITE_PORT` in `.env`). **Next default:** `http://localhost:3000` (port from `PORT`). See [docs/FRAMEWORK_VITE_VS_NEXT.md](docs/FRAMEWORK_VITE_VS_NEXT.md) and [FRONTEND_SETUP_TROUBLESHOOTING.md](FRONTEND_SETUP_TROUBLESHOOTING.md) if the port is in use.

## Scripts

| Script     | Description        |
|-----------|--------------------|
| `npm run dev`    | Start dev server (port from `.env`) |
| `npm run build`  | Type-check + production build      |
| `npm run lint`   | Run ESLint                         |
| `npm run test`   | Run tests (placeholder until tests exist) |
| `npm run preview`| Preview production build           |

All repos must follow [docs/REPO_STANDARDS.md](docs/REPO_STANDARDS.md). Script and port behavior depend on framework (Vite vs Next): see [docs/FRAMEWORK_VITE_VS_NEXT.md](docs/FRAMEWORK_VITE_VS_NEXT.md).

## Docs

- [docs/REPO_STANDARDS.md](docs/REPO_STANDARDS.md) — Contract every repo must follow.
- [docs/FRAMEWORK_VITE_VS_NEXT.md](docs/FRAMEWORK_VITE_VS_NEXT.md) — **Vite vs Next:** port env var, scripts, config (required reading if you switch framework).
- [FRONTEND_SETUP_TROUBLESHOOTING.md](FRONTEND_SETUP_TROUBLESHOOTING.md) — Port, Tailwind, setup issues (Vite-focused; Next port in framework doc).
- [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) — Colors, typography, spacing, components.
- [COLOR_ACCESSIBILITY.md](COLOR_ACCESSIBILITY.md) — WCAG 2.1 AA and contrast.
- [MVP_REQUIREMENTS.md](MVP_REQUIREMENTS.md) — Reference product spec (Stella); replace with your own.
- [SESSION_SUMMARY.md](SESSION_SUMMARY.md) — Session notes template.

## Database (SQLite, lightweight)

- **Location:** SQLite file is **gitignored** at `./.data/dev.db`.
- **Schema/seed:** `db/schema.sql`, `db/seed.sql` (optional).
- **Scripts:**
  - `npm run db:init` — Create `.data` dir and DB file if missing.
  - `npm run db:migrate` — Apply `db/schema.sql`.
  - `npm run db:seed` — Apply `db/seed.sql` if present.

## Structure

- `src/` — React app (pages, components/ui, main, App, index.css).
- `public/` — Static assets.
- `db/` — `schema.sql`, `seed.sql` (SQLite).
- `data/`, `specs/`, `scripts/` — App data, specs, DB helper script.

## Using this template on GitHub

Use **Use this template** → **Create a new repository** to start a new project from this repo.
