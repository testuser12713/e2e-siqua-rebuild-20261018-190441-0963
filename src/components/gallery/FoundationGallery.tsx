import PageTransition from '../PageTransition';
import Prose from '../Prose';
import Reveal from '../Reveal';
import Section from '../Section';

export default function FoundationGallery(): JSX.Element {
  return (
    <div>
      <h2>Grundbausteine</h2>
      <p>
        Abschnitt, Fließtext, Einblenden und Seitenwechsel in allen Zuständen der
        freigegebenen Screens.
      </p>

      <Section
        id="gallery-band-rwa"
        tone="dark"
        eyebrow="Geschäftsbereich 01"
        title="Rauch- und Wärmeabzugsanlage"
        action={{ label: 'Bereichsseite öffnen', href: '/rauch-waermeabzugsanlage' }}
      >
        <p>Dunkler Abschnitt mit Überschrift, Eyebrow und weiterführendem Link.</p>
      </Section>

      <Section
        id="gallery-band-ibak"
        tone="light"
        eyebrow="Geschäftsbereich 02"
        title="IBAK Servicestelle"
        action={{ label: 'Bereichsseite öffnen', href: '/ibak-servicestelle' }}
      >
        <p>Heller Abschnitt mit Überschrift, Eyebrow und weiterführendem Link.</p>
      </Section>

      <Section id="gallery-section-plain">
        <p>Abschnitt ohne Überschrift, nur mit Container und vertikalem Abstand.</p>
      </Section>

      <article aria-labelledby="gallery-prose-title">
        <h2 id="gallery-prose-title">Fließtext</h2>
        <Prose>
          <section aria-labelledby="gallery-prose-controller">
            <h2 id="gallery-prose-controller">Verantwortlicher</h2>
            <p>
              Verantwortlich für die Verarbeitung personenbezogener Daten im
              Zusammenhang mit dieser Website ist die SIQUA GmbH. Ergänzende
              Hinweise stehen in der <a href="/datenschutz">Datenschutzerklärung</a>.
            </p>
            <dl>
              <div>
                <dt>Firma</dt>
                <dd>SIQUA GmbH</dd>
              </div>
              <div>
                <dt>Anschrift</dt>
                <dd>Langenharter Straße 8, 4300 St. Valentin, Österreich</dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+43743552025">0 7435 / 52 025</a>
                </dd>
              </div>
              <div>
                <dt>E-Mail</dt>
                <dd>
                  <a href="mailto:office@siqua-components.at">
                    office@siqua-components.at
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section aria-labelledby="gallery-prose-rights">
            <h2 id="gallery-prose-rights">Ihre Rechte</h2>
            <h3>Übersicht der Betroffenenrechte</h3>
            <p>Ihnen stehen nach der DSGVO insbesondere folgende Rechte zu:</p>
            <ul>
              <li>Auskunft über die verarbeiteten personenbezogenen Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger oder unvollständiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung personenbezogener Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <h3>Verarbeitungen auf dieser Website</h3>
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
                  <td data-label="Verarbeitung">Hosting inkl. Server-Logfiles mit IP-Adresse</td>
                  <td data-label="Zweck">
                    Technische Bereitstellung, Stabilität und Sicherheit der Website.
                  </td>
                  <td data-label="Rechtsgrundlage">
                    Art. 6 Abs. 1 lit. f DSGVO — berechtigtes Interesse an einem sicheren
                    Webangebot.
                  </td>
                  <td data-label="Speicherdauer">
                    Die konkrete Dauer wird durch die Hosting-Konfiguration bestimmt.
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </Prose>
      </article>

      <article aria-labelledby="gallery-reveal-title">
        <h2 id="gallery-reveal-title">Einblenden</h2>
        <Reveal>
          <p>Beim Scrollen wird dieser Abschnitt weich eingeblendet.</p>
        </Reveal>
        <Reveal delay={60}>
          <p>Gestaffelte Einblendung mit 60 ms Verzögerung.</p>
        </Reveal>
        <Reveal delay={120}>
          <p>Gestaffelte Einblendung mit 120 ms Verzögerung.</p>
        </Reveal>
      </article>

      <article aria-labelledby="gallery-transition-title">
        <h2 id="gallery-transition-title">Seitenwechsel</h2>
        <PageTransition>
          <div>
            <p>Dieser Inhalt wechselt mit einer animierten Überblendung.</p>
          </div>
        </PageTransition>
      </article>
    </div>
  );
}
