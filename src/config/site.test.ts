import { describe, it, expect } from "vitest";
import { siteConfig } from "@/config/site";

describe("siteConfig", () => {
  it("has required fields", () => {
    expect(siteConfig.name).toBe("ASTRA");
    expect(siteConfig.title).toContain("ASTRA");
    expect(siteConfig.description).toBeTruthy();
    expect(siteConfig.url).toBeTruthy();
    expect(siteConfig.email).toBeTruthy();
    expect(siteConfig.version).toBeTruthy();
  });

  it("has valid URL", () => {
    expect(siteConfig.url).toMatch(/^https?:\/\//);
  });

  it("has valid email", () => {
    expect(siteConfig.email).toContain("@");
  });

  it("has keywords array", () => {
    expect(Array.isArray(siteConfig.keywords)).toBe(true);
    expect(siteConfig.keywords.length).toBeGreaterThan(0);
  });

  it("has address with required fields", () => {
    expect(siteConfig.address.city).toBeTruthy();
    expect(siteConfig.address.state).toBeTruthy();
    expect(siteConfig.address.country).toBeTruthy();
  });
});
