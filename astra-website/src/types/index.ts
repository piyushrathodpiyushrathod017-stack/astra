export type { Tool, NewTool, ToolWithScores, ToolFilters, ToolCategory } from "./tool";
export type { Model, NewModel, ModelWithScores, ModelFilters, ModelProvider, ModelFamily } from "./model";
export type { Comparison, NewComparison, ComparisonWithScores, ComparisonFilters, EntityType } from "./comparison";
export type { Article, NewArticle, ArticleWithMeta, ArticleFilters, ArticleCategory, Difficulty } from "./article";
export type { User, NewUser } from "@/db/schema/users";

export interface ApiResponse<T> {
  data: T;
  meta?: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, string[]>;
}

export interface PaginatedParams {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface SearchResult {
  id: string;
  type: "tool" | "model" | "article" | "comparison" | "knowledge";
  title: string;
  description: string;
  slug: string;
  url: string;
  score?: number;
  highlights?: string[];
}
