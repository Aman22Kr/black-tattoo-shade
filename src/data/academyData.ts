export interface CourseItem {
  id: string;
  title: string;
  level: string;
  duration: string;
  seatsLimit: string;
  fee: string;
  highlights: string[];
  modules: { title: string; topics: string[] }[];
  includedKit: string[];
  schedule: string;
}

export const ACADEMY_COURSES: CourseItem[] = [
  {
    id: 'foundation-tattoo-course',
    title: 'Fundamental Tattoo Artistry & Skin Science',
    level: 'Beginner / Foundation',
    duration: '4 Weeks (120 Hours Intensive)',
    seatsLimit: '6 Students per Batch',
    fee: '₹45,000 (Installments Available)',
    schedule: 'Monday – Friday, 11:00 AM – 4:00 PM',
    highlights: [
      'Personal 1-on-1 mentorship with Senior Artists',
      'Rotary Machine & Hygiene Starter Kit included',
      'Artificial Skin Practice + 2 Live Supervised Models',
      'Industry Recognized blacktattooshade Certification'
    ],
    modules: [
      {
        title: 'Module 1: Sterilization & Bloodborne Pathogens',
        topics: [
          'Cross-contamination prevention and sterile workstation setup',
          'Autoclave biology, ultrasonic cleaners, and barrier films',
          'Skin anatomy: Epidermis, dermis layers, and needle trauma minimization'
        ]
      },
      {
        title: 'Module 2: Equipment Mechanics & Stencil Mastery',
        topics: [
          'Coil vs. Rotary pen machines, stroke length, and voltage tuning',
          'Needle cartridge types: Liners (RL), Shaders (RS), Magnums (M1, RM)',
          'Thermal stencil creation, manual redraws, and body anatomy placement'
        ]
      },
      {
        title: 'Module 3: Line Weight & Grey Wash Fundamentals',
        topics: [
          'Hand speed vs. machine voltage synchronization for crisp lines',
          'Making smooth 3-tone and 5-tone grey wash ink dilution cups',
          'Whip shading, pendulum shading, and stippling techniques on silicone'
        ]
      },
      {
        title: 'Module 4: Supervised Live Practical & Portfolio',
        topics: [
          'First client consultation, skin stretching, and posture ergonomics',
          'Execution of simple flash tattoos on live models with mentor beside you',
          'Client aftercare advising and portfolio photography setup'
        ]
      }
    ],
    includedKit: [
      'Custom Wireless Rotary Tattoo Pen Machine',
      'Digital Battery Power Pack & Charging Dock',
      '50 Assorted Sterile Needle Cartridges (RL, RS, RM)',
      'Silicone Synthetic Practice Skins (Double-Sided)',
      'Black Lining Ink & Grey Wash Dilution Set',
      'Thermal Stencil Paper & Stencil Transfer Gel',
      'Full PPE Barrier Protection (Grip wrap, gloves, dental bibs)'
    ]
  },
  {
    id: 'masterclass-realism-advanced',
    title: 'Masterclass: Hyper-Realism & Studio Business',
    level: 'Intermediate to Advanced',
    duration: '12 Weeks (3 Months Mentorship)',
    seatsLimit: '4 Students per Batch',
    fee: '₹95,000',
    schedule: 'Monday – Saturday, Full Studio Immersion',
    highlights: [
      'Direct apprentice training under Founder Sanket Varhadi',
      'Advanced Photo-Realism, Portraiture & Cover-Up mechanics',
      '6 Live Models with Complex Multi-session Artworks',
      'Potential resident artist placement opportunity at blacktattooshade'
    ],
    modules: [
      {
        title: 'Module 1: Advanced Facial Anatomy & Photo Breakdown',
        topics: [
          'Deconstructing high-res reference photos for light, shadow, and midtones',
          'Contrast mapping and avoiding muddy or oversaturated skin tones',
          'Mapping facial features, skin pores, and eye reflections'
        ]
      },
      {
        title: 'Module 2: Micro Realism & Texture Replication',
        topics: [
          'Simulating animal fur, stone textures, glass, metallic reflections, and water droplets',
          'Single-needle (1RL & 3RL) micro-detail feathering',
          'Smooth opaque grey and color packing without tissue tearing'
        ]
      },
      {
        title: 'Module 3: Cover-Up Engineering & Scar Camouflage',
        topics: [
          'Assessing existing pigments and laser-lightened skin',
          'Distracting the eye: directional line flow and high-contrast camouflage',
          'Working over keloids, surgery scars, and stretch marks safely'
        ]
      },
      {
        title: 'Module 4: Business, Branding & Studio Ownership',
        topics: [
          'Building an award-winning social media portfolio and booking funnel',
          'Pricing strategy, client consent legalities, and complaint resolution',
          'Setting up an independent sterile studio compliant with municipal and health laws'
        ]
      }
    ],
    includedKit: [
      'Flagship High-Torque Brushless Wireless Machine',
      'Pro Power Dual Wireless Batteries',
      '100 Premium Curated Cartridges for Realism',
      'Complete REACH-compliant European Ink Set (Full Dynamic & Eternal)',
      'Medical-grade Autoclave indicator test packs',
      'Lifetime blacktattooshade Master Alumni Guild Membership'
    ]
  }
];
