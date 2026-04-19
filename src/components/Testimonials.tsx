import { motion } from 'motion/react';
import { Star, User } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export function Testimonials() {
  const { lang } = useLanguage();
  const isFr = lang === 'fr';

  const testimonials = [
    {
      author: "Amina R.",
      role: isFr ? "Cliente Locale" : "Local Customer",
      text: isFr ? "La qualité du bœuf Halal ici est inégalée à Montréal. Je fais 30 minutes de trajet pour avoir leurs coupes fraîches et épices." : "The quality of the Halal beef here is unmatched in Montreal. I travel 30 minutes just to get their fresh cuts and spices.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    },
    {
      author: "Hassan T.",
      role: isFr ? "Acheteur Hebdomadaire" : "Weekly Shopper",
      text: isFr ? "Enfin un endroit où je peux trouver tous mes produits africains de base et des légumes frais. Le personnel est incroyable." : "Finally, a place where I can find all my African grain staples and fresh produce in one stop. The staff is incredible.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
    {
      author: "Sarah M.",
      role: isFr ? "Influenceuse Culinaire" : "Food Blogger",
      text: isFr ? "Je viens ici pour les fruits exotiques. Tout est toujours parfaitement mûr et prêt. Un vrai joyau du quartier." : "I come here for the exotic fruits and the beautiful presentation. Everything is always perfectly ripe and ready.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    },
    {
      author: "Omar D.",
      role: isFr ? "Chef Cuisinier Local" : "Local Chef",
      text: isFr ? "La boucherie prend les commandes spéciales très au sérieux. Quand mon restaurant a besoin d'une coupe spécifique, c'est prêt." : "The boucherie takes custom orders very seriously. Whenever our restaurant needs a specialized cut of lamb, they have it ready.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    }
  ];

  return (
    <section className="bg-gradient-to-br from-[#2D5A27] to-[#122b0f] text-white border border-theme-border rounded-[24px] py-8 md:py-10 shadow-sleek w-full relative overflow-hidden">
      
      {/* Decorative Background Elements from Email Marketing */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#3E6F38]/40 blur-3xl mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-[#E0A96D]/30 blur-3xl mix-blend-screen pointer-events-none"></div>
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay border-none">
        <img 
          src="https://images.unsplash.com/photo-1606148386121-68b3cc359ea4?q=80&w=1500&auto=format&fit=crop" 
          alt="texture" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-0"></div>

      <div className="absolute top-0 right-0 p-8 opacity-15">
        <h2 className="text-[120px] font-sans leading-none z-0 relative">"</h2>
      </div>

      <div className="mb-10 px-8 md:px-10 relative z-10 w-full relative z-10">
        <div className="inline-block rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-[11px] font-bold text-white uppercase tracking-wider mb-4">
          {isFr ? 'Témoignages' : 'Testimonials'}
        </div>
        <h2 className="text-[26px] font-bold">{isFr ? 'Ce que dit notre communauté.' : 'What our community says.'}</h2>
      </div>

      <div className="relative z-10 w-full overflow-hidden pb-4 pt-1">
        <motion.div 
          className="flex gap-6 px-8 md:px-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          {/* Double array for seamless looping */}
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div 
              key={idx}
              className="bg-white/10 backdrop-blur-sm rounded-[16px] p-6 border border-white/10 shadow-xl w-[320px] md:w-[380px] flex-shrink-0"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-theme-accent text-theme-accent" />
                ))}
              </div>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-white/95 mb-6 font-medium italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E0A96D]/30 flex items-center justify-center border-2 border-white/20 flex-shrink-0">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[14px]">{t.author}</div>
                  <div className="text-[12px] text-white/70">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
