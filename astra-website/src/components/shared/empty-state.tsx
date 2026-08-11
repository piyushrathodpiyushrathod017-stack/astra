import Link from "next/link";
import type { Route } from "next";
import { cn } from "@/lib/utils";
import { FileX } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  action?: {
    label: string;
    href: Route;
  };
}

export function EmptyState({ title, description, icon, className, action }: EmptyStateProps) {
  return (
    <div className={cn("text-center py-12", className)}>
      {icon || <FileX className="h-12 w-12 text-muted-foreground mx-auto mb-4" />}
      <h2 className="text-xl font-semibold text-foreground mb-2">{title}</h2>
      <p className="text-muted-foreground mb-6">{description}</p>
      {action && (
        <Link
          href={action.href}
          className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}
