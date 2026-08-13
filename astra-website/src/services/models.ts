// UNUSED: This file is not imported anywhere in the codebase.
// API routes define their own inline mock data instead.
// Consider importing from @/lib/mock-data.ts or removing this file.

import type { Model, ModelWithScores, ModelFilters } from "@/types/model";

const mockModels: ModelWithScores[] = [
  {
    id: "1",
    name: "GPT-4o",
    slug: "gpt-4o",
    provider: "OpenAI",
    providerSlug: "openai",
    modelFamily: "GPT-4",
    description: "Most capable multimodal model from OpenAI",
    contextWindow: 128000,
    inputModalities: ["text", "image", "audio"],
    outputModalities: ["text", "image"],
    hasReasoning: true,
    hasToolCalling: true,
    hasVision: true,
    hasApi: true,
    isLocal: false,
    license: "proprietary",
    parameters: "unknown",
    hardwareRequirements: null,
    scores: { intelligence: 95, speed: 80, costEfficiency: 65, contextWindow: 90, multimodal: 95, overall: 85 },
    pricing: null,
    pricingDetail: { input: 2.5, output: 10, currency: "USD" },
    verificationStatus: "verified",
    lastVerified: new Date("2026-01-15"),
    lastUpdated: new Date("2026-01-15"),
    dataSource: "official",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-15"),
  },
  {
    id: "2",
    name: "Claude 3.5 Sonnet",
    slug: "claude-3.5-sonnet",
    provider: "Anthropic",
    providerSlug: "anthropic",
    modelFamily: "Claude",
    description: "Best balance of intelligence and speed",
    contextWindow: 200000,
    inputModalities: ["text", "image"],
    outputModalities: ["text"],
    hasReasoning: true,
    hasToolCalling: true,
    hasVision: true,
    hasApi: true,
    isLocal: false,
    license: "proprietary",
    parameters: "unknown",
    hardwareRequirements: null,
    scores: { intelligence: 93, speed: 85, costEfficiency: 75, contextWindow: 95, multimodal: 85, overall: 87 },
    pricing: null,
    pricingDetail: { input: 3, output: 15, currency: "USD" },
    verificationStatus: "verified",
    lastVerified: new Date("2026-01-14"),
    lastUpdated: new Date("2026-01-14"),
    dataSource: "official",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-14"),
  },
  {
    id: "3",
    name: "Gemini 2.0 Flash",
    slug: "gemini-2.0-flash",
    provider: "Google",
    providerSlug: "google",
    modelFamily: "Gemini",
    description: "Fast and efficient multimodal model",
    contextWindow: 1000000,
    inputModalities: ["text", "image", "audio", "video"],
    outputModalities: ["text"],
    hasReasoning: false,
    hasToolCalling: true,
    hasVision: true,
    hasApi: true,
    isLocal: false,
    license: "proprietary",
    parameters: "unknown",
    hardwareRequirements: null,
    scores: { intelligence: 82, speed: 95, costEfficiency: 90, contextWindow: 100, multimodal: 92, overall: 92 },
    pricing: null,
    pricingDetail: { input: 0.1, output: 0.4, currency: "USD" },
    verificationStatus: "verified",
    lastVerified: new Date("2026-01-13"),
    lastUpdated: new Date("2026-01-13"),
    dataSource: "official",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-13"),
  },
  {
    id: "4",
    name: "Llama 3.1 405B",
    slug: "llama-3.1-405b",
    provider: "Meta",
    providerSlug: "meta",
    modelFamily: "Llama",
    description: "Largest open-weight model with frontier performance",
    contextWindow: 128000,
    inputModalities: ["text", "image"],
    outputModalities: ["text"],
    hasReasoning: true,
    hasToolCalling: true,
    hasVision: true,
    hasApi: false,
    isLocal: true,
    license: "llama",
    parameters: "405B",
    hardwareRequirements: null,
    scores: { intelligence: 90, speed: 50, costEfficiency: 85, contextWindow: 85, multimodal: 80, overall: 78 },
    pricing: null,
    verificationStatus: "verified",
    lastVerified: new Date("2026-01-12"),
    lastUpdated: new Date("2026-01-12"),
    dataSource: "official",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-12"),
  },
  {
    id: "5",
    name: "DeepSeek-R1",
    slug: "deepseek-r1",
    provider: "DeepSeek",
    providerSlug: "deepseek",
    modelFamily: "DeepSeek",
    description: "Strong reasoning model at competitive pricing",
    contextWindow: 64000,
    inputModalities: ["text"],
    outputModalities: ["text"],
    hasReasoning: true,
    hasToolCalling: false,
    hasVision: false,
    hasApi: true,
    isLocal: false,
    license: "open",
    parameters: "671B",
    hardwareRequirements: null,
    scores: { intelligence: 88, speed: 75, costEfficiency: 95, contextWindow: 70, multimodal: 40, overall: 74 },
    pricing: null,
    pricingDetail: { input: 0.55, output: 2.19, currency: "USD" },
    verificationStatus: "verified",
    lastVerified: new Date("2026-01-11"),
    lastUpdated: new Date("2026-01-11"),
    dataSource: "official",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-11"),
  },
  {
    id: "6",
    name: "Mistral Large 2",
    slug: "mistral-large-2",
    provider: "Mistral AI",
    providerSlug: "mistral",
    modelFamily: "Mistral",
    description: "European frontier model with multilingual strength",
    contextWindow: 128000,
    inputModalities: ["text"],
    outputModalities: ["text"],
    hasReasoning: true,
    hasToolCalling: true,
    hasVision: false,
    hasApi: true,
    isLocal: false,
    license: "proprietary",
    parameters: "unknown",
    hardwareRequirements: null,
    scores: { intelligence: 86, speed: 80, costEfficiency: 80, contextWindow: 85, multimodal: 30, overall: 72 },
    pricing: null,
    pricingDetail: { input: 2, output: 6, currency: "USD" },
    verificationStatus: "verified",
    lastVerified: new Date("2026-01-10"),
    lastUpdated: new Date("2026-01-10"),
    dataSource: "official",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-10"),
  },
  {
    id: "7",
    name: "Qwen 2.5 72B",
    slug: "qwen-2.5-72b",
    provider: "Alibaba",
    providerSlug: "alibaba",
    modelFamily: "Qwen",
    description: "Strong open model with excellent code abilities",
    contextWindow: 128000,
    inputModalities: ["text", "image"],
    outputModalities: ["text"],
    hasReasoning: true,
    hasToolCalling: true,
    hasVision: true,
    hasApi: true,
    isLocal: true,
    license: "apache-2.0",
    parameters: "72B",
    hardwareRequirements: null,
    scores: { intelligence: 85, speed: 72, costEfficiency: 88, contextWindow: 85, multimodal: 78, overall: 82 },
    pricing: null,
    verificationStatus: "verified",
    lastVerified: new Date("2026-01-09"),
    lastUpdated: new Date("2026-01-09"),
    dataSource: "official",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-09"),
  },
  {
    id: "8",
    name: "Phi-4",
    slug: "phi-4",
    provider: "Microsoft",
    providerSlug: "microsoft",
    modelFamily: "Phi",
    description: "Small but powerful model for local deployment",
    contextWindow: 16000,
    inputModalities: ["text"],
    outputModalities: ["text"],
    hasReasoning: false,
    hasToolCalling: false,
    hasVision: false,
    hasApi: false,
    isLocal: true,
    license: "mit",
    parameters: "14B",
    hardwareRequirements: null,
    scores: { intelligence: 70, speed: 95, costEfficiency: 100, contextWindow: 40, multimodal: 20, overall: 65 },
    pricing: null,
    verificationStatus: "verified",
    lastVerified: new Date("2026-01-08"),
    lastUpdated: new Date("2026-01-08"),
    dataSource: "official",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-08"),
  },
  {
    id: "9",
    name: "Grok-2",
    slug: "grok-2",
    provider: "xAI",
    providerSlug: "xai",
    modelFamily: "Grok",
    description: "Real-time knowledge model from xAI",
    contextWindow: 128000,
    inputModalities: ["text", "image"],
    outputModalities: ["text"],
    hasReasoning: true,
    hasToolCalling: true,
    hasVision: true,
    hasApi: true,
    isLocal: false,
    license: "proprietary",
    parameters: "unknown",
    hardwareRequirements: null,
    scores: { intelligence: 87, speed: 78, costEfficiency: 70, contextWindow: 85, multimodal: 82, overall: 80 },
    pricing: null,
    pricingDetail: { input: 3, output: 15, currency: "USD" },
    verificationStatus: "verified",
    lastVerified: new Date("2026-01-07"),
    lastUpdated: new Date("2026-01-07"),
    dataSource: "official",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-07"),
  },
];

export async function getModels(filters?: ModelFilters): Promise<ModelWithScores[]> {
  let results = [...mockModels];

  if (filters) {
    if (filters.provider) {
      results = results.filter((m) => m.providerSlug === filters.provider);
    }
    if (filters.family) {
      results = results.filter((m) => m.modelFamily?.toLowerCase() === filters.family);
    }
    if (filters.hasReasoning !== undefined) {
      results = results.filter((m) => m.hasReasoning === filters.hasReasoning);
    }
    if (filters.hasVision !== undefined) {
      results = results.filter((m) => m.hasVision === filters.hasVision);
    }
    if (filters.hasToolCalling !== undefined) {
      results = results.filter((m) => m.hasToolCalling === filters.hasToolCalling);
    }
    if (filters.isLocal !== undefined) {
      results = results.filter((m) => m.isLocal === filters.isLocal);
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      results = results.filter(
        (m) => m.name.toLowerCase().includes(q) || m.description?.toLowerCase().includes(q)
      );
    }
  }

  return results;
}

export async function getModelBySlug(slug: string): Promise<ModelWithScores | null> {
  return mockModels.find((m) => m.slug === slug) || null;
}

export async function getModelProviders() {
  const providers = new Map<string, { name: string; count: number }>();
  mockModels.forEach((m) => {
    const existing = providers.get(m.providerSlug);
    providers.set(m.providerSlug, {
      name: m.provider,
      count: (existing?.count || 0) + 1,
    });
  });
  return Array.from(providers.entries()).map(([slug, { name, count }]) => ({
    slug,
    name,
    count,
  }));
}

export async function getFeaturedModels(): Promise<ModelWithScores[]> {
  return mockModels.filter((m) => (m.scores.overall || 0) >= 85).slice(0, 4);
}
