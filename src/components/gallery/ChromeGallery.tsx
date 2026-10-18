import SiteFooter from '../SiteFooter';
import SiteHeader from '../SiteHeader';

const headerStates = [
  { path: '/', label: 'Start aktiv' },
  { path: '/rauch-waermeabzugsanlage', label: 'Rauch- und Wärmeabzugsanlage aktiv' },
  { path: '/ibak-servicestelle', label: 'IBAK-Servicestelle aktiv' },
];

const footerStates = [
  { path: '/', label: 'Ohne aktiven Rechtliches-Eintrag' },
  { path: '/impressum', label: 'Impressum aktiv' },
  { path: '/datenschutz', label: 'Datenschutz aktiv' },
];

export default function ChromeGallery(): JSX.Element {
  return (
    <div>
      <section aria-labelledby="gallery-header-title" style={{ marginTop: '3rem' }}>
        <h2 id="gallery-header-title">SiteHeader</h2>
        <p>
          Marke, drei Navigationseinträge und der markierte aktuelle Eintrag. Der Menü-Button
          erscheint bei 920 px und schmaler; das letzte Beispiel zeigt das geöffnete Panel.
        </p>

        {headerStates.map((state) => (
          <div key={state.path} style={{ marginTop: '2rem' }}>
            <p style={{ marginBottom: '0.5rem' }}>
              <strong>{state.label}</strong>
            </p>
            <SiteHeader activePath={state.path} />
          </div>
        ))}

        <div style={{ marginTop: '2rem' }}>
          <p style={{ marginBottom: '0.5rem' }}>
            <strong>Menü geöffnet (schmale Viewports)</strong>
          </p>
          <SiteHeader activePath="/" defaultMenuOpen />
        </div>
      </section>

      <section aria-labelledby="gallery-footer-title" style={{ marginTop: '3rem' }}>
        <h2 id="gallery-footer-title">SiteFooter</h2>
        <p>
          Firmendaten, Kontakt- und Rechtliches-Links sowie der markierte aktuelle Eintrag der
          Rechtliches-Spalte.
        </p>

        {footerStates.map((state) => (
          <div key={state.path} style={{ marginTop: '2rem' }}>
            <p style={{ marginBottom: '0.5rem' }}>
              <strong>{state.label}</strong>
            </p>
            <SiteFooter activePath={state.path} />
          </div>
        ))}
      </section>
    </div>
  );
}
