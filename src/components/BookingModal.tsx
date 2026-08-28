import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Calendar as CalendarIcon, 
  Clock, 
  Building2, 
  User, 
  Phone, 
  Mail, 
  Wrench, 
  Globe, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Check
} from 'lucide-react';
import { LeadData, CtaOrigin } from '../types/landing';
import { 
  getUrlTrackingParams, 
  trackLeadInitiated, 
  trackContactLeadSubmitted, 
  trackScheduleCompleted, 
  syncLeadToGoHighLevel 
} from '../utils/tracking';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  ctaOrigin: CtaOrigin;
  initialBookingType?: 'strategy_call' | 'in_person_review';
}

const BUSINESS_TYPES = [
  'Auto Repair Shop',
  'Independent Mechanic / Garage',
  'Brake & Tire Center',
  'Transmission & Engine Specialist',
  'Auto Body & Collision',
  'Auto Detailing & Protection',
  'Fleet / Mobile Mechanic Service',
  'Other Automotive Service',
];

const HELP_OPTIONS = [
  'Missing Calls During Busy Hours',
  'Getting More Repair Leads',
  'Booking More Appointments Automatically',
  'Modern Website & Service Pages',
  'Google Visibility & Map Ranking',
  'Targeted Local Advertising',
  'Automated Customer Follow-Up',
  'AI Receptionist Setup',
  'Not Sure Yet — Let\'s Talk',
];

const AVAILABLE_DAYS = [
  { day: 'Tomorrow', dateStr: 'Fri, Aug 28' },
  { day: 'Monday', dateStr: 'Mon, Aug 31' },
  { day: 'Tuesday', dateStr: 'Tue, Sep 1' },
  { day: 'Wednesday', dateStr: 'Wed, Sep 2' },
];

const TIME_SLOTS = [
  '9:00 AM',
  '10:30 AM',
  '1:00 PM',
  '2:30 PM',
  '4:00 PM',
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  ctaOrigin,
  initialBookingType = 'strategy_call',
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form Fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('Auto Repair Shop');
  const [requestedService, setRequestedService] = useState('Missing Calls During Busy Hours');
  const [website, setWebsite] = useState('');
  const [notes, setNotes] = useState('');

  // Step 2 Schedule Fields
  const [selectedDay, setSelectedDay] = useState(AVAILABLE_DAYS[0].dateStr);
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[1]);
  const [timeAlreadyPicked, setTimeAlreadyPicked] = useState(false);

  // Validation state
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      trackLeadInitiated(1, ctaOrigin);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset state when closed
      setTimeout(() => {
        setStep(1);
        setIsSuccess(false);
        setTimeAlreadyPicked(false);
        setErrors({});
      }, 300);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, ctaOrigin]);

  if (!isOpen) return null;

  const validatedBookingType: 'strategy_call' | 'in_person_review' = 
    initialBookingType === 'in_person_review' ? 'in_person_review' : 'strategy_call';

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!firstName.trim()) newErrors.firstName = 'First name is required';
    if (!lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!businessName.trim()) newErrors.businessName = 'Shop or business name is required';
    
    // Basic phone validation
    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    // Basic email validation
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!businessType) newErrors.businessType = 'Please select your shop type';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep1()) return;

    const trackingParams = getUrlTrackingParams();
    const partialLead: Partial<LeadData> = {
      firstName,
      lastName,
      businessName,
      phone,
      email,
      businessType,
      requestedService,
      website,
      notes,
      landing_page_industry: 'auto_repair',
      ctaOrigin,
      bookingType: validatedBookingType,
    };

    trackContactLeadSubmitted(partialLead);
    trackLeadInitiated(2, ctaOrigin);
    setStep(2);
  };

  const handleFinalConfirm = async () => {
    setIsSubmitting(true);
    const trackingParams = getUrlTrackingParams();

    const fullLeadData: LeadData = {
      firstName,
      lastName,
      businessName,
      phone,
      email,
      businessType,
      requestedService,
      website,
      notes,
      landing_page_industry: 'auto_repair',
      landingPageUrl: trackingParams.landingPageUrl,
      adCampaign: trackingParams.adCampaign,
      adSet: trackingParams.adSet,
      adCreative: trackingParams.adCreative,
      utm_source: trackingParams.utm_source,
      utm_medium: trackingParams.utm_medium,
      utm_campaign: trackingParams.utm_campaign,
      utm_content: trackingParams.utm_content,
      utm_term: trackingParams.utm_term,
      fbclid: trackingParams.fbclid,
      dateCreated: new Date().toISOString(),
      appointmentStatus: 'confirmed',
      selectedDate: selectedDay,
      selectedTimeSlot: selectedTime,
      ctaOrigin,
      bookingType: validatedBookingType,
    };

    // Dispatch tracking
    trackScheduleCompleted(fullLeadData);

    // Sync to GoHighLevel Mock
    await syncLeadToGoHighLevel(fullLeadData);

    setTimeAlreadyPicked(true);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const isReviewBooking = initialBookingType === 'in_person_review';

  return (
    <div 
      id="booking-modal-overlay" 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        id="booking-modal-container"
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Bar */}
        <div className="bg-slate-900 px-6 py-4 flex items-center justify-between text-white border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#D71920] flex items-center justify-center text-white font-bold text-sm">
              LB
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                {isReviewBooking ? 'In-Person Shop Review' : 'Auto Repair Strategy Call'}
              </p>
              <h2 className="text-base font-bold text-white leading-tight">
                {isReviewBooking ? 'Book Your Free In-Person Business Review' : 'Book Your Free Strategy Call'}
              </h2>
            </div>
          </div>
          <button 
            id="close-booking-modal-button"
            onClick={onClose}
            aria-label="Close booking modal"
            className="p-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {!isSuccess && (
          <div className="bg-slate-100 px-6 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs font-medium text-slate-600 shrink-0">
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                step === 1 ? 'bg-[#D71920] text-white' : 'bg-emerald-600 text-white'
              }`}>
                {step === 1 ? '1' : <Check className="w-3 h-3" />}
              </span>
              <span className={step === 1 ? 'font-semibold text-slate-900' : 'text-slate-600'}>
                Step 1: Business Information
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                step === 2 ? 'bg-[#D71920] text-white' : 'bg-slate-300 text-slate-700'
              }`}>
                2
              </span>
              <span className={step === 2 ? 'font-semibold text-slate-900' : 'text-slate-500'}>
                Step 2: Choose a Time
              </span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto grow">
          {/* SUCCESS STATE */}
          {isSuccess ? (
            <div id="booking-success-view" className="py-6 text-center space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">
                  {timeAlreadyPicked ? "You're Booked." : "You're All Set."}
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  {timeAlreadyPicked
                    ? "We'll see you then. Check your phone and email for confirmation."
                    : "We've received your information. Choose a time that works for you and we'll talk through your business, what's currently happening, and where Liberty Bell may be able to help."}
                </p>
              </div>

              {/* Confirmation Details Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left max-w-md mx-auto text-xs space-y-2">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Shop / Business:</span>
                  <span className="font-semibold text-slate-900">{businessName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Contact:</span>
                  <span className="font-medium text-slate-900">{firstName} {lastName} ({phone})</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Scheduled Date & Time:</span>
                  <span className="font-bold text-[#D71920]">{selectedDay} @ {selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Session Format:</span>
                  <span className="font-medium text-slate-900">
                    {isReviewBooking ? 'In-Person On-Site Shop Review' : 'Direct Phone / Screen Call (15 Mins)'}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  id="success-done-button"
                  onClick={onClose}
                  className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition-colors cursor-pointer shadow-md"
                >
                  Done & Return to Page
                </button>
              </div>
            </div>
          ) : step === 1 ? (
            /* STEP 1: BUSINESS INFORMATION */
            <form id="step-1-booking-form" onSubmit={handleStep1Submit} className="space-y-4">
              <div className="mb-2">
                <h3 className="text-lg font-bold text-slate-900">
                  {isReviewBooking ? 'Request Your Free In-Person Shop Review' : 'Book Your Free Strategy Call'}
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Tell us a little about your business and we'll take a look at where you may be losing calls, leads, bookings, or customers.
                </p>
              </div>

              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      id="lead-first-name"
                      type="text"
                      required
                      placeholder="e.g. Mike"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={`w-full pl-9 pr-3 py-2.5 bg-slate-50 border ${
                        errors.firstName ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                      } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920] focus:border-transparent text-slate-900`}
                    />
                  </div>
                  {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      id="lead-last-name"
                      type="text"
                      required
                      placeholder="e.g. Miller"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className={`w-full pl-9 pr-3 py-2.5 bg-slate-50 border ${
                        errors.lastName ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                      } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920] focus:border-transparent text-slate-900`}
                    />
                  </div>
                  {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
                </div>
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Shop / Business Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    id="lead-business-name"
                    type="text"
                    required
                    placeholder="e.g. Miller's Precision Auto Care"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className={`w-full pl-9 pr-3 py-2.5 bg-slate-50 border ${
                      errors.businessName ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                    } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920] focus:border-transparent text-slate-900`}
                  />
                </div>
                {errors.businessName && <p className="text-xs text-red-500 mt-1">{errors.businessName}</p>}
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      id="lead-phone"
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full pl-9 pr-3 py-2.5 bg-slate-50 border ${
                        errors.phone ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                      } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920] focus:border-transparent text-slate-900`}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      id="lead-email"
                      type="email"
                      required
                      placeholder="mike@millerauto.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full pl-9 pr-3 py-2.5 bg-slate-50 border ${
                        errors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                      } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920] focus:border-transparent text-slate-900`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Business Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Business Type <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Wrench className="w-4 h-4 absolute left-3 top-3 text-slate-400 pointer-events-none" />
                  <select
                    id="lead-business-type"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920] focus:border-transparent text-slate-900 appearance-none cursor-pointer"
                  >
                    {BUSINESS_TYPES.map((bt) => (
                      <option key={bt} value={bt}>{bt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* What would you like help with? (Recommended) */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  What would you like help with? <span className="text-slate-400 font-normal">(Recommended)</span>
                </label>
                <select
                  id="lead-help-topic"
                  value={requestedService}
                  onChange={(e) => setRequestedService(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D71920] focus:border-transparent text-slate-900 cursor-pointer"
                >
                  {HELP_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Optional Fields */}
              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Website or Google Business Profile <span className="text-slate-400">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      id="lead-website"
                      type="text"
                      placeholder="www.yourshop.com or Google Maps link"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#D71920] focus:border-transparent text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Anything we should know about your business? <span className="text-slate-400">(Optional)</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <textarea
                      id="lead-notes"
                      rows={2}
                      placeholder="e.g. 4 bays, 2 techs, phone rings constantly while we're on the lift..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#D71920] focus:border-transparent text-slate-900"
                    />
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-3">
                <button
                  id="submit-step-1-button"
                  type="submit"
                  className="w-full min-h-[48px] py-3.5 px-6 bg-[#D71920] hover:bg-[#b9151b] text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-lg hover:shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book My Free Strategy Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center justify-center gap-2 mt-2 text-[11px] text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>No obligation • 100% Free • Custom shop review</span>
                </div>
              </div>
            </form>
          ) : (
            /* STEP 2: CHOOSE A TIME */
            <div id="step-2-calendar-view" className="space-y-5 animate-in fade-in duration-150">
              <div>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 mb-2 font-medium cursor-pointer"
                >
                  ← Back to business info
                </button>
                <h3 className="text-lg font-bold text-slate-900">
                  Step 2: Choose a Convenient Time
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Select an available 15-minute slot that fits around your shop schedule.
                </p>
              </div>

              {/* Day Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
                  <CalendarIcon className="w-3.5 h-3.5 text-[#D71920]" />
                  <span>Select Day</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {AVAILABLE_DAYS.map((d) => {
                    const isSelected = selectedDay === d.dateStr;
                    return (
                      <button
                        key={d.dateStr}
                        type="button"
                        onClick={() => setSelectedDay(d.dateStr)}
                        className={`py-2.5 px-2 rounded-xl text-center border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#D71920] bg-red-50 text-[#D71920] font-bold shadow-xs'
                            : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className="text-xs">{d.day}</div>
                        <div className="text-[11px] opacity-80">{d.dateStr}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slot Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D71920]" />
                  <span>Select Time (15-Min Strategy Session)</span>
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {TIME_SLOTS.map((t) => {
                    const isSelected = selectedTime === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTime(t)}
                        className={`py-2 px-2 rounded-xl text-xs text-center border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#D71920] bg-[#D71920] text-white font-bold shadow-sm'
                            : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Recap */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-700 flex items-center justify-between">
                <div>
                  <span className="font-medium text-slate-900">Summary: </span>
                  <span>{selectedDay} at <strong>{selectedTime}</strong></span>
                </div>
                <span className="text-[11px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">
                  Confirmed Instantly
                </span>
              </div>

              {/* Final Confirm Button */}
              <div className="pt-2">
                <button
                  id="confirm-booking-time-button"
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleFinalConfirm}
                  className="w-full min-h-[48px] py-3.5 px-6 bg-[#D71920] hover:bg-[#b9151b] text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-lg hover:shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Reserving Your Slot...
                    </span>
                  ) : (
                    <span>Confirm Free Strategy Call</span>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
