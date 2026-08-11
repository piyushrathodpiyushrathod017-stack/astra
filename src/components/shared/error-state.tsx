import { cn } from "@/lib/utils";
import { AlertTriangle } from "lucide-react";

interface ErrorStateProps {
  title?: string;
  message: string;
  className?: string;
}

export function ErrorState({ title = "Something went wrong", message, className }: ErrorStateProps) {
  return (
    <div className={cn("text-center py-12", className)}>
      <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
      <h2 className="text-xl font-semibold text-foreground mb-2">{title}</h2>
      <p className="text-muted-foreground">{message}</p>
    </div>
  );
}
