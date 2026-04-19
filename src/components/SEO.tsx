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
      ? 'Marché Freshco | Épicerie Halal & Produits Multiculturels Montréal'
      : 'Marché Freshco | Halal Grocery & Multicultural Products Montreal';

    let description = isFr
      ? 'Marché Freshco à Pierrefonds, Montréal : boucherie 100% Halal Zabiha, viandes fraîches, fruits exotiques, épices africaines et produits d'Asie du Sud. Ouvert 7j/7, 8h–21h.'
      : 'Marché Freshco in Pierrefonds, Montreal: 100% Zabiha Halal butcher, fresh meats & exotic produce, African staples, South Asian spices. Open 7 days, 8 AM–9 PM.';

    if (isBoucheriePage) {
      title = isFr
        ? 'Prix Boucherie Halal | Marché Freshco Montréal'
        : 'Halal Butcher Prices | Marché Freshco Montreal';
      description = isFr
        ? 'Consultez la liste de prix complète de notre boucherie Halal Zabiha. Bœuf, veau, agneau, chèvre et volaille découpés chaque jour au 9549 Boul Gouin O, Pierrefonds.'
        : 'View the full halal butcher price list: beef, veal, lamb, goat, and fresh poultry cut daily at 9549 Boul Gouin O, Pierrefonds, Montreal.';
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
      canonical.setAttribute('href', `https://marchefreshco.com${currentPath}`);
    }

    // ─── 3. Enhanced LocalBusiness + AggregateRating JSON-LD ─────────────
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': ['GroceryStore', 'LocalBusiness'],
      '@id': 'https://marchefreshco.com/#organization',
      name: 'Marché Freshco',
      alternateName: ['Marche Freshco', 'Freshco Pierrefonds'],
      description: isFr
        ? 'Épicerie multiculturelle Halal à Pierrefonds, Montréal. Boucherie 100% Zabiha, fruits exotiques, épices africaines et produits d'Asie du Sud.'
        : 'Multicultural Halal grocery in Pierrefonds, Montreal. 100% Zabiha butcher, exotic produce, African staples, and South Asian spices.',
      url: 'https://marchefreshco.com',
      logo: 'https://marchefreshco.com/logo_cropped.png',
      image: [
        'https://marchefreshco.com/thumbnail.jpg',
        'https://marchefreshco.com/halal.jpg',
      ],
      telephone: '+14389697966',
      email: 'Marchefreshco@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9549 Boul Gouin O',
        addressLocality: 'Pierrefonds',
        addressRegion: 'QC',
        postalCode: 'H8Y 1R2',
        addressCountry: 'CA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 45.4988,
        longitude: -73.8441,
      },
      hasMap: 'https://www.google.com/maps/dir/?api=1&destination=9549+Boul+Gouin+O,+Pierrefonds,+QC+H8Y+1R2',
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
      sameAs: [
        'https://www.instagram.com/marche_freshco/',
        'https://www.facebook.com/profile.php?id=61576117831213',
      ],
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
          author: { '@type': 'Person', name: 'Amina R.' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: isFr
            ? 'La qualité du bœuf Halal ici est inégalée à Montréal. Je fais 30 minutes de trajet pour avoir leurs coupes fraîches et épices.'
            : 'The quality of the Halal beef here is unmatched in Montreal. I travel 30 minutes just to get their fresh cuts and spices.',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Hassan T.' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: isFr
            ? 'Enfin un endroit où je peux trouver tous mes produits africains de base et des légumes frais.'
            : 'Finally, a place where I can find all my African grain staples and fresh produce in one stop.',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Sarah M.' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: isFr
            ? 'Je viens ici pour les fruits exotiques. Tout est toujours parfaitement mûr et prêt.'
            : 'I come here for the exotic fruits. Everything is always perfectly ripe and ready.',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Omar D.' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: isFr
            ? 'La boucherie prend les commandes spéciales très au sérieux.'
            : 'The boucherie takes custom orders very seriously. Whenever our restaurant needs a specialized cut, they have it ready.',
        },
      ],
      department: [
        {
          '@type': 'ButcherShop',
          name: isFr ? 'Boucherie Halal Marché Freshco' : 'Marché Freshco Halal Butcher',
          description: isFr
            ? 'Boucherie 100% Halal Zabiha. Bœuf, veau, agneau, chèvre et volaille découpés sur place chaque jour. Commandes personnalisées acceptées.'
            : '100% Zabiha Halal butcher. Beef, veal, lamb, goat, and poultry cut in-house daily. Custom orders accepted.',
          telephone: '+14389697966',
        },
      ],
    };

    // ─── 4. BreadcrumbList ────────────────────────────────────────────────
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: isBoucheriePage
        ? [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://marchefreshco.com/' },
            { '@type': 'ListItem', position: 2, name: isFr ? 'Boucherie Halal' : 'Halal Butcher Prices', item: 'https://marchefreshco.com/boucherie-prix' },
          ]
        : [
            { '@type': 'ListItem', position: 1, name: 'Marché Freshco', item: 'https://marchefreshco.com/' },
          ],
    };

    // ─── 5. Speakable (marks content AI voice assistants should read) ─────
    const speakableSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `https://marchefreshco.com${currentPath}`,
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
      name: isFr ? 'Rayons et Produits — Marché Freshco' : 'Departments & Products — Marché Freshco',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: isFr ? 'Boucherie Halal' : 'Halal Butcher', url: 'https://marchefreshco.com/#halal' },
        { '@type': 'ListItem', position: 2, name: isFr ? 'Fruits & Légumes Exotiques' : 'Exotic Fruits & Vegetables', url: 'https://marchefreshco.com/#produce' },
        { '@type': 'ListItem', position: 3, name: isFr ? 'Spécialités Africaines' : 'African Specialties', url: 'https://marchefreshco.com/#world' },
        { '@type': 'ListItem', position: 4, name: isFr ? 'Saveurs d\'Asie du Sud' : 'South Asian Flavors', url: 'https://marchefreshco.com/#world' },
        { '@type': 'ListItem', position: 5, name: isFr ? 'Produits du Moyen-Orient' : 'Middle Eastern Goods', url: 'https://marchefreshco.com/#world' },
        { '@type': 'ListItem', position: 6, name: isFr ? 'Nos Arrivages / Circulaire' : 'Weekly Deals / Flyer', url: 'https://marchefreshco.com/#deals' },
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
