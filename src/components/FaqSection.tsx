import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Can it ask what vehicle the customer has?',
      answer:
        'Yes. The AI is specifically trained for automotive shops to ask for the exact year, make, model, and detailed issue description before confirming any appointment.',
    },
    {
      question: 'Can it schedule appointments?',
      answer:
        'Yes. It can book drop-off times or diagnostic windows directly according to the rules and shop capacity parameters you define.',
    },
    {
      question: 'Can customers still speak to us?',
      answer:
        'Absolutely. If a customer prefers to talk directly with your service writer or has a complex technical question, the AI can transfer the call immediately or log an urgent callback note.',
    },
    {
      question: 'Does this replace my employees?',
      answer:
        'No. It acts as an assistant for your front desk and mechanics, handling repetitive intake questions and after-hours rings so your crew can stay focused on turning wrenches and helping in-shop customers.',
    },
    {
      question: 'Can Liberty Bell help with Google too?',
      answer:
        'Yes. In addition to phone automation, we help auto shops improve their Google Business Profile, search visibility, customer review generation, and targeted local advertising.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-14 sm:py-18 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-wider uppercase text-[#D71920] bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Common Questions From Shop Owners
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Quick, straightforward answers about how Liberty Bell integrates with your shop.
          </p>
        </div>

        {/* 5 Accordion FAQs */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:bg-slate-100/80 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-xs font-mono text-[#D71920] bg-red-100/70 px-1.5 py-0.5 rounded">
                      Q{idx + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#D71920]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                    <p>{faq.answer}</p>
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
