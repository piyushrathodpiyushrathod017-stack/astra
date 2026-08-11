import type { Metadata } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import type { Route } from "next";

export const metadata: Metadata = {
  title: "Profile | ASTRA",
  description: "Manage your ASTRA profile and settings",
};

const breadcrumbItems = [
  { label: "Home", href: "/" as Route },
  { label: "Profile", href: "/profile" as Route },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen">
      <AstraSection className="pt-24 pb-16">
        <AstraContainer>
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />

          <div className="max-w-2xl mx-auto space-y-8">
            <div>
              <h1 className="text-3xl font-bold">Your Profile</h1>
              <p className="text-muted-foreground mt-2">
                Manage your account settings and preferences
              </p>
            </div>

            <div className="p-6 border rounded-lg bg-card space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center text-2xl font-bold">
                  U
                </div>
                <div>
                  <h2 className="text-xl font-semibold">User</h2>
                  <p className="text-muted-foreground">user@example.com</p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    defaultValue="User"
                    className="w-full px-3 py-2 border rounded-md bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    defaultValue="user@example.com"
                    className="w-full px-3 py-2 border rounded-md bg-background"
                    disabled
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </AstraContainer>
      </AstraSection>
    </div>
  );
}
