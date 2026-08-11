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
import { Code, Globe, Sparkles, Cpu, Wrench, Star } from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "AI Atlas — Discover the AI Ecosystem",
  description:
    "Explore the complete AI ecosystem: coding assistants, local AI tools, APIs, and services. Your gateway to understanding AI.",
  path: "/atlas",
  tags: [
    "AI ecosystem",
    "AI atlas",
    "AI coding",
    "local AI",
    "AI APIs",
    "AI services",
    "discover AI",
  ],
});

const categories = [
  { icon: Code, label: "AI Coding", count: "120+ tools", description: "AI-powered code editors, pair programmers, and dev tools." },
  { icon: Globe, label: "Local AI", count: "80+ tools", description: "Run AI models locally on your own hardware." },
  { icon: Sparkles, label: "AI APIs", count: "50+ services", description: "Integrate AI capabilities into your applications." },
  { icon: Cpu, label: "AI Hardware", count: "30+ devices", description: "Specialized hardware for AI inference and training." },
  { icon: Wrench, label: "AI Utilities", count: "100+ tools", description: "Productivity, creative, and workflow AI tools." },
  { icon: Globe, label: "AI Research", count: "40+ labs", description: "Leading AI research labs and publications." },
];

export default function AtlasPage() {
  return (
    <>
      <AstraSection className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AnimatedHero>
          <AstraContainer>
            <div className="text-center mb-12">
              <AnimatedHeroBadge>
                <AstraBadge variant="primary" className="mb-6">
                  AI Atlas
                </AstraBadge>
              </AnimatedHeroBadge>
              <AnimatedHeroTitle className="mt-6">
                AI Atlas
              </AnimatedHeroTitle>
              <AnimatedHeroSubtitle>
                Discover the entire AI ecosystem in one place.
              </AnimatedHeroSubtitle>
            </div>
          </AstraContainer>
        </AnimatedHero>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
            {categories.map((cat) => (
              <StaggerItem key={cat.label}>
                <AstraCard className="group cursor-pointer">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-astra-primary/10 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                    <cat.icon className="h-7 w-7 text-astra-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-center">{cat.label}</h3>
                  <p className="text-sm text-astra-primary text-center mt-1">{cat.count}</p>
                  <p className="text-sm text-muted-foreground text-center mt-2">{cat.description}</p>
                </AstraCard>
              </StaggerItem>
            ))}
          </AnimatedStagger>
        </AstraContainer>
      </AstraSection>
    </>
  );
}
