/**
 * Analytics and Conversion Tracking Utility for Liberty Bell Digital
 * Contains placeholders and direct event dispatchers for:
 * 1. Meta Pixel (Facebook / Instagram Ads)
 * 2. Google Analytics 4 (GA4)
 * 3. Google Tag Manager (GTM DataLayer)
 * 4. GoHighLevel CRM Sync Payload
 */

import { LeadData, CtaOrigin } from '../types/landing';

// Helper to extract UTM parameters and query strings from the current URL
export const getUrlTrackingParams = () => {
  if (typeof window === 'undefined') {
    return {
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_content: '',
      utm_term: '',
      fbclid: '',
      adCampaign: '',
      adSet: '',
      adCreative: '',
      landingPageUrl: '',
    };
  }

  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || 'meta_ads',
    utm_medium: params.get('utm_medium') || 'cpc',
    utm_campaign: params.get('utm_campaign') || 'auto_repair_receptionist_2026',
    utm_content: params.get('utm_content') || 'mechanic_under_hood_v1',
    utm_term: params.get('utm_term') || 'auto repair missed calls',
    fbclid: params.get('fbclid') || '',
    adCampaign: params.get('campaign_name') || params.get('utm_campaign') || 'Auto_Repair_LeadGen_Spring',
    adSet: params.get('adset_name') || 'Mechanics_Shop_Owners_25_65',
    adCreative: params.get('ad_name') || 'You_Fix_Cars_We_Handle_Calls_Video1',
    landingPageUrl: window.location.href,
  };
};

/**
 * Universal Event Dispatcher
 */
export const trackEvent = (eventName: string, params: Record<string, unknown> = {}) => {
  const timestamp = new Date().toISOString();
  console.log(`📊 [Tracking Event] ${eventName} @ ${timestamp}`, params);

  // 1. ================= META PIXEL PLACEHOLDER =================
  // To activate Meta Pixel:
  // if (typeof window !== 'undefined' && (window as any).fbq) {
  //   (window as any).fbq('track', eventName, params);
  // }

  // 2. ================= GOOGLE ANALYTICS 4 PLACEHOLDER =================
  // To activate GA4:
  // if (typeof window !== 'undefined' && (window as any).gtag) {
  //   (window as any).gtag('event', eventName, params);
  // }

  // 3. ================= GOOGLE TAG MANAGER DATALAYER =================
  if (typeof window !== 'undefined') {
    const win = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push({
      event: eventName,
      ...params,
      timestamp,
    });
  }
};

/**
 * Pre-defined Conversion Event Helpers
 */
export const trackPageView = () => {
  trackEvent('PageView', {
    page_title: 'Liberty Bell Digital - Auto Repair AI Receptionist',
    industry: 'auto_repair',
    url: typeof window !== 'undefined' ? window.location.href : '',
  });
};

export const trackViewContent = (sectionName: string) => {
  trackEvent('ViewContent', {
    content_name: sectionName,
    content_category: 'Auto Repair Landing Page Section',
    industry: 'auto_repair',
  });
};

export const trackCtaClick = (origin: CtaOrigin, buttonText: string) => {
  trackEvent('CtaClick', {
    cta_origin: origin,
    button_text: buttonText,
    industry: 'auto_repair',
  });
};

export const trackLeadInitiated = (step: number, origin?: string) => {
  trackEvent('InitiateBooking', {
    step_number: step,
    cta_origin: origin || 'unknown',
    industry: 'auto_repair',
  });
};

export const trackContactLeadSubmitted = (leadData: Partial<LeadData>) => {
  trackEvent('Lead', {
    business_name: leadData.businessName,
    business_type: leadData.businessType,
    service_interest: leadData.requestedService,
    industry: 'auto_repair',
  });
};

export const trackScheduleCompleted = (leadData: LeadData) => {
  trackEvent('Schedule', {
    business_name: leadData.businessName,
    selected_date: leadData.selectedDate,
    selected_time: leadData.selectedTimeSlot,
    booking_type: leadData.bookingType,
    industry: 'auto_repair',
  });
  
  trackEvent('BookedAppointment', {
    business_name: leadData.businessName,
    phone: leadData.phone,
    email: leadData.email,
    industry: 'auto_repair',
  });
};

/**
 * Mock GoHighLevel CRM Sync Function
 * Console-logs the exact schema required for GHL webhook ingestion.
 */
export const syncLeadToGoHighLevel = async (lead: LeadData): Promise<boolean> => {
  console.log('🚀 [GoHighLevel CRM Webhook Payload Ready to Dispatch]:', {
    ...lead,
    custom_fields: {
      landing_page_industry: lead.landing_page_industry,
      booking_type: lead.bookingType,
      cta_origin: lead.ctaOrigin,
      selected_slot: `${lead.selectedDate || 'Pending Date'} ${lead.selectedTimeSlot || ''}`.trim(),
    },
    tags: [
      'Meta-Ad-Lead',
      'Industry-AutoRepair',
      lead.bookingType === 'in_person_review' ? 'Review-InPerson' : 'Review-StrategyCall',
      'AI-Receptionist-Funnel',
    ],
  });

  // Simulate network delay for realistic form UX
  await new Promise((resolve) => setTimeout(resolve, 600));
  return true;
};
