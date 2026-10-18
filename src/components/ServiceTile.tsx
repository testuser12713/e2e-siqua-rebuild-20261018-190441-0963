import type { Service } from '../content/types';
import styles from './ServiceTile.module.css';

interface ServiceTileProps {
  service: Service;
}

const serviceIndex: Record<string, number> = {
  rwa: 1,
  lk: 2,
  inspektion: 3,
  planung: 4,
  steuerung: 5,
  absturz: 6,
  fehlersuche: 1,
  signal: 2,
  software: 3,
  leihgeraete: 4,
  ueberpruefung: 5,
  ersatzteile: 6,
};

const iconSize: Record<string, { width: number; height: number }> = {
  rwa: { width: 298, height: 298 },
  lk: { width: 299, height: 298 },
  inspektion: { width: 299, height: 298 },
  planung: { width: 299, height: 298 },
  steuerung: { width: 299, height: 298 },
  absturz: { width: 298, height: 299 },
  fehlersuche: { width: 299, height: 299 },
  signal: { width: 299, height: 299 },
  software: { width: 299, height: 299 },
  leihgeraete: { width: 299, height: 299 },
  ueberpruefung: { width: 298, height: 299 },
  ersatzteile: { width: 299, height: 299 },
};

export default function ServiceTile({ service }: ServiceTileProps): JSX.Element {
  const index = serviceIndex[service.id];
  const size = iconSize[service.id] ?? { width: 299, height: 299 };

  return (
    <li className={styles.tile}>
      <div className={styles.top}>
        <span className={styles.icon}>
          <img
            src={service.iconSrc}
            alt={service.iconAlt}
            width={size.width}
            height={size.height}
            loading="lazy"
            decoding="async"
          />
        </span>
        {index !== undefined ? (
          <span className={styles.index} aria-hidden="true">
            {String(index).padStart(2, '0')}
          </span>
        ) : null}
      </div>
      <h3 className={styles.title}>{service.title}</h3>
    </li>
  );
}
