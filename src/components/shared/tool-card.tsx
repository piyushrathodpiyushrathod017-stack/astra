import Link from "next/link";
import { AstraBadge } from "@/components/shared/astra-badge";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  name: string;
  category: string;
  rating: string;
  description: string;
  slug: string;
  className?: string;
}

export function ToolCard({ name, category, rating, description, slug, className }: ToolCardProps) {
  return (
    <Link href={`/tools/${slug}`}>
      <div
        className={cn(
          "rounded-lg border border-border bg-card p-6 transition-all cursor-pointer group",
          "hover:border-astra-primary/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]",
          className
        )}
      >
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-foreground group-hover:text-astra-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium text-foreground">{rating}</span>
          </div>
        </div>
        <AstraBadge variant="secondary" className="mb-2">{category}</AstraBadge>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}
