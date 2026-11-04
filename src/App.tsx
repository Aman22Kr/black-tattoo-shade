/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TattooModal } from './components/TattooModal';
import { ToastContainer } from './components/Toast';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { TattooDetailPage } from './pages/TattooDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { PiercingPage } from './pages/PiercingPage';
import { ArtistsPage } from './pages/ArtistsPage';
import { ArtistDetailPage } from './pages/ArtistDetailPage';
import { AcademyPage } from './pages/AcademyPage';
import { AftercarePage } from './pages/AftercarePage';
import { CalculatorPage } from './pages/CalculatorPage';
import { BookPage } from './pages/BookPage';
import { SavedPage } from './pages/SavedPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <AppProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-500/30 selection:text-amber-200">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/tattoos" element={<GalleryPage />} />
              <Route path="/tattoos/:id" element={<TattooDetailPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/piercing" element={<PiercingPage />} />
              <Route path="/artists" element={<ArtistsPage />} />
              <Route path="/artists/:slug" element={<ArtistDetailPage />} />
              <Route path="/academy" element={<AcademyPage />} />
              <Route path="/aftercare" element={<AftercarePage />} />
              <Route path="/calculator" element={<CalculatorPage />} />
              <Route path="/book" element={<BookPage />} />
              <Route path="/saved" element={<SavedPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <TattooModal />
          <ToastContainer />
        </div>
      </HashRouter>
    </AppProvider>
  );
}
