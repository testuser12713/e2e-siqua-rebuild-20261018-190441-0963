import { useEffect } from 'react';
import { siteAssets } from '../content/assets';

interface DocumentMeta {
  title: string;
  description: string;
}

function setMeta(attribute: 'name' | 'property', key: string, content: string): void {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.append(element);
  }

  element.setAttribute('content', content);
}

export function useDocumentMeta(meta: DocumentMeta): void {
  const { title, description } = meta;

  useEffect(() => {
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', siteAssets.logo);
  }, [title, description]);
}
