"use client"

import * as React from "react"
export type Locale = "id" | "en"
export const LOCALES: Locale[] = ["id", "en"]
export const DEFAULT_LOCALE: Locale = "id"
const STORAGE_KEY = "he-locale"

/* ------------------------------------------------------------------ */
/*  English dictionary                                                 */
/* ------------------------------------------------------------------ */

const en = {
  header: { playground: "Playground", tryNow: "Try Now" },
  hero: {
    badge: "An educational playground about AI hallucinations",
    title: "Hallucination Explorer",
    subtitle:
      "Discover why AI sometimes sounds confident but is completely wrong. Explore how models generate plausible but incorrect information, and learn to spot hallucinations.",
    tryNow: "Try Now",
    randomQuestion: "Random Question",
    mono: "When AI Sounds Confident But Is Wrong",
  },
  features: {
    heading: "AI can be confidently wrong.",
    subtitle:
      "Hallucinations happen when AI generates plausible-sounding but incorrect information. Understanding this helps you use AI more effectively.",
    confidence: {
      title: "Confidence Simulator",
      formula: "P(answer | question)",
      body: "See how AI assigns confidence levels to answers. High confidence doesn't always mean correct — that's the core problem.",
    },
    knowledge: {
      title: "Known vs Unknown",
      formula: "available ⊂ training_data",
      body: "Visualize what the AI knows versus what it's missing. Hallucinations fill in the gaps with plausible fiction.",
    },
    probability: {
      title: "Probability Explorer",
      formula: "P(candidate) for each answer",
      body: "Compare candidate answers and their probabilities. Watch how AI distributes its 'belief' across multiple options.",
    },
  },
  how: {
    heading: "How it works",
    subtitle: "Three steps, entirely client-side.",
    steps: [
      {
        title: "1. Ask a question",
        body: "Type any question or pick a preset example. We cover facts, fiction, contested history, and future predictions.",
      },
      {
        title: "2. See the analysis",
        body: "Explore confidence levels, knowledge gaps, candidate answers with probabilities, and a hallucination risk gauge.",
      },
      {
        title: "3. Learn the patterns",
        body: "Understand when AI is reliable and when it's likely to hallucinate. Build intuition for effective AI usage.",
      },
    ],
  },
  cta: {
    heading: "Ready to understand AI hallucinations?",
    subtitle:
      "No sign-up, no server calls. Just you, your curiosity, and a deeper understanding of how AI sometimes gets it wrong.",
    button: "Open the Playground",
  },
  playground: {
    title: "The Playground",
    subtitle:
      "Type a question and explore how AI might respond, check for hallucination risks, and learn what makes some answers reliable.",
    intro: {
      title: "Welcome to the Hallucination Explorer",
      body: "This playground lets you explore why AI sometimes generates confident but incorrect answers. Try typing a question below, or click 'Random Question' to get started.",
    },
  },
  questionInput: {
    placeholder: "Type a question (e.g. Who wrote Harry Potter?)…",
    analyze: "Analyze",
    randomQuestion: "Random Question",
    clear: "Clear",
    presetExamples: "Preset Examples",
  },
  confidence: {
    title: "Confidence Simulator",
    subtitle: "How confident is the AI in its answer?",
    high: "High",
    medium: "Medium",
    low: "Low",
    label: "confidence",
  },
  knowledge: {
    title: "Known vs Unknown",
    subtitle: "What the AI knows versus what it's missing",
    available: "Knowledge Available",
    missing: "Knowledge Missing",
    availableDesc: "Information found in training data",
    missingDesc: "Gaps that may lead to hallucination",
  },
  probability: {
    title: "Probability Explorer",
    subtitle: "Candidate answers and their probabilities",
    probability: "probability",
    correct: "Correct",
    incorrect: "Incorrect",
  },
  meter: {
    title: "Hallucination Risk",
    subtitle: "Overall risk assessment for this question",
    low: "Low Risk",
    medium: "Medium Risk",
    high: "High Risk",
    lowDesc: "Answer is likely accurate",
    mediumDesc: "Some uncertainty, verify independently",
    highDesc: "High chance of hallucination",
  },
  insights: {
    heading: "Did you know?",
    items: {
      id: [
        "Hallucination adalah ketika AI menghasilkan informasi yang terdengar meyakinkan tapi salah.",
        "AI bisa sangat yakin dengan jawaban yang salah — confidence tinggi tidak menjamin akurasi.",
        "Fictional entities (tempat/karakter fiksi) adalah pemicu halusinasi paling umum.",
        "Masa depan adalah zona bahaya untuk AI — tidak ada data tentang apa yang belum terjadi.",
        "Sejarah yang dipertentangkan sulit untuk AI karena ada banyak 'jawaban benar'.",
        "Tips: selalu verifikasi informasi penting dari AI dengan sumber terpercaya.",
      ],
      en: [
        "Hallucination is when AI generates information that sounds confident but is wrong.",
        "AI can be very confident about wrong answers — high confidence doesn't guarantee accuracy.",
        "Fictional entities (fake places/characters) are the most common hallucination triggers.",
        "The future is a danger zone for AI — there's no data about events that haven't happened yet.",
        "Contested history is hard for AI because there are multiple 'correct' answers.",
        "Tip: always verify important AI-generated information with trusted sources.",
      ],
    },
  },
  share: {
    copyResult: "Copy result",
    copied: "Copied!",
    shareLink: "Share link",
    linkCopied: "Link copied!",
  },
  footer: {
    tagline: "Hallucination Explorer — discover why AI sometimes sounds confident but is wrong.",
    home: "Home",
    playground: "Playground",
    madeWith: "Made with ❤️ by",
  },
}

/* ------------------------------------------------------------------ */
/*  Indonesian dictionary                                              */
/* ------------------------------------------------------------------ */

const id: typeof en = {
  header: { playground: "Playground", tryNow: "Coba Sekarang" },
  hero: {
    badge: "Playground edukasi tentang halusinasi AI",
    title: "Hallucination Explorer",
    subtitle:
      "Temukan mengapa AI terkadang terdengar meyakinkan tapi sepenuhnya salah. Jelajahi bagaimana model menghasilkan informasi yang terdengar masuk akal tapi tidak benar, dan pelajari cara mengenalinya.",
    tryNow: "Coba Sekarang",
    randomQuestion: "Pertanyaan Acak",
    mono: "Ketika AI Terdengar Yakin Tapi Salah",
  },
  features: {
    heading: "AI bisa salah dengan penuh percaya diri.",
    subtitle:
      "Halusinasi terjadi ketika AI menghasilkan informasi yang terdengar meyakinkan tapi salah. Memahami ini membantu kamu menggunakan AI lebih efektif.",
    confidence: {
      title: "Simulator Kepercayaan",
      formula: "P(jawaban | pertanyaan)",
      body: "Lihat bagaimana AI memberikan tingkat kepercayaan pada jawaban. Kepercayaan tinggi tidak selalu berarti benar — itulah masalah utamanya.",
    },
    knowledge: {
      title: "Diketahui vs Tidak Diketahui",
      formula: "available ⊂ training_data",
      body: "Visualisasikan apa yang AI ketahui versus apa yang hilang. Halusinasi mengisi kekosongan dengan fiksi yang masuk akal.",
    },
    probability: {
      title: "Penjelajah Probabilitas",
      formula: "P(kandidat) untuk setiap jawaban",
      body: "Bandingkan kandidat jawaban dan probabilitasnya. Saksikan bagaimana AI mendistribusikan 'keyakinannya' ke beberapa opsi.",
    },
  },
  how: {
    heading: "Cara kerjanya",
    subtitle: "Tiga langkah, sepenuhnya di sisi browser.",
    steps: [
      {
        title: "1. Ajukan pertanyaan",
        body: "Ketik pertanyaan apa saja atau pilih contoh preset. Kami mencakup fakta, fiksi, sejarah yang dipertentangkan, dan prediksi masa depan.",
      },
      {
        title: "2. Lihat analisisnya",
        body: "Jelajahi tingkat kepercayaan, celah pengetahuan, kandidat jawaban dengan probabilitas, dan pengukur risiko halusinasi.",
      },
      {
        title: "3. Pelajari polanya",
        body: "Pahami kapan AI bisa diandalkan dan kapan kemungkinan berhalusinasi. Bangun intuisi untuk penggunaan AI yang efektif.",
      },
    ],
  },
  cta: {
    heading: "Siap memahami halusinasi AI?",
    subtitle:
      "Tanpa daftar, tanpa panggilan server. Hanya kamu, rasa ingin tahumu, dan pemahaman yang lebih dalam tentang bagaimana AI terkadang salah.",
    button: "Buka Playground",
  },
  playground: {
    title: "Playground",
    subtitle:
      "Ketik pertanyaan dan jelajahi bagaimana AI mungkin merespons, periksa risiko halusinasi, dan pelajari apa yang membuat beberapa jawaban bisa diandalkan.",
    intro: {
      title: "Selamat Datang di Hallucination Explorer",
      body: "Playground ini memungkinkanmu menjelajahi mengapa AI terkadang menghasilkan jawaban yang yakin tapi salah. Coba ketik pertanyaan di bawah, atau klik 'Pertanyaan Acak' untuk memulai.",
    },
  },
  questionInput: {
    placeholder: "Ketik pertanyaan (misalnya Siapa penulis Harry Potter?)…",
    analyze: "Analisis",
    randomQuestion: "Pertanyaan Acak",
    clear: "Hapus",
    presetExamples: "Contoh Preset",
  },
  confidence: {
    title: "Simulator Kepercayaan",
    subtitle: "Seberapa yakin AI dengan jawabannya?",
    high: "Tinggi",
    medium: "Sedang",
    low: "Rendah",
    label: "kepercayaan",
  },
  knowledge: {
    title: "Diketahui vs Tidak Diketahui",
    subtitle: "Apa yang AI ketahui versus apa yang hilang",
    available: "Pengetahuan Tersedia",
    missing: "Pengetahuan Hilang",
    availableDesc: "Informasi yang ditemukan dalam data pelatihan",
    missingDesc: "Kekosongan yang dapat menyebabkan halusinasi",
  },
  probability: {
    title: "Penjelajah Probabilitas",
    subtitle: "Kandidat jawaban dan probabilitasnya",
    probability: "probabilitas",
    correct: "Benar",
    incorrect: "Salah",
  },
  meter: {
    title: "Risiko Halusinasi",
    subtitle: "Penilaian risiko keseluruhan untuk pertanyaan ini",
    low: "Risiko Rendah",
    medium: "Risiko Sedang",
    high: "Risiko Tinggi",
    lowDesc: "Jawaban kemungkinan akurat",
    mediumDesc: "Ada sedikit ketidakpastian, verifikasi secara mandiri",
    highDesc: "Kemungkinan besar berhalusinasi",
  },
  insights: {
    heading: "Tahukah kamu?",
    items: {
      id: [
        "Halusinasi adalah ketika AI menghasilkan informasi yang terdengar meyakinkan tapi salah.",
        "AI bisa sangat yakin dengan jawaban yang salah — confidence tinggi tidak menjamin akurasi.",
        "Entitas fiksi (tempat/karakter fiksi) adalah pemicu halusinasi paling umum.",
        "Masa depan adalah zona bahaya untuk AI — tidak ada data tentang apa yang belum terjadi.",
        "Sejarah yang dipertentangkan sulit untuk AI karena ada banyak 'jawaban benar'.",
        "Tips: selalu verifikasi informasi penting dari AI dengan sumber terpercaya.",
      ],
      en: [
        "Hallucination is when AI generates information that sounds confident but is wrong.",
        "AI can be very confident about wrong answers — high confidence doesn't guarantee accuracy.",
        "Fictional entities (fake places/characters) are the most common hallucination triggers.",
        "The future is a danger zone for AI — there's no data about events that haven't happened yet.",
        "Contested history is hard for AI because there are multiple 'correct' answers.",
        "Tip: always verify important AI-generated information with trusted sources.",
      ],
    },
  },
  share: {
    copyResult: "Salin hasil",
    copied: "Tersalin!",
    shareLink: "Bagikan tautan",
    linkCopied: "Tautan tersalin!",
  },
  footer: {
    tagline: "Hallucination Explorer — temukan mengapa AI terkadang terdengar yakin tapi salah.",
    home: "Beranda",
    playground: "Playground",
    madeWith: "Dibuat dengan ❤️ oleh",
  },
}

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */

export type Dict = typeof en

const DICTS: Record<Locale, Dict> = { en, id }

interface I18nContextValue {
  locale: Locale
  setLocale: (l: Locale) => void
  t: Dict
}

const I18nContext = React.createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(DEFAULT_LOCALE)

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored === "id" || stored === "en") setLocaleState(stored)
    } catch {
      /* ignore */
    }
  }, [])

  React.useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = locale
  }, [locale])

  const setLocale = React.useCallback((l: Locale) => {
    setLocaleState(l)
    try {
      window.localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* ignore */
    }
  }, [])

  const value = React.useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: DICTS[locale],
    }),
    [locale, setLocale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const ctx = React.useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within an I18nProvider")
  return ctx
}
