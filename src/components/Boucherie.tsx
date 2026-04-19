import { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight } from 'lucide-react';

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
      { nameFr: 'Épaule de veau', nameEn: 'Veal Shoulder', price: '$4.55/lb' },
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
      { nameFr: 'Gigot d\'agneau', nameEn: 'Lamb Leg', price: '$15.99/lb' },
      { nameFr: 'Pieds d\'agneau', nameEn: 'Lamb Paya', price: '$5.99/lb' },
      { nameFr: 'Chèvre entière', nameEn: 'Whole Goat', price: '$5.99/lb' },
      { nameFr: 'Épaule de chèvre', nameEn: 'Goat Shoulder', price: '$5.99/lb' },
      { nameFr: 'Gigot de chèvre', nameEn: 'Goat Leg', price: '$17.99/lb' },
      { nameFr: 'Foie de chèvre', nameEn: 'Goat Liver', price: '$15.99/lb' },
    ]
  },
  {
    nameFr: 'POULET', nameEn: 'CHICKEN',
    items: [
      { nameFr: 'Poulet dur', nameEn: 'Hard Chicken', price: '$7.99/lb' },
      { nameFr: 'Poulet haché', nameEn: 'Chicken Mince', price: '$7.99/lb' },
      { nameFr: 'Pattes de poulet', nameEn: 'Chicken Feet', price: '$4.45/lb' },
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
      { nameFr: 'Gésier de poulet', nameEn: 'Chicken Gizzard', price: '$0.99/lb' },
    ]
  }
];

export function Boucherie() {
  const { lang } = useLanguage();
  const isFr = lang === 'fr';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="bg-theme-card border border-theme-border rounded-[24px] p-8 md:p-10 shadow-sleek relative overflow-hidden flex flex-col md:flex-row-reverse gap-8 items-center w-full" id="halal">
         <div className="flex-1 z-10 w-full">
           <div className="inline-block rounded-full bg-theme-surface px-4 py-1.5 text-[11px] font-bold text-theme-primary uppercase tracking-wider mb-4">
             {isFr ? 'Notre Boucherie' : 'Our Boucherie'}
           </div>
           <h2 className="text-[28px] md:text-[32px] font-bold text-theme-text leading-[1.2] mb-4">
             {isFr ? 'Coupes Halal, fraîches chaque jour.' : 'Halal cuts, fresh daily.'}
           </h2>
           <p className="text-theme-muted text-[15px] leading-relaxed mb-6">
             {isFr 
               ? "Découvrez notre sélection de viande 100% Halal Zabiha de première qualité. Que vous cherchiez un agneau tendre, de la volaille fraîche ou des coupes de bœuf spécifiques, nos bouchers experts préparent tout sur place. Besoin d'une commande personnalisée pour une recette spéciale ? Nous avons ce qu'il vous faut." 
               : "Discover our premium selection of 100% Zabiha Halal meat. Whether you're looking for tender lamb, fresh poultry, or specific beef cuts, our expert butchers prepare everything in-house. Need a custom order for a special recipe? We've got you covered."}
           </p>
           <div className="flex flex-wrap gap-2 text-[13px] font-bold text-theme-primary bg-theme-surface p-4 rounded-xl">
             <span className="bg-white px-3 py-1.5 rounded-md shadow-sm border border-theme-border">✓ {isFr ? 'Commandes Personnalisées' : 'Custom Orders'}</span>
             <span className="bg-white px-3 py-1.5 rounded-md shadow-sm border border-theme-border">✓ {isFr ? 'Bœuf, Agneau et Volaille' : 'Beef, Lamb & Poultry'}</span>
             <span className="bg-white px-3 py-1.5 rounded-md shadow-sm border border-theme-border">✓ {isFr ? 'Normes Zabiha Strictes' : 'Strict Zabiha Standards'}</span>
           </div>
           
           <button 
             onClick={() => setIsOpen(true)}
             className="mt-6 sm:mt-8 bg-theme-primary text-white font-bold py-3.5 px-6 rounded-[12px] flex items-center gap-2 hover:bg-[#1f4a18] transition-colors w-full sm:w-auto justify-center"
           >
             {isFr ? 'Voir nos prix détaillés' : 'View our detailed prices'} <ChevronRight className="w-5 h-5"/>
           </button>
         </div>
         
         <div className="w-full md:w-[45%] h-64 md:h-[320px] rounded-[16px] overflow-hidden relative shadow-sm flex-shrink-0 border border-theme-border">
           <img 
             src="/halal.jpg" 
             alt="Our Halal Boucherie"
             referrerPolicy="no-referrer"
             className="w-full h-full object-cover" 
           />
         </div>
      </section>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-x-0 bottom-0 md:inset-0 md:m-auto z-[101] bg-theme-bg w-full md:w-[90vw] md:max-w-4xl h-[85vh] md:h-[80vh] rounded-t-[24px] md:rounded-[24px] shadow-2xl flex flex-col overflow-hidden"
            >
              <div className="flex justify-between items-center p-5 md:p-6 border-b border-theme-border bg-theme-surface">
                <div>
                  <h3 className="text-[20px] md:text-[24px] font-bold text-theme-text uppercase">
                    {isFr ? 'Prix de la Boucherie' : 'Boucherie Prices'}
                  </h3>
                  <p className="text-theme-muted text-[13px] md:text-[14px]">
                    {isFr ? 'Sous réserve de modifications sans préavis.' : 'Subject to change without notice.'}
                  </p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-theme-bg border border-theme-border hover:bg-theme-border rounded-full transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5 text-theme-text" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5 md:p-6 bg-theme-bg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {categories.map((cat, idx) => (
                    <div key={idx} className="bg-theme-surface p-5 rounded-[16px] border border-theme-border shadow-sm">
                      <h4 className="text-[15px] font-bold text-theme-primary uppercase tracking-wide border-b border-theme-border/50 pb-2 mb-4">
                        {isFr ? cat.nameFr : cat.nameEn}
                      </h4>
                      <ul className="space-y-3">
                        {cat.items.map((item, i) => (
                          <li key={i} className="flex justify-between items-end border-b border-theme-border/30 pb-2.5 last:border-0 last:pb-0">
                            <span className="text-[13px] md:text-[14px] text-theme-text font-medium pr-4 leading-tight">{isFr ? item.nameFr : item.nameEn}</span>
                            <span className="text-[13px] md:text-[14px] font-bold text-theme-primary whitespace-nowrap">{item.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
