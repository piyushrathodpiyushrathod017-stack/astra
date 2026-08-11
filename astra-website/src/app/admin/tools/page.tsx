import type { Metadata } from "next";
import Link from "next/link";
import type { Route } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Manage Tools | ASTRA Admin",
  description: "Manage AI tools in the ASTRA directory",
};

const breadcrumbItems = [
  { label: "Home", href: "/" as Route },
  { label: "Admin", href: "/admin" as Route },
  { label: "Tools", href: "/admin/tools" as Route },
];

const tools = [
  { id: "1", name: "Cursor", slug: "cursor", category: "code-editor", status: "published" },
  { id: "2", name: "GitHub Copilot", slug: "github-copilot", category: "code-completion", status: "published" },
  { id: "3", name: "Windsurf", slug: "windsurf", category: "code-editor", status: "published" },
  { id: "4", name: "Ollama", slug: "ollama", category: "local-ai", status: "published" },
  { id: "5", name: "LM Studio", slug: "lm-studio", category: "local-ai", status: "published" },
  { id: "6", name: "Continue", slug: "continue", category: "code-completion", status: "published" },
  { id: "7", name: "Aider", slug: "aider", category: "cli-tool", status: "draft" },
  { id: "8", name: "Tabnine", slug: "tabnine", category: "code-completion", status: "published" },
  { id: "9", name: "Cline", slug: "cline", category: "agent", status: "published" },
];

export default function AdminToolsPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <AstraSection className="pt-24 pb-8">
        <AstraContainer>
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />

          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Manage Tools</h1>
              <p className="text-muted-foreground mt-1">
                Add, edit, or remove tools from the directory
              </p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Tool
            </Button>
          </div>

          <div className="border rounded-lg bg-card overflow-hidden overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-medium">Name</th>
                  <th className="text-left p-4 font-medium">Category</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-right p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((tool) => (
                  <tr key={tool.id} className="border-b last:border-0 hover:bg-muted/30">
                    <td className="p-4">
                      <Link
                        href={`/tools/${tool.slug}` as Route}
                        className="font-medium hover:underline"
                      >
                        {tool.name}
                      </Link>
                    </td>
                    <td className="p-4 text-muted-foreground">{tool.category}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          tool.status === "published"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                        }`}
                      >
                        {tool.status}
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
