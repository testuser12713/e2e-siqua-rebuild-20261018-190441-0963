import { Link } from 'react-router-dom';
import ContactCard from '../components/ContactCard';
import Reveal from '../components/Reveal';
import ServiceTile from '../components/ServiceTile';
import { ibakArea } from '../content/ibak';
import { rwaArea } from '../content/rwa';
import { useDocumentMeta } from '../lib/seo';
import styles from './IbakPage.module.css';

const SERVICE_COUNT = String(ibakArea.services.length).padStart(2, '0');

function ArrowIcon(): JSX.Element {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function IbakPage(): JSX.Element {
  useDocumentMeta({
    title: 'IBAK Servicestelle – SIQUA GmbH',
    description:
      'Die sechs Leistungen der IBAK Servicestelle der SIQUA GmbH sowie der Kontakt zu Bereichsleiter Andreas Mayr.',
  });

  return (
    <>
      <section className={styles.hero} aria-labelledby="page-title">
        <div className="container">
          <span className={styles.heroNumber} aria-hidden="true">
            02
          </span>
          <div className={styles.heroInner}>
            <div>
              <Reveal>
                <p className={styles.eyebrow}>Geschäftsbereich 02</p>
              </Reveal>
              <h1 className={styles.heroTitle} id="page-title">
                {ibakArea.title}
              </h1>
            </div>
            <Reveal delay={80}>
              <div className={styles.heroAside}>
                <p>
                  Sechs Leistungen.
                  <br />
                  Ein Ansprechpartner.
                </p>
                <span className={styles.heroRule} aria-hidden="true" />
                <div className={styles.heroCrosslinks}>
                  <a href="#kontakt">Zum Kontakt</a>
                  <Link to={rwaArea.path}>{rwaArea.title}</Link>
                  <Link to="/">Startseite</Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.services} aria-labelledby="services-title">
        <div className="container">
          <Reveal>
            <header className={styles.servicesHead}>
              <div className={styles.servicesHeading}>
                <p className={styles.eyebrow}>Leistungen</p>
                <h2 className={styles.servicesTitle} id="services-title">
                  {ibakArea.title}
                </h2>
              </div>
              <p className={styles.servicesCount}>{SERVICE_COUNT} Leistungen</p>
            </header>
          </Reveal>

          <ul
            className={styles.serviceGrid}
            aria-label="Die sechs Leistungen der IBAK Servicestelle"
          >
            {ibakArea.services.map((service, index) => (
              <Reveal key={service.id} delay={[0, 60, 120, 0, 60, 120][index]}>
                <ServiceTile service={service} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.contact} id="kontakt" aria-labelledby="contact-title">
        <div className="container">
          <Reveal>
            <header className={styles.contactHead}>
              <div>
                <p className={styles.eyebrow}>Kontakt</p>
                <h2 className={styles.contactTitle} id="contact-title">
                  Ihr Ansprechpartner
                </h2>
              </div>
            </header>
          </Reveal>

          <Reveal>
            <div className={styles.contactCard}>
              <ContactCard person={ibakArea.contact} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.crosslinks} aria-label="Weitere Seiten">
        <div className="container">
          <div className={styles.crosslinksGrid}>
            <Reveal>
              <Link className={styles.crosslink} to={rwaArea.path}>
                <span>
                  <span className={styles.crosslinkLabel}>Geschäftsbereich 01</span>
                  <span className={styles.crosslinkTitle}>{rwaArea.title}</span>
                </span>
                <ArrowIcon />
              </Link>
            </Reveal>
            <Reveal delay={60}>
              <Link className={styles.crosslink} to="/">
                <span>
                  <span className={styles.crosslinkLabel}>SIQUA GmbH</span>
                  <span className={styles.crosslinkTitle}>Zur Startseite</span>
                </span>
                <ArrowIcon />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
