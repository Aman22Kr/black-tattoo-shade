import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  ShieldCheck, 
  MessageSquare,
  Navigation,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const ContactPage: React.FC = () => {
  const { addInquiry } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Studio Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    addInquiry({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      type: 'general',
    });

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      
      {/* Header Banner */}
      <section className="relative py-14 md:py-20 border-b border-neutral-850 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono uppercase tracking-widest text-amber-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>Studio Headquarters</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white uppercase">
            Connect With blacktattooshade
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Visit our sterile tattoo and body piercing sanctuary in Dadar West, Mumbai. Drop in for a walk-in consultation, discuss custom concept artwork, or get in touch below.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Coordinates & Studio Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-3xl border border-neutral-800 bg-neutral-900/40 space-y-6">
              <h3 className="text-xl font-heading font-bold text-white">
                Studio Details
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-neutral-200 block text-sm">Studio Address</strong>
                    <p className="text-neutral-400 mt-1 leading-relaxed">
                      Shop No. 7, Vipin Residency, Gokhale Road, <br />
                      Opposite Zakhadevi Temple, Dadar West, <br />
                      Mumbai, Maharashtra 400028, India.
                    </p>
                    <p className="text-[11px] font-mono text-amber-500 mt-1">
                      Landmark: Opp. Zakhadevi Temple (3 mins from Dadar Station)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-neutral-200 block text-sm">Phone &amp; WhatsApp</strong>
                    <a
                      href="tel:+917400476961"
                      className="text-amber-400 hover:text-amber-300 font-mono text-sm block mt-1"
                    >
                      +91 74004 76961
                    </a>
                    <span className="text-[11px] text-neutral-500 font-mono">Available 11 AM – 10 PM IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-neutral-200 block text-sm">Official Email</strong>
                    <a
                      href="mailto:info@blacktattooshade.com"
                      className="text-amber-400 hover:text-amber-300 font-mono text-sm block mt-1"
                    >
                      info@blacktattooshade.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-neutral-200 block text-sm">Operating Hours</strong>
                    <p className="text-neutral-300 mt-1">
                      Monday to Sunday: <span className="font-mono text-amber-400">11:00 AM – 10:00 PM</span>
                    </p>
                    <span className="text-[11px] text-neutral-500">Open 7 days a week, including holidays</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Visualizer Placeholder */}
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-amber-500" />
                  <span>Dadar West Studio Location Map</span>
                </span>
                <span className="text-[11px] font-mono text-emerald-400">Open Now</span>
              </div>

              {/* Styled Map Graphic Container */}
              <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 flex items-center justify-center p-4 text-center group">
                <div className="absolute inset-0 bg-ink-pattern opacity-50"></div>
                
                <div className="relative z-10 space-y-2">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500 text-amber-400 flex items-center justify-center mx-auto shadow-lg animate-pulse">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider">
                    blacktattooshade Studio
                  </h4>
                  <p className="text-[11px] text-neutral-400 max-w-xs font-mono">
                    Gokhale Rd, Opp. Zakhadevi Temple, Dadar West, Mumbai
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Dadar+West+Mumbai+Zakhadevi+Temple"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 text-xs font-semibold text-neutral-300 hover:text-white transition-all flex items-center justify-center gap-1.5 text-center"
              >
                <span>Get Driving Directions (Google Maps)</span>
                <Navigation className="w-3 h-3 text-amber-500" />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8 sm:p-10 shadow-2xl">
              <h3 className="text-2xl font-heading font-bold text-white mb-1">
                Send Us a Message
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                Have a concept in mind, need piercing consultation, or interested in the tattoo academy? Let us know.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-800 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-heading font-bold text-white">Message Delivered</h4>
                  <p className="text-xs text-neutral-300 max-w-sm mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry has been stored. Our studio team will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-xl bg-neutral-900 text-neutral-300 text-xs font-mono border border-neutral-800 hover:text-white"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-1">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-1">
                        Topic of Inquiry
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-500"
                      >
                        <option value="General Studio Inquiry">General Studio Inquiry</option>
                        <option value="Custom Tattoo Quote">Custom Tattoo Quote</option>
                        <option value="Cover-Up Advice">Cover-Up Consultation</option>
                        <option value="Body Piercing Question">Body Piercing Question</option>
                        <option value="Tattoo Academy Mentorship">Tattoo Academy Mentorship</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">
                      Message / Question *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you would like to discuss with our artists..."
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-heading text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Studio Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Ad Placeholder above footer */}
      <AdPlaceholder format="compact" />
    </div>
  );
};
