import type { Metadata } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { AstraCard } from "@/components/shared/astra-card";
import { AstraBadge } from "@/components/shared/astra-badge";
import {
  AnimatedHero,
  AnimatedHeroTitle,
  AnimatedHeroSubtitle,
} from "@/components/shared/animated-hero";
import { AnimatedSection } from "@/components/shared/animated-section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "ASTRA Roadmap",
  description:
    "See what's coming next for ASTRA. Our development roadmap from foundation to intelligence to scale.",
  path: "/astra/roadmap",
  tags: [
    "ASTRA roadmap",
    "ASTRA development",
    "AI OS roadmap",
    "AI platform roadmap",
    "ASTRA release plan",
  ],
});
import { CheckCircle, Clock, Circle } from "lucide-react";

const phases = [
  {
    name: "Phase 1: Foundation",
    status: "in-progress",
    items: [
      { name: "Project Setup & Configuration", status: "completed" },
      { name: "Database Schema Design", status: "completed" },
      { name: "Core Architecture Design", status: "completed" },
      { name: "Module System Framework", status: "in-progress" },
      { name: "Event System", status: "planned" },
      { name: "Configuration Management", status: "planned" },
    ],
  },
  {
    name: "Phase 2: Core Intelligence",
    status: "planned",
    items: [
      { name: "Task Router", status: "planned" },
      { name: "Rule Engine", status: "planned" },
      { name: "Provider Abstraction", status: "planned" },
      { name: "Context Management", status: "planned" },
      { name: "Memory System", status: "planned" },
    ],
  },
  {
    name: "Phase 3: User Interface",
    status: "planned",
    items: [
      { name: "CLI Interface", status: "planned" },
      { name: "Web Dashboard", status: "planned" },
      { name: "System Tray Integration", status: "planned" },
      { name: "Notification System", status: "planned" },
    ],
  },
  {
    name: "Phase 4: Modules",
    status: "planned",
    items: [
      { name: "Application Manager", status: "planned" },
      { name: "File Manager", status: "planned" },
      { name: "Calendar Integration", status: "planned" },
      { name: "Communication Hub", status: "planned" },
    ],
  },
  {
    name: "Phase 5: Advanced Features",
    status: "planned",
    items: [
      { name: "Workflow Automation", status: "planned" },
      { name: "Knowledge Graph", status: "planned" },
      { name: "Multi-Agent Orchestration", status: "planned" },
      { name: "Plugin System", status: "planned" },
    ],
  },
  {
    name: "Phase 6: Polish & Scale",
    status: "future",
    items: [
      { name: "Performance Optimization", status: "future" },
      { name: "Security Audit", status: "future" },
      { name: "Documentation", status: "future" },
      { name: "Community & Ecosystem", status: "future" },
    ],
  },
];

const statusConfig = {
  completed: { icon: CheckCircle, color: "text-green-500", badge: "primary" as const },
  "in-progress": { icon: Clock, color: "text-astra-primary", badge: "secondary" as const },
  planned: { icon: Circle, color: "text-muted-foreground", badge: "secondary" as const },
  future: { icon: Circle, color: "text-muted-foreground", badge: "secondary" as const },
};

export default function AstraRoadmapPage() {
  return (
    <>
      <AstraSection className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AnimatedHero>
          <AstraContainer>
            <div className="text-center mb-12">
              <AnimatedHeroTitle>
                Development Roadmap
              </AnimatedHeroTitle>
              <AnimatedHeroSubtitle>
                ASTRA is being built in phases, each building on the previous.
                Here is the journey from foundation to full capability.
              </AnimatedHeroSubtitle>
            </div>
          </AstraContainer>
        </AnimatedHero>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <AnimatedSection>
            <div className="mx-auto max-w-4xl">
              <div className="relative border-l-2 border-border pl-8 space-y-12">
                {phases.map((phase) => {
                  const config = statusConfig[phase.status as keyof typeof statusConfig];
                  const StatusIcon = config.icon;
                  return (
                    <div key={phase.name} className="relative">
                      <div className={`absolute -left-10 top-1 h-5 w-5 rounded-full bg-background border-2 border-border flex items-center justify-center`}>
                        <StatusIcon className={`h-3 w-3 ${config.color}`} />
                      </div>
                      <AstraCard>
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-xl font-bold text-foreground">{phase.name}</h2>
                          <AstraBadge variant={config.badge}>{phase.status}</AstraBadge>
                        </div>
                        <div className="space-y-2">
                          {phase.items.map((item) => {
                            const itemConfig = statusConfig[item.status as keyof typeof statusConfig];
                            const ItemIcon = itemConfig.icon;
                            return (
                              <div key={item.name} className="flex items-center gap-3">
                                <ItemIcon className={`h-4 w-4 ${itemConfig.color} shrink-0`} />
                                <span className="text-sm text-muted-foreground">{item.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      </AstraCard>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </AstraContainer>
      </AstraSection>
    </>
  );
}
