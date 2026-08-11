import type { Model } from "@/db/schema/models";

export type { Model, NewModel } from "@/db/schema/models";

export interface ModelScores {
  intelligence?: number;
  speed?: number;
  costEfficiency?: number;
  contextWindow?: number;
  multimodal?: number;
  overall?: number;
}

export interface ModelPricing {
  input?: number;
  output?: number;
  currency?: string;
}

export interface ModelWithScores extends Model {
  scores: ModelScores;
  pricingDetail?: ModelPricing;
}

export interface ModelFilters {
  provider?: string;
  family?: string;
  hasReasoning?: boolean;
  hasVision?: boolean;
  hasToolCalling?: boolean;
  isLocal?: boolean;
  search?: string;
}

export interface ModelProvider {
  slug: string;
  name: string;
  logoUrl?: string;
  count: number;
}

export interface ModelFamily {
  slug: string;
  name: string;
  provider: string;
  count: number;
}
