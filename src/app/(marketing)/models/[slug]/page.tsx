import Link from "next/link";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { AstraBadge } from "@/components/shared/astra-badge";
import { AstraButton } from "@/components/shared/astra-button";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { StructuredDataScript, generateModelStructuredData, generateBreadcrumbStructuredData } from "@/lib/structured-data";
import { ArrowLeft, ExternalLink, CheckCircle, XCircle } from "lucide-react";

const models: Record<string, {
  name: string;
  provider: string;
  type: string;
  parameters: string;
  description: string;
  contextWindow: string;
  pricing: string;
  strengths: string[];
  weaknesses: string[];
  benchmarks: { name: string; score: string }[];
}> = {
  "gpt-4o": {
    name: "GPT-4o",
    provider: "OpenAI",
    type: "Chat",
    parameters: "Unknown",
    description: "Most capable OpenAI model for complex tasks with multimodal support.",
    contextWindow: "128K tokens",
    pricing: "$5/1M input, $15/1M output",
    strengths: ["Best general reasoning", "Strong code generation", "Multimodal"],
    weaknesses: ["Higher cost", "Can be verbose", "Rate limits"],
    benchmarks: [
      { name: "MMLU", score: "88.7%" },
      { name: "HumanEval", score: "90.2%" },
      { name: "MATH", score: "76.6%" },
    ],
  },
  "claude-3.5-sonnet": {
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    type: "Chat",
    parameters: "Unknown",
    description: "Balanced performance and speed from Anthropic with 200K context.",
    contextWindow: "200K tokens",
    pricing: "$3/1M input, $15/1M output",
    strengths: ["Massive context window", "Excellent reasoning", "Careful outputs"],
    weaknesses: ["No web access", "Fewer integrations", "Overly cautious"],
    benchmarks: [
      { name: "MMLU", score: "88.7%" },
      { name: "HumanEval", score: "92.0%" },
      { name: "MATH", score: "71.1%" },
    ],
  },
};

const fallbackModel = {
  name: "Model",
  provider: "Unknown",
  type: "Chat",
  parameters: "Unknown",
  description: "Model details coming soon.",
  contextWindow: "TBD",
  pricing: "TBD",
  strengths: ["Strength 1"],
  weaknesses: ["Weakness 1"],
  benchmarks: [{ name: "Benchmark", score: "N/A" }],
};

export function generateStaticParams() {
  return Object.keys(models).map((slug) => ({ slug }));
}

export default async function ModelDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const model = models[slug] || { ...fallbackModel, name: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) };

  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://astra.ai";

  return (
    <>
      <StructuredDataScript
        data={generateModelStructuredData({
          name: model.name,
          description: model.description,
          url: `${siteUrl}/models/${slug}`,
          provider: model.provider,
        })}
      />
      <StructuredDataScript
        data={generateBreadcrumbStructuredData([
          { name: "Models", url: "/models" },
          { name: model.name, url: `/models/${slug}` },
        ])}
      />
      <AstraSection className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AstraContainer>
          <Breadcrumbs
            items={[
              { label: "Models", href: "/models" },
              { label: model.name, href: `/models/${slug}` },
            ]}
          />

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <AstraBadge variant="primary">{model.provider}</AstraBadge>
              <AstraBadge variant="secondary">{model.type}</AstraBadge>
              {model.parameters !== "Unknown" && (
                <AstraBadge variant="secondary">{model.parameters}</AstraBadge>
              )}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {model.name}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {model.description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <AstraBadge variant="secondary" className="text-base px-4 py-1">
                Context: {model.contextWindow}
              </AstraBadge>
              <AstraBadge variant="secondary" className="text-base px-4 py-1">
                {model.pricing}
              </AstraBadge>
            </div>
          </div>
        </AstraContainer>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">Benchmarks</h2>
              <div className="space-y-4">
                {model.benchmarks.map((b) => (
                  <div key={b.name} className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">{b.name}</span>
                      <span className="text-lg font-bold text-astra-primary">{b.score}</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-astra-primary h-2 rounded-full"
                        style={{ width: b.score }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Strengths & Weaknesses</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-green-500 uppercase tracking-wider mb-3">Strengths</h3>
                  <ul className="space-y-2">
                    {model.strengths.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-3">Weaknesses</h3>
                  <ul className="space-y-2">
                    {model.weaknesses.map((w) => (
                      <li key={w} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AstraContainer>
      </AstraSection>
    </>
  );
}
