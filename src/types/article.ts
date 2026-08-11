import type { Article } from "@/db/schema/articles";

export type { Article, NewArticle } from "@/db/schema/articles";

export interface ArticleWithMeta extends Omit<Article, "seoTitle" | "seoDescription"> {
  readingTime: number;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface ArticleFilters {
  category?: string;
  difficulty?: string;
  tag?: string;
  search?: string;
}

export type ArticleCategory =
  | "guide"
  | "tutorial"
  | "review"
  | "news"
  | "analysis"
  | "opinion";

export type Difficulty = "beginner" | "intermediate" | "advanced";
