import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import PrivacyPage from './PrivacyPage';

function renderPage(): void {
  render(
    <MemoryRouter>
      <PrivacyPage />
    </MemoryRouter>,
  );
}

function sectionByHeading(name: string): HTMLElement {
  const heading = screen.getByRole('heading', { name });
  const section = heading.closest('section');

  if (!section) {
    throw new Error(`No section found for heading "${name}"`);
  }

  return section;
}

describe('privacy policy page', () => {
  it('renders its own German title, description and hero', () => {
    renderPage();

    expect(
      screen.getByRole('heading', { level: 1, name: 'Datenschutz' }),
    ).toBeTruthy();
    expect(document.title).toBe('Datenschutz – SIQUA GmbH');
    expect(
      document.head
        .querySelector('meta[name="description"]')
        ?.getAttribute('content'),
    ).toBe(
      'Informationen zur Verarbeitung personenbezogener Daten gemäß Art. 13 DSGVO bei der SIQUA GmbH.',
    );
  });

  it('names the controller with address, phone and e-mail', () => {
    renderPage();

    const controller = within(sectionByHeading('Verantwortlicher'));

    expect(controller.getByText('SIQUA GmbH')).toBeTruthy();
    expect(
      controller.getByText('Langenharter Straße 8, 4300 St. Valentin, Österreich'),
    ).toBeTruthy();
    expect(
      controller.getByRole('link', { name: '0 7435 / 52 025' }).getAttribute('href'),
    ).toBe('tel:+43743552025');
    expect(
      controller
        .getByRole('link', { name: 'office@siqua-components.at' })
        .getAttribute('href'),
    ).toBe('mailto:office@siqua-components.at');
  });

  it('documents the hosting processing with purpose, legal basis and storage period', () => {
    renderPage();

    const processing = within(sectionByHeading('Verarbeitungen auf dieser Website'));

    const table = processing.getByRole('table');
    const row = within(table).getByRole('row', {
      name: /Hosting inkl\. Server-Logfiles mit IP-Adresse/,
    });

    expect(
      within(row).getByText('Hosting inkl. Server-Logfiles mit IP-Adresse'),
    ).toBeTruthy();
    expect(
      within(row).getByText(/Technische Bereitstellung, Stabilität und Sicherheit/),
    ).toBeTruthy();
    expect(
      within(row).getByText(/Art\. 6 Abs\. 1 lit\. f DSGVO/),
    ).toBeTruthy();
    expect(
      within(row).getByText('Noch vom Kunden zu liefern'),
    ).toBeTruthy();
    expect(
      within(row).getByText(
        /Die konkrete Dauer der Server-Logfiles wird durch die Hosting-Konfiguration bestimmt\./,
      ),
    ).toBeTruthy();
  });

  it('names the recipients and third-country transfer block', () => {
    renderPage();

    const recipients = within(sectionByHeading('Empfänger und Drittlandübermittlung'));

    expect(recipients.getByText('Hosting-Dienstleister')).toBeTruthy();
    expect(recipients.getByText('Auftragsverarbeitung')).toBeTruthy();
    expect(recipients.getByText('Drittlandübermittlung')).toBeTruthy();
  });

  it('states that the site uses no cookies and no local storage', () => {
    renderPage();

    const storage = within(sectionByHeading('Cookies und lokale Speicherung'));

    expect(storage.getByText(/Diese Website setzt keine Cookies\./)).toBeTruthy();
    expect(storage.getByText('localStorage')).toBeTruthy();
    expect(storage.getByText('sessionStorage')).toBeTruthy();
  });

  it('lists every data subject right', () => {
    renderPage();

    const rights = sectionByHeading('Ihre Rechte');

    expect(within(rights).getByText(/Auskunft .* \(Art\. 15 DSGVO\)/)).toBeTruthy();
    expect(within(rights).getByText(/Berichtigung .* \(Art\. 16 DSGVO\)/)).toBeTruthy();
    expect(within(rights).getByText(/Löschung .* \(Art\. 17 DSGVO\)/)).toBeTruthy();
    expect(within(rights).getByText(/Einschränkung .* \(Art\. 18 DSGVO\)/)).toBeTruthy();
    expect(within(rights).getByText(/Datenübertragbarkeit \(Art\. 20 DSGVO\)/)).toBeTruthy();
    expect(within(rights).getByText(/Widerspruch .* \(Art\. 21 DSGVO\)/)).toBeTruthy();
  });

  it('names the right to complain to the Austrian data protection authority', () => {
    renderPage();

    const complaint = within(sectionByHeading('Beschwerderecht'));

    expect(
      complaint.getByText(/Österreichischen Datenschutzbehörde/),
    ).toBeTruthy();
  });

  it('links the aside to the imprint and the start page', () => {
    renderPage();

    expect(
      screen.getByRole('link', { name: 'Impressum' }).getAttribute('href'),
    ).toBe('/impressum');
    expect(
      screen.getByRole('link', { name: 'Zur Startseite' }).getAttribute('href'),
    ).toBe('/');
  });
});
