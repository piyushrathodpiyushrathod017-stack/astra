import { pgTable, text, timestamp, integer, boolean, jsonb, uuid } from "drizzle-orm/pg-core";

export const pricingPlans = pgTable("pricing_plans", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  entityType: text("entity_type").notNull(),
  entityId: uuid("entity_id").notNull(),
  priceMonthly: integer("price_monthly"),
  priceYearly: integer("price_yearly"),
  currency: text("currency").default("USD"),
  features: jsonb("features").$type<string[]>().default([]),
  isPopular: boolean("is_popular").default(false),
  sortOrder: integer("sort_order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const pricingFeatures = pgTable("pricing_features", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  planId: uuid("plan_id").notNull().references(() => pricingPlans.id, { onDelete: "cascade" }),
  included: boolean("included").default(true),
  limit: text("limit"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const pricingHistory = pgTable("pricing_history", {
  id: uuid("id").defaultRandom().primaryKey(),
  entityType: text("entity_type").notNull(),
  entityId: uuid("entity_id").notNull(),
  priceMonthly: integer("price_monthly"),
  priceYearly: integer("price_yearly"),
  currency: text("currency").default("USD"),
  changeType: text("change_type").notNull(),
  previousPrice: integer("previous_price"),
  effectiveDate: timestamp("effective_date").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
});

export type PricingPlan = typeof pricingPlans.$inferSelect;
export type NewPricingPlan = typeof pricingPlans.$inferInsert;
