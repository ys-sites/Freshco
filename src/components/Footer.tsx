import { useLanguage } from '../lib/LanguageContext';
import { Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const { lang } = useLanguage();
  const isFr = lang === 'fr';

  return (
    <footer className="bg-gradient-to-b from-[#2D5A27] to-[#122b0f] text-white pt-16 pb-8 px-6 lg:px-12 w-full relative overflow-hidden z-20" aria-labelledby="footer-heading">
      
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

      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] lg:grid-cols-[1.5fr_1fr_1fr] gap-12 lg:gap-8 mb-16 items-start">
          
          {/* Left Column: Brand Bio */}
          <div className="flex flex-col gap-6 pr-0 lg:pr-12">
            <div className="flex items-center gap-3 text-2xl font-extrabold tracking-tight text-white mb-4">
              <div className="w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center flex-shrink-0 text-[#2D5A27]">
                <span className="font-serif italic font-bold leading-none mt-1 text-[26px]">M</span>
              </div>
              <span className="font-serif text-[26px]">Márche Freshco</span>
            </div>
            
            <p className="text-white/90 text-[15px] leading-[1.8] max-w-[340px]">
              {isFr 
                ? "Détaillant de produits d'épicerie multiculturels, fruits, légumes frais et viandes halal."
                : "Your one-stop shop for multicultural groceries, fresh produce & halal meats."}
            </p>
          </div>
          
          {/* Middle Column: Explore */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-serif font-bold text-[20px] tracking-wide mb-1">{isFr ? "Explorer" : "Explore"}</h3>
            <ul className="space-y-4">
              <li><a href="#deals" className="text-white/90 hover:text-white text-[15px] transition-colors">{isFr ? "Nos Arrivages" : "Weekly Deals"}</a></li>
              <li><a href="#about" className="text-white/90 hover:text-white text-[15px] transition-colors">{isFr ? "Notre Mission" : "Our Mission"}</a></li>
              <li><a href="#world" className="text-white/90 hover:text-white text-[15px] transition-colors">{isFr ? "D'ici et d'ailleurs" : "World Products"}</a></li>
              <li><a href="#halal" className="text-white/90 hover:text-white text-[15px] transition-colors">{isFr ? "Notre Boucherie" : "Our Boucherie"}</a></li>
              <li><a href="#produce" className="text-white/90 hover:text-white text-[15px] transition-colors">{isFr ? "Produits Frais" : "Fresh Produce"}</a></li>
            </ul>
          </div>
          
          {/* Right Column: Visit Us */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-serif font-bold text-[20px] tracking-wide mb-1">{isFr ? "Visitez-nous" : "Visit Us"}</h3>
            <ul className="space-y-4">
              <li className="text-white/90 text-[15px] leading-[1.6]">
                <span className="text-[#F6A57F] font-bold block mb-1">
                  {isFr ? "Bientôt au :" : "Coming soon to:"}
                </span>
                9549 Boul Gouin O<br />Pierrefonds, QC H8Y 1R2
              </li>
              <li className="pt-1"><a href="mailto:hello@marchefreshco.com" className="text-white/90 hover:text-white text-[15px] transition-colors">hello@marchefreshco.com</a></li>
              <li className="pt-3 flex flex-wrap gap-3">
                <a href="https://www.instagram.com/marche_freshco/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-white text-[14px] transition-colors bg-white/10 hover:bg-[#E1306C]/80 border border-transparent rounded-full px-4 py-2 w-fit">
                  <Instagram className="w-4 h-4" />
                  <span>@marche_freshco</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61576117831213" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-white text-[14px] transition-colors bg-white/10 hover:bg-[#1877F2]/80 border border-transparent rounded-full px-4 py-2 w-fit">
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/60">
          <p>&copy; {new Date().getFullYear()} Márche Freshco. {isFr ? "Tous droits réservés." : "All rights reserved."}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{isFr ? "Politique de confidentialité" : "Privacy Policy"}</a>
            <a href="#" className="hover:text-white transition-colors">{isFr ? "Conditions d'utilisation" : "Terms of Service"}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
