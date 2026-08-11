"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<"button"> & {
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
}) {
  return (
    <button
      type="button"
      data-slot="toggle"
      data-variant={variant}
      data-size={size}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        variant === "outline" && "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        size === "default" && "h-9 px-3",
        size === "sm" && "h-8 px-2",
        size === "lg" && "h-10 px-3",
        className
      )}
      {...props}
    />
  )
}

export { Toggle }
