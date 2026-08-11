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
      {/* Full background gradient — gold theme */}
      <div className="absolute inset-0 -top-20">
        {/* Base gradient — deep black to warm dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1408] via-[#120e06] to-[#0c0a09]" />

        {/* Main gold orb — center, large and soft */}
        <div className="absolute top-[-35%] left-1/2 -translate-x-1/2 w-[1400px] h-[1000px] bg-[#b8860b]/[0.12] rounded-full blur-[200px]" />

        {/* Gold accent — right, warm glow */}
        <div className="absolute top-[5%] right-[-8%] w-[800px] h-[800px] bg-[#d4a843]/[0.10] rounded-full blur-[160px]" />

        {/* Amber accent — left, subtle warmth */}
        <div className="absolute top-[20%] left-[-12%] w-[600px] h-[600px] bg-[#f59e0b]/[0.06] rounded-full blur-[140px]" />

        {/* Deep gold center highlight */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d4a843]/[0.08] rounded-full blur-[120px]" />

        {/* Bottom fade to background */}
        <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-[#0c0a09] to-transparent" />
      </div>

      {/* Subtle grid pattern — gold tinted */}
      {showGrid && (
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,168,67,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black 20%, transparent 55%)",
          }}
        />
      )}

      {/* Floating particles — gold */}
      {showParticles && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute rounded-full",
                i % 3 === 0
                  ? "w-2 h-2 bg-[#d4a843]/70 shadow-[0_0_14px_rgba(212,168,67,0.5)]"
                  : i % 3 === 1
                    ? "w-1.5 h-1.5 bg-[#f5e6b8]/50 shadow-[0_0_10px_rgba(245,230,184,0.3)]"
                    : "w-1 h-1 bg-[#b8860b]/60 shadow-[0_0_8px_rgba(184,134,11,0.4)]",
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

      {/* Horizontal gold line accent */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a843]/[0.08] to-transparent" />

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
        "mx-auto max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl",
        "hero-gradient-text drop-shadow-[0_0_60px_rgba(212,168,67,0.2)]",
        "leading-[1.08] font-heading",
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
        "mx-auto mt-8 max-w-2xl text-lg sm:text-xl lg:text-2xl",
        "text-muted-foreground/90 leading-relaxed",
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
    <div data-hero-cta className={cn("mt-12 flex flex-col sm:flex-row items-center justify-center gap-4", className)}>
      {children}
    </div>
  );
}
