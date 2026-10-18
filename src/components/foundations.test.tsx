import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';
import FoundationGallery from './gallery/FoundationGallery';

const motionPreference = vi.hoisted(() => ({ reduced: false }));

vi.mock('framer-motion', async (importOriginal) => {
  const actual = await importOriginal<typeof import('framer-motion')>();
  return {
    ...actual,
    useReducedMotion: () => motionPreference.reduced,
  };
});

function renderGallery(): void {
  render(
    <MemoryRouter initialEntries={['/galerie']}>
      <FoundationGallery />
    </MemoryRouter>,
  );
}

afterEach(() => {
  motionPreference.reduced = false;
});

describe('foundation gallery', () => {
  it('renders the section in light and dark band states with a section head and trailing link', () => {
    renderGallery();

    expect(
      screen.getByRole('heading', { level: 2, name: 'Rauch- und Wärmeabzugsanlage' }),
    ).toBeTruthy();
    expect(
      screen.getByRole('heading', { level: 2, name: 'IBAK Servicestelle' }),
    ).toBeTruthy();

    expect(document.querySelector('[data-tone="dark"]')).not.toBeNull();
    expect(document.querySelector('[data-tone="light"]')).not.toBeNull();

    const links = screen.getAllByRole('link', { name: 'Bereichsseite öffnen' });
    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      '/rauch-waermeabzugsanlage',
      '/ibak-servicestelle',
    ]);

    expect(
      screen.getByText(
        'Abschnitt ohne Überschrift, nur mit Container und vertikalem Abstand.',
      ),
    ).toBeTruthy();
  });

  it('renders the prose states: headings, paragraphs, lists, links and definition blocks', () => {
    renderGallery();

    expect(
      screen.getByRole('heading', { level: 2, name: 'Verantwortlicher' }),
    ).toBeTruthy();
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Übersicht der Betroffenenrechte',
      }),
    ).toBeTruthy();

    expect(
      screen.getByRole('link', { name: 'Datenschutzerklärung' }).getAttribute('href'),
    ).toBe('/datenschutz');
    expect(
      screen.getByText(
        'Auskunft über die verarbeiteten personenbezogenen Daten (Art. 15 DSGVO)',
      ),
    ).toBeTruthy();
    expect(screen.getByText('Firma')).toBeTruthy();
    expect(screen.getByText('SIQUA GmbH')).toBeTruthy();

    const table = screen.getByRole('table');
    expect(
      within(table).getByText('Hosting inkl. Server-Logfiles mit IP-Adresse'),
    ).toBeTruthy();
  });

  it('renders reveal and page transition content', () => {
    renderGallery();

    expect(
      screen.getByText('Beim Scrollen wird dieser Abschnitt weich eingeblendet.'),
    ).toBeTruthy();
    expect(
      screen.getByText('Gestaffelte Einblendung mit 60 ms Verzögerung.'),
    ).toBeTruthy();
    expect(
      screen.getByText('Dieser Inhalt wechselt mit einer animierten Überblendung.'),
    ).toBeTruthy();
  });

  it('renders every foundation unchanged when reduced motion is requested', () => {
    motionPreference.reduced = true;
    renderGallery();

    expect(
      screen.getByRole('heading', { level: 2, name: 'Rauch- und Wärmeabzugsanlage' }),
    ).toBeTruthy();
    expect(
      screen.getByText('Beim Scrollen wird dieser Abschnitt weich eingeblendet.'),
    ).toBeTruthy();
    expect(
      screen.getByText('Dieser Inhalt wechselt mit einer animierten Überblendung.'),
    ).toBeTruthy();

    const animatedElements = Array.from(
      document.querySelectorAll<HTMLElement>('[style]'),
    ).filter((element) =>
      /opacity|transform/.test(element.getAttribute('style') ?? ''),
    );

    expect(animatedElements).toHaveLength(0);
  });
});
