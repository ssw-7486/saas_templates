# Stella Design System

*(Included from poc_stella; rename "Stella" to your product as needed.)*

## Color Scheme

### Monochrome Teal Palette
A cohesive teal color system ranging from dark navy to light cyan.

**Primary Scale:**
- **Navy Darkest**: `#07464C` - Primary text, headers, dark backgrounds
- **Navy Dark**: `#0B6873` - Secondary text, darker accents
- **Primary**: `#12AEBF` - Main interactions, links, primary CTAs
- **Primary Light**: `#71CED9` - Hover states, secondary actions, accents
- **Primary Lighter**: `#A0DFE5` - Input backgrounds, subtle highlights
- **Primary Lightest**: `#D0EFF2` - Card backgrounds, page backgrounds

**Neutral Greys:**
- **Dark Grey**: `#888888` - Borders, disabled states, muted text
- **Light Grey**: `#DDDDDD` - Dividers, subtle backgrounds

**White:**
- **White**: `#FFFFFF` - Card surfaces, contrasting elements

### Design Tokens (Tailwind CSS Variables)
Defined in `src/index.css` via Tailwind v4 `@theme`:
- `--color-navy-darkest`, `--color-navy-dark`, `--color-primary`, etc.
- `--radius: 12px`

### Color Usage Guidelines
- **Text**: Use Navy Darkest (#07464C) for primary text, Navy Dark (#0B6873) for secondary
- **Backgrounds**: Primary Lightest (#D0EFF2) for page backgrounds, White (#FFFFFF) for cards
- **Interactive Elements**: Primary (#12AEBF) for buttons/links, Primary Light (#71CED9) for hover states
- **Borders**: Primary Light (#71CED9) for focus states, Dark Grey (#888888) for default borders
- **Status Indicators**: Primary Light (#71CED9) for success/completion states

---

## Typography

- **Primary**: System font stack (San Francisco on macOS, Segoe UI on Windows)
- **Scale**: H1 3rem, H2 2rem, H3 1.5rem, Body 1rem, Small 0.875rem

---

## Spacing (8px base grid)

- **xs**: 4px — **sm**: 8px — **md**: 16px — **lg**: 24px — **xl**: 32px — **2xl**: 48px

---

## Components

### Buttons
- **Primary**: Primary (#12AEBF) background, white text, 12px border radius, min 44×44px
- **Secondary**: Primary Medium (#4AB8C8) for WCAG AA
- **Outline**: Transparent, Primary border and text

### Cards
- White background, optional 1px Light Grey border, 12px radius, 24px padding

### Inputs
- Background Primary Lighter (#A0DFE5), border Primary Light or Navy Dark (focus), 12px radius, min 44px height

### Badges
- 8px radius, variants: success, info, neutral, warning, error

---

## Layout Patterns

- **Split Screen (Login)**: 40% brand panel (navy), 60% form panel
- **Dashboard**: Top nav, stats grid, two-panel (activity + job list)
- **Wizard**: Full-width form, fixed side panel for progress/summary (e.g. 70/30)

---

## Accessibility

- Contrast: 4.5:1 normal text, 3:1 large text and UI
- Focus: Visible 2px outline with offset
- Touch targets: Min 44×44px
- Full keyboard support

---

## File Structure (this template)

```
src/
  components/ui/   # Button, Input, Card, Badge, Navigation
  pages/          # Login, Dashboard, QuickStart, Workflows, Jobs, Documents, Settings
  App.tsx, main.tsx, index.css
```

---

**Version**: 1.0.0  
**Last Updated**: 2026-01-30
