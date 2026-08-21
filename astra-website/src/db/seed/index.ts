import { getDb } from "@/db/client";
import {
  tools,
  models,
  categories,
  providers,
  articles,
  comparisons,
  tags,
  knowledgeTopics,
  knowledgeArticles,
} from "@/db/schema";

export async function seed() {
  if (!process.env.DATABASE_URL) {
    console.warn("DATABASE_URL is not set. Skipping seed.");
    return;
  }

  const db = getDb();

  console.log("Seeding categories...");
  await db.insert(categories).values([
    {
      name: "AI Chat",
      slug: "ai-chat",
      description: "Conversational AI assistants and chatbots",
      iconName: "MessageSquare",
      sortOrder: 1,
    },
    {
      name: "AI Coding",
      slug: "ai-coding",
      description: "AI-powered code editors and dev tools",
      iconName: "Code",
      sortOrder: 2,
    },
    {
      name: "Image Generation",
      slug: "image-generation",
      description: "AI tools for creating and editing images",
      iconName: "Image",
      sortOrder: 3,
    },
    {
      name: "Productivity",
      slug: "productivity",
      description: "AI tools for workflow automation and productivity",
      iconName: "Zap",
      sortOrder: 4,
    },
  ]);

  console.log("Seeding providers...");
  await db.insert(providers).values([
    {
      name: "OpenAI",
      slug: "openai",
      description: "Creator of GPT models and DALL-E",
      websiteUrl: "https://openai.com",
      isVerified: true,
    },
    {
      name: "Anthropic",
      slug: "anthropic",
      description: "Creator of Claude models",
      websiteUrl: "https://anthropic.com",
      isVerified: true,
    },
    {
      name: "Google",
      slug: "google",
      description: "Creator of Gemini models",
      websiteUrl: "https://deepmind.google",
      isVerified: true,
    },
  ]);

  console.log("Seeding tags...");
  await db.insert(tags).values([
    { name: "Free Tier", slug: "free-tier" },
    { name: "Open Source", slug: "open-source" },
    { name: "API Available", slug: "api-available" },
    { name: "Local", slug: "local" },
    { name: "Enterprise", slug: "enterprise" },
  ]);

  console.log("Seeding tools...");
  await db.insert(tools).values([
    {
      name: "ChatGPT",
      slug: "chatgpt",
      description: "OpenAI's conversational AI assistant powered by GPT models.",
      shortDescription: "AI chat assistant by OpenAI",
      websiteUrl: "https://chat.openai.com",
      category: "AI Chat",
      pricing: "freemium",
      hasFreeTier: true,
      hasApi: true,
      isOpenSource: false,
      platforms: ["web", "ios", "android"],
      capabilities: ["chat", "code", "image-generation"],
      verificationStatus: "verified",
    },
    {
      name: "Claude",
      slug: "claude",
      description: "Anthropic's AI assistant focused on safety and helpfulness.",
      shortDescription: "Safe, helpful AI assistant by Anthropic",
      websiteUrl: "https://claude.ai",
      category: "AI Chat",
      pricing: "freemium",
      hasFreeTier: true,
      hasApi: true,
      isOpenSource: false,
      platforms: ["web", "ios", "android"],
      capabilities: ["chat", "analysis", "code"],
      verificationStatus: "verified",
    },
    {
      name: "GitHub Copilot",
      slug: "github-copilot",
      description: "AI pair programmer that helps you write better code faster.",
      shortDescription: "AI-powered code completion",
      websiteUrl: "https://github.com/features/copilot",
      category: "AI Coding",
      pricing: "subscription",
      hasFreeTier: false,
      hasApi: false,
      isOpenSource: false,
      platforms: ["vscode", "jetbrains", "neovim"],
      capabilities: ["code-completion", "chat", "refactoring"],
      verificationStatus: "verified",
    },
  ]);

  console.log("Seeding models...");
  await db.insert(models).values([
    {
      name: "GPT-4o",
      slug: "gpt-4o",
      provider: "OpenAI",
      providerSlug: "openai",
      description: "OpenAI's fastest and most capable multimodal model.",
      contextWindow: 128000,
      inputModalities: ["text", "image", "audio"],
      outputModalities: ["text"],
      hasReasoning: true,
      hasToolCalling: true,
      hasVision: true,
      parameters: "Unknown",
      license: "proprietary",
      verificationStatus: "verified",
    },
    {
      name: "Claude 3.5 Sonnet",
      slug: "claude-3-5-sonnet",
      provider: "Anthropic",
      providerSlug: "anthropic",
      description: "Anthropic's most capable model balancing intelligence and speed.",
      contextWindow: 200000,
      inputModalities: ["text", "image"],
      outputModalities: ["text"],
      hasReasoning: true,
      hasToolCalling: true,
      hasVision: true,
      parameters: "Unknown",
      license: "proprietary",
      verificationStatus: "verified",
    },
    {
      name: "Gemini 1.5 Pro",
      slug: "gemini-1-5-pro",
      provider: "Google",
      providerSlug: "google",
      description: "Google's highly capable model with long context understanding.",
      contextWindow: 2000000,
      inputModalities: ["text", "image", "audio", "video"],
      outputModalities: ["text"],
      hasReasoning: true,
      hasToolCalling: true,
      hasVision: true,
      parameters: "Unknown",
      license: "proprietary",
      verificationStatus: "verified",
    },
  ]);

  console.log("Seeding articles...");
  await db.insert(articles).values([
    {
      title: "Getting Started with AI Agents",
      slug: "getting-started-ai-agents",
      summary: "A beginner's guide to building your first AI agent.",
      category: "tutorial",
      tags: ["ai-agents", "beginner", "tutorial"],
      author: "ASTRA Team",
      readingTime: 8,
      difficulty: "beginner",
      featured: true,
      status: "published",
    },
    {
      title: "Understanding Tool Orchestration",
      slug: "understanding-tool-orchestration",
      summary: "How AI agents select and use tools to accomplish tasks.",
      category: "guide",
      tags: ["tools", "architecture", "guide"],
      author: "ASTRA Team",
      readingTime: 12,
      difficulty: "intermediate",
      featured: false,
      status: "published",
    },
  ]);

  console.log("Seeding comparisons...");
  await db.insert(comparisons).values([
    {
      title: "GPT-4o vs Claude 3.5 Sonnet",
      slug: "gpt-4o-vs-claude-3-5-sonnet",
      entityType: "model",
      entityASlug: "gpt-4o",
      entityBSlug: "claude-3-5-sonnet",
      entityAName: "GPT-4o",
      entityBName: "Claude 3.5 Sonnet",
      summary: "A detailed comparison of two leading AI models.",
      verdict: "Both are excellent choices depending on your use case.",
      status: "published",
    },
  ]);

  console.log("Seeding knowledge topics...");
  const [topic] = await db
    .insert(knowledgeTopics)
    .values({
      name: "AI Fundamentals",
      slug: "ai-fundamentals",
      description: "Core concepts and terminology in artificial intelligence",
      iconName: "Brain",
      sortOrder: 1,
    })
    .returning();

  if (topic) {
    console.log("Seeding knowledge articles...");
    await db.insert(knowledgeArticles).values([
      {
        topicId: topic.id,
        title: "What is an AI Agent?",
        slug: "what-is-an-ai-agent",
        content: "An AI agent is a software system that uses AI to autonomously perform tasks.",
        excerpt: "Learn what AI agents are and how they work.",
        difficulty: "beginner",
        readTime: 5,
        tags: ["agents", "fundamentals"],
        status: "published",
      },
    ]);
  }

  console.log("Seed complete.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
