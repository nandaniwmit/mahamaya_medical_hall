import React, { useState, FormEvent, ChangeEvent } from 'react';
import { 
  MEDICINE_CATEGORIES, 
  TESTIMONIALS, 
  FAQS, 
  HEALTH_TIPS 
} from '../data';
import { 
  ShieldCheck, 
  Users, 
  CirclePercent, 
  Zap, 
  ClipboardList, 
  Package, 
  Award, 
  MessageSquare, 
  Tablet, 
  Heart, 
  MapPin, 
  CheckCircle, 
  Clock, 
  ShoppingBag,
  ArrowRight,
  Plus,
  Minus,
  Star,
  Quote,
  AlertCircle,
  Stethoscope,
  Send,
  Sparkles,
  Smartphone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HomeViewProps {
  onOpenWhatsAppModal: () => void;
  onCategoryClick: (categoryName: string) => void;
  activeTabSetter: (tab: 'home' | 'about' | 'services' | 'gallery' | 'contact') => void;
}

export default function HomeView({ onOpenWhatsAppModal, onCategoryClick, activeTabSetter }: HomeViewProps) {
  
  // States for FAQs
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  
  // States for Testimonial Carousel
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  // States for newsletter
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // States for health tips modal/expand
  const [expandedTipId, setExpandedTipId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleNextReview = () => {
    setActiveReviewIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const handlePrevReview = () => {
    setActiveReviewIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const whyChooseUs = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      title: '100% Genuine Medicines',
      desc: 'Sourced directly from certified medical manufacturers and authorized distributors.'
    },
    {
      icon: <Users className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: 'Experienced Staff',
      desc: 'Licensed registered pharmacists always on duty to counsel dosage details.'
    },
    {
      icon: <CirclePercent className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: 'Affordable Prices',
      desc: 'Fair pricing and transparent monthly discounts for chronic therapeutic care.'
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      title: 'Fast Service',
      desc: 'Rapid counter prescription retrieval and quick nearby home delivery solutions.'
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
      title: 'Prescription Medicines',
      desc: 'All Schedule-H medicines, critical vaccines, and insulin pens stored properly.'
    },
    {
      icon: <Package className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
      title: 'Healthcare Products',
      desc: 'Complete range of baby foods, skincare therapies, surgicals, and hygiene products.'
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      title: 'Trusted Local Pharmacy',
      desc: 'Acknowledged as Delha’s leading neighborhood medical care anchor.'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-green-600 dark:text-green-400" />,
      title: 'Easy WhatsApp Support',
      desc: 'Upload prescription or type item requirements, send via WhatsApp instantly.'
    }
  ];

  const trustFactors = [
    { title: 'Experienced Pharmacy', desc: 'Over a decade of clinical medicine dispensing expertise.' },
    { title: 'Quality Medicines', desc: 'Air-conditioned pharmaceutical shelving preserving drug stability.' },
    { title: 'Quick Service', desc: 'Minimize wait times with a barcode-indexed retrieval system.' },
    { title: 'Friendly Staff', desc: 'Highly cooperative, localized patient guidance in Hindi/English.' },
    { title: 'Reasonable Pricing', desc: 'Competitive discounts on all monthly healthcare cards.' },
    { title: 'Convenient Location', desc: 'Tekari Road, Chhotki Delha - easily accessible with zero parking hassle.' }
  ];

  const workingProcess = [
    { step: '01', title: 'Visit Store / WhatsApp', desc: 'Walk into our store on Tekari Road or open our easy online WhatsApp Order form.' },
    { step: '02', title: 'Share Prescription', desc: 'Show your prescription to our licensed pharmacist or upload it via WhatsApp.' },
    { step: '03', title: 'Get Medicines', desc: 'We verify, double-check expiries, package, and retrieve your medical list.' },
    { step: '04', title: 'Easy Payment', desc: 'Pay safely using UPI, PhonePe, Cards, Netbanking, or traditional cash.' }
  ];

  return (
    <div className="space-y-24 pb-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* 1. Quick Info stats section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-teal-100/40 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Authenticity</p>
              <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">100% Genuine Brands</h4>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-100/40 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Working Hours</p>
              <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">08:00 AM - 10:00 PM</h4>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-indigo-100/40 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Store Locality</p>
              <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">Delha, Gaya, Bihar</h4>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-rose-100/40 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 fill-rose-500/10" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Local Rating</p>
              <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">4.9/5 Google Reviews</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-teal-600 dark:text-teal-400 font-mono text-xs uppercase tracking-widest font-bold">Safe & Authentic Sourcing</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 dark:text-white">Why Choose Mahamaya Medical?</h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            We operate under strict retail pharmacy regulations, delivering uncompromised quality standards directly to our patrons.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 space-y-3 hover:border-teal-500/20 transition-all shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 dark:bg-slate-950 w-fit rounded-xl">{item.icon}</div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Categories Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-teal-600 dark:text-teal-400 font-mono text-xs uppercase tracking-widest font-bold">Comprehensive Pharmacy Stock</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 dark:text-white">Shop Medicine & Healthcare Categories</h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Browse through our wide medical categories. Tap on any item to instantly search in our catalog database.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {MEDICINE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryClick(cat.name)}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 text-left hover:border-teal-500/30 dark:hover:border-teal-400/30 hover:shadow-md transition-all group flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4 w-full">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Tablet className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm tracking-tight line-clamp-1">{cat.name}</h4>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 line-clamp-2 mt-0.5 font-sans leading-normal">{cat.description}</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 group-hover:underline flex items-center gap-1 mt-4">
                <span>Browse Stock</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* 4. Interactive Offers & Discounts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 dark:bg-slate-900 border border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Promo Left */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>Special Offers & Discounts</span>
              </div>
              
              <h3 className="text-2xl sm:text-4xl font-extrabold font-sans text-white tracking-tight leading-tight">
                Get Flat 15% Off on <br />
                Your Regular Monthly Medicines!
              </h3>
              
              <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed font-sans">
                Are you managing chronic diabetes, heart conditions, or hypertension? Register your monthly prescription card at Mahamaya Medical Hall and save up to 15% on brand-name medications.
              </p>

              {/* Offer highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white text-xs font-semibold font-mono">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Flat 10% Off on Baby Care</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Free Blood Pressure Checking in-store</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Free Diabetes counsel by pharmacist</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Special Pediatric support programs</span>
                </div>
              </div>

              {/* Order action */}
              <div className="pt-2">
                <button
                  onClick={onOpenWhatsAppModal}
                  className="px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-slate-950 font-extrabold text-sm transition-colors cursor-pointer"
                >
                  Register Monthly Prescription Now
                </button>
              </div>
            </div>

            {/* Promo Right Visual Badge */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-8 rounded-3xl bg-slate-800 border border-slate-700/60 max-w-xs text-center space-y-4 shadow-2xl">
                <div className="w-16 h-16 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto shadow-inner">
                  <CirclePercent className="w-10 h-10 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-white font-extrabold text-lg">DELHA RESIDENTS SPECIAL</h4>
                  <p className="text-slate-400 text-xs mt-1">Free Home Delivery within 2km radius for orders above ₹500.</p>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  Promo Code: MAHAMAYA15
                </div>
              </div>
            </div>

          </div>

          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />
        </div>
      </section>

      {/* 5. Why Customers Trust Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Trust Left Text */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-teal-600 dark:text-teal-400 font-mono text-xs uppercase tracking-widest font-bold">Uncompromising Quality</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-sans text-slate-900 dark:text-white leading-tight">
              Why Gaya Families Trust Us For Generations
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              Our business is rooted in ethical drug dispensing. We do not engage in parallel gray imports or unverified pharmacy sourcing.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => activeTabSetter('about')}
                className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 text-xs font-bold transition-colors cursor-pointer"
              >
                Read Our Story
              </button>
            </div>
          </div>

          {/* Trust Right Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustFactors.map((factor, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 space-y-1.5 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base font-sans">{factor.title}</h4>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 pl-6 leading-relaxed">{factor.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Working Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-teal-600 dark:text-teal-400 font-mono text-xs uppercase tracking-widest font-bold font-sans">Simple 4-Step Flow</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 dark:text-white">How to Get Your Medicines</h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Get your healthcare products in person at our Gaya store or enjoy swift digital WhatsApp processing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {workingProcess.map((item, idx) => (
            <div key={idx} className="space-y-4 text-center sm:text-left relative group">
              {/* Decorative timeline connect line for large screen */}
              {idx < 3 && (
                <div className="hidden lg:block absolute top-7 left-1/2 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -z-10" />
              )}
              
              <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-900/60 text-teal-600 dark:text-teal-400 flex items-center justify-center font-black text-xl font-mono mx-auto sm:mx-0 shadow-sm shadow-teal-500/5">
                {item.step}
              </div>

              <h4 className="font-bold text-slate-900 dark:text-white text-base font-sans pt-1">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans max-w-xs mx-auto sm:mx-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Customer Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-gray-100 dark:border-slate-800 shadow-sm">
        <div className="text-center space-y-3">
          <span className="text-teal-600 dark:text-teal-400 font-mono text-xs uppercase tracking-widest font-bold">Patient Happiness</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 dark:text-white">What Our Customers Say</h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Real feedback from local residents, physicians, and chronic healthcare drug buyers in Gaya.
          </p>
        </div>

        {/* Dynamic Reviews Slider */}
        <div className="relative max-w-3xl mx-auto min-h-64 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeReviewIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="text-center space-y-6"
            >
              <Quote className="w-12 h-12 text-teal-200 dark:text-slate-800 mx-auto fill-teal-500/5" />
              
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 italic font-sans leading-relaxed">
                "{TESTIMONIALS[activeReviewIndex].text}"
              </p>

              <div className="flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star 
                    key={idx} 
                    className={`w-4 h-4 fill-current ${
                      idx < Math.floor(TESTIMONIALS[activeReviewIndex].rating) 
                        ? 'text-amber-400' 
                        : 'text-gray-200'
                    }`} 
                  />
                ))}
              </div>

              <div>
                <h4 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">{TESTIMONIALS[activeReviewIndex].name}</h4>
                <p className="text-xs text-slate-400 font-mono mt-0.5">{TESTIMONIALS[activeReviewIndex].location} • {TESTIMONIALS[activeReviewIndex].date}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="flex items-center justify-center gap-3 pt-8">
            <button
              onClick={handlePrevReview}
              className="px-3 py-1.5 rounded-xl border border-gray-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 text-xs font-bold transition-colors cursor-pointer"
            >
              Prev
            </button>
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveReviewIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === activeReviewIndex ? 'w-6 bg-teal-500' : 'bg-slate-200 dark:bg-slate-800'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNextReview}
              className="px-3 py-1.5 rounded-xl border border-gray-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 text-xs font-bold transition-colors cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* 8. Latest Health Tips / Blog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-teal-600 dark:text-teal-400 font-mono text-xs uppercase tracking-widest font-bold">Health Awareness Blog</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 dark:text-white">Latest Health & Wellness Tips</h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Stay informed with clinical tips regarding diabetes, antibiotic safety protocols, and essential first aid kits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HEALTH_TIPS.map((tip) => {
            const isTipExpanded = expandedTipId === tip.id;
            return (
              <div 
                key={tip.id} 
                className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 p-6 flex flex-col justify-between hover:shadow-md transition-all space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded-md bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold uppercase">
                      {tip.category}
                    </span>
                    <span className="text-slate-400">{tip.readTime}</span>
                  </div>

                  <h4 className="font-extrabold text-slate-900 dark:text-white text-base tracking-tight leading-snug line-clamp-2">
                    {tip.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans line-clamp-3">
                    {tip.excerpt}
                  </p>

                  <AnimatePresence>
                    {isTipExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pt-3 border-t border-gray-50 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 leading-relaxed space-y-2"
                      >
                        <p>{tip.content}</p>
                        <div className="pt-2 text-[10px] text-slate-400 flex justify-between">
                          <span>Published: {tip.date}</span>
                          <span>By: {tip.author}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="pt-4 border-t border-gray-50 dark:border-slate-800/60">
                  <button
                    onClick={() => setExpandedTipId(isTipExpanded ? null : tip.id)}
                    className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isTipExpanded ? 'Show Less' : 'Read Full Guide'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-teal-600 dark:text-teal-400 font-mono text-xs uppercase tracking-widest font-bold">Frequently Asked Questions</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 dark:text-white">Pharmacy FAQ Help Desk</h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Find answers to the 10 most common pharmacy questions regarding prescriptions, WhatsApp ordering, and insulin preservation.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div 
                key={faq.id}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white text-sm sm:text-base focus:outline-none hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div className="p-1.5 bg-slate-50 dark:bg-slate-800 text-slate-500 rounded-lg shrink-0">
                    {isOpen ? <Minus className="w-4 h-4 text-teal-600" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-gray-50 dark:border-slate-800/60 overflow-hidden"
                    >
                      <div className="px-6 py-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans bg-slate-50/50 dark:bg-slate-900/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. Newsletter & Download Reminder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Box 1: Newsletter */}
          <div className="p-8 rounded-3xl bg-teal-600 dark:bg-teal-700 text-white space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest font-mono text-teal-100 bg-teal-500/30 px-3 py-1 rounded-full w-fit block">
                Stay Updated
              </span>
              <h4 className="text-xl sm:text-2xl font-extrabold font-sans">Subscribe to Health Alerts</h4>
              <p className="text-teal-50 text-xs sm:text-sm leading-relaxed font-sans">
                Get monthly discount updates, pediatric care tips, and alerts regarding medicine availability trends in Gaya.
              </p>
            </div>

            {newsletterSubscribed ? (
              <div className="p-4 rounded-xl bg-teal-500/30 border border-teal-400 text-center font-bold text-sm">
                🎉 Thank you! You have successfully subscribed to our alerts.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-white text-slate-950 placeholder-slate-400 text-xs sm:text-sm focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm transition-colors shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Box 2: Prescription Reminder / Download */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 text-slate-900 dark:text-white space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest font-mono text-rose-500 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-3 py-1 rounded-full w-fit block">
                Prescription Reminder
              </span>
              <h4 className="text-xl sm:text-2xl font-extrabold font-sans">Always Settle with a Prescription</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                Keep a scanned photo or PDF copy of your prescription on your mobile. For quick processing of chronic drug repeats, simply upload it via our secure WhatsApp modal.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenWhatsAppModal}
                className="px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-bold text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Smartphone className="w-4 h-4" />
                <span>Open WhatsApp Uploader</span>
              </button>
              <a
                href="https://scdh.bihar.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1"
              >
                <span>Bihar Health Dept Guidelines</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 11. Contact CTA banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white relative overflow-hidden text-center space-y-6 shadow-xl shadow-teal-500/10">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-4xl font-extrabold font-sans tracking-tight">Need Medicines Urgently?</h3>
            <p className="text-teal-50 text-sm sm:text-base font-sans">
              Speak with our registered on-duty pharmacist immediately or upload your medicine requirements over WhatsApp for lightning-fast processing.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="tel:09122975757"
                className="px-8 py-4 rounded-2xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-base shadow-lg transition-colors flex items-center gap-3"
              >
                <Smartphone className="w-5 h-5 text-teal-400" />
                <span>Call: 09122975757</span>
              </a>

              <button
                onClick={onOpenWhatsAppModal}
                className="px-8 py-4 rounded-2xl bg-white text-teal-700 hover:bg-slate-50 font-bold text-base shadow-lg transition-colors flex items-center gap-3 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-teal-600" />
                <span>WhatsApp Prescription</span>
              </button>
            </div>
          </div>

          {/* Background visuals */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        </div>
      </section>

    </div>
  );
}
