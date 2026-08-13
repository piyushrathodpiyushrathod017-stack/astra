import { NextResponse } from "next/server";

const mockArticles: Record<string, { id: string; title: string; slug: string; content: string; category: string; readTime: number }> = {
  "getting-started-local-ai": { id: "1", title: "Getting Started with Local AI", slug: "getting-started-local-ai", content: "# Getting Started with Local AI\n\nLearn how to run AI models on your own hardware...", category: "Tutorial", readTime: 8 },
};

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = mockArticles[slug];
  if (!article) return NextResponse.json({ error: "Article not found" }, { status: 404 });
  return NextResponse.json({ data: article });
}
