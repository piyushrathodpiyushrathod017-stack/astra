export const navigationConfig = {
  main: [
    {
      title: "ASTRA",
      href: "/astra",
      description: "The intelligent AI operating system",
    },
    {
      title: "AI Atlas",
      href: "/atlas",
      description: "Discover the AI ecosystem",
    },
    {
      title: "Compare",
      href: "/compare",
      description: "Compare AI tools and models",
    },
    {
      title: "Tools",
      href: "/tools",
      description: "AI tools directory",
    },
    {
      title: "Knowledge",
      href: "/knowledge",
      description: "AI knowledge base",
    },
    {
      title: "Blog",
      href: "/blog",
      description: "Latest AI insights",
    },
    {
      title: "Docs",
      href: "/docs",
      description: "Documentation",
    },
  ] as const,
  footer: {
    astra: [
      { title: "Overview", href: "/astra" },
      { title: "Features", href: "/astra/features" },
      { title: "Architecture", href: "/astra/architecture" },
      { title: "Philosophy", href: "/astra/philosophy" },
      { title: "Roadmap", href: "/astra/roadmap" },
      { title: "Changelog", href: "/astra/changelog" },
    ],
    ecosystem: [
      { title: "AI Atlas", href: "/atlas" },
      { title: "Tools", href: "/tools" },
      { title: "Models", href: "/models" },
      { title: "Compare", href: "/compare" },
      { title: "AI Coding", href: "/atlas/coding" },
      { title: "Local AI", href: "/atlas/local-ai" },
    ],
    knowledge: [
      { title: "Knowledge Base", href: "/knowledge" },
      { title: "Blog", href: "/blog" },
      { title: "Documentation", href: "/docs" },
      { title: "Tutorials", href: "/knowledge?tutorials" },
      { title: "Glossary", href: "/knowledge?glossary" },
    ],
    developers: [
      { title: "Getting Started", href: "/docs/getting-started" },
      { title: "API Reference", href: "/docs/api" },
      { title: "Architecture", href: "/docs/architecture" },
      { title: "Contributing", href: "/docs/contributing" },
    ],
    legal: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
      { title: "Contact", href: "/contact" },
    ],
  },
} as const;
