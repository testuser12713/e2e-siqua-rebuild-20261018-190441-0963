import { Link, NavLink } from 'react-router-dom';
import { company } from '../content/company';
import styles from './SiteFooter.module.css';

const [brandName] = company.name.split(' ');

const legalEntries = [
  { to: '/impressum', label: 'Impressum' },
  { to: '/datenschutz', label: 'Datenschutz' },
];

interface SiteFooterProps {
  activePath?: string;
}

export default function SiteFooter({ activePath }: SiteFooterProps = {}): JSX.Element {
  const preview = activePath !== undefined;

  return (
    <footer className={styles.footer} data-od-id="site-footer">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <p className={styles.brandName}>{brandName}</p>
            <p className={styles.claim}>{company.claim}</p>
            <p className={styles.note}>
              Rauch- und Wärmeabzugsanlagen sowie IBAK-Servicestelle in St. Valentin.
            </p>
          </div>

          <div>
            <h2 className={styles.heading}>Anschrift</h2>
            <address className={styles.list}>
              <span>{company.name}</span>
              <span>{company.street}</span>
              <span>{company.city}</span>
            </address>
          </div>

          <div>
            <h2 className={styles.heading}>Kontakt</h2>
            <div className={styles.list}>
              <a href={company.phoneHref}>{company.phoneDisplay}</a>
              <a href={`mailto:${company.email}`}>E-Mail: {company.email}</a>
            </div>
          </div>

          <div className={styles.legalColumn}>
            <h2 className={styles.heading}>Rechtliches</h2>
            <div className={`${styles.list} ${styles.legalList}`}>
              {legalEntries.map((entry) =>
                preview ? (
                  <Link
                    key={entry.to}
                    to={entry.to}
                    aria-current={entry.to === activePath ? 'page' : undefined}
                  >
                    {entry.label}
                  </Link>
                ) : (
                  <NavLink key={entry.to} to={entry.to} end>
                    {entry.label}
                  </NavLink>
                ),
              )}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>UID: {company.uid}</p>
          <p>FN: {company.fn}</p>
        </div>
      </div>
    </footer>
  );
}
