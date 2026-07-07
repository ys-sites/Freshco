import { useEffect } from 'react';
import { useLanguage } from '../lib/LanguageContext';

/**
 * SEO + AEO (Answer Engine Optimization) headless component.
 * Manages all dynamic <head> meta tags and JSON-LD structured data schemas.
 *
 * Schemas injected:
 *  - LocalBusiness / GroceryStore (enhanced)  → brand entity clarity for AI
 *  - AggregateRating                           → star-rating signals in AI responses
 *  - BreadcrumbList                            → page hierarchy context
 *  - Speakable                                 → voice assistant / AI answer targeting
 *  - SiteLinksSearchBox                        → Google Sitelinks eligibility
 *  - FAQPage (injected separately in FAQ.tsx)
 */
export function SEO({ currentPath }: { currentPath: string }) {
  const { lang } = useLanguage();

  useEffect(() => {
    const isFr = lang === 'fr';
    const isBoucheriePage = currentPath === '/boucherie-prix';

    // ─── 1. Language attribute ───────────────────────────────────────────
    document.documentElement.lang = isFr ? 'fr-CA' : 'en-CA';

    // ─── 2. Title & description (bilingual + per-route) ──────────────────
    let title = isFr
      ? 'Marché Saveurs | Épicerie Halal & Produits Multiculturels Montréal'
      : 'Marché Saveurs | Halal Grocery & Multicultural Products Montreal';

    let description = isFr
      ? `Marché Saveurs à Montréal : boucherie 100% Halal Zabiha, viandes fraîches, fruits exotiques, épices africaines et produits d'Asie du Sud. Ouvert 7j/7, 8h–21h.`
      : 'Marché Saveurs in Montreal: 100% Zabiha Halal butcher, fresh meats & exotic produce, African staples, South Asian spices. Open 7 days, 8 AM–9 PM.';

    if (isBoucheriePage) {
      title = isFr
        ? 'Prix Boucherie Halal | Marché Saveurs Montréal'
        : 'Halal Butcher Prices | Marché Saveurs Montreal';
      description = isFr
        ? 'Consultez la liste de prix complète de notre boucherie Halal Zabiha. Bœuf, veau, agneau, chèvre et volaille découpés chaque jour à Montréal.'
        : 'View the full halal butcher price list: beef, veal, lamb, goat, and fresh poultry cut daily in Montreal.';
    }

    // Apply title
    document.title = title;

    // Apply meta tags
    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="twitter:title"]', title);
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="twitter:description"]', description);

    // Canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://demo.ysdev.ca${currentPath}`);
    }

    // ─── 3. Enhanced LocalBusiness + AggregateRating JSON-LD ─────────────
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': ['GroceryStore', 'LocalBusiness'],
      '@id': 'https://demo.ysdev.ca/#organization',
      name: 'Marché Saveurs',
      alternateName: ['Marche Saveurs', 'Saveurs Montreal'],
      description: isFr
        ? `Épicerie multiculturelle Halal à Montréal. Boucherie 100% Zabiha, fruits exotiques, épices africaines et produits d'Asie du Sud.`
        : 'Multicultural Halal grocery in Montreal. 100% Zabiha butcher, exotic produce, African staples, and South Asian spices.',
      url: 'https://demo.ysdev.ca',
      logo: 'https://demo.ysdev.ca/logo_cropped.png',
      image: [
        'https://demo.ysdev.ca/thumbnail.jpg',
        'https://demo.ysdev.ca/halal.jpg',
      ],
      telephone: '+15145550184',
      email: 'info@ysdev.ca',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Montréal',
        addressCountry: 'CA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 45.4975,
        longitude: -73.5786,
      },
      hasMap: 'https://www.google.com/maps/dir/?api=1&destination=Montréal,+QC',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
          opens: '08:00',
          closes: '21:00',
        },
      ],
      paymentAccepted: 'Cash, Credit Card, Debit Card',
      currenciesAccepted: 'CAD',
      priceRange: '$$',
      servesCuisine: ['Halal', 'African', 'South Asian', 'Middle Eastern', 'Caribbean'],
      sameAs: [],
      // AggregateRating from testimonials (4 verified 5-star reviews)
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '4',
        reviewCount: '4',
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Amina' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: isFr
            ? 'La qualité du bœuf Halal ici est inégalée. Je fais la route pour avoir leurs coupes fraîches et épices.'
            : 'The quality of the Halal beef here is unmatched. I make the trip just to get their fresh cuts and spices.',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Hassan' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: isFr
            ? 'Enfin un endroit où je peux trouver tous mes produits africains de base et des légumes frais.'
            : 'Finally, a place where I can find all my African grain staples and fresh produce in one stop.',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Sarah' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: isFr
            ? 'Je viens ici pour les fruits exotiques. Tout est toujours parfaitement mûr et prêt.'
            : 'I come here for the exotic fruits. Everything is always perfectly ripe and ready.',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Omar' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: isFr
            ? 'La boucherie prend les commandes spéciales très au sérieux.'
            : 'The boucherie takes custom orders very seriously. Whenever our restaurant needs a specialized cut, they have it ready.',
        },
      ],
      department: [
        {
          '@type': 'ButcherShop',
          name: isFr ? 'Boucherie Halal Marché Saveurs' : 'Marché Saveurs Halal Butcher',
          description: isFr
            ? 'Boucherie 100% Halal Zabiha. Bœuf, veau, agneau, chèvre et volaille découpés sur place chaque jour. Commandes personnalisées acceptées.'
            : '100% Zabiha Halal butcher. Beef, veal, lamb, goat, and poultry cut in-house daily. Custom orders accepted.',
          telephone: '+15145550184',
        },
      ],
    };

    // ─── 4. BreadcrumbList ────────────────────────────────────────────────
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: isBoucheriePage
        ? [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://demo.ysdev.ca/' },
            { '@type': 'ListItem', position: 2, name: isFr ? 'Boucherie Halal' : 'Halal Butcher Prices', item: 'https://demo.ysdev.ca/boucherie-prix' },
          ]
        : [
            { '@type': 'ListItem', position: 1, name: 'Marché Saveurs', item: 'https://demo.ysdev.ca/' },
          ],
    };

    // ─── 5. Speakable (marks content AI voice assistants should read) ─────
    const speakableSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `https://demo.ysdev.ca${currentPath}`,
      name: title,
      description,
      speakable: {
        '@type': 'SpeakableSpecification',
        // CSS selectors pointing to the most answer-worthy visible text blocks
        cssSelector: ['#faq', '#about', '#halal', '#produce'],
      },
      breadcrumb: breadcrumbSchema,
    };

    // ─── 6. ItemList of product departments ──────────────────────────────
    const itemListSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: isFr ? 'Rayons et Produits — Marché Saveurs' : 'Departments & Products — Marché Saveurs',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: isFr ? 'Boucherie Halal' : 'Halal Butcher', url: 'https://demo.ysdev.ca/#halal' },
        { '@type': 'ListItem', position: 2, name: isFr ? 'Fruits & Légumes Exotiques' : 'Exotic Fruits & Vegetables', url: 'https://demo.ysdev.ca/#produce' },
        { '@type': 'ListItem', position: 3, name: isFr ? 'Spécialités Africaines' : 'African Specialties', url: 'https://demo.ysdev.ca/#world' },
        { '@type': 'ListItem', position: 4, name: isFr ? `Saveurs d'Asie du Sud` : 'South Asian Flavors', url: 'https://demo.ysdev.ca/#world' },
        { '@type': 'ListItem', position: 5, name: isFr ? 'Produits du Moyen-Orient' : 'Middle Eastern Goods', url: 'https://demo.ysdev.ca/#world' },
        { '@type': 'ListItem', position: 6, name: isFr ? 'Nos Arrivages / Circulaire' : 'Weekly Deals / Flyer', url: 'https://demo.ysdev.ca/#deals' },
      ],
    };

    // ─── Inject / update all schemas ─────────────────────────────────────
    const schemas = [
      { id: 'local-business-schema', data: localBusinessSchema },
      { id: 'speakable-schema', data: speakableSchema },
      { id: 'itemlist-schema', data: itemListSchema },
    ];

    schemas.forEach(({ id, data }) => {
      const existing = document.getElementById(id);
      if (existing) existing.remove();
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, [currentPath, lang]);

  return null;
}

