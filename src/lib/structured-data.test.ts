import { describe, it, expect } from "vitest";
import {
  generateWebsiteStructuredData,
  generateOrganizationStructuredData,
  generateArticleStructuredData,
  generateToolStructuredData,
  generateModelStructuredData,
  generateBreadcrumbStructuredData,
  generateFaqStructuredData,
} from "@/lib/structured-data";

describe("structured-data", () => {
  describe("generateWebsiteStructuredData", () => {
    it("returns valid WebSite schema", () => {
      const data = generateWebsiteStructuredData();
      expect(data["@context"]).toBe("https://schema.org");
      expect(data["@type"]).toBe("WebSite");
      expect(data.name).toBe("ASTRA");
      expect(data.url).toBeTruthy();
    });

    it("includes search action", () => {
      const data = generateWebsiteStructuredData();
      const action = data.potentialAction as { "@type": string };
      expect(action["@type"]).toBe("SearchAction");
    });
  });

  describe("generateOrganizationStructuredData", () => {
    it("returns valid Organization schema", () => {
      const data = generateOrganizationStructuredData();
      expect(data["@context"]).toBe("https://schema.org");
      expect(data["@type"]).toBe("Organization");
      expect(data.name).toBe("ASTRA");
    });
  });

  describe("generateArticleStructuredData", () => {
    it("returns valid Article schema", () => {
      const data = generateArticleStructuredData({
        title: "Test Article",
        description: "A test article",
        url: "https://astra.ai/test",
      });
      expect(data["@type"]).toBe("Article");
      expect(data.headline).toBe("Test Article");
      expect(data.description).toBe("A test article");
    });

    it("includes author when provided", () => {
      const data = generateArticleStructuredData({
        title: "Test",
        description: "Desc",
        url: "https://astra.ai/test",
        author: "John",
      });
      const author = data.author as { "@type": string; name: string };
      expect(author.name).toBe("John");
    });
  });

  describe("generateToolStructuredData", () => {
    it("returns valid SoftwareApplication schema", () => {
      const data = generateToolStructuredData({
        name: "ChatGPT",
        description: "AI chatbot",
        url: "https://astra.ai/tools/chatgpt",
      });
      expect(data["@type"]).toBe("SoftwareApplication");
      expect(data.name).toBe("ChatGPT");
    });

    it("includes aggregate rating when provided", () => {
      const data = generateToolStructuredData({
        name: "ChatGPT",
        description: "AI chatbot",
        url: "https://astra.ai/tools/chatgpt",
        rating: 4.8,
        reviewCount: 100,
      });
      const rating = data.aggregateRating as { ratingValue: number };
      expect(rating.ratingValue).toBe(4.8);
    });
  });

  describe("generateModelStructuredData", () => {
    it("returns valid schema with provider", () => {
      const data = generateModelStructuredData({
        name: "GPT-4o",
        description: "Language model",
        url: "https://astra.ai/models/gpt-4o",
        provider: "OpenAI",
      });
      expect(data["@type"]).toBe("SoftwareApplication");
      const provider = data.provider as { "@type": string; name: string };
      expect(provider.name).toBe("OpenAI");
    });
  });

  describe("generateBreadcrumbStructuredData", () => {
    it("returns valid BreadcrumbList", () => {
      const data = generateBreadcrumbStructuredData([
        { name: "Home", url: "/" },
        { name: "Tools", url: "/tools" },
      ]);
      expect(data["@type"]).toBe("BreadcrumbList");
      const items = data.itemListElement as Array<{ name: string; position: number }>;
      expect(items).toHaveLength(2);
      expect(items[0].position).toBe(1);
      expect(items[1].name).toBe("Tools");
    });
  });

  describe("generateFaqStructuredData", () => {
    it("returns valid FAQPage schema", () => {
      const data = generateFaqStructuredData([
        { question: "What is ASTRA?", answer: "An AI ecosystem." },
      ]);
      expect(data["@type"]).toBe("FAQPage");
      const entities = data.mainEntity as Array<{ name: string }>;
      expect(entities).toHaveLength(1);
      expect(entities[0].name).toBe("What is ASTRA?");
    });
  });
});
