import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFreq: "daily" as const },
    { path: "/astra", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/astra/features", priority: 0.8, changeFreq: "weekly" as const },
    { path: "/astra/architecture", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/astra/philosophy", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/astra/roadmap", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/astra/changelog", priority: 0.6, changeFreq: "weekly" as const },
    { path: "/atlas", priority: 0.8, changeFreq: "weekly" as const },
    { path: "/atlas/coding", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/atlas/local-ai", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/compare", priority: 0.8, changeFreq: "weekly" as const },
    { path: "/tools", priority: 0.8, changeFreq: "daily" as const },
    { path: "/models", priority: 0.8, changeFreq: "daily" as const },
    { path: "/knowledge", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/blog", priority: 0.7, changeFreq: "daily" as const },
    { path: "/docs", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/docs/getting-started", priority: 0.5, changeFreq: "monthly" as const },
    { path: "/docs/api", priority: 0.5, changeFreq: "monthly" as const },
    { path: "/docs/architecture", priority: 0.5, changeFreq: "monthly" as const },
    { path: "/docs/contributing", priority: 0.4, changeFreq: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFreq: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFreq: "yearly" as const },
    { path: "/contact", priority: 0.5, changeFreq: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));
}
