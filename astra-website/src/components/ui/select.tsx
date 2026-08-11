"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Select({
  className,
  ...props
}: React.ComponentProps<"select">) {
  return (
    <select
      data-slot="select"
      className={cn(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>option]:bg-background",
        className
      )}
      {...props}
    />
  )
}

export { Select }
