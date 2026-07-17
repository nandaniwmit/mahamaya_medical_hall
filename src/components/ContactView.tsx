import React, { useState, ChangeEvent, FormEvent } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Mail, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  User, 
  Smartphone, 
  BookOpen, 
  FileText 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InquiryFormData } from '../types';

export default function ContactView() {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending inquiry message
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'General Enquiry',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Contact Title Header */}
      <div className="relative py-16 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 dark:text-white">
            Contact Mahamaya Medical Hall
          </h2>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Have a question about medicine availability, orthopedic support size, or diagnostic equipment? Reach out to our pharmacy team immediately.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans tracking-tight">
              Get in Touch Instantly
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Visit our store directly in Delha, call our official pharmacists line, or submit the digital inquiry form. We strive to reply to all queries within 15 minutes.
            </p>

            {/* Interactive Info Cards */}
            <div className="space-y-4">
              
              {/* Address Card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Store Address</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Chhotki, Delha, Tekari Road, Gaya, Bihar 823002 <br />
                    <span className="text-teal-600 dark:text-teal-400 font-semibold">(Opposite local landmark markers)</span>
                  </p>
                </div>
              </div>

              {/* Phone Line Card */}
              <a 
                href="tel:09122975757"
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 flex gap-4 hover:border-teal-500/30 transition-colors block"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Call Our Pharmacists</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-mono">
                    09122975757 / 9122975757
                  </p>
                  <p className="text-[10px] text-teal-600 dark:text-teal-400 font-bold mt-1 uppercase tracking-wider">Tap to make phone call</p>
                </div>
              </a>

              {/* WhatsApp Support Card */}
              <a 
                href="https://wa.me/919122975757"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 flex gap-4 hover:border-emerald-500/30 transition-colors block"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Instant WhatsApp Helpline</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-mono">
                    +91 9122975757
                  </p>
                  <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold mt-1 uppercase tracking-wider">Tap to chat with pharmacist</p>
                </div>
              </a>

              {/* Working Hours Card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Working Hours</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Monday to Sunday: <span className="font-semibold text-slate-800 dark:text-slate-200">08:00 AM - 10:00 PM</span> <br />
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">Open 7 days a week, including holidays</span>
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-gray-100 dark:border-slate-800 shadow-sm relative">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans tracking-tight mb-2">
              Send a Quick Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-8">
              Fill out the form below, and our certified medical personnel will review and follow up with you.
            </p>

            <AnimatePresence>
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-6 sm:p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 text-center space-y-4"
                >
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Inquiry Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you for contacting Mahamaya Medical Hall. Our registered on-duty pharmacist will contact you shortly on your provided phone number to assist with medicine stock details.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-5 py-2 rounded-xl bg-teal-600 dark:bg-teal-500 text-white font-bold text-xs hover:bg-teal-700 transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Smartphone className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          pattern="[0-9]{10}"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="10-digit mobile"
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all"
                        />
                      </div>
                    </div>

                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="yourname@email.com"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject Category */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Inquiry Category
                    </label>
                    <div className="relative">
                      <BookOpen className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all cursor-pointer"
                      >
                        <option value="General Enquiry">General Inquiry</option>
                        <option value="Medicine Availability">Medicine Availability Check</option>
                        <option value="Surgical / Medical Equipment">Surgical / Device Procurement</option>
                        <option value="Corporate / Bulk Order">Bulk / Monthly Order discounts</option>
                        <option value="Other Assistance">Other Customer Support</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Detailed Message / Drug requirements <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                      <textarea
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe what items or information you need (e.g. Do you have Metformin 500mg from Glycomet? When can you deliver near Delha railway cross?)"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-bold text-sm shadow-lg shadow-teal-500/10 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</span>
                  </button>

                </form>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Embedded Google Map Section */}
        <div className="mt-16 space-y-6">
          <div className="space-y-2 text-center">
            <h3 className="text-2xl font-bold font-sans text-slate-900 dark:text-white">Our Store Location</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              We are situated on Tekari Road, Delha. Tap on the map to get direct turn-by-turn driving instructions.
            </p>
          </div>

          <div className="w-full h-96 rounded-3xl overflow-hidden border border-gray-200 dark:border-slate-800 shadow-sm relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.1118933221975!2d84.98864707613327!3d25.029801438435133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32bdf6034e4cb%3A0xa9bbf048b2d13b52!2sDelha%2C%20Gaya%2C%20Bihar!5e0!3m2!1sen!2sin!4v1783415124000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location of Mahamaya Medical Hall"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
