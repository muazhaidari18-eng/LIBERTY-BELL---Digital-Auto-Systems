import React from 'react';
import { PhoneCall, ShieldCheck, Wrench, CheckCircle2, PhoneIncoming, Sparkles, Car } from 'lucide-react';
import { trackCtaClick } from '../utils/tracking';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const handleHeroCta = () => {
    trackCtaClick('hero', 'Book My Free Strategy Call');
    onOpenBooking();
  };

  return (
    <section id="hero-section" className="relative bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-18">
      {/* Subtle industrial grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Copy & Primary Conversion */}
          <div className="lg:col-span-7 text-left space-y-4 sm:space-y-5">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-100/90 border border-red-200 text-[#D71920] rounded-full text-xs font-extrabold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#D71920] animate-pulse" />
              <span>AI RECEPTIONIST FOR AUTO REPAIR SHOPS</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
              You Fix The Cars. <br className="hidden sm:inline" />
              <span className="text-[#D71920]">We'll Help Handle The Calls.</span>
            </h1>

            {/* Subhead (2-3 sentences) */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl font-normal">
              When you're under the hood, helping a customer or running the shop, the phone doesn't stop. Liberty Bell helps auto repair businesses answer more calls, capture service inquiries, schedule appointments and follow up automatically.
            </p>

            {/* CTA Button & Microtext */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <button
                  id="hero-cta-button"
                  onClick={handleHeroCta}
                  className="w-full sm:w-auto min-h-[50px] sm:min-h-[54px] px-8 py-3.5 bg-[#D71920] hover:bg-[#b9151b] text-white font-bold text-base rounded-xl transition-all shadow-lg hover:shadow-red-600/30 flex items-center justify-center gap-2.5 cursor-pointer transform active:scale-[0.99]"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>Book My Free Strategy Call</span>
                </button>
              </div>

              {/* Microtext */}
              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-medium text-slate-600">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  100% Free Shop Assessment
                </span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="flex items-center gap-1">
                  <Wrench className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  Works With Your Existing Phone Number
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual - Mechanic Working + Realistic Incoming Call AI Overlay */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Frame: Garage Work Scene */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-300 bg-slate-900 shadow-xl">
                {/* Visual Representation of Garage & Vehicle under repair */}
                <div className="relative h-64 sm:h-76 w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex flex-col justify-between p-4 overflow-hidden">
                  
                  {/* Background graphic elements representing automotive lift & engine */}
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50 250 L100 80 L300 80 L350 250" stroke="#94A3B8" strokeWidth="2" />
                      <rect x="120" y="100" width="160" height="90" rx="8" stroke="#D71920" strokeWidth="2" strokeDasharray="6 4" />
                      <circle cx="150" cy="230" r="30" stroke="#94A3B8" strokeWidth="3" />
                      <circle cx="250" cy="230" r="30" stroke="#94A3B8" strokeWidth="3" />
                    </svg>
                  </div>

                  {/* Top Bay Tag */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-2 bg-slate-800/90 backdrop-blur-xs border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200">
                      <Wrench className="w-3.5 h-3.5 text-[#D71920]" />
                      <span>Bay #2 • Lift Engaged</span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded">
                      Shop In-Progress
                    </span>
                  </div>

                  {/* Central Mechanic Status note */}
                  <div className="z-10 bg-slate-800/80 backdrop-blur-xs border border-slate-700/80 rounded-xl p-3 text-xs text-slate-300">
                    <p className="font-semibold text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      Technician Under The Hood (Brake Job)
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Hands covered in grease • Unable to step away to front counter phone
                    </p>
                  </div>
                </div>

                {/* Overlaid Realistic Incoming Call & AI Answering Card */}
                <div className="absolute -bottom-2 sm:-bottom-4 left-3 right-3 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-slate-200 shadow-2xl space-y-3 z-20">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center text-[#D71920] shrink-0">
                        <PhoneIncoming className="w-4 h-4 animate-bounce" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-slate-900">Incoming Inbound Call</span>
                          <span className="text-[10px] bg-red-100 text-[#D71920] font-semibold px-1.5 py-0.2 rounded">
                            Ring 1
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-mono">Caller: (215) 555-0198</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full text-[10px] font-bold">
                      <Sparkles className="w-3 h-3" />
                      <span>AI Answered</span>
                    </div>
                  </div>

                  {/* Instant Dialogue Preview */}
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 space-y-1.5 text-xs">
                    <div className="flex items-start gap-1.5">
                      <span className="font-bold text-slate-800 text-[11px] shrink-0">Customer:</span>
                      <span className="text-slate-700 italic text-[11px]">"Hi, I need brake service for tomorrow morning."</span>
                    </div>
                    <div className="flex items-start gap-1.5 text-[#D71920]">
                      <span className="font-bold text-[11px] shrink-0">AI Receptionist:</span>
                      <span className="font-medium text-[11px] text-slate-800">
                        "Answering... What is the year, make, and model of your vehicle?"
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-0.5 border-t border-slate-100">
                    <span className="flex items-center gap-1 text-slate-700 font-medium">
                      <Car className="w-3.5 h-3.5 text-slate-400" />
                      Capturing 2021 Honda Accord
                    </span>
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Zero Shop Downtime
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative shadow badge */}
              <div className="h-6 sm:h-8" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
