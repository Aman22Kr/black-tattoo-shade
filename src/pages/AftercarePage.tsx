import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Check, 
  X, 
  Clock, 
  AlertTriangle, 
  Droplets, 
  Sun, 
  Printer, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const AftercarePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tattoo' | 'piercing'>('tattoo');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 border-b border-neutral-850 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono uppercase tracking-widest text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Preserve Your Permanent Canvas</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white uppercase">
            Tattoo &amp; Piercing <br />
            <span className="gold-gradient-text">Healing Roadmap (Days 1–30)</span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            A tattoo is an open abrasion until fully epithelized. Follow our studio-tested protocol to ensure vivid pigment retention, prevent infections, and achieve crisp, healed line work.
          </p>

          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-xs font-semibold text-neutral-200 hover:text-white transition-all flex items-center gap-2"
            >
              <Printer className="w-3.5 h-3.5 text-amber-500" />
              <span>Print Care Protocol</span>
            </button>
            <Link
              to="/book"
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-heading font-bold uppercase tracking-wider transition-all"
            >
              Book Follow-up Touchup
            </Link>
          </div>
        </div>
      </section>

      {/* Switch between Tattoo and Piercing Care */}
      <section className="py-8 border-b border-neutral-850 bg-neutral-900/30">
        <div className="max-w-md mx-auto px-4 flex rounded-2xl bg-neutral-950 border border-neutral-800 p-1.5">
          <button
            onClick={() => setActiveTab('tattoo')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all ${
              activeTab === 'tattoo'
                ? 'bg-amber-500 text-black shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Tattoo Care Guide
          </button>
          <button
            onClick={() => setActiveTab('piercing')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all ${
              activeTab === 'piercing'
                ? 'bg-amber-500 text-black shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Body Piercing Care
          </button>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {activeTab === 'tattoo' ? (
          <>
            {/* 4 Phases Timeline */}
            <div>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                  Four Stages of Healing
                </span>
                <h2 className="text-3xl font-heading font-bold text-white mt-1">
                  Day-by-Day Recovery Timeline
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Phase 1 */}
                <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      Days 1 – 3
                    </span>
                    <ShieldCheck className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-white">
                    SecondSkin &amp; Fluid Lock
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Leave the medical SecondSkin film on for 3 to 4 days. Do not panic if ink fluid and blood plasma pool beneath the film—this is your body’s natural sterile healing cocktail.
                  </p>
                  <p className="text-[11px] font-mono text-neutral-500">
                    Shower normally. Do not soak in a tub.
                  </p>
                </div>

                {/* Phase 2 */}
                <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                      Days 4 – 7
                    </span>
                    <Droplets className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-white">
                    Gentle Wash &amp; Thin Balm
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Peel the film slowly under warm running water. Wash with fragrance-free antibacterial soap using bare hands. Pat dry with clean paper towels. Apply a thin, breathable layer of tattoo balm.
                  </p>
                  <p className="text-[11px] font-mono text-neutral-500">
                    Avoid thick petroleum/Vaseline.
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                      Weeks 2 – 3
                    </span>
                    <Sparkles className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-white">
                    Peeling &amp; The Itch Phase
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Skin will flake like sunburn. <strong className="text-neutral-200">NEVER scratch or pick scabs</strong>, as doing so pulls raw pigment out of the dermis. Slap gently if itchy and apply unscented lotion.
                  </p>
                  <p className="text-[11px] font-mono text-neutral-500">
                    Loose cotton clothing only.
                  </p>
                </div>

                {/* Phase 4 */}
                <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                      Month 1 &amp; Beyond
                    </span>
                    <Sun className="w-5 h-5 text-amber-500" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-white">
                    Permanent UV Defense
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    The epidermal layer has reformed. Once healed, always apply Broad Spectrum SPF 50+ sunscreen outdoors to keep blacks pitch dark and prevent solar ink oxidation.
                  </p>
                  <p className="text-[11px] font-mono text-neutral-500">
                    Free touchup within 60 days.
                  </p>
                </div>

              </div>
            </div>

            {/* Do's & Don'ts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="rounded-3xl border border-emerald-900/50 bg-emerald-950/20 p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-700 flex items-center justify-center text-emerald-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white">
                    Essential DOs
                  </h3>
                </div>

                <ul className="space-y-3 text-xs text-neutral-300">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Wash your hands thoroughly before touching your healing tattoo.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Pat gently dry with clean disposable paper towels (never shared bath towels).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Apply recommended aftercare balm 2 to 3 times daily in razor-thin layers.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Drink plenty of water and maintain restful sleep for optimal collagen repair.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-rose-900/50 bg-rose-950/20 p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-950 border border-rose-800 flex items-center justify-center text-rose-400">
                    <X className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white">
                    Strict DONTs
                  </h3>
                </div>

                <ul className="space-y-3 text-xs text-neutral-300">
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>DO NOT submerge in swimming pools, hot tubs, lakes, or the sea for 3 weeks.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>DO NOT peel, scratch, or scrub flaking skin flakes under any circumstance.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>DO NOT smother the tattoo with thick Vaseline or pore-clogging heavy ointments.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>DO NOT let pets lick or sleep directly on the unhealed tattoo area.</span>
                  </li>
                </ul>
              </div>

            </div>
          </>
        ) : (
          /* Piercing Care Section */
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                Aseptic Healing Standard
              </span>
              <h2 className="text-3xl font-heading font-bold text-white mt-1">
                Body Piercing Aftercare Regimen
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-3">
                <span className="text-xs font-mono text-amber-400">Step 01</span>
                <h3 className="text-base font-heading font-bold text-white">Sterile Saline Mist</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Spray sterile isotonic saline spray (0.9% USP Sodium Chloride) directly onto piercing twice daily. Do not mix DIY table salt solutions.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-3">
                <span className="text-xs font-mono text-amber-400">Step 02</span>
                <h3 className="text-base font-heading font-bold text-white">Never Rotate Jewelry</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Old myths suggested twisting studs. Twisting tears fragile newly-forming fistula tissue and pushes bacteria inward. Leave jewelry alone.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-3">
                <span className="text-xs font-mono text-amber-400">Step 03</span>
                <h3 className="text-base font-heading font-bold text-white">Downsize on Time</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Return to blacktattooshade after 4–8 weeks for your free post-swelling downsize. Shorter titanium posts prevent snagging and angle migration.
                </p>
              </div>
            </div>
          </div>
        )}

      </section>

      {/* Ad Placeholder above footer */}
      <AdPlaceholder format="compact" />
    </div>
  );
};
