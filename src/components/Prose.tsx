import type { ReactNode } from 'react';
import styles from './Prose.module.css';

interface ProseProps {
  children: ReactNode;
}

export default function Prose({ children }: ProseProps): JSX.Element {
  return <div className={styles.prose}>{children}</div>;
}
