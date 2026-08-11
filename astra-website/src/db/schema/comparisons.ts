import { pgTable, text, timestamp, jsonb, uuid } from "drizzle-orm/pg-core";

export const comparisons = pgTable("comparisons", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  entityType: text("entity_type").notNull(),
  entityASlug: text("entity_a_slug").notNull(),
  entityBSlug: text("entity_b_slug").notNull(),
  entityAName: text("entity_a_name").notNull(),
  entityBName: text("entity_b_name").notNull(),
  summary: text("summary"),
  verdict: text("verdict"),
  scores: jsonb("scores").$type<Record<string, { a: number; b: number }>>(),
  strengths: jsonb("strengths").$type<{ a: string[]; b: string[] }>(),
  weaknesses: jsonb("weaknesses").$type<{ a: string[]; b: string[] }>(),
  bestFor: jsonb("best_for").$type<{ a: string[]; b: string[] }>(),
  methodology: text("methodology"),
  lastVerified: timestamp("last_verified"),
  lastUpdated: timestamp("last_updated").defaultNow(),
  status: text("status").default("draft"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type Comparison = typeof comparisons.$inferSelect;
export type NewComparison = typeof comparisons.$inferInsert;
