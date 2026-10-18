import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { ibakArea } from '../content/ibak';
import { rwaArea } from '../content/rwa';
import AreaEntry from './AreaEntry';
import ContactCard from './ContactCard';
import ServiceTile from './ServiceTile';
import ContentGallery from './gallery/ContentGallery';

describe('ServiceTile', () => {
  it('shows the original icon with alt text and the service title', () => {
    const service = rwaArea.services[0];

    render(
      <ul>
        <ServiceTile service={service} />
      </ul>,
    );

    const image = screen.getByRole('img', { name: service.iconAlt });

    expect(image.getAttribute('src')).toBe(service.iconSrc);
    expect(image.getAttribute('width')).toBe('298');
    expect(image.getAttribute('height')).toBe('298');
    expect(image.getAttribute('loading')).toBe('lazy');
    expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeTruthy();
  });
});

describe('ContactCard', () => {
  it('exposes the photo, name, role, mailto and tel links', () => {
    const person = rwaArea.contact;

    render(<ContactCard person={person} />);

    expect(screen.getByRole('img', { name: person.photoAlt })).toBeTruthy();
    expect(screen.getByRole('heading', { level: 3, name: person.name })).toBeTruthy();
    expect(screen.getByText(person.role)).toBeTruthy();

    const emailLink = screen.getByRole('link', { name: person.email });
    expect(emailLink.getAttribute('href')).toBe(`mailto:${person.email}`);

    const phoneLink = screen.getByRole('link', { name: person.phoneDisplay });
    expect(phoneLink.getAttribute('href')).toBe(person.phoneHref);
    expect(phoneLink.getAttribute('href')?.startsWith('tel:')).toBe(true);
  });
});

describe('AreaEntry', () => {
  it('links to the path of the business area', () => {
    render(
      <MemoryRouter>
        <AreaEntry area={ibakArea} />
      </MemoryRouter>,
    );

    const link = screen.getByRole('link', { name: new RegExp(ibakArea.title) });

    expect(link.getAttribute('href')).toBe(ibakArea.path);
    expect(link.getAttribute('href')).toBe('/ibak-servicestelle');
  });
});

describe('ContentGallery', () => {
  it('shows service tiles, contact cards and area entries', () => {
    render(
      <MemoryRouter>
        <ContentGallery />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { level: 2, name: 'Leistungs-Kachel' })).toBeTruthy();
    expect(
      screen.getAllByRole('heading', { level: 3, name: rwaArea.services[0].title }).length,
    ).toBeGreaterThan(0);
    expect(screen.getByRole('img', { name: rwaArea.services[0].iconAlt })).toBeTruthy();
    expect(screen.getByRole('img', { name: rwaArea.contact.photoAlt })).toBeTruthy();
    expect(screen.getByRole('img', { name: ibakArea.contact.photoAlt })).toBeTruthy();
    expect(screen.getByRole('link', { name: rwaArea.contact.email }).getAttribute('href')).toBe(
      `mailto:${rwaArea.contact.email}`,
    );
    expect(
      screen.getByRole('link', { name: ibakArea.contact.phoneDisplay }).getAttribute('href'),
    ).toBe(ibakArea.contact.phoneHref);
    expect(screen.getByRole('link', { name: new RegExp(rwaArea.title) }).getAttribute('href')).toBe(
      rwaArea.path,
    );
    expect(screen.getByRole('link', { name: new RegExp(ibakArea.title) }).getAttribute('href')).toBe(
      ibakArea.path,
    );
  });
});
