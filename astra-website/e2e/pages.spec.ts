import { test, expect } from "@playwright/test";

test.describe("Tools Page", () => {
  test("should load the tools page", async ({ page }) => {
    await page.goto("/tools");
    await expect(page).toHaveTitle(/Tools/);
  });

  test("should display the hero section", async ({ page }) => {
    await page.goto("/tools");
    await expect(page.getByRole("heading", { name: "AI Tools" })).toBeVisible();
  });

  test("should display tool cards", async ({ page }) => {
    await page.goto("/tools");
    await expect(page.getByText("ChatGPT")).toBeVisible();
    await expect(page.getByText("Claude")).toBeVisible();
  });
});

test.describe("Models Page", () => {
  test("should load the models page", async ({ page }) => {
    await page.goto("/models");
    await expect(page).toHaveTitle(/Models/);
  });

  test("should display model listings", async ({ page }) => {
    await page.goto("/models");
    await expect(page.getByRole("heading", { name: /Models/ })).toBeVisible();
  });
});

test.describe("Compare Page", () => {
  test("should load the compare page", async ({ page }) => {
    await page.goto("/compare");
    await expect(page).toHaveTitle(/Compare/);
  });

  test("should display comparison options", async ({ page }) => {
    await page.goto("/compare");
    await expect(page.getByRole("heading", { name: /Compare/ })).toBeVisible();
  });
});

test.describe("Atlas Page", () => {
  test("should load the atlas page", async ({ page }) => {
    await page.goto("/atlas");
    await expect(page).toHaveTitle(/Atlas/);
  });

  test("should display category cards", async ({ page }) => {
    await page.goto("/atlas");
    await expect(page.getByText("AI Coding")).toBeVisible();
    await expect(page.getByText("Local AI")).toBeVisible();
  });

  test("should navigate to coding category", async ({ page }) => {
    await page.goto("/atlas/coding");
    await expect(page.getByRole("heading", { name: /AI-Powered Coding/ })).toBeVisible();
    await expect(page.getByText("GitHub Copilot")).toBeVisible();
  });

  test("should show 404 for unknown category", async ({ page }) => {
    const response = await page.goto("/atlas/nonexistent");
    expect(response?.status()).toBe(404);
  });
});

test.describe("Knowledge Page", () => {
  test("should load the knowledge page", async ({ page }) => {
    await page.goto("/knowledge");
    await expect(page).toHaveTitle(/Knowledge/);
  });
});

test.describe("Blog Page", () => {
  test("should load the blog page", async ({ page }) => {
    await page.goto("/blog");
    await expect(page).toHaveTitle(/Blog/);
  });
});

test.describe("Docs Page", () => {
  test("should load the docs page", async ({ page }) => {
    await page.goto("/docs");
    await expect(page).toHaveTitle(/Docs|Documentation/);
  });
});

test.describe("ASTRA Pages", () => {
  test("should load the astra page", async ({ page }) => {
    await page.goto("/astra");
    await expect(page).toHaveTitle(/ASTRA/);
  });

  test("should load the features page", async ({ page }) => {
    await page.goto("/astra/features");
    await expect(page).toHaveTitle(/Features/);
  });

  test("should load the roadmap page", async ({ page }) => {
    await page.goto("/astra/roadmap");
    await expect(page).toHaveTitle(/Roadmap/);
  });
});

test.describe("Search", () => {
  test("should load the search page", async ({ page }) => {
    await page.goto("/search");
    await expect(page).toHaveTitle(/Search/);
  });
});

test.describe("Contact", () => {
  test("should load the contact page", async ({ page }) => {
    await page.goto("/contact");
    await expect(page).toHaveTitle(/Contact/);
  });
});

test.describe("Skip to content link", () => {
  test("should have skip-to-content link", async ({ page }) => {
    await page.goto("/");
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeAttached();
  });
});
