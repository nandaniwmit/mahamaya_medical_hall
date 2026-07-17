import { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Layers 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function GalleryView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'store', label: 'Store Front' },
    { id: 'medicines', label: 'Medicine Shelves' },
    { id: 'equipment', label: 'Medical Equipment' },
    { id: 'customers', label: 'Staff & Customers' }
  ];

  // Filter items
  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? filteredItems.length - 1 : prev - 1;
    });
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === filteredItems.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-300 min-h-screen pb-16">
      
      {/* Gallery Title Header */}
      <div className="relative py-16 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 dark:text-white">
            Our Store Gallery
          </h2>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Take a visual tour of Mahamaya Medical Hall in Gaya. Inspect our structured pharmacy racks, medical equipment stocks, and counseling counters.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-teal-600 dark:bg-teal-500 text-white shadow-md shadow-teal-500/10'
                  : 'bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={() => setLightboxIndex(index)}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all cursor-pointer aspect-[4/3]"
              >
                {/* Image Wrap */}
                <div className="w-full h-full overflow-hidden relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-teal-600 shadow-md">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent text-white">
                  <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-teal-300">
                    {item.category}
                  </span>
                  <h4 className="font-bold text-sm sm:text-base tracking-tight mt-0.5 line-clamp-1">{item.title}</h4>
                  <p className="text-xs text-slate-300 line-clamp-1 mt-0.5 font-sans">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/95 p-4 select-none">
              
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white hover:text-red-400 transition-colors z-50 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Central Box */}
              <div className="relative w-full max-w-4xl h-[70vh] flex items-center justify-center">
                
                {/* Left Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-0 sm:left-4 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-all z-10 hover:scale-105 cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Main Image */}
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="max-w-full max-h-full"
                >
                  <img
                    src={filteredItems[lightboxIndex].imageUrl}
                    alt={filteredItems[lightboxIndex].title}
                    className="max-w-full max-h-[70vh] object-contain rounded-xl border border-slate-800"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Right Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-0 sm:right-4 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-all z-10 hover:scale-105 cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

              </div>

              {/* Bottom Info Details */}
              <div className="text-center mt-6 max-w-xl space-y-2">
                <span className="px-3 py-1 rounded-md bg-teal-500/20 text-teal-400 text-xs font-bold font-mono tracking-wider uppercase">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight mt-2">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-sm text-slate-400 font-sans">
                  {filteredItems[lightboxIndex].description}
                </p>
                <div className="text-xs text-slate-500 font-mono pt-2">
                  Image {lightboxIndex + 1} of {filteredItems.length} (Use keyboard arrows ← → to browse)
                </div>
              </div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
