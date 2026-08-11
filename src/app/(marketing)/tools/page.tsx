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
import { Wrench, Star } from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "AI Tools Directory",
  description:
    "Discover and explore the best AI tools for chat, coding, image generation, video, audio, and productivity. Browse curated ratings and reviews.",
  path: "/tools",
  tags: [
    "AI tools",
    "best AI tools",
    "AI tools directory",
    "ChatGPT",
    "Claude",
    "Midjourney",
    "GitHub Copilot",
    "AI software",
  ],
});

const tools = [
  { name: "ChatGPT", category: "Chat", rating: "4.8", description: "OpenAI's conversational AI assistant." },
  { name: "Claude", category: "Chat", rating: "4.7", description: "Anthropic's helpful, harmless, and honest AI." },
  { name: "Midjourney", category: "Image", rating: "4.7", description: "AI image generation from text prompts." },
  { name: "GitHub Copilot", category: "Coding", rating: "4.6", description: "AI pair programmer for code completion." },
  { name: "DALL-E 3", category: "Image", rating: "4.5", description: "OpenAI's text-to-image model." },
  { name: "Perplexity", category: "Search", rating: "4.6", description: "AI-powered search engine with citations." },
  { name: "Runway", category: "Video", rating: "4.4", description: "AI video generation and editing." },
  { name: "ElevenLabs", category: "Audio", rating: "4.5", description: "AI voice synthesis and cloning." },
  { name: "Notion AI", category: "Productivity", rating: "4.3", description: "AI-powered workspace assistant." },
];

export default function ToolsPage() {
  return (
    <>
      <AstraSection className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AnimatedHero>
          <AstraContainer>
            <Breadcrumbs items={[{ label: "Tools", href: "/tools" }]} />
            <div className="text-center mb-12">
              <AnimatedHeroBadge>
                <AstraBadge variant="primary" className="mb-6">
                  Tools Directory
                </AstraBadge>
              </AnimatedHeroBadge>
              <AnimatedHeroTitle className="mt-6">
                AI Tools
              </AnimatedHeroTitle>
              <AnimatedHeroSubtitle>
                Browse and discover the best AI tools for every use case.
              </AnimatedHeroSubtitle>
            </div>
          </AstraContainer>
        </AnimatedHero>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
            {tools.map((tool) => (
              <StaggerItem key={tool.name}>
                <AstraCard>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Wrench className="h-5 w-5 text-astra-primary" />
                      <h3 className="font-semibold text-foreground">{tool.name}</h3>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium text-foreground">{tool.rating}</span>
                    </div>
                  </div>
                  <AstraBadge variant="secondary" className="mb-2">{tool.category}</AstraBadge>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </AstraCard>
              </StaggerItem>
            ))}
          </AnimatedStagger>
        </AstraContainer>
      </AstraSection>
    </>
  );
}
