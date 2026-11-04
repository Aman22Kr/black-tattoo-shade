import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Heart, 
  Calendar, 
  Phone, 
  Sparkles,
  MapPin,
  Clock,
  Calculator
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { favorites } = useApp();
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Tattoos', path: '/gallery' },
    { label: 'Services', path: '/services' },
    { label: 'Piercing', path: '/piercing' },
    { label: 'Artists', path: '/artists' },
    { label: 'Academy', path: '/academy' },
    { label: 'Aftercare', path: '/aftercare' },
    { label: 'Calculator', path: '/calculator' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-neutral-950/85 backdrop-blur-md transition-all">
      {/* Top micro announcement bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-1.5 text-xs text-neutral-400 border-b border-neutral-900 bg-black/40">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-neutral-400">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            Dadar West, Mumbai | Opp. Zakhadevi Temple
          </span>
          <span className="text-neutral-700">|</span>
          <span className="flex items-center gap-1.5 text-neutral-400">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            Mon – Sun: 11:00 AM – 10:00 PM
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="tel:+917400476961"
            className="flex items-center gap-1.5 text-amber-400/90 hover:text-amber-300 font-mono transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            +91 74004 76961
          </a>
          <span className="text-neutral-700">|</span>
          <Link
            to="/saved"
            className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
          >
            <Heart className="w-3.5 h-3.5 text-rose-500" />
            <span>Saved ({favorites.length})</span>
          </Link>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
          >
            {/* Tattoo Needle & Shield Brand Emblem */}
            <div className="relative w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-amber-500/60 transition-colors shadow-inner">
              <svg 
                viewBox="0 0 100 100" 
                className="w-6 h-6 text-neutral-200 group-hover:text-amber-400 transition-colors"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="7"
              >
                <path d="M50 12 L70 45 L58 45 L58 88 L42 88 L42 45 L30 45 Z" fill="currentColor" fillOpacity="0.15" strokeLinejoin="round" />
                <circle cx="50" cy="20" r="5" fill="#f59e0b" />
              </svg>
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-neutral-950"></div>
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-heading font-black tracking-wider text-neutral-100 group-hover:text-amber-300 transition-colors uppercase">
                black<span className="text-amber-500">tattoo</span>shade
              </span>
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase -mt-1">
                Studio &amp; Piercing Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                    active
                      ? 'text-amber-400 bg-neutral-900/90 border border-neutral-800 shadow-sm'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-900/50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/calculator"
              title="Tattoo Cost Estimator"
              className="p-2.5 rounded-xl border border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:text-amber-400 hover:border-neutral-700 transition-all flex items-center gap-1.5 text-xs font-mono"
            >
              <Calculator className="w-4 h-4 text-amber-500" />
              <span className="hidden lg:inline">Estimate</span>
            </Link>

            <Link
              to="/saved"
              className="relative p-2.5 rounded-xl border border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:text-rose-400 hover:border-neutral-700 transition-all"
              title="Saved Inspirations"
            >
              <Heart className="w-4 h-4" />
              {favorites.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-rose-600 text-[10px] font-bold text-white">
                  {favorites.length}
                </span>
              )}
            </Link>

            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-heading text-xs font-bold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Inking
            </Link>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <Link
              to="/saved"
              className="relative p-2 rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-300"
            >
              <Heart className="w-4 h-4 text-rose-500" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-600 text-[9px] font-bold text-white">
                  {favorites.length}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-200 hover:text-white hover:bg-neutral-850 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-neutral-800 bg-neutral-950/98 px-4 pt-3 pb-6 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all ${
                    active
                      ? 'text-amber-400 bg-neutral-900 border border-neutral-800'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-900/50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-neutral-800/80 flex flex-col gap-2.5">
            <Link
              to="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl font-heading text-center text-xs font-bold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Consultation &amp; Tattoo
            </Link>

            <div className="flex items-center justify-between px-2 pt-2 text-xs text-neutral-400">
              <a href="tel:+917400476961" className="flex items-center gap-1.5 text-amber-400 font-mono">
                <Phone className="w-3.5 h-3.5" />
                +91 74004 76961
              </a>
              <span className="text-[11px] font-mono text-neutral-400">Dadar West, Mumbai</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
