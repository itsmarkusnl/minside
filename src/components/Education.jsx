import styles from './Education.module.css'
import { useLanguage } from '../contexts/LanguageContext'

export default function Education() {
  const { t } = useLanguage()
  const e = t.education

  return (
    <section id="utdanning" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>{e.label}</div>
        <h2 className={styles.title}>{e.title}</h2>

        <div className={styles.cards}>
          {e.schools.map((edu, idx) => (
            <div key={idx} className={styles.card} style={{ '--accent-color': edu.color }}>

              {/* Toppbanner */}
              <div className={styles.banner}>
                <div className={styles.bannerLeft}>
                  <span className={styles.schoolIcon}>{edu.icon}</span>
                  <div>
                    <p className={styles.schoolShort}>{edu.short}</p>
                    <p className={styles.schoolFull}>{edu.school}</p>
                  </div>
                </div>
                <span className={`${styles.badge} ${edu.status === 'active' ? styles.badgeActive : styles.badgeDone}`}>
                  {edu.status === 'active' ? `🟢 ${e.statusActive}` : `✅ ${e.statusDone}`}
                </span>
              </div>

              {/* Hoveddel */}
              <div className={styles.body}>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <div className={styles.meta}>
                  <span>📅 {edu.period}</span>
                  <span>📍 {edu.location}</span>
                </div>
                <p className={styles.description}>{edu.description}</p>

                {/* Fagområder */}
                <div className={styles.subjects}>
                  <p className={styles.subjectsLabel}>{e.subjectsLabel}</p>
                  <div className={styles.subjectGrid}>
                    {edu.subjects.map(s => (
                      <div key={s.name} className={styles.subject}>
                        <span>{s.icon}</span>
                        <span>{s.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlight-boks */}
                {edu.highlight && (
                  <div className={styles.highlight}>
                    <p className={styles.highlightLabel}>🏆 {edu.highlight.label}</p>
                    <p className={styles.highlightText}>{edu.highlight.text}</p>
                    <div className={styles.highlightTags}>
                      {edu.highlight.tags.map(tag => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
