"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue = [50],
  ...props
}: React.ComponentProps<"input"> & {
  defaultValue?: number[]
}) {
  const [value, setValue] = React.useState(defaultValue[0] ?? 50)

  return (
    <div className={cn("relative flex w-full touch-none select-none items-center", className)}>
      <input
        type="range"
        data-slot="slider"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className={cn(
          "w-full cursor-pointer appearance-none bg-transparent",
          "[&::-webkit-slider-track]:h-1.5 [&::-webkit-slider-track]:rounded-full [&::-webkit-slider-track]:bg-primary/20",
          "[&::-webkit-slider-thumb]:mt-[-5px] [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-sm",
          "[&::-moz-range-track]:h-1.5 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-primary/20",
          "[&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-0",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        )}
        {...props}
      />
    </div>
  )
}

export { Slider }
