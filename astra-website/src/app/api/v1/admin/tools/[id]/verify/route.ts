import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ data: { id: String(Date.now()), ...body, createdAt: new Date().toISOString() } }, { status: 201 });
}
