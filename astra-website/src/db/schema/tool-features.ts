import { pgTable, text, timestamp, boolean, jsonb, uuid } from "drizzle-orm/pg-core";
import { tools } from "./tools";

export const toolFeatures = pgTable("tool_features", {
  id: uuid("id").defaultRandom().primaryKey(),
  toolId: uuid("tool_id").notNull().references(() => tools.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  description: text("description"),
  supported: boolean("supported").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const toolPlatforms = pgTable("tool_platforms", {
  id: uuid("id").defaultRandom().primaryKey(),
  toolId: uuid("tool_id").notNull().references(() => tools.id, { onDelete: "cascade" }),
  platform: text("platform").notNull(),
  url: text("url"),
  version: text("version"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const toolIntegrations = pgTable("tool_integrations", {
  id: uuid("id").defaultRandom().primaryKey(),
  toolId: uuid("tool_id").notNull().references(() => tools.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  type: text("type").notNull(),
  description: text("description"),
  url: text("url"),
  metadata: jsonb("metadata").$type<Record<string, unknown>>(),
  createdAt: timestamp("created_at").defaultNow(),
});

export type ToolFeature = typeof toolFeatures.$inferSelect;
export type NewToolFeature = typeof toolFeatures.$inferInsert;
export type ToolPlatform = typeof toolPlatforms.$inferSelect;
export type NewToolPlatform = typeof toolPlatforms.$inferInsert;
export type ToolIntegration = typeof toolIntegrations.$inferSelect;
export type NewToolIntegration = typeof toolIntegrations.$inferInsert;
