import { siteAssets } from './assets';
import type { BusinessArea } from './types';

export const rwaArea: BusinessArea = {
  slug: 'rauch-waermeabzugsanlage',
  title: 'Rauch- und Wärmeabzugsanlage',
  path: '/rauch-waermeabzugsanlage',
  services: [
    {
      id: 'rwa',
      title: 'Rauch- und Wärmeabzugsanlagen',
      iconSrc: siteAssets.icons.rwa,
      iconAlt: 'Symbol für Rauch- und Wärmeabzugsanlagen',
    },
    {
      id: 'lk',
      title: 'Lichtkuppeln, Lichtbänder',
      iconSrc: siteAssets.icons.lk,
      iconAlt: 'Symbol für Lichtkuppeln und Lichtbänder',
    },
    {
      id: 'inspektion',
      title: 'Inspektion und Wartung',
      iconSrc: siteAssets.icons.inspektion,
      iconAlt: 'Symbol für Inspektion und Wartung',
    },
    {
      id: 'planung',
      title: 'Planung & Berechnung von RWA',
      iconSrc: siteAssets.icons.planung,
      iconAlt: 'Symbol für Planung und Berechnung von RWA',
    },
    {
      id: 'steuerung',
      title: 'Steuerungsoptimierung',
      iconSrc: siteAssets.icons.steuerung,
      iconAlt: 'Symbol für Steuerungsoptimierung',
    },
    {
      id: 'absturz',
      title: 'Absturzsicherungen',
      iconSrc: siteAssets.icons.absturz,
      iconAlt: 'Symbol für Absturzsicherungen',
    },
  ],
  contact: {
    name: 'Christian Schiller',
    role: 'Bereichsleiter Rauch- und Wärmeabzugsanlagen',
    email: 'schiller@siqua-components.at',
    phoneHref: 'tel:+436648344737',
    phoneDisplay: 'Mobil: 0664 / 8344737',
    photoSrc: siteAssets.christian,
    photoAlt: 'Christian Schiller, Bereichsleiter Rauch- und Wärmeabzugsanlagen',
  },
};
