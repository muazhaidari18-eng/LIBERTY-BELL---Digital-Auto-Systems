import React from 'react';
import { PhoneCall, ShieldCheck, Wrench } from 'lucide-react';
import { trackCtaClick } from '../utils/tracking';

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  const handleFinalCta = () => {
    trackCtaClick('final_cta', 'Book My Free Strategy Call');
    onOpenBooking();
  };

  return (
    <section id="final-cta-section" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background visual accents */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#D71920 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/80 border border-red-800/80 text-red-400 rounded-full text-xs font-bold uppercase tracking-wider">
          <Wrench className="w-3.5 h-3.5 text-[#D71920]" />
          <span>Stop Losing High-Ticket Repair Inquiries</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight max-w-2xl mx-auto">
          Keep Working On The Cars. <br className="hidden sm:inline" />
          <span className="text-[#D71920]">We'll Help Make Sure The Calls Get Handled.</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Book a 15-minute phone consultation to see how Liberty Bell can capture missed calls, log accurate vehicle issues, and keep your service bays full.
        </p>

        <div className="pt-2 flex flex-col items-center gap-3">
          <button
            id="final-section-cta-button"
            onClick={handleFinalCta}
            className="w-full sm:w-auto min-h-[52px] sm:min-h-[56px] px-9 py-4 bg-[#D71920] hover:bg-[#b9151b] text-white font-bold text-base sm:text-lg rounded-xl transition-all shadow-xl hover:shadow-red-600/40 flex items-center justify-center gap-2.5 cursor-pointer transform active:scale-[0.99]"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Book My Free Strategy Call</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Free • No Obligation • Custom Shop Assessment</span>
          </div>
        </div>

      </div>
    </section>
  );
};
