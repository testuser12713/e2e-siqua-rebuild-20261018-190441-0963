import { Link } from 'react-router-dom';
import Prose from '../components/Prose';
import Reveal from '../components/Reveal';
import Section from '../components/Section';
import { company } from '../content/company';
import { useDocumentMeta } from '../lib/seo';
import styles from './ImprintPage.module.css';

const PENDING = 'Noch vom Kunden zu liefern';

function PendingBadge({ label = PENDING }: { label?: string }): JSX.Element {
  return <span className={styles.badge}>{label}</span>;
}

export default function ImprintPage(): JSX.Element {
  useDocumentMeta({
    title: 'Impressum – SIQUA GmbH',
    description:
      'Impressum und Offenlegung der SIQUA GmbH gemäß § 5 ECG, § 14 UGB und § 25 MedienG.',
  });

  const phoneNumber = company.phoneDisplay.replace(/^Tel\.:\s*/, '');

  return (
    <div>
      <section className={styles.hero} aria-labelledby="page-title" data-od-id="imprint-hero">
        <div className="container">
          <Reveal>
            <p className={styles.eyebrow}>Rechtliches</p>
          </Reveal>
          <h1 className={styles.title} id="page-title">
            Impressum
          </h1>
          <Reveal delay={60}>
            <p className={styles.lede}>
              Angaben gemäß § 5 ECG, § 14 UGB und Offenlegung nach § 25 MedienG.
            </p>
          </Reveal>
        </div>
      </section>

      <div className={styles.body}>
        <Section>
          <div className={styles.layout}>
            <Prose>
              <section aria-labelledby="provider-title" data-od-id="imprint-provider">
                <Reveal>
                  <h2 id="provider-title">Medieninhaber und Diensteanbieter</h2>
                  <dl>
                    <div>
                      <dt>Firma</dt>
                      <dd>{company.name}</dd>
                    </div>
                    <div>
                      <dt>Rechtsform</dt>
                      <dd>Gesellschaft mit beschränkter Haftung (GmbH)</dd>
                    </div>
                    <div>
                      <dt>Sitz</dt>
                      <dd>{company.city}, Österreich</dd>
                    </div>
                    <div>
                      <dt>Anschrift</dt>
                      <dd>
                        {company.street}, {company.city}
                      </dd>
                    </div>
                    <div>
                      <dt>Telefon</dt>
                      <dd>
                        <a href={company.phoneHref}>{phoneNumber}</a>
                      </dd>
                    </div>
                    <div>
                      <dt>E-Mail</dt>
                      <dd>
                        <a href={`mailto:${company.email}`}>{company.email}</a>
                      </dd>
                    </div>
                    <div>
                      <dt>UID</dt>
                      <dd>{company.uid}</dd>
                    </div>
                    <div>
                      <dt>Firmenbuchnummer</dt>
                      <dd>FN {company.fn}</dd>
                    </div>
                    <div>
                      <dt>Firmenbuchgericht</dt>
                      <dd>
                        <PendingBadge />
                      </dd>
                    </div>
                    <div>
                      <dt>Unternehmensgegenstand / Branche</dt>
                      <dd>
                        <PendingBadge />
                      </dd>
                    </div>
                  </dl>
                  <p className={styles.note}>
                    <PendingBadge label="Angabe ausständig" />
                    <span>
                      Die Kennzeichnung bedeutet, dass die Angabe weder in der Spezifikation
                      noch im Kundenmaterial enthalten ist.
                    </span>
                  </p>
                </Reveal>
              </section>

              <section aria-labelledby="membership-title" data-od-id="imprint-membership">
                <Reveal>
                  <h2 id="membership-title">Mitgliedschaft und Aufsichtsbehörde</h2>
                  <dl>
                    <div>
                      <dt>Wirtschaftskammer</dt>
                      <dd>
                        <PendingBadge />
                      </dd>
                    </div>
                    <div>
                      <dt>Aufsichtsbehörde</dt>
                      <dd>
                        <PendingBadge label="Noch vom Kunden zu liefern, soweit für die Branche einschlägig" />
                      </dd>
                    </div>
                  </dl>
                </Reveal>
              </section>

              <section aria-labelledby="disclosure-title" data-od-id="imprint-disclosure">
                <Reveal>
                  <h2 id="disclosure-title">Offenlegung nach § 25 MedienG</h2>
                  <p>
                    <strong>Medieninhaber:</strong> {company.name}, {company.street},{' '}
                    {company.city}.
                  </p>
                  <p>
                    <strong>Unternehmensgegenstand:</strong> <PendingBadge />
                  </p>
                  <p>
                    <strong>Grundlegende Richtung:</strong> Unternehmenswebsite der{' '}
                    {company.name} mit Informationen zu den Geschäftsbereichen Rauch- und
                    Wärmeabzugsanlage sowie IBAK-Servicestelle und zu den Kontaktmöglichkeiten.
                  </p>
                  <p>
                    <strong>Tätigkeitsbereiche:</strong> Rauch- und Wärmeabzugsanlage,
                    IBAK-Servicestelle.
                  </p>
                  <p className={styles.note}>
                    <PendingBadge label="Hinweis" />
                    <span>
                      Fehlende Pflichtangaben werden vor Veröffentlichung durch den Kunden
                      ergänzt und nicht durch Annahmen ersetzt.
                    </span>
                  </p>
                </Reveal>
              </section>

              <section aria-labelledby="imprint-links-title" data-od-id="imprint-links">
                <Reveal>
                  <h2 id="imprint-links-title">Weitere Rechtstexte</h2>
                  <p>
                    Informationen zur Verarbeitung personenbezogener Daten finden Sie in der{' '}
                    <Link to="/datenschutz">Datenschutzerklärung</Link>.
                  </p>
                </Reveal>
              </section>
            </Prose>

            <Reveal delay={80}>
              <aside
                className={styles.aside}
                aria-labelledby="imprint-contact-title"
                data-od-id="imprint-aside"
              >
                <h2 id="imprint-contact-title">Kontakt zum Unternehmen</h2>
                <p>
                  {company.name}
                  <br />
                  {company.street}
                  <br />
                  {company.city}
                </p>
                <div className={styles.asideLinks}>
                  <a href={company.phoneHref}>{company.phoneDisplay}</a>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                  <Link to="/datenschutz">Datenschutz</Link>
                  <Link to="/">Zur Startseite</Link>
                </div>
                <a className={styles.button} href={`mailto:${company.email}`}>
                  <span>E-Mail schreiben</span>
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
                </a>
              </aside>
            </Reveal>
          </div>
        </Section>
      </div>
    </div>
  );
}
