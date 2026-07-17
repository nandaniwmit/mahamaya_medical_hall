import { useState } from 'react';
import { ActiveTab } from '../types';
import { 
  Menu, 
  X, 
  Phone, 
  MessageSquare, 
  Sun, 
  Moon, 
  PlusSquare 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  onOpenWhatsAppModal: () => void;
}

export default function Header({
  activeTab,
  setActiveTab,
  darkMode,
  setDarkMode,
  onOpenWhatsAppModal
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-500 dark:bg-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
              <PlusSquare className="w-7 h-7 text-white stroke-[2.5]" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-slate-900 dark:text-white leading-tight">
                Mahamaya <span className="text-teal-600 dark:text-teal-400">Medical</span>
              </h1>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 tracking-widest uppercase">
                Hall & Pharmacy
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive 
                      ? 'text-teal-600 dark:text-teal-400' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-teal-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl border border-gray-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Call Now Action */}
            <a
              href="tel:09122975757"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-200 font-semibold text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>0912297 5757</span>
            </a>

            {/* WhatsApp Quick Order Form */}
            <button
              onClick={onOpenWhatsAppModal}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-semibold text-sm shadow-md shadow-teal-500/10 hover:shadow-teal-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Order</span>
            </button>
          </div>

          {/* Mobile Right Controls (Toggle + Call + Burger) */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Dark Mode Toggle for Mobile */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Quick Call icon */}
            <a
              href="tel:09122975757"
              className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 text-teal-600 dark:text-teal-400"
              aria-label="Call Store"
            >
              <Phone className="w-5 h-5" />
            </a>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
              aria-label="Open Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {menuItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive 
                        ? 'bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 border-l-4 border-teal-500' 
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              
              <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenWhatsAppModal();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-teal-600 dark:bg-teal-500 text-white font-semibold shadow-lg shadow-teal-500/10"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp Order Form</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
