"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import type { Route } from "next"
import { Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import type { SearchResult } from "@/types"
import { Badge } from "@/components/ui/badge"

interface SearchInputProps {
  value?: string
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
  placeholder?: string
  className?: string
  autoFocus?: boolean
  showSuggestions?: boolean
}

export function SearchInput({
  value: controlledValue,
  onChange,
  onSearch,
  placeholder = "Search tools, models, articles...",
  className,
  autoFocus = false,
  showSuggestions = true,
}: SearchInputProps) {
  const [internalValue, setInternalValue] = useState(controlledValue || "")
  const [suggestions, setSuggestions] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const value = controlledValue !== undefined ? controlledValue : internalValue

  useEffect(() => {
    if (!showSuggestions || value.length < 2) {
      setSuggestions([])
      setIsOpen(false)
      return
    }

    const timer = setTimeout(async () => {
      const { getSuggestions } = await import("@/services/search")
      const results = await getSuggestions(value)
      setSuggestions(results)
      setIsOpen(results.length > 0)
      setSelectedIndex(-1)
    }, 200)

    return () => clearTimeout(timer)
  }, [value, showSuggestions])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleChange = (newValue: string) => {
    setInternalValue(newValue)
    onChange?.(newValue)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsOpen(false)
    onSearch?.(value)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || suggestions.length === 0) return

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1))
        break
      case "Enter":
        if (selectedIndex >= 0) {
          e.preventDefault()
          setIsOpen(false)
        }
        break
      case "Escape":
        setIsOpen(false)
        inputRef.current?.blur()
        break
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "tool":
        return "bg-blue-500/10 text-blue-500"
      case "model":
        return "bg-purple-500/10 text-purple-500"
      case "comparison":
        return "bg-orange-500/10 text-orange-500"
      case "article":
      case "knowledge":
        return "bg-green-500/10 text-green-500"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => suggestions.length > 0 && setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="w-full h-10 pl-10 pr-10 bg-background border border-input rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        />
        {value && (
          <button
            type="button"
            onClick={() => {
              handleChange("")
              inputRef.current?.focus()
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </form>

      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-lg shadow-lg overflow-hidden z-50 max-h-80 overflow-y-auto">
          {suggestions.map((item, index) => (
            <Link
              key={item.id}
              href={item.url as Route}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 text-sm hover:bg-accent transition-colors",
                index === selectedIndex && "bg-accent"
              )}
            >
              <Badge variant="secondary" className={cn("text-xs", getTypeColor(item.type))}>
                {item.type}
              </Badge>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{item.title}</div>
                <div className="text-xs text-muted-foreground truncate">{item.description}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
