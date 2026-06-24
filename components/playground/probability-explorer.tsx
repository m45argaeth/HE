"use client"

import { Check, X } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { formatPercentNumber } from "@/lib/format"
import type { CandidateAnswer } from "@/lib/hallucinations"

interface ProbabilityExplorerProps {
  candidates: CandidateAnswer[]
}

export function ProbabilityExplorer({ candidates }: ProbabilityExplorerProps) {
  const { t } = useI18n()

  // Sort by probability descending
  const sorted = [...candidates].sort((a, b) => b.probability - a.probability)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{t.probability.title}</CardTitle>
        <CardDescription>{t.probability.subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {sorted.map((candidate, i) => {
          const barWidth = candidate.probability * 100
          return (
            <div
              key={i}
              className="animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  {candidate.isCorrect ? (
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                  ) : (
                    <X className="h-3.5 w-3.5 text-red-500" />
                  )}
                  <span className="text-sm font-medium">{candidate.answer}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    candidate.isCorrect
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                      : "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300"
                  }`}>
                    {candidate.isCorrect ? t.probability.correct : t.probability.incorrect}
                  </span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {formatPercentNumber(candidate.probability)}%
                </span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-muted">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    candidate.isCorrect
                      ? "bg-emerald-500"
                      : "bg-slate-400 dark:bg-slate-500"
                  }`}
                  style={{
                    width: `${barWidth}%`,
                    animation: "bar-grow 0.8s ease-out forwards",
                    ["--bar-width" as string]: `${barWidth}%`,
                    animationDelay: `${i * 100}ms`,
                  }}
                />
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
