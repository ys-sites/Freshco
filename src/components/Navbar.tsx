import { motion } from 'motion/react';
import { Menu, Phone } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export function Navbar() {
  const { lang, setLang } = useLanguage();

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full border-b border-theme-border bg-white"
    >
      <div className="mx-auto flex min-h-[64px] md:min-h-[80px] py-2 md:py-3 max-w-7xl items-center px-4 sm:px-6 lg:px-10 gap-3">

        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {/* Mobile menu button */}
          <button className="lg:hidden text-theme-primary flex-shrink-0">
            <Menu className="h-5 w-5" />
          </button>

          <a href="#" className="flex items-center min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2 font-extrabold tracking-tight text-theme-primary uppercase whitespace-nowrap hover:scale-105 active:scale-95 transition-transform cursor-pointer">
              <img
                src="/logo_cropped.png"
                alt="Marché Freshco Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain flex-shrink-0 drop-shadow-sm"
              />
              <span className="text-[16px] sm:text-[20px] md:text-[22px] pt-0.5">Marché Freshco</span>
            </div>
          </a>
        </div>

        {/* Centre: Desktop nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8 text-[12px] xl:text-sm font-semibold uppercase tracking-wide whitespace-nowrap">
          <a href="#deals" className="text-theme-muted hover:text-theme-primary transition-colors">{lang === 'fr' ? 'Nos Arrivages' : 'Weekly Deals'}</a>
          <a href="#about" className="text-theme-muted hover:text-theme-primary transition-colors">{lang === 'fr' ? 'Notre Mission' : 'Our Mission'}</a>
          <a href="#world" className="text-theme-muted hover:text-theme-primary transition-colors">{lang === 'fr' ? "D'ici et d'ailleurs" : 'World Products'}</a>
          <a href="#halal" className="text-theme-muted hover:text-theme-primary transition-colors">{lang === 'fr' ? 'Boucherie' : 'Halal Butcher'}</a>
          <a href="#produce" className="text-theme-muted hover:text-theme-primary transition-colors">{lang === 'fr' ? 'Produits Frais' : 'Fresh Produce'}</a>
        </nav>

        {/* Right: EN/FR + Phone */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="flex items-center gap-1.5 text-[13px] sm:text-[15px] font-bold">
            <button
              onClick={() => setLang('en')}
              className={lang === 'en' ? 'text-theme-text' : 'text-theme-muted hover:text-theme-text transition-colors'}
            >
              EN
            </button>
            <span className="text-theme-border font-light">/</span>
            <button
              onClick={() => setLang('fr')}
              className={lang === 'fr' ? 'text-theme-text' : 'text-theme-muted hover:text-theme-text transition-colors'}
            >
              FR
            </button>
          </div>

          <a href="tel:5145421166" className="hidden sm:flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-theme-surface text-theme-primary hover:bg-theme-border hover:scale-110 active:scale-95 transition-all">
            <Phone className="h-4 w-4 md:h-5 md:w-5" />
          </a>
        </div>

      </div>
    </motion.header>
  );
}

