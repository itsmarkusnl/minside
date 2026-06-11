import styles from './About.module.css'
import { useLanguage } from '../contexts/LanguageContext'
import Icon from './Icon'

export default function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section id="om-meg" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>{a.label}</div>
        <h2 className={styles.title}>{a.title}</h2>

        <div className={styles.grid}>
          <div className={styles.text}>
            <p dangerouslySetInnerHTML={{ __html: a.p1 }} />
            <p>{a.p2}</p>
            <p>{a.p3}</p>
          </div>

          <div className={styles.facts}>
            {a.facts.map(f => (
              <div key={f.label} className={styles.factCard}>
                <span className={styles.factIcon}><Icon name={f.icon} size={22} /></span>
                <div>
                  <div className={styles.factLabel}>{f.label}</div>
                  <div className={styles.factValue}>{f.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
