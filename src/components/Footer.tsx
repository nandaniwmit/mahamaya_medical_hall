import { ActiveTab } from '../types';
import { 
  PlusSquare, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  Heart, 
  ArrowUp, 
  ExternalLink 
} from 'lucide-react';

interface FooterProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenWhatsAppModal: () => void;
}

export default function Footer({ activeTab, setActiveTab, onOpenWhatsAppModal }: FooterProps) {
  
  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand & Description */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center text-white shadow-md">
                <PlusSquare className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight leading-none">Mahamaya Medical</h3>
                <span className="text-[10px] font-mono text-teal-400 tracking-widest uppercase">Hall & Pharmacy</span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Your trusted retail pharmacy store in Chhotki, Delha, Gaya. We are dedicated to providing 100% genuine medicines, pediatric care, diagnostic medical monitors, and medical grade supplements under optimal cold-chain storage.
            </p>

            {/* License details for high trust */}
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-900/80 text-[11px] font-mono leading-relaxed space-y-1">
              <p className="text-slate-300 font-bold">LICENSING INFORMATION:</p>
              <p>Retail Drug License: <span className="text-teal-400">GAY-20381-R</span></p>
              <p>Registered Pharmacist on Duty</p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Story' },
                { id: 'services', label: 'Our Services' },
                { id: 'gallery', label: 'Store Gallery' },
                { id: 'contact', label: 'Contact & Map' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id as ActiveTab)}
                    className={`hover:text-white transition-colors cursor-pointer text-left ${
                      activeTab === link.id ? 'text-teal-400 font-semibold' : 'text-slate-400'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Our Main Services</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Prescription Drugs Sourcing
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Over-The-Counter (OTC) Care
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Diabetic Monitors & Test Strips
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Baby Care & Pediatric Foods
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Orthopedic Knee & Lumbar Support
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Store Info / Contacts */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Store Contacts</h4>
            
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Chhotki, Delha, Tekari Road, Gaya, Bihar 823002</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="tel:09122975757" className="hover:text-white transition-colors">
                  09122975757 / 9122975757
                </a>
              </div>
              <div className="flex gap-2.5 items-center">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>08:00 AM - 10:00 PM (Daily)</span>
              </div>
            </div>

            {/* Quick Map Redirection link */}
            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Chhotki,+Delha,+Tekari+Rd,+Gaya,+Bihar+823002"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-teal-400 hover:text-teal-300 font-bold"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Lower Footer (Copyright & Legal) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          
          {/* Copyright notice */}
          <div>
            <p className="text-slate-500">
              © {currentYear} Mahamaya Medical Hall. All rights reserved. Developed by{' '}
              <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>
.
            </p>
          </div>

          {/* Legal documents links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-500">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-slate-300 cursor-pointer">Disclaimer</span>
          </div>

          {/* Back To Top Button */}
          <div>
            <button
              onClick={handleScrollToTop}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center gap-2 transition-all group cursor-pointer"
              aria-label="Scroll Back to Top"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Dedicated Medical Disclaimer Banner */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/40 border border-slate-900/60 text-[11px] text-slate-500 leading-relaxed text-center">
          <span className="font-bold text-slate-400">MEDICAL DISCLAIMER:</span> The information displayed on this website, including search catalogues, health tips, and blogs, is for general awareness only. It should NOT be substituted for professional medical advice, diagnosis, or treatment. Always consult a registered healthcare specialist or doctor before starting any therapeutics or relying on nutritional supplements.
        </div>

      </div>
    </footer>
  );
}
