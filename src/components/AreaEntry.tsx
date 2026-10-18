import { Link } from 'react-router-dom';
import type { BusinessArea } from '../content/types';
import styles from './AreaEntry.module.css';

interface AreaEntryProps {
  area: BusinessArea;
}

const countWords = ['Null', 'Ein', 'Zwei', 'Drei', 'Vier', 'Fünf', 'Sechs', 'Sieben', 'Acht', 'Neun', 'Zehn'];

export default function AreaEntry({ area }: AreaEntryProps): JSX.Element {
  const variant = area.slug === 'rauch-waermeabzugsanlage' ? 'rwa' : 'ibak';
  const index = area.slug === 'rauch-waermeabzugsanlage' ? '01' : '02';
  const count = area.services.length;
  const meta = `${countWords[count] ?? String(count)} Leistungen`;

  return (
    <Link className={styles.entry} to={area.path} data-variant={variant}>
      <span className={styles.index}>{index}</span>
      <span className={styles.content}>
        <span className={styles.title}>{area.title}</span>
        <span className={styles.meta}>{meta}</span>
      </span>
      <span className={styles.arrow} aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" focusable="false">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}
