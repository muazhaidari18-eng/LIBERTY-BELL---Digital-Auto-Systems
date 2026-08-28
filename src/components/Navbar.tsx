import React from 'react';
import { PhoneCall, Bell } from 'lucide-react';
import { trackCtaClick } from '../utils/tracking';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const handleNavCta = () => {
    trackCtaClick('nav', 'Book My Free Strategy Call');
    onOpenBooking();
  };

  const scrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('how-it-works-journey');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand Logo Left */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label="Liberty Bell Digital Home"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-900 flex items-center justify-center text-[#D71920] shadow-xs group-hover:bg-slate-800 transition-colors">
            <Bell className="w-5 h-5 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 leading-none">
              LIBERTY BELL
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#D71920] uppercase">
              Digital Auto Systems
            </span>
          </div>
        </a>

        {/* Right Nav Options */}
        <div className="flex items-center gap-3 sm:gap-6">
          <a
            href="#how-it-works-journey"
            onClick={scrollToHowItWorks}
            className="hidden md:inline-block text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            How It Works
          </a>

          <button
            id="nav-cta-button"
            onClick={handleNavCta}
            className="min-h-[42px] sm:min-h-[44px] px-3.5 sm:px-5 py-2 bg-[#D71920] hover:bg-[#b9151b] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-sm hover:shadow-md flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Book My Free Strategy Call</span>
          </button>
        </div>
      </div>
    </header>
  );
};
