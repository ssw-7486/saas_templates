# App Flow — High-Level Navigation

High-level app entry and route structure. Use this to align UX and implementation.

## Entry and routes

```mermaid
flowchart TB
  subgraph Entry
    Root["/"]
    Login["/login"]
  end

  subgraph App["Authenticated app"]
    Dashboard["/dashboard"]
    QuickStart["/quick-start"]
    Workflows["/workflows"]
    Jobs["/jobs"]
    Documents["/documents"]
    Settings["/settings"]
  end

  Root -->|redirect| Login
  Login -->|sign in| Dashboard
  Dashboard --> QuickStart
  Dashboard --> Workflows
  Dashboard --> Jobs
  Dashboard --> Documents
  Dashboard --> Settings
```

## Route map (for UX)

| Route | Purpose |
|-------|---------|
| `/` | Redirect to `/login` |
| `/login` | Login / welcome (split-screen) |
| `/dashboard` | Main dashboard (stats, activity, job list) |
| `/quick-start` | Quick start wizard |
| `/workflows` | Workflow editor |
| `/jobs` | Job list |
| `/documents` | Document upload / list |
| `/settings` | Settings |

Update this diagram when you add or remove routes.
