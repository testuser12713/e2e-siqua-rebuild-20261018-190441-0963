import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import ImprintPage from './ImprintPage';

function renderPage(): void {
  render(
    <MemoryRouter initialEntries={['/impressum']}>
      <ImprintPage />
    </MemoryRouter>,
  );
}

function pendingValueOf(label: string): string | null | undefined {
  return screen.getByText(label).nextElementSibling?.textContent;
}

describe('imprint page', () => {
  it('sets its own German document metadata and shows the hero', () => {
    renderPage();

    expect(document.title).toBe('Impressum – SIQUA GmbH');
    expect(
      document.head.querySelector('meta[name="description"]')?.getAttribute('content'),
    ).toBe(
      'Impressum und Offenlegung der SIQUA GmbH gemäß § 5 ECG, § 14 UGB und § 25 MedienG.',
    );
    expect(
      screen.getByRole('heading', { level: 1, name: 'Impressum' }),
    ).toBeTruthy();
  });

  it('renders every required provider disclosure with the full address', () => {
    renderPage();

    expect(screen.getAllByText('SIQUA GmbH').length).toBeGreaterThan(0);
    expect(
      screen.getByText('Gesellschaft mit beschränkter Haftung (GmbH)'),
    ).toBeTruthy();
    expect(screen.getByText('4300 St. Valentin, Österreich')).toBeTruthy();
    expect(
      screen.getByText('Langenharter Straße 8, 4300 St. Valentin'),
    ).toBeTruthy();
    expect(screen.getByText('ATU70561439')).toBeTruthy();
    expect(screen.getByText('FN 449097m')).toBeTruthy();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Medieninhaber und Diensteanbieter',
      }),
    ).toBeTruthy();
  });

  it('renders the phone as a tel: link and the e-mail as a mailto: link', () => {
    renderPage();

    const phoneLinks = screen.getAllByRole('link', { name: /0 7435 \/ 52 025/ });
    expect(phoneLinks.length).toBeGreaterThan(0);
    phoneLinks.forEach((link) => {
      expect(link.getAttribute('href')).toBe('tel:+43743552025');
    });

    const mailLinks = screen.getAllByRole('link', {
      name: /office@siqua-components\.at/,
    });
    expect(mailLinks.length).toBeGreaterThan(0);
    mailLinks.forEach((link) => {
      expect(link.getAttribute('href')).toBe('mailto:office@siqua-components.at');
    });
  });

  it('marks unsupplied values as pending instead of inventing them', () => {
    renderPage();

    [
      'Firmenbuchgericht',
      'Unternehmensgegenstand / Branche',
      'Wirtschaftskammer',
      'Aufsichtsbehörde',
    ].forEach((label) => {
      expect(pendingValueOf(label)).toContain('Noch vom Kunden zu liefern');
    });

    expect(
      pendingValueOf('Aufsichtsbehörde'),
    ).toContain('soweit für die Branche einschlägig');
    expect(screen.getAllByText('Noch vom Kunden zu liefern').length).toBeGreaterThan(0);
  });

  it('renders the membership block and the § 25 MedienG disclosure', () => {
    renderPage();

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Mitgliedschaft und Aufsichtsbehörde',
      }),
    ).toBeTruthy();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Offenlegung nach § 25 MedienG',
      }),
    ).toBeTruthy();
    expect(screen.getByText('Grundlegende Richtung:')).toBeTruthy();
    expect(screen.getByText('Tätigkeitsbereiche:')).toBeTruthy();
  });

  it('links to the privacy policy and shows the company contact aside', () => {
    renderPage();

    expect(
      screen.getByRole('heading', { level: 2, name: 'Weitere Rechtstexte' }),
    ).toBeTruthy();
    const privacyLinks = screen.getAllByRole('link', { name: 'Datenschutz' });
    expect(privacyLinks.length).toBeGreaterThan(0);
    privacyLinks.forEach((link) => {
      expect(link.getAttribute('href')).toBe('/datenschutz');
    });
    expect(
      screen.getByRole('link', { name: 'Datenschutzerklärung' }).getAttribute('href'),
    ).toBe('/datenschutz');

    expect(
      screen.getByRole('heading', { level: 2, name: 'Kontakt zum Unternehmen' }),
    ).toBeTruthy();
    expect(
      screen.getByRole('link', { name: /E-Mail schreiben/ }).getAttribute('href'),
    ).toBe('mailto:office@siqua-components.at');
    expect(
      screen.getByRole('link', { name: 'Zur Startseite' }).getAttribute('href'),
    ).toBe('/');
  });
});
