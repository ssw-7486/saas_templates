# Mandatory Project Rules

These rules apply to the **entire project**. All contributors and AI assistance must follow them. They implement and extend [REPO_STANDARDS.md](REPO_STANDARDS.md).

---

## 1. Repo contract (mandatory)

- **Node:** Use the version in `.nvmrc`; run `nvm use` before `npm install` / scripts.
- **Package manager:** **npm** only. Commit `package-lock.json`. No yarn, pnpm, or bun.
- **Scripts:** Exactly these names: `dev`, `build`, `lint`, `test`. Implementation depends on framework; see [FRAMEWORK_VITE_VS_NEXT.md](FRAMEWORK_VITE_VS_NEXT.md).
- **Port:** Explicit via env. **Vite:** `VITE_PORT` in `.env.example` and `vite.config.ts` with `server.strictPort: true`. **Next:** `PORT` in `.env.example` and `next dev --port ${PORT:-3000}` (or equivalent).
- **DB:** SQLite at a **gitignored** path (e.g. `./.data/dev.db`). Schema in `db/schema.sql`, optional `db/seed.sql`. Scripts: `db:init`, `db:migrate`, `db:seed`.

---

## 2. Framework: one per repo

- **Either** Vite **or** Next.js — not both in the same app root.
- Follow [FRAMEWORK_VITE_VS_NEXT.md](FRAMEWORK_VITE_VS_NEXT.md) for port env var, config, and script mapping.
- Do not introduce the other framework’s entry (e.g. no `index.html` app entry if using Next; no `app/` router if using Vite-only).

---

## 3. Code and structure

- **TypeScript:** Strict mode. No `any` without a short comment justifying it. Prefer explicit types for function args and return values.
- **React:** Functional components and hooks only. Colocate component logic; extract reusable logic into custom hooks.
- **Styling:** Use the design system (see [DESIGN_SYSTEM.md](../DESIGN_SYSTEM.md) and [COLOR_ACCESSIBILITY.md](../COLOR_ACCESSIBILITY.md)). Tailwind utility classes; for Vite use Tailwind v4 `@theme` in CSS; for Next follow the framework doc.
- **Accessibility:** WCAG 2.1 AA. Min contrast 4.5:1 normal text, 3:1 large text and UI. Focus visible; touch targets min 44×44px. Use semantic HTML and ARIA where needed.
- **Files:** One main component per file. Place shared UI in `src/components/ui/`, page-level in `src/pages/` (or `app/` for Next).

---

## 4. Diagrams and flows (Mermaid)

- **Location:** All Mermaid diagrams for flows and UX live under **`docs/diagrams/`**.
- **Purpose:** Visualize user flows, app navigation, and key processes to align UX and implementation.
- **Format:** Use Mermaid inside `.md` files (e.g. `app-flow.md`, `user-flows.md`) so they render on GitHub and in editors.
- **Rule:** When adding or changing a significant user flow or navigation, add or update the corresponding diagram in `docs/diagrams/` and keep it in sync with the app.

---

## 5. Documentation

- **README:** Must document how to run the app (`npm install`, `npm run dev`), the port env var, a **documents overview** (all docs and how they are used), and how **PRD** (e.g. from ChatPRD) and **specs** (e.g. GitHub Specs / `specs/`) are used together to build the app. Link to [docs/REPO_STANDARDS.md](REPO_STANDARDS.md) and [docs/FRAMEWORK_VITE_VS_NEXT.md](FRAMEWORK_VITE_VS_NEXT.md).
- **.env.example:** Must list every env var the app uses (at least the dev port). No secrets.
- **PRD and specs:** PRD (e.g. `PRD.md` from ChatPRD) defines product scope; specs (in `specs/` or from GitHub Specs / .specify) provide detailed requirements. Use both when implementing.
- **Changes to contract or framework:** Update [REPO_STANDARDS.md](REPO_STANDARDS.md) or [FRAMEWORK_VITE_VS_NEXT.md](FRAMEWORK_VITE_VS_NEXT.md) and this file if the mandatory rules change.

---

## Summary

| Area           | Mandatory rule |
|----------------|----------------|
| Repo           | .nvmrc, npm only, scripts `dev`/`build`/`lint`/`test`, explicit port, SQLite gitignored |
| Framework      | One of Vite or Next; follow FRAMEWORK_VITE_VS_NEXT |
| Code           | TypeScript strict, React functional, design system, WCAG AA |
| Diagrams       | Mermaid in `docs/diagrams/`; keep flows/UX in sync |
| Docs           | README run instructions + port; .env.example; update RULES/REPO_STANDARDS when contract changes |

---

**Version:** 1.0  
**Last updated:** 2026-01-31
