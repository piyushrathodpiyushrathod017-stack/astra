import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: { tools: [], models: [], articles: [] }, format: "json" });
}
