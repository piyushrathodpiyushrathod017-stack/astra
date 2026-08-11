import { describe, it, expect } from "vitest";
import { cn, slugify, formatDate, formatNumber } from "@/lib/utils";

describe("utils", () => {
  describe("cn", () => {
    it("merges class names", () => {
      const result = cn("text-red-500", "text-blue-500");
      expect(result).toBe("text-blue-500");
    });

    it("handles conditional classes", () => {
      const result = cn("base", false && "hidden", "extra");
      expect(result).toContain("base");
      expect(result).toContain("extra");
      expect(result).not.toContain("hidden");
    });
  });

  describe("slugify", () => {
    it("converts text to slug", () => {
      expect(slugify("Hello World")).toBe("hello-world");
      expect(slugify("AI Tools & Models")).toBe("ai-tools-models");
      expect(slugify("  Spaced  Text  ")).toBe("spaced-text");
    });
  });

  describe("formatDate", () => {
    it("formats date correctly", () => {
      const result = formatDate(new Date("2026-01-15"));
      expect(result).toContain("January");
      expect(result).toContain("15");
      expect(result).toContain("2026");
    });

    it("handles string dates", () => {
      const result = formatDate("2026-03-20");
      expect(result).toContain("March");
      expect(result).toContain("20");
    });
  });

  describe("formatNumber", () => {
    it("formats numbers correctly", () => {
      expect(formatNumber(100)).toBe("100");
      expect(formatNumber(1500)).toBe("1.5K");
      expect(formatNumber(1500000)).toBe("1.5M");
    });
  });
});
