import ContactCard from '../components/ContactCard';
import AreaEntry from '../components/AreaEntry';
import Reveal from '../components/Reveal';
import Section from '../components/Section';
import ServiceTile from '../components/ServiceTile';
import { company } from '../content/company';
import { ibakArea } from '../content/ibak';
import { rwaArea } from '../content/rwa';
import { useDocumentMeta } from '../lib/seo';
import styles from './HomePage.module.css';

const [brandName, legalName] = company.name.split(' ');
const cityName = company.city.replace(/^\d+\s*/, '');

function ServiceGrid({
  area,
  label,
}: {
  area: typeof rwaArea;
  label: string;
}): JSX.Element {
  return (
    <ul className={styles.serviceGrid} aria-label={label}>
      {area.services.map((service, index) => (
        <Reveal key={service.id} delay={(index % 3) * 60}>
          <ServiceTile service={service} />
        </Reveal>
      ))}
    </ul>
  );
}

export default function HomePage(): JSX.Element {
  useDocumentMeta({
    title: 'SIQUA GmbH – Sicherheit und Qualität',
    description:
      'SIQUA GmbH in St. Valentin: Rauch- und Wärmeabzugsanlagen und IBAK-Servicestelle. Leistungen, Ansprechpartner und Firmendaten.',
  });

  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <Reveal>
              <p className={styles.eyebrow}>
                {company.name} · {cityName}
              </p>
            </Reveal>
            <h1 className={styles.heroTitle} id="hero-title" aria-label={company.name}>
              <span className={styles.heroBrand}>{brandName}</span>
              <span className={styles.heroLegal}>{legalName}</span>
            </h1>
            <Reveal delay={80}>
              <p className={styles.heroClaim}>{company.claim}</p>
            </Reveal>
            <Reveal delay={140}>
              <p className={styles.heroNote}>
                {company.street} · {company.city}
              </p>
            </Reveal>
          </div>

          <div className={styles.heroEntries} aria-label="Geschäftsbereiche">
            <Reveal delay={160}>
              <AreaEntry area={rwaArea} />
            </Reveal>
            <Reveal delay={220}>
              <AreaEntry area={ibakArea} />
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal>
        <Section
          id="home-rwa"
          tone="dark"
          eyebrow="Geschäftsbereich 01"
          title={rwaArea.title}
          action={{ label: 'Bereichsseite öffnen', href: rwaArea.path }}
        >
          <div className={styles.bandLayout}>
            <ServiceGrid
              area={rwaArea}
              label={`Leistungen ${rwaArea.title}`}
            />
            <div className={styles.bandContact}>
              <Reveal>
                <ContactCard person={rwaArea.contact} />
              </Reveal>
            </div>
          </div>
        </Section>
      </Reveal>

      <Reveal>
        <Section
          id="home-ibak"
          tone="light"
          eyebrow="Geschäftsbereich 02"
          title={ibakArea.title}
          action={{ label: 'Bereichsseite öffnen', href: ibakArea.path }}
        >
          <div className={styles.bandLayout}>
            <ServiceGrid
              area={ibakArea}
              label={`Leistungen ${ibakArea.title}`}
            />
            <div className={styles.bandContact}>
              <Reveal>
                <ContactCard person={ibakArea.contact} />
              </Reveal>
            </div>
          </div>
        </Section>
      </Reveal>

      <section className={styles.companySection} aria-labelledby="company-claim">
        <div className={`container ${styles.companyGrid}`}>
          <Reveal>
            <div>
              <p className={styles.eyebrow}>{company.name}</p>
              <h2 className={styles.companyClaim} id="company-claim">
                {company.claim}
              </h2>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className={styles.companyData}>
              <div className={styles.companyGroup}>
                <p className={styles.companyLabel}>Anschrift</p>
                <address className={styles.companyValue}>
                  <span>{company.name}</span>
                  <span>{company.street}</span>
                  <span>{company.city}</span>
                </address>
              </div>
              <div className={styles.companyGroup}>
                <p className={styles.companyLabel}>Kontakt</p>
                <p className={styles.companyValue}>
                  <a href={company.phoneHref}>{company.phoneDisplay}</a>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </p>
              </div>
              <div className={`${styles.companyGroup} ${styles.companyGroupWide}`}>
                <p className={styles.companyLabel}>Firmendaten</p>
                <p className={styles.companyLegal}>
                  <span>UID: {company.uid}</span>
                  <span>FN: {company.fn}</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
