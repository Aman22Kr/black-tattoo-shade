import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Clock, 
  Heart, 
  Star, 
  Check, 
  ChevronRight,
  Flame,
  Zap,
  MapPin,
  Calendar,
  Layers,
  UserCheck
} from 'lucide-react';
import { TATTOOS_DATA, TATTOO_CATEGORIES } from '../data/tattoosData';
import { ARTISTS_DATA } from '../data/artistsData';
import { REVIEWS_DATA } from '../data/faqData';
import { useApp } from '../context/AppContext';
import { VideoPlaceholder } from '../components/VideoPlaceholder';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const HomePage: React.FC = () => {
  const { openTattooModal, toggleFavorite, isFavorite } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTattoos = selectedCategory === 'all'
    ? TATTOOS_DATA.slice(0, 6)
    : TATTOOS_DATA.filter(t => t.category === selectedCategory).slice(0, 6);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-neutral-850">
        {/* Background Atmospheric Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"></div>
        <div className="absolute inset-0 bg-ink-pattern opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* National Award Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest backdrop-blur-md shadow-lg">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>Ranked #1 Custom Tattoo &amp; Piercing House in Mumbai</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-white uppercase leading-[1.08]">
              Surgical Precision. <br />
              <span className="gold-gradient-text">Permanent Living Art.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Welcome to <strong className="text-white">blacktattooshade</strong> (formerly Lines N Shades). Master micro realism, dramatic black &amp; grey chiaroscuro, delicate fine line, and hospital-grade sterile body piercing in Dadar West, Mumbai.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/book"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading text-sm font-bold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Studio Inking
              </Link>

              <Link
                to="/gallery"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading text-sm font-semibold tracking-wide text-neutral-200 hover:text-white bg-neutral-900/80 hover:bg-neutral-850 border border-neutral-800 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Portfolio (150+ Works)</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>

            {/* Verified Studio Key Metrics */}
            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-neutral-900 mt-10">
              <div className="p-3 text-center">
                <p className="text-2xl sm:text-3xl font-heading font-extrabold text-white">12+ Years</p>
                <p className="text-xs text-neutral-400 mt-0.5 font-mono">Of Studio Heritage</p>
              </div>
              <div className="p-3 text-center">
                <p className="text-2xl sm:text-3xl font-heading font-extrabold text-amber-400">20+ Trophies</p>
                <p className="text-xs text-neutral-400 mt-0.5 font-mono">National Conventions</p>
              </div>
              <div className="p-3 text-center">
                <p className="text-2xl sm:text-3xl font-heading font-extrabold text-white">15,000+</p>
                <p className="text-xs text-neutral-400 mt-0.5 font-mono">Completed Tattoos</p>
              </div>
              <div className="p-3 text-center">
                <p className="text-2xl sm:text-3xl font-heading font-extrabold text-emerald-400">100% Sterile</p>
                <p className="text-xs text-neutral-400 mt-0.5 font-mono">Autoclave &amp; Disposable</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Studio Video Showcase Section with YouTube Blank Placeholder */}
      <section className="py-16 bg-neutral-900/30 border-b border-neutral-850">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Inside the Studio
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1">
              Watch The Master Inking Experience
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              Witness how founder Sanket Varhadi and resident artists prep sterile stations and sculpt hyper-realistic depth into human skin.
            </p>
          </div>

          <VideoPlaceholder
            title="blacktattooshade Studio Tour & Hyper-Realism Masterclass"
            duration="14:20"
            subtitle="Demonstrating rotary needle stroke mechanics, skin tension, and chiaroscuro grey wash dilution."
            badge="Studio Video Spotlight"
          />
        </div>
      </section>

      {/* Signature Tattoo Styles Explorer */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-400 mb-1">
              <Flame className="w-3.5 h-3.5" />
              <span>Signature Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Curated Masterpieces
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
              Every design is customized to harmonize with your muscle contours and natural body flow. Click any piece to inspect details or save to your inspirations.
            </p>
          </div>

          {/* Quick Style Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {TATTOO_CATEGORIES.slice(0, 5).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-black font-semibold'
                    : 'bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
            <Link
              to="/gallery"
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-900/60 text-amber-400 hover:text-amber-300 border border-neutral-800 flex items-center gap-1"
            >
              <span>View All</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTattoos.map((item) => {
            const favorited = isFavorite(item.id);
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden border border-neutral-850 bg-neutral-900/40 hover:border-neutral-700 transition-all duration-300 flex flex-col"
              >
                {/* Image Area */}
                <div 
                  className="relative aspect-4/3 overflow-hidden bg-neutral-900 cursor-pointer"
                  onClick={() => openTattooModal(item)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-black/80 text-[10px] font-mono uppercase tracking-wider text-amber-400 border border-neutral-800 backdrop-blur-md">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(item.id);
                    }}
                    className={`absolute top-3 right-3 p-2 rounded-lg backdrop-blur-md transition-all ${
                      favorited
                        ? 'bg-rose-950/70 border border-rose-700 text-rose-500'
                        : 'bg-black/60 border border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                    title={favorited ? 'Saved in favorites' : 'Save inspiration'}
                  >
                    <Heart className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
                  </button>

                  {/* Duration pill */}
                  <div className="absolute bottom-3 left-3 text-[11px] font-mono text-neutral-300 bg-black/80 px-2 py-0.5 rounded border border-neutral-800">
                    {item.placement}
                  </div>
                </div>

                {/* Details Footer */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 
                      onClick={() => openTattooModal(item)}
                      className="text-base font-heading font-bold text-white group-hover:text-amber-400 transition-colors cursor-pointer leading-tight"
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-850 flex items-center justify-between text-xs">
                    <span className="text-neutral-400">
                      Artist: <strong className="text-neutral-200">{item.artistName}</strong>
                    </span>
                    <button
                      onClick={() => openTattooModal(item)}
                      className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                    >
                      <span>Inspect</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-neutral-800 bg-neutral-900 hover:bg-neutral-850 text-xs font-semibold text-white transition-all"
          >
            <span>Browse Full Studio Portfolio</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
          </Link>
        </div>
      </section>

      {/* Resident Artists Showcase */}
      <section className="py-20 bg-neutral-900/30 border-y border-neutral-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Master Craftsmanship
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-1">
              Meet Our Resident Artists
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              National convention award winners, realism specialists, and certified sterile body piercers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARTISTS_DATA.map((artist) => (
              <div
                key={artist.id}
                className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-neutral-700 group-hover:border-amber-500 transition-colors">
                    <img
                      src={artist.avatarUrl}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="text-lg font-heading font-bold text-white">
                      {artist.name}
                    </h3>
                    <p className="text-xs text-amber-400 font-mono mt-0.5">
                      {artist.role}
                    </p>
                    <p className="text-[11px] text-neutral-500 font-mono mt-0.5">
                      {artist.experience} • {artist.completedTattoos}+ Works
                    </p>
                  </div>

                  <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed text-center">
                    {artist.bio}
                  </p>

                  <div className="flex flex-wrap gap-1 justify-center">
                    {artist.specialties.slice(0, 2).map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-neutral-300 border border-neutral-800"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center justify-between text-xs">
                  <Link
                    to={`/artists/${artist.id}`}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    View Bio &rarr;
                  </Link>

                  <Link
                    to={`/book?artist=${encodeURIComponent(artist.name)}`}
                    className="px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-black font-semibold transition-all"
                  >
                    Book
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tattoo Cost Calculator Spotlight Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-neutral-800 bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 p-8 sm:p-12 overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-amber-500/5 blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-400">
              <Zap className="w-3.5 h-3.5" />
              <span>Transparent Pricing Tool</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-black text-white">
              Instant Tattoo Cost Estimator
            </h2>

            <p className="text-sm text-neutral-300 leading-relaxed">
              No guesswork or surprises. Calculate real pricing based on size (inches), detail density, artist seniority, and body placement sensitivity with our custom estimation engine.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/calculator"
                className="px-6 py-3 rounded-xl font-heading text-xs font-bold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 shadow-md transition-all flex items-center gap-2"
              >
                <span>Launch Interactive Calculator</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/aftercare"
                className="px-6 py-3 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-800/80 hover:bg-neutral-800 transition-all"
              >
                Read Healing Roadmap
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital-Grade Hygiene & Sterilization Section */}
      <section className="py-20 bg-neutral-950 border-t border-neutral-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Compromise Protocol</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
                Medical-Grade Sterilization &amp; Safety
              </h2>

              <p className="text-sm text-neutral-300 leading-relaxed">
                At blacktattooshade, client safety and skin integrity are our highest priority. We adhere to European tattoo hygiene directives and certified hospital protocols.
              </p>

              <div className="space-y-3.5">
                {[
                  '100% Single-Use EO Gas Sterilized Needles opened directly in front of you',
                  'Class-B Medical Autoclave Sterilizer with monthly spore-testing documentation',
                  '100% Vegan, Heavy-Metal Free, EU REACH-compliant premium pigments',
                  'Barrier-film wrapped machines, power cords, foot switches, and armrests',
                  'Medical-grade SecondSkin (breathable polyurethane) applied for infection-proof healing',
                  'Sharps biohazard waste strictly disposed through licensed biomedical agencies'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-950/80 border border-emerald-700 text-emerald-400 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs sm:text-sm text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="text-xs font-mono text-amber-400 hover:text-amber-300 underline underline-offset-4"
                >
                  Learn more about our studio safety standards &rarr;
                </Link>
              </div>
            </div>

            {/* Visual hygiene card */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div>
                  <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
                    Hygiene Checklist Verification
                  </h4>
                  <p className="text-[11px] font-mono text-emerald-400 mt-0.5">
                    Updated Daily • Dadar Studio Station #1–4
                  </p>
                </div>
                <ShieldCheck className="w-8 h-8 text-emerald-400" />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <span className="text-neutral-500 font-mono text-[10px]">Autoclave Status</span>
                  <p className="font-semibold text-white mt-1">134°C / 2.1 Bar OK</p>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <span className="text-neutral-500 font-mono text-[10px]">Needle Cartridges</span>
                  <p className="font-semibold text-emerald-400 mt-1">EO Gas Batch #4902</p>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <span className="text-neutral-500 font-mono text-[10px]">Pigment Compliance</span>
                  <p className="font-semibold text-white mt-1">EU REACH 2024 Passed</p>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <span className="text-neutral-500 font-mono text-[10px]">Piercing Needles</span>
                  <p className="font-semibold text-white mt-1">Surgical 316L / ASTM</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80 text-xs text-neutral-400 leading-relaxed">
                <strong className="text-neutral-200">First-Time Inking Guarantee:</strong> We encourage every client to inspect unsealed needle packaging and watch the workstation wrapping before session setup.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-20 bg-neutral-900/20 border-t border-neutral-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-xs font-mono font-bold text-neutral-200 ml-2">4.9 / 5.0 (2,400+ Reviews)</span>
            </div>
            <h2 className="text-3xl font-heading font-bold text-white">
              Client Testimonials &amp; Stories
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Read how clients across Mumbai and India describe their blacktattooshade experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS_DATA.map((rev) => (
              <div
                key={rev.id}
                className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed italic">
                    &ldquo;{rev.review}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-9 h-9 rounded-full object-cover border border-neutral-700"
                  />
                  <div>
                    <h5 className="text-xs font-heading font-bold text-white">
                      {rev.author}
                    </h5>
                    <p className="text-[10px] text-amber-400/90 font-mono">
                      {rev.style}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Ad Placeholder above footer as required */}
      <AdPlaceholder format="compact" />
    </div>
  );
};
