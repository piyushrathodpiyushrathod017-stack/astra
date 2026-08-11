"use client"

import { useState, useCallback, useEffect } from "react"

export function useSearch<T>(items: T[], keys: (keyof T)[]) {
  const [query, setQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query)
    }, 300)
    return () => clearTimeout(timer)
  }, [query])

  const filtered = debouncedQuery
    ? items.filter((item) =>
        keys.some((key) => {
          const value = item[key]
          if (typeof value === "string") {
            return value.toLowerCase().includes(debouncedQuery.toLowerCase())
          }
          return false
        })
      )
    : items

  const reset = useCallback(() => {
    setQuery("")
    setDebouncedQuery("")
  }, [])

  return { query, setQuery, filtered, reset, isSearching: query !== debouncedQuery }
}
