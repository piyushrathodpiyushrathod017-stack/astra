import Link from "next/link";
import type { Route } from "next";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { TableOfContents } from "@/components/shared/table-of-contents";

interface ArticleLayoutProps {
  title: string;
  description?: string;
  author?: string;
  publishedAt?: string;
  readingTime?: number;
  breadcrumbs: { label: string; href?: string }[];
  tocItems?: { id: string; text: string; level: number }[];
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

export function ArticleLayout({
  title,
  description,
  author,
  publishedAt,
  readingTime,
  breadcrumbs,
  tocItems = [],
  children,
  sidebar,
}: ArticleLayoutProps) {
  const breadcrumbItems = breadcrumbs.map((item) => ({
    label: item.label,
    href: (item.href || "/") as Route,
  }));

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <article className="lg:col-span-8">
            <header className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
              {description && (
                <p className="mt-4 text-lg text-muted-foreground">{description}</p>
              )}
              <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                {author && <span>By {author}</span>}
                {publishedAt && <span>{publishedAt}</span>}
                {readingTime && <span>{readingTime} min read</span>}
              </div>
            </header>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {children}
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {tocItems.length > 0 && (
                <TableOfContents items={tocItems} />
              )}
              {sidebar}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
