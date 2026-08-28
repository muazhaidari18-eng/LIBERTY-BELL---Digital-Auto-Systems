import React from 'react';
import { Wrench, Zap, Users, PhoneOff } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: Wrench,
      title: "You're Under The Hood",
      description:
        "You and your technicians have tools in hand, fluids draining, or a car on the lift. Dropping what you're doing to run to the counter interrupts repairs and slows down the whole shop.",
    },
    {
      icon: Zap,
      title: "Customers Need Fast Answers",
      description:
        "Drivers calling about brake noises, diagnostics, quotes, or availability want quick confirmation. When they reach voicemail, they rarely leave a message.",
    },
    {
      icon: Users,
      title: "The Front Desk Gets Overloaded",
      description:
        "During morning check-ins and evening pickups, service writers are juggling face-to-face customers, parts lookups, and work orders while lines stay on hold.",
    },
    {
      icon: PhoneOff,
      title: "Customers Keep Calling Around",
      description:
        "When car owners need service, they call the first number on their phone. If nobody answers within a few rings, they simply tap the next mechanic on Google.",
    },
  ];

  return (
    <section id="problem-section" className="py-14 sm:py-18 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-wider uppercase text-[#D71920] bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            The Daily Shop Bottleneck
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Missed Calls Can Mean Missed Repair Jobs.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Running a successful auto shop means balancing hands-on mechanical repairs with non-stop customer inquiries. When the phones ring during busy shop hours, high-ticket jobs slip away.
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl p-5 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-red-100/80 border border-red-200 flex items-center justify-center text-[#D71920] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {prob.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {prob.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Shop Pain Point #{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
