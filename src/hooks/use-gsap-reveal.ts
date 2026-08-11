"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseGsapRevealOptions {
  y?: number;
  x?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
  start?: string;
  once?: boolean;
}

export function useGsapReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseGsapRevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 40,
      x = 0,
      opacity = 0,
      duration = 0.8,
      delay = 0,
      ease = "power3.out",
      start = "top 85%",
      once = true,
    } = options;

    gsap.set(el, { y, x, opacity });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      once,
      onEnter: () => {
        gsap.to(el, { y: 0, x: 0, opacity: 1, duration, delay, ease });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [options]);

  return ref;
}

export function useGsapStagger<T extends HTMLElement = HTMLDivElement>(
  options: UseGsapRevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 40,
      opacity = 0,
      duration = 0.6,
      delay = 0,
      stagger = 0.1,
      ease = "power3.out",
      start = "top 85%",
      once = true,
    } = options;

    const children = el.children;
    if (!children.length) return;

    gsap.set(children, { y, opacity });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      once,
      onEnter: () => {
        gsap.to(children, { y: 0, opacity: 1, duration, stagger, delay, ease });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [options]);

  return ref;
}
