import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface CreateMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
}

export function createMetadata({
  title,
  description,
  path = "",
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  tags,
}: CreateMetadataOptions = {}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || `${siteConfig.url}/og.png`;
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;

  const metadata: Metadata = {
    title: fullTitle,
    description: description || siteConfig.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: description || siteConfig.description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      locale: "en_US",
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(authors ? { authors } : {}),
      ...(tags ? { tags } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description || siteConfig.description,
      images: [ogImage],
    },
    ...(tags ? { keywords: tags } : {}),
  };

  return metadata;
}

export function createArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    image: image || `${siteConfig.url}/og.png`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
