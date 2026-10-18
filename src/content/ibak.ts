import { siteAssets } from './assets';
import type { BusinessArea } from './types';

export const ibakArea: BusinessArea = {
  slug: 'ibak-servicestelle',
  title: 'IBAK Servicestelle',
  path: '/ibak-servicestelle',
  services: [
    {
      id: 'fehlersuche',
      title: 'Fehlersuche & Instandsetzung von IBAK Anlagen',
      iconSrc: siteAssets.icons.fehlersuche,
      iconAlt: 'Symbol für Fehlersuche und Instandsetzung von IBAK Anlagen',
    },
    {
      id: 'signal',
      title: 'Signaleinstellungen',
      iconSrc: siteAssets.icons.signal,
      iconAlt: 'Symbol für Signaleinstellungen',
    },
    {
      id: 'software',
      title: 'Software Updates',
      iconSrc: siteAssets.icons.software,
      iconAlt: 'Symbol für Software Updates',
    },
    {
      id: 'leihgeraete',
      title: 'Leihgeräte für den Zeitraum der Reparatur',
      iconSrc: siteAssets.icons.leihgeraete,
      iconAlt: 'Symbol für Leihgeräte während der Reparatur',
    },
    {
      id: 'ueberpruefung',
      title: 'Jährliche Überprüfung der gesamten Anlage',
      iconSrc: siteAssets.icons.ueberpruefung,
      iconAlt: 'Symbol für die jährliche Überprüfung der gesamten Anlage',
    },
    {
      id: 'ersatzteile',
      title: 'Ersatzteileverkauf',
      iconSrc: siteAssets.icons.ersatzteile,
      iconAlt: 'Symbol für Ersatzteileverkauf',
    },
  ],
  contact: {
    name: 'Andreas Mayr',
    role: 'Bereichsleiter Kanalinspektionssysteme',
    email: 'mayr@siqua-components.at',
    phoneHref: 'tel:+436601212140',
    phoneDisplay: 'Mobil: 0660 / 12 12 140',
    photoSrc: siteAssets.andreas,
    photoAlt: 'Andreas Mayr, Bereichsleiter Kanalinspektionssysteme',
  },
};
