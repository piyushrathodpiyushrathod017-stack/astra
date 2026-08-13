import { pgTable, text, timestamp, integer, jsonb, uuid } from "drizzle-orm/pg-core";

export const documentationCategories = pgTable("documentation_categories", {
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

export const documentationPages = pgTable("documentation_pages", {
  id: uuid("id").defaultRandom().primaryKey(),
  categoryId: uuid("category_id").references(() => documentationCategories.id, { onDelete: "set null" }),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content"),
  excerpt: text("excerpt"),
  version: text("version"),
  status: text("status").default("draft"),
  sortOrder: integer("sort_order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const documentationPageHistory = pgTable("documentation_page_history", {
  id: uuid("id").defaultRandom().primaryKey(),
  pageId: uuid("page_id").notNull().references(() => documentationPages.id, { onDelete: "cascade" }),
  content: text("content").notNull(),
  editedBy: uuid("edited_by"),
  changeSummary: text("change_summary"),
  version: text("version"),
  createdAt: timestamp("created_at").defaultNow(),
});

export type DocumentationCategory = typeof documentationCategories.$inferSelect;
export type NewDocumentationCategory = typeof documentationCategories.$inferInsert;
export type DocumentationPage = typeof documentationPages.$inferSelect;
export type NewDocumentationPage = typeof documentationPages.$inferInsert;
export type DocumentationPageHistory = typeof documentationPageHistory.$inferSelect;
export type NewDocumentationPageHistory = typeof documentationPageHistory.$inferInsert;
