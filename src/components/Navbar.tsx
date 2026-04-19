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
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-2">
          {/* Mobile menu */}
          <button className="mr-2 lg:hidden text-theme-primary">
            <Menu className="h-6 w-6" />
          </button>
          
          <a href="#" className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-[22px] sm:text-2xl font-extrabold tracking-tight text-theme-primary uppercase whitespace-nowrap">
              <img src="/logo.png" alt="Márche Freshco Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain flex-shrink-0 drop-shadow-sm" />
              <span>Márche Freshco</span>
            </div>
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-8 text-[12px] xl:text-sm font-semibold uppercase tracking-wide whitespace-nowrap">
          <a href="#deals" className="text-theme-muted hover:text-theme-primary transition-colors">{lang === 'fr' ? 'Nos Arrivages' : 'Weekly Deals'}</a>
          <a href="#about" className="text-theme-muted hover:text-theme-primary transition-colors">{lang === 'fr' ? 'Notre Mission' : 'Our Mission'}</a>
          <a href="#world" className="text-theme-muted hover:text-theme-primary transition-colors">{lang === 'fr' ? "D'ici et d'ailleurs" : 'World Products'}</a>
          <a href="#halal" className="text-theme-muted hover:text-theme-primary transition-colors">{lang === 'fr' ? 'Boucherie' : 'Halal Butcher'}</a>
          <a href="#produce" className="text-theme-muted hover:text-theme-primary transition-colors">{lang === 'fr' ? 'Produits Frais' : 'Fresh Produce'}</a>
        </nav>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[15px] font-bold">
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

          <a href="tel:4389697966" className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-theme-surface text-theme-primary hover:bg-theme-border transition-colors">
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
