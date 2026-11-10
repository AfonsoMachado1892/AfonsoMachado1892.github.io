import { profile } from "../data/profile"
import { useLang } from "../i18n/LanguageContext"

export default function Hero() {
  const { lang, t } = useLang()

  return (
    <section id="home" className="hero">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dash" />{t.hero.kicker}</p>
          <h1 className="hero-title"><span className="hello">{t.hero.introduction}</span><br />{profile.name}<span className="title-period">.</span></h1>
          <p className="hero-headline">{profile.headline[lang]}</p>
          <div className="role-list" aria-label={t.hero.rolesLabel}>
            {profile.roles[lang].map((role, i) => <span key={role}>{i > 0 && <span className="role-separator">/</span>}{role}</span>)}
          </div>
          <p className="hero-tagline">{profile.tagline[lang]}</p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">{t.hero.projects}<span aria-hidden="true"> ↗</span></a>
            <a className="btn secondary" href="#contact">{t.hero.contact}</a>
          </div>
        </div>
        <aside className="hero-panel" aria-label={t.hero.profileLabel}>
          <div className="panel-top"><span>{t.hero.profileLabel}</span><span>2027 / 01</span></div>
          <img className="panel-portrait" src="/images/afonso-portrait.jpg" alt={lang === "pt" ? "Retrato de Afonso Machado" : "Portrait of Afonso Machado"} loading="eager" fetchPriority="high" />
          <div className="panel-bottom">
            <p className="panel-title">{t.hero.profileTitle}</p>
            <p>{t.hero.profileTime}</p>
            <p>{t.hero.profileLocation}</p>
          </div>
        </aside>
      </div>
      <a className="hero-scroll" href="#about">{t.hero.scroll}<span aria-hidden="true"> ↓</span></a>
    </section>
  )
}
