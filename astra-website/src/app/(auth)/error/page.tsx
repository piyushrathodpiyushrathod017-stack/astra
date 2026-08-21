import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth Error | ASTRA",
  description: "Authentication error",
};

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Authentication Error</h1>
        <p className="text-muted-foreground">
          Something went wrong during authentication. Please try again.
        </p>
        <a href="/signin" className="text-primary hover:underline">
          Return to sign in
        </a>
      </div>
    </div>
  );
}
