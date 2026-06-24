/**
 * Share / copy helpers for the Hallucination Explorer.
 */

/** Encode a question for use in a URL hash. */
export function encodeShareQuestion(question: string): string {
  return encodeURIComponent(question.toLowerCase().trim())
}

/** Decode a question from a URL hash. */
export function decodeShareQuestion(hash: string): string | null {
  try {
    const decoded = decodeURIComponent(hash.replace(/^#/, "").trim())
    return decoded || null
  } catch {
    return null
  }
}

/** Copy text to clipboard, returning success boolean. */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

/** Build a share URL for a specific question. */
export function buildShareUrl(question: string): string {
  if (typeof window === "undefined") return ""
  return `${window.location.origin}/playground?question=${encodeURIComponent(question)}#${encodeShareQuestion(question)}`
}
