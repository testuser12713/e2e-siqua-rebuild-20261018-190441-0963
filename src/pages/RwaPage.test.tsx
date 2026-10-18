import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { rwaArea } from '../content/rwa';
import RwaPage from './RwaPage';

function renderPage(): void {
  render(
    <MemoryRouter>
      <RwaPage />
    </MemoryRouter>,
  );
}

describe('RwaPage', () => {
  it('uses the page title and German meta description of the approved screen', () => {
    renderPage();

    expect(document.title).toBe('Rauch- und Wärmeabzugsanlage – SIQUA GmbH');
    expect(
      document.head.querySelector('meta[name="description"]')?.getAttribute('content'),
    ).toBe(
      'Die sechs Leistungen der SIQUA GmbH im Bereich Rauch- und Wärmeabzugsanlage sowie der Kontakt zu Bereichsleiter Christian Schiller.',
    );
  });

  it('renders the area heading', () => {
    renderPage();

    expect(
      screen.getByRole('heading', { level: 1, name: 'Rauch- und Wärmeabzugsanlage' }),
    ).toBeTruthy();
  });

  it('renders exactly the six services with their original icons', () => {
    renderPage();

    expect(rwaArea.services).toHaveLength(6);

    const list = screen.getByRole('list', {
      name: 'Die sechs Leistungen im Bereich Rauch- und Wärmeabzugsanlage',
    });

    expect(within(list).getAllByRole('heading', { level: 3 })).toHaveLength(6);

    for (const service of rwaArea.services) {
      expect(
        within(list).getByRole('heading', { level: 3, name: service.title }),
      ).toBeTruthy();

      const icon = within(list).getByRole('img', { name: service.iconAlt });
      expect(icon.getAttribute('src')).toBe(service.iconSrc);
    }
  });

  it('shows the contact card with name, role, mailto and tel links', () => {
    renderPage();

    const person = rwaArea.contact;

    expect(screen.getByRole('heading', { level: 3, name: person.name })).toBeTruthy();
    expect(screen.getByText(person.role)).toBeTruthy();

    const emailLink = screen.getByRole('link', { name: person.email });
    expect(emailLink.getAttribute('href')).toBe(`mailto:${person.email}`);

    const phoneLink = screen.getByRole('link', { name: person.phoneDisplay });
    expect(phoneLink.getAttribute('href')).toBe(person.phoneHref);
    expect(phoneLink.getAttribute('href')?.startsWith('tel:')).toBe(true);
  });

  it('links to the other business area and back to the start page', () => {
    renderPage();

    const ibakLink = screen.getByRole('link', { name: /IBAK Servicestelle/ });
    expect(ibakLink.getAttribute('href')).toBe('/ibak-servicestelle');

    const homeLink = screen.getByRole('link', { name: /Zur Startseite/ });
    expect(homeLink.getAttribute('href')).toBe('/');
  });
});
