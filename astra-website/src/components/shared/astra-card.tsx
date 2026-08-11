import { cn } from "@/lib/utils";

interface AstraCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function AstraCard({
  children,
  className,
  hover = true,
  glow = false,
}: AstraCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-xl border border-border/60 bg-card p-6 h-full",
        "transition-all duration-300 ease-out",
        hover && [
          "hover:border-astra-primary/40",
          "hover:shadow-[0_8px_30px_rgba(99,102,241,0.12),0_0_0_1px_rgba(99,102,241,0.05)]",
          "hover:-translate-y-1",
        ],
        glow && "glow-border",
        className
      )}
    >
      {children}
    </div>
  );
}
