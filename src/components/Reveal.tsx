import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
}

export default function Reveal({ children }: RevealProps): JSX.Element {
  return <>{children}</>;
}
