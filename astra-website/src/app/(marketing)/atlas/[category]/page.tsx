import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { AstraGrid } from "@/components/layout/astra-grid";
import { AstraCard } from "@/components/shared/astra-card";
import { AstraBadge } from "@/components/shared/astra-badge";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Code, Globe, Sparkles, Cpu, Wrench, BookOpen, ExternalLink, Star } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { tools as allTools } from "@/lib/mock-data";

const categoryMeta: Record<string, { icon: typeof Code; title: string; description: string }> = {
  coding: {
    icon: Code,
    title: "AI Coding Tools",
    description:
      "Best AI-powered coding tools and assistants: GitHub Copilot, Cursor, Tabnine, and more. Boost your development workflow.",
  },
  "local-ai": {
    icon: Globe,
    title: "Local AI Tools",
    description:
      "Run AI models locally on your own hardware. Privacy-first, offline-capable AI tools and frameworks.",
  },
  apis: {
    icon: Sparkles,
    title: "AI APIs & Services",
    description:
      "Integrate AI capabilities into your applications with these powerful APIs and cloud services.",
  },
  hardware: {
    icon: Cpu,
    title: "AI Hardware",
    description:
      "Specialized hardware for AI inference and training: GPUs, TPUs, and custom AI accelerators.",
  },
  utilities: {
    icon: Wrench,
    title: "AI Utilities",
    description:
      "Productivity, creative, and workflow AI tools for every use case.",
  },
  research: {
    icon: BookOpen,
    title: "AI Research",
    description:
      "Leading AI research labs, publications, and breakthroughs shaping the future of AI.",
  },
};

const categoryToolFilter: Record<string, string[]> = {
  coding: ["Coding"],
  "local-ai": ["Local AI"],
  apis: ["Search"],
  hardware: [],
  utilities: ["Chat", "Image", "Video", "Audio", "Productivity"],
  research: [],
};

export function generateStaticParams() {
  return Object.keys(categoryMeta).map((category) => ({ category }));
}

export function generateMetadata(): Metadata {
  return createMetadata({
    title: "AI Atlas Category",
    description: "Explore AI tools and resources in this category.",
    path: "/atlas",
  });
}

export default async function AtlasCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = categoryMeta[category];

  if (!meta) {
    notFound();
  }

  const Icon = meta.icon;
  const filterCategories = categoryToolFilter[category] ?? [];
  const tools = filterCategories.length > 0
    ? allTools.filter((t) => filterCategories.includes(t.category))
    : allTools;

  return (
    <>
      <AstraSection className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AstraContainer>
          <Breadcrumbs
            items={[
              { label: "Atlas", href: "/atlas" },
              { label: meta.title, href: `/atlas/${category}` },
            ]}
          />
          <div className="text-center mb-12">
            <AstraBadge variant="primary" className="mb-6">
              <Icon className="h-3.5 w-3.5 mr-1 inline-block" />
              AI Atlas
            </AstraBadge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {meta.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {meta.description}
            </p>
          </div>
        </AstraContainer>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <AstraGrid cols={2}>
            {tools.map((tool) => (
              <AstraCard key={tool.id}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <Icon className="h-5 w-5 text-astra-primary" />
                      {tool.name}
                    </h3>
                    <AstraBadge variant="secondary" className="mt-1">
                      {tool.category}
                    </AstraBadge>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-foreground">{tool.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{tool.description}</p>
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-astra-primary hover:underline"
                >
                  Visit <ExternalLink className="h-3 w-3" />
                </a>
              </AstraCard>
            ))}
          </AstraGrid>
        </AstraContainer>
      </AstraSection>
    </>
  );
}
