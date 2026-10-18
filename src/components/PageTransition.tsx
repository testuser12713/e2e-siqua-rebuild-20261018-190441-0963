import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './PageTransition.module.css';

const EASE_OUT: [number, number, number, number] = [0.22, 0.72, 0.2, 1];

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps): JSX.Element {
  const location = useLocation();
  const reducedMotion = useReducedMotion() === true;
  const previousPath = useRef(location.pathname);
  const routeChanged = previousPath.current !== location.pathname;

  useEffect(() => {
    previousPath.current = location.pathname;
  }, [location.pathname]);

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      key={location.pathname}
      className={styles.root}
      initial={routeChanged ? { opacity: 0, y: 10 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.52, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
