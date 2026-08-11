"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Route } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { AstraBadge } from "@/components/shared/astra-badge";
import { Search, Wrench, Database, BarChart3, BookOpen, FileText, ArrowRight } from "lucide-react";

type SearchableItem = {
  title: string;
  description: string;
  category: string;
  type: "tool" | "model" | "comparison" | "article" | "blog";
  url: string;
};

const allItems: SearchableItem[] = [
  { title: "ChatGPT", description: "OpenAI's conversational AI assistant.", category: "Chat", type: "tool", url: "/tools/chatgpt" },
  { title: "Claude", description: "Anthropic's helpful, harmless, and honest AI.", category: "Chat", type: "tool", url: "/tools/claude" },
  { title: "Midjourney", description: "AI image generation from text prompts.", category: "Image", type: "tool", url: "/tools/midjourney" },
  { title: "GPT-4o", description: "Most capable OpenAI model.", category: "OpenAI", type: "model", url: "/models/gpt-4o" },
  { title: "Claude 3.5 Sonnet", description: "Balanced performance and speed.", category: "Anthropic", type: "model", url: "/models/claude-3.5-sonnet" },
  { title: "GPT-4 vs Claude 3.5 Sonnet", description: "Chat model comparison.", category: "Chat Models", type: "comparison", url: "/compare/gpt-4-vs-claude-35-sonnet" },
  { title: "Getting Started with AI", description: "Beginner guide to AI.", category: "Fundamentals", type: "article", url: "/knowledge/getting-started-with-ai" },
  { title: "The Future of AI in 2026", description: "AI trends for the coming year.", category: "Trends", type: "blog", url: "/blog/future-of-ai-2026" },
];

const typeIcons = {
  tool: Wrench,
  model: Database,
  comparison: BarChart3,
  article: BookOpen,
  blog: FileText,
};

const typeLabels = {
  tool: "Tool",
  model: "Model",
  comparison: "Comparison",
  article: "Article",
  blog: "Blog",
};

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return allItems;
    const lower = query.toLowerCase();
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(lower) ||
        item.description.toLowerCase().includes(lower) ||
        item.category.toLowerCase().includes(lower)
    );
  }, [query]);

  const grouped = useMemo(() => {
    const groups: Record<string, SearchableItem[]> = {};
    for (const item of results) {
      if (!groups[item.type]) groups[item.type] = [];
      groups[item.type].push(item);
    }
    return groups;
  }, [results]);

  return (
    <>
      <AstraSection className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AstraContainer>
          <div className="text-center mb-12">
            <AstraBadge variant="primary" className="mb-6">
              Search
            </AstraBadge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Search ASTRA
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Find tools, models, comparisons, articles, and more.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search tools, models, articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-astra-primary focus:border-transparent transition-all"
              />
            </div>
          </div>
        </AstraContainer>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          {results.length === 0 ? (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">No results found</h2>
              <p className="text-muted-foreground">Try adjusting your search terms.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {Object.entries(grouped).map(([type, items]) => {
                const Icon = typeIcons[type as keyof typeof typeIcons];
                return (
                  <div key={type}>
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Icon className="h-5 w-5 text-astra-primary" />
                      {typeLabels[type as keyof typeof typeLabels]}s
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {items.map((item) => (
                        <Link key={item.title} href={item.url as Route}>
                          <div className="p-4 rounded-lg border border-border bg-card hover:border-astra-primary/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] transition-all cursor-pointer group">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold text-foreground group-hover:text-astra-primary transition-colors">
                                  {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                              </div>
                              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-astra-primary transition-colors shrink-0 mt-1" />
                            </div>
                            <AstraBadge variant="secondary" className="mt-3">{item.category}</AstraBadge>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </AstraContainer>
      </AstraSection>
    </>
  );
}
