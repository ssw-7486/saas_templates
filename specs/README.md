# Specs

This folder holds **detailed specs** that complement the product requirements (PRD).

## Purpose

- **PRD** (e.g. `PRD.md` at repo root, from ChatPRD) defines **what** to build: vision, scope, priorities.
- **Specs** in this folder (or from GitHub Specs / .specify) define **how** in detail: flows, acceptance criteria, edge cases.

Use both together when building the app: PRD for scope and order, specs for per-feature requirements.

## Where to put specs

- **This folder (`specs/`):** Add markdown or other spec files here (e.g. `specs/my-feature.md`).
- **GitHub Specs / .specify:** If you use GitHub Specs or a `.specify` layout, you can keep detailed specs there and reference them from the PRD. This template keeps `specs/` as the standard place so PRD + specs are clearly complementary.

## Workflow

1. **PRD** (ChatPRD or `PRD.md` / `MVP_REQUIREMENTS.md`) — product scope and phases.
2. **Specs** (this folder or GitHub Specs) — detailed requirements per feature.
3. **Template docs** ([docs/RULES.md](../docs/RULES.md), [docs/diagrams/](../docs/diagrams/)) — standards and flows.

Reference all three when implementing.
