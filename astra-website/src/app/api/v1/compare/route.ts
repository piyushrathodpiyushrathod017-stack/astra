import { NextResponse } from "next/server";

const mockComparisons = [
  { id: "1", title: "GPT-4 vs Claude 3.5 Sonnet", slug: "gpt-4-vs-claude", category: "Chat Models", popularity: "Most Popular" },
  { id: "2", title: "Midjourney vs DALL-E 3", slug: "midjourney-vs-dall-e", category: "Image Generation", popularity: "Popular" },
  { id: "3", title: "Copilot vs Cursor", slug: "copilot-vs-cursor", category: "AI Coding", popularity: "Trending" },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  let filtered = [...mockComparisons];
  if (category) filtered = filtered.filter((c) => c.category.toLowerCase() === category.toLowerCase());
  return NextResponse.json({ data: filtered, pagination: { page: 1, limit: 20, total: filtered.length, totalPages: 1 } });
}
