/**
 * Simulated hallucination analysis engine.
 * All computation is deterministic and runs client-side.
 * Demonstrates how AI models can generate plausible but incorrect information.
 */

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type RiskLevel = "low" | "medium" | "high"

export interface CandidateAnswer {
  answer: string
  probability: number
  isCorrect: boolean
  confidence: number
}

export interface AnalysisResult {
  question: string
  confidence: number
  available: string[]
  missing: string[]
  candidates: CandidateAnswer[]
  risk: RiskLevel
  riskScore: number
  explanation: string
}

/* ------------------------------------------------------------------ */
/*  Hallucination examples                                             */
/* ------------------------------------------------------------------ */

export interface HallucinationExample {
  question: string
  correctAnswer: string
  confidence: number
  risk: RiskLevel
  riskScore: number
  available: string[]
  missing: string[]
  candidates: CandidateAnswer[]
  explanation: string
}

export const HALLUCINATION_EXAMPLES: HallucinationExample[] = [
  {
    question: "Who wrote Harry Potter?",
    correctAnswer: "J.K. Rowling",
    confidence: 0.95,
    risk: "low",
    riskScore: 0.1,
    available: [
      "Fiction novel series",
      "Published starting 1997",
      "Fantasy genre",
      "British author",
      "Multiple movies adapted",
    ],
    missing: [],
    candidates: [
      { answer: "J.K. Rowling", probability: 0.95, isCorrect: true, confidence: 0.95 },
      { answer: "Stephen King", probability: 0.02, isCorrect: false, confidence: 0.3 },
      { answer: "Roald Dahl", probability: 0.02, isCorrect: false, confidence: 0.25 },
      { answer: "Tolkien", probability: 0.01, isCorrect: false, confidence: 0.2 },
    ],
    explanation:
      "This is a well-known factual question. The answer is firmly established in the model's training data. Low hallucination risk.",
  },
  {
    question: "What is the capital of France?",
    correctAnswer: "Paris",
    confidence: 0.98,
    risk: "low",
    riskScore: 0.05,
    available: [
      "Country: France",
      "Geography knowledge",
      "European capitals",
      "Major world cities",
    ],
    missing: [],
    candidates: [
      { answer: "Paris", probability: 0.98, isCorrect: true, confidence: 0.98 },
      { answer: "Lyon", probability: 0.01, isCorrect: false, confidence: 0.15 },
      { answer: "Marseille", probability: 0.008, isCorrect: false, confidence: 0.12 },
      { answer: "Berlin", probability: 0.002, isCorrect: false, confidence: 0.1 },
    ],
    explanation:
      "Basic geographical fact with extremely high confidence. Virtually no hallucination risk.",
  },
  {
    question: "When did the Battle of Hastings take place?",
    correctAnswer: "1066",
    confidence: 0.92,
    risk: "low",
    riskScore: 0.12,
    available: [
      "Medieval English history",
      "Norman conquest",
      "11th century events",
      "Major European battles",
    ],
    missing: [],
    candidates: [
      { answer: "1066", probability: 0.92, isCorrect: true, confidence: 0.92 },
      { answer: "1086", probability: 0.03, isCorrect: false, confidence: 0.4 },
      { answer: "1042", probability: 0.025, isCorrect: false, confidence: 0.35 },
      { answer: "1100", probability: 0.025, isCorrect: false, confidence: 0.3 },
    ],
    explanation:
      "Well-documented historical event. High confidence in the answer.",
  },
  {
    question: "What is the population of Zephyria?",
    correctAnswer: "Unknown (fictional place)",
    confidence: 0.15,
    risk: "high",
    riskScore: 0.85,
    available: [
      "The name sounds like a real place",
      "Could be a made-up location",
      "No verified data exists",
    ],
    missing: [
      "No geographic record",
      "No census data",
      "Not in any known atlas",
      "Likely fictional",
    ],
    candidates: [
      { answer: "1.2 million", probability: 0.25, isCorrect: false, confidence: 0.15 },
      { answer: "850,000", probability: 0.2, isCorrect: false, confidence: 0.12 },
      { answer: "3.4 million", probability: 0.15, isCorrect: false, confidence: 0.1 },
      { answer: "No data available", probability: 0.4, isCorrect: true, confidence: 0.8 },
    ],
    explanation:
      "This is a classic hallucination trigger — a plausible-sounding but nonexistent place. An AI might confidently fabricate a population number.",
  },
  {
    question: "Who invented the telephone?",
    correctAnswer: "Alexander Graham Bell (1876)",
    confidence: 0.88,
    risk: "medium",
    riskScore: 0.3,
    available: [
      "19th century invention",
      "Communication technology",
      "Patent disputes existed",
      "Multiple claimants",
    ],
    missing: [
      "Antonio Meucci's earlier claim",
      "Elisha Gray's simultaneous patent",
      "Historical debate ongoing",
    ],
    candidates: [
      { answer: "Alexander Graham Bell", probability: 0.75, isCorrect: true, confidence: 0.88 },
      { answer: "Antonio Meucci", probability: 0.15, isCorrect: true, confidence: 0.6 },
      { answer: "Thomas Edison", probability: 0.07, isCorrect: false, confidence: 0.4 },
      { answer: "Elisha Gray", probability: 0.03, isCorrect: false, confidence: 0.35 },
    ],
    explanation:
      "The commonly accepted answer is Bell, but there's genuine historical debate. This shows how 'correct' answers can be nuanced.",
  },
  {
    question: "What year was the first iPhone released?",
    correctAnswer: "2007",
    confidence: 0.9,
    risk: "low",
    riskScore: 0.15,
    available: [
      "Apple product history",
      "Smartphone timeline",
      "Major tech releases",
      "Steve Jobs era",
    ],
    missing: [],
    candidates: [
      { answer: "2007", probability: 0.9, isCorrect: true, confidence: 0.9 },
      { answer: "2005", probability: 0.04, isCorrect: false, confidence: 0.35 },
      { answer: "2008", probability: 0.04, isCorrect: false, confidence: 0.4 },
      { answer: "2006", probability: 0.02, isCorrect: false, confidence: 0.25 },
    ],
    explanation:
      "Well-documented product launch date. High confidence, low hallucination risk.",
  },
  {
    question: "What is the chemical formula for glucose?",
    correctAnswer: "C₆H₁₂O₆",
    confidence: 0.94,
    risk: "low",
    riskScore: 0.08,
    available: [
      "Basic organic chemistry",
      "Sugar molecules",
      "Carbohydrate formulas",
      "Biochemistry basics",
    ],
    missing: [],
    candidates: [
      { answer: "C₆H₁₂O₆", probability: 0.94, isCorrect: true, confidence: 0.94 },
      { answer: "C₆H₁₀O₅", probability: 0.03, isCorrect: false, confidence: 0.5 },
      { answer: "C₁₂H₂₂O₁₁", probability: 0.02, isCorrect: false, confidence: 0.4 },
      { answer: "C₂H₅OH", probability: 0.01, isCorrect: false, confidence: 0.2 },
    ],
    explanation:
      "Standard chemistry fact with very high confidence. This is basic scientific knowledge.",
  },
  {
    question: "Who won the Nobel Prize in Physics in 2045?",
    correctAnswer: "Not yet awarded",
    confidence: 0.05,
    risk: "high",
    riskScore: 0.95,
    available: [
      "The year 2045 is in the future",
      "No Nobel Prizes awarded yet",
      "Cannot predict future events",
    ],
    missing: [
      "Future event",
      "No data available",
      "Cannot be predicted",
      "Nobel Prize not yet decided",
    ],
    candidates: [
      { answer: "Dr. Sarah Chen", probability: 0.3, isCorrect: false, confidence: 0.1 },
      { answer: "Prof. James Liu", probability: 0.25, isCorrect: false, confidence: 0.08 },
      { answer: "Dr. Maria Santos", probability: 0.2, isCorrect: false, confidence: 0.06 },
      { answer: "Not yet determined", probability: 0.25, isCorrect: true, confidence: 0.85 },
    ],
    explanation:
      "This is a future event — the model has no data about it. Any specific answer would be a hallucination.",
  },
  {
    question: "What is the meaning of life according to Douglas Adams?",
    correctAnswer: "42",
    confidence: 0.96,
    risk: "low",
    riskScore: 0.06,
    available: [
      "Hitchhiker's Guide to the Galaxy",
      "Science fiction literature",
      "Douglas Adams quotes",
      "Pop culture references",
    ],
    missing: [],
    candidates: [
      { answer: "42", probability: 0.96, isCorrect: true, confidence: 0.96 },
      { answer: "To find happiness", probability: 0.02, isCorrect: false, confidence: 0.3 },
      { answer: "42.0", probability: 0.015, isCorrect: false, confidence: 0.25 },
      { answer: "Unknown", probability: 0.005, isCorrect: false, confidence: 0.1 },
    ],
    explanation:
      "Famous pop culture reference with extremely high confidence. The answer is unambiguous.",
  },
  {
    question: "How many atoms are in a grain of sand?",
    correctAnswer: "~50 quintillion (5 × 10¹⁹)",
    confidence: 0.7,
    risk: "medium",
    riskScore: 0.35,
    available: [
      "Approximate grain of sand size",
      "Silicon dioxide composition",
      "Avogadro's number concept",
    ],
    missing: [
      "Exact grain size varies",
      "Different sand compositions",
      "Estimation involves many assumptions",
      "No precise single answer",
    ],
    candidates: [
      { answer: "~50 quintillion", probability: 0.45, isCorrect: true, confidence: 0.7 },
      { answer: "~10 quintillion", probability: 0.2, isCorrect: false, confidence: 0.5 },
      { answer: "~100 quintillion", probability: 0.2, isCorrect: false, confidence: 0.45 },
      { answer: "~1 million", probability: 0.15, isCorrect: false, confidence: 0.3 },
    ],
    explanation:
      "This requires estimation and multiple assumptions. The model's confidence reflects the inherent uncertainty in such calculations.",
  },
]

/* ------------------------------------------------------------------ */
/*  Preset examples (fake books, citations, facts)                     */
/* ------------------------------------------------------------------ */

export interface PresetExample {
  id: string
  label: string
  labelEn: string
  question: string
  type: "fact" | "citation" | "history"
}

export const PRESET_EXAMPLES: PresetExample[] = [
  {
    id: "fact-1",
    label: "Fakta Umum",
    labelEn: "General Fact",
    question: "Who wrote Harry Potter?",
    type: "fact",
  },
  {
    id: "fact-2",
    label: "Geografi",
    labelEn: "Geography",
    question: "What is the capital of France?",
    type: "fact",
  },
  {
    id: "citation-1",
    label: "Penciptaan Fiksi",
    labelEn: "Fiction Creation",
    question: "What is the population of Zephyria?",
    type: "citation",
  },
  {
    id: "history-1",
    label: "Sejarah Dipertentangan",
    labelEn: "Contested History",
    question: "Who invented the telephone?",
    type: "history",
  },
  {
    id: "fact-3",
    label: "Teknologi",
    labelEn: "Technology",
    question: "What year was the first iPhone released?",
    type: "fact",
  },
  {
    id: "fact-4",
    label: "Kimia Dasar",
    labelEn: "Basic Chemistry",
    question: "What is the chemical formula for glucose?",
    type: "fact",
  },
  {
    id: "citation-2",
    label: "Masa Depan",
    labelEn: "Future Event",
    question: "Who won the Nobel Prize in Physics in 2045?",
    type: "citation",
  },
  {
    id: "history-2",
    label: "Budaya Pop",
    labelEn: "Pop Culture",
    question: "What is the meaning of life according to Douglas Adams?",
    type: "history",
  },
  {
    id: "fact-5",
    label: "Estimasi Sains",
    labelEn: "Science Estimation",
    question: "How many atoms are in a grain of sand?",
    type: "fact",
  },
  {
    id: "history-3",
    label: "Sejarah Medievil",
    labelEn: "Medieval History",
    question: "When did the Battle of Hastings take place?",
    type: "history",
  },
]

/* ------------------------------------------------------------------ */
/*  Core analysis function                                             */
/* ------------------------------------------------------------------ */

function normalizeQuestion(q: string): string {
  return q.toLowerCase().trim().replace(/[?!.]+$/, "").replace(/\s+/g, " ")
}

/** Analyze a question and return hallucination analysis data. */
export function analyzeQuestion(question: string): AnalysisResult | null {
  const normalized = normalizeQuestion(question)

  // Find matching example
  const match = HALLUCINATION_EXAMPLES.find(
    (ex) => normalizeQuestion(ex.question) === normalized,
  )

  if (match) {
    return {
      question: match.question,
      confidence: match.confidence,
      available: match.available,
      missing: match.missing,
      candidates: match.candidates,
      risk: match.risk,
      riskScore: match.riskScore,
      explanation: match.explanation,
    }
  }

  // Generic analysis for unknown questions
  const words = normalized.split(" ").filter(Boolean)
  const hasQuestionWord = ["who", "what", "when", "where", "why", "how"].some(
    (qw) => words.includes(qw),
  )

  // Generate synthetic analysis for unrecognized questions
  const confidence = 0.3 + Math.random() * 0.4
  const riskScore = 1 - confidence
  const risk: RiskLevel = riskScore > 0.6 ? "high" : riskScore > 0.3 ? "medium" : "low"

  return {
    question,
    confidence: Math.round(confidence * 100) / 100,
    available: hasQuestionWord
      ? ["Question structure recognized", "Partial context available"]
      : ["Some context available"],
    missing: [
      "Specific knowledge not found",
      "Requires additional verification",
      "May need cross-referencing",
    ],
    candidates: [
      { answer: "Possible answer A", probability: 0.35, isCorrect: false, confidence: 0.3 },
      { answer: "Possible answer B", probability: 0.25, isCorrect: false, confidence: 0.25 },
      { answer: "Possible answer C", probability: 0.2, isCorrect: false, confidence: 0.2 },
      { answer: "Insufficient data", probability: 0.2, isCorrect: true, confidence: 0.5 },
    ],
    risk,
    riskScore: Math.round(riskScore * 100) / 100,
    explanation: `This question is not in our example database. The model's confidence is moderate (${Math.round(confidence * 100)}%), suggesting some hallucination risk. Try one of the preset examples for a detailed breakdown.`,
  }
}

/** Pick a random example question. */
export function randomExample(): string {
  const idx = Math.floor(Math.random() * HALLUCINATION_EXAMPLES.length)
  return HALLUCINATION_EXAMPLES[idx].question
}

/** Pick a random example different from the current question. */
export function randomExampleExcept(current: string): string {
  const others = HALLUCINATION_EXAMPLES.filter(
    (ex) => normalizeQuestion(ex.question) !== normalizeQuestion(current),
  )
  if (others.length === 0) return randomExample()
  const idx = Math.floor(Math.random() * others.length)
  return others[idx].question
}
