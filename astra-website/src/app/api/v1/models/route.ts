import { NextResponse } from "next/server";

const mockModels = [
  { id: "1", name: "GPT-4o", slug: "gpt-4o", provider: "OpenAI", type: "Chat", description: "Most capable OpenAI model.", contextWindow: "128K" },
  { id: "2", name: "Claude 3.5 Sonnet", slug: "claude-3.5-sonnet", provider: "Anthropic", type: "Chat", description: "Balanced performance and speed.", contextWindow: "200K" },
  { id: "3", name: "Gemini 1.5 Pro", slug: "gemini-1.5-pro", provider: "Google", type: "Chat", description: "Google's most capable multimodal model.", contextWindow: "2M" },
  { id: "4", name: "Llama 3.1 405B", slug: "llama-3.1-405b", provider: "Meta", type: "Open Source", description: "Meta's largest open-source model.", contextWindow: "128K" },
  { id: "5", name: "Mistral Large", slug: "mistral-large", provider: "Mistral", type: "Chat", description: "High-performance model from Mistral AI.", contextWindow: "128K" },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const provider = searchParams.get("provider");
  const type = searchParams.get("type");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");

  let filtered = [...mockModels];
  if (provider) filtered = filtered.filter((m) => m.provider.toLowerCase() === provider.toLowerCase());
  if (type) filtered = filtered.filter((m) => m.type.toLowerCase() === type.toLowerCase());

  const start = (page - 1) * limit;
  const items = filtered.slice(start, start + limit);

  return NextResponse.json({
    data: items,
    pagination: { page, limit, total: filtered.length, totalPages: Math.ceil(filtered.length / limit) },
  });
}
