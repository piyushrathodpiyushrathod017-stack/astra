# ASTRA WEBSITE DATABASE SCHEMA & API CONTRACTS

> **Document Version:** 1.0
> **Last Updated:** 2026-08-09
> **Status:** Complete - Ready for Implementation
> **Predecessor:** Technical Architecture & Database Blueprint

---
---

## Table of Contents

1. [Database Technology](#01---database-technology)
2. [Database Principles](#02---database-principles)
3. [Entity Model](#03---entity-model)
4. [Entity Specifications](#04---entity-specifications)
   - [04.1 users](#041-users)
   - [04.2 roles](#042-roles)
   - [04.3 user_roles](#043-user_roles)
   - [04.4 user_preferences](#044-user_preferences)
   - [04.5 bookmarks](#045-bookmarks)
   - [04.6 sessions](#046-sessions)
   - [04.7 providers](#047-providers)
   - [04.8 tools](#048-tools)
   - [04.9 tool_categories](#049-tool_categories)
   - [04.10 tool_features](#0410-tool_features)
   - [04.11 tool_platforms](#0411-tool_platforms)
   - [04.12 tool_integrations](#0412-tool_integrations)
   - [04.13 models](#0413-models)
   - [04.14 model_families](#0414-model_families)
   - [04.15 model_capabilities](#0415-model_capabilities)
   - [04.16 model_providers](#0416-model_providers)
   - [04.17 model_deployments](#0417-model_deployments)
   - [04.18 capabilities](#0418-capabilities)
   - [04.19 pricing_plans](#0419-pricing_plans)
   - [04.20 pricing_tiers](#0420-pricing_tiers)
   - [04.21 pricing_features](#0421-pricing_features)
   - [04.22 pricing_history](#0422-pricing_history)
   - [04.23 comparisons](#0423-comparisons)
   - [04.24 comparison_entities](#0424-comparison_entities)
   - [04.25 comparison_criteria](#0425-comparison_criteria)
   - [04.26 comparison_scores](#0426-comparison_scores)
   - [04.27 comparison_evidence](#0427-comparison_evidence)
   - [04.28 articles](#0428-articles)
   - [04.29 article_categories](#0429-article_categories)
   - [04.30 tags](#0430-tags)
   - [04.31 article_tags](#0431-article_tags)
   - [04.32 article_mentions](#0432-article_mentions)
   - [04.33 categories](#0433-categories)
   - [04.34 knowledge_topics](#0434-knowledge_topics)
   - [04.35 knowledge_articles](#0435-knowledge_articles)
   - [04.36 documentation_categories](#0436-documentation_categories)
   - [04.37 documentation_pages](#0437-documentation_pages)
   - [04.38 documentation_page_history](#0438-documentation_page_history)
   - [04.39 astra_features](#0439-astra_features)
   - [04.40 astra_modules](#0440-astra_modules)
   - [04.41 astra_components](#0441-astra_components)
   - [04.42 astra_versions](#0442-astra_versions)
   - [04.43 changelog](#0443-changelog)
   - [04.44 data_sources](#0444-data_sources)
   - [04.45 verification_records](#0445-verification_records)
   - [04.46 data_updates](#0446-data_updates)
   - [04.47 import_jobs](#0447-import_jobs)
   - [04.48 search_documents](#0448-search_documents)
   - [04.49 search_queries](#0449-search_queries)
   - [04.50 roadmap_phases](#0450-roadmap_phases)
   - [04.51 roadmap_milestones](#0451-roadmap_milestones)
   - [04.52 roadmap_tasks](#0452-roadmap_tasks)
   - [04.53 roadmap_dependencies](#0453-roadmap_dependencies)
   - [04.54 redirects](#0454-redirects)

---

## 01 â€” Database Technology

### Final Selections

| Component | Selection | Version | Rationale |
|-----------|-----------|---------|-----------|
| Database | PostgreSQL | 15+ | JSONB support, full-text search, mature ecosystem, Vercel Postgres compatible |
| ORM | Drizzle ORM | Latest | Type-safe, SQL-like API, excellent PostgreSQL support, lightweight |
| Validation | Zod | Latest | TypeScript-first schema validation, integrates with Drizzle |
| Authentication | Auth.js | Latest | Session management, OAuth providers, database sessions |

### Migration Strategy

| Aspect | Approach |
|--------|----------|
| Tool | Drizzle Kit (`drizzle-kit generate` + `drizzle-kit migrate`) |
| Naming | Timestamp-based: `YYYYMMDDHHMMSS_description` |
| Rollback | Manual reverse migrations in separate files |
| Staging | Auto-apply on deployment |
| Production | Manual approval via CI/CD pipeline |
| Testing | `drizzle-kit push` for local development |

### Seed Strategy

| Aspect | Approach |
|--------|----------|
| Tool | Custom TypeScript seed scripts |
| Trigger | `drizzle-kit seed` or `npm run db:seed` |
| Idempotent | Yes â€” uses `ON CONFLICT DO NOTHING` or upserts |
| Order | Foreign key dependencies respected |
| Data Source | Static JSON/TS files in `src/lib/db/seeds/` |
| Environments | Dev only; production uses import jobs |

### Development Database

| Aspect | Detail |
|--------|--------|
| Engine | PostgreSQL 15 (Docker) |
| Docker Compose | `docker-compose.yml` with `postgres:15-alpine` |
| Port | `5432` (configurable via `.env`) |
| Database | `astra_dev` |
| User | `astra` / `astra_dev_password` |
| Volumes | Named volume for data persistence |
| Extensions | `uuid-ossp`, `pg_trgm`, `unaccent` |

### Production Database

| Aspect | Detail |
|--------|--------|
| Provider | Vercel Postgres (Neon) |
| Plan | Pro |
| Region | `iad1` (US East) |
| Connection | Pooler (transaction mode) via `DATABASE_URL` |
| SSL | Required (`sslmode=require`) |
| Branching | Preview branches for PRs |
| Monitoring | Vercel Dashboard + pg_stat_statements |

### Backup Strategy

| Aspect | Detail |
|--------|--------|
| Automated | Daily snapshots (Vercel Postgres default) |
| Retention | 7 days |
| Manual | `pg_dump` via CI/CD on demand |
| Restore | Vercel dashboard one-click restore |
| Critical Data | Versioned via `data_updates` table |
| Verification | Weekly integrity checks |

---

## 02 â€” Database Principles

### Core Principles

| # | Principle | Description | Implementation |
|---|-----------|-------------|----------------|
| 1 | **Normalized** | Eliminate redundancy; 3NF minimum | Junction tables for M2M; no duplicated entity data |
| 2 | **Denormalized for Performance** | Strategic duplication for read-heavy queries | Materialized views; computed columns for counts/scores |
| 3 | **Type-Safe** | End-to-end TypeScript safety | Drizzle ORM schema â†’ generated types â†’ Zod validation |
| 4 | **Searchable** | Native full-text search capabilities | PostgreSQL `tsvector` columns; GIN indexes; `pg_trgm` for fuzzy |
| 5 | **SEO-Friendly** | URL-safe slugs, metadata, structured data | `slug` columns with unique indexes; JSON-LD fields |
| 6 | **Auditable** | Track all changes with timestamps | `created_at`/`updated_at` on every entity; `data_updates` for field-level tracking |
| 7 | **Versionable** | Support content versioning and rollback | `documentation_page_history`; version fields; `pricing_history` |
| 8 | **Extensible** | Schema evolves without breaking changes | `jsonb` for flexible attributes; soft deletes via `status` columns |

### Anti-Patterns

| Anti-Pattern | Risk | Mitigation |
|--------------|------|------------|
| Storing computed values without recalculation | Stale data | Trigger-based or application-level refresh |
| Unbounded text arrays without GIN | Slow queries | Always index `text[]` with GIN |
| Hardcoded category values | Inflexible | Separate `categories` table with `type` discriminator |
| Missing foreign key constraints | Orphaned records | All FK relationships explicitly defined |
| Using `serial` instead of `uuid` | ID guessing attacks | UUID primary keys everywhere |
| No `updated_at` trigger | Audit gaps | `updated_at` auto-update via Drizzle plugin |

---

## 03 â€” Entity Model

### Complete Entity List

| Domain | Entities | Count |
|--------|----------|-------|
| **User** | users, roles, user_roles, user_preferences, bookmarks, sessions | 6 |
| **AI Ecosystem** | providers, tools, tool_categories, tool_features, tool_platforms, tool_integrations, models, model_families, model_capabilities, model_providers, model_deployments, capabilities | 12 |
| **Pricing** | pricing_plans, pricing_tiers, pricing_features, pricing_history | 4 |
| **Comparison** | comparisons, comparison_entities, comparison_criteria, comparison_scores, comparison_evidence, comparison_methodologies | 6 |
| **Content** | articles, article_categories, tags, article_tags, article_mentions, knowledge_topics, knowledge_articles, documentation_categories, documentation_pages, documentation_page_history | 10 |
| **ASTRA** | astra_features, astra_modules, astra_components, astra_versions, changelog | 5 |
| **Data Management** | data_sources, verification_records, data_updates, import_jobs | 4 |
| **Search** | search_documents, search_queries | 2 |
| **Roadmap** | roadmap_phases, roadmap_milestones, roadmap_tasks, roadmap_dependencies | 4 |
| **Redirect** | redirects | 1 |
| | **Total** | **54** |

### Domain Relationships

```
User Domain â†â†’ AI Ecosystem (bookmarks, comparisons)
AI Ecosystem â†â†’ Pricing (entity_type/entity_id polymorphic)
AI Ecosystem â†â†’ Comparison (entity references)
Content Domain â†â†’ AI Ecosystem (article_mentions)
Content Domain â†â†’ User (author)
ASTRA Domain â†â†’ AI Ecosystem (feature tracking)
Data Management â†â†’ AI Ecosystem (verification, updates)
Search Domain â†â†’ All Entities (full-text index)
Roadmap Domain â†â†’ ASTRA Domain (planning)
Redirect Domain â†â†’ All Entities (URL management)
```

---

## 04 â€” Entity Specifications

### 04.1 users

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| email | varchar(255) | UNIQUE, NOT NULL | â€” | User email address |
| name | varchar(100) | NOT NULL | â€” | Display name |
| avatar | text | â€” | NULL | Profile image URL |
| email_verified | boolean | â€” | false | Email confirmation status |
| created_at | timestamptz | NOT NULL | `now()` | Account creation timestamp |
| updated_at | timestamptz | NOT NULL | `now()` | Last profile update |

**Indexes:** `idx_users_email` (email), `idx_users_created_at` (created_at)

### 04.2 roles

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| name | varchar(50) | UNIQUE, NOT NULL | â€” | Role name (e.g., `admin`, `editor`, `viewer`) |
| description | text | â€” | NULL | Role description |
| permissions | jsonb | â€” | `{}` | Permission set as JSON object |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

**Seed Values:** `admin`, `editor`, `viewer`, `analyst`

### 04.3 user_roles

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| user_id | uuid | FK â†’ users(id) NOT NULL | â€” | User reference |
| role_id | uuid | FK â†’ roles(id) NOT NULL | â€” | Role reference |
| created_at | timestamptz | NOT NULL | `now()` | Assignment timestamp |

**Unique Constraint:** `UNIQUE(user_id, role_id)`

### 04.4 user_preferences

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| user_id | uuid | FK â†’ users(id) UNIQUE, NOT NULL | â€” | One preference record per user |
| theme | varchar(20) | â€” | `'dark'` | UI theme preference |
| language | varchar(10) | â€” | `'en'` | Language code |
| notifications | jsonb | â€” | `{}` | Notification preferences |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |
| updated_at | timestamptz | NOT NULL | `now()` | Last update timestamp |

### 04.5 bookmarks

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| user_id | uuid | FK â†’ users(id) NOT NULL | â€” | User reference |
| item_type | varchar(50) | NOT NULL | â€” | Polymorphic type discriminator |
| item_id | uuid | NOT NULL | â€” | Polymorphic entity reference |
| created_at | timestamptz | NOT NULL | `now()` | Bookmark creation timestamp |

**Unique Constraint:** `UNIQUE(user_id, item_type, item_id)`
**Check Constraint:** `CHECK(item_type IN ('tool', 'model', 'article', 'comparison', 'documentation'))`

### 04.6 sessions

> **Note:** Sessions are managed entirely by Auth.js. No custom schema required. Auth.js handles session creation, validation, and expiry using its default database adapter.

### 04.7 providers

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| name | varchar(100) | NOT NULL | â€” | Provider display name |
| slug | varchar(100) | UNIQUE, NOT NULL | â€” | URL-safe identifier |
| logo | text | â€” | NULL | Logo image URL |
| website | text | â€” | NULL | Official website URL |
| description | text | â€” | NULL | Short description |
| founded_year | integer | â€” | NULL | Year founded |
| headquarters | varchar(255) | â€” | NULL | Location string |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |
| updated_at | timestamptz | NOT NULL | `now()` | Last update timestamp |

**Indexes:** `idx_providers_slug` (slug)

### 04.8 tools

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| name | varchar(150) | NOT NULL | â€” | Tool display name |
| slug | varchar(150) | UNIQUE, NOT NULL | â€” | URL-safe identifier |
| logo | text | â€” | NULL | Logo image URL |
| description | text | NOT NULL | â€” | Short description |
| full_description | text | â€” | NULL | Detailed markdown description |
| website | text | â€” | NULL | Official website URL |
| provider_id | uuid | FK â†’ providers(id) | â€” | Parent provider |
| category_id | uuid | FK â†’ categories(id) | â€” | Primary category |
| pricing_type | varchar(50) | â€” | `'unknown'` | Pricing model type |
| deployment | varchar(50) | â€” | NULL | `cloud`, `self-hosted`, `both` |
| open_source | boolean | â€” | false | Open source flag |
| open_source_url | text | â€” | NULL | Repository URL |
| api_available | boolean | â€” | false | Has public API |
| local_available | boolean | â€” | false | Can run locally |
| platforms | text[] | â€” | ARRAY[] | Supported platforms |
| strengths | text[] | â€” | ARRAY[] | Key advantages |
| weaknesses | text[] | â€” | ARRAY[] | Known limitations |
| best_for | text[] | â€” | ARRAY[] | Ideal use cases |
| alternatives | text[] | â€” | ARRAY[] | Competing tools |
| last_verified | date | â€” | NULL | Last data verification date |
| data_source | varchar(100) | â€” | NULL | Source of tool data |
| data_source_url | text | â€” | NULL | Source URL |
| status | varchar(20) | â€” | `'draft'` | `draft`, `published`, `archived` |
| featured | boolean | â€” | false | Featured on homepage |
| sort_order | integer | â€” | 0 | Display ordering |
| seo_title | varchar(255) | â€” | NULL | Custom SEO title |
| seo_description | text | â€” | NULL | Custom SEO description |
| og_image | text | â€” | NULL | Open Graph image URL |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |
| updated_at | timestamptz | NOT NULL | `now()` | Last update timestamp |

**Indexes:**
- `idx_tools_slug` (slug)
- `idx_tools_provider_id` (provider_id)
- `idx_tools_category_id` (category_id)
- `idx_tools_status` (status)
- `idx_tools_search` GIN (full-text search on name, description)
- `idx_tools_platforms` GIN (platforms array)

### 04.9 tool_categories

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| tool_id | uuid | FK â†’ tools(id) NOT NULL | â€” | Tool reference |
| category_id | uuid | FK â†’ categories(id) NOT NULL | â€” | Category reference |
| is_primary | boolean | â€” | false | Primary category flag |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

**Unique Constraint:** `UNIQUE(tool_id, category_id)`

### 04.10 tool_features

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| tool_id | uuid | FK â†’ tools(id) NOT NULL | â€” | Tool reference |
| capability_id | uuid | FK â†’ capabilities(id) NOT NULL | â€” | Capability reference |
| supported | boolean | â€” | true | Whether tool supports this capability |
| details | text | â€” | NULL | Additional details |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

**Unique Constraint:** `UNIQUE(tool_id, capability_id)`

### 04.11 tool_platforms

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| tool_id | uuid | FK â†’ tools(id) NOT NULL | â€” | Tool reference |
| platform | varchar(50) | NOT NULL | â€” | Platform name (e.g., `web`, `mac`, `windows`, `linux`) |
| url | text | â€” | NULL | Platform-specific URL |
| version | varchar(50) | â€” | NULL | Current version |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

**Unique Constraint:** `UNIQUE(tool_id, platform)`

### 04.12 tool_integrations

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| tool_id | uuid | FK â†’ tools(id) NOT NULL | â€” | Tool reference |
| integration_type | varchar(50) | NOT NULL | â€” | `api`, `plugin`, `sdk`, `webhook` |
| name | varchar(100) | NOT NULL | â€” | Integration name |
| description | text | â€” | NULL | Integration description |
| url | text | â€” | NULL | Documentation URL |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

### 04.13 models

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| name | varchar(150) | NOT NULL | â€” | Model display name |
| slug | varchar(150) | UNIQUE, NOT NULL | â€” | URL-safe identifier |
| provider_id | uuid | FK â†’ providers(id) NOT NULL | â€” | Model provider |
| family | varchar(100) | â€” | NULL | Model family (e.g., `gpt-4`, `claude-3`) |
| version | varchar(50) | â€” | NULL | Model version |
| release_date | date | â€” | NULL | Public release date |
| description | text | â€” | NULL | Model description |
| context_window | integer | â€” | NULL | Maximum context tokens |
| max_output | integer | â€” | NULL | Maximum output tokens |
| input_modalities | text[] | â€” | ARRAY[] | `text`, `image`, `audio`, `video` |
| output_modalities | text[] | â€” | ARRAY[] | `text`, `image`, `audio` |
| training_data_cutoff | date | â€” | NULL | Training data cutoff date |
| reasoning | integer | â€” | NULL | Reasoning capability score (0-100) |
| coding | integer | â€” | NULL | Coding capability score (0-100) |
| writing | integer | â€” | NULL | Writing capability score (0-100) |
| vision | boolean | â€” | false | Supports image input |
| audio | boolean | â€” | false | Supports audio input |
| tool_calling | boolean | â€” | false | Supports function/tool calling |
| streaming | boolean | â€” | true | Supports streaming responses |
| api_available | boolean | â€” | false | Has public API |
| local_available | boolean | â€” | false | Can run locally |
| license | varchar(100) | â€” | NULL | License type |
| parameters | bigint | â€” | NULL | Parameter count |
| hardware_requirements | jsonb | â€” | NULL | GPU/RAM requirements |
| benchmarks | jsonb | â€” | NULL | Benchmark scores |
| strengths | text[] | â€” | ARRAY[] | Key advantages |
| weaknesses | text[] | â€” | ARRAY[] | Known limitations |
| last_verified | date | â€” | NULL | Last data verification date |
| data_source | varchar(100) | â€” | NULL | Source of model data |
| data_source_url | text | â€” | NULL | Source URL |
| status | varchar(20) | â€” | `'draft'` | `draft`, `published`, `archived` |
| featured | boolean | â€” | false | Featured on homepage |
| seo_title | varchar(255) | â€” | NULL | Custom SEO title |
| seo_description | text | â€” | NULL | Custom SEO description |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |
| updated_at | timestamptz | NOT NULL | `now()` | Last update timestamp |

**Indexes:**
- `idx_models_slug` (slug)
- `idx_models_provider_id` (provider_id)
- `idx_models_status` (status)
- `idx_models_family` (family)
- `idx_models_search` GIN (full-text search on name, description)

### 04.14 model_families

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| name | varchar(100) | UNIQUE, NOT NULL | â€” | Family name (e.g., `GPT-4`, `Claude 3`) |
| slug | varchar(100) | UNIQUE, NOT NULL | â€” | URL-safe identifier |
| provider_id | uuid | FK â†’ providers(id) | â€” | Parent provider |
| description | text | â€” | NULL | Family description |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

### 04.15 model_capabilities

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| model_id | uuid | FK â†’ models(id) NOT NULL | â€” | Model reference |
| capability_id | uuid | FK â†’ capabilities(id) NOT NULL | â€” | Capability reference |
| level | varchar(20) | â€” | `'none'` | `none`, `basic`, `intermediate`, `advanced`, `expert` |
| details | text | â€” | NULL | Additional details |
| benchmark_score | numeric(5,2) | â€” | NULL | Score from 0-100 |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

**Unique Constraint:** `UNIQUE(model_id, capability_id)`

### 04.16 model_providers

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| model_id | uuid | FK â†’ models(id) NOT NULL | â€” | Model reference |
| provider_id | uuid | FK â†’ providers(id) NOT NULL | â€” | Provider reference |
| model_name | varchar(150) | â€” | NULL | Provider-specific model name |
| api_endpoint | text | â€” | NULL | API endpoint URL |
| is_primary | boolean | â€” | false | Primary provider flag |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

**Unique Constraint:** `UNIQUE(model_id, provider_id)`

### 04.17 model_deployments

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| model_id | uuid | FK â†’ models(id) NOT NULL | â€” | Model reference |
| type | varchar(50) | NOT NULL | â€” | `api`, `local`, `self-hosted` |
| name | varchar(100) | NOT NULL | â€” | Deployment name |
| description | text | â€” | NULL | Deployment description |
| hardware | jsonb | â€” | NULL | Hardware requirements |
| url | text | â€” | NULL | Deployment URL |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

### 04.18 capabilities

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| name | varchar(100) | UNIQUE, NOT NULL | â€” | Capability name |
| slug | varchar(100) | UNIQUE, NOT NULL | â€” | URL-safe identifier |
| description | text | â€” | NULL | Capability description |
| category | varchar(50) | â€” | NULL | Category grouping |
| sort_order | integer | â€” | 0 | Display ordering |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

**Seed Values:** `text-generation`, `code-generation`, `image-generation`, `vision`, `audio-processing`, `function-calling`, `reasoning`, `summarization`, `translation`, `embeddings`, `fine-tuning`, `rag-support`, `multi-modal`, `real-time`

### 04.19 pricing_plans

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| entity_type | varchar(50) | NOT NULL | â€” | Polymorphic type: `tool` or `model` |
| entity_id | uuid | NOT NULL | â€” | Polymorphic entity reference |
| name | varchar(100) | NOT NULL | â€” | Plan name |
| slug | varchar(100) | NOT NULL | â€” | URL-safe identifier |
| type | varchar(50) | NOT NULL | â€” | `free`, `freemium`, `paid`, `enterprise`, `usage-based` |
| billing_period | varchar(50) | â€” | NULL | `monthly`, `yearly`, `one-time` |
| is_active | boolean | â€” | true | Currently available |
| sort_order | integer | â€” | 0 | Display ordering |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |
| updated_at | timestamptz | NOT NULL | `now()` | Last update timestamp |

**Unique Constraint:** `UNIQUE(entity_type, entity_id, slug)`

### 04.20 pricing_tiers

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| plan_id | uuid | FK â†’ pricing_plans(id) NOT NULL | â€” | Plan reference |
| name | varchar(100) | NOT NULL | â€” | Tier name (e.g., `Starter`, `Pro`, `Enterprise`) |
| price | numeric(10,2) | â€” | NULL | Price amount |
| currency | varchar(3) | â€” | `'USD'` | ISO 4217 currency code |
| billing_period | varchar(50) | â€” | `'monthly'` | Billing frequency |
| unit | varchar(50) | â€” | NULL | Price unit (e.g., `per month`, `per 1K tokens`) |
| limits | jsonb | â€” | NULL | Usage limits as JSON |
| sort_order | integer | â€” | 0 | Display ordering |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |
| updated_at | timestamptz | NOT NULL | `now()` | Last update timestamp |

### 04.21 pricing_features

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| tier_id | uuid | FK â†’ pricing_tiers(id) NOT NULL | â€” | Tier reference |
| name | varchar(150) | NOT NULL | â€” | Feature name |
| value | varchar(255) | â€” | NULL | Feature value/limit |
| included | boolean | â€” | true | Whether feature is included |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

### 04.22 pricing_history

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| entity_type | varchar(50) | NOT NULL | â€” | Polymorphic type |
| entity_id | uuid | NOT NULL | â€” | Polymorphic entity reference |
| plan_slug | varchar(100) | NOT NULL | â€” | Plan slug at time of recording |
| price | numeric(10,2) | â€” | NULL | Price at time of recording |
| currency | varchar(3) | â€” | `'USD'` | ISO 4217 currency code |
| billing_period | varchar(50) | â€” | NULL | Billing frequency |
| data_source | varchar(100) | â€” | NULL | Price source |
| data_source_url | text | â€” | NULL | Source URL |
| recorded_at | timestamptz | NOT NULL | `now()` | When price was recorded |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

### 04.23 comparisons

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| slug | varchar(150) | UNIQUE, NOT NULL | â€” | URL-safe identifier |
| entity_type | varchar(50) | NOT NULL | â€” | `tool-model`, `tool-tool`, `model-model` |
| title | varchar(255) | NOT NULL | â€” | Comparison title |
| summary | text | â€” | NULL | Executive summary |
| methodology | text | â€” | NULL | How comparison was conducted |
| overall_score_a | numeric(5,2) | â€” | NULL | Overall score for entity A (0-100) |
| overall_score_b | numeric(5,2) | â€” | NULL | Overall score for entity B (0-100) |
| strengths_a | text[] | â€” | ARRAY[] | Key strengths of entity A |
| weaknesses_a | text[] | â€” | ARRAY[] | Key weaknesses of entity A |
| strengths_b | text[] | â€” | ARRAY[] | Key strengths of entity B |
| weaknesses_b | text[] | â€” | ARRAY[] | Key weaknesses of entity B |
| best_for_a | text[] | â€” | ARRAY[] | Use cases where A excels |
| best_for_b | text[] | â€” | ARRAY[] | Use cases where B excels |
| last_verified | date | â€” | NULL | Last verification date |
| data_source | varchar(100) | â€” | NULL | Comparison source |
| status | varchar(20) | â€” | `'draft'` | `draft`, `published`, `archived` |
| featured | boolean | â€” | false | Featured comparison |
| reading_time | integer | â€” | NULL | Estimated reading time (minutes) |
| seo_title | varchar(255) | â€” | NULL | Custom SEO title |
| seo_description | text | â€” | NULL | Custom SEO description |
| og_image | text | â€” | NULL | Open Graph image URL |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |
| updated_at | timestamptz | NOT NULL | `now()` | Last update timestamp |

**Indexes:**
- `idx_comparisons_slug` (slug)
- `idx_comparisons_status` (status)
- `idx_comparisons_entity_type` (entity_type)
- `idx_comparisons_search` GIN (full-text search on title, summary)

### 04.24 comparison_entities

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| comparison_id | uuid | FK â†’ comparisons(id) NOT NULL | â€” | Comparison reference |
| position | varchar(1) | NOT NULL | â€” | `a` or `b` |
| entity_type | varchar(50) | NOT NULL | â€” | Polymorphic type |
| entity_id | uuid | NOT NULL | â€” | Polymorphic entity reference |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

**Unique Constraint:** `UNIQUE(comparison_id, position)`
**Check Constraint:** `CHECK(position IN ('a','b'))`

### 04.25 comparison_criteria

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| comparison_id | uuid | FK â†’ comparisons(id) NOT NULL | â€” | Comparison reference |
| name | varchar(100) | NOT NULL | â€” | Criterion name |
| description | text | â€” | NULL | Criterion description |
| weight | numeric(3,2) | â€” | 1.0 | Importance weight (0.01-9.99) |
| sort_order | integer | â€” | 0 | Display ordering |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

### 04.26 comparison_scores

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| comparison_id | uuid | FK â†’ comparisons(id) NOT NULL | â€” | Comparison reference |
| criterion_id | uuid | FK â†’ comparison_criteria(id) NOT NULL | â€” | Criterion reference |
| position | varchar(1) | NOT NULL | â€” | `a` or `b` |
| score | numeric(5,2) | NOT NULL | â€” | Score from 0-100 |
| raw_value | text | â€” | NULL | Raw measured value |
| evidence | text | â€” | NULL | Supporting evidence |
| source | varchar(100) | â€” | NULL | Data source |
| source_url | text | â€” | NULL | Source URL |
| evaluator | varchar(100) | â€” | NULL | Who/what evaluated |
| verified | boolean | â€” | false | Verification status |
| verified_at | timestamptz | â€” | NULL | Verification timestamp |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

**Unique Constraint:** `UNIQUE(comparison_id, criterion_id, position)`
**Check Constraint:** `CHECK(score >= 0 AND score <= 100)`

### 04.27 comparison_evidence

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| comparison_id | uuid | FK â†’ comparisons(id) NOT NULL | â€” | Comparison reference |
| claim | text | NOT NULL | â€” | The claim being supported |
| evidence_type | varchar(50) | NOT NULL | â€” | `benchmark`, `test`, `review`, `official-docs` |
| source | varchar(100) | â€” | NULL | Evidence source |
| source_url | text | â€” | NULL | Source URL |
| checked_at | timestamptz | â€” | NULL | When checked |
| checked_by | varchar(100) | â€” | NULL | Who checked |
| verification_status | varchar(20) | â€” | `'pending'` | `pending`, `verified`, `disputed`, `outdated` |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

### 04.28 articles

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| title | varchar(255) | NOT NULL | â€” | Article title |
| slug | varchar(255) | UNIQUE, NOT NULL | â€” | URL-safe identifier |
| content | text | NOT NULL | â€” | Article content (Markdown) |
| excerpt | text | â€” | NULL | Short summary |
| featured_image | text | â€” | NULL | Featured image URL |
| author | varchar(100) | â€” | NULL | Author name |
| category | varchar(100) | â€” | NULL | Legacy category field |
| category_id | uuid | FK â†’ categories(id) | â€” | Category reference |
| reading_time | integer | â€” | NULL | Estimated reading time (minutes) |
| difficulty | varchar(20) | â€” | NULL | `beginner`, `intermediate`, `advanced` |
| status | varchar(20) | â€” | `'draft'` | `draft`, `published`, `archived` |
| published_at | timestamptz | â€” | NULL | Publication timestamp |
| last_updated | timestamptz | â€” | NULL | Last content update |
| featured | boolean | â€” | false | Featured on homepage |
| seo_title | varchar(255) | â€” | NULL | Custom SEO title |
| seo_description | text | â€” | NULL | Custom SEO description |
| canonical | text | â€” | NULL | Canonical URL |
| og_image | text | â€” | NULL | Open Graph image URL |
| structured_data | jsonb | â€” | NULL | JSON-LD structured data |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

**Indexes:**
- `idx_articles_slug` (slug)
- `idx_articles_status` (status)
- `idx_articles_category_id` (category_id)
- `idx_articles_published_at` (published_at DESC)
- `idx_articles_search` GIN (full-text search on title, content)

### 04.29 article_categories

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| article_id | uuid | FK â†’ articles(id) NOT NULL | â€” | Article reference |
| category_id | uuid | FK â†’ categories(id) NOT NULL | â€” | Category reference |
| is_primary | boolean | â€” | false | Primary category flag |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

**Unique Constraint:** `UNIQUE(article_id, category_id)`

### 04.30 tags

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| name | varchar(100) | UNIQUE, NOT NULL | â€” | Tag name |
| slug | varchar(100) | UNIQUE, NOT NULL | â€” | URL-safe identifier |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

### 04.31 article_tags

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| article_id | uuid | FK â†’ articles(id) NOT NULL | â€” | Article reference |
| tag_id | uuid | FK â†’ tags(id) NOT NULL | â€” | Tag reference |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

**Unique Constraint:** `UNIQUE(article_id, tag_id)`

### 04.32 article_mentions

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| article_id | uuid | FK â†’ articles(id) NOT NULL | â€” | Article reference |
| entity_type | varchar(50) | NOT NULL | â€” | Mentioned entity type |
| entity_id | uuid | NOT NULL | â€” | Mentioned entity reference |
| context | text | â€” | NULL | Context of mention |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

**Unique Constraint:** `UNIQUE(article_id, entity_type, entity_id)`

### 04.33 categories

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| name | varchar(100) | NOT NULL | â€” | Category name |
| slug | varchar(100) | NOT NULL | â€” | URL-safe identifier |
| description | text | â€” | NULL | Category description |
| type | varchar(50) | NOT NULL | â€” | `tool`, `article`, `documentation`, `model` |
| parent_id | uuid | FK â†’ categories(id) | NULL | Self-referencing parent |
| icon | varchar(50) | â€” | NULL | Icon identifier |
| color | varchar(7) | â€” | NULL | Hex color code |
| sort_order | integer | â€” | 0 | Display ordering |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |
| updated_at | timestamptz | NOT NULL | `now()` | Last update timestamp |

**Unique Constraint:** `UNIQUE(slug, type)`

### 04.34 knowledge_topics

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| name | varchar(150) | NOT NULL | â€” | Topic name |
| slug | varchar(150) | UNIQUE, NOT NULL | â€” | URL-safe identifier |
| description | text | â€” | NULL | Topic description |
| icon | varchar(50) | â€” | NULL | Icon identifier |
| parent_id | uuid | FK â†’ knowledge_topics(id) | NULL | Self-referencing parent |
| difficulty | varchar(20) | â€” | NULL | `beginner`, `intermediate`, `advanced` |
| learning_order | integer | â€” | 0 | Recommended learning sequence |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |
| updated_at | timestamptz | NOT NULL | `now()` | Last update timestamp |

### 04.35 knowledge_articles

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| topic_id | uuid | FK â†’ knowledge_topics(id) NOT NULL | â€” | Topic reference |
| article_id | uuid | FK â†’ articles(id) NOT NULL | â€” | Article reference |
| sort_order | integer | â€” | 0 | Display ordering within topic |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

**Unique Constraint:** `UNIQUE(topic_id, article_id)`

### 04.36 documentation_categories

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| name | varchar(150) | NOT NULL | â€” | Category name |
| slug | varchar(150) | UNIQUE, NOT NULL | â€” | URL-safe identifier |
| description | text | â€” | NULL | Category description |
| parent_id | uuid | FK â†’ documentation_categories(id) | NULL | Self-referencing parent |
| icon | varchar(50) | â€” | NULL | Icon identifier |
| sort_order | integer | â€” | 0 | Display ordering |
| version | varchar(50) | â€” | `'latest'` | Documentation version |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |
| updated_at | timestamptz | NOT NULL | `now()` | Last update timestamp |

### 04.37 documentation_pages

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| title | varchar(255) | NOT NULL | â€” | Page title |
| slug | varchar(255) | NOT NULL | â€” | URL-safe identifier |
| content | text | NOT NULL | â€” | Page content (Markdown) |
| category_id | uuid | FK â†’ documentation_categories(id) | â€” | Category reference |
| parent_id | uuid | FK â†’ documentation_pages(id) | NULL | Self-referencing parent |
| description | text | â€” | NULL | Page description |
| sort_order | integer | â€” | 0 | Display ordering |
| version | varchar(50) | â€” | `'latest'` | Documentation version |
| status | varchar(20) | â€” | `'published'` | `draft`, `published`, `archived` |
| seo_title | varchar(255) | â€” | NULL | Custom SEO title |
| seo_description | text | â€” | NULL | Custom SEO description |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |
| updated_at | timestamptz | NOT NULL | `now()` | Last update timestamp |

**Unique Constraint:** `UNIQUE(slug, version)`

**Indexes:**
- `idx_doc_pages_slug_version` (slug, version)
- `idx_doc_pages_category_id` (category_id)
- `idx_doc_pages_status` (status)
- `idx_doc_pages_search` GIN (full-text search on title, content)

### 04.38 documentation_page_history

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| page_id | uuid | FK â†’ documentation_pages(id) NOT NULL | â€” | Page reference |
| version | varchar(50) | NOT NULL | â€” | Version identifier |
| title | varchar(255) | NOT NULL | â€” | Page title at this version |
| content | text | NOT NULL | â€” | Page content at this version |
| changed_by | varchar(100) | â€” | NULL | Who made the change |
| change_summary | text | â€” | NULL | Summary of changes |
| created_at | timestamptz | NOT NULL | `now()` | Version timestamp |

### 04.39 astra_features

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| name | varchar(150) | NOT NULL | â€” | Feature name |
| slug | varchar(150) | UNIQUE, NOT NULL | â€” | URL-safe identifier |
| description | text | â€” | NULL | Short description |
| detailed_description | text | â€” | NULL | Full feature description |
| icon | varchar(50) | â€” | NULL | Icon identifier |
| category | varchar(50) | â€” | NULL | Feature category |
| status | varchar(20) | â€” | `'planned'` | `planned`, `in-progress`, `completed`, `deprecated` |
| roadmap_phase | varchar(50) | â€” | NULL | Associated roadmap phase |
| sort_order | integer | â€” | 0 | Display ordering |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |
| updated_at | timestamptz | NOT NULL | `now()` | Last update timestamp |

### 04.40 astra_modules

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| name | varchar(150) | NOT NULL | â€” | Module name |
| slug | varchar(150) | UNIQUE, NOT NULL | â€” | URL-safe identifier |
| description | text | â€” | NULL | Module description |
| layer | varchar(50) | â€” | NULL | Architecture layer |
| status | varchar(20) | â€” | `'planned'` | `planned`, `in-progress`, `completed`, `deprecated` |
| dependencies | text[] | â€” | ARRAY[] | Dependent module slugs |
| sort_order | integer | â€” | 0 | Display ordering |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |
| updated_at | timestamptz | NOT NULL | `now()` | Last update timestamp |

### 04.41 astra_components

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| name | varchar(150) | NOT NULL | â€” | Component name |
| slug | varchar(150) | UNIQUE, NOT NULL | â€” | URL-safe identifier |
| module_id | uuid | FK â†’ astra_modules(id) | â€” | Parent module |
| description | text | â€” | NULL | Component description |
| status | varchar(20) | â€” | `'planned'` | `planned`, `in-progress`, `completed`, `deprecated` |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |
| updated_at | timestamptz | NOT NULL | `now()` | Last update timestamp |

### 04.42 astra_versions

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| version | varchar(50) | UNIQUE, NOT NULL | â€” | Semantic version (e.g., `1.0.0`) |
| name | varchar(100) | â€” | NULL | Version codename |
| description | text | â€” | NULL | Version description |
| release_date | date | â€” | NULL | Release date |
| is_current | boolean | â€” | false | Current version flag |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

### 04.43 changelog

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| version_id | uuid | FK â†’ astra_versions(id) NOT NULL | â€” | Version reference |
| title | varchar(255) | NOT NULL | â€” | Change title |
| description | text | â€” | NULL | Change description |
| type | varchar(50) | NOT NULL | â€” | `feature`, `fix`, `improvement`, `breaking`, `deprecation` |
| category | varchar(50) | â€” | NULL | Change category |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

### 04.44 data_sources

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| name | varchar(100) | UNIQUE, NOT NULL | â€” | Source name |
| type | varchar(50) | NOT NULL | â€” | `official`, `community`, `scraped`, `manual` |
| url | text | â€” | NULL | Source URL |
| reliability | varchar(20) | â€” | `'medium'` | `high`, `medium`, `low` |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |
| updated_at | timestamptz | NOT NULL | `now()` | Last update timestamp |

### 04.45 verification_records

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| entity_type | varchar(50) | NOT NULL | â€” | Entity type being verified |
| entity_id | uuid | NOT NULL | â€” | Entity reference |
| source_id | uuid | FK â†’ data_sources(id) NOT NULL | â€” | Data source reference |
| verified_by | varchar(100) | â€” | NULL | Verifier name |
| status | varchar(20) | NOT NULL | â€” | `verified`, `disputed`, `outdated`, `pending` |
| confidence | varchar(20) | â€” | `'medium'` | `high`, `medium`, `low` |
| notes | text | â€” | NULL | Verification notes |
| checked_at | timestamptz | â€” | NULL | When checked |
| expires_at | timestamptz | â€” | NULL | When verification expires |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

### 04.46 data_updates

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| entity_type | varchar(50) | NOT NULL | â€” | Entity type updated |
| entity_id | uuid | NOT NULL | â€” | Entity reference |
| field | varchar(100) | NOT NULL | â€” | Field name that changed |
| old_value | text | â€” | NULL | Previous value |
| new_value | text | â€” | NULL | New value |
| changed_by | varchar(100) | â€” | NULL | Who made the change |
| reason | text | â€” | NULL | Reason for change |
| created_at | timestamptz | NOT NULL | `now()` | Change timestamp |

### 04.47 import_jobs

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| name | varchar(150) | NOT NULL | â€” | Job name |
| source | varchar(100) | NOT NULL | â€” | Data source identifier |
| entity_type | varchar(50) | NOT NULL | â€” | Target entity type |
| status | varchar(20) | â€” | `'pending'` | `pending`, `running`, `completed`, `failed` |
| file_url | text | â€” | NULL | Source file URL |
| record_count | integer | â€” | NULL | Total records to process |
| success_count | integer | â€” | 0 | Successfully processed |
| error_count | integer | â€” | 0 | Failed records |
| errors | jsonb | â€” | NULL | Error details |
| started_at | timestamptz | â€” | NULL | Job start timestamp |
| completed_at | timestamptz | â€” | NULL | Job completion timestamp |
| created_by | varchar(100) | â€” | NULL | Who initiated the job |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

### 04.48 search_documents

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| entity_type | varchar(50) | NOT NULL | â€” | Entity type |
| entity_id | uuid | NOT NULL | â€” | Entity reference |
| title | text | NOT NULL | â€” | Searchable title |
| description | text | â€” | NULL | Searchable description |
| keywords | text[] | â€” | ARRAY[] | Search keywords |
| category | varchar(100) | â€” | NULL | Search category |
| url | text | NOT NULL | â€” | Entity URL |
| icon | varchar(50) | â€” | NULL | Icon identifier |
| popularity | integer | â€” | 0 | Popularity score |
| freshness | timestamptz | â€” | NULL | Last updated for ranking |
| search_vector | tsvector | â€” | â€” | Full-text search vector |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |
| updated_at | timestamptz | NOT NULL | `now()` | Last update timestamp |

**Indexes:**
- `idx_search_documents_search_vector` GIN (search_vector)
- `idx_search_documents_entity` (entity_type, entity_id)
- `idx_search_documents_popularity` (popularity DESC)
- `idx_search_documents_freshness` (freshness DESC)

### 04.49 search_queries

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| query | text | NOT NULL | â€” | Search query string |
| results_count | integer | â€” | 0 | Number of results returned |
| user_id | uuid | FK â†’ users(id) | NULL | User reference (if logged in) |
| session_id | varchar(100) | â€” | NULL | Session identifier |
| created_at | timestamptz | NOT NULL | `now()` | Query timestamp |

### 04.50 roadmap_phases

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| name | varchar(150) | NOT NULL | â€” | Phase name |
| slug | varchar(150) | UNIQUE, NOT NULL | â€” | URL-safe identifier |
| description | text | â€” | NULL | Phase description |
| order | integer | NOT NULL | â€” | Phase ordering |
| status | varchar(20) | â€” | `'planned'` | `planned`, `in-progress`, `completed` |
| target_version | varchar(50) | â€” | NULL | Target release version |
| start_date | date | â€” | NULL | Planned start date |
| end_date | date | â€” | NULL | Planned end date |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |
| updated_at | timestamptz | NOT NULL | `now()` | Last update timestamp |

### 04.51 roadmap_milestones

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| phase_id | uuid | FK â†’ roadmap_phases(id) NOT NULL | â€” | Phase reference |
| name | varchar(150) | NOT NULL | â€” | Milestone name |
| description | text | â€” | NULL | Milestone description |
| status | varchar(20) | â€” | `'planned'` | `planned`, `in-progress`, `completed` |
| target_date | date | â€” | NULL | Target completion date |
| sort_order | integer | â€” | 0 | Display ordering |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |
| updated_at | timestamptz | NOT NULL | `now()` | Last update timestamp |

### 04.52 roadmap_tasks

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| milestone_id | uuid | FK â†’ roadmap_milestones(id) NOT NULL | â€” | Milestone reference |
| title | varchar(255) | NOT NULL | â€” | Task title |
| description | text | â€” | NULL | Task description |
| status | varchar(20) | â€” | `'todo'` | `todo`, `in-progress`, `done`, `blocked` |
| priority | varchar(20) | â€” | `'medium'` | `low`, `medium`, `high`, `critical` |
| assigned_to | varchar(100) | â€” | NULL | Assignee |
| sort_order | integer | â€” | 0 | Display ordering |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |
| updated_at | timestamptz | NOT NULL | `now()` | Last update timestamp |

### 04.53 roadmap_dependencies

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| task_id | uuid | FK â†’ roadmap_tasks(id) NOT NULL | â€” | Task reference |
| depends_on_id | uuid | FK â†’ roadmap_tasks(id) NOT NULL | â€” | Dependency task reference |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

**Unique Constraint:** `UNIQUE(task_id, depends_on_id)`
**Check Constraint:** `CHECK(task_id != depends_on_id)`

### 04.54 redirects

| Field | Type | Constraints | Default | Notes |
|-------|------|-------------|---------|-------|
| id | uuid | PK | `gen_random_uuid()` | Primary key |
| from_path | varchar(500) | UNIQUE, NOT NULL | â€” | Source URL path |
| to_path | varchar(500) | NOT NULL | â€” | Destination URL path |
| status | integer | â€” | 301 | HTTP status code (301, 302, 307, 308) |
| entity_type | varchar(50) | â€” | NULL | Related entity type |
| entity_id | uuid | â€” | NULL | Related entity reference |
| created_at | timestamptz | NOT NULL | `now()` | Creation timestamp |

**Indexes:**
- `idx_redirects_from_path` (from_path)

---

## 05 - ID Strategy

### Final Recommendation: CUID2

| Criterion | UUID v4 | CUID | Integer Auto-Increment | ULID |
|-----------|---------|------|----------------------|------|
| Performance | 36 chars, random IO | 25 chars, sequential-ish | 4-8 chars, sequential | 26 chars, time-ordered |
| Security | Unpredictable | Unpredictable | Predictable (guessable) | Time-predictable, random suffix |
| URL Safety | Needs encoding (has hyphens OK) | Safe | Safe | Safe |
| Distributed | No coordination | No coordination | Requires coordination | No coordination |
| DX | Well-known, many libraries | Good Drizzle support | Simple, but problematic at scale | Good library support |
| Sortable | No | Partial (time prefix) | Yes | Yes (time-based) |
| Collision Risk | Negligible | Negligible | None (single DB) | Negligible |
| Size | 16 bytes | 12 bytes | 4-8 bytes | 16 bytes |
| Readable | Low | Low | High | Medium |

### Reasons for CUID2

| Reason | Description |
|--------|-------------|
| URL-Friendly | No special characters, safe in URL paths without encoding |
| Sortable | Time-ordered prefix ensures natural chronological sorting |
| Collision-Resistant | Cryptographically random with collision avoidance built in |
| No Coordination | No central authority needed, works across distributed systems |
| No Exposed Sequence | Unlike auto-increment, doesn't reveal record count |
| Performance | Shorter than UUID (25 vs 36 chars), better index performance |
| Drizzle Support | Native cuid() function in Drizzle ORM schema |

### Implementation

`	ypescript
// Option 1: Using @paralleldrive/cuid2
import { createId } from '@paralleldrive/cuid2';

const id = createId(); // 'clfp3j2m50000qz1o8s2j4k1l'

// Option 2: Using Drizzle's built-in cuid()
import { pgTable, text } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

const users = pgTable('users', {
  id: text('id').primaryKey().(() => cuid()),
  // ...
});
`

### Primary Key Strategy

| Entity Type | ID Strategy | Notes |
|-------------|-------------|-------|
| All tables | CUID2 | Consistent across entire schema |
| Slugs | Generated separately | Slug is NOT the primary key |
| Foreign keys | Reference CUID2 PKs | All FK columns reference CUID2 primary keys |

---

## 06 - Slug Strategy

### Slug Generation Rules

| Rule | Description | Example |
|------|-------------|---------|
| Lowercase | All characters converted to lowercase | ChatGPT -> chatgpt |
| Hyphens for Spaces | Spaces replaced with hyphens | My Tool -> my-tool |
| Remove Special Chars | Strip non-alphanumeric characters (except hyphens) | C++ (Tool) -> c-tool |
| Trim Hyphens | Remove leading/trailing hyphens | -my-tool- -> my-tool |
| Collapse Hyphens | Multiple hyphens become single | my--tool -> my-tool |
| Max Length | 100 characters maximum | Truncate if needed |
| Unique Per Entity | Slugs unique within entity type | Use DB unique constraint |
| No Reserved Words | Avoid reserved slugs | Not pi, dmin, etc. |

### Generation Algorithm

`	ypescript
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\\s-]/g, '')  // Remove special chars
    .replace(/[\\s]+/g, '-')          // Spaces to hyphens
    .replace(/-+/g, '-')              // Collapse hyphens
    .replace(/^-|-$/g, '')            // Trim hyphens
    .slice(0, 100);                   // Max length
}

// Uniqueness check
async function ensureUniqueSlug(slug: string, table: string): string {
  let candidate = slug;
  let counter = 1;
  while (await slugExists(candidate, table)) {
    candidate = \\-\\;\
    counter++;\
  }
  return candidate;\
}
`

### Reserved Words

| Reserved | Reason |
|----------|--------|
| api | API routes |
| admin | Admin dashboard |
| docs | Documentation routes |
| knowledge | Knowledge base |
 | tools | Tool listing page |
 | models | Model listing page |
 | compare | Comparison pages |
 | blog | Blog routes |
 | search | Search functionality |
 | auth | Authentication routes |
 | login | Login page |
 | signup | Signup page |
 | settings | User settings |
 | profile | User profile |
 | dashboard | User dashboard |
 | static | Static assets |
 | public | Public assets |
 | assets | Asset files |
 | images | Image files |
 | fonts | Font files |
 | _next | Next.js internals |
 | favicon.ico | Favicon |
 | robots.txt | Robots file |
 | sitemap.xml | Sitemap file |
 | robots | Robots alternative |
 | sitemap | Sitemap alternative |
 | feed | RSS feed |
 | rss | RSS feed alternative |

### Slug Changes Strategy

> **NEVER silently change slugs.**

| Step | Action |
|------|--------|
| 1 | Create redirect record in edirects table |
| 2 | Set rom_path = old URL path |
| 3 | Set 	o_path = new URL path |
| 4 | Set status = 301 (permanent redirect) |
| 5 | Update entity slug |
| 6 | Middleware checks redirects table on every request |
| 7 | Old URLs work via 301 redirect indefinitely |

### Uniqueness per Entity Type

| Entity Type | Slug Column | Unique Constraint | Collision Handling |
|-------------|-------------|-------------------|-------------------|
| tools | slug | UNIQUE(slug) | Append -1, -2, etc. |
| models | slug | UNIQUE(slug) | Append -1, -2, etc. |
| categories | slug | UNIQUE(slug, type) | Per-type uniqueness |
| providers | slug | UNIQUE(slug) | Append -1, -2, etc. |
| articles | slug | UNIQUE(slug) | Append -1, -2, etc. |
| comparisons | slug | UNIQUE(slug) | Append -1, -2, etc. |
| tags | slug | UNIQUE(slug) | Append -1, -2, etc. |
 | knowledge_topics | slug | UNIQUE(slug) | Append -1, -2, etc. |
 | documentation_pages | slug | UNIQUE(slug, version) | Per-version uniqueness |

---

## 07 - Tool Schema

### Identity Fields

| Field | Type | Purpose |
|-------|------|---------|
| id | CUID2 PK | Unique identifier |
| name | varchar(150) | Display name |
| slug | varchar(150) UNIQUE | URL-safe identifier |
| logo | text | Logo image URL |
| description | text NOT NULL | Short description (160 chars max) |
| full_description | text | Detailed markdown description |
| website | text | Official website URL |
| provider_id | uuid FK | Parent provider reference |

### Classification Fields

| Field | Type | Purpose |
|-------|------|---------|
| category_id | uuid FK | Primary category |
| pricing_type | varchar(50) | Pricing model (free, freemium, paid, enterprise) |
| deployment | varchar(50) | Deployment type (cloud, self-hosted, both) |
| platforms | text[] | Supported platforms array |
| open_source | boolean | Open source flag |
| api_available | boolean | Has public API |

### Capability Fields

| Table | Relationship | Purpose |
|-------|-------------|---------|
| tool_features | M:N via junction | Links tools to capabilities |
| capability_id | FK -> capabilities | References shared capability table |
| supported | boolean | Whether tool supports this capability |
| details | text | Additional capability details |

### Pricing Fields

| Table | Relationship | Purpose |
|-------|-------------|---------|
| pricing_plans | Polymorphic (entity_type + entity_id) | Plan definitions |
| pricing_tiers | FK -> pricing_plans | Tier pricing (Starter, Pro, Enterprise) |
| pricing_features | FK -> pricing_tiers | Feature inclusions per tier |

### Evaluation Fields

| Field | Type | Purpose |
|-------|------|---------|
| strengths | text[] | Key advantages list |
| weaknesses | text[] | Known limitations list |
| best_for | text[] | Ideal use cases list |
| alternatives | text[] | Competing tools list |

### Verification Fields

| Field | Type | Purpose |
|-------|------|---------|
| last_verified | date | Last data verification date |
| data_source | varchar(100) | Source of tool data |
| data_source_url | text | Source URL |

### SEO Fields

| Field | Type | Purpose |
|-------|------|---------|
| seo_title | varchar(255) | Custom SEO title |
| seo_description | text | Custom SEO description |
| og_image | text | Open Graph image URL |

### Status and Meta Fields

| Field | Type | Purpose |
|-------|------|---------|
| status | varchar(20) | draft, published, archived |
| featured | boolean | Featured on homepage |
| sort_order | integer | Display ordering |
| created_at | timestamptz | Creation timestamp |
| updated_at | timestamptz | Last update timestamp |

### Relational Tables

| Table | Relationship | Purpose |
|-------|-------------|---------|
| tool_categories | M:N junction | Multiple categories per tool |
| tool_features | M:N junction | Capability associations |
| tool_platforms | 1:N | Platform-specific versions |
| tool_integrations | 1:N | API, plugin, SDK integrations |
| pricing_plans | 1:N polymorphic | Pricing structure |
| bookmarks | M:N polymorphic | User bookmarks |

---

## 08 - Category Schema

### Hierarchy Design

Categories use a self-referential parent_id field to create a tree structure.

`sql
categories (
  id          UUID PRIMARY KEY,
  name        VARCHAR(100) NOT NULL,
  slug        VARCHAR(100) NOT NULL,
  description TEXT,
  type        VARCHAR(50) NOT NULL,  -- tool, article, documentation, model
  parent_id   UUID REFERENCES categories(id),
  icon        VARCHAR(50),
  color       VARCHAR(7),
  sort_order  INTEGER DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now(),
  UNIQUE(slug, type)
);
`

### Maximum 3 Levels Deep

| Level | Depth | Example |
|-------|-------|---------|
| Root | 0 | AI |
| Child | 1 | AI -> Assistants |
| Leaf | 2 | AI -> Assistants -> Chatbots |
| Prohibited | 3+ | No deeper nesting allowed |

### Tool Categories Initial Hierarchy

`
AI
├── Assistants
│   ├── Chatbots
│   ├── Code Assistants
│   └── Writing Assistants
├── Coding
│   ├── Code Generation
│   ├── Code Review
│   ├── Code Completion
│   └── Debugging
├── Agents
│   ├── Autonomous Agents
│   ├── Workflow Automation
│   └── Task Orchestration
├── Image
│   ├── Image Generation
│   ├── Image Editing
│   └── Image Analysis
├── Video
│   ├── Video Generation
│   ├── Video Editing
│   └── Video Analysis
├── Audio
│   ├── Speech-to-Text
│   ├── Text-to-Speech
│   └── Audio Generation
├── Search
│   ├── Web Search
│   ├── Semantic Search
│   └── Enterprise Search
├── Productivity
│   ├── Note Taking
│   ├── Task Management
│   ├── Calendar
│   └── Email
└── Utilities
    ├── Translation
    ├── Summarization
    └── Data Extraction
`

### Model Categories Initial Hierarchy

`
Models
├── LLMs
│   ├── General Purpose
│   ├── Code-Specific
│   ├── Creative Writing
│   └── Reasoning
├── Image Models
│   ├── Text-to-Image
│   ├── Image-to-Image
│   └── Image Understanding
├── Audio Models
│   ├── Speech Recognition
│   ├── Text-to-Speech
│   └── Music Generation
└── Specialized
    ├── Embedding Models
    ├── Reranking Models
    └── Multimodal Models
`

### Ordering

| Field | Purpose |
|-------|---------|
| sort_order | Controls display order within parent level |
| Default | 0 (items with same sort_order display alphabetically) |
| Update | Manual adjustment via admin or drag-and-drop |
---

## 09 - Model Schema

### Identity Fields

| Field | Type | Purpose |
|-------|------|---------|
| id | CUID2 PK | Unique identifier |
| name | varchar(150) | Display name (e.g., GPT-4 Turbo) |
| slug | varchar(150) UNIQUE | URL-safe identifier |
| provider_id | uuid FK | Primary provider reference |
| family | varchar(100) | Model family (e.g., gpt-4, claude-3) |
| version | varchar(50) | Model version |
| release_date | date | Public release date |
| description | text | Model description |

### Technical Specifications

| Field | Type | Purpose |
|-------|------|---------|
| context_window | integer | Maximum context tokens |
| max_output | integer | Maximum output tokens |
| input_modalities | text[] | text, image, audio, video |
| output_modalities | text[] | text, image, audio |
| training_data_cutoff | date | Training data cutoff date |
| parameters | bigint | Parameter count |

### Capability Ratings

| Field | Type | Range | Purpose |
|-------|------|-------|---------|
| reasoning | integer | 0-100 | Reasoning capability score |
| coding | integer | 0-100 | Coding capability score |
| writing | integer | 0-100 | Writing capability score |
| vision | boolean | true/false | Supports image input |
| audio | boolean | true/false | Supports audio input |
| tool_calling | boolean | true/false | Supports function/tool calling |
| streaming | boolean | true/false | Supports streaming responses |

### Detailed Capabilities

| Table | Relationship | Purpose |
|-------|-------------|---------|
| model_capabilities | M:N via junction | Links models to detailed capabilities |
| capability_id | FK -> capabilities | References shared capability table |
| level | varchar(20) | none, basic, intermediate, advanced, expert |
| benchmark_score | numeric(5,2) | Score from 0-100 |

### Availability

| Field | Type | Purpose |
|-------|------|---------|
| api_available | boolean | Has public API |
| local_available | boolean | Can run locally |
| license | varchar(100) | License type |
| hardware_requirements | jsonb | GPU/RAM requirements |

### Pricing

| Table | Relationship | Purpose |
|-------|-------------|---------|
| pricing_plans | Polymorphic (entity_type + entity_id) | Plan definitions |
| pricing_tiers | FK -> pricing_plans | Tier pricing (Starter, Pro, Enterprise) |
| pricing_features | FK -> pricing_tiers | Feature inclusions per tier |

### Multiple Providers

| Table | Relationship | Purpose |
|-------|-------------|---------|
| model_providers | M:N junction | Multiple providers per model |
| model_name | varchar(150) | Provider-specific model name |
| api_endpoint | text | Provider-specific API endpoint |
| is_primary | boolean | Primary provider flag |

### Benchmarks

| Field | Type | Purpose |
|-------|------|---------|
| benchmarks | jsonb | Benchmark scores as structured JSON |

Example:
{
  "mmlu": 86.4,
  "humaneval": 67.0,
  "gsm8k": 92.0,
  "truthfulqa": 59.0,
  "winogrande": 87.5
}

### Deployments

| Table | Purpose |
|-------|---------|
| model_deployments | Different ways to deploy/use the model |
| type | api, local, edge, self-hosted |
| name | Deployment name |
| hardware | jsonb | Hardware requirements |
| url | Deployment URL or instructions |
---

## 10 - Capability System

### Design Decision: Hybrid (Lookup Table + Controlled Vocabulary)

We use a hybrid approach rather than boolean fields or free-form text.

### What We Do NOT Use

| Approach | Problem |
|----------|---------|
| Boolean fields for dozens of capabilities | Schema bloat, hard to query, impossible to extend |
| Free-form text capabilities | No consistency, no queryability, duplicates |

### What We Use Instead

`
capabilities (lookup table)
    |
    +-- tool_features (M:N junction for tools)
    |
    +-- model_capabilities (M:N junction for models)
`

### Benefits

| Benefit | Description |
|---------|-------------|
| Extensible | Add new capabilities without schema migration |
| Queryable | JOIN on junction tables for capability-based searches |
| Consistent | Same capability names across all entities |
| Auditable | Track when capabilities were added/changed |
| Future-proof | New capability types don't require ALTER TABLE |

### Capability Categories (Seed Values)

| Category | Capabilities |
|----------|-------------|
| core | text-generation, code-generation, reasoning, analysis, creative-writing, translation, summarization, instruction-following |
| modalities | text-input, image-input, audio-input, video-input, text-output, image-output, audio-output |
| deployment | api-access, local-deployment, edge-deployment, fine-tuning, streaming |
| integration | tool-calling, function-calling, mcp, rag, agents, plugins |

### Capability Levels

| Level | Description | Used In |
|-------|-------------|---------|
| none | Capability not supported | model_capabilities |
| low | Basic/limited support | model_capabilities |
| medium | Standard support | model_capabilities |
| high | Advanced/excellent support | model_capabilities |

### Adding New Capabilities

`
Step 1: INSERT INTO capabilities (name, slug, category) VALUES (...)
Step 2: Link via tool_features or model_capabilities
Step 3: No schema migration required
`

This approach allows the platform to grow its capability definitions over time without breaking existing data or requiring database changes.
---

## 11 - Pricing System

### Entity Design

`
pricing_plans (per tool/model)
    |
    +-- pricing_tiers (Starter, Pro, Enterprise)
            |
            +-- pricing_features (feature inclusions)
                    
pricing_history (append-only log)
`

### Pricing Types

| Type | Description | Example |
|------|-------------|---------|
| Free | No cost at all | Hugging Face, Ollama |
| Freemium | Free tier with paid upgrades | ChatGPT, Claude |
| Paid | Subscription or one-time purchase | GitHub Copilot |
| Enterprise | Custom pricing, contact sales | OpenAI Enterprise |
| Usage-based | Pay per token/request | OpenAI API, Anthropic API |

### History Tracking

> **Never overwrite pricing.** Always append to pricing_history.

`sql
-- When pricing changes, INSERT new record
INSERT INTO pricing_history (
  entity_type, entity_id, plan_slug, price, currency, billing_period, data_source, data_source_url
) VALUES (
  'tool', 'clfp3j2m50000qz1o8s2j4k1l', 'pro', 20.00, 'USD', 'monthly', 'official-website', 'https://...'
);

-- Current pricing is always the LATEST record
-- Historical pricing is available for trend analysis
`

### Currency Support

| Aspect | Approach |
|--------|----------|
| Default Currency | USD |
| Storage | Store with currency code (ISO 4217) |
| Display | Convert at runtime based on user preference |
| Precision | numeric(10,2) for accurate decimal handling |
| Examples | USD, EUR, GBP, JPY, CAD, AUD |
---

## 12 - Comparison Schema

### Dynamic Entity Attachment Model

Comparisons use a polymorphic junction table to support any entity pair.

`
comparisons
    |
    +-- comparison_entities (2 records per comparison)
            |
            +-- entity_type + entity_id -> any entity
`

### Relationship Model

`
+----------------+       +--------------------+
|  comparisons   |       | comparison_entities |
|----------------|       |--------------------|
| id (PK)        |<------+ comparison_id (FK)  |
| slug           |       | position (a or b)   |
| entity_type    |       | entity_type         |
| title          |       | entity_id           |
| ...            |       +--------------------+
+----------------+
        |
        +-- comparison_criteria (evaluation dimensions)
        +-- comparison_scores (per criterion per entity)
        +-- comparison_evidence (supporting claims)
`

### Supported Comparison Types

| Type | Entity A | Entity B | Example |
|------|----------|----------|---------|
| tool-tool | tool | tool | ChatGPT vs Claude |
| model-model | model | model | GPT-4 vs Claude 3 |
| tool-model | tool | model | Copilot vs GPT-4 |
| coding-tool | tool | tool | GitHub Copilot vs Cursor |
| platform-tool | tool | tool | VS Code vs JetBrains |

### Slug Generation for Comparisons

| Pattern | Example |
|---------|---------|
| {slug-a}-vs-{slug-b} | chatgpt-vs-claude |
| {slug-a}-versus-{slug-b} | gpt-4-versus-claude-3 |
| {slug-a}-or-{slug-b} | copilot-or-cursor |

Rules:
- Always lowercase
- Use hyphens for spaces
- Sort alphabetically for consistency
- Max 100 characters
- Unique per comparison
---

## 13 - Scoring System

### Criterion Structure

`
comparison_criteria
    - id (PK)
    - comparison_id (FK)
    - name (e.g., "Code Quality", "Speed", "Price")
    - description (what this criterion measures)
    - weight (0.01-9.99, importance multiplier)
    - sort_order (display ordering)
`

### Score Structure

`
comparison_scores
    - id (PK)
    - comparison_id (FK)
    - criterion_id (FK)
    - position (a or b)
    - score (0-100)
    - raw_value (original measurement)
    - evidence (supporting explanation)
    - source (data source)
    - source_url (source link)
    - evaluator (who/what evaluated)
    - verified (verification status)
`

### Score Calculation

`
Overall Score = sum(criterion_score * criterion_weight) / sum(weights)
`

Example:

| Criterion | Weight | Entity A | Entity B |
|-----------|--------|----------|----------|
| Code Quality | 2.0 | 85 | 90 |
| Speed | 1.5 | 70 | 80 |
| Price | 1.0 | 60 | 90 |
| **Weighted Average** | | **75.5** | **85.5** |

### Objective vs Editorial Weighting

| Source Type | Weight Modifier | Reason |
|-------------|-----------------|--------|
| Benchmark / Official Data | 1.5x | Objective, reproducible |
| Human Expert Review | 1.2x | Nuanced but subjective |
| User Reports / Community | 1.0x | Real-world but uncontrolled |
| Editorial / Opinion | 0.8x | Subjective by nature |

### Transparency Rules

| Rule | Implementation |
|------|----------------|
| Every score has evidence | comparison_scores.evidence field required |
| Every evidence has source | comparison_scores.source field required |
| Methodology documented | comparison.methodology field |
| No arbitrary scores | All scores backed by data or expert review |
| Evaluator type shown | comparison_scores.evaluator field |
| Verification tracked | comparison_scores.verified + verified_at |
---

## 14 - Evidence System

### Evidence Chain

`
Claim -> Evidence -> Source -> Verification
   |         |          |           |
   v         v          v           v
What is    How is     Where did   Is it
claimed    it proven  it from     current?
`

### Evidence Record Structure

`
comparison_evidence
    - id (PK)
    - comparison_id (FK)
    - claim (the assertion being supported)
    - evidence_type (benchmark, manual-test, user-report, official)
    - source (source name)
    - source_url (source link)
    - checked_at (when verified)
    - checked_by (verifier identity)
    - verification_status (current status)
`

### Evidence Types

| Type | Description | Weight |
|------|-------------|--------|
| benchmark | Quantitative test results | High |
| manual-test | Hands-on evaluation | Medium |
| user-report | Community feedback | Low |
| official | Official documentation/announcements | High |

### Verification Statuses

| Status | Description | Action |
|--------|-------------|--------|
| verified | Confirmed accurate | Show normally |
| needs-review | May be outdated | Show with warning badge |
| outdated | Known to be incorrect | Show with outdated badge, flag for update |
| rejected | Never was accurate | Remove from display, log for audit |

### Stale Data Handling

| Age | Status | Display Treatment |
|-----|--------|-------------------|
| 0-90 days | Current | Normal display |
| 90-180 days | Needs Review | Show with warning: "Data may be outdated" |
| 180+ days | Outdated | Show with badge: "Last verified X months ago" |
| Never verified | Unverified | Show with badge: "Unverified" |

### Verification Workflow

`
Step 1: New data enters system (manual entry or import)
Step 2: verification_status = 'pending'
Step 3: Reviewer checks against source
Step 4: If accurate -> status = 'verified', set checked_at
Step 5: If outdated -> status = 'outdated', trigger update
Step 6: Schedule periodic re-verification (90-day cycles)
Step 7: Stale data flagged automatically by age calculation
`

This evidence system ensures data integrity and transparency across all comparisons and evaluations on the platform.
## Section 15 - Article Schema

The article system stores editorial content including blog posts, tutorials, and guides.

### Entity Fields

| Column | Type | Description |
|--------|------|-------------|
| id | CUID2 | Primary key |
| title | VARCHAR(500) | Article title |
| slug | VARCHAR(500) | URL-friendly identifier, UNIQUE |
| content | TEXT | MDX content |
| excerpt | TEXT | Brief summary |
| featured_image | VARCHAR(500) | Hero image URL |
| author | VARCHAR(255) | Author name |
| category | VARCHAR(255) | Category name |
| category_id | VARCHAR(25) | FK to article_categories |
| reading_time | INTEGER | Estimated minutes |
| difficulty | VARCHAR(20) | beginner/intermediate/advanced |
| status | VARCHAR(20) | draft/review/published/archived |
| published_at | TIMESTAMP | Publication date |
| featured | BOOLEAN | Featured article flag |
| seo_title | VARCHAR(500) | SEO title override |
| seo_description | TEXT | SEO description |
| canonical | VARCHAR(500) | Canonical URL |
| og_image | VARCHAR(500) | OpenGraph image |
| structured_data | JSONB | Schema.org JSON-LD |

### Status Lifecycle

```
draft -> review -> published -> archived
  ^         |          |           |
  +---------+----------+-----------+ (reversible)
```

### Content Storage

MDX in database for articles needing dynamic data queries, search indexing, admin management. MDX files in repo for static, version-controlled documentation.

### Reading Time Calculation

Computed from word count, average 200 wpm.

### Related Content

| Table | Columns | Description |
|-------|---------|-------------|
| article_categories | id, name, slug, description, parent_id | Category hierarchy |
| article_tags | id, name, slug | Tag definitions |
| article_mentions | article_id, entity_type, entity_id, context | Links to mentioned tools/models |

## Section 16 - Knowledge Schema

Structured knowledge base with topic hierarchy and learning paths.

### Topic Hierarchy

knowledge_topics with self-referential parent_id, difficulty, learning_order.

### Topic-Article Association

knowledge_articles with topic_id, article_id, sort_order.

### Learning Path Support Fields

| Field | Type | Description |
|-------|------|-------------|
| difficulty | VARCHAR(20) | beginner/intermediate/advanced |
| learning_order | INTEGER | Sequence in learning path |
| parent_id | VARCHAR(25) | FK to self for hierarchy |

### Future Learning Paths Example JSON

```json
{
  "paths": [
    {
      "id": "ai-fundamentals",
      "name": "AI Fundamentals",
      "topics": [
        { "order": 1, "topic": "what-is-ai", "difficulty": "beginner" },
        { "order": 2, "topic": "ml-basics", "difficulty": "beginner" },
        { "order": 3, "topic": "neural-networks", "difficulty": "intermediate" }
      ]
    }
  ]
}
```

## Section 17 - Documentation Schema

Documentation system with versioning and hierarchical structure.

### Category Hierarchy

documentation_categories with version field.

### Page Structure

documentation_pages with parent_id for nesting, version, status.

### Version Support

version field on categories and pages, documentation_page_history for snapshots.

### Page Navigation

parent_id for nesting, sort_order for ordering, prev/next computed at query time.

## Section 18 - ASTRA Schema

ASTRA AI assistant feature tracking system.

### Features

astra_features: name, slug, description, detailed_description MDX, icon, category (core/ai/memory/tools/integration), status, roadmap_phase, sort_order.

### Modules

astra_modules: name, slug, description, layer (core/ai/memory/tools/ui), status, dependencies text[] of module slugs.

### Components

astra_components: name, slug, module_id FK, description, status.

### Versions

astra_versions: version (semantic), name, description, release_date, is_current.

### Changelog

changelog: version_id FK, title, description, type (feature/fix/improvement/breaking), category.

## Section 19 - Roadmap Schema

Development roadmap tracking with phases, milestones, tasks, and dependencies.

### Phases

roadmap_phases: name, slug, description, order, status, target_version, start_date, end_date.

### Milestones

roadmap_milestones: phase_id FK, name, description, status, target_date, sort_order.

### Tasks

roadmap_tasks: milestone_id FK, title, description, status (todo/in-progress/done/blocked), priority (low/medium/high/critical), assigned_to, sort_order.

### Dependencies

roadmap_dependencies: task_id FK, depends_on_id FK, UNIQUE, CHECK task_id != depends_on_id.

### Dynamic Roadmap UI

Roadmap page generated from database, fetch phases ordered by order, milestones per phase, tasks per milestone, render dependency graph, status badges.

## Section 20 - Verification System

Data verification and provenance tracking system.

### DataSource

data_sources: name UNIQUE, type (official/community/automated/manual), url, reliability (high/medium/low).

### VerificationRecord

verification_records: entity_type, entity_id, source_id FK, verified_by, status (verified/needs-review/outdated/rejected), confidence, notes, checked_at, expires_at.

### DataUpdate

data_updates: entity_type, entity_id, field, old_value, new_value, changed_by, reason.

### Workflow

Admin/automated checks data, creates verification_records, if outdated creates data_updates, entity last_verified updated, stale detection runs nightly.

## Section 21 - Import System

Bulk data import and processing pipeline.

### ImportJob

import_jobs: name, source (csv/json/api/manual), entity_type, status (pending/processing/completed/failed/review), file_url, record_count, success_count, error_count, errors JSONB, started_at, completed_at, created_by.

### Import Pipeline

```
Import -> Validate -> Normalize -> Dedup -> Review -> Publish
```

### Supported Formats

| Format | Source | Use Case |
|--------|--------|----------|
| CSV | File upload | Bulk tool/model data |
| JSON | File/API | Structured imports |
| API | Remote endpoint | Live data sync |
| Manual | Admin form | Individual entries |

### Error Handling

| Error Type | Action |
|------------|--------|
| Validation error | Log and skip record |
| Duplicate | Skip or merge based on config |
| Network error | Retry 3x then fail |
| Unknown | Log full error, flag for review |

## Section 22 - User Data

User accounts, roles, preferences, and bookmarks.

### User

users: email UNIQUE, name, avatar, email_verified.

### Roles

roles: name UNIQUE, description, permissions JSONB. Seed: admin, editor, reviewer, user.

### User Roles

user_roles: user_id FK, role_id FK. UNIQUE(user_id, role_id).

### Preferences

user_preferences: user_id FK UNIQUE, theme (dark/light/system), language, notifications JSONB.

### Bookmarks

Bookmarks polymorphic: user_id FK, item_type (tool/model/comparison/article), item_id. UNIQUE(user_id, item_type, item_id).

### Sessions

Sessions managed by Auth.js.

## Section 23 - Search Schema

Full-text search system with denormalized search index.

### SearchDocument Denormalized

search_documents: entity_type, entity_id, title, description, keywords, category, url, icon, popularity, freshness, search_vector tsvector.

### Searchable Entities

| Entity | Source Table | Index Trigger |
|--------|--------------|---------------|
| Tools | tools | INSERT/UPDATE |
| Models | models | INSERT/UPDATE |
| Articles | articles | INSERT/UPDATE |
| Knowledge | knowledge_topics | INSERT/UPDATE |
| Comparisons | comparisons | INSERT/UPDATE |
| Documentation | documentation_pages | INSERT/UPDATE |

### Index Population SQL

```sql
UPDATE search_documents SET search_vector =
  setweight(to_tsvector('english', coalesce(title, '')), 'A') ||
  setweight(to_tsvector('english', coalesce(description, '')), 'B') ||
  setweight(to_tsvector('english', coalesce(keywords, '')), 'C');
```

### SearchQuery Analytics

search_queries: query, results_count, user_id, session_id.

## Section 24 - Index Strategy

Comprehensive indexing strategy for optimal query performance.

### Primary Key Indexes

All tables use CUID2 with B-tree indexes (automatic with primary key).

### Unique Indexes

| Table | Column(s) | Purpose |
|-------|-----------|---------|
| tools | slug | URL lookup |
| models | slug | URL lookup |
| providers | slug | URL lookup |
| articles | slug | URL lookup |
| comparisons | slug | URL lookup |
| categories | slug, type | Unique per type |
| users | email | Auth lookup |
| tags | slug | URL lookup |
| knowledge_topics | slug | URL lookup |
| documentation_pages | slug, version | Version lookup |

### Foreign Key Indexes

| Table | Column | References |
|-------|--------|------------|
| tools | category_id | categories |
| tools | provider_id | providers |
| models | provider_id | providers |
| comparisons | category_id | categories |
| comparison_entities | comparison_id | comparisons |
| comparison_criteria | comparison_id | comparisons |
| comparison_scores | comparison_id | comparisons |
| comparison_scores | criteria_id | comparison_criteria |
| comparison_scores | entity_id | comparison_entities |
| comparison_evidence | score_id | comparison_scores |
| articles | category_id | article_categories |
| article_mentions | article_id | articles |
| knowledge_articles | topic_id | knowledge_topics |
| knowledge_articles | article_id | articles |
| knowledge_prerequisites | topic_id | knowledge_topics |
| knowledge_prerequisites | prerequisite_id | knowledge_topics |
| documentation_pages | category_id | documentation_categories |
| documentation_pages | parent_id | documentation_pages |
| astra_components | module_id | astra_modules |
| astra_features | version_added | astra_versions |
| astra_features | version_stable | astra_versions |
| astra_modules | version_added | astra_versions |
| roadmap_milestones | phase_id | roadmap_phases |
| roadmap_tasks | milestone_id | roadmap_milestones |
| roadmap_dependencies | task_id | roadmap_tasks |
| roadmap_dependencies | depends_on_id | roadmap_tasks |
| verification_records | source_id | data_sources |
| import_jobs | created_by | users |
| user_roles | user_id | users |
| user_roles | role_id | roles |
| user_preferences | user_id | users |
| bookmarks | user_id | users |
| search_documents | entity_id | (polymorphic) |
| pricing_history | tool_id | tools |
| pricing_history | model_id | models |

### Status Indexes

| Table | Column | Purpose |
|-------|--------|---------|
| tools | status | Filter active tools |
| models | status | Filter active models |
| comparisons | status | Filter published |
| articles | status | Filter published |
| documentation_pages | status | Filter published |
| import_jobs | status | Monitor imports |
| verification_records | status | Find stale data |

### Full-Text Search Indexes

| Table | Type | Columns |
|-------|------|---------|
| tools | GIN | search_vector |
| models | GIN | search_vector |
| articles | GIN | search_vector |
| search_documents | GIN | search_vector |

### Date Indexes

| Table | Column | Direction | Purpose |
|-------|--------|-----------|---------|
| articles | published_at | DESC | Recent articles |
| pricing_history | recorded_at | DESC | Latest pricing |
| verification_records | expires_at | ASC | Stale detection |
| search_documents | freshness | DESC | Fresh content |

### Array Indexes

| Table | Column | Type | Purpose |
|-------|--------|------|---------|
| tools | platforms | GIN | Platform filtering |

### Performance Notes

- Don't over-index: each index slows writes
- Monitor query plans with EXPLAIN ANALYZE
- Drop unused indexes after monitoring
- Consider partial indexes for common filters

## Section 25 - Constraints

Database constraints ensuring data integrity.

### Unique Constraints

| Table | Column(s) | Description |
|-------|-----------|-------------|
| tools | slug | Unique tool URL |
| models | slug | Unique model URL |
| providers | slug | Unique provider URL |
| articles | slug | Unique article URL |
| comparisons | slug | Unique comparison URL |
| categories | slug, type | Unique per category type |
| users | email | Unique email |
| tags | slug | Unique tag URL |
| knowledge_topics | slug | Unique topic URL |
| documentation_pages | slug, version | Unique per version |
| user_roles | user_id, role_id | One role per user |
| bookmarks | user_id, item_type, item_id | One bookmark per item |
| roadmap_dependencies | task_id, depends_on_id | One dependency record |

### Foreign Key Rules

| Table | Column | On Delete | On Update |
|-------|--------|-----------|-----------|
| tools | category_id | RESTRICT | CASCADE |
| tools | provider_id | RESTRICT | CASCADE |
| models | provider_id | RESTRICT | CASCADE |
| comparisons | category_id | SET NULL | CASCADE |
| comparison_entities | comparison_id | CASCADE | CASCADE |
| comparison_criteria | comparison_id | CASCADE | CASCADE |
| comparison_scores | comparison_id | CASCADE | CASCADE |
| comparison_scores | criteria_id | CASCADE | CASCADE |
| comparison_scores | entity_id | CASCADE | CASCADE |
| comparison_evidence | score_id | CASCADE | CASCADE |
| articles | category_id | SET NULL | CASCADE |
| article_mentions | article_id | CASCADE | CASCADE |
| knowledge_articles | topic_id | CASCADE | CASCADE |
| knowledge_articles | article_id | CASCADE | CASCADE |
| knowledge_prerequisites | topic_id | CASCADE | CASCADE |
| knowledge_prerequisites | prerequisite_id | CASCADE | CASCADE |
| documentation_pages | category_id | SET NULL | CASCADE |
| documentation_pages | parent_id | SET NULL | CASCADE |
| astra_components | module_id | CASCADE | CASCADE |
| astra_features | version_added | SET NULL | CASCADE |
| astra_features | version_stable | SET NULL | CASCADE |
| astra_modules | version_added | SET NULL | CASCADE |
| roadmap_milestones | phase_id | CASCADE | CASCADE |
| roadmap_tasks | milestone_id | CASCADE | CASCADE |
| roadmap_dependencies | task_id | CASCADE | CASCADE |
| roadmap_dependencies | depends_on_id | CASCADE | CASCADE |
| verification_records | source_id | SET NULL | CASCADE |
| import_jobs | created_by | SET NULL | CASCADE |
| user_roles | user_id | CASCADE | CASCADE |
| user_roles | role_id | CASCADE | CASCADE |
| user_preferences | user_id | CASCADE | CASCADE |
| bookmarks | user_id | CASCADE | CASCADE |

### Nullability Rules

| Type | Rule |
|------|------|
| Required fields | NOT NULL |
| Optional fields | NULL allowed |
| Arrays | DEFAULT '{}' |
| JSONB | Nullable |
| Timestamps | NOT NULL with defaults |
| Verification fields | Nullable |

### Check Constraints

| Table | Constraint | Rule |
|-------|------------|------|
| bookmarks | item_type | IN ('tool', 'model', 'comparison', 'article') |
| comparison_scores | position | >= 0 |
| comparison_scores | score | BETWEEN 0 AND 10 |
| comparison_entities | position | >= 0 |
| roadmap_dependencies | no self-dep | task_id != depends_on_id |

### Enum Constraints

Use VARCHAR with CHECK over PostgreSQL ENUMs for easier migrations, better Drizzle compatibility, clearer errors.

## Section 26 - Public API

RESTful API endpoints for all platform data.

### GET /api/v1/tools

List tools with filtering and pagination.

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| page | integer | 1 | Page number |
| limit | integer | 20 | Results per page (max 100) |
| category | string | - | Filter by category slug |
| provider | string | - | Filter by provider slug |
| pricing | string | - | Filter by pricing model |
| platform | string | - | Filter by platform |
| search | string | - | Full-text search |
| sort | string | popularity | Sort: popularity/name/date |
| status | string | published | Filter by status |

**Response:**

```json
{
  "data": [
    {
      "id": "cuid",
      "name": "Tool Name",
      "slug": "tool-name",
      "description": "Short description",
      "category": { "id": "cuid", "name": "Category", "slug": "category" },
      "provider": { "id": "cuid", "name": "Provider", "slug": "provider" },
      "icon": "https://...",
      "website": "https://...",
      "pricing": [{ "model": "freemium", "price": null }],
      "popularity": 85
    }
  ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  }
}
```

**Caching:** ISR 1 hour.

### GET /api/v1/tools/[slug]

Get single tool with full details.

**Response:**

```json
{
  "data": {
    "id": "cuid",
    "name": "Tool Name",
    "slug": "tool-name",
    "description": "Long description",
    "website": "https://...",
    "icon": "https://...",
    "category": { "id": "cuid", "name": "Category", "slug": "category" },
    "provider": { "id": "cuid", "name": "Provider", "slug": "provider" },
    "pricing": [
      { "model": "freemium", "price": null, "details": "..." }
    ],
    "capabilities": { "chat": true, "code": false },
    "platforms": ["web", "desktop"],
    "status": "published",
    "createdAt": "2024-01-01T00:00:00Z"
  }
}
```

**Caching:** ISR 1 hour.

### GET /api/v1/models

List AI models.

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| page | integer | 1 | Page number |
| limit | integer | 20 | Results per page |
| provider | string | - | Filter by provider |
| family | string | - | Filter by model family |
| modality | string | - | Filter by modality |
| search | string | - | Full-text search |
| sort | string | popularity | Sort field |

**Response:**

```json
{
  "data": [
    {
      "id": "cuid",
      "name": "Model Name",
      "slug": "model-name",
      "description": "Description",
      "provider": { "id": "cuid", "name": "Provider" },
      "family": "GPT",
      "modality": "multimodal",
      "contextWindow": 128000,
      "maxOutput": 4096
    }
  ],
  "meta": { "page": 1, "limit": 20, "total": 50, "totalPages": 3 }
}
```

**Caching:** ISR 1 hour.

### GET /api/v1/models/[slug]

Get single model with capabilities, pricing, deployments, benchmarks.

**Response:**

```json
{
  "data": {
    "id": "cuid",
    "name": "Model Name",
    "slug": "model-name",
    "description": "...",
    "provider": { "id": "cuid", "name": "Provider" },
    "family": "GPT",
    "modality": "multimodal",
    "contextWindow": 128000,
    "maxOutput": 4096,
    "capabilities": { "chat": true, "code": true, "vision": true },
    "pricing": [
      { "type": "input", "price": 0.01, "unit": "1K tokens" }
    ],
    "deployments": [
      { "name": "Azure", "region": "us-east" }
    ],
    "benchmarks": [
      { "name": "MMLU", "score": 86.4 }
    ]
  }
}
```

**Caching:** ISR 1 hour.

### GET /api/v1/categories

List categories with hierarchy.

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| type | string | - | Filter by type (tool/model/article) |

**Response:**

```json
{
  "data": [
    {
      "id": "cuid",
      "name": "Category",
      "slug": "category",
      "type": "tool",
      "description": "...",
      "children": [
        { "id": "cuid", "name": "Subcategory", "slug": "subcategory" }
      ]
    }
  ]
}
```

**Caching:** ISR 1 hour.

### GET /api/v1/compare

List comparisons.

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| page | integer | 1 | Page number |
| limit | integer | 20 | Results per page |
| entity_type | string | - | Filter by entity type |
| search | string | - | Full-text search |
| sort | string | date | Sort field |

**Response:**

```json
{
  "data": [
    {
      "id": "cuid",
      "title": "Comparison Title",
      "slug": "comparison-slug",
      "description": "...",
      "entityType": "tool",
      "status": "published",
      "entities": [
        { "name": "Tool A", "position": 0 },
        { "name": "Tool B", "position": 1 }
      ]
    }
  ],
  "meta": { "page": 1, "limit": 20, "total": 25, "totalPages": 2 }
}
```

**Caching:** ISR 1 hour.

### GET /api/v1/compare/[slug]

Get full comparison with entities, criteria, scores, evidence.

**Response:**

```json
{
  "data": {
    "id": "cuid",
    "title": "Tool A vs Tool B",
    "slug": "tool-a-vs-tool-b",
    "description": "...",
    "entityType": "tool",
    "status": "published",
    "entities": [
      { "id": "cuid", "name": "Tool A", "slug": "tool-a", "position": 0 },
      { "id": "cuid", "name": "Tool B", "slug": "tool-b", "position": 1 }
    ],
    "criteria": [
      { "id": "cuid", "name": "Ease of Use", "weight": 0.3, "position": 0 },
      { "id": "cuid", "name": "Features", "weight": 0.4, "position": 1 },
      { "id": "cuid", "name": "Pricing", "weight": 0.3, "position": 2 }
    ],
    "scores": [
      {
        "criteriaId": "cuid",
        "entityId": "cuid",
        "score": 8.5,
        "evidence": [
          { "id": "cuid", "content": "...", "source": "...", "url": "..." }
        ]
      }
    ],
    "publishedAt": "2024-01-15T00:00:00Z"
  }
}
```

**Caching:** ISR 1 hour.

### GET /api/v1/articles

List articles.

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| page | integer | 1 | Page number |
| limit | integer | 20 | Results per page |
| category | string | - | Filter by category |
| tag | string | - | Filter by tag |
| search | string | - | Full-text search |
| sort | string | date | Sort: date/popularity |

**Response:**

```json
{
  "data": [
    {
      "id": "cuid",
      "title": "Article Title",
      "slug": "article-title",
      "excerpt": "Brief summary...",
      "author": "Author Name",
      "category": { "id": "cuid", "name": "Category" },
      "readingTime": 5,
      "difficulty": "intermediate",
      "publishedAt": "2024-01-10T00:00:00Z",
      "featuredImage": "https://..."
    }
  ],
  "meta": { "page": 1, "limit": 20, "total": 40, "totalPages": 2 }
}
```

**Caching:** ISR 1 hour.

### GET /api/v1/articles/[slug]

Get single article with MDX content.

**Response:**

```json
{
  "data": {
    "id": "cuid",
    "title": "Article Title",
    "slug": "article-title",
    "content": "# Article Content\n\nMDX content here...",
    "excerpt": "...",
    "author": "Author Name",
    "category": { "id": "cuid", "name": "Category" },
    "tags": [{ "id": "cuid", "name": "Tag" }],
    "readingTime": 5,
    "difficulty": "intermediate",
    "status": "published",
    "publishedAt": "2024-01-10T00:00:00Z",
    "seo": {
      "title": "SEO Title",
      "description": "SEO description",
      "canonical": "https://...",
      "ogImage": "https://..."
    }
  }
}
```

**Caching:** ISR 1 hour.

### GET /api/v1/knowledge

List knowledge topics with hierarchy.

**Response:**

```json
{
  "data": [
    {
      "id": "cuid",
      "name": "AI Fundamentals",
      "slug": "ai-fundamentals",
      "description": "...",
      "difficulty": "beginner",
      "learningOrder": 1,
      "children": [
        { "id": "cuid", "name": "Machine Learning", "slug": "ml-basics" }
      ],
      "articles": [
        { "id": "cuid", "title": "Intro to AI", "slug": "intro-ai" }
      ]
    }
  ]
}
```

**Caching:** ISR 1 hour.

### GET /api/v1/docs

List documentation pages.

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| category | string | - | Filter by category slug |
| version | string | latest | Filter by version |

**Response:**

```json
{
  "data": [
    {
      "id": "cuid",
      "title": "Getting Started",
      "slug": "getting-started",
      "category": { "id": "cuid", "name": "Guides" },
      "version": "1.0",
      "status": "published",
      "sortOrder": 1
    }
  ]
}
```

**Caching:** ISR 1 hour.

### GET /api/v1/astra

Get ASTRA overview with features, modules, current version, recent changelog.

**Response:**

```json
{
  "data": {
    "currentVersion": {
      "version": "2.1.0",
      "name": "ASTRA 2.1",
      "releaseDate": "2024-01-01"
    },
    "features": [
      {
        "id": "cuid",
        "name": "Smart Chat",
        "slug": "smart-chat",
        "category": "ai",
        "status": "stable",
        "icon": "chat"
      }
    ],
    "modules": [
      {
        "id": "cuid",
        "name": "Core",
        "slug": "core",
        "layer": "core",
        "status": "stable",
        "dependencies": []
      }
    ],
    "recentChangelog": [
      {
        "id": "cuid",
        "title": "Added smart suggestions",
        "type": "feature",
        "version": "2.1.0",
        "createdAt": "2024-01-01"
      }
    ]
  }
}
```

**Caching:** ISR 1 hour.

## Section 27 - Search API

Unified search across all entity types.

### GET /api/v1/search

Search across tools, models, articles, knowledge, comparisons, and documentation.

**Query Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| q | string | Yes | - | Search query |
| type | string | No | - | Filter by entity type |
| category | string | No | - | Filter by category |
| page | integer | No | 1 | Page number |
| limit | integer | No | 20 | Results per page |
| sort | string | No | relevance | Sort: relevance/popularity/freshness |

**Response:**

```json
{
  "query": "ai chatbot",
  "total": 45,
  "results": [
    {
      "entityType": "tool",
      "id": "cuid",
      "title": "ChatBot Pro",
      "description": "AI-powered chatbot builder",
      "url": "/tools/chatbot-pro",
      "icon": "https://...",
      "category": "Chatbots",
      "score": 0.95
    },
    {
      "entityType": "model",
      "id": "cuid",
      "title": "GPT-4",
      "description": "Advanced language model",
      "url": "/models/gpt-4",
      "icon": "https://...",
      "category": "Language Models",
      "score": 0.88
    }
  ],
  "grouped": {
    "tools": [
      { "id": "cuid", "title": "ChatBot Pro", "url": "/tools/chatbot-pro" }
    ],
    "models": [
      { "id": "cuid", "title": "GPT-4", "url": "/models/gpt-4" }
    ],
    "articles": [],
    "knowledge": [],
    "comparisons": [],
    "documentation": []
  }
}
```

### Search Implementation SQL

```sql
SELECT
  entity_type,
  entity_id,
  title,
  description,
  url,
  icon,
  category,
  ts_rank(search_vector, plainto_tsquery('english', $1)) AS score
FROM search_documents
WHERE search_vector @@ plainto_tsquery('english', $1)
ORDER BY score DESC
LIMIT $2 OFFSET $3;
```

**Caching:** No caching (dynamic), client-side only.

## Section 28 - Comparison API

Endpoints for creating and retrieving comparisons.

### GET /api/v1/compare

List comparisons with filtering.

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| page | integer | 1 | Page number |
| limit | integer | 20 | Results per page |
| entity_type | string | - | Filter by entity type |
| search | string | - | Full-text search |
| sort | string | date | Sort: date/popularity |

**Response:**

```json
{
  "data": [
    {
      "id": "cuid",
      "title": "Tool A vs Tool B",
      "slug": "tool-a-vs-tool-b",
      "description": "...",
      "entityType": "tool",
      "status": "published",
      "entities": [
        { "name": "Tool A", "slug": "tool-a", "position": 0 },
        { "name": "Tool B", "slug": "tool-b", "position": 1 }
      ],
      "publishedAt": "2024-01-15T00:00:00Z"
    }
  ],
  "meta": { "page": 1, "limit": 20, "total": 25, "totalPages": 2 }
}
```

**Caching:** ISR 1 hour.

### GET /api/v1/compare/[slug]

Full comparison with entities, criteria, scores, evidence.

**Response:**

```json
{
  "data": {
    "id": "cuid",
    "title": "Tool A vs Tool B",
    "slug": "tool-a-vs-tool-b",
    "description": "Detailed comparison...",
    "entityType": "tool",
    "status": "published",
    "entities": [
      {
        "id": "cuid",
        "name": "Tool A",
        "slug": "tool-a",
        "icon": "https://...",
        "position": 0
      },
      {
        "id": "cuid",
        "name": "Tool B",
        "slug": "tool-b",
        "icon": "https://...",
        "position": 1
      }
    ],
    "criteria": [
      {
        "id": "cuid",
        "name": "Ease of Use",
        "description": "How easy to learn and use",
        "weight": 0.3,
        "position": 0
      },
      {
        "id": "cuid",
        "name": "Features",
        "description": "Feature completeness",
        "weight": 0.4,
        "position": 1
      },
      {
        "id": "cuid",
        "name": "Pricing",
        "description": "Value for money",
        "weight": 0.3,
        "position": 2
      }
    ],
    "scores": [
      {
        "criteriaId": "cuid",
        "entityId": "cuid",
        "score": 8.5,
        "evidence": [
          {
            "id": "cuid",
            "content": "Intuitive interface with minimal learning curve",
            "source": "Official documentation",
            "url": "https://...",
            "verifiedAt": "2024-01-10T00:00:00Z"
          }
        ]
      }
    ],
    "publishedAt": "2024-01-15T00:00:00Z",
    "lastVerified": "2024-01-20T00:00:00Z"
  }
}
```

**Caching:** ISR 1 hour.

### POST /api/v1/compare (Internal/ASTRA)

Request a new comparison to be generated.

**Request Body:**

```json
{
  "entityType": "tool",
  "entities": ["tool-a-slug", "tool-b-slug"],
  "criteria": ["ease-of-use", "features", "pricing", "support"]
}
```

**Response:**

```json
{
  "data": {
    "id": "cuid",
    "status": "pending",
    "message": "Comparison generation started",
    "estimatedCompletion": "2024-01-15T00:05:00Z"
  }
}
```

**Notes:**
- Internal/ASTRA only (requires authentication)
- Triggers background job to generate comparison
- Returns immediately with job status
- Poll GET /api/v1/compare/[slug] for completion


## Section 29 - Admin API

All admin endpoints require authentication with a valid session cookie and an admin or editor role.

**Authorization Header Format:**
```http
Cookie: session=<session_token>
```

The server validates the session token and checks the user role from the `user_roles` table. Only users with `admin` or `editor` roles may access admin endpoints.

### Tool Management

**POST /api/v1/admin/tools** - Create a new tool

```json
{
  "name": "New AI Tool",
  "slug": "new-ai-tool",
  "description": "A powerful AI tool for code generation",
  "fullDescription": "Detailed description supporting MDX content...",
  "website": "https://example.com",
  "providerId": "uuid-of-provider",
  "categoryId": "uuid-of-category",
  "pricingType": "freemium",
  "deployment": "cloud",
  "openSource": false,
  "apiAvailable": true,
  "platforms": ["web", "api", "cli"],
  "strengths": ["Fast inference", "Good API"],
  "weaknesses": ["Limited context", "No free tier"],
  "bestFor": ["Code generation", "Prototyping"]
}
```

**PUT /api/v1/admin/tools/[id]** - Update an existing tool

Request body contains only the fields to update (partial update).

**DELETE /api/v1/admin/tools/[id]** - Archive a tool

Soft-delete sets `status` to `archived`. Does not remove the record.

**POST /api/v1/admin/tools/[id]/verify** - Mark tool as verified

Sets `verified` to true and records verification timestamp.

### Model Management

**POST /api/v1/admin/models** - Create a new model

```json
{
  "name": "GPT-5 Turbo",
  "slug": "gpt-5-turbo",
  "providerId": "uuid-of-provider",
  "family": "GPT",
  "version": "5-turbo",
  "contextWindow": 200000,
  "inputModalities": ["text", "image"],
  "outputModalities": ["text"],
  "reasoning": "advanced",
  "coding": "advanced",
  "vision": true,
  "apiAvailable": true
}
```

**PUT /api/v1/admin/models/[id]** - Update an existing model

**DELETE /api/v1/admin/models/[id]** - Archive a model

### Pricing Management

**POST /api/v1/admin/pricing** - Add a new pricing plan

```json
{
  "entityType": "tool",
  "entityId": "uuid-of-tool",
  "planName": "Pro",
  "priceMonthly": 29.99,
  "priceYearly": 299.99,
  "currency": "USD",
  "features": ["Unlimited API calls", "Priority support"]
}
```

**PUT /api/v1/admin/pricing/[id]** - Update an existing pricing plan

**POST /api/v1/admin/pricing/[id]/history** - Record a price change

Appends a new entry to `pricing_history` with the old and new prices.

### Comparison Management

**POST /api/v1/admin/comparisons** - Create a new comparison

```json
{
  "entityType": "model",
  "title": "GPT-5 vs Claude 4",
  "slug": "gpt-5-vs-claude-4",
  "entityAId": "uuid-of-gpt5",
  "entityBId": "uuid-of-claude4",
  "summary": "Comprehensive comparison of two leading models",
  "methodology": "Benchmark testing and expert review",
  "status": "draft"
}
```

**PUT /api/v1/admin/comparisons/[id]** - Update comparison metadata

**PUT /api/v1/admin/comparisons/[id]/scores** - Update comparison scores

```json
{
  "scores": [
    {
      "criterionId": "uuid-of-criterion",
      "entityAId": "uuid-of-entity-a",
      "entityBId": "uuid-of-entity-b",
      "scoreA": 9.2,
      "scoreB": 8.8
    }
  ]
}
```

**POST /api/v1/admin/comparisons/[id]/evidence** - Add evidence to a comparison

```json
{
  "type": "benchmark",
  "source": "Internal testing suite",
  "url": "https://example.com/benchmark-results",
  "excerpt": "Testing performed on 2024-01-15 with standard prompts",
  "reliability": "high"
}
```

### Article Management

**POST /api/v1/admin/articles** - Create a new article

```json
{
  "title": "Getting Started with AI Models",
  "slug": "getting-started-with-ai-models",
  "content": "# Introduction\n\nThis guide covers...",
  "excerpt": "A beginner guide to understanding AI models",
  "category": "guide",
  "categoryId": "uuid-of-category",
  "author": "ASTRA Team",
  "difficulty": "beginner",
  "seoTitle": "Getting Started with AI Models | ASTRA",
  "seoDescription": "Learn how to choose and use AI models effectively"
}
```

**PUT /api/v1/admin/articles/[id]** - Update an existing article

**POST /api/v1/admin/articles/[id]/publish** - Publish a draft article

Sets `status` to `published` and records `publishedAt`.

**POST /api/v1/admin/articles/[id]/archive** - Archive an article

Sets `status` to `archived`.

### Verification

**POST /api/v1/admin/verify** - Submit a verification record

```json
{
  "dataSourceId": "uuid-of-data-source",
  "entityType": "tool",
  "entityId": "uuid-of-tool",
  "confidence": 0.95,
  "method": "api_check",
  "notes": "Verified via official API endpoint"
}
```

**GET /api/v1/admin/verify/pending** - List pending verifications

Returns verification records with confidence below threshold.

### Import

**POST /api/v1/admin/import** - Start an import job

```json
{
  "source": "csv",
  "entityType": "tools",
  "fileUrl": "https://storage.example.com/import.csv",
  "options": {
    "skipDuplicates": true,
    "updateExisting": false
  }
}
```

**GET /api/v1/admin/import/[id]** - Check import job status

Returns job status, progress percentage, and error details if any.

**GET /api/v1/admin/import** - List all import jobs

Returns paginated list of import jobs with status and timestamps.

### ASTRA Management

**POST /api/v1/admin/astra/features** - Add an ASTRA feature

```json
{
  "name": "Real-time Collaboration",
  "slug": "real-time-collaboration",
  "description": "Enable real-time collaboration on ASTRA projects",
  "status": "planned",
  "priority": "high",
  "estimatedEffort": "large"
}
```

**PUT /api/v1/admin/astra/features/[id]** - Update an ASTRA feature

**POST /api/v1/admin/astra/versions** - Add a new ASTRA version

```json
{
  "version": "2.0.0",
  "releaseDate": "2024-06-01",
  "summary": "Major update with new recommendation engine",
  "status": "released"
}
```

**POST /api/v1/admin/astra/changelog** - Add a changelog entry

```json
{
  "versionId": "uuid-of-version",
  "type": "feature",
  "description": "Added support for multi-modal comparisons",
  "breakingChange": false
}
```

## Section 30 - Error Contract

All API errors follow a consistent response format.

**Standard Error Response:**

```json
{
  "data": null,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request body contains invalid fields",
    "details": [
      {
        "field": "name",
        "message": "Name is required and must be between 1 and 255 characters"
      }
    ]
  }
}
```

### Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| VALIDATION_ERROR | 400 | Request body or query parameters failed validation |
| NOT_FOUND | 404 | The requested resource does not exist |
| UNAUTHORIZED | 401 | Authentication is required or session is invalid |
| FORBIDDEN | 403 | Authenticated user lacks required role or permissions |
| RATE_LIMITED | 429 | Too many requests; retry after the specified duration |
| CONFLICT | 409 | Resource already exists or conflicts with current state |
| UNPROCESSABLE | 422 | Request is well-formed but semantically invalid |
| EXTERNAL_SERVICE_ERROR | 502 | Upstream service returned an error |
| INTERNAL_ERROR | 500 | An unexpected server error occurred |

### Error Response Headers

```http
Content-Type: application/json
X-Request-Id: req_abc123def456
```

### Validation Error Details Example

```json
{
  "data": null,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request body contains invalid fields",
    "details": [
      {
        "field": "email",
        "message": "Must be a valid email address"
      },
      {
        "field": "age",
        "message": "Must be between 0 and 150"
      },
      {
        "field": "password",
        "message": "Must be at least 8 characters and contain one uppercase letter"
      }
    ]
  }
}
```

## Section 31 - Pagination

The API uses two pagination strategies depending on the use case.

**Strategy:** Offset-Based for Public APIs, Cursor-Based for Large/Infinite Lists.

### Offset Pagination (Default)

Used for: tools, models, articles, comparisons, categories, pricing plans.

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| page | integer | 1 | Page number (1-indexed) |
| limit | integer | 20 | Items per page |

**Response Meta:**

```json
{
  "meta": {
    "total": 245,
    "page": 1,
    "limit": 20,
    "hasNext": true,
    "hasPrev": false,
    "totalPages": 13
  }
}
```

### Cursor-Based Pagination

Used for: search results, activity feeds, notification streams.

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| cursor | string | null | Opaque cursor from previous response |
| limit | integer | 20 | Items per page |

**Response Meta:**

```json
{
  "meta": {
    "nextCursor": "eyJpZCI6MTIzfQ==",
    "hasMore": true
  }
}
```

### Pagination Limits

| Endpoint Type | Max Limit | Default Limit |
|---------------|-----------|---------------|
| List endpoints (tools, models, articles) | 100 | 20 |
| Search results | 50 | 20 |
| Admin endpoints | 200 | 50 |

## Section 32 - Caching

### Cache Policy

| Resource | Strategy | Revalidation |
|----------|----------|--------------|
| Homepage | SSG | On deploy |
| ASTRA pages | SSG | On deploy |
| Tool profiles | ISR | 1 hour / on data change |
| Model profiles | ISR | 1 hour / on data change |
| Comparisons | ISR | 1 hour / on data change |
| Articles | SSG | On deploy |
| Knowledge topics | SSG | On deploy |
| Documentation | SSG | On deploy |
| Categories | ISR | 24 hours (rare changes) |
| Search | CSR | None (client-side) |
| Admin | None | No caching |

### Cache Headers

**ISR Response (Tool Profile):**
```http
Cache-Control: s-maxage=3600, stale-while-revalidate=86400
CDN-Cache-Control: s-maxage=3600
X-Cache: HIT
X-Cache-Hits: 42
```

**SSG Response (Homepage):**
```http
Cache-Control: public, max-age=0, s-maxage=86400, stale-while-revalidate=604800
CDN-Cache-Control: s-maxage=86400
```

**API Response (Dynamic):**
```http
Cache-Control: private, no-cache, no-store, must-revalidate
```

### Invalidation Strategy

| Trigger | Method | Latency |
|---------|--------|---------|
| Data update (admin) | On-demand ISR revalidation | < 5 seconds |
| Deploy | Automatic SSG rebuild | Build time |
| Manual | Admin revalidation endpoint | < 5 seconds |
| Scheduled | Nightly revalidation for ISR | < 30 seconds |

### Vercel ISR Revalidation

```typescript
// app/api/revalidate/route.ts
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { path, tag, secret } = await request.json();

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
  }

  if (path) {
    revalidatePath(path);
  }
  if (tag) {
    revalidateTag(tag);
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
```

## Section 33 - Validation

All request and response validation uses Zod schemas. Schemas are defined in `src/lib/validators/`.

### CreateToolSchema

```typescript
const CreateToolSchema = z.object({
  name: z.string().min(1).max(255),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Invalid slug format'),
  description: z.string().min(1).max(500),
  fullDescription: z.string().optional(),
  website: z.string().url().optional().or(z.literal('')),
  providerId: z.string().uuid(),
  categoryId: z.string().uuid().optional(),
  pricingType: z.enum(['free', 'freemium', 'paid', 'enterprise', 'unknown']),
  deployment: z.enum(['cloud', 'self-hosted', 'local', 'hybrid', 'unknown']),
  openSource: z.boolean().optional().default(false),
  apiAvailable: z.boolean().optional().default(false),
  platforms: z.array(z.string()).optional().default([]),
  strengths: z.array(z.string()).optional().default([]),
  weaknesses: z.array(z.string()).optional().default([]),
  bestFor: z.array(z.string()).optional().default([]),
  status: z.enum(['active', 'archived', 'draft']).optional().default('draft')
});
```

### CreateModelSchema

```typescript
const CreateModelSchema = z.object({
  name: z.string().min(1).max(255),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Invalid slug format'),
  providerId: z.string().uuid(),
  family: z.string().min(1).max(100),
  version: z.string().min(1).max(50),
  contextWindow: z.number().int().positive().max(10000000),
  inputModalities: z.array(z.enum(['text', 'image', 'audio', 'video'])),
  outputModalities: z.array(z.enum(['text', 'image', 'audio', 'code'])),
  reasoning: z.enum(['none', 'basic', 'advanced']).optional().default('none'),
  coding: z.enum(['none', 'basic', 'intermediate', 'advanced']).optional().default('none'),
  vision: z.boolean().optional().default(false),
  apiAvailable: z.boolean().optional().default(false),
  status: z.enum(['active', 'archived', 'draft']).optional().default('draft')
});
```

### CreateComparisonSchema

```typescript
const CreateComparisonSchema = z.object({
  entityType: z.enum(['tool', 'model']),
  title: z.string().min(1).max(255),
  slug: z.string().regex(/^[a-z0-9]+-vs-[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Must contain -vs-'),
  entityAId: z.string().uuid(),
  entityBId: z.string().uuid(),
  summary: z.string().min(1).max(2000),
  methodology: z.string().min(1).max(1000),
  status: z.enum(['draft', 'published', 'archived']).optional().default('draft')
});
```

### CreateArticleSchema

```typescript
const CreateArticleSchema = z.object({
  title: z.string().min(1).max(255),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Invalid slug format'),
  content: z.string().min(1),
  excerpt: z.string().min(1).max(500),
  category: z.enum(['guide', 'tutorial', 'review', 'news', 'analysis', 'reference']),
  categoryId: z.string().uuid().optional(),
  author: z.string().min(1).max(255),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
  status: z.enum(['draft', 'published', 'archived']).optional().default('draft'),
  seoTitle: z.string().max(70).optional(),
  seoDescription: z.string().max(160).optional()
});
```

### SearchSchema

```typescript
const SearchSchema = z.object({
  q: z.string().min(1).max(500),
  type: z.enum(['all', 'tools', 'models', 'comparisons', 'articles', 'knowledge']).optional().default('all'),
  category: z.string().uuid().optional(),
  page: z.number().int().positive().optional().default(1),
  limit: z.number().int().min(1).max(50).optional().default(20),
  sort: z.enum(['relevance', 'newest', 'oldest', 'name', 'popular']).optional().default('relevance')
});
```

### Reusable Validation Rules

```typescript
const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const PaginationSchema = z.object({
  page: z.number().int().positive().optional().default(1),
  limit: z.number().int().min(1).max(100).optional().default(20)
});
```

## Section 34 - Seed Strategy

### Seed Data Categories

| Category | Record Count | Description |
|----------|-------------|-------------|
| Providers | 10 | OpenAI, Anthropic, Google, Meta, Mistral, Cohere, Stability, Midjourney, Hugging Face, Replicate |
| Categories (tool) | 20 | Code generation, writing, image, video, audio, data, productivity, research, etc. |
| Categories (model) | 10 | Language, vision, multimodal, code, embedding, audio, etc. |
| Tools | 30 | Representative tools across all categories |
| Models | 20 | Key models from each provider |
| Pricing | 30 | Free, freemium, paid, enterprise plans |
| Capabilities | 30 | Code, writing, vision, reasoning, translation, etc. |
| Comparisons | 10 | Tool vs tool, model vs model |
| Articles | 10 | Guides, tutorials, reviews |
| ASTRA Features | 15 | Current and planned features |
| ASTRA Modules | 10 | Core modules and components |
| Tags | 20 | Common tags for categorization |

### Seed File Structure

```
src/db/seed/
â”œâ”€â”€ index.ts              # Main orchestrator, runs all seeds in order
â”œâ”€â”€ providers.ts          # 10 AI/ML providers
â”œâ”€â”€ categories.ts         # 30 categories (20 tool + 10 model)
â”œâ”€â”€ capabilities.ts       # 30 capability definitions
â”œâ”€â”€ tools.ts              # 30 tools with full metadata
â”œâ”€â”€ models.ts             # 20 models with capabilities
â”œâ”€â”€ pricing.ts            # 30 pricing plans
â”œâ”€â”€ comparisons.ts        # 10 comparison records
â”œâ”€â”€ articles.ts           # 10 articles with content
â”œâ”€â”€ astra.ts              # 15 features + 10 modules
â”œâ”€â”€ tags.ts               # 20 tags
â””â”€â”€ search-index.ts       # Populate search documents
```

### Seed Commands

```bash
# Run full seed on dev database
pnpm db:seed:dev

# Reset database and re-seed
pnpm db:reset
```

### Seed Rules

- **Idempotent:** Running seed multiple times does not create duplicates. Uses `ON CONFLICT DO NOTHING` or upserts.
- **Referential Integrity:** Seeds are ordered to satisfy foreign key constraints. Providers before tools, categories before items.
- **Realistic Data:** All seed data uses realistic names, descriptions, and pricing. No placeholder text like "Lorem ipsum".
- **Clearly Labeled:** All seed records include `data_source: 'seed'` in their metadata for easy identification.
- **No Secrets:** No API keys, tokens, or credentials in seed data.

## Section 35 - Migration Strategy

### Migration Tool

Drizzle Kit generates and manages SQL migration files from TypeScript schema definitions.

### Workflow

1. **Make schema changes** in `src/db/schema/*.ts`
2. **Generate migration:** `pnpm db:generate`
3. **Review SQL** in `drizzle/` directory
4. **Apply migration:** `pnpm db:migrate`
5. **Test:** `pnpm dev` to verify schema changes work

### Migration File Naming

```
drizzle/
â”œâ”€â”€ 0000_initial.sql
â”œâ”€â”€ 0001_add_pricing_history.sql
â”œâ”€â”€ 0002_add_verification_records.sql
â”œâ”€â”€ 0003_add_search_indexes.sql
â”œâ”€â”€ 0004_add_article_tables.sql
â””â”€â”€ 0005_add_astra_tables.sql
```

### Migration Safety Rules

| Rule | Description |
|------|-------------|
| Never modify production directly | Always generate and review migrations |
| Test on staging first | Apply to staging database before production |
| Support rollback | Each migration has corresponding rollback SQL |
| Add columns as nullable | Avoid breaking existing data with NOT NULL |
| Backfill data separately | Use separate migration for data backfill |
| Version schema | Track schema version in metadata table |

### Rollback Strategy

Each migration file has a corresponding rollback file:

```
drizzle/
â”œâ”€â”€ 0004_add_article_tables.sql
â”œâ”€â”€ 0004_add_article_tables_rollback.sql
```

### Production Migration Process

1. **Generate:** `pnpm db:generate` locally
2. **Test staging:** Apply to staging database
3. **Review SQL:** Manual review of generated SQL
4. **Schedule window:** Notify team of migration window
5. **Apply:** `pnpm db:migrate` on production
6. **Verify:** Run smoke tests against production
7. **Monitor:** Watch error rates and performance for 1 hour

## Section 36 - API Security

### Authentication

| Endpoint Type | Auth Required | Method |
|---------------|---------------|--------|
| Public read | No | Anonymous access |
| User operations | Yes | Session cookie |
| Admin operations | Yes | Session cookie + role check |

### Authorization

| Role | Permissions |
|------|-------------|
| anonymous | Read public data |
| user | Read + bookmarks + preferences |
| reviewer | All user permissions + submit verifications |
| editor | All reviewer permissions + create/edit articles |
| admin | Full access to all endpoints |

### Validation

- **Zod schemas** validate all request bodies and query parameters
- **Drizzle parameterized queries** prevent SQL injection
- **Input sanitization** strips dangerous characters from user input

### Rate Limiting

| Endpoint Category | Limit | Window |
|-------------------|-------|--------|
| Public read | 100 requests | 1 minute |
| Search | 30 requests | 1 minute |
| Authentication | 10 attempts | 1 minute |
| Admin operations | 60 requests | 1 minute |
| Write operations | 30 requests | 1 minute |

Rate limit headers returned on every response:
```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 87
X-RateLimit-Reset: 1709251200
```

### Input Sanitization

- **MDX content:** Sanitized on render using rehype-sanitize
- **User inputs:** Escaped to prevent XSS attacks
- **File uploads:** Validated for type, size, and content (future)

### API Keys (Future)

```http
X-API-Key: ak_live_abc123def456
```

API keys will be available for programmatic access with separate rate limits.

### CORS

```http
Access-Control-Allow-Origin: https://astra.example.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization, X-API-Key
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 86400
```

## Section 37 - Future ASTRA API

### Internal Service Interfaces

ASTRA will provide internal APIs for the recommendation engine and knowledge system.

#### ASTRAToolQuery

```typescript
interface ASTRAToolQuery {
  query: string;
  category?: string;
  pricing?: 'free' | 'freemium' | 'paid';
  platforms?: string[];
  limit?: number;
}
```

#### ASTRAModelQuery

```typescript
interface ASTRAModelQuery {
  query: string;
  provider?: string;
  modality?: 'text' | 'image' | 'audio' | 'multimodal';
  minContext?: number;
  limit?: number;
}
```

#### ASTRAComparisonRequest

```typescript
interface ASTRAComparisonRequest {
  entityType: 'tool' | 'model';
  entityASlug: string;
  entityBSlug: string;
}
```

#### ASTRAKnowledgeQuery

```typescript
interface ASTRAKnowledgeQuery {
  query: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  limit?: number;
}
```

#### ASTRARecommendationRequest

```typescript
interface ASTRARecommendationRequest {
  task: string;
  budget?: 'free' | 'low' | 'medium' | 'high';
  platform?: string;
  privacy?: 'public' | 'private' | 'enterprise';
}
```

### ASTRA Response Format

#### ASTRAResponse

```typescript
interface ASTRAResponse {
  answer: string;
  confidence: number; // 0-1
  sources: Source[];
  related: RelatedItem[];
  suggestions: string[];
}
```

#### Source

```typescript
interface Source {
  type: 'tool' | 'model' | 'article' | 'comparison';
  id: string;
  title: string;
  url: string;
  excerpt: string;
}
```

#### RelatedItem

```typescript
interface RelatedItem {
  type: 'tool' | 'model' | 'article' | 'comparison';
  title: string;
  url: string;
}
```

### API Endpoints (Future Internal)

| Endpoint | Method | Description | Auth |
|----------|--------|-------------|------|
| /api/internal/tools/search | POST | Search tools with AI filtering | Internal key |
| /api/internal/models/search | POST | Search models with AI filtering | Internal key |
| /api/internal/compare | POST | Generate comparison data | Internal key |
| /api/internal/knowledge | POST | Query knowledge base | Internal key |
| /api/internal/recommend | POST | Get recommendations | Internal key |
| /api/internal/state | GET | Get ASTRA system state | Internal key |

## Section 38 - Export

### Supported Export Formats

| Format | Entities | Use Case |
|--------|----------|----------|
| JSON | All | Full data backup, API consumption |
| CSV | Tools, models, pricing | Spreadsheet analysis, reporting |
| API | All | Real-time programmatic access |
| Admin export | All | Data migration, bulk operations |

### Exportable Entities

| Entity | Exportable | Notes |
|--------|------------|-------|
| tools | Yes | Full metadata included |
| models | Yes | Full metadata included |
| providers | Yes | Provider details |
| categories | Yes | Category hierarchy preserved |
| comparisons | Yes | Including scores and evidence |
| articles | Yes | MDX content included |
| knowledge_topics | Yes | Full content included |
| pricing | Yes | Current and historical |
| capabilities | Yes | Capability definitions |
| users | No | Privacy protection |
| sessions | No | Security |
| bookmarks | No | User privacy |
| import_jobs | No | Operational data |
| verification_records | No | Internal audit data |

### Export API (Admin)

**GET /api/v1/admin/export/tools** - Export all tools

```json
{
  "format": "json",
  "includeMetadata": true,
  "includePricing": true,
  "includeCapabilities": true
}
```

**GET /api/v1/admin/export/models** - Export all models

**GET /api/v1/admin/export/all** - Export entire database

### User Data Export (Future - GDPR)

**GET /api/v1/user/export** - Export user data

Returns all data associated with the authenticated user:
- Profile information
- Preferences
- Bookmarks
- Search history (anonymized)

## Section 39 - Performance

### Query Patterns

| Pattern | Frequency | Optimization |
|---------|-----------|--------------|
| List tools with filtering | High | Index on provider, category, status |
| Get tool by slug | High | Unique index on slug |
| Full-text search | High | GIN index with tsvector |
| List comparisons | Medium | Index on status, created_at |
| Get comparison with scores | Medium | Single query with joins |
| List articles | Medium | Index on status, category |
| User bookmarks | Low | Index on user_id |
| Admin queries | Low | Separate connection pool |

### Index Strategy

Refer to Section 24 for complete index definitions.

### Connection Pooling

- **Vercel Postgres:** Built-in connection pooling
- **Pool limit:** 10 connections
- **Idle timeout:** 10 minutes
- **Connection timeout:** 5 seconds

### Eager vs Lazy Loading

| Scenario | Loading Strategy | Reason |
|----------|-----------------|--------|
| Single entity page | Eager | All relations needed upfront |
| List pages | Lazy | Load relations on demand |
| Search results | Lazy | Minimal data for performance |
| Admin dashboard | Eager | Full context needed |

### N+1 Prevention

- Use `findMany` with `with` for relation loading
- Batch queries using `Promise.all`
- Use SQL JOINs for complex queries
- Cache frequent queries with ISR

### Most Expensive Queries

| Query | Cost | Mitigation |
|-------|------|------------|
| Search across entities | High | Search index, pagination |
| List all tools with relations | Medium | Pagination, select needed fields |
| Comparison with scores + media | Medium | Single query with joins |
| Full-text search with ranking | Medium | GIN index, limit results |

### Performance Targets

| Metric | Target |
|--------|--------|
| API p50 | < 100ms |
| API p95 | < 300ms |
| API p99 | < 500ms |
| DB query p50 | < 20ms |
| Full-text search | < 50ms |

## Section 40 - Database Security

### Least Privilege

| Role | Permissions | Use Case |
|------|-------------|----------|
| app_readonly | SELECT only | Application reads |
| app_readwrite | SELECT, INSERT, UPDATE | Admin operations |
| app_migrate | DDL permissions | Schema migrations |

### Environment Separation

| Environment | Database | Purpose |
|-------------|----------|---------|
| Development | astra_dev | Local development |
| Staging | astra_staging | Pre-production testing |
| Production | astra_prod | Live application |

### Credentials

- **Environment variables only:** Never hardcode credentials
- **Never in code:** No credentials in source code or commits
- **Rotation:** Rotate credentials quarterly

### Encrypted Connections

```sql
-- Connection string with SSL
postgresql://user:pass@host:5432/db?sslmode=require
```

**SSL Modes:**
- `require`: SSL required, no certificate verification
- `verify-ca`: Verify server certificate
- `verify-full`: Verify server certificate and hostname

### Backups

| Policy | Value |
|--------|-------|
| Frequency | Daily automated |
| Retention | 30 days |
| Method | pg_dump to S3 |
| Encryption | AES-256 |
| Restore tested | Monthly |

### Access Logging

- Log all database connections
- Log all admin queries
- Maintain audit trail for data changes
- Alert on unusual access patterns

### Admin Access

- VPN required for direct database access
- IP whitelist for production database
- Two-factor authentication for database admin
- Session recording for audit purposes

## Section 41 - ER Diagram

```
Provider
â”œâ”€â”€ tools (1:N)
â”œâ”€â”€ models (1:N)
â””â”€â”€ model_providers (1:N)

Category
â”œâ”€â”€ tools (1:N via tool_categories)
â”œâ”€â”€ models (1:N)
â”œâ”€â”€ articles (1:N via article_categories)
â”œâ”€â”€ knowledge_topics (1:N)
â”œâ”€â”€ documentation_categories (1:N)
â””â”€â”€ self-referential (parent_id)

Tool
â”œâ”€â”€ categories (N:N via tool_categories)
â”œâ”€â”€ features (N:N via tool_features -> capabilities)
â”œâ”€â”€ platforms (1:N via tool_platforms)
â”œâ”€â”€ integrations (1:N via tool_integrations)
â”œâ”€â”€ pricing (1:N via pricing_plans)
â”œâ”€â”€ comparisons (N:N via comparison_entities)
â”œâ”€â”€ articles (N:N via article_mentions)
â”œâ”€â”€ bookmarks (N:N)
â”œâ”€â”€ search_documents (1:1)
â””â”€â”€ verification_records (1:N)

Model
â”œâ”€â”€ provider (N:1)
â”œâ”€â”€ family (N:1 via model_families)
â”œâ”€â”€ capabilities (N:N via model_capabilities -> capabilities)
â”œâ”€â”€ providers (N:N via model_providers)
â”œâ”€â”€ deployments (1:N via model_deployments)
â”œâ”€â”€ pricing (1:N via pricing_plans)
â”œâ”€â”€ comparisons (N:N via comparison_entities)
â”œâ”€â”€ articles (N:N via article_mentions)
â””â”€â”€ search_documents (1:1)

Comparison
â”œâ”€â”€ entities (1:N via comparison_entities)
â”œâ”€â”€ criteria (1:N via comparison_criteria)
â”‚   â””â”€â”€ scores (1:N via comparison_scores)
â”œâ”€â”€ evidence (1:N via comparison_evidence)
â””â”€â”€ search_documents (1:1)

Article
â”œâ”€â”€ categories (N:N via article_categories)
â”œâ”€â”€ tags (N:N via article_tags)
â”œâ”€â”€ mentions (1:N via article_mentions)
â”œâ”€â”€ knowledge (N:N via knowledge_articles)
â””â”€â”€ search_documents (1:1)

User
â”œâ”€â”€ roles (N:N via user_roles)
â”œâ”€â”€ preferences (1:1 via user_preferences)
â”œâ”€â”€ bookmarks (1:N)
â””â”€â”€ search_queries (1:N)

ASTRA
â”œâ”€â”€ features (1:N)
â”œâ”€â”€ modules (1:N)
â”‚   â””â”€â”€ components (1:N)
â”œâ”€â”€ versions (1:N)
â”‚   â””â”€â”€ changelog (1:N)
â””â”€â”€ search_documents (1:1)

Data Management
â”œâ”€â”€ data_sources (1:N verification_records)
â”œâ”€â”€ verification_records (polymorphic)
â”œâ”€â”€ data_updates (polymorphic)
â””â”€â”€ import_jobs (standalone)

Roadmap
â”œâ”€â”€ phases (1:N)
â”‚   â””â”€â”€ milestones (1:N)
â”‚       â””â”€â”€ tasks (1:N)
â”‚           â””â”€â”€ dependencies (N:N self-referential)
```

## Section 42 - API Map

```
/api/v1
â”œâ”€â”€ tools
â”‚   â”œâ”€â”€ GET /                    (list with filtering, pagination)
â”‚   â”œâ”€â”€ GET /[slug]              (single tool with relations)
â”‚   â””â”€â”€ (future: POST, PUT, DELETE via admin)
â”œâ”€â”€ models
â”‚   â”œâ”€â”€ GET /                    (list with filtering, pagination)
â”‚   â”œâ”€â”€ GET /[slug]              (single model with capabilities)
â”‚   â””â”€â”€ (future: POST, PUT, DELETE via admin)
â”œâ”€â”€ categories
â”‚   â””â”€â”€ GET /                    (list with hierarchy)
â”œâ”€â”€ compare
â”‚   â”œâ”€â”€ GET /                    (list comparisons)
â”‚   â”œâ”€â”€ GET /[slug]              (single comparison with scores)
â”‚   â””â”€â”€ POST /                   (request comparison - internal)
â”œâ”€â”€ search
â”‚   â””â”€â”€ GET /                    (unified search across all entities)
â”œâ”€â”€ articles
â”‚   â”œâ”€â”€ GET /                    (list articles with filtering)
â”‚   â””â”€â”€ GET /[slug]              (single article with content)
â”œâ”€â”€ knowledge
â”‚   â””â”€â”€ GET /                    (list knowledge topics)
â”œâ”€â”€ docs
â”‚   â””â”€â”€ GET /                    (list documentation pages)
â”œâ”€â”€ astra
â”‚   â””â”€â”€ GET /                    (ASTRA system overview)
â”œâ”€â”€ bookmarks
â”‚   â”œâ”€â”€ GET /                    (user bookmarks - auth required)
â”‚   â”œâ”€â”€ POST /                   (add bookmark - auth required)
â”‚   â””â”€â”€ DELETE /[id]             (remove bookmark - auth required)
â”œâ”€â”€ user
â”‚   â”œâ”€â”€ GET /profile             (user profile - auth required)
â”‚   â”œâ”€â”€ PUT /preferences         (update preferences - auth required)
â”‚   â””â”€â”€ GET /export              (GDPR export - auth required)
â””â”€â”€ admin
    â”œâ”€â”€ tools
    â”‚   â”œâ”€â”€ POST /               (create tool - admin/editor)
    â”‚   â”œâ”€â”€ PUT /[id]            (update tool - admin/editor)
    â”‚   â”œâ”€â”€ DELETE /[id]         (archive tool - admin)
    â”‚   â””â”€â”€ POST /[id]/verify    (verify tool - admin)
    â”œâ”€â”€ models
    â”‚   â”œâ”€â”€ POST /               (create model - admin/editor)
    â”‚   â”œâ”€â”€ PUT /[id]            (update model - admin/editor)
    â”‚   â””â”€â”€ DELETE /[id]         (archive model - admin)
    â”œâ”€â”€ pricing
    â”‚   â”œâ”€â”€ POST /               (add pricing - admin/editor)
    â”‚   â”œâ”€â”€ PUT /[id]            (update pricing - admin/editor)
    â”‚   â””â”€â”€ POST /[id]/history   (record price change - admin/editor)
    â”œâ”€â”€ comparisons
    â”‚   â”œâ”€â”€ POST /               (create comparison - admin/editor)
    â”‚   â”œâ”€â”€ PUT /[id]            (update comparison - admin/editor)
    â”‚   â”œâ”€â”€ PUT /[id]/scores     (update scores - admin/editor)
    â”‚   â””â”€â”€ POST /[id]/evidence  (add evidence - admin/editor)
    â”œâ”€â”€ articles
    â”‚   â”œâ”€â”€ POST /               (create article - admin/editor)
    â”‚   â”œâ”€â”€ PUT /[id]            (update article - admin/editor)
    â”‚   â”œâ”€â”€ POST /[id]/publish   (publish - admin/editor)
    â”‚   â””â”€â”€ POST /[id]/archive   (archive - admin)
    â”œâ”€â”€ verify
    â”‚   â”œâ”€â”€ POST /               (submit verification - admin/reviewer)
    â”‚   â””â”€â”€ GET /pending         (list pending - admin)
    â”œâ”€â”€ import
    â”‚   â”œâ”€â”€ POST /               (start import - admin)
    â”‚   â”œâ”€â”€ GET /[id]            (check status - admin)
    â”‚   â””â”€â”€ GET /                (list jobs - admin)
    â”œâ”€â”€ astra
    â”‚   â”œâ”€â”€ POST /features       (add feature - admin)
    â”‚   â”œâ”€â”€ PUT /features/[id]   (update feature - admin)
    â”‚   â”œâ”€â”€ POST /versions       (add version - admin)
    â”‚   â””â”€â”€ POST /changelog      (add changelog - admin)
    â””â”€â”€ export
        â”œâ”€â”€ GET /tools           (export tools - admin)
        â”œâ”€â”€ GET /models          (export models - admin)
        â””â”€â”€ GET /all             (export all - admin)
```

### Endpoint Purposes

| Endpoint | Purpose | Auth |
|----------|---------|------|
| /tools | Browse and discover AI tools | Public |
| /models | Browse AI models and capabilities | Public |
| /categories | Navigate category hierarchy | Public |
| /compare | View tool and model comparisons | Public |
| /search | Unified search across all entities | Public |
| /articles | Read guides, tutorials, and reviews | Public |
| /knowledge | Access knowledge base | Public |
| /docs | Access documentation | Public |
| /astra | View ASTRA system status | Public |
| /bookmarks | Manage user bookmarks | User |
| /user | Manage user profile and preferences | User |
| /admin/* | Administrative operations | Admin/Editor |

## Section 43 - Implementation Readiness

### Database Readiness

| Aspect | Status | Details |
|--------|--------|---------|
| All major entities defined | 59 entities | Covers tools, models, comparisons, articles, ASTRA, users, data management |
| Relationships defined | Complete | All foreign keys specified with proper constraints |
| Constraints defined | Complete | Unique, check, foreign key rules enforced |
| Indexes defined | Complete | Slug, provider, category, status, dates, GIN full-text, GIN arrays |
| Data freshness supported | Complete | verification_records, data_updates, stale detection |
| Verification supported | Complete | data_sources, verification_records, confidence levels |
| Pricing history supported | Complete | pricing_history append-only table |

### API Readiness

| Aspect | Status | Details |
|--------|--------|---------|
| Public API defined | Complete | tools, models, categories, compare, articles, knowledge, docs, astra |
| Admin API defined | Complete | CRUD for all entities, verification, import |
| Search API defined | Complete | Unified search with filtering, grouping |
| Comparison API defined | Complete | list, detail, request |
| Error format defined | Complete | Standardized error codes, details |
| Pagination defined | Complete | Offset default, cursor for large datasets |
| Caching defined | Complete | SSG, ISR, CSR strategies |
| Validation defined | Complete | Zod schemas for all inputs |

### Future Readiness

| Aspect | Status | Details |
|--------|--------|---------|
| ASTRA integration supported | Ready | Internal API interfaces, response format defined |
| Recommendation engine supported | Ready | ASTRARecommendationRequest interface |
| Search migration supported | Ready | PostgreSQL -> Meilisearch path defined |
| Multilingual support possible | Ready | Translation table design in technical architecture |
| Scaling path defined | Ready | Connection pooling, pagination, index strategy |

### Implementation Checklist

**Database (Complete):**
- [x] All 59 entities defined in schema
- [x] Foreign key relationships established
- [x] Unique constraints on slugs and identifiers
- [x] Check constraints for enums and ranges
- [x] Performance indexes for common queries
- [x] GIN indexes for full-text search
- [x] GIN indexes for array fields
- [x] Data freshness tracking tables
- [x] Verification record system
- [x] Pricing history append-only design

**API (Complete):**
- [x] Public read endpoints for all entities
- [x] Admin CRUD endpoints for all manageable entities
- [x] Unified search endpoint
- [x] Comparison endpoints with scoring
- [x] Article management with publishing workflow
- [x] Import job management
- [x] User bookmarks and preferences
- [x] GDPR data export endpoint
- [x] Standardized error responses
- [x] Pagination for all list endpoints
- [x] Input validation with Zod schemas

**Infrastructure (Complete):**
- [x] SSG strategy for static pages
- [x] ISR strategy for dynamic content
- [x] CSR strategy for real-time features
- [x] Cache invalidation strategy
- [x] Rate limiting design
- [x] Authentication and authorization model
- [x] CORS configuration
- [x] Connection pooling configuration
- [x] Backup and recovery strategy
- [x] Migration workflow

**Future (Planned):**
- [ ] Internal ASTRA API endpoints
- [ ] Recommendation engine implementation
- [ ] Meilisearch migration path
- [ ] Multilingual support
- [ ] API key authentication
- [ ] File upload validation
- [ ] Real-time notifications
- [ ] Advanced analytics

### Schema Statistics

| Metric | Count |
|--------|-------|
| Total entities | 59 |
| Total tables | 72 (including junction tables) |
| Total indexes | 145+ |
| Total foreign keys | 95+ |
| Total unique constraints | 35+ |
| Total check constraints | 20+ |

### Migration Count

| Migration | Description |
|-----------|-------------|
| 0000_initial | Core tables: providers, categories, tools, models |
| 0001_add_pricing_history | Pricing history append-only table |
| 0002_add_verification_records | Data freshness and verification system |
| 0003_add_search_indexes | GIN indexes for full-text search |
| 0004_add_article_tables | Articles, knowledge, documentation |
| 0005_add_astra_tables | ASTRA features, modules, versions |
| 0006_add_user_tables | Users, roles, preferences, bookmarks |
| 0007_add_comparison_tables | Comparisons, criteria, scores, evidence |

### Ready for Development

The database schema and API design are complete and ready for implementation. All major entities, relationships, indexes, and constraints are defined. The API follows RESTful conventions with consistent error handling, pagination, and validation.

**Next Steps:**
1. Initialize Next.js project with TypeScript
2. Set up Drizzle ORM and PostgreSQL connection
3. Run initial migration
4. Seed development database
5. Implement public API endpoints
6. Implement admin API endpoints
7. Set up authentication
8. Deploy to Vercel

