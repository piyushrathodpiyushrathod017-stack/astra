import Link from "next/link";
import type { Route } from "next";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href: Route;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav className={cn("flex items-center gap-1 text-sm text-muted-foreground mb-8", className)}>
      <Link href="/" className="hover:text-astra-primary transition-colors">
        Home
      </Link>
      {items.map((item) => (
        <span key={item.href} className="flex items-center gap-1">
          <ChevronRight className="h-3 w-3" />
          <Link href={item.href} className="hover:text-astra-primary transition-colors">
            {item.label}
          </Link>
        </span>
      ))}
    </nav>
  );
}
