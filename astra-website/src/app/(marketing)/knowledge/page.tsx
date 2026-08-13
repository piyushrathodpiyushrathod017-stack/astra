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
import { BookOpen } from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Knowledge Base",
  description:
    "Learn AI from beginner to expert. Comprehensive guides, tutorials, and in-depth articles on artificial intelligence, LLMs, and AI development.",
  path: "/knowledge",
  tags: [
    "AI knowledge base",
    "AI tutorials",
    "learn AI",
    "AI guides",
    "artificial intelligence tutorial",
    "LLM guide",
    "AI for beginners",
  ],
});

const articles = [
  { title: "Getting Started with AI", level: "Beginner", category: "Fundamentals", readTime: "10 min" },
  { title: "Understanding Large Language Models", level: "Intermediate", category: "Models", readTime: "15 min" },
  { title: "Building AI Applications", level: "Advanced", category: "Development", readTime: "20 min" },
  { title: "AI Safety and Ethics", level: "Intermediate", category: "Safety", readTime: "12 min" },
  { title: "Local AI Setup Guide", level: "Intermediate", category: "Local AI", readTime: "18 min" },
  { title: "Prompt Engineering Best Practices", level: "Beginner", category: "Techniques", readTime: "8 min" },
];

const levelColors: Record<string, "primary" | "secondary"> = {
  Beginner: "primary",
  Intermediate: "secondary",
  Advanced: "secondary",
};

export default function KnowledgePage() {
  return (
    <>
      <AstraSection className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AnimatedHero>
          <AstraContainer>
            <Breadcrumbs items={[{ label: "Knowledge", href: "/knowledge" }]} />
            <div className="text-center mb-12">
              <AnimatedHeroBadge>
                <AstraBadge variant="primary" className="mb-6">
                  Knowledge Base
                </AstraBadge>
              </AnimatedHeroBadge>
              <AnimatedHeroTitle className="mt-6">
                Learn AI
              </AnimatedHeroTitle>
              <AnimatedHeroSubtitle>
                Comprehensive guides, tutorials, and in-depth articles from
                beginner to expert level.
              </AnimatedHeroSubtitle>
            </div>
          </AstraContainer>
        </AnimatedHero>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
            {articles.map((article) => (
              <StaggerItem key={article.title}>
                <AstraCard>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="h-5 w-5 text-astra-primary" />
                    <AstraBadge variant={levelColors[article.level]}>{article.level}</AstraBadge>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{article.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>
                </AstraCard>
              </StaggerItem>
            ))}
          </AnimatedStagger>
        </AstraContainer>
      </AstraSection>
    </>
  );
}
