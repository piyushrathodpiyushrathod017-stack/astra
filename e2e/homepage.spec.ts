import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("should load the homepage", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/ASTRA/);
  });

  test("should display the hero section", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByText("The AI ecosystem, intelligently organized.")
    ).toBeVisible();
  });

  test("should have navigation links", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "ASTRA" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "AI Atlas" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Compare" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Tools" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Knowledge" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Blog" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Docs" })).toBeVisible();
  });

  test("should have a footer", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("©")).toBeVisible();
  });

  test("should have skip-to-content link", async ({ page }) => {
    await page.goto("/");
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeAttached();
  });

  test("should have dark theme by default", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");
    await expect(html).toHaveClass(/dark/);
  });

  test("should have proper meta description", async ({ page }) => {
    await page.goto("/");
    const meta = page.locator('meta[name="description"]');
    await expect(meta).toHaveAttribute("content", /ASTRA/);
  });

  test("should have structured data scripts", async ({ page }) => {
    await page.goto("/");
    const scripts = page.locator('script[type="application/ld+json"]');
    const count = await scripts.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });

  test("should navigate to tools page from nav", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Tools" }).first().click();
    await expect(page).toHaveURL(/\/tools/);
    await expect(page.getByRole("heading", { name: "AI Tools" })).toBeVisible();
  });

  test("should navigate to atlas page from nav", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "AI Atlas" }).first().click();
    await expect(page).toHaveURL(/\/atlas/);
    await expect(page.getByRole("heading", { name: "AI Atlas" })).toBeVisible();
  });

  test("should have proper Open Graph tags", async ({ page }) => {
    await page.goto("/");
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute("content", /ASTRA/);
  });

  test("should have proper Twitter card tags", async ({ page }) => {
    await page.goto("/");
    const twitterCard = page.locator('meta[name="twitter:card"]');
    await expect(twitterCard).toHaveAttribute("content", "summary_large_image");
  });

  test("should have favicon", async ({ page }) => {
    await page.goto("/");
    const favicon = page.locator('link[rel="icon"]');
    await expect(favicon).toBeAttached();
  });

  test("should have canonical URL", async ({ page }) => {
    await page.goto("/");
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toBeAttached();
  });
});
