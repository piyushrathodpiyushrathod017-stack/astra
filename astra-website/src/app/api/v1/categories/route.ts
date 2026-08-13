import { NextResponse } from "next/server";

const mockCategories = [
  { id: "1", name: "AI Coding", slug: "coding", description: "AI-powered code editors and dev tools.", toolCount: 120 },
  { id: "2", name: "Local AI", slug: "local-ai", description: "Run AI models locally.", toolCount: 80 },
  { id: "3", name: "AI APIs", slug: "apis", description: "Integrate AI into your apps.", toolCount: 50 },
  { id: "4", name: "AI Hardware", slug: "hardware", description: "Specialized AI hardware.", toolCount: 30 },
  { id: "5", name: "AI Utilities", slug: "utilities", description: "Productivity and creative AI tools.", toolCount: 100 },
  { id: "6", name: "AI Research", slug: "research", description: "Leading AI research labs.", toolCount: 40 },
];

export async function GET() {
  return NextResponse.json({ data: mockCategories });
}
