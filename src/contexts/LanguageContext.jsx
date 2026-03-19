import { createContext, useContext, useState } from 'react'
import no from '../i18n/no'
import en from '../i18n/en'

const translations = { no, en }

function detectLanguage() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'no' || saved === 'en') return saved
  } catch {}
  // Fall back to browser preference
  const nav = (navigator.language || '').toLowerCase()
  if (nav.startsWith('en')) return 'en'
  return 'no'
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectLanguage)

  const setLang = newLang => {
    setLangState(newLang)
    try { localStorage.setItem('lang', newLang) } catch {}
  }

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
