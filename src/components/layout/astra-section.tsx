import { cn } from "@/lib/utils";

interface AstraSectionProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function AstraSection({
  children,
  className,
  as: Component = "section",
}: AstraSectionProps) {
  return (
    <Component
      className={cn("py-16 sm:py-24", className)}
    >
      {children}
    </Component>
  );
}
