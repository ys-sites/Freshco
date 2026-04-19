import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';

export function WeeklyDeals() {
  const { lang } = useLanguage();
  const isFr = lang === 'fr';

  const weeklyDeals = [
    { id: 1, name: isFr ? 'Bananes Plantains' : 'Green Plantains', price: '$1.49/lb', src: '/plantains.jpg' },
    { id: 2, name: isFr ? 'Bananes' : 'Bananas', price: '$0.57/lb', src: '/banana.jpg' },
    { id: 3, name: isFr ? 'Poires Bosc' : 'Bosc Pears', price: '$0.99/lb', src: '/poire-bosc.jpg' },
    { id: 4, name: isFr ? 'Spécial Ouverture (achat 200$+)' : 'Opening Special (spend $200+)', price: '$8.99', src: '/opening.png' },
    { id: 5, name: isFr ? 'Biscuits' : 'Cookies', price: '$0.99', src: '/cookie.png' },
    { id: 6, name: isFr ? 'Clémentines' : 'Clementines', price: '$1.99', src: '/clementine.jpg' },
    { id: 7, name: isFr ? 'Mangues Ataulfo' : 'Ataulfo Mangoes', price: '2 / $2.50', src: '/mango.jpg' },
  ];

  return (
    <section id="deals" className="bg-theme-card border border-theme-border rounded-[24px] p-6 md:p-8 shadow-sleek w-full">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-[22px] font-bold text-theme-text">{isFr ? 'Nos Arrivages / Circulaire' : 'Weekly Deals / Flyer'}</h2>
          <p className="text-[14px] text-theme-muted mt-1">{isFr ? 'Les spéciaux et promotions de cette semaine.' : 'This week\'s specials and promotions.'}</p>
        </div>
        <button className="hidden sm:inline-flex bg-theme-surface text-theme-primary font-bold px-5 py-2.5 rounded-full text-[13px] hover:bg-theme-border transition-colors">
          {isFr ? 'Voir Tout' : 'View All'}
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
        {weeklyDeals.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="group flex flex-col bg-theme-surface rounded-[16px] overflow-hidden border border-transparent hover:border-theme-primary transition-all shadow-sm"
          >
            <div className="aspect-square w-full overflow-hidden relative bg-white">
              <img
                src={product.src}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-bold text-theme-text text-[14px] mb-1 truncate">{product.name}</h3>
              <p className="font-semibold text-theme-primary text-[15px] mb-3">{product.price}</p>
              
              <div className="mt-auto pt-2">
                <span className="inline-block bg-theme-surface border border-theme-border text-theme-muted text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                  {isFr ? 'En Spécial' : 'On Special'}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
