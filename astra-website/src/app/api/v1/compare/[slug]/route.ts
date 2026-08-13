import { NextResponse } from "next/server";
import { getComparisonBySlug } from "@/lib/mock-data";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) return NextResponse.json({ error: "Comparison not found" }, { status: 404 });
  return NextResponse.json({ data: comparison });
}
