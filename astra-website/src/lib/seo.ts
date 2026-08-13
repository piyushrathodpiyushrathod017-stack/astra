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
