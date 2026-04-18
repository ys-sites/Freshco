import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';

export function CategoryShowcase() {
  const { lang } = useLanguage();
  const isFr = lang === 'fr';

  const categories = [
    { name: isFr ? 'Produits Frais' : 'Produce', description: isFr ? 'Frais chaque jour.' : 'Fresh daily.', emoji: '🥬' },
    { name: isFr ? 'Viande Halal' : 'Halal Meat', description: isFr ? '100% Zabiha.' : '100% Zabiha.', emoji: '🥩' },
    { name: isFr ? 'Sud-Asiatique' : 'South Asian', description: isFr ? 'Épices et douceurs.' : 'Spices & sweets.', emoji: '🍛' },
    { name: isFr ? 'Indien' : 'Indian', description: isFr ? 'Produits authentiques.' : 'Authentic goods.', emoji: '🌶️' },
    { name: isFr ? 'Africain' : 'African', description: isFr ? 'Produits de base.' : 'Grain staples.', emoji: '🍲' },
    { name: isFr ? 'Laitier' : 'Dairy', description: isFr ? 'Lait et fromages.' : 'Milk & cheeses.', emoji: '🥛' },
  ];

  return (
    <section className="bg-theme-card border border-theme-border rounded-[20px] p-4 md:p-4 shadow-sleek w-full flex-1 flex flex-col">
      <div className="flex justify-between items-center mb-3 md:mb-3">
        <h2 className="text-[16px] md:text-[16px] font-bold text-theme-text">{isFr ? 'Ce Que Nous Offrons' : 'What We Carry'}</h2>
        <span className="text-theme-muted font-bold">→</span>
      </div>

      <div className="grid grid-cols-2 gap-2 md:gap-2.5 flex-1">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center rounded-[10px] md:rounded-[12px] bg-theme-surface p-2 md:p-2.5 text-center border border-transparent hover:border-theme-primary hover:bg-white transition-colors cursor-pointer"
          >
            <div className="text-[18px] md:text-[20px] mb-0.5">{category.emoji}</div>
            <h3 className="text-[11px] md:text-[12px] font-bold text-theme-text leading-tight">{category.name}</h3>
            <p className="text-[9px] md:text-[9px] text-theme-muted mt-0.5 font-medium">{category.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
