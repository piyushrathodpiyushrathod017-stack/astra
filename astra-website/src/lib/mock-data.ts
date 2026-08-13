export interface MockTool {
  id: string;
  name: string;
  slug: string;
  category: string;
  rating: string;
  description: string;
  website: string;
  pricing: string;
  features: string[];
  platforms: string[];
  hasFreeTier: boolean;
  hasApi: boolean;
  isOpenSource: boolean;
  isLocal: boolean;
}

export interface MockModel {
  id: string;
  name: string;
  slug: string;
  provider: string;
  type: string;
  parameters: string;
  description: string;
  contextWindow: string;
  pricing: string;
  benchmarks: { name: string; score: string }[];
}

export interface MockComparison {
  id: string;
  title: string;
  slug: string;
  category: string;
  popularity: string;
  summary: string;
  entityA: string;
  entityB: string;
  scores: Record<string, { a: number; b: number }>;
}

export interface MockArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  category: string;
  readTime: number;
  author: string;
  date: string;
}

export const tools: MockTool[] = [
  { id: "1", name: "ChatGPT", slug: "chatgpt", category: "Chat", rating: "4.8", description: "OpenAI's conversational AI assistant powered by GPT-4o and GPT-4 models.", website: "https://chat.openai.com", pricing: "Free / $20/mo Plus", features: ["Text Generation", "Code Generation", "Image Analysis", "File Upload", "Web Browsing", "Plugins"], platforms: ["Web", "iOS", "Android", "Desktop"], hasFreeTier: true, hasApi: true, isOpenSource: false, isLocal: false },
  { id: "2", name: "Claude", slug: "claude", category: "Chat", rating: "4.7", description: "Anthropic's helpful, harmless, and honest AI assistant.", website: "https://claude.ai", pricing: "Free / $20/mo Pro", features: ["Text Generation", "Code Generation", "Image Analysis", "File Upload", "Long Context"], platforms: ["Web", "iOS", "Android"], hasFreeTier: true, hasApi: true, isOpenSource: false, isLocal: false },
  { id: "3", name: "Midjourney", slug: "midjourney", category: "Image", rating: "4.7", description: "AI image generation from text prompts, known for artistic quality.", website: "https://midjourney.com", pricing: "$10/mo Basic", features: ["Text to Image", "Image to Image", "Style Transfer", "Upscaling", "Inpainting"], platforms: ["Web", "Discord"], hasFreeTier: false, hasApi: false, isOpenSource: false, isLocal: false },
  { id: "4", name: "GitHub Copilot", slug: "github-copilot", category: "Coding", rating: "4.6", description: "AI pair programmer that suggests code completions and entire functions.", website: "https://github.com/features/copilot", pricing: "$10/mo Individual", features: ["Code Completion", "Code Generation", "Chat", "CLI", "Docs Chat"], platforms: ["VS Code", "JetBrains", "Neovim", "Xcode"], hasFreeTier: false, hasApi: false, isOpenSource: false, isLocal: false },
  { id: "5", name: "Cursor", slug: "cursor", category: "Coding", rating: "4.7", description: "AI-first code editor built on VS Code with advanced AI capabilities.", website: "https://cursor.sh", pricing: "Free / $20/mo Pro", features: ["Code Completion", "Code Generation", "Chat", "Composer", "Multi-file Editing"], platforms: ["Desktop"], hasFreeTier: true, hasApi: false, isOpenSource: false, isLocal: false },
  { id: "6", name: "Perplexity", slug: "perplexity", category: "Search", rating: "4.6", description: "AI-powered search engine with citations and real-time answers.", website: "https://perplexity.ai", pricing: "Free / $20/mo Pro", features: ["AI Search", "Citations", "Pro Search", "File Upload", "Collections"], platforms: ["Web", "iOS", "Android"], hasFreeTier: true, hasApi: true, isOpenSource: false, isLocal: false },
  { id: "7", name: "Ollama", slug: "ollama", category: "Local AI", rating: "4.8", description: "Run large language models locally with easy setup.", website: "https://ollama.com", pricing: "Free", features: ["Local Inference", "Model Library", "API Server", "GPU Support"], platforms: ["macOS", "Linux", "Windows"], hasFreeTier: true, hasApi: true, isOpenSource: true, isLocal: true },
  { id: "8", name: "LM Studio", slug: "lm-studio", category: "Local AI", rating: "4.7", description: "Discover, download, and run local LLMs.", website: "https://lmstudio.ai", pricing: "Free", features: ["Model Discovery", "Local Inference", "API Server", "Chat UI"], platforms: ["macOS", "Linux", "Windows"], hasFreeTier: true, hasApi: true, isOpenSource: false, isLocal: true },
  { id: "9", name: "Runway", slug: "runway", category: "Video", rating: "4.4", description: "AI video generation and editing platform.", website: "https://runway.com", pricing: "$12/mo Standard", features: ["Text to Video", "Image to Video", "Video Editing", "Gen-3 Alpha"], platforms: ["Web"], hasFreeTier: false, hasApi: true, isOpenSource: false, isLocal: false },
  { id: "10", name: "ElevenLabs", slug: "elevenlabs", category: "Audio", rating: "4.5", description: "AI voice synthesis and cloning platform.", website: "https://elevenlabs.io", pricing: "Free / $5/mo Starter", features: ["Text to Speech", "Voice Cloning", "Voice Library", "API"], platforms: ["Web", "API"], hasFreeTier: true, hasApi: true, isOpenSource: false, isLocal: false },
  { id: "11", name: "Notion AI", slug: "notion-ai", category: "Productivity", rating: "4.3", description: "AI-powered workspace assistant for notes, docs, and project management.", website: "https://notion.so", pricing: "$10/mo add-on", features: ["Writing Assistant", "Summarization", "Translation", "Q&A"], platforms: ["Web", "iOS", "Android", "Desktop"], hasFreeTier: false, hasApi: false, isOpenSource: false, isLocal: false },
];

export const models: MockModel[] = [
  { id: "1", name: "GPT-4o", slug: "gpt-4o", provider: "OpenAI", type: "Chat", parameters: "Unknown", description: "Most capable OpenAI model for complex tasks with multimodal support.", contextWindow: "128K tokens", pricing: "$5/1M input, $15/1M output", benchmarks: [{ name: "MMLU", score: "88.7%" }, { name: "HumanEval", score: "90.2%" }, { name: "MATH", score: "76.6%" }] },
  { id: "2", name: "Claude 3.5 Sonnet", slug: "claude-3.5-sonnet", provider: "Anthropic", type: "Chat", parameters: "Unknown", description: "Balanced performance and speed from Anthropic with 200K context.", contextWindow: "200K tokens", pricing: "$3/1M input, $15/1M output", benchmarks: [{ name: "MMLU", score: "88.7%" }, { name: "HumanEval", score: "92.0%" }, { name: "MATH", score: "71.1%" }] },
  { id: "3", name: "Gemini 2.0 Flash", slug: "gemini-2.0-flash", provider: "Google", type: "Chat", parameters: "Unknown", description: "Google's fast and capable multimodal model.", contextWindow: "1M tokens", pricing: "$0.10/1M input, $0.40/1M output", benchmarks: [{ name: "MMLU", score: "85.1%" }, { name: "HumanEval", score: "84.1%" }, { name: "MATH", score: "67.7%" }] },
  { id: "4", name: "Llama 3.1 405B", slug: "llama-3.1-405b", provider: "Meta", type: "Open Source", parameters: "405B", description: "Meta's largest open-source language model.", contextWindow: "128K tokens", pricing: "Free (open source)", benchmarks: [{ name: "MMLU", score: "87.3%" }, { name: "HumanEval", score: "89.0%" }, { name: "MATH", score: "73.8%" }] },
  { id: "5", name: "Mistral Large 2", slug: "mistral-large-2", provider: "Mistral", type: "Chat", parameters: "Unknown", description: "High-performance model from Mistral AI.", contextWindow: "128K tokens", pricing: "$2/1M input, $6/1M output", benchmarks: [{ name: "MMLU", score: "84.0%" }, { name: "HumanEval", score: "85.0%" }, { name: "MATH", score: "69.9%" }] },
  { id: "6", name: "DeepSeek-R1", slug: "deepseek-r1", provider: "DeepSeek", type: "Reasoning", parameters: "671B", description: "Advanced reasoning model with chain-of-thought.", contextWindow: "128K tokens", pricing: "$0.55/1M input, $2.19/1M output", benchmarks: [{ name: "MMLU", score: "90.8%" }, { name: "HumanEval", score: "92.0%" }, { name: "MATH", score: "97.3%" }] },
];

export const comparisons: MockComparison[] = [
  { id: "1", title: "GPT-4o vs Claude 3.5 Sonnet", slug: "gpt-4o-vs-claude-3.5-sonnet", category: "Chat Models", popularity: "Most Popular", summary: "Two leading AI models compared across reasoning, coding, and creative tasks.", entityA: "GPT-4o", entityB: "Claude 3.5 Sonnet", scores: { reasoning: { a: 90, b: 92 }, coding: { a: 88, b: 90 }, creativity: { a: 85, b: 88 }, speed: { a: 80, b: 85 }, context: { a: 75, b: 95 } } },
  { id: "2", title: "Cursor vs GitHub Copilot", slug: "cursor-vs-github-copilot", category: "AI Coding", popularity: "Trending", summary: "AI coding tools compared for developer productivity.", entityA: "Cursor", entityB: "GitHub Copilot", scores: { "code completion": { a: 92, b: 88 }, "code generation": { a: 90, b: 85 }, "chat": { a: 88, b: 82 }, "multi-file": { a: 95, b: 70 }, "price": { a: 75, b: 85 } } },
  { id: "3", title: "Ollama vs LM Studio", slug: "ollama-vs-lm-studio", category: "Local AI", popularity: "Popular", summary: "Local AI runtimes compared for ease of use and features.", entityA: "Ollama", entityB: "LM Studio", scores: { "ease of use": { a: 90, b: 88 }, "model library": { a: 85, b: 90 }, "performance": { a: 88, b: 85 }, "api": { a: 92, b: 80 }, "gui": { a: 60, b: 95 } } },
  { id: "4", title: "GPT-4o vs Gemini 2.0 Flash", slug: "gpt-4o-vs-gemini-2.0-flash", category: "Chat Models", popularity: "New", summary: "OpenAI's flagship vs Google's fastest model.", entityA: "GPT-4o", entityB: "Gemini 2.0 Flash", scores: { reasoning: { a: 90, b: 82 }, coding: { a: 88, b: 80 }, speed: { a: 75, b: 95 }, context: { a: 75, b: 95 }, price: { a: 60, b: 95 } } },
  { id: "5", title: "Midjourney vs DALL-E 3", slug: "midjourney-vs-dall-e-3", category: "Image Generation", popularity: "Popular", summary: "Top AI image generators compared.", entityA: "Midjourney", entityB: "DALL-E 3", scores: { "image quality": { a: 95, b: 85 }, "prompt adherence": { a: 80, b: 90 }, "style": { a: 92, b: 75 }, "speed": { a: 70, b: 85 }, "price": { a: 80, b: 85 } } },
];

export const articles: MockArticle[] = [
  { id: "1", title: "Getting Started with Local AI", slug: "getting-started-local-ai", excerpt: "Learn how to run AI models on your own hardware with Ollama and LM Studio.", content: ["Running AI models locally gives you privacy, offline access, and no API costs. In this guide, we'll walk through setting up your first local AI environment.", "First, you'll need to choose a runtime. Ollama is the most popular option for command-line users, while LM Studio provides a friendly GUI.", "Once installed, you can download models from their libraries. Start with smaller models like Llama 3.1 8B for testing, then scale up as your hardware allows."], category: "Tutorial", readTime: 8, author: "ASTRA Team", date: "2026-01-15" },
  { id: "2", title: "Understanding AI Model Pricing", slug: "understanding-ai-model-pricing", excerpt: "A comprehensive guide to AI model costs and how to optimize your spending.", content: ["AI model pricing can be confusing. Models are typically priced per million tokens for input and output separately.", "Context window size affects pricing — longer conversations cost more. Consider using smaller models for simple tasks.", "Batch processing and caching can significantly reduce costs. Many providers offer discounts for high-volume usage."], category: "Guide", readTime: 10, author: "ASTRA Team", date: "2026-01-20" },
  { id: "3", title: "Top 10 AI Coding Tools in 2026", slug: "top-10-ai-coding-tools-2026", excerpt: "The best AI-powered tools for developers this year.", content: ["AI coding tools have evolved dramatically. GitHub Copilot, Cursor, and Windsurf lead the market.", "Key features to consider: code completion accuracy, multi-file editing, chat assistance, and IDE integration.", "Open-source options like Continue and Cline are gaining traction for their customization and local-first approach."], category: "Review", readTime: 12, author: "ASTRA Team", date: "2026-02-01" },
  { id: "4", title: "Building AI Agents: A Practical Guide", slug: "building-ai-agents", excerpt: "How to build autonomous AI agents that can complete complex tasks.", content: ["AI agents combine language models with tools and memory to autonomously complete tasks.", "Start with a simple ReAct pattern: Reason, Act, Observe. This loop allows the agent to iteratively solve problems.", "Memory is crucial — use vector databases for long-term memory and conversation history for short-term context."], category: "Tutorial", readTime: 15, author: "ASTRA Team", date: "2026-02-10" },
];

export function getToolBySlug(slug: string): MockTool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getModelBySlug(slug: string): MockModel | undefined {
  return models.find((m) => m.slug === slug);
}

export function getComparisonBySlug(slug: string): MockComparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getArticleBySlug(slug: string): MockArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function filterTools(params: { category?: string; search?: string; page?: number; limit?: number }) {
  const { category, search, page = 1, limit = 20 } = params;
  let filtered = [...tools];
  if (category) filtered = filtered.filter((t) => t.category.toLowerCase() === category.toLowerCase());
  if (search) filtered = filtered.filter((t) => t.name.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase()));
  const start = (page - 1) * limit;
  return { data: filtered.slice(start, start + limit), pagination: { page, limit, total: filtered.length, totalPages: Math.ceil(filtered.length / limit) } };
}

export function filterModels(params: { provider?: string; type?: string; page?: number; limit?: number }) {
  const { provider, type, page = 1, limit = 20 } = params;
  let filtered = [...models];
  if (provider) filtered = filtered.filter((m) => m.provider.toLowerCase() === provider.toLowerCase());
  if (type) filtered = filtered.filter((m) => m.type.toLowerCase() === type.toLowerCase());
  const start = (page - 1) * limit;
  return { data: filtered.slice(start, start + limit), pagination: { page, limit, total: filtered.length, totalPages: Math.ceil(filtered.length / limit) } };
}

export function filterComparisons(params: { category?: string; page?: number; limit?: number }) {
  const { category, page = 1, limit = 20 } = params;
  let filtered = [...comparisons];
  if (category) filtered = filtered.filter((c) => c.category.toLowerCase() === category.toLowerCase());
  const start = (page - 1) * limit;
  return { data: filtered.slice(start, start + limit), pagination: { page, limit, total: filtered.length, totalPages: Math.ceil(filtered.length / limit) } };
}

export function filterArticles(params: { category?: string; page?: number; limit?: number }) {
  const { category, page = 1, limit = 20 } = params;
  let filtered = [...articles];
  if (category) filtered = filtered.filter((a) => a.category.toLowerCase() === category.toLowerCase());
  const start = (page - 1) * limit;
  return { data: filtered.slice(start, start + limit), pagination: { page, limit, total: filtered.length, totalPages: Math.ceil(filtered.length / limit) } };
}

export function searchAll(query: string, type?: string) {
  const q = query.toLowerCase();
  const results: Array<{ id: string; entityType: string; name: string; slug: string; description: string }> = [];
  if (!type || type === "tool") tools.filter((t) => t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)).forEach((t) => results.push({ id: t.id, entityType: "tool", name: t.name, slug: t.slug, description: t.description }));
  if (!type || type === "model") models.filter((m) => m.name.toLowerCase().includes(q) || m.description.toLowerCase().includes(q)).forEach((m) => results.push({ id: m.id, entityType: "model", name: m.name, slug: m.slug, description: m.description }));
  if (!type || type === "comparison") comparisons.filter((c) => c.title.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q)).forEach((c) => results.push({ id: c.id, entityType: "comparison", name: c.title, slug: c.slug, description: c.summary }));
  if (!type || type === "article") articles.filter((a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)).forEach((a) => results.push({ id: a.id, entityType: "article", name: a.title, slug: a.slug, description: a.excerpt }));
  return results;
}
