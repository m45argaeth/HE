"use client"

import * as React from "react"
import { Shuffle, Search, Eraser, ChevronDown } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { PRESET_EXAMPLES } from "@/lib/hallucinations"

interface QuestionInputProps {
  value: string
  onChange: (value: string) => void
  onAnalyze: () => void
  onRandom: () => void
  onClear: () => void
  hasResult: boolean
}

export function QuestionInput({
  value,
  onChange,
  onAnalyze,
  onRandom,
  onClear,
  hasResult,
}: QuestionInputProps) {
  const { t, locale } = useI18n()
  const [showPresets, setShowPresets] = React.useState(false)

  return (
    <Card>
      <CardContent className="p-4 sm:p-6 md:p-8">
        <div className="flex flex-col gap-3">
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault()
                onAnalyze()
              }
            }}
            placeholder={t.questionInput.placeholder}
            className="w-full text-base"
          />
          <div className="flex flex-wrap gap-2">
            <Button onClick={onAnalyze} className="min-w-0 flex-1 sm:flex-none">
              <Search className="h-4 w-4 shrink-0" />
              <span className="truncate">{t.questionInput.analyze}</span>
            </Button>
            <Button
              variant="outline"
              onClick={onRandom}
              className="min-w-0 flex-1 sm:flex-none"
            >
              <Shuffle className="h-4 w-4 shrink-0" />
              <span className="truncate">{t.questionInput.randomQuestion}</span>
            </Button>
            {hasResult && (
              <Button
                variant="ghost"
                onClick={onClear}
                className="min-w-0 flex-1 sm:flex-none"
              >
                <Eraser className="h-4 w-4 shrink-0" />
                <span className="truncate">{t.questionInput.clear}</span>
              </Button>
            )}
          </div>
          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPresets(!showPresets)}
              className="text-xs text-muted-foreground"
            >
              {t.questionInput.presetExamples}
              <ChevronDown className={`h-3 w-3 transition-transform ${showPresets ? "rotate-180" : ""}`} />
            </Button>
            {showPresets && (
              <div className="mt-2 flex flex-wrap gap-2">
                {PRESET_EXAMPLES.map((preset) => (
                  <Button
                    key={preset.id}
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={() => {
                      onChange(preset.question)
                      setShowPresets(false)
                    }}
                  >
                    {locale === "id" ? preset.label : preset.labelEn}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
