import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: {
      profile: { name: "Test User", email: "test@astra.ai" },
      bookmarks: [],
      preferences: { theme: "system", language: "en" },
      exportedAt: new Date().toISOString(),
    },
  });
}
