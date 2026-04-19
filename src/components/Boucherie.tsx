import { useLanguage } from '../lib/LanguageContext';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const SPRING = { type: 'spring' as const, stiffness: 600, damping: 25, mass: 0.5 };

export function Boucherie() {
  const { lang } = useLanguage();
  const isFr = lang === 'fr';

  return (
    <section className="bg-theme-card border border-theme-border rounded-[24px] p-8 md:p-10 shadow-sleek relative overflow-hidden flex flex-col md:flex-row-reverse gap-8 items-center w-full" id="halal">
       <div className="flex-1 z-10 w-full">
         <motion.div
           className="inline-block rounded-full bg-theme-surface px-4 py-1.5 text-[11px] font-bold text-theme-primary uppercase tracking-wider mb-4 cursor-default"
           whileHover={{ scale: 1.05, transition: SPRING }}
         >
           {isFr ? 'Notre Boucherie' : 'Our Boucherie'}
         </motion.div>
         <h2 className="text-[28px] md:text-[32px] font-bold text-theme-text leading-[1.2] mb-4">
           {isFr ? 'Coupes Halal, fraîches chaque jour.' : 'Halal cuts, fresh daily.'}
         </h2>
         <p className="text-theme-muted text-[15px] leading-relaxed mb-6">
           {isFr 
             ? "Découvrez notre sélection de viande 100% Halal Zabiha de première qualité. Que vous cherchiez un agneau tendre, de la volaille fraîche ou des coupes de bœuf spécifiques, nos bouchers experts préparent tout sur place. Besoin d'une commande personnalisée pour une recette spéciale ? Nous avons ce qu'il vous faut." 
             : "Discover our premium selection of 100% Zabiha Halal meat. Whether you're looking for tender lamb, fresh poultry, or specific beef cuts, our expert butchers prepare everything in-house. Need a custom order for a special recipe? We've got you covered."}
         </p>
         <div className="flex flex-wrap gap-2 text-[13px] font-bold text-theme-primary bg-theme-surface p-4 rounded-xl">
           {[
             isFr ? 'Commandes Personnalisées' : 'Custom Orders',
             isFr ? 'Bœuf, Agneau et Volaille' : 'Beef, Lamb & Poultry',
             isFr ? 'Normes Zabiha Strictes' : 'Strict Zabiha Standards'
           ].map((label) => (
             <motion.span
               key={label}
               className="bg-white px-3 py-1.5 rounded-md shadow-sm border border-theme-border cursor-default"
               whileHover={{ y: -3, scale: 1.05, transition: SPRING }}
               whileTap={{ scale: 0.96, transition: { duration: 0.08 } }}
             >
               ✓ {label}
             </motion.span>
           ))}
         </div>
         
         <motion.a 
           href="/boucherie-prix"
           onClick={(e) => {
             e.preventDefault();
             window.history.pushState({}, '', '/boucherie-prix');
             window.dispatchEvent(new Event('popstate'));
           }}
           className="mt-6 sm:mt-8 bg-theme-primary text-white font-bold py-3.5 px-6 rounded-[12px] inline-flex items-center gap-2 hover:bg-[#1f4a18] hover:shadow-lg transition-[background-color,box-shadow] w-full sm:w-auto justify-center"
           whileHover={{ scale: 1.05, y: -3, transition: SPRING }}
           whileTap={{ scale: 0.95, transition: { duration: 0.08 } }}
         >
           {isFr ? 'Voir nos prix détaillés' : 'View our detailed prices'} <ChevronRight className="w-5 h-5"/>
         </motion.a>
       </div>
       
       <motion.div
         className="w-full md:w-[45%] h-64 md:h-[320px] rounded-[16px] overflow-hidden relative shadow-sm flex-shrink-0 border border-theme-border"
         whileHover={{ scale: 1.02, transition: SPRING }}
       >
         <img 
           src="/halal.jpg" 
           alt="Our Halal Boucherie"
           referrerPolicy="no-referrer"
           className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
         />
       </motion.div>
    </section>
  )
}
