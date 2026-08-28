import React, { useState, useEffect } from 'react';
import { CtaOrigin } from './types/landing';
import { trackPageView } from './utils/tracking';

// Section Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { ConversationDemo } from './components/ConversationDemo';
import { CustomerJourney } from './components/CustomerJourney';
import { AdditionalServices } from './components/AdditionalServices';
import { WhyLibertyBell } from './components/WhyLibertyBell';
import { InPersonReview } from './components/InPersonReview';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { StickyCta } from './components/StickyCta';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [modalOrigin, setModalOrigin] = useState<CtaOrigin>('hero');
  const [bookingType, setBookingType] = useState<'strategy_call' | 'in_person_review'>('strategy_call');

  useEffect(() => {
    // Fire PageView tracking event on initial render
    trackPageView();
  }, []);

  const handleOpenBooking = (origin: CtaOrigin = 'hero', type: 'strategy_call' | 'in_person_review' = 'strategy_call') => {
    setModalOrigin(origin);
    setBookingType(type);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#D71920] selection:text-white">
      {/* 1. Minimal Nav */}
      <Navbar onOpenBooking={() => handleOpenBooking('nav', 'strategy_call')} />

      {/* 2. Hero */}
      <Hero onOpenBooking={() => handleOpenBooking('hero', 'strategy_call')} />

      {/* 3. Industry-specific problem */}
      <ProblemSection />

      {/* 4. Liberty Bell / AI Receptionist solution */}
      <SolutionSection />

      {/* 5. AI Receptionist conversation demo */}
      <ConversationDemo onOpenBooking={() => handleOpenBooking('ai_demo', 'strategy_call')} />

      {/* 6. Customer journey after a lead comes in */}
      <CustomerJourney />

      {/* 7. Relevant additional services & Search Visibility mini-section */}
      <AdditionalServices onOpenBooking={() => handleOpenBooking('services', 'strategy_call')} />

      {/* 8. Why Liberty Bell / trust section */}
      <WhyLibertyBell />

      {/* 9. In-person review section */}
      <InPersonReview onOpenBooking={() => handleOpenBooking('in_person_review', 'in_person_review')} />

      {/* 10. FAQ */}
      <FaqSection />

      {/* 11. Final CTA */}
      <FinalCta onOpenBooking={() => handleOpenBooking('final_cta', 'strategy_call')} />

      {/* Footer */}
      <Footer />

      {/* 12. Sticky CTA (Mobile bottom + Desktop header) */}
      <StickyCta onOpenBooking={() => handleOpenBooking('sticky_mobile', 'strategy_call')} />

      {/* 13. Booking Popup Modal (Shared by all CTAs) */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        ctaOrigin={modalOrigin}
        initialBookingType={bookingType}
      />
    </div>
  );
}
