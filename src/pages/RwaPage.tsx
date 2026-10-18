import { Link } from 'react-router-dom';
import ContactCard from '../components/ContactCard';
import Reveal from '../components/Reveal';
import Section from '../components/Section';
import ServiceTile from '../components/ServiceTile';
import { company } from '../content/company';
import { rwaArea } from '../content/rwa';
import { useDocumentMeta } from '../lib/seo';
import styles from './RwaPage.module.css';

const serviceDelays = [0, 60, 120, 0, 60, 120];

function CrosslinkArrow(): JSX.Element {
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

export default function RwaPage(): JSX.Element {
  useDocumentMeta({
    title: 'Rauch- und Wärmeabzugsanlage – SIQUA GmbH',
    description:
      'Die sechs Leistungen der SIQUA GmbH im Bereich Rauch- und Wärmeabzugsanlage sowie der Kontakt zu Bereichsleiter Christian Schiller.',
  });

  return (
    <>
      <section className={styles.hero} aria-labelledby="rwa-page-title">
        <div className={`container ${styles.heroContainer}`}>
          <span className={styles.heroNumber} aria-hidden="true">
            01
          </span>
          <div className={styles.heroInner}>
            <div>
              <Reveal>
                <p className={styles.eyebrowOnDark}>Geschäftsbereich 01</p>
              </Reveal>
              <h1 className={styles.heroTitle} id="rwa-page-title">
                {rwaArea.title}
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
                <div className={styles.heroLinks}>
                  <a href="#kontakt">Zum Kontakt</a>
                  <Link to="/ibak-servicestelle">IBAK-Servicestelle</Link>
                  <Link to="/">Startseite</Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className={styles.servicesSection}>
        <Section id="leistungen">
          <Reveal>
            <header className={styles.servicesHead}>
              <div>
                <p className={styles.eyebrow}>Leistungen</p>
                <h2 className={styles.servicesTitle} id="rwa-services-title">
                  {rwaArea.title}
                </h2>
              </div>
              <p className={styles.servicesCount}>
                {String(rwaArea.services.length).padStart(2, '0')} Leistungen
              </p>
            </header>
          </Reveal>

          <div
            className={styles.serviceGrid}
            role="list"
            aria-label="Die sechs Leistungen im Bereich Rauch- und Wärmeabzugsanlage"
          >
            {rwaArea.services.map((service, index) => (
              <Reveal key={service.id} delay={serviceDelays[index] ?? 0}>
                <ServiceTile service={service} />
              </Reveal>
            ))}
          </div>
        </Section>
      </div>

      <div className={styles.contactSection}>
        <Section id="kontakt">
          <Reveal>
            <header className={styles.contactHead}>
              <div>
                <p className={styles.eyebrow}>Kontakt</p>
                <h2 className={styles.contactTitle} id="rwa-contact-title">
                  Ihr Ansprechpartner
                </h2>
              </div>
            </header>
          </Reveal>

          <Reveal>
            <div className={styles.cardWrap}>
              <ContactCard person={rwaArea.contact} />
            </div>
          </Reveal>
        </Section>
      </div>

      <section className={styles.crosslinks} aria-label="Weitere Seiten">
        <div className="container">
          <div className={styles.crosslinksGrid}>
            <Reveal>
              <Link className={styles.crosslink} to="/ibak-servicestelle">
                <span>
                  <span className={styles.crosslinkLabel}>Geschäftsbereich 02</span>
                  <span className={styles.crosslinkTitle}>IBAK Servicestelle</span>
                </span>
                <CrosslinkArrow />
              </Link>
            </Reveal>
            <Reveal delay={60}>
              <Link className={styles.crosslink} to="/">
                <span>
                  <span className={styles.crosslinkLabel}>{company.name}</span>
                  <span className={styles.crosslinkTitle}>Zur Startseite</span>
                </span>
                <CrosslinkArrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
