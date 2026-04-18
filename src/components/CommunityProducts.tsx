import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';
import { ArrowRight } from 'lucide-react';

export function CommunityProducts() {
  const { lang } = useLanguage();
  const isFr = lang === 'fr';

  const communities = [
    {
      id: "african",
      title: isFr ? "Spécialités Africaines" : "African Specialties",
      description: isFr 
        ? "Farines, huiles de palme, épices authentiques, plantains et produits essentiels pour la cuisine africaine traditionnelle."
        : "Flours, palm oils, authentic spices, plantains, and essential products for traditional African cooking.",
      image: "/african-specialties.jpeg",
      tags: isFr ? ["Manioc", "Foufou", "Épices"] : ["Cassava", "Fufu", "Spices"]
    },
    {
      id: "southasian",
      title: isFr ? "Saveurs d'Asie du Sud" : "South Asian Flavors",
      description: isFr
        ? "Large sélection de riz Basmati, dhal, chutneys, pâtes de curry et douceurs traditionnelles indiennes et pakistanaises."
        : "Vast selection of Basmati rice, dhal, chutneys, curry pastes, and traditional Indian and Pakistani sweets.",
      image: "/south-asian-flavors.jpeg",
      tags: isFr ? ["Riz Basmati", "Ghee", "Lentilles"] : ["Basmati Rice", "Ghee", "Lentils"]
    },
    {
      id: "middleeastern",
      title: isFr ? "Produits du Moyen-Orient" : "Middle Eastern Goods",
      description: isFr
        ? "Dattes fraîches, tahini, olives importées, fromages locaux et tout pour vos mezzés et pâtisseries orientales."
        : "Fresh dates, tahini, imported olives, local cheeses, and everything for your mezzes and oriental pastries.",
      image: "/middle-eastern-goods.png",
      tags: isFr ? ["Dattes", "Tahini", "Olives"] : ["Dates", "Tahini", "Olives"]
    }
  ];

  return (
    <section id="world" className="py-8 w-full" aria-labelledby="community-heading">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 lg:mb-10">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 inline-flex rounded-full bg-[#E0A96D]/20 px-3 py-1 font-bold text-[#b57a3e] text-[11px] uppercase tracking-wider"
          >
            {isFr ? 'Pour Vos Recettes' : 'For Your Recipes'}
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            id="community-heading" 
            className="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-theme-primary mb-4"
          >
            {isFr ? "Des produits d'ici et d'ailleurs" : "Products from near and far"}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[16px] md:text-[17px] text-theme-text/80 leading-relaxed"
          >
            {isFr 
              ? "Nous sommes fiers de proposer des produits de base et des spécialités rares pour nos communautés diverses. Retrouvez les vraies saveurs de chez vous."
              : "We pride ourselves on carrying staple ingredients and rare specialties for our diverse communities. Find the true tastes of home."}
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {communities.map((community, index) => (
          <motion.div
            key={community.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="group relative overflow-hidden rounded-[24px] bg-white shadow-sm border border-theme-border flex flex-col h-full hover:shadow-md transition-shadow"
          >
            <div className="h-[220px] w-full overflow-hidden relative">
              <img 
                src={community.image} 
                alt={community.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold tracking-tight text-theme-primary mb-3">
                {community.title}
              </h3>
              <p className="text-[15px] text-theme-text/80 leading-relaxed mb-6 flex-1">
                {community.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {community.tags.map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 bg-theme-bg rounded-md text-[13px] font-medium text-theme-primary border border-theme-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}
