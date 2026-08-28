import React, { useState, useEffect } from 'react';
import { PhoneCall, Wrench } from 'lucide-react';
import { trackCtaClick } from '../utils/tracking';

interface StickyCtaProps {
  onOpenBooking: () => void;
}

export const StickyCta: React.FC<StickyCtaProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past 300px (past hero top)
      if (window.scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileClick = () => {
    trackCtaClick('sticky_mobile', 'Book My Free Strategy Call');
    onOpenBooking();
  };

  const handleDesktopClick = () => {
    trackCtaClick('sticky_desktop', 'Book My Free Strategy Call');
    onOpenBooking();
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Persistent Bottom Bar (Visible on < sm screens) */}
      <div 
        id="sticky-mobile-bottom-bar"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-2xl animate-in slide-in-from-bottom duration-200"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="text-[11px] leading-tight text-slate-700">
            <span className="font-bold text-slate-900 block">Liberty Bell Digital</span>
            <span className="text-slate-500">Auto AI Receptionist</span>
          </div>
          <button
            id="mobile-sticky-cta-button"
            onClick={handleMobileClick}
            className="grow min-h-[46px] px-4 py-2.5 bg-[#D71920] active:bg-[#b9151b] text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Book My Free Strategy Call</span>
          </button>
        </div>
      </div>

      {/* Desktop Floating Sticky Header Bar (Visible on >= sm screens) */}
      <div 
        id="sticky-desktop-bar"
        className="hidden sm:block fixed top-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white py-2.5 px-6 shadow-xl animate-in slide-in-from-top duration-200"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#D71920] flex items-center justify-center text-white">
              <Wrench className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">
                Liberty Bell AI Receptionist for Auto Shops
              </p>
              <p className="text-[11px] text-slate-400">
                Stop missing repair calls when you're under the hood
              </p>
            </div>
          </div>

          <button
            id="desktop-sticky-cta-button"
            onClick={handleDesktopClick}
            className="min-h-[42px] px-5 py-2 bg-[#D71920] hover:bg-[#b9151b] text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Book My Free Strategy Call</span>
          </button>
        </div>
      </div>
    </>
  );
};
