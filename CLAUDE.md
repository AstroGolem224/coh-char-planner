# CoH Char Planner - Coding Standards

## Tech Stack
- React 19 + TypeScript + Vite 5
- CSS Modules with CSS custom properties (NO Tailwind, NO UI library)
- Zustand 5 for state management
- React Router 7 for routing
- localStorage + JSON export/import for persistence

## Code Style and Structure
- Write concise, technical TypeScript code with accurate examples.
- Use functional and declarative programming patterns; avoid classes.
- Favor iteration and modularization over code duplication.
- Use descriptive variable names with auxiliary verbs (e.g., `isLoading`, `hasError`).
- Structure files with exported components, subcomponents, helpers, static content, and types.
- Use lowercase with dashes for directory names (e.g., `components/auth-wizard`).

## Optimization and Best Practices
- Minimize the use of `useEffect` and `setState`; favor derived state and `useMemo`.
- Implement dynamic imports for code splitting and optimization.
- Use responsive design with a mobile-first approach.
- Optimize images: use WebP/SVG format, include size data, implement lazy loading.
- Use `import.meta.glob` for auto-discovering data files (powersets, etc.).

## Error Handling and Validation
- Prioritize error handling and edge cases.
- Use early returns for error conditions.
- Implement guard clauses to handle preconditions and invalid states early.
- Use custom error types for consistent error handling.

## UI and Styling
- Use CSS Modules (`.module.css`) for component-scoped styles.
- Use CSS custom properties (defined in `globals.css`) for theming.
- Implement consistent design with the CoH dark theme aesthetic.
- Fonts: Oswald (headings), Roboto (body), Roboto Mono (stats).
- Colors: Dark navy backgrounds, electric blue/gold accents.

## State Management and Data Fetching
- Use Zustand stores for global state (`buildStore`, `uiStore`).
- Keep stores minimal; derive computed values in components with `useMemo`.
- Use Zustand `persist` middleware for localStorage auto-save.

## Security and Performance
- Implement proper error handling and user input validation.
- Follow performance optimization techniques (memoization, lazy loading).
- Validate imported build JSON before applying.

## Testing and Documentation
- Provide clear and concise comments for complex logic only.
- Use JSDoc comments for utility functions and type exports.
- Do not add comments to self-explanatory code.

## Project Structure
```
src/
  components/    # React components with co-located .module.css
  data/          # Hardcoded game data (archetypes, powersets, enhancements)
  pages/         # Route-level page components
  store/         # Zustand stores
  styles/        # Global CSS, theme, animations
  types/         # TypeScript interfaces
  utils/         # Pure utility functions
public/icons/    # SVG icons
builds/          # Sample .coh.json build files
```

## Methodology
1. Analyze requirements and break into manageable parts.
2. Plan architecture and data flow before implementing.
3. Implement step-by-step following these standards.
4. Review for optimization, edge cases, and improvements.
5. Verify TypeScript compiles clean (`npx tsc --noEmit`).
