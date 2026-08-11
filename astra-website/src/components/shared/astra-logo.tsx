import Image from "next/image";
import { cn } from "@/lib/utils";

interface AstraLogoProps {
  className?: string;
}

export function AstraLogo({ className }: AstraLogoProps) {
  return (
    <Image
      src="/favicon.png"
      alt="ASTRA Logo"
      width={32}
      height={32}
      className={cn("h-8 w-8", className)}
      priority
    />
  );
}
