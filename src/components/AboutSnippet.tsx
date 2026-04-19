import { Play, Instagram } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import React, { useState, useRef } from 'react';

export function AboutSnippet() {
  const { lang } = useLanguage();
  const isFr = lang === 'fr';
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-[#2D5A27] to-[#122b0f] border border-theme-border rounded-[24px] p-8 md:p-12 shadow-sleek flex flex-col items-center justify-center w-full min-h-[300px] text-center">
       
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
       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-0"></div>

       <div className="flex-1 z-10 w-full max-w-3xl">
         <div className="inline-block rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-[11px] font-bold text-white uppercase tracking-wider mb-5">
           {isFr ? 'Notre Mission' : 'Our Mission'}
         </div>
         <h2 className="text-[32px] md:text-[42px] font-bold text-white leading-[1.1] mb-6">
           {isFr ? 'Bâtir la communauté par l\'alimentation authentique.' : 'Building community through authentic food.'}
         </h2>
         <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
           {isFr 
             ? "Marché Freshco a été fondé pour offrir à la diaspora montréalaise une destination unique et de confiance pour des viandes Halal de première qualité, des produits biologiques frais et des ingrédients rares d'Asie du Sud et d'Afrique."
             : "Marché Freshco was founded to provide the Montreal diaspora with a single, trusted destination for premium Halal meats, fresh organic produce, and hard-to-find ingredients from South Asia and Africa."}
         </p>

       </div>
       
       {/* Video removed for the moment
       <div 
         className="w-[220px] md:w-[260px] lg:w-[280px] aspect-[9/16] rounded-[24px] overflow-hidden relative shadow-2xl flex-shrink-0 z-10 border-[3px] border-white/20 group block mx-auto md:mx-0 bg-black"
       >
         <video
           ref={videoRef}
           src="/video.mp4"
           poster="/thumbnail.jpg"
           preload="metadata"
           playsInline
           controls={isPlaying}
           className="w-full h-full object-cover"
         />
         
         {!isPlaying && (
           <div 
             className="absolute inset-0 cursor-pointer z-20"
             onClick={handlePlay}
             aria-label="Play video"
             role="button"
           >
             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none"></div>

             <div className="absolute top-4 left-4 rounded-full bg-theme-surface text-theme-primary shadow-lg border border-theme-border/50 pointer-events-none p-2.5 flex items-center justify-center">
               <Instagram className="w-5 h-5" />
             </div>

             <div 
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[64px] h-[64px] bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.3)] group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 flex-shrink-0"
             >
               <Play className="w-8 h-8 text-white ml-1 fill-white" />
             </div>

             <div className="absolute bottom-6 left-0 right-0 text-center px-4 pointer-events-none">
                <span className="text-white font-bold text-[18px] md:text-[20px] tracking-wide uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  MÁRCHE FRESHCO
                </span>
             </div>
           </div>
         )}
       </div>
       */}
    </section>
  )
}

