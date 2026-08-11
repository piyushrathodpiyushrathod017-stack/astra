import type { Metadata } from "next";
import { DocsLayout } from "@/components/layout/docs-layout"
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Documentation",
  description:
    "Complete ASTRA documentation: getting started guides, API reference, architecture overview, and contribution guidelines.",
  path: "/docs",
  tags: [
    "ASTRA documentation",
    "AI platform docs",
    "API reference",
    "getting started",
    "AI development",
  ],
});

export default function DocsPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to build with ASTRA and the AI Ecosystem.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-6 hover:bg-accent/50 transition-colors">
            <h3 className="font-semibold">Getting Started</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Quick start guide, installation, and configuration.
            </p>
          </div>
          <div className="rounded-lg border border-border p-6 hover:bg-accent/50 transition-colors">
            <h3 className="font-semibold">ASTRA Core</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Core concepts, modules, and memory system.
            </p>
          </div>
          <div className="rounded-lg border border-border p-6 hover:bg-accent/50 transition-colors">
            <h3 className="font-semibold">Atlas Tools</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Coding tools, local AI, and integrations.
            </p>
          </div>
          <div className="rounded-lg border border-border p-6 hover:bg-accent/50 transition-colors">
            <h3 className="font-semibold">API Reference</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              REST, GraphQL, WebSocket APIs, and SDK.
            </p>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}
