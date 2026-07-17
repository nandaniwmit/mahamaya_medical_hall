import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react';
import { ActiveTab } from './types';
import SEO from './components/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import GalleryView from './components/GalleryView';
import ContactView from './components/ContactView';
import Footer from './components/Footer';
import WhatsAppModal from './components/WhatsAppModal';
import { Phone, MessageSquare, PlusSquare, Clock, MapPin, CheckCircle } from 'lucide-react';
import { useTracker } from './hooks/useTracker';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  
  // Activate global tracking hook with activeTab as the dynamic page identifier
  useTracker(activeTab);

  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [whatsappModalOpen, setWhatsappModalOpen] = useState<boolean>(false);
  const [selectedMedicineForOrder, setSelectedMedicineForOrder] = useState<string>('');

  // 1. Manage Theme Mode (Dark/Light)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleSetDarkMode = (dark: boolean) => {
    setDarkMode(dark);
    if (dark) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('light');
      document.documentElement.classList.remove('dark');
    }
  };

  // 2. Intelligent Pre-population Handlers
  const handleOpenWhatsAppModal = () => {
    setWhatsappModalOpen(true);
  };

  const handleCloseWhatsAppModal = () => {
    setWhatsappModalOpen(false);
    setSelectedMedicineForOrder('');
  };

  const handleInquireMedicine = (medName: string) => {
    setSelectedMedicineForOrder(medName);
    setWhatsappModalOpen(true);
  };

  const handleInquireService = (srvTitle: string) => {
    setSelectedMedicineForOrder(`Inquiry about Service: ${srvTitle}`);
    setWhatsappModalOpen(true);
  };

  const handleCategoryInquiry = (catName: string) => {
    setSelectedMedicineForOrder(`Inquiry about Category: ${catName}`);
    setWhatsappModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 antialiased selection:bg-teal-500/20 selection:text-teal-900 dark:selection:text-teal-200">
      
      {/* Dynamic SEO Injector */}
      <SEO activeTab={activeTab} />

      {/* Sticky Navigation Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        darkMode={darkMode} 
        setDarkMode={handleSetDarkMode}
        onOpenWhatsAppModal={handleOpenWhatsAppModal}
      />

      {/* Primary Page Router Content */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <>
            <Hero 
              onOpenWhatsAppModal={handleOpenWhatsAppModal}
              onSearchSelect={handleInquireMedicine}
            />
            <HomeView 
              onOpenWhatsAppModal={handleOpenWhatsAppModal}
              onCategoryClick={handleCategoryInquiry}
              activeTabSetter={setActiveTab}
            />
          </>
        )}

        {activeTab === 'about' && (
          <AboutView />
        )}

        {activeTab === 'services' && (
          <ServicesView onServiceSelect={handleInquireService} />
        )}

        {activeTab === 'gallery' && (
          <GalleryView />
        )}

        {activeTab === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Comprehensive Footer */}
      <Footer 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenWhatsAppModal={handleOpenWhatsAppModal}
      />

      {/* Floating Call & WhatsApp Buttons - Visible on all pages */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Floating Call Button */}
        <a
          href="tel:09122975757"
          className="w-13 h-13 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-teal-400 dark:text-teal-600 flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all group"
          title="Call Pharmacist"
          aria-label="Call Pharmacist"
        >
          <Phone className="w-5 h-5 group-hover:animate-bounce" />
        </a>

        {/* Floating WhatsApp Button */}
        <button
          onClick={handleOpenWhatsAppModal}
          className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all relative group cursor-pointer"
          title="Open WhatsApp Order Form"
          aria-label="Open WhatsApp Order Form"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="absolute right-15 top-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
            WhatsApp Order
          </span>
        </button>
      </div>

      {/* Dynamic WhatsApp Modal with state injection for medicine pre-populations */}
      {whatsappModalOpen && (
        <WhatsAppModalWrapper 
          isOpen={whatsappModalOpen} 
          onClose={handleCloseWhatsAppModal}
          initialMedicineValue={selectedMedicineForOrder}
        />
      )}

    </div>
  );
}

// Sub-wrapper to dynamically pass pre-populated value into internal form state
interface WrapperProps {
  isOpen: boolean;
  onClose: () => void;
  initialMedicineValue: string;
}

function WhatsAppModalWrapper({ isOpen, onClose, initialMedicineValue }: WrapperProps) {
  // We re-import or use the loaded WhatsAppModal but seed its internal state with initialMedicineValue!
  // To avoid circular or duplicated definitions, we intercept the rendering here.
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    medicines: initialMedicineValue || '',
    prescriptionUploaded: false,
    message: '',
    preferredTime: 'Anytime (08:00 AM - 10:00 PM)'
  });

  const [fileName, setFileName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setFormData((prev) => ({ ...prev, prescriptionUploaded: true }));
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const hasPrescription = formData.prescriptionUploaded ? 'Yes (File Attached: ' + fileName + ')' : 'No';
    
    const textMessage = `Hello Mahamaya Medical Hall,

I would like to place an order / inquire about medicines. Here are my details:

Customer Name:
${formData.name}

Phone:
${formData.phone}

Medicine Required:
${formData.medicines}

Address:
${formData.address || 'Not Provided (Store pickup / inquiry)'}

Prescription:
${hasPrescription}

Preferred Delivery Time:
${formData.preferredTime}

Email:
${formData.email || 'Not Provided'}

Message:
${formData.message || 'None'}`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919122975757&text=${encodedMessage}`;

    setTimeout(() => {
      setIsSubmitting(false);
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-slate-800 overflow-hidden z-10 my-8">
        
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-teal-500/10 to-teal-600/10 dark:from-teal-950/20 dark:to-teal-900/20 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
              <MessageSquare className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">WhatsApp Order Form</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Send prescription & orders directly to our pharmacist</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer"
          >
            <span className="sr-only">Close</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[75vh] space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Customer Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Customer Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter 10-digit mobile number"
                pattern="[0-9]{10}"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Email Address <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all"
              />
            </div>

            {/* Preferred Delivery Time */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Preferred Delivery / Call Time
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all cursor-pointer"
              >
                <option value="Anytime (08:00 AM - 10:00 PM)">Anytime (08:00 AM - 10:00 PM)</option>
                <option value="Morning (08:00 AM - 12:00 PM)">Morning (08:00 AM - 12:00 PM)</option>
                <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                <option value="Evening (04:00 PM - 08:00 PM)">Evening (04:00 PM - 08:00 PM)</option>
                <option value="Night (08:00 PM - 10:00 PM)">Night (08:00 PM - 10:00 PM)</option>
              </select>
            </div>

          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Delivery Address <span className="text-slate-400 font-normal">(Optional, for nearby delivery)</span>
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
              <textarea
                name="address"
                rows={2}
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter complete address with landmark (Delha, Chhotki, Tekari Rd area)"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all"
              />
            </div>
          </div>

          {/* Medicine Required */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Medicine Required <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <PlusSquare className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
              <textarea
                name="medicines"
                rows={3}
                required
                value={formData.medicines}
                onChange={handleInputChange}
                placeholder="List your required tablets, capsules, dosage, or health products (e.g., Paracetamol 650mg - 2 strips, Baby formula - 1 can)"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all"
              />
            </div>
          </div>

          {/* Upload Prescription */}
          <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 rounded-2xl p-5 text-center transition-all">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*,.pdf"
              className="hidden"
            />
            {formData.prescriptionUploaded ? (
              <div className="flex flex-col items-center justify-center gap-2">
                <CheckCircle className="w-10 h-10 text-emerald-500" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Prescription File Loaded!</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-gray-100 dark:border-slate-700">
                  {fileName}
                </p>
                <button
                  type="button"
                  onClick={triggerFileInput}
                  className="mt-2 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                >
                  Change File
                </button>
              </div>
            ) : (
              <div className="cursor-pointer" onClick={triggerFileInput}>
                <Clock className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Upload Prescription Photo / PDF</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Tap to browse files. Required for scheduled prescription-only drugs.</p>
              </div>
            )}
          </div>

          {/* Message / Notes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Additional Message or Special Instructions
            </label>
            <textarea
              name="message"
              rows={2}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="E.g., Please provide substitute brands if brand not available, or contact me before delivery."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-gray-100 dark:border-slate-800">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:flex-1 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-bold text-sm shadow-lg shadow-teal-500/10 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{isSubmitting ? 'Formatting...' : 'Send Order via WhatsApp'}</span>
            </button>
            <a
              href="tel:09122975757"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-gray-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>Call Pharmacist</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
