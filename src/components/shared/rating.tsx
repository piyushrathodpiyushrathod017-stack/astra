import { cn } from "@/lib/utils"

interface RatingProps {
  score: number
  maxScore?: number
  size?: "sm" | "md" | "lg"
  showLabel?: boolean
  label?: string
  className?: string
}

export function Rating({
  score,
  maxScore = 100,
  size = "md",
  showLabel = false,
  label,
  className,
}: RatingProps) {
  const percentage = (score / maxScore) * 100

  const getScoreColor = () => {
    if (percentage >= 80) return "text-green-500"
    if (percentage >= 60) return "text-yellow-500"
    if (percentage >= 40) return "text-orange-500"
    return "text-red-500"
  }

  const getScoreLabel = () => {
    if (percentage >= 90) return "Excellent"
    if (percentage >= 80) return "Very Good"
    if (percentage >= 70) return "Good"
    if (percentage >= 60) return "Average"
    if (percentage >= 50) return "Below Average"
    return "Poor"
  }

  const sizeClasses = {
    sm: "h-1.5",
    md: "h-2",
    lg: "h-3",
  }

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <div className="flex items-center justify-between">
        <span className={cn("font-medium", textSizes[size])}>
          {label || getScoreLabel()}
        </span>
        <span className={cn("font-bold", getScoreColor(), textSizes[size])}>
          {score}
        </span>
      </div>
      <div className={cn("w-full bg-muted rounded-full overflow-hidden", sizeClasses[size])}>
        <div
          className={cn("h-full rounded-full transition-all duration-500", getScoreColor().replace("text-", "bg-"))}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs text-muted-foreground">
          out of {maxScore}
        </span>
      )}
    </div>
  )
}

interface RatingGroupProps {
  ratings: {
    label: string
    score: number
    weight?: number
  }[]
  size?: "sm" | "md" | "lg"
}

export function RatingGroup({ ratings, size = "md" }: RatingGroupProps) {
  return (
    <div className="space-y-3">
      {ratings.map((rating) => (
        <Rating
          key={rating.label}
          score={rating.score}
          label={rating.label}
          size={size}
          showLabel={rating.weight !== undefined}
        />
      ))}
    </div>
  )
}
