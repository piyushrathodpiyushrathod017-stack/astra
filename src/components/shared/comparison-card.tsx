import Link from "next/link";
import { AstraBadge } from "@/components/shared/astra-badge";
import { BarChart3, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComparisonCardProps {
  title: string;
  category: string;
  popularity?: string;
  slug: string;
  className?: string;
}

export function ComparisonCard({ title, category, popularity, slug, className }: ComparisonCardProps) {
  return (
    <Link href={`/compare/${slug}`}>
      <div
        className={cn(
          "rounded-lg border border-border bg-card p-6 transition-all cursor-pointer group",
          "hover:border-astra-primary/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]",
          className
        )}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-astra-primary" />
            <h3 className="font-semibold text-foreground group-hover:text-astra-primary transition-colors">
              {title}
            </h3>
          </div>
          {popularity && <AstraBadge variant="secondary">{popularity}</AstraBadge>}
        </div>
        <AstraBadge variant="secondary" className="mb-3">{category}</AstraBadge>
        <div className="flex items-center gap-1 text-sm text-astra-primary group-hover:underline">
          View Comparison <ArrowRight className="h-3 w-3" />
        </div>
      </div>
    </Link>
  );
}
