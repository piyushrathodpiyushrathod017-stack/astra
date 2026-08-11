import { cn } from "@/lib/utils";

interface AstraContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function AstraContainer({
  children,
  className,
  as: Component = "div",
}: AstraContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </Component>
  );
}
