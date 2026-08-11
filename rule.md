# ASTRA WEBSITE — DEVELOPMENT RULES

## 1. Code Standards

### TypeScript

- **Strict mode: ALWAYS** — no exceptions
- No `any` types unless absolutely necessary (document reason in comment)
- Prefer interfaces over types for object shapes
- Use `readonly` for immutable data
- Explicit return types on exported functions
- No unused imports or variables
- Use branded types for IDs: `type ToolId = string & { __brand: 'ToolId' }`

### File Naming

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `ToolCard.tsx` |
| Utilities | camelCase | `formatDate.ts` |
| Constants | UPPER_SNAKE_CASE | `MAX_RESULTS.ts` |
| Pages | lowercase + hyphens | `ai-coding.tsx` |
| Database | snake_case | `tool_categories.ts` |
| CSS Modules | ComponentName.module.css | `ToolCard.module.css` |
| Test files | Component.test.tsx | `ToolCard.test.tsx` |

### File Organization

- One component per file
- Co-locate related files (test, types, styles)
- Max file length: **300 lines** (split if longer)
- Import order:
  1. React / Next.js
  2. External libraries
  3. Internal modules (`@/...`)
  4. Type imports
  5. Styles

### Component Rules

- Functional components only (no class components)
- Props interface defined in same file or imported from `types/`
- Destructure props
- No inline styles (use Tailwind or CSS modules)
- Max component complexity: extract custom hooks if > 50 lines
- Wrap exported components in `React.memo` only when profiling shows need

---

## 2. Git Workflow

### Branching Model

```
main          ← production-ready code
  └── develop ← integration branch
       ├── feature/*   ← new features
       ├── fix/*       ← bug fixes
       ├── docs/*      ← documentation only
       └── refactor/*  ← code refactoring
```

### Commit Messages

Format: `<type>(<scope>): <description>`

| Type | Use For |
|------|---------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation |
| `style` | Formatting, no code change |
| `refactor` | Code restructuring |
| `test` | Adding tests |
| `chore` | Build, config, dependencies |

Rules:

- Max subject length: **72 characters**
- Use imperative mood ("add feature" not "added feature")
- No period at end
- Reference issues: `feat(atlas): add tool card (#23)`

### Pull Requests

- Title matches commit format
- Description explains **what** and **why**
- Link to issue if applicable
- Self-review before requesting review
- Squash merge to develop
- Delete branch after merge

---

## 3. Testing

### Requirements

| Test Type | Scope | Minimum |
|-----------|-------|---------|
| Unit | Utility functions | 80% coverage |
| Component | Complex components | Critical paths |
| Integration | User flows | Critical paths |
| E2E | Full workflows | Phase 8+ |

### Test File Location

```
src/
├── components/
│   └── ToolCard.tsx
│   └── ToolCard.test.tsx    ← co-located
├── __tests__/
│   └── tools.test.ts        ← or centralized
```

### Test Rules

- Test behavior, not implementation
- Use `describe` blocks for grouping
- Use `it` (not `test`) for test cases
- Mock external dependencies
- Test edge cases and error states
- Clean up after each test

---

## 4. Performance

### Budgets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Total Blocking Time | < 200ms |
| Cumulative Layout Shift | < 0.1 |
| Initial Bundle Size | < 250KB |

### Rules

- Lazy load below-fold content
- Use `next/image` for **all** images
- Preload critical fonts
- Minimize client-side JS
- Use static generation for content pages
- Implement ISR for dynamic content
- Use `loading="lazy"` for non-critical images
- Prefetch routes on hover

---

## 5. Accessibility

### WCAG 2.1 AA Compliance

- All images have descriptive `alt` text
- All form inputs have associated `<label>` elements
- Focus visible on all interactive elements
- Color contrast ratio >= 4.5:1 (normal text), >= 3:1 (large text)
- All functionality keyboard accessible
- ARIA labels where semantic HTML is insufficient
- Support `prefers-reduced-motion`
- Skip navigation link
- Proper heading hierarchy (h1 > h2 > h3)

---

## 6. SEO

### Every Page Must Have

- Unique `<title>` tag (50-60 chars)
- Meta description (150-160 chars)
- Canonical URL
- Open Graph tags (title, description, image)
- Twitter/X card tags
- One `<h1>` tag per page
- Structured data (JSON-LD) where applicable
- Clean URL structure

### URL Patterns

```
/tools/chatgpt
/compare/chatgpt-vs-claude
/models/gpt-4
/knowledge/what-is-rag
/blog/how-ai-agents-work
/docs/getting-started
```

### Content Rules

- No duplicate content across pages
- Internal linking between related content
- Breadcrumbs on all pages > 2 levels deep
- XML sitemap updated on deploy
- robots.txt blocks admin and API routes

---

## 7. Security

### Rules

- Never expose API keys in client-side code
- Validate **all** user input server-side
- Use parameterized queries (no SQL injection)
- Implement CSRF protection on forms
- Rate limit API routes
- Sanitize user-generated content (XSS prevention)
- Use HTTPS everywhere
- Set security headers (CSP, X-Frame-Options, etc.)
- Store secrets in environment variables only
- Never commit `.env` files

---

## 8. Design System

### Usage Rules

- Use design tokens (never hard-code colors, spacing, fonts)
- Follow the 4px spacing scale
- Use typography scale (not arbitrary sizes)
- Consistent border radius (follow token)
- Consistent shadows (follow token)
- Dark theme is default

### Animation Rules

- Duration: 150-300ms for micro-interactions
- Easing: `ease-out` for entrances, `ease-in` for exits
- Support `prefers-reduced-motion`
- No animation on critical content
- No autoplay animations
- No flashing or strobing effects

---

## 9. API Design

### REST Conventions

| Method | Purpose | Side Effects |
|--------|---------|--------------|
| GET | Read | None |
| POST | Create | Creates resource |
| PUT | Full update | Updates resource |
| PATCH | Partial update | Updates resource |
| DELETE | Remove | Removes resource |

### Rules

- Use plural nouns: `/tools`, `/models`
- Version API: `/api/v1/...`
- Return proper HTTP status codes
- Use consistent response format

### Response Format

```json
{
  "data": {},
  "meta": { "total": 0, "page": 1, "limit": 20 },
  "error": null
}
```

Error format:

```json
{
  "data": null,
  "error": {
    "code": "NOT_FOUND",
    "message": "Tool not found"
  }
}
```

---

## 10. Database

### Rules

- Use UUIDs for primary keys
- Always include `created_at` and `updated_at` timestamps
- Use foreign key constraints
- Index frequently queried columns
- Soft delete (`deleted_at`) for important data
- Never store plain text secrets
- Use migrations for all schema changes
- Never modify production database manually

---

## 11. Content Standards

### MDX Standards

- Frontmatter schema validated with Zod
- Images optimized and captioned
- Code blocks with syntax highlighting
- Reading time calculated automatically
- Related content manually linked
- No AI-generated content without disclosure

### Writing Style

- Clear, concise, technical
- Use active voice
- Define acronyms on first use
- Include code examples where applicable
- Use consistent terminology

---

## 12. Contributing

### Before Submitting

1. Run linter: `npm run lint` (no errors)
2. Run type checker: `npm run typecheck` (no errors)
3. Run tests: `npm test` (all passing)
4. Self-review code
5. Update documentation if needed

### Code Review Checklist

- [ ] TypeScript strict mode compliant
- [ ] Follows naming conventions
- [ ] No hardcoded values
- [ ] Proper error handling
- [ ] Accessible (keyboard, screen reader)
- [ ] Responsive (mobile, tablet, desktop)
- [ ] SEO metadata present
- [ ] Tests included (if applicable)
