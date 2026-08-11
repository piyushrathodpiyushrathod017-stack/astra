# ASTRA WEBSITE TECHNICAL ARCHITECTURE & DATABASE BLUEPRINT

> **Document Version:** 1.0
> **Last Updated:** 2026-08-08
> **Status:** Complete

---

## Table of Contents

- [01 — Technology Stack](#01--technology-stack)
- [02 — Architecture Principles](#02--architecture-principles)
- [03 — System Architecture](#03--system-architecture)
- [04 — Frontend Architecture](#04--frontend-architecture)
- [05 — Source Structure](#05--source-structure)
- [06 — Domain Architecture](#06--domain-architecture)
- [07 — Database Architecture](#07--database-architecture)
- [08 — Database Relationships](#08--database-relationships)
- [09 — Database Rules](#09--database-rules)
- [10 — Data Freshness](#10--data-freshness)
- [11 — Tool Data Model](#11--tool-data-model)
- [12 — Model Data Model](#12--model-data-model)
- [13 — Comparison Engine](#13--comparison-engine)
- [14 — Scoring System](#14--scoring-system)
- [15 — Search Architecture](#15--search-architecture)
- [16 — API Architecture](#16--api-architecture)
- [17 — Caching](#17--caching)
- [18 — Content Architecture](#18--content-architecture)
- [19 — SEO Architecture](#19--seo-architecture)
- [20 — Image Architecture](#20--image-architecture)
- [21 — Authentication](#21--authentication)
- [22 — User Features](#22--user-features)
- [23 — Admin Architecture](#23--admin-architecture)
- [24 — Data Import](#24--data-import)
- [25 — Data Verification](#25--data-verification)
- [26 — External Providers](#26--external-providers)
- [27 — Future ASTRA Intelligence](#27--future-astra-intelligence)
- [28 — Recommendation Engine](#28--recommendation-engine)
- [29 — Multilingual](#29--multilingual)
- [30 — Security](#30--security)
- [31 — Performance](#31--performance)
- [32 — Observability](#32--observability)
- [33 — Testing](#33--testing)
- [34 — CI/CD](#34--cicd)
- [35 — Environment](#35--environment)
- [36 — Error Handling](#36--error-handling)
- [37 — Logging](#37--logging)
- [38 — Rate Limiting](#38--rate-limiting)
- [39 — Deployment](#39--deployment)
- [40 — Backup](#40--backup)
- [41 — Scalability](#41--scalability)
- [42 — Background Jobs](#42--background-jobs)
- [43 — Feature Flags](#43--feature-flags)
- [44 — API Versioning](#44--api-versioning)
- [45 — Decision Register](#45--decision-register)
- [46 — Implementation Order](#46--implementation-order)
- [47 — Acceptance Criteria](#47--acceptance-criteria)

---

# 01 — Technology Stack

## Frontend

| Technology | Choice | Alternative Considered | Reason |
|------------|--------|----------------------|--------|
| Framework | Next.js 14+ (App Router) | Remix, Nuxt | App Router, RSC, streaming, Vercel optimization |
| Language | TypeScript (strict) | JavaScript | Type safety, maintainability, DX |
| UI Library | React 18+ | Vue, Svelte | Ecosystem, component model, team familiarity |
| Styling | Tailwind CSS | CSS Modules, Styled Components | Utility-first, performance, design system alignment |
| Components | shadcn/ui + Radix UI | Chakra, MUI | Accessible, customizable, no dependency lock-in |
| Animation | Framer Motion (Motion) | React Spring, CSS animations | React integration, API design, performance |
| Icons | Lucide | Heroicons, Phosphor | Consistent stroke style, comprehensive set |

## Backend

| Technology | Choice | Alternative Considered | Reason |
|------------|--------|----------------------|--------|
| Runtime | Next.js API Routes + Route Handlers | Express, Fastify | Colocation, simplicity, Vercel optimization |
| Database | PostgreSQL | MySQL, MongoDB, SQLite | Full-text search, JSON support, reliability, scalability |
| ORM | Drizzle ORM | Prisma, TypeORM, raw SQL | Performance, type safety, SQL-like API, bundle size |
| Validation | Zod | Yup, Joi, Superstruct | TypeScript-first, runtime validation, schema composition |
| Auth | Auth.js (NextAuth) | Clerk, Lucia, custom | Flexible, self-hosted option, Next.js integration |

## Content

| Technology | Choice | Alternative Considered | Reason |
|------------|--------|----------------------|--------|
| Format | MDX | Raw Markdown, MDX + CMS | Markdown + React components, type-safe frontmatter |
| Collections | Content Collections (Astro-style) | File-based routing | Type-safe content, validation, queryable |

## Search

| Phase | Technology | Reason |
|-------|------------|--------|
| Initial | PostgreSQL full-text search | Simplicity, no extra infrastructure |
| Scale | Meilisearch or Typesense | Dedicated search, typo tolerance, faceted search |

## Deployment

| Technology | Choice | Alternative Considered | Reason |
|------------|--------|----------------------|--------|
| Platform | Vercel | Netlify, AWS, self-hosted | Next.js optimization, edge functions, CDN |
| Storage | S3-compatible (Cloudflare R2, AWS S3) | Local filesystem | Scalability, CDN integration |
| Analytics | Plausible | Google Analytics, PostHog | Privacy-conscious, lightweight, no cookies |

## Testing

| Technology | Choice | Alternative Considered | Reason |
|------------|--------|----------------------|--------|
| Unit/Integration | Vitest | Jest, Mocha | Speed, ESM support, Vite integration |
| E2E | Playwright | Cypress, Puppeteer | Multi-browser, faster, modern API |
| Accessibility | Axe | Pa11y | Comprehensive, well-maintained |

## Final Stack Summary

```
Frontend:  Next.js 14+ / React 18+ / TypeScript / Tailwind CSS / shadcn/ui / Radix / Lucide / Framer Motion
Backend:   Next.js API Routes / Drizzle ORM / PostgreSQL / Zod / Auth.js
Content:   MDX + Content Collections
Search:    PostgreSQL (initial) → Meilisearch (scale)
Deploy:    Vercel / S3-compatible storage / Plausible analytics
Test:      Vitest / Playwright / Axe
```

---

# 02 — Architecture Principles

## 1. Modular

Features are isolated. Each feature (tools, models, comparisons, etc.) is self-contained with its own components, services, types, and tests.

## 2. Feature-Oriented

Code is organized around business features, not just technical layers. `features/tools/` contains components, services, types, and tests for tools.

## 3. Type-Safe

TypeScript strict mode. No `any`. Branded types for IDs. Zod schemas for runtime validation. Type-safe database queries via Drizzle.

## 4. Database-Driven

AI tools, models, comparisons, and dynamic content are stored in the database, not hard-coded into UI components. UI renders from data.

## 5. Content-Driven

Articles, documentation, and knowledge base content are managed separately from UI logic via MDX content collections.

## 6. Provider-Independent

External data providers (AI APIs, search engines, storage) are accessed through adapter interfaces. Swapping providers requires only implementing a new adapter.

## 7. Search-Ready

Architecture supports PostgreSQL full-text search initially, with clean migration path to dedicated search engines (Meilisearch, Typesense).

## 8. ASTRA-Ready

Future ASTRA intelligence layer can consume platform data through clean internal services and well-defined data interfaces.

## 9. SEO-First

Public content is crawlable. Server-side rendering for indexable pages. Structured data. Clean URLs. No JavaScript-dependent content for critical SEO elements.

## 10. Performance-First

Static generation where possible. ISR for dynamic content. Minimal client-side JavaScript. Lazy loading. No unnecessary animations on critical paths.

---

# 03 — System Architecture

```
+-----------------------------------------------------------+
|                        USER                               |
+-----------------------------+-----------------------------+
                              |
+-----------------------------v-----------------------------+
|                      BROWSER                             |
|  [Next.js Client Bundle]                                 |
|  [React Hydration]                                       |
|  [Framer Motion]                                         |
|  [Lucide Icons]                                          |
+-----------------------------+-----------------------------+
                              |
+-----------------------------v-----------------------------+
|                  NEXT.JS APPLICATION                      |
|                                                           |
|  +-------------------+  +-------------------+            |
|  | Presentation Layer|  |  API Layer        |            |
|  | (Server Components|  |  (Route Handlers) |            |
|  |  Client Components|  |  (Server Actions) |            |
|  +-------------------+  +-------------------+            |
|                                                           |
+-----------------------------+-----------------------------+
                              |
+-----------------------------v-----------------------------+
|                    FEATURE LAYER                          |
|                                                           |
|  +--------+ +--------+ +---------+ +----------+         |
|  |  ASTRA | | Atlas  | | Compare | | Knowledge|         |
|  +--------+ +--------+ +---------+ +----------+         |
|  +--------+ +--------+ +---------+ +----------+         |
|  |  Tools | | Models | |  Blog   | |   Docs   |         |
|  +--------+ +--------+ +---------+ +----------+         |
|                                                           |
+-----------------------------+-----------------------------+
                              |
+-----------------------------v-----------------------------+
|                APPLICATION SERVICES                       |
|                                                           |
|  +----------+ +----------+ +----------+ +----------+    |
|  |  Search  | |   Auth   | |  Upload  | |  Admin   |    |
|  +----------+ +----------+ +----------+ +----------+    |
|                                                           |
+-----------------------------+-----------------------------+
                              |
+-----------------------------v-----------------------------+
|                  DOMAIN LOGIC                             |
|                                                           |
|  +----------+ +----------+ +----------+ +----------+    |
|  | Tool     | | Model    | |Compare   | | Article  |    |
|  | Domain   | | Domain   | |Domain    | | Domain   |    |
|  +----------+ +----------+ +----------+ +----------+    |
|                                                           |
+-----------------------------+-----------------------------+
                              |
+-----------------------------v-----------------------------+
|                DATA ACCESS LAYER                          |
|                                                           |
|  +----------+ +----------+ +----------+ +----------+    |
|  | Drizzle  | |   MDX    | |  Cache   | | Storage  |    |
|  |   ORM    | | Content  | |  Layer   | | Adapter  |    |
|  +----------+ +----------+ +----------+ +----------+    |
|                                                           |
+-----------------------------+-----------------------------+
                              |
+-----------------------------v-----------------------------+
|                    PostgreSQL                             |
|  [Tools] [Models] [Comparisons] [Articles] [Users]       |
+-----------------------------+-----------------------------+
                              |
+-----------------------------v-----------------------------+
|              EXTERNAL PROVIDERS                           |
|  [AI APIs] [Pricing] [Search] [Storage] [Analytics]      |
+-----------------------------+-----------------------------+
                              |
+-----------------------------v-----------------------------+
|        FUTURE: ASTRA INTELLIGENCE LAYER                   |
|  [Knowledge Retrieval] [Recommendations] [Personalization]|
+-----------------------------------------------------------+
```

## Layer Explanations

| Layer | Responsibility |
|-------|----------------|
| Browser | User interaction, client-side rendering |
| Next.js Application | Routing, rendering, state management |
| Presentation Layer | UI components, layouts, pages |
| API Layer | External-facing APIs, webhooks |
| Feature Layer | Business feature modules |
| Application Services | Cross-cutting concerns (search, auth, upload) |
| Domain Logic | Business rules, validation, transformations |
| Data Access Layer | Database queries, content loading, caching |
| PostgreSQL | Persistent data storage |
| External Providers | Third-party integrations |
| Future ASTRA Layer | AI-powered features (not implemented yet) |

---

# 04 — Frontend Architecture

## App Router Structure

```
src/app/
├── (marketing)/           # Marketing page group
│   ├── astra/             # ASTRA pages
│   ├── atlas/             # Atlas pages
│   ├── compare/           # Comparison pages
│   ├── tools/             # Tool pages
│   ├── models/            # Model pages
│   ├── knowledge/         # Knowledge pages
│   ├── blog/              # Blog pages
│   └── page.tsx           # Homepage
├── docs/                  # Documentation pages
├── admin/                 # Admin dashboard (protected)
├── api/                   # API routes
├── layout.tsx             # Root layout
├── page.tsx               # Homepage
└── not-found.tsx          # 404 page
```

## Server Components vs Client Components

| Use Server Components | Use Client Components |
|----------------------|----------------------|
| Page shells and layouts | Interactive forms |
| Static content rendering | Search/filter interactions |
| Data fetching pages | Modal/dialog triggers |
| SEO-critical content | Animations (Framer Motion) |
| Documentation pages | Theme toggle |
| Blog articles | Command palette |
| Tool profiles (initial) | Bookmark toggles |
| Comparison pages (initial) | Tabs, carousels |

## Server Actions

Use for:
- Form submissions (search, contact)
- Mutations (bookmarks, preferences)
- Data changes (admin operations)

## Route Handlers

Use for:
- External API endpoints
- Webhooks
- Image optimization
- RSS feed generation

## Middleware

Use for:
- Authentication checks (admin routes)
- Redirects
- URL rewrites
- Rate limiting headers

## Caching Strategy

| Content | Strategy | Revalidation |
|---------|----------|--------------|
| Homepage | SSG | On deploy |
| ASTRA pages | SSG | On deploy |
| Tool profiles | ISR | 1 hour |
| Model profiles | ISR | 1 hour |
| Comparisons | ISR | 1 hour |
| Blog articles | SSG | On deploy |
| Knowledge | SSG | On deploy |
| Documentation | SSG | On deploy |
| Search results | CSR | No cache |
| Admin pages | No cache | N/A |

---

# 05 — Source Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (marketing)/              # Marketing pages group
│   │   ├── astra/                # ASTRA pages
│   │   ├── atlas/                # Atlas pages
│   │   ├── compare/              # Comparison pages
│   │   ├── tools/                # Tool pages
│   │   ├── models/               # Model pages
│   │   ├── knowledge/            # Knowledge pages
│   │   └── blog/                 # Blog pages
│   ├── docs/                     # Documentation
│   ├── admin/                    # Admin (protected)
│   ├── api/                      # API routes
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
│
├── components/                   # Shared UI components
│   ├── ui/                       # Base UI (Button, Card, Input, etc.)
│   ├── layout/                   # Layout (Navbar, Footer, Sidebar)
│   ├── navigation/               # Navigation components
│   └── shared/                   # Shared feature components
│
├── features/                     # Feature modules (business logic + UI)
│   ├── astra/                    # ASTRA feature
│   │   ├── components/           # ASTRA-specific components
│   │   ├── services/             # ASTRA business logic
│   │   ├── types/                # ASTRA types
│   │   └── index.ts              # Public API
│   ├── atlas/                    # Atlas feature
│   ├── tools/                    # Tools feature
│   ├── models/                   # Models feature
│   ├── compare/                  # Comparison feature
│   ├── knowledge/                # Knowledge feature
│   ├── blog/                     # Blog feature
│   ├── docs/                     # Documentation feature
│   ├── search/                   # Search feature
│   ├── users/                    # User feature
│   └── admin/                    # Admin feature
│
├── domain/                       # Domain logic (pure business rules)
│   ├── tools/                    # Tool domain logic
│   ├── models/                   # Model domain logic
│   ├── comparisons/              # Comparison domain logic
│   ├── articles/                 # Article domain logic
│   └── search/                   # Search domain logic
│
├── services/                     # Application services
│   ├── search.ts                 # Search service
│   ├── auth.ts                   # Authentication service
│   ├── upload.ts                 # File upload service
│   ├── email.ts                  # Email service (future)
│   └── analytics.ts              # Analytics service
│
├── db/                           # Database layer
│   ├── schema/                   # Drizzle schema definitions
│   │   ├── tools.ts              # Tool tables
│   │   ├── models.ts             # Model tables
│   │   ├── comparisons.ts        # Comparison tables
│   │   ├── articles.ts           # Article tables
│   │   ├── users.ts              # User tables
│   │   └── index.ts              # Schema exports
│   ├── migrations/               # Database migrations
│   ├── seed/                     # Seed data
│   └── client.ts                 # Database client
│
├── content/                      # MDX content
│   ├── blog/                     # Blog articles
│   ├── knowledge/                # Knowledge articles
│   └── docs/                     # Documentation
│
├── lib/                          # Shared utilities
│   ├── utils.ts                  # General utilities
│   ├── seo.ts                    # SEO utilities
│   └── constants.ts              # Constants
│
├── hooks/                        # Custom React hooks
│   ├── use-search.ts             # Search hook
│   ├── use-bookmarks.ts          # Bookmark hook
│   ├── use-theme.ts              # Theme hook
│   └── use-reduced-motion.ts     # Reduced motion hook
│
├── types/                        # Shared TypeScript types
│   ├── tool.ts                   # Tool types
│   ├── model.ts                  # Model types
│   ├── comparison.ts             # Comparison types
│   └── index.ts                  # Shared types
│
├── config/                       # Configuration
│   ├── site.ts                   # Site config
│   ├── navigation.ts             # Navigation config
│   └── categories.ts             # Category config
│
└── styles/                       # Global styles
    └── globals.css               # Global CSS
```

## Directory Responsibilities

| Directory | Purpose | Contains |
|-----------|---------|----------|
| `app/` | Page routing and layouts | Pages, route handlers, layouts |
| `components/` | Reusable UI components | Base components, layout, navigation |
| `features/` | Feature-specific code | Components, services, types per feature |
| `domain/` | Pure business logic | Domain rules, transformations, validation |
| `services/` | Application services | Cross-cutting concerns |
| `db/` | Database layer | Schema, migrations, seed, client |
| `content/` | MDX content files | Blog, knowledge, docs articles |
| `lib/` | Shared utilities | Helper functions, constants |
| `hooks/` | Custom React hooks | Reusable hook logic |
| `types/` | TypeScript definitions | Shared type definitions |
| `config/` | Configuration | Site config, navigation, categories |
| `styles/` | Global CSS | Global styles, Tailwind directives |

---

# 06 — Domain Architecture

## Core Domains

```
ASTRA Domain
├── Features (capabilities)
├── Modules (components)
├── Versions (releases)
└── Roadmap (timeline)

AI Tools Domain
├── Tools (products)
├── Categories (classification)
├── Features (capabilities)
├── Platforms (availability)
└── Integrations (connections)

AI Models Domain
├── Models (AI models)
├── Providers (companies)
├── Capabilities (what they can do)
└── Pricing (costs)

Comparison Domain
├── Comparisons (analyses)
├── Criteria (what to compare)
├── Scores (evaluations)
└── Evidence (supporting data)

Content Domain
├── Articles (blog posts)
├── Knowledge (educational)
├── Documentation (technical)
└── Tags (classification)

User Domain
├── Users (accounts)
├── Bookmarks (saved items)
├── Preferences (settings)
└── History (activity)

Admin Domain
├── Dashboard (overview)
├── Content Management
├── Data Verification
└── System Settings
```

## Domain Relationships

```
Provider ──┬── provides ──┬── Models
           │              └── Tools
           │
Tool ──────┬── belongs_to ── Category
           ├── has ── Features
           ├── runs_on ── Platforms
           ├── has ── Integrations
           ├── has ── Pricing
           └── compared_in ── Comparisons

Model ─────┬── belongs_to ── Provider
           ├── has ── Capabilities
           ├── has ── Pricing
           └── compared_in ── Comparisons

Comparison ─┬── compares ── Tools (or Models)
            ├── uses ── Criteria
            ├── has ── Scores
            └── has ── Evidence

Article ────┬── belongs_to ── Category
            ├── tagged_with ── Tags
            ├── mentions ── Tools
            └── mentions ── Models

User ───────┬── has ── Bookmarks
            ├── has ── Preferences
            └── has ── History
```

---

# 07 — Database Architecture

## Core Entities

### User

| Field | Type | Constraints | Notes |
|-------|------|-------------|-------|
| id | UUID | PK | Primary key |
| email | varchar(255) | UNIQUE, NOT NULL | Login identifier |
| name | varchar(255) | | Display name |
| avatar | text | | Profile image URL |
| role | enum | NOT NULL, DEFAULT 'user' | admin, editor, reviewer, user |
| created_at | timestamp | NOT NULL | Account creation |
| updated_at | timestamp | NOT NULL | Last update |

### Tool

| Field | Type | Constraints | Notes |
|-------|------|-------------|-------|
| id | UUID | PK | Primary key |
| name | varchar(255) | NOT NULL | Display name |
| slug | varchar(255) | UNIQUE, NOT NULL | URL-safe identifier |
| logo | text | | Image URL |
| description | text | NOT NULL | Short description |
| full_description | text | | Detailed description |
| website | text | | Official URL |
| developer | varchar(255) | | Company/developer name |
| category_id | UUID | FK → categories | Foreign key |
| pricing_type | enum | NOT NULL | free, freemium, paid |
| pricing_details | jsonb | | Structured pricing data |
| platforms | text[] | | Array of platforms |
| api_available | boolean | DEFAULT false | API availability |
| open_source | boolean | DEFAULT false | Open source status |
| local_available | boolean | DEFAULT false | Local deployment |
| deployment | enum | | cloud, local, hybrid |
| capabilities | text[] | | Feature capabilities |
| strengths | text[] | | What it's good at |
| weaknesses | text[] | | Limitations |
| best_for | text[] | | Recommended use cases |
| alternatives | text[] | | Alternative tool IDs |
| last_verified | timestamp | | When data was verified |
| data_source | text | | Where data came from |
| data_source_url | text | | Source URL |
| status | enum | NOT NULL, DEFAULT 'draft' | draft, published, archived |
| created_at | timestamp | NOT NULL | |
| updated_at | timestamp | NOT NULL | |

### Model

| Field | Type | Constraints | Notes |
|-------|------|-------------|-------|
| id | UUID | PK | Primary key |
| name | varchar(255) | NOT NULL | Display name |
| slug | varchar(255) | UNIQUE, NOT NULL | URL-safe identifier |
| provider_id | UUID | FK → providers | Foreign key |
| family | varchar(255) | | Model family (e.g., "GPT") |
| version | varchar(50) | | Version number |
| release_date | date | | When released |
| context_window | integer | | Token limit |
| input_modalities | text[] | | Input types |
| output_modalities | text[] | | Output types |
| reasoning | enum | | high, medium, low |
| coding | enum | | high, medium, low |
| writing | enum | | high, medium, low |
| tool_use | boolean | DEFAULT false | Tool calling support |
| vision | boolean | DEFAULT false | Vision capability |
| audio | boolean | DEFAULT false | Audio capability |
| api_available | boolean | DEFAULT false | API availability |
| local_available | boolean | DEFAULT false | Local availability |
| license | varchar(255) | | License type |
| parameters | varchar(100) | | Parameter count when known |
| pricing | jsonb | | Token pricing data |
| hardware_requirements | jsonb | | Local deployment requirements |
| last_verified | timestamp | | When data was verified |
| data_source | text | | Source |
| status | enum | NOT NULL, DEFAULT 'draft' | draft, published, archived |
| created_at | timestamp | NOT NULL | |
| updated_at | timestamp | NOT NULL | |

### Provider

| Field | Type | Constraints | Notes |
|-------|------|-------------|-------|
| id | UUID | PK | Primary key |
| name | varchar(255) | NOT NULL | Company name |
| slug | varchar(255) | UNIQUE, NOT NULL | URL-safe identifier |
| logo | text | | Company logo |
| website | text | | Official URL |
| description | text | | Company description |
| created_at | timestamp | NOT NULL | |
| updated_at | timestamp | NOT NULL | |

### Category

| Field | Type | Constraints | Notes |
|-------|------|-------------|-------|
| id | UUID | PK | Primary key |
| name | varchar(255) | NOT NULL | Display name |
| slug | varchar(255) | UNIQUE, NOT NULL | URL-safe identifier |
| description | text | | Category description |
| type | enum | NOT NULL | tool, model, article, comparison |
| parent_id | UUID | FK → categories | Self-referential |
| sort_order | integer | DEFAULT 0 | Display order |
| created_at | timestamp | NOT NULL | |

### Comparison

| Field | Type | Constraints | Notes |
|-------|------|-------------|-------|
| id | UUID | PK | Primary key |
| slug | varchar(255) | UNIQUE, NOT NULL | "tool-a-vs-tool-b" |
| tool_a_id | UUID | FK → tools | First tool |
| tool_b_id | UUID | FK → tools | Second tool |
| title | varchar(255) | NOT NULL | Display title |
| summary | text | | Quick verdict |
| methodology | text | | How comparison was done |
| scores | jsonb | | Criterion scores |
| strengths_a | text[] | | Tool A strengths |
| weaknesses_a | text[] | | Tool A weaknesses |
| strengths_b | text[] | | Tool B strengths |
| weaknesses_b | text[] | | Tool B weaknesses |
| best_for_a | text[] | | Tool A best use cases |
| best_for_b | text[] | | Tool B best use cases |
| last_verified | timestamp | | When verified |
| status | enum | NOT NULL, DEFAULT 'draft' | draft, published, archived |
| created_at | timestamp | NOT NULL | |
| updated_at | timestamp | NOT NULL | |

### Article

| Field | Type | Constraints | Notes |
|-------|------|-------------|-------|
| id | UUID | PK | Primary key |
| title | varchar(255) | NOT NULL | Article title |
| slug | varchar(255) | UNIQUE, NOT NULL | URL-safe identifier |
| content | text | NOT NULL | MDX content |
| summary | text | | Article summary |
| featured_image | text | | Hero image URL |
| category | enum | NOT NULL | blog, knowledge |
| category_id | UUID | FK → categories | Foreign key |
| tags | text[] | | Tag array |
| author | varchar(255) | | Author name |
| reading_time | integer | | Estimated minutes |
| difficulty | enum | | beginner, intermediate, advanced |
| status | enum | NOT NULL, DEFAULT 'draft' | draft, published, archived |
| published_at | timestamp | | When published |
| last_updated | timestamp | | When last updated |
| created_at | timestamp | NOT NULL | |

### ASTRAFeature

| Field | Type | Constraints | Notes |
|-------|------|-------------|-------|
| id | UUID | PK | Primary key |
| name | varchar(255) | NOT NULL | Feature name |
| slug | varchar(255) | UNIQUE, NOT NULL | URL-safe identifier |
| description | text | | Feature description |
| icon | varchar(100) | | Icon identifier |
| status | enum | NOT NULL | planned, in-progress, completed |
| sort_order | integer | DEFAULT 0 | Display order |
| created_at | timestamp | NOT NULL | |
| updated_at | timestamp | NOT NULL | |

### Bookmark

| Field | Type | Constraints | Notes |
|-------|------|-------------|-------|
| id | UUID | PK | Primary key |
| user_id | UUID | FK → users | Owner |
| item_type | enum | NOT NULL | tool, model, comparison, article |
| item_id | UUID | NOT NULL | Referenced item ID |
| created_at | timestamp | NOT NULL | |

### SearchRecord

| Field | Type | Constraints | Notes |
|-------|------|-------------|-------|
| id | UUID | PK | Primary key |
| query | text | NOT NULL | Search query |
| results_count | integer | | Number of results |
| user_id | UUID | FK → users | Optional user |
| created_at | timestamp | NOT NULL | |

---

# 08 — Database Relationships

## Relationship Diagram

```
providers
    │
    ├── 1:N ── models
    │
    └── 1:N ── tools (via developer)

categories
    │
    ├── 1:N ── tools
    ├── 1:N ── models
    ├── 1:N ── articles
    └── 1:N ── categories (self-referential)

tools
    │
    ├── N:N ── comparisons (as tool_a or tool_b)
    ├── N:N ── articles (mentions)
    └── N:N ── bookmarks

models
    │
    ├── N:N ── comparisons (as model_a or model_b)
    ├── N:N ── articles (mentions)
    └── N:N ── bookmarks

comparisons
    │
    ├── N:1 ── tools (as tool_a)
    ├── N:1 ── tools (as tool_b)
    ├── N:1 ── models (as model_a)
    ├── N:1 ── models (as model_b)
    └── 1:N ── comparison_scores

articles
    │
    ├── N:1 ── categories
    ├── N:N ── tags
    ├── N:N ── tools (mentions)
    └── N:N ── models (mentions)

users
    │
    ├── 1:N ── bookmarks
    ├── 1:N ── search_records
    └── 1:N ── user_preferences
```

## Key Relationships

| Relationship | Type | Description |
|--------------|------|-------------|
| Provider → Models | 1:N | One provider has many models |
| Provider → Tools | 1:N | One provider makes many tools |
| Category → Tools | 1:N | One category contains many tools |
| Tool ↔ Comparison | N:N | Tools appear in multiple comparisons |
| Article → Tools | N:N | Articles mention multiple tools |
| User → Bookmarks | 1:N | Users save multiple items |

---

# 09 — Database Rules

## Primary Keys

- **Always UUID** for all entities
- Generated by PostgreSQL (`gen_random_uuid()`)
- Never expose in URLs (use slugs instead)

## Foreign Keys

- Always use foreign key constraints
- Cascade delete where appropriate (e.g., article_tags)
- Restrict delete where data integrity matters (e.g., tools with comparisons)

## Unique Constraints

| Table | Unique On | Reason |
|-------|-----------|--------|
| tools | slug | URL uniqueness |
| models | slug | URL uniqueness |
| providers | slug | URL uniqueness |
| categories | slug, type | URL uniqueness per type |
| comparisons | slug | URL uniqueness |
| articles | slug | URL uniqueness |
| users | email | Login uniqueness |

## Slugs

- Auto-generated from name
- Lowercase, hyphenated
- Unique within entity type
- Never change after creation

## Timestamps

- `created_at`: Record creation (NOT NULL)
- `updated_at`: Last modification (NOT NULL, auto-updated)
- Use PostgreSQL triggers for auto-update

## Soft Deletion

- Use `status` field (draft, published, archived) instead of `deleted_at`
- Archived records remain in database
- Queries filter by status by default

## Indexes

| Table | Index | Columns | Purpose |
|-------|-------|---------|---------|
| tools | idx_tools_slug | slug | URL lookup |
| tools | idx_tools_category | category_id | Category filtering |
| tools | idx_tools_status | status | Published filtering |
| tools | idx_tools_search | GIN on name, description | Full-text search |
| models | idx_models_slug | slug | URL lookup |
| models | idx_models_provider | provider_id | Provider filtering |
| models | idx_models_status | status | Published filtering |
| comparisons | idx_comparisons_slug | slug | URL lookup |
| comparisons | idx_comparisons_tools | tool_a_id, tool_b_id | Tool lookup |
| articles | idx_articles_slug | slug | URL lookup |
| articles | idx_articles_category | category | Category filtering |
| articles | idx_articles_status | status | Published filtering |
| articles | idx_articles_search | GIN on title, content | Full-text search |

---

# 10 — Data Freshness

## Verification Workflow

```
New/Updated Data
    ↓
Automated Validation (Zod schemas)
    ↓
Source Verification (check source exists)
    ↓
Human Review (if flagged)
    ↓
Approved → Published
    ↓
Periodic Re-verification (scheduled)
    ↓
Stale Record Detection
```

## Status Lifecycle

| Status | Description | Next Status |
|--------|-------------|-------------|
| draft | Not yet published | published |
| published | Live and visible | archived, needs-review |
| needs-review | Data may be outdated | published, archived |
| archived | No longer maintained | published (reactivate) |

## Verification Fields

| Field | Purpose |
|-------|---------|
| last_verified | When data was last confirmed accurate |
| data_source | Where data came from (official, community, etc.) |
| data_source_url | URL to source |
| verification_status | Current verification state |

## Stale Record Detection

- Records not verified in 90 days: Flag as "needs-review"
- Records not verified in 180 days: Display "data may be outdated" warning
- Records not verified in 365 days: Consider archiving

---

# 11 — Tool Data Model

## Structured Fields

| Field | Type | Structure |
|-------|------|-----------|
| name | string | Plain text |
| slug | string | URL-safe |
| logo | string | Image URL |
| description | string | Plain text (short) |
| full_description | string | MDX (detailed) |
| website | string | URL |
| developer | string | Plain text |
| category_id | UUID | Foreign key |
| pricing_type | enum | free, freemium, paid |
| pricing_details | jsonb | Structured pricing |
| platforms | text[] | Array |
| api_available | boolean | Boolean |
| open_source | boolean | Boolean |
| local_available | boolean | Boolean |
| deployment | enum | cloud, local, hybrid |
| capabilities | text[] | Array |
| strengths | text[] | Array |
| weaknesses | text[] | Array |
| best_for | text[] | Array |
| alternatives | text[] | Array of tool IDs |
| last_verified | timestamp | When verified |
| data_source | string | Source |
| status | enum | Content state |

## Free Text vs Structured

| Field | Type | Reason |
|-------|------|--------|
| description | Free text | Flexible expression |
| capabilities | Array | Filterable, queryable |
| strengths | Array | Display in lists |
| weaknesses | Array | Display in lists |
| best_for | Array | Recommendation matching |
| pricing_details | JSON | Structured for comparison |

---

# 12 — Model Data Model

## Complete Schema

| Field | Type | Notes |
|-------|------|-------|
| name | string | Model name |
| slug | string | URL-safe |
| provider_id | UUID | Foreign key |
| family | string | Model family |
| version | string | Version |
| release_date | date | When released |
| context_window | integer | Token limit |
| input_modalities | text[] | Input types |
| output_modalities | text[] | Output types |
| reasoning | enum | high, medium, low |
| coding | enum | high, medium, low |
| writing | enum | high, medium, low |
| tool_use | boolean | Tool calling |
| vision | boolean | Vision capability |
| audio | boolean | Audio capability |
| api_available | boolean | API |
| local_available | boolean | Local |
| license | string | License |
| parameters | string | Parameter count |
| pricing | jsonb | Token pricing |
| hardware_requirements | jsonb | Local requirements |

## Multiple Providers

Models can be available through multiple providers:
- OpenAI API
- Azure OpenAI
- Local via Ollama
- Local via llama.cpp

Store primary provider in `provider_id`, alternatives in `pricing` jsonb.

---

# 13 — Comparison Engine Architecture

## Comparison Structure

```
Comparison
├── tool_a_id / model_a_id
├── tool_b_id / model_b_id
├── title
├── summary (quick verdict)
├── methodology
├── scores (jsonb)
├── strengths_a / strengths_b
├── weaknesses_a / weaknesses_b
├── best_for_a / best_for_b
└── status
```

## Comparison Types

| Type | Entities | Example |
|------|----------|---------|
| tool vs tool | tools | ChatGPT vs Claude |
| model vs model | models | GPT-4 vs Claude 3 |
| coding tool vs coding tool | tools | Cursor vs Copilot |
| platform vs platform | tools | VS Code vs JetBrains |

## Reusable Comparison Engine

The comparison engine is entity-agnostic:
- Accepts two entities of the same type
- Applies relevant criteria
- Generates scores with evidence
- Produces strengths/weaknesses
- Creates recommendations

---

# 14 — Scoring System

## Criterion Structure

| Field | Purpose |
|-------|---------|
| criterion | What is being evaluated |
| weight | Importance (0-100%) |
| score | Numerical score (0-100) |
| evidence | Supporting data |
| source | Where evidence came from |
| verification_date | When evidence was verified |

## Score Calculation

```
Final Score = Σ (criterion_score * criterion_weight)
```

## Objective vs Editorial

| Type | Source | Weight |
|------|--------|--------|
| Objective | Benchmarks, pricing data, API tests | Higher |
| Editorial | Expert evaluation, user feedback | Lower |

## Transparency Rules

- Every score must have evidence
- Every evidence must have a source
- Methodology must be publicly documented
- No arbitrary scores without justification

---

# 15 — Search Architecture

## Initial: PostgreSQL Full-Text Search

```sql
-- Tools search
CREATE INDEX idx_tools_search ON tools 
  USING GIN (to_tsvector('english', name || ' ' || description));

-- Articles search
CREATE INDEX idx_articles_search ON articles 
  USING GIN (to_tsvector('english', title || ' ' || content));
```

## Search Across Entities

| Entity | Search Fields | Boost |
|--------|--------------|-------|
| Tools | name, description, capabilities | name: 2x |
| Models | name, family, provider | name: 2x |
| Articles | title, content, summary | title: 2x |
| Comparisons | title, summary | title: 2x |
| Documentation | title, content | title: 2x |

## Future: Meilisearch Migration

```
PostgreSQL (initial)
    ↓
Meilisearch (when > 100K records)
    ↓
Typesense (alternative)
```

## Search Features

| Feature | PostgreSQL | Meilisearch |
|---------|------------|-------------|
| Full-text search | Yes | Yes |
| Typo tolerance | No | Yes |
| Faceted search | Limited | Yes |
| Instant search | Limited | Yes |
| Ranking | Basic | Advanced |

---

# 16 — API Architecture

## Public Endpoints

| Endpoint | Method | Auth | Cache | Purpose |
|----------|--------|------|-------|---------|
| /api/v1/tools | GET | No | ISR | List tools |
| /api/v1/tools/[slug] | GET | No | ISR | Get tool |
| /api/v1/models | GET | No | ISR | List models |
| /api/v1/models/[slug] | GET | No | ISR | Get model |
| /api/v1/comparisons | GET | No | ISR | List comparisons |
| /api/v1/comparisons/[slug] | GET | No | ISR | Get comparison |
| /api/v1/articles | GET | No | SSG | List articles |
| /api/v1/articles/[slug] | GET | No | SSG | Get article |
| /api/v1/categories | GET | No | SSG | List categories |
| /api/v1/search | GET | No | No | Search |

## User Endpoints

| Endpoint | Method | Auth | Purpose |
|----------|--------|------|---------|
| /api/v1/bookmarks | GET | Yes | Get bookmarks |
| /api/v1/bookmarks | POST | Yes | Add bookmark |
| /api/v1/bookmarks/[id] | DELETE | Yes | Remove bookmark |

## Admin Endpoints

| Endpoint | Method | Auth | Purpose |
|----------|--------|------|---------|
| /api/v1/admin/tools | POST | Admin | Create tool |
| /api/v1/admin/tools/[id] | PUT | Admin | Update tool |
| /api/v1/admin/tools/[id] | DELETE | Admin | Delete tool |
| /api/v1/admin/models | POST | Admin | Create model |
| /api/v1/admin/models/[id] | PUT | Admin | Update model |
| /api/v1/admin/comparisons | POST | Admin | Create comparison |
| /api/v1/admin/articles | POST | Admin | Create article |

## Response Format

```json
{
  "data": {},
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 20,
    "hasNext": true
  },
  "error": null
}
```

## Rate Limits

| Endpoint Type | Limit | Window |
|---------------|-------|--------|
| Public read | 100 req | 1 min |
| Search | 30 req | 1 min |
| Auth | 10 req | 1 min |
| Admin | 60 req | 1 min |

---

# 17 — Caching Architecture

## Rendering Strategies

| Content | Strategy | Revalidation | Reason |
|---------|----------|--------------|--------|
| Homepage | SSG | On deploy | Static content |
| ASTRA pages | SSG | On deploy | Static content |
| Tool profiles | ISR | 1 hour | Dynamic data |
| Model profiles | ISR | 1 hour | Dynamic data |
| Comparisons | ISR | 1 hour | Dynamic data |
| Blog articles | SSG | On deploy | Static content |
| Knowledge | SSG | On deploy | Static content |
| Documentation | SSG | On deploy | Static content |
| Search | CSR | No cache | Dynamic queries |

## Cache Layers

| Layer | Duration | Scope |
|-------|----------|-------|
| CDN (Vercel Edge) | 1 hour | Global |
| Server (ISR) | 1 hour | Per render |
| Browser | Varies | Per user |
| Database | N/A | N/A |

## Cache Invalidation

- On deploy: All SSG content revalidated
- On data change: ISR revalidation triggered
- Manual: Admin can force revalidation

---

# 18 — Content Architecture

## Content Types

| Type | Storage | Reason |
|------|---------|--------|
| Blog articles | MDX files | Rich formatting, components |
| Knowledge articles | MDX files | Educational content |
| Documentation | MDX files | Technical reference |
| ASTRA content | MDX files | Product information |
| Changelog | MDX files | Version history |
| Dynamic data | PostgreSQL | Tools, models, comparisons |

## MDX Frontmatter Schema

```typescript
interface ArticleFrontmatter {
  title: string
  slug: string
  summary: string
  category: string
  tags: string[]
  author: string
  publishedAt: string
  updatedAt?: string
  readingTime: number
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  featuredImage?: string
}
```

## Content Collections

```
content/
├── blog/
│   ├── getting-started-with-ai.mdx
│   ├── local-ai-guide.mdx
│   └── ...
├── knowledge/
│   ├── what-is-rag.mdx
│   ├── how-llms-work.mdx
│   └── ...
├── docs/
│   ├── getting-started.mdx
│   ├── installation.mdx
│   └── ...
└── astra/
    ├── overview.mdx
    ├── features.mdx
    └── ...
```

---

# 19 — SEO Data Architecture

## Required SEO Fields

| Field | Purpose |
|-------|---------|
| title | Page title (50-60 chars) |
| description | Meta description (150-160 chars) |
| slug | URL-friendly identifier |
| canonical | Canonical URL |
| og:title | Open Graph title |
| og:description | Open Graph description |
| og:image | Open Graph image |
| structured_data | JSON-LD data |

## Structured Data Types

| Page Type | Schema |
|-----------|--------|
| Home | WebSite, Organization |
| Tool | SoftwareApplication |
| Model | SoftwareApplication |
| Comparison | Article |
| Article | Article, BreadcrumbList |
| FAQ | FAQPage |

## SEO Metadata Generation

```typescript
function generateSEO(entity: Tool | Model | Article) {
  return {
    title: `${entity.name} | ASTRA`,
    description: entity.description.slice(0, 160),
    openGraph: {
      title: entity.name,
      description: entity.description,
      images: [entity.ogImage],
    },
  }
}
```

---

# 20 — Image Architecture

## Image Types

| Type | Storage | Optimization |
|------|---------|--------------|
| Tool logos | S3 + CDN | next/image, WebP |
| Model logos | S3 + CDN | next/image, WebP |
| Article images | S3 + CDN | next/image, WebP |
| ASTRA diagrams | S3 + CDN | next/image, SVG |
| OG images | Generated | Dynamic OG images |
| User uploads | S3 + CDN | Resize, compress |

## Image Sizes

| Type | Sizes | Formats |
|------|-------|---------|
| Logos | 48px, 64px, 128px | WebP, PNG |
| Article images | 400px, 800px, 1200px | WebP, JPEG |
| OG images | 1200x630 | JPEG |

## Image Rules

- Always use `next/image` for optimization
- Always provide `alt` text
- Lazy load below-fold images
- Use responsive `sizes` attribute

---

# 21 — Authentication Architecture

## Auth Strategy

| User Type | Auth Required | Access |
|-----------|---------------|--------|
| Anonymous | No | Public content |
| Registered | Yes | Bookmarks, preferences |
| Contributor | Yes | Draft content |
| Reviewer | Yes | Review content |
| Editor | Yes | Publish content |
| Admin | Yes | Full access |

## Auth Providers (Future)

- Email/password
- GitHub OAuth
- Google OAuth
- Passkeys (WebAuthn)

## Auth Implementation

```typescript
// Auth.js configuration
import NextAuth from 'next-auth'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({ clientId, clientSecret }),
    Google({ clientId, clientSecret }),
  ],
  callbacks: {
    authorized({ auth }) {
      return !!auth // Require auth for protected routes
    },
  },
})
```

## Protected Routes

| Route | Protection |
|-------|------------|
| /admin/* | Admin role required |
| /api/v1/admin/* | Admin role required |
| /api/v1/bookmarks/* | Auth required |
| /api/v1/user/* | Auth required |

---

# 22 — User Features

## Bookmarks

- Save tools, models, comparisons, articles
- Local storage (no auth required)
- Database storage (auth required)
- Sync between devices (future)

## Preferences

- Theme (dark/light)
- Language (future)
- Notification settings (future)

## History

- Recently viewed tools
- Recently viewed models
- Recent searches

## Implementation

```typescript
// Local bookmarks (no auth)
function useLocalBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>([])
  // Load from localStorage
  // Save to localStorage
}

// Database bookmarks (auth required)
function useDatabaseBookmarks() {
  const { data: session } = useSession()
  // Fetch from API
  // Mutate via API
}
```

---

# 23 — Admin Architecture

## Admin Modules

| Module | CRUD | Features |
|--------|------|----------|
| Dashboard | Read | Stats, charts |
| Tools | Full | Create, edit, verify |
| Models | Full | Create, edit, verify |
| Providers | Full | Create, edit |
| Categories | Full | Manage hierarchy |
| Comparisons | Full | Create, edit, scores |
| Articles | Full | Create, edit, publish |
| Knowledge | Full | Create, edit, categorize |
| Documentation | Full | Create, edit, organize |
| ASTRA | Read | Features, roadmap |
| Pricing | Full | Manage pricing data |
| Verification | Update | Review data |
| Sources | Full | Manage data sources |
| Users | Read | View users |
| SEO | Update | Metadata, redirects |
| Settings | Update | Site config |

## Roles & Permissions

| Role | Permissions |
|------|-------------|
| Admin | Full access |
| Editor | Create, edit, publish, verify |
| Reviewer | Review, approve |
| Contributor | Create drafts |

## Content States

```
Draft → Review → Published → Archived
  ↑        ↓          ↓
  └────────┴──────────┘
```

---

# 24 — Data Import System

## Import Pipeline

```
Data Source (API, CSV, JSON, manual)
    ↓
Import Script
    ↓
Validation (Zod schemas)
    ↓
Normalization (standardize format)
    ↓
Duplicate Detection (slug matching)
    ↓
Review Queue
    ↓
Approved → Published
```

## Import Sources

| Source | Format | Automation |
|--------|--------|------------|
| Official APIs | JSON | Scripted |
| Official documentation | HTML/MDX | Semi-automated |
| Structured datasets | CSV/JSON | Scripted |
| Manual entry | Admin UI | Manual |

## Duplicate Detection

- Match by slug (exact)
- Match by name (fuzzy)
- Match by website URL (exact)
- Human review for edge cases

---

# 25 — Data Verification System

## Verification Workflow

```
New Data Entry
    ↓
Automated Validation
    ↓
Source Check (URL exists, data consistent)
    ↓
Comparison with Existing Data
    ↓
Human Review (if flagged)
    ↓
Approved → Published
    ↓
Scheduled Re-verification (90 days)
```

## Stale Record Detection

| Condition | Action |
|-----------|--------|
| Not verified in 90 days | Flag as "needs-review" |
| Not verified in 180 days | Show warning to users |
| Not verified in 365 days | Consider archiving |

---

# 26 — External Provider Architecture

## Provider Adapters

```
services/providers/
├── ai/
│   ├── openai.ts
│   ├── anthropic.ts
│   └── index.ts
├── search/
│   ├── postgresql.ts
│   ├── meilisearch.ts
│   └── index.ts
├── storage/
│   ├── s3.ts
│   ├── cloudflare-r2.ts
│   └── index.ts
├── analytics/
│   ├── plausible.ts
│   └── index.ts
└── auth/
    ├── github.ts
    ├── google.ts
    └── index.ts
```

## Adapter Interface

```typescript
interface StorageAdapter {
  upload(file: File): Promise<string>
  delete(url: string): Promise<void>
  getPublicUrl(path: string): string
}
```

---

# 27 — Future ASTRA Intelligence Layer

## Architecture

```
User Query
    ↓
ASTRA Interface (chat UI)
    ↓
ASTRA Intelligence Layer
    ↓
Knowledge Retrieval (from site database)
    ↓
Tool Database Query
    ↓
Model Database Query
    ↓
Comparison Engine Query
    ↓
Recommendation Engine
    ↓
Response Generation
    ↓
Source Attribution
```

## Data Interfaces (for future ASTRA)

```typescript
interface ASTRAToolQuery {
  query: string
  category?: string
  priceRange?: string
  platforms?: string[]
}

interface ASTRAResponse {
  answer: string
  confidence: number
  sources: Source[]
  related: RelatedItem[]
}
```

---

# 28 — Recommendation Engine

## Future Architecture

```
User Context
├── Task (coding, writing, research)
├── Budget (free, paid)
├── Platform (Windows, Mac, Linux)
├── Privacy (cloud, local)
└── History (previously used)

    ↓

Recommendation Algorithm
├── Filter by constraints
├── Rank by relevance
├── Consider popularity
├── Consider freshness
└── Consider user preferences

    ↓

Recommendations
├── Top picks
├── Reasons
├── Alternatives
└── Trade-offs
```

## Data Requirements

| Data | Source |
|------|--------|
| Tool capabilities | tools table |
| Pricing | pricing jsonb |
| Platforms | platforms array |
| User preferences | user_preferences table |
| Popularity | analytics |

---

# 29 — Multilingual Architecture

## URL Strategy

```
/tools/chatgpt          # English (default)
/gu/tools/chatgpt       # Gujarati
/hi/tools/chatgpt       # Hindi
```

## Translation Storage

```typescript
interface Translation {
  id: UUID
  entity_type: 'tool' | 'article' | 'category'
  entity_id: UUID
  language: 'en' | 'gu' | 'hi'
  field: string
  value: string
}
```

## Implementation

- Store translations in database
- Fallback to English if translation missing
- Language switcher in navigation
- SEO: hreflang tags

---

# 30 — Security Architecture

## Authentication Security

- Password hashing (bcrypt)
- Session management (Auth.js)
- CSRF protection
- Secure cookies

## API Security

- Rate limiting
- Input validation (Zod)
- CORS configuration
- API key authentication (future)

## Database Security

- Parameterized queries (Drizzle ORM)
- Foreign key constraints
- Row-level security (future)
- Encrypted connections

## Headers

```
Content-Security-Policy: ...
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

## Secrets

- Environment variables only
- Never in client code
- Never in git
- Vercel environment variables

---

# 31 — Performance Architecture

## Targets

| Metric | Target |
|--------|--------|
| FCP | < 1.5s |
| LCP | < 2.5s |
| TBT | < 200ms |
| CLS | < 0.1 |
| Bundle | < 250KB |

## Strategies

| Strategy | Implementation |
|----------|----------------|
| Static generation | SSG for content pages |
| ISR | For dynamic data pages |
| Code splitting | Dynamic imports |
| Image optimization | next/image, WebP |
| Font optimization | next/font |
| Lazy loading | Below-fold content |
| Prefetching | Route prefetch on hover |

## Low-End Device Considerations

- Minimal JavaScript
- No heavy animations
- Skeleton loading (not spinners)
- Responsive images

---

# 32 — Observability

## Logging

```typescript
interface LogEntry {
  timestamp: Date
  level: 'info' | 'warn' | 'error'
  message: string
  requestId?: string
  userId?: string
  route?: string
  duration?: number
  service?: string
}
```

## Error Tracking

- Sentry (or similar)
- Client-side errors
- Server-side errors
- API errors

## Performance Monitoring

- Vercel Analytics
- Core Web Vitals
- Database query performance

---

# 33 — Testing Architecture

## Test Layers

| Layer | Tools | Coverage | Priority |
|-------|-------|----------|----------|
| Unit | Vitest | 80% | High |
| Component | Testing Library | Critical paths | High |
| API | Vitest | Endpoints | High |
| Database | Vitest | Queries | Medium |
| E2E | Playwright | Critical flows | Medium |
| Accessibility | Axe | WCAG compliance | High |
| Performance | Lighthouse | Budgets | Medium |

## Critical Test Paths

- Tool browsing and filtering
- Comparison creation and viewing
- Search functionality
- Article reading
- Admin CRUD operations

---

# 34 — CI/CD

## Pipeline

```
Developer
    ↓
Git Push
    ↓
Pull Request
    ↓
Lint (ESLint)
    ↓
Type Check (TypeScript)
    ↓
Unit Tests (Vitest)
    ↓
Build (Next.js)
    ↓
E2E Tests (Playwright)
    ↓
Preview Deployment (Vercel)
    ↓
Review
    ↓
Merge to main
    ↓
Production Deployment (Vercel)
```

## Environments

| Environment | Branch | Purpose |
|-------------|--------|---------|
| Development | feature/* | Local development |
| Preview | PR branches | Review |
| Production | main | Live site |

---

# 35 — Environment Configuration

## Environment Variables

| Variable | Environment | Purpose |
|----------|-------------|---------|
| DATABASE_URL | All | PostgreSQL connection |
| NEXTAUTH_SECRET | All | Auth.js secret |
| NEXTAUTH_URL | All | Auth.js callback URL |
| S3_BUCKET | All | Storage bucket |
| S3_ACCESS_KEY | All | Storage access key |
| S3_SECRET_KEY | All | Storage secret key |
| PLAUSIBLE_DOMAIN | Production | Analytics domain |
| SENTRY_DSN | Production | Error tracking |

## Typed Environment

```typescript
// lib/env.ts
import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(1),
  NEXTAUTH_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
```

---

# 36 — Error Handling

## Error Categories

| Category | HTTP Status | Message |
|----------|-------------|---------|
| User error | 400 | Invalid input |
| Not found | 404 | Resource not found |
| Unauthorized | 401 | Authentication required |
| Forbidden | 403 | Insufficient permissions |
| Rate limited | 429 | Too many requests |
| Server error | 500 | Internal server error |
| External error | 502/503 | External service unavailable |

## Error Response

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

# 37 — Logging

## Structured Logging

```typescript
function log(entry: LogEntry) {
  console.log(JSON.stringify({
    timestamp: entry.timestamp.toISOString(),
    level: entry.level,
    message: entry.message,
    requestId: entry.requestId,
    userId: entry.userId,
    route: entry.route,
    duration: entry.duration,
    service: entry.service,
  }))
}
```

## What to Log

- Request start/end
- Errors
- Slow queries
- External API calls
- Auth events

## What NOT to Log

- Passwords
- API keys
- Personal data
- Sensitive user data

---

# 38 — Rate Limiting

## Rate Limits

| Endpoint Type | Limit | Window | Strategy |
|---------------|-------|--------|----------|
| Public read | 100 req | 1 min | IP-based |
| Search | 30 req | 1 min | IP-based |
| Auth | 10 req | 1 min | IP-based |
| Admin | 60 req | 1 min | User-based |
| Future AI | 20 req | 1 min | User-based |

## Implementation

- Vercel Edge Config or Upstash Redis
- Middleware-based
- Return 429 with Retry-After header

---

# 39 — Deployment Architecture

## Pipeline

```
Developer Machine
    ↓
Git Repository (GitHub)
    ↓
CI (GitHub Actions)
    ↓
Preview Deployment (Vercel)
    ↓
Production Deployment (Vercel)
    ↓
CDN (Vercel Edge)
    ↓
Database (PostgreSQL)
    ↓
Storage (S3/R2)
    ↓
External Services
```

## Backup Strategy

| Component | Frequency | Retention |
|-----------|-----------|-----------|
| Database | Daily | 30 days |
| Content (MDX) | Git history | Forever |
| Media (S3) | Versioning | 90 days |
| Configuration | Git history | Forever |

---

# 40 — Backup Strategy

## Database Backups

- Automated daily backups
- Point-in-time recovery
- 30-day retention
- Test restores monthly

## Content Backups

- MDX files in Git (version controlled)
- Database content via pg_dump
- Media in S3 with versioning

## Disaster Recovery

- RTO: 4 hours
- RPO: 24 hours
- Documented recovery procedures

---

# 41 — Scalability Plan

## Stage 1: MVP (Current)

```
Next.js + PostgreSQL + MDX + Vercel
Simple search, no caching layer
Single server database
```

## Stage 2: Growing

```
Add: Meilisearch for search
Add: Redis for caching
Add: Background job queue
Add: S3 for media
```

## Stage 3: Large

```
Add: PostgreSQL read replicas
Add: Distributed search cluster
Add: Worker processes
Add: Advanced analytics
Add: Recommendation engine
```

## Stage 4: ASTRA Integration

```
Add: ASTRA intelligence layer
Add: AI retrieval system
Add: Agent systems
Add: Personalization engine
Add: API ecosystem
```

## Migration Triggers

| Trigger | Action |
|---------|--------|
| > 100K records | Add dedicated search |
| > 1M page views | Add CDN caching layer |
| > 10 concurrent admin users | Add read replicas |
| Content team > 5 people | Add headless CMS |

---

# 42 — Background Job System

## Future Jobs

| Job | Frequency | Purpose |
|-----|-----------|---------|
| Data verification | Weekly | Check stale records |
| Price updates | Daily | Fetch latest pricing |
| Search indexing | On change | Update search index |
| Sitemap generation | On deploy | Regenerate sitemap |
| Image processing | On upload | Resize, optimize |
| Analytics aggregation | Daily | Process analytics |
| Content processing | On publish | Parse MDX, extract metadata |

## Implementation (Future)

- BullMQ or similar
- Redis for queue
- Worker processes
- Retry logic

---

# 43 — Feature Flags

## Flag Types

| Flag | Purpose |
|------|---------|
| beta_search | New search implementation |
| beta_astra | ASTRA integration features |
| beta_comparison | New comparison UI |
| experimental_ai | AI-powered features |

## Implementation

```typescript
// lib/feature-flags.ts
const featureFlags = {
  beta_search: false,
  beta_astra: false,
  beta_comparison: false,
  experimental_ai: false,
}

export function isFeatureEnabled(flag: keyof typeof featureFlags): boolean {
  return featureFlags[flag] ?? false
}
```

---

# 44 — API Versioning

## Strategy

- Start with `/api/v1/`
- Version when breaking changes needed
- Never remove v1 until migration complete

## Versioning Triggers

- Breaking change in response format
- Breaking change in authentication
- Major schema change

---

# 45 — Decision Register

## Technology Decisions

| Decision | Choice | Alternatives | Reason | Trade-off |
|----------|--------|--------------|--------|-----------|
| Frontend | Next.js 14+ | Remix, Nuxt | App Router, RSC, Vercel | Vendor lock-in |
| Language | TypeScript | JavaScript | Type safety | Learning curve |
| Styling | Tailwind CSS | CSS Modules | Utility-first, design system | HTML verbosity |
| Components | shadcn/ui + Radix | MUI, Chakra | Accessible, customizable | Maintenance |
| Database | PostgreSQL | MySQL, MongoDB | Full-text search, JSON | Complexity |
| ORM | Drizzle | Prisma | Performance, type safety | Smaller community |
| Content | MDX | CMS | Simplicity, version control | Manual management |
| Search | PostgreSQL → Meilisearch | Algolia | Cost, control | Initial complexity |
| Auth | Auth.js | Clerk, custom | Flexible, self-hosted | Setup complexity |
| Hosting | Vercel | AWS, self-hosted | Next.js optimization | Vendor lock-in |
| Analytics | Plausible | Google Analytics | Privacy | Fewer features |
| Testing | Vitest + Playwright | Jest + Cypress | Speed, modern | Setup |

---

# 46 — Implementation Order

## Phase 1: Foundation

1. Initialize Next.js project
2. Configure TypeScript strict mode
3. Set up Tailwind CSS
4. Set up shadcn/ui
5. Configure ESLint + Prettier
6. Set up Git workflow

## Phase 2: Database

7. Set up PostgreSQL
8. Initialize Drizzle ORM
9. Create base schema
10. Set up migrations
11. Create seed scripts

## Phase 3: Design System

12. Implement design tokens
13. Build base components
14. Build layout components
15. Build navigation
16. Build command palette

## Phase 4: Content

17. Set up MDX
18. Create content collections
19. Build article templates
20. Create initial content

## Phase 5: ASTRA Pages

21. Build /astra page
22. Build /astra/features
23. Build /astra/architecture
24. Build /astra/philosophy
25. Build /astra/roadmap

## Phase 6: Tools & Models

26. Build tool database schema
27. Build tool listing page
28. Build tool profile page
29. Build model database schema
30. Build model listing page
31. Build model profile page
32. Seed initial data

## Phase 7: Comparisons

33. Build comparison schema
34. Build comparison engine
35. Build comparison pages
36. Create initial comparisons

## Phase 8: Search

37. Implement PostgreSQL search
38. Build search UI
39. Build command palette search

## Phase 9: Admin

40. Set up authentication
41. Build admin dashboard
42. Build CRUD interfaces

## Phase 10: Optimization

43. SEO optimization
44. Performance optimization
45. Accessibility audit
46. Security audit

---

# 47 — Acceptance Criteria

## Architecture Acceptance

- [ ] Dynamic data is not hard-coded
- [ ] Tool/model data is database-driven
- [ ] Comparison engine is reusable
- [ ] Search can scale to dedicated engine
- [ ] Content is separated from UI
- [ ] ASTRA can consume platform data later
- [ ] External providers can be replaced
- [ ] SEO is built into architecture
- [ ] Authentication is optional for public users
- [ ] Admin operations are protected
- [ ] Data verification is supported
- [ ] MVP is not over-engineered
- [ ] System can scale without rewriting

## Code Acceptance

- [ ] TypeScript strict mode (zero errors)
- [ ] ESLint passes (zero errors)
- [ ] All tests pass
- [ ] No hardcoded values
- [ ] No `any` types
- [ ] Proper error handling
- [ ] Responsive on all devices
- [ ] Accessible (WCAG 2.1 AA)
- [ ] SEO metadata on all pages
- [ ] Performance budgets met

---

**Document Version:** 1.0
**Last Updated:** 2026-08-08
**Status:** Ready for review
