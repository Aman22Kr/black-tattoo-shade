export interface ArtistItem {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  bio: string;
  quote: string;
  avatarUrl: string;
  instagram: string;
  awards: string[];
  completedTattoos: number;
  availableForBooking: boolean;
}

export const ARTISTS_DATA: ArtistItem[] = [
  {
    id: 'sanket-varhadi',
    name: 'Sanket Varhadi',
    role: 'Founder & Master Realism Tattooist',
    experience: '13+ Years',
    specialties: ['Micro Realism', 'Hyper-Realistic Portraits', 'Black & Grey Masterwork', 'Large Scale Sleeves'],
    bio: 'Founder and mentor of blacktattooshade (formerly Lines N Shades), Sanket began his professional artistic journey in 2011. Known across the nation for photographic skin reproduction, surgical gradient control, and landmark tattoos for elite athletes (including Indian cricketer Surya Kumar Yadav). He leads the studio’s advanced apprentice masterclasses.',
    quote: 'A tattoo is not just ink on skin; it is the permanent architecture of your soul’s greatest memories.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    instagram: '@sanket_varhadi_tattoos',
    awards: [
      'Best Black & Grey Realism – Mumbai Tattoo Expo 2023',
      'Artist of the Year – Indian Ink Festival 2022',
      '1st Place Best Portrait – Pune International Tattoo Art Convention 2021',
      '20+ National Awards Across India'
    ],
    completedTattoos: 7500,
    availableForBooking: true,
  },
  {
    id: 'amit-rajwadkar',
    name: 'Amit Rajwadkar',
    role: 'Senior Artist & Dark Surrealist',
    experience: '8+ Years',
    specialties: ['Mandala & Sacred Geometry', 'Dotwork Stippling', 'Dark Surrealism', 'Cover-Up Concealment'],
    bio: 'Amit brings mathematical precision and esoteric symbolism into the studio. Specializing in high-density dotwork, sacred fractals, and ingenious cover-up compositions that turn scarred skin or old ink into dark surrealist masterpieces.',
    quote: 'Where darkness and geometry intersect, true visual poetry emerges.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    instagram: '@amit_rajwadkar_art',
    awards: [
      '1st Place Best Geometric / Ornamental – Goa Ink Carnival 2023',
      'Best Cover-Up Transformation – Maharashtra Tattoo Fest 2022'
    ],
    completedTattoos: 3800,
    availableForBooking: true,
  },
  {
    id: 'krutika-parab',
    name: 'Krutika Parab',
    role: 'Resident Artist & Fine Line Specialist',
    experience: '6+ Years',
    specialties: ['Delicate Fine Line', 'Single Needle Botanicals', 'Minimalist Aesthetics', 'Vibrant Color Accents'],
    bio: 'Renowned for gentle touch and unmatched micro-needle control, Krutika is a client favorite, especially for first-timers seeking airy florals, delicate script, fine-line wildlife, and subtle color realism. She has cultivated a safe, calming atmosphere for all clients.',
    quote: 'True strength in tattooing lies in whisper-soft lines that age with timeless grace.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    instagram: '@krutika_tattoos',
    awards: [
      'Best Minimalist & Fine Line Art – Delhi Tattoo Showcase 2023',
      'Rising Female Artist Trophy – Western India Body Art Meet 2022'
    ],
    completedTattoos: 3100,
    availableForBooking: true,
  },
  {
    id: 'santosh-kanojiya',
    name: 'Santosh Kanojiya (Santy)',
    role: 'Chief Piercing Artist & Digital Concept Artist',
    experience: '7+ Years',
    specialties: ['Aseptic Body Piercing', 'Implant-Grade Titanium Jewelry', 'Custom Stencil Design', 'Curated Ear Projects'],
    bio: 'Santy oversees blacktattooshade’s piercing division and digital concept engineering. Trained in European aseptic body modification standards, he performs autoclave-sterilized needle piercings with minimal trauma and rapid healing times.',
    quote: 'Precision anatomy matching jewelry turns body modification into wearable sculpture.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    instagram: '@santy_piercings_official',
    awards: [
      'Certified Senior Body Piercer – APP International Safety Standards',
      'Best Curated Ear Styling – Mumbai Lifestyle & Piercing Guild 2024'
    ],
    completedTattoos: 4500, // Piercings and concepts
    availableForBooking: true,
  }
];
