import type { Metadata } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { AstraCard } from "@/components/shared/astra-card";
import { AstraButton } from "@/components/shared/astra-button";
import { AstraBadge } from "@/components/shared/astra-badge";
import {
  AnimatedHero,
  AnimatedHeroBadge,
  AnimatedHeroTitle,
  AnimatedHeroSubtitle,
  AnimatedHeroCta,
} from "@/components/shared/animated-hero";
import { AnimatedSection, AnimatedStagger, StaggerItem } from "@/components/shared/animated-section";
import {
  ArrowRight,
  Brain,
  Shield,
  Puzzle,
  Eye,
  Lock,
  Globe,
  Layers,
  CheckCircle,
  Clock,
} from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "ASTRA — The Intelligent AI Operating System",
  description:
    "ASTRA is a modular, rule-first AI operating system. Local-first processing, user control, provider independence, and transparent decision-making.",
  path: "/astra",
  tags: [
    "ASTRA",
    "AI operating system",
    "modular AI",
    "local AI",
    "rule-first AI",
    "AI OS",
    "personal AI",
    "AI assistant",
  ],
});

const principles = [
  {
    icon: Puzzle,
    title: "Modular Architecture",
    description: "Independent modules for each capability, allowing targeted development and easy extension.",
  },
  {
    icon: Shield,
    title: "Rule-First, AI-Second",
    description: "Deterministic rules handle predictable tasks before AI is invoked. Open Chrome does not need an LLM.",
  },
  {
    icon: Globe,
    title: "Local-First",
    description: "Prefer local processing and user control. Data stays on your device unless you choose otherwise.",
  },
  {
    icon: Lock,
    title: "User Control",
    description: "User remains in control of data, actions, and automation. Nothing happens without your permission.",
  },
  {
    icon: Brain,
    title: "Provider Independence",
    description: "ASTRA should not depend on one AI provider. Swap between OpenAI, Anthropic, local models freely.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Every decision, every action, every data point is visible and explainable to the user.",
  },
];

const capabilities = [
  { name: "Intelligent Task Routing", description: "Automatically routes tasks to the appropriate handler based on complexity and type." },
  { name: "Multi-Provider AI", description: "Seamlessly switch between AI providers based on task requirements." },
  { name: "Permission-Based Memory", description: "Long-term memory that requires explicit user approval before storing information." },
  { name: "Context-Aware Automation", description: "Understands context to automate repetitive workflows safely." },
  { name: "Real-Time Monitoring", description: "Live dashboard showing all active processes, memory usage, and system health." },
  { name: "Extensible Modules", description: "Add new capabilities through a standardized module interface." },
];

const modules = [
  { name: "Kernel", layer: "Core", status: "active", description: "Central orchestration and task routing" },
  { name: "Configuration", layer: "Core", status: "active", description: "User preferences and system settings" },
  { name: "Event System", layer: "Core", status: "active", description: "Inter-module communication bus" },
  { name: "Memory", layer: "Service", status: "planned", description: "Permission-based long-term memory" },
  { name: "Provider Bridge", layer: "Service", status: "planned", description: "Abstraction layer for AI providers" },
  { name: "Module Manager", layer: "Interface", status: "planned", description: "Dynamic module loading and lifecycle" },
];

export default function AstraPage() {
  return (
    <>
      <AstraSection className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AnimatedHero>
          <AstraContainer className="relative text-center">
            <AnimatedHeroBadge>
              <AstraBadge variant="primary" className="mb-6">
                ASTRA
              </AstraBadge>
            </AnimatedHeroBadge>
            <AnimatedHeroTitle className="mt-6">
              The intelligent AI operating system.
            </AnimatedHeroTitle>
            <AnimatedHeroSubtitle>
              ASTRA is not just another AI chatbot. It is a modular, rule-first
              operating system that puts you in control of your AI ecosystem.
            </AnimatedHeroSubtitle>
            <AnimatedHeroCta>
              <AstraButton href="/astra/architecture" size="lg">
                Explore Architecture
                <ArrowRight className="h-4 w-4" />
              </AstraButton>
              <AstraButton href="/astra/roadmap" variant="secondary" size="lg">
                View Roadmap
              </AstraButton>
            </AnimatedHeroCta>
          </AstraContainer>
        </AnimatedHero>
      </AstraSection>

      <AstraSection>
        <AstraContainer>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                What is ASTRA?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                ASTRA is a personal AI operating system built on three core beliefs:
                rules before AI, local-first processing, and user control. Unlike
                chatbots that rely entirely on cloud AI, ASTRA handles routine tasks
                with deterministic rules and only invokes AI when genuinely needed.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.15}>
            {[
              { title: "For Individuals", desc: "Personal productivity, automation, and knowledge management." },
              { title: "For Developers", desc: "Extensible architecture, module system, and provider abstraction." },
              { title: "For Teams", desc: "Shared workflows, collaborative knowledge, and enterprise security." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <AstraCard className="text-center">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                </AstraCard>
              </StaggerItem>
            ))}
          </AnimatedStagger>
        </AstraContainer>
      </AstraSection>

      <AstraSection className="bg-secondary/50">
        <AstraContainer>
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Core Principles
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Every design decision in ASTRA is guided by these principles.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
            {principles.map((p) => (
              <StaggerItem key={p.title}>
                <AstraCard>
                  <p.icon className="h-8 w-8 text-astra-primary mb-3" />
                  <h3 className="font-semibold text-foreground">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{p.description}</p>
                </AstraCard>
              </StaggerItem>
            ))}
          </AnimatedStagger>
        </AstraContainer>
      </AstraSection>

      <AstraSection>
        <AstraContainer>
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Capabilities
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                ASTRA combines intelligent routing, multi-provider AI, and
                permission-based memory into a unified system.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.1}>
            {capabilities.map((c) => (
              <StaggerItem key={c.name}>
                <AstraCard>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-astra-primary mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">{c.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{c.description}</p>
                    </div>
                  </div>
                </AstraCard>
              </StaggerItem>
            ))}
          </AnimatedStagger>
        </AstraContainer>
      </AstraSection>

      <AstraSection className="bg-secondary/50">
        <AstraContainer>
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Module Explorer
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                ASTRA is built from independent modules, each handling a specific capability.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mx-auto max-w-3xl">
              <div className="space-y-3">
                {modules.map((m) => (
                  <AstraCard key={m.name}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Layers className="h-5 w-5 text-astra-primary" />
                        <div>
                          <h3 className="font-semibold text-foreground">{m.name}</h3>
                          <p className="text-sm text-muted-foreground">{m.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <AstraBadge variant="secondary">{m.layer}</AstraBadge>
                        <AstraBadge variant={m.status === "active" ? "primary" : "secondary"}>
                          <Clock className="h-3 w-3 mr-1" />
                          {m.status}
                        </AstraBadge>
                      </div>
                    </div>
                  </AstraCard>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </AstraContainer>
      </AstraSection>

      <AstraSection>
        <AstraContainer>
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Development Progress
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                ASTRA is actively being developed. Here is where we stand.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.1}>
            {[
              { label: "Vision & Planning", progress: 100 },
              { label: "Documentation", progress: 80 },
              { label: "Architecture Design", progress: 70 },
              { label: "Framework Setup", progress: 40 },
              { label: "Core Implementation", progress: 20 },
              { label: "Testing & QA", progress: 10 },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <AstraCard>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{item.label}</h3>
                    <span className="text-sm text-muted-foreground">{item.progress}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-astra-primary h-2 rounded-full transition-all"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </AstraCard>
              </StaggerItem>
            ))}
          </AnimatedStagger>
        </AstraContainer>
      </AstraSection>

      <AstraSection className="bg-secondary/50">
        <AstraContainer className="text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Ready to learn more?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Dive deeper into ASTRA&apos;s architecture and philosophy.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <AstraButton href="/astra/features" size="lg">
                Explore Features
                <ArrowRight className="h-4 w-4" />
              </AstraButton>
              <AstraButton href="/astra/philosophy" variant="secondary" size="lg">
                Read Philosophy
              </AstraButton>
            </div>
          </AnimatedSection>
        </AstraContainer>
      </AstraSection>
    </>
  );
}
