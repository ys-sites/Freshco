import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export function NewsletterSignup() {
  const { lang } = useLanguage();
  const isFr = lang === 'fr';

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2D5A27] to-[#122b0f] rounded-[24px] p-5 lg:p-6 w-full h-full shadow-sleek border border-[#3E6F38] flex flex-col xl:flex-row xl:items-center justify-between gap-5 lg:gap-6">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#3E6F38]/40 blur-3xl mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-[#E0A96D]/30 blur-3xl mix-blend-screen pointer-events-none"></div>
      
      {/* Texture image overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
        <img 
          src="https://images.unsplash.com/photo-1606148386121-68b3cc359ea4?q=80&w=1500&auto=format&fit=crop" 
          alt="texture" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 flex-1 w-full max-w-full">
        <div className="mb-2 md:mb-3 inline-flex rounded-full bg-[#3E6F38] px-3 md:px-3 py-1 md:py-1.5 text-[9px] md:text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
          {isFr ? 'Restez Informé' : 'Stay Updated'}
        </div>
        <h2 className="text-xl md:text-2xl lg:text-[28px] font-bold text-white leading-[1.15] mb-2 md:mb-3 tracking-tight">
          {isFr ? "Des offres exclusives et des arrivages frais." : "Exclusive deals and fresh arrivals."}
        </h2>
        <p className="text-[13px] md:text-[14px] text-white/90 leading-relaxed mb-0 max-w-xl">
          {isFr 
            ? "Rejoignez notre liste de diffusion pour recevoir nos spéciaux de la semaine, nos nouvelles recettes, et être le premier informé de nos arrivages exotiques."
            : "Join our mailing list to receive our weekly specials, new recipes, and be the first to know about our exotic arrivals."}
        </p>
      </div>

      <div className="relative z-10 w-full xl:w-auto xl:min-w-[320px]">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md rounded-[16px] p-4 md:p-5 border border-white/20 shadow-xl"
        >
          <div className="flex flex-col gap-2.5 md:gap-3">
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 md:w-4 md:h-4 text-white/60" />
              <input 
                type="email" 
                placeholder={isFr ? "Entrez votre adresse courriel..." : "Enter your email address..."}
                className="w-full bg-black/20 focus:bg-black/40 text-white placeholder:text-white/60 h-[42px] md:h-[48px] pl-10 md:pl-10 pr-3 rounded-[10px] border border-white/10 focus:border-theme-accent focus:outline-none focus:ring-1 focus:ring-theme-accent transition-all text-[12px] md:text-[13px]"
              />
            </div>
            
            <button className="w-full h-[42px] md:h-[48px] bg-theme-accent hover:bg-[#EDA876] text-[#1A1A1A] font-bold text-[13px] md:text-[14px] rounded-[10px] flex items-center justify-center gap-1.5 transition-colors shadow-md">
              {isFr ? "S'abonner Maintenant" : "Subscribe Now"}
              <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </button>
            <p className="text-center text-[9px] md:text-[10px] text-white/50 mt-0 md:mt-0.5 uppercase tracking-wider font-medium">
              {isFr ? "Pas de spam. Promis." : "No spam. We promise."}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
