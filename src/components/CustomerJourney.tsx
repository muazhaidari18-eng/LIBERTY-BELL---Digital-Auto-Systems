import React from 'react';
import { 
  PhoneIncoming, 
  Bot, 
  ClipboardList, 
  CalendarCheck, 
  CheckCheck,
  ArrowRight
} from 'lucide-react';

export const CustomerJourney: React.FC = () => {
  const steps = [
    {
      num: '1',
      icon: PhoneIncoming,
      title: 'Customer Calls',
      desc: 'Vehicle owner rings your shop during busy bay hours or after closing.',
    },
    {
      num: '2',
      icon: Bot,
      title: 'AI Answers',
      desc: 'Picks up instantly in a friendly, professional, shop-tailored voice.',
    },
    {
      num: '3',
      icon: ClipboardList,
      title: 'Vehicle + Problem Captured',
      desc: 'Logs year, make, model, symptoms, customer name, and cell phone number.',
    },
    {
      num: '4',
      icon: CalendarCheck,
      title: 'Appointment Scheduled',
      desc: 'Suggests real open drop-off windows aligned with your bay capacity.',
    },
    {
      num: '5',
      icon: CheckCheck,
      title: 'SMS & Shop Alert',
      desc: 'Customer receives text directions; shop gets complete repair ticket.',
    },
  ];

  return (
    <section id="how-it-works-journey" className="py-14 sm:py-18 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-wider uppercase text-slate-700 bg-slate-200/80 border border-slate-300 px-3 py-1 rounded-full">
            Streamlined Shop Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            What Happens When A Customer Calls
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            A frictionless 5-step handoff that keeps wrenches turning while turning missed rings into booked bay work.
          </p>
        </div>

        {/* Horizontal Flow on Desktop, Clean Stack on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#D71920]" />
                    </div>
                    <span className="w-6 h-6 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-xs font-black text-slate-700">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-white border border-slate-200 rounded-full p-0.5 text-slate-400">
                    <ArrowRight className="w-3.5 h-3.5 text-[#D71920]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
