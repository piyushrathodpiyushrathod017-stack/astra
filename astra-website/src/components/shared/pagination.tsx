"use client"

import Link from "next/link"
import type { Route } from "next"

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string
  searchParams?: Record<string, string>
}

export function Pagination({ currentPage, totalPages, basePath, searchParams = {} }: PaginationProps) {
  if (totalPages <= 1) return null

  const getPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", page.toString())
    return `${basePath}?${params.toString()}` as Route
  }

  const getVisiblePages = () => {
    const delta = 2
    const range: number[] = []
    const rangeWithDots: (number | string)[] = []

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...")
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages)
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  return (
    <nav className="flex items-center justify-center gap-1 mt-8" aria-label="Pagination">
      {currentPage > 1 && (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-background text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          ←
        </Link>
      )}

      {getVisiblePages().map((page, idx) =>
        typeof page === "string" ? (
          <span
            key={`dots-${idx}`}
            className="flex items-center justify-center w-10 h-10 text-sm text-muted-foreground"
          >
            ...
          </span>
        ) : (
          <Link
            key={page}
            href={getPageUrl(page)}
            className={`flex items-center justify-center w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
              page === currentPage
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-background hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            {page}
          </Link>
        )
      )}

      {currentPage < totalPages && (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-background text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          →
        </Link>
      )}
    </nav>
  )
}
