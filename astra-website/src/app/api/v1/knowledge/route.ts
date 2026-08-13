import { NextResponse } from "next/server";

const mockTopics = [
  { id: "1", name: "AI Fundamentals", slug: "ai-fundamentals", description: "Core concepts of artificial intelligence.", articleCount: 12 },
  { id: "2", name: "Machine Learning", slug: "machine-learning", description: "ML algorithms and techniques.", articleCount: 15 },
  { id: "3", name: "Natural Language Processing", slug: "nlp", description: "Text and language AI.", articleCount: 8 },
  { id: "4", name: "Computer Vision", slug: "computer-vision", description: "Image and video AI.", articleCount: 6 },
];

export async function GET() {
  return NextResponse.json({ data: mockTopics });
}
