import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { useLanguage } from '../contexts/LanguageContext'

function useTheme() {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      return saved ? saved === 'dark' : true
    } catch { return true }
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {}
  }, [dark])

  return [dark, setDark]
}

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [dark, setDark]           = useTheme()
  const { lang, setLang, t }      = useLanguage()
  const nav                       = t.nav

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const toggleLang = () => setLang(lang === 'no' ? 'en' : 'no')

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#topp" className={styles.logo}>
        <span className={styles.logoAccent}>M</span>arkus
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {/* Tema + språk rad øverst i mobilmeny */}
        <li className={styles.themeRow}>
          <span className={styles.themeLabel}>
            {dark ? `🌙 ${nav.darkMode}` : `☀️ ${nav.lightMode}`}
          </span>
          <div className={styles.themeRowControls}>
            <button
              className={styles.langBtn}
              onClick={toggleLang}
              aria-label={nav.ariaLang}
            >
              {nav.switchLang}
            </button>
            <button
              className={`${styles.toggle} ${dark ? styles.toggleDark : styles.toggleLight}`}
              onClick={() => setDark(d => !d)}
              aria-label={nav.ariaToggleTheme}
            >
              <span className={styles.toggleThumb} />
            </button>
          </div>
        </li>

        {nav.links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          </li>
        ))}
      </ul>

      {/* Høyre side — desktop */}
      <div className={styles.navRight}>
        <button
          className={styles.langBtn}
          onClick={toggleLang}
          aria-label={nav.ariaLang}
        >
          {nav.switchLang}
        </button>

        <button
          className={`${styles.toggle} ${dark ? styles.toggleDark : styles.toggleLight}`}
          onClick={() => setDark(d => !d)}
          aria-label={nav.ariaToggleTheme}
          title={dark ? nav.lightMode : nav.darkMode}
        >
          <span className={styles.toggleThumb} />
        </button>

        <a
          href="/CV_MarkusNipenLarsen.pdf"
          download
          className={styles.cvBtn}
          aria-label={nav.cvAriaLabel}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 8-3-3m3 3 3-3M4 20h16"/>
          </svg>
          CV
        </a>
      </div>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen(o => !o)}
        aria-label={nav.ariaMenu}
        aria-expanded={menuOpen}
      >
        <span className={menuOpen ? styles.burgerX1 : ''} />
        <span className={menuOpen ? styles.burgerX2 : ''} />
        <span className={menuOpen ? styles.burgerX3 : ''} />
      </button>
    </nav>
  )
}
