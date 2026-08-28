import React from 'react';
import { Building2, ClipboardCheck, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { trackCtaClick } from '../utils/tracking';

interface InPersonReviewProps {
  onOpenBooking: () => void;
}

export const InPersonReview: React.FC<InPersonReviewProps> = ({ onOpenBooking }) => {
  const handleInPersonCta = () => {
    trackCtaClick('in_person_review', 'Book My Free In-Person Business Review');
    onOpenBooking();
  };

  const reviewPoints = [
    {
      icon: ClipboardCheck,
      title: 'Front-Desk & Phone Flow Audit',
      desc: 'We observe your peak call windows, front-counter check-in patterns, and technician interruption points.',
    },
    {
      icon: Wrench,
      title: 'Workflow Integration Walkthrough',
      desc: 'We show you exactly how automated call answering and appointment notifications connect with your daily shop routine.',
    },
    {
      icon: Building2,
      title: 'Custom Bay Capacity Plan',
      desc: 'Clear, zero-pressure recommendations customized to your bay count, staff size, and specific mechanical specialties.',
    },
  ];

  return (
    <section id="in-person-review-section" className="py-14 sm:py-18 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/80 border border-red-900/80 px-3 py-1 rounded-full">
              <Building2 className="w-3.5 h-3.5 text-[#D71920]" />
              <span>On-Site Shop Consultation</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              We'll Come To Your Shop.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              We believe in understanding how your shop operates in the real world before recommending technology. A Liberty Bell specialist can visit your garage to review your front-desk flow, peak phone times, and customer intake process in person.
            </p>
          </div>

          {/* 3 Short Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {reviewPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-4 sm:p-5 flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-slate-900 text-[#D71920] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-slate-700/60 flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Included at no cost</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Area */}
          <div className="text-center pt-2">
            <button
              id="in-person-review-cta"
              onClick={handleInPersonCta}
              className="min-h-[50px] px-8 py-3.5 bg-[#D71920] hover:bg-[#b9151b] text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-lg hover:shadow-red-600/30 inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book My Free In-Person Business Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-slate-400 mt-2">
              Available for independent garages & auto service centers in our service area.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
