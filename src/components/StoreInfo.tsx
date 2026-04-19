import { MapPin, Clock, Phone, Instagram, Facebook } from 'lucide-react';
import { motion } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../lib/LanguageContext';

const SPRING = { type: 'spring' as const, stiffness: 600, damping: 25, mass: 0.5 };
const TAP = { scale: 0.96, transition: { duration: 0.08 } };

export function StoreInfo() {
  const { lang } = useLanguage();
  const isFr = lang === 'fr';
  const isTouch = useRef(typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches).current;

  return (
    <section className="bg-theme-card border border-theme-border rounded-[20px] p-4 md:p-4 shadow-sleek w-full relative z-10">
      <div className="flex justify-between items-center mb-3 md:mb-4">
        <h2 className="text-[16px] md:text-[18px] font-bold text-theme-text">{isFr ? "Ouverture et Emplacement" : "Hours & Location"}</h2>
        <span className="text-theme-muted font-bold">→</span>
      </div>

      <div className="flex flex-col gap-2 md:gap-3">
        {/* Location */}
        <motion.div
          className="flex gap-2.5 md:gap-3 items-start group cursor-pointer border-b border-theme-border/60 pb-2.5 md:pb-3"
          whileHover={isTouch ? undefined : { x: 4, transition: SPRING }}
          whileTap={TAP}
        >
          <motion.div
            className="bg-theme-surface text-theme-primary p-2 rounded-[10px] md:rounded-xl group-hover:bg-theme-primary group-hover:text-white transition-colors"
            whileHover={isTouch ? undefined : { scale: 1.2, rotate: -8, transition: SPRING }}
          >
            <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4"/>
          </motion.div>
          <div className="pt-0.5">
            <div className="text-[12px] md:text-[13px] font-bold text-theme-text mb-0.5">{isFr ? "Pierrefonds, Québec" : "Pierrefonds, Quebec"}</div>
            <div className="text-[11px] md:text-[12px] text-theme-muted font-medium">9549 Boul Gouin O, QC H8Y 1R2</div>
          </div>
        </motion.div>
        
        {/* Hours */}
        <motion.div
          className="flex gap-2.5 md:gap-3 items-start group cursor-pointer border-b border-theme-border/60 pb-2.5 md:pb-3"
          whileHover={isTouch ? undefined : { x: 4, transition: SPRING }}
          whileTap={TAP}
        >
          <motion.div
            className="bg-theme-surface text-theme-primary p-2 rounded-[10px] md:rounded-xl group-hover:bg-theme-primary group-hover:text-white transition-colors"
            whileHover={isTouch ? undefined : { scale: 1.2, rotate: 10, transition: SPRING }}
          >
            <Clock className="w-3.5 h-3.5 md:w-4 md:h-4"/>
          </motion.div>
          <div className="pt-0.5">
            <div className="text-[12px] md:text-[13px] font-bold text-theme-text mb-0.5">{isFr ? "Ouvert Aujourd'hui" : "Open Today"}</div>
            <div className="text-[11px] md:text-[12px] text-theme-muted font-medium">08:00 — 21:00</div>
          </div>
        </motion.div>

        {/* Phone */}
        <motion.a
          href="tel:5145421166"
          className="flex gap-2.5 md:gap-3 items-start group cursor-pointer border-b border-theme-border/60 pb-2.5 md:pb-3"
          whileHover={isTouch ? undefined : { x: 4, transition: SPRING }}
          whileTap={TAP}
        >
          <motion.div
            className="bg-theme-surface text-theme-primary p-2 rounded-[10px] md:rounded-xl group-hover:bg-theme-primary group-hover:text-white transition-colors"
            whileHover={isTouch ? undefined : { scale: 1.2, rotate: -10, transition: SPRING }}
          >
            <Phone className="w-3.5 h-3.5 md:w-4 md:h-4"/>
          </motion.div>
          <div className="pt-0.5">
            <div className="text-[12px] md:text-[13px] font-bold text-theme-text mb-0.5">{isFr ? "Contact Direct" : "Direct Contact"}</div>
            <div className="text-[11px] md:text-[12px] text-theme-muted font-medium">(514) 542-1166</div>
          </div>
        </motion.a>

        {/* Instagram */}
        <motion.div
          className="flex gap-2.5 md:gap-3 items-start group cursor-pointer pb-2 relative z-10"
          whileHover={isTouch ? undefined : { x: 4, transition: SPRING }}
          whileTap={TAP}
        >
          <a
            href="https://www.instagram.com/marche_freshco/"
            target="_blank"
            rel="noopener noreferrer"
            className="contents"
            onClick={(e) => { e.stopPropagation(); window.open('https://www.instagram.com/marche_freshco/', '_blank', 'noopener,noreferrer'); e.preventDefault(); }}
          >
            <motion.div
              className="bg-[#E1306C]/10 text-[#E1306C] p-2 rounded-[10px] md:rounded-xl group-hover:bg-gradient-to-tr group-hover:from-[#F56040] group-hover:to-[#833AB4] group-hover:text-white transition-all flex-shrink-0"
              whileHover={isTouch ? undefined : { scale: 1.25, rotate: 8, transition: SPRING }}
            >
              <Instagram className="w-3.5 h-3.5 md:w-4 md:h-4"/>
            </motion.div>
            <div className="pt-0.5">
              <div className="text-[12px] md:text-[13px] font-bold text-theme-text mb-0.5">{isFr ? "Suivez-nous sur Instagram" : "Follow on Instagram"}</div>
              <div className="text-[11px] md:text-[12px] text-theme-muted font-medium">@marche_freshco</div>
            </div>
          </a>
        </motion.div>

        {/* Facebook */}
        <motion.div
          className="flex gap-2.5 md:gap-3 items-start group cursor-pointer pb-1 relative z-10"
          whileHover={isTouch ? undefined : { x: 4, transition: SPRING }}
          whileTap={TAP}
        >
          <a
            href="https://www.facebook.com/profile.php?id=61576117831213"
            target="_blank"
            rel="noopener noreferrer"
            className="contents"
            onClick={(e) => { e.stopPropagation(); window.open('https://www.facebook.com/profile.php?id=61576117831213', '_blank', 'noopener,noreferrer'); e.preventDefault(); }}
          >
            <motion.div
              className="bg-[#1877F2]/10 text-[#1877F2] p-2 rounded-[10px] md:rounded-xl group-hover:bg-[#1877F2] group-hover:text-white transition-all flex-shrink-0"
              whileHover={isTouch ? undefined : { scale: 1.25, rotate: -8, transition: SPRING }}
            >
              <Facebook className="w-3.5 h-3.5 md:w-4 md:h-4"/>
            </motion.div>
            <div className="pt-0.5">
              <div className="text-[12px] md:text-[13px] font-bold text-theme-text mb-0.5">{isFr ? "Aimez notre page Facebook" : "Like us on Facebook"}</div>
              <div className="text-[11px] md:text-[12px] text-theme-muted font-medium">Marché Freshco</div>
            </div>
          </a>
        </motion.div>
      </div>
      
      {/* Button */}
      <motion.a
        href="https://www.google.com/maps/dir/?api=1&destination=9549+Boul+Gouin+O,+Pierrefonds,+QC+H8Y+1R2"
        target="_blank"
        rel="noopener noreferrer"
        className="motion-card w-full mt-3 md:mt-4 bg-transparent border-2 border-theme-border text-theme-text font-bold py-2 md:py-2 px-4 rounded-[10px] text-[12px] md:text-[13px] hover:border-theme-primary hover:text-theme-primary transition-[border-color,color] flex justify-center items-center gap-2"
        whileHover={isTouch ? undefined : { scale: 1.03, y: -2, transition: SPRING }}
        whileTap={{ scale: 0.97, transition: { duration: 0.08 } }}
      >
        {isFr ? "Obtenir l'itinéraire" : "Get Directions"}
      </motion.a>
    </section>
  );
}

