# ASTRA WEBSITE DESIGN SYSTEM & UI/UX BLUEPRINT

> **Document Version:** 1.0
> **Last Updated:** 2026-08-08
> **Status:** Complete

---

## Table of Contents

- [01 — Design Philosophy](#01--design-philosophy)
- [02 — Visual Direction](#02--visual-direction)
- [03 — Design Tokens](#03--design-tokens)
- [04 — ASTRA Brand Color](#04--astra-brand-color)
- [05 — Typography System](#05--typography-system)
- [06 — Spacing System](#06--spacing-system)
- [07 — Container & Grid System](#07--container--grid-system)
- [08 — Border Radius](#08--border-radius)
- [09 — Shadow & Depth System](#09--shadow--depth-system)
- [10 — Iconography](#10--iconography)
- [11 — Button System](#11--button-system)
- [12 — Form System](#12--form-system)
- [13 — Card System](#13--card-system)
- [14 — Navigation System](#14--navigation-system)
- [15 — Command Palette](#15--command-palette)
- [16 — Hero System](#16--hero-system)
- [17 — Homepage UI](#17--homepage-ui)
- [18 — ASTRA Product UI](#18--astra-product-ui)
- [19 — ASTRA Architecture Visualization](#19--astra-architecture-visualization)
- [20 — AI Atlas UI](#20--ai-atlas-ui)
- [21 — Filter System](#21--filter-system)
- [22 — Tool Profile UI](#22--tool-profile-ui)
- [23 — Model Profile UI](#23--model-profile-ui)
- [24 — Comparison UI](#24--comparison-ui)
- [25 — Comparison Visualization](#25--comparison-visualization)
- [26 — Knowledge UI](#26--knowledge-ui)
- [27 — Article UI](#27--article-ui)
- [28 — Documentation UI](#28--documentation-ui)
- [29 — Blog UI](#29--blog-ui)
- [30 — Search Results UI](#30--search-results-ui)
- [31 — Empty States](#31--empty-states)
- [32 — Loading States](#32--loading-states)
- [33 — Error States](#33--error-states)
- [34 — Micro-Interactions](#34--micro-interactions)
- [35 — Motion System](#35--motion-system)
- [36 — Responsive Design](#36--responsive-design)
- [37 — Accessibility](#37--accessibility)
- [38 — Dark & Light Mode](#38--dark--light-mode)
- [39 — SEO-Aware UI](#39--seo-aware-ui)
- [40 — Performance-Aware UI](#40--performance-aware-ui)
- [41 — Component Inventory](#41--component-inventory)
- [42 — Page Template System](#42--page-template-system)
- [43 — Design Consistency Rules](#43--design-consistency-rules)
- [44 — Final UI Specification](#44--final-ui-specification)
- [45 — Design Acceptance Criteria](#45--design-acceptance-criteria)

---

# 01 — Design Philosophy

## Core Visual Philosophy

ASTRA's interface communicates: **Intelligence, Precision, Trust, Technology, Simplicity, Depth, Exploration, Professionalism.**

## Visual Principle

> **Complex technology presented through simple interfaces.**

The website should feel advanced without becoming visually complicated. Every element serves a purpose. Every interaction communicates state. Every layout guides the eye.

## Design Ethics

- No manipulation through visual weight
- No dark patterns
- No overwhelming CTAs
- No information asymmetry
- Honest representation of data
- Transparent scoring methodology

---

# 02 — Visual Direction

## Inspiration Sources

| Category | Examples | Takeaway |
|----------|----------|----------|
| Premium AI | Anthropic, OpenAI | Clean, confident typography |
| Developer platforms | Vercel, Linear | Precise spacing, dark UI |
| Documentation | Stripe, Tailwind | Readable code, clear hierarchy |
| Editorial | The Verge, Wired | Strong headlines, visual storytelling |
| OS interfaces | macOS, GNOME | Systematic, functional beauty |

## Original Identity Rules

- Never copy a single website's full layout
- Combine influences into unique ASTRA language
- Maintain consistency across all sections
- Prioritize function over decoration

## Visual Techniques

| Technique | Use | Avoid |
|-----------|-----|-------|
| Dark UI | Default interface | As only option |
| Strong typography | Headlines, hierarchy | On every element |
| Controlled accent | CTAs, active states | Everywhere |
| Fine borders | Structure, separation | Thick borders |
| Subtle shadows | Depth, elevation | Heavy shadows |
| Structured grids | Organization | Chaos |
| Technical diagrams | Architecture, data | Decorative diagrams |
| Minimal glass | Overlays, modals | Content cards |
| Controlled glow | Emphasis moments | Every hover |
| Sophisticated animation | State communication | Decoration |

---

# 03 — Design Tokens

## Color System

### Dark Theme (Primary)

| Category | Token | Value | Hex | Usage |
|----------|-------|-------|-----|-------|
| Background | bg-primary | Deep black | #0A0A0F | Page background |
| Background | bg-secondary | Near-black | #12121A | Elevated surfaces |
| Background | bg-tertiary | Dark gray | #1A1A25 | Cards, panels |
| Background | bg-surface | Translucent white | rgba(255,255,255,0.03) | Glass panels |
| Brand | astra-primary | Indigo | #6366F1 | Main accent |
| Brand | astra-secondary | Light indigo | #818CF8 | Secondary accent |
| Brand | astra-glow | Translucent indigo | rgba(99,102,241,0.2) | Glow effects |
| Brand | astra-muted | Subtle indigo | rgba(99,102,241,0.1) | Subtle backgrounds |
| Text | text-primary | Near-white | #F8FAFC | Headings, primary |
| Text | text-secondary | Gray | #94A3B8 | Body text |
| Text | text-tertiary | Muted gray | #64748B | Labels, captions |
| Border | border-default | Dark blue-gray | #1E293B | Standard borders |
| Border | border-subtle | Translucent | rgba(255,255,255,0.04) | Subtle separators |
| Border | border-accent | Indigo | #6366F1 | Focus, active states |
| Status | success | Green | #22C55E | Success states |
| Status | warning | Yellow | #EAB308 | Warning states |
| Status | error | Red | #EF4444 | Error states |
| Status | info | Blue | #3B82F6 | Information |

### Light Theme

| Category | Token | Value | Hex | Usage |
|----------|-------|-------|-----|-------|
| Background | bg-primary | White | #FFFFFF | Page background |
| Background | bg-secondary | Light gray | #F8FAFC | Elevated surfaces |
| Background | bg-tertiary | Gray-50 | #F1F5F9 | Cards, panels |
| Text | text-primary | Near-black | #0F172A | Headings, primary |
| Text | text-secondary | Gray-600 | #475569 | Body text |
| Text | text-tertiary | Gray-400 | #94A3B8 | Labels, captions |
| Border | border-default | Gray-200 | #E2E8F0 | Standard borders |

### Semantic Color Mapping

| Purpose | Dark | Light |
|---------|------|-------|
| Page background | bg-primary (#0A0A0F) | bg-primary (#FFFFFF) |
| Card background | bg-tertiary (#1A1A25) | bg-tertiary (#F1F5F9) |
| Primary text | text-primary (#F8FAFC) | text-primary (#0F172A) |
| Secondary text | text-secondary (#94A3B8) | text-secondary (#475569) |
| Border | border-default (#1E293B) | border-default (#E2E8F0) |
| Accent | astra-primary (#6366F1) | astra-primary (#4F46E5) |

---

# 04 — ASTRA Brand Color

## Color Selection: Indigo (#6366F1)

**Why Indigo:**

| Criterion | Assessment |
|-----------|------------|
| Distinctiveness | Not overused like blue or purple |
| Premium feel | Associated with intelligence, technology |
| Contrast | Excellent on dark backgrounds |
| Accessibility | Passes WCAG AA on both themes |
| Versatility | Works for buttons, links, charts, badges |
| Emotional | Conveys trust, depth, sophistication |

## Accent Usage Rules

| Use | Don't Use |
|-----|-----------|
| Primary CTAs | Background fills |
| Active/selected states | Large text blocks |
| Focus rings | Decorative elements |
| Links in content | Every card hover |
| Chart primary color | Borders everywhere |
| Badge backgrounds | Gradient overlays |
| Diagram highlights | Full-width strips |

## Accent Intensity Levels

| Level | Opacity | Usage |
|-------|---------|-------|
| Full | 100% | Buttons, active text |
| Strong | 60% | Hover states |
| Medium | 30% | Selection highlights |
| Subtle | 10% | Badge backgrounds |
| Muted | 5% | Card highlights |

---

# 05 — Typography System

## Font Families

| Family | Font | Fallback | Usage |
|--------|------|----------|-------|
| Sans | Inter | system-ui, -apple-system, sans-serif | Body, UI, headings |
| Mono | JetBrains Mono | Fira Code, monospace | Code, technical data |

## Type Scale

| Name | Size | Weight | Line Height | Letter Spacing | Use Case |
|------|------|--------|-------------|----------------|----------|
| display | 72px / 4.5rem | 700 | 1.1 | -0.02em | Hero headlines |
| h1 | 48px / 3rem | 700 | 1.2 | -0.02em | Page titles |
| h2 | 36px / 2.25rem | 600 | 1.3 | -0.01em | Section titles |
| h3 | 28px / 1.75rem | 600 | 1.4 | -0.01em | Subsection titles |
| h4 | 22px / 1.375rem | 600 | 1.4 | 0 | Card titles |
| body-lg | 18px / 1.125rem | 400 | 1.6 | 0 | Lead paragraphs |
| body | 16px / 1rem | 400 | 1.6 | 0 | Body text |
| body-sm | 14px / 0.875rem | 400 | 1.5 | 0 | Small text |
| caption | 12px / 0.75rem | 500 | 1.4 | 0.01em | Labels, captions |
| label | 12px / 0.75rem | 600 | 1.4 | 0.02em | Form labels |
| mono | 14px / 0.875rem | 400 | 1.5 | 0 | Code blocks |

## Typography Rules

- **Never use font-size below 12px** for readable content
- **Maximum line length:** 65-75 characters for body text
- **Paragraph spacing:** 1em (16px) between paragraphs
- **Heading spacing:** 0.5em above, 0.25em below
- **Code blocks:** Always use monospace font
- **Tables:** Use body-sm for density

## Typography Hierarchy

```
Display (72px) — Hero only, one per page
H1 (48px) — Page title, one per page
H2 (36px) — Major sections
H3 (28px) — Subsections
H4 (22px) — Card titles, small sections
Body-LG (18px) — Lead text, introductions
Body (16px) — Standard content
Body-SM (14px) — Dense content, tables
Caption (12px) — Labels, metadata
```

---

# 06 — Spacing System

## Base Unit: 4px

All spacing multiples of 4px for consistency.

## Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| space-0 | 0 | Reset |
| space-0.5 | 2px | Tight micro-spacing |
| space-1 | 4px | Icon gaps, tight spacing |
| space-1.5 | 6px | Small gaps |
| space-2 | 8px | Input padding, small gaps |
| space-2.5 | 10px | Compact spacing |
| space-3 | 12px | Button padding, card gaps |
| space-4 | 16px | Standard padding |
| space-5 | 20px | Medium spacing |
| space-6 | 24px | Card padding, section gaps |
| space-8 | 32px | Large section spacing |
| space-10 | 40px | Section dividers |
| space-12 | 48px | Major section spacing |
| space-16 | 64px | Page section spacing |
| space-20 | 80px | Hero spacing |
| space-24 | 96px | Major page breaks |

## Page Padding

| Breakpoint | Padding |
|------------|---------|
| Mobile (< 640px) | 16px (space-4) |
| Tablet (640px+) | 24px (space-6) |
| Desktop (1024px+) | 32px (space-8) |
| Wide (1536px+) | 32px (space-8) |

## Section Spacing

| Context | Desktop | Mobile |
|---------|---------|--------|
| Between major sections | 96px (space-24) | 64px (space-16) |
| Between subsections | 64px (space-16) | 48px (space-12) |
| Between cards in grid | 24px (space-6) | 16px (space-4) |
| Inside cards | 24px (space-6) | 16px (space-4) |
| Between heading and content | 16px (space-4) | 12px (space-3) |

---

# 07 — Container & Grid System

## Container Widths

| Container | Max Width | Usage |
|-----------|-----------|-------|
| Default | 1280px (max-w-7xl) | Most pages |
| Narrow | 768px (max-w-3xl) | Articles, reading |
| Wide | 1536px (max-w-screen-2xl) | Dashboards, dense UI |
| Full | 100% | Hero, full-bleed sections |

## Reading Width

| Content Type | Max Width | Reason |
|--------------|-----------|--------|
| Articles | 680px | Optimal reading |
| Documentation | 720px | Code + text |
| Comparison tables | 100% | Needs space |
| Tool profiles | 1280px | Multi-column |

## Grid System

### Desktop (1280px+): 12-Column Grid

```
Column width: 72px
Gutter: 24px
Margin: 32px

12 columns = 1280px
```

### Common Grid Patterns

| Pattern | Columns | Gutter | Usage |
|---------|---------|--------|-------|
| Full-width | 12 | - | Hero, banners |
| 2-column | 6+6 | 24px | Side-by-side |
| 3-column | 4+4+4 | 24px | Card grids |
| 4-column | 3+3+3+3 | 24px | Dense cards |
| Sidebar | 3+9 | 24px | Navigation + content |
| Documentation | 2+7+3 | 24px | Docs layout |

### Tablet (640px+): 8-Column Grid

```
Column width: 72px
Gutter: 16px
Margin: 24px
```

### Mobile (< 640px): 4-Column Grid

```
Column width: Auto
Gutter: 16px
Margin: 16px
```

## Layout Patterns

### Standard Page Layout

```
+------------------------------------------+
|              Navigation                  |
+------------------------------------------+
|                                          |
|              Hero / Header               |
|                                          |
+------------------------------------------+
|                                          |
|              Content Area                |
|              (max-w-7xl)                 |
|                                          |
+------------------------------------------+
|              Footer                      |
+------------------------------------------+
```

### Content + Sidebar Layout

```
+------------------------------------------+
|  Sidebar (3 cols)  |  Content (9 cols)   |
|  - Navigation      |  - Main content     |
|  - Filters         |  - Articles         |
|  - Categories      |  - Details          |
+------------------------------------------+
```

### Documentation Layout

```
+------------------------------------------+
| Left TOC |  Content  | Right TOC         |
| (2 cols) | (7 cols)  | (3 cols)          |
+------------------------------------------+
```

---

# 08 — Border Radius

## Radius Tokens

| Token | Value | Usage |
|-------|-------|-------|
| radius-none | 0 | Sharp edges, technical |
| radius-sm | 4px | Small elements, tags |
| radius-md | 8px | Buttons, inputs |
| radius-lg | 12px | Cards, panels |
| radius-xl | 16px | Large cards, modals |
| radius-2xl | 24px | Hero elements |
| radius-full | 9999px | Pills, avatars, badges |

## Component Radius Mapping

| Component | Radius | Reason |
|-----------|--------|--------|
| Buttons | radius-md (8px) | Compact, clickable |
| Inputs | radius-md (8px) | Consistent with buttons |
| Cards | radius-lg (12px) | Standard container |
| Modals | radius-xl (16px) | Prominent overlay |
| Badges | radius-full | Pill shape |
| Avatars | radius-full | Circle |
| Tags | radius-sm (4px) | Small, technical |
| Tooltips | radius-md (8px) | Small overlay |
| Dropdowns | radius-lg (12px) | Card-like |

## Radius Rules

- **Never use radius-2xl on small elements** (looks bubbly)
- **Consistency within component families** (all buttons same radius)
- **Technical content** can use smaller radius (radius-sm)
- **Cards and panels** always use radius-lg
- **Never mix radius sizes within a component**

---

# 09 — Shadow & Depth System

## Shadow Tokens

| Token | Value | Usage |
|-------|-------|-------|
| shadow-none | none | Flat elements |
| shadow-sm | 0 1px 2px rgba(0,0,0,0.3) | Subtle lift |
| shadow-md | 0 4px 6px rgba(0,0,0,0.3) | Cards on hover |
| shadow-lg | 0 10px 15px rgba(0,0,0,0.3) | Elevated panels |
| shadow-xl | 0 20px 25px rgba(0,0,0,0.3) | Modals, overlays |
| shadow-glow | 0 0 20px rgba(99,102,241,0.15) | Subtle accent glow |
| shadow-glow-lg | 0 0 40px rgba(99,102,241,0.2) | Strong accent glow |

## Depth Strategy

**ASTRA uses borders and contrast more than heavy shadows.**

| Technique | When to Use |
|-----------|-------------|
| Border + subtle shadow | Cards, panels |
| Border only | Dividers, separators |
| Shadow-lg | Modals, floating panels |
| Shadow-xl | Full-screen overlays |
| Glow shadow | Accent emphasis only |

## Elevation Levels

| Level | Shadow | Border | Usage |
|-------|--------|--------|-------|
| 0 | none | none | Background elements |
| 1 | shadow-sm | border-subtle | Resting cards |
| 2 | shadow-md | border-default | Hovered cards |
| 3 | shadow-lg | border-default | Dropdowns, popovers |
| 4 | shadow-xl | none | Modals, overlays |

---

# 10 — Iconography

## Icon Library: Lucide

## Icon Sizes

| Size | Pixels | Usage |
|------|--------|-------|
| xs | 12px | Inline badges |
| sm | 16px | Buttons, inputs |
| md | 20px | Navigation, cards |
| lg | 24px | Section headers |
| xl | 32px | Feature icons |
| 2xl | 48px | Hero icons |

## Icon Rules

- **Stroke width:** 1.5px (consistent)
- **Color:** Inherit from text (currentColor)
- **Spacing:** 8px gap between icon and text
- **Button icons:** Always paired with text (except icon-only buttons)
- **Navigation:** Icons accompany all nav items
- **Never use filled icons** (Lucide uses stroke)

## Icon Usage Matrix

| Context | Size | Style |
|---------|------|-------|
| Navigation items | md (20px) | Stroke |
| Button left icon | sm (16px) | Stroke |
| Card feature icons | lg (24px) | Stroke |
| Section headers | xl (32px) | Stroke |
| Hero features | 2xl (48px) | Stroke |
| Inline text | sm (16px) | Stroke |
| Form inputs | md (20px) | Stroke |
| Status indicators | sm (16px) | Filled |

---

# 11 — Button System

## Button Variants

### Primary Button

```
Background: astra-primary (#6366F1)
Text: white (#FFFFFF)
Height: 40px
Padding: 0 16px
Radius: radius-md (8px)
Font: body, 500 weight
Hover: astra-secondary (#818CF8)
Active: astra-primary with reduced brightness
Focus: 2px outline-offset 2px
```

### Secondary Button

```
Background: bg-tertiary (#1A1A25)
Text: text-primary (#F8FAFC)
Border: border-default (#1E293B)
Height: 40px
Padding: 0 16px
Radius: radius-md (8px)
Font: body, 500 weight
Hover: bg-secondary (#12121A)
```

### Ghost Button

```
Background: transparent
Text: text-secondary (#94A3B8)
Height: 40px
Padding: 0 16px
Radius: radius-md (8px)
Font: body, 500 weight
Hover: bg-white/5, text-primary
```

### Outline Button

```
Background: transparent
Text: astra-primary (#6366F1)
Border: astra-primary (#6366F1)
Height: 40px
Padding: 0 16px
Radius: radius-md (8px)
Hover: astra-primary/10 background
```

### Destructive Button

```
Background: error/10 (rgba(239,68,68,0.1))
Text: error (#EF4444)
Height: 40px
Padding: 0 16px
Radius: radius-md (8px)
Hover: error/20 background
```

### Icon Button

```
Background: transparent
Icon: text-secondary
Size: 40px x 40px
Radius: radius-md (8px)
Hover: bg-white/5
```

## Button Sizes

| Size | Height | Padding | Font |
|------|--------|---------|------|
| sm | 32px | 0 12px | body-sm |
| md | 40px | 0 16px | body |
| lg | 48px | 0 24px | body-lg |

## CTA Hierarchy

1. **Primary CTA:** One per section (e.g., "Explore ASTRA")
2. **Secondary CTA:** Supportive action (e.g., "Learn More")
3. **Ghost CTA:** Tertiary action (e.g., "View All")

---

# 12 — Form System

## Input

```
Default:
  Background: bg-secondary (#12121A)
  Border: border-default (#1E293B)
  Text: text-primary (#F8FAFC)
  Placeholder: text-tertiary (#64748B)
  Padding: 12px 16px
  Radius: radius-md (8px)

Hover:
  Border: border-default (no change)

Focus:
  Border: border-accent (#6366F1)
  Outline: none (border-only)

Error:
  Border: error (#EF4444)
  Error message below

Disabled:
  Opacity: 0.5
  Cursor: not-allowed
```

## Textarea

```
Same as Input
Min-height: 120px
Resizable: vertical only
```

## Select

```
Same as Input
Dropdown: bg-secondary, border-default
Option hover: bg-tertiary
```

## Checkbox

```
Size: 16px x 16px
Border: border-default
Checked: astra-primary background, white check
Radius: radius-sm (4px)
```

## Radio

```
Size: 16px x 16px
Border: border-default
Selected: astra-primary ring
```

## Toggle

```
Track: 44px x 24px
Thumb: 20px circle
Off: bg-tertiary
On: astra-primary
```

---

# 13 — Card System

## Tool Card

```
Layout: Vertical
+-------------------+
| [Logo]  Name      |
| Category badge    |
|                   |
| Short description |
|                   |
| Free | Cloud | API|
+-------------------+

Background: bg-tertiary
Border: border-default
Padding: 24px
Radius: radius-lg (12px)
Hover: border-accent/50, shadow-glow-sm
```

## Model Card

```
Layout: Vertical
+-------------------+
| [Logo]  Name      |
| Provider badge    |
|                   |
| Context: 128K     |
| Modalities badges |
|                   |
| Free tier | API   |
+-------------------+
```

## Article Card

```
Layout: Vertical
+-------------------+
| [Image]           |
|                   |
| Category badge    |
| Title             |
| Summary (2 lines) |
|                   |
| 5 min | Jan 2026  |
+-------------------+
```

## Comparison Card

```
Layout: Horizontal
+-------------------------------------------+
| [Logo A]  Name A   VS   Name B  [Logo B] |
|                                           |
| Reasoning: 85 vs 82                      |
| Coding: 90 vs 78                         |
|                                           |
| View Comparison ->                        |
+-------------------------------------------+
```

## Feature Card

```
Layout: Vertical
+-------------------+
| [Icon 24px]       |
|                   |
| Title             |
| Description       |
|                   |
| Learn More ->     |
+-------------------+
```

## Category Card

```
Layout: Vertical
+-------------------+
| [Icon]            |
|                   |
| Category Name     |
| 42 tools          |
|                   |
| Explore ->        |
+-------------------+
```

## Stat Card

```
Layout: Vertical
+-------------------+
| 200+              |
| Tool Profiles     |
|                   |
| Description text  |
+-------------------+
```

---

# 14 — Navigation System

## Desktop Navigation

```
+----------------------------------------------------------+
| [Logo]  ASTRA    Atlas  Compare  Tools  Knowledge  Blog  |
|                                    [Search] [Theme] [GH] |
+----------------------------------------------------------+

Height: 64px
Background: bg-primary (solid)
Border-bottom: border-subtle
Position: sticky, top: 0
Z-index: 50
```

## Mobile Navigation

```
+--------------------------+
| [Logo]  ASTRA   [Search] [Menu] |
+--------------------------+

Height: 56px
Menu: Full-screen overlay on tap
```

## Mega Menu Behavior

| Nav Item | Trigger | Content |
|----------|---------|---------|
| ASTRA | Hover/Click | Overview, Features, Architecture, Roadmap |
| Atlas | Hover/Click | Tools, Models, Coding, Agents |
| Compare | Hover/Click | By category links |
| Tools | Hover/Click | Tool categories |
| Knowledge | Hover/Click | Topic categories |
| Blog | Click | Direct link |
| Docs | Click | Direct link |

## Mobile Menu

```
Full-screen overlay
Background: bg-primary
Navigation items: Large touch targets (48px height)
Close button: Top right
```

---

# 15 — Command Palette

## Trigger

- **Keyboard:** Cmd+K (Mac) / Ctrl+K (Windows)
- **Button:** Search icon in navigation

## Layout

```
+--------------------------------------------------+
| Search tools, models, articles...                |
+--------------------------------------------------+
|                                                  |
| RECENT SEARCHES                                  |
| - chatgpt                                        |
| - claude vs gpt-4                                |
|                                                  |
| SUGGESTED                                        |
| - Best AI coding tools                           |
| - What is RAG                                    |
|                                                  |
| CATEGORIES                                       |
| [Tools] [Models] [Articles] [Comparisons]        |
|                                                  |
+--------------------------------------------------+
| Cmd+K to search  Up/Down to navigate  Enter     |
+--------------------------------------------------+

Background: bg-secondary
Border: border-default
Overlay: bg-black/50
Radius: radius-xl (16px)
Max-width: 640px
Centered vertically
```

## Search Results

```
+--------------------------------------------------+
| local ai coding                                  |
+--------------------------------------------------+
|                                                  |
| TOOLS                                            |
| [Card] Cursor - AI-powered code editor           |
| [Card] Aider - AI pair programming               |
|                                                  |
| ARTICLES                                         |
| [Card] Getting Started with Local AI             |
| [Card] Running LLMs Locally                     |
|                                                  |
| COMPARISONS                                      |
| [Card] Cursor vs Copilot                        |
|                                                  |
+--------------------------------------------------+
```

---

# 16 — Hero System

## Product Hero

```
+--------------------------------------------------+
|                                                  |
|          [Headline - Display size]               |
|                                                  |
|     [Supporting text - Body-LG, max-width 600px] |
|                                                  |
|     [Primary CTA]  [Secondary CTA]               |
|                                                  |
|     [Visual element / diagram]                   |
|                                                  |
+--------------------------------------------------+

Layout: Centered
Max-width: 1280px
Padding: 120px top, 96px bottom
```

## Editorial Hero

```
+--------------------------------------------------+
|                                                  |
| [Category badge]                                 |
|                                                  |
| [Headline - H1]                                  |
|                                                  |
| [Author] [Date] [Reading time]                   |
|                                                  |
| [Featured image]                                 |
|                                                  |
+--------------------------------------------------+

Layout: Left-aligned
Max-width: 720px (reading width)
```

## Directory Hero

```
+--------------------------------------------------+
|                                                  |
| [Headline - H1]                                  |
|                                                  |
| [Description - Body-LG]                          |
|                                                  |
| [Search bar]                                     |
|                                                  |
| [Category filters]                               |
|                                                  |
+--------------------------------------------------+

Layout: Centered
Full-width background
```

---

# 17 — Homepage UI

## Section 1: Hero

```
Layout: Centered
Background: bg-primary (gradient subtle)
Content:
  - Display headline: "The AI ecosystem, intelligently organized"
  - Body-LG: Platform description
  - Primary CTA: "Explore ASTRA"
  - Secondary CTA: "Explore AI Atlas"
  - Abstract ASTRA visualization (not robot)
Animation: Fade-in, subtle scale
```

## Section 2: What is ASTRA?

```
Layout: 3-column grid
Content:
  - H2: "What is ASTRA?"
  - 3 feature cards with icons
  - CTA: "Learn More"
Animation: Staggered card reveal
```

## Section 3: AI Atlas Preview

```
Layout: 4-column grid
Content:
  - H2: "Discover the AI Ecosystem"
  - Category cards with counts
  - CTA: "Explore Atlas"
Animation: Grid reveal
```

## Section 4: Comparison Preview

```
Layout: Side-by-side
Content:
  - H2: "Compare AI Tools"
  - Featured comparison card
  - CTA: "View All Comparisons"
Animation: Slide-in
```

## Section 5: Latest Knowledge

```
Layout: 3-column grid
Content:
  - H2: "AI Knowledge"
  - 3 article cards
  - CTA: "Explore Knowledge"
Animation: Staggered reveal
```

## Section 6: Featured Tools

```
Layout: 4-column grid
Content:
  - H2: "Featured Tools"
  - 4 tool cards
  - CTA: "View All Tools"
Animation: Grid reveal
```

## Section 7: AI Coding

```
Layout: 2-column (text + visual)
Content:
  - H2: "AI Coding Ecosystem"
  - Description
  - CTA: "Explore AI Coding"
Animation: Fade-in
```

## Section 8: Local AI

```
Layout: 2-column (visual + text)
Content:
  - H2: "Local AI"
  - Privacy messaging
  - CTA: "Discover Local AI"
Animation: Fade-in
```

## Section 9: Architecture Preview

```
Layout: Centered
Content:
  - H2: "ASTRA Architecture"
  - Simplified diagram
  - CTA: "View Full Architecture"
Animation: Node connections
```

## Section 10: Latest Articles

```
Layout: 3-column grid
Content:
  - H2: "Latest from the Blog"
  - 3 article cards
  - CTA: "Read Blog"
Animation: Staggered reveal
```

## Section 11: Final CTA

```
Layout: Centered, full-width
Background: gradient (subtle)
Content:
  - H2: "Join the ASTRA Ecosystem"
  - CTA: "Get Started"
Animation: Subtle pulse glow on CTA
```

---

# 18 — ASTRA Product UI

## /astra — Overview

```
Layout: Product template
Sections:
  - Hero with ASTRA tagline
  - Vision statement
  - 6 capability cards
  - CTA to features
```

## /astra/features

```
Layout: Directory template
Sections:
  - Feature grid (12+ cards)
  - Feature detail sections
  - Use case examples
  - CTA to architecture
```

## /astra/architecture

```
Layout: Wide container
Sections:
  - Interactive architecture diagram
  - Layer visualization
  - Component descriptions
  - Click-to-explore nodes
```

## /astra/philosophy

```
Layout: Article template (wide)
Sections:
  - 9 principle cards
  - Detailed explanations
  - Visual examples
```

## /astra/roadmap

```
Layout: Timeline template
Sections:
  - Horizontal timeline
  - Phase markers
  - Feature status
  - Progress indicators
```

## /astra/changelog

```
Layout: Article template
Sections:
  - Version entries
  - Date markers
  - Change categories
```

---

# 19 — ASTRA Architecture Visualization

## Diagram Structure

```
                     ASTRA
                       |
                Intelligence Layer
                       |
   +-------------------+-------------------+
   |                   |                   |
 Memory             Reasoning          Providers
   |                   |                   |
   +-------------------+-------------------+
                       |
                   ASTRA Core
                       |
    +------------------+------------------+
    |                  |                  |
  Events             Modules           Services
    |                  |                  |
    +------------------+------------------+
                       |
                 System Layer
```

## Node Design

```
Shape: Rounded rectangle (radius-lg)
Background: bg-tertiary
Border: border-default
Padding: 16px 24px
Text: body, text-primary
Width: 120-160px
```

## Connection Design

```
Style: Solid line
Color: border-default
Width: 1px
Animation: Subtle pulse on load
```

## Hover State

```
Border: border-accent
Shadow: shadow-glow
Background: bg-secondary
Cursor: pointer
```

## Selected State

```
Border: border-accent
Shadow: shadow-glow-lg
Background: bg-secondary
Description panel appears
```

## Mobile Alternative

```
Vertical stack instead of horizontal
Collapsible sections
Tap to expand details
```

---

# 20 — AI Atlas UI

## Main Layout

```
+--------------------------------------------------+
| Header (H1 + description)                        |
+--------------------------------------------------+
| Search bar                                        |
+--------------------------------------------------+
| Category navigation (horizontal scroll)           |
+--------------------------------------------------+
| +----------+------------------------------------+|
| | Filters  | Results (grid of cards)            ||
| | (sidebar)|                                    ||
| |          |                                    ||
| +----------+------------------------------------+|
+--------------------------------------------------+
| Pagination / Load more                           |
+--------------------------------------------------+
```

## Tool Card Details

```
+-------------------+
| [Logo 48px]       |
|                   |
| Tool Name         |
| Category badge    |
|                   |
| Short description |
| (2 lines max)     |
|                   |
| Free | Cloud | API|
|                   |
| [Compare] [Save]  |
+-------------------+
```

---

# 21 — Filter System

## Filter Types

| Filter | Type | Options |
|--------|------|---------|
| Price | Checkbox | Free, Freemium, Paid |
| Open Source | Checkbox | Yes, No |
| Deployment | Checkbox | Cloud, Local, Hybrid |
| Platform | Checkbox | Windows, Mac, Linux, Web, Mobile |
| Category | Checkbox | All categories |
| Use Case | Checkbox | Coding, Writing, Research, etc. |
| API | Checkbox | Available, Not available |

## Desktop Filter

```
Position: Left sidebar
Width: 240px
Background: bg-secondary
Border-right: border-subtle
Sticky: top: 80px
```

## Mobile Filter

```
Position: Bottom sheet
Trigger: "Filters" button
Background: bg-secondary
Radius: radius-xl (top only)
Drag handle: center
```

---

# 22 — Tool Profile UI

## Above the Fold

```
+--------------------------------------------------+
| [Logo 64px]  Tool Name          [Category badge] |
|                                                  |
| Short description of the tool.                   |
|                                                  |
| [Visit Website]  [Compare]  [Bookmark]           |
|                                                  |
| Free | Cloud | API Available | Open Source       |
+--------------------------------------------------+
```

## Full Profile

```
+--------------------------------------------------+
| Header (as above)                                |
+--------------------------------------------------+
| +-------------------+  +-----------------------+ |
| | Quick Facts       |  | Capabilities          | |
| | - Price: Free     |  | - Feature 1           | |
| | - Platforms: All  |  | - Feature 2           | |
| | - API: Yes        |  | - Feature 3           | |
| +-------------------+  +-----------------------+ |
+--------------------------------------------------+
| Pricing                                          |
| +-------------------+  +-----------------------+ |
| | Free Tier         |  | Pro Tier              | |
| | - Details         |  | - Details             | |
| +-------------------+  +-----------------------+ |
+--------------------------------------------------+
| Strengths              | Weaknesses              |
| - Strength 1           | - Weakness 1            |
| - Strength 2           | - Weakness 2            |
+--------------------------------------------------+
| Best For                                         |
| - Use case 1                                    |
| - Use case 2                                    |
+--------------------------------------------------+
| Alternatives                                     |
| [Card] [Card] [Card]                             |
+--------------------------------------------------+
| Related Comparisons                              |
| [Comparison Card] [Comparison Card]              |
+--------------------------------------------------+
| Related Articles                                 |
| [Article Card] [Article Card]                    |
+--------------------------------------------------+
| Last verified: Jan 2026 | Source: Official       |
+--------------------------------------------------+
```

---

# 23 — Model Profile UI

## Layout

```
+--------------------------------------------------+
| [Logo]  Model Name          Provider badge       |
|                                                  |
| Release: Jan 2026 | Context: 128K tokens        |
+--------------------------------------------------+
| +-------------------+  +-----------------------+ |
| | Modalities        |  | Capabilities          | |
| | - Text            |  | - Reasoning: High     | |
| | - Image           |  | - Coding: High        | |
| | - Audio           |  | - Writing: Medium     | |
| +-------------------+  +-----------------------+ |
+--------------------------------------------------+
| API Availability                                 |
| Provider: OpenAI | Endpoint: api.openai.com      |
| Pricing: $10/1M input tokens                     |
+--------------------------------------------------+
| Local Availability                               |
| Available via Ollama | Hardware: 8GB+ RAM        |
+--------------------------------------------------+
| License: Proprietary                             |
| Parameters: Unknown                              |
+--------------------------------------------------+
| Alternatives | Related Models | Comparisons       |
+--------------------------------------------------+
```

---

# 24 — Comparison UI

## Desktop Layout

```
+--------------------------------------------------+
| [Logo A]  Tool A     VS     Tool B  [Logo B]     |
|                                                  |
| Quick Verdict: Tool A is better for coding,      |
| Tool B is better for writing.                    |
+--------------------------------------------------+
| Category        | Tool A    | Tool B             |
|-----------------|-----------|--------------------|
| Reasoning       | #### 85   | #### 82           |
| Coding          | #### 90   | ### 78            |
| Writing         | ### 75    | #### 88           |
| Speed           | #### 88   | #### 85           |
| Price           | #### 90   | ### 70            |
| Privacy         | ### 70    | #### 95           |
+--------------------------------------------------+
| Strengths (A)       | Strengths (B)              |
| - Strength 1        | - Strength 1              |
| - Strength 2        | - Strength 2              |
+--------------------------------------------------+
| Weaknesses (A)      | Weaknesses (B)             |
| - Weakness 1        | - Weakness 1              |
+--------------------------------------------------+
| Best For A           | Best For B                 |
| - Use case 1        | - Use case 1              |
| - Use case 2        | - Use case 2              |
+--------------------------------------------------+
| Methodology | Data Freshness | Related Comparisons|
+--------------------------------------------------+
```

## Mobile Layout

```
Stacked vertically:
  - Tool A header (full width)
  - Tool B header (full width)
  - Scores (stacked cards)
  - Strengths A
  - Strengths B
  - Weaknesses A
  - Weaknesses B
  - Best For A
  - Best For B
  - Methodology
```

---

# 25 — Comparison Visualization

## Score Bars

```
Reasoning    ####################  85
             ###################   82

Layout: Horizontal bars
Width: Proportional to score
Color: astra-primary (winner), text-tertiary (other)
```

## Feature Matrix

```
Feature          | Tool A | Tool B
-----------------|--------|-------
API Available    | Yes    | Yes
Local Mode       | Yes    | No
Vision           | Yes    | Yes
Tool Calling     | Yes    | Yes
```

## Pricing Comparison

```
+-------------------+  +-------------------+
| Free Tier         |  | Free Tier         |
| - 10K tokens/day  |  | - 5K tokens/day   |
+-------------------+  +-------------------+
| Pro: $20/mo       |  | Pro: $25/mo       |
+-------------------+  +-------------------+
```

---

# 26 — Knowledge UI

## Knowledge Homepage

```
+--------------------------------------------------+
| H1: AI Knowledge                                 |
| Description                                       |
+--------------------------------------------------+
| Learning Paths                                    |
| [Beginner] [Intermediate] [Advanced]              |
+--------------------------------------------------+
| Categories grid                                   |
| [Card] [Card] [Card]                              |
| [Card] [Card] [Card]                              |
+--------------------------------------------------+
| Latest Articles                                   |
| [Card] [Card] [Card]                              |
+--------------------------------------------------+
```

## Article Page

```
+--------------------------------------------------+
| Breadcrumb: Knowledge > LLMs > What is RAG       |
+--------------------------------------------------+
| [Category badge]                                 |
| H1: What is RAG?                                 |
| Author | Date | 5 min read                        |
+--------------------------------------------------+
| +-------------------+  +-----------------------+ |
| | Table of Contents |  | Article Content       | |
| | (sticky)          |  |                       | |
| | - Section 1       |  | Paragraph...          | |
| | - Section 2       |  |                       | |
| | - Section 3       |  | Code block...         | |
| +-------------------+  +-----------------------+ |
+--------------------------------------------------+
| Sources                                          |
| Related Tools                                    |
| Related Comparisons                              |
| Related Articles                                 |
+--------------------------------------------------+
```

---

# 27 — Article UI

## Layout

```
+--------------------------------------------------+
| Breadcrumb                                       |
+--------------------------------------------------+
| [Category badge]                                 |
|                                                  |
| H1: Article Title                                |
| Subtitle (optional)                              |
|                                                  |
| Author avatar + name | Date | Reading time       |
|                                                  |
| [Featured image]                                 |
+--------------------------------------------------+
| Table of Contents (right sidebar, desktop)       |
|                                                  |
| Article content...                               |
|                                                  |
| H2: Section                                      |
| Paragraph...                                     |
|                                                  |
| Code block...                                    |
|                                                  |
| H2: Another Section                              |
| Paragraph...                                     |
+--------------------------------------------------+
| Sources                                          |
+--------------------------------------------------+
| Related Tools                                    |
| [Tool Card] [Tool Card]                          |
+--------------------------------------------------+
| Related Comparisons                              |
| [Comparison Card]                                |
+--------------------------------------------------+
| Related Articles                                 |
| [Article Card] [Article Card] [Article Card]     |
+--------------------------------------------------+
| CTA: Explore more in [Category]                  |
+--------------------------------------------------+
```

## Reading Width

- Max-width: 680px
- Centered in content area
- Comfortable line length

---

# 28 — Documentation UI

## Desktop Layout

```
+----------+---------------------------+-----------+
| Left TOC | Content                   | Right TOC |
|          |                           |           |
| Getting  | # Getting Started         | On this   |
| Started  |                           | page      |
|          | ## Installation           |           |
| Install  |                           | - Install |
| Config   | ```bash                   | - Config  |
| Modules  | npm install astra         | - Modules |
|          | ```                       |           |
| Plugins  |                           |           |
| API      | ## Configuration          |           |
|          |                           |           |
|          | Content...                |           |
+----------+---------------------------+-----------+
```

## Code Blocks

```
+--------------------------------------------------+
| language: typescript                    [Copy]    |
+--------------------------------------------------+
|                                                  |
| const astra = new ASTRA({                        |
|   provider: 'openai',                            |
|   model: 'gpt-4',                                |
| })                                               |
|                                                  |
+--------------------------------------------------+

Background: bg-secondary
Border: border-default
Radius: radius-md
Font: mono (JetBrains Mono)
```

## Mobile Layout

```
+------------------------------------------+
| [Menu] Documentation                     |
+------------------------------------------+
| (Collapsed sidebar)                      |
|                                          |
| Content...                               |
|                                          |
| [Table of Contents - expandable]         |
+------------------------------------------+
```

---

# 29 — Blog UI

## Blog Homepage

```
+--------------------------------------------------+
| Featured Article (large card)                    |
| [Image] Title | Category | Date                  |
+--------------------------------------------------+
| Trending                                         |
| [Card] [Card] [Card] [Card]                      |
+--------------------------------------------------+
| Latest Articles                                  |
| [Card] [Card] [Card]                             |
| [Card] [Card] [Card]                             |
+--------------------------------------------------+
| Categories: [AI] [Coding] [Agents] [Models]      |
+--------------------------------------------------+
```

---

# 30 — Search Results UI

## Grouped Results

```
+--------------------------------------------------+
| Search: "local ai coding"                        |
+--------------------------------------------------+
|                                                  |
| TOOLS (3)                                        |
| [Tool Card] [Tool Card] [Tool Card]              |
|                                                  |
| ARTICLES (5)                                     |
| [Article Card] [Article Card] [Article Card]     |
|                                                  |
| COMPARISONS (2)                                  |
| [Comparison Card] [Comparison Card]              |
|                                                  |
| MODELS (4)                                       |
| [Model Card] [Model Card] [Model Card]           |
|                                                  |
+--------------------------------------------------+
```

---

# 31 — Empty States

## No Search Results

```
+--------------------------------------------------+
|                                                  |
| [Icon 48px]                                      |
|                                                  |
| No results for "xyz"                             |
|                                                  |
| Try different keywords or browse categories      |
|                                                  |
| [Browse Tools]  [Browse Knowledge]               |
|                                                  |
+--------------------------------------------------+
```

## No Saved Tools

```
+--------------------------------------------------+
|                                                  |
| [Icon 48px]                                      |
|                                                  |
| No saved tools yet                               |
|                                                  |
| Bookmark tools to save them for later            |
|                                                  |
| [Explore Tools]                                  |
|                                                  |
+--------------------------------------------------+
```

---

# 32 — Loading States

## Skeleton Cards

```
+-------------------+
| [Gray box]        |
| [Gray line]       |
| [Gray line]       |
| [Gray line 60%]   |
+-------------------+

Animation: Pulse (opacity 0.4 to 0.7)
```

## Skeleton Article

```
+--------------------------------------------------+
| [Gray line 40%]                                  |
| [Gray line 80%]                                  |
| [Gray line 60%]                                  |
|                                                  |
| [Gray box - image placeholder]                   |
|                                                  |
| [Gray line 100%]                                 |
| [Gray line 100%]                                 |
| [Gray line 80%]                                  |
+--------------------------------------------------+
```

---

# 33 — Error States

## Page Error (404)

```
+--------------------------------------------------+
|                                                  |
| 404                                              |
|                                                  |
| Page not found                                   |
|                                                  |
| The page you're looking for doesn't exist or     |
| has been moved.                                  |
|                                                  |
| [Go Home]  [Search]                              |
|                                                  |
+--------------------------------------------------+
```

## API Error

```
+--------------------------------------------------+
|                                                  |
| [Warning icon]                                   |
|                                                  |
| Something went wrong                             |
|                                                  |
| We couldn't load the data. Please try again.     |
|                                                  |
| [Retry]                                          |
|                                                  |
+--------------------------------------------------+
```

---

# 34 — Micro-Interactions

## Card Hover

```
Border: border-default -> border-accent/50
Shadow: none -> shadow-glow-sm
Scale: 1 -> 1.02 (optional, subtle)
Duration: 200ms
```

## Button Hover

```
Background: Default -> Hover state
Duration: 150ms
```

## Focus Ring

```
Outline: 2px solid astra-primary
Offset: 2px
Duration: 0ms (instant)
```

## Page Transition

```
Initial: opacity 0, y 10px
Animate: opacity 1, y 0
Duration: 300ms
Easing: ease-out
```

## Staggered List

```
Each item: delay i * 50ms
Duration: 300ms per item
```

---

# 35 — Motion System

## Transition Durations

| Token | Duration | Usage |
|-------|----------|-------|
| fast | 150ms | Hover, focus |
| normal | 200ms | Standard transitions |
| slow | 300ms | Page transitions, modals |

## Easing Functions

| Token | Value | Usage |
|-------|-------|-------|
| ease-out | cubic-bezier(0.16, 1, 0.3, 1) | Entrances |
| ease-in | cubic-bezier(0.7, 0, 0.84, 0) | Exits |
| spring | cubic-bezier(0.34, 1.56, 0.64, 1) | Bouncy effects |

## Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

# 36 — Responsive Design

## Breakpoints

| Name | Width | Columns | Gutter | Padding |
|------|-------|---------|--------|---------|
| Mobile | < 640px | 4 | 16px | 16px |
| Tablet | 640px+ | 8 | 16px | 24px |
| Laptop | 1024px+ | 12 | 24px | 32px |
| Desktop | 1280px+ | 12 | 24px | 32px |
| Wide | 1536px+ | 12 | 24px | 32px |

## Component Behavior

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Navbar | Hamburger | Hamburger | Full nav |
| Sidebar | Hidden | Collapsible | Visible |
| Cards | 1 col | 2 col | 3-4 col |
| Comparison | Stacked | Side-by-side | Full table |
| TOC | Dropdown | Sidebar | Right sidebar |
| Search | Full screen | Modal | Modal |
| Filter | Bottom sheet | Sidebar | Sidebar |
| Hero | Stacked | Centered | Centered |

---

# 37 — Accessibility

## WCAG 2.1 AA Requirements

| Requirement | Implementation |
|-------------|----------------|
| Contrast | 4.5:1 normal text, 3:1 large text |
| Keyboard | All functionality accessible |
| Focus | Visible focus ring on all interactive elements |
| Semantic | Proper heading hierarchy, landmarks |
| ARIA | Labels where semantic HTML insufficient |
| Motion | Respect prefers-reduced-motion |
| Images | Descriptive alt text |
| Forms | Labels for all inputs |
| Skip | Skip navigation link |

## Focus Management

```
Focus ring: 2px solid astra-primary
Offset: 2px
Style: outline (not border)
Visibility: Always visible on keyboard focus
```

## Screen Reader

- All images have alt text
- All buttons have accessible names
- All forms have labels
- Dynamic content announced via ARIA live regions
- Proper heading hierarchy (h1 > h2 > h3)

---

# 38 — Dark & Light Mode

## Dark Mode (Default)

```
Background: #0A0A0F
Text: #F8FAFC
Borders: #1E293B
Accent: #6366F1
```

## Light Mode

```
Background: #FFFFFF
Text: #0F172A
Borders: #E2E8F0
Accent: #4F46E5
```

## Theme Toggle

- Position: Navigation (right side)
- Icon: Sun/Moon
- Default: Dark
- Persisted: localStorage

## Token Mapping

| Token | Dark | Light |
|-------|------|-------|
| bg-primary | #0A0A0F | #FFFFFF |
| bg-secondary | #12121A | #F8FAFC |
| bg-tertiary | #1A1A25 | #F1F5F9 |
| text-primary | #F8FAFC | #0F172A |
| text-secondary | #94A3B8 | #475569 |
| border-default | #1E293B | #E2E8F0 |

---

# 39 — SEO-Aware UI

## Requirements

| Element | Implementation |
|---------|----------------|
| Headings | Proper hierarchy (h1 > h2 > h3) |
| Links | Descriptive text, not "click here" |
| Images | Alt text |
| Breadcrumbs | On all pages > 2 levels |
| Semantic HTML | article, nav, main, aside |
| Internal linking | Related content sections |
| Structured data | JSON-LD where applicable |

---

# 40 — Performance-Aware UI

## Image Strategy

- Use next/image for all images
- Lazy loading for below-fold
- Responsive sizes
- WebP/AVIF format

## Animation Limits

- No animation on critical content
- Respect prefers-reduced-motion
- Maximum 3 animated elements per viewport
- No parallax scrolling

## Skeleton Strategy

- Show skeletons for async content
- Match actual content shape
- Use pulse animation
- Remove on load

---

# 41 — Component Inventory

## Foundation

| Component | Variants |
|-----------|----------|
| Typography | display, h1-h4, body-lg, body, body-sm, caption, label, mono |
| Colors | dark, light |
| Spacing | 4px scale |
| Icons | xs, sm, md, lg, xl, 2xl |

## Navigation

| Component | Variants |
|-----------|----------|
| Navbar | desktop, mobile |
| Sidebar | collapsible, sticky |
| Breadcrumb | standard |
| Tabs | underline, enclosed |

## Content

| Component | Variants |
|-----------|----------|
| Card | tool, model, article, comparison, feature, category, stat |
| Article | standard, featured |
| Table | standard, comparison |
| Callout | info, warning, error, success |
| Badge | default, category, status |

## Data

| Component | Variants |
|-----------|----------|
| Chart | bar, line, radar |
| Metric | number, percentage |
| Comparison | table, bars |
| Filter | checkbox, radio, toggle |
| Search | input, command palette |

## Feedback

| Component | Variants |
|-----------|----------|
| Toast | success, error, info |
| Dialog | standard, confirmation |
| Modal | standard, full-screen |
| Tooltip | top, bottom, left, right |
| Loading | skeleton, spinner |
| Error | page, inline |
| Empty | default, search |

---

# 42 — Page Template System

## Templates

| Template | Usage |
|----------|-------|
| Product | ASTRA pages |
| Directory | Atlas, tools, models |
| Tool Profile | /tools/[slug] |
| Model Profile | /models/[slug] |
| Comparison | /compare/[slug] |
| Article | Blog, knowledge |
| Documentation | /docs |
| Category | Category listings |
| Search | Search results |
| Dashboard | Admin |

---

# 43 — Design Consistency Rules

## Rules

1. One primary CTA per major section
2. Consistent card spacing (space-6)
3. Consistent heading hierarchy (no skipping levels)
4. Consistent button hierarchy (primary > secondary > ghost)
5. No arbitrary colors (use tokens)
6. No arbitrary spacing (use scale)
7. No random border radius (use tokens)
8. No random animation (use motion system)
9. Consistent icon sizes (use scale)
10. Maximum 3 font sizes per component

---

# 44 — Final UI Specification

## Homepage

| Aspect | Specification |
|--------|---------------|
| Purpose | Platform introduction |
| Layout | Full-width sections |
| Components | Hero, cards, grids, CTAs |
| Typography | Display, H2, Body-LG |
| Colors | bg-primary, astra-primary accents |
| Interaction | Hover effects, page transitions |
| Animation | Staggered reveals, fade-ins |
| Desktop | Full layout, 4-column grids |
| Tablet | 2-column grids |
| Mobile | Stacked, single column |
| Accessibility | Skip nav, focus rings, alt text |
| SEO | H1, meta, structured data |

## Tool Profile

| Aspect | Specification |
|--------|---------------|
| Purpose | Detailed tool information |
| Layout | Single column, max-width 1280px |
| Components | Header, facts, pricing, alternatives |
| Typography | H1, H2, Body, Body-SM |
| Colors | bg-primary, card bg-tertiary |
| Interaction | CTA hover, card hover |
| Animation | Fade-in sections |
| Desktop | Full layout |
| Tablet | Stacked sections |
| Mobile | Single column |
| Accessibility | Semantic HTML, alt text |
| SEO | SoftwareApplication schema |

## Comparison

| Aspect | Specification |
|--------|---------------|
| Purpose | Side-by-side analysis |
| Layout | Two-column (desktop), stacked (mobile) |
| Components | Header, score bars, tables, cards |
| Typography | H2, H3, Body, Body-SM |
| Colors | bg-primary, score colors |
| Interaction | Score hover, tab switching |
| Animation | Score bar animation |
| Desktop | Side-by-side comparison |
| Tablet | Side-by-side (narrower) |
| Mobile | Stacked cards |
| Accessibility | Semantic table, focus management |
| SEO | Article schema |

---

# 45 — Design Acceptance Criteria

## Checklist

- [ ] Unique ASTRA visual identity (not generic)
- [ ] Navigation is obvious and consistent
- [ ] Search is easily accessible (Cmd+K)
- [ ] Comparison is highly usable on all devices
- [ ] Tool discovery is fast and intuitive
- [ ] Articles are comfortable to read
- [ ] Documentation is developer-friendly
- [ ] Mobile UX is intentionally designed
- [ ] Accessibility is considered throughout
- [ ] Animations are subtle and purposeful
- [ ] Performance is protected (no heavy elements)
- [ ] Design tokens are consistent
- [ ] Components are reusable
- [ ] Dark and light themes are both professional
- [ ] Error states are helpful
- [ ] Loading states are informative
- [ ] Empty states guide users

---

**Document Version:** 1.0
**Last Updated:** 2026-08-08
**Status:** Ready for review
