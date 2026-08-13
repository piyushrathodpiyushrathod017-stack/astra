import { pgTable, text, timestamp, integer, jsonb, uuid } from "drizzle-orm/pg-core";

export const roadmapPhases = pgTable("roadmap_phases", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  status: text("status").default("planned"),
  startDate: timestamp("start_date"),
  endDate: timestamp("end_date"),
  sortOrder: integer("sort_order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const roadmapMilestones = pgTable("roadmap_milestones", {
  id: uuid("id").defaultRandom().primaryKey(),
  phaseId: uuid("phase_id").references(() => roadmapPhases.id, { onDelete: "set null" }),
  name: text("name").notNull(),
  description: text("description"),
  status: text("status").default("planned"),
  targetDate: timestamp("target_date"),
  completedAt: timestamp("completed_at"),
  sortOrder: integer("sort_order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const roadmapTasks = pgTable("roadmap_tasks", {
  id: uuid("id").defaultRandom().primaryKey(),
  milestoneId: uuid("milestone_id").references(() => roadmapMilestones.id, { onDelete: "set null" }),
  title: text("title").notNull(),
  description: text("description"),
  status: text("status").default("todo"),
  priority: text("priority").default("medium"),
  assignee: text("assignee"),
  estimatedHours: integer("estimated_hours"),
  actualHours: integer("actual_hours"),
  metadata: jsonb("metadata").$type<Record<string, unknown>>(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const roadmapDependencies = pgTable("roadmap_dependencies", {
  id: uuid("id").defaultRandom().primaryKey(),
  taskId: uuid("task_id").notNull().references(() => roadmapTasks.id, { onDelete: "cascade" }),
  dependsOnTaskId: uuid("depends_on_task_id").notNull().references(() => roadmapTasks.id, { onDelete: "cascade" }),
  type: text("type").default("blocks"),
  createdAt: timestamp("created_at").defaultNow(),
});

export type RoadmapPhase = typeof roadmapPhases.$inferSelect;
export type NewRoadmapPhase = typeof roadmapPhases.$inferInsert;
export type RoadmapMilestone = typeof roadmapMilestones.$inferSelect;
export type NewRoadmapMilestone = typeof roadmapMilestones.$inferInsert;
export type RoadmapTask = typeof roadmapTasks.$inferSelect;
export type NewRoadmapTask = typeof roadmapTasks.$inferInsert;
export type RoadmapDependency = typeof roadmapDependencies.$inferSelect;
export type NewRoadmapDependency = typeof roadmapDependencies.$inferInsert;
