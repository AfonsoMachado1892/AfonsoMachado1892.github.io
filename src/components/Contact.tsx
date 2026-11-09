import { useState } from "react"
import { profile } from "../data/profile"
import { useLang } from "../i18n/LanguageContext"

export default function Contact() {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-inner">
        <div>
          <p className="eyebrow">{t.contact.kicker}</p>
          <h2>{t.contact.subject}<span className="heading-dot">.</span></h2>
          <p className="contact-lead">{t.contact.intro}</p>
          <p className="availability"><span className="status-dot" />{t.contact.availability}</p>
        </div>
        <div className="contact-methods">
          <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<span aria-hidden="true">↗</span></a>
          <div className="contact-actions">
            <a className="btn primary" href={`mailto:${profile.email}`}>{t.contact.email} ↗</a>
            <button className="btn secondary" type="button" onClick={copyEmail}>{copied ? t.contact.copied : t.contact.copy}</button>
          </div>
          <div className="contact-socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </section>
  )
}
