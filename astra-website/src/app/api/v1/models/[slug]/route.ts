import { NextResponse } from "next/server";
import { getModelBySlug } from "@/lib/mock-data";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const model = getModelBySlug(slug);
  if (!model) return NextResponse.json({ error: "Model not found" }, { status: 404 });
  return NextResponse.json({ data: model });
}
