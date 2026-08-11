"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Toast({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="toast"
      className={cn(
        "pointer-events-auto relative flex w-full items-center justify-between gap-3 space-x-2 rounded-lg border bg-background p-4 shadow-lg transition-all",
        className
      )}
      {...props}
    />
  )
}

function ToastTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="toast-title"
      className={cn("text-sm font-semibold", className)}
      {...props}
    />
  )
}

function ToastDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="toast-description"
      className={cn("text-sm opacity-90", className)}
      {...props}
    />
  )
}

function ToastAction({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="toast-action"
      className={cn(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function ToastClose({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="toast-close"
      className={cn(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100",
        className
      )}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </button>
  )
}

export { Toast, ToastTitle, ToastDescription, ToastAction, ToastClose }
