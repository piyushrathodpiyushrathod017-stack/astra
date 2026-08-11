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

const categories: Record<
  string,
  {
    icon: typeof Code;
    title: string;
    description: string;
    tools: Array<{
      name: string;
      description: string;
      subcategory: string;
      rating: string;
      url: string;
    }>;
  }
> = {
  coding: {
    icon: Code,
    title: "AI Coding Tools",
    description:
      "Best AI-powered coding tools and assistants: GitHub Copilot, Cursor, Tabnine, and more. Boost your development workflow.",
    tools: [
      { name: "GitHub Copilot", description: "AI pair programmer that suggests code completions and entire functions.", subcategory: "Code Completion", rating: "4.6", url: "https://github.com/features/copilot" },
      { name: "Cursor", description: "AI-first code editor built on VS Code with advanced AI capabilities.", subcategory: "Code Editor", rating: "4.7", url: "https://cursor.sh" },
      { name: "Tabnine", description: "AI code completion that runs locally or in the cloud.", subcategory: "Code Completion", rating: "4.5", url: "https://www.tabnine.com" },
      { name: "Codeium", description: "Free AI code completion and chat for developers.", subcategory: "Code Completion", rating: "4.4", url: "https://codeium.com" },
      { name: "Amazon CodeWhisperer", description: "AI coding companion from AWS for building applications.", subcategory: "Code Generation", rating: "4.3", url: "https://aws.amazon.com/codewhisperer" },
      { name: "Sourcegraph Cody", description: "AI coding assistant that understands your entire codebase.", subcategory: "Code Intelligence", rating: "4.5", url: "https://sourcegraph.com/cody" },
    ],
  },
  "local-ai": {
    icon: Globe,
    title: "Local AI Tools",
    description:
      "Run AI models locally on your own hardware. Privacy-first, offline-capable AI tools and frameworks.",
    tools: [
      { name: "Ollama", description: "Run large language models locally with easy setup.", subcategory: "Model Runtime", rating: "4.8", url: "https://ollama.com" },
      { name: "LM Studio", description: "Discover, download, and run local LLMs.", subcategory: "Model Runtime", rating: "4.7", url: "https://lmstudio.ai" },
      { name: "LocalAI", description: "Free, Open source OpenAI-compatible API for local AI.", subcategory: "API Server", rating: "4.5", url: "https://localai.io" },
      { name: "GPT4All", description: "Run open-source chatbots locally on your device.", subcategory: "Chat Interface", rating: "4.4", url: "https://gpt4all.io" },
      { name: "llama.cpp", description: "Port of Meta's LLaMA model in C/C++.", subcategory: "Model Runtime", rating: "4.6", url: "https://github.com/ggerganov/llama.cpp" },
      { name: "text-generation-webui", description: "Gradio UI for running LLMs locally.", subcategory: "Chat Interface", rating: "4.3", url: "https://github.com/oobabooga/text-generation-webui" },
    ],
  },
  apis: {
    icon: Sparkles,
    title: "AI APIs & Services",
    description:
      "Integrate AI capabilities into your applications with these powerful APIs and cloud services.",
    tools: [
      { name: "OpenAI API", description: "GPT-4, DALL-E, Whisper, and more from OpenAI.", subcategory: "General AI", rating: "4.7", url: "https://platform.openai.com" },
      { name: "Anthropic API", description: "Claude models for advanced AI assistance.", subcategory: "Language Models", rating: "4.8", url: "https://console.anthropic.com" },
      { name: "Google AI Studio", description: "Gemini models and AI tools from Google.", subcategory: "General AI", rating: "4.6", url: "https://aistudio.google.com" },
      { name: "Replicate", description: "Run open-source models with a cloud API.", subcategory: "Model Hosting", rating: "4.5", url: "https://replicate.com" },
      { name: "Hugging Face", description: "The AI community hub for models and datasets.", subcategory: "Model Hub", rating: "4.7", url: "https://huggingface.co" },
      { name: "Cohere", description: "Enterprise AI for search, summarization, and generation.", subcategory: "Enterprise AI", rating: "4.4", url: "https://cohere.com" },
    ],
  },
  hardware: {
    icon: Cpu,
    title: "AI Hardware",
    description:
      "Specialized hardware for AI inference and training: GPUs, TPUs, and custom AI accelerators.",
    tools: [
      { name: "NVIDIA H100", description: "Flagship GPU for AI training and inference.", subcategory: "GPU", rating: "4.9", url: "https://www.nvidia.com" },
      { name: "AMD MI300X", description: "High-performance AI accelerator for data centers.", subcategory: "GPU", rating: "4.7", url: "https://www.amd.com" },
      { name: "Google TPU v5p", description: "Custom AI accelerator for large-scale training.", subcategory: "TPU", rating: "4.8", url: "https://cloud.google.com/tpu" },
      { name: "Apple M4 Ultra", description: "Unified memory architecture for on-device AI.", subcategory: "SoC", rating: "4.6", url: "https://www.apple.com" },
      { name: "Groq LPU", description: "Ultra-fast AI inference with Language Processing Units.", subcategory: "Inference Chip", rating: "4.7", url: "https://groq.com" },
      { name: "Cerebras CS-3", description: "Wafer-scale chip for AI training.", subcategory: "Training Chip", rating: "4.5", url: "https://cerebras.ai" },
    ],
  },
  utilities: {
    icon: Wrench,
    title: "AI Utilities",
    description:
      "Productivity, creative, and workflow AI tools for every use case.",
    tools: [
      { name: "ChatGPT", description: "OpenAI's conversational AI assistant.", subcategory: "Chat", rating: "4.8", url: "https://chat.openai.com" },
      { name: "Claude", description: "Anthropic's helpful, harmless, and honest AI.", subcategory: "Chat", rating: "4.7", url: "https://claude.ai" },
      { name: "Midjourney", description: "AI image generation from text prompts.", subcategory: "Image Generation", rating: "4.7", url: "https://midjourney.com" },
      { name: "Runway", description: "AI video generation and editing.", subcategory: "Video", rating: "4.4", url: "https://runway.com" },
      { name: "ElevenLabs", description: "AI voice synthesis and cloning.", subcategory: "Audio", rating: "4.5", url: "https://elevenlabs.io" },
      { name: "Notion AI", description: "AI-powered workspace assistant.", subcategory: "Productivity", rating: "4.3", url: "https://notion.so" },
    ],
  },
  research: {
    icon: BookOpen,
    title: "AI Research",
    description:
      "Leading AI research labs, publications, and breakthroughs shaping the future of AI.",
    tools: [
      { name: "OpenAI Research", description: "Pioneering research in artificial general intelligence.", subcategory: "Research Lab", rating: "4.9", url: "https://openai.com/research" },
      { name: "Google DeepMind", description: "AI research lab behind AlphaFold and Gemini.", subcategory: "Research Lab", rating: "4.8", url: "https://deepmind.google" },
      { name: "Anthropic Research", description: "AI safety and alignment research.", subcategory: "Research Lab", rating: "4.7", url: "https://anthropic.com/research" },
      { name: "Meta AI Research", description: "Open-source AI research and models.", subcategory: "Research Lab", rating: "4.6", url: "https://ai.meta.com" },
      { name: "arXiv ML", description: "Preprint server for machine learning papers.", subcategory: "Publications", rating: "4.5", url: "https://arxiv.org/list/cs.LG" },
      { name: "Papers With Code", description: "Machine learning papers with code implementations.", subcategory: "Publications", rating: "4.7", url: "https://paperswithcode.com" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({ category }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Metadata {
  // We need to unwrap params for Next.js 15+
  // But generateMetadata is sync, so we handle this in the page component
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
  const data = categories[category];

  if (!data) {
    notFound();
  }

  const Icon = data.icon;

  return (
    <>
      <AstraSection className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AstraContainer>
          <Breadcrumbs
            items={[
              { label: "Atlas", href: "/atlas" },
              { label: data.title, href: `/atlas/${category}` },
            ]}
          />
          <div className="text-center mb-12">
            <AstraBadge variant="primary" className="mb-6">
              <Icon className="h-3.5 w-3.5 mr-1 inline-block" />
              AI Atlas
            </AstraBadge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {data.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {data.description}
            </p>
          </div>
        </AstraContainer>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <AstraGrid cols={2}>
            {data.tools.map((tool) => (
              <AstraCard key={tool.name}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <Icon className="h-5 w-5 text-astra-primary" />
                      {tool.name}
                    </h3>
                    <AstraBadge variant="secondary" className="mt-1">
                      {tool.subcategory}
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
    </>
  );
}
