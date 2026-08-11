"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseGsapTextRevealOptions {
  duration?: number;
  delay?: number;
  ease?: string;
  start?: string;
  once?: boolean;
}

export function useGsapTextReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseGsapTextRevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      duration = 1,
      delay = 0,
      ease = "power4.out",
      start = "top 85%",
      once = true,
    } = options;

    gsap.set(el, { opacity: 0, y: 30 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      once,
      onEnter: () => {
        gsap.to(el, { opacity: 1, y: 0, duration, delay, ease });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [options]);

  return ref;
}

export function useGsapCountUp<T extends HTMLElement = HTMLDivElement>(
  target: number,
  options: UseGsapTextRevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      duration = 2,
      delay = 0,
      ease = "power2.out",
      start = "top 85%",
      once = true,
    } = options;

    const obj = { value: 0 };

    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      once,
      onEnter: () => {
        gsap.to(obj, {
          value: target,
          duration,
          delay,
          ease,
          onUpdate: () => {
            el.textContent = Math.round(obj.value).toString();
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [target, options]);

  return ref;
}
