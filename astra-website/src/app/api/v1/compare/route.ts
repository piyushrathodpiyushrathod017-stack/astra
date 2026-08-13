import { NextResponse } from "next/server";
import { filterComparisons } from "@/lib/mock-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || undefined;
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");

  const result = filterComparisons({ category, page, limit });

  return NextResponse.json(result);
}
