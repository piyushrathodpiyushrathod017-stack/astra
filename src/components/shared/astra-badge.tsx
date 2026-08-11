import { cn } from "@/lib/utils";

interface AstraBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary" | "outline";
}

export function AstraBadge({
  children,
  className,
  variant = "default",
}: AstraBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === "default" && "bg-astra-muted text-astra-primary",
        variant === "primary" && "bg-astra-primary text-white",
        variant === "secondary" && "bg-secondary text-secondary-foreground",
        variant === "outline" && "border border-border text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
