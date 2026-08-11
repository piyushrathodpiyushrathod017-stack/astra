import type { Tool } from "@/db/schema/tools";

export type { Tool, NewTool } from "@/db/schema/tools";

export interface ToolScores {
  easeOfUse?: number;
  features?: number;
  pricing?: number;
  documentation?: number;
  community?: number;
  overall?: number;
}

export interface ToolPricing {
  free: boolean;
  starter?: number;
  pro?: number;
  enterprise?: number;
  currency?: string;
}

export interface ToolWithScores extends Tool {
  scores: ToolScores;
  platforms: string[];
  capabilities: string[];
  pricingDetail?: ToolPricing;
}

export interface ToolFilters {
  category?: string;
  pricing?: string;
  platform?: string;
  openSource?: boolean;
  local?: boolean;
  search?: string;
}

export interface ToolCategory {
  slug: string;
  name: string;
  description: string;
  count: number;
}
