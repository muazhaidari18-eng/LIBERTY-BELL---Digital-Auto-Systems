import React from 'react';
import { 
  PhoneCall, 
  Car, 
  CalendarCheck, 
  HelpCircle, 
  SlidersHorizontal, 
  MessageSquareShare,
  CheckCircle2
} from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const benefits = [
    {
      icon: PhoneCall,
      title: "Answers Every Available Call",
      description:
        "Picks up within two rings 24/7/365, during busy morning rushes, and after closing so you never lose after-hours tow-ins or weekend inquiries.",
    },
    {
      icon: Car,
      title: "Captures Vehicle Information",
      description:
        "Accurately collects the exact vehicle Year, Make, Model, trim, engine type, approximate mileage, and detailed repair symptoms.",
    },
    {
      icon: CalendarCheck,
      title: "Books Service Appointments",
      description:
        "Directly reserves drop-off windows and inspection times based on your shop's daily schedule and technician capacity.",
    },
    {
      icon: HelpCircle,
      title: "Handles FAQs",
      description:
        "Answers common questions about your location, shop hours, warranty coverage, loaner car policy, and diagnostic procedures automatically.",
    },
    {
      icon: SlidersHorizontal,
      title: "Qualifies Requests",
      description:
        "Filters quick lube and brake jobs from major transmission or electrical diagnostics, tagging high-priority emergencies for your team.",
    },
    {
      icon: MessageSquareShare,
      title: "Sends Follow-Up",
      description:
        "Dispatches an instant SMS confirmation to the vehicle owner with shop address and drop-off instructions while notifying your service desk.",
    },
  ];

  return (
    <section id="solution-section" className="py-14 sm:py-18 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-wider uppercase text-slate-700 bg-slate-200/80 border border-slate-300 px-3 py-1 rounded-full">
            Automotive AI Call Automation
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Give Your Shop A Receptionist That Doesn't Get Pulled Into The Garage.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Liberty Bell's AI Receptionist is trained specifically on automotive service terminology. It works alongside your existing phone system to capture every repair opportunity.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-5 sm:p-6 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5 text-[#D71920]" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                    <span>{b.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-medium text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Customized to your shop's workflow</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
