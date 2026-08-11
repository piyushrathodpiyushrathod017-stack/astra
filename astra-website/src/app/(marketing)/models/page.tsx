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
import { Database } from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "AI Models Directory",
  description:
    "Browse and compare AI models from OpenAI, Anthropic, Google, Meta, Mistral, and more. Find the right model for your use case.",
  path: "/models",
  tags: [
    "AI models",
    "GPT-4",
    "Claude",
    "Gemini",
    "Llama",
    "language models",
    "AI model comparison",
    "LLM directory",
  ],
});

const models = [
  { name: "GPT-4o", provider: "OpenAI", type: "Chat", parameters: "Unknown", description: "Most capable OpenAI model for complex tasks." },
  { name: "Claude 3.5 Sonnet", provider: "Anthropic", type: "Chat", parameters: "Unknown", description: "Balanced performance and speed from Anthropic." },
  { name: "Gemini 1.5 Pro", provider: "Google", type: "Chat", parameters: "Unknown", description: "Google's most capable multimodal model." },
  { name: "Llama 3.1 405B", provider: "Meta", type: "Open Source", parameters: "405B", description: "Meta's largest open-source language model." },
  { name: "Mistral Large", provider: "Mistral", type: "Chat", parameters: "Unknown", description: "High-performance model from Mistral AI." },
  { name: "Command R+", provider: "Cohere", type: "Chat", parameters: "Unknown", description: "Optimized for RAG and tool use." },
  { name: "DALL-E 3", provider: "OpenAI", type: "Image", parameters: "Unknown", description: "Text-to-image generation model." },
  { name: "Stable Diffusion XL", provider: "Stability AI", type: "Image", parameters: "3.5B", description: "Open-source image generation model." },
  { name: "Whisper", provider: "OpenAI", type: "Audio", parameters: "1.5B", description: "Speech recognition model." },
];

export default function ModelsPage() {
  return (
    <>
      <AstraSection className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AnimatedHero>
          <AstraContainer>
            <Breadcrumbs items={[{ label: "Models", href: "/models" }]} />
            <div className="text-center mb-12">
              <AnimatedHeroBadge>
                <AstraBadge variant="primary" className="mb-6">
                  Models Directory
                </AstraBadge>
              </AnimatedHeroBadge>
              <AnimatedHeroTitle className="mt-6">
                AI Models
              </AnimatedHeroTitle>
              <AnimatedHeroSubtitle>
                Browse and compare AI models from leading providers.
              </AnimatedHeroSubtitle>
            </div>
          </AstraContainer>
        </AnimatedHero>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
            {models.map((model) => (
              <StaggerItem key={model.name}>
                <AstraCard>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Database className="h-5 w-5 text-astra-primary" />
                      <h3 className="font-semibold text-foreground">{model.name}</h3>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-2">
                    <AstraBadge variant="primary">{model.provider}</AstraBadge>
                    <AstraBadge variant="secondary">{model.type}</AstraBadge>
                    {model.parameters !== "Unknown" && (
                      <AstraBadge variant="secondary">{model.parameters}</AstraBadge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{model.description}</p>
                </AstraCard>
              </StaggerItem>
            ))}
          </AnimatedStagger>
        </AstraContainer>
      </AstraSection>
    </>
  );
}
