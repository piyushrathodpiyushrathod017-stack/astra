import type { Metadata } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { AstraCard } from "@/components/shared/astra-card";
import { AstraBadge } from "@/components/shared/astra-badge";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import {
  AnimatedHero,
  AnimatedHeroBadge,
  AnimatedHeroTitle,
  AnimatedHeroSubtitle,
} from "@/components/shared/animated-hero";
import { AnimatedStagger, StaggerItem } from "@/components/shared/animated-section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Changelog — ASTRA",
  description:
    "Track every release, improvement, and bug fix in the ASTRA AI agent framework.",
  path: "/astra/changelog",
  tags: [
    "ASTRA changelog",
    "release notes",
    "version history",
    "AI agent framework updates",
  ],
});

const entries = [
  {
    version: "0.4.0",
    date: "August 15, 2026",
    tag: "latest",
    summary: "Multi-agent collaboration and shared state management.",
    changes: [
      "Added agent-to-agent communication protocol",
      "Shared state store for multi-agent workflows",
      "Task delegation and role assignment API",
      "New observability dashboard with real-time tracing",
    ],
  },
  {
    version: "0.3.0",
    date: "June 2, 2026",
    tag: "minor",
    summary: "Adaptive learning and long-term memory backends.",
    changes: [
      "Long-term episodic memory with vector search",
      "Adaptive learning loops with self-evaluation",
      "Memory retrieval ranking and relevance scoring",
      "Session persistence and replay for debugging",
    ],
  },
  {
    version: "0.2.0",
    date: "March 20, 2026",
    tag: "minor",
    summary: "Tool orchestration and pluggable registry.",
    changes: [
      "Pluggable tool registry with JSON schema descriptions",
      "Automatic tool selection based on task context",
      "Retry and fallback logic for tool execution",
      "New SDK for building custom tool integrations",
    ],
  },
  {
    version: "0.1.0",
    date: "January 10, 2026",
    tag: "initial",
    summary: "Initial release of the ASTRA framework.",
    changes: [
      "Core reasoning engine with chain-of-thought prompting",
      "Short-term working memory system",
      "CLI interface for interactive agent sessions",
      "REST API for programmatic access",
    ],
  },
];

const tagVariant: Record<string, "primary" | "secondary" | "outline"> = {
  latest: "primary",
  minor: "secondary",
  initial: "outline",
};

export default function AstraChangelogPage() {
  return (
    <>
      <AstraSection className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AnimatedHero>
          <AstraContainer>
            <Breadcrumbs
              items={[
                { label: "ASTRA", href: "/astra" },
                { label: "Changelog", href: "/astra/changelog" },
              ]}
            />
            <div className="text-center mb-12">
              <AnimatedHeroBadge>
                <AstraBadge variant="primary" className="mb-6">
                  Changelog
                </AstraBadge>
              </AnimatedHeroBadge>
              <AnimatedHeroTitle className="mt-6">
                Release History
              </AnimatedHeroTitle>
              <AnimatedHeroSubtitle>
                Every improvement, fix, and milestone in the ASTRA framework.
              </AnimatedHeroSubtitle>
            </div>
          </AstraContainer>
        </AnimatedHero>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <AnimatedStagger className="space-y-6" stagger={0.1}>
            {entries.map((entry) => (
              <StaggerItem key={entry.version}>
                <AstraCard>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-foreground text-lg">
                        v{entry.version}
                      </h3>
                      <AstraBadge variant={tagVariant[entry.tag] ?? "outline"}>
                        {entry.tag}
                      </AstraBadge>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {entry.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {entry.summary}
                  </p>
                  <ul className="space-y-1.5">
                    {entry.changes.map((change) => (
                      <li
                        key={change}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-astra-primary/60 shrink-0" />
                        {change}
                      </li>
                    ))}
                  </ul>
                </AstraCard>
              </StaggerItem>
            ))}
          </AnimatedStagger>
        </AstraContainer>
      </AstraSection>
    </>
  );
}
