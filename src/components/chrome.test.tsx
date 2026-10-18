import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

function renderHeader(path: string): void {
  render(
    <MemoryRouter initialEntries={[path]}>
      <SiteHeader />
    </MemoryRouter>,
  );
}

describe('SiteHeader', () => {
  it.each([
    ['/', 'Start'],
    ['/rauch-waermeabzugsanlage', 'Rauch- und Wärmeabzugsanlage'],
    ['/ibak-servicestelle', 'IBAK-Servicestelle'],
  ])('marks the navigation entry for %s as the current page', (path, label) => {
    renderHeader(path);

    const active = screen.getByRole('link', { name: label });
    expect(active.getAttribute('aria-current')).toBe('page');
    expect(document.querySelectorAll('[aria-current="page"]')).toHaveLength(1);
  });

  it('links the brand to the start page', () => {
    renderHeader('/ibak-servicestelle');

    const brand = screen.getByRole('link', { name: 'SIQUA GmbH – zur Startseite' });
    expect(brand.getAttribute('href')).toBe('/');
  });

  it('opens the menu with the button and closes it when an entry is chosen', async () => {
    const user = userEvent.setup();
    renderHeader('/');

    const toggle = screen.getByRole('button', { name: 'Menü' });
    expect(toggle.getAttribute('aria-expanded')).toBe('false');

    await user.click(toggle);
    expect(toggle.getAttribute('aria-expanded')).toBe('true');

    await user.click(screen.getByRole('link', { name: 'Rauch- und Wärmeabzugsanlage' }));

    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(
      screen
        .getByRole('link', { name: 'Rauch- und Wärmeabzugsanlage' })
        .getAttribute('aria-current'),
    ).toBe('page');
  });

  it('closes the menu with Escape and returns focus to the button', async () => {
    const user = userEvent.setup();
    renderHeader('/');

    const toggle = screen.getByRole('button', { name: 'Menü' });
    await user.click(toggle);
    expect(toggle.getAttribute('aria-expanded')).toBe('true');

    await user.keyboard('{Escape}');

    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(document.activeElement).toBe(toggle);
  });
});

describe('SiteFooter', () => {
  it('shows every company datum as given', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <SiteFooter />
      </MemoryRouter>,
    );

    expect(screen.getByText('SIQUA GmbH')).toBeTruthy();
    expect(screen.getByText('Langenharter Straße 8')).toBeTruthy();
    expect(screen.getByText('4300 St. Valentin')).toBeTruthy();
    expect(screen.getByText('Wir bieten Ihnen Sicherheit und Qualität')).toBeTruthy();
    expect(screen.getByText('Tel.: 0 7435 / 52 025')).toBeTruthy();
    expect(screen.getByText('E-Mail: office@siqua-components.at')).toBeTruthy();
    expect(screen.getByText('UID: ATU70561439')).toBeTruthy();
    expect(screen.getByText('FN: 449097m')).toBeTruthy();
  });

  it('makes the phone number and e-mail real links', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <SiteFooter />
      </MemoryRouter>,
    );

    const phone = screen.getByRole('link', { name: 'Tel.: 0 7435 / 52 025' });
    expect(phone.getAttribute('href')).toBe('tel:+43743552025');

    const email = screen.getByRole('link', { name: 'E-Mail: office@siqua-components.at' });
    expect(email.getAttribute('href')).toBe('mailto:office@siqua-components.at');
  });

  it('links the legal pages and leaves out the prototype error page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <SiteFooter />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'Impressum' }).getAttribute('href')).toBe(
      '/impressum',
    );
    expect(screen.getByRole('link', { name: 'Datenschutz' }).getAttribute('href')).toBe(
      '/datenschutz',
    );
    expect(screen.queryByRole('link', { name: 'Fehlerseite' })).toBeNull();
  });

  it('marks the current legal page in the legal column', () => {
    render(
      <MemoryRouter initialEntries={['/datenschutz']}>
        <SiteFooter />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'Datenschutz' }).getAttribute('aria-current')).toBe(
      'page',
    );
    expect(screen.getByRole('link', { name: 'Impressum' }).getAttribute('aria-current')).toBeNull();
  });
});
