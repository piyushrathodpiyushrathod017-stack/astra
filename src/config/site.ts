export const siteConfig = {
  name: "ASTRA",
  title: "ASTRA — The Intelligent AI Ecosystem",
  description:
    "ASTRA is a premium AI ecosystem platform combining AI discovery, comparisons, knowledge base, and an intelligent personal AI operating system. Discover, compare, and understand AI tools and technologies.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://astra.ai",
  ogImage: "/og.png",
  creator: "Piyush Vipulbhai Rathod",
  founder: "Piyush Vipulbhai Rathod",
  phone: "+916353243596",
  email: "contact@astra.ai",
  address: {
    street: "Ravi-darshan2, Gariyadhar Road, Near Helipad",
    city: "Palitana",
    district: "Bhavnagar",
    state: "Gujarat",
    pincode: "364270",
    country: "IN",
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
    "AI tools directory",
    "compare AI models",
  ],
  version: "0.1.0",
} as const;

export type SiteConfig = typeof siteConfig;
