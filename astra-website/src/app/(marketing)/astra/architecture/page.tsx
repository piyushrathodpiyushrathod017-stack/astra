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
import { Layers, Box, Plug, Eye } from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Architecture — ASTRA",
  description:
    "Understand the modular architecture behind the ASTRA AI agent framework: core engine, memory layer, tool system, and orchestration.",
  path: "/astra/architecture",
  tags: [
    "ASTRA architecture",
    "AI agent system design",
    "modular framework",
    "agent core engine",
    "tool system",
  ],
});

const layers = [
  {
    icon: Box,
    title: "Core Engine",
    description:
      "The central reasoning loop that drives agent behavior. Handles planning, decision-making, and task execution using LLM-based chain-of-thought prompting.",
  },
  {
    icon: Layers,
    title: "Memory Layer",
    description:
      "A dual-memory architecture with short-term working memory for active context and long-term episodic storage for persistent knowledge across sessions.",
  },
  {
    icon: Plug,
    title: "Tool System",
    description:
      "A pluggable tool registry where each tool is self-describing with JSON schemas. The agent dynamically selects and invokes tools based on task requirements.",
  },
  {
    icon: Eye,
    title: "Observability Layer",
    description:
      "End-to-end tracing of every reasoning step, tool call, and decision. Integrated dashboards for latency, cost, and error tracking in production.",
  },
];

const principles = [
  {
    title: "Modularity",
    description:
      "Every component is independently replaceable. Swap memory backends, tool providers, or LLM engines without touching the core loop.",
  },
  {
    title: "Extensibility",
    description:
      "Add new capabilities by registering tools or memory adapters. The framework auto-discovers and integrates new components at runtime.",
  },
  {
    title: "Reliability",
    description:
      "Built-in retry logic, fallback chains, and guardrails ensure agents behave predictably even when individual tool calls fail.",
  },
  {
    title: "Transparency",
    description:
      "Every decision the agent makes is logged and inspectable. Full audit trails for compliance, debugging, and continuous improvement.",
  },
];

export default function AstraArchitecturePage() {
  return (
    <>
      <AstraSection className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AnimatedHero>
          <AstraContainer>
            <Breadcrumbs
              items={[
                { label: "ASTRA", href: "/astra" },
                { label: "Architecture", href: "/astra/architecture" },
              ]}
            />
            <div className="text-center mb-12">
              <AnimatedHeroBadge>
                <AstraBadge variant="primary" className="mb-6">
                  Architecture
                </AstraBadge>
              </AnimatedHeroBadge>
              <AnimatedHeroTitle className="mt-6">
                Built to Scale
              </AnimatedHeroTitle>
              <AnimatedHeroSubtitle>
                A layered, modular architecture designed for production AI agents.
              </AnimatedHeroSubtitle>
            </div>
          </AstraContainer>
        </AnimatedHero>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Core Layers
          </h2>
          <AnimatedStagger
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
            stagger={0.1}
          >
            {layers.map((layer) => (
              <StaggerItem key={layer.title}>
                <AstraCard className="h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-astra-primary/10">
                      <layer.icon className="h-5 w-5 text-astra-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {layer.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {layer.description}
                  </p>
                </AstraCard>
              </StaggerItem>
            ))}
          </AnimatedStagger>

          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Design Principles
          </h2>
          <AnimatedStagger
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            stagger={0.08}
          >
            {principles.map((principle) => (
              <StaggerItem key={principle.title}>
                <AstraCard className="h-full text-center">
                  <h3 className="font-semibold text-foreground mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {principle.description}
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
