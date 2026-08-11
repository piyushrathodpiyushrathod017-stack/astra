import Link from "next/link";
import { AstraBadge } from "@/components/shared/astra-badge";
import { cn } from "@/lib/utils";

interface ModelCardProps {
  name: string;
  provider: string;
  type: string;
  parameters?: string;
  description: string;
  slug: string;
  className?: string;
}

export function ModelCard({ name, provider, type, parameters, description, slug, className }: ModelCardProps) {
  return (
    <Link href={`/models/${slug}`}>
      <div
        className={cn(
          "rounded-lg border border-border bg-card p-6 transition-all cursor-pointer group",
          "hover:border-astra-primary/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]",
          className
        )}
      >
        <h3 className="font-semibold text-foreground group-hover:text-astra-primary transition-colors mb-2">
          {name}
        </h3>
        <div className="flex gap-2 mb-2">
          <AstraBadge variant="primary">{provider}</AstraBadge>
          <AstraBadge variant="secondary">{type}</AstraBadge>
          {parameters && <AstraBadge variant="secondary">{parameters}</AstraBadge>}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}
