import React, { useState, ChangeEvent } from 'react';
import { 
  Search, 
  PhoneCall, 
  MapPin, 
  MessageSquare, 
  CheckCircle2, 
  AlertTriangle, 
  Activity, 
  AlertCircle 
} from 'lucide-react';
import { MEDICINE_CATALOG } from '../data';
import { Medicine } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onOpenWhatsAppModal: () => void;
  onSearchSelect: (medName: string) => void;
}

export default function Hero({ onOpenWhatsAppModal, onSearchSelect }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Medicine[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length > 0) {
      const filtered = MEDICINE_CATALOG.filter(
        (med) =>
          med.name.toLowerCase().includes(query.toLowerCase()) ||
          (med.genericName && med.genericName.toLowerCase().includes(query.toLowerCase())) ||
          med.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleInquiryClick = (medName: string) => {
    onSearchSelect(medName);
    setSearchQuery('');
    setShowResults(false);
  };

  return (
    <section className="relative bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      
      {/* Emergency Contact Banner */}
      <div className="w-full bg-rose-600 text-white py-2 px-4 text-center text-xs sm:text-sm font-semibold tracking-wider flex items-center justify-center gap-2 relative z-10 animate-pulse">
        <AlertTriangle className="w-4 h-4 text-white shrink-0" />
        <span>Emergency Medical Need? Call Store Instantly:</span>
        <a href="tel:09122975757" className="underline hover:text-rose-100 font-bold ml-1 flex items-center gap-1">
          <PhoneCall className="w-3.5 h-3.5 inline" /> 09122975757
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-900/50 text-xs font-semibold uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5 animate-bounce text-teal-500" />
              <span>Gaya’s Most Trusted Local Pharmacy</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight text-slate-900 dark:text-white leading-tight">
              Mahamaya Medical Hall <br />
              <span className="text-teal-600 dark:text-teal-400 font-sans font-medium text-3xl sm:text-4xl lg:text-5xl block mt-2">
                Your Trusted Pharmacy in Tekari
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Providing 100% genuine medicines, professional prescription support, surgical supplies, dietary protein supplements, pediatric care, and daily healthcare essentials at highly affordable prices. Sourced directly, stored with strict cooling, delivered with care.
            </p>

            {/* Core Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="tel:09122975757"
                className="px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 text-white font-bold text-base shadow-xl shadow-slate-950/10 dark:shadow-white/5 active:scale-95 transition-all flex items-center gap-3 cursor-pointer"
              >
                <PhoneCall className="w-5 h-5 text-teal-400 dark:text-teal-600" />
                <span>Call Now</span>
              </a>

              <button
                onClick={onOpenWhatsAppModal}
                className="px-8 py-4 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-base shadow-xl shadow-teal-600/10 active:scale-95 transition-all flex items-center gap-3 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Order</span>
              </button>

              <a
                href="https://maps.google.com/?q=Chhotki,+Delha,+Tekari+Rd,+Gaya,+Bihar+823002"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl border border-gray-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold text-base transition-colors flex items-center gap-3"
              >
                <MapPin className="w-5 h-5 text-rose-500" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Medicine Instant Search Box */}
            <div className="relative max-w-xl pt-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Instant Medicine Availability Finder
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search brand (e.g. Dolo 650, Glycomet, Augmentin, Omez) or generic name..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm shadow-md transition-all"
                />
              </div>

              {/* Search Results Dropdown */}
              <AnimatePresence>
                {showResults && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute z-20 left-0 right-0 mt-2 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800 overflow-hidden max-h-80 overflow-y-auto"
                  >
                    <div className="p-3 border-b border-gray-50 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-xs font-bold uppercase tracking-wider text-slate-500 flex justify-between">
                      <span>Search Results</span>
                      <span>{searchResults.length} items found</span>
                    </div>
                    {searchResults.length > 0 ? (
                      <div className="divide-y divide-gray-100 dark:divide-slate-800">
                        {searchResults.map((med) => (
                          <div 
                            key={med.id}
                            className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors flex items-center justify-between gap-4"
                          >
                            <div className="space-y-1">
                              <h4 className="font-bold text-sm text-slate-900 dark:text-white">{med.name}</h4>
                              {med.genericName && (
                                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">{med.genericName}</p>
                              )}
                              <p className="text-xs text-slate-400 line-clamp-1">{med.description}</p>
                            </div>
                            <div className="flex flex-col items-end shrink-0 gap-2">
                              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold font-mono ${
                                med.availability === 'In Stock' 
                                  ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400'
                                  : 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400'
                              }`}>
                                {med.availability}
                              </span>
                              <button
                                onClick={() => handleInquiryClick(med.name)}
                                className="px-3 py-1 rounded-lg bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-bold text-xs transition-colors cursor-pointer"
                              >
                                Send Inquiry
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-6 text-center">
                        <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Medicine Not Found in quick search list</p>
                        <p className="text-xs text-slate-400 mt-1">Don’t worry! We have over 10,000+ medicines. Tap below to send an inquiry directly via WhatsApp.</p>
                        <button
                          onClick={() => handleInquiryClick(searchQuery)}
                          className="mt-4 px-4 py-2 rounded-xl bg-teal-600 dark:bg-teal-500 text-white text-xs font-bold hover:bg-teal-700 dark:hover:bg-teal-600 transition-colors cursor-pointer"
                        >
                          Inquire "{searchQuery}" via WhatsApp
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-square shadow-2xl border-4 border-white dark:border-slate-800">
              <img
                src="/src/assets/images/medical_hero_banner_1783414833757.jpg"
                alt="Mahamaya Medical Hall interior"
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent" />
              
              {/* Trust Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl border border-gray-100 dark:border-slate-800 flex items-center gap-3 shadow-xl">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                  <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">100% Licensed & Certified</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Bihar Drug License & Retail Pharmacy Certified</p>
                </div>
              </div>
            </div>
            
            {/* Ambient Background Circles */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
