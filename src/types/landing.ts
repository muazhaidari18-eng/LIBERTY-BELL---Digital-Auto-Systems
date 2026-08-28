export interface LeadData {
  firstName: string;
  lastName: string;
  businessName: string;
  phone: string;
  email: string;
  businessType: string;
  requestedService: string;
  website: string;
  notes: string;
  landing_page_industry: 'auto_repair';
  landingPageUrl: string;
  adCampaign: string;
  adSet: string;
  adCreative: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  fbclid: string;
  dateCreated: string;
  appointmentStatus: 'pending' | 'confirmed' | 'rescheduled';
  selectedDate?: string;
  selectedTimeSlot?: string;
  ctaOrigin?: string;
  bookingType?: 'strategy_call' | 'in_person_review';
}

export type CtaOrigin = 
  | 'nav' 
  | 'hero' 
  | 'mid_page' 
  | 'ai_demo' 
  | 'services' 
  | 'in_person_review' 
  | 'final_cta' 
  | 'sticky_mobile' 
  | 'sticky_desktop';

export interface TrackingEventData {
  eventName: string;
  parameters?: Record<string, unknown>;
}
