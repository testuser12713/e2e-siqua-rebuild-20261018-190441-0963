import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { company } from '../content/company';
import { ibakArea } from '../content/ibak';
import { rwaArea } from '../content/rwa';
import styles from './SiteHeader.module.css';

const MOBILE_QUERY = '(max-width: 920px)';

const [brandName, brandLegal] = company.name.split(' ');

const navigation = [
  { to: '/', label: 'Start', index: '01', odId: 'nav-start', end: true },
  { to: rwaArea.path, label: rwaArea.title, index: '02', odId: 'nav-rwa', end: false },
  { to: ibakArea.path, label: 'IBAK-Servicestelle', index: '03', odId: 'nav-ibak', end: false },
];

interface SiteHeaderProps {
  defaultMenuOpen?: boolean;
  activePath?: string;
}

export default function SiteHeader({
  defaultMenuOpen = false,
  activePath,
}: SiteHeaderProps = {}): JSX.Element {
  const navId = useId();
  const [isOpen, setIsOpen] = useState(defaultMenuOpen);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const userToggled = useRef(false);
  const preview = activePath !== undefined;
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);

  const closeMenu = useCallback((returnFocus: boolean) => {
    setIsOpen(false);

    if (returnFocus) {
      toggleRef.current?.focus();
    }
  }, []);

  const handleToggle = () => {
    userToggled.current = true;
    setIsOpen((current) => !current);
  };

  useEffect(() => {
    if (!isOpen || !userToggled.current) {
      return;
    }

    document.body.classList.add('menu-open');
    const background = Array.from(document.querySelectorAll('main, footer'));
    background.forEach((element) => element.setAttribute('inert', ''));

    return () => {
      document.body.classList.remove('menu-open');
      background.forEach((element) => element.removeAttribute('inert'));
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeMenu]);

  useEffect(() => {
    if (isOpen && userToggled.current) {
      navRef.current?.querySelector<HTMLAnchorElement>('a')?.focus({ preventScroll: true });
    }
  }, [isOpen]);

  useEffect(() => {
    const query = window.matchMedia(MOBILE_QUERY);

    const handleChange = (event: MediaQueryListEvent) => {
      if (!event.matches) {
        setIsOpen(false);
      }
    };

    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (previousPath.current !== pathname) {
      previousPath.current = pathname;
      setIsOpen(false);
    }
  }, [pathname]);

  return (
    <>
      <header
        className={styles.header}
        data-od-id="site-header"
        data-menu-open={isOpen ? '' : undefined}
      >
        <div className={`container ${styles.inner}`}>
          <Link
            className={styles.brand}
            to="/"
            aria-label={`${company.name} – zur Startseite`}
            onClick={() => setIsOpen(false)}
            data-od-id="brand-home"
          >
            <span className={styles.mark} aria-hidden="true" />
            <span className={styles.type}>
              <span className={styles.name}>{brandName}</span>
              <span className={styles.legal}>{brandLegal}</span>
            </span>
          </Link>

          <button
            ref={toggleRef}
            className={styles.toggle}
            type="button"
            aria-expanded={isOpen}
            aria-controls={navId}
            aria-label="Menü"
            onClick={handleToggle}
            data-od-id="menu-toggle"
          >
            <span className={styles.lines} aria-hidden="true">
              <span />
              <span />
            </span>
            <span className={styles.toggleText}>Menü</span>
          </button>

          <nav
            ref={navRef}
            className={styles.nav}
            id={navId}
            aria-label="Hauptnavigation"
            data-od-id="site-nav"
          >
            {navigation.map((entry) =>
              preview ? (
                <Link
                  key={entry.to}
                  className={styles.link}
                  to={entry.to}
                  aria-current={entry.to === activePath ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                  data-od-id={entry.odId}
                >
                  <span className={styles.index} aria-hidden="true">
                    {entry.index}
                  </span>
                  <span>{entry.label}</span>
                </Link>
              ) : (
                <NavLink
                  key={entry.to}
                  className={styles.link}
                  to={entry.to}
                  end={entry.end}
                  onClick={() => setIsOpen(false)}
                  data-od-id={entry.odId}
                >
                  <span className={styles.index} aria-hidden="true">
                    {entry.index}
                  </span>
                  <span>{entry.label}</span>
                </NavLink>
              ),
            )}
          </nav>
        </div>
      </header>

      <div
        className={styles.scrim}
        data-open={isOpen ? '' : undefined}
        aria-hidden="true"
        onClick={() => closeMenu(true)}
        data-od-id="menu-scrim"
      />
    </>
  );
}
