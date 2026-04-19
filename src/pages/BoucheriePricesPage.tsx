import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

const categories = [
  {
    nameFr: 'BŒUF', nameEn: 'BEEF',
    items: [
      { nameFr: 'Bœuf sans os', nameEn: 'Boneless Beef', price: '$10.59/lb' },
      { nameFr: 'Foie de bœuf', nameEn: 'Beef Liver', price: '$9.99/lb' },
      { nameFr: 'Bifteck de surlonge', nameEn: 'Sirloin', price: '$12.99/lb' },
      { nameFr: 'Jarret de bœuf', nameEn: 'Stew Meat', price: '$12.99/lb' },
      { nameFr: 'Bœuf haché', nameEn: 'Beef Mince', price: '$8.75/lb' },
      { nameFr: 'Pieds de bœuf', nameEn: 'Beef Paya', price: '$5.59/lb' },
    ]
  },
  {
    nameFr: 'VEAU', nameEn: 'VEAL',
    items: [
      { nameFr: 'Épaule de veau', nameEn: 'Veal Shoulder', price: '$9.55/lb' },
      { nameFr: 'Veau sans os', nameEn: 'Boneless Veal', price: '$12.99/lb' },
      { nameFr: 'Nihari de veau avec os', nameEn: 'Veal Nihari with bone', price: '$6.99/lb' },
      { nameFr: 'Nihari de veau sans os', nameEn: 'Boneless Veal Nihari', price: '$12.99/lb' },
    ]
  },
  {
    nameFr: 'AGNEAU & CHÈVRE', nameEn: 'LAMB & GOAT',
    items: [
      { nameFr: 'Agneau entier', nameEn: 'Whole Lamb', price: '$15.99/lb' },
      { nameFr: 'Épaule d\'agneau', nameEn: 'Lamb Shoulder', price: '$15.99/lb' },
      { nameFr: 'Gigot d\'agneau', nameEn: 'Lamb Leg', price: '$17.99/lb' },
      { nameFr: 'Pieds d\'agneau', nameEn: 'Lamb Paya', price: '$5.99/lb' },
      { nameFr: 'Chèvre entière', nameEn: 'Whole Goat', price: '$15.99/lb' },
      { nameFr: 'Épaule de chèvre', nameEn: 'Goat Shoulder', price: '$15.99/lb' },
      { nameFr: 'Gigot de chèvre', nameEn: 'Goat Leg', price: '$17.99/lb' },
      { nameFr: 'Foie de chèvre', nameEn: 'Goat Liver', price: '$15.99/lb' },
    ]
  },
  {
    nameFr: 'POULET', nameEn: 'CHICKEN',
    items: [
      { nameFr: 'Poulet dur', nameEn: 'Hard Chicken', price: 'Prix en magasin / In-store' },
      { nameFr: 'Poulet haché', nameEn: 'Chicken Mince', price: '$7.99/lb' },
      { nameFr: 'Pattes de poulet', nameEn: 'Chicken Feet', price: 'Prix en magasin / In-store' },
      { nameFr: 'Poulet entier', nameEn: 'Whole Chicken', price: '$3.49/lb' },
      { nameFr: 'Cuisses de poulet avec os', nameEn: 'Chicken Legs with bone', price: '$4.29/lb' },
      { nameFr: 'Pilons de poulet avec os', nameEn: 'Chicken Drumsticks with bone', price: '$4.29/lb' },
      { nameFr: 'Hauts de cuisse avec os', nameEn: 'Chicken Thighs with bone', price: '$4.29/lb' },
      { nameFr: 'Poitrine de poulet avec os', nameEn: 'Chicken Breast with bone', price: 'Prix en magasin / In-store' },
      { nameFr: 'Poulet sans os', nameEn: 'Boneless Chicken', price: '$7.49/lb' },
      { nameFr: 'Cuisses de poulet sans os', nameEn: 'Chicken Thighs without bone', price: '$7.49/lb' },
    ]
  },
  {
    nameFr: 'MORCEAUX', nameEn: 'PIECES',
    items: [
      { nameFr: 'Foie de poulet', nameEn: 'Chicken Liver', price: '$3.99/lb' },
      { nameFr: 'Gésier de poulet', nameEn: 'Chicken Gizzard', price: '$3.99/lb' },
    ]
  }
];

export default function BoucheriePricesPage() {
  const { lang, setLang } = useLanguage();
  const isFr = lang === 'fr';

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-theme-bg flex flex-col"
    >
      <header className="sticky top-0 z-50 w-full border-b border-theme-border bg-white shadow-sm">
        <div className="mx-auto flex min-h-[80px] py-3 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="/" onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, '', '/');
            window.dispatchEvent(new Event('popstate'));
          }} className="flex items-center gap-2 group text-theme-muted hover:text-theme-primary transition-colors">
            <div className="w-10 h-10 rounded-full bg-theme-surface flex items-center justify-center group-hover:bg-theme-primary group-hover:text-white transition-all">
              <ArrowLeft className="w-5 h-5"/>
            </div>
            <span className="font-bold hidden sm:block uppercase tracking-wide text-sm">{isFr ? 'Retour à l\'accueil' : 'Back to Home'}</span>
          </a>
          <div className="flex items-center gap-2 sm:gap-3 text-[22px] sm:text-2xl font-extrabold tracking-tight text-theme-primary uppercase whitespace-nowrap">
            <img src="/logo_cropped.png" alt="Marché Freshco Logo" className="w-10 h-10 md:w-14 md:h-14 object-contain flex-shrink-0 drop-shadow-sm" />
            <span className="pt-1">Marché Freshco</span>
          </div>
          <div className="flex items-center gap-2 text-[15px] font-bold">
            <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-theme-text' : 'text-theme-muted hover:text-theme-text transition-colors'}>EN</button>
            <span className="text-theme-border font-light">/</span>
            <button onClick={() => setLang('fr')} className={lang === 'fr' ? 'text-theme-text' : 'text-theme-muted hover:text-theme-text transition-colors'}>FR</button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-theme-text uppercase tracking-tight mb-4">
            {isFr ? 'Notre Boucher Halal' : 'Our Halal Butcher'}
          </h1>
          <p className="text-theme-muted text-[15px] md:text-[18px] max-w-2xl mx-auto">
            {isFr ? "Découvrez nos coupes de viandes fraîches certifiées Zabiha préparées quotidiennement. Sous réserve de modifications sans préavis." : "Discover our fresh daily prepared Zabiha certified halal cuts. Prices are subject to change without notice."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {categories.map((cat, idx) => (
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              key={idx} 
              className="bg-white p-6 md:p-8 rounded-[24px] border border-theme-border shadow-sleek relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary/5 rounded-bl-[100px] pointer-events-none"></div>
              
              <h2 className="text-[18px] md:text-[20px] font-bold text-theme-primary uppercase tracking-wide border-b-2 border-theme-border pb-3 mb-5 relative z-10">
                {isFr ? cat.nameFr : cat.nameEn}
              </h2>
              
              <ul className="space-y-4 relative z-10">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex justify-between items-end border-b border-theme-border/40 pb-3 last:border-0 last:pb-0">
                    <span className="text-[15px] md:text-[16px] text-theme-text font-semibold pr-4 leading-snug">
                      {isFr ? item.nameFr : item.nameEn}
                    </span>
                    <span className="text-[16px] md:text-[17px] font-bold text-[#1f4a18] whitespace-nowrap bg-theme-surface px-3 py-1 rounded-lg">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </main>
    </motion.div>
  );
}

