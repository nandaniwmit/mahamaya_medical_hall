import { 
  MedicineCategory, 
  MedicalService, 
  Testimonial, 
  FAQItem, 
  GalleryItem, 
  HealthTip, 
  Medicine 
} from './types';

export const MEDICINE_CATEGORIES: MedicineCategory[] = [
  {
    id: 'tablets',
    name: 'Tablets',
    description: 'Oral dosage forms for chronic and acute treatments.',
    icon: 'Tablet'
  },
  {
    id: 'capsules',
    name: 'Capsules',
    description: 'Easy-to-swallow medicine capsules and softgels.',
    icon: 'Pil'
  },
  {
    id: 'syrups',
    name: 'Syrups',
    description: 'Liquid formulations, pediatric medicines, and cough syrups.',
    icon: 'Droplets'
  },
  {
    id: 'injections',
    name: 'Injections',
    description: 'Vials, prefilled syringes, and life-saving injectables.',
    icon: 'Syringe'
  },
  {
    id: 'medical-equip',
    name: 'Medical Equipment',
    description: 'Nebulizers, BP monitors, Glucometers, and supports.',
    icon: 'Activity'
  },
  {
    id: 'protein-supp',
    name: 'Protein Supplements',
    description: 'Nutritional drinks, whey protein, and dietary powders.',
    icon: 'Milk'
  },
  {
    id: 'vitamins',
    name: 'Vitamins & Minerals',
    description: 'Multivitamins, Calcium, Vitamin D3, and immune boosters.',
    icon: 'Sparkles'
  },
  {
    id: 'skin-care',
    name: 'Skin Care',
    description: 'Dermatological creams, moisturizers, and skin treatments.',
    icon: 'Heart'
  },
  {
    id: 'baby-products',
    name: 'Baby Care Products',
    description: 'Diapers, baby formula, lotions, baby soaps, and feeding essentials.',
    icon: 'Smile'
  },
  {
    id: 'personal-hygiene',
    name: 'Personal Hygiene',
    description: 'Sanitizers, hand washes, antiseptic liquids, and personal care.',
    icon: 'Shield'
  },
  {
    id: 'orthopedic-support',
    name: 'Orthopedic Support',
    description: 'Knee braces, lumbar belts, crepe bandages, and collars.',
    icon: 'Bone'
  },
  {
    id: 'diabetic-care',
    name: 'Diabetic Care',
    description: 'Sugar-free sweeteners, diabetic socks, test strips, and monitors.',
    icon: 'Layers'
  }
];

export const MEDICAL_SERVICES: MedicalService[] = [
  {
    id: 'prescription',
    title: 'Prescription Medicines',
    description: 'Get verified prescription medications from registered manufacturers.',
    longDescription: 'We stock a comprehensive range of prescription medicines across key therapeutic segments, including cardiology, diabetology, neurology, gastroenterology, and orthopedics. All our medicines are sourced directly from top pharmaceutical brands to ensure authenticity.',
    icon: 'FileText',
    features: ['100% genuine guaranteed', 'Direct manufacturer sourcing', 'Proper cold-chain storage', 'Expiry-check systems']
  },
  {
    id: 'general-medicines',
    title: 'General Medicines & OTC',
    description: 'Daily healthcare essentials, pain relievers, cold remedies, and first aid.',
    longDescription: 'Our Over-The-Counter (OTC) section is fully stocked with high-quality daily health essentials, cold and flu remedies, pain relievers, digestive aids, and skin creams that you can easily acquire for immediate relief.',
    icon: 'ShoppingBag',
    features: ['Trusted OTC brands', 'Pain and fever management', 'Digestive and acidity solutions', 'Expert guidance from pharmacists']
  },
  {
    id: 'health-supplements',
    title: 'Health & Nutrition Supplements',
    description: 'Multivitamins, protein powders, calcium, minerals, and immunity boosters.',
    longDescription: 'Fuel your active lifestyle and fill nutritional gaps with our premium health supplements. We offer a wide selection of top multivitamins, dietary fiber, calcium supplements, omega-3 capsules, and protein powders.',
    icon: 'Sparkles',
    features: ['Premium protein brands', 'Immunity and energy boosters', 'Bone and joint care pills', 'Weight management powders']
  },
  {
    id: 'baby-care',
    title: 'Baby Care Essentials',
    description: 'Safe and gentle baby skin care, baby foods, diapers, and health items.',
    longDescription: 'We understand that your little one deserves the absolute best and gentlest care. We offer baby formula, high-quality baby diapers, clinically tested baby washes, powders, lotions, and specialized pediatric supplements.',
    icon: 'Smile',
    features: ['Hypoallergenic baby care', 'Top infant formula brands', 'Diapers and rash creams', 'Safe pediatric accessories']
  },
  {
    id: 'personal-care',
    title: 'Personal Care & Hygiene',
    description: 'Hair care, oral care, feminine hygiene, sanitizers, and body care products.',
    longDescription: 'Stay fresh and maintain personal wellness with our wide selection of personal hygiene and grooming products. From premium oral care and hair therapies to complete skin hydration and sanitizing items.',
    icon: 'Heart',
    features: ['Quality personal wash', 'Feminine hygiene essentials', 'Oral and dental health care', 'Sanitizers and antiseptics']
  },
  {
    id: 'medical-equipment',
    title: 'Medical Equipment & Devices',
    description: 'Nebulizers, BP monitors, glucometers, digital thermometers, and more.',
    longDescription: 'Monitor your health indicators precisely at home with our user-friendly, high-accuracy medical devices. We stock and sell premium digital blood pressure monitors, blood glucose meters, nebulizers, and thermometers.',
    icon: 'Activity',
    features: ['Certified digital monitors', 'Glucometers and test strips', 'Aerosol nebulizers', 'Warranty support on devices']
  },
  {
    id: 'surgical-supplies',
    title: 'Surgical Supplies',
    description: 'Syringes, disposable gloves, IV sets, surgical tapes, and dressings.',
    longDescription: 'Providing medical institutions, clinics, and home care patients with vital clinical items, including sterile needles, infusion sets, bandages, adhesive tapes, and protective surgical wear.',
    icon: 'Scissors',
    features: ['Sterilized surgical packs', 'High-grade surgical gloves', 'Disposable syringes and needles', 'Hospital consumables']
  },
  {
    id: 'first-aid',
    title: 'First Aid Products',
    description: 'Antiseptics, bandages, gauze, medical tapes, and complete first aid kits.',
    longDescription: 'Be prepared for minor accidents and emergencies at home, office, or school. We provide essential first aid products, bandages, antiseptic lotions (Dettol, Savlon), burn ointments, and customized first aid boxes.',
    icon: 'PlusSquare',
    features: ['Custom home first-aid kits', 'High-quality cotton and gauze', 'Antiseptic solutions and ointments', 'Emergency burn care dressings']
  },
  {
    id: 'diabetic-care-srv',
    title: 'Diabetic Care Management',
    description: 'Continuous glucose monitoring tools, sugar-free foods, and foot care.',
    longDescription: 'Comprehensive solutions for managing diabetes effectively. From affordable testing strips and insulin syringes to specialized sugar-free supplements, neuropathy foot lotions, and diabetic socks.',
    icon: 'Layers',
    features: ['Regular strip supply packages', 'Insulin pen needles and syringes', 'Sugar-free food alternatives', 'Neuropathy and diabetic foot care']
  },
  {
    id: 'homecare-essentials',
    title: 'Home Healthcare Essentials',
    description: 'Wheelchairs, walking sticks, adult diapers, bed pads, and orthopedic supports.',
    longDescription: 'Ensure comfort and dignity for elderly or recovering family members with our range of homecare products. We stock comfortable walker aids, anti-bedsore air mattresses, underpads, and high-absorbency adult diapers.',
    icon: 'Home',
    features: ['High-absorbency adult diapers', 'Anti-bedsore air mattresses', 'Sturdy walkers and walking sticks', 'Orthopedic knee and lumbar supports']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'review-1',
    name: 'Amit Kumar Singh',
    location: 'Delha, Gaya',
    rating: 5,
    text: 'Mahamaya Medical Hall is our go-to shop for all medicine needs. They always have the medicines prescribed by my cardiologist in stock. The staff is very well-behaved and polite.',
    date: '10 days ago'
  },
  {
    id: 'review-2',
    name: 'Ranjana Kumari',
    location: 'Tekari Road, Gaya',
    rating: 5,
    text: 'I ordered pediatric medicines and baby care products via their WhatsApp number. They verified my prescription and packaged everything perfectly. Extremely fast and convenient service!',
    date: '2 weeks ago'
  },
  {
    id: 'review-3',
    name: 'Dr. Manish Jha',
    location: 'Chhotki, Gaya',
    rating: 5,
    text: 'As a local practitioner, I always recommend Mahamaya Medical Hall to my patients. Their stock is comprehensive, their storage conditions (especially cold chain) are perfect, and they sell only 100% genuine medicines.',
    date: '1 month ago'
  },
  {
    id: 'review-4',
    name: 'Vikash Kumar Vardhan',
    location: 'AP Colony, Gaya',
    rating: 5,
    text: 'Excellent price! They provide reasonable discounts on prescription medicines. I bought a Beurer BP monitor and a nebulizer here at the most competitive price in Gaya.',
    date: '1 month ago'
  },
  {
    id: 'review-5',
    name: 'Sunita Devi',
    location: 'Delha, Gaya',
    rating: 4.8,
    text: 'Very helpful staff. Once, a particular skin cream was not available anywhere, but the owner placed a special order and procured it for me within 24 hours. Truly reliable and helpful!',
    date: '2 months ago'
  },
  {
    id: 'review-6',
    name: 'Rajesh Ranjan Pathak',
    location: 'Tekari, Bihar',
    rating: 5,
    text: 'The best pharmacy in the Delha/Chhotki area. Reliable, honest pricing, and they explain the dosage very clearly if you ask. The convenience of sending prescriptions over WhatsApp is amazing.',
    date: '2 months ago'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Where is Mahamaya Medical Hall located?',
    answer: 'We are located at Chhotki, Delha, Tekari Road, Gaya, Bihar 823002. Our store is easily accessible and a well-known healthcare landmark in the Delha/Tekari Road area.',
    category: 'store'
  },
  {
    id: 'faq-2',
    question: 'Can I order medicines through WhatsApp?',
    answer: 'Yes, absolutely! You can send your prescription or medicine list via WhatsApp to our official number: 09122975757. Our pharmacists will review it, calculate the total cost, and confirm your order promptly.',
    category: 'service'
  },
  {
    id: 'faq-3',
    question: 'Do you sell 100% genuine medicines?',
    answer: 'Yes. Authenticity is our highest priority. All our medicines, medical equipment, and healthcare supplements are sourced directly from authorized pharmaceutical distributors or the companies themselves.',
    category: 'medicine'
  },
  {
    id: 'faq-4',
    question: 'Is a prescription required for purchasing medicines?',
    answer: 'For Scheduled drugs (including antibiotics, chronic heart/diabetes medications, and psychiatric drugs), a valid prescription from a registered medical practitioner is legally required. For standard OTC (Over-The-Counter) medicines, vitamins, and general wellness products, a prescription is not necessary.',
    category: 'medicine'
  },
  {
    id: 'faq-5',
    question: 'What are the payment options accepted at the store?',
    answer: 'We accept all major payment modes including UPI (Google Pay, PhonePe, Paytm, BHIM), Credit/Debit Cards, Net Banking, and traditional Cash payments.',
    category: 'store'
  },
  {
    id: 'faq-6',
    question: 'What are your working hours?',
    answer: 'We are open 7 days a week. Our working hours are from 08:00 AM to 10:00 PM (Monday to Sunday), ensuring your medical and healthcare needs are met all day long.',
    category: 'store'
  },
  {
    id: 'faq-7',
    question: 'Do you offer home delivery of medicines in Gaya?',
    answer: 'Yes, we provide nearby home delivery services in Delha, Chhotki, Tekari Road, and adjacent localities in Gaya. Please contact us via WhatsApp or call us to check eligibility for your specific address.',
    category: 'service'
  },
  {
    id: 'faq-8',
    question: 'Do you provide discounts on bulk or monthly medicines?',
    answer: 'Yes! We offer attractive, transparent discounts on regular monthly prescription medicines for chronic conditions (like diabetes, thyroid, blood pressure, etc.). Please speak with our store manager for more details.',
    category: 'medicine'
  },
  {
    id: 'faq-9',
    question: 'How do you store sensitive medicines like Insulin?',
    answer: 'We maintain advanced medical refrigeration units equipped with continuous power backup. All critical temperature-sensitive biologicals, vaccines, and insulins are stored strictly between 2°C and 8°C as per pharmacopoeial guidelines.',
    category: 'medicine'
  },
  {
    id: 'faq-10',
    question: 'Can I return medicines if they are unused?',
    answer: 'Medicines can be returned or exchanged within 7 days of purchase, provided they are in their original intact packaging, have not expired, and are accompanied by the original purchase bill. Please note that temperature-sensitive cold-chain items, surgical products, and cut strips cannot be returned for safety and hygiene reasons.',
    category: 'service'
  }
];

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: 'tip-1',
    title: 'Understanding Diabetes Management: Key Daily Steps',
    excerpt: 'Managing diabetes is about balancing medicine, diet, and physical activity. Here are key guidelines to follow.',
    content: 'For an effective diabetic routine, ensure you take your Metformin or Insulin exactly as prescribed. Check your blood glucose levels regularly, keep a food journal focusing on low-glycemic foods, and complete at least 30 minutes of brisk walking. Always inspect your feet daily for cuts or sores, as diabetes slows down healing processes.',
    category: 'wellness',
    readTime: '3 min read',
    date: 'July 5, 2026',
    author: 'Chief Pharmacist'
  },
  {
    id: 'tip-2',
    title: 'How to Prevent Antibiotic Resistance: A Patient Guide',
    excerpt: 'Stopping your antibiotics early can cause resistant bacteria to multiply. Learn the correct way to take them.',
    content: 'Antibiotic resistance is a major global threat. Never self-medicate or purchase antibiotics without a prescription. Always complete the entire full course of antibiotics prescribed by your doctor, even if you feel completely better midway. Stopping early allows stronger bacteria to survive and replicate, rendering future treatments ineffective.',
    category: 'medicine',
    readTime: '4 min read',
    date: 'June 28, 2026',
    author: 'Pharmacology Team'
  },
  {
    id: 'tip-3',
    title: 'Essential First-Aid Items Every Home Must Have',
    excerpt: 'Accidents happen without warning. Ensure your home first-aid kit is fully prepared with these essentials.',
    content: 'Every home should have a visible, easily accessible first-aid kit. Ensure it contains: adhesive bandages of various sizes, sterile gauze pads, medical tape, an antiseptic solution (like Dettol or Savlon), an antiseptic ointment (like Betadine or Neosporin), paracetamol for fever/pain, oral rehydration salts (ORS), a digital thermometer, and a pair of scissors. Check expiries twice a year.',
    category: 'prevention',
    readTime: '5 min read',
    date: 'June 15, 2026',
    author: 'Safety Specialist'
  }
];

export const MEDICINE_CATALOG: Medicine[] = [
  {
    id: 'med-1',
    name: 'Paracetamol 650mg (Dolo)',
    category: 'tablets',
    dosageForm: 'Tablet',
    description: 'Analgesic and antipyretic medicine used to relieve fever, headaches, joint pain, and mild pain.',
    genericName: 'Paracetamol / Acetaminophen',
    availability: 'In Stock'
  },
  {
    id: 'med-2',
    name: 'Metformin 500mg (Glycomet)',
    category: 'tablets',
    dosageForm: 'Tablet',
    description: 'Oral anti-diabetic medicine used to regulate blood sugar levels in type 2 diabetes mellitus patients.',
    genericName: 'Metformin Hydrochloride',
    availability: 'In Stock'
  },
  {
    id: 'med-3',
    name: 'Amlodipine 5mg (Amlong)',
    category: 'tablets',
    dosageForm: 'Tablet',
    description: 'Calcium channel blocker used to treat high blood pressure (hypertension) and chest pain (angina).',
    genericName: 'Amlodipine Besylate',
    availability: 'In Stock'
  },
  {
    id: 'med-4',
    name: 'Pantoprazole 40mg (Pantocid)',
    category: 'tablets',
    dosageForm: 'Tablet',
    description: 'Proton pump inhibitor used to treat acidity, heartburn, gastroesophageal reflux disease (GERD), and stomach ulcers.',
    genericName: 'Pantoprazole Sodium',
    availability: 'In Stock'
  },
  {
    id: 'med-5',
    name: 'Amoxicillin & Potassium Clavulanate 625mg (Augmentin)',
    category: 'tablets',
    dosageForm: 'Tablet',
    description: 'Broad-spectrum antibiotic used to treat bacterial infections of lungs, throat, ears, skin, and urinary tract.',
    genericName: 'Amoxicillin + Clavulanic Acid',
    availability: 'In Stock'
  },
  {
    id: 'med-6',
    name: 'Cetirizine 10mg (Okacet)',
    category: 'tablets',
    dosageForm: 'Tablet',
    description: 'Antihistamine used to relieve allergy symptoms such as sneezing, runny nose, watery eyes, skin rashes, and itching.',
    genericName: 'Cetirizine Dihydrochloride',
    availability: 'In Stock'
  },
  {
    id: 'med-7',
    name: 'Omeprazole 20mg (Omez)',
    category: 'capsules',
    dosageForm: 'Capsule',
    description: 'Antacid capsule to reduce excess stomach acid production, treating severe heartburn and acid reflux.',
    genericName: 'Omeprazole',
    availability: 'In Stock'
  },
  {
    id: 'med-8',
    name: 'Cough Syrup (Grilinctus-L)',
    category: 'syrups',
    dosageForm: 'Syrup',
    description: 'Used for symptomatic relief of dry cough, soothing sore throats, and clearing respiratory airways.',
    genericName: 'Levocloperastine Fendizoate',
    availability: 'In Stock'
  },
  {
    id: 'med-9',
    name: 'Digital Blood Pressure Monitor',
    category: 'medical-equip',
    dosageForm: 'Medical Device',
    description: 'Fully automatic upper-arm digital monitor to measure blood pressure and heart rate instantly at home.',
    genericName: 'BP Monitor / Sphygmomanometer',
    availability: 'In Stock'
  },
  {
    id: 'med-10',
    name: 'Glucometer Kit (OneTouch Select)',
    category: 'medical-equip',
    dosageForm: 'Medical Device',
    description: 'Blood sugar level testing machine with lancing device, lancets, and test strips for rapid self-monitoring.',
    genericName: 'Blood Glucose Meter',
    availability: 'In Stock'
  },
  {
    id: 'med-11',
    name: 'ORS Liquid (Electral)',
    category: 'syrups',
    dosageForm: 'Liquid / Powder',
    description: 'Oral Rehydration Salts formula recommended by WHO to restore essential fluids and electrolytes in cases of dehydration.',
    genericName: 'Sodium Chloride + Potassium Chloride + Dextrose',
    availability: 'In Stock'
  },
  {
    id: 'med-12',
    name: 'Multivitamin Complex (Zincovit)',
    category: 'tablets',
    dosageForm: 'Tablet',
    description: 'Nutritional supplement packed with essential vitamins, minerals, and zinc to boost immunity and support body vitality.',
    genericName: 'Multivitamins + Minerals + Zinc',
    availability: 'In Stock'
  },
  {
    id: 'med-13',
    name: 'Lantus Insulin Solostar 100 IU/ml',
    category: 'injections',
    dosageForm: 'Injection',
    description: 'Long-acting insulin pen used to control high blood sugar levels in adults and children with diabetes mellitus.',
    genericName: 'Insulin Glargine',
    availability: 'Available on Order'
  },
  {
    id: 'med-14',
    name: 'Nebulizer Machine (Omron)',
    category: 'medical-equip',
    dosageForm: 'Medical Device',
    description: 'Compacting aerosol compressor nebulizer used to deliver respiratory drugs directly to the lungs for asthma/bronchitis.',
    genericName: 'Compressor Nebulizer',
    availability: 'In Stock'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Modern Storefront Logo & Entrance',
    category: 'store',
    imageUrl: '/src/assets/images/medical_hero_banner_1783414833757.jpg',
    description: 'Mahamaya Medical Hall front banner and entrance welcoming customers in Gaya.'
  },
  {
    id: 'gal-2',
    title: 'Experienced Pharmacist Counseling',
    category: 'customers',
    imageUrl: '/src/assets/images/pharmacist_counter_1783414849236.jpg',
    description: 'Our friendly qualified pharmacist providing instructions and care at the billing counter.'
  },
  {
    id: 'gal-3',
    title: 'Fully Organized Medicine Racks',
    category: 'medicines',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    description: 'Categorized prescription racks ensuring fast, accurate retrieval and systematic storage.'
  },
  {
    id: 'gal-4',
    title: 'Diagnostic Instruments & Monitors',
    category: 'equipment',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    description: 'A wide range of high-accuracy diagnostic instruments, digital BP monitors, and glucometers.'
  },
  {
    id: 'gal-5',
    title: 'Immunity & Nutrition Section',
    category: 'medicines',
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800',
    description: 'Multivitamins, immunity-enhancing capsules, minerals, and organic energy supplements.'
  },
  {
    id: 'gal-6',
    title: 'Surgical Supplies & Dressings',
    category: 'equipment',
    imageUrl: 'https://images.unsplash.com/photo-1631553127988-468bf88667dc?auto=format&fit=crop&q=80&w=800',
    description: 'Clinically sterile gauze, surgical tape, bandages, and critical disposable consumables.'
  }
];
