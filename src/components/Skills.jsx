import styles from './Skills.module.css'
import { useLanguage } from '../contexts/LanguageContext'

const levelClass = {
  erfaren:   'levelErfaren',
  kjent:     'levelKjent',
  utforsker: 'levelUtforsker',
}

export default function Skills() {
  const { t } = useLanguage()
  const s = t.skills

  return (
    <section id="ferdigheter" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>{s.label}</div>
        <h2 className={styles.title}>{s.title}</h2>

        {/* Forklaring */}
        <div className={styles.legend}>
          {Object.entries(s.levels).map(([key, label]) => (
            <span key={key} className={`${styles.legendBadge} ${styles[levelClass[key]]}`}>
              {label}
            </span>
          ))}
        </div>

        <div className={styles.grid}>
          {s.categories.map((cat, catIdx) => (
            <div key={catIdx} className={styles.card}>
              <h3 className={styles.catTitle}>
                <span className={styles.catIcon}>{cat.icon}</span>
                {cat.title}
              </h3>
              <div className={styles.chips}>
                {cat.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className={styles.chip}>
                    <span className={styles.chipName}>{skill.name}</span>
                    <span className={`${styles.chipBadge} ${styles[levelClass[skill.level]]}`}>
                      {s.levels[skill.level]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
