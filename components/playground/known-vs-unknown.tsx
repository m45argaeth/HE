"use client"

import { CheckCircle, XCircle } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface KnownVsUnknownProps {
  available: string[]
  missing: string[]
}

export function KnownVsUnknown({ available, missing }: KnownVsUnknownProps) {
  const { t } = useI18n()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{t.knowledge.title}</CardTitle>
        <CardDescription>{t.knowledge.subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-emerald-200 dark:border-emerald-500/25 bg-emerald-50 dark:bg-emerald-500/10 p-4">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <h4 className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                {t.knowledge.available}
              </h4>
            </div>
            <p className="text-xs text-emerald-600/70 dark:text-emerald-400/70 mb-2">
              {t.knowledge.availableDesc}
            </p>
            <ul className="space-y-1.5">
              {available.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-emerald-700 dark:text-emerald-300 animate-fade-in"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-red-200 dark:border-red-500/25 bg-red-50 dark:bg-red-500/10 p-4">
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
              <h4 className="text-sm font-semibold text-red-700 dark:text-red-300">
                {t.knowledge.missing}
              </h4>
            </div>
            <p className="text-xs text-red-600/70 dark:text-red-400/70 mb-2">
              {t.knowledge.missingDesc}
            </p>
            <ul className="space-y-1.5">
              {missing.length > 0 ? (
                missing.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-red-700 dark:text-red-300 animate-fade-in"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                    {item}
                  </li>
                ))
              ) : (
                <li className="text-sm text-red-700/50 dark:text-red-300/50 italic">
                  No major gaps detected
                </li>
              )}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
