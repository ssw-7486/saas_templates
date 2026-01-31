# Repo Standards Contract

Every repo created from this template (or adopting these standards) **must** follow this contract. No exceptions.

---

## 1. Node version

- **Mechanism:** `.nvmrc` at repo root with a single line: the Node version (e.g. `20` or `22`).
- **Requirement:** All contributors and CI use this version. Run `nvm use` (or equivalent) before `npm install` / scripts.
- **Recommendation:** Use a current LTS line (e.g. 20).

---

## 2. Package manager

- **One package manager only:** **npm**.
- **No:** yarn, pnpm, bun, or mixed lockfiles in the same repo.
- **Lockfile:** Commit `package-lock.json`. Use `npm install` for installs and CI.

---

## 3. Standard scripts

Every repo **must** define these `package.json` scripts. Implementations **differ by framework** (Vite vs Next); see [FRAMEWORK_VITE_VS_NEXT.md](FRAMEWORK_VITE_VS_NEXT.md) for the exact mapping. The **names** are fixed:

| Script           | Contract |
|------------------|----------|
| `npm run dev`    | Start the development server. Port must be explicit (see Port policy). |
| `npm run build`  | Production build (e.g. type-check + bundle). Must succeed with no errors for a clean tree. |
| `npm run lint`   | Run the linter. Must be invokable with no extra args. |
| `npm run test`   | Run tests. **Placeholder allowed:** e.g. `echo "No tests yet"` that exits 0 until tests exist. |

- **Requirement:** New clones must be able to run `npm install` then `npm run dev` (and the other three) without undocumented steps.
- **No:** Script names that differ from the above (e.g. no `start` instead of `dev` for the dev server).

---

## 4. Port policy

- **Repo-specific but explicit:** Each repo chooses its dev port(s), but they must **not** be implicit or auto-incremented.
- **Framework-specific:** The env var and config differ by framework. See [FRAMEWORK_VITE_VS_NEXT.md](FRAMEWORK_VITE_VS_NEXT.md) for exactly what to do.
  - **Vite:** Use **`VITE_PORT`** (e.g. default `5173`). Set in `vite.config.ts` via `loadEnv()` and `server.port`; set `server.strictPort: true`.
  - **Next.js:** Use **`PORT`** (e.g. default `3000`). Document in `.env.example`; prefer `next dev --port ${PORT:-3000}` so the port is from env.
- **Documentation:** The chosen port(s) and env var must be documented (e.g. in README or this doc).
- **Requirement:** No “next available port” behavior; if the port is in use, the process should fail or the user must change the env var.

---

## 5. Database policy

- **Local / dev:** Use **SQLite** by default. Zero config, file-based, good for local and CI.
- **DB file location:** The SQLite file must live in a **gitignored** path (e.g. `./.data/dev.db`). Never commit the DB file.
- **Lightweight by default:** Commit a `db/` folder with `schema.sql` (or a migrations folder) and optional `seed.sql`. Provide scripts: `npm run db:init` (create DB file if missing), `npm run db:migrate` (apply schema), `npm run db:seed` (optional, apply seed).
- **Swap later:** Schema and access layer must be written so that switching to another DB (e.g. PostgreSQL) later is feasible without rewriting app logic (e.g. use an ORM or a thin data layer, not raw SQL in every route).
- **Requirement:** New repos that need a DB should start with SQLite for local/dev unless there is a documented reason not to.

---

## Summary checklist

Before considering a repo “compliant”:

- [ ] `.nvmrc` present with single Node version
- [ ] Only npm used; `package-lock.json` committed
- [ ] Scripts present: `dev`, `build`, `lint`, `test` (test may be placeholder); implementation matches [FRAMEWORK_VITE_VS_NEXT.md](FRAMEWORK_VITE_VS_NEXT.md) for your framework
- [ ] Port policy: env var and config match your framework (Vite: `VITE_PORT` + vite.config; Next: `PORT` + dev script); documented; `.env.example` includes port var
- [ ] If the app uses a DB: SQLite for local/dev, with a path to swap later

---

**Version:** 1.0  
**Last updated:** 2026-01-31
