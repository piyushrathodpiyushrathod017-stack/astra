import { NextResponse } from "next/server";

const mockTools: Record<string, { id: string; name: string; slug: string; category: string; rating: string; description: string; website: string; pricing: string; features: string[] }> = {
  chatgpt: { id: "1", name: "ChatGPT", slug: "chatgpt", category: "Chat", rating: "4.8", description: "OpenAI's conversational AI assistant.", website: "https://chat.openai.com", pricing: "Free / $20/mo Plus", features: ["Text Generation", "Code Generation", "Image Analysis", "File Upload", "Web Browsing"] },
  claude: { id: "2", name: "Claude", slug: "claude", category: "Chat", rating: "4.7", description: "Anthropic's helpful, harmless, and honest AI.", website: "https://claude.ai", pricing: "Free / $20/mo Pro", features: ["Text Generation", "Code Generation", "Image Analysis", "File Upload", "Long Context"] },
  midjourney: { id: "3", name: "Midjourney", slug: "midjourney", category: "Image", rating: "4.7", description: "AI image generation from text prompts.", website: "https://midjourney.com", pricing: "$10/mo Basic", features: ["Text to Image", "Image to Image", "Style Transfer", "Upscaling"] },
};

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = mockTools[slug];

  if (!tool) {
    return NextResponse.json({ error: "Tool not found" }, { status: 404 });
  }

  return NextResponse.json({ data: tool });
}
