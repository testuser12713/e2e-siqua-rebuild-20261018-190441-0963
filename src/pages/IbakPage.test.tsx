import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { ibakArea } from '../content/ibak';
import IbakPage from './IbakPage';

function renderPage(): void {
  render(
    <MemoryRouter>
      <IbakPage />
    </MemoryRouter>,
  );
}

describe('IbakPage', () => {
  it('renders the heading and exactly the six services with their icons', () => {
    renderPage();

    expect(
      screen.getByRole('heading', { level: 1, name: ibakArea.title }),
    ).toBeTruthy();
    expect(ibakArea.services).toHaveLength(6);

    for (const service of ibakArea.services) {
      expect(
        screen.getByRole('heading', { level: 3, name: service.title }),
      ).toBeTruthy();

      const icon = screen.getByRole('img', { name: service.iconAlt });
      expect(icon.getAttribute('src')).toBe(service.iconSrc);
    }

    const serviceHeadings = screen
      .getAllByRole('heading', { level: 3 })
      .filter((heading) =>
        ibakArea.services.some((service) => service.title === heading.textContent),
      );
    expect(serviceHeadings).toHaveLength(6);
  });

  it('shows the contact card with a mailto and a tel link', () => {
    renderPage();

    const contactSection = screen.getByRole('region', {
      name: 'Ihr Ansprechpartner',
    });

    expect(
      within(contactSection).getByRole('heading', {
        level: 3,
        name: ibakArea.contact.name,
      }),
    ).toBeTruthy();
    expect(within(contactSection).getByText(ibakArea.contact.role)).toBeTruthy();
    expect(
      within(contactSection).getByRole('img', { name: ibakArea.contact.photoAlt }),
    ).toBeTruthy();

    const emailLink = within(contactSection).getByRole('link', {
      name: ibakArea.contact.email,
    });
    expect(emailLink.getAttribute('href')).toBe(`mailto:${ibakArea.contact.email}`);

    const phoneLink = within(contactSection).getByRole('link', {
      name: ibakArea.contact.phoneDisplay,
    });
    expect(phoneLink.getAttribute('href')).toBe(ibakArea.contact.phoneHref);
    expect(phoneLink.getAttribute('href')?.startsWith('tel:')).toBe(true);
  });

  it('links to the other area and back to the start page', () => {
    renderPage();

    const crosslinks = screen.getByRole('region', { name: 'Weitere Seiten' });

    const areaLink = within(crosslinks).getByRole('link', {
      name: /Rauch- und Wärmeabzugsanlage/,
    });
    expect(areaLink.getAttribute('href')).toBe('/rauch-waermeabzugsanlage');

    const homeLink = within(crosslinks).getByRole('link', {
      name: /Zur Startseite/,
    });
    expect(homeLink.getAttribute('href')).toBe('/');
  });

  it('sets the page title and German meta description', () => {
    renderPage();

    expect(document.title).toBe('IBAK Servicestelle – SIQUA GmbH');
    expect(
      document.head
        .querySelector('meta[name="description"]')
        ?.getAttribute('content'),
    ).toBe(
      'Die sechs Leistungen der IBAK Servicestelle der SIQUA GmbH sowie der Kontakt zu Bereichsleiter Andreas Mayr.',
    );
  });
});
