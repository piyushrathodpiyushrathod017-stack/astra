import { NextResponse } from "next/server";

const mockArticles = [
  { id: "1", title: "Getting Started with Local AI", slug: "getting-started-local-ai", excerpt: "Learn how to run AI models on your own hardware.", category: "Tutorial", readTime: 8 },
  { id: "2", title: "GPT-4 vs Claude: A Deep Dive", slug: "gpt-4-vs-claude-deep-dive", excerpt: "Comprehensive comparison of leading AI models.", category: "Comparison", readTime: 12 },
  { id: "3", title: "Best AI Coding Tools 2026", slug: "best-ai-coding-tools-2026", excerpt: "Top AI tools for developers this year.", category: "Guide", readTime: 10 },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  let filtered = [...mockArticles];
  if (category) filtered = filtered.filter((a) => a.category.toLowerCase() === category.toLowerCase());
  return NextResponse.json({ data: filtered, pagination: { page: 1, limit: 20, total: filtered.length, totalPages: 1 } });
}
