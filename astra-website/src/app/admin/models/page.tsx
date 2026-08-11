import type { Metadata } from "next";
import Link from "next/link";
import type { Route } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Manage Models | ASTRA Admin",
  description: "Manage AI models in the ASTRA directory",
};

const breadcrumbItems = [
  { label: "Home", href: "/" as Route },
  { label: "Admin", href: "/admin" as Route },
  { label: "Models", href: "/admin/models" as Route },
];

const models = [
  { id: "1", name: "GPT-4o", slug: "gpt-4o", provider: "OpenAI", status: "published" },
  { id: "2", name: "Claude 3.5 Sonnet", slug: "claude-3.5-sonnet", provider: "Anthropic", status: "published" },
  { id: "3", name: "Gemini 2.0 Flash", slug: "gemini-2.0-flash", provider: "Google", status: "published" },
  { id: "4", name: "Llama 3.1 405B", slug: "llama-3.1-405b", provider: "Meta", status: "published" },
  { id: "5", name: "DeepSeek-R1", slug: "deepseek-r1", provider: "DeepSeek", status: "published" },
  { id: "6", name: "Mistral Large 2", slug: "mistral-large-2", provider: "Mistral AI", status: "published" },
  { id: "7", name: "Qwen 2.5 72B", slug: "qwen-2.5-72b", provider: "Alibaba", status: "published" },
  { id: "8", name: "Phi-4", slug: "phi-4", provider: "Microsoft", status: "draft" },
  { id: "9", name: "Grok-2", slug: "grok-2", provider: "xAI", status: "published" },
];

export default function AdminModelsPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <AstraSection className="pt-24 pb-8">
        <AstraContainer>
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />

          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Manage Models</h1>
              <p className="text-muted-foreground mt-1">
                Add, edit, or remove models from the directory
              </p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Model
            </Button>
          </div>

          <div className="border rounded-lg bg-card overflow-hidden overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-medium">Name</th>
                  <th className="text-left p-4 font-medium">Provider</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-right p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {models.map((model) => (
                  <tr key={model.id} className="border-b last:border-0 hover:bg-muted/30">
                    <td className="p-4">
                      <Link
                        href={`/models/${model.slug}` as Route}
                        className="font-medium hover:underline"
                      >
                        {model.name}
                      </Link>
                    </td>
                    <td className="p-4 text-muted-foreground">{model.provider}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          model.status === "published"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                        }`}
                      >
                        {model.status}
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
