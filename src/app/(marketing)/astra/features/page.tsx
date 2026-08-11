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
import { AnimatedSection, AnimatedStagger, StaggerItem } from "@/components/shared/animated-section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "ASTRA Features",
  description:
    "Explore ASTRA features: intelligent task routing, multi-provider AI, permission-based memory, context-aware automation, and extensible modules.",
  path: "/astra/features",
  tags: [
    "ASTRA features",
    "AI OS features",
    "intelligent task routing",
    "multi-provider AI",
    "permission-based memory",
    "AI automation",
  ],
});
import {
  Brain,
  MemoryStick,
  MessageSquare,
  Settings,
  Workflow,
  Wrench,
  BookOpen,
  Globe,
  Bot,
  Puzzle,
} from "lucide-react";

const categories = [
  {
    name: "Intelligence",
    icon: Brain,
    features: [
      { name: "Task Routing", description: "Automatically routes tasks to the appropriate handler based on complexity.", status: "planned" },
      { name: "Multi-Provider AI", description: "Seamlessly switch between OpenAI, Anthropic, local models, and more.", status: "planned" },
      { name: "Context Window Management", description: "Intelligent management of context across conversations and tasks.", status: "planned" },
    ],
  },
  {
    name: "Memory",
    icon: MemoryStick,
    features: [
      { name: "Permission-Based Memory", description: "Long-term memory that requires explicit user approval before storing.", status: "planned" },
      { name: "Semantic Recall", description: "Find relevant past information using natural language queries.", status: "planned" },
      { name: "Memory Dashboard", description: "View and manage all stored memories with full transparency.", status: "planned" },
    ],
  },
  {
    name: "Interaction",
    icon: MessageSquare,
    features: [
      { name: "Natural Language Commands", description: "Interact with your system using everyday language.", status: "planned" },
      { name: "Voice Interface", description: "Hands-free interaction through voice commands.", status: "planned" },
      { name: "Contextual Suggestions", description: "Proactive suggestions based on your current workflow.", status: "planned" },
    ],
  },
  {
    name: "System Control",
    icon: Settings,
    features: [
      { name: "Application Management", description: "Open, close, and manage applications through natural commands.", status: "planned" },
      { name: "File Operations", description: "Search, organize, and manage files with intelligent automation.", status: "planned" },
      { name: "System Monitoring", description: "Real-time visibility into system resources and processes.", status: "planned" },
    ],
  },
  {
    name: "Automation",
    icon: Workflow,
    features: [
      { name: "Workflow Builder", description: "Create custom automation workflows with a visual builder.", status: "planned" },
      { name: "Trigger System", description: "Automate tasks based on time, events, or conditions.", status: "planned" },
      { name: "Template Library", description: "Pre-built automation templates for common tasks.", status: "planned" },
    ],
  },
  {
    name: "Developer Tools",
    icon: Wrench,
    features: [
      { name: "Module SDK", description: "Build custom modules using a standardized interface.", status: "planned" },
      { name: "API Gateway", description: "Expose and consume APIs through a unified gateway.", status: "planned" },
      { name: "Plugin System", description: "Extend ASTRA with third-party plugins.", status: "planned" },
    ],
  },
  {
    name: "Knowledge",
    icon: BookOpen,
    features: [
      { name: "Knowledge Graph", description: "Connected information graph for contextual understanding.", status: "planned" },
      { name: "Document Indexing", description: "Automatic indexing of documents for quick retrieval.", status: "planned" },
      { name: "Citation System", description: "Every piece of information is traceable to its source.", status: "planned" },
    ],
  },
  {
    name: "Multilingual",
    icon: Globe,
    features: [
      { name: "Multi-Language Support", description: "Interact in your preferred language with full support.", status: "planned" },
      { name: "Translation Engine", description: "Real-time translation across documents and conversations.", status: "planned" },
    ],
  },
  {
    name: "Extensibility",
    icon: Puzzle,
    features: [
      { name: "Provider Abstraction", description: "Swap AI providers without changing your workflows.", status: "planned" },
      { name: "Custom Integrations", description: "Connect to any external service through custom integrations.", status: "planned" },
    ],
  },
  {
    name: "Agent",
    icon: Bot,
    features: [
      { name: "Agent Orchestration", description: "Coordinate multiple AI agents for complex tasks.", status: "planned" },
      { name: "Agent Memory Sharing", description: "Agents share context and memory for collaborative work.", status: "planned" },
    ],
  },
];

const statusColors: Record<string, "primary" | "secondary"> = {
  available: "primary",
  "in development": "secondary",
  planned: "secondary",
  experimental: "secondary",
};

export default function AstraFeaturesPage() {
  return (
    <>
      <AstraSection className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AnimatedHero>
          <AstraContainer>
            <div className="text-center mb-12">
              <AnimatedHeroTitle>
                ASTRA Features
              </AnimatedHeroTitle>
              <AnimatedHeroSubtitle>
                Explore the full capabilities of ASTRA. Every feature is designed
                with our core principles: rule-first, local-first, and user control.
              </AnimatedHeroSubtitle>
            </div>
          </AstraContainer>
        </AnimatedHero>
      </AstraSection>

      {categories.map((category, index) => (
        <AstraSection key={category.name} className="py-12">
          <AstraContainer>
            <AnimatedSection delay={index * 0.1}>
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="h-6 w-6 text-astra-primary" />
                <h2 className="text-2xl font-bold text-foreground">{category.name}</h2>
              </div>
            </AnimatedSection>
            <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
              {category.features.map((feature) => (
                <StaggerItem key={feature.name}>
                  <AstraCard>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{feature.name}</h3>
                      <AstraBadge variant={statusColors[feature.status] || "secondary"}>
                        {feature.status}
                      </AstraBadge>
                    </div>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </AstraCard>
                </StaggerItem>
              ))}
            </AnimatedStagger>
          </AstraContainer>
        </AstraSection>
      ))}
    </>
  );
}
