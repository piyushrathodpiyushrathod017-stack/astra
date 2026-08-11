const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://astra.ai";

export interface StructuredData {
  "@context": string;
  "@type": string;
  [key: string]: unknown;
}

export function generateWebsiteStructuredData(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ASTRA",
    url: siteUrl,
    description: "Your comprehensive guide to AI tools, models, and comparisons",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateOrganizationStructuredData(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ASTRA",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: "AI Tools, Models, and Comparisons",
  };
}

export function generateArticleStructuredData({
  title,
  description,
  url,
  image,
  author,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
}): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    image: image || `${siteUrl}/og?title=${encodeURIComponent(title)}`,
    author: author
      ? {
          "@type": "Person",
          name: author,
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "ASTRA",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    datePublished,
    dateModified: dateModified || datePublished,
  };
}

export function generateToolStructuredData({
  name,
  description,
  url,
  image,
  rating,
  reviewCount,
  pricing,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
  rating?: number;
  reviewCount?: number;
  pricing?: string;
}): StructuredData {
  const data: StructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    image,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
  };

  if (rating && reviewCount) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: rating,
      reviewCount,
      bestRating: 100,
      worstRating: 0,
    };
  }

  if (pricing) {
    data.offers = {
      "@type": "Offer",
      price: pricing === "free" ? "0" : undefined,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    };
  }

  return data;
}

export function generateModelStructuredData({
  name,
  description,
  url,
  provider,
  contextWindow,
}: {
  name: string;
  description: string;
  url: string;
  provider?: string;
  contextWindow?: number;
}): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: "AIApplication",
    provider: provider
      ? {
          "@type": "Organization",
          name: provider,
        }
      : undefined,
  };
}

export function generateBreadcrumbStructuredData(
  items: { name: string; url: string }[]
): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}

export function generateFaqStructuredData(
  items: { question: string; answer: string }[]
): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function StructuredDataScript({ data }: { data: StructuredData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
