import type { Metadata } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { AstraGrid } from "@/components/layout/astra-grid";
import { AstraCard } from "@/components/shared/astra-card";
import { AstraBadge } from "@/components/shared/astra-badge";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Code, Star, ExternalLink } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { tools as allTools } from "@/lib/mock-data";

export const metadata: Metadata = createMetadata({
  title: "AI Coding Tools",
  description:
    "Best AI-powered coding tools and assistants: GitHub Copilot, Cursor, Tabnine, and more. Boost your development workflow.",
  path: "/atlas/coding",
  tags: [
    "AI coding",
    "AI code editor",
    "GitHub Copilot",
    "Cursor",
    "Tabnine",
    "AI pair programmer",
    "code completion AI",
  ],
});

const tools = allTools.filter((t) => t.category === "Coding");

export default function AtlasCodingPage() {
  return (
    <>
      <AstraSection className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AstraContainer>
          <Breadcrumbs items={[{ label: "Atlas", href: "/atlas" }, { label: "AI Coding", href: "/atlas/coding" }]} />
          <div className="text-center mb-12">
            <AstraBadge variant="primary" className="mb-6">
              AI Coding
            </AstraBadge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              AI-Powered Coding Tools
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The best AI tools for code completion, generation, and
              intelligent development assistance.
            </p>
          </div>
        </AstraContainer>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <AstraGrid cols={2}>
            {tools.map((tool) => (
              <AstraCard key={tool.name}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <Code className="h-5 w-5 text-astra-primary" />
                      {tool.name}
                    </h3>
                    <AstraBadge variant="secondary" className="mt-1">
                      {tool.category}
                    </AstraBadge>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-foreground">{tool.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{tool.description}</p>
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-astra-primary hover:underline"
                >
                  Visit <ExternalLink className="h-3 w-3" />
                </a>
              </AstraCard>
            ))}
          </AstraGrid>
        </AstraContainer>
      </AstraSection>
    </>
  );
}
