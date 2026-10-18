import { Link } from 'react-router-dom';
import Prose from '../components/Prose';
import Reveal from '../components/Reveal';
import Section from '../components/Section';
import { company } from '../content/company';
import { useDocumentMeta } from '../lib/seo';
import styles from './PrivacyPage.module.css';

const phoneNumber = company.phoneDisplay.replace(/^Tel\.:\s*/, '');

export default function PrivacyPage(): JSX.Element {
  useDocumentMeta({
    title: 'Datenschutz – SIQUA GmbH',
    description:
      'Informationen zur Verarbeitung personenbezogener Daten gemäß Art. 13 DSGVO bei der SIQUA GmbH.',
  });

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="page-title" data-od-id="privacy-hero">
        <div className="container">
          <Reveal>
            <p className={styles.eyebrow}>Rechtliches</p>
          </Reveal>
          <h1 className={styles.title} id="page-title">
            Datenschutz
          </h1>
          <Reveal delay={60}>
            <p className={styles.lede}>
              Informationen zur Verarbeitung personenbezogener Daten gemäß Art. 13 DSGVO.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className={styles.layout}>
          <div className={styles.content}>
            <Prose>
              <section aria-labelledby="controller-title" data-od-id="privacy-controller">
                <Reveal>
                  <h2 id="controller-title">Verantwortlicher</h2>
                  <p>
                    Verantwortlich für die Verarbeitung personenbezogener Daten im Zusammenhang
                    mit dieser Website ist:
                  </p>
                  <dl>
                    <div>
                      <dt>Firma</dt>
                      <dd>{company.name}</dd>
                    </div>
                    <div>
                      <dt>Anschrift</dt>
                      <dd>
                        {company.street}, {company.city}, Österreich
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
                  </dl>
                </Reveal>
              </section>

              <section aria-labelledby="processing-title" data-od-id="privacy-processing">
                <Reveal>
                  <h2 id="processing-title">Verarbeitungen auf dieser Website</h2>
                  <p>
                    Beim Aufruf der Website werden technisch erforderliche Daten verarbeitet. Die
                    folgende Übersicht benennt die Verarbeitung, ihren Zweck, die Rechtsgrundlage
                    und die Speicherdauer.
                  </p>
                  <div className={styles.tableWrap}>
                    <table>
                      <thead>
                        <tr>
                          <th scope="col">Verarbeitung</th>
                          <th scope="col">Zweck</th>
                          <th scope="col">Rechtsgrundlage</th>
                          <th scope="col">Speicherdauer</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Verarbeitung">
                            Hosting inkl. Server-Logfiles mit IP-Adresse
                          </td>
                          <td data-label="Zweck">
                            Technische Bereitstellung, Stabilität und Sicherheit der Website;
                            Nachvollziehbarkeit technischer Zugriffe.
                          </td>
                          <td data-label="Rechtsgrundlage">
                            Art. 6 Abs. 1 lit. f DSGVO — berechtigtes Interesse an einem sicheren
                            und funktionsfähigen Webangebot.
                          </td>
                          <td data-label="Speicherdauer">
                            <span className={styles.badgePending}>
                              Noch vom Kunden zu liefern
                            </span>
                            <span className={styles.note}>
                              Die konkrete Dauer der Server-Logfiles wird durch die
                              Hosting-Konfiguration bestimmt.
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Reveal>
              </section>

              <section aria-labelledby="recipients-title" data-od-id="privacy-recipients">
                <Reveal>
                  <h2 id="recipients-title">Empfänger und Drittlandübermittlung</h2>
                  <dl>
                    <div>
                      <dt>Hosting-Dienstleister</dt>
                      <dd>
                        <span className={styles.badgePending}>Noch vom Kunden zu liefern</span>
                      </dd>
                    </div>
                    <div>
                      <dt>Auftragsverarbeitung</dt>
                      <dd>
                        <span className={styles.badgePending}>Noch vom Kunden zu liefern</span>
                      </dd>
                    </div>
                    <div>
                      <dt>Drittlandübermittlung</dt>
                      <dd>
                        <span className={styles.badgePending}>Noch vom Kunden zu liefern</span>
                      </dd>
                    </div>
                  </dl>
                  <p className={styles.note}>
                    <span className={styles.badgePending}>Angabe ausständig</span>
                    <span>
                      Angaben zum Hosting-Anbieter, zu Auftragsverarbeitern und zu einer
                      allfälligen Übermittlung in Drittländer sind nicht in der Spezifikation
                      enthalten und werden vor Veröffentlichung ergänzt.
                    </span>
                  </p>
                </Reveal>
              </section>

              <section aria-labelledby="cookies-title" data-od-id="privacy-storage">
                <Reveal>
                  <h2 id="cookies-title">Cookies und lokale Speicherung</h2>
                  <p>
                    Diese Website setzt keine Cookies. Es werden keine Besucherdaten in{' '}
                    <span className={styles.mono}>localStorage</span> oder{' '}
                    <span className={styles.mono}>sessionStorage</span> gespeichert. Es werden
                    ausschließlich die lokal ausgelieferten Dateien geladen.
                  </p>
                  <p>
                    Ein Kontaktformular besteht nicht. Die Kontaktaufnahme erfolgt über{' '}
                    <span className={styles.mono}>mailto:</span>- und{' '}
                    <span className={styles.mono}>tel:</span>-Links.
                  </p>
                </Reveal>
              </section>

              <section aria-labelledby="rights-title" data-od-id="privacy-rights">
                <Reveal>
                  <h2 id="rights-title">Ihre Rechte</h2>
                  <p>Ihnen stehen nach der DSGVO insbesondere folgende Rechte zu:</p>
                  <ul>
                    <li>Auskunft über die verarbeiteten personenbezogenen Daten (Art. 15 DSGVO)</li>
                    <li>Berichtigung unrichtiger oder unvollständiger Daten (Art. 16 DSGVO)</li>
                    <li>Löschung personenbezogener Daten (Art. 17 DSGVO)</li>
                    <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                    <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                    <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                  </ul>
                  <p>
                    Zur Ausübung dieser Rechte können Sie sich jederzeit an{' '}
                    <a href={`mailto:${company.email}`}>{company.email}</a> wenden.
                  </p>
                </Reveal>
              </section>

              <section aria-labelledby="complaint-title" data-od-id="privacy-complaint">
                <Reveal>
                  <h2 id="complaint-title">Beschwerderecht</h2>
                  <p>
                    Sie haben das Recht, sich bei der Österreichischen Datenschutzbehörde zu
                    beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
                    personenbezogenen Daten gegen die DSGVO verstößt.
                  </p>
                  <p className={styles.note}>
                    <span className={styles.badge}>Stand</span>
                    <span>Oktober 2026</span>
                  </p>
                </Reveal>
              </section>
            </Prose>
          </div>

          <div className={styles.asideColumn}>
            <Reveal delay={80}>
              <aside className={styles.aside} aria-labelledby="privacy-aside-title">
                <h2 id="privacy-aside-title">Fragen zum Datenschutz</h2>
                <p>
                  Wenden Sie sich an die {company.name}. Die Kontaktdaten des Verantwortlichen
                  stehen auch im Impressum.
                </p>
                <div className={styles.asideLinks}>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                  <a href={company.phoneHref}>Tel.: {phoneNumber}</a>
                  <Link to="/impressum">Impressum</Link>
                  <Link to="/">Zur Startseite</Link>
                </div>
                <a className={styles.asideButton} href={`mailto:${company.email}`}>
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
        </div>
      </Section>
    </div>
  );
}
