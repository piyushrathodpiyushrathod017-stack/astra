import type { Metadata } from "next";
import { SignInForm } from "./sign-in-form";

export const metadata: Metadata = {
  title: "Sign In | ASTRA",
  description: "Sign in to your ASTRA account to access bookmarks, collections, and personalized recommendations",
};

export default function SignInPage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-muted-foreground mt-2">
          Sign in to access your bookmarks, collections, and preferences
        </p>
      </div>
      <SignInForm />
    </div>
  );
}
