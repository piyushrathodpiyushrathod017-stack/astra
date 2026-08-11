import type { Comparison } from "@/db/schema/comparisons";

export type { Comparison, NewComparison } from "@/db/schema/comparisons";

export interface ComparisonScore {
  criterion: string;
  scoreA: number;
  scoreB: number;
  weight?: number;
  evidence?: string;
}

export interface ComparisonWithScores extends Omit<Comparison, "scores" | "strengths" | "weaknesses" | "bestFor"> {
  scores: ComparisonScore[];
  strengthsA: string[];
  strengthsB: string[];
  weaknessesA: string[];
  weaknessesB: string[];
  bestForA: string[];
  bestForB: string[];
}

export interface ComparisonFilters {
  entityType?: string;
  search?: string;
}

export type EntityType = "tool" | "model" | "provider";
