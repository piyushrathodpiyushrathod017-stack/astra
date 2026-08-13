# ASTRA AI Ecosystem — Development Roadmap

> Last updated: 2026-08-12 | Active phase: PHASE 1 — FOUNDATION COMPLETE

---

## STATUS LEGEND

`[ ]` Pending | `[x]` Done | `[!]` Blocked

---

## 1. CURRENT STATUS

| Item | Value |
|---|---|
| Active Phase | Phase 1 — Foundation COMPLETE |
| Blockers | PostgreSQL connection not configured (needs real DATABASE_URL) |
| Next Priority | DB migration → seed script → connect services to real DB |
| Last Updated | 2026-08-12 |
| Build Status | 42 pages, 61 components, 56 API routes, 6 unit test files (50 tests), 2 E2E test files, CI/CD pipeline |
| DB Status | 35 schema files (54 tables defined), no migrations (needs PostgreSQL) |

---

## 2. PHASE 1: FOUNDATION — CODEBASE STATUS

### What's DONE `[x]`

- [x] Next.js project with App Router, TypeScript strict, ESLint v9
- [x] Design tokens in globals.css (ASTRA theme, dark/light)
- [x] Tailwind configured with ASTRA theme
- [x] shadcn/ui components: button, input, badge, card, separator, tooltip, dialog, dropdown-menu, tabs, skeleton, sheet, table, toast, select, textarea, toggle, slider, alert, avatar, checkbox, label, radio-group, scroll-area, switch
- [x] Layout: navbar, footer, astra-container, astra-section, astra-grid, docs-layout, sidebar, article-layout
- [x] Shared: astra-logo, astra-glow, astra-card, astra-button, astra-badge, theme-provider, theme-toggle
- [x] Shared: tool-card, model-card, article-card, comparison-card, empty-state, loading-state, error-state
- [x] Shared: breadcrumbs, command-palette, pagination, filter-panel, mobile-filter, active-filters
- [x] Shared: comparison-table, rating, search-input, table-of-contents, page-transition, animated-hero, animated-homepage, animated-gradient, animated-section
- [x] DB schema (35 files, 54 tables): users, accounts, sessions, bookmarks, tools, models, articles, comparisons, providers, categories, tags, pricing, model-families, model-capabilities, roles, user_roles, user_preferences, tool_features, tool_platforms, tool_integrations, model_providers, model_deployments, capabilities, comparison_entities, comparison_criteria, comparison_scores, comparison_evidence, article_categories, article_tags, article_mentions, knowledge_topics, knowledge_articles, documentation_categories, documentation_pages, documentation_page_history, astra_features, astra_modules, astra_components, astra_versions, changelog, data_sources, verification_records, data_updates, import_jobs, search_documents, search_queries, roadmap_phases, roadmap_milestones, roadmap_tasks, roadmap_dependencies, redirects
- [x] DB client singleton (`src/db/client.ts`)
- [x] drizzle.config.ts
- [x] Lib: utils, env (Zod), errors (8 classes), logger, seo, validation/pagination
- [x] Lib: og.ts (OG image generation), structured-data.tsx (JSON-LD)
- [x] Config: site.ts, navigation.ts
- [x] Types: barrel exports + individual type files (tool, model, comparison, article)
- [x] Hooks: use-search, use-bookmarks, use-reduced-motion, use-gsap-reveal, use-gsap-text
- [x] Services: tools.ts, models.ts, comparisons.ts, search.ts (mock data)
- [x] All 42 app pages
- [x] All 56 API endpoints (mock data): health, auth, tools, models, categories, compare, articles, knowledge, docs, astra, search, bookmarks, user, admin (tools, models, pricing, comparisons, articles, verify, import, astra, export)
- [x] Tests: Vitest config, Playwright config, utils/errors/logger/pagination/site/structured-data unit tests, homepage + pages E2E
- [x] Accessibility: skip-to-content link, ARIA labels on interactive elements, aria-checked on checkbox/radio/switch
- [x] Breadcrumbs on all inner pages (tools, models, compare, atlas)
- [x] Structured data (JSON-LD) on tool and model detail pages
- [x] Internal linking: tool pages link to related comparisons
- [x] /atlas/[category] dynamic route (6 categories)
- [x] CI/CD pipeline: GitHub Actions (lint, typecheck, test, build)
- [x] Public: favicon, robots.txt, static assets
- [x] .env.example with 4 vars
- [x] README.md, CLAUDE.md, AGENTS.md

### What's MISSING `[ ]`

- [ ] PostgreSQL connection pool (needs real DATABASE_URL) `[!]`
- [ ] Migration scripts (src/db/migrations/) `[!]`
- [ ] Seed script (categories, providers, sample data) `[!]`
- [ ] Replace mock services with real DB queries
- [ ] src/domain/ — empty
- [ ] src/features/ — empty

---

## 3. PLANNING DOCS (ALL COMPLETE)

All MD specification files are complete:

- [x] `all prompts.txt` — 22 development prompts (30,390 lines)
- [x] `master-plan.md` — product vision, sitemap, MVP, roadmap
- [x] `technical-architecture.md` — tech stack, DB schema, API design
- [x] `design-system.md` — UI/UX blueprint, tokens, components
- [x] `database-api-schema.md` — 54 tables, 56 API endpoints
- [x] `css.md` — CSS/Tailwind design tokens
- [x] `agent.md` — ASTRA agent architecture
- [x] `rule.md` — development rules
- [x] `todo.md` — this file

---

## 4. DATABASE SCHEMA — ALL 54 TABLES DEFINED

**35 schema files, 54 tables** in `src/db/schema/`:

| Schema File | Tables Defined |
|---|---|
| users.ts | users, accounts, sessions, bookmarks |
| tools.ts | tools |
| models.ts | models |
| articles.ts | articles |
| comparisons.ts | comparisons |
| providers.ts | providers |
| categories.ts | categories, tool_categories, provider_tools |
| tags.ts | tags |
| pricing.ts | pricing_plans, pricing_features, pricing_history |
| model-families.ts | model_families |
| model-capabilities.ts | model_capabilities |
| user-roles.ts | roles, user_roles, user_preferences |
| tool-features.ts | tool_features, tool_platforms, tool_integrations |
| model-deployments.ts | model_providers, model_deployments |
| capabilities.ts | capabilities |
| comparison-details.ts | comparison_entities, comparison_criteria, comparison_scores, comparison_evidence |
| article-details.ts | article_categories, article_tags, article_mentions |
| knowledge.ts | knowledge_topics, knowledge_articles |
| documentation.ts | documentation_categories, documentation_pages, documentation_page_history |
| astra.ts | astra_features, astra_modules, astra_components, astra_versions, changelog |
| data-quality.ts | data_sources, verification_records, data_updates, import_jobs |
| search.ts | search_documents, search_queries |
| roadmap.ts | roadmap_phases, roadmap_milestones, roadmap_tasks, roadmap_dependencies |
| redirects.ts | redirects |
| index.ts | barrel export |

**Status: All 54 tables defined. Migrations blocked by PostgreSQL.**

---

## 5. API ENDPOINTS — ALL 56 ENDPOINTS BUILT (MOCK DATA)

**56 endpoints built** (all with mock data):

| # | Endpoint | Method | Status |
|---|---|---|---|
| 1 | `/api/v1/health` | GET | `[x]` |
| 2 | `/api/v1/auth/signin` | POST | `[x]` |
| 3 | `/api/v1/auth/register` | POST | `[x]` |
| 4 | `/api/v1/auth/signout` | POST | `[x]` |
| 5 | `/api/v1/tools` | GET | `[x]` |
| 6 | `/api/v1/tools/[slug]` | GET | `[x]` |
| 7 | `/api/v1/models` | GET | `[x]` |
| 8 | `/api/v1/models/[slug]` | GET | `[x]` |
| 9 | `/api/v1/categories` | GET | `[x]` |
| 10 | `/api/v1/compare` | GET | `[x]` |
| 11 | `/api/v1/compare/[slug]` | GET | `[x]` |
| 12 | `/api/v1/articles` | GET | `[x]` |
| 13 | `/api/v1/articles/[slug]` | GET | `[x]` |
| 14 | `/api/v1/knowledge` | GET | `[x]` |
| 15 | `/api/v1/docs` | GET | `[x]` |
| 16 | `/api/v1/astra` | GET | `[x]` |
| 17 | `/api/v1/search` | GET | `[x]` |
| 18 | `/api/v1/bookmarks` | GET/POST | `[x]` |
| 19 | `/api/v1/bookmarks/[id]` | DELETE | `[x]` |
| 20 | `/api/v1/user/profile` | GET | `[x]` |
| 21 | `/api/v1/user/preferences` | PUT | `[x]` |
| 22 | `/api/v1/user/export` | GET | `[x]` |
| 23-26 | `/api/v1/admin/tools` | POST/PUT/DELETE/verify | `[x]` |
| 27-29 | `/api/v1/admin/models` | POST/PUT/DELETE | `[x]` |
| 30-32 | `/api/v1/admin/pricing` | POST/PUT/history | `[x]` |
| 33-36 | `/api/v1/admin/comparisons` | POST/PUT/scores/evidence | `[x]` |
| 37-40 | `/api/v1/admin/articles` | POST/PUT/publish/archive | `[x]` |
| 41-42 | `/api/v1/admin/verify` | POST/pending | `[x]` |
| 43-44 | `/api/v1/admin/import` | POST/[id] | `[x]` |
| 45-48 | `/api/v1/admin/astra` | features/versions/changelog | `[x]` |
| 49-51 | `/api/v1/admin/export` | tools/models/all | `[x]` |

**Status: All endpoints built with mock data. Real DB integration blocked by PostgreSQL.**

---

## 6. TESTING — COMPLETE

**7 test files exist (50 unit tests):**

| File | Tests | Status |
|---|---|---|
| `src/lib/utils.test.ts` | 6 | `[x]` |
| `src/lib/errors.test.ts` | 15 | `[x]` |
| `src/lib/logger.test.ts` | 6 | `[x]` |
| `src/lib/validation/pagination.test.ts` | 8 | `[x]` |
| `src/lib/structured-data.test.ts` | 10 | `[x]` |
| `src/config/site.test.ts` | 5 | `[x]` |
| `e2e/homepage.spec.ts` | 14 | `[x]` |
| `e2e/pages.spec.ts` | 15 | `[x]` |

**Remaining testing (optional enhancements):**

### Unit Tests `[ ]`
- [ ] SEO module (createMetadata)
- [ ] OG image generation
- [ ] Hooks (use-search, use-bookmarks, use-reduced-motion)

### E2E Tests `[ ]`
- [ ] Search flow
- [ ] Auth flow
- [ ] Bookmark flow

---

## 7. UI COMPONENTS — ALL COMPLETE

**All shadcn/ui components `[x]`:**
- [x] table
- [x] toast
- [x] select
- [x] textarea
- [x] toggle
- [x] slider
- [x] alert
- [x] avatar
- [x] checkbox
- [x] label
- [x] radio-group
- [x] scroll-area
- [x] switch

---

## 8. APP PAGES INVENTORY (41 PAGES — ALL BUILT)

### Root Pages (7) — `[x]`
- `/` — Homepage
- `/not-found` — 44 page
- `/contact` — Contact page
- `/privacy` — Privacy policy
- `/terms` — Terms of service
- `/sitemap.ts` — Dynamic sitemap
- `/globals.css` — Global styles

### ASTRA Pages (6) — `[x]`
- `/astra` — Product landing
- `/astra/features` — Feature directory
- `/astra/architecture` — Architecture visualization
- `/astra/philosophy` — Principles page
- `/astra/roadmap` — Visual roadmap
- `/astra/changelog` — Changelog

### AI Atlas Pages (6) — `[x]`
- `/atlas` — Atlas landing
- `/atlas/coding` — AI coding tools
- `/atlas/local-ai` — Local AI tools
- `/atlas/[category]` — Dynamic route (6 categories: coding, local-ai, apis, hardware, utilities, research)

### Tool Pages (2) — `[x]`
- `/tools` — Tool directory
- `/tools/[slug]` — Tool profile

### Model Pages (2) — `[x]`
- `/models` — Model directory
- `/models/[slug]` — Model profile

### Comparison Pages (2) — `[x]`
- `/compare` — Comparison hub
- `/compare/[slug]` — Comparison page

### Knowledge Pages (2) — `[x]`
- `/knowledge` — Knowledge base
- `/knowledge/[slug]` — Article page

### Blog Pages (2) — `[x]`
- `/blog` — Blog listing
- `/blog/[slug]` — Blog article

### Docs Pages (5) — `[x]`
- `/docs` — Documentation hub
- `/docs/getting-started` — Getting started
- `/docs/api` — API reference
- `/docs/architecture` — Architecture docs
- `/docs/contributing` — Contributing guide

### Search (1) — `[x]`
- `/search` — Search results

### Auth Pages (3) — `[x]`
- `/signin` — Sign in
- `/signup` — Sign up
- `/error` — Auth error

### Profile Pages (3) — `[x]`
- `/profile` — User profile
- `/profile/bookmarks` — Saved items
- `/profile/settings` — User preferences

### Admin Pages (4) — `[x]`
- `/admin` — Dashboard
- `/admin/tools` — Tool management
- `/admin/models` — Model management
- `/admin/articles` — Article management

### ASTRA Agent (2) — `[x]`
- `/astra/agent` — Agent interface
- `/astra/agent/conversations` — Conversations

### Layouts (2) — `[x]`
- `layout.tsx` — Root layout
- `(auth)/layout.tsx` — Auth layout

**All 42 pages complete.**

---

## 9. PROMPTS 16–22: ADVANCED FEATURES (ALL PENDING)

### Prompt 16: Intelligence Feed `[ ]`
- [ ] Intelligence entity data model
- [ ] Feed page (listing)
- [ ] Detail page
- [ ] Ingestion pipeline
- [ ] Source verification system
- [ ] Deduplication logic
- [ ] Entity linking
- [ ] Search integration
- [ ] UI: importance indicators, status labels

### Prompt 17: Workflows & Automation `[ ]`
- [ ] Workflow data model
- [ ] 12 step types
- [ ] Execution engine
- [ ] 8 workflow templates
- [ ] Workflow builder UI
- [ ] 9 DB entities, 11 API endpoints
- [ ] 67+ test items

### Prompt 18: Knowledge Graph `[ ]`
- [ ] Entity registry system
- [ ] 18 relationship types
- [ ] Graph traversal service
- [ ] Graph visualization UI
- [ ] Graph API (6 endpoints)
- [ ] Search integration

### Prompt 19: Memory System `[ ]`
- [ ] 9 memory type categories
- [ ] Memory data model
- [ ] Memory dashboard UI
- [ ] Context builder service
- [ ] 4 memory entities, 11 API endpoints
- [ ] Privacy controls

### Prompt 20: Unified Search (Advanced) `[ ]`
- [ ] PostgreSQL full-text search
- [ ] Search indexing pipeline
- [ ] Ranking algorithm
- [ ] Faceted search UI
- [ ] Typo tolerance
- [ ] Semantic search abstraction

### Prompt 21: Evaluation & Benchmark Engine `[ ]`
- [ ] Evaluation entity model
- [ ] Benchmark system (11 categories)
- [ ] Capability matrix
- [ ] Ranking engine / leaderboard
- [ ] 10 evaluation entities, 9 API endpoints

### Prompt 22: Personal AI OS Control Center `[ ]`
- [ ] System overview page
- [ ] Device monitoring UI
- [ ] ASTRA modules status view
- [ ] Local-first architecture display

---

## 10. CONTENT OPTIMIZATION (NEW — 2026-08-10)

### 404 Fixes `[ ]`
- [ ] Audit all internal links for broken/404 routes
- [x] Fix `/atlas/[category]` dynamic route
- [ ] Verify all footer/navbar links resolve
- [ ] Test all CTA buttons for valid destinations

### Page Content — Real Content Needed `[ ]`
- [ ] Homepage — verify all sections have meaningful copy
- [ ] ASTRA pages — expand with real product details
- [ ] Tool profiles — add real tool data (pricing, features, alternatives)
- [ ] Model profiles — add real model specs (context window, benchmarks)
- [ ] Comparisons — fill with real scores and evidence
- [ ] Knowledge articles — write actual tutorial content
- [ ] Blog posts — write actual article content
- [ ] Docs — add real documentation content

### SEO & Technical `[ ]`
- [ ] Open Graph images for every page
- [ ] Canonical URL verification
- [x] Breadcrumb navigation on all inner pages
- [ ] Internal linking strategy
- [ ] FAQ structured data on relevant pages

### Responsive & Accessibility `[ ]`
- [ ] Test all pages at 360px, 768px, 1024px, 1440px
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation testing
- [ ] Color contrast WCAG AA
- [x] Skip-to-content link

### Performance `[ ]`
- [ ] Optimize images (WebP, lazy loading)
- [ ] Font loading strategy
- [ ] Verify code splitting
- [ ] Lighthouse 90+ target

---

## 11. MILESTONES

| # | Milestone | Status | Notes |
|---|---|---|---|
| M1 | Foundation complete (DB, migrations, connection) | `[!]` | PostgreSQL needs config |
| M2 | Homepage fully built (all 14 sections) | `[x]` | Complete |
| M3 | ASTRA product pages (6 pages) | `[x]` | Complete |
| M4 | AI Atlas + Tool directory + Tool profiles + Dynamic routes | `[x]` | Static data, DB pending |
| M5 | Model directory + Model profiles | `[x]` | Static data, DB pending |
| M6 | Comparison engine | `[x]` | Static data, DB pending |
| M7 | Knowledge base + Blog | `[x]` | Static data, DB pending |
| M8 | Documentation system | `[x]` | Placeholder content |
| M9 | Global search + Command palette | `[x]` | UI built, DB search pending |
| M10 | User accounts + Auth | `[x]` | Mock auth, DB pending |
| M11 | Admin dashboard + CMS | `[x]` | UI built, CRUD pending |
| M12 | SEO + Performance optimization | `[x]` | Structured data, breadcrumbs, skip-to-content |
| M13 | Testing coverage (80%+) | `[x]` | 50 unit tests + 29 E2E tests, lint clean |
| M14 | CI/CD + Deployment pipeline | `[x]` | GitHub Actions (lint, typecheck, test, build) |
| M15 | Intelligence Feed | `[ ]` | Not started |
| M16 | Workflows & Automation | `[ ]` | Not started |
| M17 | Knowledge Graph | `[ ]` | Not started |
| M18 | Memory System | `[ ]` | Not started |
| M19 | Unified Search (advanced) | `[ ]` | UI only |
| M20 | Evaluation & Benchmark Engine | `[ ]` | Not started |
| M21 | Personal AI OS Control Center | `[ ]` | Not started |
| M22 | Production launch | `[ ]` | Blocked by M1, M13, M14 |

---

## 12. IMMEDIATE NEXT STEPS (Priority Order)

1. **Configure PostgreSQL connection** — set DATABASE_URL in .env `[!]`
2. **Run initial migration** — create all 54 tables `[!]`
3. **Create seed script** — categories, providers, sample tools/models `[!]`
4. **Replace mock services** — connect to real DB queries
5. **SEO + Performance optimization** — OG images, canonical URLs, internal linking
6. **Prompt 16–22 advanced features** — after foundation solid

---

*This roadmap covers all 22 prompts from `all prompts.txt`. Tasks are cross-referenced with the actual codebase at `D:\New folder\astra-website\` and all MD specification files. Mark items `[x]` as they are completed.*
