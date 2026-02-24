# [LOG] Cheongsa Designer Decision
- **Decision**: Use Tailwind CSS for rapid and consistent styling.
- **Rationale**: To provide a professional 'Admin Dashboard' feel with minimal bundle size.
- **Decision**: Implement 'Glassmorphism' cards for a modern AI-agent workspace look.

# Madang-Schedule v2: Visual Design System

## 1. Design Tokens (Tailwind Config)
- **Colors**:
    - `brand-primary`: `#1E293B` (Slate 800)
    - `brand-accent`: `#3B82F6` (Blue 500)
    - `status-urgent`: `#EF4444` (Red 500)
- **Shadows**: `shadow-lg`, `hover:shadow-2xl` transition.

## 2. Component Hierarchy
- `Navbar`: Global navigation.
- `ScheduleList`: Grouped by date.
- `ScheduleCard`: Visual indicator for priority (Color-coded bar).
- `ScheduleModal`: Focus state for creation/editing.

---
*Designed by Cheongsa - Aesthetic Governance v2.0*
