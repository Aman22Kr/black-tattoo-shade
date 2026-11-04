import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  ShieldCheck, 
  Users, 
  Flame, 
  CheckCircle2, 
  ArrowRight,
  MapPin,
  Calendar,
  Sparkles
} from 'lucide-react';
import { VideoPlaceholder } from '../components/VideoPlaceholder';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 border-b border-neutral-850 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono uppercase tracking-widest text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Legacy of Lines N Shades</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white uppercase">
            Mastering The Art Of <br />
            <span className="gold-gradient-text">Black Ink &amp; Soul Shading</span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Founded by mentor and master tattooist Sanket Varhadi in Dadar West, Mumbai. A journey of over 12 years, 20+ national awards, and thousands of custom stories etched permanently into human canvas.
          </p>
        </div>
      </section>

      {/* Origin Story & Vision */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Our Journey Since 2011
            </span>
            <h2 className="text-3xl font-heading font-bold text-white">
              From Passionate Sketchbook to Mumbai’s Benchmark Tattoo Studio
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              In 2011, lead artist Sanket Varhadi envisioned a tattoo sanctum where technical excellence met hospital-grade hygiene. Starting under the banner of Lines N Shades Tattoo &amp; Piercing Studio, the studio quickly gained a reputation for refusing to replicate internet flash art. Every single piece is drawn bespoke for each client’s bone structure, musculature, and personal narrative.
            </p>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Over the past decade, our studio has expanded into <strong className="text-white">blacktattooshade</strong>—celebrated for deep chiaroscuro black &amp; grey realism, intricate mandala stippling, and fine-line botanicals. High-profile personalities, including Indian cricketer Surya Kumar Yadav and renowned creative minds, have entrusted our chairs with their most meaningful tattoos.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link
                to="/artists"
                className="px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-xs font-semibold text-white transition-all flex items-center justify-center gap-2"
              >
                <span>Meet Resident Artists</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
              </Link>
              <Link
                to="/book"
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-xs font-bold font-heading uppercase tracking-wider text-black transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Consultation
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=800&q=80"
                alt="blacktattooshade studio workspace"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-4 rounded-xl border border-neutral-800 bg-neutral-900/95 backdrop-blur-md shadow-2xl max-w-xs">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-amber-500 shrink-0" />
                <div>
                  <p className="text-xs font-heading font-bold text-white">20+ National Awards</p>
                  <p className="text-[11px] text-neutral-400">Best Realism, Portrait &amp; Geometric</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Video Studio Tour Placeholder */}
      <section className="py-16 bg-neutral-900/20 border-y border-neutral-850">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Virtual Studio Walkthrough
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1">
              Tour Our Private Inking Stations
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Equipped with sterile barrier sleeves, ergonomic hydraulic beds, and medical lighting.
            </p>
          </div>

          <VideoPlaceholder
            title="blacktattooshade - Dadar West Mumbai Studio Architecture"
            duration="08:42"
            subtitle="Look inside our sterilization lab, private consultation lounge, and piercing suite."
            badge="Studio Virtual Tour"
          />
        </div>
      </section>

      {/* Studio Core Values */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
            Our Pillars
          </span>
          <h2 className="text-3xl font-heading font-bold text-white mt-1">
            Why Discerning Clients Choose blacktattooshade
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-amber-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-heading font-bold text-white">
              Original Custom Stencils
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We never clone designs off Google or Pinterest. Every artwork is sketched in collaboration with the client to fit their unique body anatomy and energy.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-heading font-bold text-white">
              Sterile Clinical Hygiene
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Class-B autoclave cycle monitoring, 100% disposable EO gas blister needles, medical barrier sleeves, and EU REACH compliant heavy-metal free vegan pigments.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-amber-400">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-heading font-bold text-white">
              Empathy &amp; Comfort
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Whether it’s your first fine-line wrist ink or a 30-hour full realism backpiece, our artists maintain a welcoming, relaxed environment with zero intimidation.
            </p>
          </div>
        </div>
      </section>

      {/* Ad Placeholder above footer */}
      <AdPlaceholder format="compact" />
    </div>
  );
};
