import { NextResponse } from "next/server";

const mockTools = [
  { id: "1", name: "ChatGPT", slug: "chatgpt", category: "Chat", rating: 4.8, description: "OpenAI's conversational AI assistant." },
  { id: "2", name: "Claude", slug: "claude", category: "Chat", rating: 4.7, description: "Anthropic's helpful, harmless, and honest AI." },
  { id: "3", name: "Midjourney", slug: "midjourney", category: "Image", rating: 4.7, description: "AI image generation from text prompts." },
  { id: "4", name: "GitHub Copilot", slug: "github-copilot", category: "Coding", rating: 4.6, description: "AI pair programmer for code completion." },
  { id: "5", name: "Cursor", slug: "cursor", category: "Coding", rating: 4.7, description: "AI-first code editor built on VS Code." },
  { id: "6", name: "Perplexity", slug: "perplexity", category: "Search", rating: 4.6, description: "AI-powered search engine with citations." },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const search = searchParams.get("q");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");

  let filtered = [...mockTools];

  if (category) {
    filtered = filtered.filter((t) => t.category.toLowerCase() === category.toLowerCase());
  }
  if (search) {
    filtered = filtered.filter((t) => t.name.toLowerCase().includes(search.toLowerCase()));
  }

  const start = (page - 1) * limit;
  const items = filtered.slice(start, start + limit);

  return NextResponse.json({
    data: items,
    pagination: { page, limit, total: filtered.length, totalPages: Math.ceil(filtered.length / limit) },
  });
}
