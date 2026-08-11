import type { Metadata } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { AstraGrid } from "@/components/layout/astra-grid";
import { AstraCard } from "@/components/shared/astra-card";
import { AstraBadge } from "@/components/shared/astra-badge";
import { Globe, Star, ExternalLink } from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Local AI Tools",
  description:
    "Run AI models locally on your own hardware. Discover Ollama, LM Studio, GPT4All, and other local AI tools for privacy-first inference.",
  path: "/atlas/local-ai",
  tags: [
    "local AI",
    "run AI locally",
    "Ollama",
    "LM Studio",
    "GPT4All",
    "private AI",
    "offline AI",
    "self-hosted AI",
  ],
});

const tools = [
  {
    name: "Ollama",
    description: "Run large language models locally on your machine with ease.",
    category: "Model Runner",
    rating: "4.8",
    url: "https://ollama.ai",
  },
  {
    name: "LM Studio",
    description: "Discover, download, and run local LLMs with a beautiful interface.",
    category: "Model Runner",
    rating: "4.7",
    url: "https://lmstudio.ai",
  },
  {
    name: "LocalAI",
    description: "Free, open source alternative to OpenAI running on consumer hardware.",
    category: "API Server",
    rating: "4.5",
    url: "https://localai.io",
  },
  {
    name: "llama.cpp",
    description: "Port of Meta's LLaMA model in C/C++ for local inference.",
    category: "Inference Engine",
    rating: "4.6",
    url: "https://github.com/ggerganov/llama.cpp",
  },
  {
    name: "GPT4All",
    description: "Run GPT4All-style models on your local machine privately.",
    category: "Desktop App",
    rating: "4.4",
    url: "https://gpt4all.io",
  },
  {
    name: "text-generation-webui",
    description: "A Gradio UI for running large language models locally.",
    category: "Web UI",
    rating: "4.3",
    url: "https://github.com/oobabooga/text-generation-webui",
  },
];

export default function AtlasLocalAiPage() {
  return (
    <>
      <AstraSection className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AstraContainer>
          <div className="text-center mb-12">
            <AstraBadge variant="primary" className="mb-6">
              Local AI
            </AstraBadge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Run AI Locally
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Run AI models on your own hardware. No cloud, no API keys,
              no data leaving your device.
            </p>
          </div>
        </AstraContainer>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <AstraGrid cols={2}>
            {tools.map((tool) => (
              <AstraCard key={tool.name}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <Globe className="h-5 w-5 text-astra-primary" />
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
                  href={tool.url}
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

      <AstraSection className="py-12 bg-secondary/50">
        <AstraContainer>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Why Run AI Locally?
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: "Privacy", desc: "Your data never leaves your device." },
                { title: "No Costs", desc: "No API fees or subscription required." },
                { title: "Offline", desc: "Works without an internet connection." },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AstraContainer>
      </AstraSection>
    </>
  );
}
