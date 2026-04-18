import { useLanguage } from '../lib/LanguageContext';

export function Produce() {
  const { lang } = useLanguage();
  const isFr = lang === 'fr';

  return (
    <section id="produce" className="bg-theme-card border border-theme-border rounded-[24px] p-8 md:p-10 shadow-sleek relative overflow-hidden flex flex-col md:flex-row gap-8 items-center w-full">
       <div className="flex-1 z-10 w-full">
         <div className="inline-block rounded-full bg-theme-surface px-4 py-1.5 text-[11px] font-bold text-theme-primary uppercase tracking-wider mb-4">
           {isFr ? 'Fruits & Légumes' : 'Fruits & Vegetables'}
         </div>
         <h2 className="text-[28px] md:text-[32px] font-bold text-theme-text leading-[1.2] mb-4">
           {isFr ? 'Produits exotiques et rares.' : 'Exotic & hard-to-find produce.'}
         </h2>
         <p className="text-theme-muted text-[15px] leading-relaxed mb-6">
           {isFr 
             ? "Apportez les saveurs authentiques de chez vous directement dans votre cuisine. Nous sélectionnons les fruits exotiques les plus frais et les légumes rares essentiels aux cuisines sud-asiatiques, africaines et caribéennes."
             : "Bring the authentic flavors of home directly to your kitchen. We source the freshest exotic fruits and rare vegetables that are essential to South Asian, African, and Caribbean cuisines."}
         </p>
         <div className="flex flex-wrap gap-2 text-[13px] font-bold text-theme-primary">
           <span className="bg-theme-surface border border-theme-border px-3 py-1.5 rounded-full">{isFr ? 'Aubergines Asiatiques' : 'Asian Eggplants'}</span>
           <span className="bg-theme-surface border border-theme-border px-3 py-1.5 rounded-full">{isFr ? 'Gombo' : 'Okra'}</span>
           <span className="bg-theme-surface border border-theme-border px-3 py-1.5 rounded-full">{isFr ? 'Mangues Fraîches' : 'Fresh Mangoes'}</span>
           <span className="bg-theme-surface border border-theme-border px-3 py-1.5 rounded-full">Plantains</span>
           <span className="bg-theme-surface border border-theme-border px-3 py-1.5 rounded-full">{isFr ? 'Manioc' : 'Cassava'}</span>
         </div>
       </div>
       
       <div className="w-full md:w-[45%] h-64 md:h-[320px] rounded-[16px] overflow-hidden relative shadow-sm flex-shrink-0 border border-theme-border">
         <img 
           src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=2000&auto=format&fit=crop" 
           alt="Fresh Exotic Produce"
           referrerPolicy="no-referrer"
           className="w-full h-full object-cover" 
         />
       </div>
    </section>
  )
}
