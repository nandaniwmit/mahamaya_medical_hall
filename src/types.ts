export type ActiveTab = 'home' | 'about' | 'services' | 'gallery' | 'contact';

export interface MedicineCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface MedicalService {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'medicines' | 'equipment' | 'customers';
  imageUrl: string;
  description: string;
}

export interface HealthTip {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'wellness' | 'medicine' | 'prevention' | 'nutrition';
  readTime: string;
  date: string;
  author: string;
}

export interface Medicine {
  id: string;
  name: string;
  category: string;
  dosageForm: string; // e.g. Tablet, Capsule, Syrup, etc.
  description: string;
  genericName?: string;
  availability: 'In Stock' | 'Available on Order' | 'Out of Stock';
}

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export interface WhatsAppOrderData {
  name: string;
  phone: string;
  email: string;
  address: string;
  medicines: string;
  prescriptionUploaded: boolean;
  message: string;
  preferredTime: string;
}
