import React from 'react';
import { 
  Layout, 
  Search, 
  Target, 
  Star, 
  Repeat, 
  MapPin, 
  CheckCircle2, 
  PhoneCall 
} from 'lucide-react';
import { trackCtaClick } from '../utils/tracking';

interface AdditionalServicesProps {
  onOpenBooking: () => void;
}

export const AdditionalServices: React.FC<AdditionalServicesProps> = ({ onOpenBooking }) => {
  const services = [
    {
      icon: Layout,
      title: 'Website & Service Pages',
      description:
        'Fast, mobile-friendly shop websites with clear service menus, technician highlights, and seamless mobile click-to-call buttons.',
    },
    {
      icon: Search,
      title: 'Google Search Visibility',
      description:
        'Optimization for your Google Business Profile and local listings so drivers searching for mechanics, brakes, or oil changes can find your shop.',
    },
    {
      icon: Target,
      title: 'Google Ads',
      description:
        'Targeted local search ads focused on high-margin repairs and immediate-need services like brakes, transmission diagnostics, and A/C repair.',
    },
    {
      icon: Star,
      title: 'Review Generation',
      description:
        'Automated post-service SMS requests that encourage satisfied car owners to leave positive Google reviews for your garage.',
    },
    {
      icon: Repeat,
      title: 'Automated Service Follow-Up',
      description:
        'Timely text and email reminders for upcoming maintenance intervals, oil change schedules, and deferred repair quotes.',
    },
  ];

  const handleCta = () => {
    trackCtaClick('services', 'Book My Free Strategy Call');
    onOpenBooking();
  };

  return (
    <section id="additional-services-section" className="py-14 sm:py-18 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-wider uppercase text-[#D71920] bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            Complete Digital Growth
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Additional Services Tailored For Auto Shops
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Beyond answering inbound calls, Liberty Bell provides the digital tools needed to attract, convert, and retain high-value repair customers.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className={`bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl p-5 sm:p-6 transition-all shadow-xs flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-red-100/80 border border-red-200 flex items-center justify-center text-[#D71920] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-medium text-slate-500 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Built specifically for mechanics & garages</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Search Visibility Mini-Section */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/80 border border-red-900/80 px-3 py-1 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#D71920]" />
                <span>Local Search Visibility</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
                When Someone Searches "Mechanic Near Me," Where Does Your Shop Show Up?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                When drivers in your local area face unexpected car trouble or need routine service, they turn to Google. Liberty Bell helps improve your Google Business Profile, shop website, local search visibility, targeted advertising, phone call handling, and lead tracking so more nearby drivers choose your shop.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                id="search-mini-section-cta"
                onClick={handleCta}
                className="min-h-[48px] px-5 py-3 bg-[#D71920] hover:bg-[#b9151b] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book My Free Strategy Call</span>
              </button>
              <p className="text-[11px] text-center text-slate-400">
                15-minute phone audit of your local online presence
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
