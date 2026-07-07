import { useLanguage } from '../lib/LanguageContext';

export function Footer() {
  const { lang } = useLanguage();
  const isFr = lang === 'fr';

  return (
    <footer className="bg-gradient-to-b from-[#2D5A27] to-[#122b0f] text-white pt-16 pb-8 px-6 lg:px-12 w-full relative overflow-hidden z-20" aria-labelledby="footer-heading">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#3E6F38]/40 blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-[#E0A96D]/30 blur-2xl pointer-events-none"></div>
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
            <div className="flex items-center gap-3 text-2xl font-extrabold tracking-tight text-white mb-4 hover:scale-105 active:scale-95 transition-transform cursor-pointer w-fit">
              <img src="/logo_cropped.png" alt="Marché Saveurs Logo" className="w-[44px] h-[44px] md:w-[50px] md:h-[50px] object-contain flex-shrink-0 drop-shadow-lg" />
              <span className="font-serif text-[26px] pt-1">Marché Saveurs</span>
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
                  {isFr ? "Bientôt à :" : "Coming soon to:"}
                </span>
                Montréal
              </li>
              <li className="pt-1"><a href="mailto:info@ysdev.ca" className="text-white/90 hover:text-white text-[15px] transition-colors">info@ysdev.ca</a></li>
            </ul>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/60">
          <p>&copy; {new Date().getFullYear()} Marché Saveurs. {isFr ? "Tous droits réservés." : "All rights reserved."}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{isFr ? "Politique de confidentialité" : "Privacy Policy"}</a>
            <a href="#" className="hover:text-white transition-colors">{isFr ? "Conditions d'utilisation" : "Terms of Service"}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

