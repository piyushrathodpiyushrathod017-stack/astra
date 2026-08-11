import type { Metadata } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { EmptyState } from "@/components/shared/empty-state";
import type { Route } from "next";
import { MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Conversations | ASTRA Agent",
  description: "Your conversation history with ASTRA",
};

const breadcrumbItems = [
  { label: "Home", href: "/" as Route },
  { label: "ASTRA Agent", href: "/astra/agent" as Route },
  { label: "Conversations", href: "/astra/agent/conversations" as Route },
];

export default function ConversationsPage() {
  return (
    <div className="min-h-screen">
      <AstraSection className="pt-24 pb-16">
        <AstraContainer>
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />

          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h1 className="text-3xl font-bold">Conversations</h1>
              <p className="text-muted-foreground mt-2">
                Your chat history with ASTRA
              </p>
            </div>

            <EmptyState
              icon={<MessageSquare className="h-12 w-12" />}
              title="No conversations yet"
              description="Start a conversation with ASTRA to get personalized AI recommendations."
              action={{ label: "Start Chatting", href: "/astra/agent" as Route }}
            />
          </div>
        </AstraContainer>
      </AstraSection>
    </div>
  );
}
