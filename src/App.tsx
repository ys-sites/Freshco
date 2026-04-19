/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import Home from './pages/Home';
import BoucheriePricesPage from './pages/BoucheriePricesPage';
import { SEO } from './components/SEO';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  // Global scroll-to-top handler on path change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Fallback timer to ensure new component height is calculated across all devices
    const timer = setTimeout(() => {
       window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 20);
    return () => clearTimeout(timer);
  }, [currentPath]);

  return (
    <>
      <SEO currentPath={currentPath} />
      {currentPath === '/boucherie-prix' ? <BoucheriePricesPage /> : <Home />}
    </>
  );
}

