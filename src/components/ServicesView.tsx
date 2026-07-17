import { useState } from 'react';
import { MEDICAL_SERVICES } from '../data';
import { MedicalService } from '../types';
import { 
  Check, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  HelpCircle,
  FileText,
  ShoppingBag,
  Sparkles,
  Smile,
  Heart,
  Activity,
  Scissors,
  PlusSquare,
  Layers,
  Home
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesViewProps {
  onServiceSelect: (serviceTitle: string) => void;
}

export default function ServicesView({ onServiceSelect }: ServicesViewProps) {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  // Map icon string to actual Lucide component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-6 h-6 text-teal-600 dark:text-teal-400 stroke-[2]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-teal-600 dark:text-teal-400 stroke-[2]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-teal-600 dark:text-teal-400 stroke-[2]" />;
      case 'Smile': return <Smile className="w-6 h-6 text-teal-600 dark:text-teal-400 stroke-[2]" />;
      case 'Heart': return <Heart className="w-6 h-6 text-teal-600 dark:text-teal-400 stroke-[2]" />;
      case 'Activity': return <Activity className="w-6 h-6 text-teal-600 dark:text-teal-400 stroke-[2]" />;
      case 'Scissors': return <Scissors className="w-6 h-6 text-teal-600 dark:text-teal-400 stroke-[2]" />;
      case 'PlusSquare': return <PlusSquare className="w-6 h-6 text-teal-600 dark:text-teal-400 stroke-[2]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-teal-600 dark:text-teal-400 stroke-[2]" />;
      case 'Home': return <Home className="w-6 h-6 text-teal-600 dark:text-teal-400 stroke-[2]" />;
      default: return <HelpCircle className="w-6 h-6 text-teal-600 dark:text-teal-400 stroke-[2]" />;
    }
  };

  const toggleExpand = (id: string) => {
    if (expandedServiceId === id) {
      setExpandedServiceId(null);
    } else {
      setExpandedServiceId(id);
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Services Title Header */}
      <div className="relative py-16 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 dark:text-white">
            Our Healthcare Services
          </h2>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Professional retail pharmacy solutions, authentic medicine supplies, specialty chronic care management, and home healthcare devices designed for optimal recovery.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MEDICAL_SERVICES.map((srv) => {
            const isExpanded = expandedServiceId === srv.id;
            return (
              <motion.div
                key={srv.id}
                layout
                className="rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Service Header Row */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/40 flex items-center justify-center shrink-0">
                      {getIconComponent(srv.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-sans">
                        {srv.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 dark:text-slate-500 tracking-wider uppercase">
                        Service ID: {srv.id}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {srv.description}
                  </p>

                  {/* Bulleted checklist */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expandable Long Description */}
                  <AnimatePresence>
                    {isExpanded && srv.longDescription && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pt-4 border-t border-gray-50 dark:border-slate-800"
                      >
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                          {srv.longDescription}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Service Card Actions */}
                <div className="flex items-center gap-3 pt-6 border-t border-gray-50 dark:border-slate-800/40 mt-6">
                  {/* Expand Toggle */}
                  <button
                    onClick={() => toggleExpand(srv.id)}
                    className="flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    <span>{isExpanded ? 'Collapse' : 'Read Details'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {/* Order / Inquiry */}
                  <button
                    onClick={() => onServiceSelect(srv.title)}
                    className="ml-auto px-4 py-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 hover:bg-teal-100 dark:hover:bg-teal-900/60 text-teal-700 dark:text-teal-400 text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire Now</span>
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Informative Help Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-900 dark:bg-slate-900 border border-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold">Specialized Therapeutics Procurement</h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Can't find a rare life-saving medicine, vaccine, or specialized surgical item in local stores? We can place express orders with major Indian distributors.
            </p>
          </div>
          <a
            href="tel:09122975757"
            className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold text-sm transition-colors cursor-pointer"
          >
            Express Request: 09122975757
          </a>
        </div>

      </div>
    </div>
  );
}
