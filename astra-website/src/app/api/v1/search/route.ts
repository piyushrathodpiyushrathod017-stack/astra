import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") || "";
  const type = searchParams.get("type") || "all";

  const mockResults = [
    { id: "1", entityType: "tool", name: "ChatGPT", slug: "chatgpt", description: "OpenAI's conversational AI assistant." },
    { id: "2", entityType: "tool", name: "Claude", slug: "claude", description: "Anthropic's helpful AI." },
    { id: "3", entityType: "model", name: "GPT-4o", slug: "gpt-4o", description: "Most capable OpenAI model." },
  ].filter((r) => {
    if (q && !r.name.toLowerCase().includes(q.toLowerCase())) return false;
    if (type !== "all" && r.entityType !== type) return false;
    return true;
  });

  return NextResponse.json({ data: mockResults, query: q, total: mockResults.length });
}
