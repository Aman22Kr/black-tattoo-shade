import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Heart, 
  ChevronRight, 
  Sparkles, 
  X,
  SlidersHorizontal,
  Clock,
  DollarSign
} from 'lucide-react';
import { TATTOOS_DATA, TATTOO_CATEGORIES } from '../data/tattoosData';
import { ARTISTS_DATA } from '../data/artistsData';
import { useApp } from '../context/AppContext';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const GalleryPage: React.FC = () => {
  const { openTattooModal, toggleFavorite, isFavorite } = useApp();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArtist, setSelectedArtist] = useState('all');
  const [selectedPlacement, setSelectedPlacement] = useState('all');

  // Unique placement list
  const placements = useMemo(() => {
    const set = new Set<string>();
    TATTOOS_DATA.forEach((t) => set.add(t.placement));
    return ['all', ...Array.from(set)];
  }, []);

  // Filtered dataset
  const filteredTattoos = useMemo(() => {
    return TATTOOS_DATA.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Artist match
      if (selectedArtist !== 'all' && item.artistId !== selectedArtist) {
        return false;
      }
      // Placement match
      if (selectedPlacement !== 'all' && item.placement !== selectedPlacement) {
        return false;
      }
      // Search query match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesPlacement = item.placement.toLowerCase().includes(query);
        const matchesArtist = item.artistName.toLowerCase().includes(query);
        const matchesTag = item.tags.some((tag) => tag.toLowerCase().includes(query));
        if (!matchesTitle && !matchesDesc && !matchesPlacement && !matchesArtist && !matchesTag) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedArtist, selectedPlacement, searchQuery]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedArtist('all');
    setSelectedPlacement('all');
  };

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all' || selectedArtist !== 'all' || selectedPlacement !== 'all';

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      
      {/* Page Title & Search Bar */}
      <section className="relative py-12 md:py-16 border-b border-neutral-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Master Portfolio
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white uppercase">
              Tattoo Gallery &amp; Flash
            </h1>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
              Explore custom sleeves, hyper-realism, fine line botanicals, and dark surrealism. Filter by style, body placement, or resident artist.
            </p>

            {/* Instant Search Input */}
            <div className="pt-2 max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by subject (e.g. lion, mandala, rose, sleeve, skull)..."
                  className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors shadow-inner"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Controls Bar */}
      <section className="sticky top-20 z-30 border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Horizontal Scrolling Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {TATTOO_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                    : 'bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-850 border border-neutral-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sub-Filters: Artist and Placement */}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-neutral-500 font-mono">Artist:</span>
                <select
                  value={selectedArtist}
                  onChange={(e) => setSelectedArtist(e.target.value)}
                  className="bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-500"
                >
                  <option value="all">All Artists</option>
                  {ARTISTS_DATA.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-neutral-500 font-mono">Placement:</span>
                <select
                  value={selectedPlacement}
                  onChange={(e) => setSelectedPlacement(e.target.value)}
                  className="bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-500"
                >
                  <option value="all">All Placements</option>
                  {placements.filter(p => p !== 'all').map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-amber-400 hover:text-amber-300 underline font-mono flex items-center gap-1"
                >
                  <X className="w-3.5 h-3.5" />
                  Reset Filters
                </button>
              )}
            </div>

            <div className="text-neutral-400 font-mono text-xs">
              Showing <strong className="text-white">{filteredTattoos.length}</strong> of {TATTOOS_DATA.length} designs
            </div>
          </div>

        </div>
      </section>

      {/* Gallery Cards Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredTattoos.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-neutral-800 rounded-2xl p-8 max-w-lg mx-auto">
            <Sparkles className="w-10 h-10 text-neutral-600 mx-auto mb-3" />
            <h3 className="text-lg font-heading font-bold text-white">No Designs Match Filters</h3>
            <p className="text-xs text-neutral-400 mt-1">
              Try adjusting your search terms or resetting the selected filters.
            </p>
            <button
              onClick={resetFilters}
              className="mt-5 px-5 py-2.5 rounded-xl bg-amber-500 text-black text-xs font-bold font-heading uppercase tracking-wider"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTattoos.map((item) => {
              const favorited = isFavorite(item.id);
              return (
                <div
                  key={item.id}
                  className="group rounded-2xl overflow-hidden border border-neutral-850 bg-neutral-900/40 hover:border-neutral-700 transition-all duration-300 flex flex-col"
                >
                  {/* Image Frame */}
                  <div
                    className="relative aspect-4/3 overflow-hidden bg-neutral-900 cursor-pointer"
                    onClick={() => openTattooModal(item)}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-85 group-hover:opacity-60 transition-opacity"></div>

                    {/* Category Label */}
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

                    {/* Placement badge */}
                    <div className="absolute bottom-3 left-3 text-[11px] font-mono text-neutral-300 bg-black/80 px-2 py-0.5 rounded border border-neutral-800">
                      {item.placement}
                    </div>
                  </div>

                  {/* Body Content */}
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
                        By <strong className="text-neutral-200">{item.artistName}</strong>
                      </span>
                      <div className="flex items-center gap-2">
                        <Link
                          to={`/tattoos/${item.id}`}
                          className="text-xs text-neutral-400 hover:text-white transition-colors"
                        >
                          Story
                        </Link>
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
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Ad Placeholder above footer */}
      <AdPlaceholder format="compact" />
    </div>
  );
};
