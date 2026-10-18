import { Outlet } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

export default function AppLayout(): JSX.Element {
  return (
    <>
      <a className="skip-link" href="#main">
        Zum Inhalt springen
      </a>

      <div className="page-shell">
        <SiteHeader />

        <main id="main">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
