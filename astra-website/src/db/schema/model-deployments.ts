import { pgTable, text, timestamp, integer, boolean, jsonb, uuid } from "drizzle-orm/pg-core";
import { models } from "./models";
import { providers } from "./providers";

export const modelProviders = pgTable("model_providers", {
  id: uuid("id").defaultRandom().primaryKey(),
  modelId: uuid("model_id").notNull().references(() => models.id, { onDelete: "cascade" }),
  providerId: uuid("provider_id").notNull().references(() => providers.id, { onDelete: "cascade" }),
  isPrimary: boolean("is_primary").default(true),
  apiEndpoint: text("api_endpoint"),
  rateLimit: integer("rate_limit"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const modelDeployments = pgTable("model_deployments", {
  id: uuid("id").defaultRandom().primaryKey(),
  modelId: uuid("model_id").notNull().references(() => models.id, { onDelete: "cascade" }),
  region: text("region").notNull(),
  status: text("status").default("active"),
  endpoint: text("endpoint"),
  maxTokens: integer("max_tokens"),
  costPer1kTokens: integer("cost_per_1k_tokens"),
  metadata: jsonb("metadata").$type<Record<string, unknown>>(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type ModelProvider = typeof modelProviders.$inferSelect;
export type NewModelProvider = typeof modelProviders.$inferInsert;
export type ModelDeployment = typeof modelDeployments.$inferSelect;
export type NewModelDeployment = typeof modelDeployments.$inferInsert;
