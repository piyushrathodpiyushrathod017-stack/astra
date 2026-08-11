import type { Metadata } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import type { Route } from "next";

export const metadata: Metadata = {
  title: "Settings | ASTRA",
  description: "Manage your preferences and account settings",
};

const breadcrumbItems = [
  { label: "Home", href: "/" as Route },
  { label: "Settings", href: "/profile/settings" as Route },
];

export default function SettingsPage() {
  return (
    <div className="min-h-screen">
      <AstraSection className="pt-24 pb-16">
        <AstraContainer>
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />

          <div className="max-w-2xl mx-auto space-y-8">
            <div>
              <h1 className="text-3xl font-bold">Settings</h1>
              <p className="text-muted-foreground mt-2">
                Customize your ASTRA experience
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 border rounded-lg bg-card space-y-4">
                <h2 className="text-lg font-semibold">Appearance</h2>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Theme</p>
                    <p className="text-sm text-muted-foreground">
                      Switch between light and dark mode
                    </p>
                  </div>
                  <select className="px-3 py-2 border rounded-md bg-background">
                    <option value="system">System</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                </div>
              </div>

              <div className="p-6 border rounded-lg bg-card space-y-4">
                <h2 className="text-lg font-semibold">Notifications</h2>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Receive updates about new tools and features
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 rounded border-gray-300"
                  />
                </div>
              </div>

              <div className="p-6 border rounded-lg bg-card space-y-4">
                <h2 className="text-lg font-semibold">Account</h2>
                <div className="space-y-3">
                  <button className="text-sm text-muted-foreground hover:text-foreground">
                    Change password
                  </button>
                  <button className="text-sm text-red-500 hover:text-red-600">
                    Delete account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AstraContainer>
      </AstraSection>
    </div>
  );
}
