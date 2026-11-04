import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Heart,
  Award,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useApp();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      showToast('Invalid Email', 'Please enter a valid email address.', 'error');
      return;
    }
    setSubscribed(true);
    showToast('Subscribed!', 'You will receive our seasonal flash drops and VIP artist guest-spots.', 'success');
    setNewsletterEmail('');
  };

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-300">
      {/* Upper Trust Strip */}
      <div className="border-b border-neutral-850 bg-neutral-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <ShieldCheck className="w-6 h-6 text-amber-500 shrink-0" />
              <div>
                <p className="text-xs font-heading font-bold text-white uppercase">100% Sterile Protocol</p>
                <p className="text-[11px] text-neutral-400">Class-B Autoclave &amp; Single-use needles</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Award className="w-6 h-6 text-amber-500 shrink-0" />
              <div>
                <p className="text-xs font-heading font-bold text-white uppercase">20+ National Awards</p>
                <p className="text-[11px] text-neutral-400">Master Realism &amp; Portrait Trophies</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Sparkles className="w-6 h-6 text-amber-500 shrink-0" />
              <div>
                <p className="text-xs font-heading font-bold text-white uppercase">Custom Artistry</p>
                <p className="text-[11px] text-neutral-400">No duplicate stencils. Bespoke concepts</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
              <div>
                <p className="text-xs font-heading font-bold text-white uppercase">15,000+ Healed Tattoos</p>
                <p className="text-[11px] text-neutral-400">Over a decade in Dadar West, Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Bio & Coordinates */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-center">
                <span className="font-heading font-bold text-amber-500 text-sm">B</span>
              </div>
              <span className="text-xl font-heading font-black tracking-wider text-white uppercase">
                black<span className="text-amber-500">tattoo</span>shade
              </span>
            </Link>
            
            <p className="text-xs leading-relaxed text-neutral-400 max-w-sm">
              Mumbai’s premier custom tattoo, micro realism, and sterile body piercing house. Founded by lead artist Sanket Varhadi, we transform sacred stories, portraits, and dark surrealism into permanent living art.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start gap-2.5 text-neutral-400">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Shop No. 7, Vipin Residency, Gokhale Road, Opposite Zakhadevi Temple, Dadar West, Mumbai, Maharashtra 400028</span>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-400">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:+917400476961" className="hover:text-amber-400 transition-colors font-mono">
                  +91 74004 76961
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-400">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:info@blacktattooshade.com" className="hover:text-amber-400 transition-colors font-mono">
                  info@blacktattooshade.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-400">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Open 7 Days: 11:00 AM – 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 2: Styles & Gallery */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-white mb-4">
              Tattoo Styles
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/gallery" className="text-neutral-400 hover:text-amber-400 transition-colors">
                  Micro &amp; Hyper Realism
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-400 hover:text-amber-400 transition-colors">
                  Black &amp; Grey Chiaroscuro
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-400 hover:text-amber-400 transition-colors">
                  Delicate Fine Line &amp; Florals
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-400 hover:text-amber-400 transition-colors">
                  Sacred Geometry &amp; Mandala
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-400 hover:text-amber-400 transition-colors">
                  Realistic Portraiture
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-400 hover:text-amber-400 transition-colors">
                  Cover-Up &amp; Scar Reworks
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-400 hover:text-amber-400 transition-colors">
                  Custom Chicano &amp; Script
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Studio & Services */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-white mb-4">
              Explore Studio
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-amber-400 transition-colors">
                  About Our Heritage
                </Link>
              </li>
              <li>
                <Link to="/artists" className="text-neutral-400 hover:text-amber-400 transition-colors">
                  Resident Artists Team
                </Link>
              </li>
              <li>
                <Link to="/piercing" className="text-neutral-400 hover:text-amber-400 transition-colors">
                  Aseptic Body Piercing
                </Link>
              </li>
              <li>
                <Link to="/academy" className="text-neutral-400 hover:text-amber-400 transition-colors">
                  Tattoo Training Academy
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-neutral-400 hover:text-amber-400 transition-colors">
                  Instant Cost Calculator
                </Link>
              </li>
              <li>
                <Link to="/aftercare" className="text-neutral-400 hover:text-amber-400 transition-colors">
                  Day 1–30 Aftercare Guide
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-neutral-400 hover:text-amber-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Flash Drop Newsletter */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-white mb-4">
              VIP Flash Drops
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed mb-3">
              Subscribe for exclusive monthly custom flash releases and guest artist bookings.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-300">
                You’re on the VIP studio inking list!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="w-full py-2 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-200 hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Join Inking Circle</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="mt-4 pt-3 border-t border-neutral-900 flex items-center gap-2">
              <Link
                to="/book"
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4"
              >
                Schedule Free Consultation &rarr;
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom copyright & GitHub username attribution */}
        <div className="mt-12 pt-6 border-t border-neutral-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-neutral-300">blacktattooshade</strong>. All rights reserved. Formerly Lines N Shades Tattoo.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-neutral-400">
              Developed by GitHub: <strong className="text-neutral-300 font-mono">Aman22kr</strong>
            </span>
            <span className="text-neutral-700">|</span>
            <Link to="/saved" className="hover:text-neutral-300 transition-colors">
              Saved Works
            </Link>
            <span className="text-neutral-700">|</span>
            <Link to="/contact" className="hover:text-neutral-300 transition-colors">
              Location Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
