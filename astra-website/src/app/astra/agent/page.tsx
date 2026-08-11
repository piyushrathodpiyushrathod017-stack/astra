import type { Metadata } from "next";
import Link from "next/link";
import type { Route } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { AstraCard } from "@/components/shared/astra-card";
import { AstraBadge } from "@/components/shared/astra-badge";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Bot, Brain, MessageSquare, Zap, Shield, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "ASTRA Agent | Your AI Assistant",
  description: "Meet ASTRA, your intelligent AI assistant for navigating the AI ecosystem",
};

const breadcrumbItems = [
  { label: "Home", href: "/" as Route },
  { label: "ASTRA Agent", href: "/astra/agent" as Route },
];

const features = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Knowledge Retrieval",
    description: "Accesses our knowledge graph to provide accurate, contextual answers about AI tools and models.",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Natural Conversation",
    description: "Ask questions in plain language and get comprehensive, well-sourced answers.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Tool Recommendations",
    description: "Get personalized tool and model recommendations based on your needs and preferences.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Real-time Data",
    description: "Always up-to-date with the latest tools, models, pricing, and community feedback.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Verified Information",
    description: "All responses backed by verified data sources and community-validated information.",
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Contextual Memory",
    description: "Remembers your preferences and past interactions to provide increasingly relevant responses.",
  },
];

export default function AstraAgentPage() {
  return (
    <div className="min-h-screen">
      <AstraSection className="pt-24 pb-16">
        <AstraContainer>
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />

          <div className="text-center max-w-3xl mx-auto mb-16">
            <AstraBadge variant="primary" className="mb-4">AI Assistant</AstraBadge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Meet <span className="text-primary">ASTRA</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Your intelligent guide to the AI ecosystem. Ask anything about tools, models,
              comparisons, and best practices.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="p-8 border rounded-xl bg-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-lg">
                    Hi! I&apos;m ASTRA, your AI assistant. I can help you find the right tools,
                    compare models, and navigate the AI landscape. What would you like to know?
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <Link
                  href={"/tools" as Route}
                  className="p-3 border rounded-lg hover:bg-accent transition-colors text-left text-sm"
                >
                  What are the best AI coding tools?
                </Link>
                <Link
                  href={"/compare" as Route}
                  className="p-3 border rounded-lg hover:bg-accent transition-colors text-left text-sm"
                >
                  Compare GPT-4o vs Claude 3.5 Sonnet
                </Link>
                <Link
                  href={"/models" as Route}
                  className="p-3 border rounded-lg hover:bg-accent transition-colors text-left text-sm"
                >
                  Which model is best for local deployment?
                </Link>
                <Link
                  href={"/knowledge" as Route}
                  className="p-3 border rounded-lg hover:bg-accent transition-colors text-left text-sm"
                >
                  How do I get started with local AI?
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <AstraCard key={feature.title}>
                  <div className="text-primary mb-3">{feature.icon}</div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </AstraCard>
              ))}
            </div>
          </div>
        </AstraContainer>
      </AstraSection>
    </div>
  );
}
