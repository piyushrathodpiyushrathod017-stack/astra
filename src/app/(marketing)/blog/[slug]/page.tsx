import Link from "next/link";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { AstraBadge } from "@/components/shared/astra-badge";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const posts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  content: string[];
}> = {
  "future-of-ai-2026": {
    title: "The Future of AI in 2026",
    date: "August 8, 2026",
    readTime: "8 min read",
    category: "Trends",
    author: "ASTRA Team",
    content: [
      "Artificial intelligence continues to evolve at an unprecedented pace. As we move through 2026, several key trends are shaping the future of AI technology.",
      "Local AI is becoming increasingly practical. With models like Llama 3.1 and Mistral achieving near-commercial quality, running AI on consumer hardware is no longer a fantasy. This shift toward edge computing reduces latency, improves privacy, and eliminates ongoing API costs.",
      "AI safety and alignment research is maturing. The industry is moving beyond theoretical discussions to practical implementation of safety measures. Constitutional AI, RLHF, and other alignment techniques are becoming standard practice.",
      "Multimodal AI is the new baseline. Text-only models are becoming obsolete as users expect seamless integration of text, image, audio, and video understanding in a single system.",
      "The competitive landscape is diversifying. Open-source models, smaller specialized companies, and regional players are challenging the dominance of a few large providers. This competition drives innovation and reduces costs for everyone.",
    ],
  },
  "open-source-ai-models-rise": {
    title: "Open Source AI Models Rise",
    date: "August 5, 2026",
    readTime: "6 min read",
    category: "Models",
    author: "ASTRA Team",
    content: [
      "The open-source AI movement has reached a tipping point. What started as academic experiments has evolved into a legitimate alternative to proprietary models.",
      "Meta's Llama series demonstrated that open models can match or exceed commercial offerings on many benchmarks. Mistral AI continued this trend with efficient, high-performance models.",
      "The benefits of open-source AI extend beyond cost savings. Organizations can fine-tune models for specific domains, ensure data privacy, and maintain full control over their AI infrastructure.",
      "Community contributions are accelerating development. Thousands of developers worldwide are contributing to model improvements, creating specialized variants, and building tooling that makes open models easier to deploy.",
    ],
  },
};

const fallbackPost = {
  title: "Blog Post",
  date: "August 2026",
  readTime: "5 min read",
  category: "General",
  author: "ASTRA Team",
  content: ["Content coming soon."],
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug] || { ...fallbackPost, title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) };

  return (
    <>
      <AstraSection className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AstraContainer>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-astra-primary mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <AstraBadge variant="primary">{post.category}</AstraBadge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </AstraContainer>
      </AstraSection>

      <AstraSection className="py-12">
        <AstraContainer>
          <article className="max-w-3xl">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </article>
        </AstraContainer>
      </AstraSection>
    </>
  );
}
