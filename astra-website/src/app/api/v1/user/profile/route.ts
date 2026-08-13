import { NextResponse } from "next/server";

const mockProfile = {
  id: "1",
  name: "Test User",
  email: "test@astra.ai",
  image: null,
  createdAt: "2026-01-01",
};

export async function GET() {
  return NextResponse.json({ data: mockProfile });
}
