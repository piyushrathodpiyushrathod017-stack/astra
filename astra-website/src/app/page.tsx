import type { Metadata } from "next";
import { AnimatedHomepage } from "@/components/shared/animated-homepage";
import { StructuredDataScript, generateBreadcrumbStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: {
    default: "ASTRA — The Intelligent AI Ecosystem",
    template: "%s | ASTRA",
  },
  description:
    "ASTRA is a premium AI ecosystem platform combining AI discovery, comparisons, knowledge base, and an intelligent personal AI operating system. Discover, compare, and understand AI tools and technologies.",
  keywords: [
    "AI ecosystem",
    "AI tools",
    "AI models",
    "AI comparison",
    "artificial intelligence",
    "machine learning",
    "LLM",
    "AI operating system",
    "AI coding",
    "local AI",
    "AI knowledge base",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ASTRA",
    title: "ASTRA — The Intelligent AI Ecosystem",
    description:
      "Discover, compare, and understand AI tools, models, and technologies through an intelligent ecosystem platform.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ASTRA — The Intelligent AI Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASTRA — The Intelligent AI Ecosystem",
    description:
      "Discover, compare, and understand AI tools, models, and technologies through an intelligent ecosystem platform.",
    images: ["/og.png"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ASTRA",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://astra.ai",
  description: "Your comprehensive guide to AI tools, models, and comparisons",
  potentialAction: {
    "@type": "SearchAction",
    target: `${process.env.NEXT_PUBLIC_APP_URL || "https://astra.ai"}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ASTRA",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://astra.ai",
  logo: `${process.env.NEXT_PUBLIC_APP_URL || "https://astra.ai"}/logo.png`,
  description: "AI Tools, Models, and Comparisons — The Intelligent AI Ecosystem",
  founder: {
    "@type": "Person",
    name: "Piyush Vipulbhai Rathod",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+916353243596",
    contactType: "customer service",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ravi-darshan2, Gariyadhar Road, Near Helipad",
    addressLocality: "Palitana",
    addressRegion: "Bhavnagar, Gujarat",
    postalCode: "364270",
    addressCountry: "IN",
  },
};

export default function Home() {
  return (
    <>
      <StructuredDataScript data={websiteSchema} />
      <StructuredDataScript data={orgSchema} />
      <AnimatedHomepage />
    </>
  );
}
