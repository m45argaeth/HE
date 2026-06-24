"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { useI18n } from "@/lib/i18n"
import { analyzeQuestion, randomExampleExcept } from "@/lib/hallucinations"
import { PlaygroundIntro } from "@/components/playground/playground-intro"
import { QuestionInput } from "@/components/playground/question-input"
import { ConfidenceSimulator } from "@/components/playground/confidence-simulator"
import { KnownVsUnknown } from "@/components/playground/known-vs-unknown"
import { ProbabilityExplorer } from "@/components/playground/probability-explorer"
import { HallucinationMeter } from "@/components/playground/hallucination-meter"
import { EducationalInsights } from "@/components/playground/educational-insights"
import { ShareFeatures } from "@/components/playground/share-features"

export function PlaygroundInner() {
  const { t } = useI18n()
  const searchParams = useSearchParams()

  const [question, setQuestion] = React.useState("")
  const [activeQuestion, setActiveQuestion] = React.useState<string | null>(null)
  const [result, setResult] = React.useState<ReturnType<typeof analyzeQuestion> | null>(null)

  React.useEffect(() => {
    const urlQuestion = searchParams.get("question")
    if (urlQuestion) {
      const decoded = decodeURIComponent(urlQuestion)
      setQuestion(decoded)
      setActiveQuestion(decoded)
      const analysis = analyzeQuestion(decoded)
      setResult(analysis)
    }
  }, [searchParams])

  const handleAnalyze = () => {
    const trimmed = question.trim()
    if (!trimmed) return
    const analysis = analyzeQuestion(trimmed)
    setActiveQuestion(trimmed)
    setResult(analysis)
  }

  const handleRandom = () => {
    const newQuestion = activeQuestion
      ? randomExampleExcept(activeQuestion)
      : randomExampleExcept("")
    setQuestion(newQuestion)
    setActiveQuestion(newQuestion)
    const analysis = analyzeQuestion(newQuestion)
    setResult(analysis)
  }

  const handleClear = () => {
    setQuestion("")
    setActiveQuestion(null)
    setResult(null)
  }

  const hasResult = result !== null

  return (
    <>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t.playground.title}
        </h1>
        <p className="mt-4 text-muted-foreground">{t.playground.subtitle}</p>
      </div>

      <div className="mx-auto mt-8 max-w-4xl space-y-8">
        <PlaygroundIntro />

        <QuestionInput
          value={question}
          onChange={setQuestion}
          onAnalyze={handleAnalyze}
          onRandom={handleRandom}
          onClear={handleClear}
          hasResult={hasResult}
        />

        {hasResult && result && (
          <>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-sm font-medium text-muted-foreground">
                Analysis Results
              </h2>
              <ShareFeatures question={activeQuestion} />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ConfidenceSimulator confidence={result.confidence} />
              <HallucinationMeter
                risk={result.risk}
                riskScore={result.riskScore}
                explanation={result.explanation}
              />
            </div>

            <KnownVsUnknown
              available={result.available}
              missing={result.missing}
            />

            <ProbabilityExplorer candidates={result.candidates} />
          </>
        )}

        <EducationalInsights />
      </div>
    </>
  )
}
