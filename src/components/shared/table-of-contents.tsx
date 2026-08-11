"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface TocItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  items: TocItem[]
  className?: string
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-80px 0px -80% 0px" }
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <nav className={cn("sticky top-24", className)}>
      <h4 className="text-sm font-semibold mb-3">On this page</h4>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li
            key={item.id}
            style={{ paddingLeft: `${(item.level - 2) * 12}px` }}
          >
            <Link
              href={`#${item.id}`}
              className={cn(
                "text-sm py-1 block transition-colors hover:text-foreground",
                activeId === item.id
                  ? "text-foreground font-medium border-l-2 border-primary pl-3"
                  : "text-muted-foreground"
              )}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
