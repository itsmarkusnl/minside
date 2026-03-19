import styles from './Experience.module.css'
import { useLanguage } from '../contexts/LanguageContext'

export default function Experience() {
  const { t } = useLanguage()
  const e = t.experience

  return (
    <section id="erfaring" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>{e.label}</div>
        <h2 className={styles.title}>{e.title}</h2>

        <div className={styles.timeline}>
          {e.jobs.map((exp, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.iconCol}>
                <div className={styles.iconBox}>{exp.icon}</div>
                {i < e.jobs.length - 1 && <div className={styles.line} />}
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.company}>{exp.company}</h3>
                    <p className={styles.role}>{exp.role}</p>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </div>

                <ul className={styles.points}>
                  {exp.points.map(p => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>

                <div className={styles.tags}>
                  {exp.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
