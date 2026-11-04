import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Clock, 
  ArrowRight, 
  Calendar,
  CheckCircle2,
  ChevronRight,
  Flame,
  Palette
} from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  idealFor: string;
  technique: string;
  timeframe: string;
  leadArtist: string;
  image: string;
}

const SERVICES: ServiceDetail[] = [
  {
    id: 'realism-portraits',
    title: 'Hyper-Realism & Lifelike Portraits',
    subtitle: 'Photographic fidelity, soul-piercing gaze, and velvety tonal gradients.',
    description: 'Specializing in hyper-realistic human portraits, wildlife, Greco-Roman sculptures, and architectural wonders. We map subtle skin textures, microscopic light refractions, and deep blacks to create a multidimensional look that feels alive.',
    idealFor: 'Memorial tributes, loved ones, iconic historical figures, and realistic wildlife.',
    technique: 'Multi-layer grey wash gradation using 3RL to 15 Curved Magnum needles.',
    timeframe: 'Typically 6 to 18 hours depending on size (often split into 2+ sessions).',
    leadArtist: 'Sanket Varhadi (Founder)',
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'black-and-grey',
    title: 'Dark Chiaroscuro & Black & Grey',
    subtitle: 'High-contrast shadow work inspired by Renaissance chiaroscuro lighting.',
    description: 'We do not simply apply black ink; we create luminous negative spaces and smooth transitioning midtones. From dark surrealism to ancient mythology and Gothic motifs, our black & grey tattoos age with remarkable depth and distinction.',
    idealFor: 'Full sleeves, backpieces, mythological deities, skulls, and surrealist landscapes.',
    technique: 'Custom 5-cup grey wash dilutions with EU REACH certified pitch-black carbon pigment.',
    timeframe: 'Half-sleeve: 10–14 hours; Full sleeve: 20–28 hours.',
    leadArtist: 'Amit Rajwadkar & Sanket Varhadi',
    image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'fine-line-botanicals',
    title: 'Fine Line & Single-Needle Botanicals',
    subtitle: 'Airy, delicate, and graceful strokes that follow your natural anatomy.',
    description: 'Executed with whisper-soft pressure and ultra-fine single needles (1RL and 3RL). Perfect for first-time clients seeking understated elegance, micro wildflowers, poetic verse, or celestial constellations.',
    idealFor: 'Inner wrist, collarbone, ribcage, spine, ankle, and forearm placements.',
    technique: 'Single-needle low-trauma rotary pass with microscopic stipple shading.',
    timeframe: '1.5 to 4 hours per piece. Quick 10-day healing.',
    leadArtist: 'Krutika Parab (Resident Artist)',
    image: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'mandala-sacred-geometry',
    title: 'Sacred Geometry & Ornamental Mandalas',
    subtitle: 'Flawless mathematical symmetry, sacred fractals, and dotwork stippling.',
    description: 'Every circle, triangle, and lotus petal is plotted to harmonize with your body’s natural pivot points. We blend high-density dotwork with bold perimeter lines to evoke spiritual stillness and cosmic balance.',
    idealFor: 'Spine, center back, shoulder caps, elbows, and sternum.',
    technique: 'Pointillism stippling and dual-line weight geometric layout.',
    timeframe: '5 to 12 hours depending on dotwork density.',
    leadArtist: 'Amit Rajwadkar',
    image: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'coverup-scar-camouflage',
    title: 'Cover-Up & Scar Camouflage Art',
    subtitle: 'Ingenious reworkings that transform unwanted ink or surgical scars.',
    description: 'Do not settle for a dark, muddy blotch. We strategically redirect the viewer’s eye with high-contrast foreground subjects, textured shadows, and organic flow that completely conceals old tattoos or post-surgical scars.',
    idealFor: 'Faded tribal tattoos, regretful names, C-section scars, or injury marks.',
    technique: 'Color theory contrast cancellation and textured optical diversion.',
    timeframe: 'Consultation required. Usually 6 to 14 hours.',
    leadArtist: 'Amit Rajwadkar & Sanket Varhadi',
    image: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'color-realism',
    title: 'Color Realism & Neo-Traditional',
    subtitle: 'Rich, vivid saturation that stays vibrant for decades.',
    description: 'Utilizing premium vegan pigments with maximum lightfastness ratings. We create stunning Japanese Neo-Traditional motifs, fiery dragons, koi fish, and saturated color portraits that resist fading under tropical sun.',
    idealFor: 'Japanese sleeves, vibrant floral arrangements, and fantasy illustrations.',
    technique: 'Multi-pass solid ink packing and smooth warm-to-cool color blending.',
    timeframe: '8 to 22 hours.',
    leadArtist: 'Sanket Varhadi & Krutika Parab',
    image: 'https://images.unsplash.com/photo-1542295669297-4d352b042bca?auto=format&fit=crop&w=700&q=80',
  }
];

export const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      
      {/* Hero Header */}
      <section className="relative py-16 md:py-24 border-b border-neutral-850 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
            Disciplines &amp; Craftsmanship
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white uppercase">
            Custom Tattoo Services
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            From surgical micro realism to delicate single-needle botanicals and transformative cover-ups. Explore our specialized tattoo disciplines executed in our sterile Dadar West studio.
          </p>

          <div className="pt-2 flex justify-center gap-3">
            <Link
              to="/calculator"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-heading text-xs font-bold uppercase tracking-wider transition-all"
            >
              Estimate Service Cost &rarr;
            </Link>
            <Link
              to="/book"
              className="px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 text-xs font-semibold hover:text-white transition-all"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {SERVICES.map((srv, idx) => (
          <div
            key={srv.id}
            id={srv.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-10 rounded-3xl border border-neutral-850 bg-neutral-900/40 backdrop-blur-sm ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Visual preview */}
            <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl relative aspect-4/3">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="font-mono text-amber-400 bg-black/80 px-2.5 py-1 rounded border border-neutral-800">
                    Lead: {srv.leadArtist}
                  </span>
                </div>
              </div>
            </div>

            {/* Description & Specs */}
            <div className={`lg:col-span-7 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
                  Discipline 0{idx + 1}
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  {srv.title}
                </h2>
                <p className="text-xs text-amber-400/90 font-mono">
                  {srv.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {srv.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <span className="text-neutral-500 font-mono text-[10px] uppercase">Best Suited For</span>
                  <p className="text-neutral-200 mt-1">{srv.idealFor}</p>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <span className="text-neutral-500 font-mono text-[10px] uppercase">Needle &amp; Technique</span>
                  <p className="text-neutral-200 mt-1">{srv.technique}</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to={`/book?service=${encodeURIComponent(srv.title)}`}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book {srv.title.split(' ')[0]}</span>
                </Link>

                <Link
                  to="/gallery"
                  className="text-xs font-semibold text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>View Gallery Examples</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Ad Placeholder above footer */}
      <AdPlaceholder format="compact" />
    </div>
  );
};
