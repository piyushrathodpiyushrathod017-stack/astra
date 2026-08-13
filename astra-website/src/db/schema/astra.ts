import { pgTable, text, timestamp, integer, jsonb, uuid } from "drizzle-orm/pg-core";

export const astraFeatures = pgTable("astra_features", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  status: text("status").default("planned"),
  priority: text("priority").default("medium"),
  category: text("category"),
  iconName: text("icon_name"),
  metadata: jsonb("metadata").$type<Record<string, unknown>>(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const astraModules = pgTable("astra_modules", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  version: text("version"),
  status: text("status").default("active"),
  dependencies: jsonb("dependencies").$type<string[]>().default([]),
  metadata: jsonb("metadata").$type<Record<string, unknown>>(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const astraComponents = pgTable("astra_components", {
  id: uuid("id").defaultRandom().primaryKey(),
  moduleId: uuid("module_id").references(() => astraModules.id, { onDelete: "set null" }),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  type: text("type"),
  status: text("status").default("active"),
  metadata: jsonb("metadata").$type<Record<string, unknown>>(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const astraVersions = pgTable("astra_versions", {
  id: uuid("id").defaultRandom().primaryKey(),
  version: text("version").notNull().unique(),
  releaseDate: timestamp("release_date").defaultNow(),
  changelog: text("changelog"),
  status: text("status").default("current"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const changelog = pgTable("changelog", {
  id: uuid("id").defaultRandom().primaryKey(),
  versionId: uuid("version_id").references(() => astraVersions.id, { onDelete: "set null" }),
  title: text("title").notNull(),
  description: text("description"),
  type: text("type").notNull(),
  entityType: text("entity_type"),
  entityId: uuid("entity_id"),
  createdAt: timestamp("created_at").defaultNow(),
});

export type AstraFeature = typeof astraFeatures.$inferSelect;
export type NewAstraFeature = typeof astraFeatures.$inferInsert;
export type AstraModule = typeof astraModules.$inferSelect;
export type NewAstraModule = typeof astraModules.$inferInsert;
export type AstraComponent = typeof astraComponents.$inferSelect;
export type NewAstraComponent = typeof astraComponents.$inferInsert;
export type AstraVersion = typeof astraVersions.$inferSelect;
export type NewAstraVersion = typeof astraVersions.$inferInsert;
export type ChangelogEntry = typeof changelog.$inferSelect;
export type NewChangelogEntry = typeof changelog.$inferInsert;
