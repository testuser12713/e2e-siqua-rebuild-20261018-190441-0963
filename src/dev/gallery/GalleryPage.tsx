import ChromeGallery from '../../components/gallery/ChromeGallery';
import ContentGallery from '../../components/gallery/ContentGallery';
import FoundationGallery from '../../components/gallery/FoundationGallery';

export default function GalleryPage(): JSX.Element {
  return (
    <div className="container">
      <h1>Komponenten-Galerie</h1>
      <p>Interne Vorschau der UI-Bausteine. Nur im Entwicklungsmodus verfügbar.</p>
      <FoundationGallery />
      <ChromeGallery />
      <ContentGallery />
    </div>
  );
}
