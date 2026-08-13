import Link from "next/link";
import type { Metadata } from "next";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { AstraBadge } from "@/components/shared/astra-badge";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { articles, getArticleBySlug } from "@/lib/mock-data";

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Metadata {
  return createMetadata({
    title: "Blog Post",
    description: "Read the latest AI insights and tutorials on ASTRA.",
    path: "/blog",
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mockArticle = getArticleBySlug(slug);
  const post = mockArticle
    ? { ...mockArticle, readTime: `${mockArticle.readTime} min read` }
    : {
        title: slug.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase()),
        date: "August 2026",
        readTime: "5 min read",
        category: "General",
        author: "ASTRA Team",
        content: ["Content coming soon."],
      };

  return (
    <>
      <AstraSection className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <AstraContainer>
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title, href: `/blog/${slug}` },
            ]}
          />

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
