import { MapPin, Clock, Phone, Instagram } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export function StoreInfo() {
  const { lang } = useLanguage();
  const isFr = lang === 'fr';

  return (
    <section className="bg-theme-card border border-theme-border rounded-[20px] p-4 md:p-4 shadow-sleek w-full">
      <div className="flex justify-between items-center mb-3 md:mb-4">
        <h2 className="text-[16px] md:text-[18px] font-bold text-theme-text">{isFr ? "Ouverture et Emplacement" : "Hours & Location"}</h2>
        <span className="text-theme-muted font-bold">→</span>
      </div>

      <div className="flex flex-col gap-2 md:gap-3">
        {/* Location */}
        <div className="flex gap-2.5 md:gap-3 items-start group cursor-pointer border-b border-theme-border/60 pb-2.5 md:pb-3">
          <div className="bg-theme-surface text-theme-primary p-2 rounded-[10px] md:rounded-xl group-hover:bg-theme-primary group-hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4"/>
          </div>
          <div className="pt-0.5">
            <div className="text-[12px] md:text-[13px] font-bold text-theme-text mb-0.5">{isFr ? "Pierrefonds, Québec" : "Pierrefonds, Quebec"}</div>
            <div className="text-[11px] md:text-[12px] text-theme-muted font-medium">9549 Boul Gouin O, QC H8Y 1R2</div>
          </div>
        </div>
        
        {/* Hours */}
        <div className="flex gap-2.5 md:gap-3 items-start group cursor-pointer border-b border-theme-border/60 pb-2.5 md:pb-3">
          <div className="bg-theme-surface text-theme-primary p-2 rounded-[10px] md:rounded-xl group-hover:bg-theme-primary group-hover:text-white transition-colors">
            <Clock className="w-3.5 h-3.5 md:w-4 md:h-4"/>
          </div>
          <div className="pt-0.5">
            <div className="text-[12px] md:text-[13px] font-bold text-theme-text mb-0.5">{isFr ? "Ouvert Aujourd'hui" : "Open Today"}</div>
            <div className="text-[11px] md:text-[12px] text-theme-muted font-medium">08:00 — 21:00</div>
          </div>
        </div>

        {/* Phone */}
        <div className="flex gap-2.5 md:gap-3 items-start group cursor-pointer border-b border-theme-border/60 pb-2.5 md:pb-3">
          <div className="bg-theme-surface text-theme-primary p-2 rounded-[10px] md:rounded-xl group-hover:bg-theme-primary group-hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 md:w-4 md:h-4"/>
          </div>
          <div className="pt-0.5">
            <div className="text-[12px] md:text-[13px] font-bold text-theme-text mb-0.5">{isFr ? "Contact Direct" : "Direct Contact"}</div>
            <div className="text-[11px] md:text-[12px] text-theme-muted font-medium">(438) 969-7966</div>
          </div>
        </div>

        {/* Instagram */}
        <a href="https://www.instagram.com/marche_freshco/" target="_blank" rel="noopener noreferrer" className="flex gap-2.5 md:gap-3 items-start group cursor-pointer pb-1">
          <div className="bg-[#E1306C]/10 text-[#E1306C] p-2 rounded-[10px] md:rounded-xl group-hover:bg-gradient-to-tr group-hover:from-[#F56040] group-hover:to-[#833AB4] group-hover:text-white transition-all">
            <Instagram className="w-3.5 h-3.5 md:w-4 md:h-4"/>
          </div>
          <div className="pt-0.5">
            <div className="text-[12px] md:text-[13px] font-bold text-theme-text mb-0.5">{isFr ? "Suivez-nous sur Instagram" : "Follow on Instagram"}</div>
            <div className="text-[11px] md:text-[12px] text-theme-muted font-medium">@marche_freshco</div>
          </div>
        </a>
      </div>
      
      {/* Button */}
      <a href="https://www.google.com/maps/dir/?api=1&destination=9549+Boul+Gouin+O,+Pierrefonds,+QC+H8Y+1R2" target="_blank" rel="noopener noreferrer" className="w-full mt-3 md:mt-4 bg-transparent border-2 border-theme-border text-theme-text font-bold py-2 md:py-2 px-4 rounded-[10px] text-[12px] md:text-[13px] hover:border-theme-primary hover:text-theme-primary transition-colors flex justify-center items-center gap-2">
        {isFr ? "Obtenir l'itinéraire" : "Get Directions"}
      </a>
    </section>
  );
}
