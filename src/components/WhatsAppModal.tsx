import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';
import { 
  X, 
  MessageSquare, 
  Phone, 
  UploadCloud, 
  CheckCircle, 
  Clock, 
  MapPin, 
  FileText 
} from 'lucide-react';
import { motion } from 'motion/react';
import { WhatsAppOrderData } from '../types';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhatsAppModal({ isOpen, onClose }: WhatsAppModalProps) {
  const [formData, setFormData] = useState<WhatsAppOrderData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    medicines: '',
    prescriptionUploaded: false,
    message: '',
    preferredTime: 'Anytime (08:00 AM - 10:00 PM)'
  });

  const [fileName, setFileName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

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

    // Format message to open in WhatsApp
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

    // Simulate short timeout, then open WhatsApp
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
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-slate-800 overflow-hidden z-10 my-8"
      >
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
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
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
              <FileText className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
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
                <UploadCloud className="w-10 h-10 text-slate-400 mx-auto mb-2" />
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
      </motion.div>
    </div>
  );
}
