"use client"

import { useState } from "react"
import { Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface FilterOption {
  value: string
  label: string
  count?: number
}

interface FilterGroup {
  id: string
  label: string
  options: FilterOption[]
  type?: "checkbox" | "radio"
}

interface MobileFilterSheetProps {
  groups: FilterGroup[]
  selectedFilters: Record<string, string[]>
  onFilterChange: (groupId: string, values: string[]) => void
  onClearAll: () => void
  resultCount?: number
}

export function MobileFilterSheet({
  groups,
  selectedFilters,
  onFilterChange,
  onClearAll,
  resultCount,
}: MobileFilterSheetProps) {
  const [isOpen, setIsOpen] = useState(false)

  const totalActiveFilters = Object.values(selectedFilters).reduce(
    (acc, values) => acc + values.length,
    0
  )

  const handleOptionToggle = (groupId: string, value: string) => {
    const current = selectedFilters[groupId] || []
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value]
    onFilterChange(groupId, updated)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Button variant="outline" className="lg:hidden">
          <Filter className="h-4 w-4 mr-2" />
          Filters
          {totalActiveFilters > 0 && (
            <Badge variant="secondary" className="ml-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
              {totalActiveFilters}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[80vh]">
        <SheetHeader className="border-b pb-4 mb-4">
          <div className="flex items-center justify-between">
            <SheetTitle>Filters</SheetTitle>
            {totalActiveFilters > 0 && (
              <Button variant="ghost" size="sm" onClick={onClearAll}>
                Clear all
              </Button>
            )}
          </div>
          {resultCount !== undefined && (
            <p className="text-sm text-muted-foreground">{resultCount} results</p>
          )}
        </SheetHeader>

        <div className="space-y-6 overflow-y-auto max-h-[calc(80vh-120px)]">
          {groups.map((group) => (
            <div key={group.id}>
              <h4 className="text-sm font-medium mb-3">{group.label}</h4>
              <div className="flex flex-wrap gap-2">
                {group.options.map((option) => {
                  const isSelected = (selectedFilters[group.id] || []).includes(option.value)
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleOptionToggle(group.id, option.value)}
                      className={cn(
                        "px-3 py-1.5 text-sm rounded-full border transition-colors",
                        isSelected
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background text-muted-foreground border-border hover:border-primary/50"
                      )}
                    >
                      {option.label}
                      {option.count !== undefined && (
                        <span className="ml-1 text-xs opacity-70">({option.count})</span>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t pt-4 mt-4">
          <Button className="w-full" onClick={() => setIsOpen(false)}>
            Show results
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface ActiveFiltersProps {
  filters: Record<string, string[]>
  onRemove: (groupId: string, value: string) => void
  onClearAll: () => void
  groupLabels?: Record<string, string>
}

export function ActiveFilters({
  filters,
  onRemove,
  onClearAll,
  groupLabels = {},
}: ActiveFiltersProps) {
  const entries = Object.entries(filters).flatMap(([groupId, values]) =>
    values.map((value) => ({ groupId, value }))
  )

  if (entries.length === 0) return null

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm text-muted-foreground">Active:</span>
      {entries.map(({ groupId, value }) => (
        <Badge
          key={`${groupId}-${value}`}
          variant="secondary"
          className="gap-1 pr-1"
        >
          {groupLabels[groupId] && (
            <span className="text-muted-foreground">{groupLabels[groupId]}:</span>
          )}
          {value}
          <button
            onClick={() => onRemove(groupId, value)}
            className="ml-1 rounded-full p-0.5 hover:bg-muted"
          >
            <X className="h-3 w-3" />
          </button>
        </Badge>
      ))}
      <Button variant="ghost" size="sm" onClick={onClearAll} className="h-6 text-xs">
        Clear all
      </Button>
    </div>
  )
}
