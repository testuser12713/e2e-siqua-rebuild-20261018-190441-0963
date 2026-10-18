import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
}

export default function Section({ children }: SectionProps): JSX.Element {
  return <>{children}</>;
}
