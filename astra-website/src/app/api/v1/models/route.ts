import { NextResponse } from "next/server";
import { filterModels } from "@/lib/mock-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const provider = searchParams.get("provider") || undefined;
  const type = searchParams.get("type") || undefined;
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");

  const result = filterModels({ provider, type, page, limit });

  return NextResponse.json(result);
}
