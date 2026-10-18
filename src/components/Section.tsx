import { useId } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './Section.module.css';

interface SectionAction {
  label: string;
  href: string;
}

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  tone?: 'light' | 'dark';
  eyebrow?: string;
  action?: SectionAction;
}

function TrailingLink({ action }: { action: SectionAction }): JSX.Element {
  const content = (
    <>
      <span>{action.label}</span>
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );

  if (action.href.startsWith('/')) {
    return (
      <Link className={styles.action} to={action.href}>
        {content}
      </Link>
    );
  }

  return (
    <a className={styles.action} href={action.href}>
      {content}
    </a>
  );
}

export default function Section({
  id,
  title,
  children,
  tone,
  eyebrow,
  action,
}: SectionProps): JSX.Element {
  const generatedId = useId();
  const headingId = `${id ?? generatedId}-title`;
  const hasHead = Boolean(title || eyebrow);

  return (
    <section
      id={id}
      className={styles.section}
      data-tone={tone}
      aria-labelledby={title ? headingId : undefined}
    >
      <div className="container">
        {hasHead ? (
          <header className={styles.head}>
            <div className={styles.heading}>
              {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
              {title ? (
                <h2 id={headingId} className={styles.title}>
                  {title}
                </h2>
              ) : null}
            </div>
            {action ? <TrailingLink action={action} /> : null}
          </header>
        ) : null}
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
}
