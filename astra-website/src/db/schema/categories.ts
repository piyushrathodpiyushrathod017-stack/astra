import { pgTable, text, timestamp, boolean, integer, jsonb, uuid } from "drizzle-orm/pg-core";
import { tools } from "./tools";
import { providers } from "./providers";

export const categories = pgTable("categories", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  iconName: text("icon_name"),
  parentId: uuid("parent_id"),
  sortOrder: integer("sort_order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const toolCategories = pgTable("tool_categories", {
  id: uuid("id").defaultRandom().primaryKey(),
  toolId: uuid("tool_id").notNull().references(() => tools.id, { onDelete: "cascade" }),
  categoryId: uuid("category_id").notNull().references(() => categories.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow(),
});

export const providerTools = pgTable("provider_tools", {
  id: uuid("id").defaultRandom().primaryKey(),
  providerId: uuid("provider_id").notNull().references(() => providers.id, { onDelete: "cascade" }),
  toolId: uuid("tool_id").notNull().references(() => tools.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow(),
});

export type Category = typeof categories.$inferSelect;
export type NewCategory = typeof categories.$inferInsert;
