"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="radio-group"
      role="radiogroup"
      className={cn("grid gap-2", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  "aria-checked": ariaChecked,
  ...props
}: React.ComponentProps<"button"> & { "aria-checked"?: boolean }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={ariaChecked}
      data-slot="radio-group-item"
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {ariaChecked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3.5 w-3.5"
        >
          <circle cx="12" cy="12" r="4" />
        </svg>
      )}
    </button>
  )
}

export { RadioGroup, RadioGroupItem }
