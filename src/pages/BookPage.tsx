import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ShieldCheck, 
  User, 
  MapPin, 
  CheckCircle2, 
  Phone, 
  Send,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ARTISTS_DATA } from '../data/artistsData';
import { useApp, BookingRecord } from '../context/AppContext';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const BookPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { addBooking } = useApp();

  const initialStyle = searchParams.get('style') || '';
  const initialArtist = searchParams.get('artist') || '';
  const initialPlacement = searchParams.get('placement') || '';
  const initialSize = searchParams.get('size') || '';

  const [formData, setFormData] = useState({
    serviceType: initialStyle ? `Custom Tattoo: ${initialStyle}` : 'Custom Black & Grey Tattoo',
    artistName: initialArtist || 'Any Available Master Artist',
    placement: initialPlacement || 'Forearm',
    approxSize: initialSize || '4" × 4" Medium Flash',
    conceptNotes: '',
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    timeSlot: '02:00 PM',
    fullName: '',
    email: '',
    phone: '',
  });

  const [confirmedBooking, setConfirmedBooking] = useState<BookingRecord | null>(null);

  useEffect(() => {
    if (initialStyle) {
      setFormData((prev) => ({
        ...prev,
        serviceType: `Custom Tattoo: ${initialStyle}`,
        placement: initialPlacement || prev.placement,
        artistName: initialArtist || prev.artistName,
        approxSize: initialSize || prev.approxSize,
      }));
    }
  }, [initialStyle, initialArtist, initialPlacement, initialSize]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.date) {
      return;
    }

    const matchedArtist = ARTISTS_DATA.find((a) => a.name === formData.artistName);

    const record = addBooking({
      serviceType: formData.serviceType,
      artistId: matchedArtist ? matchedArtist.id : 'studio-pool',
      artistName: formData.artistName,
      placement: formData.placement,
      approxSize: formData.approxSize,
      conceptNotes: formData.conceptNotes || 'Custom inking concept discussed during in-person studio consultation.',
      date: formData.date,
      timeSlot: formData.timeSlot,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
    });

    setConfirmedBooking(record);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      
      {/* Header Banner */}
      <section className="relative py-14 md:py-20 border-b border-neutral-850 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono uppercase tracking-widest text-amber-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>Consultation &amp; Studio Inking</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white uppercase">
            Reserve Your Session <br />
            <span className="gold-gradient-text">At blacktattooshade</span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a 1-on-1 design consultation or inking appointment at our Dadar West studio. We discuss anatomy placement, custom stencils, and provide fixed upfront quotes.
          </p>
        </div>
      </section>

      {/* Booking Form Grid */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {confirmedBooking ? (
          /* Confirmation State */
          <div className="rounded-3xl border border-emerald-800/80 bg-neutral-900/90 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-emerald-950 border border-emerald-600 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                Booking Stored in Browser
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-white mt-1">
                Appointment Confirmed!
              </h2>
              <p className="text-sm font-mono text-amber-400 mt-2">
                Booking Reference: {confirmedBooking.bookingRef}
              </p>
            </div>

            <div className="max-w-md mx-auto p-5 rounded-2xl bg-neutral-950 border border-neutral-800 text-left space-y-3 text-xs">
              <div className="flex justify-between">
                <span className="text-neutral-500 font-mono">Client Name:</span>
                <span className="text-white font-semibold">{confirmedBooking.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-mono">Scheduled Date:</span>
                <span className="text-white font-semibold">{confirmedBooking.date} at {confirmedBooking.timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-mono">Service:</span>
                <span className="text-amber-400 font-semibold">{confirmedBooking.serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-mono">Artist:</span>
                <span className="text-white font-semibold">{confirmedBooking.artistName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-mono">Placement:</span>
                <span className="text-white font-semibold">{confirmedBooking.placement} ({confirmedBooking.approxSize})</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-neutral-850">
                <span className="text-neutral-500 font-mono">Studio Address:</span>
                <span className="text-neutral-300 text-right">Shop 7, Vipin Residency, Dadar West, Mumbai</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/saved"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-heading font-bold uppercase tracking-wider transition-all"
              >
                View My Appointments &amp; Inspirations
              </Link>
              <button
                onClick={() => setConfirmedBooking(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white text-xs font-semibold"
              >
                Book Another Appointment
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Booking Form */
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8 sm:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Step 1: Service & Artist Selection */}
              <div>
                <h3 className="text-base font-heading font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="flex h-6 w-6 rounded-full bg-amber-500 text-black items-center justify-center text-xs font-mono font-bold">1</span>
                  <span>Select Service &amp; Artist</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                      Service Category *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-500 font-mono"
                    >
                      <option value="Custom Black & Grey Tattoo">Custom Black &amp; Grey Tattoo</option>
                      <option value="Hyper-Realistic Portrait">Hyper-Realistic Portrait</option>
                      <option value="Single-Needle Fine Line Botanicals">Single-Needle Fine Line Botanicals</option>
                      <option value="Sacred Geometry & Mandala">Sacred Geometry &amp; Mandala</option>
                      <option value="Cover-Up & Scar Camouflage">Cover-Up &amp; Scar Camouflage</option>
                      <option value="Body Piercing: Ear Cartilage / Nostril">Body Piercing (Surgical Titanium)</option>
                      <option value="In-Person Design Consultation Only">In-Person Design Consultation Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                      Preferred Resident Artist *
                    </label>
                    <select
                      value={formData.artistName}
                      onChange={(e) => setFormData({ ...formData, artistName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-500 font-mono"
                    >
                      <option value="Any Available Master Artist">Any Available Master Artist</option>
                      {ARTISTS_DATA.map((a) => (
                        <option key={a.id} value={a.name}>
                          {a.name} ({a.role.split('&')[0]})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Placement & Dimensions */}
              <div className="pt-4 border-t border-neutral-850">
                <h3 className="text-base font-heading font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="flex h-6 w-6 rounded-full bg-amber-500 text-black items-center justify-center text-xs font-mono font-bold">2</span>
                  <span>Placement &amp; Design Notes</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                      Target Body Placement *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.placement}
                      onChange={(e) => setFormData({ ...formData, placement: e.target.value })}
                      placeholder="e.g. Inner forearm, spine, chest plate, calf"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                      Approximate Dimensions *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.approxSize}
                      onChange={(e) => setFormData({ ...formData, approxSize: e.target.value })}
                      placeholder="e.g. 5 x 4 inches, or full sleeve"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 font-mono"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                    Concept Story / Elements Description
                  </label>
                  <textarea
                    rows={3}
                    value={formData.conceptNotes}
                    onChange={(e) => setFormData({ ...formData, conceptNotes: e.target.value })}
                    placeholder="Tell us what you want tattooed (e.g. lion head with Roman clock, delicate lavender sprig with lettering, old tribal cover up)..."
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Step 3: Date, Time & Contact Info */}
              <div className="pt-4 border-t border-neutral-850">
                <h3 className="text-base font-heading font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="flex h-6 w-6 rounded-full bg-amber-500 text-black items-center justify-center text-xs font-mono font-bold">3</span>
                  <span>Schedule &amp; Client Details</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                      Preferred Time Slot *
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-500 font-mono"
                    >
                      <option value="11:30 AM">11:30 AM (Morning Slot)</option>
                      <option value="02:00 PM">02:00 PM (Afternoon Slot)</option>
                      <option value="05:00 PM">05:00 PM (Evening Slot)</option>
                      <option value="07:30 PM">07:30 PM (Night Inking)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Karan Varma"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="karan@gmail.com"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-heading text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Studio Inking Appointment</span>
                </button>
                <p className="text-[11px] font-mono text-neutral-500 text-center mt-2">
                  No payment is processed now. Studio consultation &amp; quote verification is 100% free.
                </p>
              </div>

            </form>
          </div>
        )}
      </section>

      {/* Ad Placeholder above footer */}
      <AdPlaceholder format="compact" />
    </div>
  );
};
