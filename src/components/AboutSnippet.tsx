import { Play, Instagram } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import { useState, useRef } from 'react';

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
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-[#2D5A27] to-[#122b0f] border border-theme-border rounded-[24px] p-8 md:p-10 shadow-sleek flex flex-col md:flex-row gap-8 items-center w-full min-h-[400px]">
       
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
       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-0"></div>

       <div className="flex-1 z-10 w-full text-center md:text-left">
         <div className="inline-block rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-[11px] font-bold text-white uppercase tracking-wider mb-5">
           {isFr ? 'Notre Mission' : 'Our Mission'}
         </div>
         <h2 className="text-[28px] md:text-[32px] font-bold text-white leading-[1.2] mb-4">
           {isFr ? 'Bâtir la communauté par l\'alimentation authentique.' : 'Building community through authentic food.'}
         </h2>
         <p className="text-white/90 text-[15px] leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
           {isFr 
             ? "Márche Freshco a été fondé pour offrir à la diaspora montréalaise une destination unique et de confiance pour des viandes Halal de première qualité, des produits biologiques frais et des ingrédients rares d'Asie du Sud et d'Afrique."
             : "Márche Freshco was founded to provide the Montreal diaspora with a single, trusted destination for premium Halal meats, fresh organic produce, and hard-to-find ingredients from South Asia and Africa."}
         </p>
         <button className="bg-white text-theme-primary font-bold py-3.5 px-7 rounded-xl text-[14px] hover:bg-theme-surface transition-colors shadow-sm">
           {isFr ? 'En Savoir Plus' : 'Learn More'}
         </button>
       </div>
       
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
             {/* Top and Bottom Dark Gradients for UI readability */}
             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none"></div>

             {/* IG Overlay Ring & Logo */}
             <div className="absolute top-4 left-4 p-[2px] rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] shadow-lg pointer-events-none">
               <div className="bg-black/80 backdrop-blur-md rounded-full p-2 flex items-center justify-center">
                 <Instagram className="w-5 h-5 text-white" />
               </div>
             </div>

             {/* Animated Play Button */}
             <div 
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[64px] h-[64px] bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.3)] group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 flex-shrink-0"
             >
               <Play className="w-8 h-8 text-white ml-1 fill-white" />
             </div>

             {/* Bottom Text matching screenshot style */}
             <div className="absolute bottom-6 left-0 right-0 text-center px-4 pointer-events-none">
                <span className="text-white font-bold text-[18px] md:text-[20px] tracking-wide uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  MÁRCHE FRESHCO
                </span>
             </div>
           </div>
         )}
       </div>
    </section>
  )
}
