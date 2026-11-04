import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Calendar, 
  Trash2, 
  Sparkles, 
  Clock, 
  User, 
  ArrowRight, 
  Calculator,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const SavedPage: React.FC = () => {
  const { 
    favorites, 
    getFavoriteTattoos, 
    toggleFavorite, 
    openTattooModal, 
    bookings, 
    cancelBooking 
  } = useApp();

  const [savedEstimate, setSavedEstimate] = useState<any | null>(null);

  useEffect(() => {
    try {
      const draft = localStorage.getItem('blacktattooshade_calculator_draft');
      if (draft) {
        setSavedEstimate(JSON.parse(draft));
      }
    } catch (e) {
      console.warn('Could not read calculator draft', e);
    }
  }, []);

  const favoriteTattoos = getFavoriteTattoos();

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      
      {/* Header Banner */}
      <section className="relative py-14 md:py-20 border-b border-neutral-850 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono uppercase tracking-widest text-amber-400">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>Browser LocalStorage Hub</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white uppercase">
            My Studio Space &amp; Saved Art
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Your saved tattoo inspirations, scheduled appointments, and price estimates are persisted securely in your browser&apos;s local storage.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 1: Booked Appointments */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-neutral-850">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
                Scheduled Appointments ({bookings.length})
              </h2>
            </div>
            <Link
              to="/book"
              className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 font-mono"
            >
              <span>+ New Booking</span>
            </Link>
          </div>

          {bookings.length === 0 ? (
            <div className="p-8 rounded-2xl border border-dashed border-neutral-800 text-center space-y-3">
              <Calendar className="w-10 h-10 text-neutral-600 mx-auto" />
              <p className="text-sm text-neutral-400">No scheduled appointments found in your browser.</p>
              <Link
                to="/book"
                className="inline-block px-5 py-2.5 rounded-xl bg-amber-500 text-black text-xs font-heading font-bold uppercase tracking-wider"
              >
                Schedule First Appointment
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 flex flex-col justify-between space-y-4 shadow-lg"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-amber-400 bg-black/60 px-2.5 py-1 rounded border border-neutral-800">
                        Ref: {booking.bookingRef}
                      </span>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        {booking.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-white">
                      {booking.serviceType}
                    </h3>

                    <div className="space-y-1.5 text-xs text-neutral-300">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        <span>Date: <strong className="text-white">{booking.date}</strong> at <strong className="text-white">{booking.timeSlot}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-3.5 h-3.5 text-amber-500" />
                        <span>Artist: <strong className="text-white">{booking.artistName}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        <span>Placement: {booking.placement} ({booking.approxSize})</span>
                      </div>
                    </div>

                    {booking.conceptNotes && (
                      <p className="text-xs text-neutral-400 italic bg-neutral-950 p-3 rounded-xl border border-neutral-850">
                        &ldquo;{booking.conceptNotes}&rdquo;
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-neutral-850 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-neutral-500">
                      Booked for {booking.fullName} ({booking.phone})
                    </span>
                    <button
                      onClick={() => cancelBooking(booking.id)}
                      className="text-rose-400 hover:text-rose-300 flex items-center gap-1.5 font-mono"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Section 2: Saved Favorites / Inspirations */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-neutral-850">
            <div className="flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-rose-500 fill-current" />
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
                Saved Inspirations ({favoriteTattoos.length})
              </h2>
            </div>
            <Link
              to="/gallery"
              className="text-xs font-semibold text-neutral-400 hover:text-white flex items-center gap-1 font-mono"
            >
              <span>Explore More Art</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {favoriteTattoos.length === 0 ? (
            <div className="p-8 rounded-2xl border border-dashed border-neutral-800 text-center space-y-3">
              <Heart className="w-10 h-10 text-neutral-600 mx-auto" />
              <p className="text-sm text-neutral-400">You haven&apos;t saved any tattoo designs yet.</p>
              <Link
                to="/gallery"
                className="inline-block px-5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white hover:border-amber-500 transition-colors"
              >
                Browse Gallery &amp; Tap Hearts
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteTattoos.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl overflow-hidden border border-neutral-850 bg-neutral-900/40 hover:border-neutral-700 transition-all flex flex-col"
                >
                  <div
                    className="relative aspect-4/3 overflow-hidden bg-neutral-900 cursor-pointer"
                    onClick={() => openTattooModal(item)}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-amber-400 border border-neutral-800">
                        {item.categoryLabel}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(item.id);
                      }}
                      className="absolute top-3 right-3 p-2 rounded-lg bg-rose-950/80 border border-rose-700 text-rose-500 backdrop-blur-md"
                      title="Remove from favorites"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h4
                        onClick={() => openTattooModal(item)}
                        className="text-base font-heading font-bold text-white hover:text-amber-400 transition-colors cursor-pointer"
                      >
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-400 font-mono mt-1">
                        By {item.artistName} • {item.placement}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-neutral-850 flex items-center justify-between text-xs">
                      <span className="text-amber-400 font-semibold">{item.priceRange}</span>
                      <Link
                        to={`/book?style=${encodeURIComponent(item.categoryLabel)}&artist=${encodeURIComponent(item.artistName)}`}
                        className="text-white hover:text-amber-400 font-semibold flex items-center gap-1"
                      >
                        <span>Book Similar</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Section 3: Saved Calculator Draft */}
        {savedEstimate && (
          <div className="p-6 rounded-3xl border border-neutral-800 bg-neutral-900/50 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Calculator className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                  Saved Cost Estimate
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white">
                {savedEstimate.width}&quot; × {savedEstimate.height}&quot; ({savedEstimate.style}) on {savedEstimate.placement}
              </h3>
              <p className="text-xs font-mono text-neutral-400">
                Estimated Price: <strong className="text-amber-400">{savedEstimate.priceRange}</strong> • Duration: {savedEstimate.hours}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/calculator"
                className="px-4 py-2 rounded-xl bg-neutral-800 text-neutral-200 hover:text-white text-xs font-semibold"
              >
                Edit in Calculator
              </Link>
              <Link
                to={`/book?style=${encodeURIComponent(savedEstimate.style)}&placement=${encodeURIComponent(savedEstimate.placement)}`}
                className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-heading font-bold uppercase tracking-wider"
              >
                Book with this Quote
              </Link>
            </div>
          </div>
        )}

      </section>

      {/* Ad Placeholder above footer */}
      <AdPlaceholder format="compact" />
    </div>
  );
};
