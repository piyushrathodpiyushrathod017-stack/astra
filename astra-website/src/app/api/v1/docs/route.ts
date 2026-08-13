import { NextResponse } from "next/server";

const mockDocs = [
  { id: "1", title: "Getting Started", slug: "getting-started", description: "Quick start guide for ASTRA.", category: "Guide" },
  { id: "2", title: "API Reference", slug: "api", description: "Complete API documentation.", category: "Reference" },
  { id: "3", title: "Architecture", slug: "architecture", description: "System architecture overview.", category: "Guide" },
];

export async function GET() {
  return NextResponse.json({ data: mockDocs });
}
