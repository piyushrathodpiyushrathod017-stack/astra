import Link from "next/link";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { AstraCard } from "@/components/shared/astra-card";
import { AstraBadge } from "@/components/shared/astra-badge";
import { AstraButton } from "@/components/shared/astra-button";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { StructuredDataScript, generateToolStructuredData, generateBreadcrumbStructuredData } from "@/lib/structured-data";
import { ArrowLeft, Star, ExternalLink, CheckCircle, XCircle, BarChart3 } from "lucide-react";

const tools: Record<string, {
  name: string;
  category: string;
  rating: string;
  description: string;
  website: string;
  pricing: string;
  features: { name: string; supported: boolean }[];
  pros: string[];
  cons: string[];
}> = {
  chatgpt: {
    name: "ChatGPT",
    category: "Chat",
    rating: "4.8",
    description: "OpenAI's conversational AI assistant powered by GPT-4o and GPT-4 models.",
    website: "https://chat.openai.com",
    pricing: "Free / $20/mo Plus",
    features: [
      { name: "Text Generation", supported: true },
      { name: "Code Generation", supported: true },
      { name: "Image Analysis", supported: true },
      { name: "File Upload", supported: true },
      { name: "Web Browsing", supported: true },
      { name: "Plugins", supported: true },
    ],
    pros: ["Most capable general-purpose model", "Huge ecosystem of plugins", "Strong code generation"],
    cons: ["Can be verbose", "Knowledge cutoff limitations", "Rate limits on free tier"],
  },
  claude: {
    name: "Claude",
    category: "Chat",
    rating: "4.7",
    description: "Anthropic's helpful, harmless, and honest AI assistant.",
    website: "https://claude.ai",
    pricing: "Free / $20/mo Pro",
    features: [
      { name: "Text Generation", supported: true },
      { name: "Code Generation", supported: true },
      { name: "Image Analysis", supported: true },
      { name: "File Upload", supported: true },
      { name: "Web Browsing", supported: false },
      { name: "Long Context", supported: true },
    ],
    pros: ["Excellent reasoning", "200K context window", "Nuanced responses"],
    cons: ["No web browsing", "Fewer integrations", "Can be overly cautious"],
  },
  midjourney: {
    name: "Midjourney",
    category: "Image",
    rating: "4.7",
    description: "AI image generation from text prompts, known for artistic quality.",
    website: "https://midjourney.com",
    pricing: "$10/mo Basic",
    features: [
      { name: "Text to Image", supported: true },
      { name: "Image to Image", supported: true },
      { name: "Style Transfer", supported: true },
      { name: "Upscaling", supported: true },
      { name: "Inpainting", supported: true },
      { name: "API Access", supported: false },
    ],
    pros: ["Best artistic quality", "Active community", "Regular model updates"],
    cons: ["Discord-only interface", "No API", "Subscription required"],
  },
};

const fallbackTool = {
  name: "Tool",
  category: "General",
  rating: "4.5",
  description: "AI tool details coming soon.",
  website: "#",
  pricing: "TBD",
  features: [
    { name: "Feature 1", supported: true },
    { name: "Feature 2", supported: true },
    { name: "Feature 3", supported: false },
  ],
  pros: ["Pro 1", "Pro 2"],
  cons: ["Con 1"],
};

export function generateStaticParams() {
  return Object.keys(tools).map((slug) => ({ slug }));
}

export default async function ToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = tools[slug] || { ...fallbackTool, name: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) };

  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://astra.ai";

  return (
    <>
      <StructuredDataScript
        data={generateToolStructuredData({
          name: tool.name,
          description: tool.description,
          url: `${siteUrl}/tools/${slug}`,
          rating: parseFloat(tool.rating),
          reviewCount: 100,
          pricing: tool.pricing.toLowerCase(),
        })}
      />
      <StructuredDataScript
        data={generateBreadcrumbStructuredData([
          { name: "Tools", url: "/tools" },
          { name: tool.name, url: `/tools/${slug}` },
        ])}
      />
      <AstraSection className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AstraContainer>
          <Breadcrumbs
            items={[
              { label: "Tools", href: "/tools" },
              { label: tool.name, href: `/tools/${slug}` },
            ]}
          />

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <AstraBadge variant="primary">{tool.category}</AstraBadge>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium">{tool.rating}</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {tool.name}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {tool.description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <AstraButton href={tool.website} size="lg">
                Visit Website
                <ExternalLink className="h-4 w-4" />
              </AstraButton>
              <AstraBadge variant="secondary" className="text-base px-4 py-1">
                {tool.pricing}
              </AstraBadge>
            </div>
          </div>
        </AstraContainer>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tool.features.map((feature) => (
                  <div key={feature.name} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card">
                    {feature.supported ? (
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    ) : (
                      <XCircle className="h-5 w-5 text-muted-foreground shrink-0" />
                    )}
                    <span className={feature.supported ? "text-foreground" : "text-muted-foreground"}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Pros & Cons</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-green-500 uppercase tracking-wider mb-3">Pros</h3>
                  <ul className="space-y-2">
                    {tool.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-3">Cons</h3>
                  <ul className="space-y-2">
                    {tool.cons.map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AstraContainer>
      </AstraSection>

      <AstraSection className="py-12 bg-secondary/50">
        <AstraContainer>
          <h2 className="text-2xl font-bold text-foreground mb-6">Related Comparisons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/compare/gpt-4-vs-claude" className="group">
              <AstraCard className="transition-all group-hover:border-astra-primary/30">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="h-4 w-4 text-astra-primary" />
                  <span className="font-medium text-foreground">GPT-4 vs Claude 3.5 Sonnet</span>
                </div>
                <AstraBadge variant="secondary">Chat Models</AstraBadge>
              </AstraCard>
            </Link>
            <Link href="/compare/copilot-vs-cursor" className="group">
              <AstraCard className="transition-all group-hover:border-astra-primary/30">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="h-4 w-4 text-astra-primary" />
                  <span className="font-medium text-foreground">Copilot vs Cursor</span>
                </div>
                <AstraBadge variant="secondary">AI Coding</AstraBadge>
              </AstraCard>
            </Link>
            <Link href="/compare" className="group">
              <AstraCard className="transition-all group-hover:border-astra-primary/30">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="h-4 w-4 text-astra-primary" />
                  <span className="font-medium text-foreground">View All Comparisons</span>
                </div>
                <AstraBadge variant="secondary">Browse</AstraBadge>
              </AstraCard>
            </Link>
          </div>
        </AstraContainer>
      </AstraSection>
    </>
  );
}
