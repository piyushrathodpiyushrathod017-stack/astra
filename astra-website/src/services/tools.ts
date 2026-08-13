// UNUSED: This file is not imported anywhere in the codebase.
// API routes define their own inline mock data instead.
// Consider importing from @/lib/mock-data.ts or removing this file.

import type { Tool, ToolWithScores, ToolFilters } from "@/types/tool";

const mockTools: ToolWithScores[] = [
  {
    id: "1",
    name: "Cursor",
    slug: "cursor",
    description: "AI-first code editor built on VS Code with integrated AI assistance",
    shortDescription: "AI-first code editor",
    websiteUrl: "https://cursor.sh",
    logoUrl: "/logos/cursor.svg",
    category: "code-editor",
    pricing: "freemium",
    hasFreeTier: true,
    hasApi: false,
    isOpenSource: false,
    isLocal: false,
    platforms: ["macos", "windows", "linux"],
    capabilities: ["code-completion", "chat", "refactoring", "multi-file-editing"],
    scores: { easeOfUse: 85, features: 90, pricing: 75, documentation: 80, community: 85, overall: 83 },
    pricingDetail: { free: true, starter: 20, pro: 40, currency: "USD" },
    verificationStatus: "verified",
    lastVerified: new Date("2026-01-15"),
    lastUpdated: new Date("2026-01-15"),
    dataSource: "official",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-15"),
  },
  {
    id: "2",
    name: "GitHub Copilot",
    slug: "github-copilot",
    description: "AI pair programmer by GitHub powered by OpenAI Codex",
    shortDescription: "AI pair programmer",
    websiteUrl: "https://github.com/features/copilot",
    logoUrl: "/logos/copilot.svg",
    category: "code-completion",
    pricing: "subscription",
    hasFreeTier: true,
    hasApi: false,
    isOpenSource: false,
    isLocal: false,
    platforms: ["vscode", "jetbrains", "neovim"],
    capabilities: ["code-completion", "chat", "cli"],
    scores: { easeOfUse: 80, features: 85, pricing: 70, documentation: 85, community: 90, overall: 82 },
    pricingDetail: { free: true, starter: 10, pro: 19, currency: "USD" },
    verificationStatus: "verified",
    lastVerified: new Date("2026-01-10"),
    lastUpdated: new Date("2026-01-10"),
    dataSource: "official",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-10"),
  },
  {
    id: "3",
    name: "Windsurf",
    slug: "windsurf",
    description: "AI-powered IDE with deep codebase understanding",
    shortDescription: "AI-powered IDE",
    websiteUrl: "https://windsurf.com",
    logoUrl: "/logos/windsurf.svg",
    category: "code-editor",
    pricing: "freemium",
    hasFreeTier: true,
    hasApi: false,
    isOpenSource: false,
    isLocal: false,
    platforms: ["macos", "windows", "linux"],
    capabilities: ["code-completion", "chat", "multi-file-editing", "agent"],
    scores: { easeOfUse: 88, features: 82, pricing: 80, documentation: 75, community: 70, overall: 79 },
    pricingDetail: { free: true, starter: 15, pro: 30, currency: "USD" },
    verificationStatus: "verified",
    lastVerified: new Date("2026-01-12"),
    lastUpdated: new Date("2026-01-12"),
    dataSource: "official",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-12"),
  },
  {
    id: "4",
    name: "Ollama",
    slug: "ollama",
    description: "Run LLMs locally with simple CLI",
    shortDescription: "Local LLM runner",
    websiteUrl: "https://ollama.com",
    logoUrl: "/logos/ollama.svg",
    category: "local-ai",
    pricing: "free",
    hasFreeTier: true,
    hasApi: true,
    isOpenSource: true,
    isLocal: true,
    platforms: ["macos", "windows", "linux"],
    capabilities: ["local-inference", "model-management", "api"],
    scores: { easeOfUse: 90, features: 75, pricing: 100, documentation: 80, community: 95, overall: 88 },
    pricingDetail: { free: true, currency: "USD" },
    verificationStatus: "verified",
    lastVerified: new Date("2026-01-14"),
    lastUpdated: new Date("2026-01-14"),
    dataSource: "official",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-14"),
  },
  {
    id: "5",
    name: "LM Studio",
    slug: "lm-studio",
    description: "Desktop app for discovering, downloading, and running local LLMs",
    shortDescription: "Desktop LLM app",
    websiteUrl: "https://lmstudio.ai",
    logoUrl: "/logos/lmstudio.svg",
    category: "local-ai",
    pricing: "free",
    hasFreeTier: true,
    hasApi: true,
    isOpenSource: false,
    isLocal: true,
    platforms: ["macos", "windows", "linux"],
    capabilities: ["local-inference", "model-discovery", "api"],
    scores: { easeOfUse: 92, features: 70, pricing: 100, documentation: 75, community: 80, overall: 83 },
    pricingDetail: { free: true, currency: "USD" },
    verificationStatus: "verified",
    lastVerified: new Date("2026-01-13"),
    lastUpdated: new Date("2026-01-13"),
    dataSource: "official",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-13"),
  },
  {
    id: "6",
    name: "Continue",
    slug: "continue",
    description: "Open-source AI code assistant for VS Code and JetBrains",
    shortDescription: "Open-source code assistant",
    websiteUrl: "https://continue.dev",
    logoUrl: "/logos/continue.svg",
    category: "code-completion",
    pricing: "free",
    hasFreeTier: true,
    hasApi: false,
    isOpenSource: true,
    isLocal: false,
    platforms: ["vscode", "jetbrains"],
    capabilities: ["code-completion", "chat", "refactoring"],
    scores: { easeOfUse: 80, features: 75, pricing: 100, documentation: 70, community: 85, overall: 82 },
    pricingDetail: { free: true, currency: "USD" },
    verificationStatus: "verified",
    lastVerified: new Date("2026-01-11"),
    lastUpdated: new Date("2026-01-11"),
    dataSource: "official",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-11"),
  },
  {
    id: "7",
    name: "Aider",
    slug: "aider",
    description: "AI pair programming in your terminal",
    shortDescription: "Terminal AI pair programmer",
    websiteUrl: "https://aider.chat",
    logoUrl: "/logos/aider.svg",
    category: "cli-tool",
    pricing: "free",
    hasFreeTier: true,
    hasApi: false,
    isOpenSource: true,
    isLocal: false,
    platforms: ["macos", "linux"],
    capabilities: ["chat", "code-editing", "git-integration"],
    scores: { easeOfUse: 70, features: 80, pricing: 100, documentation: 75, community: 90, overall: 83 },
    pricingDetail: { free: true, currency: "USD" },
    verificationStatus: "verified",
    lastVerified: new Date("2026-01-09"),
    lastUpdated: new Date("2026-01-09"),
    dataSource: "official",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-09"),
  },
  {
    id: "8",
    name: "Tabnine",
    slug: "tabnine",
    description: "AI code assistant with enterprise-grade privacy",
    shortDescription: "Enterprise AI assistant",
    websiteUrl: "https://tabnine.com",
    logoUrl: "/logos/tabnine.svg",
    category: "code-completion",
    pricing: "freemium",
    hasFreeTier: true,
    hasApi: false,
    isOpenSource: false,
    isLocal: false,
    platforms: ["vscode", "jetbrains", "neovim"],
    capabilities: ["code-completion", "chat", "code-review"],
    scores: { easeOfUse: 82, features: 80, pricing: 70, documentation: 80, community: 75, overall: 77 },
    pricingDetail: { free: true, starter: 12, pro: 25, currency: "USD" },
    verificationStatus: "verified",
    lastVerified: new Date("2026-01-08"),
    lastUpdated: new Date("2026-01-08"),
    dataSource: "official",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-08"),
  },
  {
    id: "9",
    name: "Cline",
    slug: "cline",
    description: "Autonomous coding agent for VS Code",
    shortDescription: "Autonomous coding agent",
    websiteUrl: "https://cline.bot",
    logoUrl: "/logos/cline.svg",
    category: "agent",
    pricing: "free",
    hasFreeTier: true,
    hasApi: false,
    isOpenSource: true,
    isLocal: false,
    platforms: ["vscode"],
    capabilities: ["agent", "code-editing", "terminal", "browser"],
    scores: { easeOfUse: 75, features: 88, pricing: 100, documentation: 70, community: 88, overall: 84 },
    pricingDetail: { free: true, currency: "USD" },
    verificationStatus: "verified",
    lastVerified: new Date("2026-01-16"),
    lastUpdated: new Date("2026-01-16"),
    dataSource: "official",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-16"),
  },
];

export async function getTools(filters?: ToolFilters): Promise<ToolWithScores[]> {
  let results = [...mockTools];

  if (filters) {
    if (filters.category) {
      results = results.filter((t) => t.category === filters.category);
    }
    if (filters.pricing) {
      results = results.filter((t) => t.pricing === filters.pricing);
    }
    if (filters.platform) {
      results = results.filter((t) => t.platforms.includes(filters.platform!));
    }
    if (filters.openSource !== undefined) {
      results = results.filter((t) => t.isOpenSource === filters.openSource);
    }
    if (filters.local !== undefined) {
      results = results.filter((t) => t.isLocal === filters.local);
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      results = results.filter(
        (t) => t.name.toLowerCase().includes(q) || t.description?.toLowerCase().includes(q)
      );
    }
  }

  return results;
}

export async function getToolBySlug(slug: string): Promise<ToolWithScores | null> {
  return mockTools.find((t) => t.slug === slug) || null;
}

export async function getToolCategories() {
  const categories = new Map<string, number>();
  mockTools.forEach((t) => {
    categories.set(t.category || "other", (categories.get(t.category || "other") || 0) + 1);
  });
  return Array.from(categories.entries()).map(([slug, count]) => ({
    slug,
    name: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    count,
  }));
}

export async function getFeaturedTools(): Promise<ToolWithScores[]> {
  return mockTools.filter((t) => (t.scores.overall || 0) >= 83).slice(0, 6);
}
