import type { Metadata } from "next";
import Link from "next/link";
import type { Route } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Manage Articles | ASTRA Admin",
  description: "Manage knowledge base articles in ASTRA",
};

const breadcrumbItems = [
  { label: "Home", href: "/" as Route },
  { label: "Admin", href: "/admin" as Route },
  { label: "Articles", href: "/admin/articles" as Route },
];

const articles = [
  { id: "1", title: "Getting Started with Local AI", slug: "getting-started-local-ai", category: "guide", status: "published" },
  { id: "2", title: "Understanding AI Model Pricing", slug: "understanding-ai-pricing", category: "guide", status: "published" },
  { id: "3", title: "Building AI Agents with ASTRA", slug: "building-ai-agents", category: "tutorial", status: "published" },
  { id: "4", title: "Top 10 AI Coding Tools in 2026", slug: "top-10-ai-coding-tools", category: "review", status: "published" },
  { id: "5", title: "Local vs Cloud AI: A Comparison", slug: "local-vs-cloud-ai", category: "analysis", status: "draft" },
  { id: "6", title: "The Future of AI Development", slug: "future-of-ai-development", category: "opinion", status: "review" },
];

export default function AdminArticlesPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <AstraSection className="pt-24 pb-8">
        <AstraContainer>
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />

          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Manage Articles</h1>
              <p className="text-muted-foreground mt-1">
                Create, edit, and publish knowledge base articles
              </p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Article
            </Button>
          </div>

          <div className="border rounded-lg bg-card overflow-hidden overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-medium">Title</th>
                  <th className="text-left p-4 font-medium">Category</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-right p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => (
                  <tr key={article.id} className="border-b last:border-0 hover:bg-muted/30">
                    <td className="p-4">
                      <Link
                        href={`/knowledge/${article.slug}` as Route}
                        className="font-medium hover:underline"
                      >
                        {article.title}
                      </Link>
                    </td>
                    <td className="p-4 text-muted-foreground">{article.category}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          article.status === "published"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : article.status === "draft"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                            : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                        }`}
                      >
                        {article.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AstraContainer>
      </AstraSection>
    </div>
  );
}
