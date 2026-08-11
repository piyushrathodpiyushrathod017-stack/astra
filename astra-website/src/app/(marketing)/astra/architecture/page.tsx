import type { Metadata } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { AstraGrid } from "@/components/layout/astra-grid";
import { AstraCard } from "@/components/shared/astra-card";
import { AstraBadge } from "@/components/shared/astra-badge";
import {
  Layers,
  Cpu,
  Settings,
  Zap,
  Puzzle,
  Server,
  Plug,
  Wrench,
} from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "ASTRA Architecture",
  description:
    "Technical deep dive into ASTRA's modular architecture: kernel, event system, module manager, provider bridge, and service layers.",
  path: "/astra/architecture",
  tags: [
    "ASTRA architecture",
    "AI OS architecture",
    "modular architecture",
    "event-driven AI",
    "AI kernel",
    "microservices AI",
  ],
});

const layers = [
  {
    name: "Kernel",
    icon: Cpu,
    purpose: "Central orchestration and task routing",
    responsibilities: [
      "Task prioritization and routing",
      "Resource allocation",
      "Error handling and recovery",
      "System state management",
    ],
    status: "active",
  },
  {
    name: "Configuration",
    icon: Settings,
    purpose: "User preferences and system settings",
    responsibilities: [
      "User preference storage",
      "System configuration management",
      "Theme and UI settings",
      "Provider configuration",
    ],
    status: "active",
  },
  {
    name: "Event System",
    icon: Zap,
    purpose: "Inter-module communication bus",
    responsibilities: [
      "Event publication and subscription",
      "Message routing between modules",
      "Event history and replay",
      "Priority-based event handling",
    ],
    status: "active",
  },
  {
    name: "Modules",
    icon: Puzzle,
    purpose: "Independent capability implementations",
    responsibilities: [
      "Module lifecycle management",
      "Capability registration",
      "Dependency resolution",
      "Hot-swapping modules",
    ],
    status: "planned",
  },
  {
    name: "Services",
    icon: Server,
    purpose: "Shared infrastructure for modules",
    responsibilities: [
      "Memory management",
      "Storage abstraction",
      "Network communication",
      "Caching layer",
    ],
    status: "planned",
  },
  {
    name: "Providers",
    icon: Plug,
    purpose: "External AI and service integrations",
    responsibilities: [
      "Provider abstraction layer",
      "API key management",
      "Rate limiting and queuing",
      "Response normalization",
    ],
    status: "planned",
  },
  {
    name: "Interfaces",
    icon: Wrench,
    purpose: "User interaction and external APIs",
    responsibilities: [
      "CLI interface",
      "GUI dashboard",
      "API gateway",
      "WebSocket connections",
    ],
    status: "planned",
  },
];

const statusColors: Record<string, "primary" | "secondary"> = {
  active: "primary",
  planned: "secondary",
};

export default function AstraArchitecturePage() {
  return (
    <>
      <AstraSection className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AstraContainer>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              ASTRA Architecture
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A deep dive into ASTRA&apos;s modular, layered architecture.
              Each layer has a specific responsibility and communicates through
              well-defined interfaces.
            </p>
          </div>
        </AstraContainer>
      </AstraSection>

      {/* Architecture Overview */}
      <AstraSection className="py-12">
        <AstraContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              System Layers
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              ASTRA is organized into seven distinct layers, each with clear
              responsibilities and boundaries.
            </p>
          </div>

          {/* Visual Layer Stack */}
          <div className="mx-auto max-w-2xl mb-12">
            <div className="space-y-2">
              {layers.map((layer, i) => (
                <div
                  key={layer.name}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded bg-astra-muted text-astra-primary font-mono text-sm">
                    {i + 1}
                  </div>
                  <layer.icon className="h-5 w-5 text-astra-primary shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{layer.name}</h3>
                      <AstraBadge variant={statusColors[layer.status]}>
                        {layer.status}
                      </AstraBadge>
                    </div>
                    <p className="text-sm text-muted-foreground">{layer.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Layer Details */}
          <AstraGrid cols={2}>
            {layers.map((layer) => (
              <AstraCard key={layer.name}>
                <div className="flex items-center gap-2 mb-3">
                  <layer.icon className="h-5 w-5 text-astra-primary" />
                  <h3 className="font-semibold text-foreground">{layer.name}</h3>
                  <AstraBadge variant={statusColors[layer.status]}>
                    {layer.status}
                  </AstraBadge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{layer.purpose}</p>
                <ul className="space-y-1">
                  {layer.responsibilities.map((r) => (
                    <li key={r} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-astra-primary mt-1">-</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </AstraCard>
            ))}
          </AstraGrid>
        </AstraContainer>
      </AstraSection>

      {/* Data Flow */}
      <AstraSection className="py-12 bg-secondary/50">
        <AstraContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Data Flow
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              How information flows through ASTRA&apos;s layers.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col items-center gap-4">
              {[
                "User Input → Interface Layer",
                "Interface → Kernel (task routing)",
                "Kernel → Module (capability execution)",
                "Module → Service (infrastructure access)",
                "Service → Provider (external AI/API)",
                "Response → Kernel → Interface → User",
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3 w-full">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-astra-primary text-white text-sm font-bold">
                    {i + 1}
                  </div>
                  <AstraCard className="flex-1">
                    <p className="text-sm font-medium text-foreground">{step}</p>
                  </AstraCard>
                </div>
              ))}
            </div>
          </div>
        </AstraContainer>
      </AstraSection>
    </>
  );
}
