"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const initial = {
      opacity: 0,
      y: direction === "up" ? 50 : 0,
      x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
      filter: "blur(4px)",
    };

    gsap.set(el, initial);

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          x: 0,
          filter: "blur(0px)",
          duration: 0.9,
          delay,
          ease: "power3.out",
        });
      },
    });

    return () => trigger.kill();
  }, [delay, direction]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}

interface AnimatedStaggerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function AnimatedStagger({
  children,
  className,
  stagger = 0.12,
  delay = 0,
}: AnimatedStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll("[data-stagger-item]");
    if (!items.length) return;

    gsap.set(items, { opacity: 0, y: 35, filter: "blur(4px)" });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => {
        gsap.to(items, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
          stagger,
          delay,
          ease: "power3.out",
        });
      },
    });

    return () => trigger.kill();
  }, [stagger, delay]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <div data-stagger-item className={cn("h-full", className)}>
      {children}
    </div>
  );
}
