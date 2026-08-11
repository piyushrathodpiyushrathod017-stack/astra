"use client"

import { useState } from "react"
import Link from "next/link"
import type { Route } from "next"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronRight } from "lucide-react"

interface SidebarItem {
  title: string
  href?: string
  items?: SidebarItem[]
}

interface SidebarProps {
  items: SidebarItem[]
  className?: string
}

export function Sidebar({ items, className }: SidebarProps) {
  return (
    <nav className={cn("space-y-1", className)}>
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </nav>
  )
}

function SidebarItem({ item }: { item: SidebarItem }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)
  const isActive = item.href === pathname
  const hasChildren = item.items && item.items.length > 0

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {item.title}
          {isOpen ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>
        {isOpen && (
          <div className="ml-4 border-l border-border pl-3 mt-1 space-y-1">
            {item.items!.map((child, index) => (
              <SidebarItem key={index} item={child} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      href={(item.href || "/") as Route}
      className={cn(
        "block px-3 py-2 text-sm rounded-md transition-colors",
        isActive
          ? "bg-accent text-foreground font-medium"
          : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
      )}
    >
      {item.title}
    </Link>
  )
}
