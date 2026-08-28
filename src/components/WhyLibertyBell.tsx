import React from 'react';
import { Ear, Hammer, Trophy, ShieldCheck } from 'lucide-react';

export const WhyLibertyBell: React.FC = () => {
  const trustCards = [
    {
      icon: Ear,
      title: 'We Listen First',
      description:
        'We take the time to understand your shop’s daily rhythm, bay capacity, current phone bottlenecks, and service specialties before recommending any setup.',
    },
    {
      icon: Hammer,
      title: 'We Build Around You',
      description:
        'We customize the AI receptionist script, calendar rules, and follow-up messaging to fit how your service advisors and technicians already work.',
    },
    {
      icon: Trophy,
      title: 'We Stay Focused On Results',
      description:
        'We measure success by real shop metrics: answered inbound calls, complete vehicle details logged, booked service appointments, and saved labor hours.',
    },
  ];

  return (
    <section id="why-liberty-bell-section" className="py-14 sm:py-18 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-wider uppercase text-slate-700 bg-slate-200/80 border border-slate-300 px-3 py-1 rounded-full">
            Our Approach
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Why Auto Repair Shops Choose Liberty Bell
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Practical technology built for real independent shops, not complicated software that slows you down.
          </p>
        </div>

        {/* 3 Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#D71920]" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Transparent & Dedicated Partnership</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
