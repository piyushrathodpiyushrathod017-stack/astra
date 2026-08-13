import { pgTable, text, timestamp, integer, jsonb, uuid } from "drizzle-orm/pg-core";

export const searchDocuments = pgTable("search_documents", {
  id: uuid("id").defaultRandom().primaryKey(),
  entityType: text("entity_type").notNull(),
  entityId: uuid("entity_id").notNull(),
  title: text("title").notNull(),
  content: text("content"),
  tags: jsonb("tags").$type<string[]>().default([]),
  boost: integer("boost").default(1),
  lastIndexed: timestamp("last_indexed").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const searchQueries = pgTable("search_queries", {
  id: uuid("id").defaultRandom().primaryKey(),
  query: text("query").notNull(),
  userId: uuid("user_id"),
  resultCount: integer("result_count").default(0),
  clickedEntityId: uuid("clicked_entity_id"),
  duration: integer("duration"),
  createdAt: timestamp("created_at").defaultNow(),
});

export type SearchDocument = typeof searchDocuments.$inferSelect;
export type NewSearchDocument = typeof searchDocuments.$inferInsert;
export type SearchQuery = typeof searchQueries.$inferSelect;
export type NewSearchQuery = typeof searchQueries.$inferInsert;
