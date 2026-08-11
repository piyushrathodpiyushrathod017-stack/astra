import type { Metadata } from "next";
import { SignUpForm } from "./sign-up-form";

export const metadata: Metadata = {
  title: "Sign Up | ASTRA",
  description: "Create your ASTRA account to save bookmarks, build collections, and get personalized recommendations",
};

export default function SignUpPage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-muted-foreground mt-2">
          Join ASTRA to save bookmarks, build collections, and more
        </p>
      </div>
      <SignUpForm />
    </div>
  );
}
