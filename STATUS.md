# Project Status

**Status:** DONE
**Priority:** P3
**Architecture:** STANDARD
**Migration:** NONE
**Last Updated:** 2026-09-17

## Where It Is
A reusable Vite + React 19 + TypeScript starter template with a SQLite schema, seed data and a db CLI. It is scaffolding rather than a product — the page set is a UI shell carried over from the Stella POC.

## What Works
- `dev` / `build` / `lint` / `preview` scripts; a built `dist/` is committed.
- Database CLI: `db:init`, `db:migrate`, `db:seed` over `db/schema.sql` and `db/seed.sql`.
- Seven shell pages (dashboard, documents, jobs, login, quick start, settings, workflows) plus UI primitives.
- Design system, colour accessibility and repo standards documentation.

## Next
Nothing pending — use it by copying it, and replace `MVP_REQUIREMENTS.md` with the new project's own PRD.

## Remaining
- No tests (`npm test` is a placeholder echo).
- `SESSION_SUMMARY.md` is an unfilled template.

## Notes
`MVP_REQUIREMENTS.md` is poc_stella's spec included as a *pattern only* — replace it, do not build to it. The template defaults to Vite; `docs/FRAMEWORK_VITE_VS_NEXT.md` covers the Next.js variant. Ports come from `.env` (`VITE_PORT`), never hardcoded.
