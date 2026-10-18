import { ibakArea } from '../../content/ibak';
import { rwaArea } from '../../content/rwa';
import AreaEntry from '../AreaEntry';
import ContactCard from '../ContactCard';
import ServiceTile from '../ServiceTile';
import styles from './ContentGallery.module.css';

export default function ContentGallery(): JSX.Element {
  return (
    <div className={styles.gallery}>
      <section aria-labelledby="content-gallery-services">
        <h2 id="content-gallery-services">Leistungs-Kachel</h2>
        <p>
          Die Kachel zeigt Original-Icon, Titel und die Nummer des Leistungsblocks. Hover und
          Tastatur-Fokus heben das Icon an und legen einen helleren Hintergrund unter die Kachel.
        </p>

        <h3>Rauch- und Wärmeabzugsanlage</h3>
        <ul className={styles.grid} aria-label="Leistungen Rauch- und Wärmeabzugsanlage">
          {rwaArea.services.map((service) => (
            <ServiceTile key={service.id} service={service} />
          ))}
        </ul>

        <h3>IBAK Servicestelle</h3>
        <ul className={styles.grid} aria-label="Leistungen IBAK Servicestelle">
          {ibakArea.services.map((service) => (
            <ServiceTile key={service.id} service={service} />
          ))}
        </ul>
      </section>

      <section aria-labelledby="content-gallery-contact">
        <h2 id="content-gallery-contact">Kontaktkarte</h2>
        <p>
          In einer schmalen Spalte steht das Foto über dem Text, auf einer breiten Fläche daneben.
          Hover und Fokus heben die Karte sanft an.
        </p>

        <div className={styles.cards}>
          <div className={styles.narrow}>
            <h3>Schmale Spalte</h3>
            <ContactCard person={rwaArea.contact} />
          </div>
          <div className={styles.wide}>
            <h3>Breite Fläche</h3>
            <ContactCard person={ibakArea.contact} />
          </div>
        </div>
      </section>

      <section aria-labelledby="content-gallery-areas">
        <h2 id="content-gallery-areas">Bereichs-Einstieg</h2>
        <p>
          Der Einstieg führt auf die jeweilige Bereichsseite. Hover und Tastatur-Fokus heben ihn an
          und füllen den Pfeil mit der Akzentfarbe.
        </p>

        <div className={styles.entries}>
          <AreaEntry area={rwaArea} />
          <AreaEntry area={ibakArea} />
        </div>
      </section>
    </div>
  );
}
