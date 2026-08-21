import { NextResponse } from "next/server";
import { searchAll } from "@/lib/mock-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") || "";
  const type = searchParams.get("type") || "all";

  const results = searchAll(q, type === "all" ? undefined : type);

  return NextResponse.json({ data: results, query: q, total: results.length });
}
