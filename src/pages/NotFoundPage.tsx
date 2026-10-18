import { Link } from 'react-router-dom';
import { useDocumentMeta } from '../lib/seo';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage(): JSX.Element {
  useDocumentMeta({
    title: 'Seite nicht gefunden – SIQUA GmbH',
    description: 'Die aufgerufene Seite existiert nicht. Zurück zur Startseite der SIQUA GmbH.',
  });

  return (
    <section className={styles.notFound} aria-labelledby="page-title" data-od-id="not-found">
      <div className={styles.inner}>
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Fehler 404</p>
          <h1 className={styles.title} id="page-title">
            Seite nicht gefunden
          </h1>
          <p className={styles.text}>
            Die von Ihnen aufgerufene Seite existiert nicht oder wurde verschoben. Über die
            folgenden Links gelangen Sie zurück zur Startseite oder direkt in einen der beiden
            Geschäftsbereiche.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primary} to="/" data-od-id="not-found-home">
              <span>Zur Startseite</span>
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link className={styles.secondary} to="/rauch-waermeabzugsanlage">
              Rauch- und Wärmeabzugsanlage
            </Link>
            <Link className={styles.secondary} to="/ibak-servicestelle">
              IBAK Servicestelle
            </Link>
          </div>
          <div className={styles.links}>
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
