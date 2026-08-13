import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import {
  StructuredDataScript,
  generateBreadcrumbStructuredData,
} from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "ASTRA privacy policy — learn how we collect, use, and protect your personal information. Your privacy is our priority.",
  path: "/privacy",
  tags: [
    "privacy policy",
    "data protection",
    "user privacy",
    "ASTRA privacy",
    "personal information",
    "GDPR",
  ],
});

const breadcrumbs = generateBreadcrumbStructuredData([
  { name: "Home", url: "/" },
  { name: "Privacy Policy", url: "/privacy" },
]);

const lastUpdated = "August 10, 2026";

export default function PrivacyPage() {
  return (
    <>
      <StructuredDataScript data={breadcrumbs} />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Your privacy matters to us. Last updated {lastUpdated}.
          </p>
          <div className="divider mx-auto mt-6 max-w-xs" />
        </div>

        <article className="prose space-y-10">
          <section>
            <h2>1. Introduction</h2>
            <p>
              Welcome to ASTRA (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are
              committed to protecting your personal information and your right to
              privacy. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website and use our
              AI ecosystem platform.
            </p>
            <p>
              By accessing or using our platform, you agree to the collection and
              use of information in accordance with this policy. If you do not agree
              with the terms of this policy, please discontinue use immediately.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide to
              us when you register for an account, subscribe to our services, or
              contact us. This information may include:
            </p>
            <ul>
              <li>Name and email address</li>
              <li>Account credentials and preferences</li>
              <li>Payment and billing information (if applicable)</li>
              <li>Communications you send to us directly</li>
            </ul>

            <h3>2.2 Usage Data</h3>
            <p>
              We automatically collect certain information when you visit our
              platform. This includes:
            </p>
            <ul>
              <li>Device type, browser version, and operating system</li>
              <li>Pages visited, time spent, and navigation patterns</li>
              <li>IP address and approximate geographic location</li>
              <li>Referring website or source</li>
            </ul>

            <h3>2.3 AI Interaction Data</h3>
            <p>
              When you use our AI tools and features, we may collect anonymized
              interaction data to improve model accuracy and platform performance.
              This data is never used to identify individual users.
            </p>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain our platform</li>
              <li>Personalize your experience and deliver relevant AI recommendations</li>
              <li>Improve and optimize our services, tools, and algorithms</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative notifications, updates, and support messages</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          <section>
            <h2>4. How We Share Your Information</h2>
            <p>
              We do not sell your personal information. We may share your data only
              in the following circumstances:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Third-party vendors who assist
                with hosting, analytics, and platform operations, bound by
                confidentiality agreements.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law, court
                order, or governmental regulation.
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a merger,
                acquisition, or sale of assets, with appropriate notice.
              </li>
              <li>
                <strong>With Your Consent:</strong> When you explicitly authorize us
                to share your information.
              </li>
            </ul>
          </section>

          <section>
            <h2>5. Data Security</h2>
            <p>
              We implement industry-standard security measures including
              encryption, access controls, and regular security audits to protect
              your personal information. While no method of transmission over the
              Internet is 100% secure, we strive to use commercially acceptable
              means to protect your data.
            </p>
          </section>

          <section>
            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to
              fulfill the purposes outlined in this policy, unless a longer
              retention period is required or permitted by law. When your data is
              no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2>7. Your Rights</h2>
            <p>
              Depending on your location, you may have the following rights:
            </p>
            <ul>
              <li>Access and receive a copy of your personal data</li>
              <li>Correct any inaccurate or incomplete data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability — receive your data in a structured format</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the
              information provided on our{" "}
              <a href="/contact" className="text-astra-primary hover:text-astra-secondary underline underline-offset-2 transition-colors">
                Contact page
              </a>
              .
            </p>
          </section>

          <section>
            <h2>8. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your
              experience. You can control cookie preferences through your browser
              settings. Disabling cookies may affect certain platform
              functionalities.
            </p>
          </section>

          <section>
            <h2>9. Children&apos;s Privacy</h2>
            <p>
              Our platform is not intended for children under 13 years of age. We
              do not knowingly collect personal information from children. If we
              become aware that we have collected data from a child, we will take
              steps to delete it promptly.
            </p>
          </section>

          <section>
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of any material changes by posting the new policy on this page
              and updating the &quot;Last Updated&quot; date. We encourage you to review
              this policy periodically.
            </p>
          </section>

          <section>
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please reach out to us through our{" "}
              <a href="/contact" className="text-astra-primary hover:text-astra-secondary underline underline-offset-2 transition-colors">
                Contact page
              </a>
              {" "}or at:
            </p>
            <ul>
              <li>
                <strong>Founder:</strong> Piyush Vipulbhai Rathod
              </li>
              <li>
                <strong>Phone:</strong>{" "}
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
