<div align="center">

# ⚠️ Hallucination Explorer

**When AI Sounds Confident But Is Wrong** · **Ketika AI Terdengar Yakin Tapi Salah**

An educational playground that lets you explore why AI sometimes generates plausible but incorrect information. Understand confidence levels, knowledge gaps, and hallucination risks — all in your browser.

[![Next.js](https://img.shields.io/badge/Next.js%2015-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript%205-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%203.4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-black?logo=vercel&logoColor=white)](https://he-playground.vercel.app)

</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Confidence Simulator** | See how AI assigns confidence levels to answers — high confidence doesn't guarantee accuracy |
| **Known vs Unknown** | Visualize what the AI knows versus what it's missing — gaps that lead to hallucinations |
| **Probability Explorer** | Compare candidate answers with probability bars — watch AI distribute its "belief" |
| **Hallucination Meter** | Risk gauge from Low to High — overall assessment of hallucination likelihood |
| **Preset Examples** | 10 curated examples covering facts, fiction, contested history, and future predictions |
| **Bilingual** | Full Indonesian (default) + English support |
| **Dark / Light** | Theme toggle with system-aware defaults |
| **Share** | Copy results, share links |

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router, RSC) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3.4 + tailwindcss-animate |
| UI Kit | shadcn/ui (New York style) |
| Icons | Lucide React |
| Theming | next-themes |
| Deployment | Vercel |

## 📁 Project Structure

```
HE/
├── app/
│   ├── globals.css          # Theme variables (HSL)
│   ├── layout.tsx           # Root layout (fonts, providers)
│   ├── page.tsx             # Landing page
│   └── playground/
│       ├── page.tsx         # Playground page (server + Suspense)
│       └── playground-inner.tsx  # Client-side playground
├── components/
│   ├── landing/             # Hero, features, how-it-works, CTA
│   ├── playground/          # All interactive playground components
│   ├── ui/                  # shadcn/ui primitives
│   ├── site-header.tsx      # Responsive header with hamburger
│   ├── site-footer.tsx      # Footer with series links
│   ├── theme-provider.tsx   # next-themes wrapper
│   ├── theme-toggle.tsx     # Dark/light toggle
│   └── language-toggle.tsx  # ID/EN switch
├── lib/
│   ├── hallucinations.ts    # Hallucination analysis engine (10 examples)
│   ├── format.ts            # Number/percentage formatters
│   ├── i18n.tsx             # Bilingual i18n system
│   ├── share.ts             # Copy, share link helpers
│   ├── site-config.ts       # Series config & site identity
│   └── utils.ts             # cn() utility
├── tailwind.config.ts
├── tsconfig.json
├── components.json
├── next.config.mjs
├── postcss.config.mjs
└── package.json
```

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/m45argaeth/HE.git
cd HE

# Install
npm install

# Develop
npm run dev

# Build
npm run build
```

## 🔒 Privacy

**Everything runs entirely in your browser.** No data is sent to any server. There are no analytics, no tracking, no cookies. The analysis is based on predefined examples and heuristics — no API calls needed.

## 🌌 Sini Gajelasin — Educational Playground Series

Hallucination Explorer is part of the **Sini Gajelasin** educational ecosystem — a series of interactive playgrounds that make complex tech concepts tangible.

### EBN Universe

| # | Playground | Description | Link |
|---|-----------|-------------|------|
| 1 | **Everything Becomes Numbers** | How computers see images, audio & video as numbers | [ebn-playground.vercel.app](https://ebn-playground.vercel.app) |
| 2 | **Text To Binary** | How text becomes binary at the lowest level | [ttb-playground.vercel.app](https://ttb-playground.vercel.app) |
| 3 | **Video Frame Explorer** | How video becomes frames, pixels & numbers | [vfe-playground.vercel.app](https://vfe-playground.vercel.app) |
| 4 | **Token Explorer** | How LLMs read text as tokens | [te-playground.vercel.app](https://te-playground.vercel.app) |
| 5 | **Embedding Explorer** 🧠 | How AI understands meaning behind words | [ee-playground.vercel.app](https://ee-playground.vercel.app) |
| 6 | Prompt Explorer | How prompts shape AI responses | 🚧 Coming soon |
| 7 | **Hallucination Explorer** ⚠️ | Why AI sometimes makes things up | [he-playground.vercel.app](https://he-playground.vercel.app) |
| 8 | Compression Explorer | How data compression works | 🚧 Coming soon |
| 9 | Internet Packet Explorer | How data travels across the internet | 🚧 Coming soon |
| 10 | Human vs AI Explorer | Comparing human and AI cognition | 🚧 Coming soon |

### Human Mind Universe

| # | Playground | Description | Link |
|---|-----------|-------------|------|
| 11 | **Bias Detector** | Explore cognitive biases in decision-making | [bd-playground-snowy.vercel.app](https://bd-playground-snowy.vercel.app) |
| 12 | Memory Explorer | How memory works | 🚧 Coming soon |
| 13 | False Memory Explorer | Why we remember things that never happened | 🚧 Coming soon |
| 14 | Attention Explorer | How attention and focus work | 🚧 Coming soon |
| 15 | Dopamine Explorer | The science of motivation and reward | 🚧 Coming soon |

## 👤 Author

**Ga** · [Curious About Everything 🔍](https://x.com/sinigajelasin)

---

<div align="center">

**[sinigajelasin.vercel.app](https://sinigajelasin.vercel.app)** · Because curiosity is the best teacher.

</div>
