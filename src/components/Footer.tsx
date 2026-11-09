import { profile } from "../data/profile"
import { useLang } from "../i18n/LanguageContext"

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name} <span className="footer-separator">·</span> {t.footer.built}</p>
        <a href="#home">{t.footer.top} ↑</a>
      </div>
    </footer>
  )
}
