import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { company } from '../content/company';
import { ibakArea } from '../content/ibak';
import { rwaArea } from '../content/rwa';
import HomePage from './HomePage';

function renderHome(): void {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );
}

describe('HomePage hero', () => {
  it('shows the company name, the claim and both business area entries', () => {
    renderHome();

    expect(
      screen.getByRole('heading', { level: 1, name: /SIQUA/ }),
    ).toBeTruthy();
    expect(screen.getAllByText(company.claim).length).toBeGreaterThan(0);
    expect(screen.getByText(`${company.street} · ${company.city}`)).toBeTruthy();

    const rwaLink = screen.getByRole('link', {
      name: new RegExp(rwaArea.title),
    });
    const ibakLink = screen.getByRole('link', {
      name: new RegExp(ibakArea.title),
    });

    expect(rwaLink.getAttribute('href')).toBe('/rauch-waermeabzugsanlage');
    expect(ibakLink.getAttribute('href')).toBe('/ibak-servicestelle');
  });
});

describe('HomePage business area bands', () => {
  it.each([
    ['Rauch- und Wärmeabzugsanlage', rwaArea],
    ['IBAK Servicestelle', ibakArea],
  ] as const)('renders the six services and leader of %s', (_name, area) => {
    renderHome();

    for (const service of area.services) {
      expect(
        screen.getAllByRole('heading', { level: 3, name: service.title })
          .length,
      ).toBeGreaterThan(0);
    }

    expect(
      screen.getByRole('heading', { level: 3, name: area.contact.name }),
    ).toBeTruthy();
    expect(screen.getByText(area.contact.role)).toBeTruthy();
  });
});

describe('HomePage company block', () => {
  it('shows the address, phone, e-mail and company register data', () => {
    renderHome();

    expect(
      screen.getByRole('heading', { level: 2, name: company.claim }),
    ).toBeTruthy();
    expect(screen.getByText(company.street)).toBeTruthy();
    expect(screen.getByText(company.city)).toBeTruthy();

    const phoneLink = screen.getByRole('link', {
      name: company.phoneDisplay,
    });
    expect(phoneLink.getAttribute('href')).toBe(company.phoneHref);

    const emailLink = screen.getByRole('link', { name: company.email });
    expect(emailLink.getAttribute('href')).toBe(`mailto:${company.email}`);

    expect(screen.getByText(`UID: ${company.uid}`)).toBeTruthy();
    expect(screen.getByText(`FN: ${company.fn}`)).toBeTruthy();
  });

  it('sets the page title and German meta description', () => {
    renderHome();

    expect(document.title).toBe('SIQUA GmbH – Sicherheit und Qualität');
    expect(
      document.head
        .querySelector('meta[name="description"]')
        ?.getAttribute('content'),
    ).toBe(
      'SIQUA GmbH in St. Valentin: Rauch- und Wärmeabzugsanlagen und IBAK-Servicestelle. Leistungen, Ansprechpartner und Firmendaten.',
    );
  });
});
