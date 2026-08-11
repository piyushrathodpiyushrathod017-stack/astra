import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://astra.ai";

export interface OgImageParams {
  title: string;
  description?: string;
  type?: "website" | "article" | "tool" | "model" | "comparison";
  theme?: "dark" | "light";
}

export function generateOgImageUrl(params: OgImageParams): string {
  const searchParams = new URLSearchParams();
  searchParams.set("title", params.title);
  if (params.description) searchParams.set("desc", params.description);
  if (params.type) searchParams.set("type", params.type);
  if (params.theme) searchParams.set("theme", params.theme);
  return `${siteUrl}/api/og?${searchParams.toString()}`;
}

export function generatePageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const url = `${siteUrl}${path}`;
  const ogImage = image || generateOgImageUrl({ title, description });

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "ASTRA",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}
