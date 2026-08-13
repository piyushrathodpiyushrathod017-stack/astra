import { NextResponse } from "next/server";

const mockModels: Record<string, { id: string; name: string; slug: string; provider: string; type: string; description: string; contextWindow: string; benchmarks: { name: string; score: string }[] }> = {
  "gpt-4o": { id: "1", name: "GPT-4o", slug: "gpt-4o", provider: "OpenAI", type: "Chat", description: "Most capable OpenAI model.", contextWindow: "128K", benchmarks: [{ name: "MMLU", score: "88.7%" }, { name: "HumanEval", score: "90.2%" }] },
  "claude-3.5-sonnet": { id: "2", name: "Claude 3.5 Sonnet", slug: "claude-3.5-sonnet", provider: "Anthropic", type: "Chat", description: "Balanced performance and speed.", contextWindow: "200K", benchmarks: [{ name: "MMLU", score: "88.7%" }, { name: "HumanEval", score: "92.0%" }] },
};

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const model = mockModels[slug];
  if (!model) return NextResponse.json({ error: "Model not found" }, { status: 404 });
  return NextResponse.json({ data: model });
}
