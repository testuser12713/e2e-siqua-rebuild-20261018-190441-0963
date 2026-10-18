export interface Service {
  id: string;
  title: string;
  iconSrc: string;
  iconAlt: string;
}

export interface ContactPerson {
  name: string;
  role: string;
  email: string;
  phoneHref: string;
  phoneDisplay: string;
  photoSrc: string;
  photoAlt: string;
}

export interface BusinessArea {
  slug: 'rauch-waermeabzugsanlage' | 'ibak-servicestelle';
  title: string;
  path: string;
  services: Service[];
  contact: ContactPerson;
}

export interface CompanyInfo {
  name: string;
  claim: string;
  street: string;
  city: string;
  phoneHref: string;
  phoneDisplay: string;
  email: string;
  uid: string;
  fn: string;
}
