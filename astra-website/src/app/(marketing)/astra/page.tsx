import type { Metadata } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { AstraCard } from "@/components/shared/astra-card";
import { AstraBadge } from "@/components/shared/astra-badge";
import { AstraButton } from "@/components/shared/astra-button";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import {
  AnimatedHero,
  AnimatedHeroBadge,
  AnimatedHeroTitle,
  AnimatedHeroSubtitle,
  AnimatedHeroCta,
} from "@/components/shared/animated-hero";
import { AnimatedStagger, StaggerItem } from "@/components/shared/animated-section";
import { Brain, Database, Wrench, GraduationCap } from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "ASTRA — AI Agent Framework",
  description:
    "ASTRA is a modular AI agent framework with built-in intelligence, memory, tool orchestration, and adaptive learning.",
  path: "/astra",
  tags: [
    "ASTRA",
    "AI agent framework",
    "intelligent agents",
    "AI memory",
    "tool orchestration",
    "adaptive learning",
  ],
});

const features = [
  {
    icon: Brain,
    title: "Intelligence",
    description:
      "Advanced reasoning and planning capabilities powered by state-of-the-art language models with chain-of-thought prompting.",
  },
  {
    icon: Database,
    title: "Memory",
    description:
      "Persistent short-term and long-term memory systems that allow agents to learn from interactions and maintain context.",
  },
  {
    icon: Wrench,
    title: "Tools",
    description:
      "Seamless tool orchestration with automatic selection, execution, and result synthesis across dozens of integrations.",
  },
  {
    icon: GraduationCap,
    title: "Learning",
    description:
      "Adaptive learning loops that improve agent performance over time through feedback and self-evaluation.",
  },
];

export default function AstraPage() {
  return (
    <>
      <AstraSection className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AnimatedHero>
          <AstraContainer>
            <Breadcrumbs
              items={[{ label: "ASTRA", href: "/astra" }]}
            />
            <div className="text-center mb-12">
              <AnimatedHeroBadge>
                <AstraBadge variant="primary" className="mb-6">
                  AI Agent Framework
                </AstraBadge>
              </AnimatedHeroBadge>
              <AnimatedHeroTitle className="mt-6">
                ASTRA
              </AnimatedHeroTitle>
              <AnimatedHeroSubtitle>
                A modular framework for building intelligent, autonomous AI agents.
              </AnimatedHeroSubtitle>
              <AnimatedHeroCta>
                <AstraButton href="/docs/getting-started" size="lg">
                  Get Started
                </AstraButton>
                <AstraButton href="/astra/features" variant="secondary" size="lg">
                  Explore Features
                </AstraButton>
              </AnimatedHeroCta>
            </div>
          </AstraContainer>
        </AnimatedHero>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <AnimatedStagger
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            stagger={0.1}
          >
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <AstraCard className="text-center">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-astra-primary/10 mx-auto mb-4">
                    <feature.icon className="h-7 w-7 text-astra-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </AstraCard>
              </StaggerItem>
            ))}
          </AnimatedStagger>
        </AstraContainer>
      </AstraSection>
    </>
  );
}
