/**
 * Lunde-poj (lnd-poj) inspired design tokens – client zone prototype.
 * Reference: https://lnd-poj.netlify.app/
 */

export const colors = {
  primary: "#2563eb", // trustworthy blue
  primaryDark: "#1d4ed8",
  primaryLight: "#3b82f6",
  background: "#f8fafc",
  surface: "#ffffff",
  text: "#0f172a",
  textMuted: "#64748b",
  border: "#e2e8f0",
  success: "#22c55e",
  error: "#ef4444",
} as const;

export type ColorKey = keyof typeof colors;
