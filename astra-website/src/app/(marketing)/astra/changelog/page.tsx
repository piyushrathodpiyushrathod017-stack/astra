import type { Metadata } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { AstraCard } from "@/components/shared/astra-card";
import { BookOpen } from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Changelog",
  description:
    "ASTRA changelog — track all updates, improvements, and new features added to the platform.",
  path: "/astra/changelog",
  tags: [
    "ASTRA changelog",
    "ASTRA updates",
    "release notes",
    "AI OS updates",
    "platform updates",
  ],
});

export default function AstraChangelogPage() {
  return (
    <>
      <AstraSection className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AstraContainer>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Changelog
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Track all changes, improvements, and fixes to ASTRA.
            </p>
          </div>
        </AstraContainer>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <div className="mx-auto max-w-2xl">
            <AstraCard className="text-center py-12">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">
                No changelog entries yet
              </h2>
              <p className="text-muted-foreground">
                Changelog entries will appear here as ASTRA develops.
                Check back soon for updates.
              </p>
            </AstraCard>
          </div>
        </AstraContainer>
      </AstraSection>
    </>
  );
}
