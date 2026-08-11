import { pgTable, text, timestamp, boolean, integer, jsonb, uuid } from "drizzle-orm/pg-core";

export const tools = pgTable("tools", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  shortDescription: text("short_description"),
  websiteUrl: text("website_url"),
  logoUrl: text("logo_url"),
  category: text("category"),
  pricing: text("pricing"),
  hasFreeTier: boolean("has_free_tier").default(false),
  hasApi: boolean("has_api").default(false),
  isOpenSource: boolean("is_open_source").default(false),
  isLocal: boolean("is_local").default(false),
  platforms: jsonb("platforms").$type<string[]>().default([]),
  capabilities: jsonb("capabilities").$type<string[]>().default([]),
  lastVerified: timestamp("last_verified"),
  lastUpdated: timestamp("last_updated").defaultNow(),
  dataSource: text("data_source"),
  verificationStatus: text("verification_status").default("unverified"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type Tool = typeof tools.$inferSelect;
export type NewTool = typeof tools.$inferInsert;
