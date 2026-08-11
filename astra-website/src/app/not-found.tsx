import Link from "next/link";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraButton } from "@/components/shared/astra-button";

export default function NotFound() {
  return (
    <AstraContainer className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-foreground">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        The page you are looking for does not exist.
      </p>
      <div className="mt-8">
        <AstraButton href="/">
          Return Home
        </AstraButton>
      </div>
    </AstraContainer>
  );
}
