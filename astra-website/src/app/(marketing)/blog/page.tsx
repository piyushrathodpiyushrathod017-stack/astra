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
import { Calendar } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { articles } from "@/lib/mock-data";

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

export default function BlogPage() {
  return (
    <>
      <AstraSection className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AnimatedHero>
          <AstraContainer>
            <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
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
            {articles.map((article) => (
              <StaggerItem key={article.title}>
                <AstraCard>
                  <div className="flex items-center gap-2 mb-3">
                    <AstraBadge variant="secondary">{article.category}</AstraBadge>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{article.excerpt}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {article.date}
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
