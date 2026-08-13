// UNUSED: This file is not imported anywhere in the codebase.
// API routes define their own inline mock data instead.
// Consider importing from @/lib/mock-data.ts or removing this file.

import type { SearchResult } from "@/types";

const allSearchableItems: SearchResult[] = [
  { id: "1", type: "tool", title: "Cursor", description: "AI-first code editor built on VS Code", slug: "cursor", url: "/tools/cursor" },
  { id: "2", type: "tool", title: "GitHub Copilot", description: "AI pair programmer by GitHub", slug: "github-copilot", url: "/tools/github-copilot" },
  { id: "3", type: "tool", title: "Windsurf", description: "AI-powered IDE with deep codebase understanding", slug: "windsurf", url: "/tools/windsurf" },
  { id: "4", type: "tool", title: "Ollama", description: "Run LLMs locally with simple CLI", slug: "ollama", url: "/tools/ollama" },
  { id: "5", type: "tool", title: "LM Studio", description: "Desktop app for local LLMs", slug: "lm-studio", url: "/tools/lm-studio" },
  { id: "6", type: "tool", title: "Continue", description: "Open-source AI code assistant", slug: "continue", url: "/tools/continue" },
  { id: "7", type: "tool", title: "Aider", description: "AI pair programming in your terminal", slug: "aider", url: "/tools/aider" },
  { id: "8", type: "tool", title: "Tabnine", description: "AI code assistant with enterprise privacy", slug: "tabnine", url: "/tools/tabnine" },
  { id: "9", type: "tool", title: "Cline", description: "Autonomous coding agent for VS Code", slug: "cline", url: "/tools/cline" },
  { id: "10", type: "model", title: "GPT-4o", description: "Most capable multimodal model from OpenAI", slug: "gpt-4o", url: "/models/gpt-4o" },
  { id: "11", type: "model", title: "Claude 3.5 Sonnet", description: "Best balance of intelligence and speed", slug: "claude-3.5-sonnet", url: "/models/claude-3.5-sonnet" },
  { id: "12", type: "model", title: "Gemini 2.0 Flash", description: "Fast and efficient multimodal model", slug: "gemini-2.0-flash", url: "/models/gemini-2.0-flash" },
  { id: "13", type: "model", title: "Llama 3.1 405B", description: "Largest open-weight model", slug: "llama-3.1-405b", url: "/models/llama-3.1-405b" },
  { id: "14", type: "model", title: "DeepSeek-R1", description: "Strong reasoning at competitive pricing", slug: "deepseek-r1", url: "/models/deepseek-r1" },
  { id: "15", type: "model", title: "Mistral Large 2", description: "European frontier model", slug: "mistral-large-2", url: "/models/mistral-large-2" },
  { id: "16", type: "model", title: "Qwen 2.5 72B", description: "Strong open model with code abilities", slug: "qwen-2.5-72b", url: "/models/qwen-2.5-72b" },
  { id: "17", type: "model", title: "Phi-4", description: "Small but powerful for local deployment", slug: "phi-4", url: "/models/phi-4" },
  { id: "18", type: "model", title: "Grok-2", description: "Real-time knowledge model from xAI", slug: "grok-2", url: "/models/grok-2" },
  { id: "19", type: "comparison", title: "Cursor vs GitHub Copilot", description: "Two leading AI code editors compared", slug: "cursor-vs-github-copilot", url: "/compare/cursor-vs-github-copilot" },
  { id: "20", type: "comparison", title: "GPT-4o vs Claude 3.5 Sonnet", description: "The two most capable AI models", slug: "gpt-4o-vs-claude-3.5-sonnet", url: "/compare/gpt-4o-vs-claude-3.5-sonnet" },
  { id: "21", type: "comparison", title: "Ollama vs LM Studio", description: "Local AI tools compared", slug: "ollama-vs-lm-studio", url: "/compare/ollama-vs-lm-studio" },
  { id: "22", type: "article", title: "Getting Started with Local AI", description: "How to run AI models on your own hardware", slug: "getting-started-local-ai", url: "/knowledge/getting-started-local-ai" },
  { id: "23", type: "article", title: "Understanding AI Model Pricing", description: "A comprehensive guide to AI model costs", slug: "understanding-ai-pricing", url: "/knowledge/understanding-ai-pricing" },
  { id: "24", type: "article", title: "Building AI Agents with ASTRA", description: "Create custom AI agents using ASTRA", slug: "building-ai-agents", url: "/blog/building-ai-agents" },
];

export async function search(query: string, limit = 20): Promise<SearchResult[]> {
  if (!query.trim()) return [];

  const q = query.toLowerCase();
  return allSearchableItems
    .filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    )
    .slice(0, limit);
}

export async function getSuggestions(query: string, limit = 5): Promise<SearchResult[]> {
  if (!query.trim() || query.length < 2) return [];

  const q = query.toLowerCase();
  return allSearchableItems
    .filter(
      (item) =>
        item.title.toLowerCase().startsWith(q) ||
        item.title.toLowerCase().includes(q)
    )
    .sort((a, b) => {
      const aStarts = a.title.toLowerCase().startsWith(q) ? 0 : 1;
      const bStarts = b.title.toLowerCase().startsWith(q) ? 0 : 1;
      return aStarts - bStarts;
    })
    .slice(0, limit);
}

export async function searchByType(
  query: string,
  type: SearchResult["type"],
  limit = 20
): Promise<SearchResult[]> {
  const results = await search(query, limit * 2);
  return results.filter((r) => r.type === type).slice(0, limit);
}

export function groupByType(results: SearchResult[]) {
  const grouped: Record<string, SearchResult[]> = {
    tool: [],
    model: [],
    article: [],
    comparison: [],
    knowledge: [],
  };

  results.forEach((r) => {
    if (grouped[r.type]) {
      grouped[r.type].push(r);
    }
  });

  return grouped;
}
