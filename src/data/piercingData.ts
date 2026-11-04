export interface PiercingItem {
  id: string;
  name: string;
  area: 'ear' | 'face' | 'body';
  healingTime: string;
  painLevel: 'Mild' | 'Moderate' | 'Noticeable';
  price: string;
  recommendedJewelry: string;
  description: string;
  aftercareSummary: string;
  image: string;
}

export const PIERCING_DATA: PiercingItem[] = [
  {
    id: 'lobe-piercing',
    name: 'Classic / Upper Lobe Piercing',
    area: 'ear',
    healingTime: '6 - 8 Weeks',
    painLevel: 'Mild',
    price: '₹999 / pair',
    recommendedJewelry: 'ASTM F-136 Implant-Grade Titanium Flat-back Labret',
    description: 'The timeless classic earlobe piercing done strictly with sterile single-use bevelled needles, never damaging piercing guns.',
    aftercareSummary: 'Clean twice daily with sterile saline solution (0.9% NaCl). Avoid sleeping directly on fresh piercings.',
    image: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'helix-cartilage',
    name: 'Helix & Forward Helix Piercing',
    area: 'ear',
    healingTime: '6 - 9 Months',
    painLevel: 'Moderate',
    price: '₹1,499',
    recommendedJewelry: 'Titanium Threadless Labret with Opal or CZ Gem',
    description: 'Upper outer cartilage piercing. Allows customized stacking and constellation curation along the ear curve.',
    aftercareSummary: 'Do not twist or rotate the jewelry. Dry gently with paper towels after saline misting.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'tragus-conch',
    name: 'Tragus & Conch Piercing',
    area: 'ear',
    healingTime: '6 - 12 Months',
    painLevel: 'Moderate',
    price: '₹1,799',
    recommendedJewelry: 'Internal-Threaded Titanium Labret or Clicker Ring (post-heal)',
    description: 'Interior and cartilage apex piercings offering striking depth and architectural elegance to the ear aesthetic.',
    aftercareSummary: 'Avoid headphones or earbuds pressing against the tragus during the first 6 weeks of initial healing.',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'nostril-piercing',
    name: 'Classic Nostril & High Nostril',
    area: 'face',
    healingTime: '3 - 5 Months',
    painLevel: 'Mild',
    price: '₹1,299',
    recommendedJewelry: 'Implant-Grade Titanium L-Bend or Flatback Labret',
    description: 'Traditional and contemporary nose piercing positioned according to the unique contour of your nostril crease.',
    aftercareSummary: 'Spray saline spray twice daily. Avoid cosmetics, moisturizers, or facial cleansers directly on the site.',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'septum-piercing',
    name: 'Septum (Sweet Spot) Piercing',
    area: 'face',
    healingTime: '2 - 3 Months',
    painLevel: 'Moderate',
    price: '₹1,999',
    recommendedJewelry: 'Titanium Circular Barbell or Hinged Clicker Ring',
    description: 'Pierced through the delicate membranous "sweet spot" cartilage for swift healing and virtually painless placement.',
    aftercareSummary: 'Can easily be flipped upward into nostrils if needed for professional or personal discretion during healing.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'navel-belly-piercing',
    name: 'Navel / Belly Button Piercing',
    area: 'body',
    healingTime: '6 - 9 Months',
    painLevel: 'Moderate',
    price: '₹2,199',
    recommendedJewelry: 'Curved Titanium Barbell with Pavé Crystal Prongs',
    description: 'Upper navel lip piercing requiring proper anatomical shelf. Performed with precision clamping and surgical grade titanium.',
    aftercareSummary: 'Wear loose-fitting high-waisted or low-rise clothing to avoid friction against waistbands.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
  }
];
