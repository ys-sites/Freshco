import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { WeeklyDeals } from '../components/WeeklyDeals';
import { AboutSnippet } from '../components/AboutSnippet';
import { CategoryShowcase } from '../components/CategoryShowcase';
import { Boucherie } from '../components/Boucherie';
import { Produce } from '../components/Produce';
import { CommunityProducts } from '../components/CommunityProducts';
import { StoreInfo } from '../components/StoreInfo';
import { Testimonials } from '../components/Testimonials';
import { NewsletterSignup } from '../components/NewsletterSignup';
import { Footer } from '../components/Footer';
import { Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-theme-bg font-sans text-theme-text selection:bg-theme-accent selection:text-black flex flex-col overflow-x-hidden relative">
      
      {/* Floating Side Decorations (Visible on Large Screens) */}
      <div className="hidden min-[1300px]:block pointer-events-none fixed top-[18%] left-0 w-[220px] 2xl:w-[300px] z-0 mix-blend-multiply opacity-90 transform -translate-x-[45%]">
        <img src="/bg_leaf_left.png" alt="" className="w-full h-auto object-contain" />
      </div>
      <div className="hidden min-[1300px]:block pointer-events-none fixed top-[45%] right-0 w-[240px] 2xl:w-[320px] z-0 mix-blend-multiply opacity-90 transform translate-x-[40%]">
        <img src="/bg_herbs_right.png" alt="" className="w-full h-auto object-contain" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col min-h-screen border-b border-theme-border">
        <Navbar />
      
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 lg:px-6 py-6 lg:py-6 flex flex-col gap-4 lg:gap-5">
        
        {/* Top 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_310px] gap-4 lg:gap-4 md:items-stretch">
          
          {/* Main Feed Column */}
          <div className="flex flex-col gap-4 w-full min-w-0 h-full">
            <Hero className="flex-1" />
          </div>

          {/* Sidebar Column */}
          <div className="flex flex-col gap-4 w-full min-w-0 h-full">
            <StoreInfo />
          </div>
          
        </div>

        <Marquee />

        {/* Newsletter + Category grid — side by side */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] lg:grid-cols-[1fr_420px] gap-4 lg:gap-4 md:items-stretch">
          <div className="flex flex-col w-full min-w-0 h-full">
            <NewsletterSignup />
          </div>
          <div className="flex flex-col w-full min-w-0 h-full">
            <CategoryShowcase />
          </div>
        </div>

        {/* Priority Sections: Weekly Flyers → Our Mission → World Products */}
        <div className="flex flex-col gap-4 lg:gap-6 w-full">
          <WeeklyDeals />
          <AboutSnippet />
          <CommunityProducts />
        </div>

        {/* Remaining Sections */}
        <div className="flex flex-col gap-4 lg:gap-6 w-full">
          <Boucherie />
          <Produce />
          <Testimonials />
        </div>

      </main>
      </div>

      <Footer />

      {/* Mobile Floating Action Button - Phone */}
      <a 
        href="tel:4389697966" 
        className="md:hidden fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-theme-primary text-white shadow-lg shadow-theme-primary/40 active:scale-95 transition-all"
        aria-label="Call Store"
      >
        <Phone className="h-6 w-6 fill-current" />
      </a>
    </div>
  );
}
