# User Flows (UX)

Mermaid diagrams for key user flows. Use these to align UX and implementation.

## Login flow

```mermaid
sequenceDiagram
  participant U as User
  participant L as Login page
  participant A as App

  U->>L: Open /login
  L->>U: Show split-screen (brand + form)
  U->>L: Click "Sign in with SSO" OR enter email/password
  L->>A: Navigate to /dashboard
  A->>U: Show dashboard
```

```mermaid
flowchart LR
  A[Land on /login] --> B{Sign in}
  B -->|SSO| C[/dashboard]
  B -->|Email + password| C
```

## Dashboard flow

```mermaid
flowchart TB
  subgraph Dashboard
    Nav[Top nav: Dashboard, Workflows, Jobs, Documents, Settings]
    Stats[Stats: Total jobs, Accuracy, Avg time, Per-customer]
    Activity[Activity: System health, Current batch, Recent activity]
    JobList[Job list with filters]
    QuickStart[Quick Start button]
  end

  Nav --> Stats
  Nav --> Activity
  Nav --> JobList
  QuickStart --> Wizard["/quick-start"]
  Nav --> Workflows["/workflows"]
  Nav --> Jobs["/jobs"]
  Nav --> Documents["/documents"]
  Nav --> Settings["/settings"]
```

## Navigation (from dashboard)

```mermaid
flowchart LR
  D[Dashboard] --> W[Workflows]
  D --> J[Jobs]
  D --> Doc[Documents]
  D --> S[Settings]
  D --> Q[Quick Start]
```

Add or edit diagrams here when you change login, dashboard, or navigation flows.
