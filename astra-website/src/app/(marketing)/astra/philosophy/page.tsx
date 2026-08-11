import type { Metadata } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { AstraGrid } from "@/components/layout/astra-grid";
import { AstraCard } from "@/components/shared/astra-card";
import {
  Shield,
  Globe,
  Lock,
  Eye,
  Brain,
  Puzzle,
  Heart,
  Clock,
} from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "ASTRA Philosophy",
  description:
    "The principles behind ASTRA: rule-first AI, local-first processing, user control, provider independence, and transparency.",
  path: "/astra/philosophy",
  tags: [
    "ASTRA philosophy",
    "AI principles",
    "local-first AI",
    "user control AI",
    "transparent AI",
    "rule-first AI",
  ],
});

const philosophy = [
  {
    icon: Shield,
    title: "Rule-First, AI-Second",
    description: "Deterministic rules handle predictable tasks before AI is invoked. Opening Chrome does not need an LLM. Planning your week does. ASTRA evaluates whether a task can be handled by a rule before spending tokens on AI inference.",
    examples: [
      "File organization follows defined rules",
      "Application launch is rule-based",
      "Scheduled tasks use deterministic logic",
      "AI is only invoked for complex reasoning",
    ],
  },
  {
    icon: Globe,
    title: "Local-First",
    description: "ASTRA prefers local processing and user control. Your data stays on your device unless you explicitly choose to share it. Local models are preferred when they can handle the task.",
    examples: [
      "Data stored locally by default",
      "Local AI models for common tasks",
      "No telemetry without consent",
      "Offline capability for core features",
    ],
  },
  {
    icon: Lock,
    title: "User Control",
    description: "You remain in control of your data, actions, and automation. Nothing happens without your permission. Every automated action can be reviewed, modified, or revoked.",
    examples: [
      "Permission prompts for sensitive actions",
      "Full audit trail of all operations",
      "Easy revocation of any permission",
      "Transparent data usage policies",
    ],
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Every decision, every action, every data point is visible and explainable. You can always see why ASTRA made a specific choice and what data it used.",
    examples: [
      "Decision logs with explanations",
      "Data source attribution",
      "Confidence scores on AI outputs",
      "Full system state visibility",
    ],
  },
  {
    icon: Brain,
    title: "Memory Philosophy",
    description: "ASTRA's memory system requires explicit permission, stores useful long-term information, uses approved sources, maintains controlled indexing, and provides complete transparency.",
    examples: [
      "Explicit opt-in for memory storage",
      "User reviews before permanent storage",
      "Source attribution on all memories",
      "Easy deletion and modification",
    ],
  },
  {
    icon: Puzzle,
    title: "Modularity",
    description: "Independent modules handle specific capabilities. This allows targeted development, easy testing, and the ability to replace or upgrade individual components without affecting the whole.",
    examples: [
      "Each module has a single responsibility",
      "Modules communicate through events",
      "Hot-swapping without system restart",
      "Third-party module support",
    ],
  },
  {
    icon: Brain,
    title: "Provider Independence",
    description: "ASTRA does not depend on any single AI provider. You can switch between OpenAI, Anthropic, local models, or any supported provider based on your needs and preferences.",
    examples: [
      "Unified API across providers",
      "Cost comparison between providers",
      "Fallback to alternative providers",
      "Support for self-hosted models",
    ],
  },
  {
    icon: Heart,
    title: "Human-Centered",
    description: "ASTRA is designed to augment human capability, not replace it. The system adapts to your workflow, not the other way around. Your preferences and patterns shape how ASTRA behaves.",
    examples: [
      "Learns your preferences over time",
      "Adapts to your workflow patterns",
      "Respects your working style",
      "Enhances rather than replaces",
    ],
  },
];

export default function AstraPhilosophyPage() {
  return (
    <>
      <AstraSection className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AstraContainer>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Design Philosophy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Every design decision in ASTRA is guided by principles that
              prioritize user control, transparency, and reliability.
            </p>
          </div>
        </AstraContainer>
      </AstraSection>

      {/* Why ASTRA Exists */}
      <AstraSection className="py-12 bg-secondary/50">
        <AstraContainer>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Why ASTRA Exists
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Current AI tools are either too simplistic (chatbots) or too
              complex (enterprise platforms). ASTRA fills the gap: a personal
              AI operating system that is powerful enough for complex tasks
              but simple enough for everyday use.
            </p>
          </div>
        </AstraContainer>
      </AstraSection>

      {/* Principles */}
      <AstraSection className="py-12">
        <AstraContainer>
          <div className="space-y-12">
            {philosophy.map((p, i) => (
              <div
                key={p.title}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-start`}
              >
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-lg bg-astra-muted p-3">
                      <p.icon className="h-6 w-6 text-astra-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{p.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{p.description}</p>
                </div>
                <div className="lg:w-1/2">
                  <AstraCard>
                    <h4 className="font-semibold text-foreground mb-3">In Practice</h4>
                    <ul className="space-y-2">
                      {p.examples.map((ex) => (
                        <li key={ex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-astra-primary mt-0.5">
                            <Clock className="h-3 w-3" />
                          </span>
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </AstraCard>
                </div>
              </div>
            ))}
          </div>
        </AstraContainer>
      </AstraSection>
    </>
  );
}
