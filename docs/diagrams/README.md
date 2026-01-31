# Mermaid Diagrams

This folder holds **Mermaid diagrams** that visualize flows and help UX alignment. All flow and UX diagrams for the project live here.

## Purpose

- **Flows:** App navigation, user journeys, and key processes.
- **UX:** Shared reference for design and implementation so everyone sees the same flows.
- **Sync:** When you add or change a significant user flow or route, add or update the diagram here and keep it in sync with the app.

## Format

- Use **Mermaid** inside **`.md`** files so they render on GitHub and in editors that support Mermaid.
- One logical flow per file (or one file with multiple diagrams and clear headings).
- Name files by flow: e.g. `app-flow.md`, `user-flows.md`, `auth-flow.md`.

## Files in this folder

| File | Description |
|------|-------------|
| [app-flow.md](app-flow.md) | High-level app navigation (routes and entry points). |
| [user-flows.md](user-flows.md) | User flows for login and dashboard (for UX). |

## How to add a diagram

1. Create or edit a `.md` file in `docs/diagrams/`.
2. Use a Mermaid code block:

   ````markdown
   ## My flow
   ```mermaid
   flowchart LR
     A --> B --> C
   ```
   ````

3. Commit the file and keep it in sync when the app changes.
4. Reference the diagram from [docs/RULES.md](../RULES.md) or README if it becomes a primary flow.

## Mermaid resources

- [Mermaid live editor](https://mermaid.live/)
- [Mermaid docs](https://mermaid.js.org/intro/) (flowchart, sequenceDiagram, etc.)
