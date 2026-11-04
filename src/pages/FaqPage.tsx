import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  X, 
  MessageCircle, 
  Sparkles,
  Phone
} from 'lucide-react';
import { FAQ_DATA, FaqItem } from '../data/faqData';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const FaqPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General & Stencils' },
    { id: 'pain', label: 'Pain & Sensations' },
    { id: 'pricing', label: 'Pricing & Deposits' },
    { id: 'healing', label: 'Healing & Aftercare' },
    { id: 'piercing', label: 'Piercing Protocol' },
    { id: 'academy', label: 'Tattoo Academy' },
  ];

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          item.question.toLowerCase().includes(query) ||
          item.answer.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const toggleIndex = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      
      {/* Header Banner */}
      <section className="relative py-14 md:py-20 border-b border-neutral-850 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono uppercase tracking-widest text-amber-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Studio Knowledge Base</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white uppercase">
            Frequently Asked Questions
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about preparing for your inking, pain management, aftercare protocols, custom stencil design, and sterile piercing.
          </p>

          {/* Search Bar */}
          <div className="pt-2 max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. pain, swimming, price, healing)..."
              className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
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
      </section>

      {/* Filter Tabs & Accordion */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-black shadow-sm'
                  : 'bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Questions Accordion */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-neutral-800 rounded-2xl p-6">
            <p className="text-sm text-neutral-400">No questions matched your search criteria.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 text-xs text-amber-400 underline font-mono"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndexes.includes(idx);

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-neutral-800 bg-neutral-900/40 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-neutral-850/40 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-heading font-bold text-white pr-2">
                      {faq.question}
                    </span>
                    <div className="shrink-0 text-amber-400">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-850/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Still have questions CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl border border-neutral-800 bg-neutral-900/60 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-base font-heading font-bold text-white">
              Have a specific inking or piercing question?
            </h4>
            <p className="text-xs text-neutral-400 mt-1">
              Talk directly with our lead artists in Dadar West, Mumbai.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+917400476961"
              className="px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-mono text-white flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Call Studio</span>
            </a>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-heading font-bold uppercase tracking-wider"
            >
              Send Message
            </Link>
          </div>
        </div>

      </section>

      {/* Ad Placeholder above footer */}
      <AdPlaceholder format="compact" />
    </div>
  );
};
