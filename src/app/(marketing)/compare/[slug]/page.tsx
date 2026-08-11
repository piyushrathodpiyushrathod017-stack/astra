import Link from "next/link";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { AstraBadge } from "@/components/shared/astra-badge";
import { ArrowLeft, CheckCircle, XCircle, Minus } from "lucide-react";

const comparisons: Record<string, {
  title: string;
  category: string;
  items: { name: string; features: Record<string, "yes" | "no" | "partial">; rating: string }[];
  criteria: string[];
  verdict: string;
}> = {
  "gpt-4-vs-claude-35-sonnet": {
    title: "GPT-4 vs Claude 3.5 Sonnet",
    category: "Chat Models",
    items: [
      {
        name: "GPT-4o",
        rating: "4.8",
        features: {
          "Text Generation": "yes",
          "Code Generation": "yes",
          "Image Analysis": "yes",
          "Context Window": "partial",
          "Web Access": "yes",
          "Plugin Ecosystem": "yes",
        },
      },
      {
        name: "Claude 3.5 Sonnet",
        rating: "4.7",
        features: {
          "Text Generation": "yes",
          "Code Generation": "yes",
          "Image Analysis": "yes",
          "Context Window": "yes",
          "Web Access": "no",
          "Plugin Ecosystem": "no",
        },
      },
    ],
    criteria: ["Text Generation", "Code Generation", "Image Analysis", "Context Window", "Web Access", "Plugin Ecosystem"],
    verdict: "GPT-4o excels in ecosystem and versatility. Claude 3.5 Sonnet wins on context window and careful reasoning.",
  },
};

const fallbackComparison = {
  title: "Comparison",
  category: "General",
  items: [
    { name: "Option A", rating: "4.5", features: {} as Record<string, "yes" | "no" | "partial"> },
    { name: "Option B", rating: "4.3", features: {} as Record<string, "yes" | "no" | "partial"> },
  ],
  criteria: ["Feature 1", "Feature 2", "Feature 3"],
  verdict: "Comparison details coming soon.",
};

export function generateStaticParams() {
  return Object.keys(comparisons).map((slug) => ({ slug }));
}

export default async function CompareDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comp = comparisons[slug] || { ...fallbackComparison, title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) };

  return (
    <>
      <AstraSection className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AstraContainer>
          <Link
            href="/compare"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-astra-primary mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Comparisons
          </Link>

          <div className="max-w-3xl">
            <AstraBadge variant="primary" className="mb-4">{comp.category}</AstraBadge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {comp.title}
            </h1>
          </div>
        </AstraContainer>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 border-b border-border font-semibold text-foreground">Criteria</th>
                  {comp.items.map((item) => (
                    <th key={item.name} className="text-center p-4 border-b border-border">
                      <span className="font-semibold text-foreground">{item.name}</span>
                      <div className="flex items-center justify-center gap-1 mt-1">
                        <span className="text-sm text-muted-foreground">Rating: {item.rating}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comp.criteria.map((criterion) => (
                  <tr key={criterion} className="hover:bg-secondary/50 transition-colors">
                    <td className="p-4 border-b border-border font-medium text-foreground">{criterion}</td>
                    {comp.items.map((item) => {
                      const value = item.features[criterion] || "no";
                      return (
                        <td key={item.name} className="p-4 border-b border-border text-center">
                          {value === "yes" && <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />}
                          {value === "partial" && <Minus className="h-5 w-5 text-yellow-500 mx-auto" />}
                          {value === "no" && <XCircle className="h-5 w-5 text-red-500 mx-auto" />}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 rounded-lg border border-border bg-card">
            <h2 className="text-xl font-bold text-foreground mb-3">Verdict</h2>
            <p className="text-muted-foreground">{comp.verdict}</p>
          </div>
        </AstraContainer>
      </AstraSection>
    </>
  );
}
