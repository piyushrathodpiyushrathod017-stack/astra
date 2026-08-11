# ASTRA WEBSITE MASTER PLAN

> **Document Version:** 1.0
> **Last Updated:** 2026-08-08
> **Status:** Complete

---

## Table of Contents

- [01 — Product Vision](#01--product-vision)
- [02 — Product Pillars](#02--product-pillars)
- [03 — Information Architecture](#03--information-architecture)
- [04 — Complete Sitemap](#04--complete-sitemap)
- [05 — User Journeys](#05--user-journeys)
- [06 — Homepage UX](#06--homepage-ux)
- [07 — ASTRA UX](#07--astra-ux)
- [08 — AI Atlas UX](#08--ai-atlas-ux)
- [09 — Comparison UX](#09--comparison-ux)
- [10 — Tool Profile UX](#10--tool-profile-ux)
- [11 — Model Profile UX](#11--model-profile-ux)
- [12 — AI Coding UX](#12--ai-coding-ux)
- [13 — Knowledge UX](#13--knowledge-ux)
- [14 — Blog UX](#14--blog-ux)
- [15 — Search UX](#15--search-ux)
- [16 — Design System](#16--design-system)
- [17 — Visual Language](#17--visual-language)
- [18 — Responsive UX](#18--responsive-ux)
- [19 — Tech Stack](#19--tech-stack)
- [20 — Source Architecture](#20--source-architecture)
- [21 — Database Architecture](#21--database-architecture)
- [22 — Data Architecture](#22--data-architecture)
- [23 — API Architecture](#23--api-architecture)
- [24 — Admin Architecture](#24--admin-architecture)
- [25 — SEO Architecture](#25--seo-architecture)
- [26 — Performance](#26--performance)
- [27 — Security](#27--security)
- [28 — Analytics](#28--analytics)
- [29 — Testing](#29--testing)
- [30 — MVP Definition](#30--mvp-definition)
- [31 — Development Roadmap](#31--development-roadmap)
- [32 — Scalability](#32--scalability)
- [33 — Architecture Diagram](#33--architecture-diagram)
- [34 — Decision Register](#34--decision-register)
- [35 — Summary](#35--summary)

---

# 01 — Product Vision

## Product Definition

**ASTRA AI Ecosystem** is a premium AI ecosystem platform that combines product showcase, documentation, knowledge base, discovery engine, and comparison system into a unified intelligent experience.

## What It Is

- A **product website** for ASTRA, a personal AI operating system
- A **discovery platform** for AI tools, models, and agents
- A **knowledge base** for AI education
- A **comparison engine** for informed AI decisions
- A **developer documentation** platform
- A **blog/editorial** system for AI insights

## What Problem It Solves

| Problem | Solution |
|---------|----------|
| AI landscape is overwhelming | Structured Atlas with categories and filters |
| Hard to compare AI tools | Transparent comparison engine with methodology |
| Fragmented AI knowledge | Centralized knowledge base with learning paths |
| No trusted AI resource | Evidence-based, transparent, non-manipulative content |
| ASTRA lacks web presence | Comprehensive product showcase and documentation |

## Target Users

| User | Primary Need | Key Pages |
|------|-------------|-----------|
| General AI User | AI recommendations, comparisons | Atlas, Compare, Tools |
| Developer | AI coding tools, models, APIs | AI Coding, Models, Docs |
| AI Enthusiast | Latest developments, research | Blog, News, Atlas |
| Student | Fundamentals, tutorials | Knowledge, Blog |
| ASTRA User | Documentation, roadmap | ASTRA, Docs |

## Differentiation

Unlike generic AI directories, ASTRA provides:

1. **Transparent scoring** with documented methodology
2. **Progressive disclosure** from beginner to expert
3. **Connected ecosystem** (tools -> comparisons -> articles -> ASTRA)
4. **No manipulation** — fair competition, evidence-based
5. **ASTRA integration** — eventually, intelligent recommendations

## 1-Year Vision

Become the **most trusted AI discovery and comparison platform** with:

- 200+ tool profiles
- 100+ model profiles
- 50+ comparisons
- 200+ knowledge articles
- Growing organic traffic
- Recognized brand in AI space

## 3-Year Vision

Evolve into a **comprehensive AI operating system platform** with:

- AI-powered personalized recommendations
- Community contributions
- API access for developers
- Mobile application
- Enterprise features
- International content

---

# 02 — Product Pillars

## Pillar 1: ASTRA

| Aspect | Detail |
|--------|--------|
| Purpose | Showcase ASTRA as a real software product |
| Audience | Potential users, developers, investors |
| Core Function | Product presentation, documentation, roadmap |
| Pages | /astra, /astra/features, /astra/architecture, /astra/philosophy, /astra/roadmap, /astra/changelog |
| Data | Features, architecture components, roadmap items, changelog entries |
| Future | Interactive demos, live ASTRA integration |

## Pillar 2: AI Atlas

| Aspect | Detail |
|--------|--------|
| Purpose | Structured map of the entire AI ecosystem |
| Audience | All users seeking AI tools/models |
| Core Function | Discovery, filtering, categorization |
| Pages | /atlas, /atlas/tools, /atlas/models, /atlas/agents, category pages |
| Data | Tools, models, agents with metadata |
| Future | AI-powered recommendations, personalized atlas |

## Pillar 3: AI Knowledge

| Aspect | Detail |
|--------|--------|
| Purpose | Evergreen AI education resource |
| Audience | Beginners to experts |
| Core Function | Learning, explanation, tutorials |
| Pages | /knowledge, category pages, article pages |
| Data | Articles with difficulty levels, categories, tags |
| Future | Learning paths, quizzes, certifications |

## Pillar 4: AI Tools

| Aspect | Detail |
|--------|--------|
| Purpose | Comprehensive AI tool database |
| Audience | Users seeking specific tools |
| Core Function | Tool profiles, alternatives, recommendations |
| Pages | /tools, /tools/[slug], category pages |
| Data | Tool profiles with pricing, features, platforms |
| Future | User reviews, ratings, usage analytics |

## Pillar 5: AI Models

| Aspect | Detail |
|--------|--------|
| Purpose | AI model database with technical details |
| Audience | Developers, researchers |
| Core Function | Model comparison, capability assessment |
| Pages | /models, /models/[slug] |
| Data | Model specs, benchmarks, pricing, availability |
| Future | Benchmark updates, model rankings |

## Pillar 6: AI Coding

| Aspect | Detail |
|--------|--------|
| Purpose | Dedicated AI coding ecosystem |
| Audience | Developers, programmers |
| Core Function | Coding tool discovery, comparison |
| Pages | /ai-coding, coding tool pages |
| Data | Coding tools with developer-specific criteria |
| Future | Integration guides, workflow templates |

## Pillar 7: AI Comparisons

| Aspect | Detail |
|--------|--------|
| Purpose | Transparent, credible comparisons |
| Audience | Users making decisions |
| Core Function | Side-by-side analysis, scoring |
| Pages | /compare, /compare/[slug] |
| Data | Comparison data with methodology |
| Future | User-configurable comparisons |

## Pillar 8: AI Blog/News

| Aspect | Detail |
|--------|--------|
| Purpose | Editorial content and news |
| Audience | AI enthusiasts, professionals |
| Core Function | Inform, educate, analyze |
| Pages | /blog, /blog/[slug], /news |
| Data | Articles, news items |
| Future | Newsletter, podcast integration |

## Pillar 9: AI Utilities

| Aspect | Detail |
|--------|--------|
| Purpose | Practical AI tools |
| Audience | Developers, power users |
| Core Function | Calculate, convert, check |
| Pages | /tools/utilities, utility pages |
| Data | Calculator logic, model data |
| Future | More utilities, API access |

## Pillar 10: Developer Documentation

| Aspect | Detail |
|--------|--------|
| Purpose | ASTRA technical documentation |
| Audience | Developers, contributors |
| Core Function | Reference, guides, API docs |
| Pages | /docs, documentation pages |
| Data | Technical documentation |
| Future | Interactive examples, SDK |

---

# 03 — Information Architecture

## Primary Navigation

```
HOME
+-- ASTRA
|   +-- Overview
|   +-- Features
|   +-- Architecture
|   +-- Philosophy
|   +-- Roadmap
|   +-- Changelog
+-- AI ATLAS
|   +-- AI Tools
|   +-- AI Models
|   +-- AI Coding
|   +-- AI Agents
|   +-- Local AI
+-- COMPARE
|   +-- AI Assistants
|   +-- AI Coding
|   +-- AI Models
|   +-- Image AI
+-- TOOLS
|   +-- AI Tools
|   +-- AI Coding Tools
|   +-- AI Models
|   +-- AI APIs
|   +-- Utilities
+-- KNOWLEDGE
|   +-- AI Fundamentals
|   +-- LLMs
|   +-- AI Agents
|   +-- RAG
|   +-- Local AI
+-- BLOG
+-- DOCS
```

## Secondary Navigation

- Breadcrumbs (all pages > 2 levels deep)
- Sidebar navigation (docs, knowledge)
- Table of contents (articles, docs)
- Related content sections

## Footer Navigation

```
Product
+-- ASTRA
+-- Features
+-- Roadmap
+-- Changelog
+-- Documentation

Atlas
+-- AI Tools
+-- AI Models
+-- AI Coding
+-- AI Agents
+-- Comparisons

Resources
+-- Knowledge Base
+-- Blog
+-- News
+-- Utilities

Legal
+-- Privacy Policy
+-- Terms of Service
+-- Cookie Policy
```

## Utility Navigation

- Search (Cmd+K)
- Theme toggle (dark/light)
- GitHub link
- Social links

## Internal Linking Structure

```
Tool <---> Comparison <---> Model
  |           |              |
Article <---> Article <---> Article
  |           |              |
Knowledge <---> Knowledge <---> Knowledge
```

---

# 04 — Complete Sitemap

## Home

| URL | Name | Type | Purpose | Audience | Priority | SEO | Dynamic |
|-----|------|------|---------|----------|----------|-----|---------|
| `/` | Home | Landing | Platform introduction | All | 1.0 | Critical | Static |

## ASTRA

| URL | Name | Type | Purpose | Audience | Priority | SEO | Dynamic |
|-----|------|------|---------|----------|----------|-----|---------|
| `/astra` | ASTRA Overview | Product | Product showcase | All | 0.9 | High | Static |
| `/astra/features` | Features | Product | Feature details | Users | 0.8 | High | Static |
| `/astra/architecture` | Architecture | Technical | System design | Devs | 0.7 | Medium | Static |
| `/astra/philosophy` | Philosophy | Product | Design principles | All | 0.7 | Medium | Static |
| `/astra/roadmap` | Roadmap | Product | Development timeline | All | 0.8 | Medium | Dynamic |
| `/astra/changelog` | Changelog | Product | Version history | Users | 0.6 | Low | Dynamic |

## AI Atlas

| URL | Name | Type | Purpose | Audience | Priority | SEO | Dynamic |
|-----|------|------|---------|----------|----------|-----|---------|
| `/atlas` | AI Atlas | Directory | Ecosystem overview | All | 0.9 | High | Static |
| `/atlas/tools` | AI Tools | Directory | Tool browsing | All | 0.8 | High | Dynamic |
| `/atlas/models` | AI Models | Directory | Model browsing | Devs | 0.8 | High | Dynamic |
| `/atlas/coding` | AI Coding | Directory | Coding tools | Devs | 0.8 | High | Dynamic |
| `/atlas/agents` | AI Agents | Directory | Agent browsing | All | 0.7 | Medium | Dynamic |

## Tools

| URL | Name | Type | Purpose | Audience | Priority | SEO | Dynamic |
|-----|------|------|---------|----------|----------|-----|---------|
| `/tools` | All Tools | Directory | Tool listing | All | 0.8 | High | Dynamic |
| `/tools/[slug]` | Tool Profile | Detail | Tool information | All | 0.9 | Critical | Dynamic |
| `/tools/utilities` | Utilities | Tools | AI utilities | Devs | 0.6 | Medium | Static |

## Models

| URL | Name | Type | Purpose | Audience | Priority | SEO | Dynamic |
|-----|------|------|---------|----------|----------|-----|---------|
| `/models` | All Models | Directory | Model listing | Devs | 0.8 | High | Dynamic |
| `/models/[slug]` | Model Profile | Detail | Model information | Devs | 0.9 | Critical | Dynamic |

## Compare

| URL | Name | Type | Purpose | Audience | Priority | SEO | Dynamic |
|-----|------|------|---------|----------|----------|-----|---------|
| `/compare` | All Comparisons | Directory | Comparison listing | All | 0.8 | High | Dynamic |
| `/compare/[slug]` | Comparison | Detail | Side-by-side analysis | All | 0.9 | Critical | Dynamic |

## Knowledge

| URL | Name | Type | Purpose | Audience | Priority | SEO | Dynamic |
|-----|------|------|---------|----------|----------|-----|---------|
| `/knowledge` | Knowledge Base | Directory | Article listing | All | 0.8 | High | Dynamic |
| `/knowledge/[slug]` | Article | Content | Educational content | All | 0.9 | High | Dynamic |

## Blog

| URL | Name | Type | Purpose | Audience | Priority | SEO | Dynamic |
|-----|------|------|---------|----------|----------|-----|---------|
| `/blog` | Blog | Directory | Article listing | All | 0.8 | High | Dynamic |
| `/blog/[slug]` | Article | Content | Editorial content | All | 0.9 | High | Dynamic |

## Docs

| URL | Name | Type | Purpose | Audience | Priority | SEO | Dynamic |
|-----|------|------|---------|----------|----------|-----|---------|
| `/docs` | Documentation | Reference | Technical docs | Devs | 0.7 | Medium | Dynamic |
| `/docs/[slug]` | Doc Page | Content | Documentation | Devs | 0.8 | Medium | Dynamic |

---

# 05 — User Journeys

## Journey A — New Visitor (AI Researcher)

```
Entry: Google search "best AI tools 2026"
Intent: Discover AI tools for work
Path:
  1. Blog article -> "Top AI Tools"
  2. Clicks tool link -> /tools/chatgpt
  3. Sees "Compare" section -> /compare/chatgpt-vs-claude
  4. Explores comparison
  5. Clicks "ASTRA" in nav -> /astra
  6. Interested in ecosystem
Conversion: Bookmark site, return for updates
Drop-off: If article doesn't match search intent
Improvement: Clear CTAs, related content, email signup
```

## Journey B — Developer (AI Coding)

```
Entry: Google "AI coding tools comparison"
Intent: Find best AI coding tool
Path:
  1. Comparison page -> /compare/cursor-vs-copilot
  2. Reads methodology
  3. Clicks tool -> /tools/cursor
  4. Checks features, pricing
  5. Navigates to /ai-coding
  6. Explores coding ecosystem
  7. Checks /docs for ASTRA integration
Conversion: Bookmark, share comparison
Drop-off: If technical depth insufficient
Improvement: Developer-focused content, code examples
```

## Journey C — AI Beginner

```
Entry: Google "what is RAG in AI"
Intent: Learn AI concepts
Path:
  1. Knowledge article -> /knowledge/what-is-rag
  2. Reads explanation
  3. Clicks "Related Tools" -> /tools/rag-tools
  4. Explores tools
  5. Returns to /knowledge
  6. Follows learning path
  7. Eventually explores /compare
Conversion: Regular reader, learning path completion
Drop-off: If content too advanced
Improvement: Difficulty indicators, beginner paths
```

## Journey D — ASTRA Visitor

```
Entry: Direct traffic / ASTRA user
Intent: Learn about ASTRA
Path:
  1. Home -> / (sees ASTRA intro)
  2. Clicks "Explore ASTRA" -> /astra
  3. Reads overview
  4. Explores /astra/features
  5. Checks /astra/architecture
  6. Views /astra/roadmap
  7. Reads /docs
Conversion: ASTRA adoption, documentation usage
Drop-off: If ASTRA seems too complex
Improvement: Progressive disclosure, clear value prop
```

## Journey E — Returning User

```
Entry: Direct / bookmark
Intent: Check for updates
Path:
  1. Home -> / (quick scan)
  2. Uses Cmd+K search
  3. Searches for saved tool
  4. Checks /tools/[slug] for updates
  5. Explores new comparison
  6. Reads new blog article
Conversion: Regular usage, community engagement
Drop-off: If no new content
Improvement: "What's New" section, notifications
```

---

# 06 — Homepage UX

## Section Hierarchy

### 1. Hero

| Aspect | Detail |
|--------|--------|
| Goal | Capture attention, communicate value |
| Content | "The AI ecosystem, intelligently organized" + subtext |
| Visual | Abstract ASTRA visualization (not robot) |
| CTA Primary | "Explore ASTRA" |
| CTA Secondary | "Explore AI Atlas" |
| Animation | Subtle scale-in, glow pulse |
| Responsive | Full-width mobile, centered desktop |

### 2. What is ASTRA?

| Aspect | Detail |
|--------|--------|
| Goal | Quick understanding of ASTRA |
| Content | 3-column feature cards |
| Visual | Icon + title + description cards |
| CTA | "Learn More" -> /astra |
| Animation | Staggered card reveal |
| Responsive | Stack on mobile, 3-column on desktop |

### 3. AI Atlas Preview

| Aspect | Detail |
|--------|--------|
| Goal | Showcase discovery capability |
| Content | Category cards with counts |
| Visual | Grid of category cards |
| CTA | "Explore Atlas" -> /atlas |
| Animation | Card hover effects |
| Responsive | 2-column mobile, 4-column desktop |

### 4. AI Comparison Preview

| Aspect | Detail |
|--------|--------|
| Goal | Highlight comparison feature |
| Content | Featured comparison card |
| Visual | Side-by-side preview |
| CTA | "Compare AI Tools" -> /compare |
| Animation | Slide-in |
| Responsive | Full-width mobile |

### 5. Latest Knowledge

| Aspect | Detail |
|--------|--------|
| Goal | Showcase knowledge base |
| Content | 3 latest articles |
| Visual | Article cards |
| CTA | "Explore Knowledge" -> /knowledge |
| Animation | Staggered reveal |
| Responsive | Stack on mobile |

### 6. Featured Tools

| Aspect | Detail |
|--------|--------|
| Goal | Highlight popular tools |
| Content | 4 tool cards |
| Visual | Tool cards with logos |
| CTA | "View All Tools" -> /tools |
| Animation | Grid reveal |
| Responsive | 2-column mobile, 4-column desktop |

### 7. AI Coding Ecosystem

| Aspect | Detail |
|--------|--------|
| Goal | Attract developers |
| Content | Coding tools overview |
| Visual | Code-themed section |
| CTA | "Explore AI Coding" -> /ai-coding |
| Animation | Typing effect (subtle) |
| Responsive | Stack on mobile |

### 8. Local AI Section

| Aspect | Detail |
|--------|--------|
| Goal | Highlight local AI capability |
| Content | Local AI tools and models |
| Visual | Privacy-focused messaging |
| CTA | "Discover Local AI" -> /atlas/local-ai |
| Animation | Fade-in |
| Responsive | Stack on mobile |

### 9. ASTRA Architecture

| Aspect | Detail |
|--------|--------|
| Goal | Technical credibility |
| Content | Simplified architecture diagram |
| Visual | Interactive diagram preview |
| CTA | "View Architecture" -> /astra/architecture |
| Animation | Node connections |
| Responsive | Simplified mobile view |

### 10. Latest Articles

| Aspect | Detail |
|--------|--------|
| Goal | Fresh content showcase |
| Content | 3 latest blog posts |
| Visual | Article cards |
| CTA | "Read Blog" -> /blog |
| Animation | Staggered reveal |
| Responsive | Stack on mobile |

### 11. Final CTA

| Aspect | Detail |
|--------|--------|
| Goal | Convert visitors |
| Content | "Join the ASTRA ecosystem" |
| Visual | Gradient background, glow |
| CTA | "Get Started" |
| Animation | Pulse glow |
| Responsive | Full-width |

---

# 07 — ASTRA UX

## Progressive Disclosure Levels

### Level 1: What is ASTRA?

**Page:** `/astra`

| Section | Content |
|---------|---------|
| Hero | "ASTRA — The Intelligent AI Ecosystem" |
| Vision | One-paragraph vision statement |
| Capabilities | 6 capability cards |
| CTA | "Explore Features" |

### Level 2: Why ASTRA?

**Page:** `/astra/philosophy`

| Section | Content |
|---------|---------|
| Principles | 9 principle cards |
| Rule-first | Explanation with examples |
| Local-first | Privacy benefits |
| User control | Data ownership |

### Level 3: What Can ASTRA Do?

**Page:** `/astra/features`

| Section | Content |
|---------|---------|
| Feature grid | 12+ feature cards |
| Feature details | Expandable sections |
| Use cases | Real-world examples |
| CTA | "See Architecture" |

### Level 4: How Does ASTRA Work?

**Page:** `/astra/architecture`

| Section | Content |
|---------|---------|
| Diagram | Interactive architecture |
| Layers | Core -> AI -> Memory -> Modules |
| Components | Clickable component details |
| Data flow | Visual flow explanation |

### Level 5: How is ASTRA Built?

**Pages:** `/astra/security`, `/astra/memory`, `/astra/plugins`, `/astra/modules`

| Page | Content |
|------|---------|
| Security | Permission model, encryption |
| Memory | Memory types, user controls |
| Plugins | Plugin system, sandboxing |
| Modules | Module system, lifecycle |

### Level 6: How Can I Use/Develop ASTRA?

**Pages:** `/docs`, `/astra/roadmap`

| Page | Content |
|------|---------|
| Documentation | Getting started, guides |
| Roadmap | Development timeline |
| Changelog | Version history |
| Contributing | How to contribute |

---

# 08 — AI Atlas UX

## Homepage

| Section | Content |
|---------|---------|
| Hero | "AI Atlas — Discover the AI Ecosystem" |
| Search | Global search bar |
| Categories | Category grid with counts |
| Featured | Featured tools/models |
| Recent | Recently added/updated |

## Category Pages

| Section | Content |
|---------|---------|
| Header | Category name + description |
| Filters | Price, platform, license, deployment |
| Sort | Popularity, rating, newest |
| Grid | Tool/model cards |
| Pagination | Infinite scroll or pages |

## Tool Cards

| Element | Content |
|---------|---------|
| Logo | Tool logo |
| Name | Tool name |
| Category | Category badge |
| Description | Short description |
| Price | Free/Freemium/Paid |
| Platforms | Platform badges |
| Quick actions | Compare, Bookmark |

## Tool Profile

| Section | Content |
|---------|---------|
| Header | Logo, name, category |
| Quick facts | Price, platforms, API |
| Description | Full description |
| Capabilities | Feature list |
| Pricing | Pricing table |
| Strengths | What it's good at |
| Weaknesses | Limitations |
| Alternatives | Similar tools |
| Comparisons | Related comparisons |
| Articles | Related articles |
| Meta | Last verified, source |

## Navigation Flow

```
Category -> Tool -> Comparison -> Alternative -> Article -> Recommendation
```

---

# 09 — Comparison UX

## Comparison Selection

1. User selects Tool A from search/dropdown
2. User selects Tool B from search/dropdown
3. System suggests comparison criteria
4. User can customize criteria

## Comparison View

### Desktop Layout

```
+---------------+---------------+---------------+
|    Tool A     |   Criteria    |    Tool B     |
+---------------+---------------+---------------+
|    Logo       |               |    Logo       |
|    Name       |               |    Name       |
+---------------+---------------+---------------+
|    Score      | Reasoning     |    Score      |
|    Score      | Coding        |    Score      |
|    Score      | Writing       |    Score      |
|    Score      | Speed         |    Score      |
|    Score      | Price         |    Score      |
+---------------+---------------+---------------+
| Strengths     |               | Strengths     |
| Weaknesses    |               | Weaknesses    |
+---------------+---------------+---------------+
| Best for:     |               | Best for:     |
| - Use case    |               | - Use case    |
+---------------+---------------+---------------+
```

### Mobile Layout

Stacked cards with swipe navigation between tools.

## Scoring System

| Criterion | Weight | Data Source |
|-----------|--------|-------------|
| Reasoning | 20% | Benchmarks + testing |
| Coding | 20% | Benchmarks + testing |
| Writing | 15% | Quality assessment |
| Speed | 10% | Response time tests |
| Price | 15% | Official pricing |
| Privacy | 10% | Data practices |
| Features | 10% | Feature comparison |

## Score Display

- Use bars, not stars
- Show numerical score (0-100)
- Explain methodology
- Link to data sources
- Show confidence level

## Methodology Page

| Section | Content |
|---------|---------|
| Overview | How comparisons work |
| Criteria | Definition of each criterion |
| Scoring | How scores are calculated |
| Sources | Data sources used |
| Limitations | What's not covered |
| Updates | How often data is refreshed |

---

# 10 — Tool Profile UX

## Above the Fold

```
+-------------------------------------------+
| [Logo] Tool Name        [Category Badge]  |
|                                            |
| Short description of the tool.             |
|                                            |
| [Visit Website] [Compare] [Bookmark]       |
|                                            |
| Free | Cloud | API Available               |
+-------------------------------------------+
```

## Full Profile

| Section | Content | Priority |
|---------|---------|----------|
| Header | Logo, name, category, CTAs | Above fold |
| Quick facts | Price, platforms, API, open-source | Above fold |
| Description | Full tool description | High |
| Capabilities | Feature list with icons | High |
| Pricing | Pricing tiers, free tier details | High |
| Best for | Use case recommendations | High |
| Strengths | What it excels at | High |
| Weaknesses | Limitations and cons | High |
| Alternatives | Similar tools | Medium |
| Comparisons | Related comparisons | Medium |
| Related articles | Blog/knowledge articles | Medium |
| Technical details | API, models, context | Medium |
| Meta | Last verified, data source, updated | Low |

## Data Structure

```typescript
interface ToolProfile {
  id: string
  name: string
  slug: string
  logo: string
  category: string
  description: string
  website: string
  pricing: PricingTier[]
  platforms: string[]
  api: boolean
  openSource: boolean
  local: boolean
  capabilities: string[]
  strengths: string[]
  weaknesses: string[]
  bestFor: string[]
  alternatives: string[]
  comparisons: string[]
  lastVerified: Date
  dataSource: string
}
```

---

# 11 — Model Profile UX

## Model Identity

| Field | Content |
|-------|---------|
| Name | Model name (e.g., "GPT-4o") |
| Provider | Company (e.g., "OpenAI") |
| Family | Model family (e.g., "GPT") |
| Release date | When released |
| Version | Version number |

## Technical Specs

| Field | Content |
|-------|---------|
| Context window | Token limit |
| Input modalities | Text, image, audio, video |
| Output modalities | Text, image, code |
| Parameters | When known (e.g., "175B") |

## Capabilities

| Capability | Rating | Notes |
|------------|--------|-------|
| Reasoning | High/Med/Low | With explanation |
| Coding | High/Med/Low | With explanation |
| Writing | High/Med/Low | With explanation |
| Tool use | Yes/No | Details |
| Vision | Yes/No | Details |

## Availability

| Aspect | Detail |
|--------|--------|
| API | Yes/No, endpoint |
| Local | Yes/No, requirements |
| License | Open/Closed, specifics |
| Pricing | Per-token pricing |

## For Beginners

Simple explanations, use cases, comparisons.

## For Developers

Technical specs, benchmarks, code examples.

---

# 12 — AI Coding UX

## Categories

| Category | Description |
|----------|-------------|
| AI IDE | Full IDEs with AI (Cursor, Windsurf) |
| Coding Agent | Autonomous coding (Aider, Continue) |
| CLI Agent | Terminal-based (GitHub Copilot CLI) |
| Copilot | Inline assistance (Copilot, Codeium) |
| Code Review | PR review tools |
| Debugging | AI debugging assistance |
| Testing | AI test generation |
| Documentation | AI doc generation |

## Developer-Specific Criteria

| Criterion | Description |
|-----------|-------------|
| Codebase understanding | How well it understands context |
| Agent mode | Autonomous task completion |
| Terminal access | CLI integration |
| IDE integration | Which editors supported |
| Model choice | Which models available |
| Local models | Local model support |
| MCP | Model Context Protocol support |
| Context | Context window size |
| Git integration | Version control features |
| Debugging | Debugging capabilities |
| Refactoring | Code improvement |
| Privacy | Code privacy |
| Pricing | Cost for developers |

---

# 13 — Knowledge UX

## Learning Paths

### Beginner Path

```
What is AI? -> How LLMs Work -> Prompt Engineering -> AI Tools Overview -> Getting Started
```

### Intermediate Path

```
RAG Explained -> AI Agents -> Fine-tuning -> Local AI -> AI APIs
```

### Advanced Path

```
AI Architecture -> Model Training -> AI Security -> AI Infrastructure -> Building AI Systems
```

## Article Structure

| Section | Content |
|---------|---------|
| Difficulty | Beginner/Intermediate/Advanced |
| Reading time | Estimated minutes |
| Prerequisites | Required knowledge |
| Table of contents | Auto-generated |
| Content | Main article |
| Summary | Key takeaways |
| Related tools | Relevant tools |
| Related articles | Next articles to read |

## Category System

| Category | Topics |
|----------|--------|
| AI Fundamentals | What is AI, how it works |
| LLMs | Large language models |
| AI Agents | Autonomous systems |
| RAG | Retrieval-augmented generation |
| Local AI | Running AI locally |
| AI Coding | AI for development |
| AI Automation | Workflow automation |
| Prompt Engineering | Effective prompting |
| AI Security | Safety and privacy |
| AI Infrastructure | Systems and deployment |

---

# 14 — Blog UX

## Homepage

| Section | Content |
|---------|---------|
| Featured | Top article hero |
| Trending | Most viewed this week |
| Latest | Chronological articles |
| Categories | Category navigation |

## Article Page

| Section | Content |
|---------|---------|
| Hero | Title, image, category |
| Meta | Author, date, reading time |
| Summary | Article summary |
| Content | Full article |
| Table of contents | Auto-generated |
| Sources | Reference links |
| Related tools | Tool mentions |
| Related comparisons | Comparison links |
| Related articles | More to read |
| Author | Author bio |
| Last updated | Freshness indicator |

## Article Card

| Element | Content |
|---------|---------|
| Image | Featured image |
| Category | Category badge |
| Title | Article title |
| Summary | Short excerpt |
| Meta | Date, reading time |

---

# 15 — Search UX

## Global Search (Cmd+K)

| Feature | Detail |
|---------|--------|
| Trigger | Cmd+K / Ctrl+K |
| Overlay | Glass modal |
| Input | Search bar with icon |
| Autocomplete | Type-ahead suggestions |
| Recent | Recent searches |
| Categories | Search within categories |

## Search Results

| Section | Content |
|---------|---------|
| Tools | Matching tools |
| Models | Matching models |
| Articles | Matching articles |
| Comparisons | Matching comparisons |
| Documentation | Matching docs |

## Search Filters

| Filter | Options |
|--------|---------|
| Type | Tool, Model, Article, Comparison |
| Category | All categories |
| Price | Free, Freemium, Paid |
| Platform | Windows, Mac, Linux, Web |
| License | Open Source, Closed Source |

## Empty State

- Suggest popular searches
- Show trending tools
- Offer category browsing

## No Results

- Suggest alternatives
- Show related categories
- Offer to submit new tool

---

# 16 — Design System

## Colors

| Token | Value | Usage |
|-------|-------|-------|
| bg-primary | #0A0A0F | Main background |
| bg-secondary | #12121A | Elevated surfaces |
| bg-tertiary | #1A1A25 | Cards |
| astra-primary | #6366F1 | Main accent |
| astra-secondary | #818CF8 | Secondary accent |
| text-primary | #F8FAFC | Headings |
| text-secondary | #94A3B8 | Body text |
| text-tertiary | #64748B | Muted text |
| border-default | #1E293B | Borders |
| success | #22C55E | Success |
| warning | #EAB308 | Warning |
| error | #EF4444 | Error |

## Typography

| Name | Size | Weight | Use |
|------|------|--------|-----|
| display | 72px | 700 | Hero |
| h1 | 48px | 700 | Page title |
| h2 | 36px | 600 | Section |
| h3 | 28px | 600 | Subsection |
| body-lg | 18px | 400 | Lead |
| body | 16px | 400 | Body |
| body-sm | 14px | 400 | Small |
| caption | 12px | 500 | Labels |

## Components

- Button (primary, secondary, ghost, danger)
- Card (static, interactive)
- Badge
- Input
- Modal
- Tooltip
- Tabs
- Navigation

---

# 17 — Visual Language

## Use

| Technique | Where | Effect |
|-----------|-------|--------|
| Dark UI | Default | Premium, futuristic |
| Subtle glass | Modals, overlays | Depth, focus |
| Controlled glow | Active states, CTAs | Emphasis |
| Fine borders | Cards, panels | Structure |
| Large typography | Headlines | Impact |
| Technical diagrams | Architecture | Credibility |
| Structured grids | Listings | Organization |

## Avoid

| Technique | Reason |
|-----------|--------|
| Excessive neon | Looks unprofessional |
| Generic robots | Cliche, unoriginal |
| Overuse of gradients | Distracting |
| Excessive glass | Performance, readability |
| Visual clutter | Overwhelming |

---

# 18 — Responsive UX

## Breakpoints

| Name | Width | Layout Strategy |
|------|-------|-----------------|
| Mobile | < 640px | Single column, stacked |
| Tablet | 640px+ | 2 columns, collapsible sidebar |
| Laptop | 1024px+ | 3 columns, visible sidebar |
| Desktop | 1280px+ | Full layout |
| Wide | 1536px+ | Max-width container |

## Component Behavior

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Navigation | Hamburger menu | Hamburger | Full nav |
| Sidebar | Hidden/drawer | Collapsible | Visible |
| Cards | Full width | 2 columns | 3-4 columns |
| Comparison | Stacked | Side-by-side | Full comparison |
| Search | Full screen | Modal | Modal |
| TOC | Dropdown | Sidebar | Right sidebar |

---

# 19 — Tech Stack

## Frontend

| Technology | Choice | Reason |
|------------|--------|--------|
| Framework | Next.js 14+ | App Router, SSR/SSG, ecosystem |
| Language | TypeScript | Type safety, maintainability |
| UI | React 18+ | Component model, ecosystem |
| Styling | Tailwind CSS | Utility-first, performance |
| Components | shadcn/ui + Radix | Accessible, customizable |
| Animation | Framer Motion | React integration, performance |

## Backend

| Technology | Choice | Reason |
|------------|--------|--------|
| Runtime | Next.js API Routes | Simplicity, colocation |
| Database | PostgreSQL | Reliability, full-text search |
| ORM | Drizzle | Type-safe, performance |
| Search | PostgreSQL (initial) | Simplicity, upgrade path |
| Auth | Auth.js | Flexible, Next.js integration |

## Content

| Technology | Choice | Reason |
|------------|--------|--------|
| Format | MDX | Markdown + components |
| Collections | Content collections | Type-safe content |
| Validation | Zod | Runtime validation |

## Deployment

| Technology | Choice | Reason |
|------------|--------|--------|
| Platform | Vercel | Next.js optimization |
| CDN | Vercel Edge | Global distribution |
| Storage | S3-compatible | Images, assets |
| Analytics | Plausible | Privacy-conscious |

## Future Upgrades

| Current | Future | Trigger |
|---------|--------|---------|
| PostgreSQL search | Meilisearch | Scale > 100K records |
| MDX | Headless CMS | Content team growth |
| Vercel | Self-hosted | Cost/control needs |

---

# 20 — Source Architecture

```
src/
+-- app/                    # Next.js App Router pages
|   +-- (marketing)/        # Marketing pages group
|   |   +-- astra/          # ASTRA pages
|   |   +-- atlas/          # Atlas pages
|   |   +-- compare/        # Comparison pages
|   |   +-- tools/          # Tool pages
|   |   +-- models/         # Model pages
|   |   +-- knowledge/      # Knowledge pages
|   |   +-- blog/           # Blog pages
|   |   +-- docs/           # Documentation pages
|   +-- api/                # API routes
|   +-- admin/              # Admin dashboard
|   +-- layout.tsx          # Root layout
|   +-- page.tsx            # Homepage
|
+-- components/             # Shared components
|   +-- ui/                 # Base UI components
|   +-- layout/             # Layout components
|   +-- navigation/         # Navigation components
|   +-- shared/             # Shared feature components
|
+-- features/               # Feature modules
|   +-- astra/              # ASTRA feature
|   +-- atlas/              # Atlas feature
|   +-- compare/            # Comparison feature
|   +-- tools/              # Tools feature
|   +-- models/             # Models feature
|   +-- knowledge/          # Knowledge feature
|   +-- blog/               # Blog feature
|   +-- docs/               # Documentation feature
|
+-- lib/                    # Shared utilities
|   +-- db/                 # Database connection
|   +-- search/             # Search utilities
|   +-- seo/                # SEO utilities
|   +-- utils.ts            # General utilities
|
+-- db/                     # Database schema
|   +-- schema/             # Table definitions
|   +-- migrations/         # Database migrations
|   +-- seed/               # Seed data
|
+-- content/                # MDX content
|   +-- blog/               # Blog articles
|   +-- knowledge/          # Knowledge articles
|   +-- docs/               # Documentation
|
+-- services/               # Business logic
|   +-- tools.ts            # Tool operations
|   +-- models.ts           # Model operations
|   +-- comparisons.ts      # Comparison operations
|   +-- search.ts           # Search operations
|
+-- types/                  # TypeScript types
|   +-- tool.ts             # Tool types
|   +-- model.ts            # Model types
|   +-- comparison.ts       # Comparison types
|   +-- index.ts            # Shared types
|
+-- config/                 # Configuration
|   +-- site.ts             # Site config
|   +-- navigation.ts       # Navigation config
|   +-- categories.ts       # Category config
|
+-- hooks/                  # Custom React hooks
|   +-- use-search.ts       # Search hook
|   +-- use-bookmarks.ts    # Bookmark hook
|   +-- use-theme.ts        # Theme hook
|
+-- styles/                 # Global styles
    +-- globals.css         # Global CSS
```

## Directory Responsibilities

| Directory | Purpose | Example |
|-----------|---------|---------|
| `app/` | Page routing and layouts | `/tools/page.tsx` |
| `components/` | Reusable UI components | `ToolCard.tsx` |
| `features/` | Feature-specific code | `tools/ToolProfile.tsx` |
| `lib/` | Shared utilities | `formatDate.ts` |
| `db/` | Database schema and migrations | `schema/tools.ts` |
| `content/` | MDX content files | `blog/article.mdx` |
| `services/` | Business logic | `getToolBySlug()` |
| `types/` | TypeScript definitions | `Tool interface` |
| `config/` | Site configuration | `navigation.ts` |
| `hooks/` | Custom React hooks | `useSearch()` |
| `styles/` | Global CSS | `globals.css` |

---

# 21 — Database Architecture

## Core Entities

### User

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| email | string | Unique |
| name | string | |
| avatar | string | Optional |
| role | enum | admin, editor, user |
| created_at | timestamp | |
| updated_at | timestamp | |

### Tool

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| name | string | |
| slug | string | Unique, URL-safe |
| logo | string | Image URL |
| description | text | |
| website | string | Official URL |
| category_id | UUID | Foreign key |
| pricing_type | enum | free, freemium, paid |
| pricing_details | jsonb | Pricing tiers |
| platforms | string[] | Array |
| api_available | boolean | |
| open_source | boolean | |
| local_available | boolean | |
| capabilities | string[] | Array |
| strengths | text[] | Array |
| weaknesses | text[] | Array |
| best_for | text[] | Array |
| last_verified | timestamp | |
| data_source | string | |
| status | enum | draft, published, archived |
| created_at | timestamp | |
| updated_at | timestamp | |

### Model

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| name | string | |
| slug | string | Unique |
| provider_id | UUID | Foreign key |
| family | string | |
| release_date | date | |
| context_window | integer | Tokens |
| input_modalities | string[] | |
| output_modalities | string[] | |
| parameters | string | When known |
| reasoning | enum | high, medium, low |
| coding | enum | high, medium, low |
| writing | enum | high, medium, low |
| tool_use | boolean | |
| vision | boolean | |
| api_available | boolean | |
| local_available | boolean | |
| license | string | |
| pricing | jsonb | Per-token pricing |
| hardware_requirements | jsonb | When applicable |
| status | enum | draft, published |
| created_at | timestamp | |
| updated_at | timestamp | |

### Comparison

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| slug | string | Unique, "tool-a-vs-tool-b" |
| tool_a_id | UUID | Foreign key |
| tool_b_id | UUID | Foreign key |
| title | string | |
| summary | text | |
| methodology | text | |
| scores | jsonb | Criterion scores |
| strengths_a | text[] | |
| weaknesses_a | text[] | |
| strengths_b | text[] | |
| weaknesses_b | text[] | |
| best_for_a | text[] | |
| best_for_b | text[] | |
| status | enum | draft, published |
| last_verified | timestamp | |
| created_at | timestamp | |
| updated_at | timestamp | |

### Article

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| title | string | |
| slug | string | Unique |
| content | text | MDX content |
| summary | text | |
| featured_image | string | |
| category | enum | blog, knowledge |
| category_id | UUID | Foreign key |
| tags | string[] | |
| author | string | |
| reading_time | integer | Minutes |
| difficulty | enum | beginner, intermediate, advanced |
| status | enum | draft, published, archived |
| published_at | timestamp | |
| last_updated | timestamp | |
| created_at | timestamp | |

### Category

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| name | string | |
| slug | string | Unique |
| description | text | |
| type | enum | tool, model, article, comparison |
| parent_id | UUID | Self-referential |
| sort_order | integer | |
| created_at | timestamp | |

## Relationships

```
User ---+-- Bookmark ---+-- Tool
       |              +-- Model
       |
       +-- Preference

Tool ---+-- Category
       +-- Comparison (as tool_a or tool_b)
       +-- ToolAlternative -- Tool
       +-- ToolUpdate

Model --+-- Provider
       +-- Category
       +-- ModelAlternative -- Model

Comparison --+-- Tool (as tool_a)
             +-- Tool (as tool_b)
             +-- ComparisonCriterion

Article --+-- Category
          +-- Tag
          +-- Author (User)
```

## Indexes

| Table | Index | Columns | Purpose |
|-------|-------|---------|---------|
| tools | idx_tools_slug | slug | URL lookup |
| tools | idx_tools_category | category_id | Category filtering |
| tools | idx_tools_status | status | Published filtering |
| models | idx_models_slug | slug | URL lookup |
| models | idx_models_provider | provider_id | Provider filtering |
| comparisons | idx_comparisons_slug | slug | URL lookup |
| articles | idx_articles_slug | slug | URL lookup |
| articles | idx_articles_category | category | Category filtering |
| articles | idx_articles_status | status | Published filtering |

## Unique Constraints

- tools.slug
- models.slug
- comparisons.slug
- articles.slug
- categories.slug (per type)
- users.email

## Data Freshness

| Field | Purpose |
|-------|---------|
| last_verified | When data was verified |
| data_source | Where data came from |
| status | Draft/published/archived |

---

# 22 — Data Architecture

## Static Content

| Type | Storage | Examples |
|------|---------|----------|
| ASTRA philosophy | MDX files | Principles, vision |
| Documentation | MDX files | Guides, references |
| Knowledge articles | MDX files | Tutorials, explanations |
| Blog articles | MDX files | News, analysis |

**Storage:** Content directory with MDX

## Dynamic Data

| Type | Storage | Examples |
|------|---------|----------|
| AI tools | Database | Tool profiles |
| AI models | Database | Model profiles |
| Comparisons | Database | Comparison data |
| Categories | Database | Category hierarchy |
| Pricing | Database | Tool/model pricing |
| Updates | Database | Changelog, news |

**Storage:** PostgreSQL with Drizzle ORM

## User Data

| Type | Storage | Examples |
|------|---------|----------|
| Accounts | Database | Auth, profiles |
| Bookmarks | Database | Saved tools/models |
| Preferences | Database | Settings |
| History | Database | Recent views |

**Storage:** PostgreSQL with Auth.js

---

# 23 — API Architecture

## Tool Endpoints

| Endpoint | Method | Auth | Purpose |
|----------|--------|------|---------|
| /api/v1/tools | GET | No | List tools |
| /api/v1/tools/[slug] | GET | No | Get tool |
| /api/v1/tools | POST | Admin | Create tool |
| /api/v1/tools/[slug] | PUT | Admin | Update tool |
| /api/v1/tools/[slug] | DELETE | Admin | Delete tool |

## Model Endpoints

| Endpoint | Method | Auth | Purpose |
|----------|--------|------|---------|
| /api/v1/models | GET | No | List models |
| /api/v1/models/[slug] | GET | No | Get model |
| /api/v1/models | POST | Admin | Create model |
| /api/v1/models/[slug] | PUT | Admin | Update model |

## Comparison Endpoints

| Endpoint | Method | Auth | Purpose |
|----------|--------|------|---------|
| /api/v1/comparisons | GET | No | List comparisons |
| /api/v1/comparisons/[slug] | GET | No | Get comparison |
| /api/v1/comparisons | POST | Admin | Create comparison |

## Article Endpoints

| Endpoint | Method | Auth | Purpose |
|----------|--------|------|---------|
| /api/v1/articles | GET | No | List articles |
| /api/v1/articles/[slug] | GET | No | Get article |
| /api/v1/articles | POST | Admin | Create article |

## Search Endpoint

| Endpoint | Method | Auth | Purpose |
|----------|--------|------|---------|
| /api/v1/search | GET | No | Search all |
| /api/v1/search/suggest | GET | No | Autocomplete |

## User Endpoints

| Endpoint | Method | Auth | Purpose |
|----------|--------|------|---------|
| /api/v1/bookmarks | GET | Yes | Get bookmarks |
| /api/v1/bookmarks | POST | Yes | Add bookmark |
| /api/v1/bookmarks/[id] | DELETE | Yes | Remove bookmark |

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

## Error Format

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

# 24 — Admin Architecture

## Sections

| Section | CRUD | Features |
|---------|------|----------|
| Dashboard | Read | Stats, charts |
| Tools | Full | Create, edit, verify |
| Models | Full | Create, edit, verify |
| Comparisons | Full | Create, edit, scores |
| Articles | Full | Create, edit, publish |
| Knowledge | Full | Create, edit, categorize |
| ASTRA | Read | Features, roadmap |
| Documentation | Full | Create, edit, organize |
| Categories | Full | Manage hierarchy |
| Tags | Full | Manage tags |
| Users | Read | View users |
| Reports | Read | Analytics |
| Settings | Update | Site config |
| SEO | Update | Metadata, redirects |

## Roles

| Role | Permissions |
|------|-------------|
| Admin | Full access |
| Editor | Create, edit, publish |
| Reviewer | Review, approve |
| Contributor | Create drafts |

## Content States

```
Draft -> Review -> Published -> Archived
  ^        |          |
  +--------+----------+
```

## Admin Features

- Bulk operations
- Data import/export
- SEO metadata editor
- Redirect management
- Data verification scheduling

---

# 25 — SEO Architecture

## URL Structure

| Pattern | Example | SEO |
|---------|---------|-----|
| /tools/[slug] | /tools/chatgpt | High |
| /compare/[slug] | /compare/chatgpt-vs-claude | High |
| /models/[slug] | /models/gpt-4 | High |
| /knowledge/[slug] | /knowledge/what-is-rag | High |
| /blog/[slug] | /blog/ai-trends-2026 | High |

## Metadata

| Element | Requirement |
|---------|-------------|
| Title | 50-60 chars, unique |
| Description | 150-160 chars, unique |
| Canonical | Self-referencing |
| OG:title | Same as title |
| OG:description | Same as description |
| OG:image | Unique per page |
| Twitter:card | summary_large_image |

## Structured Data

| Page Type | Schema |
|-----------|--------|
| Home | WebSite, Organization |
| Tool | SoftwareApplication |
| Model | SoftwareApplication |
| Comparison | Article |
| Article | Article, BreadcrumbList |
| FAQ | FAQPage |

## Sitemap

| Section | Frequency | Priority |
|---------|-----------|----------|
| Home | Daily | 1.0 |
| ASTRA | Weekly | 0.9 |
| Tools | Daily | 0.9 |
| Models | Daily | 0.9 |
| Comparisons | Weekly | 0.9 |
| Knowledge | Weekly | 0.8 |
| Blog | Daily | 0.8 |
| Docs | Weekly | 0.7 |

## Internal Linking

- Tool -> Related tools, comparisons, articles
- Comparison -> Both tools, methodology
- Article -> Related tools, comparisons, articles
- Knowledge -> Related topics, tools

## Topic Clusters

```
AI Agents (pillar)
+-- What are AI Agents
+-- Building AI Agents
+-- AI Agent Tools
+-- AI Agent Comparison
+-- AI Agent Use Cases
```

---

# 26 — Performance

## Rendering Strategy

| Page Type | Strategy | Reason |
|-----------|----------|--------|
| Home | SSG | Static content |
| ASTRA | SSG | Static content |
| Tool listing | ISR | Dynamic data |
| Tool profile | ISR | Dynamic data |
| Model listing | ISR | Dynamic data |
| Comparison | ISR | Dynamic data |
| Knowledge | SSG | Static content |
| Blog | SSG | Static content |
| Docs | SSG | Static content |
| Search | CSR | Dynamic queries |

## Performance Budgets

| Metric | Target |
|--------|--------|
| FCP | < 1.5s |
| LCP | < 2.5s |
| TBT | < 200ms |
| CLS | < 0.1 |
| Bundle | < 250KB |

## Optimization Techniques

- Image optimization (next/image)
- Font optimization (next/font)
- Code splitting (dynamic imports)
- Lazy loading (below fold)
- Prefetching (on hover)
- Caching (ISR, CDN)

---

# 27 — Security

## Authentication

- Auth.js for session management
- CSRF protection
- Secure cookies
- Rate limiting on auth routes

## Authorization

- Role-based access control
- Admin routes protected
- API routes authenticated where needed

## Input Validation

- Zod schemas for all inputs
- Server-side validation
- Sanitization of user content

## API Security

- Rate limiting (100 req/min)
- CORS configuration
- Input validation
- Output sanitization

## Secrets

- Environment variables only
- Never in client code
- Never in git

## Headers

- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

---

# 28 — Analytics

## Metrics to Track

| Category | Metric |
|----------|--------|
| Traffic | Page views, unique visitors |
| Search | Queries, results, clicks |
| Tools | Views, external clicks |
| Comparisons | Views, time on page |
| Articles | Views, reading time |
| Engagement | Bounce rate, session duration |
| Conversions | Bookmarks, CTA clicks |

## Privacy-Conscious Tools

- Plausible Analytics
- Umami
- PostHog (self-hosted)

## No Tracking

- No personal data
- No cross-site tracking
- No ads

---

# 29 — Testing

## Layers

| Layer | Tools | Coverage |
|-------|-------|----------|
| Unit | Vitest | 80% |
| Component | Testing Library | Critical |
| API | Vitest | Endpoints |
| Database | Vitest | Queries |
| E2E | Playwright | Critical paths |
| Accessibility | Axe | WCAG |
| Performance | Lighthouse | Budgets |

## Critical Paths

- Tool browsing and filtering
- Comparison creation
- Search functionality
- Article reading
- Admin operations

---

# 30 — MVP Definition

## Must Have

- Homepage with ASTRA intro
- ASTRA overview, features, philosophy
- Tool listing and profiles (50+)
- Model listing and profiles (30+)
- Basic comparison engine (10+)
- Knowledge base (20+ articles)
- Blog (10+ articles)
- Search functionality
- Responsive design
- Dark theme
- SEO basics

## Should Have

- Advanced filtering
- Bookmarks (local storage)
- AI Coding section
- More tools/models
- More comparisons
- Documentation
- Admin dashboard
- Analytics

## Could Have

- User accounts
- User bookmarks (database)
- Comment system
- Newsletter
- RSS feed
- More utilities

## Future

- Ask ASTRA
- AI recommendations
- Community features
- API access
- Mobile app
- Multilingual

## What NOT to Build in MVP

- User authentication (use local bookmarks)
- Admin dashboard (manage via database)
- Advanced search (use basic search)
- Comment system
- Newsletter integration
- API public access

---

# 31 — Development Roadmap

## Phase 1: Foundation

| Aspect | Detail |
|--------|--------|
| Goal | Working foundation |
| Features | Next.js, TypeScript, Tailwind, design system, layout |
| Dependencies | None |
| Deliverables | Dev environment, base components |
| Acceptance | Zero TS errors, responsive, dark theme |

## Phase 2: ASTRA

| Aspect | Detail |
|--------|--------|
| Goal | ASTRA product presence |
| Features | All ASTRA pages, architecture diagram |
| Dependencies | Phase 1 |
| Deliverables | Complete ASTRA section |
| Acceptance | All pages render, interactive diagram |

## Phase 3: Content

| Aspect | Detail |
|--------|--------|
| Goal | Content system |
| Features | Blog, knowledge, docs |
| Dependencies | Phase 1 |
| Deliverables | Content infrastructure |
| Acceptance | MDX rendering, filtering |

## Phase 4: Atlas

| Aspect | Detail |
|--------|--------|
| Goal | Discovery platform |
| Features | Tool/model database, search, filtering |
| Dependencies | Phase 1 |
| Deliverables | Atlas section |
| Acceptance | 50+ tools, 30+ models, search works |

## Phase 5: Comparisons

| Aspect | Detail |
|--------|--------|
| Goal | Comparison engine |
| Features | Comparison system, scoring |
| Dependencies | Phase 4 |
| Deliverables | Comparison section |
| Acceptance | 10+ comparisons, transparent scoring |

## Phase 6: Utilities

| Aspect | Detail |
|--------|--------|
| Goal | Practical tools |
| Features | Calculators, finders |
| Dependencies | Phase 4 |
| Deliverables | Utility pages |
| Acceptance | All utilities function |

## Phase 7: Admin

| Aspect | Detail |
|--------|--------|
| Goal | Content management |
| Features | Admin dashboard |
| Dependencies | Phase 4 |
| Deliverables | Admin section |
| Acceptance | Full CRUD operations |

## Phase 8: Optimization

| Aspect | Detail |
|--------|--------|
| Goal | Production readiness |
| Features | SEO, performance, accessibility |
| Dependencies | All phases |
| Deliverables | Optimized site |
| Acceptance | Lighthouse > 90, WCAG AA |

## Phase 9: ASTRA Integration

| Aspect | Detail |
|--------|--------|
| Goal | Intelligent features |
| Features | Ask ASTRA, recommendations |
| Dependencies | Phase 4+ |
| Deliverables | AI features |
| Acceptance | ASTRA answers questions |

---

# 32 — Scalability

## Extension Points

| Area | Extension |
|------|-----------|
| Tools | Add new tool categories |
| Models | Add new model providers |
| Comparisons | Add new criteria |
| Content | Add new content types |
| Search | Upgrade to Meilisearch |
| Users | Add authentication |
| API | Public API access |
| i18n | Multilingual support |

## Scaling Triggers

| Trigger | Action |
|---------|--------|
| 100K+ tool records | Upgrade search engine |
| 1M+ page views | Upgrade hosting |
| Content team growth | Add CMS |
| Community growth | Add auth, comments |
| International users | Add i18n |

---

# 33 — Architecture Diagram

```
+-----------------------------------------------------------+
|                        USER                               |
+-----------------------------+-----------------------------+
                              |
+-----------------------------v-----------------------------+
|                      WEB UI                               |
|  +----------+ +----------+ +----------+ +----------+      |
|  |  ASTRA   | |  Atlas   | | Compare  | |Knowledge |      |
|  +----------+ +----------+ +----------+ +----------+      |
+-----------------------------+-----------------------------+
                              |
+-----------------------------v-----------------------------+
|                 NEXT.JS APPLICATION                       |
|  +----------+ +----------+ +----------+ +----------+      |
|  |  Pages   | |Components| | Features | | Services |      |
|  +----------+ +----------+ +----------+ +----------+      |
+-----------------------------+-----------------------------+
                              |
+-----------------------------v-----------------------------+
|                    API / SERVER                           |
|  +----------+ +----------+ +----------+ +----------+      |
|  |   API    | |   Auth   | |  Search  | |  Admin   |      |
|  +----------+ +----------+ +----------+ +----------+      |
+-----------------------------+-----------------------------+
                              |
+-----------------------------v-----------------------------+
|                     DATA LAYER                            |
|  +----------+ +----------+ +----------+ +----------+      |
|  | Postgres | |   MDX    | |  Cache   | | Storage  |      |
|  +----------+ +----------+ +----------+ +----------+      |
+-----------------------------+-----------------------------+
                              |
+-----------------------------v-----------------------------+
|                EXTERNAL DATA SOURCES                      |
|  +----------+ +----------+ +----------+ +----------+      |
|  | AI APIs  | |  Pricing | |   News   | |Community |      |
|  +----------+ +----------+ +----------+ +----------+      |
+-----------------------------+-----------------------------+
                              |
+-----------------------------v-----------------------------+
|             FUTURE: ASTRA INTELLIGENCE LAYER              |
|  +----------+ +----------+ +----------+ +----------+      |
|  |Ask ASTRA | | Recommend| | Personal | |  Agent   |      |
|  +----------+ +----------+ +----------+ +----------+      |
+-----------------------------------------------------------+
```

## Layer Explanations

| Layer | Responsibility |
|-------|----------------|
| User | Interaction point |
| Web UI | Visual interface, user experience |
| Next.js App | Routing, rendering, state |
| API/Server | Business logic, authentication |
| Data Layer | Persistence, caching, search |
| External Data | AI info, pricing, news |
| Future ASTRA | AI-powered features |

---

# 34 — Decision Register

## Architecture Decisions

### Decision: Next.js App Router

**Reason:** Modern React patterns, server components, streaming, great Vercel integration.

**Alternatives:**
- Pages Router: Older, less flexible
- Remix: Smaller ecosystem
- Nuxt: Vue ecosystem, different team preference

**Trade-offs:**
- (+) Server components reduce JS
- (+) Excellent SEO
- (-) Learning curve for App Router
- (-) Some client components still needed

**Future Impact:** Good foundation for scaling, server components reduce costs.

---

### Decision: Drizzle ORM

**Reason:** Type-safe, performance, SQL-like API, good TypeScript support.

**Alternatives:**
- Prisma: More popular, but less performant
- TypeORM: Older, less type-safe
- Raw SQL: Maximum control, less convenience

**Trade-offs:**
- (+) Excellent performance
- (+) Type safety
- (-) Smaller community than Prisma
- (-) Less visual tooling

**Future Impact:** Good for scaling, SQL-like API prevents surprises.

---

### Decision: PostgreSQL

**Reason:** Reliability, full-text search, JSON support, mature ecosystem.

**Alternatives:**
- MySQL: Less features
- MongoDB: Less structured, weaker relations
- SQLite: Less scalable

**Trade-offs:**
- (+) Full-text search built-in
- (+) JSON support for flexible data
- (-) Heavier than SQLite
- (-) Requires hosting

**Future Impact:** Can scale to millions of records, upgrade path to dedicated search.

---

### Decision: MDX for Content

**Reason:** Markdown simplicity + React components, type-safe, good DX.

**Alternatives:**
- Headless CMS: More features, more complexity
- Raw Markdown: Less interactive
- Database content: More dynamic, more complex

**Trade-offs:**
- (+) Simple authoring
- (+) Version control friendly
- (-) Requires rebuild for updates
- (-) Less dynamic than CMS

**Future Impact:** Easy to migrate to CMS if content team grows.

---

### Decision: shadcn/ui + Radix

**Reason:** Accessible, customizable, copies components (no dependency), modern.

**Alternatives:**
- Chakra UI: More opinionated
- MUI: Heavier, Material Design
- Headless UI: Less components

**Trade-offs:**
- (+) Full control over styling
- (+) Accessible by default
- (-) More work than component library
- (-) Need to maintain components

**Future Impact:** Full control, no vendor lock-in.

---

### Decision: Dark-First Design

**Reason:** Premium feel, reduced eye strain, modern aesthetic, ASTRA branding.

**Alternatives:**
- Light-first: More traditional
- Both equally: More work

**Trade-offs:**
- (+) Premium, futuristic feel
- (+) Better for long reading
- (-) Some users prefer light
- (-) More contrast work

**Future Impact:** Light theme as option, dark as default.

---

### Decision: Vercel Hosting

**Reason:** Next.js optimization, edge functions, CDN, easy deployment.

**Alternatives:**
- Self-hosted: More control, more work
- Netlify: Less Next.js optimization
- AWS: More complex, more scalable

**Trade-offs:**
- (+) Zero config deployment
- (+) Excellent performance
- (-) Vendor lock-in concerns
- (-) Cost at scale

**Future Impact:** Can migrate to self-hosted if needed, good for MVP.

---

### Decision: Local Bookmarks (No Auth)

**Reason:** MVP simplicity, no auth complexity, immediate value.

**Alternatives:**
- Full auth: More features, more work
- No bookmarks: Less value

**Trade-offs:**
- (+) Simple implementation
- (+) No privacy concerns
- (-) Not synced across devices
- (-) Lost if browser cleared

**Future Impact:** Can add auth later, database bookmarks.

---

### Decision: Single Master Plan File

**Reason:** Single source of truth, easier to search, simpler maintenance.

**Alternatives:**
- Multiple files: Easier navigation
- Wiki: More features, more complexity

**Trade-offs:**
- (+) One file to rule them all
- (+) Easier to search
- (-) Large file size
- (-) Harder to navigate

**Future Impact:** Can split later if needed, good for initial planning.

---

# 35 — Summary

## Quick Reference

| Area | Decision |
|------|----------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS |
| Components | shadcn/ui + Radix |
| Database | PostgreSQL |
| ORM | Drizzle |
| Content | MDX |
| Hosting | Vercel |
| Analytics | Plausible |
| Design | Dark-first, premium |

## Key Pages

| Page | Purpose |
|------|---------|
| / | Platform introduction |
| /astra | ASTRA product |
| /atlas | AI ecosystem discovery |
| /tools/[slug] | Tool profiles |
| /models/[slug] | Model profiles |
| /compare/[slug] | Comparisons |
| /knowledge | AI education |
| /blog | Editorial content |
| /docs | Documentation |

## Success Metrics

| Metric | Target |
|--------|--------|
| Lighthouse | > 90 |
| WCAG | AA |
| FCP | < 1.5s |
| LCP | < 2.5s |
| Tools | 50+ at launch |
| Models | 30+ at launch |
| Articles | 30+ at launch |

---

**Document Version:** 1.0

**Last Updated:** 2026-08-08

**Status:** Ready for review
