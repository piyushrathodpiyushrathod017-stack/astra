import Link from "next/link";
import { AstraBadge } from "@/components/shared/astra-badge";
import { BookOpen, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  title: string;
  level: string;
  category: string;
  readTime: string;
  slug: string;
  className?: string;
}

export function ArticleCard({ title, level, category, readTime, slug, className }: ArticleCardProps) {
  const levelVariant = level === "Beginner" ? "primary" : "secondary";

  return (
    <Link href={`/knowledge/${slug}`}>
      <div
        className={cn(
          "rounded-lg border border-border bg-card p-6 transition-all cursor-pointer group",
          "hover:border-astra-primary/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]",
          className
        )}
      >
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="h-5 w-5 text-astra-primary" />
          <AstraBadge variant={levelVariant as "primary" | "secondary"}>{level}</AstraBadge>
        </div>
        <h3 className="font-semibold text-foreground group-hover:text-astra-primary transition-colors mb-2">
          {title}
        </h3>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{category}</span>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {readTime}
          </div>
        </div>
      </div>
    </Link>
  );
}
