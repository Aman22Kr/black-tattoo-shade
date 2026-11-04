import React, { useState } from 'react';
import { 
  GraduationCap, 
  Check, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  PackageCheck, 
  Clock, 
  Send,
  BookOpen
} from 'lucide-react';
import { ACADEMY_COURSES } from '../data/academyData';
import { useApp } from '../context/AppContext';
import { VideoPlaceholder } from '../components/VideoPlaceholder';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const AcademyPage: React.FC = () => {
  const { addInquiry } = useApp();
  const [selectedCourse, setSelectedCourse] = useState(ACADEMY_COURSES[0].id);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coursePreference: ACADEMY_COURSES[0].title,
    background: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const activeCourse = ACADEMY_COURSES.find((c) => c.id === selectedCourse) || ACADEMY_COURSES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      return;
    }

    addInquiry({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: `Academy Enrollment: ${formData.coursePreference}`,
      message: `Art Background: ${formData.background} | Notes: ${formData.notes}`,
      type: 'academy',
    });

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 border-b border-neutral-850 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono uppercase tracking-widest text-amber-400">
            <GraduationCap className="w-4 h-4" />
            <span>Master Mentorship &amp; Certification</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white uppercase">
            blacktattooshade <br />
            <span className="gold-gradient-text">Tattoo Training Academy</span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Turn your illustration passion into a lucrative, respected tattooing profession. Hands-on mentorship by founder Sanket Varhadi and senior artists in Dadar West, Mumbai.
          </p>
        </div>
      </section>

      {/* Course Selection Tabs */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-3 mb-10">
          {ACADEMY_COURSES.map((course) => (
            <button
              key={course.id}
              onClick={() => {
                setSelectedCourse(course.id);
                setFormData((prev) => ({ ...prev, coursePreference: course.title }));
              }}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all ${
                selectedCourse === course.id
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {course.title.split(':')[0]} ({course.duration.split(' ')[0]})
            </button>
          ))}
        </div>

        {/* Selected Course Breakdown */}
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8 sm:p-12 space-y-10">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-neutral-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                {activeCourse.level}
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-white mt-1">
                {activeCourse.title}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2 font-mono">
                {activeCourse.duration} • {activeCourse.schedule} • {activeCourse.seatsLimit}
              </p>
            </div>

            <div className="text-left lg:text-right shrink-0">
              <span className="text-xs font-mono text-neutral-500 uppercase">Total Tuition</span>
              <p className="text-2xl sm:text-3xl font-heading font-black text-amber-400 mt-0.5">
                {activeCourse.fee}
              </p>
              <span className="text-[11px] font-mono text-neutral-400">Includes Full Professional Machine Kit</span>
            </div>
          </div>

          {/* Highlights & Modules */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: Highlights & Kit */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-white mb-3">
                  Program Highlights
                </h4>
                <ul className="space-y-2.5 text-xs text-neutral-300">
                  {activeCourse.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-heading font-bold text-white uppercase tracking-wider">
                  <PackageCheck className="w-4 h-4 text-emerald-400" />
                  <span>Equipment Kit Inclusions (Yours to Keep)</span>
                </div>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {activeCourse.includedKit.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-amber-500 font-mono">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Modules Syllabus */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-white mb-3">
                Comprehensive Syllabus
              </h4>

              <div className="space-y-3">
                {activeCourse.modules.map((mod, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-2"
                  >
                    <h5 className="text-xs font-heading font-bold text-amber-400 uppercase tracking-wide">
                      {mod.title}
                    </h5>
                    <ul className="space-y-1 text-xs text-neutral-400 pl-2">
                      {mod.topics.map((t, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <span className="text-neutral-600">-</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Academy Classroom Video Placeholder */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <VideoPlaceholder
          title="Inside the Apprentice Lab: Synthetic Skin Practice & Needle Mechanics"
          duration="11:15"
          subtitle="See how blacktattooshade apprentices learn needle depth, ink viscosity, and sterile sanitation."
          badge="Academy Class Session"
        />
      </section>

      {/* Enrollment Application Form */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-8 sm:p-10">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Apply For Next Batch
            </span>
            <h3 className="text-2xl font-heading font-bold text-white mt-1">
              Enrollment &amp; Syllabus Inquiry
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Batches are restricted to 4–6 students to ensure intensive 1-on-1 mentorship.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-800 text-center space-y-3">
              <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto" />
              <h4 className="text-lg font-heading font-bold text-white">Application Received!</h4>
              <p className="text-xs text-neutral-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our senior academy coordinator will contact you via WhatsApp/Phone at <span className="font-mono text-amber-400">{formData.phone}</span> to schedule an informal portfolio chat or studio visit.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-5 py-2 rounded-xl bg-neutral-900 text-neutral-300 text-xs font-mono border border-neutral-800 hover:text-white"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1">
                    Contact Phone / WhatsApp *
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
                    Preferred Program *
                  </label>
                  <select
                    value={formData.coursePreference}
                    onChange={(e) => setFormData({ ...formData, coursePreference: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    {ACADEMY_COURSES.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1">
                  Artistic Background / Experience (Optional)
                </label>
                <input
                  type="text"
                  value={formData.background}
                  onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                  placeholder="e.g. Sketching, digital illustration, complete beginner, self-taught..."
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1">
                  Questions or Notes for Mentor
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Ask about batch start dates, installment schedules, or syllabus details..."
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-heading text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Academy Enrollment Application</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Ad Placeholder above footer */}
      <AdPlaceholder format="compact" />
    </div>
  );
};
