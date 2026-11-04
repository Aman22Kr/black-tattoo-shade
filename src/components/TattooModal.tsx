import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { X, Heart, Clock, DollarSign, Shield, Sparkles, User, Share2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const TattooModal: React.FC = () => {
  const { selectedTattooModal, closeTattooModal, toggleFavorite, isFavorite, showToast } = useApp();
  const navigate = useNavigate();

  if (!selectedTattooModal) return null;

  const tattoo = selectedTattooModal;
  const favorited = isFavorite(tattoo.id);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.origin + '/#/tattoos/' + tattoo.id);
    showToast('Link Copied!', 'Direct design link copied to your clipboard.', 'info');
  };

  const handleBookThis = () => {
    closeTattooModal();
    navigate(`/book?style=${encodeURIComponent(tattoo.categoryLabel)}&artist=${encodeURIComponent(tattoo.artistName)}&placement=${encodeURIComponent(tattoo.placement)}`);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={closeTattooModal}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border border-neutral-800 bg-neutral-950 text-neutral-100 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Button */}
        <button
          onClick={closeTattooModal}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-neutral-900/90 text-neutral-400 hover:text-white border border-neutral-800 backdrop-blur-md transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Image with gradient */}
          <div className="relative min-h-[320px] md:min-h-[500px] bg-neutral-900 flex items-center justify-center overflow-hidden">
            <img
              src={tattoo.imageUrl}
              alt={tattoo.title}
              className="w-full h-full object-cover max-h-[550px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent md:hidden" />
            
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-black/80 text-[11px] font-mono uppercase tracking-wider text-amber-400 border border-neutral-800 backdrop-blur-md">
                {tattoo.categoryLabel}
              </span>
            </div>
          </div>

          {/* Right Column: Specs & Actions */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  Art Reference #{tattoo.id.toUpperCase().slice(0, 8)}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
                    title="Share Artwork"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => toggleFavorite(tattoo.id)}
                    className={`p-2 rounded-lg border transition-colors ${
                      favorited
                        ? 'bg-rose-950/40 border-rose-800 text-rose-500'
                        : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                    title={favorited ? 'Saved in inspirations' : 'Save to inspirations'}
                  >
                    <Heart className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              <h3 className="mt-3 text-xl md:text-2xl font-heading font-bold text-white leading-tight">
                {tattoo.title}
              </h3>

              <div className="mt-3 flex items-center gap-2">
                <User className="w-4 h-4 text-amber-500" />
                <span className="text-xs text-neutral-400">Crafted by:</span>
                <Link
                  to={`/artists/${tattoo.artistId}`}
                  onClick={closeTattooModal}
                  className="text-xs font-semibold text-amber-400 hover:underline"
                >
                  {tattoo.artistName}
                </Link>
              </div>

              <p className="mt-4 text-xs md:text-sm text-neutral-300 leading-relaxed">
                {tattoo.description}
              </p>

              {/* Specs Grid */}
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                  <div className="flex items-center gap-1.5 text-neutral-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span>Session Time</span>
                  </div>
                  <span className="font-semibold text-white">{tattoo.durationHours}</span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                  <div className="flex items-center gap-1.5 text-neutral-400 mb-1">
                    <DollarSign className="w-3.5 h-3.5 text-amber-500" />
                    <span>Estimated Cost</span>
                  </div>
                  <span className="font-semibold text-white">{tattoo.priceRange}</span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                  <div className="flex items-center gap-1.5 text-neutral-400 mb-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Healing Time</span>
                  </div>
                  <span className="font-semibold text-white">{tattoo.healingTime}</span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                  <div className="flex items-center gap-1.5 text-neutral-400 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Body Placement</span>
                  </div>
                  <span className="font-semibold text-white">{tattoo.placement}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-1.5">
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

            {/* CTAs */}
            <div className="pt-4 border-t border-neutral-900 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleBookThis}
                className="flex-1 py-3 px-4 rounded-xl font-heading text-xs font-bold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all text-center"
              >
                Book Custom Design Like This
              </button>

              <Link
                to={`/tattoos/${tattoo.id}`}
                onClick={closeTattooModal}
                className="py-3 px-4 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-900 text-xs font-semibold text-neutral-300 hover:text-white transition-all text-center"
              >
                View Full Story &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
