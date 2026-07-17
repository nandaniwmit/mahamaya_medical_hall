import { useEffect } from 'react';
import { ActiveTab, FAQItem } from '../types';
import { FAQS } from '../data';

interface SEOProps {
  activeTab: ActiveTab;
}

export default function SEO({ activeTab }: SEOProps) {
  useEffect(() => {
    // 1. Determine Title, Description, and Keywords based on current tab
    let title = 'Mahamaya Medical Hall | Genuine Medicine Store in Gaya, Bihar';
    let description = 'Mahamaya Medical Hall in Gaya, Bihar is your trusted medical store for 100% genuine medicines, surgical supplies, healthcare products, baby care, and orthopedic support. Order via WhatsApp at 09122975757.';
    let keywords = 'Mahamaya Medical Hall, medical store Gaya, pharmacy Delha, medicine store Tekari Road, genuine medicines Bihar, surgical items Gaya, baby care products, health supplements, buy medicines Gaya, local pharmacy, Bihar medical hall, WhatsApp medicine delivery';

    switch (activeTab) {
      case 'about':
        title = 'About Us | Mahamaya Medical Hall - Trusted Pharmacy in Gaya';
        description = 'Learn about Mahamaya Medical Hall’s mission, vision, values, and business story. Serving local customers in Delha, Gaya, Bihar with authentic medicines since inception.';
        keywords = 'about Mahamaya Medical Hall, pharmacy history Gaya, local trusted pharmacist, Indian medical store vision, medical store owner Gaya';
        break;
      case 'services':
        title = 'Our Services | Prescription Medicines & Home Healthcare in Gaya';
        description = 'Explore our comprehensive healthcare services: Prescription medicines, OTC drugs, health supplements, medical equipment rentals, baby care, surgical items, and cold-chain insulin storage.';
        keywords = 'pharmacy services Gaya, medical equipment Gaya, cold-chain insulin, health supplements store, baby care products Gaya, orthopedic support Bihar';
        break;
      case 'gallery':
        title = 'Gallery | Take a Virtual Tour of Mahamaya Medical Hall';
        description = 'View high-quality photos of Mahamaya Medical Hall. Take a look at our fully stocked medical racks, clean storefront, surgical devices, and professional pharmacist counseling.';
        keywords = 'pharmacy gallery Gaya, medical store photos, medicine rack setup, medical hall interior';
        break;
      case 'contact':
        title = 'Contact Us | Location, Working Hours & Phone in Gaya';
        description = 'Get in touch with Mahamaya Medical Hall. Find our address in Chhotki Delha Gaya, call 09122975757, view opening hours, or check directions on Google Maps.';
        keywords = 'contact Mahamaya Medical Hall, pharmacy phone number Gaya, medical store timing, pharmacy location map Gaya, Delha medical hall contact';
        break;
    }

    // 2. Set Document Title
    document.title = title;

    // 3. Update or Create Meta Tags
    const updateMetaTag = (attribute: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);
    updateMetaTag('name', 'author', 'Mahamaya Medical Hall');

    // Open Graph
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('property', 'og:url', window.location.href);
    updateMetaTag('property', 'og:image', '/src/assets/images/medical_hero_banner_1783414833757.jpg');
    updateMetaTag('property', 'og:site_name', 'Mahamaya Medical Hall');

    // Twitter Cards
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', '/src/assets/images/medical_hero_banner_1783414833757.jpg');

    // 4. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', window.location.href);

    // 5. Schema Markup Injection
    // Remove existing schemas to avoid duplicates when tab transitions happen
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach((schema) => schema.remove());

    const schemasToInject: any[] = [];

    // A. LocalBusiness & Pharmacy Schema
    const pharmacySchema = {
      '@context': 'https://schema.org',
      '@type': 'Pharmacy',
      'id': 'https://mahamayamedicalhall.com/#pharmacy',
      'name': 'Mahamaya Medical Hall',
      'alternateName': 'Mahamaya Medical Store',
      'image': [
        window.location.origin + '/src/assets/images/medical_hero_banner_1783414833757.jpg',
        window.location.origin + '/src/assets/images/pharmacist_counter_1783414849236.jpg'
      ],
      'description': 'Your Trusted Medical Store for Genuine Medicines & Healthcare Needs in Gaya, Bihar.',
      'telephone': '+91-9122975757',
      'url': window.location.origin,
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Chhotki, Delha, Tekari Road',
        'addressLocality': 'Gaya',
        'addressRegion': 'Bihar',
        'postalCode': '823002',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 24.802111,
        'longitude': 84.991222
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        'opens': '08:00',
        'closes': '22:00'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+91-9122975757',
        'contactType': 'customer service',
        'areaServed': 'IN',
        'availableLanguage': ['Hindi', 'English', 'Bihari']
      },
      'sameAs': [
        'https://maps.google.com/?cid=12111812920224151474'
      ]
    };
    schemasToInject.push(pharmacySchema);

    // B. Breadcrumb Schema
    const breadcrumbItems = [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': window.location.origin
      }
    ];

    if (activeTab !== 'home') {
      const pageName = activeTab.charAt(0).toUpperCase() + activeTab.slice(1);
      breadcrumbItems.push({
        '@type': 'ListItem',
        'position': 2,
        'name': pageName,
        'item': `${window.location.origin}/#${activeTab}`
      });
    }

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbItems
    };
    schemasToInject.push(breadcrumbSchema);

    // C. FAQ Schema (only for Home tab to keep it tidy, or generic)
    if (activeTab === 'home') {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': FAQS.map((faq: FAQItem) => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      };
      schemasToInject.push(faqSchema);
    }

    // Inject all schemas
    schemasToInject.forEach((schemaData) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaData);
      document.head.appendChild(script);
    });

  }, [activeTab]);

  return null; // SEO component operates purely inside document.head side-effects
}
