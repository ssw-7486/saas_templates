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

## Documents overview

All documents in this repo and **how they are to be used**:

| Document | Purpose | How to use |
|----------|---------|------------|
| [docs/RULES.md](docs/RULES.md) | Mandatory project rules (repo contract, framework, code, diagrams) | **Read** before changing contract or code. **Update** when adding new mandatory rules. |
| [docs/REPO_STANDARDS.md](docs/REPO_STANDARDS.md) | Contract every repo must follow (Node, npm, scripts, port, DB) | **Read** when setting up or auditing a repo. **Update** when the contract changes. |
| [docs/FRAMEWORK_VITE_VS_NEXT.md](docs/FRAMEWORK_VITE_VS_NEXT.md) | Vite vs Next: port env var, scripts, config | **Read** when choosing or switching framework. **Update** when framework behavior or scripts change. |
| [docs/diagrams/](docs/diagrams/) | Mermaid diagrams for flows and UX | **Read** to align UX and implementation. **Update** when routes or user flows change. See [docs/diagrams/README.md](docs/diagrams/README.md). |
| [FRONTEND_SETUP_TROUBLESHOOTING.md](FRONTEND_SETUP_TROUBLESHOOTING.md) | Port, Tailwind, setup issues | **Read** when dev server or styles fail. **Update** when you add new troubleshooting steps. |
| [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) | Colors, typography, spacing, components | **Read** when building or styling UI. **Update** when the design system changes. |
| [COLOR_ACCESSIBILITY.md](COLOR_ACCESSIBILITY.md) | WCAG 2.1 AA and contrast | **Read** when choosing colors or auditing accessibility. **Update** when palette or compliance changes. |
| [MVP_REQUIREMENTS.md](MVP_REQUIREMENTS.md) | Reference product spec (Stella); replace with your PRD | **Replace** with your PRD (e.g. from ChatPRD) or keep as pattern. **Read** to scope the product. See “PRD + specs” below. |
| [SESSION_SUMMARY.md](SESSION_SUMMARY.md) | Session notes template | **Copy** per session; **fill** with accomplishments, decisions, next steps. |
| [.env.example](.env.example) | Env vars (port, etc.) | **Copy** to `.env` and set values. **Update** when adding new env vars. |
| **PRD.md** (optional) | Product requirements (e.g. from ChatPRD) | **Create** or paste from ChatPRD. **Read** when scoping and building. Complements `specs/` and GitHub Specs. See “PRD + specs” below. |
| **specs/** | Detailed specs (e.g. from GitHub Specs / .specify) | **Add** per-feature specs here. **Read** when implementing. Complements PRD. See [specs/README.md](specs/README.md). |

---

### Product requirements and specs (PRD + GitHub Specs)

**PRD** (e.g. from **ChatPRD**) and **GitHub Specs** (or other detailed specs) are **complementary** and together drive how you build the app:

| Source | Role | Where it lives | How to use |
|--------|------|----------------|------------|
| **PRD** (ChatPRD or similar) | Product vision, scope, priorities, success criteria | `PRD.md` at repo root, or replace [MVP_REQUIREMENTS.md](MVP_REQUIREMENTS.md) with your PRD | Defines **what** to build. **Read** when scoping work and planning phases. **Reference** in implementation and when writing specs. |
| **GitHub Specs / .specify** | Detailed functional and technical specs | `specs/` folder (or `.specify/` if you use that layout) | Defines **how** in detail (flows, acceptance criteria, edge cases). **Read** when implementing a feature. **Update** when refining requirements. |
| **Template docs** (RULES, REPO_STANDARDS, FRAMEWORK, diagrams) | How the repo and app are structured and run | `docs/`, root `.md` | Constrain **how** the app is built (framework, scripts, DB, UI). **Read** with PRD and specs when building. |

**Workflow:** Use the **PRD** to decide what to build and in what order. Use **specs** (in `specs/` or from GitHub Specs) for detailed requirements per feature. Use **template docs** (RULES, REPO_STANDARDS, diagrams) for structure, patterns, and UX. Reference all three when implementing: PRD for scope, specs for detail, template docs for standards and flows.

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
- `data/` — App data (e.g. fixtures, uploads).
- `specs/` — **Detailed specs** (e.g. from GitHub Specs / .specify). Use alongside [PRD.md](PRD.md) or [MVP_REQUIREMENTS.md](MVP_REQUIREMENTS.md) to build the app. See [specs/README.md](specs/README.md).
- `scripts/` — DB helper (`db.js`) and other runnable scripts.
- **PRD:** `PRD.md` at repo root (e.g. from ChatPRD), or replace `MVP_REQUIREMENTS.md` with your product requirements.

## Using this template on GitHub

Use **Use this template** → **Create a new repository** to start a new project from this repo.
