import { pgTable, text, timestamp, integer, boolean, uuid } from "drizzle-orm/pg-core";

export const articles = pgTable("articles", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  summary: text("summary"),
  content: text("content"),
  category: text("category").notNull(),
  tags: text("tags").array().default([]),
  author: text("author"),
  readingTime: integer("reading_time"),
  difficulty: text("difficulty"),
  featured: boolean("featured").default(false),
  publishedAt: timestamp("published_at"),
  lastUpdated: timestamp("last_updated").defaultNow(),
  seoTitle: text("seo_title"),
  seoDescription: text("seo_description"),
  status: text("status").default("draft"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type Article = typeof articles.$inferSelect;
export type NewArticle = typeof articles.$inferInsert;
