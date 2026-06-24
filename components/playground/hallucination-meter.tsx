"use client"

import { useI18n } from "@/lib/i18n"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import type { RiskLevel } from "@/lib/hallucinations"

interface HallucinationMeterProps {
  risk: RiskLevel
  riskScore: number
  explanation: string
}

export function HallucinationMeter({ risk, riskScore, explanation }: HallucinationMeterProps) {
  const { t } = useI18n()

  const riskConfig = {
    low: {
      color: "text-emerald-600 dark:text-emerald-400",
      barColor: "bg-emerald-500",
      label: t.meter.low,
      desc: t.meter.lowDesc,
    },
    medium: {
      color: "text-amber-600 dark:text-amber-400",
      barColor: "bg-amber-500",
      label: t.meter.medium,
      desc: t.meter.mediumDesc,
    },
    high: {
      color: "text-red-600 dark:text-red-400",
      barColor: "bg-red-500",
      label: t.meter.high,
      desc: t.meter.highDesc,
    },
  }

  const config = riskConfig[risk]
  const circumference = 2 * Math.PI * 45
  const offset = circumference * (1 - riskScore)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{t.meter.title}</CardTitle>
        <CardDescription>{t.meter.subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          {/* Circular gauge */}
          <div className="relative flex items-center justify-center">
            <svg width="120" height="120" viewBox="0 0 120 120" className="transform -rotate-90">
              <circle
                cx="60"
                cy="60"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-muted"
              />
              <circle
                cx="60"
                cy="60"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                className={config.color}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                style={{
                  animation: "gauge-fill 1s ease-out forwards",
                  ["--gauge-circumference" as string]: `${circumference}`,
                  ["--gauge-target" as string]: `${offset}`,
                }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-2xl font-bold ${config.color}`}>
                {Math.round(riskScore * 100)}%
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center sm:text-left">
            <h4 className={`text-lg font-semibold ${config.color}`}>
              {config.label}
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              {config.desc}
            </p>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              {explanation}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
