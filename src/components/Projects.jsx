import styles from './Projects.module.css'
import { useLanguage } from '../contexts/LanguageContext'

function ProjectCard({ project, statusLabel }) {
  const Wrapper    = project.link ? 'a' : 'div'
  const wrapperProps = project.link
    ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Wrapper
      className={`${styles.card} ${!project.link ? styles.cardNoLink : ''}`}
      {...wrapperProps}
    >
      <div className={styles.cardTop}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
          width="28" height="28" className={styles.folderIcon}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M3 7a2 2 0 0 1 2-2h3.586a1 1 0 0 1 .707.293L10.414 6.4A1 1 0 0 0 11.121 6.693H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>
        </svg>
        <span className={`${styles.statusBadge} ${styles['status_' + project.status]}`}>
          {statusLabel}
        </span>
      </div>

      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDesc}>{project.desc}</p>

      {project.eta && <p className={styles.eta}>{project.eta}</p>}

      <div className={styles.cardFooter}>
        <div className={styles.tags}>
          {project.tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        {project.link && (
          <span className={styles.linkLabel}>
            {project.linkLabel}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
            </svg>
          </span>
        )}
      </div>
    </Wrapper>
  )
}

export default function Projects() {
  const { t } = useLanguage()
  const p = t.projects

  return (
    <section id="prosjekter" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>{p.label}</div>
        <h2 className={styles.title}>{p.title}</h2>

        <div className={styles.grid}>
          {p.items.map((item, idx) => (
            <ProjectCard
              key={idx}
              project={item}
              statusLabel={p.statusLabels[item.status]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
