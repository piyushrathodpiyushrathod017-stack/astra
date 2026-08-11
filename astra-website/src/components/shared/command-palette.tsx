"use client"

import { useState, useEffect, useCallback } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { Route } from "next"
import { useRouter } from "next/navigation"

type CommandItem = {
  id: string
  title: string
  description?: string
  href?: string
  category: string
  icon?: string
}

const defaultCommands: CommandItem[] = [
  { id: "home", title: "Home", href: "/", category: "Navigation", icon: "🏠" },
  { id: "astra", title: "ASTRA", href: "/astra", category: "ASTRA", icon: "🧠" },
  { id: "astra-features", title: "ASTRA Features", href: "/astra/features", category: "ASTRA", icon: "✨" },
  { id: "astra-architecture", title: "ASTRA Architecture", href: "/astra/architecture", category: "ASTRA", icon: "🏗️" },
  { id: "astra-philosophy", title: "ASTRA Philosophy", href: "/astra/philosophy", category: "ASTRA", icon: "💡" },
  { id: "astra-roadmap", title: "ASTRA Roadmap", href: "/astra/roadmap", category: "ASTRA", icon: "🗺️" },
  { id: "astra-changelog", title: "ASTRA Changelog", href: "/astra/changelog", category: "ASTRA", icon: "📋" },
  { id: "atlas", title: "Atlas", href: "/atlas", category: "Atlas", icon: "🌐" },
  { id: "atlas-coding", title: "Atlas Coding", href: "/atlas/coding", category: "Atlas", icon: "💻" },
  { id: "atlas-local-ai", title: "Atlas Local AI", href: "/atlas/local-ai", category: "Atlas", icon: "🏠" },
  { id: "tools", title: "Tools Directory", href: "/tools", category: "Directory", icon: "🔧" },
  { id: "models", title: "Models Directory", href: "/models", category: "Directory", icon: "📊" },
  { id: "compare", title: "Compare Tools", href: "/compare", category: "Directory", icon: "⚖️" },
  { id: "knowledge", title: "Knowledge Hub", href: "/knowledge", category: "Knowledge", icon: "📚" },
  { id: "blog", title: "Blog", href: "/blog", category: "Knowledge", icon: "📝" },
  { id: "docs", title: "Documentation", href: "/docs", category: "Knowledge", icon: "📖" },
  { id: "search", title: "Search", href: "/search", category: "Navigation", icon: "🔍" },
  { id: "privacy", title: "Privacy Policy", href: "/privacy", category: "Legal", icon: "🔒" },
  { id: "terms", title: "Terms of Service", href: "/terms", category: "Legal", icon: "📜" },
]

interface CommandPaletteProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function CommandPalette({ open: controlledOpen, onOpenChange }: CommandPaletteProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const router = useRouter()

  const open = controlledOpen ?? internalOpen
  const setOpen = onOpenChange ?? setInternalOpen

  const filtered = defaultCommands.filter((cmd) => {
    const search = query.toLowerCase()
    return (
      cmd.title.toLowerCase().includes(search) ||
      cmd.description?.toLowerCase().includes(search) ||
      cmd.category.toLowerCase().includes(search)
    )
  })

  const categories = [...new Set(filtered.map((cmd) => cmd.category))]

  const executeCommand = useCallback((cmd: CommandItem) => {
    if (cmd.href) {
      router.push(cmd.href as Route)
    }
    setOpen(false)
    setQuery("")
    setSelectedIndex(0)
  }, [router, setOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen(!open)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open, setOpen])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return
      if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % filtered.length)
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length)
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        executeCommand(filtered[selectedIndex])
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open, filtered, selectedIndex, executeCommand])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 max-w-[550px] gap-0">
        <div className="flex items-center border-b border-border px-3">
          <span className="text-muted-foreground mr-2">🔍</span>
          <Input
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-12"
            autoFocus
          />
          <Badge variant="outline" className="ml-2 text-[10px]">
            ESC
          </Badge>
        </div>
        <div className="max-h-[400px] overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No results found for &quot;{query}&quot;
            </div>
          ) : (
            categories.map((category) => (
              <div key={category} className="mb-2">
                <div className="px-2 py-1 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {category}
                </div>
                {filtered
                  .filter((cmd) => cmd.category === category)
                  .map((cmd, idx) => {
                    const globalIndex = filtered.indexOf(cmd)
                    return (
                      <Link
                        key={cmd.id}
                        href={(cmd.href || "/") as Route}
                        onClick={() => {
                          setOpen(false)
                          setQuery("")
                        }}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                          globalIndex === selectedIndex
                            ? "bg-accent text-accent-foreground"
                            : "hover:bg-accent/50"
                        }`}
                      >
                        <span className="text-base">{cmd.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium">{cmd.title}</div>
                          {cmd.description && (
                            <div className="text-xs text-muted-foreground truncate">
                              {cmd.description}
                            </div>
                          )}
                        </div>
                        <Badge variant="secondary" className="text-[10px] shrink-0">
                          {cmd.category}
                        </Badge>
                      </Link>
                    )
                  })}
              </div>
            ))
          )}
        </div>
        <div className="border-t border-border px-3 py-2 flex items-center gap-4 text-[10px] text-muted-foreground">
          <span>↑↓ Navigate</span>
          <span>↵ Select</span>
          <span>ESC Close</span>
        </div>
      </DialogContent>
    </Dialog>
  )
}
