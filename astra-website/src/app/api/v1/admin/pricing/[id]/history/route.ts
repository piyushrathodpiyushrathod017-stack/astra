import { NextResponse } from "next/server";

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await request.json();
  return NextResponse.json({ data: { id, ...body, createdAt: new Date().toISOString() } }, { status: 201 });
}
