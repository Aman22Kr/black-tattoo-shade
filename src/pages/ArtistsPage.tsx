import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Sparkles, 
  Instagram, 
  Calendar, 
  ArrowRight,
  CheckCircle2,
  Heart
} from 'lucide-react';
import { ARTISTS_DATA } from '../data/artistsData';
import { TATTOOS_DATA } from '../data/tattoosData';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const ArtistsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 border-b border-neutral-850 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
            Resident Masters &amp; Mentors
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white uppercase">
            The Inking Guild
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Our collective of award-winning tattooists and certified piercers in Dadar West, Mumbai. Each artist brings a distinct discipline, from hyper-realism and dark surrealism to fine-line botanicals.
          </p>
        </div>
      </section>

      {/* Artists Roster */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {ARTISTS_DATA.map((artist, idx) => {
          const artistWorks = TATTOOS_DATA.filter(t => t.artistId === artist.id);

          return (
            <div
              key={artist.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-10 rounded-3xl border border-neutral-850 bg-neutral-900/40 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Profile Image & Highlights */}
              <div className={`lg:col-span-4 flex flex-col items-center text-center ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-neutral-700 shadow-2xl">
                  <img
                    src={artist.avatarUrl}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60"></div>
                </div>

                <h3 className="mt-4 text-2xl font-heading font-bold text-white">
                  {artist.name}
                </h3>
                <p className="text-xs text-amber-400 font-mono mt-0.5">
                  {artist.role}
                </p>
                <p className="text-xs text-neutral-500 font-mono mt-0.5">
                  {artist.experience} • {artist.completedTattoos}+ Tattoos
                </p>

                <div className="mt-3 flex items-center gap-2 text-xs text-neutral-400 font-mono">
                  <Instagram className="w-3.5 h-3.5 text-amber-500" />
                  <span>{artist.instagram}</span>
                </div>
              </div>

              {/* Bio, Awards & Artwork Samples */}
              <div className={`lg:col-span-8 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <blockquote className="border-l-2 border-amber-500 pl-4 py-1 italic text-xs sm:text-sm text-neutral-300">
                  &ldquo;{artist.quote}&rdquo;
                </blockquote>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {artist.bio}
                </p>

                {/* Specialties */}
                <div>
                  <h5 className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Master Specialties:
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {artist.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-neutral-900 text-amber-400/90 border border-neutral-800"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Awards */}
                <div>
                  <h5 className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Accolades &amp; Trophies:
                  </h5>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {artist.awards.map((award, aIdx) => (
                      <li key={aIdx} className="flex items-center gap-2">
                        <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Portfolio Snippet Images */}
                {artistWorks.length > 0 && (
                  <div className="pt-2">
                    <h5 className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Recent Portfolio Pieces:
                    </h5>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {artistWorks.map((work) => (
                        <Link
                          key={work.id}
                          to={`/tattoos/${work.id}`}
                          className="group/img relative w-24 h-24 rounded-xl overflow-hidden shrink-0 border border-neutral-800 hover:border-amber-500 transition-colors"
                        >
                          <img
                            src={work.imageUrl}
                            alt={work.title}
                            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="pt-3 border-t border-neutral-850 flex flex-wrap gap-3">
                  <Link
                    to={`/book?artist=${encodeURIComponent(artist.name)}`}
                    className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book With {artist.name.split(' ')[0]}</span>
                  </Link>
                  <Link
                    to={`/artists/${artist.id}`}
                    className="px-5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white text-xs font-semibold transition-all flex items-center gap-1.5"
                  >
                    <span>View Dedicated Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Ad Placeholder above footer */}
      <AdPlaceholder format="compact" />
    </div>
  );
};
