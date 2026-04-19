import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const { lang } = useLanguage();
  const isFr = lang === 'fr';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = isFr
    ? [
        {
          question: "Où est situé Marché Freshco ?",
          answer: "Marché Freshco est situé au 9549 Boulevard Gouin Ouest, Pierrefonds, Québec, H8Y 1R2. Nous sommes facilement accessibles en voiture et en transport en commun dans l'ouest de Montréal.",
        },
        {
          question: "Quels sont les horaires d'ouverture de Marché Freshco ?",
          answer: "Marché Freshco est ouvert 7 jours sur 7, de 08h00 à 21h00. Vous pouvez nous joindre par téléphone au (438) 969-7966.",
        },
        {
          question: "La viande vendue chez Marché Freshco est-elle 100% Halal ?",
          answer: "Oui, toutes nos viandes sont 100% Halal Zabiha. Nous respectons des normes strictes d'abattage islamique pour le bœuf, le veau, l'agneau, la chèvre et la volaille. Des coupes personnalisées sont disponibles sur demande.",
        },
        {
          question: "Quels types de produits trouve-t-on à Marché Freshco ?",
          answer: "Marché Freshco propose une large variété de produits : viandes halal fraîches, fruits et légumes exotiques (plantains, mangues, okra, aubergines asiatiques), épices importées, produits africains (manioc, foufou, huile de palme), spécialités sud-asiatiques (riz basmati, dhal, ghee), produits du Moyen-Orient (dattes, tahini, olives), et bien plus encore.",
        },
        {
          question: "Marché Freshco propose-t-il des commandes de boucherie personnalisées ?",
          answer: "Oui ! Notre boucherie halal accepte des commandes personnalisées pour des coupes spécifiques d'agneau, de bœuf ou de volaille. Contactez-nous au (438) 969-7966 pour planifier votre commande.",
        },
        {
          question: "Comment contacter Marché Freshco ?",
          answer: "Vous pouvez nous joindre par téléphone au (438) 969-7966, par courriel à Marchefreshco@gmail.com, ou nous suivre sur Instagram @marche_freshco et Facebook (Marché Freshco).",
        },
        {
          question: "Y a-t-il des promotions ou spéciaux de la semaine chez Marché Freshco ?",
          answer: "Oui, Marché Freshco publie chaque semaine un circulaire avec des promotions spéciales sur les fruits, légumes, et produits d'épicerie. Consultez notre section « Nos Arrivages / Circulaire » sur ce site ou suivez-nous sur nos réseaux sociaux pour rester informé.",
        },
      ]
    : [
        {
          question: "Where is Marché Freshco located?",
          answer: "Marché Freshco is located at 9549 Boulevard Gouin Ouest, Pierrefonds, Quebec, H8Y 1R2. We are conveniently accessible by car and public transit in the west end of Montreal.",
        },
        {
          question: "What are the hours of operation at Marché Freshco?",
          answer: "Marché Freshco is open 7 days a week from 8:00 AM to 9:00 PM. You can reach us by phone at (438) 969-7966.",
        },
        {
          question: "Is the meat at Marché Freshco 100% Halal?",
          answer: "Yes, all our meat is 100% Zabiha Halal. We uphold strict Islamic slaughter standards for beef, veal, lamb, goat, and poultry. Custom cuts are available on request.",
        },
        {
          question: "What types of products does Marché Freshco carry?",
          answer: "Marché Freshco carries a wide variety of products including: fresh halal meats, exotic fruits and vegetables (plantains, mangoes, okra, Asian eggplants), imported spices, African staples (cassava, fufu, palm oil), South Asian specialties (basmati rice, dhal, ghee), Middle Eastern goods (dates, tahini, olives), and much more.",
        },
        {
          question: "Does Marché Freshco offer custom butcher orders?",
          answer: "Yes! Our halal butcher accepts custom orders for specific cuts of lamb, beef, or poultry. Contact us at (438) 969-7966 to arrange your custom order.",
        },
        {
          question: "How can I contact Marché Freshco?",
          answer: "You can reach us by phone at (438) 969-7966, by email at Marchefreshco@gmail.com, or follow us on Instagram @marche_freshco and on Facebook (Marché Freshco).",
        },
        {
          question: "Does Marché Freshco have weekly deals or a flyer?",
          answer: "Yes, Marché Freshco publishes weekly specials and promotions on fruits, vegetables, and grocery products. Check our 'Weekly Deals / Flyer' section on this page or follow us on social media to stay updated.",
        },
      ];

  // Inject FAQPage JSON-LD schema each time language or FAQs change
  useEffect(() => {
    const schemaId = 'faqpage-schema';
    const existing = document.getElementById(schemaId);
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = schemaId;
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-theme-card border border-theme-border rounded-[24px] p-6 md:p-8 shadow-sleek w-full"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="mb-6">
        <div className="inline-block rounded-full bg-theme-surface px-3 py-1 text-[11px] font-bold text-theme-primary uppercase tracking-wider mb-3">
          {isFr ? 'Questions Fréquentes' : 'Frequently Asked Questions'}
        </div>
        <h2
          id="faq-heading"
          className="text-[22px] font-bold text-theme-text"
        >
          {isFr ? 'Tout ce que vous avez besoin de savoir.' : 'Everything you need to know.'}
        </h2>
        <p className="text-[14px] text-theme-muted mt-1">
          {isFr
            ? 'Des réponses claires à vos questions les plus courantes.'
            : 'Clear answers to your most common questions.'}
        </p>
      </div>

      {/* Semantic dl/dt/dd for maximum AI crawler parsability */}
      <dl className="flex flex-col divide-y divide-theme-border">
        {faqs.map((faq, i) => (
          <div
            key={i}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
            className="py-4 first:pt-0"
          >
            <dt itemProp="name">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left group"
                aria-expanded={openIndex === i}
                id={`faq-q-${i}`}
                aria-controls={`faq-a-${i}`}
              >
                <span className="font-semibold text-[14px] md:text-[15px] text-theme-text group-hover:text-theme-primary transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 flex-shrink-0 text-theme-muted transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180 text-theme-primary' : ''
                  }`}
                />
              </button>
            </dt>
            <dd
              id={`faq-a-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === i ? 'max-h-96 mt-3' : 'max-h-0'
              }`}
            >
              <p
                itemProp="text"
                className="text-[13px] md:text-[14px] text-theme-muted leading-relaxed"
              >
                {faq.answer}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
