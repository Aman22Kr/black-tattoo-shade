import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Sparkles, 
  Check, 
  X, 
  Clock, 
  Calendar, 
  AlertCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { PIERCING_DATA } from '../data/piercingData';
import { VideoPlaceholder } from '../components/VideoPlaceholder';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const PiercingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 border-b border-neutral-850 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono uppercase tracking-widest text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Aseptic Body Modification</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white uppercase">
            Sterile Body Piercing <br />
            <span className="gold-gradient-text">&amp; Implant-Grade Titanium</span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Led by senior piercer Santy (Santosh Kanojiya). We perform 100% blade-sharp needle piercings with zero guns, sterile field barriers, and ASTM F-136 medical-grade jewelry in Dadar West, Mumbai.
          </p>

          <div className="pt-2 flex justify-center gap-4">
            <Link
              to="/book?service=Body+Piercing"
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-heading text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Piercing Session</span>
            </Link>
            <Link
              to="/aftercare"
              className="px-6 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white text-xs font-semibold transition-all"
            >
              Saline Aftercare Protocol
            </Link>
          </div>
        </div>
      </section>

      {/* Piercing Services Catalog */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
            Precision Anatomy Menu
          </span>
          <h2 className="text-3xl font-heading font-bold text-white mt-1">
            Piercing Services &amp; Healing Timelines
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2">
            Every piercing includes initial surgical-grade jewelry, antiseptic skin preparation, and dedicated aftercare guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PIERCING_DATA.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="relative aspect-16/10 rounded-xl overflow-hidden bg-neutral-900">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-amber-400 border border-neutral-800 uppercase">
                      {p.area}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-heading font-bold text-white">
                      {p.name}
                    </h3>
                    <span className="text-xs font-mono font-bold text-amber-400">
                      {p.price}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="space-y-1.5 text-xs pt-1">
                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="font-mono text-[11px]">Healing Window:</span>
                    <span className="text-neutral-200 font-semibold">{p.healingTime}</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="font-mono text-[11px]">Sensation Level:</span>
                    <span className="text-amber-400 font-semibold">{p.painLevel}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800/80 text-[11px] text-neutral-400">
                  <strong className="text-neutral-300">Initial Jewelry:</strong> {p.recommendedJewelry}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-850">
                <Link
                  to={`/book?service=${encodeURIComponent('Piercing: ' + p.name)}`}
                  className="w-full py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white transition-all text-center block"
                >
                  Reserve Appointment &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sterile Needles vs. Piercing Guns Comparison */}
      <section className="py-20 bg-neutral-900/30 border-y border-neutral-850">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-rose-400">
              Client Health Advisory
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-1">
              Why We NEVER Use Piercing Guns
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              Piercing guns cause blunt-force tissue shattering and cannot be sterilized in medical autoclaves. See how our clinical needle protocol protects you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* The Sterile Needle (Our Way) */}
            <div className="rounded-2xl border border-emerald-800/60 bg-emerald-950/20 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-700 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-heading font-bold text-white">
                    blacktattooshade Sterile Needle Protocol
                  </h3>
                  <span className="text-xs text-emerald-400 font-mono">Approved by Medical Associations</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs text-neutral-300">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Razor-sharp hollow bevelled needle glides through tissue with microscopic clean incision and minimal trauma.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>100% single-use EO gas blister sterilized; opened in plain sight and discarded in biohazard sharps container.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Allows custom threadless ASTM F-136 titanium jewelry sized specifically to allow healthy swelling without choking tissue.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Up to 60% faster healing with drastically reduced keloid or granuloma risks.</span>
                </li>
              </ul>
            </div>

            {/* Piercing Gun (The Dangerous Way) */}
            <div className="rounded-2xl border border-rose-900/60 bg-rose-950/15 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-950 border border-rose-800 flex items-center justify-center text-rose-400">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-heading font-bold text-white">
                    Mall / Salon Piercing Guns
                  </h3>
                  <span className="text-xs text-rose-400 font-mono">Unsanitary &amp; Outlawed in Many Regions</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs text-neutral-300">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Forces a blunt stud through flesh with spring force, shattering ear cartilage and causing traumatic tissue tears.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Made of plastic components that melt in autoclaves—harboring microscopic bloodborne pathogens from previous users.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Butterfly clasps trap hair, dried lymph, and bacteria, causing painful infections and embedding.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Often operated by untrained retail staff with minutes of orientation.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Video Placeholder for Piercing Technique */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <VideoPlaceholder
          title="Aseptic Piercing Protocol & Titanium Flat-Back Insertion"
          duration="06:15"
          subtitle="Watch how Santy prepares surgical field drape, marks sweet-spot angles, and smoothly transfers jewelry."
          badge="Piercing Technique Guide"
        />
      </section>

      {/* Ad Placeholder above footer */}
      <AdPlaceholder format="compact" />
    </div>
  );
};
