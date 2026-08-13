import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import {
  StructuredDataScript,
  generateBreadcrumbStructuredData,
} from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description:
    "Get in touch with ASTRA founder Piyush Vipulbhai Rathod. Reach us by phone, email, WhatsApp, or visit our office in Palitana, Bhavnagar, Gujarat.",
  path: "/contact",
  tags: [
    "contact ASTRA",
    "contact us",
    "get in touch",
    "ASTRA phone number",
    "ASTRA address",
    "Piyush Rathod",
  ],
});

const breadcrumbs = generateBreadcrumbStructuredData([
  { name: "Home", url: "/" },
  { name: "Contact Us", url: "/contact" },
]);

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact ASTRA",
  description:
    "Get in touch with ASTRA founder Piyush Vipulbhai Rathod",
  url: `${process.env.NEXT_PUBLIC_APP_URL || "https://astra.ai"}/contact`,
  mainEntity: {
    "@type": "Person",
    name: "Piyush Vipulbhai Rathod",
    jobTitle: "Founder",
    telephone: "+916353243596",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ravi-darshan2, Gariyadhar Road, Near Helipad",
      addressLocality: "Palitana",
      addressRegion: "Bhavnagar, Gujarat",
      postalCode: "364270",
      addressCountry: "IN",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <StructuredDataScript data={breadcrumbs} />
      <StructuredDataScript data={contactSchema} />
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;d love to hear from you. Reach out anytime.
          </p>
          <div className="divider mx-auto mt-6 max-w-xs" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="border-accent rounded-xl bg-card p-8 transition-all duration-300 hover:shadow-lg hover:shadow-astra-primary/5">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-astra-muted px-4 py-1.5 text-sm font-medium text-astra-primary">
              <span className="h-2 w-2 rounded-full bg-astra-primary animate-pulse-slow" />
              Founder
            </div>
            <h2 className="font-heading text-2xl font-bold">Piyush Vipulbhai Rathod</h2>
            <p className="mt-1 text-sm text-muted-foreground">Founder &amp; Creator of ASTRA</p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-astra-muted">
                  <MapPin className="h-5 w-5 text-astra-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Office Address</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                    Ravi-darshan2, Gariyadhar Road, Near Helipad,
                    <br />
                    Palitana, Bhavnagar — 364270
                    <br />
                    Gujarat, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-astra-muted">
                  <Phone className="h-5 w-5 text-astra-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Mobile</h3>
                  <a
                    href="tel:+916353243596"
                    className="mt-0.5 inline-block text-sm text-muted-foreground transition-colors hover:text-astra-primary"
                  >
                    +91 63532 43596
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-astra-muted">
                  <Mail className="h-5 w-5 text-astra-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-astra-primary/20 bg-astra-muted/30 p-8 text-center transition-all duration-300 hover:border-astra-primary/40 hover:shadow-lg hover:shadow-astra-primary/5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366]/10">
              <MessageCircle className="h-10 w-10 text-[#25D366]" />
            </div>
            <h2 className="mt-5 font-heading text-2xl font-bold">WhatsApp</h2>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Connect with us instantly on WhatsApp for quick queries and
              updates.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2.5 rounded-xl bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-[#25D366]/30"
              aria-label="Chat on WhatsApp (coming soon)"
            >
              <MessageCircle className="h-4 w-4" />
              Start Chat
            </a>
            <p className="mt-3 text-xs text-muted-foreground/70">
              WhatsApp number coming soon
            </p>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="font-heading text-2xl font-bold text-center">Our Location</h2>
          <p className="mt-2 text-center text-muted-foreground">
            Palitana, Bhavnagar district, Gujarat, India
          </p>
          <div className="divider mx-auto mt-4 max-w-xs" />
          <div className="mt-8 overflow-hidden rounded-xl border-accent">
            <iframe
              title="ASTRA Office Location — Palitana, Bhavnagar"
              src="https://www.openstreetmap.org/export/embed.html?bbox=71.83%2C21.51%2C71.89%2C21.55&layer=mapnik&marker=21.53%2C71.86"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
    </>
  );
}
