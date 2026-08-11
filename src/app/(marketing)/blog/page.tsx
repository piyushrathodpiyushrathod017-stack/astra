import type { Metadata } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { AstraCard } from "@/components/shared/astra-card";
import { AstraBadge } from "@/components/shared/astra-badge";
import {
  AnimatedHero,
  AnimatedHeroBadge,
  AnimatedHeroTitle,
  AnimatedHeroSubtitle,
} from "@/components/shared/animated-hero";
import { AnimatedStagger, StaggerItem } from "@/components/shared/animated-section";
import { Calendar } from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Latest AI insights, trends, tutorials, and news. Stay updated with the rapidly evolving world of artificial intelligence.",
  path: "/blog",
  tags: [
    "AI blog",
    "AI news",
    "AI trends",
    "AI tutorials",
    "artificial intelligence blog",
    "machine learning blog",
    "AI insights",
  ],
});

const posts = [
  { title: "The Future of AI in 2026", date: "Aug 8, 2026", category: "Trends", excerpt: "What to expect from AI technology in the coming year." },
  { title: "Open Source AI Models Rise", date: "Aug 5, 2026", category: "Models", excerpt: "How open-source models are changing the AI landscape." },
  { title: "AI Safety Best Practices", date: "Aug 1, 2026", category: "Safety", excerpt: "Essential guidelines for building safe AI systems." },
  { title: "Local AI: A Complete Guide", date: "Jul 28, 2026", category: "Local AI", excerpt: "Everything you need to know about running AI locally." },
  { title: "AI Coding Tools Compared", date: "Jul 25, 2026", category: "Coding", excerpt: "Comparing the best AI-powered code editors." },
  { title: "Understanding RAG", date: "Jul 20, 2026", category: "Techniques", excerpt: "Retrieval-Augmented Generation explained." },
];

export default function BlogPage() {
  return (
    <>
      <AstraSection className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AnimatedHero>
          <AstraContainer>
            <div className="text-center mb-12">
              <AnimatedHeroBadge>
                <AstraBadge variant="primary" className="mb-6">
                  Blog
                </AstraBadge>
              </AnimatedHeroBadge>
              <AnimatedHeroTitle className="mt-6">
                Latest Insights
              </AnimatedHeroTitle>
              <AnimatedHeroSubtitle>
                Stay updated with the latest AI news, insights, and tutorials.
              </AnimatedHeroSubtitle>
            </div>
          </AstraContainer>
        </AnimatedHero>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
            {posts.map((post) => (
              <StaggerItem key={post.title}>
                <AstraCard>
                  <div className="flex items-center gap-2 mb-3">
                    <AstraBadge variant="secondary">{post.category}</AstraBadge>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {post.date}
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
