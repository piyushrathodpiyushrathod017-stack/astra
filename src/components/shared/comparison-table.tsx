"use client"

import { Badge } from "@/components/ui/badge"

interface Score {
  criterion: string
  scoreA: number
  scoreB: number
  weight?: number
  evidence?: string
}

interface ComparisonTableProps {
  nameA: string
  nameB: string
  scores: Score[]
  showEvidence?: boolean
}

export function ComparisonTable({ nameA, nameB, scores, showEvidence = false }: ComparisonTableProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500"
    if (score >= 60) return "text-yellow-500"
    return "text-red-500"
  }

  const getScoreBg = (score: number) => {
    if (score >= 80) return "bg-green-500/10"
    if (score >= 60) return "bg-yellow-500/10"
    return "bg-red-500/10"
  }

  const getWinner = (a: number, b: number) => {
    if (a > b) return "a"
    if (b > a) return "b"
    return "tie"
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Criterion</th>
            <th className="text-center py-3 px-4 text-sm font-medium">{nameA}</th>
            <th className="text-center py-3 px-4 text-sm font-medium">{nameB}</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score) => {
            const winner = getWinner(score.scoreA, score.scoreB)
            return (
              <tr key={score.criterion} className="border-b border-border hover:bg-accent/50 transition-colors">
                <td className="py-3 px-4">
                  <div className="text-sm font-medium">{score.criterion}</div>
                  {score.weight && (
                    <div className="text-xs text-muted-foreground mt-0.5">
                      Weight: {score.weight}%
                    </div>
                  )}
                </td>
                <td className="py-3 px-4">
                  <div className="flex flex-col items-center gap-1">
                    <div className={`text-lg font-bold ${winner === "a" ? "text-primary" : ""}`}>
                      {score.scoreA}
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          winner === "a" ? "bg-primary" : "bg-muted-foreground/30"
                        }`}
                        style={{ width: `${score.scoreA}%` }}
                      />
                    </div>
                    {showEvidence && score.evidence && (
                      <div className="text-xs text-muted-foreground text-center mt-1">
                        {score.evidence}
                      </div>
                    )}
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex flex-col items-center gap-1">
                    <div className={`text-lg font-bold ${winner === "b" ? "text-primary" : ""}`}>
                      {score.scoreB}
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          winner === "b" ? "bg-primary" : "bg-muted-foreground/30"
                        }`}
                        style={{ width: `${score.scoreB}%` }}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
