import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Heart, 
  Clock, 
  DollarSign, 
  Shield, 
  Sparkles, 
  User, 
  Share2, 
  Calendar,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { TATTOOS_DATA } from '../data/tattoosData';
import { useApp } from '../context/AppContext';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const TattooDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite, showToast, openTattooModal } = useApp();

  const tattoo = TATTOOS_DATA.find((t) => t.id === id);

  if (!tattoo) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center bg-neutral-950 text-neutral-100">
        <h2 className="text-2xl font-heading font-bold text-white">Tattoo Artwork Not Found</h2>
        <p className="text-xs text-neutral-400 mt-2 max-w-sm">
          The requested tattoo artwork identifier may have been archived or moved.
        </p>
        <Link
          to="/gallery"
          className="mt-6 px-6 py-2.5 rounded-xl bg-amber-500 text-black font-semibold text-xs uppercase font-heading tracking-wider"
        >
          Return to Gallery
        </Link>
      </div>
    );
  }

  const favorited = isFavorite(tattoo.id);

  const relatedTattoos = TATTOOS_DATA.filter(
    (t) => t.category === tattoo.category && t.id !== tattoo.id
  ).slice(0, 3);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast('Link Copied!', 'Artwork URL copied to clipboard.', 'info');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      
      {/* Breadcrumb Navigation */}
      <div className="border-b border-neutral-850 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-neutral-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/gallery" className="hover:text-white transition-colors">Tattoos</Link>
            <span>/</span>
            <span className="text-amber-400 font-medium truncate max-w-[200px] sm:max-w-none">
              {tattoo.title}
            </span>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white font-mono"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>
        </div>
      </div>

      {/* Main Showcase Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Image Viewer */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
              <img
                src={tattoo.imageUrl}
                alt={tattoo.title}
                className="w-full h-auto max-h-[650px] object-cover"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-black/80 text-xs font-mono uppercase tracking-wider text-amber-400 border border-neutral-800 backdrop-blur-md">
                  {tattoo.categoryLabel}
                </span>
              </div>

              <div className="absolute top-4 right-4 flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2.5 rounded-xl bg-black/80 border border-neutral-800 text-neutral-300 hover:text-white backdrop-blur-md transition-colors"
                  title="Share Design Link"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => toggleFavorite(tattoo.id)}
                  className={`p-2.5 rounded-xl border backdrop-blur-md transition-colors ${
                    favorited
                      ? 'bg-rose-950/80 border-rose-700 text-rose-500'
                      : 'bg-black/80 border-neutral-800 text-neutral-300 hover:text-white'
                  }`}
                  title={favorited ? 'In Favorites' : 'Add to Favorites'}
                >
                  <Heart className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>

            <p className="mt-3 text-[11px] font-mono text-neutral-500 text-center">
              Original custom inking by blacktattooshade Studio. All rights reserved.
            </p>
          </div>

          {/* Right Column: In-Depth Artwork Specs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  Featured Masterpiece
                </span>
                <span className="text-neutral-700">•</span>
                <span className="text-xs font-mono text-neutral-400">
                  Ref #{tattoo.id.toUpperCase().slice(0, 8)}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-heading font-black text-white leading-tight">
                {tattoo.title}
              </h1>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
                <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-amber-400">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-neutral-400">Lead Tattoo Artist</p>
                  <Link
                    to={`/artists/${tattoo.artistId}`}
                    className="text-sm font-heading font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    {tattoo.artistName} &rarr;
                  </Link>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-2">
                {tattoo.description}
              </p>

              {/* Technical Specifications */}
              <div className="pt-2 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <div className="flex items-center gap-1.5 text-neutral-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span>Duration</span>
                  </div>
                  <span className="font-semibold text-white">{tattoo.durationHours}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <div className="flex items-center gap-1.5 text-neutral-400 mb-1">
                    <DollarSign className="w-3.5 h-3.5 text-amber-500" />
                    <span>Price Bracket</span>
                  </div>
                  <span className="font-semibold text-white">{tattoo.priceRange}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <div className="flex items-center gap-1.5 text-neutral-400 mb-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Healing Window</span>
                  </div>
                  <span className="font-semibold text-white">{tattoo.healingTime}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <div className="flex items-center gap-1.5 text-neutral-400 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Body Placement</span>
                  </div>
                  <span className="font-semibold text-white">{tattoo.placement}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {tattoo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-1 rounded bg-neutral-900 text-neutral-400 border border-neutral-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Inking Actions */}
            <div className="pt-6 border-t border-neutral-850 space-y-3">
              <Link
                to={`/book?style=${encodeURIComponent(tattoo.categoryLabel)}&artist=${encodeURIComponent(tattoo.artistName)}&placement=${encodeURIComponent(tattoo.placement)}`}
                className="w-full py-4 rounded-xl font-heading text-xs font-bold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 shadow-xl shadow-amber-500/25 transition-all text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation for this Style</span>
              </Link>

              <Link
                to="/calculator"
                className="w-full py-3 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-900 text-xs font-semibold text-neutral-200 hover:text-white transition-all text-center block"
              >
                Estimate Exact Size &amp; Price in Calculator &rarr;
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Related Works in this Discipline */}
      {relatedTattoos.length > 0 && (
        <section className="py-16 bg-neutral-900/20 border-t border-neutral-850">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-heading font-bold text-white mb-6">
              More In {tattoo.categoryLabel}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedTattoos.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openTattooModal(item)}
                  className="group rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/50 cursor-pointer hover:border-amber-500/50 transition-all"
                >
                  <div className="aspect-4/3 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-heading font-bold text-white group-hover:text-amber-400 transition-colors truncate">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-neutral-400 font-mono mt-0.5">
                      {item.placement} • By {item.artistName}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ad Placeholder above footer */}
      <AdPlaceholder format="compact" />
    </div>
  );
};
