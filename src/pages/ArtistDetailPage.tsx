import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Award, 
  Calendar, 
  Instagram, 
  CheckCircle2, 
  Heart, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { ARTISTS_DATA } from '../data/artistsData';
import { TATTOOS_DATA } from '../data/tattoosData';
import { useApp } from '../context/AppContext';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const ArtistDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { openTattooModal } = useApp();

  const artist = ARTISTS_DATA.find((a) => a.id === slug);

  if (!artist) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center bg-neutral-950 text-neutral-100">
        <h2 className="text-2xl font-heading font-bold text-white">Artist Profile Not Found</h2>
        <p className="text-xs text-neutral-400 mt-2 max-w-sm">
          The requested resident artist could not be located in our active roster.
        </p>
        <Link
          to="/artists"
          className="mt-6 px-6 py-2.5 rounded-xl bg-amber-500 text-black font-semibold text-xs uppercase font-heading tracking-wider"
        >
          View All Artists
        </Link>
      </div>
    );
  }

  const artistWorks = TATTOOS_DATA.filter((t) => t.artistId === artist.id);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      
      {/* Breadcrumb Header */}
      <div className="border-b border-neutral-850 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-neutral-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/artists" className="hover:text-white transition-colors">Artists</Link>
            <span>/</span>
            <span className="text-amber-400 font-medium">{artist.name}</span>
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

      {/* Artist Hero Spotlight */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="w-56 h-56 rounded-3xl overflow-hidden border-2 border-neutral-700 shadow-2xl relative">
              <img
                src={artist.avatarUrl}
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-amber-400 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
              <Instagram className="w-3.5 h-3.5" />
              <span>{artist.instagram}</span>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-neutral-900 text-amber-400 font-mono text-xs border border-neutral-800">
                {artist.experience} Experience
              </span>
              <span className="px-3 py-1 rounded-full bg-neutral-900 text-emerald-400 font-mono text-xs border border-neutral-800">
                {artist.completedTattoos}+ Tattoos Completed
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-heading font-black text-white">
              {artist.name}
            </h1>
            <p className="text-sm font-mono text-amber-400/90">
              {artist.role}
            </p>

            <blockquote className="border-l-2 border-amber-500 pl-4 py-1 italic text-xs sm:text-sm text-neutral-300">
              &ldquo;{artist.quote}&rdquo;
            </blockquote>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {artist.bio}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to={`/book?artist=${encodeURIComponent(artist.name)}`}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-heading text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Appointment with {artist.name.split(' ')[0]}</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Accolades & Accreditations */}
      <section className="py-12 bg-neutral-900/30 border-y border-neutral-850">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-heading font-bold text-white mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <span>Honors &amp; Convention Trophies</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {artist.awards.map((award, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center gap-3 text-xs text-neutral-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery of this Artist */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Personal Portfolio
            </span>
            <h2 className="text-2xl font-heading font-bold text-white mt-0.5">
              Works by {artist.name}
            </h2>
          </div>
          <Link
            to="/gallery"
            className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 font-mono"
          >
            <span>Full Gallery</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {artistWorks.length === 0 ? (
          <p className="text-xs text-neutral-500 font-mono py-8">
            More portfolio items for this artist are being documented. Check back shortly.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artistWorks.map((work) => (
              <div
                key={work.id}
                onClick={() => openTattooModal(work)}
                className="group rounded-2xl overflow-hidden border border-neutral-850 bg-neutral-900/40 hover:border-neutral-700 transition-all cursor-pointer flex flex-col"
              >
                <div className="aspect-4/3 overflow-hidden bg-neutral-900 relative">
                  <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-amber-400 border border-neutral-800">
                      {work.categoryLabel}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-heading font-bold text-white group-hover:text-amber-400 transition-colors truncate">
                    {work.title}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                    {work.description}
                  </p>
                  <div className="mt-3 pt-2 border-t border-neutral-850 flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span>{work.placement}</span>
                    <span className="text-amber-400">{work.priceRange}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Ad Placeholder above footer */}
      <AdPlaceholder format="compact" />
    </div>
  );
};
