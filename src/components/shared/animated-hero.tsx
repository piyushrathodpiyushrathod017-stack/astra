"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface AnimatedHeroProps {
  children: React.ReactNode;
  className?: string;
  showGrid?: boolean;
  showParticles?: boolean;
}

export function AnimatedHero({
  children,
  className,
  showGrid = true,
  showParticles = true,
}: AnimatedHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    const badge = container.querySelector("[data-hero-badge]");
    const title = container.querySelector("[data-hero-title]");
    const subtitle = container.querySelector("[data-hero-subtitle]");
    const cta = container.querySelector("[data-hero-cta]");

    tl.set(
      [badge, title, subtitle, cta].filter(Boolean),
      { opacity: 0, y: 40, filter: "blur(8px)" }
    );

    tl.to(badge, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 }, 0.0)
      .to(title, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0 }, 0.15)
      .to(subtitle, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 }, 0.4)
      .to(cta, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 }, 0.6);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      {/* Full background gradient — indigo theme */}
      <div className="absolute inset-0 -top-20">
        {/* Base gradient — deep dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0d1a] via-[#0a0a12] to-[#0c0a09]" />

        {/* Main indigo orb — center, large and soft */}
        <div className="absolute top-[-35%] left-1/2 -translate-x-1/2 w-[1400px] h-[1000px] bg-[#6366F1]/[0.12] rounded-full blur-[200px]" />

        {/* Indigo accent — right, cool glow */}
        <div className="absolute top-[5%] right-[-8%] w-[800px] h-[800px] bg-[#818CF8]/[0.10] rounded-full blur-[160px]" />

        {/* Violet accent — left, subtle glow */}
        <div className="absolute top-[20%] left-[-12%] w-[600px] h-[600px] bg-[#A78BFA]/[0.06] rounded-full blur-[140px]" />

        {/* Deep indigo center highlight */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#818CF8]/[0.08] rounded-full blur-[120px]" />

        {/* Bottom fade to background */}
        <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-[#0c0a09] to-transparent" />
      </div>

      {/* Subtle grid pattern — indigo tinted */}
      {showGrid && (
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black 20%, transparent 55%)",
          }}
        />
      )}

      {/* Floating particles — indigo */}
      {showParticles && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute rounded-full",
                i % 3 === 0
                  ? "w-2 h-2 bg-[#6366F1]/70 shadow-[0_0_14px_rgba(99,102,241,0.5)]"
                  : i % 3 === 1
                    ? "w-1.5 h-1.5 bg-[#A78BFA]/50 shadow-[0_0_10px_rgba(167,139,250,0.3)]"
                    : "w-1 h-1 bg-[#818CF8]/60 shadow-[0_0_8px_rgba(129,140,248,0.4)]",
                "animate-float"
              )}
              style={{
                left: `${6 + i * 8}%`,
                top: `${12 + (i % 5) * 18}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${3.5 + (i % 3) * 0.6}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Horizontal indigo line accent */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/[0.08] to-transparent" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

interface AnimatedHeroTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedHeroBadge({
  children,
  className,
}: AnimatedHeroTextProps) {
  return (
    <div data-hero-badge className={cn("inline-flex", className)}>
      {children}
    </div>
  );
}

export function AnimatedHeroTitle({
  children,
  className,
}: AnimatedHeroTextProps) {
  return (
    <h1
      data-hero-title
      className={cn(
        "mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl",
        "hero-gradient-text drop-shadow-[0_0_60px_rgba(99,102,241,0.15)]",
        "leading-[1.1] font-heading",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function AnimatedHeroSubtitle({
  children,
  className,
}: AnimatedHeroTextProps) {
  return (
    <p
      data-hero-subtitle
      className={cn(
        "mx-auto mt-6 max-w-2xl text-base sm:text-lg lg:text-xl",
        "text-muted-foreground leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
}

export function AnimatedHeroCta({
  children,
  className,
}: AnimatedHeroTextProps) {
  return (
    <div data-hero-cta className={cn("mt-10 flex flex-col sm:flex-row items-center justify-center gap-4", className)}>
      {children}
    </div>
  );
}
