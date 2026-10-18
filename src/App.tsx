import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GalleryPage from './dev/gallery/GalleryPage';
import AppLayout from './layout/AppLayout';
import HomePage from './pages/HomePage';
import IbakPage from './pages/IbakPage';
import ImprintPage from './pages/ImprintPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPage from './pages/PrivacyPage';
import RwaPage from './pages/RwaPage';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/rauch-waermeabzugsanlage" element={<RwaPage />} />
          <Route path="/ibak-servicestelle" element={<IbakPage />} />
          <Route path="/impressum" element={<ImprintPage />} />
          <Route path="/datenschutz" element={<PrivacyPage />} />
          {import.meta.env.DEV && <Route path="/galerie" element={<GalleryPage />} />}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
