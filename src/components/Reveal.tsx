import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import styles from './Reveal.module.css';

const EASE_OUT: [number, number, number, number] = [0.22, 0.72, 0.2, 1];

interface RevealProps {
  children: ReactNode;
  delay?: number;
}

export default function Reveal({ children, delay }: RevealProps): JSX.Element {
  const reducedMotion = useReducedMotion() === true;
  const elementRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === 'undefined',
  );

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const element = elementRef.current;

    if (!element) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [reducedMotion]);

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      ref={elementRef}
      className={styles.reveal}
      initial={false}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      transition={{
        duration: 0.72,
        ease: EASE_OUT,
        delay: (delay ?? 0) / 1000,
      }}
    >
      {children}
    </motion.div>
  );
}
