import { useLanguage } from '../lib/LanguageContext';

export function Boucherie() {
  const { lang } = useLanguage();
  const isFr = lang === 'fr';

  return (
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
  )
}
