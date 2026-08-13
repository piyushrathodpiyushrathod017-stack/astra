import { pgTable, text, timestamp, integer, boolean, uuid } from "drizzle-orm/pg-core";
import { tools } from "./tools";

export const tags = pgTable("tags", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const tagArticleCategories = pgTable("article_categories", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  parentId: uuid("parent_id"),
  sortOrder: integer("sort_order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const tagArticleTags = pgTable("article_tags", {
  id: uuid("id").defaultRandom().primaryKey(),
  articleId: uuid("article_id").notNull(),
  tagId: uuid("tag_id").notNull().references(() => tags.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow(),
});

export const tagToolFeatures = pgTable("tool_features", {
  id: uuid("id").defaultRandom().primaryKey(),
  toolId: uuid("tool_id").notNull().references(() => tools.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  description: text("description"),
  isHighlighted: boolean("is_highlighted").default(false),
  sortOrder: integer("sort_order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const tagToolPlatforms = pgTable("tool_platforms", {
  id: uuid("id").defaultRandom().primaryKey(),
  toolId: uuid("tool_id").notNull().references(() => tools.id, { onDelete: "cascade" }),
  platform: text("platform").notNull(),
  downloadUrl: text("download_url"),
  version: text("version"),
  createdAt: timestamp("created_at").defaultNow(),
});

export type Tag = typeof tags.$inferSelect;
export type NewTag = typeof tags.$inferInsert;
