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
import { CheckCircle, Circle, Clock } from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Roadmap — ASTRA",
  description:
    "See what is planned for the ASTRA AI agent framework. Upcoming features, milestones, and release timeline.",
  path: "/astra/roadmap",
  tags: [
    "ASTRA roadmap",
    "AI agent framework plans",
    "upcoming features",
    "release timeline",
  ],
});

type PhaseStatus = "completed" | "in-progress" | "planned";

const phases: {
  title: string;
  date: string;
  status: PhaseStatus;
  items: string[];
}[] = [
  {
    title: "Phase 1: Foundation",
    date: "Q1 2026",
    status: "completed",
    items: [
      "Core reasoning engine with chain-of-thought",
      "Basic tool registry and execution",
      "Short-term working memory",
      "CLI and API interfaces",
    ],
  },
  {
    title: "Phase 2: Memory & Learning",
    date: "Q2 2026",
    status: "completed",
    items: [
      "Long-term episodic memory backend",
      "Adaptive learning loops with feedback",
      "Memory retrieval and ranking",
      "Session persistence and replay",
    ],
  },
  {
    title: "Phase 3: Multi-Agent",
    date: "Q3 2026",
    status: "in-progress",
    items: [
      "Agent-to-agent communication protocol",
      "Shared state management",
      "Task delegation and coordination",
      "Agent specialization and roles",
    ],
  },
  {
    title: "Phase 4: Production",
    date: "Q4 2026",
    status: "planned",
    items: [
      "Enterprise authentication and RBAC",
      "Observability dashboard and tracing",
      "Rate limiting and cost controls",
      "SOC 2 compliance and audit logging",
    ],
  },
  {
    title: "Phase 5: Ecosystem",
    date: "Q1 2027",
    status: "planned",
    items: [
      "Public tool marketplace",
      "Community agent templates",
      "Plugin SDK for third-party extensions",
      "Multi-language SDK support",
    ],
  },
];

const statusConfig: Record<PhaseStatus, { icon: typeof CheckCircle; color: string; label: string }> = {
  completed: {
    icon: CheckCircle,
    color: "text-green-500",
    label: "Completed",
  },
  "in-progress": {
    icon: Clock,
    color: "text-astra-primary",
    label: "In Progress",
  },
  planned: {
    icon: Circle,
    color: "text-muted-foreground",
    label: "Planned",
  },
};

export default function AstraRoadmapPage() {
  return (
    <>
      <AstraSection className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AnimatedHero>
          <AstraContainer>
            <Breadcrumbs
              items={[
                { label: "ASTRA", href: "/astra" },
                { label: "Roadmap", href: "/astra/roadmap" },
              ]}
            />
            <div className="text-center mb-12">
              <AnimatedHeroBadge>
                <AstraBadge variant="primary" className="mb-6">
                  Roadmap
                </AstraBadge>
              </AnimatedHeroBadge>
              <AnimatedHeroTitle className="mt-6">
                What is Next
              </AnimatedHeroTitle>
              <AnimatedHeroSubtitle>
                Our plan for building the most capable AI agent framework.
              </AnimatedHeroSubtitle>
            </div>
          </AstraContainer>
        </AnimatedHero>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <AnimatedStagger className="space-y-6" stagger={0.1}>
            {phases.map((phase) => {
              const config = statusConfig[phase.status];
              const StatusIcon = config.icon;
              return (
                <StaggerItem key={phase.title}>
                  <AstraCard>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div className="flex items-center gap-3">
                        <StatusIcon className={`h-5 w-5 ${config.color}`} />
                        <h3 className="font-semibold text-foreground text-lg">
                          {phase.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <AstraBadge variant="outline">{phase.date}</AstraBadge>
                        <AstraBadge
                          variant={
                            phase.status === "completed"
                              ? "primary"
                              : phase.status === "in-progress"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {config.label}
                        </AstraBadge>
                      </div>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-astra-primary/60 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AstraCard>
                </StaggerItem>
              );
            })}
          </AnimatedStagger>
        </AstraContainer>
      </AstraSection>
    </>
  );
}
