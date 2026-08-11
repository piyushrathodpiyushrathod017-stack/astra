"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button-variants"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface FilterOption {
  value: string
  label: string
  count?: number
}

interface FilterGroup {
  id: string
  label: string
  options: FilterOption[]
  multiple?: boolean
}

interface FilterPanelProps {
  groups: FilterGroup[]
  onFilterChange: (filters: Record<string, string[]>) => void
}

export function FilterPanel({ groups, onFilterChange }: FilterPanelProps) {
  const [selected, setSelected] = useState<Record<string, string[]>>({})
  const [search, setSearch] = useState("")

  const handleSelect = (groupId: string, value: string, multiple = false) => {
    const current = selected[groupId] || []
    let updated: string[]

    if (multiple) {
      updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
    } else {
      updated = current.includes(value) ? [] : [value]
    }

    const newSelected = { ...selected, [groupId]: updated }
    setSelected(newSelected)
    onFilterChange(newSelected)
  }

  const clearAll = () => {
    setSelected({})
    onFilterChange({})
  }

  const activeCount = Object.values(selected).flat().length

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Filters</h3>
        {activeCount > 0 && (
          <Button variant="ghost" size="sm" onClick={clearAll}>
            Clear all ({activeCount})
          </Button>
        )}
      </div>

      <Input
        placeholder="Search filters..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="h-9"
      />

      {groups.map((group) => {
        const filtered = group.options.filter((opt) =>
          opt.label.toLowerCase().includes(search.toLowerCase())
        )
        if (filtered.length === 0) return null

        return (
          <div key={group.id} className="space-y-2">
            <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {group.label}
            </h4>
            <div className="flex flex-wrap gap-1">
              {filtered.map((option) => {
                const isSelected = (selected[group.id] || []).includes(option.value)
                return (
                  <Badge
                    key={option.value}
                    variant={isSelected ? "default" : "outline"}
                    className="cursor-pointer hover:bg-accent transition-colors"
                    onClick={() => handleSelect(group.id, option.value, group.multiple)}
                  >
                    {option.label}
                    {option.count !== undefined && (
                      <span className="ml-1 text-[10px] opacity-60">{option.count}</span>
                    )}
                  </Badge>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
