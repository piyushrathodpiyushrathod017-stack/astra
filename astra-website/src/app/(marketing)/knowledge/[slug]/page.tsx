import Link from "next/link";
import type { Metadata } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { AstraBadge } from "@/components/shared/astra-badge";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import { createMetadata } from "@/lib/seo";

const articles: Record<string, {
  title: string;
  level: string;
  category: string;
  readTime: string;
  content: string[];
}> = {
  "getting-started-with-ai": {
    title: "Getting Started with AI",
    level: "Beginner",
    category: "Fundamentals",
    readTime: "10 min read",
    content: [
      "Artificial Intelligence (AI) is transforming how we work, create, and solve problems. This guide will help you understand the fundamentals and get started with AI tools.",
      "At its core, AI refers to computer systems that can perform tasks that typically require human intelligence. These include understanding language, recognizing patterns, making decisions, and generating content.",
      "The most common form of AI today is the Large Language Model (LLM). These models are trained on vast amounts of text data and can generate human-like responses to prompts. Popular examples include GPT-4, Claude, and Llama.",
      "To get started with AI, you don't need to understand the technical details. Start by experimenting with chatbots like ChatGPT or Claude. Try asking them questions, having them write code, or helping you brainstorm ideas.",
      "As you become more comfortable, explore specialized tools for your domain. There are AI assistants for coding (GitHub Copilot), image generation (Midjourney, DALL-E), writing (Jasper), and many more.",
    ],
  },
  "understanding-large-language-models": {
    title: "Understanding Large Language Models",
    level: "Intermediate",
    category: "Models",
    readTime: "15 min read",
    content: [
      "Large Language Models (LLMs) are the foundation of modern AI applications. Understanding how they work helps you use them more effectively.",
      "LLMs are neural networks trained on massive text datasets. They learn patterns in language - grammar, facts, reasoning patterns, and even coding syntax - by predicting the next word in a sequence.",
      "Key concepts include tokens (how text is broken down for processing), context windows (how much text the model can 'see'), and temperature (how creative vs. deterministic the output is).",
      "Different models have different strengths. GPT-4 excels at complex reasoning, Claude at careful analysis, and specialized models like CodeLlama at programming tasks.",
      "The quality of your prompts significantly impacts output quality. Clear, specific instructions with relevant context produce much better results than vague requests.",
    ],
  },
};

const fallbackArticle = {
  title: "Article",
  level: "Beginner",
  category: "General",
  readTime: "5 min read",
  content: ["Content coming soon."],
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Metadata {
  return createMetadata({
    title: "Knowledge Article",
    description: "Learn AI with comprehensive guides and tutorials on ASTRA.",
    path: "/knowledge",
  });
}

export default async function KnowledgeArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug] || { ...fallbackArticle, title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) };

  return (
    <>
      <AstraSection className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AstraContainer>
          <Breadcrumbs
            items={[
              { label: "Knowledge", href: "/knowledge" },
              { label: article.title, href: `/knowledge/${slug}` },
            ]}
          />

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <AstraBadge variant="primary">{article.level}</AstraBadge>
              <AstraBadge variant="secondary">{article.category}</AstraBadge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {article.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                {article.category}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </div>
            </div>
          </div>
        </AstraContainer>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <article className="max-w-3xl">
            {article.content.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </article>
        </AstraContainer>
      </AstraSection>
    </>
  );
}
