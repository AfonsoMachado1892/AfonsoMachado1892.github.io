import { useEffect, useState } from "react"

export type Theme = "dark" | "light"
const KEY = "afonso-portfolio-theme"

function initialTheme(): Theme {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === "dark" || saved === "light") return saved
  } catch {}
  return "dark"
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(initialTheme)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem(KEY, theme) } catch {}
  }, [theme])
  const toggle = () => setTheme(t => t === "dark" ? "light" : "dark")
  return { theme, toggle }
}
