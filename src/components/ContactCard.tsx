import type { ContactPerson } from '../content/types';
import styles from './ContactCard.module.css';

interface ContactCardProps {
  person: ContactPerson;
}

export default function ContactCard({ person }: ContactCardProps): JSX.Element {
  return (
    <div className={styles.frame}>
      <article className={styles.card}>
        <div className={styles.photoWrap}>
          <img
            className={styles.photo}
            src={person.photoSrc}
            alt={person.photoAlt}
            width={600}
            height={600}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className={styles.body}>
          <p className={styles.label}>
            <span className={styles.labelCompact}>Kontakt</span>
            <span className={styles.labelWide}>Bereichsleitung</span>
          </p>
          <h3 className={styles.name}>{person.name}</h3>
          <p className={styles.role}>{person.role}</p>
          <div className={styles.links}>
            <a className={styles.link} href={`mailto:${person.email}`}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="m4 7 8 6 8-6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{person.email}</span>
            </a>
            <a className={styles.link} href={person.phoneHref}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{person.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
