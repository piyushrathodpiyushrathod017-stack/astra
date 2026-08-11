import type { Metadata } from "next";
import Link from "next/link";
import type { Route } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { AstraLogo } from "@/components/shared/astra-logo";

export const metadata: Metadata = {
  title: "Sign In | ASTRA",
  description: "Sign in to your ASTRA account",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <AstraLogo className="h-8 w-8" />
            <span className="text-xl font-bold">ASTRA</span>
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
