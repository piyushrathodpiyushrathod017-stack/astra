import { pgTable, text, timestamp, integer, boolean, jsonb, uuid } from "drizzle-orm/pg-core";
import { comparisons } from "./comparisons";

export const comparisonEntities = pgTable("comparison_entities", {
  id: uuid("id").defaultRandom().primaryKey(),
  comparisonId: uuid("comparison_id").notNull().references(() => comparisons.id, { onDelete: "cascade" }),
  entityType: text("entity_type").notNull(),
  entityId: uuid("entity_id").notNull(),
  entityName: text("entity_name").notNull(),
  entitySlug: text("entity_slug").notNull(),
  side: text("side").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const comparisonCriteria = pgTable("comparison_criteria", {
  id: uuid("id").defaultRandom().primaryKey(),
  comparisonId: uuid("comparison_id").notNull().references(() => comparisons.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  description: text("description"),
  weight: integer("weight").default(1),
  sortOrder: integer("sort_order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const comparisonScores = pgTable("comparison_scores", {
  id: uuid("id").defaultRandom().primaryKey(),
  comparisonId: uuid("comparison_id").notNull().references(() => comparisons.id, { onDelete: "cascade" }),
  criteriaId: uuid("criteria_id").notNull().references(() => comparisonCriteria.id, { onDelete: "cascade" }),
  entityId: uuid("entity_id").notNull(),
  score: integer("score").notNull(),
  rationale: text("rationale"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const comparisonEvidence = pgTable("comparison_evidence", {
  id: uuid("id").defaultRandom().primaryKey(),
  comparisonId: uuid("comparison_id").notNull().references(() => comparisons.id, { onDelete: "cascade" }),
  entityType: text("entity_type").notNull(),
  entityId: uuid("entity_id").notNull(),
  claim: text("claim").notNull(),
  source: text("source"),
  sourceUrl: text("source_url"),
  verified: boolean("verified").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export type ComparisonEntity = typeof comparisonEntities.$inferSelect;
export type NewComparisonEntity = typeof comparisonEntities.$inferInsert;
export type ComparisonCriteria = typeof comparisonCriteria.$inferSelect;
export type NewComparisonCriteria = typeof comparisonCriteria.$inferInsert;
export type ComparisonScore = typeof comparisonScores.$inferSelect;
export type NewComparisonScore = typeof comparisonScores.$inferInsert;
export type ComparisonEvidence = typeof comparisonEvidence.$inferSelect;
export type NewComparisonEvidence = typeof comparisonEvidence.$inferInsert;
