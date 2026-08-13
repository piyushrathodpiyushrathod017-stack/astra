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
import { AnimatedSection, AnimatedStagger, StaggerItem } from "@/components/shared/animated-section";
import { BarChart3, ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { comparisons } from "@/lib/mock-data";

export const metadata: Metadata = createMetadata({
  title: "AI Comparisons",
  description:
    "Compare AI tools and models side by side. Evidence-based comparisons of GPT-4 vs Claude, Midjourney vs DALL-E, Copilot vs Cursor, and more.",
  path: "/compare",
  tags: [
    "AI comparison",
    "GPT-4 vs Claude",
    "Midjourney vs DALL-E",
    "Copilot vs Cursor",
    "AI model comparison",
    "compare AI tools",
  ],
});

export default function ComparePage() {
  return (
    <>
      <AstraSection className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AnimatedHero>
          <AstraContainer>
            <Breadcrumbs items={[{ label: "Compare", href: "/compare" }]} />
            <div className="text-center mb-12">
              <AnimatedHeroBadge>
                <AstraBadge variant="primary" className="mb-6">
                  Compare
                </AstraBadge>
              </AnimatedHeroBadge>
              <AnimatedHeroTitle className="mt-6">
                AI Comparisons
              </AnimatedHeroTitle>
              <AnimatedHeroSubtitle>
                Make informed decisions with evidence-based comparisons,
                transparent scoring, and detailed analysis.
              </AnimatedHeroSubtitle>
            </div>
          </AstraContainer>
        </AnimatedHero>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.1}>
            {comparisons.map((comp) => (
              <StaggerItem key={comp.title}>
                <AstraCard>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-astra-primary" />
                      <h3 className="font-semibold text-foreground">{comp.title}</h3>
                    </div>
                    <AstraBadge variant="secondary">{comp.popularity}</AstraBadge>
                  </div>
                  <AstraBadge variant="secondary" className="mb-3">{comp.category}</AstraBadge>
                  <div className="flex items-center gap-1 text-sm text-astra-primary cursor-pointer hover:underline">
                    View Comparison <ArrowRight className="h-3 w-3" />
                  </div>
                </AstraCard>
              </StaggerItem>
            ))}
          </AnimatedStagger>
        </AstraContainer>
      </AstraSection>

      <AstraSection className="py-12 bg-secondary/50">
        <AstraContainer className="text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Create Your Own Comparison
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Select any two AI tools or models to compare side by side.
            </p>
          </AnimatedSection>
        </AstraContainer>
      </AstraSection>
    </>
  );
}
