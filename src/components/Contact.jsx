import { useState, useEffect } from 'react'
import styles from './Contact.module.css'
import { useLanguage } from '../contexts/LanguageContext'

const FORMSPREE_URL  = 'https://formspree.io/f/xdawyvez'
const RATE_LIMIT_KEY = 'contact_last_sent'
const RATE_LIMIT_MS  = 60_000
const EMAIL_RE       = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function getRemainingCooldown() {
  try {
    const last      = parseInt(localStorage.getItem(RATE_LIMIT_KEY) || '0', 10)
    const remaining = Math.ceil((last + RATE_LIMIT_MS - Date.now()) / 1000)
    return remaining > 0 ? remaining : 0
  } catch { return 0 }
}

export default function Contact() {
  const { t }                           = useLanguage()
  const c                               = t.contact
  const v                               = c.validation

  const [sent, setSent]                 = useState(false)
  const [error, setError]               = useState(false)
  const [loading, setLoading]           = useState(false)
  const [cooldown, setCooldown]         = useState(getRemainingCooldown)
  const [honeypot, setHoneypot]         = useState('')
  const [form, setForm]                 = useState({ name: '', email: '', message: '' })
  const [fieldErrors, setFieldErrors]   = useState({})

  // Reset sent/errors when language changes so messages appear in new language
  useEffect(() => { /* t updates automatically via context */ }, [t])

  useEffect(() => {
    if (cooldown <= 0) return
    const id = setInterval(() => {
      const remaining = getRemainingCooldown()
      setCooldown(remaining)
      if (remaining <= 0) clearInterval(id)
    }, 1000)
    return () => clearInterval(id)
  }, [cooldown])

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (fieldErrors[name]) setFieldErrors(fe => ({ ...fe, [name]: undefined }))
  }

  const validate = form => {
    const errs    = {}
    const name    = form.name.trim()
    const email   = form.email.trim()
    const message = form.message.trim()

    if (!name)             errs.name    = v.nameRequired
    else if (name.length > 100) errs.name = v.nameTooLong

    if (!email)            errs.email   = v.emailRequired
    else if (!EMAIL_RE.test(email)) errs.email = v.emailInvalid
    else if (email.length > 200)    errs.email = v.emailTooLong

    if (!message)          errs.message = v.msgRequired
    else if (message.length < 5)    errs.message = v.msgTooShort
    else if (message.length > 2000) errs.message = v.msgTooLong(message.length)

    return errs
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (honeypot) return
    if (getRemainingCooldown() > 0) return

    const errs = validate(form)
    if (Object.keys(errs).length > 0) { setFieldErrors(errs); return }

    setLoading(true)
    setError(false)
    setFieldErrors({})

    const sanitized = {
      name:    form.name.trim().slice(0, 100),
      email:   form.email.trim().slice(0, 200),
      message: form.message.trim().slice(0, 2000),
    }

    try {
      const res = await fetch(FORMSPREE_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify({ ...sanitized, _gotcha: honeypot }),
      })
      if (res.ok) {
        try { localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString()) } catch {}
        setCooldown(RATE_LIMIT_MS / 1000)
        setSent(true)
        setForm({ name: '', email: '', message: '' })
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const isBlocked = cooldown > 0 && !sent

  return (
    <section id="kontakt" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>{c.label}</div>
        <h2 className={styles.title}>{c.title}</h2>
        <p className={styles.subtitle}>{c.subtitle}</p>

        {sent ? (
          <div className={styles.success}>
            <span>✅</span>
            <p>{c.successMsg}</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>

            {/* 🍯 Honeypot */}
            <input
              type="text"
              name="_gotcha"
              value={honeypot}
              onChange={e => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className={styles.honeypot}
            />

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name">{c.nameLabel}</label>
                <input
                  id="name" name="name" type="text"
                  placeholder={c.namePlaceholder}
                  value={form.name}
                  onChange={handleChange}
                  maxLength={100}
                  aria-describedby={fieldErrors.name ? 'name-err' : undefined}
                  className={fieldErrors.name ? styles.inputError : ''}
                />
                {fieldErrors.name && (
                  <span id="name-err" className={styles.fieldError}>{fieldErrors.name}</span>
                )}
              </div>
              <div className={styles.field}>
                <label htmlFor="email">{c.emailLabel}</label>
                <input
                  id="email" name="email" type="email"
                  placeholder={c.emailPlaceholder}
                  value={form.email}
                  onChange={handleChange}
                  maxLength={200}
                  aria-describedby={fieldErrors.email ? 'email-err' : undefined}
                  className={fieldErrors.email ? styles.inputError : ''}
                />
                {fieldErrors.email && (
                  <span id="email-err" className={styles.fieldError}>{fieldErrors.email}</span>
                )}
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">
                {c.messageLabel}
                <span className={styles.charCount}>{form.message.length}/2000</span>
              </label>
              <textarea
                id="message" name="message" rows={5}
                placeholder={c.msgPlaceholder}
                value={form.message}
                onChange={handleChange}
                maxLength={2000}
                aria-describedby={fieldErrors.message ? 'msg-err' : undefined}
                className={fieldErrors.message ? styles.inputError : ''}
              />
              {fieldErrors.message && (
                <span id="msg-err" className={styles.fieldError}>{fieldErrors.message}</span>
              )}
            </div>

            {error      && <p className={styles.error}>{c.errorMsg}</p>}
            {isBlocked  && <p className={styles.rateLimit}>{c.rateLimitMsg(cooldown)}</p>}

            <button
              type="submit"
              className={styles.btn}
              disabled={loading || isBlocked}
            >
              {loading ? c.sendingBtn : isBlocked ? c.waitBtn(cooldown) : c.submitBtn}
            </button>
          </form>
        )}
      </div>

      <footer className={styles.footer}>
        <p>{c.footer(new Date().getFullYear())}</p>
      </footer>
    </section>
  )
}
