import Link from "next/link";
import { cn } from "@/lib/utils";

interface AstraButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function AstraButton({
  children,
  className,
  href,
  variant = "primary",
  size = "md",
}: AstraButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    variant === "primary" && "bg-astra-primary text-white hover:bg-astra-secondary",
    variant === "secondary" && "bg-secondary text-foreground border border-border hover:bg-accent",
    variant === "ghost" && "text-muted-foreground hover:text-foreground hover:bg-accent",
    size === "sm" && "h-8 px-3 text-sm",
    size === "md" && "h-10 px-4 text-sm",
    size === "lg" && "h-12 px-6 text-base",
    className
  );

  if (href) {
    return (
      <Link href={href as never} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseStyles}>
      {children}
    </button>
  );
}
