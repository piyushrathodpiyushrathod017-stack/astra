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
import {
  Brain,
  Database,
  Wrench,
  GraduationCap,
  Shield,
  Workflow,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Features — ASTRA",
  description:
    "Explore the full feature set of the ASTRA AI agent framework: intelligence, memory, tools, learning, security, and more.",
  path: "/astra/features",
  tags: [
    "ASTRA features",
    "AI agent capabilities",
    "intelligent agents",
    "memory systems",
    "tool orchestration",
  ],
});

const features = [
  {
    icon: Brain,
    title: "Advanced Intelligence",
    description:
      "State-of-the-art reasoning with chain-of-thought prompting, multi-step planning, and goal decomposition for complex tasks.",
  },
  {
    icon: Database,
    title: "Persistent Memory",
    description:
      "Short-term working memory and long-term episodic storage. Agents remember context, preferences, and past interactions.",
  },
  {
    icon: Wrench,
    title: "Tool Orchestration",
    description:
      "Automatic tool selection, parameter binding, and result synthesis. Connect to APIs, databases, file systems, and more.",
  },
  {
    icon: GraduationCap,
    title: "Adaptive Learning",
    description:
      "Self-improving agents that learn from feedback, correct mistakes, and refine strategies over time.",
  },
  {
    icon: Shield,
    title: "Safety & Guardrails",
    description:
      "Built-in safety layers with input validation, output filtering, and configurable guardrails for responsible deployment.",
  },
  {
    icon: Workflow,
    title: "Multi-Agent Collaboration",
    description:
      "Coordinate multiple specialized agents working together on complex workflows with shared state and messaging.",
  },
  {
    icon: MessageSquare,
    title: "Natural Interaction",
    description:
      "Human-friendly conversation interfaces with streaming responses, clarifying questions, and contextual awareness.",
  },
  {
    icon: BarChart3,
    title: "Observability",
    description:
      "Full tracing and logging of agent reasoning, tool calls, and decisions for debugging and performance monitoring.",
  },
];

export default function AstraFeaturesPage() {
  return (
    <>
      <AstraSection className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AnimatedHero>
          <AstraContainer>
            <Breadcrumbs
              items={[
                { label: "ASTRA", href: "/astra" },
                { label: "Features", href: "/astra/features" },
              ]}
            />
            <div className="text-center mb-12">
              <AnimatedHeroBadge>
                <AstraBadge variant="primary" className="mb-6">
                  Features
                </AstraBadge>
              </AnimatedHeroBadge>
              <AnimatedHeroTitle className="mt-6">
                Everything You Need
              </AnimatedHeroTitle>
              <AnimatedHeroSubtitle>
                A complete toolkit for building production-ready AI agents.
              </AnimatedHeroSubtitle>
            </div>
          </AstraContainer>
        </AnimatedHero>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <AnimatedStagger
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            stagger={0.08}
          >
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <AstraCard className="h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-astra-primary/10">
                      <feature.icon className="h-5 w-5 text-astra-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
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
