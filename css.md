# ASTRA WEBSITE — DESIGN SYSTEM & CSS ARCHITECTURE

## 1. Design Tokens

### Color Palette

#### Background

| Token | Value | Usage |
|-------|-------|-------|
| `bg-primary` | `#0A0A0F` | Main page background |
| `bg-secondary` | `#12121A` | Elevated surfaces, modals |
| `bg-tertiary` | `#1A1A25` | Cards, panels |
| `bg-surface` | `rgba(255,255,255,0.03)` | Glass panels |

#### ASTRA Brand

| Token | Value | Usage |
|-------|-------|-------|
| `astra-primary` | `#6366F1` | Main accent (indigo-500) |
| `astra-secondary` | `#818CF8` | Secondary accent (indigo-400) |
| `astra-glow` | `rgba(99,102,241,0.2)` | Glow effects |
| `astra-muted` | `rgba(99,102,241,0.1)` | Subtle backgrounds |

#### Text

| Token | Value | Usage |
|-------|-------|-------|
| `text-primary` | `#F8FAFC` | Headings, primary text |
| `text-secondary` | `#94A3B8` | Body text, descriptions |
| `text-tertiary` | `#64748B` | Muted text, labels |
| `text-inverse` | `#0F172A` | Text on light backgrounds |

#### Border

| Token | Value | Usage |
|-------|-------|-------|
| `border-default` | `#1E293B` | Standard borders |
| `border-subtle` | `rgba(255,255,255,0.04)` | Subtle separators |
| `border-accent` | `#6366F1` | Accent borders, focus rings |

#### Status

| Token | Value | Usage |
|-------|-------|-------|
| `success` | `#22C55E` | Success states |
| `warning` | `#EAB308` | Warning states |
| `error` | `#EF4444` | Error states |
| `info` | `#3B82F6` | Information |

---

## 2. Typography

### Font Families

```css
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale

| Name | Size | Weight | Line Height | Letter Spacing | Use Case |
|------|------|--------|-------------|----------------|----------|
| `display` | 72px | 700 | 1.1 | -0.02em | Hero headline |
| `h1` | 48px | 700 | 1.2 | -0.02em | Page title |
| `h2` | 36px | 600 | 1.3 | -0.01em | Section title |
| `h3` | 28px | 600 | 1.4 | -0.01em | Subsection title |
| `h4` | 22px | 600 | 1.4 | 0 | Card title |
| `body-lg` | 18px | 400 | 1.6 | 0 | Lead paragraphs |
| `body` | 16px | 400 | 1.6 | 0 | Body text |
| `body-sm` | 14px | 400 | 1.5 | 0 | Small text |
| `caption` | 12px | 500 | 1.4 | 0.01em | Labels, captions |
| `mono` | 14px | 400 | 1.5 | 0 | Code blocks |

---

## 3. Spacing Scale (4px Base)

| Token | Value | px |
|-------|-------|----|
| `space-0` | 0 | 0 |
| `space-1` | 0.25rem | 4 |
| `space-2` | 0.5rem | 8 |
| `space-3` | 0.75rem | 12 |
| `space-4` | 1rem | 16 |
| `space-5` | 1.25rem | 20 |
| `space-6` | 1.5rem | 24 |
| `space-8` | 2rem | 32 |
| `space-10` | 2.5rem | 40 |
| `space-12` | 3rem | 48 |
| `space-16` | 4rem | 64 |
| `space-20` | 5rem | 80 |
| `space-24` | 6rem | 96 |

---

## 4. Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-none` | 0 | No radius |
| `radius-sm` | 4px | Small elements |
| `radius-md` | 8px | Buttons, inputs |
| `radius-lg` | 12px | Cards |
| `radius-xl` | 16px | Large cards, modals |
| `radius-2xl` | 24px | Hero elements |
| `radius-full` | 9999px | Pills, avatars |

---

## 5. Shadows

| Token | Value |
|-------|-------|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.3)` |
| `shadow-md` | `0 4px 6px rgba(0,0,0,0.3)` |
| `shadow-lg` | `0 10px 15px rgba(0,0,0,0.3)` |
| `shadow-xl` | `0 20px 25px rgba(0,0,0,0.3)` |
| `shadow-glow` | `0 0 20px rgba(99,102,241,0.15)` |
| `shadow-glow-lg` | `0 0 40px rgba(99,102,241,0.2)` |

---

## 6. Transitions

| Token | Value | Usage |
|-------|-------|-------|
| `transition-fast` | 150ms ease | Micro-interactions |
| `transition-normal` | 200ms ease | Standard transitions |
| `transition-slow` | 300ms ease | Page transitions |
| `transition-spring` | 300ms cubic-bezier(0.34,1.56,0.64,1) | Bouncy effects |

---

## 7. Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0A0F',
          secondary: '#12121A',
          tertiary: '#1A1A25',
          surface: 'rgba(255,255,255,0.03)',
        },
        astra: {
          primary: '#6366F1',
          secondary: '#818CF8',
          glow: 'rgba(99,102,241,0.2)',
          muted: 'rgba(99,102,241,0.1)',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          tertiary: '#64748B',
        },
        border: {
          default: '#1E293B',
          subtle: 'rgba(255,255,255,0.04)',
          accent: '#6366F1',
        },
        success: '#22C55E',
        warning: '#EAB308',
        error: '#EF4444',
        info: '#3B82F6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.02em' }],
        'h2': ['36px', { lineHeight: '1.3', fontWeight: '600', letterSpacing: '-0.01em' }],
        'h3': ['28px', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '-0.01em' }],
        'h4': ['22px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        'caption': ['12px', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.01em' }],
        'mono': ['14px', { lineHeight: '1.5', fontFamily: 'JetBrains Mono, monospace' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99,102,241,0.15)',
        'glow-lg': '0 0 40px rgba(99,102,241,0.2)',
        'glow-sm': '0 0 10px rgba(99,102,241,0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'slide-down': 'slideDown 300ms ease-out',
        'scale-in': 'scaleIn 200ms ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99,102,241,0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(99,102,241,0.3)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
```

---

## 8. Global CSS

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --bg-primary: #0A0A0F;
    --bg-secondary: #12121A;
    --bg-tertiary: #1A1A25;
    --astra-primary: #6366F1;
    --astra-secondary: #818CF8;
    --text-primary: #F8FAFC;
    --text-secondary: #94A3B8;
    --text-tertiary: #64748B;
    --border-default: #1E293B;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-bg-primary text-text-primary antialiased;
    font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
  }

  ::selection {
    @apply bg-astra-primary/30 text-white;
  }

  :focus-visible {
    @apply outline-2 outline-astra-primary outline-offset-2;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-transparent;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-border-default rounded-full;
  }

  ::-webkit-scrollbar-thumb:hover {
    @apply bg-text-tertiary;
  }

  /* Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
}

@layer components {
  .glass {
    @apply bg-white/5 backdrop-blur-xl border border-border-subtle;
  }

  .glass-strong {
    @apply bg-white/10 backdrop-blur-2xl border border-border-subtle;
  }

  .glow-border {
    @apply border border-astra-primary/20 shadow-glow;
  }

  .glow-border-strong {
    @apply border border-astra-primary/40 shadow-glow-lg;
  }

  .gradient-text {
    @apply bg-gradient-to-r from-astra-primary to-astra-secondary bg-clip-text text-transparent;
  }

  .card {
    @apply rounded-xl bg-bg-tertiary border border-border-default p-6
           hover:border-border-accent/50 hover:shadow-glow-sm
           transition-all duration-200;
  }

  .card-interactive {
    @apply card cursor-pointer hover:scale-[1.02];
  }

  .btn-primary {
    @apply bg-astra-primary hover:bg-astra-secondary text-white
           rounded-lg px-4 py-2 font-medium
           transition-all duration-200
           focus-visible:outline-astra-primary focus-visible:outline-2;
  }

  .btn-ghost {
    @apply bg-transparent hover:bg-white/5 text-text-secondary hover:text-text-primary
           rounded-lg px-4 py-2
           transition-all duration-200;
  }

  .badge {
    @apply inline-flex items-center rounded-full
           bg-astra-primary/10 text-astra-primary
           text-caption px-2.5 py-0.5;
  }

  .input {
    @apply w-full rounded-lg bg-bg-secondary border border-border-default
           px-4 py-2 text-body text-text-primary
           placeholder:text-text-tertiary
           focus:border-border-accent focus:outline-none
           transition-colors duration-200;
  }

  .section {
    @apply py-16 md:py-24;
  }

  .container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  .text-pretty {
    text-wrap: pretty;
  }

  .scrollbar-hidden {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .scrollbar-hidden::-webkit-scrollbar {
    display: none;
  }
}
```

---

## 9. Component Patterns

### Card

```tsx
<div className="rounded-xl bg-bg-tertiary border border-border-default p-6
                hover:border-border-accent/50 hover:shadow-glow-sm
                transition-all duration-200">
```

### Card Interactive

```tsx
<div className="rounded-xl bg-bg-tertiary border border-border-default p-6
                cursor-pointer
                hover:border-border-accent/50 hover:shadow-glow hover:scale-[1.02]
                transition-all duration-200">
```

### Button Variants

```tsx
// Primary
<button className="bg-astra-primary hover:bg-astra-secondary text-white
                   rounded-lg px-4 py-2 font-medium
                   transition-all duration-200">

// Secondary
<button className="bg-bg-tertiary hover:bg-bg-secondary text-text-primary
                   border border-border-default
                   rounded-lg px-4 py-2 font-medium
                   transition-all duration-200">

// Ghost
<button className="bg-transparent hover:bg-white/5 text-text-secondary
                   hover:text-text-primary
                   rounded-lg px-4 py-2
                   transition-all duration-200">

// Danger
<button className="bg-error/10 hover:bg-error/20 text-error
                   rounded-lg px-4 py-2 font-medium
                   transition-all duration-200">
```

### Badge

```tsx
<span className="inline-flex items-center rounded-full
                bg-astra-primary/10 text-astra-primary
                text-caption px-2.5 py-0.5">
```

### Input

```tsx
<input className="w-full rounded-lg bg-bg-secondary border border-border-default
                 px-4 py-2 text-body text-text-primary
                 placeholder:text-text-tertiary
                 focus:border-border-accent focus:outline-none
                 transition-colors duration-200" />
```

---

## 10. Animation Patterns

### Card Hover

```tsx
className="transition-all duration-200 hover:scale-[1.02] hover:shadow-glow"
```

### Page Transition (Framer Motion)

```tsx
'use client'

import { motion } from 'framer-motion'

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
```

### Staggered List

```tsx
{items.map((item, i) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.05, duration: 0.3 }}
  >
    {item.content}
  </motion.div>
))}
```

### Reduced Motion Support

```tsx
'use client'

import { useEffect, useState } from 'react'

export function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(query.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    query.addEventListener('change', handler)
    return () => query.removeEventListener('change', handler)
  }, [])

  return prefersReduced
}

// Usage
const prefersReduced = useReducedMotion()

<motion.div
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: prefersReduced ? 0 : 0.3 }}
/>
```

---

## 11. Responsive Breakpoints

| Name | Width | Tailwind | Usage |
|------|-------|----------|-------|
| mobile | < 640px | `sm:` | Phone |
| tablet | 640px+ | `md:` | Tablet |
| laptop | 1024px+ | `lg:` | Laptop |
| desktop | 1280px+ | `xl:` | Desktop |
| wide | 1536px+ | `2xl:` | Large screens |

### Container

```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

### Responsive Grid

```tsx
// Tool cards
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

// Feature grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// 2-column layout
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
  <aside className="lg:col-span-1">Sidebar</aside>
  <main className="lg:col-span-3">Content</main>
</div>
```

---

## 12. Glassmorphism Usage

### Apply Sparingly For

- Command palette overlay
- Modal backgrounds
- Floating panels
- Hero visual elements

### Do NOT Apply To

- Content cards (use solid `bg-bg-tertiary`)
- Navigation (use solid background)
- Forms (use solid background)
- Text containers

### Glass Styles

```tsx
// Subtle glass
<div className="bg-white/5 backdrop-blur-xl border border-border-subtle rounded-xl">

// Strong glass
<div className="bg-white/10 backdrop-blur-2xl border border-border-subtle rounded-xl">
```

---

## 13. Glow Effects

### Use For

- Active/selected states
- Hero emphasis
- Interactive element hover
- ASTRA branding moments

### Do NOT Use For

- Every card hover (subtle border change is enough)
- Text
- Backgrounds
- Large areas

### Glow Styles

```tsx
// Subtle glow
<div className="shadow-glow">

// Strong glow
<div className="shadow-glow-lg">

// Glow border
<div className="border border-astra-primary/20 shadow-glow">

// Animated glow
<div className="animate-pulse-glow">
```

---

## 14. Grid System

### Standard Content Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Card Grid (Dense)

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
```

### Sidebar Layout

```tsx
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
  <aside className="lg:col-span-1">
    {/* Sidebar */}
  </aside>
  <main className="lg:col-span-3">
    {/* Main content */}
  </main>
</div>
```

### Documentation Layout

```tsx
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
  <nav className="lg:col-span-2">
    {/* Left sidebar */}
  </nav>
  <article className="lg:col-span-7">
    {/* Main content */}
  </article>
  <aside className="lg:col-span-3">
    {/* Right TOC */}
  </aside>
</div>
```

---

## 15. Dark/Light Theme

### Token Structure

```css
/* Dark theme (default) */
:root {
  --bg-primary: #0A0A0F;
  --text-primary: #F8FAFC;
  /* ... */
}

/* Light theme */
.light {
  --bg-primary: #FFFFFF;
  --text-primary: #0F172A;
  /* ... */
}
```

### Tailwind Usage

```tsx
// Dark is default, light is .light class
<div className="dark:bg-bg-primary light:bg-white">
```

### Theme Toggle

```tsx
'use client'

import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  return (
    <button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
```
