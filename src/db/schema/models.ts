import { pgTable, text, timestamp, boolean, integer, jsonb, uuid } from "drizzle-orm/pg-core";

export const models = pgTable("models", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  provider: text("provider").notNull(),
  providerSlug: text("provider_slug").notNull(),
  modelFamily: text("model_family"),
  description: text("description"),
  contextWindow: integer("context_window"),
  inputModalities: jsonb("input_modalities").$type<string[]>().default([]),
  outputModalities: jsonb("output_modalities").$type<string[]>().default([]),
  hasReasoning: boolean("has_reasoning").default(false),
  hasToolCalling: boolean("has_tool_calling").default(false),
  hasVision: boolean("has_vision").default(false),
  hasApi: boolean("has_api").default(true),
  isLocal: boolean("is_local").default(false),
  license: text("license"),
  parameters: text("parameters"),
  hardwareRequirements: jsonb("hardware_requirements").$type<Record<string, unknown>>(),
  pricing: jsonb("pricing").$type<Record<string, unknown>>(),
  lastVerified: timestamp("last_verified"),
  lastUpdated: timestamp("last_updated").defaultNow(),
  dataSource: text("data_source"),
  verificationStatus: text("verification_status").default("unverified"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type Model = typeof models.$inferSelect;
export type NewModel = typeof models.$inferInsert;
