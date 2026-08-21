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
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About — ASTRA",
  description:
    "Learn about the ASTRA project, our mission to make AI agents accessible, and the team behind the framework.",
  path: "/about",
  tags: [
    "ASTRA about",
    "AI agent framework team",
    "mission",
    "open source AI",
  ],
});

const values = [
  {
    title: "Open by Default",
    description:
      "ASTRA is built in the open. Our roadmap, decisions, and code are transparent to the community.",
  },
  {
    title: "Developer First",
    description:
      "Every API, CLI command, and documentation page is designed for developer productivity and clarity.",
  },
  {
    title: "Safety Always",
    description:
      "We build guardrails and safety layers into the framework from day one, not as an afterthought.",
  },
  {
    title: "Modular Design",
    description:
      "No black boxes. Every component is replaceable, extensible, and easy to reason about.",
  },
];

const team = [
  {
    name: "Core Team",
    role: "Framework Architecture",
    description:
      "Designing the core engine, memory systems, and tool orchestration that power every ASTRA agent.",
  },
  {
    name: "ML Research",
    role: "Agent Intelligence",
    description:
      "Advancing reasoning, planning, and adaptive learning techniques for more capable agents.",
  },
  {
    name: "Platform",
    role: "Infrastructure & DX",
    description:
      "Building the runtime, observability tools, and developer experience that make ASTRA production-ready.",
  },
  {
    name: "Community",
    role: "Ecosystem & Support",
    description:
      "Growing the ecosystem through documentation, templates, and supporting developers building with ASTRA.",
  },
];

export default function AboutPage() {
  return (
    <>
      <AstraSection className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AnimatedHero>
          <AstraContainer>
            <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
            <div className="text-center mb-12">
              <AnimatedHeroBadge>
                <AstraBadge variant="primary" className="mb-6">
                  About
                </AstraBadge>
              </AnimatedHeroBadge>
              <AnimatedHeroTitle className="mt-6">
                About ASTRA
              </AnimatedHeroTitle>
              <AnimatedHeroSubtitle>
                Building the future of autonomous AI agents, one module at a time.
              </AnimatedHeroSubtitle>
            </div>
          </AstraContainer>
        </AnimatedHero>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              ASTRA exists to make building intelligent AI agents accessible to every developer. We believe
              the best agent frameworks are modular, transparent, and safe by design. Our goal is to
              provide the foundation so you can focus on what your agents should do, not how they work
              under the hood.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Our Values
          </h2>
          <AnimatedStagger
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
            stagger={0.1}
          >
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <AstraCard className="h-full">
                  <h3 className="font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </AstraCard>
              </StaggerItem>
            ))}
          </AnimatedStagger>

          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            The Team
          </h2>
          <AnimatedStagger
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            stagger={0.08}
          >
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <AstraCard className="h-full text-center">
                  <h3 className="font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <AstraBadge variant="secondary" className="mb-2">
                    {member.role}
                  </AstraBadge>
                  <p className="text-sm text-muted-foreground mt-2">
                    {member.description}
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
