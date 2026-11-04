import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calculator, 
  Sparkles, 
  Clock, 
  DollarSign, 
  ArrowRight, 
  Bookmark, 
  Check, 
  RotateCcw,
  Sliders
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface PresetSize {
  name: string;
  width: number;
  height: number;
  placement: string;
}

const PRESET_SIZES: PresetSize[] = [
  { name: 'Micro / Fine Line (2" × 2")', width: 2, height: 2, placement: 'Inner Wrist / Ankle' },
  { name: 'Medium Flash (4" × 4")', width: 4, height: 4, placement: 'Forearm / Shoulder' },
  { name: 'Quarter Sleeve (6" × 5")', width: 6, height: 5, placement: 'Outer Bicep' },
  { name: 'Half Sleeve (9" × 6")', width: 9, height: 6, placement: 'Forearm Wrap' },
  { name: 'Full Sleeve (16" × 6")', width: 16, height: 6, placement: 'Full Arm' },
  { name: 'Large Backpiece (18" × 14")', width: 18, height: 14, placement: 'Center Back' },
];

export const CalculatorPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useApp();

  const [width, setWidth] = useState<number>(4);
  const [height, setHeight] = useState<number>(4);
  const [style, setStyle] = useState<string>('black-grey');
  const [complexity, setComplexity] = useState<string>('intricate');
  const [artistTier, setArtistTier] = useState<string>('senior');
  const [placement, setPlacement] = useState<string>('forearm');

  // Calculation logic
  const calculation = useMemo(() => {
    const area = width * height; // square inches

    // Base rate per square inch
    let ratePerSqInch = 550;

    // Style multipliers
    const styleMultipliers: Record<string, number> = {
      'minimalist': 0.85,
      'fine-line': 1.05,
      'black-grey': 1.15,
      'mandala': 1.25,
      'color': 1.35,
      'realism': 1.5,
      'coverup': 1.4,
    };
    const styleMult = styleMultipliers[style] || 1.0;

    // Complexity multipliers
    const complexityMultipliers: Record<string, number> = {
      'simple': 0.8,
      'moderate': 1.0,
      'intricate': 1.3,
      'masterpiece': 1.65,
    };
    const compMult = complexityMultipliers[complexity] || 1.0;

    // Artist Tier
    const artistTierMultipliers: Record<string, number> = {
      'resident': 1.0,
      'senior': 1.2,
      'master': 1.45,
    };
    const artistMult = artistTierMultipliers[artistTier] || 1.0;

    // Placement difficulty
    const placementMultipliers: Record<string, number> = {
      'forearm': 1.0,
      'bicep': 1.0,
      'thigh': 1.05,
      'calf': 1.05,
      'chest': 1.15,
      'back': 1.15,
      'ribs': 1.25,
      'spine': 1.25,
      'neck': 1.3,
      'hand-fingers': 1.3,
    };
    const placeMult = placementMultipliers[placement] || 1.0;

    // Base calculation
    // Scale curve: larger pieces cost less per square inch than small setup pieces
    let basePrice = area * ratePerSqInch;
    if (area > 20) {
      basePrice = 20 * ratePerSqInch + (area - 20) * (ratePerSqInch * 0.65);
    }
    if (area > 50) {
      basePrice = 20 * ratePerSqInch + 30 * (ratePerSqInch * 0.65) + (area - 50) * (ratePerSqInch * 0.5);
    }

    // Minimum studio baseline charge (covers sterile kit, setup, machine wrap, needles, barrier)
    const minCharge = 2500;
    const finalPrice = Math.max(minCharge, Math.round(basePrice * styleMult * compMult * artistMult * placeMult));

    // Price bracket (low - high)
    const lowEstimate = Math.round((finalPrice * 0.9) / 500) * 500;
    const highEstimate = Math.round((finalPrice * 1.15) / 500) * 500;

    // Estimated hours
    let hours = Math.max(1.5, Math.round((area / 4) * compMult * styleMult * 10) / 10);
    if (hours > 20) hours = Math.round(hours);

    return {
      area,
      lowEstimate,
      highEstimate,
      hours,
    };
  }, [width, height, style, complexity, artistTier, placement]);

  const applyPreset = (preset: PresetSize) => {
    setWidth(preset.width);
    setHeight(preset.height);
  };

  const handleSaveEstimate = () => {
    try {
      const estimateData = {
        width,
        height,
        area: calculation.area,
        style,
        complexity,
        artistTier,
        placement,
        priceRange: `₹${calculation.lowEstimate.toLocaleString('en-IN')} - ₹${calculation.highEstimate.toLocaleString('en-IN')}`,
        hours: `${calculation.hours} hrs`,
        savedAt: new Date().toISOString(),
      };
      localStorage.setItem('blacktattooshade_calculator_draft', JSON.stringify(estimateData));
      showToast('Estimate Saved!', 'Your cost configuration was saved to your browser.', 'success');
    } catch (e) {
      showToast('Save Error', 'Could not save estimate to localStorage.', 'error');
    }
  };

  const handleBookWithEstimate = () => {
    const sizeStr = `${width}" × ${height}" (${calculation.area} sq. in.)`;
    const styleLabel = style === 'black-grey' ? 'Black & Grey' : style === 'realism' ? 'Hyper Realism' : style === 'fine-line' ? 'Fine Line' : style;
    navigate(`/book?style=${encodeURIComponent(styleLabel)}&size=${encodeURIComponent(sizeStr)}&placement=${encodeURIComponent(placement)}`);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      
      {/* Header Banner */}
      <section className="relative py-14 md:py-20 border-b border-neutral-850 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono uppercase tracking-widest text-amber-400">
            <Calculator className="w-3.5 h-3.5" />
            <span>Studio Transparency Engine</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white uppercase">
            Tattoo Cost &amp; Time <br />
            <span className="gold-gradient-text">Interactive Calculator</span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Estimate custom tattoo pricing and session duration in real time. Configure dimensions, inking discipline, complexity level, and body placement.
          </p>
        </div>
      </section>

      {/* Calculator Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Quick Sizing Presets */}
            <div>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2.5">
                Quick Size Presets:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PRESET_SIZES.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => applyPreset(preset)}
                    className={`p-2.5 rounded-xl text-left border transition-all text-xs ${
                      width === preset.width && height === preset.height
                        ? 'bg-amber-500/15 border-amber-500 text-white font-semibold'
                        : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    <p className="font-medium truncate">{preset.name}</p>
                    <p className="text-[10px] text-neutral-500 font-mono mt-0.5">{preset.placement}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Dimension Sliders */}
            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono text-neutral-300 uppercase">
                    Approx. Width (Inches)
                  </label>
                  <span className="text-sm font-mono font-bold text-amber-400">
                    {width} inches ({Math.round(width * 2.54)} cm)
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={24}
                  step={0.5}
                  value={width}
                  onChange={(e) => setWidth(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono text-neutral-300 uppercase">
                    Approx. Height (Inches)
                  </label>
                  <span className="text-sm font-mono font-bold text-amber-400">
                    {height} inches ({Math.round(height * 2.54)} cm)
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={0.5}
                  value={height}
                  onChange={(e) => setHeight(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div className="text-xs font-mono text-neutral-400 flex items-center justify-between pt-2 border-t border-neutral-800">
                <span>Calculated Skin Coverage:</span>
                <span className="text-white font-bold">{calculation.area} sq. inches</span>
              </div>
            </div>

            {/* Inking Style */}
            <div>
              <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2.5">
                Inking Style / Discipline:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'minimalist', label: 'Minimalist & Script' },
                  { id: 'fine-line', label: 'Single-Needle Fine Line' },
                  { id: 'black-grey', label: 'Black & Grey Shading' },
                  { id: 'mandala', label: 'Mandala & Dotwork' },
                  { id: 'color', label: 'Color Realism' },
                  { id: 'realism', label: 'Photographic Realism' },
                  { id: 'coverup', label: 'Cover-Up & Scar Camo' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setStyle(s.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      style === s.id
                        ? 'bg-amber-500 text-black font-semibold border-amber-500'
                        : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Detail Complexity */}
            <div>
              <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2.5">
                Artwork Complexity:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {[
                  { id: 'simple', label: 'Simple', desc: 'Clean outline only' },
                  { id: 'moderate', label: 'Moderate', desc: 'Basic midtone shading' },
                  { id: 'intricate', label: 'Intricate', desc: 'Multi-layer texture & depth' },
                  { id: 'masterpiece', label: 'Masterpiece', desc: 'Surgical micro-detail' },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setComplexity(c.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      complexity === c.id
                        ? 'bg-neutral-800 border-amber-500 text-white font-semibold'
                        : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <p className="font-bold text-neutral-200">{c.label}</p>
                    <p className="text-[10px] text-neutral-500 mt-0.5">{c.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Body Placement */}
            <div>
              <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2.5">
                Body Placement Anatomy:
              </label>
              <select
                value={placement}
                onChange={(e) => setPlacement(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-500 font-mono"
              >
                <option value="forearm">Forearm (Standard Tension)</option>
                <option value="bicep">Outer Bicep / Shoulder</option>
                <option value="thigh">Thigh / Outer Leg</option>
                <option value="calf">Calf / Shin</option>
                <option value="chest">Chest / Pectoral Plate (+15%)</option>
                <option value="back">Upper / Center Back (+15%)</option>
                <option value="ribs">Ribcage / Flank (+25% Sensitivity)</option>
                <option value="spine">Spine Line (+25% Sensitivity)</option>
                <option value="neck">Neck / Throat (+30% High Stretch)</option>
                <option value="hand-fingers">Hand / Knuckles (+30% Difficult Surface)</option>
              </select>
            </div>

            {/* Artist Tier */}
            <div>
              <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2.5">
                Preferred Artist Seniority:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'resident', label: 'Resident Artist', sub: 'Krutika Parab / Team' },
                  { id: 'senior', label: 'Senior Artist', sub: 'Amit Rajwadkar (8+ yrs)' },
                  { id: 'master', label: 'Master / Founder', sub: 'Sanket Varhadi (13+ yrs)' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setArtistTier(t.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      artistTier === t.id
                        ? 'bg-amber-500/10 border-amber-500 text-white font-semibold'
                        : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <p className="font-bold text-neutral-200">{t.label}</p>
                    <p className="text-[10px] text-neutral-500 mt-0.5">{t.sub}</p>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Estimate Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  Live Studio Quote
                </span>
                <span className="text-[11px] font-mono text-neutral-500">
                  Dadar West Rates
                </span>
              </div>

              {/* Price Display */}
              <div>
                <span className="text-xs font-mono text-neutral-400">Estimated Project Cost</span>
                <div className="mt-1 flex items-baseline gap-2">
                  <h3 className="text-3xl sm:text-4xl font-heading font-black text-white">
                    ₹{calculation.lowEstimate.toLocaleString('en-IN')} – ₹{calculation.highEstimate.toLocaleString('en-IN')}
                  </h3>
                </div>
                <p className="text-[11px] text-neutral-500 mt-1">
                  *All quotes include sterile disposable needle cartridges, EU REACH inks, barrier wrapping, and SecondSkin medical dressing.
                </p>
              </div>

              {/* Time Display */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-neutral-300">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>Estimated Chair Time:</span>
                </div>
                <span className="font-mono font-bold text-white text-sm">
                  {calculation.hours} Hours {calculation.hours > 8 ? '(Multi-Session)' : ''}
                </span>
              </div>

              {/* Breakdown Details */}
              <div className="space-y-2 text-xs border-t border-neutral-800 pt-4 text-neutral-400">
                <div className="flex justify-between">
                  <span>Selected Dimensions:</span>
                  <span className="text-neutral-200 font-mono">{width}&quot; × {height}&quot; ({calculation.area} sq. in.)</span>
                </div>
                <div className="flex justify-between">
                  <span>Inking Discipline:</span>
                  <span className="text-neutral-200 uppercase font-mono">{style}</span>
                </div>
                <div className="flex justify-between">
                  <span>Placement Sensitivity:</span>
                  <span className="text-neutral-200 uppercase font-mono">{placement}</span>
                </div>
                <div className="flex justify-between">
                  <span>Artist Tier:</span>
                  <span className="text-amber-400 font-mono capitalize">{artistTier}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-3">
                <button
                  onClick={handleBookWithEstimate}
                  className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-heading text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2"
                >
                  <span>Book Consultation With This Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleSaveEstimate}
                  className="w-full py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Bookmark className="w-3.5 h-3.5 text-amber-500" />
                  <span>Save Estimate to Browser</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Ad Placeholder above footer */}
      <AdPlaceholder format="compact" />
    </div>
  );
};
