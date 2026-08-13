import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import {
  StructuredDataScript,
  generateBreadcrumbStructuredData,
} from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description:
    "ASTRA terms of service — read the rules and guidelines governing your use of our AI ecosystem platform.",
  path: "/terms",
  tags: [
    "terms of service",
    "terms and conditions",
    "user agreement",
    "ASTRA terms",
    "platform rules",
    "acceptable use",
  ],
});

const breadcrumbs = generateBreadcrumbStructuredData([
  { name: "Home", url: "/" },
  { name: "Terms of Service", url: "/terms" },
]);

const lastUpdated = "August 10, 2026";

export default function TermsPage() {
  return (
    <>
      <StructuredDataScript data={breadcrumbs} />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Please read these terms carefully. Last updated {lastUpdated}.
          </p>
          <div className="divider mx-auto mt-6 max-w-xs" />
        </div>

        <article className="prose space-y-10">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the ASTRA platform (&quot;Service&quot;), you agree
              to be bound by these Terms of Service (&quot;Terms&quot;). If you are using
              the Service on behalf of an organization, you represent that you have
              the authority to bind that entity to these Terms.
            </p>
            <p>
              We reserve the right to modify these Terms at any time. Continued use
              of the Service after changes constitutes acceptance of the modified
              Terms.
            </p>
          </section>

          <section>
            <h2>2. Description of Service</h2>
            <p>
              ASTRA is an AI ecosystem platform that provides:
            </p>
            <ul>
              <li>AI tool discovery and directory services</li>
              <li>AI model information and comparisons</li>
              <li>Knowledge base and educational content</li>
              <li>AI-powered features and interactive tools</li>
              <li>Community contributions and discussions</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of
              the Service at any time without prior notice.
            </p>
          </section>

          <section>
            <h2>3. User Accounts</h2>
            <h3>3.1 Registration</h3>
            <p>
              Certain features require an account. You agree to provide accurate,
              current, and complete information during registration and to keep your
              account credentials secure.
            </p>

            <h3>3.2 Account Security</h3>
            <p>
              You are responsible for all activities that occur under your account.
              Notify us immediately of any unauthorized use. We are not liable for
              any loss arising from unauthorized use of your account.
            </p>

            <h3>3.3 Account Termination</h3>
            <p>
              We reserve the right to suspend or terminate accounts that violate
              these Terms or engage in harmful behavior, with or without notice.
            </p>
          </section>

          <section>
            <h2>4. Acceptable Use Policy</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for any unlawful purpose or in violation of any regulations</li>
              <li>Attempt to gain unauthorized access to any part of the platform</li>
              <li>Interfere with, disrupt, or overload the Service or its infrastructure</li>
              <li>Use automated systems (bots, scrapers) without written permission</li>
              <li>Reverse engineer, decompile, or disassemble any part of the platform</li>
              <li>Impersonate another person or misrepresent your affiliation</li>
              <li>Upload malicious code, viruses, or harmful content</li>
              <li>Collect or harvest user data without explicit consent</li>
              <li>Use AI outputs to generate misleading, harmful, or illegal content</li>
            </ul>
          </section>

          <section>
            <h2>5. Intellectual Property</h2>
            <h3>5.1 Our Content</h3>
            <p>
              All content, design, code, graphics, logos, and trademarks on the
              Service are the property of ASTRA or its licensors and are protected
              by intellectual property laws. You may not use, copy, or distribute
              any content without prior written consent.
            </p>

            <h3>5.2 User Content</h3>
            <p>
              By submitting content to the Service, you grant ASTRA a
              non-exclusive, worldwide, royalty-free license to use, modify, and
              display that content in connection with operating the platform.
            </p>

            <h3>5.3 AI-Generated Content</h3>
            <p>
              Content generated through our AI tools is provided as-is. You are
              responsible for verifying accuracy and suitability before use. We make
              no claims about ownership of AI-generated outputs.
            </p>
          </section>

          <section>
            <h2>6. Privacy</h2>
            <p>
              Your use of the Service is also governed by our{" "}
              <a href="/privacy" className="text-astra-primary hover:text-astra-secondary underline underline-offset-2 transition-colors">
                Privacy Policy
              </a>
              , which is incorporated into these Terms by reference. Please review
              it to understand how we collect and handle your data.
            </p>
          </section>

          <section>
            <h2>7. Disclaimers</h2>
            <p>
              The Service is provided &quot;as is&quot; and &quot;as available&quot; without
              warranties of any kind, express or implied. We do not warrant that:
            </p>
            <ul>
              <li>The Service will be uninterrupted, timely, or error-free</li>
              <li>AI outputs will be accurate, complete, or reliable</li>
              <li>The Service will meet your specific requirements</li>
              <li>Defects will be corrected within any specific timeframe</li>
            </ul>
            <p>
              You are solely responsible for evaluating the accuracy and
              suitability of any information or outputs obtained through the Service.
            </p>
          </section>

          <section>
            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, ASTRA and its affiliates,
              officers, directors, and employees shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages,
              including but not limited to loss of profits, data, or business
              opportunities, arising from your use of the Service.
            </p>
            <p>
              Our total liability for any claim arising from these Terms or the
              Service shall not exceed the amount you paid us in the twelve (12)
              months preceding the claim, or one hundred dollars ($100), whichever
              is greater.
            </p>
          </section>

          <section>
            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless ASTRA and its
              affiliates from any claims, liabilities, damages, or expenses
              arising from your use of the Service, violation of these Terms, or
              infringement of any third-party rights.
            </p>
          </section>

          <section>
            <h2>10. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India, without regard to
              conflict of law principles. Any disputes shall be resolved in the
              courts of Bhavnagar, Gujarat, India.
            </p>
          </section>

          <section>
            <h2>11. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the
              remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section>
            <h2>12. Changes to Terms</h2>
            <p>
              We may revise these Terms at any time by updating this page.
              Material changes will be communicated through the platform or via
              email. Your continued use of the Service after changes are posted
              constitutes acceptance.
            </p>
          </section>

          <section>
            <h2>13. Contact</h2>
            <p>
              For questions about these Terms, please visit our{" "}
              <a href="/contact" className="text-astra-primary hover:text-astra-secondary underline underline-offset-2 transition-colors">
                Contact page
              </a>
              .
            </p>
            <ul>
              <li>
                <strong>Founder:</strong> Piyush Vipulbhai Rathod
              </li>
              <li>
                <strong>Phone:{" "}</strong>
                <a href="tel:+916353243596" className="text-astra-primary hover:text-astra-secondary transition-colors">
                  +91 63532 43596
                </a>
              </li>
              <li>
                <strong>Address:</strong> Ravi-darshan2, Gariyadhar Road, Near
                Helipad, Palitana, Bhavnagar — 364270
              </li>
            </ul>
          </section>
        </article>
      </main>
    </>
  );
}
