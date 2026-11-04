export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'pain' | 'healing' | 'pricing' | 'piercing' | 'academy';
}

export const FAQ_DATA: FaqItem[] = [
  {
    category: 'pain',
    question: 'How painful is getting a tattoo at blacktattooshade?',
    answer: 'Pain varies by individual tolerance and placement. Areas with more muscle or tissue (outer arm, thigh, calf) feel like a minor scratching or vibration sensation, while bony areas (ribs, spine, feet, collarbone) are more sensitive. Our artists use ergonomic rotary machines with minimal skin trauma, and we take breaks whenever you need. We do not recommend over-the-counter numbing creams without consulting us first, as some alter skin elasticity and ink saturation.'
  },
  {
    category: 'general',
    question: 'Do you create custom designs, or do I have to pick from flash?',
    answer: 'At blacktattooshade, over 90% of our tattoos are entirely custom! You can share your story, reference images, themes, or rough sketches. Our artists create a digital rendering tailored to your exact body curvature, ensuring your piece is one-of-a-kind and never copied on another client.'
  },
  {
    category: 'pricing',
    question: 'How are tattoos priced at blacktattooshade?',
    answer: 'Smaller flash and medium pieces are priced by design dimensions, complexity, and placement. Large-scale projects like full sleeves, backpieces, or multi-session realism portraits are billed either by dedicated session packages or fixed project quotes. We provide 100% transparent quotes before any needle touches skin—try our interactive Tattoo Cost Calculator on the site!'
  },
  {
    category: 'healing',
    question: 'What is the healing process and how long does it take?',
    answer: 'The initial epidermis layer heals within 10 to 14 days, while deeper dermal layers stabilize over 3 to 4 weeks. We apply medical-grade waterproof SecondSkin (breathable polyurethane film) to protect the fresh tattoo during the crucial first 3–4 days. After removing the film, wash with mild antibacterial fragrance-free soap and moisturize thinly with recommended tattoo balm.'
  },
  {
    category: 'healing',
    question: 'Can I go to the gym, swim, or sunbathe after getting inked?',
    answer: 'Avoid submerged swimming (pools, sea, bathtubs) and direct sun exposure for at least 3 weeks to prevent bacterial infection and ink fading. Light workouts are fine after 48 hours as long as the tattoo is not stretched excessively or rubbing against sweaty gym equipment.'
  },
  {
    category: 'general',
    question: 'What hygiene and sterilization protocols does blacktattooshade follow?',
    answer: 'We maintain hospital-grade sanitation standards. All needles are 100% single-use EO gas sterilized blister-packed cartridges opened in front of you and discarded in biohazard sharps containers. Workstations, cables, and machine grips are wrapped in single-use barrier film. We use Class-B autoclave sterilizers and EU REACH-compliant vegan inks.'
  },
  {
    category: 'piercing',
    question: 'Do you use piercing guns or sterile needles for piercings?',
    answer: 'We NEVER use piercing guns under any circumstances. Piercing guns cause blunt-force tissue trauma, are impossible to sterilize in an autoclave, and use blunt mystery-metal studs. Our senior piercer Santy uses razor-sharp, surgical-grade hollow needles and mirror-polished implant-grade ASTM F-136 titanium jewelry for the cleanest, fastest healing.'
  },
  {
    category: 'academy',
    question: 'Do I need a fine arts degree to join the blacktattooshade Tattoo Academy?',
    answer: 'No fine arts degree is required! While basic drawing aptitude or a passion for illustration is helpful, our 4-Week Foundation and 12-Week Masterclass courses build your skills from the ground up—from line control and needle mechanics to skin anatomy and client psychology.'
  }
];

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  review: string;
  style: string;
  avatar: string;
}

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Rohan Deshmukh',
    role: 'Fitness Coach & Client',
    rating: 5,
    date: '2 weeks ago',
    review: 'Sanket is a wizard with realistic shading. He did an entire Roman warrior half-sleeve for me in Dadar. The attention to muscle texture, lighting, and shadow is insane. The studio is cleaner than most dental clinics!',
    style: 'Hyper-Realism Half Sleeve',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'rev-2',
    author: 'Priya Sharma',
    role: 'Creative Director',
    rating: 5,
    date: '1 month ago',
    review: 'Got my first fine-line botanical rib piece done by Krutika. I was super anxious about the pain, but she made me feel completely at ease. Her lines are crisp, feather-light, and healed flawlessly within 10 days.',
    style: 'Fine-Line Floral Botanical',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'rev-3',
    author: 'Aditya Mehta',
    role: 'Architect',
    rating: 5,
    date: '3 weeks ago',
    review: 'Amit crafted a geometric sacred mandala down my spine. As an architect, symmetry and line weight matter to me immensely. Amit’s stippling and geometry blew me away. Truly Mumbai’s finest tattoo house.',
    style: 'Sacred Geometry Spine Mandala',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'rev-4',
    author: 'Ananya Sen',
    role: 'Fashion Stylist',
    rating: 5,
    date: '2 months ago',
    review: 'Had both my helix and conch pierced by Santy. Super clean, virtually painless, and the titanium threadless jewelry looks so luxurious. He explained the saline aftercare thoroughly.',
    style: 'Curated Titanium Ear Piercing',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
  }
];
