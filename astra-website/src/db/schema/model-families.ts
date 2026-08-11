import { pgTable, text, timestamp, boolean, integer, jsonb, uuid } from "drizzle-orm/pg-core";
import { models } from "./models";

export const modelFamilies = pgTable("model_families", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  provider: text("provider").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const modelCapabilities = pgTable("model_capabilities", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const modelModelCapabilities = pgTable("model_model_capabilities", {
  id: uuid("id").defaultRandom().primaryKey(),
  modelId: uuid("model_id").notNull().references(() => models.id, { onDelete: "cascade" }),
  capabilityId: uuid("capability_id").notNull().references(() => modelCapabilities.id, { onDelete: "cascade" }),
  score: integer("score"),
  createdAt: timestamp("created_at").defaultNow(),
});

export type ModelFamily = typeof modelFamilies.$inferSelect;
export type NewModelFamily = typeof modelFamilies.$inferInsert;
export type ModelCapability = typeof modelCapabilities.$inferSelect;
export type NewModelCapability = typeof modelCapabilities.$inferInsert;
