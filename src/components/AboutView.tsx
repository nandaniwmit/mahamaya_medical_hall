import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  HeartHandshake, 
  Heart, 
  Users, 
  Clock, 
  PlusCircle, 
  BadgeCheck 
} from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutView() {
  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: 'Uncompromised Authenticity',
      desc: 'We enforce zero tolerance for counterfeit drugs. Every batch is double-verified with manufacturers.'
    },
    {
      icon: <Award className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: 'Quality Sourcing Standards',
      desc: 'All therapeutics, nutritional supplements, and baby formulas are stored under strictly controlled cooling systems.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: 'Ethical Pricing Sincerity',
      desc: 'Healthcare should be fair. We pass direct manufacturing discounts on to our chronic care patients.'
    },
    {
      icon: <Users className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: 'Community Care Service',
      desc: 'We are Gaya residents serving Gaya families. Our pharmacy team provides personalized care and consultation.'
    }
  ];

  const timelineMilestones = [
    {
      year: 'Store Launched',
      title: 'Root Sown in Gaya',
      desc: 'Mahamaya Medical Hall opened doors on Tekari Road with a vision to provide genuine medicines at honest, reliable prices.'
    },
    {
      year: 'Expanded Cold Chain',
      title: 'Therapeutic Specialization',
      desc: 'Installed dedicated medical refrigeration systems to support critical life-saving vaccines and insulin therapy solutions.'
    },
    {
      year: 'Digital Integrations',
      title: 'WhatsApp Ordering & Delivery',
      desc: 'Pioneered instant prescription upload and WhatsApp-guided medicine ordering to support senior citizens and remote patients.'
    },
    {
      year: 'Trusted Landmark',
      title: 'Certified Local Leader',
      desc: 'Recognized as Delha’s leading neighborhood healthcare partner, stocking over 10,000+ medical line items.'
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Page Title Header */}
      <div className="relative py-16 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 dark:text-white">
            About Mahamaya Medical Hall
          </h2>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Discover our journey, dedicated core values, and our commitment to serving families in Delha, Gaya, Bihar with genuine healthcare essentials.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* Core Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Story Visual Side */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-square shadow-xl border-4 border-white dark:border-slate-800">
              <img
                src="/src/assets/images/pharmacist_counter_1783414849236.jpg"
                alt="Pharmacist assisting at counter"
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-teal-500/10 mix-blend-overlay" />
            </div>
          </div>

          {/* Story Text Side */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-900/50 text-xs font-bold uppercase tracking-wider">
              <BadgeCheck className="w-4 h-4 text-teal-500" />
              <span>Our Business Story</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-sans tracking-tight">
              A Beacon of Healthcare Trust & Integrity in Delha, Gaya
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Mahamaya Medical Hall was established in Gaya, Bihar with a straightforward but critical mission: to eradicate the stress of finding authentic, manufacturer-certified medicines locally. Over the years, we have grown from a small neighborhood shop into a highly respected, fully certified retail pharmacy landmark on Tekari Road.
            </p>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              We understand that medicines are not mere commodities; they are life-critical elements of your family’s well-being. That is why every single product stocked in our inventory, from a basic headache reliever to specialized oncology drugs and complex diabetic care equipment, is handled with absolute care, strict storage standards, and sold with clear, professional guidance.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 text-center">
                <div className="text-2xl sm:text-3xl font-black text-teal-600 dark:text-teal-400">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Genuine Drugs</div>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 text-center">
                <div className="text-2xl sm:text-3xl font-black text-teal-600 dark:text-teal-400">10,000+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Medicines Stocked</div>
              </div>
            </div>
          </div>

        </div>

        {/* Mission & Vision Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center">
              <Target className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white font-sans">Our Mission</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              To supply the community of Gaya with verified, affordable, and safe medicines. We aim to serve as a reliable healthcare partner that combines professional pharmacist consultation with direct, seamless accessibility through modern digital support.
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Eye className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white font-sans">Our Vision</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              To become Bihar’s benchmark independent retail pharmacy, known for zero-tolerance counterfeiting standards, state-of-the-art cold-chain logistics, and exemplary localized home delivery support for elderly patients.
            </p>
          </div>

        </div>

        {/* Core Values Grid */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-sans text-slate-900 dark:text-white">Our Core Values</h3>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Our day-to-day work is governed by four medical and moral commitments:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 space-y-3 hover:border-teal-500/30 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 w-fit">{v.icon}</div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">{v.title}</h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chronological Timeline */}
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-sans text-slate-900 dark:text-white">Our Growth Timeline</h3>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Chronicles of service and adaptation to best support Gaya families.
            </p>
          </div>

          <div className="relative border-l border-teal-100 dark:border-teal-900/60 max-w-3xl mx-auto pl-6 sm:pl-8 space-y-12">
            {timelineMilestones.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Node circle */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-teal-500 border-4 border-slate-50 dark:border-slate-950 group-hover:scale-125 transition-transform" />
                
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 text-xs font-bold font-mono tracking-wider">
                  {milestone.year}
                </span>
                
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1.5 font-sans">
                  {milestone.title}
                </h4>
                
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Owner Message Block */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20 border border-teal-100/40 dark:border-teal-900/40 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <Heart className="w-10 h-10 text-teal-500 mx-auto fill-teal-500/10 animate-pulse" />
            
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-teal-900 dark:text-teal-200">
              "We measure our success not in transactions, but in healings and trusted smiles."
            </h3>
            
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed italic">
              "When you walk into Mahamaya Medical Hall or text us on WhatsApp, we understand that you or a family member might be anxious or in pain. We do not just hand over a tablet strip. We check expirations carefully, review standard dosage instructions, ensure storage conditions match pharmacological demands, and offer empathetic, fair-priced billing. We are deeply grateful to Gaya citizens for their decade of patronage."
            </p>

            <div>
              <h5 className="font-bold text-slate-900 dark:text-white text-base">Store Management & Pharmacists</h5>
              <p className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">Mahamaya Medical Hall, Gaya</p>
            </div>
          </div>
          
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/5 rounded-full blur-2xl" />
        </div>

      </div>
    </div>
  );
}
