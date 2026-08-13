"use client";

import Link from "next/link";
import { AstraContainer } from "@/components/layout/astra-container";
import { AstraSection } from "@/components/layout/astra-section";
import { AstraCard } from "@/components/shared/astra-card";
import { AstraButton } from "@/components/shared/astra-button";
import { AstraBadge } from "@/components/shared/astra-badge";
import {
  AnimatedHero,
  AnimatedHeroBadge,
  AnimatedHeroTitle,
  AnimatedHeroSubtitle,
  AnimatedHeroCta,
} from "@/components/shared/animated-hero";
import { AnimatedSection, AnimatedStagger, StaggerItem } from "@/components/shared/animated-section";
import {
  ArrowRight,
  Brain,
  Compass,
  GitCompare,
  Zap,
  Shield,
  Database,
  Globe,
  Code,
  BookOpen,
  BarChart3,
  Sparkles,
  Cpu,
  Network,
} from "lucide-react";

export function AnimatedHomepage() {
  return (
    <>
      {/* 1. Hero Section — Full viewport height, full width */}
      <section className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden">
        <AnimatedHero className="absolute inset-0">
          <div />
        </AnimatedHero>
        <AstraContainer className="relative z-10 text-center py-16 sm:py-20">
          <AnimatedHeroBadge>
            <div className="inline-flex items-center gap-2 rounded-full border border-astra-primary/20 bg-astra-muted/60 px-5 py-2 text-sm font-medium text-astra-primary backdrop-blur-sm mb-6">
              <span className="h-2 w-2 rounded-full bg-astra-primary animate-pulse-slow" />
              The AI Ecosystem
            </div>
          </AnimatedHeroBadge>
          <AnimatedHeroTitle className="mt-0">
            The AI ecosystem,<br className="hidden sm:block" /> intelligently organized.
          </AnimatedHeroTitle>
          <AnimatedHeroSubtitle className="mt-6">
            Discover, compare, and understand AI tools, models, and technologies
            through an intelligent ecosystem platform built for the modern AI era.
          </AnimatedHeroSubtitle>
          <AnimatedHeroCta>
            <a
              href="/astra"
              className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-[#4F46E5] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#6366F1]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#6366F1]/30 hover:scale-[1.02]"
            >
              Explore ASTRA
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/atlas"
              className="inline-flex items-center gap-2 rounded-xl border border-astra-primary/25 bg-astra-muted/40 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-astra-primary/40 hover:bg-astra-muted/60"
            >
              Explore AI Atlas
            </a>
          </AnimatedHeroCta>

          {/* Stats bar */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {[
              { label: "AI Tools", value: "200+" },
              { label: "Models", value: "100+" },
              { label: "Comparisons", value: "50+" },
              { label: "Articles", value: "300+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-astra-primary sm:text-3xl font-heading">{stat.value}</div>
                <div className="mt-1 text-xs text-muted-foreground/70 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </AstraContainer>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* 2. ASTRA Introduction */}
      <AstraSection className="pt-20 sm:pt-28">
        <AstraContainer>
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                <span className="hero-gradient-text">What is ASTRA?</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                A premium AI ecosystem platform designed for the modern AI era.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.15}>
            <StaggerItem>
              <AstraCard>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-astra-primary/10 mb-4">
                  <Brain className="h-6 w-6 text-astra-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  AI Discovery
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Explore a comprehensive directory of AI tools, models, and
                  technologies with detailed profiles and comparisons.
                </p>
              </AstraCard>
            </StaggerItem>
            <StaggerItem>
              <AstraCard>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-astra-primary/10 mb-4">
                  <GitCompare className="h-6 w-6 text-astra-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Smart Comparisons
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Make informed decisions with evidence-based comparisons,
                  transparent scoring, and detailed analysis.
                </p>
              </AstraCard>
            </StaggerItem>
            <StaggerItem>
              <AstraCard>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-astra-primary/10 mb-4">
                  <Compass className="h-6 w-6 text-astra-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Knowledge Base
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Learn AI through comprehensive guides, tutorials, and in-depth
                  articles from beginner to expert level.
                </p>
              </AstraCard>
            </StaggerItem>
          </AnimatedStagger>
        </AstraContainer>
      </AstraSection>

      {/* 3. AI Atlas Preview */}
      <AstraSection className="bg-gradient-to-b from-secondary/80 via-secondary/50 to-secondary/80">
        <AstraContainer>
          <AnimatedSection>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                  <span className="hero-gradient-text">AI Atlas</span>
                </h2>
                <p className="mt-3 text-lg text-muted-foreground">
                  Discover the entire AI ecosystem in one place.
                </p>
              </div>
              <AstraButton href="/atlas" variant="ghost" size="sm" className="hidden sm:flex">
                View All
                <ArrowRight className="h-4 w-4" />
              </AstraButton>
            </div>
          </AnimatedSection>
          <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.1}>
            {[
              { icon: Code, label: "AI Coding", count: "120+ tools", href: "/atlas/coding" },
              { icon: Globe, label: "Local AI", count: "80+ tools", href: "/atlas/local-ai" },
              { icon: Database, label: "AI Models", count: "200+ models", href: "/models" },
              { icon: Zap, label: "AI APIs", count: "50+ services", href: "/atlas" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <Link href={item.href as never}>
                  <AstraCard className="text-center group">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-astra-primary/10 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="h-7 w-7 text-astra-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.count}</p>
                  </AstraCard>
                </Link>
              </StaggerItem>
            ))}
          </AnimatedStagger>
          <div className="mt-6 text-center sm:hidden">
            <AstraButton href="/atlas" variant="ghost" size="sm">
              View All
              <ArrowRight className="h-4 w-4" />
            </AstraButton>
          </div>
        </AstraContainer>
      </AstraSection>

      {/* 4. AI Comparison Preview */}
      <AstraSection>
        <AstraContainer>
          <AnimatedSection>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                  <span className="hero-gradient-text">Compare AI Tools</span>
                </h2>
                <p className="mt-3 text-lg text-muted-foreground">
                  Make informed decisions with transparent, evidence-based comparisons.
                </p>
              </div>
              <AstraButton href="/compare" variant="ghost" size="sm" className="hidden sm:flex">
                View All
                <ArrowRight className="h-4 w-4" />
              </AstraButton>
            </div>
          </AnimatedSection>
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.15}>
            <StaggerItem>
              <AstraCard>
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-astra-primary/10 p-3 shrink-0">
                    <BarChart3 className="h-6 w-6 text-astra-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      GPT-4 vs Claude 3.5
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Detailed comparison of capabilities, pricing, and performance.
                    </p>
                    <AstraBadge variant="secondary" className="mt-3">
                      Popular
                    </AstraBadge>
                  </div>
                </div>
              </AstraCard>
            </StaggerItem>
            <StaggerItem>
              <AstraCard>
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-astra-primary/10 p-3 shrink-0">
                    <BarChart3 className="h-6 w-6 text-astra-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Gemini vs Llama 3
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Open-source vs proprietary: which model fits your needs?
                    </p>
                    <AstraBadge variant="secondary" className="mt-3">
                      New
                    </AstraBadge>
                  </div>
                </div>
              </AstraCard>
            </StaggerItem>
          </AnimatedStagger>
        </AstraContainer>
      </AstraSection>

      {/* 5. AI Tools Preview */}
      <AstraSection className="bg-gradient-to-b from-secondary/80 via-secondary/50 to-secondary/80">
        <AstraContainer>
          <AnimatedSection>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                  <span className="hero-gradient-text">AI Tools Directory</span>
                </h2>
                <p className="mt-3 text-lg text-muted-foreground">
                  Browse curated AI tools for every use case.
                </p>
              </div>
              <AstraButton href="/tools" variant="ghost" size="sm" className="hidden sm:flex">
                View All
                <ArrowRight className="h-4 w-4" />
              </AstraButton>
            </div>
          </AnimatedSection>
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.12}>
            {[
              { name: "ChatGPT", category: "Chat", rating: "4.8" },
              { name: "Midjourney", category: "Image", rating: "4.7" },
              { name: "GitHub Copilot", category: "Coding", rating: "4.6" },
            ].map((tool) => (
              <StaggerItem key={tool.name}>
                <AstraCard>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{tool.name}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{tool.category}</p>
                    </div>
                    <AstraBadge variant="primary">{tool.rating}</AstraBadge>
                  </div>
                </AstraCard>
              </StaggerItem>
            ))}
          </AnimatedStagger>
        </AstraContainer>
      </AstraSection>

      {/* 6. AI Knowledge Section */}
      <AstraSection>
        <AstraContainer>
          <AnimatedSection>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                  <span className="hero-gradient-text">Knowledge Base</span>
                </h2>
                <p className="mt-3 text-lg text-muted-foreground">
                  Learn AI through comprehensive guides and tutorials.
                </p>
              </div>
              <AstraButton href="/knowledge" variant="ghost" size="sm" className="hidden sm:flex">
                View All
                <ArrowRight className="h-4 w-4" />
              </AstraButton>
            </div>
          </AnimatedSection>
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.12}>
            {[
              { title: "Getting Started with AI", level: "Beginner" },
              { title: "Understanding LLMs", level: "Intermediate" },
              { title: "Building AI Apps", level: "Advanced" },
            ].map((article) => (
              <StaggerItem key={article.title}>
                <AstraCard>
                  <BookOpen className="h-8 w-8 text-astra-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{article.title}</h3>
                  <AstraBadge variant="secondary">
                    {article.level}
                  </AstraBadge>
                </AstraCard>
              </StaggerItem>
            ))}
          </AnimatedStagger>
        </AstraContainer>
      </AstraSection>

      {/* 7. AI Coding Section */}
      <AstraSection className="bg-gradient-to-b from-secondary/80 via-secondary/50 to-secondary/80">
        <AstraContainer>
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                <span className="hero-gradient-text">AI Coding</span>
              </h2>
              <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                The best AI-powered coding tools and assistants.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.12}>
            {[
              { icon: Code, name: "GitHub Copilot", desc: "AI pair programmer" },
              { icon: Sparkles, name: "Cursor", desc: "AI-first code editor" },
              { icon: Cpu, name: "Tabnine", desc: "Code completion AI" },
            ].map((tool) => (
              <StaggerItem key={tool.name}>
                <AstraCard className="text-center">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-astra-primary/10 mx-auto mb-4">
                    <tool.icon className="h-7 w-7 text-astra-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5">{tool.desc}</p>
                </AstraCard>
              </StaggerItem>
            ))}
          </AnimatedStagger>
        </AstraContainer>
      </AstraSection>

      {/* 8. Latest Content Section */}
      <AstraSection>
        <AstraContainer>
          <AnimatedSection>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                  <span className="hero-gradient-text">Latest from the Blog</span>
                </h2>
                <p className="mt-3 text-lg text-muted-foreground">
                  Stay updated with the latest AI insights and news.
                </p>
              </div>
              <AstraButton href="/blog" variant="ghost" size="sm" className="hidden sm:flex">
                View All
                <ArrowRight className="h-4 w-4" />
              </AstraButton>
            </div>
          </AnimatedSection>
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.12}>
            {[
              { title: "The Future of AI in 2026", date: "Aug 8, 2026" },
              { title: "Open Source AI Models Rise", date: "Aug 5, 2026" },
              { title: "AI Safety Best Practices", date: "Aug 1, 2026" },
            ].map((post) => (
              <StaggerItem key={post.title}>
                <AstraCard>
                  <h3 className="font-semibold text-foreground mb-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </AstraCard>
              </StaggerItem>
            ))}
          </AnimatedStagger>
        </AstraContainer>
      </AstraSection>

      {/* 9. ASTRA Architecture Section */}
      <AstraSection className="bg-gradient-to-b from-secondary/80 via-secondary/50 to-secondary/80">
        <AstraContainer>
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                <span className="hero-gradient-text">Built for Scale</span>
              </h2>
              <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                ASTRA is designed with enterprise-grade architecture.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.12}>
            <StaggerItem>
              <AstraCard className="text-center">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-astra-primary/10 mx-auto mb-4">
                  <Network className="h-7 w-7 text-astra-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Microservices</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Modular architecture for independent scaling.
                </p>
              </AstraCard>
            </StaggerItem>
            <StaggerItem>
              <AstraCard className="text-center">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-astra-primary/10 mx-auto mb-4">
                  <Shield className="h-7 w-7 text-astra-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Security First</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  End-to-end encryption and compliance.
                </p>
              </AstraCard>
            </StaggerItem>
            <StaggerItem>
              <AstraCard className="text-center">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-astra-primary/10 mx-auto mb-4">
                  <Zap className="h-7 w-7 text-astra-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Fast & Reliable</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Optimized for performance and uptime.
                </p>
              </AstraCard>
            </StaggerItem>
          </AnimatedStagger>
        </AstraContainer>
      </AstraSection>

      {/* 10. ASTRA Roadmap Preview */}
      <AstraSection>
        <AstraContainer>
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                <span className="hero-gradient-text">Roadmap</span>
              </h2>
              <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                See what is coming next for ASTRA.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mx-auto max-w-2xl">
              <div className="relative border-l-2 border-astra-primary/30 pl-8 space-y-10">
                {[
                  { q: "Q3 2026", title: "Foundation", desc: "Core platform and database" },
                  { q: "Q4 2026", title: "Intelligence", desc: "AI-powered features" },
                  { q: "Q1 2027", title: "Scale", desc: "Enterprise capabilities" },
                ].map((item) => (
                  <div key={item.q} className="relative">
                    <div className="absolute -left-10 top-1 h-4 w-4 rounded-full bg-astra-primary shadow-[0_0_12px_rgba(99,102,241,0.5)]" />
                    <AstraBadge variant="primary" className="mb-2">{item.q}</AstraBadge>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          <div className="text-center mt-8">
            <AstraButton href="/astra/roadmap" variant="ghost">
              View Full Roadmap
              <ArrowRight className="h-4 w-4" />
            </AstraButton>
          </div>
        </AstraContainer>
      </AstraSection>

      {/* 11. Final CTA Section */}
      <AstraSection className="bg-gradient-to-b from-secondary/80 via-secondary/50 to-secondary/80">
        <AstraContainer className="text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Ready to explore the AI ecosystem?
            </h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Start discovering the best AI tools and models for your needs.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <AstraButton href="/atlas" size="lg">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </AstraButton>
              <AstraButton href="/docs" variant="secondary" size="lg">
                Read Documentation
              </AstraButton>
            </div>
          </AnimatedSection>
        </AstraContainer>
      </AstraSection>
    </>
  );
}
