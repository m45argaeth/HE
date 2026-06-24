"use client"

import { useI18n } from "@/lib/i18n"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { formatPercentNumber } from "@/lib/format"

interface ConfidenceSimulatorProps {
  confidence: number
}

export function ConfidenceSimulator({ confidence }: ConfidenceSimulatorProps) {
  const { t } = useI18n()

  const levels = [
    { key: "high", threshold: 0.7, color: "bg-emerald-500", label: t.confidence.high },
    { key: "medium", threshold: 0.4, color: "bg-amber-500", label: t.confidence.medium },
    { key: "low", threshold: 0, color: "bg-red-500", label: t.confidence.low },
  ]

  const activeLevel =
    confidence >= 0.7 ? "high" : confidence >= 0.4 ? "medium" : "low"

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{t.confidence.title}</CardTitle>
        <CardDescription>{t.confidence.subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {levels.map((level) => {
            const isActive = level.key === activeLevel
            const barWidth = isActive ? confidence * 100 : 0
            return (
              <div key={level.key} className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className={isActive ? "font-medium" : "text-muted-foreground"}>
                    {level.label}
                  </span>
                  {isActive && (
                    <span className="font-mono text-xs text-muted-foreground">
                      {formatPercentNumber(confidence)}%
                    </span>
                  )}
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-muted">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${level.color} ${isActive ? "opacity-100" : "opacity-20"}`}
                    style={{
                      width: `${barWidth}%`,
                      animation: isActive ? "bar-grow 0.8s ease-out forwards" : "none",
                      ["--bar-width" as string]: `${barWidth}%`,
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
        <div className="pt-2 text-center">
          <p className="text-3xl font-bold font-mono">{formatPercentNumber(confidence)}%</p>
          <p className="text-xs text-muted-foreground mt-1">{t.confidence.label}</p>
        </div>
      </CardContent>
    </Card>
  )
}
