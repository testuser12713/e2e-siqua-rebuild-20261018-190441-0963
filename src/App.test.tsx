import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

const pagePaths = [
  '/',
  '/rauch-waermeabzugsanlage',
  '/ibak-servicestelle',
  '/impressum',
  '/datenschutz',
];

function renderAt(path: string): void {
  window.history.pushState({}, '', path);
  render(<App />);
}

describe.each(pagePaths)('layout frame at %s', (path) => {
  it('renders the skip link, page shell and main landmark', () => {
    renderAt(path);

    const skipLink = screen.getByRole('link', { name: 'Zum Inhalt springen' });
    expect(skipLink.getAttribute('href')).toBe('#main');
    expect(document.querySelector('main#main')).not.toBeNull();
    expect(document.querySelector('.page-shell')).not.toBeNull();
  });
});

describe('unknown path', () => {
  it('renders the German 404 screen with a link back to the home page', () => {
    renderAt('/diese-seite-gibt-es-nicht');

    expect(
      screen.getByRole('heading', { level: 1, name: 'Seite nicht gefunden' }),
    ).toBeTruthy();

    const homeLink = screen.getByRole('link', { name: /Zur Startseite/ });
    expect(homeLink.getAttribute('href')).toBe('/');

    expect(document.title).toBe('Seite nicht gefunden – SIQUA GmbH');
    expect(
      document.head
        .querySelector('meta[name="description"]')
        ?.getAttribute('content'),
    ).toBe('Die aufgerufene Seite existiert nicht. Zurück zur Startseite der SIQUA GmbH.');
  });
});

describe('gallery route', () => {
  it.runIf(import.meta.env.DEV)('is available in development mode', () => {
    renderAt('/galerie');

    expect(
      screen.getByRole('heading', { level: 1, name: 'Komponenten-Galerie' }),
    ).toBeTruthy();
    expect(screen.queryByRole('heading', { name: 'Seite nicht gefunden' })).toBeNull();
  });
});
