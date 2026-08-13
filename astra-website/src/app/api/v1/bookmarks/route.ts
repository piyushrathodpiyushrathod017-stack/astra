import { NextResponse } from "next/server";

const mockBookmarks = [
  { id: "1", entityType: "tool", entityId: "1", entityName: "ChatGPT", createdAt: "2026-01-15" },
  { id: "2", entityType: "model", entityId: "2", entityName: "Claude 3.5 Sonnet", createdAt: "2026-01-16" },
];

export async function GET() {
  return NextResponse.json({ data: mockBookmarks });
}

export async function POST(request: Request) {
  const body = await request.json();
  const newBookmark = { id: String(Date.now()), ...body, createdAt: new Date().toISOString() };
  return NextResponse.json({ data: newBookmark }, { status: 201 });
}
