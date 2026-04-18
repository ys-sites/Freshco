import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';

export function WeeklyDeals() {
  const { lang } = useLanguage();
  const isFr = lang === 'fr';

  const weeklyDeals = [
    { id: 1, name: isFr ? 'Bananes Plantains' : 'African Plantains', price: '$4.99/lb', src: 'https://images.unsplash.com/photo-1613758339893-bc8e2df8417c?q=80&w=2000&auto=format&fit=crop' },
    { id: 2, name: isFr ? 'Safran Premium (1g)' : 'Premium Saffron (1g)', price: '$12.99', src: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=2000&auto=format&fit=crop' },
    { id: 3, name: isFr ? 'Côtes de Bœuf Halal' : 'Halal Beef Ribs', price: '$15.50/lb', src: 'https://images.unsplash.com/photo-1627885481710-8b010c22fa10?q=80&w=2000&auto=format&fit=crop' },
    { id: 4, name: isFr ? 'Dattes Medjool' : 'Medjool Dates (Box)', price: '$19.99', src: 'https://images.unsplash.com/photo-1596431940984-7a3089d71ae7?q=80&w=2000&auto=format&fit=crop' },
    { id: 5, name: isFr ? 'Poudre de Curcuma Biologique' : 'Organic Turmeric Powder', price: '$5.49', src: 'https://images.unsplash.com/photo-1615485900898-1e42845c8eb1?q=80&w=2000&auto=format&fit=crop' },
    { id: 6, name: isFr ? 'Ghee Desi Pur' : 'Pure Desi Ghee', price: '$11.99', src: 'https://images.unsplash.com/photo-1627998692742-99dca8c538cb?q=80&w=2000&auto=format&fit=crop' },
    { id: 7, name: isFr ? 'Cardamome de Ceylan' : 'Ceylon Cardamom', price: '$8.50', src: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2000&auto=format&fit=crop' },
    { id: 8, name: isFr ? 'Feuilles de Thé Noir' : 'Black Chai Leaves', price: '$6.99', src: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=2000&auto=format&fit=crop' },
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
