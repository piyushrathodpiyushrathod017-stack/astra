import type { Metadata } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { EmptyState } from "@/components/shared/empty-state";
import type { Route } from "next";
import { Bookmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Bookmarks | ASTRA",
  description: "Your saved tools, models, and articles",
};

const breadcrumbItems = [
  { label: "Home", href: "/" as Route },
  { label: "Bookmarks", href: "/profile/bookmarks" as Route },
];

export default function BookmarksPage() {
  return (
    <div className="min-h-screen">
      <AstraSection className="pt-24 pb-16">
        <AstraContainer>
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />

          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h1 className="text-3xl font-bold">Your Bookmarks</h1>
              <p className="text-muted-foreground mt-2">
                Tools, models, and articles you&apos;ve saved for later
              </p>
            </div>

            <EmptyState
              icon={<Bookmark className="h-12 w-12" />}
              title="No bookmarks yet"
              description="Save tools, models, and articles to access them quickly later."
              action={{ label: "Browse Tools", href: "/tools" as Route }}
            />
          </div>
        </AstraContainer>
      </AstraSection>
    </div>
  );
}
