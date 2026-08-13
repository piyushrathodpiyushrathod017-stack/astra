import { NextResponse } from "next/server";

const mockComparisons: Record<string, { id: string; title: string; slug: string; summary: string; scores: Record<string, { a: number; b: number }> }> = {
  "gpt-4-vs-claude": { id: "1", title: "GPT-4 vs Claude 3.5 Sonnet", slug: "gpt-4-vs-claude", summary: "Two leading AI models compared.", scores: { reasoning: { a: 90, b: 92 }, coding: { a: 88, b: 90 }, creativity: { a: 85, b: 88 } } },
};

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comparison = mockComparisons[slug];
  if (!comparison) return NextResponse.json({ error: "Comparison not found" }, { status: 404 });
  return NextResponse.json({ data: comparison });
}
