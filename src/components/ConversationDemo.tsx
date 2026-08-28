import React, { useState } from 'react';
import { 
  Bot, 
  User, 
  CheckCircle2, 
  Calendar, 
  Wrench, 
  PhoneCall, 
  Car, 
  Clock, 
  MessageSquare,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { trackCtaClick } from '../utils/tracking';

interface ConversationDemoProps {
  onOpenBooking: () => void;
}

export const ConversationDemo: React.FC<ConversationDemoProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'chat' | 'audio'>('chat');

  const handleCta = () => {
    trackCtaClick('ai_demo', 'Book My Free Strategy Call');
    onOpenBooking();
  };

  return (
    <section id="conversation-demo-section" className="py-14 sm:py-18 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-wider uppercase text-[#D71920] bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            Real-World Conversation Preview
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            See How The AI Handles A Service Inbound
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Natural, polite, and trained to collect the exact automotive details your service writers need before a car pulls into the parking lot.
          </p>
        </div>

        {/* Demo Container */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Interactive Chat Exchange */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
            <div>
              {/* Chat Header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3.5 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-[#D71920]">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Liberty Bell AI Phone Agent
                    </h3>
                    <p className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Inbound Voice / Text Demo
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded-md">
                  Simulated Inbound Call
                </span>
              </div>

              {/* Chat Bubble Sequence */}
              <div className="space-y-3.5 py-1 text-xs sm:text-sm">
                
                {/* 1. Customer Message */}
                <div className="flex items-start gap-2.5 justify-end">
                  <div className="bg-slate-900 text-white rounded-2xl rounded-tr-xs p-3.5 max-w-[85%] shadow-xs">
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-300 mb-1 font-semibold">
                      <User className="w-3 h-3" />
                      <span>Caller (Local Vehicle Owner)</span>
                    </div>
                    <p className="leading-relaxed">
                      "Hi, my brakes are making a grinding noise. Can someone look at it tomorrow?"
                    </p>
                  </div>
                </div>

                {/* 2. AI Response 1 */}
                <div className="flex items-start gap-2.5 justify-start">
                  <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-[#D71920] shrink-0 mt-1">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white border border-slate-200 text-slate-800 rounded-2xl rounded-tl-xs p-3.5 max-w-[85%] shadow-xs">
                    <div className="flex items-center gap-1.5 text-[10px] text-[#D71920] font-bold mb-1">
                      <span>Liberty Bell AI Receptionist</span>
                    </div>
                    <p className="leading-relaxed">
                      "I can help you schedule a service appointment. What vehicle are you bringing in?"
                    </p>
                  </div>
                </div>

                {/* 3. Customer Message 2 */}
                <div className="flex items-start gap-2.5 justify-end">
                  <div className="bg-slate-900 text-white rounded-2xl rounded-tr-xs p-3 max-w-[85%] shadow-xs">
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-300 mb-1 font-semibold">
                      <User className="w-3 h-3" />
                      <span>Caller</span>
                    </div>
                    <p className="font-semibold text-white">
                      "2021 Honda Accord."
                    </p>
                  </div>
                </div>

                {/* 4. AI Response 2 */}
                <div className="flex items-start gap-2.5 justify-start">
                  <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-[#D71920] shrink-0 mt-1">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white border border-slate-200 text-slate-800 rounded-2xl rounded-tl-xs p-3.5 max-w-[85%] shadow-xs">
                    <div className="flex items-center gap-1.5 text-[10px] text-[#D71920] font-bold mb-1">
                      <span>Liberty Bell AI Receptionist</span>
                    </div>
                    <p className="leading-relaxed">
                      "Thank you. I have availability tomorrow at <strong>10:30 AM</strong> or <strong>2:00 PM</strong>."
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Micro-callout */}
            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Understands automotive symptoms & shop calendar
              </span>
              <span className="text-[11px] font-medium text-slate-400">Total duration: 24 sec</span>
            </div>
          </div>

          {/* Right Column: Booked-Status Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-800">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Confirmed & Dispatched
                </span>
                <span className="text-xs text-slate-400 font-mono">Ticket #8419</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                Service Appointment Booked
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Instantly logged to shop management system and sent via SMS to customer.
              </p>

              {/* Data fields */}
              <div className="space-y-2.5 bg-slate-800/80 border border-slate-700 rounded-xl p-3.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-slate-400" />
                    Vehicle:
                  </span>
                  <span className="font-bold text-white">2021 Honda Accord</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-slate-400" />
                    Request:
                  </span>
                  <span className="font-semibold text-red-400">Brake Inspection</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    Drop-off Slot:
                  </span>
                  <span className="font-semibold text-emerald-400">Tomorrow @ 10:30 AM</span>
                </div>

                <div className="flex items-center justify-between border-t border-slate-700/80 pt-2 text-[11px]">
                  <span className="text-slate-400">Action:</span>
                  <span className="text-slate-200">SMS Confirmation Sent</span>
                </div>
              </div>
            </div>

            {/* Quick conversion hook */}
            <div className="mt-5 pt-4 border-t border-slate-800 space-y-2">
              <button
                id="demo-section-cta"
                onClick={handleCta}
                className="w-full min-h-[46px] py-2.5 px-4 bg-[#D71920] hover:bg-[#b9151b] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book My Free Strategy Call</span>
              </button>
              <p className="text-[11px] text-center text-slate-400">
                See this customized for your shop's phone lines.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
