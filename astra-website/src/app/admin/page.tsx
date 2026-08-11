import type { Metadata } from "next";
import Link from "next/link";
import type { Route } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import {
  LayoutDashboard,
  FileText,
  Wrench,
  BarChart3,
  Settings,
  Users,
  Database,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Dashboard | ASTRA",
  description: "ASTRA administrative dashboard",
};

const breadcrumbItems = [
  { label: "Home", href: "/" as Route },
  { label: "Admin", href: "/admin" as Route },
];

const stats = [
  { label: "Total Tools", value: "42", change: "+3 this week" },
  { label: "Total Models", value: "28", change: "+1 this week" },
  { label: "Comparisons", value: "18", change: "+2 this week" },
  { label: "Articles", value: "24", change: "+5 this week" },
];

const quickActions = [
  { label: "Tools", href: "/admin/tools" as Route, icon: <Wrench className="h-5 w-5" /> },
  { label: "Models", href: "/admin/models" as Route, icon: <Database className="h-5 w-5" /> },
  { label: "Articles", href: "/admin/articles" as Route, icon: <FileText className="h-5 w-5" /> },
  { label: "Comparisons", href: "/admin/comparisons" as Route, icon: <BarChart3 className="h-5 w-5" /> },
  { label: "Users", href: "/admin/users" as Route, icon: <Users className="h-5 w-5" /> },
  { label: "Settings", href: "/admin/settings" as Route, icon: <Settings className="h-5 w-5" /> },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <AstraSection className="pt-24 pb-8">
        <AstraContainer>
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />

          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Manage your ASTRA content and settings
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 border rounded-lg bg-card"
              >
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                <p className="text-xs text-green-600 mt-1">{stat.change}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="flex items-center gap-4 p-4 border rounded-lg bg-card hover:bg-accent transition-colors"
              >
                <div className="text-primary">{action.icon}</div>
                <div>
                  <p className="font-medium">{action.label}</p>
                  <p className="text-sm text-muted-foreground">Manage {action.label.toLowerCase()}</p>
                </div>
              </Link>
            ))}
          </div>
        </AstraContainer>
      </AstraSection>
    </div>
  );
}
