/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { WeeklyDeals } from './components/WeeklyDeals';
import { AboutSnippet } from './components/AboutSnippet';
import { CategoryShowcase } from './components/CategoryShowcase';
import { Boucherie } from './components/Boucherie';
import { Produce } from './components/Produce';
import { CommunityProducts } from './components/CommunityProducts';
import { StoreInfo } from './components/StoreInfo';
import { Testimonials } from './components/Testimonials';
import { NewsletterSignup } from './components/NewsletterSignup';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-theme-bg font-sans text-theme-text selection:bg-theme-accent selection:text-black flex flex-col overflow-x-hidden relative">
      
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

          {/* Priority Sections: Weekly Flyers → Our Mission → World Products */}
          <div className="flex flex-col gap-4 lg:gap-6 w-full">
            <WeeklyDeals />
            <AboutSnippet />
            <CommunityProducts />
          </div>

          {/* Email Marketing & Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_310px] gap-4 lg:gap-4 md:items-stretch">
            <div className="flex flex-col gap-4 w-full min-w-0 h-full">
              <NewsletterSignup />
            </div>
            <div className="flex flex-col gap-4 w-full min-w-0 h-full">
              <CategoryShowcase />
            </div>
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
    </div>
  );
}
