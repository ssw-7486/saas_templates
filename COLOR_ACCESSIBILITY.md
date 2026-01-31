# Color Accessibility Analysis

*(Included from poc_stella.)*

## WCAG AA Compliance Check

- **Normal text** (< 24px): 4.5:1 contrast minimum
- **Large text** (≥ 24px or ≥ 19px bold): 3:1 minimum
- **UI components**: 3:1 minimum

---

## Current Palette (WCAG status)

| Foreground     | Background | Contrast | Normal | Large |
|----------------|------------|----------|--------|-------|
| Navy Darkest   | White      | 12.15:1  | ✅     | ✅    |
| Navy Dark      | White      | 8.21:1   | ✅     | ✅    |
| Primary        | White      | 3.95:1   | ❌     | ✅    |
| Primary Light  | White      | 2.27:1   | ❌     | ❌    |
| Dark Grey      | White      | 3.54:1   | ❌     | ✅    |

**Usage:**
- **Body text**: Navy Darkest or Navy Dark on white/light grey
- **Primary as text**: Large text only (e.g. headings, links as large)
- **Secondary button**: Use Primary Medium (#4AB8C8) for white text; or Navy Darkest text on Primary Light background
- **Input focus border**: Navy Dark (#0B6873) for visibility

---

## Recommended Adjustments (if needed)

- Secondary button: Prefer `#4AB8C8` background with white text, or Navy Darkest text on `#71CED9`
- Input focus: Use Navy Dark (#0B6873) for border/outline
- Links: Prefer Navy Dark for all-size text; Primary for large only

---

**Standard:** WCAG 2.1 Level AA  
**Last Updated:** 2026-01-30
