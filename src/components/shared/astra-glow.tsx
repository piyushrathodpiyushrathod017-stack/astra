import { cn } from "@/lib/utils";

interface AstraGlowProps {
  children: React.ReactNode;
  className?: string;
}

export function AstraGlow({ children, className }: AstraGlowProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-0 rounded-lg bg-astra-glow blur-xl" />
      <div className="relative">{children}</div>
    </div>
  );
}
