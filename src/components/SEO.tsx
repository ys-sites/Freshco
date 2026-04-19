import { useEffect } from 'react';
import { useLanguage } from '../lib/LanguageContext';

export function SEO({ currentPath }: { currentPath: string }) {
  const { lang } = useLanguage();

  useEffect(() => {
    const isFr = lang === 'fr';
    const isBoucheriePage = currentPath === '/boucherie-prix';
    
    // Update basic language properties
    document.documentElement.lang = isFr ? 'fr-CA' : 'en-CA';

    // Construct titles based on route and language
    let title = 'Marché Freshco | Épicerie Halal & Produits Multiculturels';
    let description = 'Découvrez Marché Freshco à Pierrefonds. Boucherie 100% Halal Zabiha, produits asiatiques et fruits tropicaux. Fraîcheur garantie.';
    
    if (!isFr) {
      title = 'Marché Freshco | Halal Grocery & Multicultural Products';
      description = 'Discover Marché Freshco in Pierrefonds. 100% Zabiha Halal butcher, Asian products, and tropical fruits. Freshness guaranteed.';
    }

    if (isBoucheriePage) {
      title = isFr 
        ? 'Prix de la Boucherie Halal | Marché Freshco Montréal' 
        : 'Halal Butcher Prices | Marché Freshco Montreal';
      description = isFr
        ? 'Consultez les prix complets de notre boucherie halal 100% Zabiha. Bœuf, veau, agneau, chèvre et volaille frais tous les jours.'
        : 'Check current prices for our 100% Zabiha halal butcher shop. Fresh beef, veal, lamb, goat, and poultry cut daily.';
    }

    // Apply the title
    document.title = title;

    // Apply the Open Graph Title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);

    // Apply the description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', description);

    // Update canonical link URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://marchefreshco.com${currentPath}`);
    }

  }, [currentPath, lang]);

  return null; // Headless component
}
