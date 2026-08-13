import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { StructuredDataScript } from "@/lib/structured-data";
import {
  generateWebsiteStructuredData,
  generateOrganizationStructuredData,
} from "@/lib/structured-data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ASTRA — The Intelligent AI Ecosystem",
    template: "%s | ASTRA",
  },
  description:
    "ASTRA is a premium AI ecosystem platform combining AI discovery, comparisons, knowledge base, and an intelligent personal AI operating system. Discover, compare, and understand AI tools and technologies.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://astra.ai"
  ),
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
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
  authors: [{ name: "ASTRA" }],
  creator: "ASTRA",
  publisher: "ASTRA",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL || "https://astra.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-background focus:text-foreground focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e1547]/50 via-transparent to-transparent h-[400px]" />
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <StructuredDataScript data={generateWebsiteStructuredData()} />
            <StructuredDataScript data={generateOrganizationStructuredData()} />
            <Navbar />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
