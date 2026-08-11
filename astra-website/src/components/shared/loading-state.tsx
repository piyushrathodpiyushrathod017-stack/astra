import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface LoadingStateProps {
  message?: string;
  className?: string;
}

export function LoadingState({ message = "Loading...", className }: LoadingStateProps) {
  return (
    <div className={cn("text-center py-12", className)}>
      <Loader2 className="h-8 w-8 text-astra-primary mx-auto mb-4 animate-spin" />
      <p className="text-muted-foreground">{message}</p>
    </div>
  );
}
