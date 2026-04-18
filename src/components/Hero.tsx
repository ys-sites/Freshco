import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';

export function Hero({ className = '' }: { className?: string }) {
  const { lang } = useLanguage();

  const isFr = lang === 'fr';

  return (
    <section className={`relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#2D5A27] to-[#122b0f] px-5 md:px-6 lg:px-8 py-8 md:py-10 shadow-sleek flex flex-col justify-end w-full min-h-[340px] md:min-h-[400px] ${className}`}>
      
      {/* Decorative Background Elements from Email Marketing */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#3E6F38]/40 blur-3xl mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-[#E0A96D]/30 blur-3xl mix-blend-screen pointer-events-none"></div>
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
        <img 
          src="https://images.unsplash.com/photo-1606148386121-68b3cc359ea4?q=80&w=1500&auto=format&fit=crop" 
          alt="texture" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      
      {/* Right side image - flush, visible on md and up with a hard edge */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 h-full w-[45%] lg:w-[42%] z-0">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full w-full object-cover rounded-r-[24px] opacity-100 mix-blend-normal"
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop"
          alt="Fresh produce and groceries"
          referrerPolicy="no-referrer"
        />
      </div>
      
      {/* Small gradient just at the bottom for mobile text contrast, if any */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-t from-theme-primary/80 to-transparent pointer-events-none z-0"></div>
      
      <div className="relative z-10 w-full md:w-[65%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-3 inline-block rounded-full bg-theme-accent px-3 py-1 text-[10px] font-bold text-black uppercase tracking-wider">
            {isFr ? 'Authentique & Frais' : 'Authentic & Fresh'}
          </div>
          <h1 className="text-[28px] md:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-[1.05] mb-4">
            {isFr ? (
              <>Qualité Supérieure.<br />Saveurs du Monde.</>
            ) : (
              <>Superior Quality.<br />World Flavors.</>
            )}
          </h1>
          <p className="mt-0 mb-6 text-[13px] md:text-[14px] text-white/90 max-w-[380px] leading-relaxed">
            {isFr 
              ? "Votre boucherie Halal de référence et épicerie fine à Montréal. Des produits frais sélectionnés pour votre famille."
              : "Your reference Halal butcher and fine grocery in Montreal. Fresh products carefully selected for your family."}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            <div className="bg-white/10 backdrop-blur-md px-2.5 md:px-3 py-1.5 rounded-full text-[11px] md:text-[12px] text-white font-medium border border-white/10">✓ {isFr ? 'Viande Certifiée Halal' : 'Halal Certified Meat'}</div>
            <div className="bg-white/10 backdrop-blur-md px-2.5 md:px-3 py-1.5 rounded-full text-[11px] md:text-[12px] text-white font-medium border border-white/10">✓ {isFr ? 'Arrivages Quotidiens' : 'Fresh Daily Arrivals'}</div>
            <div className="bg-white/10 backdrop-blur-md px-2.5 md:px-3 py-1.5 rounded-full text-[11px] md:text-[12px] text-white font-medium border border-white/10">✓ {isFr ? 'Épices Importées' : 'Imported Spices'}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
