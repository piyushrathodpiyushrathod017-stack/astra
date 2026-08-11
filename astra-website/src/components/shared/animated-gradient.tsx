"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientProps {
  className?: string;
  variant?: "hero" | "subtle" | "intense" | "radial";
}

export function AnimatedGradient({
  className,
  variant = "hero",
}: AnimatedGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const colors =
      variant === "hero"
        ? [
            { r: 99, g: 102, b: 241 },
            { r: 139, g: 92, b: 246 },
            { r: 79, g: 70, b: 229 },
            { r: 168, g: 85, b: 247 },
          ]
        : variant === "intense"
          ? [
              { r: 99, g: 102, b: 241 },
              { r: 168, g: 85, b: 247 },
              { r: 236, g: 72, b: 153 },
              { r: 59, g: 130, b: 246 },
            ]
          : [
              { r: 99, g: 102, b: 241 },
              { r: 129, g: 140, b: 248 },
              { r: 165, g: 180, b: 252 },
            ];

    const orbs = colors.map((color, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: 30 + Math.random() * 20,
      color,
      phase: (i * Math.PI) / 2,
    }));

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.clearRect(0, 0, w, h);

      orbs.forEach((orb) => {
        orb.x += Math.sin(time * 0.001 + orb.phase) * orb.vx;
        orb.y += Math.cos(time * 0.001 + orb.phase) * orb.vy;

        if (orb.x < -20) orb.x = 120;
        if (orb.x > 120) orb.x = -20;
        if (orb.y < -20) orb.y = 120;
        if (orb.y > 120) orb.y = -20;

        const cx = (orb.x / 100) * w;
        const cy = (orb.y / 100) * h;
        const r = (orb.radius / 100) * Math.max(w, h);

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        gradient.addColorStop(
          0,
          `rgba(${orb.color.r}, ${orb.color.g}, ${orb.color.b}, 0.15)`
        );
        gradient.addColorStop(
          0.5,
          `rgba(${orb.color.r}, ${orb.color.g}, ${orb.color.b}, 0.05)`
        );
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      });

      time += 16;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "absolute inset-0 w-full h-full pointer-events-none",
        className
      )}
    />
  );
}
