import { pgTable, text, timestamp, integer, boolean, uuid } from "drizzle-orm/pg-core";

export const redirects = pgTable("redirects", {
  id: uuid("id").defaultRandom().primaryKey(),
  source: text("source").notNull().unique(),
  destination: text("destination").notNull(),
  statusCode: integer("status_code").default(301),
  isActive: boolean("is_active").default(true),
  hitCount: integer("hit_count").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type Redirect = typeof redirects.$inferSelect;
export type NewRedirect = typeof redirects.$inferInsert;
