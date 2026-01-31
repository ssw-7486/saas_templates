# MVP Requirements (Reference)

*(Included from poc_stella as a **reference product spec**. Replace this file with your own PRD or MVP requirements when starting a new project.)*

This document describes the Stella Document OCR SaaS MVP: local demo, MacBook Pro, mixed handwritten + machine-printed documents, workflow editor, job queue, admin dashboard, human review. Tech stack in that project: Next.js (later Vite in `frontend/`), Tailwind, SQLite, Prisma, BullMQ + Redis, React Flow, Ollama.

**Use this as a pattern only.** For your repo:

1. Copy or rewrite this file with your product name and scope
2. Keep the same structure if helpful: Tech stack, Critical priorities, Data/API, Workflows, Dashboard, Auth, Setup/scripts, Implementation phases

---

## Suggested sections for your MVP doc

- **Project overview** — What the product does and demo scenario
- **Tech stack** — Frontend (Vite + React + TS), backend, DB, queue, etc.
- **Critical MVP priorities** — Ordered list of what to build first
- **Data & storage** — Entities, schema, folder structure if any
- **Key flows** — e.g. workflow editor, job processing, dashboard, review
- **Auth & roles** — Stubbed vs real
- **Setup & run** — Prerequisites, env, scripts, troubleshooting link
- **Implementation phases** — Phased plan (e.g. setup → editor → processing → dashboard)
- **What NOT to build** — Defer or mock only
- **Success criteria** — Demo-ready checklist

---

**Original:** Stella POC MVP (poc_stella)  
**Last Updated:** 2026-01-30
