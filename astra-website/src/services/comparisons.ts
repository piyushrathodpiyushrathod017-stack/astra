import type { Comparison, ComparisonWithScores, ComparisonFilters } from "@/types/comparison";

const mockComparisons: ComparisonWithScores[] = [
  {
    id: "1",
    title: "Cursor vs GitHub Copilot",
    slug: "cursor-vs-github-copilot",
    entityType: "tool",
    entityASlug: "cursor",
    entityBSlug: "github-copilot",
    entityAName: "Cursor",
    entityBName: "GitHub Copilot",
    summary: "Two leading AI code editors battle for developer mindshare",
    verdict: "Cursor excels at multi-file editing while Copilot offers broader IDE support",
    scores: [
      { criterion: "Ease of Use", scoreA: 85, scoreB: 80, weight: 20 },
      { criterion: "Features", scoreA: 90, scoreB: 85, weight: 25 },
      { criterion: "Pricing", scoreA: 75, scoreB: 70, weight: 15 },
      { criterion: "Code Quality", scoreA: 88, scoreB: 82, weight: 20 },
      { criterion: "Community", scoreA: 85, scoreB: 90, weight: 10 },
      { criterion: "Documentation", scoreA: 80, scoreB: 85, weight: 10 },
    ],
    strengthsA: ["Multi-file editing", "Codebase awareness", "Custom AI models"],
    strengthsB: ["IDE breadth", "GitHub integration", "Larger community"],
    weaknessesA: ["Limited IDE support", "Newer product", "Smaller community"],
    weaknessesB: ["Less context awareness", "Limited customization", "Monthly cost"],
    bestForA: ["Full-stack development", "Large codebases", "Power users"],
    bestForB: ["Multi-IDE users", "GitHub workflows", "Beginners"],
    methodology: "Based on hands-on testing and community surveys",
    lastVerified: new Date("2026-01-15"),
    lastUpdated: new Date("2026-01-15"),
    status: "published",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-15"),
  },
  {
    id: "2",
    title: "GPT-4o vs Claude 3.5 Sonnet",
    slug: "gpt-4o-vs-claude-3.5-sonnet",
    entityType: "model",
    entityASlug: "gpt-4o",
    entityBSlug: "claude-3.5-sonnet",
    entityAName: "GPT-4o",
    entityBName: "Claude 3.5 Sonnet",
    summary: "The two most capable general-purpose AI models compared",
    verdict: "GPT-4o leads in multimodal capabilities while Claude excels at long-form reasoning",
    scores: [
      { criterion: "Intelligence", scoreA: 95, scoreB: 93, weight: 30 },
      { criterion: "Speed", scoreA: 80, scoreB: 85, weight: 15 },
      { criterion: "Cost Efficiency", scoreA: 65, scoreB: 75, weight: 15 },
      { criterion: "Context Window", scoreA: 90, scoreB: 95, weight: 20 },
      { criterion: "Multimodal", scoreA: 95, scoreB: 85, weight: 20 },
    ],
    strengthsA: ["Multimodal support", "Speed", "API ecosystem"],
    strengthsB: ["Long context", "Instruction following", "Analysis"],
    weaknessesA: ["Higher pricing", "Shorter context", "Less consistent"],
    weaknessesB: ["No audio support", "Higher latency", "Limited ecosystem"],
    bestForA: ["Creative tasks", "Multimodal apps", "Real-time"],
    bestForB: ["Long documents", "Analysis", "Research"],
    methodology: "Based on benchmarks (MMLU, HumanEval) and real-world testing",
    lastVerified: new Date("2026-01-14"),
    lastUpdated: new Date("2026-01-14"),
    status: "published",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-14"),
  },
  {
    id: "3",
    title: "Ollama vs LM Studio",
    slug: "ollama-vs-lm-studio",
    entityType: "tool",
    entityASlug: "ollama",
    entityBSlug: "lm-studio",
    entityAName: "Ollama",
    entityBName: "LM Studio",
    summary: "The two best ways to run AI models locally on your machine",
    verdict: "Ollama is better for developers, LM Studio for GUI-focused users",
    scores: [
      { criterion: "Ease of Use", scoreA: 90, scoreB: 92, weight: 20 },
      { criterion: "Features", scoreA: 75, scoreB: 70, weight: 20 },
      { criterion: "Model Library", scoreA: 85, scoreB: 80, weight: 20 },
      { criterion: "API Support", scoreA: 90, scoreB: 75, weight: 15 },
      { criterion: "Performance", scoreA: 85, scoreB: 88, weight: 15 },
      { criterion: "Community", scoreA: 95, scoreB: 80, weight: 10 },
    ],
    strengthsA: ["CLI simplicity", "API compatibility", "Huge community"],
    strengthsB: ["Beautiful UI", "Model discovery", "Desktop experience"],
    weaknessesA: ["CLI-only", "Less polished UI", "Limited config"],
    weaknessesB: ["Desktop only", "Smaller community", "Closed source"],
    bestForA: ["Developers", "Server deployments", "API users"],
    bestForB: ["GUI users", "Model exploration", "Desktop users"],
    methodology: "Based on features, performance benchmarks, and community feedback",
    lastVerified: new Date("2026-01-13"),
    lastUpdated: new Date("2026-01-13"),
    status: "published",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-13"),
  },
  {
    id: "4",
    title: "Claude 3.5 Sonnet vs Gemini 2.0 Flash",
    slug: "claude-3.5-sonnet-vs-gemini-2.0-flash",
    entityType: "model",
    entityASlug: "claude-3.5-sonnet",
    entityBSlug: "gemini-2.0-flash",
    entityAName: "Claude 3.5 Sonnet",
    entityBName: "Gemini 2.0 Flash",
    summary: "Quality vs speed: two different approaches to AI",
    verdict: "Choose Claude for depth, Gemini for speed and cost efficiency",
    scores: [
      { criterion: "Intelligence", scoreA: 93, scoreB: 82, weight: 30 },
      { criterion: "Speed", scoreA: 85, scoreB: 95, weight: 20 },
      { criterion: "Cost Efficiency", scoreA: 75, scoreB: 90, weight: 20 },
      { criterion: "Context Window", scoreA: 95, scoreB: 100, weight: 15 },
      { criterion: "Multimodal", scoreA: 85, scoreB: 92, weight: 15 },
    ],
    strengthsA: ["Deep reasoning", "Long context", "Instruction following"],
    strengthsB: ["Blazing speed", "Massive context", "Low cost"],
    weaknessesA: ["Higher latency", "Higher cost", "Limited modalities"],
    weaknessesB: ["Less reasoning", "Google dependency", "Less consistent"],
    bestForA: ["Complex analysis", "Long documents", "Research"],
    bestForB: ["High-volume tasks", "Real-time apps", "Cost-sensitive"],
    methodology: "Based on benchmarks and production usage patterns",
    lastVerified: new Date("2026-01-12"),
    lastUpdated: new Date("2026-01-12"),
    status: "published",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-12"),
  },
  {
    id: "5",
    title: "Continue vs Cline",
    slug: "continue-vs-cline",
    entityType: "tool",
    entityASlug: "continue",
    entityBSlug: "cline",
    entityAName: "Continue",
    entityBName: "Cline",
    summary: "Open-source AI coding assistants for VS Code",
    verdict: "Continue for chat assistance, Cline for autonomous coding",
    scores: [
      { criterion: "Ease of Use", scoreA: 80, scoreB: 75, weight: 20 },
      { criterion: "Features", scoreA: 75, scoreB: 88, weight: 25 },
      { criterion: "Autonomy", scoreA: 40, scoreB: 95, weight: 20 },
      { criterion: "Customization", scoreA: 90, scoreB: 85, weight: 15 },
      { criterion: "Stability", scoreA: 90, scoreB: 70, weight: 10 },
      { criterion: "Community", scoreA: 85, scoreB: 88, weight: 10 },
    ],
    strengthsA: ["Stable", "Multi-IDE", "Customizable"],
    strengthsB: ["Fully autonomous", "Terminal access", "Browser control"],
    weaknessesA: ["Less autonomous", "Limited scope", "Manual workflow"],
    weaknessesB: ["VS Code only", "Can be unstable", "Token-heavy"],
    bestForA: ["Guided assistance", "JetBrains users", "Stability focus"],
    bestForB: ["Autonomous tasks", "Complex refactors", "Power users"],
    methodology: "Feature comparison and community surveys",
    lastVerified: new Date("2026-01-11"),
    lastUpdated: new Date("2026-01-11"),
    status: "published",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-11"),
  },
  {
    id: "6",
    title: "Llama 3.1 405B vs Qwen 2.5 72B",
    slug: "llama-3.1-405b-vs-qwen-2.5-72b",
    entityType: "model",
    entityASlug: "llama-3.1-405b",
    entityBSlug: "qwen-2.5-72b",
    entityAName: "Llama 3.1 405B",
    entityBName: "Qwen 2.5 72B",
    summary: "Open-weight giants: massive vs efficient",
    verdict: "Llama for maximum performance, Qwen for practical deployment",
    scores: [
      { criterion: "Intelligence", scoreA: 90, scoreB: 85, weight: 30 },
      { criterion: "Deployment Cost", scoreA: 40, scoreB: 85, weight: 20 },
      { criterion: "Speed", scoreA: 50, scoreB: 72, weight: 15 },
      { criterion: "Code Quality", scoreA: 85, scoreB: 88, weight: 20 },
      { criterion: "Multilingual", scoreA: 80, scoreB: 90, weight: 15 },
    ],
    strengthsA: ["Raw intelligence", "Frontier performance", "Versatility"],
    strengthsB: ["Efficient", "Deployable", "Great code skills"],
    weaknessesA: ["Requires massive GPU", "Slow inference", "Expensive"],
    weaknessesB: ["Less raw power", "Smaller community", "Fewer features"],
    bestForA: ["Maximum performance", "Research", "Unlimited budget"],
    bestForB: ["Production deployment", "Code generation", "Cost-conscious"],
    methodology: "Benchmark comparisons and deployment analysis",
    lastVerified: new Date("2026-01-10"),
    lastUpdated: new Date("2026-01-10"),
    status: "published",
    createdAt: new Date("2026-01-01"),
    updatedAt: new Date("2026-01-10"),
  },
];

export async function getComparisons(filters?: ComparisonFilters): Promise<ComparisonWithScores[]> {
  let results = [...mockComparisons];

  if (filters) {
    if (filters.entityType) {
      results = results.filter((c) => c.entityType === filters.entityType);
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      results = results.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.entityAName.toLowerCase().includes(q) ||
          c.entityBName.toLowerCase().includes(q)
      );
    }
  }

  return results;
}

export async function getComparisonBySlug(slug: string): Promise<ComparisonWithScores | null> {
  return mockComparisons.find((c) => c.slug === slug) || null;
}

export async function getFeaturedComparisons(): Promise<ComparisonWithScores[]> {
  return mockComparisons.slice(0, 4);
}
