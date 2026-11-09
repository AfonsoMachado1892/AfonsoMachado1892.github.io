import { useEffect } from "react"
import { profile } from "../data/profile"
import { useActiveSection } from "../hooks/useActiveSection"
import type { Theme } from "../hooks/useTheme"
import { useLang } from "../i18n/LanguageContext"

const links = [{ id: "about" }, { id: "projects" }, { id: "contact" }] as const
const sectionIds = ["home", ...links.map(link => link.id)]

interface Props {
  theme: Theme
  onToggleTheme: () => void
}

export default function Navbar({ theme, onToggleTheme }: Props) {
  const active = useActiveSection(sectionIds)
  const { lang, t, toggle: toggleLang } = useLang()

  useEffect(() => {
    const root = document.documentElement
    const onScroll = () => {
      const max = root.scrollHeight - root.clientHeight
      root.style.setProperty("--progress", `${max > 0 ? (root.scrollTop / max) * 100 : 0}%`)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="brand" aria-label={t.nav.home}>
          {profile.initials}<span className="brand-mark">.</span>
        </a>
        <nav aria-label={t.nav.main}>
          <ul className="nav-links">
            {links.map(link => (
              <li key={link.id}>
                <a className={active === link.id ? "active" : ""} href={`#${link.id}`}>
                  {t.nav[link.id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={onToggleTheme}
            aria-label={theme === "dark" ? t.nav.themeLight : t.nav.themeDark}
            title={theme === "dark" ? t.nav.themeLight : t.nav.themeDark}>
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button className="lang-toggle" type="button" onClick={toggleLang} aria-label={t.nav.switchLang}>
            <span className={lang === "pt" ? "on" : ""}>PT</span>
            <span className={lang === "en" ? "on" : ""}>EN</span>
          </button>
        </div>
      </div>
      <div className="progress" aria-hidden="true" />
    </header>
  )
}
